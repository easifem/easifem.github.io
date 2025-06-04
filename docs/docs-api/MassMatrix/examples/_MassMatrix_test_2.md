This example shows how to USE the SUBROUTINE called `MassMatrix` to create a mass matrix in space domain.

Here, we want to DO the following.

$$
\int_{\Omega } N^{I}\rho N^{J}d\Omega
$$

`rho` can be a constant, or a FUNCTION of spatial coordinates, or some nonlinear FUNCTION.

In this example, following mass matrix is formed for ReferenceLine element,  QuadraturePoint are `GaussLegendre`.

$$
\int_{\Omega } N^{I} N^{J}d\Omega
$$

This TYPE of mass matrix is useful in cases WHERE $rho$ is a constant.

