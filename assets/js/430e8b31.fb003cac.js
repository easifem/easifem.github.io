"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[51259],{35258:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>E,contentTitle:()=>x,default:()=>L,frontMatter:()=>g,metadata:()=>f,toc:()=>N});var r=a(85893),t=a(11151),s=a(74866),l=a(85162);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,r.jsx)(n.p,{children:"Declaring variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'TYPE(CSRMatrix_) :: csrmat\nCHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap005.mtx"\nREAL( DFP ), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:) \nINTEGER( I4B ) :: info\nREAL( DFP ) :: ev1\n'})}),"\n",(0,r.jsx)(n.p,{children:"Import csrmatrix from matrix market."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)\nCALL Display(SIZE(csrmat, 1), "csrmat = ")\nCALL Display(SIZE(csrmat, 2), "csrmat = ")\nCALL Display(GetNNZ(csrmat), "GetNNZ = ")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Getting the largest eigenvalue."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'ev1 = SymLargestEigenVal(mat=csrmat, which="LM")\nCALL Display(ev1, "ev1 = ")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,r.jsx)(n.p,{children:"Declaring variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'TYPE(CSRMatrix_) :: csrmat\nCHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap005.mtx"\nREAL( DFP ), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:) \nINTEGER( I4B ) :: info\nREAL( DFP ) :: ev1\n'})}),"\n",(0,r.jsx)(n.p,{children:"Import csrmatrix from matrix market."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)\nCALL Display(SIZE(csrmat, 1), "csrmat = ")\nCALL Display(SIZE(csrmat, 2), "csrmat = ")\nCALL Display(GetNNZ(csrmat), "GetNNZ = ")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Getting the largest eigenvalue."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'ev1 = SymLargestEigenVal(mat=csrmat, which="LA")\nCALL Display(ev1, "ev1 = ")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"end program main\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function m(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,r.jsx)(n.p,{children:"Declaring variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'TYPE(CSRMatrix_) :: csrmat\nCHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap005.mtx"\nINTEGER( I4B ) :: info, nev\nREAL( DFP ), ALLOCATABLE :: ev1(:)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Import csrmatrix from matrix market."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)\nCALL Display(SIZE(csrmat, 1), "csrmat = ")\nCALL Display(SIZE(csrmat, 2), "csrmat = ")\nCALL Display(GetNNZ(csrmat), "GetNNZ = ")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Getting the largest eigenvalue."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'nev = 6\nev1 = SymLargestEigenVal(mat=csrmat, which="LM", nev=nev)\nCALL Display(ev1, "ev1 = ")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"end program main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}function h(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,r.jsx)(n.p,{children:"Declaring variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'TYPE(CSRMatrix_) :: csrmat\nCHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap005.mtx"\nINTEGER( I4B ) :: info, nev\nREAL( DFP ), ALLOCATABLE :: ev1(:)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Import csrmatrix from matrix market."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)\nCALL Display(SIZE(csrmat, 1), "csrmat = ")\nCALL Display(SIZE(csrmat, 2), "csrmat = ")\nCALL Display(GetNNZ(csrmat), "GetNNZ = ")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Getting the largest eigenvalue."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'nev = 6\nev1 = SymLargestEigenVal(mat=csrmat, which="LA", nev=nev)\nCALL Display(ev1, "ev1 = ")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"end program main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}const g={},x="SymLargestEigenval",f={id:"CSRMatrix/SymLargestEigenval",title:"SymLargestEigenval",description:"This routine computes the largest eigenvalue of a csrmatrix.",source:"@site/docs/docs-api/CSRMatrix/SymLargestEigenval.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/SymLargestEigenval",permalink:"/docs-api/CSRMatrix/SymLargestEigenval",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/SymLargestEigenval.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperluLinSolve",permalink:"/docs-api/CSRMatrix/SuperluLinSolve"},next:{title:"SymSmallestEigenval",permalink:"/docs-api/CSRMatrix/SymSmallestEigenval"}},E={},N=[{value:"Interface",id:"interface",level:2}];function v(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"symlargesteigenval",children:"SymLargestEigenval"}),"\n",(0,r.jsx)(n.p,{children:"This routine computes the largest eigenvalue of a csrmatrix."}),"\n",(0,r.jsx)(n.p,{children:"Calling example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"ans = SymLargestEigenVal(CSRMatrix_::mat [, char(2)::which, &\n  & INTEGER::NCV, INTEGER::maxIter, REAL::tol]) &\n\nans = SymLargestEigenVal(CSRMatrix_::mat, INTEGER::nev &\n  & [, char(2)::which, INTEGER::NCV, &\n  & INTEGER::maxIter, REAL::tol]) &\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"1",label:"\u0700 SymLargestEigenVal(mat, which, NCV, maxIter, tol)",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'INTERFACE\n  MODULE FUNCTION SymLargestEigenVal(mat, which, NCV, maxIter, tol) &\n    & RESULT(ans)\n    TYPE(CSRMatrix_), INTENT(IN) :: mat\n    !! dense matrix\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: which\n    !! `which = "LM"` \u21e8 absolute largest eigenvalue\n    !! `which = "LA"` \u21e8 algebraic largest eigenvalue\n    !! default is "LA"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV\n    !! Number of Lanczos vectors generated\n    !! It must be greater than 1 and smaller than `size(mat,1)`\n    !! Default is `NCV = MIN(n, 20)`\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter\n    !! Maximum number of iteration default = `N*10`\n    REAL(DFP), OPTIONAL, INTENT(IN) :: tol\n    !! tolerance, default = 0.0\n    REAL(DFP) :: ans\n    !! maximum eigenvalue\n  END FUNCTION SymLargestEigenVal\nEND INTERFACE\n'})})}),(0,r.jsx)(l.Z,{value:"2",label:"\ufe0f\u0700 Example 1",children:(0,r.jsx)(c,{})}),(0,r.jsx)(l.Z,{value:"3",label:"\ufe0f\u0700 Example 2",children:(0,r.jsx)(u,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2"})]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 SymLargestEigenVal2(mat, nev, which, NCV, maxIter, tol)",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'INTERFACE\n  MODULE FUNCTION SymLargestEigenVal2(mat, nev, which, NCV, maxIter, tol) &\n    & RESULT(ans)\n    TYPE(CSRMatrix_), INTENT(IN) :: mat\n    !! dense matrix\n    INTEGER(I4B), INTENT(IN) :: nev\n    !! number of eigenvalues requested\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: which\n    !! `which = "LM"` \u21e8 absolute largest eigenvalue\n    !! `which = "LA"` \u21e8 algebraic largest eigenvalue\n    !! default is "LA"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV\n    !! Number of Lanczos vectors generated\n    !! It must be greater than 1 and smaller than `size(mat,1)`\n    !! Default is `NCV = MIN(n, MAX(2*nev+1, 20))`\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter\n    !! Maximum number of iteration default = `N*10`\n    REAL(DFP), OPTIONAL, INTENT(IN) :: tol\n    !! tolerance, default = 0.0\n    REAL(DFP) :: ans(nev)\n    !! first k, largest eigenvalue\n  END FUNCTION SymLargestEigenVal2\nEND INTERFACE\n'})})}),(0,r.jsx)(l.Z,{value:"2",label:"\ufe0f\u0700 Example 1",children:(0,r.jsx)(d,{})}),(0,r.jsx)(l.Z,{value:"3",label:"\ufe0f\u0700 Example 2",children:(0,r.jsx)(p,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2",default:!0})]})]})}function L(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var r=a(86010);const t={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>I});var r=a(67294),t=a(86010),s=a(12466),l=a(16550),i=a(20469),c=a(91980),o=a(67392),u=a(50012);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=d(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,m]=p({queryString:a,groupId:t}),[g,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,u.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),f=(()=>{const e=o??g;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),x(e)}),[m,x,s]),tabValues:s}}var x=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=a(85893);function N(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{const n=e.currentTarget,a=c.indexOf(n),t=i[a].value;t!==r&&(o(n),l(t))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,E.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:m,onClick:u,...s,className:(0,t.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function L(e){const n=g(e);return(0,E.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,E.jsx)(N,{...e,...n}),(0,E.jsx)(v,{...e,...n})]})}function I(e){const n=(0,x.Z)();return(0,E.jsx)(L,{...e,children:m(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var r=a(67294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);