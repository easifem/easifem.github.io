!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing TriangleH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE TriangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_, &
                    ElemShapeData_

USE Display_Method

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

feptr => TriangleH1LagrangeFEPointer( &
         order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
         basisType=TypePolynomialOpt%monomial, &
         quadratureType=TypeQuadratureOpt%GaussLegendre, &
         quadratureOrder=2)

CALL test1
CALL test2
CALL test3

CONTAINS

!----------------------------------------------------------------------------
!                                                                 test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  TYPE(ElemShapeData_) :: elemsd, facetElemsd
  TYPE(QuadraturePoint_) :: quad, facetQuad

  CALL Display("test1")
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)
  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetQuad=facetQuad, facetElemsd=facetElemsd, &
    localFaceNumber=1)

  CALL Display(facetElemsd%N(1:facetElemsd%nns, 1:facetElemsd%nips), &
               "facetElemsd%N: ")

  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                 test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(ElemShapeData_) :: elemsd, facetElemsd
  TYPE(QuadraturePoint_) :: quad, facetQuad

  CALL Display("test2")
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)

  CALL feptr%SetOrder(order=2)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetQuad=facetQuad, facetElemsd=facetElemsd, &
    localFaceNumber=1)

  CALL Display(facetElemsd%N(1:facetElemsd%nns, 1:facetElemsd%nips), &
               "facetElemsd%N: ")

  CALL Display(elemsd%N(1:elemsd%nns, 1:elemsd%nips), "elemsd%N: ")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                 test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(ElemShapeData_) :: elemsd, geoElemsd, facetElemsd, geoFacetElemsd
  TYPE(QuadraturePoint_) :: quad, facetQuad
  REAL(DFP) :: refElemCoord(3, 3)
  INTEGER(I4B) :: nrow, ncol

  CALL Display("test3")
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)

  CALL feptr%SetOrder(order=1)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=geoElemsd, quad=quad, facetQuad=facetQuad, &
    facetElemsd=geoFacetElemsd, localFaceNumber=1)

  CALL feptr%GetRefElemCoord(ans=refElemCoord, nrow=nrow, ncol=ncol)

  CALL feptr%SetOrder(order=2)

  CALL feptr%GetLocalFacetElemShapeData( &
    elemsd=elemsd, quad=quad, facetQuad=facetQuad, facetElemsd=facetElemsd, &
    localFaceNumber=1)

  CALL feptr%GetGlobalElemShapeData(elemsd=elemsd, xij=refElemCoord, &
                                    geoElemsd=geoElemsd)

  CALL Display(elemsd, "elemsd: ")

  CALL feptr%GetGlobalElemShapeData( &
    elemsd=facetElemsd, xij=refElemCoord(1:2, 1:2), geoElemsd=geoFacetElemsd)

  CALL Display(facetElemsd, "facetElemsd: ")

END SUBROUTINE test3

END PROGRAM main
