"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82644],{72790:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(85893),t=a(11151);const i={},r="VandermondeMatrix",l={id:"InterpolationUtility/VandermondeMatrix",title:"VandermondeMatrix",description:"This function returns the vandermonde matrix for monomial basis.",source:"@site/docs/docs-api/InterpolationUtility/VandermondeMatrix.md",sourceDirName:"InterpolationUtility",slug:"/InterpolationUtility/VandermondeMatrix",permalink:"/docs-api/InterpolationUtility/VandermondeMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/InterpolationUtility/VandermondeMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InterpolationUtility",permalink:"/docs-api/InterpolationUtility/"},next:{title:"InvUtility",permalink:"/docs-api/InvUtility/"}},m={},c=[{value:"Interface",id:"interface",level:2}];function o(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"vandermondematrix",children:"VandermondeMatrix"}),"\n",(0,n.jsx)(s.p,{children:"This function returns the vandermonde matrix for monomial basis."}),"\n",(0,n.jsx)(s.p,{children:"Calling example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"V = VandermondeMatrix(order, x)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION VandermondeMatrix(order, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    REAL(Real32 | Real64) , INTENT(IN) :: x(:)\n    REAL(Real32 | Real64)  :: ans(SIZE(x), order + 1)\n  END FUNCTION VandermondeMatrix\n"})}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"V"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"j"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"j"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"})]})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"V(i,j) = x(i)^{j-1}"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.1247em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsxs)(s.span,{className:"mclose",children:[(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8747em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]})})})})})]})]})]})]})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>r});var n=a(67294);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);