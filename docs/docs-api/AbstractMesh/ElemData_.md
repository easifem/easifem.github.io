---
sidebar_position: 3
---

# ElemData

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

It is a data type for storing the element-data information.

## Structure

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

In addition we have defined `ElemdataPointer_` which is a pointer to `Elemdata_` type. The pointer is defined as follows:

```fortran
TYPE ElemdataPointer_
  CLASS(Elemdata_), POINTER :: ptr => NULL()
END TYPE ElemdataPointer_
```

## ElemdataType

The `ElemdataType_` is a derived type which contains the information about the element data. The structure of the `ElemdataType_` is as follows:

```fortran
TYPE ElemdataType_
  INTEGER(I4B) :: internal = INTERNAL_ELEMENT
  INTEGER(I4B) :: boundary = BOUNDARY_ELEMENT
  INTEGER(I4B) :: domainBoundary = DOMAIN_BOUNDARY_ELEMENT
  INTEGER(I4B) :: ghost = GHOST_ELEMENT
END TYPE ElemdataType_
```

:::info
The `ElemdataType_` is private but you can use its instance called `TypeElem`. For example to get the field `internal` you should use `TypeElem%internal`.
:::

This module exposes following methods.

## Elemdata_Copy

- Copy obj2 to obj1

```fortran
SUBROUTINE Elemdata_Copy(obj1, obj2)
  TYPE(Elemdata_), INTENT(INOUT) :: obj1
  TYPE(Elemdata_), INTENT(IN) :: obj2
END SUBROUTINE
```

## Elemdata_Display

- Display the element data information.

```fortran
SUBROUTINE Elemdata_Display(obj)
  TYPE(Elemdata_), INTENT(IN) :: obj
END SUBROUTINE
```

## Elemdata_ElemType2String

- Convert the element type to string.

```fortran
FUNCTION Elemdata_ElemType2String(elementType) RESULT(ans)
  INTEGER(I4B), INTENT(IN) :: elementType
  CHARACTER(:), ALLOCATABLE :: ans
END FUNCTION
```

## Elemdata_Deallocate

- Deallocate the element data.

```fortran
SUBROUTINE Elemdata_Deallocate(obj)
  TYPE(Elemdata_), INTENT(INOUT) :: obj
END SUBROUTINE
```

## Elemdata_SetTotalMaterial

- Set the total number of materials.

```fortran
SUBROUTINE Elemdata_SetTotalMaterial(obj, n)
  TYPE(Elemdata_), INTENT(INOUT) :: obj
  INTEGER(I4B), INTENT(IN) :: n
END SUBROUTINE
```

## Elemdata_Set

- Set the element data.

```fortran
PURE SUBROUTINE Elemdata_Set(obj, globalElemNum, localElemNum, &
        elementType, globalNodes, globalElements, boundaryData, globalEdges, &
   globalFaces, name, topoName, isActive, meshID, medium, material, materials)
  ! obj%elementData(ii)%globalElemNum = elemNumber(ii)
  ! obj%elementData(ii)%localElemNum = ii
  ! obj%elementData(ii)%globalNodes = connectivity(:, ii)
  TYPE(Elemdata_), INTENT(INOUT) :: obj
  !! element data object
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElemNum
  !! global element number
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: localElemNum
  !! local element number
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: elementType
  !! element type: internal element, boundary element, etc.
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNodes(:)
  !! vertex connectivity
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElements(:)
  !! element to element mapping
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: boundaryData(:)
  !! boundary data
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalEdges(:)
  !! edge connectivity
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalFaces(:)
  !! gace connectivity
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: name
  !! Type of element, triangle, triangle3, Quadrangle4, etc
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: topoName
  !! topology  name of the element
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isActive
  !! is element active
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: meshID
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: medium
  !! medium id like soil,water, etc
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: material
  !! material like soil1, soil2, wate1, water2, etc
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: materials(:)
  !! materials
END SUBROUTINE
```

## Elemdata_Pointer

- Create a pointer to the element data.

```fortran
FUNCTION Elemdata_Pointer() RESULT(ans)
  CLASS(Elemdata_), POINTER :: ans
  ALLOCATE (Elemdata_ :: ans)
END FUNCTION Elemdata_Pointer
```

## Elemdata_lt

- Compare two element data objects. Less than operator.

```fortran
FUNCTION Elemdata_lt(obj, obj2) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  TYPE(Elemdata_), INTENT(IN) :: obj2
  LOGICAL(LGT) :: ans
  ans = obj%globalElemNum .GT. obj2%globalElemNum
END FUNCTION Elemdata_lt
```

## Elemdata_eq

- Compare two element data objects. Equal operator.

```fortran
FUNCTION Elemdata_eq(obj, obj2) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  TYPE(Elemdata_), INTENT(IN) :: obj2
  LOGICAL(LGT) :: ans
  ans = obj%globalElemNum .EQ. obj2%globalElemNum
END FUNCTION Elemdata_eq
```

## Elemdata_SetID

- Set the element ID.

```fortran
SUBROUTINE Elemdata_SetID(obj, id)
  TYPE(Elemdata_), INTENT(INOUT) :: obj
  INTEGER(I4B), INTENT(IN) :: id
END SUBROUTINE
```

## Elemdata_GetGlobalFaceCon

- Get the global face connectivity. Returns the vertex connectivity of global face of elements.

```fortran
SUBROUTINE Elemdata_GetGlobalFaceCon(obj, globalFaceCon, localFaceCon)
  TYPE(Elemdata_), INTENT(INOUT) :: obj
  INTEGER(I4B), INTENT(INOUT) :: globalFaceCon(:, :)
  INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: localFaceCon(:, :)
END SUBROUTINE
```

## Elemdata_GetConnectivity

This subroutine returns the connectivity of the element.

- tsize is the size of data written in con
- con is the connectivity array, it should be allocated
- opt is the type of connectivity, following options are allowed
  - "V" or "v" : vertex connectivity
  - "E" or "e" : edge connectivity
  - "F" or "f" : face connectivity
  - "C" or "c" : cell connectivity
  - "A" or "a" : all connectivity

```fortran
SUBROUTINE Elemdata_GetConnectivity(obj, con, tsize, opt)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(INOUT) :: con(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
  CHARACTER(*), INTENT(IN), OPTIONAL :: opt
END SUBROUTINE
```

## Elemdata_GetConnectivity2

This subroutine returns the connectivity of the element.

```fortran
SUBROUTINE Elemdata_GetConnectivity2(obj, cellCon, faceCon, edgeCon, nodeCon, &
                                     tCellCon, tFaceCon, tEdgeCon, tNodeCon)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(INOUT) :: cellCon(:)
  !! cell connectivity
  INTEGER(I4B), INTENT(INOUT) :: faceCon(:)
  !! face connectivity
  INTEGER(I4B), INTENT(INOUT) :: edgeCon(:)
  !! edge connectivity
  INTEGER(I4B), INTENT(INOUT) :: nodeCon(:)
  !! node connectivity
  INTEGER(I4B), INTENT(OUT) :: tCellCon
  !! total data written in cellCon
  INTEGER(I4B), INTENT(OUT) :: tFaceCon
  !! total data written in faceCon
  INTEGER(I4B), INTENT(OUT) :: tEdgeCon
  !! total data written in edgeCon
  INTEGER(I4B), INTENT(OUT) :: tNodeCon
  !! total data written in nodeCon
END SUBROUTINE
```

## Elemdata_GetTotalEntities

This function returns the total number of vertex, edge, face and cell entities in the element.

```fortran
FUNCTION Elemdata_GetTotalEntities(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B) :: ans(4)
  ans(1) = SIZE(obj%globalNodes)
  ans(2) = SIZE(obj%globalEdges)
  ans(3) = SIZE(obj%globalFaces)
  ans(4) = 1
END FUNCTION Elemdata_GetTotalEntities
```

## Elemdata_GetVertex

This function returns the global vertex number of a given local vertex number.

```fortran
FUNCTION Elemdata_GetVertex(obj, ii) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(in) :: ii
  !! local vertex number
  INTEGER(I4B) :: ans
  !! global vertex number
  
  ans = obj%globalNodes(ii)
END FUNCTION Elemdata_GetVertex
```

## Elemdata_GetEdge

This function returns the global edge number of a given local edge number.

```fortran
FUNCTION Elemdata_GetEdge(obj, ii) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(in) :: ii
  !! local edge number
  INTEGER(I4B) :: ans
  !! global edge number
  ans = obj%globalEdges(ii)
END FUNCTION Elemdata_GetEdge
```

## Elemdata_GetFace

This function returns the global face number of a given local face number.

```fortran
FUNCTION Elemdata_GetFace(obj, ii) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(in) :: ii
  !! local face number
  INTEGER(I4B) :: ans
  !! global face number
  ans = obj%globalFaces(ii)
END FUNCTION Elemdata_GetFace
```

## Elemdata_GetCell

This function returns the global or local cell number of the element.

```fortran
FUNCTION Elemdata_GetCell(obj, islocal) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  LOGICAL(LGT), INTENT(in) :: islocal
  !! If true then local cell number is returned
  INTEGER(I4B) :: ans
  !! global or local element number (cell number)

  IF (islocal) THEN
    ans = obj%localElemNum
  ELSE
    ans = obj%globalElemNum
  END IF
END FUNCTION Elemdata_GetCell
```

## Elemdata_GetTotalEdgeDOF

This function returns the total number of edge dof on the edge of an element. It does not return the edge dof on the boundary of the element.

```fortran
FUNCTION Elemdata_GetTotalEdgeDOF(obj, ii, order, baseContinuity, &
                                  baseInterpolation) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  !! Element data object
  INTEGER(I4B), INTENT(IN) :: ii
  !! Local edge number
  INTEGER(I4B), INTENT(IN) :: order
  !! Order on the edge
  CHARACTER(*), INTENT(IN) :: baseContinuity
  !! base continuity: H1, HDiv, HCurl
  CHARACTER(*), INTENT(IN) :: baseInterpolation
  !! base interpolation type
  INTEGER(I4B) :: ans
  !! Total number of dof on edge
  ans = MAX(order - 2, 0_I4B)
END FUNCTION Elemdata_GetTotalEdgeDOF
```

## Elemdata_GetTotalFaceDOF

This function returns the total number of face dofs on the face of an element.
All dofs are internal to face, that is edge and vertex dof are not included.

```fortran
FUNCTION Elemdata_GetTotalFaceDOF(obj, ii, order, baseContinuity, &
                                  baseInterpolation) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  !! Element data object
  INTEGER(I4B), INTENT(IN) :: ii
  !! Local face number
  INTEGER(I4B), INTENT(IN) :: order
  !! Order on the edge
  CHARACTER(*), INTENT(IN) :: baseContinuity
  !! base continuity: H1, HDiv, HCurl
  CHARACTER(*), INTENT(IN) :: baseInterpolation
  !! base interpolation type
  INTEGER(I4B) :: ans
  !! Total number of dof on edge
END FUNCTION Elemdata_GetTotalFaceDOF
```

## Elemdata_GetTotalCellDOF

This function returns the total number of cell dofs on the cell of an element. All dofs are internal to cell, that is edge and vertex dof are not included.

```fortran
FUNCTION Elemdata_GetTotalCellDOF(obj, order, baseContinuity, &
                                  baseInterpolation) RESULT(ans)
  TYPE(Elemdata_), INTENT(in) :: obj
  !! Element data object
  INTEGER(I4B), INTENT(IN) :: order
  !! Order on the edge
  CHARACTER(*), INTENT(IN) :: baseContinuity
  !! base continuity: H1, HDiv, HCurl
  CHARACTER(*), INTENT(IN) :: baseInterpolation
  !! base interpolation type
  INTEGER(I4B) :: ans
  !! Total number of dof on edge
END FUNCTION Elemdata_GetTotalCellDOF
```

## Elemdata_GetElementToElements1

This subroutine returns the global element number of elements which surrounds the element.

```fortran
SUBROUTINE Elemdata_GetElementToElements1(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  !! Element to element, it should be allocated by user before calling
  INTEGER(I4B), INTENT(OUT) :: tsize
  !! The size of data written to ans
END SUBROUTINE Elemdata_GetElementToElements1
```

## Elemdata_GetElementToElements2

Get the element to element mapping including the local face number of the element and its neighbor.

```fortran
SUBROUTINE Elemdata_GetElementToElements2(obj, ans, nrow, ncol, &
                                          includeBoundaryElement)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:, :)
  !! Element to element, it should be allocated by user before calling
  !! each row denotes the information of a neighbor element.
  !! Therefore nrow is the total number of neighboring elements
  !! number of columns is 3. 
  !! The first column is global element of the neighbor element
  !! The second column is local face number of parent element (this element)
  !! The third column is local face number of neighbor element
  INTEGER(I4B), INTENT(OUT) :: nrow
  !! Number of rows written to ans
  INTEGER(I4B), INTENT(OUT) :: ncol
  !! Number of columns written to ans
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: includeBoundaryElement
  !! If includeBoundaryElement is present and true, 
  !! then the boundary element data is included in ans
  !! In this case the current element is considered as the boundary element
  !! ans(nrow, 1) contains the global element number of the current element
  !! ans(nrow, 2) contains the boundary data (local face number which coincides with
  !! the mesh boundary)
  !! ans(nrow, 3) is set to 0
END SUBROUTINE Elemdata_GetElementToElements2
```

## Elemdata_GetEdgeConnectivity

Get the connectivity of the local edge.

```fortran
SUBROUTINE Elemdata_GetEdgeConnectivity(obj, ans, tsize, ii)
  TYPE(Elemdata_), INTENT(IN) :: obj
  !! Element data object
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  !! edge connectivity, node numbers are global
  INTEGER(I4B), INTENT(OUT) :: tsize
  !! total data written to ans
  INTEGER(I4B), INTENT(IN) :: ii
  !! Edge number (local)
END SUBROUTINE
```

## Elemdata_isActive

This function return true if the element is active, false otherwise.

```fortran
PURE FUNCTION Elemdata_isActive(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  LOGICAL(LGT) :: ans
  ans = obj%isActive
END FUNCTION Elemdata_isActive
```

## Elemdata_globalElemNum

This function returns the global element number of the element.

```fortran
PURE FUNCTION Elemdata_globalElemNum(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = obj%globalElemNum
END FUNCTION Elemdata_globalElemNum
```

## Elemdata_localElemNum

This function returns the local element number of the element.

```fortran
PURE FUNCTION Elemdata_localElemNum(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = obj%localElemNum
END FUNCTION Elemdata_localElemNum
```

## Elemdata_name

This function returns the name of the element.

```fortran
PURE FUNCTION Elemdata_name(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = obj%name
END FUNCTION Elemdata_name
```

## Elemdata_topoName

This function returns the topology name of the element.

```fortran
PURE FUNCTION Elemdata_topoName(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = obj%topoName
END FUNCTION Elemdata_topoName
```

## Elemdata_topoIndx

This function returns the topology index of the element.

```fortran
PURE FUNCTION Elemdata_topoIndx(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = GetElementIndex(obj%topoName)
END FUNCTION Elemdata_topoIndx
```

## Elemdata_meshid

This function returns the mesh id of the element.

```fortran
PURE FUNCTION Elemdata_meshid(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = obj%meshid
END FUNCTION Elemdata_meshid
```

## Elemdata_GetTotalMaterial

This function returns the total number of materials in the element (that is material assigned the element).

```fortran
PURE FUNCTION Elemdata_GetTotalMaterial(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = SIZE(obj%material)
END FUNCTION Elemdata_GetTotalMaterial
```

## Elemdata_GetTotalGlobalNodes

This function returns the total number of global nodes in the element.

```fortran
PURE FUNCTION Elemdata_GetTotalGlobalNodes(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = SIZE(obj%globalNodes)
END FUNCTION Elemdata_GetTotalGlobalNodes
```

## Elemdata_GetTotalGlobalEdges

This function returns the total number of global edges in the element.

```fortran
PURE FUNCTION Elemdata_GetTotalGlobalEdges(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = SIZE(obj%globalEdges)
END FUNCTION Elemdata_GetTotalGlobalEdges
```

## Elemdata_GetTotalEdgeOrient

This function returns the size of edgeOrient array.

```fortran
PURE FUNCTION Elemdata_GetTotalEdgeOrient(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = SIZE(obj%edgeOrient)
END FUNCTION Elemdata_GetTotalEdgeOrient
```

## Elemdata_GetTotalGlobalFaces

This function returns the size of globalFaces array.

## Elemdata_GetTotalFaceOrient

This function returns the size of faceOrient array.

## Elemdata_GetTotalGlobalElements

This function returns the size of globalElements array.

## Elemdata_GetTotalBoundaryData

This function returns the size of boundaryData array.

## Elemdata_GetMaterial

This subroutine returns the materials assigned to the element.

```fortran
PURE SUBROUTINE Elemdata_GetMaterial(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetMaterial
```

## Elemdata_GetGlobalNodes

This subroutine returns the list of global nodes in the element.

```fortran
PURE SUBROUTINE Elemdata_GetGlobalNodes(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetGlobalNodes
```

## Elemdata_GetGlobalEdges

This subroutine returns the list of global edges in the element.

```fortran
PURE SUBROUTINE Elemdata_GetGlobalEdges(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetGlobalEdges
```

## Elemdata_GetGlobalFaces

This subroutine returns the list of global faces in the element.

```fortran
PURE SUBROUTINE Elemdata_GetGlobalFaces(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetGlobalFaces
```

## Elemdata_GetGlobalFaceNumber

This function returns the global face number from a local face number.

```fortran
PURE FUNCTION Elemdata_GetGlobalFaceNumber(obj, localFaceNumber) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: localFaceNumber
  !! local face number
  INTEGER(I4B) :: ans
  !! global face number
END FUNCTION Elemdata_GetGlobalFaceNumber
```

## Elemdata_GetGlobalEdgeNumber

This function returns the global edge number from a local edge number.

```fortran
PURE FUNCTION Elemdata_GetGlobalEdgeNumber(obj, localEdgeNumber) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: localEdgeNumber
  !! local edge number
  INTEGER(I4B) :: ans
  !! global edge number
END FUNCTION Elemdata_GetGlobalEdgeNumber
```

## Elemdata_GetGlobalElements

This subroutine returns the list of globalElements in the element.

```fortran
PURE SUBROUTINE Elemdata_GetGlobalElements(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetGlobalElements
```

:::note
This routine returns all the entries of globalElements, so you should look at the meaning of globalElements in the [Structure](#structure) section.
:::

## Elemdata_GetBoundaryData

This subroutine returns the list of boundaryData in the element.

```fortran
PURE SUBROUTINE Elemdata_GetBoundaryData(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  !! boundary data, see the boundaryData in the type definition
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetBoundaryData
```

## Elemdata_GetGlobalNodesPointer

This function returns the pointer to the globalNodes in the element.

```fortran
FUNCTION Elemdata_GetGlobalNodesPointer(obj) RESULT(ans)
  TYPE(Elemdata_), TARGET, INTENT(IN) :: obj
  INTEGER(I4B), POINTER :: ans(:)
  ans => obj%globalNodes
END FUNCTION Elemdata_GetGlobalNodesPointer
```

## Elemdata_GetEdgeOrient

This subroutine returns the list of edgeOrient vector in the element.

```fortran
PURE SUBROUTINE Elemdata_GetEdgeOrient(obj, ans, tsize)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE Elemdata_GetEdgeOrient
```

## Elemdata_GetFaceOrient

This subroutine returns the list of faceOrient vector in the element.

```fortran
PURE SUBROUTINE Elemdata_GetFaceOrient(obj, ans, nrow, ncol)
  TYPE(Elemdata_), INTENT(in) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:, :)
  INTEGER(I4B), INTENT(OUT) :: nrow, ncol
END SUBROUTINE Elemdata_GetFaceOrient
```

## Elemdata_GetOrientation

This subroutine returns the orientation related vectors in the element.

```fortran
PURE SUBROUTINE Elemdata_GetOrientation(obj, cellOrient, faceOrient, &
                            edgeOrient, tCellOrient, tFaceOrient, tEdgeOrient)
  TYPE(Elemdata_), INTENT(IN) :: obj
  !! element dataa
  INTEGER(I4B), INTENT(INOUT) :: cellOrient(:)
  !! cell connectivity of element
  INTEGER(I4B), INTENT(INOUT) :: faceOrient(:, :)
  !! face connectivity of element
  INTEGER(I4B), INTENT(INOUT) :: edgeOrient(:)
  !! edge connectivity of element
  INTEGER(I4B), INTENT(OUT) :: tCellOrient
  !! size of data written in cellCon
  INTEGER(I4B), INTENT(OUT) :: tFaceOrient(2)
  !! size of data written in faceCon
  INTEGER(I4B), INTENT(OUT) :: tEdgeOrient
  !! size of data written in edgecon
END SUBROUTINE Elemdata_GetOrientation
```

## Elemdata_FindFace

This subroutine finds the local face number of the element which contains the given face. The given face is described by its connectivity of the vertices.

```fortran
SUBROUTINE Elemdata_FindFace(obj, faceCon, isFace, &
                             localFaceNumber, onlyBoundaryElement)
  TYPE(Elemdata_), INTENT(IN) :: obj
    !! abstract mesh
  INTEGER(I4B), INTENT(IN) :: faceCon(:)
    !! vertex connectivity of face
  LOGICAL(LGT), INTENT(OUT) :: isFace
    !! if faceCon is a face of globalElement then it is true, else false
  INTEGER(I4B), INTENT(OUT) :: localFaceNumber
    !! local face number if found, else 0
  LOGICAL(LGT), INTENT(IN) :: onlyBoundaryElement
    !! if true then we will search if the element is boundary element
END SUBROUTINE Elemdata_FindFace
```

## Elemdata_FindEdge

This subroutine finds the local edge number of the element which contains the given edge. The given edge is described by its connectivity of the vertices.

```fortran
SUBROUTINE Elemdata_FindEdge(obj, edgeCon, isEdge, localEdgeNumber, &
                             onlyBoundaryElement)
  TYPE(Elemdata_), INTENT(IN) :: obj
  !! abstract mesh
  INTEGER(I4B), INTENT(IN) :: edgeCon(:)
  !! vertex connectivity of Edge
  LOGICAL(LGT), INTENT(OUT) :: isEdge
  !! if EdgeCon is a Edge of globalElement then it is true, else false
  INTEGER(I4B), INTENT(OUT) :: localEdgeNumber
  !! local Edge number if found, else 0
  LOGICAL(LGT), INTENT(IN) :: onlyBoundaryElement
  !! if true then we will search if the element is boundary element
END SUBROUTINE Elemdata_FindEdge
```

## Elemdata_IsBoundaryElement

This function returns true if the element is a boundary element, false otherwise.

```fortran
FUNCTION Elemdata_IsBoundaryElement(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  LOGICAL(LGT) :: ans
  ans = (obj%elementType .EQ. TypeElem%boundary) .OR. &
        (obj%elementType .EQ. TypeElem%domainBoundary)
END FUNCTION Elemdata_IsBoundaryElement
```

## Elemdata_Order

This function returns the order of the element.

```fortran
PURE FUNCTION Elemdata_Order(obj) RESULT(ans)
  TYPE(Elemdata_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
  ans = ElementOrder(obj%name)
END FUNCTION Elemdata_Order
```
