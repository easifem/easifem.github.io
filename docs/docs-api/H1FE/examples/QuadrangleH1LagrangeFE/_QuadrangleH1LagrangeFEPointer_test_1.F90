!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE QuadrangleH1LagrangeFE_Class
USE BaseType, ONLY: TypeInterpolationOpt, TypePolynomialOpt, &
                    TypeQuadratureOpt

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

feptr => QuadrangleH1LagrangeFEPointer( &
         order=1, nsd=2, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], &
         quadratureIsHomogeneous=.TRUE., &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2])

CALL feptr%Display("QuadrangleH1LagrangeFE: ")

END PROGRAM main
