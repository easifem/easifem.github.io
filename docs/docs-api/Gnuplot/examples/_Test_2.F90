!...............................................................................
!Example 2: Set line specification and legends
!...............................................................................

PROGRAM main
USE GnuPlot_Class
USE GlobalData

TYPE(GnuPlot_) :: gp
INTEGER, PARAMETER :: n = 17
REAL(dfp) :: x(n)
REAL(dfp) :: y(n)

! Input data
x = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
y = [66, 51, 38, 27, 18, 11, 6, 3, 2, 3, 6, 11, 18, 27, 38, 51, 66]

! Annotation: set title, xlabel, ylabel, line specification
CALL gp%title('Example 2. A simple xy plot')
CALL gp%xlabel('my x axis ...')
CALL gp%ylabel('my y axis ...')

!Call Plot to draw a vector against a vector of data
!The last argument defines the line specification
CALL gp%plot(x, y, 'with linespoints lt 2 pt 4')
END PROGRAM main
