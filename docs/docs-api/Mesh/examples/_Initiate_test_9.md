<!-- markdownlint-disable MD041 MD013 MD033 -->

This example shows how to initiate an instance of `Mesh_`
by reading data from mesh file, which is in `HDF5File_` format.

This example is same as the previous example (example 2),
but in this example we construct `surfaceEntities_2`.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile

  CALL meshfile%Initiate( fileName="./meshdata/small_mesh_two_region.h5", MODE="READ" )
  CALL meshfile%Open()

  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_2" )
  CALL obj%Display("")

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
