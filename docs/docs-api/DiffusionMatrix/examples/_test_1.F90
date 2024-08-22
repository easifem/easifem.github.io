PROGRAM main
USE GlobalData
USE BaseType
USE ElemshapeData_Method
USE QuadraturePoint_Method
USE ReferenceElement_Method
USE ReferenceLine_Method
USE DiffusionMatrix_Method
USE Display_Method

IMPLICIT NONE

REAL(DFP), PARAMETER :: xij(1, 2) = RESHAPE([-1, 1], [1, 2])
INTEGER(I4B), PARAMETER :: order = 2

TYPE(ElemShapeData_) :: test
TYPE(QuadraturePoint_) :: quad
TYPE(ReferenceLine_) :: refelem
REAL(DFP), ALLOCATABLE :: mat(:, :)
INTEGER(I4B) :: nrow, ncol

refelem = ReferenceLine(nsd=1)

CALL Initiate(obj=quad, refelem=refelem, order=order, &
              quadratureType='GaussLegendre')

CALL Initiate(obj=test, &
              quad=quad, &
              refelem=refelem, &
              baseContinuity=TypeH1, &
              baseInterpolation=TypeLagrangeInterpolation, &
              order=1)
! CALL Display(test, "test:")

CALL Set(obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)
! CALL Display(test, "test:")

mat = DiffusionMatrix(test=test, trial=test)
! CALL Display(mat, "mat:")

mat = 0.0
CALL DiffusionMatrix_(test=test, trial=test, ans=mat, nrow=nrow, ncol=ncol)
CALL Display(nrow, "nrow:")
CALL Display(ncol, "ncol:")
CALL Display(mat, "mat:")

! CALL Display(refelem, "refelem:")

END PROGRAM main
