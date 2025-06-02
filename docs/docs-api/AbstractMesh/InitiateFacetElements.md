---
title: InitiateFacetElements
---

This routine needs following information:

- `ElementToElements`
- `BoundaryData`

It makes following data

- `InternalFacetData`
- `BoundaryFacetData`
- `FacetElementType`

Note that at this point all `boundaryFacet` element are of type `DOMAIN_BOUNDARY_ELEMENT`. This information can be corrected only when
we call `SetFacetElementType` from Domain_ class. This is because, at this point we only know that a boundary facet is a domain boundary element, as we have no information about the neighbouring mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetElements(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFacetElements
END INTERFACE
```
