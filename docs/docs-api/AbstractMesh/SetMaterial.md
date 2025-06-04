# SetMaterial

The `SetMaterial` method assigns material properties to elements in the mesh. It has three versions for different use cases.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_SetMaterial1(obj, entityNum, medium, material)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: entityNum
    !! entity number
    INTEGER(I4B), INTENT(IN) :: medium
    !! medium number (like soil, water)
    INTEGER(I4B), INTENT(IN) :: material
    !! type of medium like clay, sand, water1, water2
  END SUBROUTINE obj_SetMaterial1
END INTERFACE

INTERFACE
  MODULE SUBROUTINE obj_SetMaterial2(obj, medium, material)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: medium
    INTEGER(I4B), INTENT(IN) :: material
  END SUBROUTINE obj_SetMaterial2
END INTERFACE

INTERFACE
  MODULE SUBROUTINE obj_SetMaterial3(obj, medium, material, globalElement, &
                                     islocal)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: medium
    !! medium number (like soil, water)
    INTEGER(I4B), INTENT(IN) :: material
    !! type of medium like clay, sand, water1, water2
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! global element
    LOGICAL(LGT), INTENT(IN) :: islocal
    !! is global element local
    !! we cannot keep it optional for unique interface
  END SUBROUTINE obj_SetMaterial3
END INTERFACE
```

## Syntax

```fortran
! Version 1: Set material for elements in a specific entity
CALL obj%SetMaterial(entityNum, medium, material)

! Version 2: Set material for all active elements
CALL obj%SetMaterial(medium, material)

! Version 3: Set material for a specific element
CALL obj%SetMaterial(medium, material, globalElement, islocal)
```

## Parameters

### Version 1

| Parameter   | Type                   | Intent  | Description                                |
| ----------- | ---------------------- | ------- | ------------------------------------------ |
| `obj`       | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object                            |
| `entityNum` | `INTEGER(I4B)`         | `IN`    | Entity number to match with element meshID |
| `medium`    | `INTEGER(I4B)`         | `IN`    | Medium number (e.g., soil, water)          |
| `material`  | `INTEGER(I4B)`         | `IN`    | Material type (e.g., clay, sand)           |

### Version 2

| Parameter  | Type                   | Intent  | Description     |
| ---------- | ---------------------- | ------- | --------------- |
| `obj`      | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object |
| `medium`   | `INTEGER(I4B)`         | `IN`    | Medium number   |
| `material` | `INTEGER(I4B)`         | `IN`    | Material type   |

### Version 3

| Parameter       | Type                   | Intent  | Description                                                 |
| --------------- | ---------------------- | ------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object                                             |
| `medium`        | `INTEGER(I4B)`         | `IN`    | Medium number                                               |
| `material`      | `INTEGER(I4B)`         | `IN`    | Material type                                               |
| `globalElement` | `INTEGER(I4B)`         | `IN`    | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN`    | If true, globalElement is treated as a local element number |

## Description

`SetMaterial` assigns material properties to elements in the mesh:

- Version 1 sets material for all elements belonging to a specific entity
- Version 2 sets material for all active elements in the mesh
- Version 3 sets material for a specific element

The material property is stored in the element data structure and can be later retrieved for physical calculations.
