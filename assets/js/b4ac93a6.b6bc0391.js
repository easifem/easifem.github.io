"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[23659],{43665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(85893),r=n(11151),i=n(74866),s=n(85162);const l={},o="Initiate",c={id:"MatrixField/Initiate",title:"Initiate",description:"This method constructs an instance of AbstractMatrixField.",source:"@site/docs/docs-api/MatrixField/Initiate.md",sourceDirName:"MatrixField",slug:"/MatrixField/Initiate",permalink:"/docs-api/MatrixField/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/MatrixField/Import"},next:{title:"IsPreconditionSet",permalink:"/docs-api/MatrixField/IsPreconditionSet"}},d={},u=[{value:"Interface",id:"interface",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,a.jsx)(t.p,{children:"This method constructs an instance of AbstractMatrixField."}),"\n",(0,a.jsx)(t.p,{children:"Calling examples:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL Initiate( AbstractMatrixField_ :: obj, ParameterList_ :: param, Domain_ :: dom )\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL Initiate( &\n  & AbstractMatrixField_ :: obj, &\n  & AbstractMatrixField_ :: obj2 &\n  <& , Bool::copyFull> &\n  <& , Bool::copyStructure> &\n  <& , Bool :: usePointer> )\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL Initiate( &\n  & AbstractMatrixField_ :: obj, &\n  & ParameterList_ :: param, &\n  & DomainPointer_ :: dom)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(s.Z,{value:"1",label:"Interface 1",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, param, dom )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  TYPE( ParameterList_), INTENT( IN ) :: param\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,a.jsx)(t.p,{children:"This routine creates a square sparse matrix."}),(0,a.jsxs)(t.p,{children:["This routine initiates an instance of ",(0,a.jsx)(t.a,{href:"/docs-api/MatrixField/MatrixField_",children:"MatrixField_"}),".\nThe options/arguments to initiate the matrix field are\ncontained inside param, which is an instance of ",(0,a.jsx)(t.a,{href:"/docs-api/ParameterList/ParameterList_",children:"ParameterList_"}),".\nIn addition, ",(0,a.jsx)(t.a,{href:"/docs-api/Domain/Domain_",children:"Domain_"})," ",(0,a.jsx)(t.code,{children:"dom"})," is target to the pointer ",(0,a.jsx)(t.code,{children:"obj%domain"}),"."]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Param contains both essential and optional parameters which are used in\nconstructing the matrix field"}),"\n",(0,a.jsx)(t.li,{children:"dom is a pointer to a domain, where we are interested in constructing the\nmatrix"}),"\n"]}),(0,a.jsx)(t.p,{children:"ESSENTIAL PARAMETERS are"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"name"})," This is name of field (char)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"matrixProp"}),", UNSYM, SYM (char)"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"engine"})}),"\n"]}),(0,a.jsx)(t.p,{children:"OPTIONAL PARAMETERS"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"spaceCompo"}),", INT, default is 1"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"timeCompo"}),", INT, default is 1"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"fieldType"}),", INT, default is FIELD_TYPE_NORMAL"]}),"\n"]})]}),(0,a.jsx)(s.Z,{value:"example",label:"\u0700 Examples",default:!0})]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(s.Z,{value:"2",label:"Interface 2",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &\n  & usePointer )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj2\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,a.jsxs)(t.p,{children:["Initiate by copying from other fields. This routine initiates the ",(0,a.jsx)(t.code,{children:"obj"})," ",(0,a.jsx)(t.a,{href:"/docs-api/MatrixField/MatrixField_",children:"MatrixField_"})," by copying contents from ",(0,a.jsx)(t.code,{children:"obj2"}),", an instance of child class of ",(0,a.jsx)(t.a,{href:"/docs-api/AbstractField/AbstractField_",children:"AbstractField_"}),"."]}),(0,a.jsx)(t.p,{children:"In this way we try to minimize the computation effort."}),(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"copyFull, copyStructure, usePointer"})," are absent then this subroutine,\ncopies the value of the matrix from obj2 to obj."]}),(0,a.jsxs)(t.p,{children:["At present, the routine works for ",(0,a.jsx)(t.code,{children:"copyFull=.TRUE., copyStructure=.TRUE., usePointer=.TRUE."}),", which equivalent to the default behavior."]}),(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","TODO Add functionality for other options too."]}),"\n"]}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"obj2"})," should be an instance of ",(0,a.jsx)(t.code,{children:"MatrixField_"})]})})]}),(0,a.jsx)(s.Z,{value:"example",label:"\u0700 Examples"})]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(s.Z,{value:"3",label:"Interface 3",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Initiate(obj, param, dom)\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This routine can only construct a rectangle matrix."}),"\n",(0,a.jsx)(t.li,{children:"The matrix has a block struture, wherein, col and rows corresponds to the different physical variables."}),"\n",(0,a.jsx)(t.li,{children:"Total number of physical variables can be atmost 2."}),"\n"]}),(0,a.jsx)(t.p,{children:"The rectan"})]}),(0,a.jsx)(s.Z,{value:"example",label:"\u0700 Examples"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(67294),r=n(86010),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:r}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function I(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(c(t),s(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function T(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function N(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(I,{...e,...t}),(0,j.jsx)(T,{...e,...t})]})}function E(e){const t=(0,f.Z)();return(0,j.jsx)(N,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(67294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);