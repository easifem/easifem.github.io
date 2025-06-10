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

Although, there are several ways to initiate an instance of `FEDOF`. The most common way is to call the [`Initiate`](./Initiate.md) method.

```fortran
CALL obj%Initiate(order,  mesh, baseContinuity, baseInterpolation, ipType, basisType, alpha, beta, lambda, islocal)
```

- Here `order` represents the order of each element. It can be a scalar, vector, or a two dimensional matrix of integers. [The method with scalar order is given here.](./Initiate.md)
  - When `order` is a vector of integer then it represents the order of each cell element. In this case, the length of `order` must be equal to the number of elements in the mesh.
  - When `order` is a matrix of integer then the first row represents the global number of cell element, and the second row represents the order of cell element.

You can also initiate an instance of `FEDOF` using [ParameterList](/docs/docs-api/ParameterList/index.md). The process is given below.

- First, set parameters in `ParameterList` object by using [SetFEDOFParam](./SetFEDOFParam.md).
- Then, initiate an instance of `FEDOF` using `ParameterList` object by using [Initiate](/docs/docs-api/FEDOF/Initiate.md#interface-3)

```fortran
CALL obj%Initiate(param, mesh)
```

| Method                                | Description                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`Initiate`](./Initiate.md)           | Initializes a FEDOF (Finite Element Degrees of Freedom) object with various options for element order specification |
| [`SetFEDOFParam`](./SetFEDOFParam.md) | Sets essential parameters for constructing a FEDOF object in a parameter list                                       |
| [`Copy` / `ASSIGNMENT(=)`](./Copy.md) | Copies the contents of one FEDOF object to another                                                                  |
| [`DEALLOCATE`](./Copy.md)             | Deallocates all data and resources used by a FEDOF object                                                           |

These constructor methods handle the creation, initialization, and cleanup of FEDOF objects, which represent the degrees of freedom for finite element calculations.

### Get methods

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

### IO Methods

| Method                                  | Description                                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `Display`                               | Displays the content of a FEDOF object including configuration, mesh information, and allocation status |
| `DisplayCellOrder`                      | Displays information about the cell order array and its contents                                        |
| [`ImportFromToml`](./ImportFromToml.md) | Imports FEDOF configuration from a TOML file or table                                                   |

These IO methods provide functionality for:

- Displaying the state and configuration of a FEDOF object for debugging and information purposes
- Reading configuration from standardized TOML format files or tables
- Visualizing specific aspects of the FEDOF configuration like cell orders

## Setting sparsity

The sparsity of the FEDOF object can be set using the [`SetSparsity`](./SetSparsity.md) method. This method allows you to define how the degrees of freedom are organized and accessed, which can optimize performance for specific applications.

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
