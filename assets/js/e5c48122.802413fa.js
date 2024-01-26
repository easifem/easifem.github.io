"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50860],{23917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var o=t(85893),i=t(11151);const s={},c="Set",d={id:"AbstractBC/Set",title:"Set",description:"Set the value of boundary condition.",source:"@site/docs/docs-api/AbstractBC/Set.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Set",permalink:"/docs-api/AbstractBC/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/Set.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsUseFunction",permalink:"/docs-api/AbstractBC/IsUseFunction"},next:{title:"AbstractBasis",permalink:"/docs-api/AbstractBasis/"}},a={},r=[{value:"Interface",id:"interface",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,o.jsx)(n.p,{children:"Set the value of boundary condition."}),"\n",(0,o.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE Set\n  MODULE SUBROUTINE bc_Set(obj, constantNodalValue, spaceNodalValue, &\n    & timeNodalValue, spaceTimeNodalValue, userFunction)\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    REAL(DFP), OPTIONAL, INTENT(IN) :: constantNodalValue\n    REAL(DFP), OPTIONAL, INTENT(IN) :: spaceNodalValue(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: timeNodalValue(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: spaceTimeNodalValue(:, :)\n    TYPE(UserFunction_), POINTER, OPTIONAL, INTENT(IN) :: userFunction\n  END SUBROUTINE bc_Set\nEND INTERFACE Set\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.code,{children:"constantNodalValue"})}),(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"AbstractBC_"})," is configured for ",(0,o.jsx)(n.code,{children:"nodalValueType=Constant"}),", we must provide ",(0,o.jsx)(n.code,{children:"constantNodalValue"}),"."]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.code,{children:"spaceNodalValue"})}),(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"AbstractBC_"})," is configured for ",(0,o.jsx)(n.code,{children:"nodalValueType=Space"}),", we must provide ",(0,o.jsx)(n.code,{children:"spaceNodalValue"}),"."]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.code,{children:"timeNodalValue"})}),(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"AbstractBC_"})," is configured for ",(0,o.jsx)(n.code,{children:"nodalValueType=Time"}),", we must provide ",(0,o.jsx)(n.code,{children:"timeNodalValue"}),"."]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.code,{children:"spaceTimeNodalValue"})}),(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"AbstractBC_"})," is configured for ",(0,o.jsx)(n.code,{children:"nodalValueType=SpaceTime"}),", we must provide ",(0,o.jsx)(n.code,{children:"spaceTimeNodalValue"}),"."]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.code,{children:"userFunction"})}),(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"AbstractBC_"})," is configured for ",(0,o.jsx)(n.code,{children:"isUserFunction=True"}),", we must provide ",(0,o.jsx)(n.code,{children:"userFunction"}),"."]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var o=t(67294);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);