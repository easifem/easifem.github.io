# IsDomainFacetElement

The `IsDomainFacetElement` method checks if a specific facet element is a domain boundary facet element in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isDomainFacetElement(obj, facetElement) &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: facetElement
    LOGICAL(LGT) :: ans
  END FUNCTION isDomainFacetElement
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsDomainFacetElement(facetElement)
```

## Parameters

| Parameter      | Type                   | Intent | Description                   |
| -------------- | ---------------------- | ------ | ----------------------------- |
| `obj`          | `CLASS(AbstractMesh_)` | `IN`   | The mesh object               |
| `facetElement` | `INTEGER(I4B)`         | `IN`   | Facet element number to check |

## Return Value

| Type           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `LOGICAL(LGT)` | True if the facet element is a domain boundary facet element |

## Description

`IsDomainFacetElement` determines whether a specified facet element is a domain boundary facet element in the mesh. Domain boundary facet elements are facets (edges in 2D, faces in 3D) that lie on the boundary of the computational domain.

## Implementation Details

The method checks if the facet data for the specified facet element has an element type of DOMAIN_BOUNDARY_ELEMENT.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: facetNum
LOGICAL(LGT) :: isDomainFacet

! Initialize mesh, facetNum...

! Check if a facet is on the domain boundary
isDomainFacet = mesh%IsDomainFacetElement(facetNum)

IF (isDomainFacet) THEN
  PRINT *, "Facet", facetNum, "is on the domain boundary"
ELSE
  PRINT *, "Facet", facetNum, "is not on the domain boundary"
END IF
```
