# STConvectiveMatrix1

Implementation: `STCM_1`

```fortran
CALL ConvectiveMatrix(test, trial, c, term1, term2)
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {{c_j}\frac{{\partial {N^I}{T_a}}}{{\partial {x_j}}} \cdot {N^J}{T_b}d\Omega dt} } }
$$

```fortran
CALL ConvectiveMatrix(test, trial, c, term1=del_x, term2=del_none, projectOn='test')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}N^{I}T_{a}c_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

```fortran
CALL ConvectiveMatrix(test, trial, c, term1=del_none, term2=del_x, projectOn='trial')
```

- `C` denotes the convective velocity. It can be Rank-1, Rank-2, Rank-3 array wrapped inside the [[FEVariable_]].
- If the convective velocity is constant in both space and time, `C` should be a rank-1, `C(:)`.
- The spatial nodal values of convective velocity, when it is constant in time domain, is given by a rank-2 array `C(:,:)`
- The temporal values of convective velocity, when it is constant in time domain, is given by a rank-2 array `C(:,:)`
- Space-time nodal values of convective velocity is given by a rank-3 array `C(:,:,:)`

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_1]] Line2 for space and time, constant velocity
- [[STConvectiveMatrix_test_2]] Line2 for space and time, spatial nodal velocity
- [[STConvectiveMatrix_test_3]] Line2 for space and time, space-time nodal velocity
- [[STConvectiveMatrix_test_4]] Line2 for space and time, constant velocity
