!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1HierarchicalFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE UserFunction_Class
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_, &
                    TypeFEVariableOpt, &
                    iface_ScalarFunction

USE Display_Method
USE Test_Method
USE ApproxUtility
USE LobattoPolynomialUtility

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2
CALL test3
CALL test4
CALL test5
CALL test6

CONTAINS

PURE FUNCTION scalarFunc1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  REAL(DFP) :: a
  a = x(1)
  ans = LobattoEval(n=0, x=a)
END FUNCTION scalarFunc1

PURE FUNCTION scalarFunc2(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  REAL(DFP) :: a
  a = x(1)
  ans = LobattoEval(n=1, x=a)
END FUNCTION scalarFunc2

PURE FUNCTION scalarFunc3(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans

  REAL(DFP) :: a
  a = x(1)
  ans = LobattoEval(n=2, x=a)
END FUNCTION scalarFunc3

PURE FUNCTION scalarFunc4(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans

  REAL(DFP) :: a
  a = x(1)
  ans = LobattoEval(n=3, x=a)
END FUNCTION scalarFunc4

PURE FUNCTION scalarFunc5(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans

  REAL(DFP) :: a
  a = x(1)
  ans = LobattoEval(n=4, x=a)
END FUNCTION scalarFunc5

PURE FUNCTION scalarFunc6(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans

  REAL(DFP) :: a
  a = x(1)
  ans = LobattoEval(n=0, x=a) + &
        LobattoEval(n=1, x=a) + &
        LobattoEval(n=2, x=a) + &
        2.0_DFP * LobattoEval(n=3, x=a) + &
        3.0_DFP * LobattoEval(n=4, x=a)
END FUNCTION scalarFunc6

!----------------------------------------------------------------------------
!                                                                 test1
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 2025-10-20
! summary:  This test is like test1 but in this case we check onlyFaceBubble

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol, tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1
  ! PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)
  CHARACTER(*), PARAMETER :: testname = "test1"
  LOGICAL(LGT) :: isok

  ! CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  ! scalarFunction => scalarFunc1
  CALL func%Set(scalarFunction=scalarFunc1)

  cellOrder = 1
  faceOrder(1:3, 1:4) = 1

  cellOrient = 1
  faceOrient(1:3, 1:4) = 1
  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  !! Only internal points
  exactAns = 0.0_DFP

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=order)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromUserFunction( &
    elemsd=elemsd, facetElemsd=facetElemsd, xij=refElemCoord, &
    localFaceNumber=iface, func=func, ans=ans, tsize=tsize, massMat=massMat, &
    ipiv=ipiv, funcValue=funcValue, onlyFaceBubble=.TRUE.)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                     test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1
  ! PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)
  CHARACTER(*), PARAMETER :: testname = "test2"
  LOGICAL(LGT) :: isok

  ! CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  ! scalarFunction => scalarFunc1
  CALL func%Set(scalarFunction=scalarFunc2)

  cellOrder = 1
  faceOrder(1:3, 1:4) = 1

  cellOrient = 1
  faceOrient(1:3, 1:4) = 1
  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  !! Only internal points
  exactAns = 0.0_DFP

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=order)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromUserFunction( &
    elemsd=elemsd, facetElemsd=facetElemsd, xij=refElemCoord, &
    localFaceNumber=iface, func=func, ans=ans, tsize=tsize, massMat=massMat, &
    ipiv=ipiv, funcValue=funcValue, onlyFaceBubble=.TRUE.)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                     test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: nrow, ncol, tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)
  CHARACTER(*), PARAMETER :: testname = "test3"
  LOGICAL(LGT) :: isok

  ! CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  CALL func%Set(scalarFunction=scalarFunc3)

  cellOrder = 1
  faceOrder(1:3, 1:4) = 1

  cellOrient = 1
  faceOrient(1:3, 1:4) = 1
  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  !! Only internal points
  exactAns = 0.0_DFP
  exactAns(1) = 1.0_DFP

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=order)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromUserFunction( &
    elemsd=elemsd, facetElemsd=facetElemsd, xij=refElemCoord, &
    localFaceNumber=iface, func=func, ans=ans, tsize=tsize, massMat=massMat, &
    ipiv=ipiv, funcValue=funcValue, onlyFaceBubble=.TRUE.)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                     test3
!----------------------------------------------------------------------------

SUBROUTINE test4
  INTEGER(I4B) :: nrow, ncol, tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1
  ! PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)
  CHARACTER(*), PARAMETER :: testname = "test4"
  LOGICAL(LGT) :: isok

  ! CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  ! scalarFunction => scalarFunc1
  CALL func%Set(scalarFunction=scalarFunc4)

  cellOrder = 1
  faceOrder(1:3, 1:4) = 1

  cellOrient = 1
  faceOrient(1:3, 1:4) = 1
  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  !! Only internal points
  exactAns = 0.0_DFP
  exactAns(2) = 1.0_DFP

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=order)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromUserFunction( &
    elemsd=elemsd, facetElemsd=facetElemsd, xij=refElemCoord, &
    localFaceNumber=iface, func=func, ans=ans, tsize=tsize, massMat=massMat, &
    ipiv=ipiv, funcValue=funcValue, onlyFaceBubble=.TRUE.)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test4

!----------------------------------------------------------------------------
!                                                                     test2
!----------------------------------------------------------------------------

SUBROUTINE test5
  INTEGER(I4B) :: nrow, ncol, tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1
  ! PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)
  CHARACTER(*), PARAMETER :: testname = "test5"
  LOGICAL(LGT) :: isok

  ! CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  ! scalarFunction => scalarFunc1
  CALL func%Set(scalarFunction=scalarFunc5)

  cellOrder = 1
  faceOrder(1:3, 1:4) = 1

  cellOrient = 1
  faceOrient(1:3, 1:4) = 1
  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  !! Only internal points
  exactAns = 0.0_DFP
  exactAns(3) = 1.0_DFP

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=order)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromUserFunction( &
    elemsd=elemsd, facetElemsd=facetElemsd, xij=refElemCoord, &
    localFaceNumber=iface, func=func, ans=ans, tsize=tsize, massMat=massMat, &
    ipiv=ipiv, funcValue=funcValue, onlyFaceBubble=.TRUE.)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test5

!----------------------------------------------------------------------------
!                                                                 test6
!----------------------------------------------------------------------------

SUBROUTINE test6
  INTEGER(I4B) :: nrow, ncol, tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1
  ! PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)
  CHARACTER(*), PARAMETER :: testname = "test6"
  LOGICAL(LGT) :: isok

  ! CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  ! scalarFunction => scalarFunc1
  CALL func%Set(scalarFunction=scalarFunc6)

  cellOrder = 1
  faceOrder(1:3, 1:4) = 1

  cellOrient = 1
  faceOrient(1:3, 1:4) = 1
  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  !! Only internal points
  exactAns(1:3) = [1.0_DFP, 2.0_DFP, 3.0_DFP]

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=order)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromUserFunction( &
    elemsd=elemsd, facetElemsd=facetElemsd, xij=refElemCoord, &
    localFaceNumber=iface, func=func, ans=ans, tsize=tsize, massMat=massMat, &
    ipiv=ipiv, funcValue=funcValue, onlyFaceBubble=.TRUE.)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test6

END PROGRAM main
