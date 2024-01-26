"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[62045],{4346:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>r,metadata:()=>t,toc:()=>u});var a=n(85893),i=n(11151),c=n(74866),o=n(85162);const r={},s="SetColumn",t={id:"BlockMatrixField/SetColumn",title:"SetColumn",description:"Set column of matrix field.",source:"@site/docs/docs-api/BlockMatrixField/SetColumn.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/SetColumn",permalink:"/docs-api/BlockMatrixField/SetColumn",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockMatrixField/SetColumn.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetBlockMatrixFieldParam",permalink:"/docs-api/BlockMatrixField/SetBlockMatrixFieldParam"},next:{title:"SetPrecondition",permalink:"/docs-api/BlockMatrixField/SetPrecondition"}},d={},u=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2}];function h(e){const l={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h1,{id:"setcolumn",children:"SetColumn"}),"\n",(0,a.jsx)(l.p,{children:"Set column of matrix field."}),"\n",(0,a.jsx)(l.p,{children:"Calling example"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetColumn(obj, globalnode, ivar, idof, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetColumn(obj, globalnode, ivar, spacecompo, timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetColumn(obj, globalnode, ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetColumn(obj, globalnode, ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetColumn(obj, globalnode(:), ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetColumn(obj, globalnode(:), ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n"]}),"\n","\n","\n",(0,a.jsx)(l.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setColumn(obj, globalNode, ivar, idof, &\n    & scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setColumn\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the col of a sparse matrix. The col index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"idof"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"idof"})," is the degree of freedom number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the col will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the col will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setColumn(obj, globalNode, ivar, spacecompo, &\n    & timecompo, scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setColumn\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the col of a sparse matrix. The col index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the col will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the col will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setColumn(obj, globalNode, ivar, spacecompo, &\n    & timecompo, scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setColumn\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the col of a sparse matrix. The col index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the col will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the col will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setColumn(obj, globalNode, ivar, spacecompo, &\n    & timecompo, scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setColumn\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the col of a sparse matrix. The col index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the col will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the col will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setColumn(obj, globalNode, ivar, spacecompo, &\n    & timecompo, scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setColumn\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the col of a sparse matrix. The col index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the col will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the col will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setColumn(obj, globalNode, ivar, spacecompo, &\n    & timecompo, scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setColumn\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the col of a sparse matrix. The col index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the col will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the col will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]})]})}function N(e={}){const{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,l,n)=>{n.d(l,{Z:()=>o});n(67294);var a=n(86010);const i={tabItem:"tabItem_Ymn6"};var c=n(85893);function o(e){let{children:l,hidden:n,className:o}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n,children:l})}},74866:(e,l,n)=>{n.d(l,{Z:()=>f});var a=n(67294),i=n(86010),c=n(12466),o=n(16550),r=n(20469),s=n(91980),t=n(67392),d=n(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:l,children:n}=e;return(0,a.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:n,attributes:a,default:i}}=e;return{value:l,label:n,attributes:a,default:i}}))}(n);return function(e){const l=(0,t.l)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,n])}function N(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function m(e){let{queryString:l=!1,groupId:n}=e;const i=(0,o.k6)(),c=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,s._X)(c),(0,a.useCallback)((e=>{if(!c)return;const l=new URLSearchParams(i.location.search);l.set(c,e),i.replace({...i.location,search:l.toString()})}),[c,i])]}function x(e){const{defaultValue:l,queryString:n=!1,groupId:i}=e,c=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!N({value:l,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:c}))),[t,u]=m({queryString:n,groupId:i}),[x,I]=function(e){let{groupId:l}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(l),[i,c]=(0,d.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&c.set(e)}),[n,c])]}({groupId:i}),p=(()=>{const e=t??x;return N({value:e,tabValues:c})?e:null})();(0,r.Z)((()=>{p&&s(p)}),[p]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!N({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),I(e)}),[u,I,c]),tabValues:c}}var I=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){let{className:l,block:n,selectedValue:a,selectValue:o,tabValues:r}=e;const s=[],{blockElementScrollPositionUntilNextRender:t}=(0,c.o5)(),d=e=>{const l=e.currentTarget,n=s.indexOf(l),i=r[n].value;i!==a&&(t(l),o(i))},u=e=>{let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;l=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;l=s[n]??s[s.length-1];break}}l?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},l),children:r.map((e=>{let{value:l,label:n,attributes:c}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>s.push(e),onKeyDown:u,onClick:d,...c,className:(0,i.Z)("tabs__item",p.tabItem,c?.className,{"tabs__item--active":a===l}),children:n??l},l)}))})}function T(e){let{lazy:l,children:n,selectedValue:i}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=c.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:c.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==i})))})}function b(e){const l=x(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",p.tabList),children:[(0,j.jsx)(v,{...e,...l}),(0,j.jsx)(T,{...e,...l})]})}function f(e){const l=(0,I.Z)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(l))}},11151:(e,l,n)=>{n.d(l,{Z:()=>r,a:()=>o});var a=n(67294);const i={},c=a.createContext(i);function o(e){const l=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(c.Provider,{value:l},e.children)}}}]);