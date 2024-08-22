! In this exmple we test Lagrange finite element on Line element.
! Interpolation points are equidistance.

! MODULE FUNCTION obj_LagrangeFEPointer(elemType, nsd, baseContinuity, &
! baseInterpolation, ipType, basisType, alpha, beta, lambda, order, &
! anisoOrder) RESULT(ans)

PROGRAM main
USE GlobalData
USE ReferenceElement_Method
USE BaseType
USE Display_Method
USE AbstractFE_Class
USE LagrangeFE_Class

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: obj

INTEGER(I4B) :: elemType, nsd, ipType, basisType(3), order, anisoOrder(3)
REAL(DFP) :: alpha(3), beta(3), lambda(3)

CHARACTER(:), ALLOCATABLE :: testname, baseContinuity

elemType = Line
nsd = Xidimension(elemType)
ipType = TypeInterpolationOpt%equidistance
baseContinuity = "H1"
basisType = TypePolynomialOpt%monomial
alpha = 0.0
beta = 0.0
lambda = 0.0
order = 4
testname = "Line, H1, Lagrange, order=4, equidistance"
CALL callme

basisType = typePolynomialOpt%legendre
iptype = TypeInterpolationOpt%GaussLegendreLobatto
testname = "Line, H1, Lagrange, order=4, gauss legendre lobatto"
CALL callme

CONTAINS
SUBROUTINE callme

  obj => LagrangeFEPointer(elemType=elemType, nsd=nsd, &
                           baseContinuity=baseContinuity, &
  ipType=ipType, basisType=basisType, alpha=alpha, beta=beta, lambda=lambda, &
                           order=order)

  CALL obj%Display(testname)

  CALL obj%DEALLOCATE()
  DEALLOCATE (obj)
END SUBROUTINE callme

END PROGRAM main
