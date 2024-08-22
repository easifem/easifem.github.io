PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method
USE Test_Method

IMPLICIT NONE

TYPE(DOF_) :: obj

! Initiate DOF

CALL Initiate(obj, tNodes=[20, 20], &
              names=["V", "P"], spaceCompo=[3, 1], &
              timeCompo=[2, 2], storageFMT=FMT_NODES)

CALL OK(getNodeLoc(obj, 1, 1) .EQ. 1, &
        'getNodeLoc(obj, 1, 1): ')

CALL OK(getNodeLoc(obj, 1, 2) .EQ. 2, &
        'getNodeLoc(obj, 1, 2): ')

CALL OK(getNodeLoc(obj, 1, 3) .EQ. 3, &
        'getNodeLoc(obj, 1, 3): ')

CALL OK(getNodeLoc(obj, 1, 4) .EQ. 4, &
        'getNodeLoc(obj, 1, 4): ')

CALL OK(getNodeLoc(obj, 1, 5) .EQ. 5, &
        'getNodeLoc(obj, 1, 5): ')

CALL OK(getNodeLoc(obj, 1, 6) .EQ. 6, &
        'getNodeLoc(obj, 1, 6): ')

CALL OK(getNodeLoc(obj, 1, 7) .EQ. 7, &
        'getNodeLoc(obj, 1, 7): ')

CALL OK(getNodeLoc(obj, 1, 8) .EQ. 8, &
        'getNodeLoc(obj, 1, 8): ')

CALL OK(ALL(getNodeLoc(obj, 1) .EQ. [1, 160, 8]), &
        'getNodeLoc(obj, 1): ')

CALL OK(ALL(getNodeLoc(obj, 2) .EQ. [2, 160, 8]), &
        'getNodeLoc(obj, 2): ')

CALL OK(ALL(getNodeLoc(obj, 3) .EQ. [3, 160, 8]), &
        'getNodeLoc(obj, 3): ')

CALL OK(ALL(getNodeLoc(obj, 7) .EQ. [7, 160, 8]), &
        'getNodeLoc(obj, 7): ')

CALL OK(ALL(getNodeLoc(obj, 8) .EQ. [8, 160, 8]), &
        'getNodeLoc(obj, 7): ')

CALL DEALLOCATE (obj)
END PROGRAM main
