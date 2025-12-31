!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1LagrangeFE_Class
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

CLASS(AbstractFE_), POINTER :: feptr1 => NULL(), feptr2 => NULL()
TYPE(QuadraturePoint_) :: quad
TYPE(ElemShapeData_) :: elemsd, geoelemsd
REAL(DFP) :: refElemCoord(3, 8)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

feptr1 => LineH1LagrangeFEPointer( &
          order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
          basisType=[TypePolynomialOpt%monomial], &
          cellOrient=[1_I4B, 0_I4B, 0_I4B], &
          quadratureType=[TypeQuadratureOpt%GaussLegendre], &
          quadratureOrder=[2])

feptr1 => LineH1LagrangeFEPointer( &
          order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
          basisType=[TypePolynomialOpt%monomial], &
          cellOrient=[-1_I4B, 0_I4B, 0_I4B], &
          quadratureType=[TypeQuadratureOpt%GaussLegendre], &
          quadratureOrder=[2])

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                     test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol

  CALL Display("test1: elemsd%order=4 : cellorient=1")
  CALL feptr1%GetQuadraturePoints(quad=quad)
  CALL feptr1%SetOrder(order=1)
  CALL feptr1%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr1%SetOrder(order=4)
  CALL feptr1%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr1%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr1%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                     geoelemsd=geoelemsd)

  CALL Display(elemsd%N, "elemsd%N: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol

  CALL Display("test2: elemsd%order=4 : cellorient=-1")
  CALL feptr2%GetQuadraturePoints(quad=quad)
  CALL feptr2%SetOrder(order=1)
  CALL feptr2%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr2%SetOrder(order=4)
  CALL feptr2%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr2%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr2%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                     geoelemsd=geoelemsd)

  CALL Display(elemsd%N, "elemsd%N: ")

  ! CALL feptr2%Display("feptr2: ")
END SUBROUTINE test2

END PROGRAM main
