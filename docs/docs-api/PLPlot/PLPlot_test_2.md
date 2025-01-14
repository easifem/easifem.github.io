This example shows how to plot a graph by using plplot.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  REAL( DFP ), ALLOCATABLE :: x( : ), y( : )
  TYPE( PLPlot_ ) :: obj

!! Prepare data to be plotted.

  x = linspace( 0.0_DFP, 1.0_DFP, 101 )
  y = x**2

!! LinePlot method

  CALL obj%LinePlot( x, y, "test2a.svg" )

!![](media/test2a.svg)

  CALL obj%LinePlot( x=x, y=y, filename="test2b.svg", &
    & lineColor="r", lineType="-", lineWidth=2.0_DFP, &
    & pointColor="black", pointType=PS_PLUS, pointSize=4.0_DFP )

!![](media/test2b.svg)

END PROGRAM main
```
