!> author: Vikas Sharma, Ph. D.
! date: 2025-09-04
! summary:  Testing ForceVector on quadrangle element
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
USE Test_Method
USE ApproxUtility

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd, geoelemsd
TYPE(QuadraturePoint_) :: quad
REAL(DFP), ALLOCATABLE :: forcevec(:)
INTEGER(I4B) :: quadratureType, ipType, basisType, &
                xidim, nsd, elemType, tsize, nns
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
  INTEGER(I4B), PARAMETER :: geoorder = 1, quadorder = 2, order = 1
  LOGICAL(LGT) :: isok

  ! Initiate quadrature points
  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%quadrangle
  domainName = "BIUNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)
  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)

  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=quadorder, quadratureType=quadratureType, xij=xij)

  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-1: order = 1, Monomial, Equidistance, Quadrangle"

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, &
                             nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=order, ipType=ipType, &
                             basisType=basisType)

  CALL LagrangeElemshapeData(obj=geoelemsd, quad=quad, &
                             nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=geoorder, ipType=ipType, &
                             basisType=basisType)

  CALL Set(obj=elemsd, val=xij(1:nsd, 1:nns), N=geoelemsd%N, &
           dNdXi=geoelemsd%dNdXi)

  ! CALL Display(xij(1:nsd, 1:nns), "xij: ")
  ! CALL Display(elemsd, "elemsd: ")
  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize)

  isok = SUM(forcevec) .APPROXEQ.4.0_DFP
  CALL OK(isok, test_name)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B), PARAMETER :: geoorder = 1, quadorder = 4, order = 2
  LOGICAL(LGT) :: isok

  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%quadrangle
  domainName = "BIUNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)
  nns = GetTotalNodes(elemtype)
  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)

  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=quadorder, quadratureType=quadratureType, &
                xij=xij(1:nsd, 1:nns))

  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-2: order = 2, Monomial, Equidistance, Quadrangle"

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, &
                             nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=order, ipType=ipType, &
                             basisType=basisType)

  CALL LagrangeElemshapeData(obj=geoelemsd, quad=quad, &
                             nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=geoorder, ipType=ipType, &
                             basisType=basisType)

  CALL Set(obj=elemsd, &
           val=xij(1:nsd, 1:nns), &
           N=geoelemsd%N, &
           dNdXi=geoelemsd%dNdXi)

  ! CALL Display(xij(1:nsd, 1:nns), "elemsd%xij: ")
  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize)
  ! CALL Display(SUM(forcevec), "sum forcevec: ")

  isok = SUM(forcevec) .APPROXEQ.4.0_DFP
  CALL OK(isok, test_name)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B), PARAMETER :: geoorder = 1, quadorder = 6, order = 3
  LOGICAL(LGT) :: isok

  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%quadrangle
  domainName = "BIUNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)
  nns = GetTotalNodes(elemtype)
  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)

  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=quadorder, quadratureType=quadratureType, &
                xij=xij(1:nsd, 1:nns))

  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-3: order = 3, Monomial, Equidistance, Quadrangle"

  CALL LagrangeElemshapeData(obj=elemsd, quad=quad, &
                             nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=order, ipType=ipType, &
                             basisType=basisType)

  CALL LagrangeElemshapeData(obj=geoelemsd, quad=quad, &
                             nsd=nsd, xidim=xidim, &
                             elemType=elemType, &
                             refelemCoord=xij(1:nsd, 1:nns), &
                             domainName=domainName, &
                             order=geoorder, ipType=ipType, &
                             basisType=basisType)

  CALL Set(obj=elemsd, val=xij(1:nsd, 1:nns), N=geoelemsd%N, &
           dNdXi=geoelemsd%dNdXi)

  ! CALL Display(xij(1:nsd, 1:nns), "elemsd%xij: ")
  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize)
  ! CALL Display(SUM(forcevec), "sum forcevec: ")

  isok = SUM(forcevec) .APPROXEQ.4.0_DFP
  CALL OK(isok, test_name)
END SUBROUTINE test3

END PROGRAM main
