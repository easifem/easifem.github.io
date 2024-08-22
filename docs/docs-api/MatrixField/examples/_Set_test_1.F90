! In this example we show how to set entries in MatrixField.

PROGRAM main
USE Display_Method
USE ApproxUtility
USE GlobalData
USE FPL
USE HDF5File_Class
USE AbstractField_Class, ONLY: TypeField
USE FEMesh_Class
USE MatrixField_Class
USE FEDOF_Class
USE ExceptionHandler_Class
USE Test_Method
USE ReallocateUtility

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal
INTEGER(I4B), PARAMETER :: order = 1

CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Lagrange"
CHARACTER(*), PARAMETER :: test_name = "Set test (1):"

TYPE(FEMesh_) :: mesh
TYPE(MatrixField_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(FEDOF_) :: fedof
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_INIT(); CALL param%Initiate()

CALL meshfile%Initiate(filename=filename, mode="READ")
CALL meshfile%OPEN()
CALL mesh%Initiate(hdf5=meshfile, dim=nsd)
CALL meshfile%DEALLOCATE()

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=mesh)

CALL mesh%DisplayMeshInfo("mesh info:")

! obj_Set1(obj, globalNode, islocal, VALUE, storageFMT, &
!                            scale, addContribution)

BLOCK
  REAL(DFP), ALLOCATABLE :: VALUE(:, :), found(:, :), want(:, :)
  INTEGER(I4B), ALLOCATABLE :: globalNode(:)
  INTEGER(I4B) :: nrow, ncol
  LOGICAL(LGT) :: isok
  INTEGER(I4B), PARAMETER :: spaceCompo = 1, timeCompo = 1

  CALL SetMatrixFieldParam(param=param, name="K", matrixProp="UNSYM", &
                           spaceCompo=spaceCompo, timeCompo=timeCompo, &
                           fieldType=fieldType, engine=engine)

  CALL obj%Initiate(param=param, fedof=fedof)

  globalNode = fedof%GetConnectivity(globalElement=1, islocal=.TRUE., &
                                     opt="A")

  CALL Reallocate(VALUE, 3, 3)
  CALL RANDOM_NUMBER(VALUE)
  CALL obj%Set(globalNode=globalNode, islocal=.TRUE., &
               VALUE=VALUE, storageFMT=DOF_FMT)

  CALL Reallocate(found, 3, 3)
  CALL obj%Get(globalNode=globalNode, islocal=.TRUE., &
               storageFMT=DOF_FMT, VALUE=found, &
               nrow=nrow, ncol=ncol)

  isok = nrow .EQ. 3 .AND. (ncol .EQ. 3)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(nrow, "nrow: ")
    CALL Display(ncol, "ncol: ")
  END IF

  want = VALUE

  isok = ALL(found == want)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(found, "found: ")
    CALL Display(want, "want: ")
  END IF

END BLOCK

BLOCK
  REAL(DFP), ALLOCATABLE :: VALUE(:, :), found(:, :), want(:, :)
  INTEGER(I4B), ALLOCATABLE :: globalNode(:)
  INTEGER(I4B) :: nrow, ncol
  LOGICAL(LGT) :: isok
  INTEGER(I4B), PARAMETER :: spaceCompo = 2, timeCompo = 1

  CALL SetMatrixFieldParam(param=param, name="K", matrixProp="UNSYM", &
                           spaceCompo=spaceCompo, timeCompo=timeCompo, &
                           fieldType=fieldType, engine=engine)

  CALL obj%Initiate(param=param, fedof=fedof)

  globalNode = fedof%GetConnectivity(globalElement=1, islocal=.TRUE., &
                                     opt="A")

  CALL Reallocate(VALUE, 6, 6)
  CALL RANDOM_NUMBER(VALUE)
  CALL obj%Set(globalNode=globalNode, islocal=.TRUE., &
               VALUE=VALUE, storageFMT=DOF_FMT)

  CALL Reallocate(found, 6, 6)
  CALL obj%Get(globalNode=globalNode, islocal=.TRUE., &
               storageFMT=DOF_FMT, VALUE=found, &
               nrow=nrow, ncol=ncol)

  isok = nrow .EQ. 6 .AND. (ncol .EQ. 6)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(nrow, "nrow: ")
    CALL Display(ncol, "ncol: ")
  END IF

  want = VALUE

  isok = ALL(found == want)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(found, "found: ")
    CALL Display(want, "want: ")
  END IF

END BLOCK

CALL obj%DEALLOCATE()
CALL mesh%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()

END PROGRAM main
