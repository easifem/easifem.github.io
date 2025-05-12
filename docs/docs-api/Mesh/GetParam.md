# GetParam

This subroutine returns the parameters of the mesh object.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_GetParam(obj, &
    & isInitiated, isNodeToElementsInitiated, isNodeToNodesInitiated, &
    & isExtraNodeToNodesInitiated, isElementToElementsInitiated, &
    & isBoundaryDataInitiated, isFacetDataInitiated, uid, &
    & xidim, elemType, nsd, maxNptrs, minNptrs, &
    & maxElemNum, minElemNum, tNodes, tElements, &
    & minX, minY, minZ, maxX, maxY, maxZ, &
    & x, y, z, tElements_topology_wise, tElemTopologies, elemTopologies)
    CLASS(Mesh_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isInitiated, &
      & isNodeToElementsInitiated, isNodeToNodesInitiated, &
      & isExtraNodeToNodesInitiated, isElementToElementsInitiated, &
      & isBoundaryDataInitiated, isFacetDataInitiated

    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: uid, &
      & xidim, elemType, nsd, maxNptrs, minNptrs, &
      & maxElemNum, minElemNum, tNodes, &
      & tElements, tElements_topology_wise(8), tElemTopologies,  &
      & elemTopologies(8)

    REAL(DFP), OPTIONAL, INTENT(OUT) :: minX, &
      & minY, minZ, maxX, maxY, maxZ, &
      & x, y, z
  END SUBROUTINE obj_GetParam
END INTERFACE
```
