!> author: Vikas Sharma, Ph. D.
! date: 2025-10-10
! summary:  Testing LineH1LagrangeFEPointer

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE AbstractFE_Class
USE TriangleH1LagrangeFE_Class
USE QuadraturePoint_Method
USE BaseType, ONLY: TypeInterpolationOpt, &
                    TypePolynomialOpt, &
                    TypeQuadratureOpt, &
                    QuadraturePoint_

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: feptr => NULL()
TYPE(QuadraturePoint_) :: quad

feptr => TriangleH1LagrangeFEPointer( &
         order=1, nsd=1, ipType=TypeInterpolationOpt%equidistance, &
         basisType=TypePolynomialOpt%monomial, &
         quadratureType=TypeQuadratureOpt%GaussLegendre, &
         quadratureOrder=2)

CALL feptr%GetQuadraturePoints(quad=quad)
CALL Display(quad, "Quadrature points order=2 : ")

! Changing the order of quadrature points
CALL feptr%SetQuadratureOrder(order=[4_I4B])
CALL feptr%GetQuadraturePoints(quad=quad)
CALL Display(quad, "Quadrature points order=4 : ")

! Changing the order of quadrature points
CALL feptr%SetQuadratureOrder(order1=6_I4B)
CALL feptr%GetQuadraturePoints(quad=quad)
CALL Display(quad, "Quadrature points order=6 : ")

! Changing the quadrature type
CALL feptr%SetQuadratureType(quadratureType= &
                             [TypeQuadratureOpt%GaussLegendreLobatto])
CALL feptr%SetQuadratureOrder(order1=2_I4B)
CALL feptr%GetQuadraturePoints(quad=quad)
CALL Display(quad, "Quadrature points order=2 : ")

END PROGRAM main
