# InitiateNodeToElements

The `InitiateNodeToElements` method establishes the node-to-element connectivity mapping in an `AbstractMesh` object. This mapping is essential for numerous mesh operations as it allows quick identification of all elements connected to any given node.

## Purpose

This method builds a data structure that maps each node to all elements that contain it. This mapping is fundamental for:

- Element assembly processes
- Nodal averaging operations
- Implementing boundary conditions
- Calculating nodal normals and areas
- Supporting mesh manipulation algorithms
- Enabling efficient neighborhood searches

## Interface

```fortran
MODULE SUBROUTINE obj_InitiateNodeToElements(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
END SUBROUTINE obj_InitiateNodeToElements
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object for which to create the node-to-element mapping

## Algorithm

1. If the mapping is already initialized (`obj%isNodeToElementsInitiated` is true), the method returns immediately
2. Sets the initialization flag to true
3. Initializes a counter array `nodewise_size` to track how many elements are connected to each node
4. For each element in the mesh:
   - Gets the global element number
   - For each node in the element:
     - Gets the global node number
     - Converts to local node number
     - Expands the node's element list to include the current element
5. Finalizes each node's element list by trimming unused space

## Implementation Details

- Uses a chunk-based allocation strategy to efficiently build the lists
- The `chunk_size` parameter (set to 32) controls how much the lists grow during allocation
- Performance timing is available when `obj%showTime` is enabled
- Debug information is provided when compiled with debug flags

## Data Structures Modified

- `obj%nodeData(localNodeNum)%ptr%globalElements` - For each node, stores the list of global element numbers that include this node
- `obj%isNodeToElementsInitiated` - Flag indicating the node-to-element mapping has been built

## Performance Considerations

- Time complexity is O(n × m) where n is the number of elements and m is the average number of nodes per element
- Memory requirement scales with the total number of node-element connections
- For large meshes, this operation can be memory-intensive
- The chunk-based allocation strategy helps reduce memory reallocation overhead

## Usage Example

```fortran
TYPE(Mesh_) :: mesh
! ... Initialize mesh ...

! Build node-to-element connectivity
CALL mesh%InitiateNodeToElements()

! Now we can easily find all elements connected to a node
elements = mesh%GetNodeToElements(globalNode=nodeNum)
```

## Dependencies

This method depends on:
- `NodeData_ExpandGlobalElements` for growing the element lists
- `NodeData_GetTotalGlobalElements` for querying list sizes
- `NodeData_GetPointerToGlobalElements` for accessing the element lists

- This subroutine generates elements surrounding a node mapping, in other words it generates node to element.
- Element numbers returned by this routine are global element number.
- This mapping is stored inside `obj%nodeData` array
- For a local node number `ii`, `obj%nodeData(ii)%globalElements(:)` contains the global element numbers.

:::note
Always use method called `getNodeToElements()` to access this information.
This method requires global Node number
:::

:::caution
Always use the mapping between global node number and local node number to
avoid segmentation fault
:::

