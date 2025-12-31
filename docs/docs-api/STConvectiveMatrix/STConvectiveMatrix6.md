# STConvectiveMatrix 6

Implementation: `STCM_1b`

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{}
\rho {{c_j}\frac{{\partial {N^I}{T_a}}}{{\partial {x_j}}} \cdot
{N^J}{T_b}d\Omega dt} } }
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_x_all, term2=del_none, &
    & c=c, rho=rho, projectionOn='test')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_x, term2=del_none, &
    & c=c, rho=rho, projectionOn='test')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_y, term2=del_none, &
    & c=c, rho=rho, projectionOn='test')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_z, term2=del_none, &
    & c=c, rho=rho, projectionOn='test')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega} \rho N^{I}T_{a}c_{j}\frac{\partial
N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

```fortran
mat2 = ConvectiveMatrix(test, trial, term1=del_none, term2=del_x_all, &
    & c=c, rho=rho, projectionOn='trial')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_none, term2=del_x, &
    & c=c, rho=rho, projectionOn='trial')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_none, term2=del_y, &
    & c=c, rho=rho, projectionOn='trial')
!! or
mat2 = ConvectiveMatrix(test, trial, term1=del_none, term2=del_z, &
    & c=c, rho=rho, projectionOn='trial')
```

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_61]]
