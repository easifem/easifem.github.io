!> author: Vikas Sharma, Ph. D.
! date: 2025-09-04
! summary:  Testing ForceVector on line element
!
! Following interface is tested
!
! INTERFACE ForceVector
!   MODULE PURE FUNCTION ForceVector1(test) RESULT(ans)
!     CLASS(ElemshapeData_), INTENT(IN) :: test
!     REAL(DFP), ALLOCATABLE :: ans(:)
!   END FUNCTION ForceVector1
! END INTERFACE ForceVector

PROGRAM main
USE GlobalData, ONLY: I4B, DFP, LGT
USE BaseType, ONLY: ElemShapeData_, &
                    QuadraturePoint_, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    TypeH1, &
                    TypeLagrangeInterpolation, &
                    TypeElemNameOpt

USE ReferenceElement_Method
USE ReferenceLine_Method
USE QuadraturePoint_Method
USE ElemShapeData_Method
USE Display_Method
USE String_Class
USE ForceVector_Method
USE ReallocateUtility

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd
TYPE(QuadraturePoint_) :: quad
REAL(DFP), ALLOCATABLE :: forcevec(:)
INTEGER(I4B) :: quadratureType, ipType, basisType, &
                order, xidim, nsd, elemType, tsize, nns
REAL(DFP), ALLOCATABLE :: xij(:, :)
CHARACTER(:), ALLOCATABLE :: domainName, test_name

CALL test1
CALL test2
CALL test3

CONTAINS

!----------------------------------------------------------------------------
!                                                                       test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  ! Initiate quadrature points
  order = 2
  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%line
  domainName = "BIUNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)

  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)
  CALL Display(xij(1:nsd, 1:nns), "xij: ")

  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=order, quadratureType=quadratureType, xij=xij)

  order = 1
  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-1: order = 1, Monomial, Equidistance, Line"

  CALL Display(test_name)

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=order, ipType=ipType, &
                             basisType=basisType)

  CALL Set(obj=elemsd, &
           val=xij(1:nsd, 1:nns), &
           N=elemsd%N(1:elemsd%nns, 1:elemsd%nips), &
           dNdXi=elemsd%dNdXi(1:elemsd%nns, 1:elemsd%xidim, 1:elemsd%nns))

  ! CALL Display(elemsd, "elemsd: ")

  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize)
  CALL Display(forcevec, "forcevec:")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  ! Initiate quadrature points
  order = 4
  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%line
  domainName = "BIUNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)
  nns = GetTotalNodes(elemtype)
  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)
  CALL Display(xij(1:nsd, 1:nns), "xij: ")

  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=order, quadratureType=quadratureType, &
                xij=xij(1:nsd, 1:nns))

  order = 2
  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-2: order = 2, Monomial, Equidistance, Line"

  CALL Display(test_name)

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=order, ipType=ipType, &
                             basisType=basisType)

  CALL Set(obj=elemsd, &
           val=xij(1:nsd, 1:nns), &
           N=elemsd%N(1:elemsd%nns, 1:elemsd%nips), &
           dNdXi=elemsd%dNdXi(1:elemsd%nns, 1:elemsd%xidim, 1:elemsd%nns))

  ! CALL Display(elemsd, "elemsd: ")

  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize)
  CALL Display(forcevec, "forcevec:")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test3
  ! Initiate quadrature points
  order = 6
  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%line
  domainName = "BIUNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)
  nns = GetTotalNodes(elemtype)
  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)
  CALL Display(xij(1:nsd, 1:nns), "xij: ")

  xij = RefCoord(elemType, domainName)
  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=order, quadratureType=quadratureType, &
                xij=xij(1:nsd, 1:nns))

  order = 3
  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-3: order = 2, Monomial, Equidistance, Line"

  CALL Display(test_name)

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=order, ipType=ipType, &
                             basisType=basisType)

  CALL Set(obj=elemsd, &
           val=xij(1:nsd, 1:nns), &
           N=elemsd%N(1:elemsd%nns, 1:elemsd%nips), &
           dNdXi=elemsd%dNdXi(1:elemsd%nns, 1:elemsd%xidim, 1:elemsd%nns))

  ! CALL Display(elemsd, "elemsd: ")

  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize)
  CALL Display(forcevec, "forcevec:")
END SUBROUTINE test3

END PROGRAM main
