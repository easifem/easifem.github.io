# SetSparsity

This method sets the sparsity in the `CSRMatrix`.

<!-- markdownlint-disable MD041 MD013 MD033 -->

## Interface 1

```fortran
INTERFACE
  MODULE SUBROUTINE obj_SetSparsity1(obj, mat, localNodeNumber, lbound, &
    & ubound)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! [[Mesh_]] class
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
    !! [[CSRMatrix_]] object
    INTEGER(I4B), INTENT(IN) :: lbound
    INTEGER(I4B), INTENT(IN) :: ubound
    INTEGER(I4B), INTENT(IN) :: localNodeNumber(lbound:ubound)
    !! Global to local node number map
  END SUBROUTINE obj_SetSparsity1
END INTERFACE
```

- `localNodeNumber` is used to convert the global node numbers of mesh to local node number in `mat`
- `lbound` and `ubound` are bounds of `localNodeNumber`

The algorithm is as follows:

1. Start loop of node numbers in mesh
2. Get the global node number of mesh
3. Get the global node numbers around this node
4. Use `localNodeNumber` to get the local node number of global node number (from step 3)
5. Call `SetSparsity` on `mat` from `base` lib.

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE obj_SetSparsity2(obj, mat)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! Mesh_ class
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
    !! CSRMatrix object
  END SUBROUTINE obj_SetSparsity2
END INTERFACE
```

## Inteface 3

```fortran
INTERFACE
  MODULE SUBROUTINE obj_SetSparsity3(obj, colMesh, nodeToNode, mat, &
    & ivar, jvar)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! Abstract mesh class
    CLASS(AbstractMesh_), INTENT(INOUT) :: colMesh
    !! Abstract mesh class
    INTEGER(I4B), INTENT(IN) :: nodeToNode(:)
    !! Node to node connectivity between obj and colMesh
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
    !! [[CSRMatrix_]] object
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
  END SUBROUTINE obj_SetSparsity3
END INTERFACE
```

## Interface 4

```fortran
INTERFACE
  MODULE SUBROUTINE obj_SetSparsity4(obj, colMesh, nodeToNode, mat, &
    rowGlobalToLocalNodeNum, rowLBOUND, rowUBOUND,  &
    colGlobalToLocalNodeNum, colLBOUND, colUBOUND, ivar, jvar)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! [[Mesh_]] class
    CLASS(AbstractMesh_), INTENT(INOUT) :: colMesh
    !! [[Mesh_]] class
    INTEGER(I4B), INTENT(IN) :: nodeToNode(:)
    !! node to node connectivity between obj and colMesh
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
    !! [[CSRMatrix_]] object
    INTEGER(I4B), INTENT(IN) :: rowLBOUND
    INTEGER(I4B), INTENT(IN) :: rowUBOUND
    INTEGER(I4B), INTENT(IN) :: rowGlobalToLocalNodeNum( &
      & rowLBOUND:rowUBOUND)
    !! Global to local node number map
    INTEGER(I4B), INTENT(IN) :: colLBOUND
    INTEGER(I4B), INTENT(IN) :: colUBOUND
    INTEGER(I4B), INTENT(IN) :: colGlobalToLocalNodeNum( &
      & colLBOUND:colUBOUND)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
  END SUBROUTINE obj_SetSparsity4
END INTERFACE
```
