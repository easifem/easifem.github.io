# GetMaxElementToElements

Retrieves the maximum number of elements connected to any element in the mesh.

## Interface

```fortran
MODULE FUNCTION GetMaxElementToElements(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetMaxElementToElements
```

## Arguments

- `obj` (AbstractMesh_, input/output): The mesh object. May be modified if element-to-elements mapping needs to be initiated.

## Returns

- `ans` (INTEGER): The maximum number of elements connected to any element in the mesh.

## Description

This function returns the maximum number of elements connected to any element in the mesh. If the element-to-elements mapping has not been initiated, it will be initiated first.

This information is useful for pre-allocating arrays when working with element-to-element relationships.

## Example

```fortran
INTEGER(I4B) :: maxConnectedElements
maxConnectedElements = mesh%GetMaxElementToElements()
! Now maxConnectedElements contains the maximum number of elements connected to any element
```
