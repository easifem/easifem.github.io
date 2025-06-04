# GetMaxNNE

The `GetMaxNNE` method returns the maximum number of nodes in any element of the mesh. This is useful for allocating arrays that need to accommodate any element in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetMaxNNE(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetMaxNNE
END INTERFACE
```

## Syntax

```fortran
maxNodes = mesh%GetMaxNNE()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                            |
| -------------- | -------------------------------------- |
| `INTEGER(I4B)` | Maximum number of nodes in any element |

## Description

`GetMaxNNE` returns the maximum number of nodes in any element of the mesh. This is useful for allocating arrays that need to be large enough to handle any element in the mesh without knowing the specific element type in advance.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: maxNodes
REAL(DFP), ALLOCATABLE :: nodalValues(:)

! Initialize mesh...

! Get the maximum number of nodes in any element
maxNodes = mesh%GetMaxNNE()

! Allocate an array that can handle any element
ALLOCATE (nodalValues(maxNodes))

! Use the array for operations on different elements
```

