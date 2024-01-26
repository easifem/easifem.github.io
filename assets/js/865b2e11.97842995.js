"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[70294],{14445:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>I,frontMatter:()=>d,metadata:()=>c,toc:()=>N});var r=i(85893),t=i(11151),o=i(74866),a=i(85162);const d={},l="Set",c={id:"BlockMatrixField/Set",title:"Set",description:"Set entries of MatrixField.",source:"@site/docs/docs-api/BlockMatrixField/Set.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/Set",permalink:"/docs-api/BlockMatrixField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockMatrixField/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ReversePermutation",permalink:"/docs-api/BlockMatrixField/ReversePermutation"},next:{title:"SetBlockMatrixFieldParam",permalink:"/docs-api/BlockMatrixField/SetBlockMatrixFieldParam"}},s={},N=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2},{value:"Interface 8",id:"interface-8",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,r.jsx)(n.p,{children:"Set entries of MatrixField."}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:"{2,4,5}",children:"CALL Set(\nMatrixField_::obj\nreal::value \n<int::scale >\n<bool::addContribution>\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:"{8,9}",children:"Set( \n  MatrixField_ :: obj\n  int :: iNodeNum(:)\n  int ::  jNodeNum(:)\n  int ::  ivar\n  int :: jvar\n  real::  value(:,:)\n  <real:: scale>\n  <bool:: addContribution>\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:"{10,11}",children:"CALL Set( \n  MatrixField_ :: obj\n  int :: iNodeNum(:)\n  int :: jNodeNum(:)\n  int :: ivar\n  int :: jvar\n  int :: idof\n  int :: jdof\n  real:: value(:,:)\n  <real:: scale>\n  <bool:: addContribution>\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:"{10,11}",children:"CALL Set( \n  MatrixField_:: obj\n  int :: iNodeNum(:)\n  int :: jNodeNum(:)\n  int :: ivar\n  int :: jvar\n  int :: idof\n  int :: jdof\n  real :: value(:,:)\n  <real :: scale>\n  <bool :: addContribution>\n  )\n"})}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-2",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, value, scale, &\n  & addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  REAL( DFP ), INTENT( IN ) :: value\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["IF ",(0,r.jsx)(n.code,{children:"addContribution"})," and ",(0,r.jsx)(n.code,{children:"scale"})," are ABSENT then:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This subroutine sets a scalar value ",(0,r.jsx)(n.code,{children:"value"})," to all the entries of the matrix."]}),"\n",(0,r.jsxs)(n.li,{children:["Symbolically, we peform ",(0,r.jsx)(n.code,{children:"obj=value"})]}),"\n"]})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-4",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, &\n  & jvar, value, scale, addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  REAL( DFP ), INTENT( IN ) :: value(:,:)\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If addContribution and scale are NOT present then:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This subroutine sets a block of data to matrix."}),"\n",(0,r.jsxs)(n.li,{children:["This block data is contained in ",(0,r.jsx)(n.code,{children:"value(:,:)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The number of rows in ",(0,r.jsx)(n.code,{children:"value"})," should be ",(0,r.jsx)(n.code,{children:"SIZE( iNodeNum ) * itdof"}),", where ",(0,r.jsx)(n.code,{children:"itdof"})," is the total degrees of freedom in row dimension."]}),"\n",(0,r.jsxs)(n.li,{children:["The number of columns in ",(0,r.jsx)(n.code,{children:"value"})," should be ",(0,r.jsx)(n.code,{children:"SIZE( jNodeNum ) * jtdof"}),", where ",(0,r.jsx)(n.code,{children:"jtdof"})," is the total degrees of freedom in column dimension."]}),"\n",(0,r.jsx)(n.li,{children:"globalNode contains the global node number"}),"\n",(0,r.jsxs)(n.li,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),", which are global node number."]}),"\n",(0,r.jsxs)(n.li,{children:["The exact location of the entry is computed using ",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"jNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jvar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"If addContribution and scale present then we add contribution to matrix, instead of setting the value."}),"\n"]}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Storage format of ",(0,r.jsx)(n.code,{children:"value"})," should be ",(0,r.jsx)(n.code,{children:"FMT_DOF"})," because the storage format of MatrixField_ is ",(0,r.jsx)(n.code,{children:"FMT_DOF"}),"."]})})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-5",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, &\n  & jvar, idof, jdof, value, scale, addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  INTEGER( I4B ), INTENT( IN ) :: idof\n  INTEGER( I4B ), INTENT( IN ) :: jdof\n  REAL( DFP ), INTENT( IN ) :: value(:,:)\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If addContribution and scale are NOT present then:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This subroutine sets a block of data to matrix."}),"\n",(0,r.jsxs)(n.li,{children:["This block data is contained in ",(0,r.jsx)(n.code,{children:"value(:,:)"})]}),"\n",(0,r.jsxs)(n.li,{children:["The size of ",(0,r.jsx)(n.code,{children:"value"})," should be ",(0,r.jsx)(n.code,{children:"SIZE(iNodeNum)"}),", ",(0,r.jsx)(n.code,{children:"SIZE(jNodeNum)"})]}),"\n",(0,r.jsx)(n.li,{children:"globalNode contains the global node number"}),"\n",(0,r.jsxs)(n.li,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),", which are global node number."]}),"\n",(0,r.jsxs)(n.li,{children:["The exact location of the entry is computed using ",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"idof"}),", ",(0,r.jsx)(n.code,{children:"jNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jvar"}),", ",(0,r.jsx)(n.code,{children:"jdof"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"If addContribution and scale present then we add contribution to matrix, instead of setting the value."}),"\n"]})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-6",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &\n  & idof, jdof, value, scale, addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  INTEGER( I4B ), INTENT( IN ) :: idof\n  INTEGER( I4B ), INTENT( IN ) :: jdof\n  REAL( DFP ), INTENT( IN ) :: value\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"addContribution"})," and ",(0,r.jsx)(n.code,{children:"scale"})," are NOT PRESENT, then:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This subroutine sets a scalar value ",(0,r.jsx)(n.code,{children:"value"})," to a single entry of the matrix."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The exact location of the entry is computed using ",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"idof"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),", ",(0,r.jsx)(n.code,{children:"jdof"}),", ",(0,r.jsx)(n.code,{children:"jvar"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If addContribution and scale present then we add contribution to matrix, instead of setting the value."}),"\n"]}),"\n"]})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-7",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &\n  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &\n  & addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  INTEGER( I4B ), INTENT( IN ) :: ispacecompo\n  INTEGER( I4B ), INTENT( IN ) :: itimecompo\n  INTEGER( I4B ), INTENT( IN ) :: jspacecompo\n  INTEGER( I4B ), INTENT( IN ) :: jtimecompo\n  REAL( DFP ), INTENT( IN ) :: value\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsx)(n.p,{children:"If addContribution and scale are NOT present then:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This subroutine sets a scalar value ",(0,r.jsx)(n.code,{children:"value"})," to a single entry of the matrix."]}),"\n",(0,r.jsxs)(n.li,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The exact location of the entry is computed using (",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"ispacecompo"}),", ",(0,r.jsx)(n.code,{children:"itimecompo"}),") and (",(0,r.jsx)(n.code,{children:"jNodeNum"}),", ",(0,r.jsx)(n.code,{children:"jvar"}),", ",(0,r.jsx)(n.code,{children:"jspacecompo"}),", ",(0,r.jsx)(n.code,{children:"jtimecompo"}),")."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["If addContribution and scale present, then this subroutine adds a scalar value ",(0,r.jsx)(n.code,{children:"value"})," to a single entry of the matrix."]})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-8",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &\n  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &\n  & addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  INTEGER( I4B ), INTENT( IN ) :: ispacecompo\n  INTEGER( I4B ), INTENT( IN ) :: itimecompo\n  INTEGER( I4B ), INTENT( IN ) :: jspacecompo\n  INTEGER( I4B ), INTENT( IN ) :: jtimecompo\n  REAL( DFP ), INTENT( IN ) :: value\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsx)(n.p,{children:"If addContribution and scale are NOT present then:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This subroutine sets ",(0,r.jsx)(n.code,{children:"value"})," to the matrix."]}),"\n",(0,r.jsxs)(n.li,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The exact location of the entry is computed using (",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"ispacecompo"}),", ",(0,r.jsx)(n.code,{children:"itimecompo"}),") and (",(0,r.jsx)(n.code,{children:"jNodeNum"}),", ",(0,r.jsx)(n.code,{children:"jvar"}),", ",(0,r.jsx)(n.code,{children:"jspacecompo"}),", ",(0,r.jsx)(n.code,{children:"jtimecompo"}),")."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["If addContribution and scale present, then this subroutine adds ",(0,r.jsx)(n.code,{children:"value"})," to the matrix."]})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-9",label:"\ud805\uddcd Set",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &\n  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &\n  & addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  INTEGER( I4B ), INTENT( IN ) :: ispacecompo\n  INTEGER( I4B ), INTENT( IN ) :: itimecompo(:)\n  INTEGER( I4B ), INTENT( IN ) :: jspacecompo\n  INTEGER( I4B ), INTENT( IN ) :: jtimecompo(:)\n  REAL( DFP ), INTENT( IN ) :: value\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsx)(n.p,{children:"If addContribution and scale are not present then:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This subroutine sets ",(0,r.jsx)(n.code,{children:"value"})," to the matrix."]}),"\n",(0,r.jsxs)(n.li,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The exact location of the entry is computed using (",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"ispacecompo"}),", ",(0,r.jsx)(n.code,{children:"itimecompo"}),") and (",(0,r.jsx)(n.code,{children:"jNodeNum"}),", ",(0,r.jsx)(n.code,{children:"jvar"}),", ",(0,r.jsx)(n.code,{children:"jspacecompo"}),", ",(0,r.jsx)(n.code,{children:"jtimecompo"}),")."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["If addContribution and scale present, then this subroutine adds ",(0,r.jsx)(n.code,{children:"value"})," to the matrix."]})]})}),"\n",(0,r.jsx)(n.h2,{id:"interface-8",children:"Interface 8"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{value:"interface-10",label:"\ud805\uddcd Set",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &\n  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &\n  & addContribution )\n  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)\n  INTEGER( I4B ), INTENT( IN ) :: ivar\n  INTEGER( I4B ), INTENT( IN ) :: jvar\n  INTEGER( I4B ), INTENT( IN ) :: ispacecompo(:)\n  INTEGER( I4B ), INTENT( IN ) :: itimecompo\n  INTEGER( I4B ), INTENT( IN ) :: jspacecompo(:)\n  INTEGER( I4B ), INTENT( IN ) :: jtimecompo\n  REAL( DFP ), INTENT( IN ) :: value\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution\nEND SUBROUTINE Set\nEND INTERFACE\n"})}),(0,r.jsx)(n.p,{children:"If addContribution and scale are not present then:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This subroutine sets ",(0,r.jsx)(n.code,{children:"value"})," to the matrix."]}),"\n",(0,r.jsxs)(n.li,{children:["This entry is specified by the ",(0,r.jsx)(n.code,{children:"iNodeNum"})," and ",(0,r.jsx)(n.code,{children:"jNodeNum"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The exact location of the entry is computed using (",(0,r.jsx)(n.code,{children:"iNodeNum"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"ispacecompo"}),", ",(0,r.jsx)(n.code,{children:"itimecompo"}),") and (",(0,r.jsx)(n.code,{children:"jNodeNum"}),", ",(0,r.jsx)(n.code,{children:"jvar"}),", ",(0,r.jsx)(n.code,{children:"jspacecompo"}),", ",(0,r.jsx)(n.code,{children:"jtimecompo"}),")."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["If addContribution and scale present, then this subroutine adds ",(0,r.jsx)(n.code,{children:"value"})," to the matrix."]})]})})]})}function I(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,i)=>{i.d(n,{Z:()=>a});i(67294);var r=i(86010);const t={tabItem:"tabItem_Ymn6"};var o=i(85893);function a(e){let{children:n,hidden:i,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,a),hidden:i,children:n})}},74866:(e,n,i)=>{i.d(n,{Z:()=>b});var r=i(67294),t=i(86010),o=i(12466),a=i(16550),d=i(20469),l=i(91980),c=i(67392),s=i(50012);function N(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return N(e).map((e=>{let{props:{value:n,label:i,attributes:r,default:t}}=e;return{value:n,label:i,attributes:r,default:t}}))}(i);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function I(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:i}=e;const t=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,o=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!I({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=i.find((e=>e.default))??i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,N]=h({queryString:i,groupId:t}),[j,T]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,s.Nk)(i);return[t,(0,r.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:t}),E=(()=>{const e=c??j;return I({value:e,tabValues:o})?e:null})();(0,d.Z)((()=>{E&&l(E)}),[E]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!I({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),N(e),T(e)}),[N,T,o]),tabValues:o}}var T=i(72389);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(85893);function m(e){let{className:n,block:i,selectedValue:r,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),s=e=>{const n=e.currentTarget,i=l.indexOf(n),t=d[i].value;t!==r&&(c(n),a(t))},N=e=>{let n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":i},n),children:d.map((e=>{let{value:n,label:i,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:N,onClick:s,...o,className:(0,t.Z)("tabs__item",E.tabItem,o?.className,{"tabs__item--active":r===n}),children:i??n},n)}))})}function p(e){let{lazy:n,children:i,selectedValue:t}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function f(e){const n=j(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",E.tabList),children:[(0,x.jsx)(m,{...e,...n}),(0,x.jsx)(p,{...e,...n})]})}function b(e){const n=(0,T.Z)();return(0,x.jsx)(f,{...e,children:N(e.children)},String(n))}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var r=i(67294);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);