"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[2801],{61558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(85893),r=a(11151),i=a(74866),l=a(85162);const o={},s="Initiate",c={id:"AbstractMatrixField/Initiate",title:"Initiate",description:"This method constructs an instance of AbstractMatrixField.",source:"@site/docs/docs-api/AbstractMatrixField/Initiate.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/Initiate",permalink:"/docs-api/AbstractMatrixField/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractMatrixField/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractMatrixField/Import"},next:{title:"IsPreconditionSet",permalink:"/docs-api/AbstractMatrixField/IsPreconditionSet"}},u={},d=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,n.jsx)(t.p,{children:"This method constructs an instance of AbstractMatrixField."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{value:"1",label:"Interface 1",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, param, dom )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  TYPE( ParameterList_), INTENT( IN ) :: param\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,n.jsxs)(l.Z,{value:"2",label:"Interface 2",children:[(0,n.jsx)(t.p,{children:"Initiate by copying from other fields"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &\n  & usePointer )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj2\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})]}),(0,n.jsxs)(l.Z,{value:"3",label:"Interface 3",children:[(0,n.jsx)(t.p,{children:"Initiate by reading from parameters. This is used for block data structure."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Initiate(obj, param, dom)\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  type( domain_ ) :: dom\n  type( MatrixField_ ) :: obj\n  type( HDF5File_ ) :: meshfile, hdf5\n  type( ParameterList_ ) :: param\n  integer( i4b ) :: ierr, tnodes\n  call display( "TESTING INITIATE AND Deallocate" )\n  CALL FPL_INIT()\n  call meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  call meshfile%open()\n  call dom%initiate( meshfile )\n  call meshfile%close()\n  call meshfile%Deallocate()\n  tnodes = dom%getTotalNodes()\n  call param%initiate()\n  call setMatrixFieldParam( param, "K", "UNSYM", 3, 2, FIELD_TYPE_NORMAL )\n  call obj%initiate( param, dom )\n  CALL hdf5%initiate(filename="./matrixField.h5", mode="NEW" )\n  CALL hdf5%open()\n  CALL obj%export(hdf5=hdf5,group=\'\')\n  CALL hdf5%close()\n  CALL hdf5%Deallocate()\n  call obj%Deallocate()\n  call dom%Deallocate()\n  call param%Deallocate()\n  call FPL_FINALIZE()\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var n=a(86010);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),r=a(86010),i=a(12466),l=a(16550),o=a(20469),s=a(91980),c=a(67392),u=a(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=h({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),I=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{I&&s(I)}),[I]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=a(72389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(85893);function T(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),r=o[a].value;r!==n&&(c(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function E(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=f(e);return(0,N.jsxs)("div",{className:(0,r.Z)("tabs-container",I.tabList),children:[(0,N.jsx)(T,{...e,...t}),(0,N.jsx)(E,{...e,...t})]})}function v(e){const t=(0,b.Z)();return(0,N.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(67294);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);