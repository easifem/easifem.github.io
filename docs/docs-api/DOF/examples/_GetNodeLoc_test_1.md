```fortran
PROGRAM main
USE GlobalData
USE DOF_Method
USE BaseType, ONLY: DOF_
USE Test_Method

IMPLICIT NONE

TYPE(DOF_) :: obj

CALL Initiate(obj, tNodes=[20, 10], &
              names=["V", "P"], spaceCompo=[3, 1], &
              timeCompo=[2, 2], storageFMT=FMT_DOF)

! `v`, spacecompo=1, timecompo=1, at node 1

CALL OK(GetNodeLoc(obj, 1, 1) .EQ. 1, &
        'GetNodeLoc(obj, 1, 1): ')

! `v`, spacecompo=2, timecompo=1, at node 1

CALL OK(GetNodeLoc(obj, 1, 2) .EQ. 21, &
        'GetNodeLoc(obj, 1, 2): ')

! `v`, spacecompo=3, timecompo=1, at node 1

CALL OK(GetNodeLoc(obj, 1, 3) .EQ. 41, &
        'GetNodeLoc(obj, 1, 3): ')

! `v`, spacecompo=1, timecompo=2, at node 1

CALL OK(GetNodeLoc(obj, 1, 4) .EQ. 61, &
        'GetNodeLoc(obj, 1, 4): ')

! `v`, spacecompo=2, timecompo=2, at node 1

CALL OK(GetNodeLoc(obj, 1, 5) .EQ. 81, &
        'GetNodeLoc(obj, 1, 5): ')

! `v`, spacecompo=3, timecompo=2, at node 1

CALL OK(GetNodeLoc(obj, 1, 6) .EQ. 101, &
        'GetNodeLoc(obj, 1, 6): ')

! `P`, spacecompo=1, timecompo=1, at node 1

CALL OK(GetNodeLoc(obj, 1, 7) .EQ. 121, &
        'GetNodeLoc(obj, 1, 7): ')

! `P`, spacecompo=1, timecompo=2, at node 1

CALL OK(GetNodeLoc(obj, 1, 8) .EQ. 131, &
        'GetNodeLoc(obj, 1, 8): ')

! `V`, spacecompo=1, timecompo=1, at node 10

CALL OK(GetNodeLoc(obj, 10, 1) .EQ. 10, &
        'GetNodeLoc(obj, 10, 1): ')

! `V`, spacecompo=2, timecompo=1, at node 10

CALL OK(GetNodeLoc(obj, 10, 2) .EQ. 30, &
        'GetNodeLoc(obj, 10, 2): ')

! `V`, spacecompo=3, timecompo=1, at node 10

CALL OK(GetNodeLoc(obj, 10, 3) .EQ. 50, &
        'GetNodeLoc(obj, 10, 3): ')

! `V`, spacecompo=1, timecompo=2, at node 10

CALL OK(GetNodeLoc(obj, 10, 4) .EQ. 70, &
        'GetNodeLoc(obj, 10, 4): ')

! `V`, spacecompo=2, timecompo=2, at node 10

CALL OK(GetNodeLoc(obj, 10, 5) .EQ. 90, &
        'GetNodeLoc(obj, 10, 5): ')

! `V`, spacecompo = 3, timecompo = 2, at node 10

CALL OK(GetNodeLoc(obj, 10, 6) .EQ. 110, &
        'GetNodeLoc(obj, 10, 6): ')

! `P`, spacecompo = 1, timecompo = 1, at node 10

CALL OK(GetNodeLoc(obj, 10, 7) .EQ. 130, &
        'GetNodeLoc(obj, 10, 7): ')

! `P`, spacecompo = 1, timecompo = 2, at node 10

CALL OK(GetNodeLoc(obj, 10, 8) .EQ. 140, &
        'GetNodeLoc(obj, 10, 8): ')

! `V`, spacecompo = 1, timecompo = 1

CALL OK(ALL(GetNodeLoc(obj, 1) .EQ. [1, 20, 1]), &
        'GetNodeLoc(obj, 1): ')

! `V`, spacecompo = 2, timecompo = 1

CALL OK(ALL(GetNodeLoc(obj, 2) .EQ. [21, 40, 1]), &
        'GetNodeLoc(obj, 2): ')

! `V`, spacecompo = 3, timecompo = 1

CALL OK(ALL(GetNodeLoc(obj, 3) .EQ. [41, 60, 1]), &
        'GetNodeLoc(obj, 3): ')

! `P`, spacecompo = 1, timecompo = 1

CALL OK(ALL(GetNodeLoc(obj, 7) .EQ. [121, 130, 1]), &
        'GetNodeLoc(obj, 7): ')

! `P`, spacecompo = 1, timecompo = 2

CALL OK(ALL(GetNodeLoc(obj, 8) .EQ. [131, 140, 1]), &
        'GetNodeLoc(obj, 7): ')

CALL DEALLOCATE (obj)
END PROGRAM main
```
