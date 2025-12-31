# STConvectiveMatrix 5

Implementation: `STCM_8`

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial x_{p}}c_{p}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_x, c)
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_y, c)
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_z, c)
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_x_all, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_t, c)
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_y, term2=del_t, c)
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_z, term2=del_t, c)
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_x_all, term2=del_t, c)
!! or
```

You can learn how to use these methods from following pages.

- [[STConvectiveMatrix_test_51]]
- [[STConvectiveMatrix_test_52]]
