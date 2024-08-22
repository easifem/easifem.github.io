! In this example we initiate an instance of Scalar field by importing data from HDF5 file.

PROGRAM main
USE FEDomain_Class
USE ScalarField_Class
USE HDF5File_Class
USE FPL, ONLY: FPL_INIT, FPL_FINALIZE, ParameterList_
USE GlobalData
USE AbstractMesh_Class

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh => NULL()
TYPE(ScalarField_) :: obj
TYPE(HDF5File_) :: meshfile, resultFile
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr

CALL FPL_INIT()
CALL param%initiate()
CALL resultFile%initiate(filename="./result.h5", mode="READ")
CALL resultFile%OPEN()

!> start creating domain
CALL meshfile%initiate(filename="./mesh.h5", mode="READ")
CALL meshfile%OPEN()
CALL dom%initiate(hdf5=meshfile, group="")
!> end creating domain

!> start import
CALL obj%IMPORT(hdf5=resultFile, group="/scalarField1", dom=dom)
!> end start import

CALL obj%Display("obj = ")

CALL obj%DEALLOCATE(); CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
CALL resultFile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
