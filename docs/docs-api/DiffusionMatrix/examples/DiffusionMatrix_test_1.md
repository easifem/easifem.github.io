<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This example shows how to use the subroutine called `DiffusionMatrix` to create a Diffusion matrix in space domain.

Here, we want to do the following.

$$
\int^{}_{\Omega } \frac{\partial N^{I}}{\partial x_{i}} \frac{\partial N^{J}}{\partial x_{i}} d\Omega
$$

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(elemshapedata_) :: test, trial
    TYPE(quadraturepoint_) :: quad
    TYPE(referenceline_) :: refelem
    REAL( DFP ), parameter :: xij(1,2) = RESHAPE([-1, 1], [1, 2])
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    integer( I4B ), parameter :: order = 2

refelem = referenceline(nsd=1)

CALL initiate( obj=quad, refelem=refelem, order=order, &
    & quadratureType='GaussLegendre' )

CALL initiate(obj=test, &
    & quad=quad, &
    & refelem=refelem, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set( obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)

mat=DiffusionMatrix(test=test, trial=test)
CALL Display(mat, "mat:")

END PROGRAM main
```

## results

```bash title="results"
      mat:        
--------------------
0.500000  -0.500000
-0.500000   0.500000
```
