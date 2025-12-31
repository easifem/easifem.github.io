# GetEdgeDOF

The `GetEdgeDOF` is a generic method in the `FEDOF_` class that retrieves degrees of freedom associated with edges. It has two specific implementations:

| Method      | Description                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| GetEdgeDOF1 | Gets edge degrees of freedom using the global edge number                        |
| GetEdgeDOF2 | Gets edge degrees of freedom using a global element number and local edge number |

## Interface 1

```fortran
MODULE SUBROUTINE GetEdgeDOF(obj, globalEdge, ans, tsize, islocal)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalEdge
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
END SUBROUTINE GetEdgeDOF
```

### Parameters

- `obj`: The FEDOF_ object
- `globalEdge`: Global edge number to retrieve DOFs for
- `ans`: Integer array to store the retrieved DOFs
- `tsize`: Output parameter containing the total size of data written in ans
- `islocal`: Optional logical flag - if true, globalEdge is treated as a local edge number

### Functionality

This method retrieves all degrees of freedom associated with a specific edge identified by its global edge number. It looks up the edge DOFs in the `edgeIA` array which contains the sparsity pattern for edges.

## Interface 2

```fortran
MODULE SUBROUTINE GetEdgeDOF2(obj, globalElement, localEdgeNumber, &
                              ans, tsize, islocal)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local cell element number
  INTEGER(I4B), INTENT(IN) :: localEdgeNumber
  !! local edge number in global element
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  !! edge degree of freedom
  INTEGER(I4B), INTENT(OUT) :: tsize
  !! tota size of data written in ans
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  !! if true then globalElement is local element
END SUBROUTINE GetEdgeDOF2
```

### Parameters

- `obj`: The FEDOF_ object
- `globalElement`: Global element number containing the edge
- `localEdgeNumber`: Local edge number within the element
- `ans`: Integer array to store the retrieved DOFs
- `tsize`: Output parameter containing the total size of data written in ans
- `islocal`: Optional logical flag - if true, globalElement is treated as a local element number

### Functionality

This method first converts the element and local edge information to a global edge number, then calls `GetEdgeDOF` to retrieve the DOFs. It uses the mesh information to determine the global edge number from the element and local edge number.

## Usage

This method is important for finite element implementations where you need to:

- Assemble matrices based on edge contributions
- Apply boundary conditions on specific edges
- Compute edge-based integrals or other operations

The generic interface allows users to retrieve edge DOFs either by directly specifying the global edge number or by specifying an element and the local edge number within that element, providing flexibility in how edge data is accessed.

## Example
