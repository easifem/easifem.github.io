PROGRAM main
USE GlobalData
USE ElastoDynamics1DSTFEM_Class

IMPLICIT NONE

TYPE(ElastoDynamics1DSTFEM_) :: obj
CHARACTER(*), PARAMETER :: testname = "dev test", &
                           ! tomlName = "lagrange_lagrange", &
                           ! tomlName = "lagrange_hierarchical", &
                           tomlName = "hierarchical_hierarchical", &
                           filename = "config.toml"

CALL obj%ImportFromToml(tomlName=tomlName, filename=filename)
obj%velocityLeft => velocityLeft
obj%velocityRight => velocityRight
obj%initialDisp => initialDisp
obj%initialVel => initialVel

CALL obj%Set()

CALL obj%Display(testname)

CALL obj%Debug()

! CALL obj%Display(testname)

CONTAINS
! PURE FUNCTION tractionRight(t) RESULT(ans)
!   REAL(DFP), INTENT(IN) :: t
!   REAL(DFP) :: ans
!
!   ans = 1.0_DFP + 0.0_DFP * t
! END FUNCTION tractionRight

PURE FUNCTION velocityRight(t) RESULT(ans)
  REAL(DFP), INTENT(IN) :: t
  REAL(DFP) :: ans
  ans = 2.0_DFP * (t - 1.0_DFP)
END FUNCTION velocityRight

PURE FUNCTION velocityLeft(t) RESULT(ans)
  REAL(DFP), INTENT(IN) :: t
  REAL(DFP) :: ans
  ans = 2.0_DFP * t
END FUNCTION velocityLeft

PURE FUNCTION initialDisp(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: ans
  ans = x**2
END FUNCTION initialDisp

PURE FUNCTION initialVel(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: ans
  ans = -2.0_DFP * x
END FUNCTION initialVel

END PROGRAM main
