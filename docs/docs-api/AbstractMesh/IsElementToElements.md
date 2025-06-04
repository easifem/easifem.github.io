# IsElementToElements

The `IsElementToElements` method checks if the element-to-elements mapping has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isElementToElements(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(in) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isElementToElements
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsElementToElements()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `LOGICAL(LGT)` | True if the element-to-elements mapping has been initialized |

## Description

`IsElementToElements` returns whether the element-to-elements mapping has been initialized in the mesh. This mapping allows for finding all elements adjacent to a given element.

## Implementation Details

The method returns the value of the internal flag `isElementToElementsInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if element-to-elements mapping is available
IF (mesh%IsElementToElements()) THEN
  ! Use mapping directly
ELSE
  ! Need to initialize mapping first
  CALL mesh%InitiateElementToElements()
END IF
```
