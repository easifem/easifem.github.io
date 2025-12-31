!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing TriangleH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE TriangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

USE Display_Method

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

feptr => TriangleH1LagrangeFEPointer( &
         order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
         basisType=TypePolynomialOpt%monomial, &
         quadratureType=TypeQuadratureOpt%GaussLegendre, &
         quadratureOrder=2)

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                 test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  TYPE(ElemShapeData_) :: elemsd
  TYPE(QuadraturePoint_) :: quad

  CALL Display("test1")
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(ElemShapeData_) :: elemsd
  TYPE(QuadraturePoint_) :: quad

  ! Lets change the order of element shape data
  CALL Display("test2")
  CALL feptr%SetOrder(order=2)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test2

END PROGRAM main
