# IsAnyNodePresent

The `IsAnyNodePresent` method checks if any of the specified nodes exist in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isAnyNodePresent(obj, globalNode, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isAnyNodePresent
END INTERFACE
```

## Syntax

```fortran
result = mesh%IsAnyNodePresent(globalNode, [islocal])
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `IN` | The mesh object |
| `globalNode` | `INTEGER(I4B)(:)` | `IN` | Array of global or local node numbers to check |
| `islocal` | `LOGICAL(LGT)` | `IN` (optional) | If true, globalNode contains local node numbers |

## Return Value

| Type | Description |
|------|-------------|
| `LOGICAL(LGT)` | True if any of the specified nodes are present in the mesh |

## Description

`IsAnyNodePresent` determines whether any of the specified nodes exist in the mesh. It returns a single logical value that is true if at least one of the specified nodes is present.

## Implementation Details

The method uses `IsNodePresent` to check each node individually, then applies the `ANY` intrinsic function to determine if at least one is present.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: nodeArray(3)
LOGICAL(LGT) :: anyPresent

! Initialize mesh
nodeArray = [101, 202, 303]  ! Node numbers to check

! Check if any of these nodes exist
anyPresent = mesh%IsAnyNodePresent(nodeArray)

IF (anyPresent) THEN
  PRINT*, "At least one of the specified nodes exists in the mesh"
ELSE
  PRINT*, "None of the specified nodes exist in the mesh"
END IF
```

