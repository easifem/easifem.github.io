"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17078],{58481:(e,a,N)=>{N.r(a),N.d(a,{assets:()=>I,contentTitle:()=>t,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var o=N(85893),l=N(11151);const n={},t="SetRow",c={id:"AbstractMatrixField/SetRow",title:"SetRow",description:"Calling example",source:"@site/docs/docs-api/AbstractMatrixField/SetRow.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/SetRow",permalink:"/docs-api/AbstractMatrixField/SetRow",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractMatrixField/SetRow.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetPrecondition",permalink:"/docs-api/AbstractMatrixField/SetPrecondition"},next:{title:"Shape",permalink:"/docs-api/AbstractMatrixField/Shape"}},I={},i=[{value:"Interface",id:"interface",level:2}];function r(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"setrow",children:"SetRow"}),"\n",(0,o.jsx)(a.p,{children:"Calling example"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode, idof, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode, ivar, idof, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode, ivar, spacecompo, timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode, ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode, ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode(:), ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.code,{children:"SetRow(obj, globalnode(:), ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow1(obj, globalNode, idof, scalarVal, vecVal, &\n    & nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow1\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow2(obj, globalNode, ivar, idof, scalarVal, vecVal, &\n    & nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow2\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow3(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow3\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow4(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow4\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow5(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow5\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow6(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow6\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow7(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow7\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},11151:(e,a,N)=>{N.d(a,{Z:()=>c,a:()=>t});var o=N(67294);const l={},n=o.createContext(l);function t(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);