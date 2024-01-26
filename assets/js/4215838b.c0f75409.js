"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[19261],{71221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(85893),a=n(11151);const r={},o=void 0,i={id:"STElemshapeData/setMethod",title:"setMethod",description:"! testing setmethod",source:"@site/docs/docs-api/STElemshapeData/setMethod.md",sourceDirName:"STElemshapeData",slug:"/STElemshapeData/setMethod",permalink:"/docs-api/STElemshapeData/setMethod",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STElemshapeData/setMethod.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STElemshapeData_test_2",permalink:"/docs-api/STElemshapeData/STElemshapeData_test_2"},next:{title:"STMassMatrix",permalink:"/docs-api/STMassMatrix/"}},l={},d=[];function c(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"! testing setmethod"}),"\n",(0,s.jsx)(t.p,{children:"program main\nuse easifem\nimplicit none"}),"\n",(0,s.jsx)(t.p,{children:"type( elemshapedata_ ) :: obj\ntype( quadraturepoint_ ) :: quad\ntype( referencetriangle_ ) :: refelem\ninteger( i4b ) :: nsd, order"}),"\n",(0,s.jsx)(t.p,{children:"nsd = 2; order = 1; refelem = ReferenceTriangle( nsd = nsd )\nquad = GaussLegendreQuadrature( refelem = refelem, order = order )"}),"\n",(0,s.jsx)(t.p,{children:"call initiate( obj = obj, quad = quad, refelem = refelem, &\n& ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )"}),"\n",(0,s.jsx)(t.p,{children:"! ! set thickness\n! block\n!   real( dfp ) :: thickness( 3 )\n!   thickness = 2; call display( thickness, 'thickness' )\n!   call setThickness( obj, thickness )\n!   call display( obj, 'obj' )\n! end block"}),"\n",(0,s.jsx)(t.p,{children:"! ! test\n! block\n!   real( dfp ) :: xiJ( nsd, 3 )\n!   xiJ = reshape( [1, 0, 0, 1, 1, 1], [nsd,3] )\n!   call display( 'setBarycentricCoord()')\n!   call setBarycentricCoord( obj, xiJ )\n!   call display( obj, 'obj' )\n! end block"}),"\n",(0,s.jsx)(t.p,{children:"! ! test\n! block\n!   real( dfp ) :: xiJ( nsd, 3 )\n!   xiJ = reshape( [1, 0, 0, 1, 1, 1], [nsd,3] )\n!   call display( 'setJacobian()')\n!   call setJacobian( obj, xiJ )\n!   call setJs( obj )\n!   call display( obj, 'obj' )\n! end block\nend program main"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);