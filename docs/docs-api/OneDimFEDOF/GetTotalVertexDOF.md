# GetTotalVertexDOF

The `GetTotalVertexDOF` method in the `FEDOF_Class` returns the total number of vertex degrees of freedom (DOFs) in a finite element discretization. In the context of EASIFEM (Expandable And Scalable Infrastructure for Finite Element Methods), vertex DOFs represent the degrees of freedom associated with the vertices/nodes of the mesh.

## Interface

```fortran
MODULE FUNCTION obj_GetTotalVertexDOF(obj) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION obj_GetTotalVertexDOF
```

## Arguments

| Argument | Intent | Description                   |
| -------- | ------ | ----------------------------- |
| `obj`    | `IN`   | An instance of `FEDOF_` class |

## Returns

| Type           | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| `INTEGER(I4B)` | The total number of vertex DOFs, which is equal to the total number of nodes in the mesh |

## Example Usage

```fortran
PROGRAM demo
USE GlobalData
USE FEDOF_Class
USE AbstractMesh_Class

TYPE(FEDOF_) :: dof
CLASS(AbstractMesh_), POINTER :: mesh
INTEGER(I4B) :: totalVertexDOF

! Initialize mesh and dof objects
! ...

! Get total vertex DOFs
totalVertexDOF = dof%GetTotalVertexDOF()

PRINT *, "Total vertex DOFs: ", totalVertexDOF
END PROGRAM
```

## Implementation Details

The implementation of `GetTotalVertexDOF` is straightforward. It returns the value of the `tNodes` member variable of the `FEDOF_` object, which represents the total number of nodes in the mesh:

```fortran
MODULE PROCEDURE obj_GetTotalVertexDOF
ans = obj%tNodes
END PROCEDURE obj_GetTotalVertexDOF
```

This method is particularly useful when you need to know the number of nodal degrees of freedom in the mesh, for example, when allocating arrays or initializing data structures that depend on this count.

## Notes

- In many finite element applications, each vertex (node) has at least one degree of freedom.
- The method returns the total number of vertex DOFs regardless of the continuity or conformity of the basis functions used.
- For H1-conforming elements, the vertex DOFs are typically scalar values at each node.
- For vector problems (like elasticity), each vertex may have multiple DOFs (e.g., displacement in x, y, and z directions).

## See Also

- `GetTotalDOF`: Returns the total number of DOFs (vertex, edge, face, and cell) in the mesh
- `GetVertexDOF`: Gets the specific DOF IDs associated with a given vertex
- `GetConnectivity`: Gets the DOF connectivity for an element

