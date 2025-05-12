---
title: Structure
sidebar_position: 2
---

Mesh datatype is simply a collection of mesh elements. It is a child of [AbstractMesh_](../AbstractMesh/AbstractMesh_.md).

:::warning Deprecated
The support for Mesh has stopped. In future version, the Mesh and FEMesh will be merged. So please use FEMesh instead.
:::

:::info Mesh vs FEMesh
Mesh is a collection of homogeneous elements. All elements in a mesh should be of same type (i.e., triangle, quadrangle, tetrahedron, etc.). For example, we can define a mesh of triangle element or a mesh of tetrahedron element. In contrast, FEMesh is a collection of elements of same dimension. In FEMesh, all elements are either 1D, 2D or 3D. Therefore, FEMesh can contain some elements as triangle and some elements as quadrilateral.
:::

```fortran
TYPE, EXTENDS(AbstractMesh_) :: Mesh_
  PRIVATE
  INTEGER(I4B) :: elemType = 0
    !! type of element present inside the mesh

  TYPE(ReferenceElement_), ALLOCATABLE :: facetElements(:)
    !! Facet Elements in the reference element

  CLASS(ReferenceElement_), POINTER :: refelem => NULL()
    !! Reference element of the mesh (spatial)
    !! TODO: Change refelem to Type(ReferenceElement_)
END TYPE Mesh_
```
