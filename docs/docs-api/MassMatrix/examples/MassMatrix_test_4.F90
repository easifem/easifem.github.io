PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(Elemshapedata_) :: test, elemsdForsimplex, trial
TYPE(Quadraturepoint_) :: quad
TYPE(Referenceline_) :: simplexElem, refElemFortest, refElemFortrial
REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
INTEGER(I4B), PARAMETER :: orderFortest = 1, orderForTrial = 2

! Let us now create the physical coordinate of the line element.

XiJ = RESHAPE([-1, 1], [1, 2])

! Now  we create an instance of [[ReferenceLine_]].

simplexElem = referenceline(nsd=1)
    CALL simplexElem%LagrangeElement(order=orderForTest, highOrderObj=refElemForTest)
    CALL simplexElem%LagrangeElement(order=orderForTrial, highOrderObj=refElemForTrial)

! Here, we create the quadrature points.

    CALL initiate( obj=quad, refelem=simplexElem, order=orderForTest+orderForTrial, &
              quadratureType='GaussLegendre')

! Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].

CALL initiate(obj=elemsdForsimplex, &
    & quad=quad, &
    & refelem=simplexElem, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)

! Initiate an instance of [[ElemeshapeData_]] for test function.

CALL initiate(obj=test, &
    & quad=quad, &
    & refelem=refElemForTest, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
    & dNdXi=elemsdForSimplex%dNdXi)

! Initiate an instance of [[ElemeshapeData_]] for trial function.

CALL initiate(obj=trial, &
    & quad=quad, &
    & refelem=refElemForTrial, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=trial, val=xij, N=elemsdForSimplex%N, &
    & dNdXi=elemsdForSimplex%dNdXi)

! Let us now create the mass matrix.

mat = MassMatrix(test=trial, trial=test)
CALL Display(mat, "mat:")

END PROGRAM main
