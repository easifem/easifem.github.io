"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99422],{56716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=t(85893),l=t(11151);const i={},o="SlaveCellNumber",r={id:"DomainConnectivity/SlaveCellNumber",title:"SlaveCellNumber",description:"Returns slave cell number of given facet number.",source:"@site/docs/docs-api/DomainConnectivity/SlaveCellNumber.md",sourceDirName:"DomainConnectivity",slug:"/DomainConnectivity/SlaveCellNumber",permalink:"/docs-api/DomainConnectivity/SlaveCellNumber",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DomainConnectivity/SlaveCellNumber.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MasterFacetLocalID",permalink:"/docs-api/DomainConnectivity/MasterFacetLocalID"},next:{title:"SlaveDimTag",permalink:"/docs-api/DomainConnectivity/SlaveDimTag"}},c={},s=[{value:"Interface1",id:"interface1",level:2},{value:"Interface2",id:"interface2",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"slavecellnumber",children:"SlaveCellNumber"}),"\n",(0,a.jsx)(n.p,{children:"Returns slave cell number of given facet number."}),"\n",(0,a.jsx)(n.p,{children:"If the returned cell number is zero, then it means that facet element does not have a slave cell."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"This routine takes local number of facet element."})}),"\n",(0,a.jsx)(n.h2,{id:"interface1",children:"Interface1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION SlaveCellNumber(obj, localElement) RESULT(ans)\n    CLASS(DomainConnectivity_), INTENT(IN) :: obj\n    !! Mesh connectivity data\n    INTEGER(I4B), INTENT(IN) :: localElement\n    !! Facet element number\n    INTEGER(I4B) :: ans\n    !! Cell number\n  END FUNCTION SlaveCellNumber\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(n.h2,{id:"interface2",children:"Interface2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION SlaveCellNumber(obj, localElement) RESULT(ans)\n    CLASS(DomainConnectivity_), INTENT(IN) :: obj\n    !! Mesh connectivity data\n    INTEGER(I4B), INTENT(IN) :: localElement(:)\n    !! List of facet element numbers\n    INTEGER(I4B) :: ans(SIZE(localElement))\n    !! List of cell element numbers\n  END FUNCTION SlaveCellNumber\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const l={},i=a.createContext(l);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);