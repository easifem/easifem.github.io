PROGRAM main
USE easifemBase
USE easifemClasses

IMPLICIT NONE
TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(DOF_) :: dofobj
TYPE(CSRMatrix_) :: mat

CHARACTER(LEN=*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_mesh.h5"

CALL meshfile%Initiate(FileName=filename, MODE="READ")

CALL meshfile%OPEN()

CALL obj%Initiate(hdf5=meshfile, dim=2)

CALL Initiate(obj=dofobj, tNodes=[obj%GetTotalNodes()], names=['K'], &
  & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT)

CALL Initiate(mat, ncol=SIZE(dofobj), nrow=SIZE(dofobj), &
              idof=dofobj, jdof=dofobj)

CALL obj%SetSparsity(mat=mat, localNodeNumber=obj%local_Nptrs, &
                     lbound=1, ubound=obj%GetMaxNodeNumber())

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
