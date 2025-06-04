# SetFacetElementType

The `SetFacetElementType` method sets the element type for a specific facet of a cell in the mesh. This is important for defining boundary conditions and inter-element connectivity.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetFacetElementType(obj, globalElement, &
                                        iface, facetElementType, islocal)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    INTEGER(I4B), INTENT(IN) :: iface
    INTEGER(I4B), INTENT(IN) :: facetElementType
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE SetFacetElementType
END INTERFACE
```

## Syntax

```fortran
CALL mesh%SetFacetElementType(globalElement, iface, facetElementType, [islocal])
```

## Parameters

| Parameter          | Type                   | Intent          | Description                                                 |
| ------------------ | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`              | `CLASS(AbstractMesh_)` | `INOUT`         | The mesh object                                             |
| `globalElement`    | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `iface`            | `INTEGER(I4B)`         | `IN`            | Local facet number within the element                       |
| `facetElementType` | `INTEGER(I4B)`         | `IN`            | Type of facet element to set                                |
| `islocal`          | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Description

`SetFacetElementType` assigns a specific element type to a facet of a mesh element. Facets are the boundaries of elements (faces in 3D, edges in 2D), and their types determine how they interact with other elements or boundaries.

The facet element type is used to specify if a facet is:

- An internal facet (shared between two elements)
- A boundary facet (on the domain boundary)
- A domain boundary facet (on the boundary between different domains)
- Another special type

## Implementation Details

The method:

1. Converts the global element number to a local element number if necessary
2. Sets the facet element type in the mesh's facetElementType array
3. Updates the element type in the element data structure

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum, faceNum, boundaryType
! Initialize mesh, elemNum, faceNum, boundaryType

! Set a boundary facet
CALL mesh%SetFacetElementType(elemNum, faceNum, boundaryType)
```

## Notes

- The facet element type is important for finite element analysis, especially for imposing boundary conditions and handling element interfaces
- Common facet element types include INTERNAL_ELEMENT, BOUNDARY_ELEMENT, and DOMAIN_BOUNDARY_ELEMENT
- This method is typically called after mesh generation and before analysis to properly set up boundary conditions

## See Also

- `GetFacetElementType`: Retrieves the element type of a facet
- `InitiateFacetElements`: Initializes the facet element data in the mesh
- `IsBoundaryElement`: Checks if an element is on the boundary
