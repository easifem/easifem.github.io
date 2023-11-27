"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[33340],{63873:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(85893),t=a(11151);const r={},i="RefCoord",o={id:"RefQuadrangle/RefCoord",title:"RefCoord",description:"This method returns the coordinates of reference element. This method is for internal use only.",source:"@site/docs/docs-api/RefQuadrangle/RefCoord.md",sourceDirName:"RefQuadrangle",slug:"/RefQuadrangle/RefCoord",permalink:"/docs-api/RefQuadrangle/RefCoord",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/RefQuadrangle/RefCoord.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RefQuadrangle",permalink:"/docs-api/RefQuadrangle/"},next:{title:"Structure",permalink:"/docs-api/RefQuadrangle/RefQuadrangle_"}},l={},c=[{value:"Interface",id:"interface",level:2}];function m(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"refcoord",children:"RefCoord"}),"\n",(0,s.jsx)(n.p,{children:"This method returns the coordinates of reference element. This method is for internal use only."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The nodal coordinates of reference element depends on the conformity of basis functions, that is, ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"H"}),(0,s.jsx)(n.mn,{children:"1"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"H1"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,s.jsx)(n.span,{className:"mord",children:"1"})]})})]}),", ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"H"}),(0,s.jsx)(n.mi,{children:"D"}),(0,s.jsx)(n.mi,{children:"i"}),(0,s.jsx)(n.mi,{children:"v"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"HDiv"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"HD"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]}),", ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"H"}),(0,s.jsx)(n.mi,{children:"C"}),(0,s.jsx)(n.mi,{children:"u"}),(0,s.jsx)(n.mi,{children:"r"}),(0,s.jsx)(n.mi,{children:"l"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"HCurl"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]}),", and type of basis function, that is, Lagrange polynomial, Hierarchical polynomial, and Orthogonal polynomial."]})}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  FUNCTION RefCoord(obj, baseInterpol, baseContinuity) RESULT(ans)\n    IMPORT AbstractRefElement_, I4B, DFP\n    CLASS(AbstractRefElement_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: baseInterpol\n    CHARACTER(*), INTENT(IN) :: baseContinuity\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n  END FUNCTION RefCoord\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var s=a(67294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);