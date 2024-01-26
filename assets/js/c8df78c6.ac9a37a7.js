"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[98999],{98288:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(85893),l=n(11151);const i={title:"FEVariable example 51",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2022",update:"04 Jan 2022",tags:["FEVariable/NodalVariable","FEVariable/Display","FEVariable/POWER"]},t="FEVariable example 51",s={id:"FEVariable/FEVariable_test_51",title:"FEVariable example 51",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_51.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_51",permalink:"/docs-api/FEVariable/FEVariable_test_51",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_51.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"},{label:"FEVariable/POWER",permalink:"/docs-api/tags/fe-variable-power"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 51",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2022",update:"04 Jan 2022",tags:["FEVariable/NodalVariable","FEVariable/Display","FEVariable/POWER"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 43d",permalink:"/docs-api/FEVariable/FEVariable_test_43d"},next:{title:"FEVariable example 52",permalink:"/docs-api/FEVariable/FEVariable_test_52"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fevariable-example-51",children:"FEVariable example 51"}),"\n",(0,r.jsxs)(e.p,{children:['!!! note ""\nThis example tests POWER ',(0,r.jsx)(e.code,{children:"(**)"})," operator. Scalar, Nodal Variable."]}),"\n",(0,r.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n  TYPE(FEVariable_) :: ans\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = NodalVariable( &\n      & 2.0_DFP, &\n      & typeFEVariableScalar,    &\n      & typeFEVariableConstant ) ** 2\n  ans = NodalVariable( 4.0_DFP, &\n      & typeFEVariableScalar,    &\n      & typeFEVariableConstant )\n  CALL OK( obj .EQ. ans, "constant:" )\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "space"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = NodalVariable( &\n      & arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableScalar, &\n      & typeFEVariableSpace ) ** 2\n  ans = NodalVariable( &\n      & (arange(1.0_DFP, 3.0_DFP))**2, &\n      & typeFEVariableScalar,    &\n      & typeFEVariableSpace )\n  CALL OK( obj .EQ. ans, "space:" )\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "time"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = NodalVariable( &\n      & arange(0.0_DFP, 3.0_DFP), &\n      & typeFEVariableScalar, &\n      & typeFEVariableTime ) ** 2\n  ans = NodalVariable( &\n      & (arange(0.0_DFP, 3.0_DFP))**2, &\n      & typeFEVariableScalar,    &\n      & typeFEVariableTime )\n  CALL OK( obj .EQ. ans, "time:" )\n'})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "spacetime"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'  obj = NodalVariable( &\n      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableScalar, &\n      & typeFEVariableSpaceTime ) **2\n  ans = NodalVariable( &\n      & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &\n      & typeFEVariableScalar,    &\n      & typeFEVariableSpaceTime )\n  CALL OK( obj .EQ. ans, "spacetime" )\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function p(a={}){const{wrapper:e}={...(0,l.a)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(d,{...a})}):d(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>t});var r=n(67294);const l={},i=r.createContext(l);function t(a){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:t(a.components),r.createElement(i.Provider,{value:e},a.children)}}}]);