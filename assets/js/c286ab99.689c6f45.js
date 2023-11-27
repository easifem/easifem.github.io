"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20764],{26396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>E,contentTitle:()=>l,default:()=>d,frontMatter:()=>N,metadata:()=>c,toc:()=>o});var r=t(85893),i=t(11151);const N={},l="Get",c={id:"VectorFieldLis/Get",title:"Get",description:"Get entries from vector field.",source:"@site/docs/docs-api/VectorFieldLis/Get.md",sourceDirName:"VectorFieldLis",slug:"/VectorFieldLis/Get",permalink:"/docs-api/VectorFieldLis/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VectorFieldLis/Get.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/VectorFieldLis/Export"},next:{title:"GetPointer",permalink:"/docs-api/VectorFieldLis/GetPointer"}},E={},o=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2},{value:"Interface 8",id:"interface-8",level:2},{value:"Interface 9",id:"interface-9",level:2},{value:"Interface 10",id:"interface-10",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get",children:"Get"}),"\n",(0,r.jsx)(n.p,{children:"Get entries from vector field."}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get1(obj, VALUE, globalNode, spaceCompo)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNode\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: spaceCompo\n  END SUBROUTINE vField_get1\nEND INTERFACE\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"globalnode"})," is present then this routine returns all spatial components at the ",(0,r.jsx)(n.code,{children:"globalnode"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"spacecompo"})," is present then ",(0,r.jsx)(n.code,{children:"globalnode"})," should not be present. In this case this routine returns the entire vector of ",(0,r.jsx)(n.code,{children:"spacecompo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get2(obj, VALUE, force3D)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D\n  END SUBROUTINE vField_get2\nEND INTERFACE\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This routine gets all the entries of vector field."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get3(obj, VALUE, globalNode, force3D)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D\n  END SUBROUTINE vField_get3\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get4(obj, VALUE, globalNode, spaceCompo)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n  END SUBROUTINE vField_get4\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get5(obj, VALUE, globalNode, spaceCompo)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n  END SUBROUTINE vField_get5\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get6(obj, VALUE, istart, iend, stride)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)\n    INTEGER(I4B), INTENT(IN) :: istart\n    INTEGER(I4B), INTENT(IN) :: iend\n    INTEGER(I4B), INTENT(IN) :: stride\n  END SUBROUTINE vField_get6\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get7(obj, VALUE, istart, iend, stride, spaceCompo)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: istart\n    INTEGER(I4B), INTENT(IN) :: iend\n    INTEGER(I4B), INTENT(IN) :: stride\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n  END SUBROUTINE vField_get7\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-8",children:"Interface 8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get8(obj, VALUE, globalNode)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    TYPE(FEVariable_), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n  END SUBROUTINE vField_get8\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-9",children:"Interface 9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get9(obj, VALUE, spaceCompo)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    CLASS(ScalarField_), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n  END SUBROUTINE vField_get9\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-10",children:"Interface 10"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_get10(obj, VALUE)\n    CLASS(VectorField_), INTENT(IN) :: obj\n    CLASS(VectorField_), INTENT(INOUT) :: VALUE\n  END SUBROUTINE vField_get10\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var r=t(67294);const i={},N=r.createContext(i);function l(e){const n=r.useContext(N);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(N.Provider,{value:n},e.children)}}}]);