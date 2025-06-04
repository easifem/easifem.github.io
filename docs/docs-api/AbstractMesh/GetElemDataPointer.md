# GetElemDataPointer

The `GetElemDataPointer` method returns a pointer to the element data for a specific element in the mesh. This provides direct access to the element data without creating a copy.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_GetElemDataPointer(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    TYPE(ElemData_), POINTER :: ans
  END FUNCTION obj_GetElemDataPointer
END INTERFACE
```

## Syntax

```fortran
elemDataPtr => mesh%GetElemDataPointer(globalElement, [islocal])
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_), TARGET` | `IN` | The mesh object |
| `globalElement` | `INTEGER(I4B)` | `IN` | Global or local element number |
| `islocal` | `LOGICAL(LGT)` | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type | Description |
|------|-------------|
| `TYPE(ElemData_), POINTER` | Pointer to the element data |

## Description

`GetElemDataPointer` returns a pointer to the internal element data for a specified element. This provides direct access to the element data without copying, which can be more efficient for operations that only need to read the data or for advanced manipulation.

## Example Usage

```fortran
TYPE(Mesh_), TARGET :: mesh
TYPE(ElemData_), POINTER :: elemDataPtr
INTEGER(I4B) :: elemNum

! Initialize mesh, elemNum...

! Get a pointer to the element data
elemDataPtr => mesh%GetElemDataPointer(elemNum)

! Use the element data pointer
IF (ASSOCIATED(elemDataPtr)) THEN
  PRINT*, "Element type:", elemDataPtr%name
  PRINT*, "Number of nodes:", SIZE(elemDataPtr%globalNodes)
ELSE
  PRINT*, "Element data not available"
END IF
```

---

