"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[46762],{93595:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>l,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var n=a(85893),t=a(11151);const c={title:"Lapack95 example 8",date:new Date("2022-12-20T00:00:00.000Z"),update:new Date("2022-12-20T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetCholesky"]},l=void 0,i={id:"Lapack95/Lapack95_test_8",title:"Lapack95 example 8",description:"This example shows the use of SymGetCholesky method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_8.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_8",permalink:"/docs-api/Lapack95/Lapack95_test_8",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_8.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"},{label:"SymGetCholesky",permalink:"/docs-api/tags/sym-get-cholesky"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 8",date:"2022-12-20T00:00:00.000Z",update:"2022-12-20T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetCholesky"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95 example 7",permalink:"/docs-api/Lapack95/Lapack95_test_7"},next:{title:"Lapack95 example 9",permalink:"/docs-api/Lapack95/Lapack95_test_9"}},m={},r=[];function p(e){const s={annotation:"annotation",code:"code",math:"math",mi:"mi",mo:"mo",mover:"mover",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This example shows the use of ",(0,n.jsx)(s.code,{children:"SymGetCholesky"})," method defined in Lapack95."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nreal(dfp), allocatable :: LU(:, :), A(:,:), exactL(:,:)\nreal(dfp) :: error\ninteger(i4b) :: info\ncharacter(len=1) :: uplo\n\nallocate(LU(3,3), A(3,3),  exactL(3,3))\nA(1, :) = [6, 15, 55]\nA(2, :) = [15, 55, 225]\nA(3, :) = [55, 225, 979]\n\nexactL(:,1) = [2.45, 6.12, 22.45]\nexactL(:,2) = [0.0, 4.18, 20.92]\nexactL(:,3) = [0.0, 0.0, 6.11]\n\nuplo = "L"\n\nCALL SymGetCholesky(A=A, LU=LU, UPLO=uplo, info=info)\n\nCALL Display( A, "A = " )\nCALL Display( exactL, "exact L = " )\nCALL Display( LU, "L = " )\nCALL Display( info, "info = " )\n\nCALL Display(MATMUL(LU, TRANSPOSE(LU)), "A = ")\n\nend program main\n'})}),"\n",(0,n.jsx)(s.p,{children:"A matrix is given by"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",children:"           A =\n-------------------------\n  6.000   15.000   55.000\n 15.000   55.000  225.000\n 55.000  225.000  979.000\n"})}),"\n",(0,n.jsx)(s.p,{children:"Exact L is given by:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",children:"        exact L =\n-------------------------\n 2.4500   0.0000   0.0000\n 6.1200   4.1800   0.0000\n22.4500  20.9200   6.1100\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Computed L  ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.mover,{accent:"true",children:[(0,n.jsx)(s.mi,{children:"L"}),(0,n.jsx)(s.mo,{children:"~"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\tilde{L}"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.9202em"}}),(0,n.jsx)(s.span,{className:"mord accent",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsxs)(s.span,{className:"vlist",style:{height:"0.9202em"},children:[(0,n.jsxs)(s.span,{style:{top:"-3em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"L"})]}),(0,n.jsxs)(s.span,{style:{top:"-3.6023em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(s.span,{className:"accent-body",style:{left:"-0.2222em"},children:(0,n.jsx)(s.span,{className:"mord",children:"~"})})]})]})})})})]})})]})," is given below."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",children:"           L =\n-------------------------\n 2.4495   0.0000   0.0000\n 6.1237   4.1833   0.0000\n22.4537  20.9165   6.1101\n"})}),"\n",(0,n.jsx)(s.p,{children:"We can see that"}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"A"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"U"}),(0,n.jsx)(s.mi,{children:"T"})]}),(0,n.jsx)(s.mo,{children:"\u22c5"}),(0,n.jsx)(s.mi,{children:"U"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"A = U^{T} \\cdot U"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8913em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"})]})]})]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",children:"          A =\n-------------------------\n  6.000   15.000   55.000\n 15.000   55.000  225.000\n 55.000  225.000  979.000\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If you want to calculate exact D from computed D, please call ",(0,n.jsx)(s.code,{children:"LAPMT"})," routine and pass the ",(0,n.jsx)(s.code,{children:"ipiv"})," returned by the routine."]})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>l});var n=a(67294);const t={},c=n.createContext(t);function l(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);