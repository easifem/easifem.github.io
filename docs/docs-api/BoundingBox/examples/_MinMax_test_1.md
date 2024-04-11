<!-- markdownlint-disable MD041 MD013 MD033 MD-->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj
REAL(DFP) :: found, want

CALL initiate(obj, nsd=2, &
              lim=[1.0_DFP, 2.0_DFP, 3.0_DFP, 4.0_DFP, 5.0_DFP, 6.0_DFP])

found = .xmin.obj
want = 1.0_DFP

CALL OK(found.approxeq.want, ".xmin.")

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

found = .xmax.obj
want = 2.0_DFP

CALL OK(found.approxeq.want, ".xmax.")

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

found = .ymin.obj
want = 3.0_DFP

CALL OK(found.approxeq.want, ".ymin.")

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

found = .ymax.obj
want = 4.0_DFP

CALL OK(found.approxeq.want, ".ymax.")

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

found = .zmin.obj
want = 5.0_DFP

CALL OK(found.approxeq.want, ".zmin.")

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

found = .zmax.obj
want = 6.0_DFP

CALL OK(found.approxeq.want, ".zmax.")

END PROGRAM main
```
