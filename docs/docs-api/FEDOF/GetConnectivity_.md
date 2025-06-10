# GetConnectivity_

## Interface

```fortran
MODULE SUBROUTINE obj_GetConnectivity_(obj, ans, tsize, opt, globalElement, islocal)
  CLASS(FEDOF_), INTENT(INOUT) :: obj
  !! FEDOF object
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  !! connectivity of element
  INTEGER(I4B), INTENT(OUT) :: tsize
  !! total size of data written in con
  CHARACTER(*), INTENT(IN) :: opt
  !! opt = Vertex
  !! opt = Edge
  !! opt = Face
  !! opt = Cell
  !! opt = All
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! Global element number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if islocal true then globalElement is local element number
END SUBROUTINE obj_GetConnectivity_
```

## Description

The `GetConnectivity_` method retrieves the connectivity (degrees of freedom) of a specified element and writes it into a provided array. This method allows for filtering the types of entities (vertices, edges, faces, cells) to include in the connectivity.

### Parameters

- `obj` - Input/Output, `CLASS(FEDOF_)`, FEDOF object instance
- `ans` - Output, `INTEGER(I4B)(:)`, pre-allocated array to store the connectivity information
- `tsize` - Output, `INTEGER(I4B)`, total size of data written to the `ans` array
- `opt` - Input, `CHARACTER(*)`, option specifying which entities to include:
  - `"Vertex"` - Include only vertex DOFs
  - `"Edge"` - Include only edge DOFs
  - `"Face"` - Include only face DOFs
  - `"Cell"` - Include only cell DOFs
  - `"All"` - Include all DOFs (default)
- `globalElement` - Input, `INTEGER(I4B)`, global or local element number
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element number

### Implementation Details

The implementation follows these steps:

1. Converts the global element number to a local element number if needed
2. Gets the total entities (vertices, edges, faces, cells) for the element
3. Retrieves the connectivity from the mesh for the specified element
4. Processes each entity type (vertices, edges, faces, cells) and adds their DOFs to the `ans` array
5. Updates `tsize` with the total number of DOFs added

```fortran
localElement = obj%mesh%GetLocalElemNumber(globalElement=globalElement, islocal=islocal)
ent = obj%mesh%GetTotalEntities(globalElement=localElement, islocal=yes)
CALL obj%mesh%GetConnectivity_(globalElement=localElement, islocal=yes, opt=opt, tsize=jj, ans=temp)

! Process vertices, edges, faces, and cells...
! For each entity, call the appropriate GetXXXDOF method and add to ans array

tsize = jj - 1
```

## Usage Example

```fortran
! Example to get connectivity for an element
INTEGER(I4B) :: conn(100), totalSize
TYPE(FEDOF_) :: myDOF

! Get all DOFs for element #5
CALL myDOF%GetConnectivity_(ans=conn, tsize=totalSize, opt="All", globalElement=5)

! Get only vertex DOFs for element #8
CALL myDOF%GetConnectivity_(ans=conn, tsize=totalSize, opt="Vertex", globalElement=8)

! Get only edge DOFs for element #3, using local numbering
CALL myDOF%GetConnectivity_(ans=conn, tsize=totalSize, opt="Edge", globalElement=3, islocal=.TRUE.)
```

## Important Notes

1. The `ans` array must be pre-allocated with sufficient size to hold all the requested DOFs
2. The `tsize` return value indicates how many values were actually written to `ans`
3. This method is often used internally by the functional variant `GetConnectivity`

## Related Methods

- `GetConnectivity` - Function version that allocates and returns the connectivity array
- `GetVertexDOF`, `GetEdgeDOF`, `GetFaceDOF`, `GetCellDOF` - Methods for retrieving specific entity DOFs
- `GetTotalDOF` - Used to determine the required size for connectivity arrays

The `GetConnectivity_` method provides a lower-level interface for retrieving connectivity information, offering more control over memory allocation compared to the functional `GetConnectivity` method.
