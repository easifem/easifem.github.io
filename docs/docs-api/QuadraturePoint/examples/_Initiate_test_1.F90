PROGRAM main
USE GlobalData
USE QuadraturePoint_Method
USE BaseType
USE Display_Method
USE ReferenceLine_Method

IMPLICIT NONE

TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order
INTEGER(I4B) :: quadratureType
CHARACTER(:), ALLOCATABLE :: test_name, domainName

domainName = "BIUNIT"
refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
order = 4_I4B
quadratureType = GaussLegendre
test_name = "order="//tostring(order)//" quadratureType=GaussLegendre"// &
            " refelemDomain="//domainName
CALL call_test

domainName = "UNIT"
refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
order = 4_I4B
quadratureType = GaussLegendre
test_name = "order="//tostring(order)//" quadratureType=GaussLegendre"// &
            " refelemDomain="//domainName
CALL call_test

domainName = "BIUNIT"
refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
order = 4_I4B
quadratureType = GaussLegendreLobatto
test_name = "order="//tostring(order)//" quadratureType=GaussLegendreLobatto"// &
            " refelemDomain="//domainName
CALL call_test

domainName = "BIUNIT"
refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
order = 4_I4B
quadratureType = GaussLegendreRadauLeft
test_name = "order="//tostring(order)//" quadratureType=GaussLegendreRadauLeft"// &
            " refelemDomain="//domainName
CALL call_test

domainName = "BIUNIT"
refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
order = 4_I4B
quadratureType = GaussLegendreRadauRight
test_name = "order="//tostring(order)//" quadratureType=GaussLegendreRadauRight"// &
            " refelemDomain="//domainName
CALL call_test

CONTAINS

SUBROUTINE call_test

  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureType)

  CALL BlankLines()
  CALL Display(obj, test_name)
  CALL BlankLines()

END SUBROUTINE call_test

END PROGRAM main
