# GetElementToElements_

A memory-efficient version of GetElementToElements that allows reusing existing arrays.

## Interface

```fortran
! Version 1 - Returns only element numbers
MODULE SUBROUTINE obj_GetElementToElements1_(obj, ans, tsize, globalElement, islocal)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  !! mesh
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  !! list of elements surrounding elements
  INTEGER(I4B), INTENT(OUT) :: tsize
  !! Size of data written to ans
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! Global element number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! If islocal is present and true then globalElement is a local element
END SUBROUTINE obj_GetElementToElements1_

! Version 2 - Returns full connection information
MODULE SUBROUTINE obj_GetElementToElements2_(obj, ans, nrow, ncol, globalElement, islocal)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  !! mesh
  INTEGER(I4B), INTENT(INOUT) :: ans(:, :)
  !! list of elements surrounding elements
  INTEGER(I4B), INTENT(OUT) :: nrow
  !! number of rows written to ans
  INTEGER(I4B), INTENT(OUT) :: ncol
  !! number of columns written to ans
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! Global element number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! If islocal is present and true then globalElement is a local element
END SUBROUTINE obj_GetElementToElements2_
```

## Arguments for Version 1

- `obj` (AbstractMesh_, input): The mesh object.
- `ans` (INTEGER array, output): Pre-allocated 1D array to store connected element numbers.
- `tsize` (INTEGER, output): Actual size of data written to `ans`.
- `globalElement` (INTEGER, input): The global (or local) element number.
- `islocal` (LOGICAL, optional, input): If present and true, `globalElement` is treated as local. Default is false.

## Arguments for Version 2

- `obj` (AbstractMesh_, input): The mesh object.
- `ans` (INTEGER array, output): Pre-allocated 2D array to store full connection information.
- `nrow` (INTEGER, output): Number of rows written to `ans`.
- `ncol` (INTEGER, output): Number of columns written to `ans`.
- `globalElement` (INTEGER, input): The global (or local) element number.
- `islocal` (LOGICAL, optional, input): If present and true, `globalElement` is treated as local. Default is false.

## Description

These subroutines retrieve element-to-element connectivity information without allocating new memory.

Version 1 returns only the element numbers connected to the specified element.

Version 2 returns full connection information (element numbers and local face numbers).

## Example

```fortran
! Version 1 - Only element numbers
INTEGER(I4B) :: connectedElems(10), tsize
CALL mesh%GetElementToElements_(connectedElems, tsize, 10)
! Now connectedElems(1:tsize) contains the connected element numbers

! Version 2 - Full connection information
INTEGER(I4B) :: connInfo(10,3), nrow, ncol
CALL mesh%GetElementToElements_(connInfo, nrow, ncol, 10)
! Now connInfo(1:nrow, 1:ncol) contains the full connection information
```
