!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing QuadrangleH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1HierarchicalFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE Display_Method
USE ExceptionHandler_Class, ONLY: EXCEPTION_INFORMATION, e

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

! Get the default quadrature points
! Get the default element shape data
SUBROUTINE test1
  CLASS(AbstractFE_), POINTER :: feptr => NULL()
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)

  CALL Display("test1")

  cellOrder = 1
  faceOrder(1:2, 1:4) = 1
  cellOrient = 1
  faceOrient(1:2, 1:4) = 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")

END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

! Lets change the order of element shape data
! Get local element shape data
SUBROUTINE test2
  CLASS(AbstractFE_), POINTER :: feptr => NULL()
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd
  INTEGER(I4B) :: cellOrder(3), faceOrder(3, 4), cellOrient(3), &
                  faceOrient(3, 4)

  CALL Display("test2: Element shape data order (2)")

  cellOrder = 1
  faceOrder(1:2, 1:4) = 1
  cellOrient = 1
  faceOrient(1:2, 1:4) = 1

  feptr => QuadrangleH1HierarchicalFEPointer( &
           cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
           cellOrient=cellOrient, faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  ! CALL feptr%Display("feptr: ")
  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr%SetOrder(order=2)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test2

END PROGRAM main
