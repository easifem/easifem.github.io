"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[57234],{82866:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=i(85893),n=i(11151);const s={authors:"Vikas Sharma, Ph. D.",date:"22 Oct 2021",update:"14 Nov 2021",title:"StaticDiffusion example 1",tags:["SetStaticDiffusionParam","StaticDiffusion/CheckEssentialParam"]},o="StaticDiffusion example 1",c={id:"StaticDiffusion/StaticDiffusion_test_1",title:"StaticDiffusion example 1",description:'!!! note ""',source:"@site/docs/docs-api/StaticDiffusion/StaticDiffusion_test_1.md",sourceDirName:"StaticDiffusion",slug:"/StaticDiffusion/StaticDiffusion_test_1",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/StaticDiffusion/StaticDiffusion_test_1.md",tags:[{label:"SetStaticDiffusionParam",permalink:"/docs-api/tags/set-static-diffusion-param"},{label:"StaticDiffusion/CheckEssentialParam",permalink:"/docs-api/tags/static-diffusion-check-essential-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"22 Oct 2021",update:"14 Nov 2021",title:"StaticDiffusion example 1",tags:["SetStaticDiffusionParam","StaticDiffusion/CheckEssentialParam"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_"},next:{title:"StaticDiffusion example 10",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_10"}},r={},l=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"staticdiffusion-example-1",children:"StaticDiffusion example 1"}),"\n",(0,a.jsxs)(t.p,{children:['!!! note ""\nThis examples shows how to use ',(0,a.jsx)(t.code,{children:"SetStaticDiffusionParam"})," to set the parameters of [[StaticDiffusion_]] kernel."]}),"\n",(0,a.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[[ParameterList_]]"}),"\n",(0,a.jsx)(t.li,{children:"[[StaticDiffusion_]]"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:'!!! notes ""\nUse modules and declare variables'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  USE easifemKernels\n  USE StaticDiffusion_Class\n  IMPLICIT NONE\n  TYPE(ParameterList_) :: param\n  TYPE(StaticDiffusion_) :: obj\n"})}),"\n",(0,a.jsx)(t.p,{children:'!!! notes ""\nInitiate an instance of [[ParameterList_]].'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,a.jsx)(t.p,{children:'!!! notes ""\nSetting parameters for initiating an instance of [[StaticDiffusion_]]'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  CALL SetStaticDiffusionParam( &\n    & param=param, &\n    & engine="NATIVE_SERIAL",  &\n    & coordinateSystem=KERNEL_2D, &\n    & tMaterials=2, &\n    & tDirichletBC=4,  &\n    & domainFile="./mesh.h5" )\n'})}),"\n",(0,a.jsx)(t.p,{children:"Let us see the content of param."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL param%print()\n"})}),"\n",(0,a.jsx)(t.p,{children:"The results of the above call is given below"}),"\n",(0,a.jsx)(t.p,{children:'??? example "results"'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"[2] Key = StaticDiffusion/quadratureType, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre\n[7] Key = StaticDiffusion/coordinateSystem, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +3\n[14] Key = StaticDiffusion/domainFile, Data Type = DLCA, Dimensions = 0, Bytes = 9, Value = ./mesh.h5\n[15] Key = StaticDiffusion/name, Data Type = DLCA, Dimensions = 0, Bytes = 15, Value = StaticDiffusion\n[28] Key = StaticDiffusion/engine, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = NATIVE_SERIAL\n[44] Key = StaticDiffusion/tMaterials, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +2\n[67] Key = StaticDiffusion/tDirichletBC, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +4\n[87] Key = StaticDiffusion/baseContinuity, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1\n[93] Key = StaticDiffusion/baseInterpolation, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation\n"})}),"\n",(0,a.jsx)(t.p,{children:"Checking the validity of the parameters."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL obj%CheckEssentialParam(param)\n"})}),"\n",(0,a.jsx)(t.p,{children:'!!! settings "Cleanup"'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>o});var a=i(67294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);