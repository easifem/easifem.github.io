!> author: Vikas Sharma, Ph. D.
! date: 2025-10-27
! summary: Testing initiate method for MeshField_Class

PROGRAM main
USE AbstractField_Class
USE AbstractMeshField_Class
USE MeshField_Class
USE FPL
USE GlobalData
USE FEDomain_Class
USE AbstractMesh_Class
USE ScalarField_Class
USE FEDOF_Class
USE AbstractFE_Class
USE Display_Method
USE ReallocateUtility, ONLY: Reallocate
USE FieldOpt_Class, ONLY: TypeFieldOpt
USE BaseType, ONLY: TypeFEVariableOpt, &
                    FEVariable_, &
                    TypeFEVariableVector, &
                    TypeFEVariableSpace, &
                    TypeInterpolationOpt
USE EngineOpt_Class, ONLY: TypeEngineOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE FEVariable_Method, ONLY: NodalVariable, &
                             FEVariable_Set => Set

IMPLICIT NONE

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(MeshField_) :: obj
TYPE(FEVariable_) :: fevar
CHARACTER(*), PARAMETER :: tomlFileName = "./config.toml", &
                           engine = TypeEngineOpt%native_serial, &
                           myName = "main", &
                           modName = "_Initiate_test_1.F90"

INTEGER(I4B), PARAMETER :: nsd = 3, varType = TypeFEVariableOpt%Space, &
                           fieldType = TypeFieldOpt%normal, &
                           defineOn = TypeFieldOpt%nodal, &
                           order(3) = 9, &
                           ipType(3) = TypeInterpolationOpt%Equidistance
INTEGER(I4B) :: maxCon, tElements, iel, xij_i, xij_j, maxXijCon
REAL(DFP) :: elemCoord(3, 8)
REAL(DFP), ALLOCATABLE :: xij(:, :)
TYPE(FEDOF_) :: fedof, geofedof
TYPE(ScalarField_) :: u
CLASS(AbstractFE_), POINTER :: feptr

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")
CALL u%ImportFromToml(fedof=fedof, geofedof=geofedof, dom=dom, &
                      fileName=tomlFileName, tomlName="u")

mesh => dom%GetMeshPointer()
tElements = mesh%GetTotalElements()
maxCon = fedof%GetMaxTotalConnectivity()
maxXijCon = 0

DO iel = 1, tElements
  ! CALL fedof%SetFE(globalElement=iel, islocal=.TRUE.)
  feptr => fedof%GetFEPointer(globalElement=iel, islocal=.TRUE.)
  xij_j = feptr%GetTotalInterpolationPoints(order=order, ipType=ipType)
  maxXijCon = MAX(maxXijCon, xij_j)
END DO

CALL VectorMeshFieldInitiate( &
  obj=obj, name="xij", fieldType=fieldType, varType=varType, &
  engine=engine, defineOn=defineOn, spaceCompo=nsd, nns=maxXijCon, &
  mesh=mesh)

CALL Reallocate(xij, 3, maxXijCon)
fevar = NodalVariable(val=xij, rank=TypeFEVariableVector, &
                      varType=TypeFEVariableSpace)

DO iel = 1, tElements
  CALL fedof%SetFE(globalElement=iel, islocal=.TRUE.)

  feptr => fedof%GetFEPointer(globalElement=iel, islocal=.TRUE.)

  CALL feptr%GetInterpolationPoints( &
    xij=elemCoord, ans=xij, nrow=xij_i, ncol=xij_j, order=order, &
    ipType=ipType)

  CALL FEVariable_Set( &
    obj=fevar, val=xij(1:3, 1:xij_j), rank=TypeFEVariableVector, &
    vartype=TypeFEVariableSpace, scale=1.0_DFP, addContribution=.FALSE.)

  CALL obj%Insert(globalElement=iel, islocal=.TRUE., fevar=fevar)
END DO

CALL obj%Display(msg="MeshField info: ")

END PROGRAM main
