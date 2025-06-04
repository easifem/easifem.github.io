# SetParam

The `SetParam` method sets various parameters and flags in the mesh object.

## Interface

```fortran
INTERFACE
 MODULE SUBROUTINE obj_SetParam(obj, isInitiated, isNodeToElementsInitiated, &
                                 isNodeToNodesInitiated, &
                  isExtraNodeToNodesInitiated, isElementToElementsInitiated, &
                         isBoundaryDataInitiated, isFacetDataInitiated, uid, &
                                 xidim, elemType, nsd, maxNptrs, minNptrs, &
                                 maxElemNum, minElemNum, tNodes, tElements, &
                                 minX, minY, minZ, maxX, maxY, maxZ, &
            x, y, z, tElements_topology_wise, tElemTopologies, elemTopologies)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isInitiated, &
      & isNodeToElementsInitiated, isNodeToNodesInitiated, &
      & isExtraNodeToNodesInitiated, isElementToElementsInitiated, &
      & isBoundaryDataInitiated, isFacetDataInitiated

    INTEGER(I4B), OPTIONAL, INTENT(IN) :: uid, &
      & xidim, elemType, nsd, maxNptrs, minNptrs, &
      & maxElemNum, minElemNum, tNodes, &
      & tElements, tElements_topology_wise(8), tElemTopologies,  &
      & elemTopologies(8)

    REAL(DFP), OPTIONAL, INTENT(IN) :: minX, &
      & minY, minZ, maxX, maxY, maxZ, &
      & x, y, z
  END SUBROUTINE obj_SetParam
END INTERFACE
```

## Syntax

```fortran
CALL obj%SetParam([isInitiated], [isNodeToElementsInitiated], [...])
```

## Parameters

All parameters are optional:

| Parameter                      | Type                   | Intent  | Description                          |
| ------------------------------ | ---------------------- | ------- | ------------------------------------ |
| `obj`                          | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object                      |
| `isInitiated`                  | `LOGICAL(LGT)`         | `IN`    | Flag indicating if mesh is initiated |
| `isNodeToElementsInitiated`    | `LOGICAL(LGT)`         | `IN`    | Flag for node-to-elements mapping    |
| `isNodeToNodesInitiated`       | `LOGICAL(LGT)`         | `IN`    | Flag for node-to-nodes mapping       |
| `isExtraNodeToNodesInitiated`  | `LOGICAL(LGT)`         | `IN`    | Flag for extra node-to-nodes mapping |
| `isElementToElementsInitiated` | `LOGICAL(LGT)`         | `IN`    | Flag for element-to-elements mapping |
| `isBoundaryDataInitiated`      | `LOGICAL(LGT)`         | `IN`    | Flag for boundary data               |
| `isFacetDataInitiated`         | `LOGICAL(LGT)`         | `IN`    | Flag for facet data                  |
| `uid`                          | `INTEGER(I4B)`         | `IN`    | Unique ID of the mesh                |
| `xidim`                        | `INTEGER(I4B)`         | `IN`    | Intrinsic dimension of elements      |
| `elemType`                     | `INTEGER(I4B)`         | `IN`    | Element type                         |
| `nsd`                          | `INTEGER(I4B)`         | `IN`    | Number of spatial dimensions         |
| `maxNptrs`                     | `INTEGER(I4B)`         | `IN`    | Maximum node number                  |
| `minNptrs`                     | `INTEGER(I4B)`         | `IN`    | Minimum node number                  |
| `maxElemNum`                   | `INTEGER(I4B)`         | `IN`    | Maximum element number               |
| `minElemNum`                   | `INTEGER(I4B)`         | `IN`    | Minimum element number               |
| `tNodes`                       | `INTEGER(I4B)`         | `IN`    | Total number of nodes                |
| `tElements`                    | `INTEGER(I4B)`         | `IN`    | Total number of elements             |
| `tElements_topology_wise`      | `INTEGER(I4B)(8)`      | `IN`    | Elements count by topology           |
| `tElemTopologies`              | `INTEGER(I4B)`         | `IN`    | Total element topologies             |
| `elemTopologies`               | `INTEGER(I4B)(8)`      | `IN`    | Element topology types               |
| `minX, minY, minZ`             | `REAL(DFP)`            | `IN`    | Minimum coordinates                  |
| `maxX, maxY, maxZ`             | `REAL(DFP)`            | `IN`    | Maximum coordinates                  |
| `x, y, z`                      | `REAL(DFP)`            | `IN`    | Centroid coordinates                 |

## Description

`SetParam` allows setting various mesh parameters and flags. All parameters are optional, so only the needed parameters need to be specified. This method is useful for directly modifying mesh properties.
