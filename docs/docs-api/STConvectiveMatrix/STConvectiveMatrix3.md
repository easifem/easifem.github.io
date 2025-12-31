# STConvectiveMatrix 3

Implementation: `STCM_4` and `STCM_5`.

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial x}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_t, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial y}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_y, term2=del_t, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial z}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_z, tzerm2=del_t, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial x}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_x, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial y}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_y, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial z}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_z, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x_all, term2=del_t, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_t, term2=del_x_all, c)
```

You can learn more about these methods from following pages 🚀💎🔗

- [[STConvectiveMatrix_test_31]]
- [[STConvectiveMatrix_test_32]]
