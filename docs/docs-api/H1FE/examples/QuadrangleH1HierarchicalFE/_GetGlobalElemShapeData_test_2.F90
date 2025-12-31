!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary: Generating shape functions on collection of Quadrangle elements

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1HierarchicalFE_Class
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

CLASS(AbstractFE_), POINTER :: feptr1, feptr2, feptr3, feptr4
TYPE(QuadraturePoint_) :: quad
TYPE(ElemShapeData_) :: geoelemsd, elemsd1, elemsd2, elemsd3, elemsd4
INTEGER(I4B), PARAMETER :: interpolationOrder = 19
INTEGER(I4B) :: cellCon(25, 4)
REAL(DFP) :: elemCoord(3, 4, 4)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

cellCon(1:25, 1) = [1, 5, 9, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, &
                    19, 20, 21, 46, 47, 48, 49, 50, 51, 52, 53, 54]

cellCon(1:25, 2) = [8, 9, 7, 4, 16, 17, 18, 22, 23, 24, 25, 26, 27, 28, 29, &
                    30, 55, 56, 57, 58, 59, 60, 61, 62, 63]

cellCon(1:25, 3) = [5, 2, 6, 9, 31, 32, 33, 34, 35, 36, 37, 38, 39, &
                    13, 14, 15, 64, 65, 66, 67, 68, 69, 70, 71, 72]

cellCon(1:25, 4) = [9, 6, 3, 7, 37, 38, 39, 40, 41, 42, 43, 44, 45, &
                    22, 23, 24, 73, 74, 75, 76, 77, 78, 79, 80, 81]

elemCoord = 0.0_DFP
elemCoord(1:2, 1, 1) = [0.0_DFP, 0.0_DFP]
elemCoord(1:2, 2, 1) = [1.0_DFP, 0.0_DFP]
elemCoord(1:2, 3, 1) = [1.0_DFP, 1.0_DFP]
elemCoord(1:2, 4, 1) = [0.0_DFP, 1.0_DFP]

elemCoord(1:2, 1, 2) = [0.0_DFP, 1.0_DFP]
elemCoord(1:2, 2, 2) = [1.0_DFP, 1.0_DFP]
elemCoord(1:2, 3, 2) = [1.0_DFP, 2.0_DFP]
elemCoord(1:2, 4, 2) = [0.0_DFP, 2.0_DFP]

elemCoord(1:2, 1, 3) = [1.0_DFP, 0.0_DFP]
elemCoord(1:2, 2, 3) = [2.0_DFP, 0.0_DFP]
elemCoord(1:2, 3, 3) = [2.0_DFP, 1.0_DFP]
elemCoord(1:2, 4, 3) = [1.0_DFP, 1.0_DFP]

elemCoord(1:2, 1, 4) = [1.0_DFP, 1.0_DFP]
elemCoord(1:2, 2, 4) = [2.0_DFP, 1.0_DFP]
elemCoord(1:2, 3, 4) = [2.0_DFP, 2.0_DFP]
elemCoord(1:2, 4, 4) = [1.0_DFP, 2.0_DFP]

CALL test1
CALL test2
CALL test3
CALL test4

CALL testPlotData1
CALL testPlotData2
CALL testPlotData3
CALL testPlotData4

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), cellOrient(3), cellOrder(3), &
                  faceOrder(3, 4)
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

  CALL Display("test1")
  CALL Display("element1")
  CALL Display(cellCon(1:4, 1), "Global node numbers: ")

  cellOrder = 1; faceOrder = 1
  cellOrient = 1; faceOrient = 1
  faceOrient(1, 1:4) = [1, 1, -1, -1]
  ! CALL Display(faceOrient(1, 1:4), "faceOrient: ")

  feptr1 => QuadrangleH1HierarchicalFEPointer( &
            cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
            cellOrient=cellOrient, faceOrient=faceOrient, &
            quadratureIsHomogeneous=.TRUE., &
            quadratureType=[TypeQuadratureOpt%GaussLegendre], &
            quadratureOrder=[1])

  CALL feptr1%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr1%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[interpolationOrder], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(quad, xij(1:3, 1:ncol))
  ! CALL Display(quad, "quad points: ")

  CALL feptr1%SetOrder(order=1)
  CALL feptr1%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr1%SetOrder(order=4)
  CALL feptr1%GetLocalElemShapeData(elemsd=elemsd1, quad=quad)

  CALL feptr1%GetGlobalElemShapeData(xij=elemCoord(1:2, 1:4, 1), &
                                     elemsd=elemsd1, geoelemsd=geoelemsd)

END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), cellOrient(3), cellOrder(3), &
                  faceOrder(3, 4)
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

  CALL Display("test2")
  CALL Display("element2")
  CALL Display(cellCon(1:4, 2), "Global node numbers: ")

  cellOrder = 1; faceOrder = 1
  cellOrient = 1; faceOrient = 1
  faceOrient(1, 1:4) = [1, -1, -1, +1]
  ! CALL Display(faceOrient(1, 1:4), "faceOrient: ")

  feptr2 => QuadrangleH1HierarchicalFEPointer( &
            cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
            cellOrient=cellOrient, faceOrient=faceOrient, &
            quadratureIsHomogeneous=.TRUE., &
            quadratureType=[TypeQuadratureOpt%GaussLegendre], &
            quadratureOrder=[1])

  CALL feptr2%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr2%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[interpolationOrder], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(quad, xij(1:3, 1:ncol))
  ! CALL Display(quad, "quad points: ")

  CALL feptr2%SetOrder(order=1)
  CALL feptr2%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr2%SetOrder(order=4)
  CALL feptr2%GetLocalElemShapeData(elemsd=elemsd2, quad=quad)

  CALL feptr2%GetGlobalElemShapeData(xij=elemCoord(1:2, 1:4, 2), &
                                     elemsd=elemsd2, geoelemsd=geoelemsd)

END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                 test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), cellOrient(3), cellOrder(3), &
                  faceOrder(3, 4)
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

  CALL Display("test3")
  CALL Display("element3")
  CALL Display(cellCon(1:4, 3), "Global node numbers: ")

  cellOrder = 1; faceOrder = 1
  cellOrient = 1; faceOrient = 1
  faceOrient(1, 1:4) = [-1, 1, 1, -1]
  ! CALL Display(faceOrient(1, 1:4), "faceOrient: ")

  feptr1 => QuadrangleH1HierarchicalFEPointer( &
            cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
            cellOrient=cellOrient, faceOrient=faceOrient, &
            quadratureIsHomogeneous=.TRUE., &
            quadratureType=[TypeQuadratureOpt%GaussLegendre], &
            quadratureOrder=[1])

  CALL feptr1%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr1%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[interpolationOrder], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(quad, xij(1:3, 1:ncol))
  ! CALL Display(quad, "quad points: ")

  CALL feptr1%SetOrder(order=1)
  CALL feptr1%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr1%SetOrder(order=4)
  CALL feptr1%GetLocalElemShapeData(elemsd=elemsd3, quad=quad)

  CALL feptr1%GetGlobalElemShapeData(xij=elemCoord(1:2, 1:4, 3), &
                                     elemsd=elemsd3, geoelemsd=geoelemsd)

END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                      test4
!----------------------------------------------------------------------------

SUBROUTINE test4
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), cellOrient(3), cellOrder(3), &
                  faceOrder(3, 4)
  REAL(DFP) :: refElemCoord(3, 8), xij(3, 500)

  CALL Display("test4")
  CALL Display("element4")
  CALL Display(cellCon(1:4, 4), "Global node numbers: ")

  cellOrder = 1; faceOrder = 1
  cellOrient = 1; faceOrient = 1
  faceOrient(1, 1:4) = [-1, -1, 1, 1]
  ! CALL Display(faceOrient(1, 1:4), "faceOrient: ")

  feptr1 => QuadrangleH1HierarchicalFEPointer( &
            cellOrder=cellOrder, faceOrder=faceOrder, nsd=2, &
            cellOrient=cellOrient, faceOrient=faceOrient, &
            quadratureIsHomogeneous=.TRUE., &
            quadratureType=[TypeQuadratureOpt%GaussLegendre], &
            quadratureOrder=[1])

  CALL feptr1%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)
  CALL feptr1%GetInterpolationPoints( &
    xij=refElemCoord(1:2, 1:4), ans=xij, nrow=nrow, ncol=ncol, &
    order=[interpolationOrder], ipType=[TypeInterpolationOpt%Equidistance])

  CALL Initiate(quad, xij(1:3, 1:ncol))
  ! CALL Display(quad, "quad points: ")

  CALL feptr1%SetOrder(order=1)
  CALL feptr1%GetLocalElemShapeData(elemsd=geoelemsd, quad=quad)

  CALL feptr1%SetOrder(order=4)
  CALL feptr1%GetLocalElemShapeData(elemsd=elemsd4, quad=quad)

  CALL feptr1%GetGlobalElemShapeData(xij=elemCoord(1:2, 1:4, 4), &
                                     elemsd=elemsd4, geoelemsd=geoelemsd)

END SUBROUTINE test4

!----------------------------------------------------------------------------
!                                                              testPlotdata1
!----------------------------------------------------------------------------

SUBROUTINE testPlotdata1
  TYPE(VTKPlot_) :: plot
  REAL(DFP), ALLOCATABLE :: plotData(:, :), xij(:, :)
  INTEGER(I4B) :: tsize, n1, n2, nips, tdof, ii

  CALL Display("testPlotdata1 start")

  tsize = elemsd1%nips

  CALL Display(tsize, "plotData, tsize: ")

  CALL Reallocate(xij, tsize, 2)
  CALL Reallocate(plotData, tsize, 81)

  ! elemsd1:
  nips = elemsd1%nips
  tdof = elemsd1%nns
  n1 = 1; n2 = nips
  xij(n1:n2, 1) = elemsd1%coord(1, 1:nips)
  xij(n1:n2, 2) = elemsd1%coord(2, 1:nips)
  DO ii = 1, tdof
    plotData(n1:n2, cellCon(ii, 1)) = elemsd1%N(ii, 1:nips)
  END DO

  CALL plot%Initiate()

  DO ii = 1, 81
    CALL plot%Scatter3D(x=xij(1:tsize, 1), &
                        y=xij(1:tsize, 2), &
                        z=plotData(1:tsize, ii), label="Elem1", &
                        filename="Order4_Elem1_"//ToString(ii)//".vtp")
  END DO

  CALL plot%DEALLOCATE()

  CALL Display("testPlotdata1 end")
END SUBROUTINE testPlotdata1

!----------------------------------------------------------------------------
!                                                              testPlotData2
!----------------------------------------------------------------------------

SUBROUTINE testPlotData2
  TYPE(VTKPlot_) :: plot
  REAL(DFP), ALLOCATABLE :: plotData(:, :), xij(:, :)
  INTEGER(I4B) :: tsize, n1, n2, nips, tdof, ii

  CALL Display("testPlotData2 start")

  tsize = elemsd2%nips

  CALL Display(tsize, "plotData, tsize: ")

  CALL Reallocate(xij, tsize, 2)
  CALL Reallocate(plotData, tsize, 81)

  ! elemsd2:
  nips = elemsd2%nips
  tdof = elemsd2%nns
  n1 = 1; n2 = nips
  xij(n1:n2, 1) = elemsd2%coord(1, 1:nips)
  xij(n1:n2, 2) = elemsd2%coord(2, 1:nips)
  DO ii = 1, tdof
    plotData(n1:n2, cellCon(ii, 2)) = elemsd2%N(ii, 1:nips)
  END DO

  CALL plot%Initiate()

  DO ii = 1, 81
    CALL plot%Scatter3D(x=xij(1:tsize, 1), &
                        y=xij(1:tsize, 2), &
                        z=plotData(1:tsize, ii), label="Elem2", &
                        filename="Order4_Elem2_"//ToString(ii)//".vtp")
  END DO

  CALL plot%DEALLOCATE()

  CALL Display("testPlotData2 end")
END SUBROUTINE testPlotData2

!----------------------------------------------------------------------------
!                                                              testPlotData3
!----------------------------------------------------------------------------

SUBROUTINE testPlotData3
  TYPE(VTKPlot_) :: plot
  REAL(DFP), ALLOCATABLE :: plotData(:, :), xij(:, :)
  INTEGER(I4B) :: tsize, n1, n2, nips, tdof, ii

  CALL Display("testPlotData3 start")

  tsize = elemsd3%nips

  CALL Display(tsize, "plotData, tsize: ")

  CALL Reallocate(xij, tsize, 2)
  CALL Reallocate(plotData, tsize, 81)

  ! elemsd3:
  nips = elemsd3%nips
  tdof = elemsd3%nns
  n1 = 1; n2 = nips
  xij(n1:n2, 1) = elemsd3%coord(1, 1:nips)
  xij(n1:n2, 2) = elemsd3%coord(2, 1:nips)
  DO ii = 1, tdof
    plotData(n1:n2, cellCon(ii, 3)) = elemsd3%N(ii, 1:nips)
  END DO

  CALL plot%Initiate()

  DO ii = 1, 81
    CALL plot%Scatter3D(x=xij(1:tsize, 1), &
                        y=xij(1:tsize, 2), &
                        z=plotData(1:tsize, ii), label="Elem3", &
                        filename="Order4_Elem3_"//ToString(ii)//".vtp")
  END DO

  CALL plot%DEALLOCATE()

  CALL Display("testPlotData3 end")
END SUBROUTINE testPlotData3

!----------------------------------------------------------------------------
!                                                              testPlotData4
!----------------------------------------------------------------------------

SUBROUTINE testPlotData4
  TYPE(VTKPlot_) :: plot
  REAL(DFP), ALLOCATABLE :: plotData(:, :), xij(:, :)
  INTEGER(I4B) :: tsize, n1, n2, nips, tdof, ii

  CALL Display("testPlotData4 start")

  tsize = elemsd4%nips

  CALL Display(tsize, "plotData, tsize: ")

  CALL Reallocate(xij, tsize, 2)
  CALL Reallocate(plotData, tsize, 81)

  ! elemsd4:
  nips = elemsd4%nips
  tdof = elemsd4%nns
  n1 = 1; n2 = nips
  xij(n1:n2, 1) = elemsd4%coord(1, 1:nips)
  xij(n1:n2, 2) = elemsd4%coord(2, 1:nips)
  DO ii = 1, tdof
    plotData(n1:n2, cellCon(ii, 4)) = elemsd4%N(ii, 1:nips)
  END DO

  CALL plot%Initiate()

  DO ii = 1, 81
    CALL plot%Scatter3D(x=xij(1:tsize, 1), &
                        y=xij(1:tsize, 2), &
                        z=plotData(1:tsize, ii), label="Elem4", &
                        filename="Order4_Elem4_"//ToString(ii)//".vtp")
  END DO

  CALL plot%DEALLOCATE()

  CALL Display("testPlotData4 end")
END SUBROUTINE testPlotData4

!----------------------------------------------------------------------------
!                                                               testPlotData
!----------------------------------------------------------------------------

! SUBROUTINE testPlotData
!   TYPE(VTKPlot_) :: plot
!   REAL(DFP), ALLOCATABLE :: plotData(:, :), xij(:, :)
!   INTEGER(I4B) :: tsize, n1, n2, nips, tdof, ii
!
!   CALL Display("testPlotData start")
!
!   tsize = elemsd1%nips + elemsd2%nips + elemsd3%nips + elemsd4%nips
!
!   CALL Display(tsize, "plotData, tsize: ")
!
!   CALL Reallocate(xij, tsize, 2)
!   CALL Reallocate(plotData, tsize, 81)
!
!   ! elemsd1:
!   ! nips = elemsd1%nips
!   ! tdof = elemsd1%nns
!   ! n1 = 1; n2 = nips
!   ! xij(n1:n2, 1) = elemsd1%coord(1, 1:nips)
!   ! xij(n1:n2, 2) = elemsd1%coord(2, 1:nips)
!   ! DO ii = 1, tdof
!   !   plotData(n1:n2, cellCon(ii, 1)) = elemsd1%N(ii, 1:nips)
!   ! END DO
!
!   ! elemsd2:
!   nips = elemsd2%nips
!   tdof = elemsd2%nns
!   n1 = n2 + 1; n2 = n2 + nips
!   xij(n1:n2, 1) = elemsd2%coord(1, 1:nips)
!   xij(n1:n2, 2) = elemsd2%coord(2, 1:nips)
!   DO ii = 1, tdof
!     plotData(n1:n2, cellCon(ii, 2)) = elemsd2%N(ii, 1:nips)
!   END DO
!
!   ! nips = elemsd3%nips
!   ! tdof = elemsd3%nns
!   ! n1 = n2 + 1; n2 = n2 + nips
!   ! xij(n1:n2, 1) = elemsd3%coord(1, 1:nips)
!   ! xij(n1:n2, 2) = elemsd3%coord(2, 1:nips)
!   ! DO ii = 1, tdof
!   !   plotData(n1:n2, cellCon(ii, 3)) = elemsd3%N(ii, 1:nips)
!   ! END DO
!   !
!   ! nips = elemsd4%nips
!   ! tdof = elemsd4%nns
!   ! n1 = n2 + 1; n2 = n2 + nips
!   ! xij(n1:n2, 1) = elemsd4%coord(1, 1:nips)
!   ! xij(n1:n2, 2) = elemsd4%coord(2, 1:nips)
!   ! DO ii = 1, tdof
!   !   plotData(n1:n2, cellCon(ii, 4)) = elemsd4%N(ii, 1:nips)
!   ! END DO
!
!   CALL plot%Initiate()
!
!   DO ii = 1, 81
!     CALL plot%Scatter3D(x=xij(1:tsize, 1), &
!                         y=xij(1:tsize, 2), &
!                         z=plotData(1:tsize, ii), label="N", &
!                         filename="Order4_N"//ToString(ii)//".vtp")
!   END DO
!
!   CALL plot%DEALLOCATE()
!
!   CALL Display("testPlotData end")
! END SUBROUTINE testPlotData

END PROGRAM main
