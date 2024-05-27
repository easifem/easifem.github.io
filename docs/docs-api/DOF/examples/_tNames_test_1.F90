PROGRAM main
USE DOF_Method
USE BaseType, ONLY: DOF_
USE Test_Method
USE GlobalData

IMPLICIT NONE

TYPE(DOF_) :: obj
CHARACTER(:), ALLOCATABLE :: msg

CALL Initiate(obj, tNodes=[20, 10], names=["V", "P"], &
              spaceCompo=[3, 1], timeCompo=[2, 2], storageFMT=FMT_DOF)

BLOCK
  INTEGER(I4B) :: found, want
  found = .tNames.obj
  want = 2
  msg = '.tNames. obj'
  CALL OK(found .EQ. want, msg)
END BLOCK

BLOCK
  CHARACTER(:), ALLOCATABLE :: found, want
  found = obj.Names.1
  want = "V"
  msg = 'obj .Names. 1'
  CALL OK(found .EQ. want, msg)
END BLOCK

BLOCK
  CHARACTER(:), ALLOCATABLE :: found, want
  found = obj.Names.2
  want = "P"
  msg = 'obj .Names. 2'
  CALL OK(found .EQ. want, msg)
END BLOCK

CALL DEALLOCATE (obj)
END PROGRAM main
