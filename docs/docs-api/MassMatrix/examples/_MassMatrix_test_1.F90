PROGRAM main
USE BaseType, ONLY: ElemShapeData_, &
                    QuadraturePoint_, &
                    elem => TypeElemNameOpt, &
                    quadType => TypeQuadratureOpt, &
                    iptype => TypeInterpolationOpt, &
                    polyType => TypePolynomialOpt

USE GlobalData, ONLY: DFP, I4B

USE QuadraturePoint_Method, ONLY: QuadPoint_Initiate => Initiate, &
                                  Quad_Size => Size

USE Display_Method, ONLY: Display

USE ElemshapeData_Method, ONLY: LagrangeElemShapeData, &
                                Elemsd_Allocate => ALLOCATE, &
                                Elemsd_Set => Set, &
                                Elemsd_Display => Display
USE MassMatrix_Method, ONLY: MassMatrix

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd, linelemsd
TYPE(QuadraturePoint_) :: quad
REAL(DFP), ALLOCATABLE :: mat(:, :)
INTEGER(I4B) :: nips, tsize

CHARACTER(LEN=*), PARAMETER :: domainName = "B"
INTEGER(I4B), PARAMETER :: order = 2, &
                           one_i = 1, &
                           integralOrder = 2 * order, &
                           nns = order + 1
INTEGER(I4B), PARAMETER :: elemType = elem%line
INTEGER(I4B), PARAMETER :: quadratureType = quadType%GaussLegendre
INTEGER(I4B), PARAMETER :: interpolationType = iptype%GaussLegendreLobatto
INTEGER(I4B), PARAMETER :: basisType = polyType%Monomial
REAL(DFP), PARAMETER :: refElemCoord(1, 2) = RESHAPE([-1.0_DFP, 1.0_DFP], [1, 2])
REAL(DFP), PARAMETER :: xij(1, 2) = RESHAPE([-1.0_DFP, 1.0_DFP], [1, 2])

! Here, we create the quadrature points.
CALL QuadPoint_Initiate(obj=quad, elemType=elemType, &
                        domainName=domainName, order=integralOrder, &
                        quadratureType=quadratureType)
nips = Quad_Size(quad, 2)

CALL Display(nips, "number of integration points: ")
CALL Display(nns, "number of nodes in space: ")

CALL Elemsd_Allocate(obj=elemsd, nsd=one_i, xidim=one_i, &
                     nns=nns, nips=nips)

! Initiate an instance of ElemshapeData_ for linear geometry.
CALL LagrangeElemShapeData(obj=linelemsd, quad=quad, nsd=elemsd%nsd, &
                           xidim=elemsd%xidim, elemType=elemType, &
                           refelemCoord=refelemCoord, domainName=domainName, &
                           order=one_i)

CALL LagrangeElemShapeData(obj=elemsd, quad=quad, nsd=elemsd%nsd, xidim=elemsd%xidim, &
                           elemType=elemType, refelemCoord=refelemCoord, &
                           domainName=domainName, order=order, &
                           ipType=interpolationType, &
                           basisType=polyType%Monomial)

CALL Elemsd_Set(obj=elemsd, val=xij, N=linelemsd%N, dNdXi=linelemsd%dNdXi)

CALL Elemsd_Display(elemsd, "elemsd:")

! Let us now create the mass matrix.
mat = MassMatrix(test=elemsd, trial=elemsd)
CALL Display(mat, "mass matrix:")
CALL Display(SUM(mat, dim=2), "row sum of mass matrix:")

END PROGRAM main
