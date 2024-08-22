```fortran
PROGRAM main
USE GlobalData
USE BaseType, ONLY: RealVector_, DOF_
USE RealVector_Method
USE DOF_Method

IMPLICIT NONE

TYPE(RealVector_) :: obj
TYPE(DOF_) :: dofobj
REAL(DFP) :: ans, VALUE

CALL Initiate(obj=dofobj, &
  & tNodes=[4, 2], &
  & names=["V", "P"], &
  & spaceCompo=[2, 1], &
  & timeCompo=[2, 2], &
  & StorageFMT=DOF_FMT)

CALL Initiate(obj, dofobj)
CALL Display(obj, "obj = ")
CALL Display(obj, dofobj, 'obj:')

END PROGRAM main
```
