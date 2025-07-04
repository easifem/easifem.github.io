In this example we test the [Set](./Set.md) method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( STVectorFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  INTEGER( I4B ), PARAMETER :: spaceCompo=2_I4B
  INTEGER( I4B ), PARAMETER :: timeCompo=2_I4B
  REAL( DFP ), allocatable :: value(:,:,:)
  CHARACTER(*), PARAMETER :: engine = "LIS_OMP"
  INTEGER( I4B ) :: tnodes

  ! import domain
  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%open()
  CALL dom%initiate( hdf5=meshfile, group="" )
  CALL meshfile%Deallocate()


  ! set parameters for VectorField_
  CALL FPL_INIT()
  CALL param%initiate()

  CALL SetSTVectorFieldParam( &
    & param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U", &
    & engine=engine, &
    & spaceCompo=spaceCompo, &
    & timeCompo=timeCompo)
  CALL obj%initiate( param, dom )

  tnodes = dom%getTotalNodes()
  call reallocate(value, spaceCompo, timeCompo, 3)
  call random_number(value)

  call obj%set(value=value, istart=1, iend=3, stride=1)
  CALL obj%Display("obj = ")
  call display(value, "value = ")

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
# VAR :U
 DOF-1 ,   DOF-2 ,   DOF-3 ,   DOF-4 ,   
-------,  -------,  -------,  -------,   
0.06771,  0.75442,  0.55908,  0.83616,   
0.01938,  0.87443,  0.81103,  0.40416,   
0.28662,  0.20294,  0.19123,  0.15446,   

# spaceCompo = 2
# timeCompo = 2

value =( :, :, 1 ) = 
---------------------
 0.067713  0.559079  
 0.754420  0.836164  

value =( :, :, 2 ) = 
---------------------
 0.019376  0.811034  
 0.874427  0.404164  

value =( :, :, 3 ) = 
---------------------
 0.286623  0.191233  
 0.202942  0.154461
```
