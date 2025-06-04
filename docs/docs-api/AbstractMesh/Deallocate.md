# Deallocate

Deallocate data stored in the mesh object.

## Interface

```fortran
INTERFACE AbstractMeshDeallocate
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE AbstractMeshDeallocate
```
