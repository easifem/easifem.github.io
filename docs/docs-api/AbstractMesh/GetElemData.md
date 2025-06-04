# GetElemData

The `GetElemData` method retrieves a complete copy of the element data for a specific element in the mesh. The element data contains all information about the element including its nodes, connectivity, and properties.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetElemData(obj, elemdata, globalElement, islocal)
    CLASS(AbstractMesh_), INTENT(in) :: obj
    TYPE(ElemData_), INTENT(INOUT) :: elemdata
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE GetElemData
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetElemData(elemdata, globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `elemdata`      | `TYPE(ElemData_)`      | `INOUT`         | Variable to store the element data                          |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Description

`GetElemData` creates a copy of all data for a specified element in the mesh. This provides a complete snapshot of the element's properties, which can be useful for detailed element analysis or processing.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
TYPE(ElemData_) :: elemData
INTEGER(I4B) :: elemNum

! Initialize mesh, elemNum...

! Get the complete element data
CALL mesh%GetElemData(elemData, elemNum)

! Use the element data
PRINT *, "Element type:", elemData%name
PRINT *, "Number of nodes:", SIZE(elemData%globalNodes)
```

