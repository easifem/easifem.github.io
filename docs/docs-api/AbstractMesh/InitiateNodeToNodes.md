# InitiateNodeToNodes

The `obj_InitiateNodetoNodes` method builds the node-to-node connectivity mapping in an `AbstractMesh` object. This mapping represents the topological relationship between nodes in the mesh, creating a graph structure where each node knows which other nodes it's connected to through mesh elements.

- In other words, it generates info of node-numbers in mesh surrounding a node number
- This mapping is stored inside `obj%nodeData%globalNodeNum`
- For a local node number i, obj%nodeData(i)%globalNodeNum denotes the global node data surrounding the local node number.
- This list does not include self node.
- The method needs node-to-elements data, therefore if this data is not initiated, then this method calls `InitiateNodeToElements()`.

## Purpose

This method establishes a critical data structure that identifies all adjacent nodes for each node in the mesh. The node-to-node connectivity map is essential for:

- Implementing finite element and finite volume methods
- Supporting mesh smoothing algorithms
- Applying boundary conditions along interfaces
- Facilitating graph-based operations on the mesh
- Implementing node-based solvers
- Supporting domain decomposition
- Implementing jump-based stabilization techniques

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateNodetoNodes(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateNodetoNodes
END INTERFACE
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object for which to create the node-to-node connectivity map

## Algorithm

1. If the mapping is already initialized (`obj%isNodeToNodesInitiated` is true), the method returns immediately
2. If node-to-element mapping isn't initialized, it calls `obj%InitiateNodeToElements()` first
3. Sets the initialization flag to true
4. For each node in the mesh:
   - Initializes a boolean array to track which nodes have been found
   - Gets all elements that contain this node
   - For each connected element:
     - Retrieves all nodes in this element
     - Adds each node to the current node's list of connections (except self)
     - Marks nodes as found to avoid duplicates
   - Finalizes the node's connection list

## Implementation Details

- Uses a chunk-based allocation strategy for efficient list building
- The `chunk_size` parameter (set to 64) controls memory allocation growth
- Uses a boolean array `found` to prevent duplicate entries
- Performance timing is available when `obj%showTime` is enabled
- Debug information is provided when compiled with debug flags

## Data Structures Modified

- `obj%nodeData(inode)%ptr%globalNodes` - For each node, stores the list of global node numbers connected to this node
- `obj%isNodeToNodesInitiated` - Flag indicating the node-to-node mapping has been built

## Performance Considerations

- Time complexity is O(n × e × m) where n is the number of nodes, e is the average number of elements per node, and m is the average number of nodes per element
- Memory usage scales with the total number of node-node connections in the mesh
- For densely connected meshes, this operation can be memory-intensive
- The chunk-based allocation strategy helps reduce memory reallocation overhead

## Usage Example

```fortran
TYPE(Mesh_) :: mesh
! ... Initialize mesh ...

! Build node-to-node connectivity
CALL mesh%InitiateNodeToNodes()

! Now we can easily find all nodes connected to a specific node
connectedNodes = mesh%GetNodeToNodes(globalNode=nodeNum, includeSelf=.FALSE.)
```

## Dependencies

This method depends on:

- Node-to-element connectivity (must be initialized first)
- `NodeData_ExpandGlobalNodes` for growing the node lists
- `NodeData_GetTotalGlobalElements` for querying element list sizes
- `NodeData_GetPointerToGlobalElements` for accessing element lists

## Notes

- The node-to-node mapping does not include self-connections (a node is not considered connected to itself)
- The connectivity map represents the topological connectivity through mesh elements, not geometric proximity
