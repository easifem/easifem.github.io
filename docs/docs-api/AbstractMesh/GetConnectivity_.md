# GetConnectivity_

A more memory-efficient version of GetConnectivity that allows reusing existing arrays.

## Syntax

```fortran
! Version 1 - Single output array
CALL mesh%GetConnectivity_(globalElement, ans, tsize, islocal, opt)

! Version 2 - Separate arrays for different entity types
CALL mesh%GetConnectivity_(cellCon, faceCon, edgeCon, nodeCon, tCellCon, tFaceCon, tEdgeCon, tNodeCon, globalElement, islocal)
```

## Arguments for Version 1

- `globalElement` (INTEGER, input): The global (or local) element number.
- `ans` (INTEGER array, output): Pre-allocated array to store connectivity data.
- `tsize` (INTEGER, output): Actual size of data written to `ans`.
- `islocal` (LOGICAL, optional, input): If present and true, `globalElement` is treated as local. Default is false.
- `opt` (CHARACTER, optional, input): Type of connectivity to retrieve (V, E, F, C, A). Default is "V" (vertex).

## Arguments for Version 2

- `cellCon` (INTEGER array, output): Pre-allocated array to store cell connectivity.
- `faceCon` (INTEGER array, output): Pre-allocated array to store face connectivity.
- `edgeCon` (INTEGER array, output): Pre-allocated array to store edge connectivity.
- `nodeCon` (INTEGER array, output): Pre-allocated array to store node (vertex) connectivity.
- `tCellCon` (INTEGER, output): Size of data written to `cellCon`.
- `tFaceCon` (INTEGER, output): Size of data written to `faceCon`.
- `tEdgeCon` (INTEGER, output): Size of data written to `edgeCon`.
- `tNodeCon` (INTEGER, output): Size of data written to `nodeCon`.
- `globalElement` (INTEGER, input): The global (or local) element number.
- `islocal` (LOGICAL, optional, input): If present and true, `globalElement` is treated as local. Default is false.

## Description

These subroutines retrieve connectivity information without allocating new memory. They write the connectivity data to pre-allocated arrays and return the actual sizes of data written.

Version 1 retrieves a single type of connectivity (specified by `opt`) into a single array.

Version 2 retrieves all types of connectivity data (cell, face, edge, and node) into separate arrays in a single call.

## Example

```fortran
! Version 1 example
INTEGER(I4B) :: conn(100), tsize
CALL mesh%GetConnectivity_(5, conn, tsize, opt="V")
! Now conn(1:tsize) contains the vertex connectivity

! Version 2 example
INTEGER(I4B) :: cellCon(20), faceCon(50), edgeCon(30), nodeCon(10)
INTEGER(I4B) :: tCellCon, tFaceCon, tEdgeCon, tNodeCon
CALL mesh%GetConnectivity_(cellCon, faceCon, edgeCon, nodeCon, tCellCon, tFaceCon, tEdgeCon, tNodeCon, 5)
! Now all connectivity arrays are populated
```

Need any clarification or additional information about these methods?
