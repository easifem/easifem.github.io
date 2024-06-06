!> author: Vikas Sharma, Ph. D.
! date: 2024-06-05
! summary: Set3

PROGRAM main
USE FEDomain_Class
USE HDF5File_Class
USE AbstractMesh_Class
USE AbstractField_Class, ONLY: TypeField
USE ScalarField_Class
USE FPL, ONLY: FPL_Init, FPL_FINALIZE, ParameterList_
USE GlobalData
USE Test_Method
USE FEDOF_Class
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE ApproxUtility
USE ArangeUtility

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(HDF5File_) :: meshfile
TYPE(ParameterList_) :: param
CHARACTER(LEN=*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: meshfilename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2

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
  TYPE(ScalarField_) :: obj
  REAL(DFP) :: found(100), want(100), VALUE(100), tol
  INTEGER(I4B) :: tsize
  CHARACTER(:), ALLOCATABLE :: msg
  LOGICAL(LGT) :: isok

  CALL fedof%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=order, mesh=mesh)

  CALL SetScalarFieldParam(param=param, &
                           fieldType=TypeField%normal, &
                           name="U", &
                           engine=engine)

  CALL obj%Initiate(param, fedof)

  msg = "Set3 "
  tsize = obj%SIZE()
  VALUE(1:tsize) = arange(1, tsize)
  CALL obj%Set(VALUE=VALUE(1:tsize))
  CALL obj%Get(VALUE=found, tsize=tsize)

  want(1:tsize) = VALUE(1:tsize)
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%Set(VALUE=VALUE(1:tsize), scale=2.0_DFP, addContribution=.TRUE.)
  CALL obj%Get(VALUE=found, tsize=tsize)
  want(1:tsize) = 3.0_DFP * VALUE(1:tsize)
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%Set(VALUE=VALUE(1:tsize), addContribution=.TRUE.)
  CALL obj%Get(VALUE=found, tsize=tsize)
  want(1:tsize) = 4.0_DFP * VALUE
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%DEALLOCATE()
END BLOCK

BLOCK
  INTEGER(I4B), PARAMETER :: order = 2
  CHARACTER(*), PARAMETER :: baseContinuity = "H1"
  CHARACTER(*), PARAMETER :: baseInterpolation = "Heirarchical"
  TYPE(FEDOF_) :: fedof
  TYPE(ScalarField_) :: obj
  REAL(DFP) :: found(100), want(100), VALUE, tol
  INTEGER(I4B) :: tsize
  CHARACTER(:), ALLOCATABLE :: msg
  LOGICAL(LGT) :: isok

  CALL fedof%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=order, mesh=mesh)

  CALL SetScalarFieldParam(param=param, &
                           fieldType=TypeField%normal, &
                           name="U", &
                           engine=engine)

  CALL obj%Initiate(param, fedof)

  msg = "Set3 "
  VALUE = 100.0_DFP
  CALL obj%Set(VALUE=VALUE)
  CALL obj%Get(VALUE=found, tsize=tsize)

  want(1:tsize) = VALUE
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%Set(VALUE=VALUE, scale=2.0_DFP, addContribution=.TRUE.)
  CALL obj%Get(VALUE=found, tsize=tsize)
  want(1:tsize) = 3.0_DFP * VALUE
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%Set(VALUE=VALUE, addContribution=.TRUE.)
  CALL obj%Get(VALUE=found, tsize=tsize)
  want(1:tsize) = 4.0_DFP * VALUE
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%DEALLOCATE()
END BLOCK

mesh => NULL()
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
