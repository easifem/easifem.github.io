# STDiffusionMatrix4

Generic interface is given below.

```fortran
mat4 = STDiffusionMatrix(test, trial, c1, c2, c3)
mat2 = DiffusionMatrix(test, trial, c1, c2, c3)
```

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}a_{i}b_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega
$$
