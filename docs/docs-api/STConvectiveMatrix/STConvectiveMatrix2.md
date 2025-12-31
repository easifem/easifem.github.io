# STConvectiveMatrix 2

Implementation: `STCM_2` and `STCM_3`

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial x}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_none, c )
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial y}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_none, c )
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial z}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_none, c )
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial x}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_x, c )
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial y}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_y, c )
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial z}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_z, c )
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial x_{i}}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed by setting dim=-1 as shown in the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_none,c)
```

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial x_{i}}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_x_all,c)
```

!!! note ""
You can learn more about this subroutine from following pages.

- [[STConvectiveMatrix_test_21]] Line2 in space and time, FEVariable is constant
- [[STConvectiveMatrix_test_22]] Line2 in space and time, FEVariable is space-nodal values
- [[STConvectiveMatrix_test_23]] Line2 in space and time, FEVariable is space-time values
- [[STConvectiveMatrix_test_24]] Triangle3 in space and Line2 in time, FEVariable is constant
- [[STConvectiveMatrix_test_25]] Triangle3 in space and Line2 in time, FEVariable is spatial nodal values
- [[STConvectiveMatrix_test_26]] Triangle3 in space and Line2 in time, FEVariable is space-time nodal values
- [[STConvectiveMatrix_test_27]] Triangle3 in space and Line2 in time, FEVariable is space-time nodal values


