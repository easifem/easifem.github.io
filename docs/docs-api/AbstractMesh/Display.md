# Display

Display the mesh on the screen.

## Interface

```fortran
INTERFACE AbstractMeshDisplay
  MODULE SUBROUTINE obj_Display(obj, msg, unitno)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! mesh object
    CHARACTER(*), INTENT(IN) :: msg
    !! message on screen
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
    !! unit number of ouput file
  END SUBROUTINE obj_Display
END INTERFACE AbstractMeshDisplay
```

