"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41708],{36533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=t(85893),i=t(11151);function s(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nreal(dfp) :: amat(3,3), ainv(3,3)\n\ncall random_number(amat)\ncall display(Mdencode(amat), "amat: " // char_lf // char_lf)\ncall inv(invA=ainv, a=amat)\ncall display(Mdencode(ainv), "ainv: " // char_lf // char_lf)\nend program main\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n.p,{children:"amat:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.88179"}),(0,r.jsx)(n.td,{children:"0.51365"}),(0,r.jsx)(n.td,{children:"0.53015"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.24482"}),(0,r.jsx)(n.td,{children:"9.60291E-02"}),(0,r.jsx)(n.td,{children:"0.79165"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.25111"}),(0,r.jsx)(n.td,{children:"0.42564"}),(0,r.jsx)(n.td,{children:"9.45404E-04"})]})]})]}),(0,r.jsx)(n.p,{children:"ainv:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2.2076"}),(0,r.jsx)(n.td,{children:"-1.4756"}),(0,r.jsx)(n.td,{children:"-2.3312"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1.3012"}),(0,r.jsx)(n.td,{children:"0.86698"}),(0,r.jsx)(n.td,{children:"3.7241"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-0.52488"}),(0,r.jsx)(n.td,{children:"1.6144"}),(0,r.jsx)(n.td,{children:"0.26919"})]})]})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},d="Inv",l={id:"InvUtility/Inv",title:"Inv",description:"Returns inverse of matrix.",source:"@site/docs/docs-api/InvUtility/Inv.md",sourceDirName:"InvUtility",slug:"/InvUtility/Inv",permalink:"/docs-api/InvUtility/Inv",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/InvUtility/Inv.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Det",permalink:"/docs-api/InvUtility/Det"},next:{title:"IterationData",permalink:"/docs-api/IterationData/"}},o={},h=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{TabItem:t,Tabs:s}=n;return t||p("TabItem",!0),s||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inv",children:"Inv"}),"\n",(0,r.jsx)(n.p,{children:"Returns inverse of matrix."}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL Inv(A(:,:), InvA(:,:))\nCALL Inv(A(:,:,:), InvA(:,:,:))\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"InvA should be allocated."})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Currently, Inv can compute inverse of matrix upto 4 by 4. To calculate inverse of big matrix use the following strategy:"}),(0,r.jsx)(n.p,{children:"First get LU decomposition:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL GetLU(A, LU, IPIV)\n"})}),(0,r.jsx)(n.p,{children:"Then, calculate inverse by"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL GetLU(A, invA, IPIV)\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)(t,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE Inv(invA, A)\n    REAL(DFP), INTENT(INOUT) :: invA(:, :)\n    REAL(DFP), INTENT(IN) :: A(:, :)\n  END SUBROUTINE Inv\nEND INTERFACE\n"})})}),(0,r.jsx)(t,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(a,{})}),(0,r.jsx)(t,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE Inv(invA, A)\n    REAL(DFP), INTENT(INOUT) :: invA(:, :, :)\n    REAL(DFP), INTENT(IN) :: A(:, :, :)\n  END SUBROUTINE Inv\nEND INTERFACE\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);