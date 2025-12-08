---
title: Handling Dirichlet Bounding Conditions in easifem (Part 1)
description: This post explains concept of FEDOF in easifem.
authors:
  - vickysharma0812
tags: [mesh, fedof, dirichletBC]
hide_table_of_contents: false
---

## Introduction

To apply boundary condition in FEM computation, EASIFEM, provides a class called [DirichletBC_](/docs-api/DirichletBC/DirichletBC_).

:::info
`DirichletBC_` is a subclass of [AbstractBC](/docs-api/AbstractBC).
:::

To understand how `DirichletBC` works, lets consider an example of linear elasticity. Let's say we want to apply the following boundary condition.

$$
\mathbf{u} = \mathbf{U}_{0}, \text{ on } \Gamma
$$

We may think that there is only one boundary condition. But in easifem this is not the case. Actually, $\mathbf{u}$, has three components in 3D (and two components in 2D). Therefore, the above boundary condition is actually boundary condition for $u_x$, $u_y$, and $u_z$. So, we have three boundary condition on a given boundary $\Gamma$.

The second point, which is quite obvious, is that every boundary condition has two things:

- The boundary
- The value (condition)

To define the boundary EASIFEM employs the [MeshSelection](/docs-api/MeshSelection) class. The value can be specified in several ways as mentioned below in this section.

:::note
Several instances of DirichletBC can have same boundary but different condition.
:::

## Mesh and degrees of freedom

![Degree of freedom in mesh](./figures/order4_mesh3x3.svg)

## Import from toml

We can initiate an instance of `DirichletBC_` by importing the information from a toml-file. To do so, we will use the method called [ImportFromToml](/docs-api/AbstractBC/ImportFromToml).

Let us consider the following toml file

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./code/test1.toml';

<CodeBlock language="toml">{CodeSnippet}</CodeBlock>

We use the following code to import the boundary condition from the above toml file.

import FortranCodeSnippet from '!!raw-loader!./code/test1.F90';

<CodeBlock language="fortran">{FortranCodeSnippet}</CodeBlock>

We obtain the following information about the boundary condition.

| Property             | Value           |
| -------------------- | --------------- |
| isInit               | TRUE            |
| name                 | left_bottom_fix |
| idof                 | 1               |
| nodalValueType       | CONSTANT        |
| isUserFunction       | FALSE           |
| isUseExternal        | FALSE           |
| IsInitiated          | TRUE            |
| IsSelectionByMeshID  | TRUE            |
| IsSelectionByElemNum | FALSE           |
| IsSelectionByNodeNum | FALSE           |
| IsSelectionByBox     | FALSE           |
| MeshID Point         | FALSE           |
| MeshID Curve         | TRUE            |
| MeshID Surface       | FALSE           |
| MeshID Volume        | FALSE           |
| ElemNum Point        | FALSE           |
| ElemNum Curve        | FALSE           |
| ElemNum Surface      | FALSE           |
| ElemNum Volume       | FALSE           |
| NodeNum Point        | FALSE           |
| NodeNum Curve        | FALSE           |
| NodeNum Surface      | FALSE           |
| NodeNum Volume       | FALSE           |
| Box Point            | FALSE           |
| Box Curve            | FALSE           |
| Box Surface          | FALSE           |
| Box Volume           | FALSE           |

## Getting Total Node Numbers

To get the total number of nodes where the boundary condition is applied, we can use the method called [GetTotalNodeNum](/docs-api/AbstractBC/GetTotalNodeNum).

```fortran
CALL Display(obj%GetTotalNodeNum(fedof=fedof), "Total Node Num: ")
```

:::info Results
Total Node Num: 18
:::

There is a total of 18 nodes where the boundary condition is applied. Actually, node number 1 is counted two times because it is common to bottom and left boundaries.

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
----------------------------------------------------------------------
 1   5   2   4   8   1  10  11  12  31  32  33  28  29  30  19  20  21

iNodeOnNode = 1
iNodeOnFace = 7
iNodeOnEdge = 19
```

- Node number 1 to 6 (7-1) are vertex dof numbers.
- Node number 7 to 18 (19-1) are face dof numbers
- Node number 19 to 18 are edge dof numbers (There are no edges)

:::
