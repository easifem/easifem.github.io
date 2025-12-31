# STConvectiveMatrix 4

Implementation: `STCM_6` and `STCM_7`.

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x,c=c, projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial y}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_x,c=c, projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial z}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_x,c=c, projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x,c=c, projectOn="test")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial y}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_y,c=c, projectOn="test")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial z}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_z,c=c, projectOn="test")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x_all, term2=del_x, c=c, &
    & projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_i}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, &
    & term2=del_x_all, c=c, projectOn="test")
```

You can learn more about these methods from following pages.

- [[STConvectiveMatrix_test_41]]
- [[STConvectiveMatrix_test_42]]
