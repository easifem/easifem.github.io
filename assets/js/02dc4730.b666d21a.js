"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[29445],{2169:(a,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=l(85893),r=l(11151);const i={title:"FEVariable example 21b",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},t="FEVariable example 21b",s={id:"FEVariable/FEVariable_test_21b",title:"FEVariable example 21b",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_21b.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_21b",permalink:"/docs-api/FEVariable/FEVariable_test_21b",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_21b.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 21b",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable_test_21a",permalink:"/docs-api/FEVariable/FEVariable_test_21a"},next:{title:"FEVariable example 21c",permalink:"/docs-api/FEVariable/FEVariable_test_21c"}},c={},o=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"fevariable-example-21b",children:"FEVariable example 21b"}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nThis example tests substraction operator. Scalar Nodal Values'}),"\n",(0,n.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant - space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( 1.0_DFP, &\n    & typeFEVariableScalar,    &\n    & typeFEVariableConstant ) &\n    - NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpace )\n  CALL Display(obj, "constnat-space")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "space-space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n                      & typeFEVariableScalar, &\n                      & typeFEVariableSpace ) &\n      - NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n                      & typeFEVariableScalar, &\n                      & typeFEVariableSpace )\n  CALL Display(obj, "space-space")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant-time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( 1.0_DFP, &\n    & typeFEVariableScalar,    &\n    & typeFEVariableConstant ) &\n    - NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableScalar, &\n    & typeFEVariableTime )\n  CALL Display(obj, "constant-time")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "time-time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n                      & typeFEVariableScalar, &\n                      & typeFEVariableTime ) &\n      - NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n                      & typeFEVariableScalar, &\n                      & typeFEVariableTime )\n  CALL Display(obj, "time-time")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant-spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( 1.0_DFP, &\n    & typeFEVariableScalar,    &\n    & typeFEVariableConstant ) &\n    - NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "constant-spacetime")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "spacetime-spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpaceTime ) &\n    - NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "spacetime-spacetime")\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(p,{...a})}):p(a)}},11151:(a,e,l)=>{l.d(e,{Z:()=>s,a:()=>t});var n=l(67294);const r={},i=n.createContext(r);function t(a){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:t(a.components),n.createElement(i.Provider,{value:e},a.children)}}}]);