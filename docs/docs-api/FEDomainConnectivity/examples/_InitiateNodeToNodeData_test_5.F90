! In this example we will generate node to node-connectivity information
! between part of pressure-domain and part of pressure-Domain.

PROGRAM main

USE GlobalData
USE Test_Method
USE ApproxUtility
USE FEDomainConnectivity_Class
USE FEMesh_Class
USE HDF5File_Class

IMPLICIT NONE

CHARACTER(*), PARAMETER :: mesh1_filename = &
                           "../../Mesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: mesh2_filename = &
                           "../../Mesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: test_name = "InitiateNodeToNodeData test 5"
INTEGER(I4B), PARAMETER :: nsd = 2

TYPE(FEDomainConnectivity_) :: obj

TYPE(FEMesh_) :: mesh1, mesh2

TYPE(HDF5File_) :: mesh1_meshfile, mesh2_meshfile

INTEGER(I4B), POINTER :: nodeToNode(:)

REAL(DFP) :: x1(3), x2(3)

INTEGER(I4B) :: ii, tnodes, jj, tsize
LOGICAL(LGT) :: isok

CALL mesh1_meshfile%Initiate(fileName=mesh1_filename, MODE="READ")
CALL mesh1_meshfile%OPEN()
CALL mesh1%Initiate(hdf5=mesh1_meshfile, dim=nsd)
CALL mesh1_meshfile%DEALLOCATE()

CALL mesh2_meshfile%Initiate(fileName=mesh2_filename, MODE="READ")
CALL mesh2_meshfile%OPEN()
CALL mesh2%Initiate(hdf5=mesh2_meshfile, dim=nsd)
CALL mesh2_meshfile%DEALLOCATE()

! node to node mapping
! local node number of mesh1 are mapped to global node number of mesh2
CALL obj%InitiateNodeToNodeData(mesh1=mesh1, mesh2=mesh2)

nodeToNode => obj%GetNodeToNodePointer()

tnodes = mesh1%GetTotalNodes()

DO ii = 1, tnodes

  CALL mesh1%GetNodeCoord(nodecoord=x1, globalNode=ii, islocal=.TRUE., &
                          tsize=tsize)

  jj = nodeToNode(ii)

  IF (jj .EQ. 0) CYCLE

  CALL mesh2%GetNodeCoord(nodecoord=x2, globalNode=jj, islocal=.FALSE., &
                          tsize=tsize)

  isok = ALL(x1(1:nsd) .APPROXEQ.x2(1:nsd))
  IF (.NOT. isok) THEN
    EXIT
  END IF
END DO

CALL OK(isok, test_name)

CALL mesh1%DEALLOCATE()
CALL mesh2%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
