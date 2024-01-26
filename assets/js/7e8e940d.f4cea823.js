"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76213],{12848:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>N,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(85893),s=i(11151),a=i(11674);const r={},o="Initiate",c={id:"CSRSparsity/Initiate",title:"Initiate",description:"Initiate an instance of CSRSparsity_.",source:"@site/docs/docs-api/CSRSparsity/Initiate.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/Initiate",permalink:"/docs-api/CSRSparsity/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRSparsity/Initiate.md",tags:[],version:"current",lastUpdatedAt:1706190062,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSym",permalink:"/docs-api/CSRSparsity/GetSym"},next:{title:"SetSparsity",permalink:"/docs-api/CSRSparsity/SetSparsity"}},l={},d=[{value:"Interface 1",id:"interface-1",level:2},{value:"Assignment operator",id:"assignment-operator",level:2},{value:"Initiate by raw data",id:"initiate-by-raw-data",level:2},{value:"Initiate by <code>CSRSparsity</code> function",id:"initiate-by-csrsparsity-function",level:2},{value:"Getting the pointer",id:"getting-the-pointer",level:2}];function I(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components},{TabItem:i,Tabs:r}=e;return i||p("TabItem",!0),r||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"initiate",children:"Initiate"}),"\n",(0,t.jsxs)(e.p,{children:["Initiate an instance of ",(0,t.jsx)(e.code,{children:"CSRSparsity_"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(i,{value:"interface",label:"Interface",default:!0,children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE Initiate\n  MODULE SUBROUTINE Initiate1(obj, ncol, nrow, idof, jdof, nnz)\n    TYPE(CSRSparsity_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: ncol, nrow\n    TYPE(DOF_), OPTIONAL, INTENT(IN) :: idof\n    !! DOF for row\n    TYPE(DOF_), OPTIONAL, INTENT(IN) :: jdof\n    !! DOF for column\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnz\n    !! number of nonzeros\n  END SUBROUTINE Initiate1\nEND INTERFACE Initiate\n"})}),(0,t.jsxs)(e.p,{children:["Here, ",(0,t.jsx)(e.code,{children:"dof"})," is optional, if this argument is absent then DOF object has the following structure:"]}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"name"}),'=["K"]']}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"tNodes"}),"=[nrow]"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"spaceCompo"}),"=[1]"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"timeCompo"}),"=[1]."]}),"\n"]})]}),(0,t.jsx)(i,{value:"example",label:"example",children:(0,t.jsx)(a.ZP,{})}),(0,t.jsx)(i,{value:"close",label:"\u21a2 close"})]}),"\n",(0,t.jsx)(e.h2,{id:"assignment-operator",children:"Assignment operator"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE Initiate\n  MODULE SUBROUTINE obj_initiate2(obj, obj2)\n    TYPE(CSRSparsity_), INTENT(INOUT) :: obj\n    TYPE(CSRSparsity_), INTENT(IN) :: obj2\n  END SUBROUTINE obj_initiate2\nEND INTERFACE Initiate\n"})}),"\n",(0,t.jsx)(e.h2,{id:"initiate-by-raw-data",children:"Initiate by raw data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE Initiate\n  MODULE SUBROUTINE obj_initiate3(obj, IA, JA)\n    TYPE(CSRSparsity_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: IA(:), JA(:)\n  END SUBROUTINE obj_initiate3\nEND INTERFACE Initiate\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["This routine constructs ",(0,t.jsx)(e.code,{children:"CSRSparsity_"})," instance by using the\nindices ",(0,t.jsx)(e.code,{children:"IA"})," and ",(0,t.jsx)(e.code,{children:"JA"})]}),"\n",(0,t.jsx)(e.li,{children:"This routine is helpful in reading data from files."}),"\n",(0,t.jsxs)(e.li,{children:["This routine calls ",(0,t.jsx)(e.code,{children:"Initiate"})," method\nwithout ",(0,t.jsx)(e.code,{children:"dof"})," argument. So this type of initiation does not contain\nuseful information about the degree of freedoms."]}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"initiate-by-csrsparsity-function",children:["Initiate by ",(0,t.jsx)(e.code,{children:"CSRSparsity"})," function"]}),"\n",(0,t.jsxs)(e.p,{children:["EASIFEM also has ",(0,t.jsx)(e.code,{children:"CSRSparsity"})," and ",(0,t.jsx)(e.code,{children:"CSRSparsityPointer"})," functions. They can be used to create an instance of ",(0,t.jsx)(e.code,{children:"CSRSparsity_"}),". The later returns the pointer to the newly created instance of ",(0,t.jsx)(e.code,{children:"CSRSparsity_"})," object. The usage are given below."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"MODULE FUNCTION CSRSparsity( nrow, ncol, dof ) RESULT( Ans )\n  INTEGER( I4B ), INTENT( IN ) :: nrow\n  INTEGER( I4B ), INTENT( IN ) :: ncol\n  TYPE( DOF_ ), OPTIONAL, INTENT( IN ) :: dof\n  TYPE( CSRSparsity_ ) :: ans\nEND FUNCTION CSRSparsity\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"MODULE FUNCTION CSRSparsity( IA, JA ) RESULT( Ans )\n  INTEGER( I4B ), INTENT( IN ) :: IA(:)\n  INTEGER( I4B ), INTENT( IN ) :: JA(:)\n  TYPE( CSRSparsity_ ) :: ans\nEND FUNCTION CSRSparsity\n"})}),"\n",(0,t.jsx)(e.h2,{id:"getting-the-pointer",children:"Getting the pointer"}),"\n",(0,t.jsxs)(e.p,{children:["By using CSRSparsityPointer method we can get the pointer to ",(0,t.jsx)(e.code,{children:"CSRSparsity_"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"MODULE FUNCTION CSRSparsityPointer( nrow, ncol, dof ) RESULT( Ans )\n  INTEGER( I4B ), INTENT( IN ) :: nrow\n  INTEGER( I4B ), INTENT( IN ) :: ncol\n  TYPE( DOF_ ), OPTIONAL, INTENT( IN ) :: dof\n  TYPE( CSRSparsity_ ), POINTER :: ans\nEND FUNCTION CSRSparsityPointer\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"MODULE FUNCTION CSRSparsityPointer( IA, JA ) RESULT( Ans )\n  INTEGER( I4B ), INTENT( IN ) :: IA(:)\n  INTEGER( I4B ), INTENT( IN ) :: JA(:)\n  TYPE( CSRSparsity_ ), POINTER :: ans\nEND FUNCTION CSRSparsityPointer\n"})})]})}function N(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(I,{...n})}):I(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11674:(n,e,i)=>{i.d(e,{ZP:()=>r});var t=i(85893),s=i(11151);function a(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(e.p,{children:["This example shows how to create an instance of ",(0,t.jsx)(e.code,{children:"CSRSparsity_"}),"."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["First we will create an instance of ",(0,t.jsx)(e.code,{children:"DOF_"})]}),"\n",(0,t.jsxs)(e.li,{children:["Then we will use it to create an instance of ",(0,t.jsx)(e.code,{children:"CSRSparsity_"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\n\nTYPE( CSRSparsity_ ) :: obj\nTYPE( DOF_ ) :: dofobj\nINTEGER( I4B ) :: i\n\nCALL Initiate( &\n    & obj=dofobj, &\n    & tNodes=[12], &\n    & names=['K'], &\n    & spaceCompo=[1], &\n    & timeCompo=[1], &\n    & storageFMT=NODES_FMT )\n\nCALL Initiate( obj, ncol=12, nrow=12, idof=dofobj, jdof=dofobj )\n\nCALL Display( obj, \"CSRSparsity : \" )\n\nCALL Deallocate( dofobj )\nCALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function r(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>o,a:()=>r});var t=i(67294);const s={},a=t.createContext(s);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);