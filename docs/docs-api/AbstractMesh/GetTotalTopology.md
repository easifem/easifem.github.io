# GetTotalTopology

The `GetTotalTopology` method returns the total number of different element topology types present in the mesh. This indicates how many different element shapes are used in the mesh construction.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetTotalTopology(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalTopology
END INTERFACE
```

## Syntax

```fortran
numTopologies = mesh%GetTotalTopology()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `INTEGER(I4B)` | Total number of different element topology types in the mesh |

## Description

`GetTotalTopology` returns the total number of different element topology types present in the mesh. A mixed mesh may contain several types of elements (e.g., tetrahedra and hexahedra), while a uniform mesh may contain only one element type.

This information is useful for mesh statistics and for algorithms that need to handle different element types.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: numTopologies

! Initialize mesh...

! Get the number of different element types
numTopologies = mesh%GetTotalTopology()

IF (numTopologies == 1) THEN
  PRINT *, "Mesh has uniform element topology"
ELSE
  PRINT *, "Mesh contains", numTopologies, "different element types"
END IF
```
