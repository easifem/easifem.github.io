# GetMaterial

The `GetMaterial` method retrieves the material ID assigned to a specific element and medium within the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_GetMaterial1(obj, medium, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: medium
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans
  END FUNCTION obj_GetMaterial1
END INTERFACE
```

## Syntax

```fortran
materialID = mesh%GetMaterial(medium, globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `medium`        | `INTEGER(I4B)`         | `IN`            | Medium number (e.g., soil, water)                           |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                                         |
| -------------- | --------------------------------------------------- |
| `INTEGER(I4B)` | Material ID for the specified medium in the element |

## Description

`GetMaterial` returns the material ID assigned to a specific medium within a given element. Materials are used to define physical properties of elements in the mesh for simulation purposes. Each element can have multiple materials corresponding to different media (e.g., soil, water, air).

## Implementation Details

The method first converts the global element number to a local element number if needed, then accesses the material property from the element data structure.

```fortran
MODULE PROCEDURE obj_GetMaterial1
INTEGER(I4B) :: iel
iel = obj%GetLocalElemNumber(globalElement, islocal=islocal)
ans = obj%elementData(iel)%ptr%material(medium)
END PROCEDURE obj_GetMaterial1
```

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: materialID, elementNum, mediumType

! Initialize mesh, elementNum, mediumType...

! Get the material ID for a specific element and medium
materialID = mesh%GetMaterial(medium=mediumType, globalElement=elementNum)

! Use the material ID for further calculations
```

## See Also

- `SetMaterial`: Sets the material properties for elements
- `GetTotalMaterial`: Gets the total number of materials for an element
