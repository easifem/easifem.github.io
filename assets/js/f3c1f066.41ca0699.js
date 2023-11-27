"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97034],{17641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(85893),a=t(11151);const r={},o="Initiate",l={id:"LinSolverLis/Initiate",title:"Initiate",description:"Initiate an instance of LinSolver.",source:"@site/docs/docs-api/LinSolverLis/Initiate.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/Initiate",permalink:"/docs-api/LinSolverLis/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolverLis/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/LinSolverLis/Import"},next:{title:"Structure",permalink:"/docs-api/LinSolverLis/LinSolverLis_"}},c={},s=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsx)(n.p,{children:"Initiate an instance of LinSolver."}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Initiate(obj, param)\n    CLASS(LinSolver_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["The following code explains how to construct ",(0,i.jsx)(n.code,{children:"LinSolver"})," using ",(0,i.jsx)(n.code,{children:"initiate"})," method"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  type( LinSolver_ ) :: obj\n  type( ParameterList_ ) :: param\n  integer( i4b ) :: ierr, tnodes\n  call display( "TESTING INITIATE AND Deallocate" )\n  call FPL_INIT(); call param%initiate()\n  call setLinSolverParam( param=param, solverName=LIS_CG,&\n    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE., &\n    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n  call obj%initiate(param)\n  call obj%Display("LinSolver : ")\n  call obj%Deallocate()\n  call param%Deallocate(); call FPL_FINALIZE()\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);