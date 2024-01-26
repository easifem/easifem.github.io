"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[79786],{4493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(85893),r=n(11151),o=n(74866),s=n(85162);const i={},l="MatVec",c={id:"MatrixFieldLis/MatVec",title:"MatVec",description:"Perform matrix vector multipliction.",source:"@site/docs/docs-api/MatrixFieldLis/MatVec.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/MatVec",permalink:"/docs-api/MatrixFieldLis/MatVec",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixFieldLis/MatVec.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsPreconditionSet",permalink:"/docs-api/MatrixFieldLis/IsPreconditionSet"},next:{title:"MatrixFieldCheckEssentialParam",permalink:"/docs-api/MatrixFieldLis/MatrixFieldCheckEssentialParam"}},u={},d=[{value:"Interface",id:"interface",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"matvec",children:"MatVec"}),"\n",(0,a.jsx)(t.p,{children:"Perform matrix vector multipliction."}),"\n",(0,a.jsx)(t.p,{children:"Calling example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL MatVec(\nMatrixField_::obj, &\n& REAL::x(:), &\n& REAL::y(:) &\n& <, bool::isTranspose &>\n& <, bool::addContribution &>\n& <, real::scale>)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL MatVec(\nMatrixField_::obj, &\n& AbstractNodeField_::x, &\n& AbstractNodeField_::y &\n& <, bool::isTranspose &>\n& <, bool::addContribution &>\n& <, real::scale>)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Matvec(obj, x, y, isTranspose, addContribution, &\n    & scale)\n    IMPORT :: AbstractMatrixField_, DFP, LGT\n    CLASS(AbstractMatrixField_), INTENT(IN) :: obj\n    REAL(DFP), INTENT(INOUT) :: y(:)\n    !! Output vector y=Ax\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! Input vector in y=Ax\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose\n    !! True if we have to use TRANSPOSE of matrix\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n    !! Default is FALSE\n    !! if true then we do not set y = 0, and perform\n    !! y = y + matvec(obj, x)\n    !! if false, then we perform y = matvec(obj, x)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n  END SUBROUTINE Matvec\nEND INTERFACE\n"})}),(0,a.jsxs)(t.p,{children:["This routine returns the matrix vector multiplication. Here, input vector (",(0,a.jsx)(t.code,{children:"x"}),")\nis a native fortran vector. The output vector (",(0,a.jsx)(t.code,{children:"y"}),") is also a native fortran\nvector. It should be noted that the output vector should be allocated\noutside, and it should have same length as the input vector."]})]}),(0,a.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example"}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Matvec(obj, x, y, isTranspose, addContribution, &\n    & scale)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, LGT, DFP\n    CLASS(AbstractMatrixField_), INTENT(IN) :: obj\n    CLASS(AbstractNodeField_), INTENT(INOUT) :: y\n    !! Output vector y=Ax\n    CLASS(AbstractNodeField_), INTENT(IN) :: x\n    !! Input vector in y=Ax\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose\n    !! True if we have to use TRANSPOSE of matrix\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n    !! Default is FALSE\n    !! if true then we do not set y = 0, and perform\n    !! y = y + matvec(obj, x)\n    !! if false, then we perform y = matvec(obj, x)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n  END SUBROUTINE Matvec\nEND INTERFACE\n"})}),(0,a.jsxs)(t.p,{children:["This routine returns the matrix vector multiplication. Here, input vector (",(0,a.jsx)(t.code,{children:"x"}),")\nis an instance of AbstractNodeField.\nThe output vector (",(0,a.jsx)(t.code,{children:"y"}),") is also an instance of AbstractNodeField.\nIt should be noted that the output vector should be allocated\noutside, and it should have same length as the input vector."]})]}),(0,a.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example"}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(67294),r=n(86010),o=n(12466),s=n(16550),i=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),x=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function N(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function T(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function I(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(N,{...e,...t}),(0,v.jsx)(T,{...e,...t})]})}function E(e){const t=(0,m.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);