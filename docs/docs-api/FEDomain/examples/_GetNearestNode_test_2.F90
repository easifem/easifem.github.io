PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(CPUTime_) :: ct
CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/big_mesh.h5"
INTEGER(I4B) :: globalNode
REAL(DFP) :: qv(3), x(3)

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

CALL obj%DisplayDomainInfo("big domain info: ")

qv = [10, 20, 0]
CALL ct%SetStartTime()
CALL obj%GetNearestNode(qv=qv, x=x, globalNode=globalNode)
CALL ct%SetEndTime()

CALL Display(globalNode, "globalNode: ")
CALL Display(x, "x: ")
CALL Display(ct%GetTime(), "CPUTime: ")

CALL Display("Add query vector x y z:")
READ (*, *) qv(1), qv(2), qv(3)
CALL Display(qv, "You have entered qv: ")

CALL EqualLine()
CALL ct%SetStartTime()
CALL obj%GetNearestNode(qv=qv, x=x, globalNode=globalNode)
CALL ct%SetEndTime()

CALL Display(globalNode, "globalNode: ")
CALL Display(x, "x: ")
CALL Display(ct%GetTime(), "CPUTime: ")
CALL EqualLine()
CALL BlankLines()

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
