
PROGRAM main
USE BaseType, ONLY: RealVector_, DOF_
USE GlobalData
USE RealVector_Method
USE DOF_Method
USE ArangeUtility
USE ApproxUtility
USE Test_Method

IMPLICIT NONE

BLOCK
  TYPE(RealVector_) :: obj1, obj2
  TYPE(DOF_) :: dofobj1, dofobj2
  REAL(DFP), ALLOCATABLE :: found(:), want(:)
  LOGICAL(LGT) :: isok
  REAL(DFP), PARAMETER :: tol = 1.0E-5
  CHARACTER(*), PARAMETER :: msg = "Set29"

  CALL Initiate(obj=dofobj2, tNodes=[4], names=["V"], spaceCompo=[1], &
                timeCompo=[1], StorageFMT=DOF_FMT)

  CALL Initiate(obj2, dofobj2)

  CALL Set(obj=obj2, dofobj=dofobj2, nodenum=[1, 2, 3, 4], &
           VALUE=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=1)

  CALL Initiate(obj=dofobj1, tNodes=[4], names=["V"], spaceCompo=[2], &
                timeCompo=[1], StorageFMT=DOF_FMT)

  CALL Initiate(obj1, dofobj1)

  CALL Set(obj1=obj1, dofobj1=dofobj1, idof1=1, obj2=obj2, dofobj2=dofobj2, &
           idof2=1)

  found = Get(obj=obj1, dofobj=dofobj1, idof=1)
  want = [11.0_DFP, 12.0_DFP, 13.0_DFP, 14.0_DFP]

  isok = ALL(SOFTEQ(found, want, tol))
  CALL OK(isok, msg)

END BLOCK

BLOCK
  TYPE(RealVector_) :: obj1, obj2
  TYPE(DOF_) :: dofobj1, dofobj2
  REAL(DFP), ALLOCATABLE :: found(:), want(:)
  LOGICAL(LGT) :: isok
  REAL(DFP), PARAMETER :: tol = 1.0E-5
  CHARACTER(*), PARAMETER :: msg = "Set29"

  CALL Initiate(obj=dofobj2, tNodes=[4], names=["V"], spaceCompo=[1], &
                timeCompo=[1], StorageFMT=DOF_FMT)

  CALL Initiate(obj2, dofobj2)

  CALL Set(obj=obj2, dofobj=dofobj2, nodenum=[1, 2, 3, 4], &
           VALUE=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=1)

  CALL Initiate(obj=dofobj1, tNodes=[4], names=["V"], spaceCompo=[2], &
                timeCompo=[1], StorageFMT=DOF_FMT)

  CALL Initiate(obj1, dofobj1)

  CALL Set(obj1=obj1, dofobj1=dofobj1, idof1=2, obj2=obj2, dofobj2=dofobj2, &
           idof2=1)

  found = Get(obj=obj1, dofobj=dofobj1, idof=2)
  want = [11.0_DFP, 12.0_DFP, 13.0_DFP, 14.0_DFP]

  isok = ALL(SOFTEQ(found, want, tol))
  CALL OK(isok, msg)

END BLOCK

BLOCK
  TYPE(RealVector_) :: obj1, obj2
  TYPE(DOF_) :: dofobj1, dofobj2
  REAL(DFP), ALLOCATABLE :: found(:), want(:)
  LOGICAL(LGT) :: isok
  REAL(DFP), PARAMETER :: tol = 1.0E-5
  CHARACTER(*), PARAMETER :: msg = "Set29"

  CALL Initiate(obj=dofobj2, tNodes=[4], names=["V"], spaceCompo=[1], &
                timeCompo=[1], StorageFMT=DOF_FMT)

  CALL Initiate(obj2, dofobj2)

  CALL Initiate(obj=dofobj1, tNodes=[4], names=["V"], spaceCompo=[2], &
                timeCompo=[1], StorageFMT=DOF_FMT)

  CALL Initiate(obj1, dofobj1)

  CALL Set(obj=obj1, dofobj=dofobj1, nodenum=[1, 2, 3, 4], &
           VALUE=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=1)

  CALL Set(obj1=obj2, dofobj1=dofobj2, idof1=1, obj2=obj1, dofobj2=dofobj1, &
           idof2=1)

  found = Get(obj=obj2, dofobj=dofobj2, idof=1)
  want = [11.0_DFP, 12.0_DFP, 13.0_DFP, 14.0_DFP]

  isok = ALL(SOFTEQ(found, want, tol))
  CALL OK(isok, msg)

END BLOCK

END PROGRAM main
