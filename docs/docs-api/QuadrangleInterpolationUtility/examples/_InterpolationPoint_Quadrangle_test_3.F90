PROGRAM main
USE QuadrangleInterpolationUtility
USE ReferenceQuadrangle_Method
USE GlobalData
USE Display_Method
USE Test_Method
USE MdEncode_Method
USE String_Class

IMPLICIT NONE

INTEGER(i4b) :: i1, i2, order, ipType
REAL(dfp), ALLOCATABLE :: x(:, :), xij(:, :)
CHARACTER(20) :: layout

order = 3
xij = RefQuadrangleCoord("BIUNIT")
ipType = GaussChebyshevLobatto
layout = "VEFC"

x = InterpolationPoint_Quadrangle(  &
  & order=order, &
  & ipType=ipType,  &
  & layout=layout,  &
  & xij=xij)

CALL display(Mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=")

CALL blanklines(nol=2)

END PROGRAM main

! xij (order=3)=|  |  |
! |  --- |  --- |
! | -1 | -1 |
! | 1 | -1 |
! | 1 | 1 |
! | -1 | 1 |
! | -0.5 | -1 |
! | 0.5 | -1 |
! | 1 | -0.5 |
! | 1 | 0.5 |
! | 0.5 | 1 |
! | -0.5 | 1 |
! | -1 | 0.5 |
! | -1 | -0.5 |
! | -0.5 | -0.5 |
! | 0.5 | -0.5 |
! | 0.5 | 0.5 |
! | -0.5 | 0.5 |
