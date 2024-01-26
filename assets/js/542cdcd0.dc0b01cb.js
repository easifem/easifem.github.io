"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16905],{89917:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(85893),a=n(11151),l=n(74866),r=n(85162);const i={},o="GetILUT",c={id:"CSRMatrix/GetILUT",title:"GetILUT",description:"This routine builds the ILUT precondition.",source:"@site/docs/docs-api/CSRMatrix/GetILUT.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/GetILUT",permalink:"/docs-api/CSRMatrix/GetILUT",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRMatrix/GetILUT.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetILUK",permalink:"/docs-api/CSRMatrix/GetILUK"},next:{title:"GetILUTP",permalink:"/docs-api/CSRMatrix/GetILUTP"}},d={},h=[{value:"Interface",id:"interface",level:2}];function m(e){const s={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"getilut",children:"GetILUT"}),"\n",(0,t.jsx)(s.p,{children:"This routine builds the ILUT precondition."}),"\n",(0,t.jsx)(s.p,{children:"ILUT: Incomplete LU factorization with dual truncation strategy."}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"The diagonal elements of the input matrix must be nonzero (at least 'structurally')."})}),"\n",(0,t.jsx)(s.p,{children:"Dual drop strategy works as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Theresholding in L and U as set by ",(0,t.jsx)(s.code,{children:"droptol"}),". Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped, that is"]}),"\n"]}),"\n",(0,t.jsx)(s.span,{className:"katex-display",children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,t.jsxs)(s.msub,{children:[(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"i"}),(0,t.jsx)(s.mi,{children:"j"})]})]}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,t.jsx)(s.mo,{children:"<"}),(0,t.jsx)(s.mtext,{children:"\xa0tol\xa0"}),(0,t.jsx)(s.mo,{children:"\xd7"}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,t.jsxs)(s.msub,{children:[(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"i"}),(0,t.jsx)(s.mi,{children:"i"})]})]}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\vert a_{ij} \\vert < \\text{ tol } \\times \\vert a_{ii} \\vert"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,t.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"ij"})})})]})}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"<"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"\xa0tol\xa0"})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"ii"})})})]})}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mord",children:"\u2223"})]})]})]})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["you can use ",(0,t.jsx)(s.code,{children:"droptol"})," between ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mn,{children:"0.001"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"0.001"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"0.001"})]})})]})," and ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mn,{children:"0.005"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"0.005"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"0.005"})]})})]})]})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Keeping only the largest ",(0,t.jsx)(s.code,{children:"lfil"})," elements in the ith row of L and the largest ",(0,t.jsx)(s.code,{children:"lfil"})," elements in the ith row of ",(0,t.jsx)(s.code,{children:"U"})," (excluding diagonal elements)."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["You can use ",(0,t.jsx)(s.code,{children:"lfil"})," between 5 ans 10. Higher value of lfil is more reliable."]})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Flexibility: one can use ",(0,t.jsx)(s.code,{children:"droptol=0"})," to get a strategy based on keeping the largest elements in each row of ",(0,t.jsx)(s.code,{children:"L"})," and ",(0,t.jsx)(s.code,{children:"U"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Taking ",(0,t.jsx)(s.code,{children:"droptol .ne. 0"})," but ",(0,t.jsx)(s.code,{children:"lfil=n"})," will give the usual threshold strategy (however, fill-in is then not predictible)."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Sparse matrix in modified sparse row storage format:"}),"\n",(0,t.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(r.Z,{value:"interface",label:"\u0700 Interface 1",default:!0,children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetILUT(obj, ALU, JLU, JU, lfil, droptol)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)\n    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)\n    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)\n    INTEGER(I4B), INTENT(IN) :: lfil\n    REAL(DFP), INTENT(IN) :: droptol\n  END SUBROUTINE GetILUT\nEND INTERFACE\n"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"obj"})," matrix stored in Compressed Sparse Row format."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"lfil"})," is a fill-in parameter. Each row of L and each row of U will have a maximum of lfil elements (excluding the diagonal element). lfil must be .ge. 0."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"droptol"})," sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ALU,JLU"}),", matrix stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in ",(0,t.jsx)(s.code,{children:"ALU(1:n)"})," ) is inverted. Each ith row of the ",(0,t.jsx)(s.code,{children:"ALU,JLU"})," matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"JU"})," is an integer array of length n containing the pointers to the beginning of each row of U in the matrix ALU,JLU."]}),"\n"]}),(0,t.jsx)(s.p,{children:"Dual drop strategy works as follows:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Theresholding in L and U as set by ",(0,t.jsx)(s.code,{children:"droptol"}),". Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped."]}),"\n",(0,t.jsxs)(s.li,{children:["Keeping only the largest ",(0,t.jsx)(s.code,{children:"lfil"})," elements in the ith row of L and the largest ",(0,t.jsx)(s.code,{children:"lfil"})," elements in the ith row of ",(0,t.jsx)(s.code,{children:"U"})," (excluding diagonal elements)."]}),"\n",(0,t.jsxs)(s.li,{children:["Flexibility: one can use ",(0,t.jsx)(s.code,{children:"droptol=0"})," to get a strategy based on keeping the largest elements in each row of ",(0,t.jsx)(s.code,{children:"L"})," and ",(0,t.jsx)(s.code,{children:"U"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Taking ",(0,t.jsx)(s.code,{children:"droptol .ne. 0"})," but ",(0,t.jsx)(s.code,{children:"lfil=n"})," will give the usual threshold strategy (however, fill-in is then mpredictible)."]}),"\n"]})]}),(0,t.jsxs)(r.Z,{value:"iface2",label:"\u0700 Interface 2",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetILUT(obj, Pmat, lfil, droptol)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat\n    INTEGER(I4B), INTENT(IN) :: lfil\n    REAL(DFP), INTENT(IN) :: droptol\n  END SUBROUTINE GetILUT\nEND INTERFACE\n"})}),(0,t.jsxs)(s.p,{children:["This method is similar to interface 1, but in this case we return ILU factorization in ",(0,t.jsx)(s.code,{children:"CSRMatrix_"})," form."]})]}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 "})]})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>r});n(67294);var t=n(86010);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function r(e){let{children:s,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,r),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>T});var t=n(67294),a=n(86010),l=n(12466),r=n(16550),i=n(20469),o=n(91980),c=n(67392),d=n(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:a}}=e;return{value:s,label:n,attributes:t,default:a}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function u(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:n}=e;const a=(0,r.k6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(a.location.search);s.set(l,e),a.replace({...a.location,search:s.toString()})}),[l,a])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,l=m(e),[r,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:l}))),[c,h]=x({queryString:n,groupId:a}),[p,j]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,l]=(0,d.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=c??p;return u({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function N(e){let{className:s,block:n,selectedValue:t,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const s=e.currentTarget,n=o.indexOf(s),a=i[n].value;a!==t&&(c(s),r(a))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,a.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function v(e){const s=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(N,{...e,...s}),(0,g.jsx)(b,{...e,...s})]})}function T(e){const s=(0,j.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(s))}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var t=n(67294);const a={},l=t.createContext(a);function r(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);