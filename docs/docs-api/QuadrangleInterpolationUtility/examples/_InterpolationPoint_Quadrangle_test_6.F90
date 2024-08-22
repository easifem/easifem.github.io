PROGRAM main
USE QuadrangleInterpolationUtility
USE ReferenceQuadrangle_Method
USE GlobalData
USE Display_Method
USE Test_Method
USE MdEncode_Method
USE String_Class
USE ReallocateUtility
USE ApproxUtility

IMPLICIT NONE

CHARACTER(*), PARAMETER :: test_name = "InterpolationPoint_Quadrangle test 6"

INTEGER(i4b) :: order, ipType
REAL(dfp), ALLOCATABLE :: xij(:, :)
CHARACTER(20) :: layout

order = 5; xij = RefQuadrangleCoord("BIUNIT"); ipType = Equidistance; layout = "VEFC"
CALL callme

order = 5; xij = RefQuadrangleCoord("BIUNIT"); ipType = Equidistance; layout = "INCR"
CALL callme

CONTAINS
SUBROUTINE callme
  REAL(DFP), ALLOCATABLE :: found(:, :), want(:, :)
  LOGICAL(LGT) :: isok
  INTEGER(I4B) :: ii, nrow, ncol

  want = InterpolationPoint_Quadrangle(order=order, ipType=ipType, &
                                       layout=layout, xij=xij)

  ncol = GetTotalDof_Quadrangle(order=order, &
                            baseContinuity="H1", baseInterpolation="Lagrange")

  nrow = 3

  CALL Reallocate(found, nrow, ncol)

  CALL InterpolationPoint_Quadrangle_(order=order, ipType=ipType, &
                      layout=layout, xij=xij, ans=found, nrow=nrow, ncol=ncol)

  isok = SIZE(want, 1) == nrow
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN; CALL display("error-code: row"); RETURN; END IF

  isok = SIZE(want, 2) == ncol
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN; CALL display("error-code: col"); RETURN; END IF

  isok = ALL(found(1:nrow, 1:ncol) .approxeq.want)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN; CALL display("error-code: value"); RETURN; END IF

END SUBROUTINE callme

END PROGRAM main
