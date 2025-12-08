!> author: Vikas Sharma, Ph. D.
! date: 2025-10-27
! summary: In this test we will construct Vector MeshField of
!          interpolation points and write these data to a VTK file.
!          The implementation is similar to the
!          InitiateInterpolationPoints

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
USE EngineOpt_Class, ONLY: TypeEngineOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE FEVariable_Method, ONLY: NodalVariable, &
                             FEVariable_Set => Set
USE BaseType, ONLY: TypeFEVariableOpt, &
                    FEVariable_, &
                    TypeFEVariableVector, &
                    TypeFEVariableSpace, &
                    TypeInterpolationOpt

IMPLICIT NONE

CHARACTER(*), PARAMETER :: &
  tomlFileName = "./InitiateInterpolationPoints1.toml", &
  engine = TypeEngineOpt%native_serial, &
  myName = "main", &
  modName = "_InitiateInterpolationPoints_test_1.F90"

INTEGER(I4B), PARAMETER :: &
  nsd = 3, varType = TypeFEVariableOpt%Space, &
  fieldType = TypeFieldOpt%normal, &
  defineOn = TypeFieldOpt%nodal, &
  order(3) = 9, &
  ipType(3) = TypeInterpolationOpt%Equidistance

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(MeshField_) :: obj
TYPE(FEDOF_) :: fedof, geofedof
TYPE(ScalarField_) :: u
CLASS(AbstractFE_), POINTER :: feptr

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")
CALL u%ImportFromToml(fedof=fedof, geofedof=geofedof, dom=dom, &
                      fileName=tomlFileName, tomlName="u")
mesh => dom%GetMeshPointer()
CALL InitiateInterpolationPoints(obj=obj, order=order, ipType=ipType, &
                                 fedof=fedof, mesh=mesh, engine=engine)

CALL obj%WriteData(filename="InitiateInterpolationPoints_test_1.vtp", &
                   nodeCoordField=obj)

END PROGRAM main
