"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[89243],{21585:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var s=n(85893),t=n(11151),r=n(74866),l=n(85162);function i(e){const a={admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["This example shows the usage of ",(0,s.jsx)(a.code,{children:"JacobiDMatrix"})," method."]}),"\n",(0,s.jsxs)(a.li,{children:["This routine yields the differentiation matrix, ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"D"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["In this example ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mi,{children:"\u03b1"}),(0,s.jsx)(a.mo,{children:"="}),(0,s.jsx)(a.mi,{children:"\u03b2"}),(0,s.jsx)(a.mo,{children:"="}),(0,s.jsx)(a.mn,{children:"0.0"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,s.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(a.span,{className:"mrel",children:"="}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(a.span,{className:"mrel",children:"="}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n, ii\n  real(dfp), allocatable :: fval( : ), pt( : ), wt(:), &\n    & f1val(:), error(:, :), D(:,:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n"})}),"\n",(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.p,{children:"In this example we consider"}),(0,s.jsx)(a.span,{className:"katex-display",children:(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mi,{children:"f"}),(0,s.jsx)(a.mo,{stretchy:"false",children:"("}),(0,s.jsx)(a.mi,{children:"x"}),(0,s.jsx)(a.mo,{stretchy:"false",children:")"}),(0,s.jsx)(a.mo,{children:"="}),(0,s.jsx)(a.mi,{children:"s"}),(0,s.jsx)(a.mi,{children:"i"}),(0,s.jsx)(a.mi,{children:"n"}),(0,s.jsx)(a.mo,{stretchy:"false",children:"("}),(0,s.jsx)(a.mn,{children:"4"}),(0,s.jsx)(a.mi,{children:"\u03c0"}),(0,s.jsx)(a.mi,{children:"x"}),(0,s.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x) = sin(4\\pi x)"})]})})}),(0,s.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,s.jsx)(a.span,{className:"mopen",children:"("}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,s.jsx)(a.span,{className:"mclose",children:")"}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(a.span,{className:"mrel",children:"="}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"in"}),(0,s.jsx)(a.span,{className:"mopen",children:"("}),(0,s.jsx)(a.span,{className:"mord",children:"4"}),(0,s.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c0"}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,s.jsx)(a.span,{className:"mclose",children:")"})]})]})]})})]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",metastring:'title "Prepare quadratures"',children:'  !!\n  error = zeros(30, 2, 1.0_DFP)\n  !!\n  DO n = 1, SIZE(error,1)\n    !!\n    call reallocate( pt, n+1, wt, n+1, fval, n+1 )\n    !!\n    call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n      & pt=pt, wt=wt, quadType=quadType )\n    !!\n    fval = func1(pt)\n    !!\n    D = JacobiDMatrix(n=n, alpha=alpha, &\n      & beta=beta, x=pt, quadType=quadType)\n    !!\n    f1val = dfunc1(pt)\n    !!\n    error(n,1) = n\n    error(n,2) = NORM2( ABS(f1val-MATMUL(D,fval)) )\n    !!\n  END DO\n  !!\n  CALL display( MdEncode(error), "error=")\n'})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"See results"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.p,{children:"error="}),(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"order(n)"}),(0,s.jsx)(a.th,{children:"MAX(err)"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"17.772"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"2"}),(0,s.jsx)(a.td,{children:"21.766"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"5"}),(0,s.jsx)(a.td,{children:"30.677"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"10"}),(0,s.jsx)(a.td,{children:"30.737"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"15"}),(0,s.jsx)(a.td,{children:"5.9239"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"20"}),(0,s.jsx)(a.td,{children:"8.60174E-02"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"25"}),(0,s.jsx)(a.td,{children:"1.11384E-04"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"30"}),(0,s.jsx)(a.td,{children:"1.93772E-07"})]})]})]})]})]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"  contains\n  elemental function func1(x) result(ans)\n    real(dfp), intent(in) :: x\n    real(dfp) :: ans\n    ans = SIN(4.0_DFP * pi * x)\n  end function func1\n  !!\n  elemental function dfunc1(x) result(ans)\n    real(dfp), intent(in) :: x\n    real(dfp) :: ans\n    ans = 4.0_DFP * pi * COS(4.0_DFP * pi * x)\n  end function dfunc1\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const o={},d="JacobiDMatrix",m={id:"JacobiPolynomialUtility/JacobiDMatrix",title:"JacobiDMatrix",description:"Interface",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiDMatrix.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiDMatrix",permalink:"/docs-api/JacobiPolynomialUtility/JacobiDMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiDMatrix.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiBeta",permalink:"/docs-api/JacobiPolynomialUtility/JacobiBeta"},next:{title:"JacobiEval",permalink:"/docs-api/JacobiPolynomialUtility/JacobiEval"}},h={},u=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function p(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"jacobidmatrix",children:"JacobiDMatrix"}),"\n",(0,s.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiDMatrix(n, alpha, beta, x, quadType) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n      !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n      !! alpha > -1.0\n    REAL(DFP), INTENT(IN) :: beta\n      !! beta > -1.0\n    REAL(DFP), INTENT(IN) :: x(0:n)\n      !! quadrature points\n    INTEGER(I4B), INTENT(IN) :: quadType\n      !! Gauss and GaussLobatto\n    REAL(DFP) :: ans(0:n, 0:n)\n      !! D matrix\n  END FUNCTION JacobiDMatrix\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,s.jsx)(c,{})}),(0,s.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function x(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>l});n(67294);var s=n(86010);const t={tabItem:"tabItem_Ymn6"};var r=n(85893);function l(e){let{children:a,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,l),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>v});var s=n(67294),t=n(86010),r=n(12466),l=n(16550),i=n(20469),c=n(91980),o=n(67392),d=n(50012);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return m(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const t=(0,l.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[o,m]=p({queryString:n,groupId:t}),[x,j]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),b=(()=>{const e=o??x;return u({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),j(e)}),[m,j,r]),tabValues:r}}var j=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function N(e){let{className:a,block:n,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const a=e.currentTarget,n=c.indexOf(a),t=i[n].value;t!==s&&(o(a),l(t))},m=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>c.push(e),onKeyDown:m,onClick:d,...r,className:(0,t.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function g(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function y(e){const a=x(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(N,{...e,...a}),(0,f.jsx)(g,{...e,...a})]})}function v(e){const a=(0,j.Z)();return(0,f.jsx)(y,{...e,children:m(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>l});var s=n(67294);const t={},r=s.createContext(t);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);