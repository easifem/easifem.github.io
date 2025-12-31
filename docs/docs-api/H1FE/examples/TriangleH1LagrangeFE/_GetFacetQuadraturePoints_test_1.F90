!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE TriangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE Display_Method
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

feptr => TriangleH1LagrangeFEPointer( &
         order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
         basisType=TypePolynomialOpt%monomial, &
         quadratureType=TypeQuadratureOpt%GaussLegendre, &
         quadratureOrder=2)

CALL test1
CALL test2
CALL test3

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  TYPE(QuadraturePoint_) :: quad, facetQuad

  CALL Display("test1: ")
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)
  CALL Display(quad, "quad : ")
  CALL Display(facetQuad, "facetQuad : ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(QuadraturePoint_) :: quad, facetQuad

  CALL Display("test2: ")
  ! Changing the order of quadrature points
  CALL feptr%SetQuadratureOrder(order=[4_I4B])
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)
  CALL Display(quad, "quad : ")
  CALL Display(facetQuad, "facetQuad : ")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                      test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(QuadraturePoint_) :: quad, facetQuad

  CALL Display("test3: ")
  ! Changing the order of quadrature points
  CALL feptr%SetQuadratureType( &
    quadratureType=[TypeQuadratureOpt%GaussLegendreLobatto])
  CALL feptr%SetQuadratureOrder(order=[2_I4B])
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)
  CALL Display(quad, "quad : ")
  CALL Display(facetQuad, "facetQuad : ")
END SUBROUTINE test3

END PROGRAM main
