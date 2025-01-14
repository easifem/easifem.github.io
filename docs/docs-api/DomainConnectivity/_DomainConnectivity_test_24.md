In this example we will see how to use `InitiateFacetToCellData`.

We use this routine to compute the facet to cell data between a cell mesh and a facet mesh. The facet mesh is the boundary of the mesh.

Importing modules and variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( DomainConnectivity_ ) :: obj
  TYPE( Domain_ ) :: cellDomain
  TYPE( HDF5File_ ) :: cellDomainFile
  CHARACTER( LEN=* ), PARAMETER :: cellDomainFileName="./mesh_tri3b.h5"
  CLASS( Mesh_ ), POINTER :: facetMesh
  CLASS( ReferenceElement_ ), POINTER :: refelem
  INTEGER( I4B ) :: ii, iel

!! Open the mesh file for cellDomain

CALL cellDomainFile%Initiate( FileName=cellDomainFileName, MODE="READ" )
CALL cellDomainFile%Open()

!! Initiate the cellDomain

CALL cellDomain%Initiate( cellDomainFile, "")

!! Make a pointer to cellMesh and facet mesh

facetMesh => cellDomain%getMeshPointer( dim=1, entityNum=7 )

!! Initiate FacetTOCellData.

CALL obj%InitiateFacetToCellData( &
  facetMesh=facetMesh, &
  cellDomain=cellDomain)
!CALL obj%DisplayFacetToCellData( msg="facetToCell=" )

CALL OK(obj%MasterCellNumber(localElement=1) .eq. 46, "masterCellNumber ")
CALL OK(ALL(obj%MasterCellNumber(localElement=[1,3]) .eq. [46,27]), &
  "masterCellNumber ")

CALL OK(ALL(obj%MasterDimTag(localElement=1) .eq. [2,1]), "masterDimTag ")
CALL OK( &
  ALL(obj%MasterDimTag(localElement=[1,3]) .eq. &
  RESHAPE( [2,1,2,1], [2,2] )), &
  "masterDimTag ")

CALL OK(ALL(obj%SlaveDimTag(localElement=1) .eq. [2,2]), "slaveDimTag ")
CALL OK( &
  ALL(obj%SlaveDimTag(localElement=[1,3]) .eq. &
  RESHAPE( [2,2,2,2], [2,2] )), &
  "slaveDimTag ")

CALL OK(obj%SlaveCellNumber(localElement=1) .eq. 59, "slaveCellNumber ")
CALL OK(ALL(obj%SlaveCellNumber(localElement=[1,3]) .eq. [59, 55]), &
  "slaveCellNumber ")

CALL OK(ALL(obj%SlaveDimTag(localElement=1) .eq. [2,2]), "slaveDimTag ")
CALL OK( &
 ALL(obj%SlaveDimTag(localElement=[1,3]) .eq. &
 RESHAPE( [2,2,2,2], [2,2] )), &
 "slaveDimTag ")

CALL OK(obj%MasterFacetLocalID(localElement=1) .eq. 1, "masterFacetLocalID ")
CALL OK( &
  ALL(obj%MasterFacetLocalID(localElement=[1,3]) .eq. &
  [1,1]), &
  "masterFacetLocalID ")

CALL OK(obj%SlaveFacetLocalID(localElement=1) .eq. 1, "slaveFacetLocalID ")
CALL OK( &
  ALL(obj%SlaveFacetLocalID(localElement=[1,3]) .eq. &
  [1,1]), &
  "slaveFacetLocalID ")

CALL OK(obj%GlobalFacetID(localElement=1) .eq. 23, "globalFacetID ")
CALL OK( &
  ALL(obj%GlobalFacetID(localElement=[1,3]) .eq. &
  [23, 25]), &
  "globalFacetID ")

  CALL cellDomainFile%Deallocate()
  CALL cellDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
