<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class
USE FEDomainConnectivity_Class

IMPLICIT NONE

TYPE(FEDomainConnectivity_) :: obj
TYPE(FEDomain_) :: pressureDomain
TYPE(FEDomain_) :: velocityDomain

TYPE(HDF5File_) :: pressureMeshFile
TYPE(HDF5File_) :: velocityMeshFile

INTEGER(I4B), POINTER :: nodeToNode(:)
REAL(DFP) :: x1(3), x2(3)
INTEGER(I4B) :: ii, a, b, nsd
LOGICAL(LGT) :: isok

CHARACTER(*), PARAMETER :: pressure_filename = &
                           "../../Mesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: velocity_filename = &
                           "../../Mesh/examples/meshdata/small_tri6_mesh.h5"

CALL velocityMeshFile%Initiate(velocity_filename, MODE="READ")
CALL velocityMeshFile%OPEN()

CALL velocityDomain%Initiate(velocityMeshFile, "")
CALL velocityMeshFile%DEALLOCATE()

CALL pressureMeshFile%Initiate(pressure_filename, MODE="READ")
CALL pressureMeshFile%OPEN()

CALL pressureDomain%Initiate(pressureMeshFile, "")
CALL pressureMeshFile%DEALLOCATE()

CALL obj%InitiateNodeToNodeData(domain1=velocityDomain, &
  & domain2=pressureDomain)

nodeToNode => obj%GetNodeToNodePointer()

CALL velocityDomain%GetParam(minNptrs=a, maxNptrs=b)

nsd = velocityDomain%GetNSD()

DO ii = a, b

  IF (.NOT. velocityDomain%isNodePresent(globalNode=ii)) CYCLE
  IF (nodeToNode(ii) .EQ. 0) CYCLE

  ! MODULE SUBROUTINE obj_GetNodeCoord3(obj, nodeCoord, globalNode, &
  !   & islocal)
  CALL velocityDomain%GetNodeCoord(nodeCoord=x1, globalNode=ii)
  CALL pressureDomain%GetNodeCoord(nodeCoord=x2, globalNode=nodeToNode(ii))

  isok = ALL(x1(1:nsd) .APPROXEQ.x2(1:nsd))

  IF (.NOT. isok) THEN
    CALL Display("[FAIL] velocity Node = "//TOSTRING(ii)  &
      & //" not matches with pressure Node = "  &
      & //TOSTRING(nodeToNode(ii)))
  END IF

END DO

CALL pressureDomain%DEALLOCATE()
CALL velocityDomain%DEALLOCATE()

CALL obj%DEALLOCATE()

END PROGRAM main
```
