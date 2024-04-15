
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class
IMPLICIT NONE
TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"
! Initiates the [[HDF5File_]] and OPEN it.
CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
! Initiates an instance of [[Domain_]].
CALL obj%Initiate(meshfile, '')
BLOCK
  INTEGER(I4B), PARAMETER :: globalnode(2) = [3,28]
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
LOGICAL( LGT ) :: isok
  val = SORT(obj%GetNodeToElements(globalnode))
  exact = [36, 37, 38, 43, 44, 45, 91, 92]
  isok = ALL(val .EQ. exact)
    CALL OK(isok, "GetNodeToElements: ")
  if(.not. isok) then
  CALL Display(val, "got: ")
  CALL Display(exact, "want: ")
  end if
END BLOCK
CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
