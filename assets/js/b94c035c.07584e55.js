"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[61657],{42293:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});var r=t(85893),s=t(11151);const l={},a="Structure",n={id:"SolidMaterial/SolidMaterial_",title:"Structure",description:"SolidMaterial is a subclass of AbstractMaterial class. Its purpose is to handle solid materials, like steel, brass, copper, among others.",source:"@site/docs/docs-api/SolidMaterial/SolidMaterial_.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/SolidMaterial_",permalink:"/docs-api/SolidMaterial/SolidMaterial_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SolidMaterial/SolidMaterial_.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetStressStrainModelPointer",permalink:"/docs-api/SolidMaterial/GetStressStrainModelPointer"},next:{title:"SortUtility",permalink:"/docs-api/SortUtility/"}},o={},d=[];function c(e){const i={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/docs-api/SolidMaterial/SolidMaterial_",children:"SolidMaterial_"})," is a subclass of ",(0,r.jsx)(i.a,{href:"/docs-api/AbstractMaterial",children:"AbstractMaterial"})," class. Its purpose is to handle solid materials, like steel, brass, copper, among others."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SolidMaterial_"})," also encapsulates the abstract model for defining the material constitutive behavior. The structure of ",(0,r.jsx)(i.code,{children:"SolidMaterial_"})," is given below."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractMaterial_) :: SolidMaterial_\n  CLASS(AbstractSolidMechanicsModel_), POINTER :: stressStrainModel => NULL()\n    !! Pointer to stress strain material behavior of solids\nEND TYPE\n"})}),"\n",(0,r.jsxs)(i.p,{children:["The module ",(0,r.jsx)(i.code,{children:"SolidMaterial_Class"})," defines following methods:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"DEALLOCATE"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"SetSolidMaterialParam"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"AddSolidMaterial"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["In addition the class ",(0,r.jsx)(i.code,{children:"SolidMaterial_"})," defines following methods."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"CheckEssentialParam"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"Initiate"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"Deallocate"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"Import"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"Export"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"Display"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"GetStressStrainModelPointer"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"GetPrefix"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>n,a:()=>a});var r=t(67294);const s={},l=r.createContext(s);function a(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);