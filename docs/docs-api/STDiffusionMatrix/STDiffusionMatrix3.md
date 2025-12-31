# STDiffusionMatrix3

The general interface in this category is given below.

```fortran
mat4 = STDiffusionMatrix(test, trial, c1, c2)
mat2 = DiffusionMatrix(test, trial, c1, c2)
```

!!! note "c1"
c1 is a [[FEVariable_]], which can be a scalar, vector, or a matrix.

!!! note "c2"
c2 is a [[FEVariable_]], which can be a scalar, vector, or a matrix.

!!! note ""
9 types of matrices can be formed from this routine.

!!! example "scalar-scalar"

!!! example "scalar-vector"

!!! example "scalar-matrix"

$$
M(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega
$$

Here $\rho$ is a scalar and $k$ is a matrix (rank-2 tensor) [[FEVariable_]]. This matrix can be obtained by following expression.

```fortran
mat4 = STDiffusionMatrix(test, trial, c1=rho, c2=k)
mat2 = DiffusionMatrix(test, trial, c1=rho, c2=k)
```
