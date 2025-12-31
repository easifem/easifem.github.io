---
title: Handling Dirichlet Bounding Conditions in easifem (Part 2)
description: This post explains concept of Dirichlet Boundary Condition in EASIFEM
authors:
  - vickysharma0812
tags: [mesh, fedof, dirichletBC]
hide_table_of_contents: false
---

## Introduction

:::note

Before reading this post, it is recommended to read [Handling Dirichlet Bounding Conditions in easifem (Part 1)](./understanding-dirichletbc-1.md) first.

:::

In this example, Dirichlet boundary conditions is given by a user defined function.

## Mesh and degrees of freedom

![Degree of freedom in mesh](./figures/order4_mesh3x3.svg)

<!-- truncate -->

## Import from toml

We can initiate an instance of `DirichletBC_` by importing the information from a toml-file. To do so, we will use the method called [ImportFromToml](/docs-api/AbstractBC/ImportFromToml).

Let us consider the following toml file

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./code/test2.toml';

<CodeBlock language="toml">{CodeSnippet}</CodeBlock>

We use the following code to import the boundary condition from the above toml file.

import FortranCodeSnippet from '!!raw-loader!./code/test2.F90';

<CodeBlock language="fortran">{FortranCodeSnippet}</CodeBlock>

We obtain the following information about the boundary condition.

:::info Results

#### DirichletBC Info

| Property       | Value                     |
| -------------- | ------------------------- |
| isInit         | TRUE                      |
| name           | Bottom Space UserFunction |
| idof           | 1                         |
| nodalValueType | SPACE                     |
| isUserFunction | TRUE                      |
| isUseExternal  | FALSE                     |

#### Boundary

| Property             | Value |
| -------------------- | ----- |
| IsInitiated          | TRUE  |
| IsSelectionByMeshID  | TRUE  |
| IsSelectionByElemNum | FALSE |
| IsSelectionByNodeNum | FALSE |
| IsSelectionByBox     | FALSE |

#### Allocation Status

| Element Type      | Point | Curve | Surface | Volume |
| ----------------- | ----- | ----- | ------- | ------ |
| MeshID ALLOCATED  | FALSE | TRUE  | FALSE   | FALSE  |
| ElemNum ALLOCATED | FALSE | FALSE | FALSE   | FALSE  |
| NodeNum ALLOCATED | FALSE | FALSE | FALSE   | FALSE  |
| Box ALLOCATED     | FALSE | FALSE | FALSE   | FALSE  |

:::

## Getting Total Node Numbers

To get the total number of nodes where the boundary condition is applied, we can use the method called [GetTotalNodeNum](/docs-api/AbstractBC/GetTotalNodeNum).

```fortran
CALL Display(obj%GetTotalNodeNum(fedof=fedof), "Total Node Num: ")
```

:::info Results
Total Node Num: 9
:::

## Getting Node Numbers

To get the node numbers we call [Get](/docs-api/AbstractBC/Get) method. These node numbers are degrees of freedom numbers for FEDOF. You can use these indices to set and get the values in node fields.

```fortran
CALL obj%Get(fedof=fedof, nodeNum=nodeNum, tsize=tsize, &
             iNodeOnNode=iNodeOnNode, iNodeOnEdge=iNodeOnEdge, &
             iNodeOnFace=iNodeOnFace)
CALL Display(tsize, "tsize = ")
CALL Display(nodeNum(1:tsize), "nodeNum", full=.TRUE., orient="ROW")
CALL Display(iNodeOnNode, "iNodeOnNode = ")
CALL Display(iNodeOnFace, "iNodeOnFace = ")
CALL Display(iNodeOnEdge, "iNodeOnEdge = ")
```

:::info Results

```txt
              nodeNum
----------------------------------
 1   5   2  10  11  12  31  32  33

iNodeOnNode = 1
iNodeOnFace = 4
iNodeOnEdge = 10
```

- Node number 1 to 3 are vertex dof numbers.
- Node number 4 to 9 are face dof numbers

:::
