"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[86170],{82980:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var i=s(85893),t=s(11151);const l={},a="Gmsh",r={id:"GmshAPI/Gmsh_",title:"Gmsh",description:"Introduction",source:"@site/docs/docs-api/GmshAPI/Gmsh_.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/Gmsh_",permalink:"/docs-api/GmshAPI/Gmsh_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GmshAPI/Gmsh_.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GmshOption",permalink:"/docs-api/GmshAPI/GmshOption_"},next:{title:"Gmsh example 1",permalink:"/docs-api/GmshAPI/Gmsh_test_1"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Structure",id:"structure",level:2},{value:"Methods",id:"methods",level:2},{value:"Initialize",id:"initialize",level:3},{value:"Finalize",id:"finalize",level:3},{value:"Final",id:"final",level:3},{value:"Open",id:"open",level:3},{value:"Merge",id:"merge",level:3},{value:"Write",id:"write",level:3},{value:"Clear",id:"clear",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gmsh",children:"Gmsh"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'subroutine test1\n  type( gmsh_ ) :: gmsh\n  integer( i4b ) :: ierr\n  CALL GMSH_INIT\n  ierr = gmsh%initialize()\n  ierr = gmsh%open(fileName="t1.msh" )\n  ierr = gmsh%write(fileName="t2.msh")\n  ierr = gmsh%finalize()\n  ierr = gmsh%clear()\n  CALL GMSH_FINAL\nend subroutine test1\n'})}),"\n",(0,i.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(26392).Z+"",width:"721",height:"241"})}),"\n",(0,i.jsx)(n.p,{children:"Status of these components is given below."}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","GmshOption [OK!]"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","GmshModel [OK!]"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","GmshView"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","GmshPlugin"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","GmshGraphics [OK!]"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","GmshFLTK [OK!]"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","GmshParser"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","GmshOnelab"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","GmshLogger"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"TYPE :: Gmsh_\n  PRIVATE\n  TYPE( GmshModel_ ), PUBLIC, POINTER :: model => NULL( )\n  ! TYPE( GmshView_ ), PUBLIC, POINTER :: view => NULL( )\n  !! TODO\n  TYPE( GmshOption_ ), PUBLIC, POINTER :: option => NULL()\n  ! TYPE( GmshPlugin_ ), PUBLIC, POINTER :: plugin => NULL( )\n  !! TODO\n  ! TYPE( GmshLogger_ ), PUBLIC, POINTER :: logger => NULL( )\n  !! TODO\n  TYPE( GmshGraphics_ ), PUBLIC, POINTER :: graphics => NULL()\n  TYPE( GmshFLTK_ ), PUBLIC, POINTER :: fltk => NULL()\n  TYPE( GmshOnelab_ ), PUBLIC, POINTER :: onelab => NULL()\n  LOGICAL( LGT ) :: isInitiated = .FALSE.\nEND TYPE Gmsh_\n"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"initialize",children:"Initialize"}),"\n",(0,i.jsx)(n.p,{children:"This function will start the Gmsh engine, and it allocates the pointer fields."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"FUNCTION Initialize( obj ) RESULT( ans )\n  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ) :: ans\n"})}),"\n",(0,i.jsx)(n.h3,{id:"finalize",children:"Finalize"}),"\n",(0,i.jsx)(n.p,{children:"This function will stop the Gmsh engine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"FUNCTION finalize( obj ) RESULT( ans )\n  CLASS( Gmsh_  ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ) :: ans\n"})}),"\n",(0,i.jsx)(n.h3,{id:"final",children:"Final"}),"\n",(0,i.jsx)(n.p,{children:"This function will stop the Gmsh engine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"SUBROUTINE GMSH_FINAL\nEND SUBROUTINE GMSH_FINAL\n"})}),"\n",(0,i.jsx)(n.h3,{id:"open",children:"Open"}),"\n",(0,i.jsxs)(n.p,{children:["Open a file. Equivalent to the ",(0,i.jsx)(n.code,{children:"File->Open"})," menu in the Gmsh app. Handling of the file depends on its extension and/or its contents: opening a file with model data will create a new model."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"FUNCTION Open( obj, fileName ) RESULT( ans )\n  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: fileName\n  INTEGER( I4B ) :: ans\nEND FUNCTION Open\n"})}),"\n",(0,i.jsx)(n.h3,{id:"merge",children:"Merge"}),"\n",(0,i.jsxs)(n.p,{children:["Merge a file. Equivalent to the ",(0,i.jsx)(n.code,{children:"File->Merge"})," menu in the Gmsh app. Handling of the file depends on its extension and/or its contents. Merging a file with model data will add the data to the current model."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"FUNCTION Merge( obj, fileName ) RESULT( ans )\n  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: fileName\n  INTEGER( I4B ) :: ans\nEND FUNCTION Merge\n"})}),"\n",(0,i.jsx)(n.h3,{id:"write",children:"Write"}),"\n",(0,i.jsx)(n.p,{children:"Write a file. The export format is determined by the file extension."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"FUNCTION Write( obj, fileName ) RESULT( ans )\n  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: fileName\n  INTEGER( I4B ) :: ans\nEND FUNCTION Write\n"})}),"\n",(0,i.jsx)(n.h3,{id:"clear",children:"Clear"}),"\n",(0,i.jsx)(n.p,{children:"Clear all loaded models and post-processing data, and add a new empty model."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"FUNCTION Clear( obj ) RESULT( ans )\n  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ) :: ans\nEND FUNCTION Clear\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},26392:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Gmsh_Class-25b9200daa2e429bef7f06fb0ba7e4ea.svg"},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(67294);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);