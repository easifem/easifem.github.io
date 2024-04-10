``` fortran
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

  ! Let us now test `isElementPresent` method, 
  ! which returns true IF a given global node is present in the domain.

  CALL OK( obj%isElementPresent( 35 ), "isElementPresent : "  )
  CALL OK( (obj%isElementPresent( 84 )), "isElementPresent : "  )
  CALL OK( .NOT. (obj%isElementPresent( 7 )), "isElementPresent : "  )
  CALL OK( .NOT. (obj%isElementPresent( 21 )), "isElementPresent : "  )

  CALL OK( obj%isElementPresent( 35, 2 ), "isElementPresent : "  )
  CALL OK( (obj%isElementPresent( 84, 2 )), "isElementPresent : "  )

  CALL OK( .NOT. (obj%isElementPresent( 35, 1 )), "isElementPresent : "  )
  CALL OK( .NOT. (obj%isElementPresent( 84, 1 )), "isElementPresent : "  )
  CALL OK( .NOT. (obj%isElementPresent( 7, 2 )), "isElementPresent : "  )
  CALL OK( .NOT. (obj%isElementPresent( 21, 2 )), "isElementPresent : "  )

  CALL meshfile%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
