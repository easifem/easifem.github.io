!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1HierarchicalFE_Class
USE Display_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, TypePolynomialOpt, &
                    TypeQuadratureOpt

IMPLICIT NONE

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1

!----------------------------------------------------------------------------
!                                                                 contains
!----------------------------------------------------------------------------

CONTAINS

!----------------------------------------------------------------------------
!                                                                 test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CLASS(AbstractFE_), POINTER :: feptr => NULL()
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

  CALL feptr%Display("feptr: ")
END SUBROUTINE test1
END PROGRAM main
