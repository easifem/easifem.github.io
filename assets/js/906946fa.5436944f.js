"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30013],{96148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var r=t(85893),o=t(11151);function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This example shows the usage of ",(0,r.jsx)(n.code,{children:".tDOF."})," operator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE( DOF_ ) :: obj\n    CALL Initiate( obj, tNodes=[10], names=[\"U\"], spaceCompo=[3],  &\n      & timeCompo=[1], storageFMT = FMT_DOF )\n    CALL OK( (.tDOF. obj) .eq. 3, '.tDOF. obj: ' )\n    CALL OK( (obj .tDOF. 1) .eq. 3,   'obj .tDOF. 1: ' )\n    CALL OK( (obj .tDOF. 'U') .eq. 3, 'obj .tDOF. \"U\": ' )\n    CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const i={},d="tDOF",c={id:"DOF/tDOF",title:"tDOF",description:"This method returns total degrees of freedom.",source:"@site/docs/docs-api/DOF/tDOF.md",sourceDirName:"DOF",slug:"/DOF/tDOF",permalink:"/docs-api/DOF/tDOF",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DOF/tDOF.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TimeComponents",permalink:"/docs-api/DOF/TimeComponents"},next:{title:"tNames",permalink:"/docs-api/DOF/tNames"}},l={},f=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tdof",children:"tDOF"}),"\n",(0,r.jsx)(n.p,{children:"This method returns total degrees of freedom."}),"\n",(0,r.jsx)(n.p,{children:"This operator returns the total number of degrees of freedom in a physical variable."}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsxs)(n.p,{children:["Getting total degrees of freedom in ",(0,r.jsx)(n.code,{children:"DOF_"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"ans= .tdof. obj\n"})}),"\n",(0,r.jsx)(n.p,{children:"Getting total degrees of freedom of a physical name"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'ans= obj .tdof. "U"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Getting the total number of degrees of freedom of a physical variable by number."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"ans= obj .tdof. 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION dof_tdof1(obj) RESULT(ans)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B) :: ans\n  END FUNCTION dof_tdof1\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.p,{children:"This method returns the total number of degrees of freedom."}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE PURE FUNCTION dof_tdof2(obj, Name) RESULT(ans)\n    CLASS(DOF_), INTENT(IN) :: obj\n    CHARACTER(1), INTENT(IN) :: Name\n    INTEGER(I4B) :: ans\n  END FUNCTION dof_tdof2\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function returns the total number of degrees of freedom in a physical variable. The physical variable is specified by using its name."}),"\n",(0,r.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION dof_tdof3(obj, ivar) RESULT(ans)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B) :: ans\n  END FUNCTION dof_tdof3\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function returns the total number of degrees of freedom in a physical variable. The physical variable is specified by using its number."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,r.jsx)(s,{})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);