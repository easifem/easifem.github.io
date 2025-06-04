# IsAllNodePresent

The `IsAllNodePresent` method checks if all of the specified nodes exist in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isAllNodePresent(obj, globalNode, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isAllNodePresent
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsAllNodePresent(globalNode, [islocal])
```

## Parameters

| Parameter    | Type                   | Intent          | Description                                     |
| ------------ | ---------------------- | --------------- | ----------------------------------------------- |
| `obj`        | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                 |
| `globalNode` | `INTEGER(I4B)(:)`      | `IN`            | Array of global or local node numbers to check  |
| `islocal`    | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalNode contains local node numbers |

## Return Value

| Type           | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `LOGICAL(LGT)` | True if all of the specified nodes are present in the mesh |

## Description

`IsAllNodePresent` determines whether all of the specified nodes exist in the mesh. It returns a single logical value that is true only if every specified node is present.

## Implementation Details

The method uses `IsNodePresent` to check each node individually, then applies the `ALL` intrinsic function to determine if all are present.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: nodeArray(3)
LOGICAL(LGT) :: allPresent

! Initialize mesh
nodeArray = [101, 202, 303] ! Node numbers to check

! Check if all of these nodes exist
allPresent = mesh%IsAllNodePresent(nodeArray)

IF (allPresent) THEN
  PRINT *, "All specified nodes exist in the mesh"
ELSE
  PRINT *, "Not all specified nodes exist in the mesh"
END IF
```
