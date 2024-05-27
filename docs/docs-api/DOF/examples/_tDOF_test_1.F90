PROGRAM main
USE GlobalData
USE DOF_Method
USE Test_Method
USE BaseType, ONLY: DOF_

IMPLICIT NONE

TYPE(DOF_) :: obj
INTEGER(I4B) :: found, want
CHARACTER(:), ALLOCATABLE :: msg

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

found = .tDOF.obj
want = 3
msg = ".tDOF. obj"
CALL OK(found .EQ. want, msg)

found = obj.tDOF.1
want = 3
msg = "obj .tDOF. 1"
CALL OK(found .EQ. want, msg)

found = obj.tDOF."U"
want = 3
msg = "obj .tDOF. U"
CALL OK(found .EQ. want, msg)

CALL DEALLOCATE (obj)
END PROGRAM main
