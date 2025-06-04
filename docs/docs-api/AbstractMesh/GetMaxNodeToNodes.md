# GetMaxNodeToNodes

Retrieves the maximum number of nodes connected to any node in the mesh.

## Interface

```fortran
MODULE FUNCTION GetMaxNodeToNodes(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetMaxNodeToNodes
```

## Arguments

- `obj` (AbstractMesh_, input/output): The mesh object. May be modified if node-to-nodes mapping needs to be initiated.

## Returns

- `ans` (INTEGER): The maximum number of nodes connected to any node in the mesh.

## Description

This function returns the maximum number of nodes connected to any node in the mesh. If the node-to-nodes mapping has not been initiated, it will be initiated first.

This information is useful for pre-allocating arrays when working with node-to-node relationships.

## Example

```fortran
INTEGER(I4B) :: maxConnectedNodes
maxConnectedNodes = mesh%GetMaxNodeToNodes()
! Now maxConnectedNodes contains the maximum number of nodes connected to any node
```
