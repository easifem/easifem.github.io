# Import

This routine reads the mesh from the meshfile which is an HDF5 file.

```fortran
INTERFACE
  MODULE SUBROUTINE obj_Import(obj, hdf5, group, dim, entities)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), OPTIONAL, INTENT(IN) :: group
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: entities(:)
  END SUBROUTINE obj_Import
END INTERFACE
```
