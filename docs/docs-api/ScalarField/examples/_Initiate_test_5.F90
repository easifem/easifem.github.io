! This program is a part of EASIFEM library
! Expandable And Scalable Infrastructure for Finite Element Methods
! htttps://www.easifem.com
! Vikas Sharma, Ph.D., vickysharma0812@gmail.com
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>
!

!> author: Vikas Sharma, Ph. D.
! date: 2024-05-24
! summary: We test ScalarField with heirarchical basis intrpolation

PROGRAM main
USE GlobalData
USE AbstractField_Class, ONLY: TypeField
USE AbstractMesh_Class
USE FEDomain_Class
USE ScalarField_Class
USE FEDOF_Class
USE HDF5File_Class
USE FPL, ONLY: FPL_INIT, FPL_FINALIZE, ParameterList_
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE ReallocateUtility, ONLY: Reallocate

IMPLICIT NONE

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof
TYPE(ScalarField_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: meshfilename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Heirarchical"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), ALLOCATABLE :: cellOrder(:, :), aintvec(:)
INTEGER(I4B) :: order

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_INIT()
CALL param%initiate()
CALL SetScalarFieldParam(param=param, &
                         fieldType=TypeField%normal, &
                         name="U", &
                         engine=engine)

CALL meshfile%initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%initiate(hdf5=meshfile, group="")

mesh => dom%GetMeshPointer(dim=nsd)

CALL Reallocate(cellOrder, 2, mesh%GetTotalCells())

aintvec = [14, 15, 17, 24, 18]

order = 1
cellOrder(1, 1:5) = aintvec
cellOrder(2, 1:5) = order

aintvec = [22, 23, 25, 21]
order = 2
cellOrder(1, 6:9) = aintvec
cellOrder(2, 6:9) = order

aintvec = [19, 20, 26, 16, 13]
order = 3
cellOrder(1, 10:14) = aintvec
cellOrder(2, 10:14) = order

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=cellOrder, &
                    mesh=mesh)

CALL obj%Initiate(param=param, fedof=fedof)

CALL obj%Display("obj = ")

CALL OK(.TRUE., "Initiate:")

NULLIFY (mesh)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL fedof%DEALLOCATE()
CALL meshfile%DEALLOCATE()

CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
