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
REAL(dfp) :: lambda

order = 3
lambda = 0.5_DFP
xij = RefQuadrangleCoord("BIUNIT")
ipType = GaussUltrasphericalLobatto
layout = "VEFC"

x = InterpolationPoint_Quadrangle( &
  & order=order, &
  & ipType=ipType, &
  & layout=layout, &
  & xij=xij, &
  & lambda=lambda)

CALL display(Mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)
END PROGRAM main

! xij (order=3)=|  |  |
! |  --- |  --- |
! | -1 | -1 |
! | 1 | -1 |
! | 1 | 1 |
! | -1 | 1 |
! | -0.44721 | -1 |
! | 0.44721 | -1 |
! | 1 | -0.44721 |
! | 1 | 0.44721 |
! | 0.44721 | 1 |
! | -0.44721 | 1 |
! | -1 | 0.44721 |
! | -1 | -0.44721 |
! | -0.44721 | -0.44721 |
! | 0.44721 | -0.44721 |
! | 0.44721 | 0.44721 |
! | -0.44721 | 0.44721 |
