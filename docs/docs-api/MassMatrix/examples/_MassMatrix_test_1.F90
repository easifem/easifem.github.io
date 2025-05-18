PROGRAM main
USE BaseType, ONLY: ElemShapeData_, QuadraturePoint_, ReferenceLine_
USE GlobalData, ONLY: DFP, I4B
USE QuadraturePoint_Method, ONLY: QuadPoint_Initiate => Initiate, &
                                  Quad_Size => Size

IMPLICIT NONE

TYPE(ElemShapeData_) :: test, trial
TYPE(QuadraturePoint_) :: quad
TYPE(ReferenceLine_) :: refelem
REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
INTEGER(I4B), PARAMETER :: order = 2, one_i = 1
INTEGER(I4B) :: nns, nips, tsize

! Let us now create the physical coordinate of the line element.

XiJ = RESHAPE([-1, 1], [1, 2])

! Now  we create an instance of [[ReferenceLine_]].

refelem = ReferenceLine(nsd=1)

! Here, we create the quadrature points.

CALL QuadPoint_Initiate(obj=quad, elemType=elem%line, &
                        domainName="B", order=integralOrder, &
                        quadratureType=obj%quadTypeForTime)
nips = Quad_Size(quad, 2)
nns = order + 1

CALL Elemsd_Allocate(obj=elemsd, nsd=one_i, xidim=one_i, &
                     nns=nns, nips=nips)

! Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]]

CALL Initiate(obj=test, &
    & quad=quad, &
    & refelem=refelem, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)

! Let us now create the mass matrix.

mat = MassMatrix(test=test, trial=test)
CALL Display(mat, "mat:")

END PROGRAM main
