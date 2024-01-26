"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97244],{80745:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(85893),t=n(11151);const i={},s="Measure_Simplex_Quadrangle",u={id:"ReferenceQuadrangle/Measure_Simplex_Quadrangle",title:"Measure_Simplex_Quadrangle",description:"This function returns the area of linear quadrangle.",source:"@site/docs/docs-api/ReferenceQuadrangle/Measure_Simplex_Quadrangle.md",sourceDirName:"ReferenceQuadrangle",slug:"/ReferenceQuadrangle/Measure_Simplex_Quadrangle",permalink:"/docs-api/ReferenceQuadrangle/Measure_Simplex_Quadrangle",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceQuadrangle/Measure_Simplex_Quadrangle.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/ReferenceQuadrangle/Initiate"},next:{title:"QuadArea2D",permalink:"/docs-api/ReferenceQuadrangle/QuadArea2D"}},l={},d=[{value:"Interface",id:"interface",level:2}];function c(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"measure_simplex_quadrangle",children:"Measure_Simplex_Quadrangle"}),"\n",(0,r.jsx)(a.p,{children:"This function returns the area of linear quadrangle."}),"\n",(0,r.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"MODULE PURE FUNCTION Measure_Simplex_Quadrangle( RefElem, XiJ ) RESULT( Ans )\n  CLASS( ReferenceQuadrangle_ ), INTENT( IN ) :: RefElem\n  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )\n  REAL( DFP ) :: Ans\nEND FUNCTION Measure_Simplex_Quadrangle\n"})})]})}function o(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>u,a:()=>s});var r=n(67294);const t={},i=r.createContext(t);function s(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function u(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);