This example shows how to plot a graph by using `PLPlot_`.

```fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  implicit none
  real( DFP ), allocatable :: x( : ), y( : )
  type( PLPlot_ ) :: obj


  x = linspace( 0.0_DFP, 1.0_DFP, 101 )
  y = x**2

  CALL obj%LinePlot( x=x, y=y, filename="test_3.svg" )

END PROGRAM main
```
