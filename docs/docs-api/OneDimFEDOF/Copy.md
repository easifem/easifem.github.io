# Copy

The `Copy` method copies the contents of one `FEDOF_` object to another. This method is also used by the assignment operator (`=`) for `FEDOF_` objects.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Copy(obj, obj2)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    CLASS(FEDOF_), INTENT(IN) :: obj2
  END SUBROUTINE Copy
END INTERFACE
```

## Parameters

- `obj` - The destination `FEDOF_` object that will receive the copied data
- `obj2` - The source `FEDOF_` object whose data will be copied

## Implementation Details

The method performs a shallow copy of most attributes from `obj2` to `obj`:

1. Copies basic properties:
   - `isLagrange` - Flag indicating if the base interpolation is Lagrange
   - `tdof` - Total number of degrees of freedom
   - `tNodes`, `tEdges`, `tFaces`, `tCells` - Total count of different mesh entities
   - `baseContinuity` - Continuity or conformity of basis (e.g., "H1")
   - `baseInterpolation` - Type of basis functions (e.g., "LAGR", "HIER")
   - `maxCellOrder`, `maxFaceOrder`, `maxEdgeOrder` - Maximum order values

2. Sets the mesh pointer to point to the same mesh as the source object:

```fortran
obj%mesh => obj2%mesh
```

3. Copies array data when allocated in the source object:
   - `cellOrder` - Order of each cell
   - `faceOrder` - Order of each face
   - `edgeOrder` - Order of each edge
   - `edgeIA`, `faceIA`, `cellIA` - Sparsity patterns for different entities

4. Associates finite element pointers:

```fortran
DO ii = 1, SIZE(obj2%fe)
  isok = ASSOCIATED(obj2%fe(ii)%ptr)
  IF (isok) THEN
    obj%fe(ii)%ptr => obj2%fe(ii)%ptr
  END IF
END DO
```

## Notes

- This is a shallow copy - the mesh and finite element pointers in the destination object point to the same objects as the source.
- Array data is copied only if it exists in the source object.
- The method doesn't allocate new memory for arrays; it assumes the destination arrays either don't exist or are already properly allocated.
- This method is particularly useful when you need to create a duplicate of a `FEDOF_` object without creating new underlying mesh or finite element instances.

## Example

import EXAMPLE65 from "./examples/_Copy_test_1.md";

<EXAMPLE65 />
