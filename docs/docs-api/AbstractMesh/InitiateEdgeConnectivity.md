# InitiateEdgeConnectivity

The `InitiateEdgeConnectivity` method initializes edge connectivity information in an `AbstractMesh` object. This method identifies all unique edges in the mesh, assigns them global edge numbers, and establishes the mapping between local element edges and these global edges.

## Purpose

This method creates a critical data structure that identifies and numbers all edges in the mesh uniquely. Edge connectivity is essential for:

- Supporting higher-order finite element methods
- Implementing edge-based numerical schemes
- Constructing hierarchical mesh refinement
- Computing edge-based quantities (jumps, averages)
- Supporting p-refinement techniques
- Facilitating Nédélec (edge) finite elements
- Handling mesh adaptation algorithms

## Method Signature

```fortran
INTERFACE
  MODULE SUBROUTINE obj_InitiateEdgeConnectivity(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_InitiateEdgeConnectivity
END INTERFACE
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object for which to create the edge connectivity data

## Algorithm

1. If edge connectivity is already initialized (`obj%isEdgeConnectivityInitiated` is true), the method returns immediately
2. Verifies the element data is properly allocated
3. Creates a binary tree to efficiently identify unique edges
4. For each active element in the mesh:
   - Retrieves the reference element's edge connectivity pattern
   - Allocates global edge and edge orientation arrays in the element data structure
   - For each edge in the element:
     - Identifies the two nodes defining the edge
     - Creates a sorted version of the edge (for consistent identification)
     - Attempts to insert the edge into the binary tree
     - If the edge is new, assigns it a new global edge ID
     - If the edge already exists, retrieves its existing global ID
     - Records edge orientation based on node ordering
5. Updates the total number of edges in the mesh (`obj%tEdges`)
6. Deallocates the temporary binary tree

## Implementation Details

- Uses a binary tree data structure (`EdgeDataBinaryTree_`) to efficiently identify unique edges
- Edge orientation is stored as +1 or -1 to indicate whether the local edge direction matches the global edge direction
- A sorted version of each edge (nodes in ascending order) is used for consistent edge identification
- Global edge IDs are sequential starting from 1
- The method skips inactive elements

## Data Structures Modified

- `obj%elementData(iel)%ptr%globalEdges` - For each element, stores the global edge numbers
- `obj%elementData(iel)%ptr%edgeOrient` - For each element, stores the orientation of each edge
- `obj%tEdges` - Updates the total number of unique edges in the mesh
- `obj%isEdgeConnectivityInitiated` - Flag indicating edge connectivity has been initialized

## Edge Orientation

Edge orientation is stored as:

- `+1` if the local edge direction (from first to second node) matches the global edge direction
- `-1` if the local edge direction is opposite to the global edge direction

This orientation is crucial for ensuring consistent integration and assembly along edges.

## Performance Considerations

- Time complexity is O(n × e × log(E)) where n is the number of elements, e is the average number of edges per element, and E is the total number of unique edges
- Memory usage scales with the total number of edges
- The binary tree structure optimizes the identification of unique edges
- For large meshes with many edges, this operation can be computationally intensive

## Usage Example

```fortran
TYPE(Mesh_) :: mesh
! ... Initialize mesh ...

! Build edge connectivity
CALL mesh%InitiateEdgeConnectivity()

! Now we can access global edge numbers and orientations
! For example, to get global edge numbers for an element:
globalEdges = mesh%elementData(elemNum)%ptr%globalEdges
```

## Dependencies

This method depends on:

- `ReferenceElement_Method` for retrieving geometric parameters
- `EdgeData_Class` for edge data structure
- `EdgeDataBinaryTree_Class` for efficiently identifying unique edges
- `SortUtility` for consistent edge ordering

## Notes

- Edge connectivity is a prerequisite for many advanced finite element methods
- Edge orientation information is essential for maintaining consistency in numerical integration
- This method creates a unique global numbering for all edges in the mesh
- The binary tree approach ensures efficient handling of large meshes
