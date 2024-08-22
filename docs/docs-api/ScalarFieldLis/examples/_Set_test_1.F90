!> author: Vikas Sharma, Ph. D.
! date: 2024-06-05
! summary: Set1

PROGRAM main
USE FEDomain_Class
USE HDF5File_Class
USE AbstractMesh_Class
USE AbstractField_Class, ONLY: TypeField, TypeEngineName
USE ScalarField_Class, ONLY: SetScalarFieldParam
USE ScalarFieldLis_Class
USE FPL, ONLY: FPL_Init, FPL_FINALIZE, ParameterList_
USE GlobalData
USE Test_Method
USE FEDOF_Class
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE ApproxUtility
USE Display_Method

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(HDF5File_) :: meshfile
TYPE(ParameterList_) :: param
REAL(DFP), ALLOCATABLE :: realVec(:)
CHARACTER(LEN=*), PARAMETER :: engine = TypeEngineName%lis_omp
CHARACTER(*), PARAMETER :: meshfilename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
CHARACTER(:), ALLOCATABLE :: msg
INTEGER(I4B) :: localNode
REAL(DFP) :: VALUE, tol
LOGICAL(LGT) :: isok

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_Init()
CALL param%Initiate()

!> start creating domain
CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(hdf5=meshfile, group="")
!> end creating domain

mesh => dom%GetMeshPointer(dim=nsd)

BLOCK
  INTEGER(I4B), PARAMETER :: order = 1
  CHARACTER(*), PARAMETER :: baseContinuity = "H1"
  CHARACTER(*), PARAMETER :: baseInterpolation = "Lagrange"
  TYPE(FEDOF_) :: fedof
  TYPE(ScalarFieldLis_) :: obj

  CALL fedof%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=order, mesh=mesh)

  CALL SetScalarFieldParam(param=param, &
                           fieldType=TypeField%normal, &
                           name="U", &
                           engine=engine)

  CALL obj%Initiate(param, fedof)

  msg = "Set1 "
  localNode = 1
  CALL obj%Set(globalnode=localNode, VALUE=100.0_DFP, islocal=.TRUE.)
  CALL obj%Get(globalnode=localNode, VALUE=VALUE, islocal=.TRUE.)
  tol = 1.0E-5
  isok = SOFTEQ(100.0_DFP, VALUE, tol)
  CALL OK(isok, msg)
  IF (.NOT. isok) THEN
    CALL Display(msg="found = ", val=VALUE)
  END IF

  localNode = 2
  CALL obj%Set(globalnode=localNode, VALUE=200.0_DFP, islocal=.TRUE.)
  CALL obj%Get(globalnode=localNode, VALUE=VALUE, islocal=.TRUE.)
  tol = 1.0E-5
  isok = SOFTEQ(200.0_DFP, VALUE, tol)
  CALL OK(isok, msg)

  CALL obj%DEALLOCATE()
END BLOCK

BLOCK
  INTEGER(I4B), PARAMETER :: order = 2
  CHARACTER(*), PARAMETER :: baseContinuity = "H1"
  CHARACTER(*), PARAMETER :: baseInterpolation = "Heirarchical"
  TYPE(FEDOF_) :: fedof
  TYPE(ScalarFieldLis_) :: obj

  CALL fedof%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=order, mesh=mesh)

  CALL SetScalarFieldParam(param=param, &
                           fieldType=TypeField%normal, &
                           name="U", &
                           engine=engine)

  CALL obj%Initiate(param, fedof)

  msg = "Set1 "
  localNode = 3
  CALL obj%Set(globalnode=localNode, VALUE=100.0_DFP, islocal=.TRUE.)
  CALL obj%Get(globalnode=localNode, VALUE=VALUE, islocal=.TRUE.)
  tol = 1.0E-5
  isok = SOFTEQ(100.0_DFP, VALUE, tol)
  CALL OK(isok, msg)

  CALL obj%DEALLOCATE()
END BLOCK

mesh => NULL()
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
