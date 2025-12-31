!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary: Generating shape functions on collection of triangle elements
!
!   (4) ---------- (3)
!    |           /  |
!    |         /    |
!    |       /      |
!    |     /        |
!    |   /          |
!   (1) ---------- (2)
!
! 4th order Lagrange element on linear mesh
!
!   (4) ---------- (3)
!    |           /  |
!    |         /    |
!    |       /      |
!    |     /        |
!    |   /          |
!   (1) ---------- (2)

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE TriangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE VTKPlot_Class
USE ReallocateUtility
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
TYPE(ElemShapeData_) :: elemsd1, geoelemsd, elemsd2
TYPE(VTKPlot_) :: plot
REAL(DFP) :: refElemCoord(3, 8), xij(3, 500), elemCoord(3, 8)
REAL(DFP), ALLOCATABLE :: plotData(:, :)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
CALL test2

CALL Reallocate(plotData, elemsd1%nips + elemsd2%nips, 5)

plotData(1:elemsd1%nips, 1) = elemsd1%coord(1, 1:elemsd1%nips)
plotData(1:elemsd1%nips, 2) = elemsd1%coord(2, 1:elemsd1%nips)
plotData(1:elemsd1%nips, 3) = elemsd1%N(10, 1:elemsd1%nips)
plotData(1:elemsd1%nips, 4) = elemsd1%N(11, 1:elemsd1%nips)
plotData(1:elemsd1%nips, 5) = elemsd1%N(12, 1:elemsd1%nips)

plotData(1 + elemsd1%nips:elemsd1%nips + elemsd2%nips, 1) = &
  elemsd2%coord(1, 1:elemsd2%nips)
plotData(1 + elemsd1%nips:elemsd1%nips + elemsd2%nips, 2) = &
  elemsd2%coord(2, 1:elemsd2%nips)
plotData(1 + elemsd1%nips:elemsd1%nips + elemsd2%nips, 3) = &
  elemsd2%N(4, 1:elemsd2%nips)
plotData(1 + elemsd1%nips:elemsd1%nips + elemsd2%nips, 4) = &
  elemsd2%N(5, 1:elemsd2%nips)
plotData(1 + elemsd1%nips:elemsd1%nips + elemsd2%nips, 5) = &
  elemsd2%N(6, 1:elemsd2%nips)

CALL plot%Initiate()
CALL plot%Scatter3D(x=plotData(:, 1), &
                    y=plotData(:, 2), &
                    z=plotData(:, 3), label="N11", &
                    filename="Order4_N11.vtp")

CALL plot%Scatter3D(x=plotData(:, 1), &
                    y=plotData(:, 2), &
                    z=plotData(:, 4), label="N12", &
                    filename="Order4_N12.vtp")

CALL plot%Scatter3D(x=plotData(:, 1), &
                    y=plotData(:, 2), &
                    z=plotData(:, 5), label="N13", &
                    filename="Order4_N13.vtp")
CALL plot%DEALLOCATE()


CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 3)

  CALL Display("test1: element 1")
  CALL Display([1, 2, 3], "Global node numbers: ")
  faceOrient = 0
  faceOrient(1, 1) = 1
  faceOrient(1, 2) = 1
  faceOrient(1, 3) = -1
  CALL Display(faceOrient(1, 1:3), "faceOrient: ")

  feptr1 => TriangleH1LagrangeFEPointer( &
            order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
            basisType=TypePolynomialOpt%monomial, &
            faceOrient=faceOrient, &
            quadratureType=TypeQuadratureOpt%GaussLegendre, &
            quadratureOrder=1)

  CALL feptr1%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr1%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:3), ans=xij, nrow=nrow, ncol=ncol, &
    order=[19], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(quad, xij(1:3, 1:ncol))
  ! CALL Display(quad, "quad points: ")

  CALL feptr1%SetOrder(order=1)
  CALL feptr1%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr1%SetOrder(order=4)
  CALL feptr1%GetLocalElemShapeData(elemsd=elemsd1, quad=quad)

  elemCoord = 0.0_DFP
  elemCoord(1:2, 1) = [0.0_DFP, 0.0_DFP]
  elemCoord(1:2, 2) = [1.0_DFP, 0.0_DFP]
  elemCoord(1:2, 3) = [1.0_DFP, 1.0_DFP]

  CALL feptr1%GetGlobalElemShapeData(xij=elemCoord(1:2, 1:3), &
                                     elemsd=elemsd1, geoelemsd=geoelemsd)

END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 3)

  CALL Display("test2: element 2")
  CALL Display([1, 3, 4], "Global node numbers: ")
  faceOrient = 0
  faceOrient(1, 1) = 1
  faceOrient(1, 2) = 1
  faceOrient(1, 3) = -1
  CALL Display(faceOrient(1, 1:3), "faceOrient: ")

  feptr2 => TriangleH1LagrangeFEPointer( &
            order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
            basisType=TypePolynomialOpt%monomial, &
            faceOrient=faceOrient, &
            quadratureType=TypeQuadratureOpt%GaussLegendre, &
            quadratureOrder=1)

  CALL feptr2%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr2%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:3), ans=xij, nrow=nrow, ncol=ncol, &
    order=[19], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(quad, xij(1:3, 1:ncol))
  ! CALL Display(quad, "quad points: ")

  CALL feptr2%SetOrder(order=1)
  CALL feptr2%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr2%SetOrder(order=4)
  CALL feptr2%GetLocalElemShapeData(elemsd=elemsd2, quad=quad)

  elemCoord = 0.0_DFP
  elemCoord(1:2, 1) = [0.0_DFP, 0.0_DFP]
  elemCoord(1:2, 2) = [1.0_DFP, 1.0_DFP]
  elemCoord(1:2, 3) = [0.0_DFP, 1.0_DFP]

  CALL feptr2%GetGlobalElemShapeData(xij=elemCoord(1:2, 1:3), &
                                     elemsd=elemsd2, geoelemsd=geoelemsd)
END SUBROUTINE test2

END PROGRAM main
