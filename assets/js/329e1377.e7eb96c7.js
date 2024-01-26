"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41503,69950],{51230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>i});var s=a(85893),r=a(11151);const c={},l="Deallocate",n={id:"AbstractMeshField/Deallocate",title:"Deallocate",description:"This method dealllocates the data stored in AbstractMeshField.",source:"@site/docs/docs-api/AbstractMeshField/Deallocate.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Deallocate",permalink:"/docs-api/AbstractMeshField/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractMeshField/CheckEssentialParam"},next:{title:"Display",permalink:"/docs-api/AbstractMeshField/Display"}},o={},i=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,s.jsxs)(t.p,{children:["This method dealllocates the data stored in ",(0,s.jsx)(t.code,{children:"AbstractMeshField"}),"."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE AbstractMeshFieldDeallocate\n  MODULE SUBROUTINE Deallocate(obj)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE AbstractMeshFieldDeallocate\n"})}),"\n",(0,s.jsx)(t.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE AbstractMeshFieldDeallocate\n  MODULE SUBROUTINE Deallocate_Ptr_Vector(obj)\n    TYPE(AbstractMeshFieldPointer_), ALLOCATABLE :: obj(:)\n  END SUBROUTINE Deallocate_Ptr_Vector\nEND INTERFACE AbstractMeshFieldDeallocate\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},73040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=a(85893),r=a(11151),c=a(51230);const l={},n="Deallocate",o={id:"VectorMeshField/Deallocate",title:"Deallocate",description:"Inheritated from AbstractMeshField.",source:"@site/docs/docs-api/VectorMeshField/Deallocate.md",sourceDirName:"VectorMeshField",slug:"/VectorMeshField/Deallocate",permalink:"/docs-api/VectorMeshField/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/VectorMeshField/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/VectorMeshField/CheckEssentialParam"},next:{title:"Display",permalink:"/docs-api/VectorMeshField/Display"}},i={},d=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,s.jsxs)(t.p,{children:["Inheritated from ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"}),"."]}),"\n","\n","\n",(0,s.jsx)(c.default,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>l});var s=a(67294);const r={},c=s.createContext(r);function l(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);