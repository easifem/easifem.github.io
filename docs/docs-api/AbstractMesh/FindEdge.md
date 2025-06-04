# Find Edge

Find an edge in a cell (only for 3D meshes).

## Interface

```fortran
MODULE SUBROUTINE FindEdge(obj, globalElement, edgeCon, isEdge, &
                                localEdgeNumber, onlyBoundaryElement, islocal)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  !! abstract mesh
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local elem number
  INTEGER(I4B), INTENT(IN) :: edgeCon(:)
  !! vertex connectivity of Edge
  LOGICAL(LGT), INTENT(OUT) :: isEdge
  !! if EdgeCon is a Edge of globalElement then it is true, else false
  INTEGER(I4B), INTENT(OUT) :: localEdgeNumber
  !! local Edge number if found, else 0
  LOGICAL(LGT), INTENT(IN) :: onlyBoundaryElement
  !! if true then we will search if the element is boundary element
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then global element is local element
END SUBROUTINE FindEdge
```

## Description

Searches for a specific edge in a 3D element. This routine checks if the specified edge connectivity exists in the given element and returns the local edge number if found.

## Arguments

- `obj`: The abstract mesh object.
- `globalElement`: The global (or local) element number to search in.
- `edgeCon`: Array containing the vertex connectivity of the edge to find.
- `isEdge`: Returns true if the edge is found in the element.
- `localEdgeNumber`: Returns the local edge number if found, 0 otherwise.
- `onlyBoundaryElement`: If true, only searches if the element is a boundary element.
- `islocal`: If present and true, `globalElement` is treated as a local element number.

## Example

```fortran
INTEGER(I4B) :: elemNum = 10, edgeNodes(2) = [15, 23]
LOGICAL(LGT) :: found
INTEGER(I4B) :: edgeNum

CALL mesh%FindEdge(elemNum, edgeNodes, found, edgeNum, .FALSE.)

IF (found) THEN
  PRINT*, "Edge found with local number:", edgeNum
ELSE
  PRINT*, "Edge not found in element"
END IF
```
