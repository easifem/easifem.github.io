# SetElemToLocalBoundary

This method sets the element to face and element to edge data.

In particular it set the following data in an instance of `AbstractBC_`:

- `elemToFace`
- `elemToEdge`
- `tElemToFace`
- `tElemToEdge`

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetElemToLocalBoundary(obj)
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
  END SUBROUTINE SetElemToLocalBoundary
END INTERFACE
```

## Purpose

This procedure sets up the mapping data between boundary elements and their corresponding local cell elements in the domain. It identifies which cells are connected to boundary faces or edges, and stores this information in the `elemToFace` and `elemToEdge` arrays.

## Description
The method establishes two key mappings required for applying boundary conditions:

1. **Element to Face Mapping**: For each boundary face element, identifies the corresponding cell element and local face number within that cell.

2. **Element to Edge Mapping**: For 3D problems, identifies the mapping between boundary edge elements and the corresponding cell elements and local edge numbers.

These mappings are essential for enforcing boundary conditions in finite element analysis, especially for hierarchical elements where conditions need to be applied to specific faces or edges of elements.

## Implementation Details
The procedure:
1. Calls `set_elem_to_faces` to establish the element-to-face connectivity
2. Calls `set_elem_to_edges` to establish the element-to-edge connectivity (for 3D problems)

The implementation populates:
- `obj%elemToFace`: A 2×N array where each column contains [localCellNumber, localFaceNumber]
- `obj%elemToEdge`: A 2×N array where each column contains [localCellNumber, localEdgeNumber]

The results are stored in the `AbstractBC_` object and can be accessed when applying boundary conditions.

## Notes
- This method is particularly important for hierarchical finite elements where boundary conditions must be applied to specific faces or edges.
- For face elements, the method works in domains of dimension 2 or higher.
- For edge elements, the method only works in 3D domains.
- Once called, the object's `isElemToFace` and/or `isElemToEdge` flags are set to `.TRUE.`.


