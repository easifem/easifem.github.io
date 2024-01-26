"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[79791,11543],{55819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(85893),s=t(11151);const i={},a="Shape",o={id:"AbstractMeshField/Shape",title:"Shape",description:"Returns the shape of the data in each element.",source:"@site/docs/docs-api/AbstractMeshField/Shape.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Shape",permalink:"/docs-api/AbstractMeshField/Shape",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Shape.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractMeshField/Import"},next:{title:"Size",permalink:"/docs-api/AbstractMeshField/Size"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"shape",children:"Shape"}),"\n",(0,r.jsx)(n.p,{children:"Returns the shape of the data in each element."}),"\n",(0,r.jsx)(n.p,{children:"For a scalar field following rules are defined."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=Constant"}),", ",(0,r.jsx)(n.code,{children:"Shape"})," function returns a one dimensional vector."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=Space | Time"}),", This function returns a one dimensional vector."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=SpaceTime"}),", this function returns a two dimensional vector."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For a vector field following rules are defined."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=Constant"}),", ",(0,r.jsx)(n.code,{children:"Shape"})," function returns a one dimensional vector."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=Space | Time"}),", This function returns a two dimensional vector."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=SpaceTime"}),", this function returns a three dimensional vector."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For a tensor field following rules are defined."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=Constant"}),", ",(0,r.jsx)(n.code,{children:"Shape"})," function returns a two dimensional vector."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=Space | Time"}),", This function returns a three dimensional vector."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"varType=SpaceTime"}),", this function returns a four dimensional vector."]}),"\n"]}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Shape(obj) RESULT(ans)\n    CLASS(AbstractMeshField_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION Shape\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},39040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(85893),s=t(11151),i=t(55819);const a={id:"Shape",aliases:["Shape"],tags:[]},o="Shape",c={id:"STVectorMeshField/Shape",title:"Shape",description:"Inherited from AbstractMeshField",source:"@site/docs/docs-api/STVectorMeshField/Shape.md",sourceDirName:"STVectorMeshField",slug:"/STVectorMeshField/Shape",permalink:"/docs-api/STVectorMeshField/Shape",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STVectorMeshField/Shape.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"Shape",aliases:["Shape"],tags:[]},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/STVectorMeshField/Set"},next:{title:"Size",permalink:"/docs-api/STVectorMeshField/Size"}},d={},l=[];function h(e){const n={a:"a",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"shape",children:"Shape"}),"\n",(0,r.jsxs)(n.p,{children:["Inherited from ",(0,r.jsx)(n.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"})]}),"\n","\n","\n",(0,r.jsx)(i.default,{})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);