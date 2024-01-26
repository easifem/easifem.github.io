"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[37409],{97351:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(85893),a=t(11151);const s={},r="GmshFLTK",l={id:"GmshAPI/GmshFLTK_",title:"GmshFLTK",description:"Introduction",source:"@site/docs/docs-api/GmshAPI/GmshFLTK_.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/GmshFLTK_",permalink:"/docs-api/GmshAPI/GmshFLTK_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/GmshAPI/GmshFLTK_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GmshAPI",permalink:"/docs-api/GmshAPI/"},next:{title:"GmshModelGeo example 1",permalink:"/docs-api/GmshAPI/GmshFLTK_test_1"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Structure",id:"structure",level:2},{value:"Methods",id:"methods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"Initialize",id:"initialize",level:3},{value:"Wait",id:"wait",level:3},{value:"Update",id:"update",level:3},{value:"Awake",id:"awake",level:3},{value:"Lock",id:"lock",level:3},{value:"Unlock",id:"unlock",level:3},{value:"Run",id:"run",level:3}];function o(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"gmshfltk",children:"GmshFLTK"}),"\n",(0,i.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(e.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(e.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(e.h3,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsx)(e.p,{children:"SUBROUTINE fltk_Initiate(obj)\nCLASS(GmshFLTK_), INTENT(INOUT) :: obj\nEND SUBROUTINE fltk_Initiate"}),"\n",(0,i.jsx)(e.h3,{id:"initialize",children:"Initialize"}),"\n",(0,i.jsx)(e.p,{children:"! Create the FLTK graphical user interface. Can only be called in the main\n!  * thread."}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION fltk_Initialize() RESULT(ans)\nINTEGER(I4B) :: ans\nCALL gmshFltkInitialize(ierr);\nans = int(ierr, i4b)\nEND FUNCTION fltk_Initialize"}),"\n",(0,i.jsx)(e.h3,{id:"wait",children:"Wait"}),"\n",(0,i.jsxs)(e.p,{children:["! Wait at most ",(0,i.jsx)(e.code,{children:"time"})," seconds for user interface events and return. If ",(0,i.jsx)(e.code,{children:"time"}),"\n! < 0, wait indefinitely. First automatically create the user interface if it\n! has not yet been initialized. Can only be called in the main thread."]}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION fltk_Wait(time) RESULT(ans)\nCLASS(*), OPTIONAL, INTENT(IN) :: time\nINTEGER(I4B) :: ans\n!!\nCALL gmshFltkWait( &\n& time=gmsh_opt_cdouble(option=time, default=-1.0_DFP), &\n& ierr=ierr)\nans = int(ierr, i4b)\nEND FUNCTION fltk_Wait"}),"\n",(0,i.jsx)(e.h3,{id:"update",children:"Update"}),"\n",(0,i.jsx)(e.p,{children:'! Update the user interface (potentially creating new widgets and windows).\n! First automatically create the user interface if it has not yet been\n! initialized. Can only be called in the main thread: use `awake("update")\'\n! to trigger an update of the user interface from another thread. */'}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION fltk_Update() RESULT(ans)\nINTEGER(I4B) :: ans\nCALL gmshFltkUpdate(ierr)\nans = int(ierr, i4b)\nEND FUNCTION fltk_Update"}),"\n",(0,i.jsx)(e.h3,{id:"awake",children:"Awake"}),"\n",(0,i.jsx)(e.p,{children:'! Awake the main user interface thread and process pending events, and\n! optionally perform an action (currently the only `action\' allowed is\n! "update").'}),"\n",(0,i.jsx)(e.p,{children:'FUNCTION fltk_Awake(action) RESULT(ans)\nINTEGER(I4B) :: ans\nCHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: action\n!internal\nCHARACTER(LEN=maxStrLen), TARGET :: action_\n!!\naction_ = gmsh_CString(input(option=action, default=""))\n!!\nCALL gmshFltkAwake( &\n& action=action_, ierr=ierr)\n!!\nans = int(ierr, i4b)\nEND FUNCTION fltk_Awake'}),"\n",(0,i.jsx)(e.h3,{id:"lock",children:"Lock"}),"\n",(0,i.jsx)(e.p,{children:"! Block the current thread until it can safely modify the user interface."}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_Lock() RESULT(ans)\nINTEGER(I4B) :: ans\nCALL gmshFltkUnlock(ierr)\nans = int(ierr, i4b)\nEND FUNCTION Fltk_Lock"}),"\n",(0,i.jsx)(e.h3,{id:"unlock",children:"Unlock"}),"\n",(0,i.jsx)(e.p,{children:"! Release the lock that was set using lock. */"}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_Unlock() RESULT(ans)\nINTEGER(I4B) :: ans\nCALL gmshFltkUnlock(ierr)\nans = int(ierr, i4b)\nEND FUNCTION Fltk_Unlock"}),"\n",(0,i.jsx)(e.h3,{id:"run",children:"Run"}),"\n",(0,i.jsx)(e.p,{children:"! Run the event loop of the graphical user interface, i.e. repeatedly call\n! `wait()'. First automatically create the user interface if it has not yet\n! been initialized. Can only be called in the main thread. */"}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_Run() RESULT(ans)\nINTEGER(I4B) :: ans\nCALL gmshFltkRun(ierr)\nans = int(ierr, i4b)\nEND FUNCTION Fltk_Run"}),"\n",(0,i.jsx)(e.p,{children:"! Check if the user interface is available (e.g. to detect if it has been\n! closed)."}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_IsAvailable() RESULT(ans)\nLOGICAL(LGT) :: ans\n!> main\ncintvar = gmshFltkIsAvailable(ierr)\nIF (cintvar .EQ. 1_c_int) THEN\nans = .TRUE.\nELSE\nans = .FALSE.\nEND IF\nEND FUNCTION Fltk_IsAvailable"}),"\n",(0,i.jsxs)(e.p,{children:["! Select entities in the user interface. If ",(0,i.jsx)(e.code,{children:"dim' is >= 0, return only the ! entities of the specified dimension (e.g. points if"}),"dim' == 0)."]}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_SelectEntities(dim) &\nRESULT(dimTags)\nINTEGER(I4B), OPTIONAL, INTENT(IN) :: dim\nINTEGER(I4B), ALLOCATABLE :: dimTags(:, :)\n!\n! internal\n!\nTYPE(C_PTR) :: cptr\nINTEGER(C_SIZE_T) :: dimTags_n\n!\ncintvar = gmshFltkSelectEntities( &\n& dimTags=cptr, &\n& dimTags_n=dimTags_n, &\n& dim=dim, &\n& ierr=ierr)\n!\ndimTags = gmsh_dimtag_c2f(cptr, dimTags_n)\nEND FUNCTION Fltk_SelectEntities"}),"\n",(0,i.jsx)(e.p,{children:"! Select elements in the user interface. */"}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_SelectElements() &\n& RESULT(elementTags)\nINTEGER(I4B), ALLOCATABLE :: elementTags(:)\n!\n! internal\n!\nTYPE(C_PTR) :: cptr\nINTEGER(C_SIZE_T) :: elementTags_n\n!\ncintvar = gmshFltkSelectElements( &\n& elementTags=cptr, &\n& elementTags_n=elementTags_n, &\n& ierr=ierr)\n!\nelementTags = gmsh_intvec_c2f(cptr, elementTags_n)\n!\nEND FUNCTION Fltk_SelectElements"}),"\n",(0,i.jsx)(e.p,{children:"! Select views in the user interface."}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_SelectViews() &\n& RESULT(viewTags)\nINTEGER(I4B), ALLOCATABLE :: viewTags(:)\n! internal\nTYPE(C_PTR) :: cptr\nINTEGER(C_SIZE_T) :: viewTags_n\n!\ncintvar = gmshFltkSelectViews( &\n& viewTags=cptr, &\n& viewTags_n=viewTags_n, &\n& ierr=ierr)\n!\nviewTags = gmsh_intvec_c2f(cptr, viewTags_n)\n!\nEND FUNCTION Fltk_SelectViews"}),"\n",(0,i.jsxs)(e.p,{children:["! Split the current window horizontally (if ",(0,i.jsx)(e.code,{children:'how\' = "h") or vertically (if !'}),'how\' = "v"), using ratio ',(0,i.jsx)(e.code,{children:"ratio'. If"}),'how\' = "u", restore a single window.']}),"\n",(0,i.jsxs)(e.p,{children:["FUNCTION Fltk_SplitCurrentWindow(how, ratio) &\n& RESULT(ans)\nCHARACTER(LEN=",(0,i.jsx)(e.em,{children:"), INTENT(IN) :: how\nCLASS("}),"), OPTIONAL, INTENT(IN) :: ratio\nINTEGER(I4B) :: ans\n!\n! internal values\n!\nCHARACTER(LEN=maxStrLen), TARGET :: how_\n!\nhow_ = gmsh_CString(how)\n!\nCALL gmshFltkSplitCurrentWindow( &\n& how=how_, &\n& ratio=gmsh_opt_cdouble(option=ratio, default=0.5_DFP), &\n& ierr=ierr)\n!\nans = int(ierr, i4b)\nEND FUNCTION Fltk_SplitCurrentWindow"]}),"\n",(0,i.jsx)(e.p,{children:"! Set the current window by speficying its index (starting at 0) in the list\n! of all windows. When new windows are created by splits, new windows are\n! appended at the end of the list."}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_SetCurrentWindow(windowIndex) &\n& RESULT(ans)\nINTEGER(I4B), OPTIONAL, INTENT(IN) :: windowIndex\nINTEGER(I4B) :: ans\n!!\nCALL gmshFltkSetCurrentWindow( &\n& windowIndex=gmsh_opt_cint(option=windowIndex, default=0_I4B), &\n& ierr=ierr)\n!!\nans = int(ierr, i4b)\nEND FUNCTION Fltk_SetCurrentWindow"}),"\n",(0,i.jsx)(e.p,{children:"! Set a status message in the current window. If `graphics' is set, display\n! the message inside the graphic window instead of the status bar."}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_SetStatusMessage(message, graphics) &\n& RESULT(ans)\nCHARACTER(LEN=*), INTENT(IN) :: message\nLOGICAL(LGT), OPTIONAL, INTENT(IN) :: graphics\nINTEGER(I4B) :: ans\n! internal\nCHARACTER(LEN=maxStrLen), TARGET :: message_\n!!\nmessage_ = gmsh_CString(message)\n!!\nCALL gmshFltkSetStatusMessage( &\n& message=message_, &\n& graphics=optval_c_bool(.FALSE., graphics), &\n& ierr=ierr)\n!!\nans = int(ierr, i4b)\nEND FUNCTION Fltk_SetStatusMessage"}),"\n",(0,i.jsxs)(e.p,{children:["! Show context window for the entity of dimension ",(0,i.jsx)(e.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_ShowContextWindow(dim, tag) &\n& RESULT(ans)\nINTEGER(I4B), INTENT(IN) :: dim, tag\nINTEGER(I4B) :: ans\n! internal\nCALL gmshFltkShowContextWindow( &\n& dim=gmsh_cint(dim), &\n& tag=gmsh_cint(tag), &\n& ierr=ierr)\nans = int(ierr, i4b)\nEND FUNCTION Fltk_ShowContextWindow"}),"\n",(0,i.jsxs)(e.p,{children:["! Open the `name' item in the menu tree. ",(0,i.jsx)(e.em,{children:"/\n!\n! GMSH_API void gmshFltkOpenTreeItem(const char"}),"name,\n!                                    int *ierr);"]}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_OpenTreeItem(name) &\n& RESULT(ans)\nCHARACTER(LEN=*), INTENT(IN) :: name\nINTEGER(I4B) :: ans\n! internal\nCHARACTER(LEN=maxStrLen) :: name_\n!\nname_ = gmsh_CString(name)\n!\nCALL gmshFltkOpenTreeItem( &\n& name=name_, ierr=ierr)\n!\nans = int(ierr, i4b)\nEND FUNCTION Fltk_OpenTreeItem"}),"\n",(0,i.jsxs)(e.p,{children:["! Close the `name' item in the menu tree. ",(0,i.jsx)(e.em,{children:"/\n!\n! GMSH_API void gmshFltkCloseTreeItem(const char"}),"name,\n!                                     int *ierr);"]}),"\n",(0,i.jsx)(e.p,{children:"FUNCTION Fltk_CloseTreeItem(name) &\n& RESULT(ans)\nCHARACTER(LEN=*), INTENT(IN) :: name\nINTEGER(I4B) :: ans\n! internal\nCHARACTER(LEN=maxStrLen) :: name_\n!\nname_ = gmsh_CString(name)\n!\nCALL gmshFltkCloseTreeItem(name=name_, ierr=ierr)\n!\nans = int(ierr, i4b)\nEND FUNCTION Fltk_CloseTreeItem"})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>r});var i=t(67294);const a={},s=i.createContext(a);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);