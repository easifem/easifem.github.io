# Import

This method reads mesh data from an HDF5 file and initializes the AbstractMesh_
object. It serves as a wrapper around the `Initiate` method, providing the
same functionality with a more intuitive name for importing mesh data.

## Interface

```fortran
INTERFACE AbstractMeshImport
  MODULE SUBROUTINE IMPORT(obj, hdf5, group, dim, entities)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), OPTIONAL, INTENT(IN) :: group
    !! Group name
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
    !! dimension
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: entities(:)
    !! entityNum
  END SUBROUTINE IMPORT
END INTERFACE AbstractMeshImport
```

### Arguments

- `obj`: The AbstractMesh_ object to be initialized
- `hdf5`: HDF5File_ object containing mesh data
- `group` (optional): Location in the HDF5 file where mesh data is stored
- `dim` (optional): Dimension of the mesh to read
- `entities` (optional): Entity numbers to be included in the mesh

### Notes

- If `group` is provided, mesh data from that group is read
- If `dim` is provided, all entities of that dimension are read
- If both `dim` and `entities` are provided, the method constructs groups based on the dimension and entities to create the mesh
- After reading the data, the mesh is marked as initiated (`isInitiated = .TRUE.`)
- This method is equivalent to calling the `Initiate` method

The method can import mesh data in three different ways:

1. From a specific group in the HDF5 file
2. From entities of a specific dimension
3. From all entities of a specific dimension

- The method supports timing measurements if `obj%showTime` is enabled
- Data is read from the HDF5 file including:
  - Element connectivity
  - Node coordinates
  - Boundary information
  - Element types and topologies
  - Mesh dimensions and bounding box
- After import, local-to-global and global-to-local mappings are created for nodes and elements
- The imported mesh is marked as initialized (`isInitiated = .TRUE.`)
- For dimension-based imports, entities are read from specific paths like:
  - "/pointEntities_N" for points (dim=0)
  - "/curveEntities_N" for curves (dim=1)
  - "/surfaceEntities_N" for surfaces (dim=2)
  - "/volumeEntities_N" for volumes (dim=3)

### Algorithm

The method follows these steps:

1. Determines which import case to use based on the provided arguments
2. Calls the appropriate internal import routine:

- `MeshImportFromGroup` - when only a group is specified
- `MeshImportFromDim` - when dimension and entities are specified
- When only dimension is specified, it first gets all entities of that dimension
  and then calls `MeshImportFromDim`

3. After importing the mesh data, it initializes element-to-element connectivity

The internal import routines perform the following operations:

- Read scalar properties (dimensions, bounding box, etc.)
- Read vector data (element numbers, connectivity matrices)
- Build element data structures
- Build node data structures
- Import node coordinates

### Example Usage

```fortran
 ! Example 1: Import mesh from a specific group
 type(HDF5File_) :: h5file
 type(Mesh_) :: mesh
 
 call h5file%open("mesh.h5", "r")
 call mesh%Import(h5file, group="/mesh")
 call h5file%close()

 ! Example 2: Import mesh from specific dimension and entities
 call mesh%Import(h5file, group="/", dim=2, entities=[1,3,5])

 ! Example 3: Import all entities of dimension 3 (volumes)
 call mesh%Import(h5file, group="/", dim=3)
```
