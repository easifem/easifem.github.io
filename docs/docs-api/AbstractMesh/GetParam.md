# GetParam

The `GetParam` method retrieves various parameters and properties of the mesh. It provides a comprehensive way to access mesh attributes in a single call.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_GetParam(obj, &
             isInitiated, isNodeToElementsInitiated, isNodeToNodesInitiated, &
                  isExtraNodeToNodesInitiated, isElementToElementsInitiated, &
                         isBoundaryDataInitiated, isFacetDataInitiated, uid, &
                                 xidim, elemType, nsd, maxNptrs, minNptrs, &
                                 maxElemNum, minElemNum, tNodes, tElements, &
                                 minX, minY, minZ, maxX, maxY, maxZ, &
            x, y, z, tElements_topology_wise, tElemTopologies, elemTopologies)

    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isInitiated, &
                          isNodeToElementsInitiated, isNodeToNodesInitiated, &
                  isExtraNodeToNodesInitiated, isElementToElementsInitiated, &
                                 isBoundaryDataInitiated, isFacetDataInitiated

    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: uid, xidim, elemType, nsd, &
                         maxNptrs, minNptrs, maxElemNum, minElemNum, tNodes, &
     tElements, tElements_topology_wise(8), tElemTopologies, elemTopologies(8)

    REAL(DFP), OPTIONAL, INTENT(OUT) :: minX, minY, minZ, maxX, maxY, maxZ, &
                                        x, y, z
  END SUBROUTINE obj_GetParam
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetParam([isInitiated], [isNodeToElementsInitiated], [...])
```

## Parameters

All parameters are optional:

| Parameter                      | Type                   | Intent | Description                                 |
| ------------------------------ | ---------------------- | ------ | ------------------------------------------- |
| `obj`                          | `CLASS(AbstractMesh_)` | `IN`   | The mesh object                             |
| `isInitiated`                  | `LOGICAL(LGT)`         | `OUT`  | Flag indicating if mesh is initiated        |
| `isNodeToElementsInitiated`    | `LOGICAL(LGT)`         | `OUT`  | Flag for node-to-elements mapping status    |
| `isNodeToNodesInitiated`       | `LOGICAL(LGT)`         | `OUT`  | Flag for node-to-nodes mapping status       |
| `isExtraNodeToNodesInitiated`  | `LOGICAL(LGT)`         | `OUT`  | Flag for extra node-to-nodes mapping status |
| `isElementToElementsInitiated` | `LOGICAL(LGT)`         | `OUT`  | Flag for element-to-elements mapping status |
| `isBoundaryDataInitiated`      | `LOGICAL(LGT)`         | `OUT`  | Flag for boundary data status               |
| `isFacetDataInitiated`         | `LOGICAL(LGT)`         | `OUT`  | Flag for facet data status                  |
| `uid`                          | `INTEGER(I4B)`         | `OUT`  | Unique ID of the mesh                       |
| `xidim`                        | `INTEGER(I4B)`         | `OUT`  | Intrinsic dimension of elements             |
| `elemType`                     | `INTEGER(I4B)`         | `OUT`  | Element type                                |
| `nsd`                          | `INTEGER(I4B)`         | `OUT`  | Number of spatial dimensions                |
| `maxNptrs`                     | `INTEGER(I4B)`         | `OUT`  | Maximum node number                         |
| `minNptrs`                     | `INTEGER(I4B)`         | `OUT`  | Minimum node number                         |
| `maxElemNum`                   | `INTEGER(I4B)`         | `OUT`  | Maximum element number                      |
| `minElemNum`                   | `INTEGER(I4B)`         | `OUT`  | Minimum element number                      |
| `tNodes`                       | `INTEGER(I4B)`         | `OUT`  | Total number of nodes                       |
| `tElements`                    | `INTEGER(I4B)`         | `OUT`  | Total number of elements                    |
| `tElements_topology_wise`      | `INTEGER(I4B)(8)`      | `OUT`  | Elements count by topology                  |
| `tElemTopologies`              | `INTEGER(I4B)`         | `OUT`  | Total element topologies                    |
| `elemTopologies`               | `INTEGER(I4B)(8)`      | `OUT`  | Element topology types                      |
| `minX, minY, minZ`             | `REAL(DFP)`            | `OUT`  | Minimum coordinates of mesh                 |
| `maxX, maxY, maxZ`             | `REAL(DFP)`            | `OUT`  | Maximum coordinates of mesh                 |
| `x, y, z`                      | `REAL(DFP)`            | `OUT`  | Centroid coordinates of mesh                |

## Description

`GetParam` provides a flexible way to retrieve various mesh parameters in a single method call. It allows retrieving any combination of mesh properties such as initialization status flags, mesh dimensions, node and element counts, boundary information, and spatial extents.

## Implementation Details

The implementation simply assigns the requested mesh attributes to the corresponding output parameters if they are present in the call. All parameters are optional, so only the needed parameters are processed.

```fortran
MODULE PROCEDURE obj_GetParam
IF (PRESENT(isInitiated)) isInitiated = obj%isInitiated
IF (PRESENT(isNodeToElementsInitiated)) isNodeToElementsInitiated = obj%isNodeToElementsInitiated
...
END PROCEDURE obj_GetParam
```

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: totalNodes, totalElements, dimensions
REAL(DFP) :: xMin, xMax, yMin, yMax, zMin, zMax

! Initialize mesh...

! Get multiple mesh parameters in a single call
CALL mesh%GetParam(tNodes=totalNodes, tElements=totalElements, nsd=dimensions, &
             minX=xMin, maxX=xMax, minY=yMin, maxY=yMax, minZ=zMin, maxZ=zMax)

! Display mesh information
PRINT *, "Mesh has", totalNodes, "nodes and", totalElements, "elements"
PRINT *, "Dimensions:", dimensions
PRINT *, "X range:", xMin, "to", xMax
PRINT *, "Y range:", yMin, "to", yMax
PRINT *, "Z range:", zMin, "to", zMax
```

## See Also

- `SetParam`: Sets mesh parameters
- Individual getter methods for specific parameters (GetTotalNodes, GetTotalElements, etc.)
