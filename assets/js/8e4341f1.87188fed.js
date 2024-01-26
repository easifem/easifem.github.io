"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[14682],{86570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var r=t(85893),a=t(11151),s=t(74866),o=t(85162),l=t(75599);const i={},c="Add",u={id:"MeshSelection/Add",title:"Add",description:"This routine adds mesh regions to the instance of MeshSelection_.",source:"@site/docs/docs-api/MeshSelection/Add.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/Add",permalink:"/docs-api/MeshSelection/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MeshSelection/Add.md",tags:[],version:"current",lastUpdatedAt:1706190023,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/MeshSelection/Initiate"},next:{title:"Copy",permalink:"/docs-api/MeshSelection/Copy"}},d={},h=[{value:"Interface",id:"interface",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"add",children:"Add"}),"\n",(0,r.jsxs)(n.p,{children:["This routine adds mesh regions to the instance of ",(0,r.jsx)(n.code,{children:"MeshSelection_"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We can use this method for adding information based on"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"mesh ID"}),"\n",(0,r.jsx)(n.li,{children:"bounding box"}),"\n",(0,r.jsx)(n.li,{children:"element numbers"}),"\n",(0,r.jsx)(n.li,{children:"node numbers"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"interface",label:"Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE meshSelect_Add(obj, dom, dim, meshID, box, elemNum, &\n    & nodeNum)\n    CLASS(MeshSelection_), INTENT(INOUT) :: obj\n    TYPE(Domain_), OPTIONAL, INTENT(IN) :: dom\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: meshID(:)\n    TYPE(BoundingBox_), OPTIONAL, INTENT(IN) :: box\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: elemNum(:)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nodeNum(:)\n  END SUBROUTINE meshSelect_Add\nEND INTERFACE\n"})})}),(0,r.jsx)(o.Z,{value:"example",label:"\ufe0fSee example",children:(0,r.jsx)(l.ZP,{})}),(0,r.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},75599:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function s(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This example shows how to use ",(0,r.jsx)(n.code,{children:"MeshSelection_"})," with ",(0,r.jsx)(n.code,{children:"meshSelectionByID"})," option."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( MeshSelection_ ) :: obj\n  type(ParameterList_) :: param\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Let us initiate an instance of ",(0,r.jsx)(n.code,{children:"MeshSelection_"})," wherein we will select the mesh by using mesh-ids."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL FPL_INIT(); call param%Initiate()\nCALL SetMeshSelectionParam(param=param, isSelectionByMeshID=.TRUE., prefix=obj%GetPrefix())\nCALL obj%Initiate( param=param )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Adding mesh regions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])\nCALL obj%Add( dim=1, meshID=[2,5,6,7])\nCALL obj%Add( dim=2, meshID=[1,3,5,6,8])\nCALL obj%Add( dim=3, meshID=[1,8])\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After adding the regions in the ",(0,r.jsx)(n.code,{children:"MeshSelection_"}),", we should call ",(0,r.jsx)(n.code,{children:"set()"})," method. This call will do all the necessary steps."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Set()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Display the content."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL obj%Display( "" )\n'})}),"\n",(0,r.jsx)(n.p,{children:"cleanup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL param%Deallocate()\n  CALL FPL_FINALIZE\nEND PROGRAM main\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:"IsInitiated : TRUE\nIsSelectionByMeshID : TRUE\nIsSelectionByElemNum : FALSE\nIsSelectionByNodeNum : FALSE\nIsSelectionByBox : FALSE\nPointMeshID ALLOCATED : TRUE\nCurveMeshID ALLOCATED : TRUE\nSurfaceMeshID ALLOCATED : TRUE\nVolumeMeshID ALLOCATED : TRUE\nPointElemNum ALLOCATED : FALSE\nCurveElemNum ALLOCATED : FALSE\nSurfaceElemNum ALLOCATED : FALSE\nVolumeElemNum ALLOCATED : FALSE\nPointNodeNum ALLOCATED : FALSE\nCurveNodeNum ALLOCATED : FALSE\nSurfaceNodeNum ALLOCATED : FALSE\nVolumeNodeNum ALLOCATED : FALSE\nPointBox ALLOCATED : FALSE\nCurveBox ALLOCATED : FALSE\nSurfaceBox ALLOCATED : FALSE\nVolumeBox ALLOCATED : FALSE\n \n# PointMeshID :\n# size : 6\n1\n2\n3\n4\n5\n6\n \n# CurveMeshID :\n# size : 4\n2\n5\n6\n7\n \n# SurfaceMeshID :\n# size : 5\n1\n3\n5\n6\n8\n \n# VolumeMeshID :\n# size : 2\n1\n8\n"})})})]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var r=t(67294),a=t(86010),s=t(12466),o=t(16550),l=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:a}),[f,A]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),A(e)}),[d,A,s]),tabValues:s}}var A=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var L=t(85893);function E(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,L.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,L.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function I(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,L.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=f(e);return(0,L.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,L.jsx)(E,{...e,...n}),(0,L.jsx)(I,{...e,...n})]})}function N(e){const n=(0,A.Z)();return(0,L.jsx)(x,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);