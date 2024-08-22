This example shows how to get the element to element connectivity data in the mesh.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( :, : )
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5" 

  ! Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

  CALL meshfile%Initiate(filename, "READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

Now we get the full information about the element connected to the given global element numbers.
In this case we set `onlyElements=.FALSE.`,
or you can ignore this argument as it is optional, with default value of `.FALSE.`.

```fortran
nptrs = obj%GetElementToElements( globalElement=23, onlyElements=.FALSE. )
CALL Display( nptrs, "Element connected to iel=23")
```

We get the following output.

```bash title="results"
Element connected to iel=23
---------------------------
        22   1   2
        26   2   3
        25   3   1
```

- The first column is the global element number of neighbour.
- The second column is the local facet number of the parent (iel=23)
- The third column is the local facet number of neighbour

If you only want the global element numbers of the neighbours, then you can set onlyElements=.TRUE.

```fortran
nptrs = obj%GetElementToElements( globalElement=23, onlyElements=.TRUE. )
CALL Display( nptrs, "Element connected to iel=23")
```

Now we get the full information about the element connected to the given global element numbers.

```bash title="results"
Element connected to iel=23
---------------------------
            22
            26
            25
```

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
