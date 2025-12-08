!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing QuadrangleH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE ExceptionHandler_Class, ONLY: EXCEPTION_INFORMATION, e
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

USE Display_Method

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()
TYPE(QuadraturePoint_) :: quad
TYPE(ElemShapeData_) :: elemsd

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

feptr => QuadrangleH1LagrangeFEPointer( &
         order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], &
         quadratureIsHomogeneous=.TRUE., &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2])

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                 test1
!----------------------------------------------------------------------------

! Get the default quadrature points
! Get the default element shape data
SUBROUTINE test1
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display("test1: Element shape data order(1)")
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
  CALL Display(SUM(elemsd%N(1:elemsd%nns, 1:elemsd%nips)), &
               "sum(elemsd%N): ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

! Lets change the order of element shape data
! Get local element shape data
SUBROUTINE test2
  CALL feptr%SetOrder(order=2)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display("test2: Element shape data order (2)")
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
  CALL Display(SUM(elemsd%N(1:elemsd%nns, 1:elemsd%nips)), &
               "sum(elemsd%N): ")
END SUBROUTINE test2

END PROGRAM main
