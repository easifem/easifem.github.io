# Deallocate

Deallocate the data stored in the mesh object.

:::info 
This method is overloaded in Mesh.
:::


```fortran
INTERFACE
  MODULE SUBROUTINE obj_Deallocate(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_Deallocate
END INTERFACE
```
