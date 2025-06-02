# ExportToVTK

Exports an AbstractMesh_ object to a VTK file format, which can be visualized in applications like ParaView or VisIt.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE ExportToVTK(obj, vtk, nodeCoord, filename, &
                                opentag, content, closetag)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    TYPE(VTKFile_), INTENT(INOUT) :: vtk
    REAL(DFP), OPTIONAL, INTENT(IN) :: nodeCoord(:, :)
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: opentag
    !! Default is true
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: closetag
    !! Default is true
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: content
    !! Default is true
  END SUBROUTINE ExportToVTK
END INTERFACE
```

### Arguments

| Argument    | Intent       | Type                 | Description                                     |
| ----------- | ------------ | -------------------- | ----------------------------------------------- |
| `obj`       | IN           | CLASS(AbstractMesh_) | The AbstractMesh_ object to be exported         |
| `vtk`       | INOUT        | TYPE(VTKFile_)       | VTK file handler for writing the mesh data      |
| `nodeCoord` | OPTIONAL, IN | REAL(DFP) (:,:)      | Node coordinates array with shape [3, nPoints]  |
| `filename`  | OPTIONAL, IN | CHARACTER(*)         | Output filename when creating a new VTK file    |
| `opentag`   | OPTIONAL, IN | LOGICAL(LGT)         | Whether to open VTK piece tags (default: TRUE)  |
| `closetag`  | OPTIONAL, IN | LOGICAL(LGT)         | Whether to close VTK piece tags (default: TRUE) |
| `content`   | OPTIONAL, IN | LOGICAL(LGT)         | Whether to write mesh cell data (default: TRUE) |

### Description

This subroutine exports the mesh to a VTK file in the UnstructuredGrid format. It performs the following operations:

1. If the VTK file is not already initialized, it creates a new one using the provided filename
2. Writes the piece information if `opentag` is true
3. Writes the node coordinates (points):
   - Uses provided `nodeCoord` if present
   - Otherwise extracts coordinates from the mesh
4. If `content` is true, writes cell connectivity data including:
   - Connectivity information
   - Offsets for each cell
   - Cell types in VTK format
5. Closes the piece and VTK file if `closetag` is true

### Implementation Details

- Uses binary appended VTK format for efficient file size
- Converts mesh element types to VTK-compatible element types
- Handles local-to-global node number mapping
- Only writes data for active elements in the mesh
- Properly handles different element topologies

### Usage Example

```fortran
TYPE(FEMesh_) :: mesh
TYPE(VTKFile_) :: vtk
CHARACTER(*), PARAMETER :: filename = "mesh.vtk"

! Read mesh from HDF5 file
CALL mesh%IMPORT(hdf5file, "/meshGroup")

! Export to VTK
CALL mesh%ExportToVTK(vtk=vtk, filename=filename)
```

### Notes

- If the `vtk` object is already initialized, it will use the existing file
- If `nodeCoord` is not provided, the method will extract coordinates from the mesh
- The VTK file format is compatible with visualization tools like ParaView and VisIt
- Elements are only exported if they are active (isElementActive returns true)
