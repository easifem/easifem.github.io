!> author: Vikas Sharma, Ph. D.
! date: 2025-10-02
! summary: This test follows test1a.F90
!
! Here we check the compatibility of FEDOF for Hierarchical interpolation
! Mesh is linear and field is cubic.

PROGRAM main
USE GlobalData, ONLY: DFP, LGT, I4B
USE BaseType, ONLY: QuadraturePoint_, ElemShapeData_
USE AbstractMesh_Class
USE FEDomain_Class
USE HDF5File_Class
USE ScalarField_Class
USE VectorField_Class
USE FEDOF_Class
USE Display_Method
USE ReallocateUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE StringUtility
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE AbstractFE_Class
USE FieldUtility, ONLY: VectorFieldSetNodeCoord

IMPLICIT NONE

!----------------------------------------------------------------------------
! parameters
!----------------------------------------------------------------------------

CHARACTER(*), PARAMETER :: tomlFileName = "./test3.toml"
LOGICAL(LGT), PARAMETER :: yes = .TRUE., no = .FALSE.

!----------------------------------------------------------------------------
! variables
!----------------------------------------------------------------------------

TYPE(FEDomain_) :: dom
TYPE(ScalarField_) :: u
TYPE(VectorField_) :: nodeCoord
TYPE(FEDOF_) :: fedof, geofedof
TYPE(QuadraturePoint_) :: qp
TYPE(ElemShapeData_) :: elemsd
INTEGER(I4B) :: nrow, ncol
LOGICAL(LGT) :: isShow

!----------------------------------------------------------------------------
! pointers and allocatables
!----------------------------------------------------------------------------

CLASS(AbstractMesh_), POINTER :: cellMesh => NULL(), boundaryMesh => NULL()
CLASS(AbstractFE_), POINTER :: feptr => NULL()
INTEGER(I4B), ALLOCATABLE :: con(:), orient(:, :)

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
! fedof: Getting quadrature points
isShow = .TRUE.
!----------------------------------------------------------------------------

CALL fedof%GetQuadraturePoints(quad=qp, globalElement=1, islocal=yes)
IF (isShow) CALL Display(qp, "Quadrature points: ")
CALL fedof%GetLocalElemShapeData(elemsd=elemsd, quad=qp, globalElement=1, &
                                 islocal=yes)
CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "ElemshapeData: ")


END PROGRAM main
