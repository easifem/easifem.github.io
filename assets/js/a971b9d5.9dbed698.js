"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[46824],{4127:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(85893),l=r(11151);const i={title:"FEVariable example 41d",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},t="FEVariable example 41d",s={id:"FEVariable/FEVariable_test_41d",title:"FEVariable example 41d",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_41d.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_41d",permalink:"/docs-api/FEVariable/FEVariable_test_41d",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_41d.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 41d",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 41c",permalink:"/docs-api/FEVariable/FEVariable_test_41c"},next:{title:"FEVariable example 42a",permalink:"/docs-api/FEVariable/FEVariable_test_42a"}},c={},o=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"fevariable-example-41d",children:"FEVariable example 41d"}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nThis example tests / operator. Scalar Quadrature'}),"\n",(0,n.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant / space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( 1.0_DFP, &\n    & typeFEVariableScalar,    &\n    & typeFEVariableConstant ) &\n    / QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpace )\n  CALL Display(obj, "constnat / space")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "space / space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableScalar, &\n      & typeFEVariableSpace ) &\n      /  QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableScalar, &\n      & typeFEVariableSpace )\n  CALL Display(obj, "space / space")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant / time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( 1.0_DFP, &\n    & typeFEVariableScalar,    &\n    & typeFEVariableConstant ) &\n    /  QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableScalar, &\n    & typeFEVariableTime )\n  CALL Display(obj, "constant / time")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "time / time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableScalar, &\n      & typeFEVariableTime ) &\n      / QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableScalar, &\n      & typeFEVariableTime )\n  CALL Display(obj, "time / time")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant / spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( 1.0_DFP, &\n    & typeFEVariableScalar,    &\n    & typeFEVariableConstant ) &\n    / QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "constant / spacetime")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "spacetime / spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpaceTime ) &\n    / QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n    & typeFEVariableScalar, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "spacetime / spacetime")\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,l.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(p,{...a})}):p(a)}},11151:(a,e,r)=>{r.d(e,{Z:()=>s,a:()=>t});var n=r(67294);const l={},i=n.createContext(l);function t(a){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:t(a.components),n.createElement(i.Provider,{value:e},a.children)}}}]);