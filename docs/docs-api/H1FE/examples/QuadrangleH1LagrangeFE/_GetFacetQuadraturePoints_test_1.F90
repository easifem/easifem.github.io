!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE Display_Method
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()
TYPE(QuadraturePoint_) :: quad, facetQuad

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

feptr => QuadrangleH1LagrangeFEPointer( &
         order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], &
         quadratureIsHomogeneous=.TRUE., &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2])

CALL test1
CALL test2
! CALL test3
! CALL test4
! CALL test5
! CALL test6

CONTAINS

SUBROUTINE test1
  CALL Display("test1: ")
  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)
  CALL Display(quad, "quad: ")
  CALL Display(facetQuad, "facetQuad: ")
END SUBROUTINE test1

SUBROUTINE test2
  ! Changing the order of quadrature points
  CALL Display("test2: ")
  CALL feptr%SetQuadratureOrder(order=[4_I4B])

  CALL feptr%GetFacetQuadraturePoints(quad=quad, facetQuad=facetQuad, &
                                      localFaceNumber=1)
  CALL Display(quad, "quad: ")
  CALL Display(facetQuad, "facetQuad: ")
END SUBROUTINE test2

END PROGRAM main
