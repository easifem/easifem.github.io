!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE Display_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()
REAL(DFP) :: refElemCoord(3, 8), xij(3, 100)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

feptr => LineH1LagrangeFEPointer( &
         order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], alpha=[0.0_DFP], &
         beta=[0.0_DFP], lambda=[0.5_DFP], cellOrient=[1_I4B, 0_I4B, 0_I4B], &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2], quadratureAlpha=[0.0_DFP], &
         quadratureBeta=[0.0_DFP], quadratureLambda=[0.5_DFP])

CALL test1
CALL test2
CALL test3

CALL test4

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  ! Get the default interpolation points
  INTEGER(I4B) :: nsd, nns, nrow, ncol

  CALL Display("test1: order=1, ipType=Equidistance")

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nsd, ncol=nns)

  ! obj, xij, ans, nrow, ncol, order, ipType, alpha, beta, lambda)
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:nsd, 1:nns), ans=xij, nrow=nrow, ncol=ncol, &
    order=[1], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Display(xij(1:nrow, 1:ncol), &
               "Interpolation points: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  ! Get the default interpolation points
  INTEGER(I4B) :: nsd, nns, nrow, ncol

  CALL Display("test2: order=2, ipType=Equidistance")

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nsd, ncol=nns)

  ! obj, xij, ans, nrow, ncol, order, ipType, alpha, beta, lambda)
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:nsd, 1:nns), ans=xij, nrow=nrow, ncol=ncol, &
    order=[2], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Display(xij(1:nrow, 1:ncol), &
               "Interpolation points: ")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                      test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  ! Get the default interpolation points
  INTEGER(I4B) :: nsd, nns, nrow, ncol

  CALL Display("test3: order=3, ipType=Equidistance")

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nsd, ncol=nns)

  ! obj, xij, ans, nrow, ncol, order, ipType, alpha, beta, lambda)
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:nsd, 1:nns), ans=xij, nrow=nrow, ncol=ncol, &
    order=[3], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Display(xij(1:nrow, 1:ncol), &
               "Interpolation points: ")
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                      test4
!----------------------------------------------------------------------------

SUBROUTINE test4
  ! Get the default interpolation points
  INTEGER(I4B) :: nsd, nns, nrow, ncol

  CALL Display("test4: order=3, ipType=GaussLegendreLobatto")

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nsd, ncol=nns)

  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:nsd, 1:nns), ans=xij, nrow=nrow, ncol=ncol, &
    order=[3], ipType=[TypeInterpolationOpt%GaussLegendreLobatto])

  CALL Display(xij(1:nrow, 1:ncol), &
               "Interpolation points: ")
END SUBROUTINE test4

END PROGRAM main
