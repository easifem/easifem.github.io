"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[61804],{58015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>E,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(85893),i=t(11151);const a={},s="Structure",l={id:"FortranFile/FortranFile_",title:"Structure",description:"The Fortran file type is an extension of [[AbstractFile_]].",source:"@site/docs/docs-api/FortranFile/FortranFile_.md",sourceDirName:"FortranFile",slug:"/FortranFile/FortranFile_",permalink:"/docs-api/FortranFile/FortranFile_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FortranFile/FortranFile_.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FortranFile",permalink:"/docs-api/FortranFile/"},next:{title:"FortranFile example 1",permalink:"/docs-api/FortranFile/FortranFile_test_1"}},o={},d=[{value:"ConstructorMethods",id:"constructormethods",level:2},{value:"AddSurrogate",id:"addsurrogate",level:3},{value:"Initiate",id:"initiate",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"Open",id:"open",level:3},{value:"Close",id:"close",level:3},{value:"Delete",id:"delete",level:3},{value:"Backspace",id:"backspace",level:3},{value:"Rewind",id:"rewind",level:3},{value:"SetMethods",id:"setmethods",level:2},{value:"SetStatus",id:"setstatus",level:3},{value:"GetMethods",id:"getmethods",level:2},{value:"GetUnitNo",id:"getunitno",level:3},{value:"GetRecLen",id:"getreclen",level:3},{value:"EnquireMethods",id:"enquiremethods",level:2},{value:"IsFormatted",id:"isformatted",level:3},{value:"IsDirect",id:"isdirect",level:3},{value:"IsPadded",id:"ispadded",level:3},{value:"IsNew",id:"isnew",level:3},{value:"IsOverwrite",id:"isoverwrite",level:3},{value:"IsInitiated",id:"isinitiated",level:3}];function N(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(n.p,{children:"The Fortran file type is an extension of [[AbstractFile_]].\nIt provides a simplified interface to the native Fortran file capabilities and includes error checking."}),"\n",(0,r.jsx)(n.p,{children:"Note that FortranFile does not provide any method to write and read data from the file. This is because the data may be written in ASCII or Binary format. For this reason FortranFile is extended to following file formats."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[[TxtFile_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[DA32File_]]."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractFile_) :: FortranFile_\n  PRIVATE\n  LOGICAL(LGT) :: initstat = .FALSE.\n    !! file initiated or not\n  INTEGER(I4B) :: unitno = -1\n    !! unit number\n  INTEGER(I4B) :: reclval = -1\n    !! record length for direct access\n  LOGICAL(LGT) :: formatstat = .FALSE.\n    !! file is formatted or not\n  LOGICAL(LGT) :: accessstat = .FALSE.\n    !! direct or sequential access\n  LOGICAL(LGT) :: newstat = .FALSE.\n    !! the new status of a file\n  LOGICAL(LGT) :: overwrite = .FALSE.\n    !! replace or not\n  LOGICAL(LGT) :: padstat = .FALSE.\n    !! Whether or not the file is being padded\n  LOGICAL(LGT) :: getNewUnit = .FALSE.\n  CHARACTER(LEN=6) :: posopt = 'ASIS  '\n  CHARACTER(LEN=1) :: comment = hash\n  CHARACTER(LEN=1) :: separator = comma\n  CHARACTER(LEN=2) :: delimiter = \"\\n\"\n"})}),"\n",(0,r.jsx)(n.h2,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,r.jsx)(n.h3,{id:"addsurrogate",children:"AddSurrogate"}),"\n",(0,r.jsx)(n.p,{children:"Add surrogate to the module"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE addSurrogate(obj, UserObj)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n    TYPE(ExceptionHandler_), INTENT(IN) :: UserObj\n  END SUBROUTINE addSurrogate\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(n.p,{children:"Initiate the fortran file. See example [[FortranFile_test_1]] and [[FortranFile_test_2]]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE initiate( obj, filename, unit, status, access, form, &\n    & position, action, pad, recl, comment, separator, delimiter)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n    CHARACTER(LEN=*), INTENT(IN) :: filename\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unit\n    !! unit number, should not be equal to `stdout, stdin, stderr`\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: status\n    !! OLD, NEW, SCRATCH, REPLACE, UNKNOWN\n    !! If UNKNOWN then we use REPLACE\n    !! Default is REPLACE\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: access\n    !! DIRECT, SEQUENTIAL, STREAM\n    !! Default is SEQUENTIAL\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: form\n    !! FORMATTED, UNFORMATTED\n    !! Default is FORMATTED\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: position\n    !! REWIND, APPEND, ASIS\n    !! Default is ASIS\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: action\n    !! READ, WRITE, READWRITE\n    !! Default is READWRITE\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: pad\n    !! YES, NO\n    !! Default is YES\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: recl\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: comment\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: separator\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: delimiter\n  END SUBROUTINE initiate\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,r.jsx)(n.p,{children:"Deallocate the content of Fortran file, you can delete the file if you want. Note that we have overridden the deallocate method defined for [[AbstractFile_]]. See [[FortranFile_test_1]] and [[FortranFile_test_2]]."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Deallocate(obj, delete)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: delete\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"open",children:"Open"}),"\n",(0,r.jsx)(n.p,{children:"Open the Fortran file. See [[FortranFile_test_1]] and [[FortranFile_test_2]]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE open(obj)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n  END SUBROUTINE open\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"close",children:"Close"}),"\n",(0,r.jsx)(n.p,{children:"Close the fortran file. See [[FortranFile_test_1]] and [[FortranFile_test_2]]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE close(obj)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n  END SUBROUTINE close\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,r.jsx)(n.p,{children:"Delete the fortran file. See [[FortranFile_test_1]] and [[FortranFile_test_2]]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE delete(obj)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n  END SUBROUTINE delete\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"backspace",children:"Backspace"}),"\n",(0,r.jsx)(n.p,{children:"Move one line back"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE backspace(obj)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n  END SUBROUTINE backspace\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"rewind",children:"Rewind"}),"\n",(0,r.jsx)(n.p,{children:"Move to the begining"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE rewind(obj)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n  END SUBROUTINE rewind\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setmethods",children:"SetMethods"}),"\n",(0,r.jsx)(n.h3,{id:"setstatus",children:"SetStatus"}),"\n",(0,r.jsx)(n.p,{children:"Set the status of the file."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the status is ",(0,r.jsx)(n.code,{children:"OLD"})," then file should exists"]}),"\n",(0,r.jsx)(n.li,{children:"Otherwise we will create new file and replace any existing file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetStatus(obj, status)\n    CLASS(FortranFile_), INTENT(INOUT) :: obj\n    CHARACTER(LEN=*), INTENT(IN) :: status\n    !! status can be\n    !! OLD, NEW, REPLACE, SCRATCH, UNKNOWN\n    LOGICAL(LGT) :: ans\n  END SUBROUTINE SetStatus\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"getmethods",children:"GetMethods"}),"\n",(0,r.jsx)(n.h3,{id:"getunitno",children:"GetUnitNo"}),"\n",(0,r.jsx)(n.p,{children:"Get the unit number of the fortran file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION getUnitNo(obj) RESULT(ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    INTEGER(I4B) :: ans\n  END FUNCTION getUnitNo\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getreclen",children:"GetRecLen"}),"\n",(0,r.jsx)(n.p,{children:"Get the length of the record"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION getRecLen(obj) RESULT(ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    INTEGER(I4B) :: ans\n  END FUNCTION getRecLen\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"enquiremethods",children:"EnquireMethods"}),"\n",(0,r.jsx)(n.h3,{id:"isformatted",children:"IsFormatted"}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the file is formatted"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isFormatted(obj) RESULT(ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isFormatted\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"isdirect",children:"IsDirect"}),"\n",(0,r.jsx)(n.p,{children:"Returns true if direct access"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isDirect(obj) RESULT(ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isDirect\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ispadded",children:"IsPadded"}),"\n",(0,r.jsx)(n.p,{children:"Returns true if padded"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isPadded(obj) RESULT(ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isPadded\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"isnew",children:"IsNew"}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the file is new"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isNew(obj) RESULT(Ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isNew\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"isoverwrite",children:"IsOverwrite"}),"\n",(0,r.jsx)(n.p,{children:"Returns true if overwrite status is set"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isOverwrite(obj) RESULT(Ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isOverwrite\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"isinitiated",children:"IsInitiated"}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the file is initiated"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isInitiated(obj) RESULT(Ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isInitiated\nEND INTERFACE\n"})})]})}function E(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);