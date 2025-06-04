# GetTotalMaterial

The `GetTotalMaterial` method returns the total number of materials defined for a specific element in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_GetTotalMaterial1(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans
  END FUNCTION obj_GetTotalMaterial1
END INTERFACE
```

## Syntax

```fortran
totalMaterials = mesh%GetTotalMaterial(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                                       |
| -------------- | ------------------------------------------------- |
| `INTEGER(I4B)` | Total number of materials defined for the element |

## Description

`GetTotalMaterial` returns the total number of materials (media types) that have been defined for a specific element. If no materials have been defined for the element, it returns 0.

## Implementation Details

The method converts the global element number to a local element number, then returns the size of the material array for that element. If the material array is not allocated, it returns 0.

```fortran
MODULE PROCEDURE obj_GetTotalMaterial1
INTEGER(I4B) :: iel
iel = obj%GetLocalElemNumber(globalElement, islocal=islocal)
ans = 0 ! default value
IF (ALLOCATED(obj%elementData(iel)%ptr%material)) THEN
  ans = SIZE(obj%elementData(iel)%ptr%material)
END IF
END PROCEDURE obj_GetTotalMaterial1
```

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: totalMaterials, elementNum

! Initialize mesh, elementNum...

! Get the total number of materials for an element
totalMaterials = mesh%GetTotalMaterial(globalElement=elementNum)

! Check if materials are defined
IF (totalMaterials > 0) THEN
  PRINT *, "Element has", totalMaterials, "materials defined"
ELSE
  PRINT *, "No materials defined for this element"
END IF
```

## See Also

- `SetTotalMaterial`: Sets the total number of materials for an element
- `GetMaterial`: Gets the material ID for a specific medium in an element
