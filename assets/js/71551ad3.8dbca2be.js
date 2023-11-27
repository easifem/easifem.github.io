"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[93324],{33647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(85893),r=t(11151);const o={},a="Measure_Simplex_Point",s={id:"ReferencePoint/Measure_Simplex_Point",title:"Measure_Simplex_Point",description:"This function returns the measure of point element.",source:"@site/docs/docs-api/ReferencePoint/Measure_Simplex_Point.md",sourceDirName:"ReferencePoint",slug:"/ReferencePoint/Measure_Simplex_Point",permalink:"/docs-api/ReferencePoint/Measure_Simplex_Point",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferencePoint/Measure_Simplex_Point.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/ReferencePoint/Initiate"},next:{title:"Point_Quality",permalink:"/docs-api/ReferencePoint/Point_Quality"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"measure_simplex_point",children:"Measure_Simplex_Point"}),"\n",(0,i.jsx)(n.p,{children:"This function returns the measure of point element."}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION Measure_Simplex_Point( RefElem, XiJ ) RESULT( Ans )\n  CLASS( ReferencePoint_ ), INTENT( IN ) :: RefElem\n  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )\n  REAL( DFP ) :: Ans\nEND FUNCTION Measure_Simplex_Point\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:' type( ReferencePoint_ ) :: obj\n real( dfp ) :: xij( 3, 1 )\n call random_number( xij )\n call initiate( obj=obj, NSD=3, XiJ=xij )\n call display( MeasureSimplex(obj, obj%xij), "Measure :: ")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);