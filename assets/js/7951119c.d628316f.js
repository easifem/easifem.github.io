"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[63001],{97830:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var t=s(85893),r=s(11151);const n={date:"2022-5-20",update:"2022-5-20",status:"stable",docs:"none",extpkgs:"none",category:["Example"],tags:["example","CSRSparsity/Initiate","CSRSparsity/SetSparsity","CSRSparsity/Display","CSRSparsity/Deallocate"]},i="CSRSparsity example 8",p={id:"CSRSparsity/CSRSparsity_test_8",title:"CSRSparsity example 8",description:"This example shows how to set sparsity pattern by using a graph matrix. A graph matrix is a two-d array of true and false. if graph( i, j ) is true then row-i and row-j are connected.",source:"@site/docs/docs-api/CSRSparsity/CSRSparsity_test_8.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/CSRSparsity_test_8",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_8",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRSparsity/CSRSparsity_test_8.md",tags:[{label:"example",permalink:"/docs-api/tags/example"},{label:"CSRSparsity/Initiate",permalink:"/docs-api/tags/csr-sparsity-initiate"},{label:"CSRSparsity/SetSparsity",permalink:"/docs-api/tags/csr-sparsity-set-sparsity"},{label:"CSRSparsity/Display",permalink:"/docs-api/tags/csr-sparsity-display"},{label:"CSRSparsity/Deallocate",permalink:"/docs-api/tags/csr-sparsity-deallocate"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{date:"2022-5-20",update:"2022-5-20",status:"stable",docs:"none",extpkgs:"none",category:["Example"],tags:["example","CSRSparsity/Initiate","CSRSparsity/SetSparsity","CSRSparsity/Display","CSRSparsity/Deallocate"]},sidebar:"tutorialSidebar",previous:{title:"CSRSparsity example 7",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_7"},next:{title:"CSRSparsity example 9",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_9"}},l={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"csrsparsity-example-8",children:"CSRSparsity example 8"}),"\n",(0,t.jsx)(e.p,{children:"This example shows how to set sparsity pattern by using a graph matrix. A graph matrix is a two-d array of true and false. if graph( i, j ) is true then row-i and row-j are connected."}),"\n",(0,t.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"[[CSRSparsity_]]"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nTYPE( CSRSparsity_) :: obj\nINTEGER( I4B ), PARAMETER :: nrow=5, ncol=5\nINTEGER( I4B ) :: i\nLOGICAL( LGT ) :: graph( nrow, ncol )\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"graph = .FALSE.\ngraph( 1,2 ) = .TRUE.\ngraph( 2,3 ) = .TRUE.\ngraph( 2,4 ) = .TRUE.\ngraph( 2,5 ) = .TRUE.\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"CALL Initiate( obj=obj, nrow=nrow, ncol=ncol )\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"CALL SetSparsity(obj, graph=graph)\nCALL SetSparsity(obj)\n"})}),"\n",(0,t.jsx)(e.p,{children:"Display the content of [[CSRSparsity_]]"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'CALL Display( obj, "obj" )\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(c,{...a})}):c(a)}},11151:(a,e,s)=>{s.d(e,{Z:()=>p,a:()=>i});var t=s(67294);const r={},n=t.createContext(r);function i(a){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function p(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:i(a.components),t.createElement(n.Provider,{value:e},a.children)}}}]);