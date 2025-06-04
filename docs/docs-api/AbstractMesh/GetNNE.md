# GetNNE

The `GetNNE` method returns the number of nodes in a specific element of the mesh. This is useful for determining the size of arrays needed for element-based operations.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetNNE(obj, globalElement, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans
  END FUNCTION GetNNE
END INTERFACE
```

## Syntax

```fortran
numNodes = mesh%GetNNE(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                    |
| -------------- | ------------------------------ |
| `INTEGER(I4B)` | Number of nodes in the element |

## Description

`GetNNE` returns the number of nodes in a specified element. This is an important property as different element types and orders have different numbers of nodes. The method can be used to allocate arrays of appropriate size for element-based operations.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum, numNodes
REAL(DFP), ALLOCATABLE :: nodalValues(:)

! Initialize mesh, elemNum...

! Get the number of nodes in the element
numNodes = mesh%GetNNE(elemNum)

! Allocate an array for nodal values
ALLOCATE (nodalValues(numNodes))

! Use the array for element operations
```

---
