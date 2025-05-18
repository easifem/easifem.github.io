PROGRAM main
USE BaseType, ONLY: ElemShapeData_, &
                    QuadraturePoint_, &
                    elem => TypeElemNameOpt, &
                    quadType => TypeQuadratureOpt, &
                    iptype => TypeInterpolationOpt, &
                    basisType => TypePolynomialOpt

USE GlobalData, ONLY: DFP, I4B

USE QuadraturePoint_Method, ONLY: QuadPoint_Initiate => Initiate, &
                                  Quad_Size => Size

USE Display_Method, ONLY: Display

USE ElemshapeData_Method, ONLY: LagrangeElemShapeData, &
                                Elemsd_Allocate => ALLOCATE, &
                                Elemsd_Set => Set, &
                                Elemsd_Display => Display

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd, linelemsd
TYPE(QuadraturePoint_) :: quad
REAL(DFP), ALLOCATABLE :: mat(:, :), xij(:, :)
INTEGER(I4B), PARAMETER :: order = 2, one_i = 1
REAL(DFP), PARAMETER :: refElemCoord(1, 2) = &
                        RESHAPE([-1.0_DFP, 1.0_DFP], [1, 2])
INTEGER(I4B) :: nns, nips, tsize, integralOrder
CHARACTER(LEN=*), PARAMETER :: domainName = "B"

! Let us now create the physical coordinate of the line element.
xij = RESHAPE([-1, 1], [1, 2])
integralOrder = 2 * order

! Here, we create the quadrature points.
CALL QuadPoint_Initiate(obj=quad, elemType=elem%line, &
                        domainName=domainName, order=integralOrder, &
                        quadratureType=quadType%GaussLegendre)
nips = Quad_Size(quad, 2)
nns = order + 1

CALL Display(nips, "number of integration points: ")
CALL Display(nns, "number of nodes in space: ")

CALL Elemsd_Allocate(obj=elemsd, nsd=one_i, xidim=one_i, &
                     nns=nns, nips=nips)

! Initiate an instance of ElemshapeData_ for linear geometry.
CALL LagrangeElemShapeData(obj=linelemsd, quad=quad, nsd=elemsd%nsd, &
                           xidim=elemsd%xidim, elemtype=elem%line, &
                           refelemCoord=refelemCoord, domainName=domainName, &
                           order=one_i)

CALL LagrangeElemShapeData(obj=elemsd, quad=quad, nsd=elemsd%nsd, xidim=elemsd%xidim, &
                           elemType=elem%line, refelemCoord=refelemCoord, &
                           domainName=domainName, order=order, &
                           ipType=iptype%GaussLegendreLobatto, &
                           basisType=basisType%Monomial)

CALL Elemsd_Set(obj=elemsd, val=xij, N=linelemsd%N, dNdXi=linelemsd%dNdXi)

CALL Elemsd_Display(elemsd, "elemsd:")

! ! Let us now create the mass matrix.
!
! mat = MassMatrix(test=test, trial=test)
! CALL Display(mat, "mat:")

END PROGRAM main
