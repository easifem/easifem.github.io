! This program is a part of EASIFEM library
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(CSRMatrix_) :: obj
TYPE(DOF_) :: dofobj

CALL Initiate(obj=dofobj, tNodes=[12], names=['K'], &
  & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT)
CALL Initiate(obj, ncol=12, nrow=12, idof=dofobj, jdof=dofobj)

CALL DEALLOCATE (obj)
END PROGRAM main
