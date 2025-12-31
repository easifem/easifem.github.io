!> author: Vikas Sharma, Ph. D.
! date: 2025-10-02
! summary: This test follows test1a.F90
!
! Here we check the compatibility of FEDOF for Hierarchical interpolation
! Mesh is linear and field is cubic.

PROGRAM main
USE AbstractMesh_Class
USE FEDomain_Class
USE HDF5File_Class
USE ScalarField_Class
USE VectorField_Class
USE FEDOF_Class
USE Display_Method
USE ReallocateUtility
USE StringUtility
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE AbstractFE_Class
USE VTKPlot_Class

USE GlobalData, ONLY: DFP, LGT, I4B, FMT_NODES
USE BaseType, ONLY: QuadraturePoint_, ElemShapeData_, TypeInterpolationOpt
USE FieldUtility, ONLY: VectorFieldSetNodeCoord
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

!----------------------------------------------------------------------------
! parameters
!----------------------------------------------------------------------------

CHARACTER(*), PARAMETER :: tomlFileName = "./test5.toml"
LOGICAL(LGT), PARAMETER :: yes = .TRUE., no = .FALSE.
INTEGER(I4B), PARAMETER :: plotDataOrder = 19 !! 39

!----------------------------------------------------------------------------
! variables
!----------------------------------------------------------------------------

TYPE(FEDomain_) :: dom
TYPE(ScalarField_) :: u
TYPE(VectorField_) :: nodeCoord
TYPE(FEDOF_) :: fedof, geofedof
TYPE(QuadraturePoint_) :: qp
TYPE(VTKPlot_) :: plot
TYPE(ElemShapeData_) :: elemsd, geoelemsd
INTEGER(I4B) :: ii, jj, tsize, iel, tElements, tfedof, tgeocon, &
                elemCoord_i, elemCoord_j, refelemCoord_i, refelemCoord_j, &
                elemIP_j, elemIP_i, tfecon, offset, xij_i, cellOrder(3), &
                tCellOrder, faceOrder(3, 8), tfaceOrder_i, tfaceOrder_j
LOGICAL(LGT) :: isShow

!----------------------------------------------------------------------------
! pointers and allocatables
!----------------------------------------------------------------------------

CLASS(AbstractMesh_), POINTER :: cellMesh => NULL(), boundaryMesh => NULL()
CLASS(AbstractFE_), POINTER :: feptr, geofeptr
REAL(DFP), ALLOCATABLE :: elemCoord(:, :), elemIP(:, :), refelemCoord(:, :), &
                          xij(:, :), shapeFunc(:, :)
INTEGER(I4B), ALLOCATABLE :: fecon(:), geocon(:)

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
isShow = .FALSE.

!----------------------------------------------------------------------------
! Initiate Domain ans mesh
!----------------------------------------------------------------------------

CALL dom%ImportFromToml(tomlName="domain", filename=tomlFileName)
IF (isShow) CALL dom%DisplayDomainInfo(msg="DomainInfo: ")

cellMesh => dom%GetMeshPointer()
IF (isShow) CALL cellMesh%DisplayMeshInfo(msg="Cell Mesh Info:")

!----------------------------------------------------------------------------
! Initiate ScalarField and FEDOF
!----------------------------------------------------------------------------

CALL u%ImportFromToml(tomlName="u", fedof=fedof, dom=dom, &
                      filename=tomlFileName)
IF (isShow) CALL u%Display(msg="ScalarField u: ")
IF (isShow) CALL fedof%Display(msg="FEDOF info: ")

!----------------------------------------------------------------------------
! Initiate nodeCoord
!----------------------------------------------------------------------------
CALL nodeCoord%ImportFromToml(tomlName="nodeCoord", &
                              fedof=geofedof, dom=dom, &
                              filename=tomlFileName)

CALL nodeCoord%SetName("nodeCoord")
CALL nodeCoord%Set(VALUE=0.0_DFP)
CALL VectorFieldSetNodeCoord(obj=nodeCoord, mesh=cellMesh)

IF (isShow) CALL nodeCoord%Display(msg="nodeCoord: ")
IF (isShow) CALL geofedof%Display(msg="geofedof: ")

!----------------------------------------------------------------------------
! Interpolation points
!----------------------------------------------------------------------------

tsize = geofedof%GetMaxTotalConnectivity()
CALL Reallocate(geocon, tsize)
CALL Reallocate(elemCoord, 3, tsize)
CALL Reallocate(refelemCoord, 3, tsize)

tsize = fedof%GetMaxTotalConnectivity()
CALL Reallocate(fecon, tsize)

!----------------------------------------------------------------------------
! Getting total interpolation points
!----------------------------------------------------------------------------

tElements = cellMesh%GetTotalElements()
tfedof = fedof%GetTotalDOF()

xij_i = 0
DO iel = 1, tElements
  feptr => fedof%GetFEPointer(globalElement=iel, islocal=yes)
  ii = feptr%GetTotalInterpolationPoints( &
       order=[plotDataOrder], ipType=[TypeInterpolationOpt%Equidistance])
  xij_i = xij_i + ii
END DO

CALL Reallocate(xij, xij_i, 3)
CALL Reallocate(shapeFunc, xij_i, tfedof)

offset = 0

DO iel = 1, tElements
  CALL geofedof%GetConnectivity_(ans=geocon, tsize=tgeocon, &
                                 globalElement=iel, islocal=yes, opt="A")

  CALL fedof%GetConnectivity_(globalElement=iel, islocal=yes, &
                              ans=fecon, tsize=tfecon, opt="A")

  CALL nodeCoord%Get(VALUE=elemCoord, nrow=elemCoord_i, ncol=elemCoord_j, &
                     globalNode=geocon(1:tgeocon), storageFMT=FMT_NODES, &
                     islocal=yes)

  IF (isShow) CALL Display(geocon(1:tgeocon), "geocon: ", orient="R")
  IF (isShow) CALL Display(elemCoord(1:elemCoord_i, 1:elemCoord_j), &
                           "elemCoord: ")

  CALL fedof%SetFE(globalElement=iel, islocal=yes)
  CALL geofedof%SetFE(globalElement=iel, islocal=yes)

  feptr => fedof%GetFEPointer(globalElement=iel, islocal=yes)
  geofeptr => geofedof%GetFEPointer(globalElement=iel, islocal=yes)

  CALL feptr%GetRefElemCoord(ans=refelemCoord, nrow=refelemCoord_i, &
                             ncol=refelemCoord_j)

  elemIP_j = feptr%GetTotalInterpolationPoints( &
             order=[plotDataOrder], &
             ipType=[TypeInterpolationOpt%Equidistance])

  CALL Reallocate(elemIP, 3, elemIP_j, isExpand=.TRUE., expandFactor=2)

  CALL feptr%GetInterpolationPoints( &
    xij=refelemCoord, ans=elemIP, nrow=elemIP_i, ncol=elemIP_j, &
    order=[plotDataOrder], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(obj=qp, points=elemIP(1:3, 1:elemIP_j))

  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=qp)

  CALL geofeptr%GetLocalElemShapeData(elemsd=geoelemsd, quad=qp)

  CALL feptr%GetGlobalElemShapeData(elemsd=elemsd, xij=elemCoord, &
                                    geoElemsd=geoelemsd)

  DO ii = 1, elemsd%nns
    DO jj = 1, elemsd%nips
      shapeFunc(offset + jj, fecon(ii)) = elemsd%N(ii, jj)
      xij(offset + jj, 1) = elemsd%coord(1, jj)
      xij(offset + jj, 2) = elemsd%coord(2, jj)
    END DO
  END DO

  offset = offset + elemsd%nips

END DO

CALL plot%Initiate()

DO ii = 1, tfedof
  CALL plot%Scatter3D(x=xij(1:xij_i, 1), &
                      y=xij(1:xij_i, 2), &
                      z=shapeFunc(1:xij_i, ii), label="N", &
                      filename="Order4_Elem_"//ToString(ii)//".vtp")
END DO

CALL plot%DEALLOCATE()

END PROGRAM main
