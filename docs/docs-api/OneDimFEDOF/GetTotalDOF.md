# GetTotalDOF

These methods provide a comprehensive interface for querying degree of freedom information at different levels of granularity, from global system-wide counts to element-specific and entity-specific counts.

| Method           | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| **GetTotalDOF1** | Returns the total number of degrees of freedom in the entire domain |
| **GetTotalDOF2** | Returns the total number of DOFs for a specific element             |
| **GetTotalDOF3** | Returns filtered DOFs for a specific element based on entity type   |

## Interface 1

```fortran
MODULE FUNCTION obj_GetTotalDOF1(obj) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION obj_GetTotalDOF1
```

### Parameters

- `obj`: The FEDOF_ object
- `ans`: Integer result containing the total number of degrees of freedom

### Functionality

This method returns the total number of degrees of freedom in the entire FEDOF object. It simply returns the `tdof` field of the object, which represents the global count of all degrees of freedom across the domain.

## Interface 2

```fortran
MODULE FUNCTION obj_GetTotalDOF2(obj, globalElement, islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  INTEGER(I4B) :: ans
END FUNCTION obj_GetTotalDOF2
```

### Parameters

- `obj`: The FEDOF_ object
- `globalElement`: Global element number to retrieve the total DOFs for
- `islocal`: Optional logical flag - if true, globalElement is treated as a local element number
- `ans`: Integer result containing the total number of degrees of freedom for the specified element

### Functionality

This method returns the total number of degrees of freedom associated with a specific element. It:

1. Gets the element data pointer for the specified element
2. Retrieves the total entities (points, edges, faces, cells) for the element
3. Counts vertex node DOFs
4. Adds the DOFs from all edges of the element
5. Adds the DOFs from all faces of the element
6. Adds the DOFs from the cell itself
7. Returns the total sum as the result

## Interface 3

```fortran
MODULE FUNCTION obj_GetTotalDOF3(obj, globalElement, opt, islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local element number
  CHARACTER(*), INTENT(IN) :: opt
  !! opt for Vertex, Edge, Face, Cell, and All
  !! opt = Vertex
  !! opt = Edge
  !! opt = Face
  !! opt = Cell
  !! opt = All
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if islocal true then globalElement is local element number
  INTEGER(I4B) :: ans
  !! Total number of dof in the FEDOF with opt filter
END FUNCTION obj_GetTotalDOF3
```

### Parameters

- `obj`: The FEDOF_ object
- `globalElement`: Global element number to retrieve the total DOFs for
- `opt`: Filter option specifying which type of DOFs to count
  - "Vertex" or "V" - Only count vertex DOFs
  - "Edge" or "E" - Only count edge DOFs
  - "Face" or "F" - Only count face DOFs
  - "Cell" or "C" - Only count cell DOFs
  - Any other value - Count all DOFs (same as GetTotalDOF2)
- `islocal`: Optional logical flag - if true, globalElement is treated as a local element number
- `ans`: Integer result containing the filtered total of degrees of freedom

### Functionality

This method is similar to GetTotalDOF2 but allows filtering the DOF count by entity type. It:

1. Gets the element data pointer for the specified element
2. Checks the first character of the opt parameter to determine which entity types to include
3. Calls the appropriate internal subroutine(s) to count DOFs for the selected entity types:
   - onlyVertex: Counts vertex DOFs
   - onlyEdge: Counts edge DOFs
   - onlyFace: Counts face DOFs
   - onlyCell: Counts cell DOFs
4. Returns the total sum as the result

## Usage

The generic `GetTotalDOF` method is fundamental in finite element analysis for:

- Allocating memory for element matrices and vectors
- Determining the size of local element contributions
- Computing the total size of the global system
- Estimating computational requirements
- Filtering DOFs by entity type for specialized operations

This flexible interface allows for both global analysis (total DOFs in the system), local element-wise operations (DOFs per element), and entity-specific queries (e.g., only edge DOFs), providing comprehensive flexibility in how degree of freedom information is accessed throughout the finite element code.

## Example 1

import EXAMPLE120 from "./examples/_GetTotalDOF_test_1.md";

<EXAMPLE120 />

## Example 2

import EXAMPLE121 from "./examples/_GetTotalDOF_test_2.md";

<EXAMPLE121 />
