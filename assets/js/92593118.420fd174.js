"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35880],{82839:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>F,contentTitle:()=>D,default:()=>E,frontMatter:()=>O,metadata:()=>v,toc:()=>I});var t=a(85893),r=a(11151),s=a(74866),l=a(85162);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example show how to use ",(0,t.jsx)(n.code,{children:".tNames."}),", ",(0,t.jsx)(n.code,{children:".tNodes."}),", and ",(0,t.jsx)(n.code,{children:".tDOF."}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE( DOF_ ) :: obj\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate DOF (interface 1)"',children:'    CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &\n      & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display DOF object"',children:'    CALL Display( obj, "obj : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Get total names"',children:"    CALL OK( (.tNames. obj) .EQ. 1, '.tNames. obj : ' )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Get total number of nodes"',children:"    CALL OK( (.tNodes. obj) .EQ. 30, '.tNodes. obj : ' )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Get total degrees of freedom"',children:"    CALL OK( (.tDOF. obj) .EQ. 3, '.tDOF. obj : ' )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"    CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example show how to create an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF_"})," and use it to create a vector of reals."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DOF/Initiate"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tNames"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tNodes"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tDOF"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE( DOF_ ) :: obj\n    REAL( DFP ), ALLOCATABLE :: val( : )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate interface 1"',children:'    CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &\n      & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Initiate a real vector using ",(0,t.jsx)(n.code,{children:"DOF_"})," object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"    CALL Initiate( Val=val, obj=obj )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display DOF object"',children:'    CALL Display( obj, "CALL Initiate( Val=val, obj=obj ) : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"    CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example show how to initiate an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF_"})," and use it to create an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/RealVector/RealVector_",children:"RealVector_"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DOF/Initiate"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tNames"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tNodesss"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tDOF"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( DOF_ ) :: obj\n  TYPE(RealVector_) :: val\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create an instance of [[DOF_]]"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate DOF"',children:'  CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &\n    & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsx)(n.p,{children:"Initiate a vector of real using an instance of [[DOF_]]"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate RealVector_"',children:"  CALL Initiate( Val=val, obj=obj )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display RealVector_"',children:'  CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example shows how to initiate an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF_"}),", then use it to create a vector of reals ",(0,t.jsx)(n.a,{href:"/docs-api/RealVector/RealVector_",children:"RealVector_"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DOF/Initiate"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tNames"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tNodesss"}),"\n",(0,t.jsx)(n.li,{children:"DOF/tDOF"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that in ",(0,t.jsx)(n.code,{children:"Line 5"})," we have vector of [[RealVector_]]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:"{5}",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( DOF_ ) :: obj\n  TYPE(RealVector_), ALLOCATABLE :: val( : )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate DOF"',children:'  CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &\n    & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate RealVector"',children:"  CALL Initiate( Val=val, obj=obj )\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display RealVector"',children:'  CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"  CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function m(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example shows the usage of assignment operator to construct an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF_"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( DOF_ ) :: obj, anotherObj\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate DOF"',children:'  CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &\n    & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate by Assignment"',children:"  anotherObj=obj\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display anotherObj"',children:'  CALL Display( anotherObj, "anotherObj=obj : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"  CALL Deallocate( obj )\n  CALL Deallocate( anotherObj )\nEND PROGRAM main\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function f(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example show how to initiate an instance of [[DOF_]] by using the constructor function ",(0,t.jsx)(n.code,{children:"DOF()"})," ."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DOF/DOF"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( DOF_ ) :: obj\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Constructor using DOF()"',children:'  obj = DOF( tNodes=[10], names=["U"], spaceCompo=[3],  &\n    & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display content"',children:'  CALL Display( obj, "DOF() : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"  CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}function b(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example show how to initiate an instance of [[DOF_]] by using ",(0,t.jsx)(n.code,{children:"DOF_Pointer"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE( DOF_ ), POINTER :: obj\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Constructing by DOF_Pointer()"',children:'    obj => DOF_POINTER( tNodes=[10], names=["U"], spaceCompo=[3],  &\n      & timeCompo=[1], storageFMT = FMT_DOF )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Display DOF"',children:'    CALL Display( obj, "DOF() : " )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"    CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function N(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}const O={},D="Initiate",v={id:"DOF/Initiate",title:"Initiate",description:"Initiate an instance of DOF.",source:"@site/docs/docs-api/DOF/Initiate.md",sourceDirName:"DOF",slug:"/DOF/Initiate",permalink:"/docs-api/DOF/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DOF/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetValue",permalink:"/docs-api/DOF/GetValue"},next:{title:"NE",permalink:"/docs-api/DOF/NE"}},F={},I=[{value:"Interface",id:"interface",level:2},{value:"Interfaces for constructing vectors using DOF",id:"interfaces-for-constructing-vectors-using-dof",level:2},{value:"Constructing navtive vectors",id:"constructing-navtive-vectors",level:2},{value:"Constructing RealVector",id:"constructing-realvector",level:2},{value:"Constructing vector of RealVector",id:"constructing-vector-of-realvector",level:2},{value:"Assignment(=)",id:"assignment",level:2},{value:"DOF Function",id:"dof-function",level:2},{value:"DOF_Pointer",id:"dof_pointer",level:2}];function T(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,t.jsxs)(n.p,{children:["Initiate an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(n.p,{children:["We can construct ",(0,t.jsx)(n.code,{children:"DOF_"})," object by calling the ",(0,t.jsx)(n.code,{children:"Initiate()"})," subroutine."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Initiate"',children:"INTERFACE\nMODULE PURE SUBROUTINE Initiate( obj, tNodes, Names, spacecompo, &\n  & timecompo, StorageFMT )\n  CLASS( DOF_ ), INTENT( INOUT ) :: obj\n    !! degree of freedom object\n  INTEGER( I4B ), INTENT( IN ) :: tNodes( : )\n    !! number of nodes for each physical variable\n  CHARACTER( LEN = 1 ), INTENT( IN ) :: Names( : )\n    !! Names of each physical variable\n  INTEGER( I4B ), INTENT( IN ) :: spacecompo( : )\n    !! Space component of each physical variable\n  INTEGER( I4B ), INTENT( IN ) :: timecompo( : )\n    !! Time component of each physical variable\n  INTEGER( I4B ), INTENT( IN ) :: StorageFMT\n    !! Storage format `FMT_DOF`, `FMT_Nodes`\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(n.p,{children:"where,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tNodes"})," denotes the total number of nodes in each physical variables"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Names"})," is the name of each physical variables"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SpaceCompo"})," is the number of spatial components in each physical variable, if a physical variable is scalar then one can use also use -1 instead of 1 for the total number of space components"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TimeCompo"})," is the number of time components in each physical variables"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"StorageFMT"})," is the storage format, it can be ",(0,t.jsx)(n.code,{children:"FMT_DOF"})," or ",(0,t.jsx)(n.code,{children:"FMT_Nodes"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The size of ",(0,t.jsx)(n.code,{children:"tNodes"}),", ",(0,t.jsx)(n.code,{children:"Names"}),", ",(0,t.jsx)(n.code,{children:"SpaceCompo"}),", ",(0,t.jsx)(n.code,{children:"TimeCompo"})," vectors should be equal to the total number of physical variables."]})}),"\n","\n","\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"example",label:"\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces-for-constructing-vectors-using-dof",children:"Interfaces for constructing vectors using DOF"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Initiate()"})," method has been extended for constructing"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rank-1 fortran arrays"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs-api/RealVector/RealVector_",children:"RealVector_"})}),"\n",(0,t.jsxs)(n.li,{children:["Vector of ",(0,t.jsx)(n.a,{href:"/docs-api/RealVector/RealVector_",children:"RealVector_"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This topic is covered below."}),"\n",(0,t.jsx)(n.h2,{id:"constructing-navtive-vectors",children:"Constructing navtive vectors"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 See Interface",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",metastring:'title="Interface"',children:"INTERFACE\nMODULE PURE SUBROUTINE Initiate( val, obj )\n  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: val( : )\n    !! This vector will be initiated by using obj\n  CLASS( DOF_ ), INTENT( IN ) :: obj\n    !! DOF object\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\u0700 See example",children:(0,t.jsx)(d,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"constructing-realvector",children:"Constructing RealVector"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" \n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(h,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"constructing-vector-of-realvector",children:"Constructing vector of RealVector"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" \n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(j,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"assignment",children:"Assignment(=)"}),"\n",(0,t.jsxs)(n.p,{children:["We can use an assignment operator to copy the contents of one ",(0,t.jsx)(n.code,{children:"DOF_"})," object into another ",(0,t.jsx)(n.code,{children:"DOF_"})," object."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"example",label:"\u0700 See example",children:(0,t.jsx)(x,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"dof-function",children:"DOF Function"}),"\n",(0,t.jsxs)(n.p,{children:["We can also use ",(0,t.jsx)(n.code,{children:"DOF()"})," function for the constructing the DOF object."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"example",label:"\u0700 See example",children:(0,t.jsx)(g,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"dof_pointer",children:"DOF_Pointer"}),"\n",(0,t.jsxs)(n.p,{children:["We can also use ",(0,t.jsx)(n.code,{children:"DOF_Pointer()"})," function for get a pointer to a newly created an instance of ",(0,t.jsx)(n.code,{children:"DOF_"}),"."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"example",label:"\u0700 See example",children:(0,t.jsx)(N,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function E(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(T,{...e})}):T(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>D});var t=a(67294),r=a(86010),s=a(12466),l=a(16550),i=a(20469),o=a(91980),c=a(67392),d=a(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=j({queryString:a,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function b(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),r=i[a].value;r!==t&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function N(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function O(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(N,{...e,...n})]})}function D(e){const n=(0,x.Z)();return(0,g.jsx)(O,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var t=a(67294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);