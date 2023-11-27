"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41883],{46275:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=a(85893),t=a(11151),s=a(74866),l=a(85162);function i(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Mesh:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"mesh.png",src:a(86930).Z+"",width:"612",height:"797"})}),"\n",(0,r.jsx)(n.p,{children:"Import modules and declare variables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( HDF5File_ ) :: meshfile\n  TYPE( Mesh_ ) :: amesh\n  TYPE( TensorMeshField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Initiate and open the mesh file which is in ",(0,r.jsx)(n.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," format."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )\n  CALL meshfile%Open()\n  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )\n'})}),"\n",(0,r.jsx)(n.p,{children:"Initiate an instance of TensorMeshField."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%initiate()\n  CALL SetTensorMeshFieldParam( &\n    & param=param, &\n    & name='aTensor', &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & varType=constant, &\n    & engine='NATIVE_SERIAL', &\n    & defineOn=Nodal, &\n    & dim1=3, dim2=3, &\n    & nns=1 )\n  CALL obj%Initiate( param=param, mesh=amesh )\n  CALL obj%Display( 'obj: ' )\n"})}),"\n",(0,r.jsx)(n.p,{children:"cleaning up."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL amesh%Deallocate()\n  CALL meshfile%Close()\n  CALL meshfile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const u={},c="SetTensorMeshFieldParam",d={id:"TensorMeshField/SetTensorMeshFieldParam",title:"SetTensorMeshFieldParam",description:"This subroutine the parameters of tensor mesh field.",source:"@site/docs/docs-api/TensorMeshField/SetTensorMeshFieldParam.md",sourceDirName:"TensorMeshField",slug:"/TensorMeshField/SetTensorMeshFieldParam",permalink:"/docs-api/TensorMeshField/SetTensorMeshFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TensorMeshField/SetTensorMeshFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TensorMeshField",permalink:"/docs-api/TensorMeshField/"},next:{title:"Structure",permalink:"/docs-api/TensorMeshField/TensorMeshField_"}},h={},m=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"settensormeshfieldparam",children:"SetTensorMeshFieldParam"}),"\n",(0,r.jsx)(n.p,{children:"This subroutine the parameters of tensor mesh field."}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setTensorMeshFieldParam(param, name, &\n    & fieldType, varType, engine, defineOn, dim1, dim2, nns)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    INTEGER(I4B), INTENT(IN) :: fieldType\n    INTEGER(I4B), INTENT(IN) :: varType\n    CHARACTER(*), INTENT(IN) :: engine\n    INTEGER(I4B), INTENT(IN) :: defineOn\n    !! Nodal, Quadrature\n    INTEGER(I4B), INTENT(IN) :: dim1\n    INTEGER(I4B), INTENT(IN) :: dim2\n    INTEGER(I4B), INTENT(IN) :: nns\n    !! Number of node in space\n  END SUBROUTINE setTensorMeshFieldParam\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var r=a(86010);const t={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>v});var r=a(67294),t=a(86010),s=a(12466),l=a(16550),i=a(20469),o=a(91980),u=a(67392),c=a(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:a,groupId:t}),[f,T]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),b=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),T(e)}),[d,T,s]),tabValues:s}}var T=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=a(85893);function N(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),t=i[a].value;t!==r&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,t.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function E(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function g(e){const n=f(e);return(0,I.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,I.jsx)(N,{...e,...n}),(0,I.jsx)(E,{...e,...n})]})}function v(e){const n=(0,T.Z)();return(0,I.jsx)(g,{...e,children:d(e.children)},String(n))}},86930:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/mesh-55f489ea84bf8e71cc3043bc11a36e32.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var r=a(67294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);