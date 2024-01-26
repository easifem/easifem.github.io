"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94273],{88671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var a=t(85893),i=t(11151);const s={title:"InitiateFacetElements"},c=void 0,o={id:"Mesh/InitiateFacetElements",title:"InitiateFacetElements",description:"This routine initiates the facet element data, such as BoundaryFacetData and InternalFacetData.",source:"@site/docs/docs-api/Mesh/InitiateFacetElements.md",sourceDirName:"Mesh",slug:"/Mesh/InitiateFacetElements",permalink:"/docs-api/Mesh/InitiateFacetElements",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Mesh/InitiateFacetElements.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"InitiateFacetElements"},sidebar:"tutorialSidebar",previous:{title:"InitiateExtraNodetoNodes",permalink:"/docs-api/Mesh/InitiateExtraNodeToNodes"},next:{title:"InitiateNodeToElements",permalink:"/docs-api/Mesh/InitiateNodeToElements"}},l={},r=[{value:"Interface",id:"interface",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This routine initiates the facet element data, such as ",(0,a.jsx)(n.a,{href:"/docs-api/Mesh/BoundaryFacetData_",children:(0,a.jsx)(n.code,{children:"BoundaryFacetData"})})," and ",(0,a.jsx)(n.a,{href:"/docs-api/Mesh/InternalFacetData_",children:(0,a.jsx)(n.code,{children:"InternalFacetData_"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This routine needs the following information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ElementToElements"}),", if this information is not available, then it calls ",(0,a.jsx)(n.a,{href:"/docs-api/Mesh/InitiateElementToElements",children:"InitiateElementToElements"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"BoundaryData"}),", if this information is not available, then it calls ",(0,a.jsx)(n.a,{href:"/docs-api/Mesh/InitiateBoundaryData",children:"InitiateBoundaryData"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It makes following data structures:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs-api/Mesh/InternalFacetData_",children:"InternalFacetData_"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs-api/Mesh/BoundaryFacetData_",children:"BoundaryFacetData_"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"FacetElementType"})," field in ",(0,a.jsx)(n.a,{href:"/docs-api/Mesh/Mesh_",children:"Mesh_"})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This method cannot differentiate between a ",(0,a.jsx)(n.code,{children:"BOUNDARY_ELEMENT"}),", which is a boundary-facet-element at the mesh-boundary, and ",(0,a.jsx)(n.code,{children:"DOMAIN_BOUNDARY_ELEMENT"}),", which is facet element at the domain\u2019s boundary."]}),"\n",(0,a.jsx)(n.li,{children:"This is because, at this point we only know that a boundary-facet-element is a domain-boundary-element, as we have no information about the neighboring mesh."}),"\n",(0,a.jsxs)(n.li,{children:["Therefore, all ",(0,a.jsx)(n.code,{children:"boundaryFacet"})," elements, at this level, are of type ",(0,a.jsx)(n.code,{children:"DOMAIN_BOUNDARY_ELEMENT"}),". This is because every ",(0,a.jsx)(n.code,{children:"DOMAIN_BOUNDARY_ELEMENT"})," is a ",(0,a.jsx)(n.code,{children:"BOUNDARY_ELEMENT"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["This information can be corrected only when we call ",(0,a.jsx)(n.a,{href:"/docs-api/Domain/SetDomainFacetElement",children:(0,a.jsx)(n.code,{children:"SetDomainFacetElement"})})," from ",(0,a.jsx)(n.a,{href:"/docs-api/Domain/Domain_",children:"Domain_"})," class."]}),"\n"]})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If we call ",(0,a.jsx)(n.a,{href:"/docs-api/Domain/SetDomainFacetElement",children:(0,a.jsx)(n.code,{children:"SetDomainFacetElement"})})," then we do not have to worry about the above point."]})}),"\n",(0,a.jsx)(n.p,{children:"Please check documentation of following methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs-api/Domain/SetDomainFacetElement",children:(0,a.jsx)(n.code,{children:"SetDomainFacetElement"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs-api/Domain/SetMeshFacetElement",children:(0,a.jsx)(n.code,{children:"SetMeshFacetElement"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs-api/Domain/SetFacetElementType",children:(0,a.jsx)(n.code,{children:"SetFacetElementType"})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE InitiateFacetElements(obj)\n    CLASS(Mesh_), INTENT(INOUT) :: obj\n  END SUBROUTINE InitiateFacetElements\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var a=t(67294);const i={},s=a.createContext(i);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);