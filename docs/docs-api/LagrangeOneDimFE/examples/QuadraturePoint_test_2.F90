! In this exmple we test Lagrange finite element on Line element.
! Interpolation points are equidistance.

! MODULE FUNCTION obj_LagrangeFEPointer(elemType, nsd, baseContinuity, &
! baseInterpolation, ipType, basisType, alpha, beta, lambda, order, &
! anisoOrder) RESULT(ans)

! MODULE SUBROUTINE obj_GetQuadraturePoints1(obj, quad, quadratureType, &
!                                            order, alpha, beta, lambda)

PROGRAM main
USE GlobalData
USE ReferenceElement_Method
USE BaseType
USE Display_Method
USE AbstractFE_Class
USE LagrangeFE_Class
USE QuadraturePoint_Method

IMPLICIT NONE
TYPE(QuadraturePoint_) :: quad
CLASS(AbstractFE_), POINTER :: obj

INTEGER(I4B) :: elemType, nsd, ipType, basisType(3), order, anisoOrder(3)
REAL(DFP) :: alpha(3), beta(3), lambda(3)
REAL(DFP) :: alpha_quad, beta_quad, lambda_quad
INTEGER(I4B) :: quadratureType, order_quad

CHARACTER(:), ALLOCATABLE :: testname, baseContinuity

elemType = Triangle
nsd = Xidimension(elemType)
ipType = TypeInterpolationOpt%equidistance
baseContinuity = "H1"
basisType = TypePolynomialOpt%monomial
alpha = 0.0
beta = 0.0
lambda = 0.0
order = 4
order_quad = 4
quadratureType = TypeQuadratureOpt%GaussLegendre
alpha_quad = 0.0
beta_quad = 0.0
lambda_quad = 0.0
testname = "Triangle, H1, Monomial, order=4, equidistance"
CALL callme

! elemType = Line
! nsd = Xidimension(elemType)
! ipType = TypeInterpolationOpt%GaussLegendreLobatto
! baseContinuity = "H1"
! basisType = TypePolynomialOpt%Legendre
! alpha = 0.0
! beta = 0.0
! lambda = 0.0
! order = 4
! order_quad = 4
! quadratureType = TypeQuadratureOpt%GaussLegendreLobatto
! alpha_quad = 0.0
! beta_quad = 0.0
! lambda_quad = 0.0
! testname = "Line, H1, Legendre, order=4, GaussLegendreLobatto"
! CALL callme

CONTAINS
SUBROUTINE callme

  obj => LagrangeFEPointer(elemType=elemType, nsd=nsd, &
                           baseContinuity=baseContinuity, &
                           ipType=ipType, basisType=basisType, alpha=alpha, &
                           beta=beta, lambda=lambda, &
                           order=order)

  CALL obj%GetQuadraturePoints(quad=quad, quadratureType=quadratureType, &
       order=order_quad, alpha=alpha_quad, beta=beta_quad, lambda=lambda_quad)

  CALL Display(SUM(quad%points(nsd + 1, :)), "sum of weights")

  CALL display(quad, testname)
  CALL obj%DEALLOCATE()
  CALL DEALLOCATE (quad)

  DEALLOCATE (obj)
END SUBROUTINE callme

END PROGRAM main
