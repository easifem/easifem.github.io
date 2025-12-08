!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1HierarchicalFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1HierarchicalFE_Class
USE BaseType, ONLY: TypeInterpolationOpt, TypePolynomialOpt, &
                    TypeQuadratureOpt

IMPLICIT NONE

CALL test1

CONTAINS
SUBROUTINE test1
  CLASS(AbstractFE_), POINTER :: feptr => NULL()

  feptr => LineH1HierarchicalFEPointer( &
           order=1, nsd=1, cellOrient=[1_I4B, 0_I4B, 0_I4B], &
           quadratureType=[TypeQuadratureOpt%GaussLegendre], &
           quadratureOrder=[2], quadratureAlpha=[0.0_DFP], &
           quadratureBeta=[0.0_DFP], quadratureLambda=[0.5_DFP])

  CALL feptr%Display("feptr test1: ")
END SUBROUTINE test1

END PROGRAM main
