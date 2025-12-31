!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
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
  INTEGER(I4B) :: nrow, ncol
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

  CALL Display("test1: isCellOrient = false: ")

  feptr1 => QuadrangleH1LagrangeFEPointer( &
            order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
            basisType=[TypePolynomialOpt%monomial], &
            quadratureIsHomogeneous=.TRUE., &
            quadratureType=[TypeQuadratureOpt%GaussLegendre], &
            quadratureOrder=[1])

  !  Getting quadrature for interpolation points
  CALL feptr1%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr1%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[4], ipType=[TypeInterpolationOpt%Equidistance])
  CALL Initiate(quad, xij(1:3, 1:ncol))

  CALL feptr1%SetOrder(order=1)
  CALL feptr1%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr1%SetOrder(order=4)
  CALL feptr1%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr1%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                     geoelemsd=geoelemsd)

  CALL Display(elemsd%N(1:5, 1:5), "elemsd%N(1:5, 1:5): ", full=.TRUE.)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4)
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

  CALL Display("test2: elemsd%order=4 : cellorient=-1")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr2 => QuadrangleH1LagrangeFEPointer( &
            order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
            basisType=[TypePolynomialOpt%monomial], &
            faceOrient=faceOrient, &
            quadratureIsHomogeneous=.TRUE., &
            quadratureType=[TypeQuadratureOpt%GaussLegendre], &
            quadratureOrder=[1])

  !  Getting quadrature for interpolation points
  CALL feptr2%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr2%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[4], ipType=[TypeInterpolationOpt%Equidistance])
  CALL Initiate(quad, xij(1:3, 1:ncol))

  CALL feptr2%SetOrder(order=1)
  CALL feptr2%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr2%SetOrder(order=4)
  CALL feptr2%GetLocalElemShapeData(elemsd=elemsd, quad=quad)

  CALL feptr2%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr2%GetGlobalElemShapeData(xij=refElemCoord, elemsd=elemsd, &
                                     geoelemsd=geoelemsd)

  ! CALL Display(elemsd%N, "elemsd%N: ")
END SUBROUTINE test2

END PROGRAM main
