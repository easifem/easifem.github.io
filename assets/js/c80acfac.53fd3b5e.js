"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[68792],{44470:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=s(85893),t=s(11151);const i={},r="RefCoord",o={id:"RefLine/RefCoord",title:"RefCoord",description:"This method returns the coordinates of reference element. This method is for internal use only.",source:"@site/docs/docs-api/RefLine/RefCoord.md",sourceDirName:"RefLine",slug:"/RefLine/RefCoord",permalink:"/docs-api/RefLine/RefCoord",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefLine/RefCoord.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetXidimension",permalink:"/docs-api/RefLine/GetXidimension"},next:{title:"SetParam",permalink:"/docs-api/RefLine/SetParam"}},l={},m=[{value:"Interface",id:"interface",level:2}];function c(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"refcoord",children:"RefCoord"}),"\n",(0,a.jsx)(n.p,{children:"This method returns the coordinates of reference element. This method is for internal use only."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The nodal coordinates of reference element depends on the conformity of basis functions, that is, ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"H"}),(0,a.jsx)(n.mn,{children:"1"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"H1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]}),", ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"H"}),(0,a.jsx)(n.mi,{children:"D"}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mi,{children:"v"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"HDiv"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"HD"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]}),", ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"H"}),(0,a.jsx)(n.mi,{children:"C"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"r"}),(0,a.jsx)(n.mi,{children:"l"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"HCurl"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]}),", and type of basis function, that is, Lagrange polynomial, Hierarchical polynomial, and Orthogonal polynomial."]})}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  FUNCTION RefCoord(obj, baseInterpol, baseContinuity) RESULT(ans)\n    IMPORT AbstractRefElement_, I4B, DFP\n    CLASS(AbstractRefElement_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: baseInterpol\n    CHARACTER(*), INTENT(IN) :: baseContinuity\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n  END FUNCTION RefCoord\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var a=s(67294);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);