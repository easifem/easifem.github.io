!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1HierarchicalFE_Class
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

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CLASS(AbstractFE_), POINTER :: feptr
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd, geoelemsd
  REAL(DFP) :: refElemCoord(3, 2)
  INTEGER(I4B) :: nrow, ncol

  CALL Display("test1: elemsd%order=4 : cellorient=1")

  feptr => LineH1HierarchicalFEPointer( &
           order=1, nsd=1, cellOrient=[1_I4B, 0_I4B, 0_I4B], &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%SetOrder(order=1)
  CALL feptr%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                    geoelemsd=geoelemsd)

  CALL Display(elemsd, "elemsd: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  CLASS(AbstractFE_), POINTER :: feptr
  TYPE(QuadraturePoint_) :: quad
  TYPE(ElemShapeData_) :: elemsd, geoelemsd
  REAL(DFP) :: refElemCoord(3, 2)
  INTEGER(I4B) :: nrow, ncol

  CALL Display("test2: elemsd%order=4 : cellorient=1")

  feptr => LineH1HierarchicalFEPointer( &
           order=1, nsd=1, cellOrient=[-1_I4B, 0_I4B, 0_I4B], &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  CALL feptr%GetQuadraturePoints(quad=quad)
  CALL feptr%SetOrder(order=1)
  CALL feptr%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                    geoelemsd=geoelemsd)

  CALL Display(elemsd, "elemsd: ")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

END PROGRAM main

!----------------------------------------------------------------------------
! Result of test1
!----------------------------------------------------------------------------
!
!          N:
! --------------------
!  0.788675   0.211325
!  0.211325   0.788675
! -0.408248  -0.408248
!  0.304290  -0.304290
! -0.103935  -0.103935
!
! dNdXi:( :, :, 1 ) =
! --------------------
!      -0.500000
!       0.500000
!      -0.707107
!      -0.000000
!       0.720082
!
! dNdXi:( :, :, 2 ) =
! --------------------
!      -0.500000
!       0.500000
!       0.707107
!      -0.000000
!      -0.720082
!
!----------------------------------------------------------------------------
! Results of test2
!----------------------------------------------------------------------------
!
!          N:
! --------------------
!  0.788675   0.211325
!  0.211325   0.788675
! -0.408248  -0.408248
! -0.304290   0.304290
! -0.103935  -0.103935
!
! dNdXi:( :, :, 1 ) =
! --------------------
!      -0.500000
!       0.500000
!       0.707107
!      -0.000000
!      -0.720082
!
! dNdXi:( :, :, 2 ) =
! --------------------
!      -0.500000
!       0.500000
!      -0.707107
!      -0.000000
!       0.720082
