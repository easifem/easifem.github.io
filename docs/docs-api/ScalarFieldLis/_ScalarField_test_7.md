In this example we test [Set](./Set.md) method.

Setting multiple values.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"
```

```fortran title="Open file for import"
CALL FPL_INIT()
CALL param%initiate()
CALL resultFile%initiate( filename="./result.h5", mode="READ" )
CALL resultFile%open()
```

```fortran title="read domain"
!> start creating domain
CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
CALL meshfile%open()
CALL dom%initiate( hdf5=meshfile, group="" )
!> end creating domain
```

```fortran title="initiate scalar field"
CALL SetScalarFieldParam( param=param, &
  & fieldType=FIELD_TYPE_NORMAL, &
  & name="U", &
  & engine=engine)
CALL obj%initiate( param, dom )
```

```fortran title="Setting multiple values"
realVec = [1.0, 2.0, 3.0]
CALL obj%set(globalNode=[1,2,5], value=realVec )
CALL obj%display( "scalar field = ")
```

```txt title="results"
#scalar field =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 102
# local_n: 102
# is: 1
# ie: 103
# lis_ptr: 94289762668384
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# tSize : 102
# # DOF data :
# Total Physical Variables :1
# Name : U
# Space Components : 1
# Time Components : 1
# Total Nodes : 102
# Storage Format : Nodes
# Value Map : 
--------------
       1      
     103      
# VAR :U
 DOF-1 ,   
-------,   
1.00000,   
2.00000,   
0.00000,   
0.00000,   
3.00000,
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
