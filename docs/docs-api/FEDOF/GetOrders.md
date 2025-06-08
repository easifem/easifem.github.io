# GetOrders

The `GetOrders` method retrieves the cell order, face order, edge order, and their respective orientation information for a specified element in a finite element mesh. This method is part of the `FEDOF_` class which appears to handle Finite Element Degrees of Freedom.

## Interface

```fortran
MODULE SUBROUTINE GetOrders(obj, cellOrder, faceOrder, edgeOrder, cellOrient,
                           faceOrient, edgeOrient, tCellOrder, tFaceOrder,
                           tEdgeOrder, tCellOrient, tFaceOrient, tEdgeOrient,
                           globalElement, islocal)
```

## Parameters

### Input Parameters

- `obj` : `CLASS(FEDOF_), INTENT(IN)`
  - The FEDOF object instance containing the finite element discretization information.

- `globalElement` : `INTEGER(I4B), INTENT(IN)`
  - The global or local element number for which order information is requested.

- `islocal` : `LOGICAL(LGT), OPTIONAL, INTENT(IN)`
  - If present and true, indicates that `globalElement` is a local element number.
  - If omitted or false, `globalElement` is treated as a global element number.

### Output/Inout Parameters

- `cellOrder` : `INTEGER(I4B), INTENT(INOUT)(:)`
  - Array to store the cell order information.
  - Size should be at least 1.

- `faceOrder` : `INTEGER(I4B), INTENT(INOUT)(:,:)`
  - 2D array to store face order information.
  - First dimension (rows) should be 3.
  - Second dimension (columns) should be at least equal to the total number of faces in the element.

- `edgeOrder` : `INTEGER(I4B), INTENT(INOUT)(:)`
  - Array to store edge order information.
  - Size should be at least equal to the total number of edges in the element.

- `cellOrient` : `INTEGER(I4B), INTENT(INOUT)(:)`
  - Array to store cell orientation information.
  - Size should be at least 1.

- `faceOrient` : `INTEGER(I4B), INTENT(INOUT)(:,:)`
  - 2D array to store face orientation flags.
  - First dimension (rows) should be 3.
  - Second dimension (columns) should be at least equal to the total number of faces.

- `edgeOrient` : `INTEGER(I4B), INTENT(INOUT)(:)`
  - Array to store edge orientation flags.
  - Size should be at least equal to the total number of edges.

- `tCellOrder` : `INTEGER(I4B), INTENT(OUT)`
  - Returns the size of data written in `cellOrder`.

- `tFaceOrder` : `INTEGER(I4B), INTENT(OUT)`
  - Returns the size of data written in `faceOrder` (number of faces).

- `tEdgeOrder` : `INTEGER(I4B), INTENT(OUT)`
  - Returns the size of data written in `edgeOrder` (number of edges).

- `tCellOrient` : `INTEGER(I4B), INTENT(OUT)`
  - Returns the size of data written in `cellOrient`.

- `tFaceOrient` : `INTEGER(I4B), INTENT(OUT)(2)`
  - Returns the size of data written in `faceOrient`.

- `tEdgeOrient` : `INTEGER(I4B), INTENT(OUT)`
  - Returns the size of data written in `edgeOrient`.

## Description

The `GetOrders` method retrieves polynomial order information and orientation flags for a specified element in the finite element mesh. This includes:

1. The polynomial order of the cell (element)
2. The polynomial orders of all faces of the element
3. The polynomial orders of all edges of the element
4. The orientation flags for the cell, faces, and edges

The method first converts the global element number to a local element number if needed, then retrieves the connectivity information of the element from the underlying mesh. This connectivity information is used to index into the stored order and orientation data for the element, faces, and edges.

For face orders, the method copies the same order value to all three components (rows 1-3) of the corresponding face.

The orientation information is retrieved separately from the mesh using its `GetOrientation` method.

## Return Values

This subroutine does not return a value directly but fills the provided arrays with the requested information and returns the sizes of the filled data through the `tCellOrder`, `tFaceOrder`, `tEdgeOrder`, `tCellOrient`, `tFaceOrient`, and `tEdgeOrient` parameters.

## Implementation Details

1. Converts global element number to local if needed
2. Retrieves element connectivity information from the mesh
3. Extracts cell order for the specified element
4. Extracts face orders for all faces of the element
5. Extracts edge orders for all edges of the element
6. Retrieves orientation information for the cell, faces, and edges

## Usage Example

```fortran
! Assuming obj is an initialized FEDOF_ object
INTEGER(I4B) :: cellOrder(1), faceOrder(3, 6), edgeOrder(12)
INTEGER(I4B) :: cellOrient(1), faceOrient(3, 6), edgeOrient(12)
INTEGER(I4B) :: tCellOrder, tFaceOrder, tEdgeOrder
INTEGER(I4B) :: tCellOrient, tFaceOrient(2), tEdgeOrient
INTEGER(I4B) :: elemID = 5
LOGICAL(LGT) :: isLocal = .FALSE.

! Get orders and orientations for element 5 (global numbering)
CALL obj%GetOrders(cellOrder, faceOrder, edgeOrder, &
                  cellOrient, faceOrient, edgeOrient, &
                  tCellOrder, tFaceOrder, tEdgeOrder, &
                  tCellOrient, tFaceOrient, tEdgeOrient, &
                  elemID, isLocal)
```

## Notes

- The method assumes that the underlying mesh structure has been properly initialized.
- The arrays passed to this method should be pre-allocated with sufficient size to hold the data.
- Face order is replicated across all three rows of the `faceOrder` array for each face.
