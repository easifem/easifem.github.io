# GetVertexDOF

The `GetVertexDOF` method retrieves the degree of freedom (DOF) number associated with a specified vertex (node) in the mesh. In finite element analysis, each vertex in the mesh is typically assigned one or more degrees of freedom, which represent the unknown values to be solved for.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetVertexDOF(obj, globalNode, ans, tsize, islocal)
    CLASS(FEDOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(INOUT) :: ans(:)
    INTEGER(I4B), INTENT(OUT) :: tsize
    LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  END SUBROUTINE GetVertexDOF
END INTERFACE
```

## Parameters

- `obj` - The `FEDOF_` object containing degree of freedom information
- `globalNode` - The global or local node number, depending on the value of `islocal`
- `ans` - An array that will store the degree of freedom number(s) associated with the specified node
- `tsize` - The number of degrees of freedom written to the `ans` array
- `islocal` - Optional logical flag. If present and `.TRUE.`, `globalNode` is interpreted as a local node number; otherwise, it's a global node number

## Implementation Details

The implementation is straightforward for vertex DOFs:

```fortran
tsize = 1
ans(1) = obj%mesh%GetLocalNodeNumber(globalNode, islocal=islocal)
```

For vertex DOFs in most finite element formulations:

1. The method sets `tsize` to 1, indicating that one degree of freedom is associated with each vertex
2. It obtains the local node number using the mesh's `GetLocalNodeNumber` method, which converts global node numbers to local ones if necessary
3. The local node number itself is used as the degree of freedom number

## Notes

- This method assumes a simple one-to-one mapping between mesh vertices and degrees of freedom, which is typical for scalar problems (e.g., heat conduction, potential flow)
- For vector problems (e.g., elasticity) or higher-order problems, a more complex mapping might be needed, potentially requiring multiple DOFs per vertex
- The implementation reflects that in typical finite element numbering schemes, vertex DOFs are numbered first, followed by edge, face, and cell DOFs
- In the current implementation, the DOF number for a vertex is identical to its local node number in the mesh

## Example Usage

This method is typically used when assembling the global system of equations or when mapping local element matrices to the global system:

```fortran
INTEGER(I4B) :: nodeDOF(1), tsize, nodeNum

! Get the DOF number for node 5
nodeNum = 5
CALL fedof%GetVertexDOF(globalNode=nodeNum, ans=nodeDOF, tsize=tsize)

! nodeDOF(1) now contains the DOF number for node 5
! tsize will be 1
```

This method is often called internally by other methods in the `FEDOF_` class, particularly when constructing element connectivity arrays that map local element degrees of freedom to global system degrees of freedom.

## Example 1

import EXAMPLE69 from "./examples/_GetVertexDOF_test_1.md";

<EXAMPLE69 />

## Example 2

import EXAMPLE76 from "./examples/_GetVertexDOF_test_2.md";

<EXAMPLE76 />
