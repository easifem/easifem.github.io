"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[89740],{43266:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var i=r(85893),l=r(11151);const t={title:"FEVariable example 4",author:"Vikas Sharma, Ph. D.",date:"30 April 2022",tags:["FEVariable/QuadratureVariable","FEVariable/Display"]},n="FEVariable example 4",s={id:"FEVariable/FEVariable_test_4",title:"FEVariable example 4",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_4.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_4",permalink:"/docs-api/FEVariable/FEVariable_test_4",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_4.md",tags:[{label:"FEVariable/QuadratureVariable",permalink:"/docs-api/tags/fe-variable-quadrature-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 4",author:"Vikas Sharma, Ph. D.",date:"30 April 2022",tags:["FEVariable/QuadratureVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 33d",permalink:"/docs-api/FEVariable/FEVariable_test_33d"},next:{title:"FEVariable example 41a",permalink:"/docs-api/FEVariable/FEVariable_test_41a"}},c={},o=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"fevariable-example-4",children:"FEVariable example 4"}),"\n",(0,i.jsx)(e.p,{children:'!!! note ""\nThis example show how to USE QuadratureVariable method to generate Scalar variables at the quadrature nodes of the element.'}),"\n",(0,i.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,i.jsx)(e.p,{children:'!!! note "QuadratureVariable, scalar, constant"'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( 1.0_DFP, typeFEVariableScalar, typeFEVariableConstant )\n  CALL Display(obj, "QuadratureVariable, Scalar, Constant")\n'})}),"\n",(0,i.jsx)(e.p,{children:'!!! note "QuadratureVariable, scalar, space"'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &\n      & typeFEVariableSpace )\n  CALL Display(obj, "QuadratureVariable, scalar, space")\n'})}),"\n",(0,i.jsx)(e.p,{children:'!!! note "QuadratureVariable, scalar, time"'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &\n      & typeFEVariableTime )\n  CALL Display(obj, "QuadratureVariable, scalar, time")\n'})}),"\n",(0,i.jsx)(e.p,{children:'!!! note "QuadratureVariable, scalar, space-time"'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:'  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableScalar, &\n      & typeFEVariableSpaceTime )\n  CALL Display(obj, "QuadratureVariable, scalar, space-time")\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function u(a={}){const{wrapper:e}={...(0,l.a)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(d,{...a})}):d(a)}},11151:(a,e,r)=>{r.d(e,{Z:()=>s,a:()=>n});var i=r(67294);const l={},t=i.createContext(l);function n(a){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:n(a.components),i.createElement(t.Provider,{value:e},a.children)}}}]);