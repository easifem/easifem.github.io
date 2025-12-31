!> author: Vikas Sharma, Ph. D.
! date: 2025-06-18
! summary:  This program tests the Initiate method of the QuadraturePoint_ class
!           for a reference triangle in the BIUNIT domain using GaussLegendre quadrature.
!           It initializes the QuadraturePoint_ object and displays the results.

PROGRAM main
USE GlobalData
USE QuadraturePoint_Method
USE BaseType
USE Display_Method
USE ReferenceTriangle_Method

IMPLICIT NONE

TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceTriangle_) :: refelem
INTEGER(I4B) :: order
INTEGER(I4B) :: quadratureType
CHARACTER(:), ALLOCATABLE :: test_name, domainName

domainName = "BIUNIT"
refelem = ReferenceTriangle(nsd=2_I4B, xij=RefCoord_Triangle(domainName))
order = 4_I4B
quadratureType = GaussLegendre
test_name = "order="//tostring(order)//" quadratureType=GaussLegendre"// &
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
