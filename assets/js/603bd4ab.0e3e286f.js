"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[37305],{22539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=n(85893),a=n(11151),i=n(74866),s=n(85162);function o(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"PROGRAM FIDAPM33\nUSE easifemBase\nTYPE(csrmatrix_) :: obj, obj2, pmat, pmat2\nTYPE(sparseMatrixReOrdering_) :: reorder\n"})}),"\n",(0,r.jsx)(t.p,{children:"Import matrix"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'CALL IMPORT(obj, "./matrixMarket/fidapm33.mtx", SPARSE_FMT_COO)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Let's see its content"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'CALL SPY(obj=obj, filename="FIDAPM33_BEFORE", ext="png")\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(978).Z+"",width:"720",height:"540"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="Incomplete LU decompositiont"',children:'CALL getILUD(obj=obj, Pmat=pmat, alpha=1.0_DFP, droptol=0.001_DFP)\nCALL spy(obj=pmat, filename="FIDAPM33_ILUD_BEFORE", ext="png")\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(99186).Z+"",width:"720",height:"540"})}),"\n",(0,r.jsx)(t.p,{children:"NestedDissect from Metis."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="Cleanup"',children:'! CALL NestedDissect(reorder=reorder, csrMat=obj)\n! obj2 = Permute(obj, reorder, reorder)\n! CALL SPY(obj2, "FIDAPM33_AFTER")\n!\n! CALL getILUD(obj=obj2, Pmat=pmat2, alpha=1.0_DFP, droptol=0.001_DFP)\n! CALL spy(pmat2, "FIDAPM33_ILUD_AFTER")\n\nCALL DEALLOCATE (obj)\nCALL DEALLOCATE (obj2)\nCALL DEALLOCATE (pmat)\nCALL DEALLOCATE (pmat2)\nEND PROGRAM FIDAPM33\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const c={},d="Import",u={id:"CSRMatrix/Import",title:"Import",description:"Import() can be used for importing sparse matrix data from a file.",source:"@site/docs/docs-api/CSRMatrix/Import.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/Import",permalink:"/docs-api/CSRMatrix/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRMatrix/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Harwell-Boeing",permalink:"/docs-api/CSRMatrix/Harwell-Boeing"},next:{title:"Initiate",permalink:"/docs-api/CSRMatrix/Initiate"}},h={},m=[{value:"Header",id:"header",level:3},{value:"Interface",id:"interface",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Import()"})," can be used for importing sparse matrix data from a file."]}),"\n",(0,r.jsxs)(t.p,{children:["Currently, ",(0,r.jsx)(t.code,{children:"SPARSE_FMT_COO"})," is supported."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The routine will open the file, read data, and then close the file."})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SPARSE_FMT_COO"})," format is actually ",(0,r.jsx)(t.code,{children:"MatrixMarket"})," format, which is described ",(0,r.jsx)(t.a,{href:"https://math.nist.gov/MatrixMarket/formats.html",children:"here"})," in detail."]}),"\n",(0,r.jsx)(t.p,{children:"The brief description of this file format is given below."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Matrix market format"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t.p,{children:"This is the native exchange format for the Matrix Market."}),(0,r.jsx)(t.p,{children:"The Matrix Market (MM) exchange formats provide a simple mechanism to facilitate the exchange of matrix data. In particular, the objective has been to define a minimal base ASCII file format which can be very easily explained and parsed, but can easily adapted to applications with a more rigid structure, or extended to related data objects. The MM exchange format for matrices is really a collection of affiliated formats which share design elements. In our initial specification, two matrix formats are defined."}),(0,r.jsx)(t.p,{children:"A file format suitable for representing general sparse matrices. Only nonzero entries are provided, and the coordinates of each nonzero entry is given explicitly. This is illustrated in the example below."}),(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Comment starts with ",(0,r.jsx)(t.code,{children:"%"})]})}),(0,r.jsxs)(t.p,{children:["Consider the following ",(0,r.jsx)(t.code,{children:"5x5"})," matrix:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"1    0      0       6      0     \n0   10.5    0       0      0     \n0    0    .015      0      0     \n0  250.5    0     -280    33.32  \n0    0      0       0     12  \n"})}),(0,r.jsx)(t.p,{children:"In MM coordinate format this could be represented as follows."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"%%MatrixMarket matrix coordinate real general \n%=================================================================================\n%\n% This ASCII file represents a sparse MxN matrix with L \n% nonzeros in the following Matrix Market format:\n%\n% Indices are 1-based, i.e. A(1,1) is the first element.\n%\n%=================================================================================\n  5  5  8\n    1     1   1.000e+00\n    2     2   1.050e+01\n    3     3   1.500e-02\n    1     4   6.000e+00\n    4     2   2.505e+02\n    4     4  -2.800e+02\n    4     5   3.332e+01\n    5     5   1.200e+01\n"})}),(0,r.jsx)(t.h3,{id:"header",children:"Header"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"%%MatrixMarket ${1} ${2} ${3} ${4} ${5}\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"${1}=%%MatrixMarket"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"${2}=matrix"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"${3}=coorindate|array"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"${4}=real|integer|complex|pattern|"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"${5}=general|symmetric|skew-symmetric|Hermitian"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The first line contains the type code. In this example, it indicates that the object being represented is a ",(0,r.jsx)(t.code,{children:"matrix"})," in ",(0,r.jsx)(t.code,{children:"coordinate"})," format and that the numeric data following is ",(0,r.jsx)(t.code,{children:"real"})," and represented in ",(0,r.jsx)(t.code,{children:"general"})," form. (By general we mean that the matrix format is not taking advantage of any symmetry properties.)"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Variants of the coordinate format are defined for matrices with complex and integer entries, as well as for those in which only the position of the nonzero entries is prescribed (pattern matrices). (These would be indicated by changing real to complex, integer, or pattern, respectively, on the header line)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Additional variants are defined for cases in which symmetries can be used to significantly reduce the size of the data: symmetric, skew-symmetric and Hermitian. In these cases, only entries in the lower triangular portion need be supplied. In the skew-symmetric case the diagonal entries are zero, and hence they too are omitted. (These would be indicated by changing general to symmetric, skew-symmetric, or hermitian, respectively, on the header line)."}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Import(obj, fileName, matFormat)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    CHARACTER(LEN=*), INTENT(IN) :: fileName\n    INTEGER(I4B), INTENT(IN) :: matFormat\n  END SUBROUTINE Import\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\u0700 Example",children:(0,r.jsx)(l,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=p({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),j=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function I(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(I,{...e,...t})]})}function y(e){const t=(0,x.Z)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FIDAPM33_BEFORE-8e842adb7e80fda437abae290bd521f0.png"},99186:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FIDAPM33_ILUD_BEFORE-96e423530b96e7e50b4fc5553a7e10bc.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);