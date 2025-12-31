!> author: Vikas Sharma, Ph. D.
! date: 2025-11-02
! summary: Testing GetMeshField method

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
USE UserFunction_Class
USE FieldOpt_Class, ONLY: TypeFieldOpt
USE EngineOpt_Class, ONLY: TypeEngineOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeFEVariableOpt, &
                    TypeInterpolationOpt

IMPLICIT NONE

CHARACTER(*), PARAMETER :: &
  tomlFileName = "./_GetMeshField1.toml", &
  engine = TypeEngineOpt%native_serial, &
  myName = "main", &
  modName = "_GetMeshField_test_1.F90"

INTEGER(I4B), PARAMETER :: &
  nsd = 3, varType = TypeFEVariableOpt%Space, &
  fieldType = TypeFieldOpt%normal, &
  defineOn = TypeFieldOpt%nodal, &
  order(3) = 19, &
  ipType(3) = TypeInterpolationOpt%Equidistance

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(MeshField_) :: nodeCoordField, uMeshField
TYPE(FEDOF_) :: fedof, geofedof
TYPE(ScalarField_) :: u
TYPE(UserFunction_) :: func
CLASS(AbstractFE_), POINTER :: feptr

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")
CALL u%ImportFromToml(fedof=fedof, geofedof=geofedof, dom=dom, &
                      fileName=tomlFileName, tomlName="u")
mesh => dom%GetMeshPointer()

! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
! luaFunctionName, returnShape
CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                   argType=TypeFEVariableOpt%space, numArgs=4, &
                   numReturns=1)
CALL func%Set(scalarFunction=scalarFunc)

CALL u%Set(func=func)

CALL InitiateInterpolationPoints( &
  obj=nodeCoordField, order=order, ipType=ipType, fedof=fedof, &
  mesh=mesh, engine=engine)

CALL u%GetMeshField(meshField=uMeshField, order=order, ipType=ipType)

CALL uMeshField%WriteData(filename="GetMeshField_test_1.vtp", &
                          nodeCoordField=nodeCoordField)

CONTAINS

!----------------------------------------------------------------------------
!                                                                scalarFunc2
!----------------------------------------------------------------------------

PURE FUNCTION scalarFunc(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ! ans = 1.0_DFP
  ans = (x(1) - 0.5_DFP)**2 + (x(2) - 0.5_DFP)**2
  ! ans = y + y**2 + y**3
END FUNCTION scalarFunc

END PROGRAM main
