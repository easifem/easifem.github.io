!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE LineH1LagrangeFE_Class
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
TYPE(QuadraturePoint_) :: quad
TYPE(ElemShapeData_) :: elemsd

feptr => LineH1LagrangeFEPointer( &
         order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
         basisType=[TypePolynomialOpt%monomial], alpha=[0.0_DFP], &
         beta=[0.0_DFP], lambda=[0.5_DFP], cellOrient=[1_I4B, 0_I4B, 0_I4B], &
         quadratureType=[TypeQuadratureOpt%GaussLegendre], &
         quadratureOrder=[2], quadratureAlpha=[0.0_DFP], &
         quadratureBeta=[0.0_DFP], quadratureLambda=[0.5_DFP])

CALL feptr%GetQuadraturePoints(quad=quad)
CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
CALL Display(elemsd%N, "elemsd%N: ")

! Lets change the order of element shape data

CALL feptr%SetOrder(order=2)
CALL feptr%GetLocalElemShapeData(elemsd=elemsd, quad=quad)
CALL Display(elemsd%N, "elemsd%N: ")

END PROGRAM main
