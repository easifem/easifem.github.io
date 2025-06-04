# SetTotalMaterial

The `SetTotalMaterial` method sets the total number of materials for elements in the mesh. It has two versions: one for a specific element, and another for all elements in the mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetTotalMaterial1(obj, n, globalElement, islocal)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE SetTotalMaterial1
END INTERFACE

INTERFACE
  MODULE SUBROUTINE SetTotalMaterial2(obj, n)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: n
  END SUBROUTINE SetTotalMaterial2
END INTERFACE
```

## Syntax

```fortran
! Version 1: For a specific element
CALL obj%SetTotalMaterial(n, globalElement, islocal)

! Version 2: For all elements in the mesh
CALL obj%SetTotalMaterial(n)
```

## Parameters

### Version 1

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `INOUT`         | The mesh object                                             |
| `n`             | `INTEGER(I4B)`         | `IN`            | The total number of materials                               |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

### Version 2

| Parameter | Type                   | Intent  | Description                   |
| --------- | ---------------------- | ------- | ----------------------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object               |
| `n`       | `INTEGER(I4B)`         | `IN`    | The total number of materials |

## Description

`SetTotalMaterial` allocates memory for material properties in mesh elements. Version 1 sets the total number of materials for a specific element, while Version 2 sets the same value for all active elements in the mesh.
