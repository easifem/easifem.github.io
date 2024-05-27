---
sidebar_position: 3
---

# ElemData

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

It is a data type for storing the element-data information.

## Type definition

```fortran
TYPE :: ElemData_
  LOGICAL(LGT) :: isActive = .TRUE.
    !! Is element in active stage
  INTEGER(I4B) :: globalElemNum = 0_I4B
    !! global element number
    !! cell connectivity number
  INTEGER(I4B) :: localElemNum = 0_I4B
    !! local element number
  INTEGER(I4B) :: elementType = INTERNAL_ELEMENT
    !! BOUNDARY_ELEMENT: If the element contqains the boundary node
    !! it will be called the boundary element
    !! INTERNAL_ELEMENT: If the element does not contain the boundary node
    !! then it will be called the internal element
  INTEGER(I4B) :: name = 0
    !! This is name of the element
    !! It can be Triangle, Triangle3, Triangle6, etc.
    !! Quadrangle,
  INTEGER(I4B) :: meshID = 0
    !! ID of mesh to which the element belong
    !! This is a gmsh concept
  INTEGER(INT8), ALLOCATABLE :: material(:)
    !! materials mapped to the mesh
    !! material(1) is the material-id (type of material) of medium 1
    !! material(2) is the material-id (type of material) of medium 2
    !!
    !! ...
    !!
    !! For example, soil is a porous medium with n = 1,
    !! fluid is a medium with n =2
    !! then material(1) denotes the type of soil => clay, sand, silt
    !! and material(2) denotes the type of fluid => water, oil, air
  INTEGER(I4B), ALLOCATABLE :: globalNodes(:)
    !! nodes contained in the element, connectivity
    !! Vertex connectivity
  INTEGER(I4B), ALLOCATABLE :: globalEdges(:)
    !! Edge connectivity
  INTEGER(INT8), ALLOCATABLE :: edgeOrient(:)
    !! Orientation of edge
  INTEGER(I4B), ALLOCATABLE :: globalFaces(:)
    !! Face connectivity
  INTEGER(INT8), ALLOCATABLE :: faceOrient(:, :)
    !! Orientation of face
  INTEGER(I4B), ALLOCATABLE :: globalElements(:)
    !! Contains the information about the element surrounding an element
    !! Lets us say that `globalElem1`, `globalElem2`, `globalElem3`
    !! surrounds a local element ielem (its global element number is
    !! globalElem), then
    !! - globalElements( [1,2,3] ) contains globalElem1, pFace, nFace
    !! - globalElements( [4,5,6] ) contains globalElem2, pFace, nFace
    !! - globalElements( [7,8,9] ) contains globalElem3, pFace, nFace.
    !! Here,
    !! - pFace is the local facet number of parent element
    !! globalElem (ielem) which is connected to the nFace of the neighbor
    !! element
    !! All element numbers are global element number
  INTEGER(I4B), ALLOCATABLE :: boundaryData(:)
    !! If `iel` is boundary element, then boudnaryData contains
    !! the local facet number of iel which concides with the
    !! mesh boundary.
    !! If an element contains the boundary node then it is considered
    !! as a boundary element.
    !! It may happen that a boundary element has no boundary face, in which
    !! case boundaryData will have zero size
END TYPE ElemData_
```

### `isActive`

If the element is active or not.

### `globalElements`

`globalElemNum` global element number, this number is given by the mesh generator.

### `localElemNum`

`localElemNum` local element number, This number is decided internally. It represents the internal storage address.

### `elementType`

`elementType` has following meaning as of 2024-04-14

- `BOUNDARY_ELEMENT`: If the element contains a facet which coincides with the boundary then, then it will be called the boundary element
- `INTERNAL_ELEMENT`: Otherwise the element is classified as the internal element.

### `name`

Name of the element. You can find more information about this on following pages:

- [GlobalData](../GlobalData/GlobalData.md)
- [ReferenceElement](../ReferenceElement)

### `meshID`

It represent the mesh region. This parameter can be used to assign material properties, boundary conditions, etc to a region of the mesh.

### `material`

`material` maps the material to the mesh, for example

- `material(1)` is the material-id of medium 1 (here 1 may denote soil)
- `material(2)` is the material-id of medium 2 (here, 2 may denote water)
- $\cdots$
- `material(n)` is the material-id of medium n

For example, soil is a porous medium with material id = 1, fluid is a medium with id=2. Then, material(1) denotes the type of soil, that is, clay, sand, and silt. Also, material(2) denotes the type of fluid, water, oil, air.

The size of `material` denotes the total number of materials assigned to the element.

### `globalNodes`

`globalNodes` nodes contained in the element, i.e., vertex connectivity.

### `globalEdges` and `edgeOrient`

edge connectivity and edge orientation.

### `globalFaces` and `faceOrient`

face connectivity and face orientation.

### `globalElements`

`globalElements` contains the information about the elements surrounding an element. This is explained below:

Let us say that `globalElem1`, `globalElem2`, and `globalElem3` surround a local element `ielem` (its global element number is `globalElem`), then

- `globalElements( [1,2,3] )` contains `globalElem1`, `pFace`, `nFace`
- `globalElements( [4,5,6] )` contains `globalElem2`, `pFace`, `nFace`
- `globalElements( [7,8,9] )` contains `globalElem3`, `pFace`, `nFace`.
- `pFace` is the local facet number of parent element
- `nFace` is the local facet number of the neighbor

Here, `pFace` is the local facet number of parent element, (i.e., `globalElem (ielem)`). The `nFace` (local-facet-number) of the neighboring element.

### `boundaryData`

- It represents the information about the boundary element. It should be used only when the element is a boundary element.
- If an element `iel` is a boundary element, then `boundaryData` contains the local facet numbers of `iel` which coincides with the mesh boundary. It may happen that a boundary element has no boundary face (but only a single boundary node), in this case `boundaryData` will have zero size.
