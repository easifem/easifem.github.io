```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE FEDomain_Class 

  IMPLICIT NONE

  TYPE(FEDomain_) :: obj
  TYPE(HDF5File_) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5" 

  CALL meshfile%Initiate(filename, "READ")
  CALL meshfile%Open()

  CALL obj%Initiate(meshfile, '')

  ! Let us now test `isNodePresent` method, 
  ! which returns true IF a given global node is present in the domain.

  CALL OK( obj%isNodePresent( 1 ), "isNodePresent : "  )
  CALL OK( (obj%isNodePresent( 10 )), "isNodePresent : "  )
  CALL OK( .NOT. (obj%isNodePresent( 0 )), "isNodePresent : "  )
  CALL OK( .NOT. (obj%isNodePresent( 1000 )), "isNodePresent : "  )

  CALL meshfile%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
