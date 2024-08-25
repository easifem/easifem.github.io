!...............................................................................
! Example 3: Plot several data set at the same time
!...............................................................................

PROGRAM main
USE GnuPlot_Class
USE GlobalData
USE GridPointUtility, ONLY: Linspace

TYPE(GnuPlot_) :: g
INTEGER, PARAMETER :: n = 50
INTEGER, PARAMETER :: m = 65
REAL(DFP) :: x(n)
REAL(DFP) :: y(n)
REAL(DFP) :: xv(m)
REAL(DFP) :: yv(m)

! Input data
x = Linspace(-pi, pi, n)
y = SIN(x) !linspace(a,b,n) create a linear vector in [a,b] with n elements

xv = linspace(0.0_DFP, 2.0_DFP * pi, m)
yv = COS(2.D0 * xv)

! Annotation, set title, xlabel, ylabel
CALL g%title('Example 3. Plot two data series using gnuplot')
CALL g%xlabel(' x axis ...')
CALL g%ylabel(' y axis ...')
CALL g%options('set key top left')

! Sample 1: Plot to draw two set of data
! x1, y1, ls1, axes1, x2, y2, ls2, axes2 are the keyword arguments
CALL g%plot(x, y, 'title "sin"', '', xv, yv, 'title "cos"')

!Sample 2: Use keyword arguments to plot the same example as above
CALL g%title('Example 3. Another plot using keyword arguments...')
CALL g%plot(x1=x, y1=y, ls1='pt 8', x2=xv, y2=yv, ls2='title "cos(2x)"')

! Sample 3: An xy plot with line specification no legends
CALL g%title('Example 3. Another plot without keyword arguments...')
CALL g%plot(x, y, 'title "sin(x)" with points pt 6 lc "blue"', '', &
            xv, yv, 'title "cos(2x)" pt 7 lc rgb "#993300"')

END PROGRAM main
