!> author: Vikas Sharma, Ph. D.
! date: 2025-06-02
! summary: Test for InitiateKdtree method of FEDomain class

PROGRAM main
USE FEDomain_Class
USE HDF5File_Class
USE GlobalData

IMPLICIT NONE

TYPE(FEDomain_) :: dom
TYPE(HDF5File_) :: meshfile

CHARACTER(*), PARAMETER :: filename = &
                           "./meshdata/small_tri3_mesh.h5"

CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')
CALL dom%InitiateKdtree()
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
