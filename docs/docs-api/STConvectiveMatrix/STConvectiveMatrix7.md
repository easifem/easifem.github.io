# STConvectiveMatrix 7

Implementation: `STCM_6b` and `STCM_7b`

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial x} d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_x, &
    & c=c, rho=rho, projectionOn='test')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial y}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_y, &
    & c=c, rho=rho, projectionOn='test')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial z}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_z, &
    & c=c, rho=rho, projectionOn='test')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho \frac{\partial N^{I}T_{a}}{\partial x}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_x, &
    & c=c, rho=rho, projectionOn='trial')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho \frac{\partial N^{I}T_{a}}{\partial y}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_y, &
    & c=c, rho=rho, projectionOn='trial')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho \frac{\partial N^{I}T_{a}}{\partial z}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_z, &
    & c=c, rho=rho, projectionOn='trial')
```

You can learn more about this method from following pages.

- [[STConvectiveMatrix_test_71]]

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x_all, term2=del_x, &
    & c=c, rho=rho, projectionOn='trial')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_x_all, &
    & c=c, rho=rho, projectionOn='test')
```

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_72]]
