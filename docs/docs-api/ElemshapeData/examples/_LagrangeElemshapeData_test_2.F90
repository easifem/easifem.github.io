PROGRAM main
USE BaseType, ONLY: ElemShapeData_, QuadraturePoint_, ReferenceLine_
USE GlobalData
USE ElemshapeData_Method
USE QuadraturePoint_Method
USE ReferenceLine_Method
USE Display_Method
USE MdEncode_Method
USE String_Class

IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd
TYPE(QuadraturePoint_) :: quad
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: quadratureType, ipType, basisType, order

refelem = ReferenceLine(nsd=1_I4B)

order = 4_I4B
quadratureType = GaussLegendre

CALL Initiate(obj=quad, refElem=refElem, order=order, &
              quadratureType=quadratureType)

order = 1
ipType = Equidistance
basisType = Monomial

CALL LagrangeElemshapeData(obj=elemsd, quad=quad, refelem=refelem, &
                           ipType=ipType, basisType=basisType, order=order)

! CALL Display(ElemshapeData_MdEncode(elemsd), "")

CALL Display(elemsd, "elemsd: ")

END PROGRAM main
