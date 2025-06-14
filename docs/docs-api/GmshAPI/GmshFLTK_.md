# GmshFLTK

## Introduction

## Getting started

## Structure

## Methods

### Initiate

SUBROUTINE fltk_Initiate(obj)
CLASS(GmshFLTK_), INTENT(INOUT) :: obj
END SUBROUTINE fltk_Initiate

### Initialize

! Create the FLTK graphical user interface. Can only be called in the main
! * thread.

FUNCTION fltk_Initialize() RESULT(ans)
INTEGER(I4B) :: ans
CALL gmshFltkInitialize(ierr);
ans = int(ierr, i4b)
END FUNCTION fltk_Initialize

### Wait

! Wait at most `time` seconds for user interface events and return. If `time`
! < 0, wait indefinitely. First automatically create the user interface if it
! has not yet been initialized. Can only be called in the main thread.

FUNCTION fltk_Wait(time) RESULT(ans)
CLASS(*), OPTIONAL, INTENT(IN) :: time
INTEGER(I4B) :: ans
!!
CALL gmshFltkWait( &
& time=gmsh_opt_cdouble(option=time, default=-1.0_DFP), &
& ierr=ierr)
ans = int(ierr, i4b)
END FUNCTION fltk_Wait

### Update

! Update the user interface (potentially creating new widgets and windows).
! First automatically create the user interface if it has not yet been
! initialized. Can only be called in the main thread: use `awake("update")'
! to trigger an update of the user interface from another thread. */

FUNCTION fltk_Update() RESULT(ans)
INTEGER(I4B) :: ans
CALL gmshFltkUpdate(ierr)
ans = int(ierr, i4b)
END FUNCTION fltk_Update

### Awake

! Awake the main user interface thread and process pending events, and
! optionally perform an action (currently the only `action' allowed is
! "update").

FUNCTION fltk_Awake(action) RESULT(ans)
INTEGER(I4B) :: ans
CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: action
!internal
CHARACTER(LEN=maxStrLen), TARGET :: action_
!!
action_ = gmsh_CString(input(option=action, default=""))
!!
CALL gmshFltkAwake( &
& action=action_, ierr=ierr)
!!
ans = int(ierr, i4b)
END FUNCTION fltk_Awake

### Lock

! Block the current thread until it can safely modify the user interface.

FUNCTION Fltk_Lock() RESULT(ans)
INTEGER(I4B) :: ans
CALL gmshFltkUnlock(ierr)
ans = int(ierr, i4b)
END FUNCTION Fltk_Lock

### Unlock

! Release the lock that was set using lock. */

FUNCTION Fltk_Unlock() RESULT(ans)
INTEGER(I4B) :: ans
CALL gmshFltkUnlock(ierr)
ans = int(ierr, i4b)
END FUNCTION Fltk_Unlock

### Run

! Run the event loop of the graphical user interface, i.e. repeatedly call
! `wait()'. First automatically create the user interface if it has not yet
! been initialized. Can only be called in the main thread. */

FUNCTION Fltk_Run() RESULT(ans)
INTEGER(I4B) :: ans
CALL gmshFltkRun(ierr)
ans = int(ierr, i4b)
END FUNCTION Fltk_Run

! Check if the user interface is available (e.g. to detect if it has been
! closed).

FUNCTION Fltk_IsAvailable() RESULT(ans)
LOGICAL(LGT) :: ans
!> main
cintvar = gmshFltkIsAvailable(ierr)
IF (cintvar .EQ. 1_c_int) THEN
ans = .TRUE.
ELSE
ans = .FALSE.
END IF
END FUNCTION Fltk_IsAvailable

! Select entities in the user interface. If `dim' is >= 0, return only the ! entities of the specified dimension (e.g. points if`dim' == 0).

FUNCTION Fltk_SelectEntities(dim) &
RESULT(dimTags)
INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
INTEGER(I4B), ALLOCATABLE :: dimTags(:, :)
!
! internal
!
TYPE(C_PTR) :: cptr
INTEGER(C_SIZE_T) :: dimTags_n
!
cintvar = gmshFltkSelectEntities( &
& dimTags=cptr, &
& dimTags_n=dimTags_n, &
& dim=dim, &
& ierr=ierr)
!
dimTags = gmsh_dimtag_c2f(cptr, dimTags_n)
END FUNCTION Fltk_SelectEntities

! Select elements in the user interface. */

FUNCTION Fltk_SelectElements() &
& RESULT(elementTags)
INTEGER(I4B), ALLOCATABLE :: elementTags(:)
!
! internal
!
TYPE(C_PTR) :: cptr
INTEGER(C_SIZE_T) :: elementTags_n
!
cintvar = gmshFltkSelectElements( &
& elementTags=cptr, &
& elementTags_n=elementTags_n, &
& ierr=ierr)
!
elementTags = gmsh_intvec_c2f(cptr, elementTags_n)
!
END FUNCTION Fltk_SelectElements

! Select views in the user interface.

FUNCTION Fltk_SelectViews() &
& RESULT(viewTags)
INTEGER(I4B), ALLOCATABLE :: viewTags(:)
! internal
TYPE(C_PTR) :: cptr
INTEGER(C_SIZE_T) :: viewTags_n
!
cintvar = gmshFltkSelectViews( &
& viewTags=cptr, &
& viewTags_n=viewTags_n, &
& ierr=ierr)
!
viewTags = gmsh_intvec_c2f(cptr, viewTags_n)
!
END FUNCTION Fltk_SelectViews

! Split the current window horizontally (if `how' = "h") or vertically (if !`how' = "v"), using ratio `ratio'. If`how' = "u", restore a single window.

FUNCTION Fltk_SplitCurrentWindow(how, ratio) &
& RESULT(ans)
CHARACTER(LEN=_), INTENT(IN) :: how
CLASS(_), OPTIONAL, INTENT(IN) :: ratio
INTEGER(I4B) :: ans
!
! internal values
!
CHARACTER(LEN=maxStrLen), TARGET :: how_
!
how_ = gmsh_CString(how)
!
CALL gmshFltkSplitCurrentWindow( &
& how=how_, &
& ratio=gmsh_opt_cdouble(option=ratio, default=0.5_DFP), &
& ierr=ierr)
!
ans = int(ierr, i4b)
END FUNCTION Fltk_SplitCurrentWindow

! Set the current window by speficying its index (starting at 0) in the list
! of all windows. When new windows are created by splits, new windows are
! appended at the end of the list.

FUNCTION Fltk_SetCurrentWindow(windowIndex) &
& RESULT(ans)
INTEGER(I4B), OPTIONAL, INTENT(IN) :: windowIndex
INTEGER(I4B) :: ans
!!
CALL gmshFltkSetCurrentWindow( &
& windowIndex=gmsh_opt_cint(option=windowIndex, default=0_I4B), &
& ierr=ierr)
!!
ans = int(ierr, i4b)
END FUNCTION Fltk_SetCurrentWindow

! Set a status message in the current window. If `graphics' is set, display
! the message inside the graphic window instead of the status bar.

FUNCTION Fltk_SetStatusMessage(message, graphics) &
& RESULT(ans)
CHARACTER(LEN=*), INTENT(IN) :: message
LOGICAL(LGT), OPTIONAL, INTENT(IN) :: graphics
INTEGER(I4B) :: ans
! internal
CHARACTER(LEN=maxStrLen), TARGET :: message_
!!
message_ = gmsh_CString(message)
!!
CALL gmshFltkSetStatusMessage( &
& message=message_, &
& graphics=optval_c_bool(.FALSE., graphics), &
& ierr=ierr)
!!
ans = int(ierr, i4b)
END FUNCTION Fltk_SetStatusMessage

! Show context window for the entity of dimension `dim' and tag`tag'.

FUNCTION Fltk_ShowContextWindow(dim, tag) &
& RESULT(ans)
INTEGER(I4B), INTENT(IN) :: dim, tag
INTEGER(I4B) :: ans
! internal
CALL gmshFltkShowContextWindow( &
& dim=gmsh_cint(dim), &
& tag=gmsh_cint(tag), &
& ierr=ierr)
ans = int(ierr, i4b)
END FUNCTION Fltk_ShowContextWindow

! Open the `name' item in the menu tree. */
!
! GMSH_API void gmshFltkOpenTreeItem(const char*name,
! int *ierr);

FUNCTION Fltk_OpenTreeItem(name) &
& RESULT(ans)
CHARACTER(LEN=*), INTENT(IN) :: name
INTEGER(I4B) :: ans
! internal
CHARACTER(LEN=maxStrLen) :: name_
!
name_ = gmsh_CString(name)
!
CALL gmshFltkOpenTreeItem( &
& name=name_, ierr=ierr)
!
ans = int(ierr, i4b)
END FUNCTION Fltk_OpenTreeItem

! Close the `name' item in the menu tree. */
!
! GMSH_API void gmshFltkCloseTreeItem(const char*name,
! int *ierr);

FUNCTION Fltk_CloseTreeItem(name) &
& RESULT(ans)
CHARACTER(LEN=*), INTENT(IN) :: name
INTEGER(I4B) :: ans
! internal
CHARACTER(LEN=maxStrLen) :: name_
!
name_ = gmsh_CString(name)
!
CALL gmshFltkCloseTreeItem(name=name_, ierr=ierr)
!
ans = int(ierr, i4b)
END FUNCTION Fltk_CloseTreeItem
