"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65971],{67011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(85893),i=t(11151);const o={},c="SlaveDimTag",l={id:"DomainConnectivity/SlaveDimTag",title:"SlaveDimTag",description:"Returns (dim, entityNum) of master cell.",source:"@site/docs/docs-api/DomainConnectivity/SlaveDimTag.md",sourceDirName:"DomainConnectivity",slug:"/DomainConnectivity/SlaveDimTag",permalink:"/docs-api/DomainConnectivity/SlaveDimTag",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DomainConnectivity/SlaveDimTag.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SlaveCellNumber",permalink:"/docs-api/DomainConnectivity/SlaveCellNumber"},next:{title:"SlaveFacetLocalID",permalink:"/docs-api/DomainConnectivity/SlaveFacetLocalID"}},r={},s=[{value:"Interface1",id:"interface1",level:2},{value:"Interface2",id:"interface2",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"slavedimtag",children:"SlaveDimTag"}),"\n",(0,a.jsx)(n.p,{children:"Returns (dim, entityNum) of master cell."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"This routine takes local number of facet element."})}),"\n",(0,a.jsx)(n.h2,{id:"interface1",children:"Interface1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION SlaveDimTag(obj, localElement) RESULT(ans)\n    CLASS(DomainConnectivity_), INTENT(IN) :: obj\n    !! Mesh connectivity object\n    INTEGER(I4B), INTENT(IN) :: localElement\n    !! Facet element number\n    INTEGER(I4B) :: ans(2)\n    !! dim, entityNum\n  END FUNCTION SlaveDimTag\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(n.h2,{id:"interface2",children:"Interface2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION SlaveDimTag(obj, localElement) RESULT(ans)\n    CLASS(DomainConnectivity_), INTENT(IN) :: obj\n    !! Mesh connectivity data\n    INTEGER(I4B), INTENT(IN) :: localElement(:)\n    !! List of facet element numbers\n    INTEGER(I4B) :: ans(2, SIZE(localElement))\n    !! dim, entityNum\n  END FUNCTION SlaveDimTag\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var a=t(67294);const i={},o=a.createContext(i);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);