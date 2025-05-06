! MODULE SUBROUTINE LagrangeElemShapeData1(obj, quad, nsd, xidim, &
!              elemType, refelemCoord, domainName, order, ipType, basisType, &
!                                       coeff, firstCall, alpha, beta, lambda)

PROGRAM main
USE BaseType, ONLY: ElemShapeData_, QuadraturePoint_, ReferenceLine_
USE GlobalData
USE ElemshapeData_Method
USE QuadraturePoint_Method
USE Display_Method
USE MdEncode_Method
USE String_Class
USE ReferenceElement_Method

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd
TYPE(QuadraturePoint_) :: quad
INTEGER(I4B) :: quadratureType, ipType, basisType, order, xidim, nsd, elemType
CHARACTER(:), ALLOCATABLE :: domainName, test_name
REAL(DFP), ALLOCATABLE :: xij(:, :)

order = 4_I4B
quadratureType = GaussLegendre
elemtype = Line
domainName = "BIUNIT"
nsd = Xidimension(elemtype)
xidim = Xidimension(elemtype)

xij = RefCoord(elemType, domainName)
CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
              order=order, quadratureType=quadratureType, xij=xij)
order = 4
ipType = Equidistance
basisType = Monomial
test_name = "order = 4, Monomial, Equidistance, Line"
CALL callme

order = 4
ipType = GaussLegendreLobatto
basisType = Monomial
test_name = "order = 4, Monomial, GaussLegendreLobatto, Line"
CALL callme

order = 4
ipType = GaussChebyshevLobatto
basisType = Monomial
test_name = "order = 4, Monomial, GaussChebyshevLobatto, Line"
CALL callme

CONTAINS

SUBROUTINE callme

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, nsd=nsd, xidim=xidim, &
                 elemType=elemType, refelemCoord=xij, domainName=domainName, &
                             order=order, ipType=ipType, basisType=basisType)

  CALL Display(test_name)
  CALL Display(elemsd%N, "elemsd%N: ")
  CALL EqualLine()
  CALL Display(elemsd%dNdXi, "elemsd%dNdXi: ")
  CALL EqualLine()
  CALL Display(elemsd%ws, "elemsd%ws: ")

END SUBROUTINE callme

END PROGRAM main
