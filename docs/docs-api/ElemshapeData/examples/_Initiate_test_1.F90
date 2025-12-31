PROGRAM main
USE GlobalData, ONLY: I4B, DFP, LGT
USE BaseType, ONLY: ElemShapeData_, QuadraturePoint_, ReferenceLine_, &
                    TypePolynomialOpt, TypeQuadratureOpt, TypeH1, &
                    TypeLagrangeInterpolation
USE ReferenceElement_Method
USE ReferenceLine_Method
USE QuadraturePoint_Method
USE ElemShapeData_Method
USE Display_Method
USE String_Class

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd
TYPE(QuadraturePoint_) :: quad
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: quadratureType, ipType, basisType, order

refelem = ReferenceLine(nsd=1_I4B)

order = 4_I4B
quadratureType = TypeQuadratureOpt%gaussLegendre

CALL Initiate(obj=quad, refElem=refElem, order=order, &
              quadratureType=quadratureType)

order = 1
ipType = TypeQuadratureOpt%equidistance
basisType = TypePolynomialOpt%monomial

CALL Initiate(obj=elemsd, quad=quad, refelem=refelem, &
              baseContinuity=TypeH1, &
              baseInterpolation=TypeLagrangeInterpolation, &
              ipType=ipType, basisType=basisType, order=order)

! CALL Display(elemsd%N, "elemsd: ")
! CALL Display(elemsd%dNdXi, "elemsd: ")

CALL Display(ElemShapeData_MdEncode(elemsd), "")

END PROGRAM main

