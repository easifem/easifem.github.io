In this example we show how to set entries in MatrixField.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Domain_) :: dom
  TYPE( MatrixFieldLis_ ) :: obj
  TYPE( HDF5File_) :: meshfile
  TYPE( ParameterList_ ) :: param
  TYPE( RealMatrix_ ) :: realmat
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  CHARACTER(LEN=*), PARAMETER :: filename="./test_4.h5"
  CHARACTER(LEN=*), PARAMETER :: engine="LIS_OMP"
  CHARACTER( LEN = * ), PARAMETER :: name="K"
  CHARACTER( LEN = * ), PARAMETER :: matrixProp="UNSYM"
  INTEGER( I4B ), PARAMETER :: spaceCompo = 1
  INTEGER( I4B ), PARAMETER :: timeCompo = 1

  CALL FPL_INIT(); CALL param%Initiate()
  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" ); CALL meshfile%Close()
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()

  CALL SetMatrixFieldParam( &
    & param=param, &
    & name="K", &
    & matrixProp="UNSYM", &
    & engine=engine, &
    & spaceCompo=spaceCompo, &
    & timeCompo=timeCompo, &
    & fieldType=FIELD_TYPE_NORMAL )
  CALL obj%Initiate( param, dom )

  CALL obj%Set( &
    & iNodeNum=[1,5,10], &
    & jNodeNum=[1,5,10], &
    & ivar=1, &
    & jvar=1, &
    & ispaceCompo=1, &
    & itimeCompo=[1], &
    & jspaceCompo=1, &
    & jtimeCompo=[1], &
    & value=1.0_DFP )
  realmat = obj%mat

  CALL Display(MdEncode(realmat%val), "obj%mat = ")

  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()

END PROGRAM main
```

results:

obj%mat =

|   |   |   |   |   |   |   |   |   |   |   |   |
| - | - | - | - | - | - | - | - | - | - | - | - |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
