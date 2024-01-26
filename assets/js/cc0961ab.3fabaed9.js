"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[79773],{79480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=t(85893),r=t(11151);function s(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\n\nTYPE(CSRSparsity_) :: obj, symobj\nTYPE(DOF_) :: dofobj\nINTEGER(I4B) :: i\n\nCALL Initiate( &\n  & obj=dofobj, &\n  & tNodes=[5], &\n  & names=[\'K\'], &\n  & spaceCompo=[1], &\n  & timeCompo=[1], &\n  & storageFMT=FMT_DOF)\n\nCALL Initiate( &\n  & obj, &\n  & ncol=(.tnodes.dofobj), &\n  & nrow=(.tNodes.dofobj),  &\n  & idof=dofobj, &\n  & jdof=dofobj)\n\nCALL setSparsity(obj=obj, row=1, col=[1, 3, 4], ivar=1, jvar=1)\nCALL setSparsity(obj=obj, row=2, col=[1, 2], ivar=1, jvar=1)\nCALL setSparsity(obj=obj, row=3, col=[2, 3], ivar=1, jvar=1)\nCALL setSparsity(obj=obj, row=4, col=[4, 5], ivar=1, jvar=1)\nCALL setSparsity(obj=obj, row=5, col=[1, 2, 5], ivar=1, jvar=1)\nCALL setSparsity(obj)\n\nCALL Display(obj, "obj = ")\nCALL GetSym(obj=obj, symobj=symobj, from="U")\nCALL Display(symobj, "symobj = ")\n\nCALL DEALLOCATE (dofobj)\nCALL DEALLOCATE (obj)\nCALL DEALLOCATE (symobj)\nEND PROGRAM main\n'})})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}const i={},c="GetSym",l={id:"CSRSparsity/GetSym",title:"GetSym",description:"Make sparse matrix symmetric.",source:"@site/docs/docs-api/CSRSparsity/GetSym.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/GetSym",permalink:"/docs-api/CSRSparsity/GetSym",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRSparsity/GetSym.md",tags:[],version:"current",lastUpdatedAt:1706190062,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetNNZ",permalink:"/docs-api/CSRSparsity/GetNNZ"},next:{title:"Initiate",permalink:"/docs-api/CSRSparsity/Initiate"}},d={},m=[];function j(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{TabItem:t,Tabs:s}=n;return t||f("TabItem",!0),s||f("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"getsym",children:"GetSym"}),"\n",(0,o.jsx)(n.p,{children:"Make sparse matrix symmetric."}),"\n",(0,o.jsx)(n.p,{children:"Calling example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"CALL GetSym(CSRSparsity_::obj, CSRSparsity_::symObj, char(1)::from)\n"})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsxs)(t,{value:"1",label:"\u0700 GetSym(obj, symobj, from)",default:!0,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetSym(obj, symObj, from)\n    TYPE(CSRSparsity_), INTENT(IN) :: obj\n    TYPE(CSRSparsity_), INTENT(INOUT) :: symObj\n    CHARACTER(1), INTENT(IN) :: from\n  END SUBROUTINE GetSym\nEND INTERFACE\n"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:'from="L"'}),", then lower part of csrmatrix is used"]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:'from="U"'}),", then upper part of csrmatrix is used"]}),"\n"]})]}),(0,o.jsx)(t,{value:"2",label:"\u0700 See Example",children:(0,o.jsx)(a,{})}),(0,o.jsx)(t,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsxs)(t,{value:"2",label:"GetSym(obj, from)",default:!0,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetSym(obj, from)\n    TYPE(CSRSparsity_), INTENT(INOUT) :: obj\n    CHARACTER(1), INTENT(IN) :: from\n  END SUBROUTINE GetSym\nEND INTERFACE\n"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:'from="L"'}),", then lower part of csrmatrix is used"]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:'from="U"'}),", then upper part of csrmatrix is used"]}),"\n"]})]}),(0,o.jsx)(t,{value:"1",label:"\u0700 See example",default:!0,children:(0,o.jsx)(n.p,{children:"TODO"})}),(0,o.jsx)(t,{value:"close",label:"\u21a2",default:!0})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);