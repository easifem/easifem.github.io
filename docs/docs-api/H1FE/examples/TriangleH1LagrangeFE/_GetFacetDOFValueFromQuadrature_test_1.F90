!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE TriangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

USE Display_Method

USE Test_Method
USE ApproxUtility

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2
CALL test3

CONTAINS

PURE ELEMENTAL FUNCTION func1(x, y) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x, y
  REAL(DFP) :: ans
  ans = 1.0_DFP
  ans = x**2 + y**2
  ! ans = y + y**2 + y**3
END FUNCTION func1

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 3), tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 3), interpolCoord(3, 50), funcVal(50), &
               ans(50), exactAns(50), massMat(10, 10)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 4, 5, 6]
  INTEGER(I4B), PARAMETER :: order = 4
  LOGICAL(LGT) :: isok

  CALL Display("test1: elemsd%order=4")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 1

  feptr => TriangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=TypePolynomialOpt%monomial, &
           faceOrient=faceOrient, &
           quadratureType=TypeQuadratureOpt%GaussLegendre, &
           quadratureOrder=2 * order)

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:3), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  exactAns(1:SIZE(nptrs)) = func1(x=interpolCoord(1, nptrs), &
                                  y=interpolCoord(2, nptrs))

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

  funcVal(1:elemsd%nips) = func1(x=elemsd%coord(1, 1:elemsd%nips), &
                                 y=elemsd%coord(2, 1:elemsd%nips))

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromQuadrature( &
    elemsd=elemsd, facetElemsd=facetElemsd, &
    xij=refElemCoord, localFaceNumber=iface, func=funcVal, &
    ans=ans, tsize=tsize, massMat=massMat, ipiv=ipiv)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, "test-1:")

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 3), tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 3), interpolCoord(3, 50), funcVal(50), &
               ans(50), exactAns(50), massMat(10, 10)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  LOGICAL(LGT) :: isok
  INTEGER(I4B), PARAMETER :: order = 4
  INTEGER(I4B), PARAMETER :: iface = 2
  INTEGER(I4B), PARAMETER :: nptrs(5) = [2, 3, 7, 8, 9]

  CALL Display("test2: elemsd%order=4")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 1

  feptr => TriangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=TypePolynomialOpt%monomial, &
           faceOrient=faceOrient, &
           quadratureType=TypeQuadratureOpt%GaussLegendre, &
           quadratureOrder=2 * order)

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:3), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  exactAns(1:SIZE(nptrs)) = func1(x=interpolCoord(1, nptrs), &
                                  y=interpolCoord(2, nptrs))

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

  funcVal(1:elemsd%nips) = func1(x=elemsd%coord(1, 1:elemsd%nips), &
                                 y=elemsd%coord(2, 1:elemsd%nips))

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromQuadrature( &
    elemsd=elemsd, facetElemsd=facetElemsd, &
    xij=refElemCoord, localFaceNumber=iface, func=funcVal, &
    ans=ans, tsize=tsize, massMat=massMat, ipiv=ipiv)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, "test-1:")

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                 test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 3), tsize, ipiv(10)
  REAL(DFP) :: refElemCoord(3, 3), interpolCoord(3, 50), funcVal(50), &
               ans(50), exactAns(50), massMat(10, 10)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  INTEGER(I4B), PARAMETER :: order = 4
  LOGICAL(LGT) :: isok
  INTEGER(I4B), PARAMETER :: iface = 3
  INTEGER(I4B), PARAMETER :: nptrs(5) = [3, 1, 10, 11, 12]

  CALL Display("test3: elemsd%order=4")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 1

  feptr => TriangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=TypePolynomialOpt%monomial, &
           faceOrient=faceOrient, &
           quadratureType=TypeQuadratureOpt%GaussLegendre, &
           quadratureOrder=2 * order)

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  ! Getting interpolation points
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:3), ans=interpolCoord, nrow=nrow, ncol=ncol, &
    order=[order], ipType=[TypeInterpolationOpt%equidistance])

  exactAns(1:SIZE(nptrs)) = func1(x=interpolCoord(1, nptrs), &
                                  y=interpolCoord(2, nptrs))

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

  funcVal(1:elemsd%nips) = func1(x=elemsd%coord(1, 1:elemsd%nips), &
                                 y=elemsd%coord(2, 1:elemsd%nips))

  ! obj, elemsd, facetElemsd, xij, localFaceNumber, func, ans, tsize
  CALL feptr%GetFacetDOFValueFromQuadrature( &
    elemsd=elemsd, facetElemsd=facetElemsd, &
    xij=refElemCoord, localFaceNumber=iface, func=funcVal, &
    ans=ans, tsize=tsize, massMat=massMat, ipiv=ipiv)

  isok = ALL(ans(1:tsize) .APPROXEQ.exactAns(1:tsize))
  CALL OK(isok, "test-1:")

  IF (.NOT. isok) THEN
    CALL Display(ans(1:tsize), "ans: ", full=.TRUE.)
    CALL Display(exactAns(1:tsize), "exactAns: ", full=.TRUE.)
  END IF
END SUBROUTINE test3

END PROGRAM main
