PROGRAM main
USE GlobalData
USE GnuPlot_Class

TYPE(Gnuplot_) :: gp
INTEGER, PARAMETER :: n = 17
REAL(DFP) :: x(n)
REAL(DFP) :: y(n)

x = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
x = ABS(x) + 5
y = [66, 51, 38, 27, 18, 11, 6, 3, 2, 3, 6, 11, 18, 27, 38, 51, 66]

! Annotation: set title, xlabel, ylabel
CALL gp%title('Example 1. A simple xy plot', '#990011')

CALL gp%xlabel('my x axis ...', '#99aa33', font_name="Tahoma")

! call gp%ylabel('my y axis ...')

CALL gp%options('set border lc "#99aa33"; set ylabel "my label..." tc "#99aa33"')

CALL gp%options('set logscale y2')

CALL gp%plot(x, y)

END PROGRAM main
