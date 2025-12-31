# STDiffusionMatrix2

General interface is given below.

```fortran
mat4 = STDiffusionMatrix(test, trial, k)
mat2 = DiffusionMatrix(test, trial, k)
```

!!! example ""

$$
M(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega
$$

Here, $\rho$ is a scalar [[FEVariable_]], therefore, we can obtain this matrix by following call.

```fortran
mat4 = STDiffusionMatrix(test, trial, k=rho)
mat2 = DiffusionMatrix(test, trial, k=rho)
```

!!! example ""

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega
$$

Here, $k_{ij}$ is a diffusion tensor [[FEVariable_]], therefore, we can obtain this matrix by following call.

```fortran
mat4 = STDiffusionMatrix(test, trial, k=k)
mat2 = DiffusionMatrix(test, trial, k=k)
```
