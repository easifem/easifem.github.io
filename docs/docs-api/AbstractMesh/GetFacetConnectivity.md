# GetFacetConnectivity

Generic method to get the connectivity of a facet element.

## Interface

```fortran
! AbstractMeshGetFacetConnectivity - Get connectivity of a facet element
MODULE FUNCTION AbstractMeshGetFacetConnectivity(obj, facetElement, elementType, isMaster) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: facetElement
  INTEGER(I4B), INTENT(IN) :: elementType
  LOGICAL(LGT), INTENT(IN) :: isMaster
    !! if isMaster is true then connectivity of facet in master-cell
    !! is returned, otherwise connectivity of facet in slave-cell
    !! is returned. This is only applicable for internal facet element
    !! because for domain facet we do not have slave-cell.
    !! Currently, we do not support slave-cell for meshFacet because
    !! the slave of meshFacet lives in different instance of 
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION AbstractMeshGetFacetConnectivity

! GetFacetConnectivity - Get connectivity of a facet in a cell
MODULE FUNCTION GetFacetConnectivity(obj, globalElement, iface, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  INTEGER(I4B), INTENT(IN) :: iface
  LOGICAL(I4B), OPTIONAL, INTENT(IN) :: islocal
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION GetFacetConnectivity
```

## Description

These functions return the connectivity (global node numbers) of facet elements.

The first function (AbstractMeshGetFacetConnectivity) gets the connectivity of a facet element by specifying the facet element number, element type, and whether to use the master or slave cell's perspective.

The second function (GetFacetConnectivity) gets the connectivity of a facet by specifying a cell element and the local face number within that element.

## Arguments

- `obj`: The abstract mesh object.
- `facetElement` (first function): The local facet element number.
- `elementType` (first function): The element type of the facet.
- `isMaster` (first function): If true, returns connectivity from master cell's perspective; otherwise, from slave cell's perspective.
- `globalElement` (second function): The global (or local) element number.
- `iface` (second function): The local face number within the element.
- `islocal` (second function): If present and true, `globalElement` is treated as a local element number.

## Returns

- `ans`: An array containing the global node numbers that define the facet element.

## Example

```fortran
! Get facet connectivity from facet element
INTEGER(I4B), ALLOCATABLE :: facetNodes(:)
facetNodes = mesh%GetFacetConnectivity(10, 3, .TRUE.)

! Get facet connectivity from cell and local face
INTEGER(I4B), ALLOCATABLE :: faceNodes(:)
faceNodes = mesh%GetFacetConnectivity(5, 2)
```
