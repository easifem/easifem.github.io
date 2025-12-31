# STDiffusionMatrix1

General interface is given below.

```fortran
mat4 = STDiffusionMatrix(test, trial)
mat2 = DiffusionMatrix(test, trial)
```

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega
$$
