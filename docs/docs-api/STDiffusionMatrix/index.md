---
sidebar_position: 1
date: 2023-08-05 
update: 2023-08-05 
status: stable
docs: done
extpkgs: none
category: 
  - FEMatrix
tags: 
  - feMatrix
  - easifemClasses
---

# STDiffusionMatrix

Space time diffusion matrix.

## Theory

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}a_{i}b_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}a_{i}b_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
