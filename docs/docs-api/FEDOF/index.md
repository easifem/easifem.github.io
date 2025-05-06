---
sidebar_position: 1
date:  2024-05-18 
update: 2024-05-18 
status: stable
docs: done
extpkgs: none
category: 
  - Domain
  - Mesh
  - ShapeFunctions
tags:
  - easifemClasses
  - mesh
  - shapefunctions
  - dof
---

# FEDOF

Data type for finite element degree of freedoms. `FEDOF_` defines the abstract node in finite element method. The basic steps of using this data type is given below.

## Basic usage

### Constructor methods

There are several ways to initiate an instance of `FEDOF`.

```fortran
CALL obj%Initiate(order,  mesh, baseContinuity, baseInterpolation, ipType, basisType, alpha, beta, lambda)
```

- Here `order` represents the order of each element.
- It can be a scalar, vector, or a two dimensional matrix.
- [The method with scalar order is given here.](./Initiate.md#interface-1)
- When it is a vector then it represents the order of each cell element. [This method is given here](./Initiate.md#interface-2)
- Then order is a matrix then the first row represents the global number of cell element, and the second row represents the order of cell element. [This method is given here](./Initiate.md#interface-4)

:::info
Read more about [Initiate](./Initiate.md) method.
:::

You can also initiate an instance of `FEDOF` using [ParameterList](/docs/docs-api/ParameterList/index.md). The process is given below.

- First, set parameters in `ParameterList` object by using [SetFEDOFParam].
- Then, initiate an instance of `FEDOF` using `ParameterList` object by using [Initiate](/docs/docs-api/FEDOF/Initiate.md#interface-3)

```fortran
CALL obj%Initiate(param, mesh)
```

### Get methods

#### Get the upper bound for connectivity matrix

```fortran
ans = obj%GetMaxTotalConnectivty()
```

#### Get order of cell element

```fortran
CALL obj%GetCellOrder(cellOrder, tCellOrder)
```

#### Get quadrature points

```fortran
CALL obj%GetQuadraturePoints(quad, globalElement, islocal, quadratureType, order)
```

#### Getting the shape data

Getting the local element shape data.

```fortran
CALL obj%GetLocalElemShapeData(globalElement, isLocal, quad, elemsd)
```

Getting the global element shape data.

```fortran
CALL obj%GetGlobalElemShapeData(globalElement, isLocal, xij, elemsd)
```

#### Getting the connectivity

Getting the local element connectivity.

```fortran
CALL obj%GetConnectivity_(globalElement, isLocal, ans, tsize, opt)
```
