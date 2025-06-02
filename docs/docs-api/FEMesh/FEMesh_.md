---
title: Structure
sidebar_position: 2
---

`FEMesh_` datatype is simply a collection of mesh elements. It is a child of [AbstractMesh_](../AbstractMesh/AbstractMesh_.md) class.

Its structure is defined as follows:

```fortran
TYPE, EXTENDS(AbstractMesh_) :: FEMesh_
CONTAINS
  PRIVATE
  FINAL :: obj_Final
END TYPE FEMesh_
```
