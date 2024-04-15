<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"
INTEGER(I4B), PARAMETER :: domain_tNodes = 45, dim1_tNodes = 27

! initiates the [[HDF5File_]] and OPEN it
CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()

! Initiates an instance of [[Domain_]]
CALL obj%Initiate(meshfile, '')

! Let us now demonstrate the usage of `GetTotalNodes` which
! returns the total number of nodes in the [[Domain_]],
! or part of domain (i.e. [[Mesh_]])
! Let us Get total number of nodes in the domain.
CALL OK(obj%GetTotalNodes() .EQ. domain_tNodes, "GetTotalNodes: ")

! Let us not Get total number of nodes in the left mesh [[Mesh_]]
CALL OK(obj%GetTotalNodes(dim=2) .EQ. domain_tNodes, &
    & "obj%GetTotalNodes(dim=2): ")

! It is an error to get nodes like given below.
! CALL OK( domain_tNodes .eq. obj%GetTotalNodes(dim=2), &
!    & "obj%GetTotalNodes(dim=2): " )
! We can also Get total number of nodes using the operator called `.tNodes.`.
! To Get total number of nodes in the domain use the following.

CALL OK(domain_tNodes .EQ. (.tNodes.obj), "(.tNodes. obj): ")
! To Get total number of nodes in given dimension `dim` and entity Number,
! pack them in a vector of length two, that is `[dim, entityNum]`,
! and pass it to `.tNodes.` as shown below.

CALL OK(domain_tNodes .EQ. (obj.tNodes.2), "obj .tNodes. 2: ")
CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
```
