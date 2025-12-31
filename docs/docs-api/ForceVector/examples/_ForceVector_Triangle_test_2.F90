!> author: Vikas Sharma, Ph. D.
! date: 2025-09-04
! summary:  Testing ForceVector on triangle element
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
USE BaseType
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
USE FEVariable_Method
USE OnesUtility

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd, geoelemsd
TYPE(QuadraturePoint_) :: quad
TYPE(FEVariable_) :: fevar
REAL(DFP), ALLOCATABLE :: forcevec(:)
INTEGER(I4B) :: quadratureType, ipType, basisType, &
                xidim, nsd, elemType, tsize, nns
REAL(DFP), ALLOCATABLE :: xij(:, :)
CHARACTER(:), ALLOCATABLE :: domainName, test_name

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                       test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B), PARAMETER :: geoorder = 1, quadorder = 4, order = 2
  LOGICAL(LGT) :: isok

  ! Initiate quadrature points
  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%triangle
  domainName = "UNIT"
  nsd = Xidimension(elemtype)
  xidim = Xidimension(elemtype)
  xij = RefCoord(elemType, domainName)
  nns = GetTotalNodes(elemType)

  CALL Initiate(obj=quad, elemType=elemType, domainName=domainName, &
                order=quadorder, quadratureType=quadratureType, xij=xij)

  ipType = TypeQuadratureOpt%equidistance
  basisType = TypePolynomialOpt%monomial
  test_name = "test-1: order = 1, Monomial, Equidistance, Triangle"
  CALL Display(test_name)

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

  CALL Set(obj=elemsd, val=xij(1:nsd, 1:nns), &
           N=geoelemsd%N, dNdXi=geoelemsd%dNdXi)

  fevar = NodalVariable(val=1.0_DFP, rank=TypeFEVariableScalar, &
                        vartype=TypeFEVariableConstant)

  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize, c=fevar, &
                    crank=TypeFEVariableScalar)

  isok = SUM(forcevec) .APPROXEQ.0.5_DFP
  CALL OK(isok, test_name)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B), PARAMETER :: geoorder = 1, quadorder = 4, order = 2
  LOGICAL(LGT) :: isok
  REAL(DFP), ALLOCATABLE :: val(:)

  quadratureType = TypeQuadratureOpt%gaussLegendre
  elemtype = TypeElemNameOpt%triangle
  domainName = "UNIT"
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
  test_name = "test-2: order = 2, Monomial, Equidistance, Triangle"

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

  val = Ones(elemsd%nns, 1.0_DFP)

  fevar = NodalVariable(val=val, rank=TypeFEVariableScalar, &
                        vartype=TypeFEVariableSpace)
  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize, &
                    c=fevar, crank=TypeFEVariableScalar)

  isok = SUM(forcevec) .APPROXEQ.0.5_DFP
  CALL OK(isok, test_name)

  val = Ones(elemsd%nips, 1.0_DFP)
  fevar = QuadratureVariable(val=val, rank=TypeFEVariableScalar, &
                             vartype=TypeFEVariableSpace)
  CALL Reallocate(forcevec, elemsd%nns)
  CALL ForceVector_(test=elemsd, ans=forcevec, tsize=tsize, &
                    c=fevar, crank=TypeFEVariableScalar)

  isok = SUM(forcevec) .APPROXEQ.0.5_DFP
  CALL OK(isok, test_name)
END SUBROUTINE test2

END PROGRAM main
