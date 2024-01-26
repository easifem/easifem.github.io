"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[40912,99164],{36465:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=a(85893),s=a(11151);const i={id:"Set",aliases:["Set"],tags:[],sidebar_position:4},r="Set",c={id:"AbstractMeshField/Set",title:"Set",description:"Set data in AbstractMeshField_.",source:"@site/docs/docs-api/AbstractMeshField/Set.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Set",permalink:"/docs-api/AbstractMeshField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Set.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:4,frontMatter:{id:"Set",aliases:["Set"],tags:[],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/AbstractMeshField/Initiate"},next:{title:"Add",permalink:"/docs-api/AbstractMeshField/Add"}},d={},o=[{value:"Interface 1 (Set by using FEVariable)",id:"interface-1-set-by-using-fevariable",level:2},{value:"Interface 2 (Set by using UserFunction)",id:"interface-2-set-by-using-userfunction",level:2},{value:"Interface 3 (Set by using Materials)",id:"interface-3-set-by-using-materials",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,n.jsxs)(t.p,{children:["Set data in ",(0,n.jsx)(t.code,{children:"AbstractMeshField_"}),"."]}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,n.jsx)(t.h2,{id:"interface-1-set-by-using-fevariable",children:"Interface 1 (Set by using FEVariable)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set(obj, globalElement, fevar)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement\n    TYPE(FEVariable_), INTENT(IN) :: fevar\n  END SUBROUTINE Set\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"interface-2-set-by-using-userfunction",children:"Interface 2 (Set by using UserFunction)"}),"\n",(0,n.jsxs)(t.p,{children:["We can use ",(0,n.jsx)(t.a,{href:"/docs-api/AbstractMeshField/Set",children:"Set"})," method and the ",(0,n.jsx)(t.a,{href:"/docs-api/UserFunction",children:"UserFunction"})," to set the values in ",(0,n.jsx)(t.code,{children:"AbstractMeshField_"}),". The interface of this method is given below."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set(obj, func, dom, timeVec)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    CLASS(UserFunction_), INTENT(INOUT) :: func\n    CLASS(Domain_), INTENT(INOUT) :: dom\n    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)\n  END SUBROUTINE Set\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"interface-3-set-by-using-materials",children:"Interface 3 (Set by using Materials)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set3(obj, material, name, dom, timeVec)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    CLASS(AbstractMaterial_), INTENT(INOUT) :: material\n    !! Abstract material\n    CHARACTER(*), INTENT(IN) :: name\n    !! name of the AbstractMeshField\n    CLASS(Domain_), INTENT(INOUT) :: dom\n    !! domain to access the node coord\n    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)\n    !! time vector when the var type is `Time` or `SpaceTime`\n  END SUBROUTINE Set3\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},21188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>S,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(85893),s=a(11151),i=a(36465);const r={},c="Set",d={id:"STScalarMeshField/Set",title:"Set",description:"Inherited from AbstractMeshField",source:"@site/docs/docs-api/STScalarMeshField/Set.md",sourceDirName:"STScalarMeshField",slug:"/STScalarMeshField/Set",permalink:"/docs-api/STScalarMeshField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STScalarMeshField/Set.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/STScalarMeshField/Initiate"},next:{title:"Shape",permalink:"/docs-api/STScalarMeshField/Shape"}},o={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,n.jsxs)(t.p,{children:["Inherited from ",(0,n.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"})]}),"\n","\n","\n",(0,n.jsx)(i.default,{})]})}function S(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var n=a(67294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);