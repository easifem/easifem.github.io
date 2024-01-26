"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[11258],{85911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(85893),i=n(11151);const o={},s="SetDomainFacetElement",c={id:"Domain/SetDomainFacetElement",title:"SetDomainFacetElement",description:"This routine sets the domain boundary element for cells and faces.",source:"@site/docs/docs-api/Domain/SetDomainFacetElement.md",sourceDirName:"Domain",slug:"/Domain/SetDomainFacetElement",permalink:"/docs-api/Domain/SetDomainFacetElement",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Domain/SetDomainFacetElement.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsNodePresent",permalink:"/docs-api/Domain/IsNodePresent"},next:{title:"SetFacetElementType",permalink:"/docs-api/Domain/SetFacetElementType"}},r={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"setdomainfacetelement",children:"SetDomainFacetElement"}),"\n",(0,a.jsx)(t.p,{children:"This routine sets the domain boundary element for cells and faces."}),"\n",(0,a.jsxs)(t.p,{children:["When we call ",(0,a.jsx)(t.a,{href:"/docs-api/Mesh/InitiateFacetElements",children:"InitiateFacetElements"})," for mesh, we can only identify boundary-facet-elements (i.e., boundary elements of the mesh). Moreover, when we call ",(0,a.jsx)(t.a,{href:"/docs-api/Mesh/InitiateFacetElements",children:"InitiateFacetElements"})," from mesh or domain, all the facet elements are tagged as ",(0,a.jsx)(t.code,{children:"DOMAIN_BOUNDARY_ELEMENT"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["However, some of these boundary facet-elements will be located at the domain\u2019s boundary. These facet elements are called ",(0,a.jsx)(t.code,{children:"DOMAIN_BOUNDARY_ELEMENT"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Some of the facet elements will be at located at the interface of two mesh regions, these facet elements are called ",(0,a.jsx)(t.code,{children:"BOUNDARY_ELEMENT"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["This method correctly differentiates between ",(0,a.jsx)(t.code,{children:"BOUNDARY_ELEMENT"}),"  and ",(0,a.jsx)(t.code,{children:"DOMAIN_BOUNDARY_ELEMENT"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["This routine needs facet element data information stored inside the mesh. Therefore, if for a mesh ",(0,a.jsx)(t.code,{children:"isFacetDataInitiated"})," is false, then this routine will make a call to ",(0,a.jsx)(t.a,{href:"/docs-api/Mesh/InitiateFacetElements",children:"InitiateFacetElements"})," for that mesh."]})}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetDomainFacetElement(obj)\n    CLASS(Domain_), INTENT(INOUT) :: obj\n  END SUBROUTINE SetDomainFacetElement\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);