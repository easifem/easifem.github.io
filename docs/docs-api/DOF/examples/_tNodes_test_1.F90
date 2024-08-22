!> author: Vikas Sharma, Ph. D.
! date: 2024-05-25
! summary: This example shows the usage of `.tNodes.` to get total number of nodes of degree of freedom.

PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method
USE Test_Method

IMPLICIT NONE

TYPE(DOF_) :: obj
INTEGER(I4B) :: found, want

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

found = .tNodes.obj
want = 30
CALL OK(found .EQ. want, 'tNodes (1) : ')

found = obj.tNodes.1
want = 10
CALL OK(found .EQ. want, 'tNodes (2) : ')

found = obj.tNodes.2
want = 10
CALL OK(found .EQ. want, 'tNodes (3) : ')

found = obj.tNodes.3
want = 10
CALL OK(found .EQ. want, 'tNodes (4) : ')

found = obj.tNodes. [1, 2, 3]
want = 30
CALL OK(found .EQ. want, 'tNodes (5) : ')

CALL DEALLOCATE (obj)
END PROGRAM main
