"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[37477],{49772:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var n=r(85893),i=r(11151);const t={title:"FEVariable example 43d",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},l="FEVariable example 43d",s={id:"FEVariable/FEVariable_test_43d",title:"FEVariable example 43d",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_43d.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_43d",permalink:"/docs-api/FEVariable/FEVariable_test_43d",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_43d.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 43d",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 43c",permalink:"/docs-api/FEVariable/FEVariable_test_43c"},next:{title:"FEVariable example 51",permalink:"/docs-api/FEVariable/FEVariable_test_51"}},p={},o=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function c(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"fevariable-example-43d",children:"FEVariable example 43d"}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nThis example tests / operator. Matrix, Quadrature'}),"\n",(0,n.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant / space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableMatrix,    &\n    & typeFEVariableConstant ) &\n    / QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpace )\n  CALL Display(obj, "constant / space")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "space / space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpace ) &\n      / QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpace )\n  CALL Display(obj, "space / space")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant / time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableMatrix,    &\n    & typeFEVariableConstant ) &\n    / QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableTime )\n  CALL Display(obj, "constant / time")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "time / time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableTime ) &\n      / QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableTime )\n  CALL Display(obj, "time / time")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant / spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableMatrix,    &\n    & typeFEVariableConstant ) &\n    / QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "constant / spacetime")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "spacetime / spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpaceTime ) &\n    / QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "spacetime / spacetime")\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(c,{...a})}):c(a)}},11151:(a,e,r)=>{r.d(e,{Z:()=>s,a:()=>l});var n=r(67294);const i={},t=n.createContext(i);function l(a){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:l(a.components),n.createElement(t.Provider,{value:e},a.children)}}}]);