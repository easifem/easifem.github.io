PROGRAM main
USE QuadrangleInterpolationUtility
USE ReferenceQuadrangle_Method
USE GlobalData
USE Display_Method
USE Test_Method
USE MdEncode_Method
USE String_Class

IMPLICIT NONE

INTEGER(I4B) :: i1, i2, order, ipType
REAL(DFP), ALLOCATABLE :: x(:, :), xij(:, :)
CHARACTER(20) :: layout
REAL(DFP) :: alpha, beta

order = 3
xij = RefQuadrangleCoord("BIUNIT")
ipType = GaussJacobiLobatto
layout = "VEFC"
alpha = 0.0_DFP
beta = 0.0_DFP

x = InterpolationPoint_Quadrangle(  &
  & order=order, &
  & ipType=ipType, &
  & layout=layout, &
  & xij=xij, &
  & alpha=alpha, &
  & beta=beta)

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
