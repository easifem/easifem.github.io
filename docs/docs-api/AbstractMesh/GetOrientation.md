# GetOrientation

The `GetOrientation` method retrieves orientation flags for the cells, faces, and edges of a specific element. Orientation flags indicate how local entities are oriented with respect to the global reference frame.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetOrientation(obj, cellOrient, faceOrient, &
           edgeOrient, tCellOrient, tFaceOrient, tEdgeOrient, globalElement, &
                                   islocal)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(INOUT) :: cellOrient(:)
    !! cell connectivity of element
    INTEGER(I4B), INTENT(INOUT) :: faceOrient(:, :)
    !! face connectivity of element
    INTEGER(I4B), INTENT(INOUT) :: edgeOrient(:)
    !! edge connectivity of element
    INTEGER(I4B), INTENT(OUT) :: tCellOrient
    !! size of data written in cellCon
    INTEGER(I4B), INTENT(OUT) :: tFaceOrient(2)
    !! size of data written in faceCon
    !! tFaceOrient(1) is the number of rows in faceOrient
    !! tFaceOrient(2) is the number of columns in faceOrient
    INTEGER(I4B), INTENT(OUT) :: tEdgeOrient
    !! size of data written in edgecon
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! global or local element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then global element is local element
  END SUBROUTINE GetOrientation
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetOrientation(cellOrient, faceOrient, edgeOrient, tCellOrient, tFaceOrient, tEdgeOrient, globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `cellOrient`    | `INTEGER(I4B)(:)`      | `INOUT`         | Array to store cell orientation flags                       |
| `faceOrient`    | `INTEGER(I4B)(:,:)`    | `INOUT`         | Array to store face orientation flags                       |
| `edgeOrient`    | `INTEGER(I4B)(:)`      | `INOUT`         | Array to store edge orientation flags                       |
| `tCellOrient`   | `INTEGER(I4B)`         | `OUT`           | Size of data written to cellOrient                          |
| `tFaceOrient`   | `INTEGER(I4B)(2)`      | `OUT`           | Dimensions of data written to faceOrient                    |
| `tEdgeOrient`   | `INTEGER(I4B)`         | `OUT`           | Size of data written to edgeOrient                          |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Description

`GetOrientation` retrieves orientation flags for the cells, faces, and edges of a specified element. Orientation information is crucial for maintaining consistent element definitions, particularly for higher-order elements and when performing operations that depend on the normal direction of faces.

The method populates the provided arrays with orientation flags and returns the actual sizes of data written to these arrays.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum
INTEGER(I4B) :: cellOrient(1), faceOrient(4, 6), edgeOrient(12)
INTEGER(I4B) :: tCellOrient, tFaceOrient(2), tEdgeOrient

! Initialize mesh, elemNum...

! Get orientation information
CALL mesh%GetOrientation(cellOrient, faceOrient, edgeOrient, &
                         tCellOrient, tFaceOrient, tEdgeOrient, elemNum)

! Use orientation information for accurate element integration
```
