"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[4415],{5828:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>v,default:()=>b,frontMatter:()=>f,metadata:()=>m,toc:()=>L});var a=r(85893),t=r(11151),l=r(74866),s=r(85162);function c(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    INTEGER(I4B), ALLOCATABLE :: intvec1(:)\n    REAL( DFP ), ALLOCATABLE :: realvec1(:)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now lets us append a single ENTRY to a vector of integers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL Append(intvec1, 1)\n    CALL OK( ALL(intvec1 .EQ. [1]), "Append single ENTRY"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Appending a vector to a vector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL Append(intvec1, [2,3])\n    CALL OK( ALL(intvec1 .EQ. [1,2,3]), "Append a vector"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now lets us append a single real value to realvec."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL Append(realvec1, 1.0_DFP)\n    CALL OK( ALL(realvec1 .EQ. [1.0_DFP]), "Append single ENTRY"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Appending vector to a vector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL Append(realvec1, [2.0_DFP,3.0_DFP])\n    CALL OK( ALL(realvec1 .EQ. [1.0_DFP,2.0_DFP,3.0_DFP]), "Append a vector"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Cleanup"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    DEALLOCATE(intvec1, realvec1)\nEND PROGRAM main\n"})})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function o(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    INTEGER(I4B), ALLOCATABLE :: intvec1(:)\n    REAL( DFP ), ALLOCATABLE :: realvec1(:)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now lets us append a single ENTRY to a vector of integers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  intvec1 = [1] .append. 2\n  CALL OK( ALL(intvec1 .EQ. [1, 2]), "Append single ENTRY"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Appending a vector to a vector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  intvec1 = intvec1 .append. [3]\n  CALL OK( ALL(intvec1 .EQ. [1,2,3]), "Append a vector"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now lets us append a single real value to realvec."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  realvec1 = [1.0_DFP] .append. 2.0_DFP\n  CALL OK( ALL(realvec1 .EQ. [1.0_DFP, 2.0_DFP]), "Append single ENTRY"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Appending vector to a vector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  realvec1 = realvec1 .append. [3.0_DFP]\n  CALL OK( ALL(realvec1 .EQ. [1.0_DFP,2.0_DFP,3.0_DFP]), "Append a vector"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Cleanup"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    DEALLOCATE(intvec1, realvec1)\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}function p(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    INTEGER(I4B), ALLOCATABLE :: C(:), B(:), A(:)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",metastring:'title="A and B are vectors"',children:'  A = [1]\n  B = [2]\n  CALL Append(C, A, B)\n  CALL OK( ALL(C .EQ. [1, 2]), "tests(1):"  )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",metastring:'title="A is vector B is scalar"',children:'  A = [1]\n  CALL Append(C, A, 2)\n  CALL OK( ALL(C .EQ. [1, 2]), "tests(2):"  )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}function h(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    INTEGER(I4B), ALLOCATABLE :: intvec1(:)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now lets us append a single ENTRY to a vector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL Append(intvec1, 1, mask=.true.)\n    CALL Append(intvec1, 1, mask=.false.)\n    CALL OK( ALL(intvec1 .EQ. [1]), "Append single ENTRY"  )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Appending a vector to a vector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL Append(intvec1, [2,3], mask=[.true., .true.])\n    CALL Append(intvec1, [4,5], mask=[.true., .false.])\n    CALL OK( ALL(intvec1 .EQ. [1,2,3,4]), "Append a vector"  )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function A(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    INTEGER(I4B), ALLOCATABLE :: C(:), B(:), A(:)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",metastring:'title="A and B are vectors"',children:'  A = [1, 2]\n  B = [3, 4]\n  !!\n  !! Append B(1) and B(2) to A and assign to C.\n  !!\n  CALL Append(C, A, B, mask=[.true., .true.]) \n  CALL OK( ALL(C .EQ. [1, 2, 3, 4]), "Append:"  )\n\n  !!\n  !! Append B(1) to A and assign to C.\n  !!\n  CALL Append(C, A, B, mask=[.true., .false.]) \n  CALL OK( ALL(C .EQ. [1, 2, 3]), "Append:"  )\n\n\n  !!\n  !! Do not append B to A, just assign A to C.\n  !!\n  CALL Append(C, A, B, mask=[.false., .false.]) \n  CALL OK( ALL(C .EQ. [1, 2]), "Append:" )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",metastring:'title="A is vector B is scalar"',children:'  !!\n  !! Append 3 to A and then assign result to C\n  !!\n  CALL Append(C, A, 3, mask=.true.)\n  CALL OK( ALL(C .EQ. [1, 2, 3]), "Append:"  )\n\n  !!\n  !! Do not append 3 to A, assign result to C, that is C =A\n  !!\n  CALL Append(C, A, 3, mask=.false.)\n  CALL OK( ALL(C .EQ. [1, 2]), "Append:"  )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}const f={},v="Append",m={id:"AppendUtility/Append",title:"Append",description:"Append is a generic subroutine to append entries to vector of real or integer.",source:"@site/docs/docs-api/AppendUtility/Append.md",sourceDirName:"AppendUtility",slug:"/AppendUtility/Append",permalink:"/docs-api/AppendUtility/Append",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AppendUtility/Append.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AppendUtility",permalink:"/docs-api/AppendUtility/"},next:{title:"ColConcat",permalink:"/docs-api/AppendUtility/ColConcat"}},g={},L=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2}];function C(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"append",children:"Append"}),"\n",(0,a.jsx)(n.p,{children:"Append is a generic subroutine to append entries to vector of real or integer."}),"\n","\n","\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"While calling Append the initial vector can be unallocated in the begining."})}),"\n",(0,a.jsx)(n.p,{children:"Calling examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"CALL Append(A, entry)\nCALL Append(C, A, B)\nCALL Append(A, entry, mask)\nCALL Append(C, A, B, mask)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(s.Z,{value:"append",label:"Append (1)",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"CALL Append(A, entry)\n"})}),(0,a.jsx)(n.p,{children:"Here,"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"A"})," can be an allocatable vector of real or integer."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"entry"})," can be a scalar of real or integer."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"entry"})," can be a vector of real or integer."]}),"\n"]}),(0,a.jsx)(n.p,{children:"We can:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Append a scalar-integer to an integer-vector"}),"\n",(0,a.jsx)(n.li,{children:"Append an integer-vector and scalar to an integer-vector"}),"\n",(0,a.jsx)(n.li,{children:"Append a scalar-real to a real-vector"}),"\n",(0,a.jsx)(n.li,{children:"Append a real-vector to a real-vector"}),"\n"]}),(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"We can also use this method as:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"A = A .append. entry\n"})})]})]}),(0,a.jsx)(s.Z,{value:"example",label:"Example 1",children:(0,a.jsx)(i,{})}),(0,a.jsx)(s.Z,{value:"example2",label:"Example 2",children:(0,a.jsx)(d,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(s.Z,{value:"append",label:"Append (2)",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"CALL Append(C, A, B)\n"})}),(0,a.jsx)(n.p,{children:"where,"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Append A and B, then assign it to ",(0,a.jsx)(n.code,{children:"C"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"C"})," can be an allocatable vector of real or integer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"A"})," can be a vector of real or integer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"B"})," can be a scalar of real or integer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"B"})," can be a vector of real or integer"]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Currently, ",(0,a.jsx)(n.code,{children:"A"})," cannot be scalar in the above interface."]})}),(0,a.jsx)(n.p,{children:"We can:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Append a scalar and a vector of int to another vector of int"}),"\n",(0,a.jsx)(n.li,{children:"Append two vectors of int to another vector of int"}),"\n",(0,a.jsx)(n.li,{children:"Append a scalar and a vector of real to another vector of real"}),"\n",(0,a.jsx)(n.li,{children:"Append two vectors of real to another vector of real"}),"\n"]})]}),(0,a.jsx)(s.Z,{value:"example",label:"See example",children:(0,a.jsx)(u,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(s.Z,{value:"append",label:"Append (3)",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL Append(A, entry, mask)\n"})}),(0,a.jsx)(n.p,{children:"here,"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"A"})," is an allocatable vector of real or integer."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"entry"})," can be a scalar of real or integer. In this case ",(0,a.jsx)(n.code,{children:"mask"})," is a scalar of logical type"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"entry"})," can be a vector of real or integer. In this case, ",(0,a.jsx)(n.code,{children:"mask"})," will be a vector of logical types."]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The size of ",(0,a.jsx)(n.code,{children:"mask"})," should be same as the size of ",(0,a.jsx)(n.code,{children:"entry"}),"."]})}),(0,a.jsx)(n.p,{children:"We can:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Masked append a scalar integer to a vector of int"}),"\n",(0,a.jsx)(n.li,{children:"Masked append a scalar real to a vector of reals"}),"\n",(0,a.jsx)(n.li,{children:"Masked append a vector of integer to a vector of integer"}),"\n",(0,a.jsx)(n.li,{children:"Masked append a vector of real to a vector of real"}),"\n"]})]}),(0,a.jsx)(s.Z,{value:"example",label:"See example",children:(0,a.jsx)(x,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(s.Z,{value:"append",label:"Append (4)",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL Append(C, A, B, mask)\n"})}),(0,a.jsx)(n.p,{children:"where,"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"C"})," is an allocatable vector of real or integer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"A"})," is a vector of real or integer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"B"})," is a vector of real or integer"]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Currently, we do not allow ",(0,a.jsx)(n.code,{children:"A"})," to be a scalar in the above call."]})}),(0,a.jsx)(n.p,{children:"We can:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Masked append a scalar and vector of int to another vector of int"}),"\n",(0,a.jsx)(n.li,{children:"Masked append a scalar and vector real to another vector of real"}),"\n",(0,a.jsx)(n.li,{children:"Masked append two vectors of integer to another vector of integer"}),"\n",(0,a.jsx)(n.li,{children:"Masked append two vectors of real to another vector of real"}),"\n"]})]}),(0,a.jsx)(s.Z,{value:"example",label:"See example",children:(0,a.jsx)(j,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var l=r(85893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>C});var a=r(67294),t=r(86010),l=r(12466),s=r(16550),c=r(20469),i=r(91980),o=r(67392),d=r(50012);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function A(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=u(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,p]=x({queryString:r,groupId:t}),[A,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),f=(()=>{const e=o??A;return h({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),j(e)}),[p,j,l]),tabValues:l}}var j=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function m(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=c[r].value;t!==a&&(o(n),s(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:p,onClick:d,...l,className:(0,t.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function L(e){const n=A(e);return(0,v.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(m,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function C(e){const n=(0,j.Z)();return(0,v.jsx)(L,{...e,children:p(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var a=r(67294);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);