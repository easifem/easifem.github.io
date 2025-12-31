!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
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

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2
CALL test3
CALL test4
CALL test5

CONTAINS

PURE FUNCTION scalarFunc1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = 1.0_DFP
END FUNCTION scalarFunc1

PURE FUNCTION scalarFunc2(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ! ans = 1.0_DFP
  ans = x(1)**2 + x(2)**2
  ! ans = y + y**2 + y**3
END FUNCTION scalarFunc2

PURE FUNCTION scalarFunc3(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3
END FUNCTION scalarFunc3

PURE FUNCTION scalarFunc4(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3 + x(1)**4
END FUNCTION scalarFunc4

PURE FUNCTION scalarFunc5(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3 + x(1)**4 + x(1)**5
END FUNCTION scalarFunc5

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), tsize, ii, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), args(4), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  CHARACTER(*), PARAMETER :: testname = "test1"
  LOGICAL(LGT) :: isok

  CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  ! scalarFunction => scalarFunc1
  CALL func%Set(scalarFunction=scalarFunc1)

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  DO ii = 1, SIZE(nptrs)
    args = 0.0_DFP
    args(1) = interpolCoord(1, nptrs(ii))
    args(2) = interpolCoord(2, nptrs(ii))
    CALL func%GetScalarValue(args=args, val=exactAns(ii))
  END DO

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
    ipiv=ipiv, funcValue=funcValue)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), tsize, ii, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), args(4), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  CHARACTER(*), PARAMETER :: testname = "test2"
  LOGICAL(LGT) :: isok

  CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  CALL func%Set(scalarFunction=scalarFunc2)

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  DO ii = 1, SIZE(nptrs)
    args = 0.0_DFP
    args(1) = interpolCoord(1, nptrs(ii))
    args(2) = interpolCoord(2, nptrs(ii))
    CALL func%GetScalarValue(args=args, val=exactAns(ii))
  END DO

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
    ipiv=ipiv, funcValue=funcValue)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                      test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), tsize, ii, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), args(4), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  CHARACTER(*), PARAMETER :: testname = "test3"
  LOGICAL(LGT) :: isok

  CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  CALL func%Set(scalarFunction=scalarFunc3)

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  DO ii = 1, SIZE(nptrs)
    args = 0.0_DFP
    args(1) = interpolCoord(1, nptrs(ii))
    args(2) = interpolCoord(2, nptrs(ii))
    CALL func%GetScalarValue(args=args, val=exactAns(ii))
  END DO

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
    ipiv=ipiv, funcValue=funcValue)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                      test4
!----------------------------------------------------------------------------

SUBROUTINE test4
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), tsize, ii, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), args(4), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  CHARACTER(*), PARAMETER :: testname = "test4"
  LOGICAL(LGT) :: isok

  CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  CALL func%Set(scalarFunction=scalarFunc4)

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  DO ii = 1, SIZE(nptrs)
    args = 0.0_DFP
    args(1) = interpolCoord(1, nptrs(ii))
    args(2) = interpolCoord(2, nptrs(ii))
    CALL func%GetScalarValue(args=args, val=exactAns(ii))
  END DO

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
    ipiv=ipiv, funcValue=funcValue)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, testname)

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test4

!----------------------------------------------------------------------------
!                                                                      test5
!----------------------------------------------------------------------------

SUBROUTINE test5
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), tsize, ii, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 4), interpolCoord(3, 50), &
               ans(50), exactAns(50), args(4), massMat(10, 10), &
               funcValue(50)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(UserFunction_) :: func, func1

  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
  INTEGER(I4B), PARAMETER :: order = 4
  CHARACTER(*), PARAMETER :: testname = "test5"
  LOGICAL(LGT) :: isok

  CALL Display(testname)

  ! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
  ! luaFunctionName, returnShape
  CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                     argType=TypeFEVariableOpt%space, numArgs=3, &
                     numReturns=1)
  CALL func%Set(scalarFunction=scalarFunc4)

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = +1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2 * order])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  DO ii = 3, SIZE(nptrs)
    args = 0.0_DFP
    args(1) = interpolCoord(1, nptrs(ii))
    args(2) = interpolCoord(2, nptrs(ii))
    CALL func%GetScalarValue(args=args, val=exactAns(ii - 2))
  END DO

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

END PROGRAM main
