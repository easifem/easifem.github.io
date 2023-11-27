"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80828],{91132:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var n=i(85893),a=i(11151);const l={authors:"Vikas Sharma, Ph. D.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"TxtFile Example 2",tags:["TxtFile/Initiate","TxtFile/Open","TxtFile/IsEOF","TxtFile/ReadLine","TxtFile/Rewind"]},s="TxtFile example 2",r={id:"TxtFile/TxtFile_test_2",title:"TxtFile Example 2",description:"In this example we show how to use ReadLine function.",source:"@site/docs/docs-api/TxtFile/TxtFile_test_2.md",sourceDirName:"TxtFile",slug:"/TxtFile/TxtFile_test_2",permalink:"/docs-api/TxtFile/TxtFile_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TxtFile/TxtFile_test_2.md",tags:[{label:"TxtFile/Initiate",permalink:"/docs-api/tags/txt-file-initiate"},{label:"TxtFile/Open",permalink:"/docs-api/tags/txt-file-open"},{label:"TxtFile/IsEOF",permalink:"/docs-api/tags/txt-file-is-eof"},{label:"TxtFile/ReadLine",permalink:"/docs-api/tags/txt-file-read-line"},{label:"TxtFile/Rewind",permalink:"/docs-api/tags/txt-file-rewind"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"TxtFile Example 2",tags:["TxtFile/Initiate","TxtFile/Open","TxtFile/IsEOF","TxtFile/ReadLine","TxtFile/Rewind"]},sidebar:"tutorialSidebar",previous:{title:"TxtFile Example 10",permalink:"/docs-api/TxtFile/TxtFile_test_10"},next:{title:"TxtFile Example 3",permalink:"/docs-api/TxtFile/TxtFile_test_3"}},d={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"txtfile-example-2",children:"TxtFile example 2"}),"\n",(0,n.jsxs)(t.p,{children:["In this example we show how to use ",(0,n.jsx)(t.code,{children:"ReadLine"})," function."]}),"\n",(0,n.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"[[TxtFile_]]"}),"\n",(0,n.jsx)(t.li,{children:"[[String]]"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"Importing modules and defining variables"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\n  use easifemBase\n  use easifemClasses\n  TYPE(TxtFile_) :: obj\n  TYPE(String) :: aline\n  INTEGER(I4B) :: ii\n  character(len=*), parameter :: filename="./examples/example.txt"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  CALL obj%Initiate(filename=filename, status='OLD', &\n    & action='READ')\n  CALL obj%OPEN()\n"})}),"\n",(0,n.jsx)(t.p,{children:"Read a line/record from the buffer"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  CALL obj%readLine(aline)\n  CALL display(aline, "line "//tostring(1)//"=")\n'})}),"\n",(0,n.jsx)(t.p,{children:"Rewind the file"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  CALL obj%REWIND()\n"})}),"\n",(0,n.jsx)(t.p,{children:"Let us read the entire file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  ii = 0\n  DO WHILE( .not. obj%isEOF() )\n    CALL obj%readLine(aline)\n    ii = ii + 1\n    CALL display(aline, "aline "//tostring(ii)//"=")\n  END DO\n'})}),"\n",(0,n.jsx)(t.p,{children:"Cleaning up."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>s});var n=i(67294);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);