# InitiateFaceConnectivity

The `InitiateFaceConnectivity` method initializes the face connectivity data for elements in an `AbstractMesh_` object.
Face connectivity is a critical part of mesh representation that defines how faces are shared between elements.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_InitiateFaceConnectivity(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! mesh data
  END SUBROUTINE obj_InitiateFaceConnectivity
END INTERFACE
```

## Description

This method initializes the face connectivity information for all elements in the mesh. It assigns global face numbers to each face of every element and determines the orientation of each face. The implementation is dimension-dependent:

- For 2D meshes: Establishes connectivity between line segments (edges as faces)
- For 3D meshes: Establishes connectivity between triangular or quadrilateral faces

The method:

1. Checks if face connectivity is already initialized
2. Creates a binary tree data structure for efficient face lookup
3. For each active element in the mesh:
   - Gets the face topology information from the reference element
   - Allocates memory for global face numbers and face orientation data
   - For each face of the element:
     - Extracts the global node numbers of the face
     - Sorts the nodes to create a unique identifier for the face
     - Assigns a global face number
     - Determines the orientation of the face
4. Sets the `isFaceConnectivityInitiated` flag to `TRUE`

## Implementation Details

### 2D Case

In 2D, faces are represented by edges (2 nodes). The implementation:

- Extracts the 2 nodes of each edge
- Sorts the nodes to create a canonical representation
- Determines if the edge is reversed compared to the canonical order
- Assigns a global face number

### 3D Case

In 3D, faces can be triangles or quadrilaterals. The implementation:

- Determines the face type (triangle or quadrilateral)
- Uses specialized methods to obtain the canonical (sorted) representation
- Computes a 3-component orientation vector
- Assigns a global face number

## Usage

This method is typically called internally when face connectivity information is needed for mesh operations. It can be used like:

```fortran
TYPE(YourMeshType_) :: mesh
! Initialize mesh
CALL mesh%InitiateFaceConnectivity()
```

## Notes

- This method sets the `isFaceConnectivityInitiated` flag to prevent duplicate initialization
- For 3D meshes, face orientation is represented by a 3-component vector
- For 2D meshes, face orientation is a single value (1 or -1)
- The total number of faces in the mesh (`obj%tFaces`) is updated during processing

Would you like more information about any specific aspect of this method?
