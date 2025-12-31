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
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

IMPLICIT NONE

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                 test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CLASS(AbstractFE_), POINTER :: feptr => NULL()
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd

  CALL Display("test1")
  CALL Display("order = 1, cellOrient=1")
  feptr => LineH1HierarchicalFEPointer( &
           order=1, nsd=1, cellOrient=[1_I4B, 0_I4B, 0_I4B], &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")

  CALL Display("order = 4, cellOrient=1")
  CALL feptr%SetOrder(order=4)

  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  CLASS(AbstractFE_), POINTER :: feptr => NULL()
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd
  ! Lets change the order of element shape data

  CALL Display("test2")
  CALL Display("order = 1, cellOrient=-1")
  feptr => LineH1HierarchicalFEPointer( &
           order=1, nsd=1, cellOrient=[-1_I4B, 0_I4B, 0_I4B], &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")

  CALL Display("order = 4, cellOrient=-1")
  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test2

END PROGRAM main
