!> author: Vikas Sharma, Ph. D.
! date: 2024-06-05
! summary: Set7

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
  TYPE(ScalarField_) :: obj, VALUE
  REAL(DFP) :: found(100), want(100), tol
  INTEGER(I4B) :: tsize, localNode(3)
  CHARACTER(:), ALLOCATABLE :: msg
  LOGICAL(LGT) :: isok

  CALL fedof%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=order, mesh=mesh)

  CALL SetScalarFieldParam(param=param, &
                           fieldType=TypeField%normal, &
                           name="U", &
                           engine=engine)

  CALL obj%Initiate(param, fedof)
  CALL VALUE%Initiate(param, fedof)

  localNode = [1, 3, 5]

  msg = "Set7 "

  DO ii = 1, SIZE(localNode)
    CALL VALUE%Set(VALUE=REAL(localNode(ii), kind=DFP), &
                   globalNode=localNode(ii), islocal=.TRUE.)
  END DO

  CALL obj%Set(VALUE=VALUE)
  CALL obj%Get(VALUE=found, tsize=tsize)
  want = 0.0_DFP
  want(localNode) = localNode
  tol = 1.0E-5
  isok = ALL(SOFTEQ(found(1:tsize), want(1:tsize), tol))
  CALL OK(isok, msg)

  CALL obj%Set(0.0_DFP)
  obj = VALUE
  CALL obj%Get(VALUE=found, tsize=tsize)
  want = 0.0_DFP
  want(localNode) = localNode
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
