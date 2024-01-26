"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[48131],{11752:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>m,toc:()=>L});var s=e(85893),t=e(11151);function i(a){const n={admonition:"admonition",annotation:"annotation",code:"code",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nIMPLICIT NONE\nTYPE(LinearElasticModel_) :: obj\nTYPE(ParameterList_) :: param\n\nCALL FPL_INIT; CALL param%initiate()\n\nCALL SetLinearElasticModelParam( &\n  & param=param,  &\n  & elasticityType=TypeElasticity%Isotropic, &\n  & poissonRatio=0.3_DFP, &\n  & youngsModulus=1.0D+6)\n\nCALL obj%Initiate(param)\n\nBLOCK\n  REAL(DFP) :: ans\n  CALL obj%GetElasticParam(poissonRatio=ans)\n  CALL OK(ans.APPROXEQ.0.3_DFP, "poissonRatio: ")\n\n  CALL obj%GetElasticParam(shearModulus=ans)\n  CALL Display(ans, "shearModulus: ")\n\n  CALL obj%GetElasticParam(youngsModulus=ans)\n  CALL OK(ans.APPROXEQ.1.0D+6, "youngsModulus: ")\n\n  CALL obj%GetElasticParam(lambda=ans)\n  CALL Display(ans, "lambda: ")\nEND BLOCK\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["In the following case we will get ",(0,s.jsx)(n.code,{children:"C"})," and ",(0,s.jsx)(n.code,{children:"invC"}),". Here, make sure ",(0,s.jsx)(n.code,{children:"C"})," and ",(0,s.jsx)(n.code,{children:"invC"})," are 6 by 6."]}),(0,s.jsxs)(n.p,{children:["In case of plane-stress and plane-strain we only access ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mn,{children:"3"}),(0,s.jsx)(n.mo,{separator:"true",children:","}),(0,s.jsx)(n.mn,{children:"3"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"(3,3)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord",children:"3"}),(0,s.jsx)(n.span,{className:"mpunct",children:","}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord",children:"3"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," block. So, in case of plane-stress and plane-strain, 3 by 3 matrix is also OK."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'BLOCK\n  REAL(DFP) :: ans(6, 6)\n  CALL obj%GetElasticParam(C=ans)\n  CALL Display(ans, "C: ")\n\n  CALL BlankLines()\n  CALL obj%GetElasticParam(invC=ans)\n  CALL Display(ans, "invC: ")\nEND BLOCK\n\nCALL param%DEALLOCATE(); CALL FPL_FINALIZE\nEND PROGRAM main\n'})})]})}function r(a={}){const{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(i,{...a})}):i(a)}function l(a){const n={admonition:"admonition",annotation:"annotation",code:"code",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This example shows usage of GetElasticParam for plane stress and plane strain."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nIMPLICIT NONE\nTYPE(LinearElasticModel_) :: obj\nTYPE(ParameterList_) :: param\n\nCALL FPL_INIT; CALL param%initiate()\n\nCALL SetLinearElasticModelParam( &\n  & param=param,  &\n  & elasticityType=TypeElasticity%Isotropic, &\n  & poissonRatio=0.3_DFP, &\n  & youngsModulus=1.0D+6,  &\n  & isplaneStress=.TRUE.)\n\nCALL obj%Initiate(param)\n\nBLOCK\n  REAL(DFP) :: ans\n  CALL obj%GetElasticParam(poissonRatio=ans)\n  CALL OK(ans.APPROXEQ.0.3_DFP, "poissonRatio: ")\n\n  CALL obj%GetElasticParam(shearModulus=ans)\n  CALL Display(ans, "shearModulus: ")\n\n  CALL obj%GetElasticParam(youngsModulus=ans)\n  CALL OK(ans.APPROXEQ.1.0D+6, "youngsModulus: ")\n\n  CALL obj%GetElasticParam(lambda=ans)\n  CALL Display(ans, "lambda: ")\nEND BLOCK\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["In the following case we will get ",(0,s.jsx)(n.code,{children:"C"})," and ",(0,s.jsx)(n.code,{children:"invC"}),". Here, make sure ",(0,s.jsx)(n.code,{children:"C"})," and ",(0,s.jsx)(n.code,{children:"invC"})," are 6 by 6."]}),(0,s.jsxs)(n.p,{children:["In case of plane-stress and plane-strain we only access ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mn,{children:"3"}),(0,s.jsx)(n.mo,{separator:"true",children:","}),(0,s.jsx)(n.mn,{children:"3"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"(3,3)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord",children:"3"}),(0,s.jsx)(n.span,{className:"mpunct",children:","}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord",children:"3"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," block. So, in case of plane-stress and plane-strain, 3 by 3 matrix is also OK."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'BLOCK\n  REAL(DFP) :: ans(6, 6)\n  CALL obj%GetElasticParam(C=ans)\n  CALL Display(ans, "C: ")\n\n  CALL BlankLines()\n  CALL obj%GetElasticParam(invC=ans)\n  CALL Display(ans, "invC: ")\nEND BLOCK\n\nBLOCK\n  REAL(DFP) :: ans(3, 3)\n  CALL obj%GetElasticParam(C=ans)\n  CALL Display(ans, "C: ")\n\n  CALL BlankLines()\n  CALL obj%GetElasticParam(invC=ans)\n  CALL Display(ans, "invC: ")\nEND BLOCK\n\nCALL param%DEALLOCATE(); CALL FPL_FINALIZE\nEND PROGRAM main\n'})})]})}function o(a={}){const{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(l,{...a})}):l(a)}const c={},d="GetElasticParam",m={id:"LinearElasticModel/GetElasticParam",title:"GetElasticParam",description:"Get elastic parameters stored inside the LinearElasticModel.",source:"@site/docs/docs-api/LinearElasticModel/GetElasticParam.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/GetElasticParam",permalink:"/docs-api/LinearElasticModel/GetElasticParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/GetElasticParam.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetDataSize",permalink:"/docs-api/LinearElasticModel/GetDataSize"},next:{title:"GetElasticityType",permalink:"/docs-api/LinearElasticModel/GetElasticityType"}},p={},L=[{value:"Interface",id:"interface",level:2}];function h(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...a.components},{TabItem:e,Tabs:i}=n;return e||j("TabItem",!0),i||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getelasticparam",children:"GetElasticParam"}),"\n",(0,s.jsxs)(n.p,{children:["Get elastic parameters stored inside the ",(0,s.jsx)(n.code,{children:"LinearElasticModel"}),"."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(e,{value:"interface",label:"Interface",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetElasticParam(obj, poissonRatio, &\n     & shearModulus, lambda, youngsModulus, stiffnessPower, C, invC)\n    CLASS(LinearElasticModel_), INTENT(IN) :: obj\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: poissonRatio\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: shearModulus\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: lambda\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: youngsModulus\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: stiffnessPower\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: C(:, :)\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: invC(:, :)\n  END SUBROUTINE GetElasticParam\nEND INTERFACE\n"})})}),(0,s.jsx)(e,{value:"example",label:"example 1",children:(0,s.jsx)(r,{})}),(0,s.jsx)(e,{value:"ex2",label:"example 2",children:(0,s.jsx)(o,{})}),(0,s.jsx)(e,{value:"close",label:"\u21a2 close"})]})]})}function x(a={}){const{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(h,{...a})}):h(a)}function j(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(a,n,e)=>{e.d(n,{Z:()=>l,a:()=>r});var s=e(67294);const t={},i=s.createContext(t);function r(a){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function l(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:r(a.components),s.createElement(i.Provider,{value:n},a.children)}}}]);