# GetFaceElemType

This method returns the element type of each face.

## Interface

```fortran
INTERFACE GetFaceElemType
  MODULE PURE SUBROUTINE GetFaceElemType1(elemType, faceElemType, opt,  &
    & tFaceNodes)
    INTEGER(I4B), INTENT(IN) :: elemType
    !! name of element
    INTEGER(I4B), INTENT(INOUT) :: faceElemType(:)
    !! Element names of faces
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: tFaceNodes(:)
    !! Total number of nodes in each face
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
    !! If opt = 1, then edge connectivity for hierarchial approximation
    !! If opt = 2, then edge connectivity for Lagrangian approximation
    !! opt = 1 is default
  END SUBROUTINE GetFaceElemType1
END INTERFACE GetFaceElemType
```

:::info `elemType`

Integer code for element type.

:::

:::info `faceElemType`

A vector of face element types. It should be allocated by the user.

:::

:::info `tFaceNodes`

This is optional. If present, then we can get the total number of nodes in each face.

:::

:::info `opt`

- If opt = 1, then edge connectivity for hierarchial approximation
- If opt = 2, then edge connectivity for Lagrangian approximation
- opt = 1 is default

:::

## Line

For the line elements we call `GetFaceElemType_Line` method. This method works as follows:

- `faceElemType` is`Point`
- `tFaceNodes` is `1`
- `opt` is ignored

## Triangle

For the triangle elements we call `GetFaceElemType_Triangle` method. This method works as follows:

- `opts` is ignored.

### Triangle3

- `faceElemType` is `Line2`
- `tFaceNodes` is `2`

### Triangle6

- `faceElemType` is `Line3`
- `tFaceNodes` is `3`

### Triangle9, Triangle10

- `faceElemType` is `Line4`
- `tFaceNodes` is `4`

### Triangle15

- `faceElemType` is `Line5`
- `tFaceNodes` is `5`

### Triangle21

- `faceElemType` is `Line6`
- `tFaceNodes` is `6`
