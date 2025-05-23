PROGRAM main
USE easifemBase

IMPLICIT NONE

TYPE(Elemshapedata_) :: test, elemsdForsimplex
TYPE(Quadraturepoint_) :: quad
TYPE(Referenceline_) :: simplexElem, refElem
REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
INTEGER(I4B), PARAMETER :: order = 2

! Let us now create the physical coordinate of the line element.
XiJ = RESHAPE([-1, 1], [1, 2])

! Now  we create an instance of [[ReferenceLine_]].
simplexElem = referenceline(nsd=1)
CALL simplexElem%LagrangeElement(order=order, highOrderObj=refelem)

! Here, we create the quadrature points.
CALL initiate(obj=quad, refelem=refelem, order=order * 2, &
              quadratureType='GaussLegendre')

! Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].
CALL initiate(obj=elemsdForsimplex, &
              quad=quad, &
              refelem=simplexElem, &
              ContinuityType=typeH1, &
              InterpolType=typeLagrangeInterpolation)

! Initiate an instance of [[ElemeshapeData_]].
CALL initiate(obj=test, &
              quad=quad, &
              refelem=refElem, &
              ContinuityType=typeH1, &
              InterpolType=typeLagrangeInterpolation)

CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
         dNdXi=elemsdForSimplex%dNdXi)

! Let us now create the mass matrix.
mat = MassMatrix(test=test, trial=test)
CALL Display(mat, "mat:")

END PROGRAM main
