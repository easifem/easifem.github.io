"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15743],{99985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(85893),n=a(11151);const r={sidebar_position:2},o="SetSolidMaterialParam",s={id:"SolidMaterial/SetSolidMaterialParam",title:"SetSolidMaterialParam",description:"Set the parameters to initiate an instance of SolidMaterial_.",source:"@site/docs/docs-api/SolidMaterial/SetSolidMaterialParam.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/SetSolidMaterialParam",permalink:"/docs-api/SolidMaterial/SetSolidMaterialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SolidMaterial/SetSolidMaterialParam.md",tags:[],version:"current",lastUpdatedAt:1706189999,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SolidMaterial",permalink:"/docs-api/SolidMaterial/"},next:{title:"Initiate",permalink:"/docs-api/SolidMaterial/Initiate"}},d={},l=[{value:"Interface",id:"interface",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"setsolidmaterialparam",children:"SetSolidMaterialParam"}),"\n",(0,i.jsxs)(t.p,{children:["Set the parameters to initiate an instance of ",(0,i.jsx)(t.code,{children:"SolidMaterial_"}),"."]}),"\n",(0,i.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetSolidMaterialParam(param, name, stressStrainModel)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    !! It is the name of the material\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: stressStrainModel\n    !! Name of the child-class of `AbstractSolidMechanicsModel_`\n    !! For example `LinearElasticModel`\n  END SUBROUTINE SetSolidMaterialParam\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.p,{children:"Name of the solid material."})]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.code,{children:"stressStrainModel"})}),(0,i.jsx)(t.p,{children:"name of the stress-strain model."})]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var i=a(67294);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);