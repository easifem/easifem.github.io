---
title: Understanding FEDOF in easifem (Part 3)
description: This post explains concept of FEDOF in easifem.
authors:
  - vickysharma0812
tags: [mesh, fedof]
hide_table_of_contents: false
---

## FEDOF

:::note

- Read the part 1 of this series [here](./understanding-fedof-1.md) before proceeding further.
- Read the part 2 of this series [here](./understanding-fedof-2.md) before proceeding further.

:::

In this note we will study the FEDOF for scalar field using H1 conforming Hierarchical basis functions.
The main focus is on generating quadrature points and shape functions.

In this note we will focus on 2D mesh with quadrilateral.

![Quadrilateral mesh](./figures/square_3x3.svg)

## Scalar FEDOF

Initiate the FEDOF object and scalar field by using the following code.

```fortran
CALL u%ImportFromToml(tomlName="u", fedof=fedof, dom=dom, filename=tomlFileName)
CALL fedof%Display(msg="FEDOF info: ")
```

## Getting quadrature points

The following code gets the quadrature points in an element.

```fortran
CALL fedof%GetQuadraturePoints(quad=qp, globalElement=1, islocal=yes)
CALL Display(qp, "Quadrature points: ")
```

:::note Quadrature points

|    x1     |    x2     |    x3     |    x4     |    x5     |    x6     |    x7     |    x8     |    x9     |    x10    |   x11    |   x12    |    x13    |    x14    |   x15    |   x16    |
| :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :------: | :------: | :-------: | :-------: | :------: | :------: |
| -0.861136 | -0.861136 | -0.861136 | -0.861136 | -0.339981 | -0.339981 | -0.339981 | -0.339981 | 0.339981  | 0.339981  | 0.339981 | 0.339981 | 0.861136  | 0.861136  | 0.861136 | 0.861136 |
| -0.861136 | -0.339981 | 0.339981  | 0.861136  | -0.861136 | -0.339981 | 0.339981  | 0.861136  | -0.861136 | -0.339981 | 0.339981 | 0.861136 | -0.861136 | -0.339981 | 0.339981 | 0.861136 |
| 0.121003  | 0.226852  | 0.226852  | 0.121003  | 0.226852  | 0.425293  | 0.425293  | 0.226852  | 0.226852  | 0.425293  | 0.425293 | 0.226852 | 0.121003  | 0.226852  | 0.226852 | 0.121003 |

:::

## Getting shape functions
