"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[27207],{74474:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var t=s(85893),r=s(11151);const n={date:"2022-5-20",update:"2022-5-20",status:"stable",docs:"none",extpkgs:"none",category:["Example"],tags:["example","CSRSparsity/Initiate","CSRSparsity/SetSparsity","CSRSparsity/Display","CSRSparsity/Deallocate","DOF/Initiate"]},i="CSRSparsity example 3",o={id:"CSRSparsity/CSRSparsity_test_3",title:"CSRSparsity example 3",description:"This example shows how to set sparsity pattern in an instance of [[CSRSparsity]]. The storage pattern is FMTDOF, and matrix is block matrix. Following methods are tested.",source:"@site/docs/docs-api/CSRSparsity/CSRSparsity_test_3.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/CSRSparsity_test_3",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRSparsity/CSRSparsity_test_3.md",tags:[{label:"example",permalink:"/docs-api/tags/example"},{label:"CSRSparsity/Initiate",permalink:"/docs-api/tags/csr-sparsity-initiate"},{label:"CSRSparsity/SetSparsity",permalink:"/docs-api/tags/csr-sparsity-set-sparsity"},{label:"CSRSparsity/Display",permalink:"/docs-api/tags/csr-sparsity-display"},{label:"CSRSparsity/Deallocate",permalink:"/docs-api/tags/csr-sparsity-deallocate"},{label:"DOF/Initiate",permalink:"/docs-api/tags/dof-initiate"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{date:"2022-5-20",update:"2022-5-20",status:"stable",docs:"none",extpkgs:"none",category:["Example"],tags:["example","CSRSparsity/Initiate","CSRSparsity/SetSparsity","CSRSparsity/Display","CSRSparsity/Deallocate","DOF/Initiate"]},sidebar:"tutorialSidebar",previous:{title:"CSRSparsity example 2",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_2"},next:{title:"CSRSparsity example 4",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_4"}},l={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"csrsparsity-example-3",children:"CSRSparsity example 3"}),"\n",(0,t.jsxs)(a.p,{children:["This example shows how to set sparsity pattern in an instance of [[CSRSparsity_]]. The storage pattern is ",(0,t.jsx)(a.code,{children:"FMT_DOF"}),", and matrix is block matrix. Following methods are tested."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"[[CSRSparsity_#Initiate]]"}),"\n",(0,t.jsx)(a.li,{children:"[[CSRSparsity_#Display]]"}),"\n",(0,t.jsx)(a.li,{children:"[[CSRSparsity_#Deallocate]]"}),"\n",(0,t.jsx)(a.li,{children:"[[CSRSparsity_#SetSparsity]]"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"[[CSRSparsity_]]"}),"\n",(0,t.jsx)(a.li,{children:"[[DOF_]]"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\n"})}),"\n",(0,t.jsx)(a.p,{children:'!!! note "Declare variables"'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  TYPE( CSRSparsity_ ) :: obj\n  TYPE( DOF_ ) :: dofobj\n  INTEGER( I4B ) :: i\n"})}),"\n",(0,t.jsx)(a.p,{children:'!!! note ""\nMake an instance of [[DOF_]]. This object contains the storage pattern.'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  CALL Initiate( &\n    & obj=dofobj, &\n    & tNodes=[6, 3], &\n    & names=['V', 'P'], &\n    & spaceCompo=[3, 1], &\n    & timeCompo=[1, 1], &\n    & storageFMT=FMT_DOF )\n"})}),"\n",(0,t.jsx)(a.p,{children:'!!! note ""\nInitiate an instance of [[CSRSparsity_]]'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  CALL Initiate( &\n    & obj, &\n    & ncol=(.tnodes. dofobj), &\n    & nrow=(.tNodes. dofobj),  &\n    & idof=dofobj, &\n    & jdof=dofobj )\n"})}),"\n",(0,t.jsxs)(a.p,{children:['!!! note "setSparsity"\nSetting sparsity pattern in each block. The block address is given by\nivar and jvar. ',(0,t.jsx)(a.code,{children:"row"})," and ",(0,t.jsx)(a.code,{children:"col"})," are the row and column number in that\nblock."]}),"\n",(0,t.jsx)(a.p,{children:"Block 1,1 ( V, V )"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL setSparsity( obj=obj, row=1, col=[1,2,3,4,5,6], ivar=1, jvar=1 )\nCALL setSparsity( obj=obj, row=2, col=[1,2,3,4,5,6], ivar=1, jvar=1 )\nCALL setSparsity( obj=obj, row=3, col=[1,2,3,4,5,6], ivar=1, jvar=1 )\nCALL setSparsity( obj=obj, row=4, col=[1,2,3,4,5,6], ivar=1, jvar=1 )\nCALL setSparsity( obj=obj, row=5, col=[1,2,3,4,5,6], ivar=1, jvar=1 )\nCALL setSparsity( obj=obj, row=6, col=[1,2,3,4,5,6], ivar=1, jvar=1 )\n"})}),"\n",(0,t.jsx)(a.p,{children:"Block 1,2 (V, P)"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL setSparsity( obj=obj, row=1, col=[1,2,3], ivar=1, jvar=2 )\nCALL setSparsity( obj=obj, row=2, col=[1,2,3], ivar=1, jvar=2 )\nCALL setSparsity( obj=obj, row=3, col=[1,2,3], ivar=1, jvar=2 )\nCALL setSparsity( obj=obj, row=4, col=[1,2,3], ivar=1, jvar=2 )\nCALL setSparsity( obj=obj, row=5, col=[1,2,3], ivar=1, jvar=2 )\nCALL setSparsity( obj=obj, row=6, col=[1,2,3], ivar=1, jvar=2 )\n"})}),"\n",(0,t.jsx)(a.p,{children:"Block 2,1 (P,V)"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL setSparsity( obj=obj, row=1, col=[1,2,3,4,5,6], ivar=2, jvar=1 )\nCALL setSparsity( obj=obj, row=2, col=[1,2,3,4,5,6], ivar=2, jvar=1 )\nCALL setSparsity( obj=obj, row=3, col=[1,2,3,4,5,6], ivar=2, jvar=1 )\n"})}),"\n",(0,t.jsx)(a.p,{children:"Block 2,2 (P,P)"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL setSparsity( obj=obj, row=1, col=[1,2,3], ivar=2, jvar=2 )\nCALL setSparsity( obj=obj, row=2, col=[1,2,3], ivar=2, jvar=2 )\nCALL setSparsity( obj=obj, row=3, col=[1,2,3], ivar=2, jvar=2 )\n"})}),"\n",(0,t.jsxs)(a.p,{children:["We should now call ",(0,t.jsx)(a.code,{children:"setSparsity()"})," to indicate that setting of sparsity pattern is finished. This step will compact the storage."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL setSparsity( obj )\n"})}),"\n",(0,t.jsx)(a.p,{children:"Display the content of [[CSRSparsity_]]"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'CALL Display( obj, "" )\n'})}),"\n",(0,t.jsx)(a.p,{children:'!!! note "cleanup"'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL Deallocate( dofobj )\nCALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>o,a:()=>i});var t=s(67294);const r={},n=t.createContext(r);function i(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);