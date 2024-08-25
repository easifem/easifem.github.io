!...............................................................................
! Example 4: Plot four data series, the maximum number of data series can be plotted!
!...............................................................................

PROGRAM main
USE GnuPlot_Class
USE GlobalData
USE GridPointUtility, ONLY: Linspace

IMPLICIT NONE

INTEGER, PARAMETER :: n = 50
INTEGER, PARAMETER :: m = 65
CHARACTER(*), PARAMETER :: filename = "example4.plt"

TYPE(GnuPlot_) :: gp
REAL(dfp) :: x(n)
REAL(dfp) :: y(n)
REAL(dfp) :: xv(m)
REAL(dfp) :: yv(m)

! Input data
x = linspace(-pi, pi, n) !linspace is a utility function from module ogpf
y = SIN(x)

xv = linspace(0.D0, 2.D0 * pi, m)
yv = COS(2.D0 * xv)

! This is the maximum number of plot can be drawn at the same time
! If you have more data see, you can plot can be used with matrices!
CALL gp%title('Example 4. Plot four data sets using gnuplot')
CALL gp%options('set key top left; set grid')
CALL gp%filename(filename)

CALL gp%plot(x, y, 'title "sin(x)"', '', &
             xv, yv, 'with lp lt 6 title "cos(2x)"', '', &
             xv, 2.D0 * yv, 'title "2cos(2x)" lt 7', '', &
             xv, 0.5D0 * yv, 'title "0.5cos(2x)" with points pt 8')

! Another example with keyboard arguments
CALL gp%plot(x1=x, y1=y, x2=xv, y2=yv)

END PROGRAM main
