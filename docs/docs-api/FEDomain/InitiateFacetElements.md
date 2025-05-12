# InitiateFacetElements

This routine initiates the facet element information for every mesh of the domain. 

- [InitiateFacetElements](../FEMesh/InitiateFacetElements.md)

This routine makes an internal call to [InitiateFacetElements](../FEMesh/InitiateFacetElements.md) from [FEMesh_](../FEMesh/FEMesh_.md).

Please check documentation of following methods:

- [SetDomainFacetElement](./SetDomainFacetElement.md)
- [SetFacetElementType](./SetFacetElementType.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetElements(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFacetElements
END INTERFACE
```
