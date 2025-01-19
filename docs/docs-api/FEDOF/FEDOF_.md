---
sidebar_position: 2
date: 2024-09-30 
update: 2024-09-30 
status: stable
docs: done
extpkgs: none
category: 
  - Domain
  - Mesh
  - ShapeFunctions
  - FEDOF
tags: 
  - Domain
  - Mesh
  - shapeFunctions
  - FEDOF
---

# Structure

The structure of `FEDOF_` is given below.

```fortran
TYPE :: FEDOF_
  PRIVATE
  LOGICAL(LGT) :: isLagrange = .FALSE.
  !! It is true when baseInterpolation is Lagrange
  INTEGER(I4B) :: tdof = 0
  !! Total number of degrees of freedom
  INTEGER(I4B) :: tNodes = 0
  !! Total number of nodes
  INTEGER(I4B) :: tEdges = 0
  !! Total number of edges
  INTEGER(I4B) :: tFaces = 0
  !! Total number of faces
  INTEGER(I4B) :: tCells = 0
  !! Total number of cells
  INTEGER(I4B) :: maxTotalConnectivity = 0
  !! maximum number of connectivity

  CHARACTER(2) :: baseContinuity = "H1"
  !! continuity or conformity of basis defined on reference
  !! element, following values are allowed
  !! H1, HCurl, HDiv, DG

  CHARACTER(4) :: baseInterpolation = "LAGR"
  !! Type of basis functions used for interpolation on reference
  !! element, Following values are allowed
  !! LagrangeInterpolation ! HierarchyInterpolation
  !! OrthogonalInterpolation ! HermitInterpolation
  !! SerendipityInterpolation

  INTEGER(INT8) :: maxCellOrder = 0_INT8
  !! maximum value of cell order

  INTEGER(INT8) :: maxFaceOrder = 0_INT8
  !! maximum value of face order

  INTEGER(INT8) :: maxEdgeOrder = 0_INT8
  !! maximum value of edge order

  INTEGER(INT8), ALLOCATABLE :: cellOrder(:)
  !! Order of each cell
  !! the size of cellOrder is equal to the obj%tCells
  !! Get connectivity of an element
  !! Get entity number of an element
  !! Get the cell number of an element (this is global element number)
  !! convert it to the local element number
  !! use this local element number to get cell order from cellOrder

  INTEGER(INT8), ALLOCATABLE :: faceOrder(:)
  !! order of each face

  INTEGER(INT8), ALLOCATABLE :: edgeOrder(:)
  !! order of each edge

  INTEGER(I4B), ALLOCATABLE :: edgeIA(:)
  !! sparsity for edge, the size of edgeJA is equal to the total number of
  !! degrees of freedom on edge,
  !! the size of edgeIA is equal to the total number of edges + 1
  !! The degrees of freedom of iedge is stored in
  !! edgeJA(edgeIA(iedge):edgeIA(iedge+1)-1)

  INTEGER(I4B), ALLOCATABLE :: faceIA(:)
  !! sparsity for face, the size of faceJA is equal to the total number of
  !! degrees of freedom on face,
  !! the size of faceIA is equal to the total number of faces + 1
  !! The degrees of freedom of iface is stored in
  !! faceJA(faceIA(iface):faceIA(iface+1)-1)

  INTEGER(I4B), ALLOCATABLE :: cellIA(:)
  !! sparsity for cell, the size of cellJA is equal to the total number of
  !! degrees of freedom on cell,
  !! the size of cellIA is equal to the total number of cells + 1
  !! The degrees of freedom of icell is stored in
  !! cellJA(cellIA(icell):cellIA(icell+1)-1)

  TYPE(AbstractFEPointer_) :: fe(8)
  !! pointer to finite element object
  !! point, line, triangle, quadrangle, tetrahedron, hexahedron, prism,
  !! pyramid

  CLASS(AbstractMesh_), POINTER :: mesh => NULL()
  !! Pointer to domain
END TYPE FEDOF_
```

### `isLagrange`

It is true when `baseInterpolation` is Lagrange

### `tdof`

Total number of degrees of freedom

### `tNodes`

Total number of nodes

### `tEdges`

Total number of edges

### `tFaces`

Total number of faces

### `tCells`

Total number of cells

### `maxTotalConnectivity`

Maximum number of connectivity.

### `baseContinuity`

Continuity or conformity of basis defined on reference element, following values are allowed

- H1
- HCurl
- HDiv
- DG

### `baseInterpolation`

Type of basis functions used for interpolation on reference element, Following values are allowed

- LagrangeInterpolation
- HierarchyInterpolation
- OrthogonalInterpolation
- HermitInterpolation
- SerendipityInterpolation

### `maxCellOrder`

Maximum value of cell order.

### `maxFaceOrder`

Maximum value of face order.

### `maxEdgeOrder`

Maximum value of edge order.

### `cellOrder`

Order of each cell. The size of `cellOrder` is equal to the `obj%tCells`.

The process is as follows:

- Get connectivity of an element.
- Get entity number of an element.
- Get the cell number of an element (this is global element number) convert it to the local element number use this local element number to get cell order from `cellOrder`

### `faceOrder`

Order of each face.

### `edgeOrder`

Order of each edge.

### `edgeIA`

Sparsity for edge, the size of `edgeJA` is equal to the total number of degrees of freedom on edge, the size of `edgeIA` is equal to the total number of `edges + 1`. The degrees of freedom of `iedge` is stored in `edgeJA(edgeIA(iedge)):edgeIA(iedge+1)-1))`.

### `faceIA`

Sparsity for face. The size of `faceIA` is equal to the total number of degrees of freedom on face, the size of `faceIA` is equal to the total number of `faces + 1`. The degrees of freedom of `iface` is stored in `faceJA(faceIA(iface):faceIA(iface+1)-1)`.

### `cellIA`

Sparsity for cell. The size of `cellIA` is equal to the total number of degrees of freedom on cell. The size of `cellIA` is equal to the total number of `cells + 1`. The degrees of freedom of `icell` is stored in `cellJA(cellIA(icell)):cellIA(icell+1)-1))`.

### `fe`

Pointer to finite element object point, line, triangle, quadrangle, tetrahedron, hexahedron, prism, pyramid.

### `mesh`

Pointer to domain.
