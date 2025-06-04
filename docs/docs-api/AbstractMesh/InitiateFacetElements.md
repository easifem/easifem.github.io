# InitiateFacetElements

The `InitiateFacetElements` method initializes facet element data for an `AbstractMesh_` object.
Facet elements are essential for handling boundary conditions, inter-element flux computations, and discontinuous Galerkin methods.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetElements(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFacetElements
END INTERFACE
```

## Description

This method creates and populates the `facetData` array in the mesh object. Facet elements represent the interfaces between mesh elements (cells) and can be either internal facets (shared between two elements) or boundary facets (associated with a single element at the domain boundary).

The implementation:

1. Performs several validation checks:
   - Ensures the mesh has a valid dimension (not 0)
   - Checks if facet data is already initialized
   - Verifies element-to-element connectivity is available
   - Confirms boundary data is initialized

2. Allocates and initializes the `facetData` array with size equal to the total number of faces in the mesh (`obj%tfaces`)

3. Processes each active element in the mesh to extract facet data information

4. Uses the utility function `GetFacetDataFromElemData` to extract and populate facet data from element data

## Implementation Details

The method requires:

- Element-to-element connectivity (`InitiateElementToElements`)
- Boundary data information (`InitiateBoundaryData`)

Both of these dependencies are automatically initialized if not already present.

The facet data extraction process:

- Iterates through all elements in the mesh
- Skips inactive elements
- Builds a comprehensive facet data structure that contains information about:
  - The element(s) sharing each facet
  - The local facet number within each element
  - Facet type (internal, boundary, domain boundary)
  - Facet connectivity

## Usage

This method is typically called internally when facet information is needed:

```fortran
TYPE(YourMeshType_) :: mesh
! Initialize mesh
CALL mesh%InitiateFacetElements()
```

## Error Handling

The method includes error handling for these cases:

- Zero-dimensional meshes (returns without action)
- No faces found in the mesh (raises an error)

## Notes

- Sets the `isFacetDataInitiated` flag to `TRUE` to prevent duplicate initialization
- Uses a `masks` array to track which facets have been processed
- Debug information is included when compiled with `DEBUG_VER` defined

This method is crucial for finite element methods that require integration over element boundaries or flux calculations across interfaces.
