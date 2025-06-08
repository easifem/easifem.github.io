# GetConnectivity

The `GetConnectivity` method returns the global degrees of freedom (DOFs) associated with a specified element in the mesh. This connectivity information is essential for assembling local element matrices and vectors into the global system during finite element analysis.

## Interface

```fortran
INTERFACE
 MODULE FUNCTION GetConnectivity(obj, opt, globalElement, islocal) RESULT(ans)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: opt
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetConnectivity
END INTERFACE
```

## Parameters

- `obj` - The `FEDOF_` object containing degree of freedom information
- `opt` - A string specifying which type of connectivity to retrieve:
  - `"Vertex"` - Only vertex DOFs
  - `"Edge"` - Only edge DOFs
  - `"Face"` - Only face DOFs
  - `"Cell"` - Only cell DOFs
  - `"All"` - All DOFs (vertices, edges, faces, and cells)
- `globalElement` - The global or local element number, depending on the value of `islocal`
- `islocal` - Optional logical flag. If present and `.TRUE.`, `globalElement` is interpreted as a local element number; otherwise, it's a global element number

## Return Value

- `ans` - An allocatable array containing the global DOF numbers associated with the specified element, filtered according to the `opt` parameter

## Implementation Details

The function:

1. Determines the total number of DOFs for the element using `obj%GetTotalDOF`
2. Allocates the return array with the appropriate size
3. Calls the `obj%GetConnectivity_` subroutine to populate the array with the actual connectivity data

The key steps in the implementation are:

```fortran
tdof = obj%GetTotalDOF(globalElement=globalElement, isLocal=isLocal)
ALLOCATE (ans(tdof))
CALL obj%GetConnectivity_(ans=ans, tsize=tdof, opt=opt,
globalElement = globalElement, islocal = islocal)
```

The underlying `GetConnectivity_` subroutine performs the actual work of gathering the connectivity data by:

1. Getting the element's topological entities (vertices, edges, faces, and cells)
2. Retrieving the DOFs for each entity using the appropriate methods (`GetVertexDOF`, `GetEdgeDOF`, etc.)
3. Combining these DOFs into a single connectivity array

## Notes

- For Lagrangian elements (`obj%isLagrange` is `.TRUE.`), only vertex DOFs are considered, regardless of the `opt` parameter
- For hierarchical elements, the connectivity includes all specified entity types (vertices, edges, faces, cells)
- The connectivity array contains global DOF numbers that map the local element DOFs to the global system
- The order of DOFs in the returned array follows a hierarchical pattern: vertices first, then edges, faces, and finally cell DOFs
- This method is crucial for element assembly operations in finite element analysis

## Example


import EXAMPLE68 from "./examples/_GetConnectivity_test_1.md";

<EXAMPLE68 />


