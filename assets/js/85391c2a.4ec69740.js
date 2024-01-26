"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[28226],{40088:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(85893),t=n(11151);const i={},r="GetInvC",c={id:"LinearElasticModel/GetInvC",title:"GetInvC",description:"Get $C^$ matrix.",source:"@site/docs/docs-api/LinearElasticModel/GetInvC.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/GetInvC",permalink:"/docs-api/LinearElasticModel/GetInvC",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/GetInvC.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetElasticityType",permalink:"/docs-api/LinearElasticModel/GetElasticityType"},next:{title:"GetParam",permalink:"/docs-api/LinearElasticModel/GetParam"}},l={},m=[{value:"Interface",id:"interface",level:2}];function o(e){const s={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"getinvc",children:"GetInvC"}),"\n",(0,a.jsxs)(s.p,{children:["Get ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"C"}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"C^{-1}"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsx)(s.span,{className:"mord mtight",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]})})})})})]})]})})]})," matrix."]}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,a.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetInvC(obj, invC)\n    CLASS(LinearElasticModel_), INTENT(IN) :: obj\n    REAL(DFP), INTENT(INOUT) :: invC(:, :)\n  END SUBROUTINE GetInvC\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["In the case of plane-stress or plane-strain, this routine only access 3-by-3 block of ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"v"}),(0,a.jsx)(s.mi,{children:"C"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"invC"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]}),"."]})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>r});var a=n(67294);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);