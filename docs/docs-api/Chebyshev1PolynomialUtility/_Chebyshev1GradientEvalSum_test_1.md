This example shows the usage of `Chebyshev1GradientEvalSum` method.

This routine evaluates the gradient of sum of finite series of Chebyshev1 polynomials of order upto n, at a single point.

$$
\frac{d}{dx} s(x) = \sum_{n=0}^{n=N}{c_n \frac{d}{dx} P_{n}^{(\lambda)}(x)}
$$

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), allocatable :: coeff(:)
  real( dfp ), parameter :: tol=1.0E-10
  n = 3; coeff = [1, 0, 0, 0]
  x = -0.5_DFP
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=0_I4B, x=x )
  call ok( SOFTEQ(ans, exact, tol ))
  n = 3; coeff = [0, 1, 0, 0]
  x = -0.5_DFP
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=1_I4B, x=x )
  call ok( SOFTEQ(ans, exact, tol ))
  n = 3; coeff = [0, 0, 0, 1]
  x = 0.25_DFP
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=3_I4B, x=x )
  call ok( SOFTEQ(ans, exact, tol ))
  n = 3; coeff = [0, 0, 1, 2]
  x = -0.5_DFP
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=2_I4B, x=x) &
      & + 2.0_DFP * Chebyshev1GradientEval( &
      & n=3_I4B, x=x)
  call ok( SOFTEQ(ans, exact, tol ))
end program main
```
