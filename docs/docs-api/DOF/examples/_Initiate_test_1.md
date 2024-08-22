This example show how to create an instance of DOF and use it to create a vector of reals.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
REAL( DFP ), ALLOCATABLE :: val( : )

CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
 timeCompo=[1], storageFMT = FMT_DOF )

! Initiate a real vector using `DOF_` object.

CALL Initiate( Val=val, obj=obj )

CALL Display( obj, "CALL Initiate( Val=val, obj=obj ) : " )

CALL Deallocate( obj )
END PROGRAM main
```
