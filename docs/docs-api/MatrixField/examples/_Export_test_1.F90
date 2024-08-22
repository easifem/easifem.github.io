PROGRAM main
USE easifemBase
USE easifemClasses

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: spaceCompo = 2, timeCompo = 1
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal

CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh

TYPE(MatrixField_) :: obj

TYPE(HDF5File_) :: meshfile, hdf5file

TYPE(ParameterList_) :: param

INTEGER(I4B) :: ierr

CALL FPL_INIT(); CALL param%Initiate()

CALL meshfile%Initiate(filename=filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, "")
CALL meshfile%DEALLOCATE()

mesh => dom%GetMeshPointer()

CALL SetMatrixFieldParam(param=param, name="K", matrixProp="UNSYM", &
                         spaceCompo=spaceCompo, timeCompo=timeCompo, &
                         fieldType=fieldType, engine=engine)

CALL obj%Initiate(param=param, dom=dom)

CALL hdf5file%Initiate(filename="./matrixField.h5", mode="NEW")
CALL hdf5file%OPEN()
CALL obj%Export(hdf5=hdf5file, group='')

CALL hdf5file%DEALLOCATE()
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()

END PROGRAM main
