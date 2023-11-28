"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[88261],{48388:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var t=a(85893),r=a(11151),l=a(74866),i=a(85162),s=a(77270);const o={},c="Initiate",u={id:"ScalarField/Initiate",title:"Initiate",description:"This method constructs an instance of AbstractField.",source:"@site/docs/docs-api/ScalarField/Initiate.md",sourceDirName:"ScalarField",slug:"/ScalarField/Initiate",permalink:"/docs-api/ScalarField/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ScalarField/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/ScalarField/Import"},next:{title:"Norm2",permalink:"/docs-api/ScalarField/Norm2"}},d={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,t.jsx)(n.p,{children:"This method constructs an instance of AbstractField."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"1",label:"Initiate",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, param, dom )\n  CLASS( ScalarField_), INTENT( INOUT ) :: obj\n  TYPE( ParameterList_), INTENT( IN ) :: param\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,t.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(s.ZP,{})}),(0,t.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(l.Z,{children:(0,t.jsxs)(i.Z,{value:"2",label:"Initiate",default:!0,children:[(0,t.jsx)(n.p,{children:"Initiate by copying from other fields"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &\n  & usePointer )\n  CLASS( ScalarField_ ), INTENT( INOUT ) :: obj\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj2\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})]})}),"\n",(0,t.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,t.jsx)(l.Z,{children:(0,t.jsxs)(i.Z,{value:"3",label:"Initiate",children:[(0,t.jsx)(n.p,{children:"Initiate by reading from parameters. This is used for block data structure."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Initiate(obj, param, dom)\n    CLASS(ScalarField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},77270:(e,n,a)=>{a.d(n,{ZP:()=>i});var t=a(85893),r=a(11151);function l(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this example we test following methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs-api/ScalarField/SetScalarFieldParam",children:"SetScalarFieldParam"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs-api/ScalarField/Initiate",children:"Initiate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs-api/ScalarField/Export",children:"Export"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarField_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="setScalarFieldParam"  ',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate"',children:'  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,t.jsx)(n.p,{children:"Let's display the scalar field."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%Display("obj = ")\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="Results"',children:"#obj =\n# isInitiated : TRUE\n# name :U\n# fieldType : NORMAL\n# engine :NATIVE_SERIAL\n# comm: 0\n# myRank: 0\n# numProcs: 1\n# global_n: 0\n# local_n: 0\n# is: 0\n# ie: 0\n# lis_ptr: 0\n# domain : ASSOCIATED\n# domains : NOT ALLOCATED\n# tSize : 102\n# # DOF data :\n# Total Physical Variables :1\n# Name : U\n# Space Components : 1\n# Time Components : 1\n# Total Nodes : 102\n# Storage Format : Nodes\n# Value Map : \n--------------\n       1      \n     103      \n# VAR :U\n DOF-1 ,   \n-------,   \n0.00000,   \n0.00000,   \n0.00000,   \n0.00000,   \n0.00000,   \n0.00000,   \n.\n.\n.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Export"',children:'  CALL resultFile%initiate( filename="./result.h5", mode="NEW" )\n  CALL resultFile%open()\n  CALL obj%export( hdf5=resultFile, group="/scalarField1")\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>i});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>j});var t=a(67294),r=a(86010),l=a(12466),i=a(16550),s=a(20469),o=a(91980),c=a(67392),u=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=h({queryString:a,groupId:r}),[f,I]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),I(e)}),[d,I,l]),tabValues:l}}var I=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(85893);function T(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=s[a].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function E(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=f(e);return(0,N.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,N.jsx)(T,{...e,...n}),(0,N.jsx)(E,{...e,...n})]})}function j(e){const n=(0,I.Z)();return(0,N.jsx)(x,{...e,children:d(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>i});var t=a(67294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);