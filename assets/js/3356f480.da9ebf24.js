"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22462],{9342:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=i(85893),n=i(11151);const l={authors:"Vikas Sharma, Ph. D.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"TxtFile Example 3",tags:["TxtFile/Initiate","TxtFile/IsEOF","TxtFile/ReadLine","TxtFile/Rewind"]},s="TxtFile Example 3",r={id:"TxtFile/TxtFile_test_3",title:"TxtFile Example 3",description:"This code reads a markdown file and extracts the fortran code",source:"@site/docs/docs-api/TxtFile/TxtFile_test_3.md",sourceDirName:"TxtFile",slug:"/TxtFile/TxtFile_test_3",permalink:"/docs-api/TxtFile/TxtFile_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TxtFile/TxtFile_test_3.md",tags:[{label:"TxtFile/Initiate",permalink:"/docs-api/tags/txt-file-initiate"},{label:"TxtFile/IsEOF",permalink:"/docs-api/tags/txt-file-is-eof"},{label:"TxtFile/ReadLine",permalink:"/docs-api/tags/txt-file-read-line"},{label:"TxtFile/Rewind",permalink:"/docs-api/tags/txt-file-rewind"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"TxtFile Example 3",tags:["TxtFile/Initiate","TxtFile/IsEOF","TxtFile/ReadLine","TxtFile/Rewind"]},sidebar:"tutorialSidebar",previous:{title:"TxtFile Example 2",permalink:"/docs-api/TxtFile/TxtFile_test_2"},next:{title:"TxtFile Example 4",permalink:"/docs-api/TxtFile/TxtFile_test_4"}},d={},o=[{value:"Usage",id:"usage",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"txtfile-example-3",children:"TxtFile Example 3"}),"\n",(0,a.jsx)(t.p,{children:"This code reads a markdown file and extracts the fortran code"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(TxtFile_) :: srcfile, mdfile\nCHARACTER(LEN=*), PARAMETER :: mdfilename = "./examples/TxtFile_test_1.md"\nCHARACTER(LEN=*), PARAMETER :: srcfilename = "./examples/TxtFile_test_1.f90"\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'CALL mdfile%Initiate(filename=mdfilename, STATUS="OLD", ACTION="READ")\nCALL mdfile%OPEN()\nCALL srcfile%Initiate(filename=srcfilename, status="REPLACE", &\n     & ACTION="WRITE")\nCALL srcfile%Open()\nCALL mdfile%ConvertMarkdownToSource(outfile=srcfile)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL mdfile%Deallocate()\nCALL srcfile%Deallocate()\nEND PROGRAM main\n"})})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>s});var a=i(67294);const n={},l=a.createContext(n);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);