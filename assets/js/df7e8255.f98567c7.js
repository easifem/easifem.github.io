"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[84469],{99777:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(85893),t=n(11151);const l={title:"FEVariable example 22c",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},i="FEVariable example 22c",s={id:"FEVariable/FEVariable_test_22c",title:"FEVariable example 22c",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_22c.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_22c",permalink:"/docs-api/FEVariable/FEVariable_test_22c",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_22c.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 22c",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 22b",permalink:"/docs-api/FEVariable/FEVariable_test_22b"},next:{title:"FEVariable example 22d",permalink:"/docs-api/FEVariable/FEVariable_test_22d"}},c={},o=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fevariable-example-22c",children:"FEVariable example 22c"}),"\n",(0,r.jsx)(e.p,{children:'!!! note ""\nThis example tests subtraction operator. Vector, Quadrature'}),"\n",(0,r.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant - constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant ) &\n      - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "constant-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant ) &\n      - 1.0_DFP\n  CALL Display(obj, "constant-constant")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "space-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace ) &\n      - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "space-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace ) &\n      - 1.0_DFP\n  CALL Display(obj, "space-constant")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "time-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime ) &\n      - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "time-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime ) &\n      - 1.0_DFP \n  CALL Display(obj, "time-constant")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "spacetime-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpaceTime ) &\n      - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "spacetime-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpaceTime ) &\n      - 1.0_DFP\n  CALL Display(obj, "spacetime-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,t.a)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(p,{...a})}):p(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>i});var r=n(67294);const t={},l=r.createContext(t);function i(a){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:i(a.components),r.createElement(l.Provider,{value:e},a.children)}}}]);