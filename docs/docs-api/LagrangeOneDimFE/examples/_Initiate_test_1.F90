!> author: Vikas Sharma, Ph. D.
! date: 2025-06-17
! summary:  This example tests the initiate method for LagrangeOneDimFE class.
! In this exmple we test Lagrange finite element on Line element.
! Interpolation points are equidistance.
! We will use equidistance interpolation points
! We also test LagrangeOneDimFE function to initiate the object

PROGRAM main
USE LagrangeOneDimFE_Class
USE GlobalData
USE BaseType, ONLY: ipopt => TypeInterpolationOpt, &
                    varopt => TypeFEVariableOpt, &
                    polyopt => TypePolynomialOpt
USE Display_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(LagrangeOneDimFE_) :: obj

INTEGER(I4B) :: order
CHARACTER(LEN=*), PARAMETER :: baseContinuity = "H1", &
                               baseInterpolation = "Lagrange", &
                             testname = baseContinuity//" "//baseInterpolation
INTEGER(I4B), PARAMETER :: ipType = ipopt%Equidistance, &
                           feType = varopt%scalar, &
                           basisType = polyopt%monomial

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2
CALL test3

CONTAINS

!----------------------------------------------------------------------------
!                                                                     test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  order = 1
  CALL obj%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    ipType=ipType, &
                    basisType=basisType, &
                    order=order, &
                    feType=feType)

  CALL obj%Display(testname//" test 1")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                     test2
!----------------------------------------------------------------------------

SUBROUTINE test2

  order = 2
  CALL obj%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    ipType=ipType, &
                    basisType=basisType, &
                    order=order, &
                    feType=feType)

  CALL obj%Display(testname//" test 2")

END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                    test3
!----------------------------------------------------------------------------

SUBROUTINE test3

! We can also initiate the object by using the function
! In this case we do not have to specify the
! baseInterpolation and feType parameters

  order = 3
  obj = LagrangeOneDimFE(baseContinuity=baseContinuity, &
                         ipType=ipType, &
                         basisType=basisType, &
                         order=order)

  CALL obj%Display(testname//" test 3")

END SUBROUTINE test3

END PROGRAM main
