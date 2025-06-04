# GetElementToElements

Retrieves information about elements that are connected to a specified element.

## Interface

```fortran
MODULE PURE FUNCTION getElementToElements(obj, globalElement, &
                                          onlyElements) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! Global element number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: onlyElements
  !! If onlyElements is absent or it is FALSE then full information
  !! about the elements connected to element iel is given
  !! If onlyElements is present and it is TRUE then only the
  !! information about the elements connected to element iel is given
  INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  !! list of elements surrounding elements
END FUNCTION getElementToElements
```

## Arguments

- `obj` (AbstractMesh_, input): The mesh object.
- `globalElement` (INTEGER, input): The global (or local) element number.
- `onlyElements` (LOGICAL, optional, input): If present and true, only the element numbers are returned. If absent or false, full connection information is returned.
- `islocal` (LOGICAL, optional, input): If present and true, `globalElement` is treated as local. Default is false.

## Returns

- `ans` (INTEGER array): A 2D array containing element connection information.
  - If `onlyElements` is true, `ans` is an Nx1 array where each row contains a connected element number.
  - If `onlyElements` is false, `ans` is an Nx3 array where:
    - Column 1: Global element number of the neighbor
    - Column 2: Local face number of the specified element
    - Column 3: Local face number of the neighbor element

## Description

This function returns information about elements that share a face with the specified element. It can return either just the element numbers or detailed face connection information.

## Example

```fortran
! Get only element numbers connected to element 10
INTEGER(I4B), ALLOCATABLE :: connectedElems(:, :)
connectedElems = mesh%GetElementToElements(10, onlyElements=.TRUE.)

! Get full connection information for element 10
connectedElems = mesh%GetElementToElements(10)
! connectedElems(i,1) = connected element number
! connectedElems(i,2) = local face number in element 10
! connectedElems(i,3) = local face number in connected element
```
