---
sidebar_position: 7
---

# Initiate

Initiate an instance of Mesh.

# Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_Initiate(obj, hdf5, group)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh object
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    !! Mesh file in hdf5 file format
    CHARACTER(*), INTENT(IN) :: group
    !! location in HDF5 file
  END SUBROUTINE obj_Initiate
END INTERFACE
```
