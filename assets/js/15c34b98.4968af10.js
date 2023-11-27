"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82259],{32552:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(85893),i=n(11151);const l={title:"FEVariable example 63",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2021",update:"04 Jan 2021",tags:["FEVariable/NodalVariable","FEVariable/Display","FEVariable/ABS"]},t="FEVariable example 63",s={id:"FEVariable/FEVariable_test_63",title:"FEVariable example 63",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_63.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_63",permalink:"/docs-api/FEVariable/FEVariable_test_63",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_63.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"},{label:"FEVariable/ABS",permalink:"/docs-api/tags/fe-variable-abs"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 63",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2021",update:"04 Jan 2021",tags:["FEVariable/NodalVariable","FEVariable/Display","FEVariable/ABS"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 62",permalink:"/docs-api/FEVariable/FEVariable_test_62"},next:{title:"FEVariable example 64",permalink:"/docs-api/FEVariable/FEVariable_test_64"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fevariable-example-63",children:"FEVariable example 63"}),"\n",(0,r.jsxs)(e.p,{children:['!!! note ""\nThis example tests ',(0,r.jsx)(e.code,{children:"ABS"})," operator. Vector, Nodal"]}),"\n",(0,r.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n  TYPE(FEVariable_) :: ans\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(NodalVariable( &\n      & -arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant ))\n  ans = NodalVariable( &\n      & arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant )\n  CALL OK( obj .EQ. ans, "constant:" )\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "space"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(NodalVariable( &\n      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace ))\n  ans = NodalVariable( &\n      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace )\n  CALL OK( obj .EQ. ans, "space:" )\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "time"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(NodalVariable( &\n      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime ))\n  ans = NodalVariable( &\n      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime )\n  CALL OK( obj .EQ. ans, "time:" )\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "spacetime"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(NodalVariable( &\n      & reshape(-arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpaceTime ))\n  ans = NodalVariable( &\n      & reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpaceTime )\n  CALL OK( obj .EQ. ans, "spacetime:" )\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(p,{...a})}):p(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>t});var r=n(67294);const i={},l=r.createContext(i);function t(a){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:t(a.components),r.createElement(l.Provider,{value:e},a.children)}}}]);