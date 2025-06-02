# InitiateDynamicDataStructure

This method is used to initiate the dynamic data structure of the mesh object. It is typically called during the initialization phase of the mesh object to set up any necessary data structures that will be used for dynamic operations on the mesh.

This method initiated following data structures:

- ElementDataList
- ElementDataBinaryTree
- NodeDataList
- NodeDataBinaryTree

## Interface

```fortran
SUBROUTINE InitiateDynamicDataStructure(obj)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
END SUBROUTINE InitiateDynamicDataStructure
```
