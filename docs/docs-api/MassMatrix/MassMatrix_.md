---
title: MassMatrix
author: Vikas Sharma, Ph.D.
date: 20 Nov 2021 
update: 20 Nov 2021
tags:
    - MassMatrix
category:
    - MassMatrix
    - Finite Element
---

## Theory

$$
\int_{\Omega } N^{I} N^{J}d\Omega
$$

$$
\int_{\Omega } \rho N^{I} N^{J}d\Omega
$$

## Example 1

This example shows how to use the subroutine called `MassMatrix` to create a mass matrix in space domain.

Here, we want to do the following. 

$$
\int_{\Omega } N^{I}\rho N^{J}d\Omega
$$

`rho` can be a constant, or a function of spatial coordinates, or some nonlinear function.

In this example, we use

- ReferenceLine element,  
- QuadraturePoint are `GaussLegendre`
- order of integrand is 2.

$$
\int_{\Omega } N^{I} N^{J}d\Omega
$$

This type of mass matrix is useful in cases where $rho$ is a constant.

