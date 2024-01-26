"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43670],{44243:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>N,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=i(85893),t=i(11151);const s={},a="Structure",r={id:"XMLFile/XMLFile_",title:"Structure",description:"XMLFile is a child of [[AbstractFile_]] class.",source:"@site/docs/docs-api/XMLFile/XMLFile_.md",sourceDirName:"XMLFile",slug:"/XMLFile/XMLFile_",permalink:"/docs-api/XMLFile/XMLFile_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/XMLFile/XMLFile_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XMLFile",permalink:"/docs-api/XMLFile/"},next:{title:"XMLFile example 1",permalink:"/docs-api/XMLFile/XMLFile_test_1"}},o={},d=[{value:"ConstructorMethods",id:"constructormethods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"Open",id:"open",level:3},{value:"Close",id:"close",level:3},{value:"Delete",id:"delete",level:3},{value:"IOMethods",id:"iomethods",level:2},{value:"Export",id:"export",level:3},{value:"Import",id:"import",level:3},{value:"Display",id:"display",level:3},{value:"ParseXMLDeclaration",id:"parsexmldeclaration",level:3},{value:"BuildCache",id:"buildcache",level:3},{value:"SetMethods",id:"setmethods",level:2},{value:"SetNewStat",id:"setnewstat",level:3},{value:"SetOverwriteStat",id:"setoverwritestat",level:3},{value:"GetMethods",id:"getmethods",level:2},{value:"isNew",id:"isnew",level:3},{value:"isOverwrite",id:"isoverwrite",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,l.jsx)(n.p,{children:"XMLFile is a child of [[AbstractFile_]] class."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"TYPE, EXTENDS( AbstractFile_ ) :: XMLFile_\n  PRIVATE\n  LOGICAL( LGT ), PUBLIC :: isInitiated = .FALSE.\n    !! Logical indicating if file was initialized\n  INTEGER( I4B ), PUBLIC :: unitNo=-1\n    !! The unit number assigned to the file\n  REAL( DFP ) :: version=1.0_DFP\n    !! The XML version\n  CHARACTER( LEN=32 ) :: encoding='UTF-8'\n    !! The XML file encoding\n  TYPE( String ) :: style_sheet\n  LOGICAL( LGT ) :: standalone=.FALSE.\n    !! The root XML element of the file\n  LOGICAL( LGT ) :: newstat=.FALSE.\n    !! The 'new' status of a file\n  LOGICAL( LGT ) :: overwriteStat=.FALSE.\n    !! When .TRUE., file data can be overwritten\n  TYPE( String ) :: fullname\n    !! full name of the file\n  TYPE( XMLTag_ ), PUBLIC, POINTER :: root => NULL()\n"})}),"\n",(0,l.jsx)(n.h2,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,l.jsx)(n.h3,{id:"initiate",children:"Initiate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Initiate( obj, filename, mode )\n  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\n  CHARACTER( LEN = * ), INTENT( IN ) :: mode\n    !! mode can be READ, WRITE, NEW, OVERWRITE\nEND SUBROUTINE Initiate\n"})}),"\n",(0,l.jsx)(n.p,{children:"This routine initiates the XMLFile ."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"filename is full name of the file"}),"\n",(0,l.jsx)(n.li,{children:"mode can be READ, WRITE, NEW, OVERWRITE"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"READ"}),": The file should exist."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"WRITE"}),": The file should exist."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"OVERWRITE"}),": The file is opened with read and write access. If the file does not exist, then a new file is created."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"NEW"}),": The file is opened with read and write access. If the file does not exist, then a new file is created."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Deallocate( obj, delete )\n  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: delete\nEND SUBROUTINE Deallocate\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This routine deallocates the data stored in the file. This routine also close the file. If ",(0,l.jsx)(n.code,{children:"delete"})," is present then delete the file."]}),"\n",(0,l.jsx)(n.h3,{id:"open",children:"Open"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Open( obj )\n  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj\nEND SUBROUTINE Open\n"})}),"\n",(0,l.jsx)(n.h3,{id:"close",children:"Close"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Close( obj )\n  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj\nEND SUBROUTINE Close\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Delete( obj )\n  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj\nEND SUBROUTINE Delete\n"})}),"\n",(0,l.jsx)(n.h2,{id:"iomethods",children:"IOMethods"}),"\n",(0,l.jsx)(n.h3,{id:"export",children:"Export"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Export( obj, filename )\n  CLASS( xmlFile_ ), INTENT( IN ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE Export\n"})}),"\n",(0,l.jsx)(n.p,{children:"Export the content of a XMLFile to an XML file."}),"\n",(0,l.jsx)(n.h3,{id:"import",children:"Import"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Import( obj, filename )\n  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE Import\n"})}),"\n",(0,l.jsx)(n.h3,{id:"display",children:"Display"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Display( obj, msg, unitNo )\n  CLASS( XMLFile_ ), INTENT( IN ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo\nEND SUBROUTINE Display\n"})}),"\n",(0,l.jsx)(n.h3,{id:"parsexmldeclaration",children:"ParseXMLDeclaration"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE ParseXMLDeclaration( obj )\n  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj\nEND SUBROUTINE ParseXMLDeclaration\n"})}),"\n",(0,l.jsx)(n.h3,{id:"buildcache",children:"BuildCache"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE BuildCache( obj, nchars, fileCache )\n  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( OUT ) :: nchars\n  CHARACTER( LEN=1 ), ALLOCATABLE, INTENT( INOUT ) :: fileCache(:)\nEND SUBROUTINE BuildCache\n"})}),"\n",(0,l.jsx)(n.h2,{id:"setmethods",children:"SetMethods"}),"\n",(0,l.jsx)(n.h3,{id:"setnewstat",children:"SetNewStat"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE SetNewStat( obj, bool )\n  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj\n  LOGICAL( LGT ), INTENT( IN ) :: bool\nEND SUBROUTINE SetNewStat\n"})}),"\n",(0,l.jsx)(n.h3,{id:"setoverwritestat",children:"SetOverwriteStat"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE SetOverwriteStat( obj, bool )\n  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj\n  LOGICAL( LGT ), INTENT( IN ) :: bool\nEND SUBROUTINE SetOverwriteStat\n"})}),"\n",(0,l.jsx)(n.h2,{id:"getmethods",children:"GetMethods"}),"\n",(0,l.jsx)(n.h3,{id:"isnew",children:"isNew"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION isNew( obj ) RESULT( Ans )\n  CLASS( XMLFile_ ), INTENT( IN ) :: obj\n  LOGICAL( LGT ) :: ans\nEND FUNCTION isNew\n"})}),"\n",(0,l.jsx)(n.h3,{id:"isoverwrite",children:"isOverwrite"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION isFormatted( obj ) RESULT( ans )\n  CLASS( XMLFile_ ), INTENT( IN ) :: obj\n  LOGICAL( LGT ) :: ans\nEND FUNCTION isFormatted\n"})})]})}function N(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var l=i(67294);const t={},s=l.createContext(t);function a(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);