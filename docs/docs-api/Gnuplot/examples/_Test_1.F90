PROGRAM main
USE GlobalData
USE GnuPlot_Class

TYPE(GnuPlot_) :: plot
REAL(DFP), ALLOCATABLE :: x1(:), y1(:)

CALL plot%Initiate()

ALLOCATE (x1(100), y1(100))

CALL RANDOM_NUMBER(x1)
CALL RANDOM_NUMBER(y1)

CALL plot%old_plot(x1=x1, y1=y1)

END PROGRAM main
