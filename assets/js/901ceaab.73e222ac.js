"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75637],{78296:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var i=l(85893),o=l(11151),r=l(74866),a=l(85162);const t={},s="GetColumn",c={id:"MatrixField/GetColumn",title:"GetColumn",description:"Calling example:",source:"@site/docs/docs-api/MatrixField/GetColumn.md",sourceDirName:"MatrixField",slug:"/MatrixField/GetColumn",permalink:"/docs-api/MatrixField/GetColumn",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/GetColumn.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/MatrixField/Export"},next:{title:"GetDiagonal",permalink:"/docs-api/MatrixField/GetDiagonal"}},d={},u=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getcolumn",children:"GetColumn"}),"\n",(0,i.jsx)(n.p,{children:"Calling example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode, idof, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode, ivar, idof, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode, ivar, spacecompo, timecompo, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode, ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode, ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode(:), ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetColumn(obj, globalnode(:), ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution"})}),"\n"]}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn1(obj, globalNode, idof, VALUE, nodeFieldVal, &\n    & scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn1\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"})," and ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn2(obj, globalNode, ivar, idof, &\n      & VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn2\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ivar"})," is the physical variable number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"idof"})," is the degree of freedom number of the physical variable"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn3(obj, globalNode, ivar, spacecompo, &\n    & timecompo, VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn3\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timecompo"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ivar"})," is the physical variable number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spacecompo"})," is the spatial component of the physical variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timecompo"})," is the temporal component of the physical variable"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn4(obj, globalNode, ivar, spacecompo, &\n    & timecompo, VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn4\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timecompo"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ivar"})," is the physical variable number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spacecompo"})," is the spatial component of the physical variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timecompo"})," is the temporal component of the physical variable"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn5(obj, globalNode, ivar, spacecompo, &\n    & timecompo, VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn5\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timecompo"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ivar"})," is the physical variable number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spacecompo"})," is the spatial component of the physical variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timecompo"})," is the temporal component of the physical variable"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn6(obj, globalNode, ivar, spacecompo, &\n    & timecompo, VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn6\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timecompo"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ivar"})," is the physical variable number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spacecompo"})," is the spatial component of the physical variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timecompo"})," is the temporal component of the physical variable"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getColumn7(obj, globalNode, ivar, spacecompo, &\n    & timecompo, VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getColumn7\nEND INTERFACE\n"})}),(0,i.jsxs)(n.p,{children:["This routine returns the column of a sparse matrix. The column index is\ncalculated using the ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timecompo"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globalNode"})," is the global node number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ivar"})," is the physical variable number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spacecompo"})," is the spatial component of the physical variable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timecompo"})," is the temporal component of the physical variable"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"nodeFieldVal"})," is present then the column is returned inside the node\nfield"]})]}),(0,i.jsx)(a.Z,{value:"close",label:"\u21a2",default:!0})]})]})}function N(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85162:(e,n,l)=>{l.d(n,{Z:()=>a});l(67294);var i=l(86010);const o={tabItem:"tabItem_Ymn6"};var r=l(85893);function a(e){let{children:n,hidden:l,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,a),hidden:l,children:n})}},74866:(e,n,l)=>{l.d(n,{Z:()=>f});var i=l(67294),o=l(86010),r=l(12466),a=l(16550),t=l(20469),s=l(91980),c=l(67392),d=l(50012);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:i,default:o}}=e;return{value:n,label:l,attributes:i,default:o}}))}(l);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function N(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function I(e){let{queryString:n=!1,groupId:l}=e;const o=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function T(e){const{defaultValue:n,queryString:l=!1,groupId:o}=e,r=h(e),[a,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!N({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=l.find((e=>e.default))??l[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=I({queryString:l,groupId:o}),[T,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(l);return[o,(0,i.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:o}),p=(()=>{const e=c??T;return N({value:e,tabValues:r})?e:null})();(0,t.Z)((()=>{p&&s(p)}),[p]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!N({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=l(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=l(85893);function j(e){let{className:n,block:l,selectedValue:i,selectValue:a,tabValues:t}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,l=s.indexOf(n),o=t[l].value;o!==i&&(c(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=s.indexOf(e.currentTarget)+1;n=s[l]??s[0];break}case"ArrowLeft":{const l=s.indexOf(e.currentTarget)-1;n=s[l]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",p.tabItem,r?.className,{"tabs__item--active":i===n}),children:l??n},n)}))})}function E(e){let{lazy:n,children:l,selectedValue:o}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=T(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",p.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(E,{...e,...n})]})}function f(e){const n=(0,m.Z)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(n))}},11151:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>a});var i=l(67294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);