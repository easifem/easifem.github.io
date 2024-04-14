---
title: Structure
sidebar_position: 2
---

`FEMesh_` datatype is simply a collection of mesh elements.

:::note Difference between `Mesh` and `FEMesh`
In EASIFEM mesh is a homogeneous collection of reference elements. All elements in mesh should be of same type (i.e., triangle, quadrangle, tetrahedron, etc.). Two mesh can have different types of elements. For example, we can define a mesh of triangle element or a mesh of tetrahedron element. However, in `FEMesh` elements can have different topology but they all should have same co-dimension. That is in `FEMesh` all elements need to be either `volume`, or `surface`, or `curve`, or `point`.
:::

- You can learn about the structure of `FEMesh` [Here](./FEMesh_.md)
- You can learn about the structure of `ElemData` [Here](./ElemData_.md)
- You can learn about the structure of `NodeData` [Here](./NodeData_.md)
- The information of `BoundaryFacetData` is given [Here](./BoundaryFacetData_.md)
- The information of `InternalFacetData` is given [Here](./InternalFacetData_.md)

## Type definition

```fortran
TYPE, ABSTRACT :: AbstractMesh_
  PRIVATE
  LOGICAL(LGT) :: showTime = .FALSE.
    !! If true, then we show the time taken by various mesh operations
    !! This is for checking the performance of a subclass
  LOGICAL(LGT) :: readFromFile = .TRUE.
    !! True if the mesh is read from a file
  LOGICAL(LGT) :: isInitiated = .FALSE.
    !! logical flag denoting for whether mesh data is Initiated or not
  LOGICAL(LGT) :: isNodeToElementsInitiated = .FALSE.
    !! Node to elements mapping
  LOGICAL(LGT) :: isNodeToNodesInitiated = .FALSE.
    !! Node to nodes mapping
  LOGICAL(LGT) :: isExtraNodeToNodesInitiated = .FALSE.
    !! Node to nodes mapping
  LOGICAL(LGT) :: isElementToElementsInitiated = .FALSE.
    !! Element to elements mapping
  LOGICAL(LGT) :: isEdgeConnectivityInitiated = .FALSE.
    !! This is Set to true when edge connectivity is initiated
    !! See InitiateEdgeConnectivity method
  LOGICAL(LGT) :: isFaceConnectivityInitiated = .FALSE.
    !! This is Set to true when face connectivity is initiated
    !! See InitiateFaceConnectivity method
  LOGICAL(LGT) :: isBoundaryDataInitiated = .FALSE.
    !! Boundary data
  LOGICAL(LGT) :: isFacetDataInitiated = .FALSE.
    !! FacetData
  INTEGER(I4B) :: uid = 0
    !! Unique id of the mesh
    !! In case of Mesh_ it is entityNumber of the mesh
  INTEGER(I4B) :: tElements_topology_wise(8) = 0
    !! point, line, triangle, quadrangle, tetrahedron, hexahedron, prism,
    !! pyramid (it is calculated in the postprocessing step)
  INTEGER(I4B) :: tElemTopologies = 0, elemTopologies(8) = 0
    !! total element topologies, name of element topologies are stored in
    !! elemTopologies(1:tElemTopologies)
    !! this info is computed in a postprocessing step
  INTEGER(I4B) :: maxNNE = 0
    !! maximum number of nodes in element
  INTEGER(I4B) :: nsd = 0
    !! number of spatial dimension of the mesh
  INTEGER(I4B) :: xidim = 0
    !! xidimension of elements present inside the mesh
    !! for point xidim = 0
    !! for line/curve xidim = 1
    !! for surface xidim = 2
    !! for volume xidim = 3
  INTEGER(I4B) :: maxNptrs = 0
    !! largest node number present inside the mesh
  INTEGER(I4B) :: minNptrs = 0
    !! minimum node number present inside the mesh
  INTEGER(I4B) :: maxElemNum = 0
    !! largest element number present inside the mesh
  INTEGER(I4B) :: minElemNum = 0
    !! minimum element number present inside the mesh
  INTEGER(I4B) :: tNodes = 0
    !! total number of nodes present inside the mesh
  INTEGER(I4B) :: tEdges = 0
    !! total number of internal nodes inside the mesh
  INTEGER(I4B) :: tFaces = 0
    !! total number of internal nodes inside the mesh
  INTEGER(I4B) :: tElements = 0
    !! total number of elements present inside the mesh
    !! It is the size of elemNumber vector
  REAL(DFP) :: minX = 0.0
    !! minimum value of x coordinate
  REAL(DFP) :: maxX = 0.0
    !! maximum value of x coordinate
  REAL(DFP) :: minY = 0.0
    !! minimum value of y coordinate
  REAL(DFP) :: maxY = 0.0
    !! maximum value of y coordinate
  REAL(DFP) :: minZ = 0.0
    !! minimum value of z coordinate
  REAL(DFP) :: maxZ = 0.0
    !! maximum value of z coordinate
  REAL(DFP) :: x = 0.0
    !! x coorindate of centroid
  REAL(DFP) :: y = 0.0
    !! y coordinate of centroid
  REAL(DFP) :: z = 0.0
    !! z coordinate of centroid
  INTEGER(I4B), ALLOCATABLE :: boundingEntity(:)
    !! Bounding entity numbers of the current entity
  INTEGER(I4B), ALLOCATABLE :: local_elemNumber(:)
    !! List of local element numbers, the lowerbound is `minElemNum`
    !! and upper bound is `maxElemNum`. In this way, local_elemNumber(iel)
    !! returns the local element number of global element number iel.

  INTEGER(I4B), ALLOCATABLE :: local_Nptrs(:)
    !! Returns local node number from a global node number
    !! Its length is from 1 to maxNptrs
    !! Helpul in finding if a global node is present inside the mesh or not

  REAL(DFP), ALLOCATABLE :: quality(:, :)
    !! number of rows are meshquality
    !! number of columns are elements

  INTEGER(I4B), ALLOCATABLE :: facetElementType(:, :)
    !! Number of rows of this array is same as the total number of
    !! facets present in the mesh-reference elements
    !! Number of columns of this array is equal to the total number of
    !! elements inside the mesh
    !! facetElementType(ii, iel) can be
    !! INTERNAL_ELEMENT, BOUNDARY_ELEMENT, DOMAIN_BOUNDARY_ELEMENT
    !! If the face is a part of the mesh boundary then it will be called
    !! the BOUNDARY_ELEMENT

  TYPE(NodeData_), ALLOCATABLE :: nodeData(:)
    !! Node data

  TYPE(ElemData_), ALLOCATABLE :: elementData(:)
    !! element data

  TYPE(InternalFacetData_), ALLOCATABLE :: internalFacetData(:)
    !! Internal facet data
    !! INFO: This data is initiated by InitiateFacetElements method

  TYPE(BoundaryFacetData_), PUBLIC, ALLOCATABLE :: boundaryFacetData(:)
    !! Domain Facet Data
    !! INFO: This data is initiated by InitiateFacetElements method

  TYPE(ElemDataList_) :: elementDataList
  !! ElemData list
  TYPE(ElemDataBinaryTree_) :: elementDataBinaryTree
  !! ElemData binary tree
  TYPE(NodeDataList_) :: nodeDataList
  !! NodeData list
  TYPE(NodeDataBinaryTree_) :: nodeDataBinaryTree
  !! NodeData binary tree

END TYPE AbstractMesh_
```

### showTime

`showTime` is true if the time taken by various mesh operations is shown.

### readFromFile

`readFromFile` is true if the mesh is read from a file.

### isInitiated

`isInitiated` is logical flag denoting whether mesh data is initiated or not.

### isNodeToElementsInitiated

`isNodeToElementsInitiated` is true if node to elements mapping is initiated.

### isNodeToNodesInitiated

`isNodeToNodesInitiated` is true of node to nodes mapping is initiated.

### isExtraNodeToNodesInitiated

It is true if extra information of node to nodes is initiated. Extra node to nodes is necessary for edge based FEM.

### isElementToElementsInitiated

`isElementToElementsInitiated` is true if element to elements mapping available.

### isEdgeConnectivityInitiated

If is true if edge connectivity is initiated.

### isFaceConnectivityInitiated

It is true when face connectivity is initiated.

### isBoundaryDataInitiated

`isBoundaryDataInitiated` is true if boundary data is available.

### isFacetDataInitiated

It is true when the facet data is initiated.

### uid

`uid` denotes the unique-id of the mesh. It is read from the mesh file, if present.

### xidim

- `xidim` denotes the `xidimension` of elements present inside the mesh, `xidim` = (0,1,2,3) for (point, line, surface, volume) elements.

### tElements_topology_wise

It denotes the total number of elements present in the mesh. It is calculated in the post-processing step.

| index | element tyep |
| ----- | ------------ |
| 1     | point        |
| 2     | line         |
| 3     | triangle     |
| 4     | quadrangle   |
| 5     | tetrahedron  |
| 6     | hexahedron   |
| 7     | prism        |
| 8     | pyramid      |

### tElemTopologies and elemTopologies

Total number of topologies stored in the mesh. For example, in a mesh of lines, we will have `tElemTopolies=1`. In the case of mesh of surfaces we can have `tElemTopologies=2`. The name of the topolgoy is stored in `elemTopologies(1:tElemTopolies)`.

### maxNNE

Maximum number of nodes in an element.

### nsd

`nsd` denotes the number of spatial dimension of the mesh.

### xidim

The codimension of the mesh. It is 0 for point, 1 for line, 2 for surface, 3 for volume.

### maxNptrs

`maxNptrs` stands for the largest node number present inside the mesh.

### minNptrs

`minNptrs` stands for the smallest node number present inside the mesh.

### maxElemNum

`maxElemNum` denotes the largest element number present inside the mesh.

### minElemNum

`minElemNum` denotes the smallest element number present inside the mesh.

### tNodes

`tNodes` is the total number of (local) nodes present inside the mesh.

### tEdges

Total number of edges present inside the mesh.

### tFaces

Total number of faces present inside the mesh.

### tElements

`tElements` is the total number of elements present inside the mesh. It is the size of `elemNumber` vector.

### minX, maxX, minY, maxY, minZ, maxZ

- `minX` denotes the minimum value of x coordinate of `boundingbox`.
- `maxX` denotes the maximum value of x coordinate of `boundingbox`.
- `minY` is the minimum value of y coordinate of `boundingbox`.
- `maxY` is the maximum value of y coordinate of `boundingbox`.
- `minZ` is the minimum value of z coordinate of `boundingbox`.
- `maxZ` is the maximum value of z coordinate of `boundingbox`.

### x, y, z

- `x` is the x coordinate of center of mesh.
- `y` is the y coordinate of center of mesh.
- `z` is the z coordinate of center of mesh.

### boundingEntity

`boundingEntity` denotes the bounding entity numbers of the current entity

### local_elemNumber and local_Nptrs

- `local_elemNumber` denotes the list of local element numbers, the lower bound is `minElemNum` and upper bound is `maxElemNum`. In this way, `local_elemNumber(iel)` returns the local element number of global element number `iel`.
- `local_Nptrs` returns the local node number from a global node number. Its length is from 1 to `maxNptrs`. Helpful in finding if a global node is present inside the mesh or not.

### quality

Denotes the quality of elements.

### facetElementType

- Number of rows of this array is same as the total number of facets present in the mesh’s reference-element.
- Number of columns of this array is equal to the total number of elements inside the mesh.
- In this way, `facetElementType(ii, iel)` denotes the `ii`th facet’s type of element local element number `iel`
- `facetElementType` can be
  - `INTERNAL_ELEMENT`,
  - `BOUNDARY_ELEMENT`,
  - `DOMAIN_BOUNDARY_ELEMENT`.
- If the face is a part of the mesh boundary then it will be called the `BOUNDARY_ELEMENT`
- If the face is part of domain boundary, then it is a `DOMAIN_BOUNDARY_ELEMENT`
- If the facet is internal to a mesh, then it is a `INTERNAL_ELEMENT`
- Note that every, `DOMAIN_BOUNDARY_ELEMENT` is `BOUNDARY_ELEMENT` but not vice-versa.

### nodeData

`nodeData` node data

### elementData

`elementData` element data

### internalFacetData

`internalFacetData` internal facet data

### boundaryFacetData

`boundaryFacetData` boundary facet Data

### elementDataList

Linked list of element data

### elementDataBinaryTree

Binary tree of element data.

### nodeDataList

Linked list of node data

### nodeDataBinaryTree

Binary tree of node data.
