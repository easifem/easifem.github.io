PROGRAM main
USE Test_Method
USE HDF5File_Class
USE FEMesh_Class
USE AbstractField_Class
USE ScalarMeshField_Class
USE FPL
USE GlobalData
USE BaseType, ONLY: FEVariable_, &
                    TypeFEVariableScalar, &
                    TypeFEVariableSpace
USE FEVariable_Method
USE Display_Method

IMPLICIT NONE

INTEGER(I4B), PARAMETER :: nns = 6
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: varType = Space
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal
INTEGER(I4B), PARAMETER :: defineOn = Quadrature
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"

TYPE(HDF5File_) :: meshfile
TYPE(FEMesh_) :: amesh
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(FEVariable_) :: fevar, want, found
REAL(DFP) :: val(nns)
INTEGER(I4B) :: iel, tcells, aint
LOGICAL(LGT) :: isok

CALL meshfile%Initiate(fileName=filename, MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, dim=nsd)

CALL FPL_INIT(); CALL param%initiate()

CALL SetScalarMeshFieldParam(param=param, name='aScalar', fieldType=fieldType, &
                   engine=engine, defineOn=defineOn, nns=nns, varType=varType)

CALL obj%Initiate(param=param, mesh=amesh)

! To set the entries inside an instance of ScalarMeshField_
! first one must create an instance ofFEVariable_
! Then one can pass this FEVariable to the instance of ScalarMeshField_
! Also note that we use `globalElement` number.

tcells = amesh%GetTotalCells()

DO iel = 1, tcells
  CALL RANDOM_NUMBER(val)

  IF (MOD(iel, 2) == 0) THEN
    aint = nns / 2
  ELSE
    aint = nns
  END IF

  fevar = QuadratureVariable(val(1:aint), TypeFEVariableScalar, &
                             TypeFEVariableSpace)
  CALL obj%Insert(globalElement=iel, fevar=fevar, islocal=.TRUE.)
  CALL obj%Set(globalElement=iel, fevar=fevar, islocal=.TRUE.)
  CALL obj%Get(globalElement=iel, fevar=found, islocal=.TRUE.)

  want = fevar
  isok = found .EQ. want
  IF (.NOT. isok) THEN
    CALL Display(found, "found (iel = "//tostring(iel)//"): ")
    CALL BlankLines(nol=1)
    CALL Display(want, "want (iel = "//tostring(iel)//"): ")
    EXIT
  END IF
END DO

CALL OK(isok, 'Set')

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
