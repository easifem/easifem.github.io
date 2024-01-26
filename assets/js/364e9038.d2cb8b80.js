"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[63575],{11852:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(85893),t=n(11151);const i={title:"FEVariable example 23c",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},l="FEVariable example 23c",s={id:"FEVariable/FEVariable_test_23c",title:"FEVariable example 23c",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_23c.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_23c",permalink:"/docs-api/FEVariable/FEVariable_test_23c",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_23c.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 23c",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 23b",permalink:"/docs-api/FEVariable/FEVariable_test_23b"},next:{title:"FEVariable example 23d",permalink:"/docs-api/FEVariable/FEVariable_test_23d"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fevariable-example-23c",children:"FEVariable example 23c"}),"\n",(0,r.jsx)(e.p,{children:'!!! note ""\nThis example tests subtraction operator. Matrix, Quadrature'}),"\n",(0,r.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableMatrix,    &\n      & typeFEVariableConstant ) &\n      - QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableMatrix,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "constant-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableMatrix,    &\n      & typeFEVariableConstant ) &\n      - 1.0_DFP \n  CALL Display(obj, "constant-constant")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "space-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpace ) &\n      - QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableMatrix,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "space-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpace ) &\n      - 1.0_DFP\n  CALL Display(obj, "space-constant")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "time-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableTime ) &\n      - QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableMatrix,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "time-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableTime ) &\n      - 1.0_DFP \n  CALL Display(obj, "time-constant")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "spacetime-constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpaceTime ) &\n      - QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableMatrix,    &\n      & typeFEVariableConstant )\n  CALL Display(obj, "spacetime-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpaceTime ) &\n      - 1.0_DFP \n  CALL Display(obj, "spacetime-constant")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,t.a)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(p,{...a})}):p(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>l});var r=n(67294);const t={},i=r.createContext(t);function l(a){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:l(a.components),r.createElement(i.Provider,{value:e},a.children)}}}]);