!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()
TYPE(QuadraturePoint_) :: quad

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

feptr => QuadrangleH1LagrangeFEPointer( &
         order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], &
         quadratureIsHomogeneous=.TRUE., &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2])

CALL test1
CALL test2
CALL test3
CALL test4
CALL test5
CALL test6

CONTAINS

SUBROUTINE test1
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=(2,2) : ")
END SUBROUTINE test1

SUBROUTINE test2
  ! Changing the order of quadrature points
  CALL feptr%SetQuadratureOrder(order=[4_I4B])
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=(4,4) : ")
END SUBROUTINE test2

SUBROUTINE test3
  ! Changing the order of quadrature points
  CALL feptr%SetQuadratureOrder(order=[4_I4B, 2_I4B])
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=(4,2) : ")
END SUBROUTINE test3

SUBROUTINE test4
  ! Changing the order of quadrature points
  ! If quadrature points isHomogenous is false then order(1)
  ! will change.
  CALL feptr%SetQuadratureOrder(order1=2_I4B)
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=(2, 2) : ")
END SUBROUTINE test4

SUBROUTINE test5
  ! Changing the order of quadrature points
  ! If quadrature points isHomogenous is false then order(2)
  ! will change.
  CALL feptr%SetQuadratureOrder(order2=4_I4B)
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=(2, 4) : ")
END SUBROUTINE test5

SUBROUTINE test6
  ! Changing the order of quadrature points
  ! If quadrature points isHomogenous is false then order(2)
  ! will change.
  CALL feptr%SetQuadratureOrder(order1=4_I4B, order2=4_I4B)
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=(4, 4) : ")
END SUBROUTINE test6

! SUBROUTINE test4
! ! Changing the quadrature type
!   CALL feptr%SetQuadratureType(quadratureType= &
!                                [TypeQuadratureOpt%GaussLegendreLobatto])
!   CALL feptr%SetQuadratureOrder(order1=2_I4B)
!   CALL feptr%GetQuadraturePoints(quad=quad)
!   CALL Display(quad, "Quadrature points order=2 : ")
! END SUBROUTINE test4

END PROGRAM main
