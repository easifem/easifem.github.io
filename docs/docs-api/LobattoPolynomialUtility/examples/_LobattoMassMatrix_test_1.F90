! This example shows the usage of `LobattoMassMatrix` method.
! This routine evaluates mass matrix for lobatto polynomials.

PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: n
REAL(dfp), ALLOCATABLE :: ans(:, :)
TYPE(string) :: astr

n = 0
CALL callme

! |         |
! |---------|
! | 0.66667 |

n = 1
CALL callme

! |         |         |
! |---------|---------|
! | 0.66667 | 0.33333 |
! | 0.33333 | 0.66667 |

n = 2
CALL callme

! ||||
! |----------|----------|----------|
! |0.66667|0.33333|-0.40825|
! |0.33333|0.66667|-0.40825|
! |-0.40825|-0.40825|0.4|

n = 3
CALL callme

! |||||
! |----------|----------|----------|-------------|
! |0.66667|0.33333|-0.40825|0.10541|
! |0.33333|0.66667|-0.40825|-0.10541|
! |-0.40825|-0.40825|0.4|0|
! |0.10541|-0.10541|0|9.52381E-02|

n = 4
CALL callme

! ||||||
! |----------|----------|--------------|-------------|--------------|
! |0.66667|0.33333|-0.40825|0.10541|0|
! |0.33333|0.66667|-0.40825|-0.10541|0|
! |-0.40825|-0.40825|0.4|0|-4.36436E-02|
! |0.10541|-0.10541|0|9.52381E-02|0|
! |0|0|-4.36436E-02|0|4.44444E-02|

CONTAINS
SUBROUTINE callme
  ans = LobattoMassMatrix(n=n)
  astr = MdEncode(ans)
  CALL Display("Lobatto mass matrix = ")
  CALL Display(astr, "")
  CALL blanklines(nol=2)
END SUBROUTINE callme

END PROGRAM main
