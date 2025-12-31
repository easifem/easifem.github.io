!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

USE Display_Method

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1
! CALL test2
! CALL test3
! CALL test4

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4)
  REAL(DFP) :: refElemCoord(3, 4)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  INTEGER(I4B), PARAMETER :: iface = 1
  INTEGER(I4B), PARAMETER :: nptrs(5) = [1, 2, 5, 6, 7]

  CALL Display("test2: elemsd%order=4 : cellorient=-1")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  !elemsd, facetElemsd, localFaceNumber, geoElemsd, geoFacetElemsd, xij)
  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  CALL Display(elemsd%N(nptrs, 1:elemsd%nips), "elemsd%N: ", full=.TRUE.)
  CALL Display(facetElemsd%N(1:facetElemsd%nns, 1:facetElemsd%nips), &
               "facetElemsd%N: ", full=.TRUE.)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4)
  REAL(DFP) :: refElemCoord(3, 4)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  INTEGER(I4B), PARAMETER :: iface = 2
  INTEGER(I4B), PARAMETER :: nptrs(5) = [2, 3, 8, 9, 10]

  CALL Display("test2: elemsd%order=4 : cellorient=-1")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  !elemsd, facetElemsd, localFaceNumber, geoElemsd, geoFacetElemsd, xij)
  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  CALL Display(elemsd%N(nptrs, 1:elemsd%nips), "elemsd%N: ", full=.TRUE.)
  CALL Display(facetElemsd%N(1:facetElemsd%nns, 1:facetElemsd%nips), &
               "facetElemsd%N: ", full=.TRUE.)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                 test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4)
  REAL(DFP) :: refElemCoord(3, 4)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  INTEGER(I4B), PARAMETER :: iface = 3
  INTEGER(I4B), PARAMETER :: nptrs(5) = [3, 4, 11, 12, 13]

  CALL Display("test3: elemsd%order=4 : cellorient=-1")

  faceOrient(1, 1) = +1 ! 1 --> 2
  faceOrient(1, 2) = +1 ! 2 --> 3
  faceOrient(1, 3) = -1 ! 3 --> 4
  faceOrient(1, 4) = -1 ! 4 --> 1

  feptr => QuadrangleH1LagrangeFEPointer( &
           order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
           basisType=[TypePolynomialOpt%monomial], &
           faceOrient=faceOrient, &
           quadratureIsHomogeneous=.TRUE., &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  !elemsd, facetElemsd, localFaceNumber, geoElemsd, geoFacetElemsd, xij)
  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  CALL Display(elemsd%N(nptrs, 1:elemsd%nips), "elemsd%N: ", full=.TRUE.)
  CALL Display(facetElemsd%N(1:facetElemsd%nns, 1:facetElemsd%nips), &
               "facetElemsd%N: ", full=.TRUE.)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                 test4
!----------------------------------------------------------------------------

SUBROUTINE test4
  INTEGER(I4B) :: nrow, ncol, faceOrient(3, 4)
  REAL(DFP) :: refElemCoord(3, 4)
  TYPE(QuadraturePoint_) :: quad, facetQuad
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  INTEGER(I4B), PARAMETER :: iface = 4
  INTEGER(I4B), PARAMETER :: nptrs(5) = [4, 1, 14, 15, 16]

  CALL Display("test4: elemsd%order=4 : cellorient=-1")

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
           quadratureOrder=[2])

  !  Getting quadrature for interpolation points
  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=iface)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetElemsd=geoFacetElemsd, &
    facetQuad=facetQuad, localFaceNumber=iface)

  CALL feptr%SetOrder(order=4)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetElemsd=facetElemsd, facetQuad=facetQuad, &
    localFaceNumber=iface)

  !elemsd, facetElemsd, localFaceNumber, geoElemsd, geoFacetElemsd, xij)
  CALL feptr%GetGlobalFacetElemShapeData( &
    elemsd=elemsd, facetElemsd=facetElemsd, localFaceNumber=iface, &
    geoElemsd=geoElemsd, geoFacetElemsd=geoFacetElemsd, xij=refElemCoord)

  CALL Display(elemsd%N(nptrs, 1:elemsd%nips), "elemsd%N: ", full=.TRUE.)
  CALL Display(facetElemsd%N(1:facetElemsd%nns, 1:facetElemsd%nips), &
               "facetElemsd%N: ", full=.TRUE.)
END SUBROUTINE test4

END PROGRAM main
