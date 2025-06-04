# GetGlobalEdgeNumber

Get global Edge number from global element and localEdgenumber.

## Interface

```fortran
MODULE FUNCTION GetGlobalEdgeNumber(obj, globalElement, localEdgeNumber, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! local or global element number
  INTEGER(I4B), INTENT(IN) :: localEdgeNumber
  !! local Edge number in global element
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then global element is local element
  INTEGER(I4B) :: ans
  !! global Edge number
END FUNCTION GetGlobalEdgeNumber
```

## Description

This function returns the global edge number for a specified local edge within an element. This is useful for identifying unique edges across the entire mesh.

## Arguments

- `obj`: The abstract mesh object.
- `globalElement`: The global (or local) element number.
- `localEdgeNumber`: The local edge number within the element.
- `islocal`: If present and true, `globalElement` is treated as a local element number.

## Returns

- `ans`: The global edge number.

## Example

```fortran
INTEGER(I4B) :: elemNum = 8, localEdge = 3, globalEdge

globalEdge = mesh%GetGlobalEdgeNumber(elemNum, localEdge)
PRINT*, "Global edge number:", globalEdge
```
