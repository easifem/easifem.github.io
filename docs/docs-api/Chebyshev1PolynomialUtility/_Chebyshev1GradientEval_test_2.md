```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  n = 4
  x = [-1.0, -0.5, 0.0, 0.5, 1.0]; call callme
  exact = 32.0 * x**3 - 16.0*x
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  contains
  subroutine callme
    ans= Chebyshev1GradientEval( n=n, x=x )
  end subroutine callme
end program main
```
