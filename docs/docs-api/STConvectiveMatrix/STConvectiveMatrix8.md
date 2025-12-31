# STConvectiveMatrix 8

Implementation: `STCM_8b`

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_t, &
    & c=c, rho=rho, projectionOn='test')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_y, term2=del_t, &
    & c=c, rho=rho, projectionOn='test')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_z, term2=del_t, &
    & c=c, rho=rho, projectionOn='test')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_x_all, term2=del_t, &
    & c=c, rho=rho, projectionOn='test')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial t}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_x, &
    & c=c, rho=rho, projectionOn='trial')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_y, &
    & c=c, rho=rho, projectionOn='trial')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_z, &
    & c=c, rho=rho, projectionOn='trial')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_x_all, &
    & c=c, rho=rho, projectionOn='trial')
```

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_81]]
