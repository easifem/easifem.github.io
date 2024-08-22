---
sidebar_position: 1
date: 2023-07-02 
update: 2023-07-02 
status: stable
docs: done
extpkgs: none
category: 
  - Polynomial
  - Interpolation
tags: 
  - polynomials
  - interpolation
  - easifemBase
---

# TriangleInterpolationUtility

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This module contains some useful routines for polynomials approximations on the triangles.

Following methods are defined in this module.

- [LagrangeDegree_Triangle](./LagrangeDegree_Triangle.md) Returns the monomial degrees of the Lagrange polynomials.
- [LagrangeDOF_Triangle](./LagrangeDOF_Triangle.md) Returns the total number of degrees of freedom for a Lagrange polynomial.
- [LagrangeInDOF_Triangle](./LagrangeInDOF_Triangle.md) Returns the total number of degrees of freedom inside the triangle (cell degree of freedoms)
- [EquidistanceInPoint_Triangle](./EquidistanceInPoint_Triangle.md) Returns the equidistance points which are strictly inside the triangle.
- [EquidistancePoint_Triangle](./EquidistancePoint_Triangle.md) Returns the equidistance points on triangle, which can be used for constructing Lagrange polynomials.
- [InterpolationPoint_Triangle](./InterpolationPoint_Triangle.md) Returns the interpolation points on the triangle. It can support various types of points on the triangle.
- [LagrangeCoeff_Triangle](./LagrangeCoeff_Triangle.md) Returns coefficients to form Lagrange polynomials.
- [Dubiner_Triangle](./Dubiner_Triangle.md) Returns the orthogonal basis on the triangle.
- [BarycentricVertexBasis_Triangle](./BarycentricVertexBasis_Triangle.md) Vertex basis in terms of Barycentric coordinates.
- [BarycentricEdgeBasis_Triangle](./BarycentricEdgeBasis_Triangle.md)
- [BarycentricHeirarchicalBasis_Triangle](./BarycentricHeirarchicalBasis_Triangle.md)
- [VertexBasis_Triangle](./VertexBasis_Triangle.md)
- [EdgeBasis_Triangle](./EdgeBasis_Triangle.md)
- [CellBasis_Triangle](./CellBasis_Triangle.md)
- [HeirarchicalBasis_Triangle](./HeirarchicalBasis_Triangle.md)
- [LagrangeEvalAll_Triangle](./LagrangeEvalAll_Triangle.md)
- `LagrangeGradientEvalAll_Triangle`
- `HeirarchicalBasisGradient_Triangle`
- `OrthogonalBasisGradient_Triangle`
- `QuadraturePoint_Triangle`
- `IJ2VEFC_Triangle`
- `FacetConnectivity_Triangle`
- `RefElemDomain_Triangle`

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
