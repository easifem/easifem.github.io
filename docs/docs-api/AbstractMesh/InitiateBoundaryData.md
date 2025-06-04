# InitiateBoundaryData

The `InitiateBoundaryData` method identifies and marks boundary elements and nodes within an `AbstractMesh` object.
It establishes the necessary data structures to efficiently identify mesh boundaries and the elements adjacent to these boundaries.

:::note
This method construct the boundary-element data.
:::

- It marks elements of mesh as `DOMAIN_BOUNDARY_ELEMENT` and `INTERNAL_ELEMENT`.
- In this case boundary elements are those which contains the boundary node.
- Boundary-node information is available by reading the mesh file, see mesh import method.
- It also forms `obj%elementData(ii)%boundaryData`.

:::note
This subroutine treats all boundary element as `DOMAIN_BOUNDARY_ELEMENT` because it does not have information of surrouding mesh. However, this is not correct. This is because, not all mesh boundary elements are domain boundary elements. For example, some mesh-boundary element may be interface element between two mesh regions. This information can be corrected by calling [SetFacetElementType](../FEDomain/SetFacetElementType.md) method from [FEDomain_](../FEDomain/FEDomain_.md).
:::

:::info
If we call [InitiateBoundaryData](../FEDomain/InitiateBoundaryData.md), then we do not have to call [SetFacetElementType](../FEDomain/SetFacetElementType.md) because the former routine makes an internal call to the latter.
:::

This method needs following information:

- `ElementToElements`
- `refelem` to construct the FacetElements

## Purpose

This method analyzes the mesh to identify its boundaries and creates data structures that support:

- Application of boundary conditions
- Identification of domain interfaces
- Implementation of flux calculations at boundaries
- Visualization of boundary elements
- Mesh refinement at boundaries
- Domain decomposition algorithms
- Implementation of interface coupling techniques

```fortran
INTERFACE
  MODULE SUBROUTINE obj_InitiateBoundaryData(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_InitiateBoundaryData
END INTERFACE
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object for which to initialize boundary data

## Algorithm

1. If boundary data is already initialized (`obj%isBoundaryDataInitiated` is true), the method returns immediately
2. Ensures element-to-element connectivity has been established by calling `obj%InitiateElementToElements()` if necessary
3. Sets the initialization flag to true
4. For each element in the mesh:
   - Determines if the element is on the boundary by checking its connectivity
   - For boundary elements, identifies which faces lie on the boundary
   - Marks these faces as boundary faces
   - Updates the element's boundary data with the local face IDs
   - Updates node type information for nodes on boundary faces
5. Updates element type information to distinguish between:
   - Interior elements (fully inside the domain)
   - Boundary elements (containing at least one boundary face)
   - Domain boundary elements (on the external boundary)

## Implementation Details

- Uses element-to-element connectivity to identify boundary faces (faces with no neighboring element)
- Stores boundary face information in the element data structure
- Updates node type information to identify boundary nodes
- Distinguishes between internal boundaries (between subdomains) and external boundaries
- Provides timing information when `obj%showTime` is enabled
- Includes debugging information when compiled with debug flags

## Data Structures Modified

- `obj%elementData(ii)%ptr%boundaryData` - For boundary elements, stores the local face IDs that lie on boundaries
- `obj%elementData(ii)%ptr%elementType` - Updates element type to reflect boundary status
- `obj%nodeData(ii)%ptr%nodeType` - Updates node type to identify boundary nodes
- `obj%isBoundaryDataInitiated` - Flag indicating boundary data has been initialized

## Element and Node Type Categorization

Elements can be categorized as:

- `INTERNAL_ELEMENT` - All faces connect to other elements
- `BOUNDARY_ELEMENT` - At least one face lies on a boundary
- `DOMAIN_BOUNDARY_ELEMENT` - Element on the external domain boundary

Nodes can be categorized as:

- `INTERNAL_NODE` - Not on any boundary
- `BOUNDARY_NODE` - On a boundary
- `DOMAIN_BOUNDARY_NODE` - On the external domain boundary

## Performance Considerations

- Time complexity is O(n × f) where n is the number of elements and f is the average number of faces per element
- Memory usage scales with the number of boundary elements and faces
- Requires element-to-element connectivity information
- For large meshes, this operation can be computationally intensive

## Usage Example

```fortran
TYPE(FEMesh_) :: mesh
! ... Initialize mesh ...

! Build boundary data
CALL mesh%InitiateBoundaryData()

! Check if an element is on the boundary
IF (mesh%isBoundaryElement(elemNum)) THEN
  ! Get boundary faces for this element
  boundaryFaces = mesh%GetBoundaryElementData(elemNum)
END IF
```

## Dependencies

This method depends on:

- Element-to-element connectivity (`obj%InitiateElementToElements()`)
- Reference element information for identifying faces
- `ElemData_ExpandBoundaryData` for storing boundary face information
- `NodeData_SetNodeType` for marking boundary nodes

## Notes

- This method is a prerequisite for many boundary-related operations
- The boundary identification depends on the correct establishment of element-to-element connectivity
- For multi-domain simulations, boundary elements may be further classified as domain boundaries or internal boundaries
- This method is automatically called by other methods that require boundary information
