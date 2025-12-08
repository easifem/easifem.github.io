!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1LagrangeFE_Class
USE BaseType, ONLY: TypeInterpolationOpt, TypePolynomialOpt, &
                    TypeQuadratureOpt

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()

feptr => LineH1LagrangeFEPointer( &
         order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], alpha=[0.0_DFP], &
         beta=[0.0_DFP], lambda=[0.5_DFP], cellOrient=[1_I4B, 0_I4B, 0_I4B], &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2], quadratureAlpha=[0.0_DFP], &
         quadratureBeta=[0.0_DFP], quadratureLambda=[0.5_DFP])

CALL feptr%Display("LineH1LagrangeFE: ")

END PROGRAM main
