"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[88534],{73877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(85893),i=t(11151);const s={},r=void 0,o={id:"STElemshapeData/STElemshapeData_test_2",title:"STElemshapeData_test_2",description:"program main",source:"@site/docs/docs-api/STElemshapeData/STElemshapeData_test_2.md",sourceDirName:"STElemshapeData",slug:"/STElemshapeData/STElemshapeData_test_2",permalink:"/docs-api/STElemshapeData/STElemshapeData_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STElemshapeData/STElemshapeData_test_2.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STElemshapeData example 1",permalink:"/docs-api/STElemshapeData/STElemshapeData_test_1"},next:{title:"setMethod",permalink:"/docs-api/STElemshapeData/setMethod"}},l={},d=[];function p(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"program main\n!! This program shows how to set local data in\n!! space-time element shape data"}),"\n",(0,a.jsx)(n.p,{children:"use easifem\nimplicit none"}),"\n",(0,a.jsx)(n.p,{children:"!line order 1\ntype( stelemshapedata_ ), allocatable :: obj( : )\ntype( elemshapedata_ ) :: elemsd\ntype( quadraturepoint_ ) :: quad\nclass( referenceElement_ ), pointer :: refelem\ninteger( i4b ) :: ii, NNT, nsd, nns\nreal( dfp ) :: tiJ( 1, 2 )\nreal( dfp ), allocatable :: xiJ(:,:), xiJa(:,:,:)"}),"\n",(0,a.jsx)(n.p,{children:"ALLOCATE( ReferenceLine_ :: refelem )\nrefelem = ReferenceLine( nsd = 1 )\n!! Note nsd should be 1 when making reference element for time domain"}),"\n",(0,a.jsx)(n.p,{children:"!> higher order lagrange element can be obtained, however it works on\n! static type only, therefore, we need to use select type statment.\n! NNT denotes number of nodes in time\nNNT  = 2\nSELECT TYPE( refelem )\nTYPE IS ( ReferenceLine_  )\nrefelem = LagrangeElement( refelem = refelem, order = NNT-1 )\nEND SELECT"}),"\n",(0,a.jsx)(n.p,{children:"quad = GaussLegendreQuadrature(refelem=refelem,order=1 )\ncall display(quad, 'quadrature points :: ')"}),"\n",(0,a.jsx)(n.p,{children:"!> Setting shape function for time\n! This sets up T, dTdTheta, Jt, Wt, Theta\n! tiJ denotes the nodal values of time\ntiJ(1,:) = [-1.0,1.0]\ncall initiate( &\n& obj = elemsd, quad = quad, refelem = refelem, &\n& ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation, &\n& XiJ = tiJ )"}),"\n",(0,a.jsx)(n.p,{children:"!> allocating stelemshape data\n! This will extract time shape data info from elemsd and put it inside\n! obj(i)%T, obj(i)%dTdTheta, obj(i)%Jt, obj(i)%Wt, obj(i)%Theta\ncall initiate( obj = obj, elemsd = elemsd )"}),"\n",(0,a.jsx)(n.p,{children:"!> Generating shape functions on space element\n! Here we are selecting a triangular element\nnsd = 2; nns = 3\nALLOCATE( ReferenceTriangle_ :: refelem )\nrefelem = ReferenceTriangle( nsd = nsd )\nquad = GaussLegendreQuadrature( refelem=refelem, order = 1 )"}),"\n",(0,a.jsx)(n.p,{children:"!> Setting local data of shape function in space\n! This will set N, dNdXi, Ws, Quad\ndo ii = 1, size( obj )\ncall initiate( &\n& obj = obj( ii ), quad = quad, refelem = refelem, &\n& ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )\nend do"}),"\n",(0,a.jsx)(n.p,{children:'!> Setting the remaining data in obj, before data we need to construct\n! space time element.\nallocate( xiJ( nsd, nns ), xiJa( nsd, nns, nnt ) )\nxiJ = reshape( [0,0,1,0,0,1], [nsd,nns] )\ndo ii=1,nnt; xiJa(:,:,ii)=xiJ; end do\ndo ii = 1, size(obj)\ncall setValue(obj(ii), xiJa )\ncall display( obj( ii ), "ii :: "// str( ii ) )\nend do'}),"\n",(0,a.jsx)(n.p,{children:"end program"})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);