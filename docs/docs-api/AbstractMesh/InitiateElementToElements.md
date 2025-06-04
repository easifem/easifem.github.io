# InitiateElementToElements

The `InitiateElementToElements` method establishes the element-to-element connectivity mapping in an `AbstractMesh` object. This connectivity represents how elements in the mesh are topologically connected to each other through shared faces, edges, or nodes, depending on the mesh dimension.

This routine creates the element surrounding a given element data

- Before calling this routine, make sure the `refelem` in mesh is allocated.
- By using `refelem`, this routine forms the FacetElements.
- This routine needs `nodeToElements` information, therefore, if `nodeToElements` is not initiated then it calls `initiateNodeToelements` method.

- This method forms following data:
- `obj%elementData(ielem)%globalElements`
- It also identifies those elements which are boundary element of mesh, and set `obj%elementData(ielem)%elementType=BOUNDARY_ELEMENT` for those elements.
- Note that at this point these boundary-elements can be interface element
  between two meshs, or domain-boundary element.

## Purpose

This method builds a crucial data structure that identifies all adjacent elements for each element in the mesh. The element-to-element connectivity map is essential for:

- Implementing discontinuous Galerkin methods
- Calculating numerical fluxes across element interfaces
- Identifying interior and boundary faces
- Supporting domain decomposition techniques
- Facilitating mesh refinement and coarsening operations
- Implementing finite volume methods
- Enforcing continuity conditions across element boundaries

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateElementToElements(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh data
  END SUBROUTINE InitiateElementToElements
END INTERFACE
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object for which to create the element-to-element connectivity map

## Algorithm

1. If the mapping is already initialized (`obj%isElementToElementsInitiated` is true), the method returns immediately
2. Sets the initialization flag to true
3. Based on the dimension of the mesh (`obj%xidim`), it calls the appropriate specialized initialization routine:
   - For 1D meshes: `InitiateElementToElements1D`
   - For 2D and 3D meshes: `InitiateElementToElements3D`
4. For 2D and 3D meshes, it first ensures face connectivity is initialized by calling `obj%InitiateFaceConnectivity()` if necessary
5. After the element-to-element connectivity is built, it calls `MarkInternalNodes` to identify and mark boundary nodes in the mesh

## Implementation Details

- Uses dimension-specific algorithms to handle the different connectivity patterns in 1D, 2D, and 3D meshes
- For 2D and 3D meshes, relies on face connectivity information to establish element connections
- Updates the `obj%isElementToElementsInitiated` flag to prevent redundant initialization
- Provides debugging information when compiled with debug flags
- Can track and report timing information if `obj%showTime` is enabled

## Data Structures Modified

- `obj%elementData(ii)%ptr%globalElements` - For each element, stores information about connected elements
- `obj%elementData(ii)%ptr%localFaces` - For 2D/3D elements, stores local face numbers that connect to other elements
- `obj%elementData(ii)%ptr%neighborFaces` - For 2D/3D elements, stores corresponding face numbers in the neighboring elements
- `obj%isElementToElementsInitiated` - Flag indicating the element-to-element mapping has been built
- Node type information is updated to mark boundary nodes

## MarkInternalNodes Helper Function

This internal subroutine identifies and marks boundary nodes in the mesh:

1. Iterates through all elements in the mesh
2. For each boundary element, examines its boundary faces
3. For each boundary face, retrieves the nodes on that face
4. Marks those nodes as domain boundary nodes by setting their node type

## Performance Considerations

- Time complexity depends on the mesh dimension and size
- For 2D and 3D meshes, this operation can be computationally intensive due to face matching
- Memory usage scales with the number of element-element connections
- The method employs specialized algorithms to efficiently handle different mesh dimensions

## Usage Example

```fortran
TYPE(Mesh_) :: mesh
! ... Initialize mesh ...

! Build element-to-element connectivity
CALL mesh%InitiateElementToElements()

! Now we can easily find adjacent elements
elemInfo = mesh%GetElementToElements(globalElement=elemNum)
```

## Dependencies

This method depends on:

- Face connectivity for 2D and 3D meshes
- Dimension-specific helper routines from `AbstractMeshUtility` module:
  - `InitiateElementToElements1D`
  - `InitiateElementToElements2D`
  - `InitiateElementToElements3D`
- `NodeData_SetNodeType` for marking boundary nodes

## Notes

- The connectivity established depends on the mesh dimension:
  - 1D: Elements connect at shared nodes
  - 2D: Elements connect at shared edges
  - 3D: Elements connect at shared faces
- This method is a prerequisite for many advanced mesh operations and numerical schemes
- It's automatically called by other methods that require element-to-element connectivity information

