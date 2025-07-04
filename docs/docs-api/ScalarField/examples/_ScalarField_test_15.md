```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarField_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  REAL( DFP ) :: avar
  CHARACTER( LEN = * ), PARAMETER :: engine = "NATIVE_SERIAL"
  TYPE(FEVariable_) :: fevar
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

```fortran title="setting all values using vector"
CALL reallocate( realVec, dom%getTotalNodes() )
CALL RANDOM_NUMBER( realVec )
CALL obj%set(realVec)
CALL obj%display( "scalar field = ")
```

```txt title="results"
#scalar field =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :NATIVE_SERIAL
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 0
# local_n: 0
# is: 0
# ie: 0
# lis_ptr: 0
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
--------,   
0.623683,   
0.370695,   
0.967630,   
0.835710,   
0.821063,   
0.613570,
```

```fortran title="Get multiple entries"
CALL obj%get( value=fevar, globalNode=arange(1,5,1) )
CALL Display(fevar, "fevar = ")
```

```txt title="results"
fevar = 
# RANK :: 0 (SCALAR)
# VarType: SPACE
# VALUE: 
---------
0.623683 
0.370695 
0.967630 
0.835710 
0.821063
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
