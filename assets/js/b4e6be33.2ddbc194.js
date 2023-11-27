"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[25592],{3557:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>E,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=o(85893),i=o(11151);function s(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'module test_BoundingBox\nuse easifemBase\nimplicit none\ncontains\n\nsubroutine test1\n  type(BoundingBox_) :: obj\n  call initiate( obj, nsd = 2, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )\n  call display( obj, msg="test1" )\nend subroutine test1\n\n\nsubroutine test2\n  type(BoundingBox_) :: obj, obj2\n  call initiate( obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )\n  call initiate(obj2, obj)\n  call display( obj2, msg="test2")\nend subroutine test2\n\n\nsubroutine test3\n  type(BoundingBox_) :: obj\n  obj = BoundingBox( nsd = 2, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )\n  call display( obj, msg="test3" )\nend subroutine test3\n\n\nsubroutine test4\n  type(BoundingBox_) :: obj, obj2\n  call initiate( obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )\n  obj2 = BoundingBox(obj)\n  call display( obj2, msg="test4")\nend subroutine test4\n\n\nsubroutine test5\n  type(BoundingBox_) :: obj\n  obj = boundingBox(RESHAPE([0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP], [2,3]))\n  call display(obj, "test5")\nend subroutine test5\n\n\nsubroutine test6\n  type(BoundingBox_) :: obj\n  type(BoundingBox_), pointer :: obj2\n\n  call initiate( obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )\n  obj2 => BoundingBox_Pointer(obj)\n  call display( obj2, msg="test6")\nend subroutine test6\n\n\nsubroutine test7\n  type(BoundingBox_), pointer :: obj\n  obj => BoundingBox_Pointer(nsd=3, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])\n  call display(obj, "test7")\nend subroutine test7\n\n\nend module test_BoundingBox\n\n\nprogram main\nuse test_BoundingBox\nimplicit none\n\ncall test1\ncall test2\ncall test3\ncall test4\ncall test5\ncall test6\ncall test7\n\nend program main\n'})})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(s,{...n})}):s(n)}const d={},r="Initiate",l={id:"BoundingBox/Initiate",title:"Initiate",description:"This routine initiates the bounding box.",source:"@site/docs/docs-api/BoundingBox/Initiate.md",sourceDirName:"BoundingBox",slug:"/BoundingBox/Initiate",permalink:"/docs-api/BoundingBox/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BoundingBox/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/BoundingBox/BoundingBox_"},next:{title:"IsEmpty",permalink:"/docs-api/BoundingBox/IsEmpty"}},u={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function N(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"initiate",children:"Initiate"}),"\n",(0,t.jsx)(e.p,{children:"This routine initiates the bounding box."}),"\n",(0,t.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE initiate(obj, nsd, lim)\n    CLASS(BoundingBox_), INTENT(INOUT) :: obj\n    !! Instance of bounding box\n    INTEGER(I4B), INTENT(IN) :: NSD\n    !! Spatial dimension\n    REAL(DFP), INTENT(IN) :: lim(6)\n    !! Extent of bounding box\n  END SUBROUTINE initiate\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE initiate(obj, Anotherobj)\n    CLASS(BoundingBox_), INTENT(INOUT) :: obj\n    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj\n  END SUBROUTINE initiate\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION BoundingBox(nsd, lim) RESULT(Ans)\n    TYPE(BoundingBox_) :: Ans\n    INTEGER(I4B), INTENT(IN) :: nsd\n    REAL(DFP), INTENT(IN) :: lim(6)\n  END FUNCTION BoundingBox\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION BoundingBox(Anotherobj) RESULT(Ans)\n    TYPE(BoundingBox_) :: Ans\n    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj\n  END FUNCTION BoundingBox\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION BoundingBox(xij) RESULT(Ans)\n    REAL(DFP), INTENT(IN) :: xij(:, :)\n    !! Nodal coordinates xij( 1:nsd, 1:tnodes )\n    TYPE(BoundingBox_) :: Ans\n    !!\n  END FUNCTION BoundingBox\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION BoundingBox_Pointer(nsd, lim) RESULT(Ans)\n    CLASS(BoundingBox_), POINTER :: Ans\n    INTEGER(I4B), INTENT(IN) :: nsd\n    REAL(DFP), INTENT(IN) :: lim(6)\n  END FUNCTION BoundingBox_Pointer\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION BoundingBox_Pointer(Anotherobj) RESULT(Ans)\n    CLASS(BoundingBox_), POINTER :: Ans\n    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj\n  END FUNCTION BoundingBox_Pointer\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n","\n","\n",(0,t.jsx)(a,{})]})}function E(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(N,{...n})}):N(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>d,a:()=>a});var t=o(67294);const i={},s=t.createContext(i);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);