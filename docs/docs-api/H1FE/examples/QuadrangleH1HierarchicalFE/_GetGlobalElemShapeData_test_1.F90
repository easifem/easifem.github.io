!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1HierarchicalFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

USE Display_Method

IMPLICIT NONE

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
! CALL feptr1%Display("feptr1: ")
CALL test2
! CALL feptr2%Display("feptr2: ")

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CLASS(AbstractFE_), POINTER :: feptr
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd, geoelemsd
  INTEGER(I4B) :: nrow, ncol, cellOrder(3), faceOrder(3, 4), &
                  cellOrient(3), faceOrient(3, 4)
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

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

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[4], ipType=[TypeInterpolationOpt%Equidistance])
  CALL Initiate(quad, xij(1:3, 1:ncol))

  CALL feptr%SetOrder(order=1)
  CALL feptr%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                    geoelemsd=geoelemsd)

  CALL Display(elemsd%N(1:5, 1:5), "elemsd%N(1:5, 1:5): ", full=.TRUE.)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
END SUBROUTINE test2

END PROGRAM main
