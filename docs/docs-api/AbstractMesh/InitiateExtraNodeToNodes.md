# InitiateExtraNodetoNodes

The `InitiateExtraNodetoNodes` method builds an extended node-to-node connectivity mapping in an `AbstractMesh` object. Unlike the standard node-to-node connectivity, this extended mapping includes "second-degree" connections that are not directly connected through a shared element but are neighbors of neighbors.

This routine generate the node to nodes mapping

- This mapping is stored inside `obj%nodeData%extraGlobalNodeNum`
- For a local node number i, `obj%nodeData(i)%ExtraGlobalNodeNum` denotes the global node data surrounding the local node number used for edge-based stabilization. This list does not include self node.

- It needs information about `nodeToNodes`, `nodeToElements`, and `elementToElements`. Therefore,
- If `nodeToNodes` is not initiated, then this method initiates it.
- If `nodeToElements` is not initiated, then this method initiates it.
- If `elementToElements` is not initiated, then this method initiates it.

## Purpose

This method creates an enhanced connectivity graph that captures wider nodal neighborhoods, which is especially valuable for:

- Implementing jump-based stabilization techniques in finite element methods
- Supporting extended stencil operations in numerical schemes
- Enhancing solution smoothing algorithms
- Implementing advanced discontinuous Galerkin methods
- Improving shock-capturing schemes
- Creating patch-based reconstruction techniques
- Supporting multi-scale methods that require information beyond immediate neighbors

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_InitiateExtraNodetoNodes(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_InitiateExtraNodetoNodes
END INTERFACE
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object for which to create the extended node-to-node connectivity map

## Algorithm

1. Verify the method hasn't already been executed and that prerequisites are initialized
2. For each node in the mesh:
   - Get its immediate connected nodes (standard node-to-node connections)
   - Get all elements that contain this node
   - For each of these elements:
     - Get all elements that share a face with this element (element-to-element connectivity)
     - Filter out elements that are already connected to the current node
     - For each of these "second-degree" elements:
       - Get all nodes of this element
       - Filter out nodes that are already directly connected to the current node
       - Add these filtered nodes to the extra connectivity list
   - Remove any duplicate nodes from the extended connectivity list
   - Store the extended node list in the node data structure

## Implementation Details

- Requires three prerequisite connectivity maps:
  - Node-to-node connectivity
  - Node-to-element connectivity
  - Element-to-element connectivity
- Uses boolean masks to efficiently filter nodes and elements
- Employs the `APPEND` utility for combining node lists
- Uses `RemoveDuplicates` to ensure each extra node appears only once

## Data Structures Modified

- `obj%nodeData(iLocalNode)%ptr%extraGlobalNodes` - For each node, stores the list of "second-degree" connected global node numbers
- `obj%isExtraNodeToNodesInitiated` - Flag indicating the extended node-to-node mapping has been built

## Performance Considerations

- Time complexity is higher than standard connectivity maps due to the multi-level traversal required
- Memory usage can be significantly higher than standard node-to-node connectivity as it captures a wider neighborhood
- For complex meshes with many elements per node, this operation can be computationally intensive
- The method employs efficient filtering through boolean masks to minimize unnecessary operations

## Usage Example

```fortran
TYPE(Mesh_) :: mesh
! ... Initialize mesh ...

! Build prerequisite connectivity (will be automatically called if not already initialized)
CALL mesh%InitiateNodeToNodes()
CALL mesh%InitiateNodeToElements()
CALL mesh%InitiateElementToElements()

! Build extended node-to-node connectivity
CALL mesh%InitiateExtraNodeToNodes()

! Now extended node connectivity is available for advanced numerical schemes
```

## Dependencies

This method depends on:

- Standard node-to-node connectivity (`obj%InitiateNodeToNodes()`)
- Node-to-element connectivity (`obj%InitiateNodeToElements()`)
- Element-to-element connectivity (`obj%InitiateElementToElements()`)
- `NodeData_SetExtraGlobalNodes` for storing the extended connectivity

## Notes

- The method specifically seeks nodes that are not immediate neighbors but are connected through element-to-element relationships
- This extended connectivity is particularly valuable for numerical methods that require wider stencils or jump terms
- Unlike standard connectivity which is symmetric (if A connects to B, then B connects to A), the extra connectivity may not always be symmetric

