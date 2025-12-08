!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  In this test show how to get all the DOF values of an
! element from a user-defined function. In a way, we perform projection
! of a function on the FE space.

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE UserFunction_Class
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_, &
                    TypeFEVariableOpt, &
                    iface_ScalarFunction

USE Display_Method
USE Test_Method
USE ApproxUtility

IMPLICIT NONE

!----------------------------------------------------------------------------
!                                                                  Parameters
!----------------------------------------------------------------------------

INTEGER(I4B), PARAMETER :: iface = 1
INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]
INTEGER(I4B), PARAMETER :: order = 4
CHARACTER(*), PARAMETER :: testname = "test1"
CHARACTER(*), PARAMETER :: myName = "main.out"
CHARACTER(*), PARAMETER :: modName = "GetElemDOFValueFromUserFunction_test_1"

!----------------------------------------------------------------------------
!                                                           Integer variables
!----------------------------------------------------------------------------

INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4), tsize, ii, ipiv(50), &
                tFace

!----------------------------------------------------------------------------
!                                                             Real variables
!----------------------------------------------------------------------------

REAL(DFP) :: refElemCoord(3, 4), ans(50), exactAns(50), args(4), &
             massMat(25, 25), funcValue(50), temp(50), xij(3, 25)

!----------------------------------------------------------------------------
!                                                          Logical variables
!----------------------------------------------------------------------------

LOGICAL(LGT) :: isok

!----------------------------------------------------------------------------
!                                                                       Types
!----------------------------------------------------------------------------

TYPE(QuadraturePoint_) :: allQuad(8), allFacetQuad(8), cellQuad
TYPE(ElemShapeData_) :: cellElemsd, geoCellElemsd, allGeoElemsd(8), &
                        allGeoFacetElemsd(8), allElemsd(8), allFacetElemsd(8)
TYPE(UserFunction_) :: func, func1

!----------------------------------------------------------------------------
!                                                                   Pointers
!----------------------------------------------------------------------------

CLASS(AbstractFE_), POINTER :: feptr => NULL()

!----------------------------------------------------------------------------
!                                                               Main program
!----------------------------------------------------------------------------

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL Display(testname)

! obj, name, returnType, argType, numArgs, numReturns, luaScript, &
! luaFunctionName, returnShape
CALL func%Initiate(name="func1", returnType=TypeFEVariableOpt%scalar, &
                   argType=TypeFEVariableOpt%space, numArgs=4, &
                   numReturns=1)
CALL func%Set(scalarFunction=scalarFunc4)

faceOrient(1, 1) = +1 ! 1 --> 2
faceOrient(1, 2) = +1 ! 2 --> 3
faceOrient(1, 3) = +1 ! 3 --> 4
faceOrient(1, 4) = -1 ! 4 --> 1

feptr => QuadrangleH1LagrangeFEPointer( &
         order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], &
         faceOrient=faceOrient, &
         quadratureIsHomogeneous=.TRUE., &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2 * order])

! Get the reference element coordinates
CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

! Get the interpolation points
CALL feptr%GetInterpolationPoints( &
  xij=refElemCoord, ans=xij, nrow=nrow, ncol=ncol, &
  ipType=[TypeInterpolationOpt%equidistance], order=[order])

!  Getting quadrature for all facets
CALL feptr%GetAllFacetQuadraturePoints( &
  quad=allQuad, facetQuad=allFacetQuad, tsize=tFace)

CALL feptr%GetQuadraturePoints(quad=cellQuad)

CALL feptr%SetOrder(order=1)
CALL feptr%GetAllLocalFacetElemShapeData( &
  elemsd=allGeoElemsd, quad=allQuad, facetElemsd=allGeoFacetElemsd, &
  facetQuad=allFacetQuad, tsize=tFace)

CALL feptr%GetLocalElemShapeData(elemsd=geoCellElemsd, quad=cellQuad)

CALL feptr%SetOrder(order=order)
CALL feptr%GetAllLocalFacetElemShapeData( &
  elemsd=allElemsd, quad=allQuad, facetElemsd=allFacetElemsd, &
  facetQuad=AllFacetQuad, tsize=tFace)

CALL feptr%GetLocalElemShapeData(elemsd=cellElemsd, quad=cellQuad)

CALL feptr%GetAllGlobalFacetElemShapeData( &
  elemsd=allElemsd, facetElemsd=allFacetElemsd, tsize=tFace, &
  geoElemsd=allGeoElemsd, geoFacetElemsd=allGeoFacetElemsd, &
  xij=refElemCoord)

CALL feptr%GetGlobalElemShapeData( &
  elemsd=cellElemsd, xij=refElemCoord, geoElemsd=geoCellElemsd)

CALL feptr%GetDOFValue( &
  cellElemsd=cellElemsd, elemsd=allElemsd, facetElemsd=allFacetElemsd, &
  xij=refElemCoord, times=0.0_DFP, func=func, ans=ans, tsize=tsize, &
  massMat=massMat, ipiv=ipiv, funcValue=funcValue, temp=temp)

CALL Display(tsize, 'tsize: ')
! CALL Display(ans(1:tsize), 'ans: ', full=.TRUE.)

args = 0.0_DFP
DO ii = 1, tsize
  args(1:2) = xij(1:2, ii)
  CALL func%GetScalarValue(val=exactAns(ii), args=args)
  isok = exactAns(ii) .approxeq.ans(ii)
  CALL OK(isok, testname)
END DO

!----------------------------------------------------------------------------
!                                                                   Contains
!----------------------------------------------------------------------------

CONTAINS

PURE FUNCTION scalarFunc1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = 1.0_DFP
END FUNCTION scalarFunc1

PURE FUNCTION scalarFunc2(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ! ans = 1.0_DFP
  ans = x(1)**2 + x(2)**2
  ! ans = y + y**2 + y**3
END FUNCTION scalarFunc2

PURE FUNCTION scalarFunc3(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3
END FUNCTION scalarFunc3

PURE FUNCTION scalarFunc4(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3 + x(1)**4
END FUNCTION scalarFunc4

PURE FUNCTION scalarFunc5(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(1)**2 + x(1)**3 + x(1)**4 + x(1)**5
END FUNCTION scalarFunc5

END PROGRAM main
