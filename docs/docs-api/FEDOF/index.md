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

Data type for finite element degree of freedoms.
`FEDOF_` defines the abstract node in finite element method.
The meaning of degree of freedom depends upon the basis interpolation function and type.
For example, in the case of Lagrange interpolation, the degree of freedoms corresponds to the nodes in the element.
The basic steps of using this data type is given below.

## Basic usage

### Constructor methods

There are several ways to initiate an instance of `FEDOF`.

```fortran
CALL obj%Initiate(order,  mesh, baseContinuity, baseInterpolation, ipType, basisType, alpha, beta, lambda)
```

- Here `order` represents the order of each element. It can be a scalar, vector, or a two dimensional matrix of integers. [The method with scalar order is given here.](./Initiate.md)

:::tip Order is a vector
When `order` is a vector of integer then it represents the order of each cell element. [This method is discussed here](./Initiate.md). In this case, the length of `order` must be equal to the number of elements in the mesh.
:::

:::tip Order is a matrix
When order is a matrix of integer then the first row represents the global number of cell element, and the second row represents the order of cell element. [This method is given here](./Initiate.md)
:::

:::info
Read more about [Initiate](./Initiate.md) method.
:::

You can also initiate an instance of `FEDOF` using [ParameterList](/docs/docs-api/ParameterList/index.md). The process is given below.

- First, set parameters in `ParameterList` object by using [SetFEDOFParam](./SetFEDOFParam.md).
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

The following table provides an overview of all methods defined in the GetMethods submodule of the FEDOF_Class.

| Method Name                                               | Purpose                                                                                              |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`GetCaseName`](./GetCaseName.md)                         | Gets the case name of FEDOF (combines baseContinuity and baseInterpolation)                          |
| [`GetVertexDOF`](./GetVertexDOF.md)                       | Retrieves the degrees of freedom associated with a vertex/node                                       |
| [`GetEdgeDOF`](./GetEdgeDOF.md)                           | Retrieves the degrees of freedom associated with an edge                                             |
| [`GetTotalEdgeDOF`](./GetTotalEdgeDOF.md)                 | Returns the total number of degrees of freedom on an edge                                            |
| [`GetFaceDOF`](./GetFaceDOF.md)                           | Retrieves the degrees of freedom associated with a face                                              |
| [`GetTotalFaceDOF`](./GetTotalFaceDOF.md)                 | Returns the total number of degrees of freedom on a face                                             |
| [`GetCellDOF`](./GetCellDOF.md)                           | Retrieves the degrees of freedom associated with a cell                                              |
| [`GetTotalCellDOF`](./GetTotalCellDOF.md)                 | Returns the total number of degrees of freedom on a cell                                             |
| [`GetTotalVertexDOF`](./GetTotalVertexDOF.md)             | Returns the total number of vertex degrees of freedom                                                |
| [`GetTotalDOF`](./GetTotalDOF.md)                         | Returns the total number of degrees of freedom (in the entire mesh, an element, or filtered by type) |
| [`GetConnectivity`](./GetConnectivity.md)                 | Returns the connectivity array for an element                                                        |
| [`GetConnectivity_`](./GetConnectivity_.md)               | Internal method for writing connectivity information into a provided array                           |
| [`GetPrefix`](./GetPrefix.md)                             | Returns the prefix used for setting data ("FEDOF")                                                   |
| [`GetMeshPointer`](./GetMeshPointer.md)                   | Returns a pointer to the associated mesh object                                                      |
| [`GetBaseInterpolation`](./GetBaseInterpolation.md)       | Returns the base interpolation type used                                                             |
| [`GetCellOrder`](./GetCellOrder.md)                       | Retrieves the polynomial order of a cell                                                             |
| [`GetOrders`](./GetOrders.md)                             | Gets the cell, face, and edge orders and their orientations                                          |
| [`GetMaxTotalConnectivity`](./GetMaxTotalConnectivity.md) | Returns the maximum size of connectivity across all elements                                         |
| [`GetQuadraturePoints`](./GetQuadraturePoints.md)         | Creates quadrature points for numerical integration                                                  |
| [`GetLocalElemShapeData`](./GetLocalElemShapeData.md)     | Retrieves local element shape functions data                                                         |
| [`GetGlobalElemShapeData`](./GetGlobalElemShapeData.md)   | Maps local shape functions to the global coordinate system                                           |

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
