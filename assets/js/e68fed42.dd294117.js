"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[51677],{87792:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>E,frontMatter:()=>N,metadata:()=>o,toc:()=>c});var i=l(85893),d=l(11151);const N={},r="Get",o={id:"BlockNodeFieldLis/Get",title:"Get",description:"Get the entries from block node field.",source:"@site/docs/docs-api/BlockNodeFieldLis/Get.md",sourceDirName:"BlockNodeFieldLis",slug:"/BlockNodeFieldLis/Get",permalink:"/docs-api/BlockNodeFieldLis/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockNodeFieldLis/Get.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/BlockNodeFieldLis/Export"},next:{title:"GetPointer",permalink:"/docs-api/BlockNodeFieldLis/GetPointer"}},a={},c=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2},{value:"Interface 8",id:"interface-8",level:2},{value:"Interface 9",id:"interface-9",level:2}];function s(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get",children:"Get"}),"\n",(0,i.jsx)(n.p,{children:"Get the entries from block node field."}),"\n",(0,i.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get1(obj, VALUE, globalNode, ivar, idof)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n  !! physical variable number\n    INTEGER(I4B), INTENT(IN) :: idof\n  !! degree of freedom number\n  END SUBROUTINE get1\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get single entry from block node field."}),"\n",(0,i.jsxs)(n.li,{children:["The value is selected by ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 19."}),"\n",(0,i.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get2(obj, VALUE)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n  END SUBROUTINE get2\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get all the values in a vector of reals."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 20."}),"\n",(0,i.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get3(obj, VALUE, globalNode, ivar, idof)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE get3\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values."}),"\n",(0,i.jsxs)(n.li,{children:["The value is selected by using ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The size of value is equal to the size of globalNode."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 21."}),"\n",(0,i.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get4(obj, VALUE, istart, iend, stride,  &\n    & ivar, idof)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: istart\n    INTEGER(I4B), INTENT(IN) :: iend\n    INTEGER(I4B), INTENT(IN) :: stride\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE get4\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values by using triplets."}),"\n",(0,i.jsxs)(n.li,{children:["The value is selected by using ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 22."}),"\n",(0,i.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get5(obj, VALUE, globalNode, &\n    & ivar, idof)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    TYPE(FEVariable_), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE get5\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values in FEVariable."}),"\n",(0,i.jsxs)(n.li,{children:["The values are selected by using ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 23."}),"\n",(0,i.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get6(obj, VALUE, globalNode, ivar)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    TYPE(FEVariable_), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n  END SUBROUTINE get6\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values in FEVariable."}),"\n",(0,i.jsxs)(n.li,{children:["The values are selected by using ",(0,i.jsx)(n.code,{children:"globalNode"}),", ",(0,i.jsx)(n.code,{children:"ivar"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 24."}),"\n",(0,i.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get7(obj, VALUE, globalNode, ivar, &\n    & spaceCompo, timeCompo)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n  END SUBROUTINE get7\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values in a vector of reals."}),"\n",(0,i.jsxs)(n.li,{children:["The values are selected by using ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spaceCompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"}),", ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 25"}),"\n",(0,i.jsx)(n.h2,{id:"interface-8",children:"Interface 8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get8(obj, VALUE, globalNode, ivar, &\n    & spaceCompo, timeCompo)\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj\n    TYPE(FEVariable_), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n  END SUBROUTINE get8\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values in FEVariable."}),"\n",(0,i.jsxs)(n.li,{children:["The values are selected by using ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spaceCompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"}),", ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 26."}),"\n",(0,i.jsx)(n.h2,{id:"interface-9",children:"Interface 9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE bnField_get9(obj, ivar, idof, VALUE, ivar_value, idof_value)\n    CLASS(BlockNodeField_), INTENT(IN) :: obj\n    CLASS(AbstractNodeField_), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    INTEGER(I4B), INTENT(IN) :: ivar_value\n    INTEGER(I4B), INTENT(IN) :: idof_value\n  END SUBROUTINE bnField_get9\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get multiple values in ScalarField"}),"\n",(0,i.jsxs)(n.li,{children:["The values are selected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 27."})]})}function E(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>r});var i=l(67294);const d={},N=i.createContext(d);function r(e){const n=i.useContext(N);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(N.Provider,{value:n},e.children)}}}]);