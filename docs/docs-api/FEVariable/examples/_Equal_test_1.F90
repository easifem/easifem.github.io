! This example show how to use NodalVariable method to
! generate Scalar variables at node.

PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(FEVariable_) :: found, want
LOGICAL(LGT) :: isok

! NodalVariable, scalar, space

want = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                     typeFEVariableSpace)

found = want

isok = found == want
CALL OK(isok, '.EQ.')
IF (.NOT. isok) THEN
  CALL Display(found, "found: ")
  CALL Display(want, "want: ")
END IF

END PROGRAM main
