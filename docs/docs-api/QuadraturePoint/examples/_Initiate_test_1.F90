!> author: Vikas Sharma, Ph. D.
! date: 2025-06-17
! summary:  This program tests the Initiate method of the QuadraturePoint_ class.
!           It runs five tests with different quadrature types and reference line domains:
!           GaussLegendre (BIUNIT, UNIT), GaussLegendreLobatto (BIUNIT),
!           GaussLegendreRadauLeft (BIUNIT), and GaussLegendreRadauRight (BIUNIT).
!           Only Line elements are tested in this example.

PROGRAM main
USE GlobalData
USE QuadraturePoint_Method
USE BaseType
USE Display_Method
USE ReferenceLine_Method

IMPLICIT NONE

TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order, nip(1), quadratureType
CHARACTER(:), ALLOCATABLE :: test_name, domainName, quadratureTypeChar

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                    test1
!----------------------------------------------------------------------------

! This subroutine tests the Initiate method with GaussLegendre quadrature
! on a reference line in the BIUNIT domain.
! It initializes the QuadraturePoint_ object and displays the results.

SUBROUTINE test1
  domainName = "BIUNIT"
  refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
  order = 4_I4B
  quadratureType = GaussLegendre
  quadratureTypeChar = "GaussLegendre"
  nip(1) = 3
  test_name = "order="//tostring(order)//" quadratureType=GaussLegendre"// &
              " refelemDomain="//domainName

  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureType)

  CALL BlankLines()
  CALL Display(obj, test_name)
  CALL BlankLines()

  ! In the above interface we are creating quadrature points of
  ! given accuracy. We can also specify the number of quadrature point
  ! as show below
  CALL Initiate(obj=obj, refelem=refelem, nips=nip, &
                quadratureType=quadratureType)

  ! We can also specify quadratureType as string
  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureTypeChar)

  CALL Initiate(obj=obj, refelem=refelem, nips=nip, &
                quadratureType=quadratureTypeChar)

END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2

  domainName = "UNIT"
  refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
  order = 4_I4B
  quadratureType = GaussLegendre
  test_name = "order="//tostring(order)//" quadratureType=GaussLegendre"// &
              " refelemDomain="//domainName

  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureType)

  CALL BlankLines()
  CALL Display(obj, test_name)
  CALL BlankLines()
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                     test3
!----------------------------------------------------------------------------

! This subroutine tests the Initiate method with GaussLegendre quadrature
! on a reference line in the UNIT domain.
! It initializes the QuadraturePoint_ object and displays the results.

SUBROUTINE test3
  domainName = "BIUNIT"
  refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
  order = 4_I4B
  quadratureType = GaussLegendreLobatto
test_name = "order="//tostring(order)//" quadratureType=GaussLegendreLobatto"// &
              " refelemDomain="//domainName

  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureType)

  CALL BlankLines()
  CALL Display(obj, test_name)
  CALL BlankLines()
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                     test4
!----------------------------------------------------------------------------

! This subroutine tests the Initiate method with GaussLegendreRadauLeft quadrature
! on a reference line in the BIUNIT domain.
! It initializes the QuadraturePoint_ object and displays the results.

SUBROUTINE test4
  domainName = "BIUNIT"
  refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
  order = 4_I4B
  quadratureType = GaussLegendreRadauLeft
test_name = "order="//tostring(order)//" quadratureType=GaussLegendreRadauLeft"// &
              " refelemDomain="//domainName

  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureType)

  CALL BlankLines()
  CALL Display(obj, test_name)
  CALL BlankLines()
END SUBROUTINE test4

!----------------------------------------------------------------------------
!                                                                     test5
!----------------------------------------------------------------------------

! This subroutine tests the Initiate method with GaussLegendreRadauRight quadrature
! on a reference line in the BIUNIT domain.
! It initializes the QuadraturePoint_ object and displays the results.

SUBROUTINE test5
  domainName = "BIUNIT"
  refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line(domainName))
  order = 4_I4B
  quadratureType = GaussLegendreRadauRight
test_name = "order="//tostring(order)//" quadratureType=GaussLegendreRadauRight"// &
              " refelemDomain="//domainName

  CALL Initiate(obj=obj, refelem=refelem, order=order, &
                quadratureType=quadratureType)

  CALL BlankLines()
  CALL Display(obj, test_name)
  CALL BlankLines()
END SUBROUTINE test5

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

END PROGRAM main
