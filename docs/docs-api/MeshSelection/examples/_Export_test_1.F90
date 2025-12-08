!> author: Vikas Sharma, Ph. D.
! date: 2025-07-24
! summary:  This example shows how to USE `MeshSelection` WITH
! `meshSelectionByID` option, and export it to `HDF5File_` format.

PROGRAM main
USE MeshSelection_Class
USE HDF5File_Class
IMPLICIT NONE

TYPE(MeshSelection_) :: obj
TYPE(HDF5File_) :: hdf5file

! Initiates an instance of `MeshSelection_` WITH selection by mesh ID.
CALL obj%Initiate(isSelectionByMeshID=.TRUE.)

! Let us now add NEW entries.
CALL obj%Add(dim=0, meshID=[1, 2, 3, 4, 5, 6])
CALL obj%Add(dim=1, meshID=[2, 5, 6, 7])
CALL obj%Add(dim=2, meshID=[1, 3, 5, 6, 8])
CALL obj%Add(dim=3, meshID=[1, 8])

! Now that we are done setting the DATA in the instance, let us CALL `set` method.
CALL obj%Set()

! Now we will OPEN a `HDF5File_` so that we can WRITE DATA to it.
CALL hdf5file%Initiate(filename="./hdf5/MeshSelection.hdf5", mode="NEW")
CALL hdf5file%OPEN()

! After opening the `HDF5File_` we export the instance of `MeshSelection_` to it.
CALL obj%Export(hdf5=hdf5file, group='')

! Cleanup

CALL hdf5file%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
