"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[42163],{86879:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>N,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=t(85893),l=t(11151);const n={},s="AbstractMaterialModel",i={id:"AbstractMaterialModel/AbstractMaterialModel_",title:"AbstractMaterialModel",description:"AbstractMatrialModel_ is an abstract class for modeling the behavior of solids, fluids, porous materials, etc.",source:"@site/docs/docs-api/AbstractMaterialModel/AbstractMaterialModel_.md",sourceDirName:"AbstractMaterialModel",slug:"/AbstractMaterialModel/AbstractMaterialModel_",permalink:"/docs-api/AbstractMaterialModel/AbstractMaterialModel_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMaterialModel/AbstractMaterialModel_.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AbstractMaterialModel",permalink:"/docs-api/AbstractMaterialModel/"},next:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractMaterialModel/CheckEssentialParam"}},o={},c=[{value:"Structure",id:"structure",level:2},{value:"Methods",id:"methods",level:2},{value:"CheckEssentialParam",id:"checkessentialparam",level:3},{value:"Initiate",id:"initiate",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"Import",id:"import",level:3},{value:"Export",id:"export",level:3},{value:"Display",id:"display",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"abstractmaterialmodel",children:"AbstractMaterialModel"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AbstractMatrialModel_"})," is an abstract class for modeling the behavior of solids, fluids, porous materials, etc."]}),"\n",(0,r.jsx)(a.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(a.p,{children:["The header of ",(0,r.jsx)(a.a,{href:"/docs-api/AbstractMaterialModel/AbstractMaterialModel_",children:"AbstractMaterialModel_"})," is given below"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractMaterialModel_\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n  TYPE(String) :: name\n"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AbstractMaterialModel_"})," has following subclasses."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:"AbstractSolidMechanicsModel_"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:"AbstractPoroMechanicsModel_"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:"AbstractFluidMechanicsModel_"})}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(a.p,{children:["For a concrete implementation of ",(0,r.jsx)(a.code,{children:"AbstractMaterialModel_"})," one has to implement the following methods."]}),"\n",(0,r.jsx)(a.h3,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE checkEssentialParam( obj, param )\n  IMPORT\n  CLASS( AbstractMaterialModel_ ), INTENT( IN ) :: obj\n  TYPE( ParameterList_ ), INTENT( IN ) :: param\nEND SUBROUTINE checkEssentialParam\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(a.h3,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Initiate( obj, param )\n  IMPORT\n  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj\n  TYPE( ParameterList_ ), INTENT( IN ) :: param\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(a.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Deallocate( obj )\n  IMPORT\n  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj\nEND SUBROUTINE Deallocate\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(a.h3,{id:"import",children:"Import"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Import( obj, hdf5, group )\n  IMPORT\n  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\nEND SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(a.h3,{id:"export",children:"Export"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Export( obj, hdf5, group )\n  IMPORT\n  CLASS( AbstractMaterialModel_ ), INTENT( IN ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\nEND SUBROUTINE Export\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(a.h3,{id:"display",children:"Display"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Display( obj, msg, unitNo )\n  IMPORT\n  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo\nEND SUBROUTINE Display\nEND INTERFACE\n"})})]})}function N(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>s});var r=t(67294);const l={},n=r.createContext(l);function s(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);