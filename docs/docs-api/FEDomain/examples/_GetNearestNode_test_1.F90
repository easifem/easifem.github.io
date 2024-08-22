PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = &
                  "../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"
INTEGER(I4B) :: globalNode
REAL(DFP) :: qv(3), x(3)

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

qv = [1.0, 0.0, 0.0]
CALL obj%GetNearestNode(qv=qv, x=x, globalNode=globalNode)
CALL Display(globalNode, "globalNode: ")
CALL Display(x, "x: ")

qv = [1.5, 0.3, 0.0]
CALL obj%GetNearestNode(qv=qv, x=x, globalNode=globalNode)
CALL Display(globalNode, "globalNode: ")
CALL Display(x, "x: ")

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
