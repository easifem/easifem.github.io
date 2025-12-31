!> author: Vikas Sharma, Ph. D.
! date: 2024-06-05
! summary: SetByFunction method is tested here

PROGRAM main
USE AbstractField_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE GlobalData
USE ScalarField_Class
USE FEDOF_Class
USE Display_Method
USE ApproxUtility
USE Test_Method
USE UserFunction_Class
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_, &
                    TypeFEVariableOpt, &
                    iface_ScalarFunction

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./SetByFunction.toml", &
                           myName = "main", &
                           modName = "_SetByFunction_test_1.F90"

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof, geofedof
TYPE(ScalarField_) :: u
TYPE(UserFunction_) :: func

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")
CALL u%ImportFromToml(fedof=fedof, geofedof=geofedof, dom=dom, &
                      fileName=tomlFileName, tomlName="u")

mesh => dom%GetMeshPointer()

CALL test1

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CHARACTER(*), PARAMETER :: testName = "test1()"
  INTEGER(I4B) :: ii, tNodes
  REAL(DFP) :: areal, ans
  ! LOGICAL(LGT) :: isok

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=4, &
                     numReturns=1)
  CALL func%Set(scalarFunction=scalarFunc2)

  CALL u%Set(0.0_DFP)
  CALL u%Set(func=func)

  tNodes = u%SIZE()

  DO ii = 1, tNodes
    areal = REAL(ii, DFP)
    CALL u%Get(globalNode=ii, islocal=.TRUE., VALUE=ans)
    ! CALL Display(ans, "ans: ")
  END DO
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                   Contains
!----------------------------------------------------------------------------

PURE FUNCTION scalarFunc1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = 1.0_DFP
END FUNCTION scalarFunc1

!----------------------------------------------------------------------------
!                                                                scalarFunc2
!----------------------------------------------------------------------------

PURE FUNCTION scalarFunc2(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ! ans = 1.0_DFP
  ans = x(1)**2 + x(2)**2
  ! ans = y + y**2 + y**3
END FUNCTION scalarFunc2

!----------------------------------------------------------------------------
!                                                                 scalarFunc3
!----------------------------------------------------------------------------

PURE FUNCTION scalarFunc3(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3
END FUNCTION scalarFunc3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

PURE FUNCTION scalarFunc4(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3 + x(1)**4
END FUNCTION scalarFunc4

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

PURE FUNCTION scalarFunc5(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3 + x(1)**4 + x(1)**5
END FUNCTION scalarFunc5

END PROGRAM main

