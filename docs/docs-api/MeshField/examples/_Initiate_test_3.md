<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```fortran
PROGRAM main
USE HDF5File_Class
USE FEMesh_Class
USE AbstractField_Class
USE ScalarMeshField_Class
USE FPL
USE GlobalData

IMPLICIT NONE

TYPE(HDF5File_) :: meshfile
TYPE(FEMesh_) :: amesh
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: varType = Space
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal

CALL meshfile%Initiate(fileName=filename, MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, dim=nsd)

CALL amesh%DisplayMeshInfo("mesh info:")

CALL FPL_INIT(); CALL param%initiate()

CALL SetScalarMeshFieldParam(param=param, name='aScalar', &
                             varType=varType, fieldType=fieldType, &
                             engine='NATIVE_SERIAL', defineOn=Nodal, nns=6)

CALL obj%Initiate(param=param, mesh=amesh)

CALL obj%Display('obj: ')

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
```

```bash title="results"
Object INITIATED: TRUE
name: aScalar
prefix: ScalarMeshField
fieldType: NORMAL
engine: NATIVE_SERIAL
tSize: 14
defineOn: Nodal
rank: Scalar
varType: Space
val ALLOCATED: TRUE
Size of val:84
indxVal ALLOCATED: TRUE
Size of indxVal:15
mesh ASSOCIATED: TRUE
shape:
---------------------------------
                6
```

- We have saved data in a one dimensional array `val` and `indxVal`. The size of `indxVal` is `telements+1`, i.e., 15.
- The data for element `iel` will be stored in `val(a:b)`, where `a=indxVal(iel)` and `b=indxVal(iel+1)-1`.
- The number of data in each element will be 6. This is because, we have set `varType=Constant`, and `defineOn=Nodal`, and there specify `nns=6`. It means that inside an element the data changes with space.
- There are 14 elements in the mesh, therefore, the total size of `val` will be `14*6=84`
