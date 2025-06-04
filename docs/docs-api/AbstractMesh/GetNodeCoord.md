# GetNodeCoord

The `GetNodeCoord` method retrieves the coordinates of nodes in the mesh. It has multiple versions for different use cases, including getting coordinates from files, for all nodes, for specific elements, or for individual nodes.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetNodeCoord1(obj, nodeCoord, hdf5, group)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: nodeCoord(:, :)
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE GetNodeCoord1
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNodeCoord2(obj, nodeCoord, nrow, ncol)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: nodeCoord(:, :)
    INTEGER(I4B), INTENT(OUT) :: nrow, ncol
  END SUBROUTINE GetNodeCoord2
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNodeCoord3(obj, nodeCoord, nrow, &
                                  ncol, globalElement, islocal)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: nodeCoord(:, :)
    INTEGER(I4B), INTENT(OUT) :: nrow, ncol
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE GetNodeCoord3
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNodeCoord4(obj, nodeCoord, nrow, ncol, &
                                  globalNode, islocal)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: nodeCoord(:, :)
    INTEGER(I4B), INTENT(OUT) :: nrow, ncol
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE GetNodeCoord4
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNodeCoord5(obj, nodeCoord, tsize, &
                                  globalNode, islocal)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: nodeCoord(:)
    INTEGER(I4B), INTENT(OUT) :: tsize
    INTEGER(I4B), INTENT(IN) :: globalNode
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE GetNodeCoord5
END INTERFACE
```

## Syntax

```fortran
! Get node coordinates from an HDF5 file
CALL mesh%GetNodeCoord(nodeCoord, hdf5, group)

! Get coordinates for all nodes
CALL mesh%GetNodeCoord(nodeCoord, nrow, ncol)

! Get coordinates for nodes in a specific element
CALL mesh%GetNodeCoord(nodeCoord, nrow, ncol, globalElement, [islocal])

! Get coordinates for specific nodes
CALL mesh%GetNodeCoord(nodeCoord, nrow, ncol, globalNode, [islocal])

! Get coordinates for a single node
CALL mesh%GetNodeCoord(nodeCoord, tsize, globalNode, [islocal])
```

## Parameters

| Parameter       | Type                                | Intent          | Description                                         |
| --------------- | ----------------------------------- | --------------- | --------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)`              | `IN`            | The mesh object                                     |
| `nodeCoord`     | `REAL(DFP)(:,:)` or `REAL(DFP)(:)`  | `INOUT`         | Array to store node coordinates                     |
| `nrow`, `ncol`  | `INTEGER(I4B)`                      | `OUT`           | Dimensions of data written to nodeCoord             |
| `tsize`         | `INTEGER(I4B)`                      | `OUT`           | Size of data written to nodeCoord (for single node) |
| `hdf5`          | `TYPE(HDF5File_)`                   | `INOUT`         | HDF5 file containing node coordinates               |
| `group`         | `CHARACTER(*)`                      | `IN`            | Group in HDF5 file containing node coordinates      |
| `globalElement` | `INTEGER(I4B)`                      | `IN`            | Global or local element number                      |
| `globalNode`    | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN`            | Global or local node number(s)                      |
| `islocal`       | `LOGICAL(LGT)`                      | `IN` (optional) | If true, input numbers are local rather than global |

## Description

`GetNodeCoord` retrieves the coordinates of nodes in the mesh. The method has multiple versions to handle different use cases:

1. Read node coordinates from an HDF5 file
2. Get coordinates for all nodes in the mesh
3. Get coordinates for all nodes in a specific element
4. Get coordinates for specific nodes by their node numbers
5. Get coordinates for a single node

Node coordinates are returned in a format where rows represent spatial dimensions (x, y, z) and columns represent node indices. For a single node, coordinates are returned as a 1D array.

This method is fundamental for geometric operations, visualization, and numerical calculations that depend on spatial positions.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
REAL(DFP), ALLOCATABLE :: allCoords(:, :), elemCoords(:, :), nodeCoords(:)
REAL(DFP) :: singleNodeCoord(3)
INTEGER(I4B) :: nrow, ncol, tsize, elemNum, nodeNum

! Initialize mesh...
elemNum = 10
nodeNum = 25

! Get coordinates for all nodes
ALLOCATE (allCoords(3, mesh%GetTotalNodes()))
CALL mesh%GetNodeCoord(allCoords, nrow, ncol)

! Get coordinates for nodes in element 10
ALLOCATE (elemCoords(3, mesh%GetNNE(elemNum)))
CALL mesh%GetNodeCoord(elemCoords, nrow, ncol, elemNum)

! Get coordinates for a single node
CALL mesh%GetNodeCoord(singleNodeCoord, tsize, nodeNum)

PRINT *, "Coordinates of node", nodeNum, ":", singleNodeCoord(1:tsize)
```
