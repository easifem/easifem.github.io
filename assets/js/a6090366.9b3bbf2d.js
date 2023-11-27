"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21981],{27468:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(85893),i=n(11151);const l={title:"FEVariable example 43b",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},t="FEVariable example 43b",s={id:"FEVariable/FEVariable_test_43b",title:"FEVariable example 43b",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_43b.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_43b",permalink:"/docs-api/FEVariable/FEVariable_test_43b",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_43b.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 43b",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 43a",permalink:"/docs-api/FEVariable/FEVariable_test_43a"},next:{title:"FEVariable example 43c",permalink:"/docs-api/FEVariable/FEVariable_test_43c"}},o={},p=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function c(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fevariable-example-43b",children:"FEVariable example 43b"}),"\n",(0,r.jsx)(e.p,{children:'!!! note ""\nThis example tests / operator. Matrix, Nodal'}),"\n",(0,r.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant / space"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableMatrix,    &\n    & typeFEVariableConstant ) &\n    /  NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpace )\n  CALL Display(obj, "constant / space")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "space / space"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpace ) &\n      /  NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableSpace )\n  CALL Display(obj, "space / space")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant / time"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableMatrix,    &\n    & typeFEVariableConstant ) &\n    /  NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableTime )\n  CALL Display(obj, "constant / time")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "time / time"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableTime ) &\n      /  NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &\n      & typeFEVariableMatrix, &\n      & typeFEVariableTime )\n  CALL Display(obj, "time / time")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant / spacetime"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableMatrix,    &\n    & typeFEVariableConstant ) &\n    /  NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "constant / spacetime")\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "spacetime / spacetime"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpaceTime ) &\n    /  NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n    & typeFEVariableMatrix, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "spacetime / spacetime")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(c,{...a})}):c(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>t});var r=n(67294);const i={},l=r.createContext(i);function t(a){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:t(a.components),r.createElement(l.Provider,{value:e},a.children)}}}]);