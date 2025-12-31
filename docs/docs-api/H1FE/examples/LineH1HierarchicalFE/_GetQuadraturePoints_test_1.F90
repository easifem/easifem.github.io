!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1HierarchicalFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE Display_Method
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

feptr => LineH1HierarchicalFEPointer( &
         order=1, nsd=1, cellOrient=[1_I4B, 0_I4B, 0_I4B], &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2])

CALL test1
CALL test2
CALL test3
CALL test4

!----------------------------------------------------------------------------
!                                                                 contains
!----------------------------------------------------------------------------

CONTAINS

SUBROUTINE test1
  TYPE(QuadraturePoint_) :: quad
  CALL Display("test1")
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=2 : ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(QuadraturePoint_) :: quad
  ! Changing the order of quadrature points
  CALL Display("test2")
  CALL feptr%SetQuadratureOrder(order=[4_I4B])
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=4 : ")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                 test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(QuadraturePoint_) :: quad
  ! Changing the order of quadrature points
  CALL Display("test3")
  CALL feptr%SetQuadratureOrder(order1=6_I4B)
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=6 : ")
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                 test4
!----------------------------------------------------------------------------

SUBROUTINE test4
  TYPE(QuadraturePoint_) :: quad
  ! Changing the quadrature type
  CALL Display("test4")
  CALL feptr%SetQuadratureType(quadratureType= &
                               [TypeQuadratureOpt%GaussLegendreLobatto])
  CALL feptr%SetQuadratureOrder(order1=3_I4B)
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL Display(quad, "Quadrature points order=3 : ")
END SUBROUTINE test4

END PROGRAM main
