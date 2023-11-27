"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[8360],{7485:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var r=i(85893),t=i(11151);const c={},s="Initiate",a={id:"ReferenceTriangle/Initiate",title:"Initiate",description:"This routine contructs an instance of ReferenceTriangle_.",source:"@site/docs/docs-api/ReferenceTriangle/Initiate.md",sourceDirName:"ReferenceTriangle",slug:"/ReferenceTriangle/Initiate",permalink:"/docs-api/ReferenceTriangle/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceTriangle/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Incircle",permalink:"/docs-api/ReferenceTriangle/Incircle"},next:{title:"Inradius",permalink:"/docs-api/ReferenceTriangle/Inradius"}},l={},o=[{value:"Interface",id:"interface",level:2},{value:"ReferenceTriangle (Constructor)",id:"referencetriangle-constructor",level:2},{value:"ReferenceTriangle_Pointer",id:"referencetriangle_pointer",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(n.p,{children:"This routine contructs an instance of ReferenceTriangle_."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"User can specify the coordinates of the triangle."}),"\n",(0,r.jsx)(n.li,{children:"This routine will contruct a three node triangle."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE Initiate( obj, NSD, XiJ )\n  CLASS( ReferenceTriangle_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: NSD\n  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )\nEND SUBROUTINE Initiate  \n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"xij"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The shape of xij is ",(0,r.jsx)(n.code,{children:"[3,3]"})]}),"\n",(0,r.jsx)(n.li,{children:"If xij is not present, then we use the following coordinates:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"nsd"})}),(0,r.jsx)(n.p,{children:"Number of spatial dimension."})]}),"\n",(0,r.jsx)(n.h2,{id:"referencetriangle-constructor",children:"ReferenceTriangle (Constructor)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION ReferenceTriangle(NSD, XiJ) RESULT( obj )\n  INTEGER( I4B ), INTENT( IN ) :: NSD\n  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)\n  TYPE( ReferenceTriangle_ ) :: obj\nEND FUNCTION ReferenceTriangle\n"})}),"\n",(0,r.jsx)(n.h2,{id:"referencetriangle_pointer",children:"ReferenceTriangle_Pointer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION ReferenceTriangle_pointer(NSD, XiJ) RESULT( obj )\n  INTEGER( I4B ), INTENT( IN ) :: NSD\n  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)\n  CLASS( ReferenceTriangle_ ), POINTER :: obj\nEND FUNCTION ReferenceTriangle_pointer\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(67294);const t={},c=r.createContext(t);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);