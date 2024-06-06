```fortran
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
TYPE(ScalarField_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(ParameterList_) :: param
TYPE(FEDOF_) :: fedof
REAL(DFP), ALLOCATABLE :: realVec(:)
CHARACTER(LEN=*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: meshfilename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2, order = 1
CHARACTER(*), PARAMETER :: baseContinuity="H1" , baseInterpolation="Lagrange"
CHARACTER(:), ALLOCATABLE :: msg

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_Init()
CALL param%Initiate()

!> start creating domain
CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(hdf5=meshfile, group="")
!> end creating domain

mesh => dom%GetMeshPointer(dim=nsd)

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=order, mesh=mesh)

CALL SetScalarFieldParam(param=param, &
                         fieldType=TypeField%normal, &
                         name="U", &
                         engine=engine)

CALL obj%Initiate(param, fedof)

CALL OK(.TRUE., "ScalarField Initiate")

BLOCK
  INTEGER(I4B) :: localNode
  REAL(DFP) :: VALUE, tol
  LOGICAL(LGT) :: isok

  msg = "Setting a scalar value (localNode): "
  localNode = 1
  CALL obj%Set(globalnode=localNode, VALUE=100.0_DFP, islocal=.TRUE.)
  CALL obj%Get(globalnode=localNode, VALUE=VALUE, islocal=.TRUE.)
  tol = 1.0E-5
  isok = SOFTEQ(100.0_DFP, VALUE, tol)
  CALL OK(isok, msg)
END BLOCK

BLOCK
  INTEGER(I4B) :: globalNode, localNode
  REAL(DFP) :: VALUE, tol
  LOGICAL(LGT) :: isok

  msg = "Setting a scalar value (globalNode): "
  localNode = 1
  globalNode = mesh%GetGlobalNodeNumber(localNode)
  CALL obj%Set(globalNode=globalNode, VALUE=100.0_DFP, islocal=.FALSE.)
  CALL obj%Get(globalnode=globalNode, VALUE=VALUE, islocal=.FALSE.)
  tol = 1.0E-5
  isok = SOFTEQ(100.0_DFP, VALUE, tol)
  CALL OK(isok, msg)
END BLOCK

BLOCK
  INTEGER(I4B) :: localNode(2), tsize
  REAL(DFP) :: found(2), want(2), tol
  LOGICAL(LGT) :: isok

  msg = "Setting many values to a scalar value (localNode): "
  localNode = [1, 2]
  CALL obj%Set(globalnode=localNode, VALUE=100.0_DFP, islocal=.TRUE.)
  CALL obj%Get(globalnode=localNode, VALUE=found, islocal=.TRUE., tsize=tsize)
  tol = 1.0E-5
  want = 100.0_DFP
  isok = ALL(SOFTEQ(found, want, tol))
  CALL OK(isok, msg)
END BLOCK

mesh => NULL()
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
```
