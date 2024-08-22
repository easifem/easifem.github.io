
PROGRAM main

USE GlobalData
USE Test_Method
USE ApproxUtility
USE FEDomainConnectivity_Class
USE FEDomain_Class
USE HDF5File_Class

IMPLICIT NONE

CHARACTER(*), PARAMETER :: domain1_filename = &
                           "../../Mesh/examples/meshdata/small_tri6_mesh.h5"
CHARACTER(*), PARAMETER :: domain2_filename = &
                           "../../Mesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: test_name = "InitiateNodeToNodeData test 3"
INTEGER(I4B), PARAMETER :: nsd = 2

TYPE(FEDomainConnectivity_) :: obj

TYPE(FEDomain_) :: domain1, domain2

TYPE(HDF5File_) :: domain1_meshfile, domain2_meshfile

INTEGER(I4B), POINTER :: nodeToNode(:)

REAL(DFP) :: x1(3), x2(3)

INTEGER(I4B) :: ii, tnodes, jj, tsize
LOGICAL(LGT) :: isok

CALL domain1_meshfile%Initiate(fileName=domain1_filename, MODE="READ")
CALL domain1_meshfile%OPEN()
CALL domain1%Initiate(domain1_meshfile, "")
CALL domain1_meshfile%DEALLOCATE()

CALL domain2_meshfile%Initiate(fileName=domain2_filename, MODE="READ")
CALL domain2_meshfile%OPEN()
CALL domain2%Initiate(domain2_meshfile, "")
CALL domain2_meshfile%DEALLOCATE()

! node to node mapping
! local node number of domain1 are mapped to global node number of domain2
CALL obj%InitiateNodeToNodeData(domain1=domain1, domain2=domain2)

nodeToNode => obj%GetNodeToNodePointer()

tnodes = domain1%GetTotalNodes()

DO ii = 1, tnodes

  CALL domain1%GetNodeCoord(nodecoord=x1, globalNode=ii, islocal=.TRUE., &
                            tsize=tsize)

  jj = nodeToNode(ii)

  IF (jj .EQ. 0) CYCLE

  CALL domain2%GetNodeCoord(nodecoord=x2, globalNode=jj, islocal=.FALSE., &
                            tsize=tsize)

  isok = ALL(x1(1:nsd) .APPROXEQ.x2(1:nsd))
  IF (.NOT. isok) THEN
    EXIT
  END IF
END DO

CALL OK(isok, test_name)

CALL domain1%DEALLOCATE()
CALL domain2%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
