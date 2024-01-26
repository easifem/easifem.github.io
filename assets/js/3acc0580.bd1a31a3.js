"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20483],{1046:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>j,default:()=>N,frontMatter:()=>x,metadata:()=>p,toc:()=>b});var r=s(85893),t=s(11151),i=s(74866),a=s(85162);function l(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  use easifemBase\n  real( DFP ), allocatable :: b( :, : )\n  b = RecursiveNode1D(order=0, ipType=Equidistance)\n  call Display(MdEncode(b), "b="//char_lf)\n  b = RecursiveNode1D(order=1, ipType=Equidistance)\n  call Display(MdEncode(b), "b="//char_lf)\n  b = RecursiveNode1D(order=2, ipType=Equidistance)\n  call Display(MdEncode(b), "b="//char_lf)\n  b = RecursiveNode1D(order=3, ipType=Equidistance)\n  call Display(MdEncode(b), "b="//char_lf)\nEND PROGRAM main\n'})}),"\n",(0,r.jsx)(n.p,{children:"Order 0"}),"\n",(0,r.jsx)(n.p,{children:"b ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"0.5"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"0.5"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Order 1"}),"\n",(0,r.jsx)(n.p,{children:"b ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Order 2"}),"\n",(0,r.jsx)(n.p,{children:"b ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Order 3"}),"\n",(0,r.jsx)(n.p,{children:"b ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0.33333"}),(0,r.jsx)(n.td,{children:"0.66667"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0.66667"}),(0,r.jsx)(n.td,{children:"0.33333"}),(0,r.jsx)(n.td,{children:"0"})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function d(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This example is similar to example 1, but in this case we test domain option."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  use easifemBase\n  real( DFP ), allocatable :: b( :, : )\n  b = RecursiveNode1D(order=3, ipType=Equidistance, &\n    & domain="Unit")\n  call Display(b, "b Unit=")\n  b = RecursiveNode1D(order=3, ipType=Equidistance, &\n    & domain="Biunit")\n  call Display(b, "b BiUnit=")\n  b = RecursiveNode1D(order=3, ipType=Equidistance, &\n    & domain="Barycentric")\n  call Display(b, "b Barycentric=")\n  b = RecursiveNode1D(order=3, ipType=Equidistance, &\n    & domain="Equilateral")\n  call Display(b, "b Equilateral=")\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"              b Unit=\n----------------------------------\n0.00000  0.33333  0.66667  1.00000\n\n              b BiUnit=\n--------------------------------------\n-1.00000  -0.33333   0.33333   1.00000\n\n          b Barycentric=\n----------------------------------\n0.00000  0.33333  0.66667  1.00000\n1.00000  0.66667  0.33333  0.00000\n\n            b Equilateral=\n--------------------------------------\n-1.00000  -0.33333   0.33333   1.00000\n"})})})]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e){const n={code:"code",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In this example ",(0,r.jsx)(n.code,{children:"ipType=GaussLegendreLobatto"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nreal(DFP), allocatable :: b( :, : )\ninteger(i4b), parameter :: ipType=GaussLegendreLobatto\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  b = RecursiveNode1D(order=0, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(n.p,{children:"b="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"0.5"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"0.5"})})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  b = RecursiveNode1D(order=1, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(n.p,{children:"b="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  b = RecursiveNode1D(order=2, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(n.p,{children:"b="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1.11022E-16"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"1.11022E-16"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  b = RecursiveNode1D(order=4, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(n.p,{children:"b="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1.11022E-16"}),(0,r.jsx)(n.td,{children:"0.17267"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"0.82733"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0.82733"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"0.17267"}),(0,r.jsx)(n.td,{children:"-1.11022E-16"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}const x={},j="RecursiveNode1D",p={id:"RecursiveNodeUtility/RecursiveNode1D",title:"RecursiveNode1D",description:"Returns the barycentric coordinates of recursive nodes on the line.",source:"@site/docs/docs-api/RecursiveNodeUtility/RecursiveNode1D.md",sourceDirName:"RecursiveNodeUtility",slug:"/RecursiveNodeUtility/RecursiveNode1D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode1D",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RecursiveNodeUtility/RecursiveNode1D.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RecursiveNode",permalink:"/docs-api/RecursiveNodeUtility/"},next:{title:"RecursiveNode2D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode2D"}},m={},b=[{value:"Interface",id:"interface",level:2}];function f(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"recursivenode1d",children:"RecursiveNode1D"}),"\n",(0,r.jsx)(n.p,{children:"Returns the barycentric coordinates of recursive nodes on the line."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION RecursiveNode1D(order, ipType, &\n    & domain) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n      !! order >= 0\n    INTEGER(I4B), INTENT(IN) :: ipType\n      !! interpolation point type\n      !! Equidistance\n      !! LobattoGaussJacobi\n      !! LobattoGaussChebyshev\n      !! LobattoGaussGegenbauer\n      !! GaussJacobi\n      !! GaussChebyshev\n      !! GaussGegenbauer\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: domain\n      !! unit (0,1)\n      !! biunit (-1, 1)\n      !! equilateral\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n      !! barycentric coordinates, in xiJ format\n      !! size(ans,1) = 2 corresponding to b0 and b1\n      !! size(ans,2) total number of points\n  END FUNCTION RecursiveNode1D\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"order"})})}),"\n",(0,r.jsx)(n.p,{children:"Order of element."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"ipType"})})}),"\n",(0,r.jsx)(n.p,{children:"Interpolation point type. Following values are allowed."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Equidistance"}),"\n",(0,r.jsx)(n.li,{children:"GaussJacobi"}),"\n",(0,r.jsx)(n.li,{children:"GaussJacobiLobatto"}),"\n",(0,r.jsx)(n.li,{children:"GaussChebyshev"}),"\n",(0,r.jsx)(n.li,{children:"GaussChebyshevLobatto"}),"\n",(0,r.jsx)(n.li,{children:"GaussLegendre"}),"\n",(0,r.jsx)(n.li,{children:"GaussLegendreLobatto"}),"\n",(0,r.jsx)(n.li,{children:"GaussUltraspherical"}),"\n",(0,r.jsx)(n.li,{children:"GaussUltrasphericalLobatto"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"domain"})})}),"\n",(0,r.jsx)(n.p,{children:"It specifies the domain of the element. It is an optional argument. It can take following values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"UNIT"}),", unit segment ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mo,{stretchy:"false",children:"["}),(0,r.jsx)(n.mn,{children:"0"}),(0,r.jsx)(n.mo,{separator:"true",children:","}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"[0,1]"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mopen",children:"["}),(0,r.jsx)(n.span,{className:"mord",children:"0"}),(0,r.jsx)(n.span,{className:"mpunct",children:","}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mclose",children:"]"})]})})]}),", in this case ",(0,r.jsx)(n.code,{children:"SIZE(ans,1)"})," is 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BIUNIT"}),", biunit segment ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mo,{stretchy:"false",children:"["}),(0,r.jsx)(n.mo,{children:"\u2212"}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{separator:"true",children:","}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"[-1,1]"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mopen",children:"["}),(0,r.jsx)(n.span,{className:"mord",children:"\u2212"}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mpunct",children:","}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mclose",children:"]"})]})})]}),", in this case ",(0,r.jsx)(n.code,{children:"SIZE(ans, 1)"})," is 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BARYCENTRIC"}),", in this case ",(0,r.jsx)(n.code,{children:"SIZE(ans,1)"})," is 2."]}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"example",label:"\ufe0f\u0700 Example 1",children:(0,r.jsx)(c,{})}),(0,r.jsx)(a.Z,{value:"example2",label:"Example 2",children:(0,r.jsx)(o,{})}),(0,r.jsx)(a.Z,{value:"example3",label:"Example 3",children:(0,r.jsx)(u,{})}),(0,r.jsx)(a.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function N(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>a});s(67294);var r=s(86010);const t={tabItem:"tabItem_Ymn6"};var i=s(85893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,a),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>g});var r=s(67294),t=s(86010),i=s(12466),a=s(16550),l=s(20469),c=s(91980),d=s(67392),o=s(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=u(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,h]=j({queryString:s,groupId:t}),[p,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,o.Nk)(s);return[t,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),b=(()=>{const e=d??p;return x({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(85893);function N(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),t=l[s].value;t!==r&&(d(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,t.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(N,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function g(e){const n=(0,m.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var r=s(67294);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);