# GetGlobalFaceNumber

Get global face number from global element and localFacenumber.

## Interface

```fortran
MODULE FUNCTION GetGlobalFaceNumber(obj, globalElement, localFaceNumber, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! local or global element number
  INTEGER(I4B), INTENT(IN) :: localFaceNumber
  !! local face number in global element
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then global element is local element
  INTEGER(I4B) :: ans
  !! global face number
END FUNCTION GetGlobalFaceNumber
```

## Description

This function returns the global face number for a specified local face within an element. This is useful for identifying unique faces across the entire mesh.

## Arguments

- `obj`: The abstract mesh object.
- `globalElement`: The global (or local) element number.
- `localFaceNumber`: The local face number within the element.
- `islocal`: If present and true, `globalElement` is treated as a local element number.

## Returns

- `ans`: The global face number.

## Example

```fortran
INTEGER(I4B) :: elemNum = 8, localFace = 2, globalFace

globalFace = mesh%GetGlobalFaceNumber(elemNum, localFace)
PRINT*, "Global face number:", globalFace
```
