"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82494],{80075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=n(85893),i=n(11151);const s={authors:"Vikas Sharma, Ph. D.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"TxtFile Example 4",tags:["TxtFile/Initiate","TxtFile/GetTotalRecords"]},a="TxtFile Example 4",o={id:"TxtFile/TxtFile_test_4",title:"TxtFile Example 4",description:"This example shows the usage of getTotalRecords methods",source:"@site/docs/docs-api/TxtFile/TxtFile_test_4.md",sourceDirName:"TxtFile",slug:"/TxtFile/TxtFile_test_4",permalink:"/docs-api/TxtFile/TxtFile_test_4",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TxtFile/TxtFile_test_4.md",tags:[{label:"TxtFile/Initiate",permalink:"/docs-api/tags/txt-file-initiate"},{label:"TxtFile/GetTotalRecords",permalink:"/docs-api/tags/txt-file-get-total-records"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"TxtFile Example 4",tags:["TxtFile/Initiate","TxtFile/GetTotalRecords"]},sidebar:"tutorialSidebar",previous:{title:"TxtFile Example 3",permalink:"/docs-api/TxtFile/TxtFile_test_3"},next:{title:"TxtFile Example 5",permalink:"/docs-api/TxtFile/TxtFile_test_5"}},r={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"txtfile-example-4",children:"TxtFile Example 4"}),"\n",(0,l.jsxs)(t.p,{children:["This example shows the usage of ",(0,l.jsx)(t.code,{children:"getTotalRecords"})," methods"]}),"\n",(0,l.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"[[TxtFile_]]"}),"\n",(0,l.jsx)(t.li,{children:"[[String]]"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t.p,{children:"Importing modules and defining variables"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nuse easifemClasses\nTYPE(TxtFile_) :: obj\nTYPE(String) :: aline\nINTEGER(I4B) :: ii\ncharacter(len=*), parameter :: filename="./examples/example.txt"\n'})}),"\n",(0,l.jsx)(t.p,{children:"Initiate an instance of [[TxtFile_]], and then #TxtFile/Open : Open the [[TxtFile_]] file"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:"CALL obj%Initiate(filename=filename, status='OLD', &\n  & action='READ')\nCALL obj%OPEN()\n"})}),"\n",(0,l.jsx)(t.p,{children:"Returns the total number of records in the file."}),"\n",(0,l.jsx)(t.p,{children:'!!! note ""\nThis routine does not ignore the blank record as well as comments'}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'CALL IS(obj%getTotalRecords(), 8, "test-1")\n'})}),"\n",(0,l.jsxs)(t.p,{children:['!!! note ""\nThe following code will excludes the comments while counting the number of records. ',(0,l.jsx)(t.code,{children:"ignoreComment"})," and ",(0,l.jsx)(t.code,{children:"commentSymbol"})," should be provided in this case"]}),"\n",(0,l.jsx)(t.p,{children:'!!! warning ""\nNote that this code will still include the blanklines as the valid record.'}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'CALL IS(obj%getTotalRecords(ignoreComment=.TRUE., commentSymbol="#"), 5, "test-2" )\n'})}),"\n",(0,l.jsx)(t.p,{children:'!!! note ""\nThe following code will ignore any blank character from the record.'}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'CALL IS(obj%getTotalRecords(ignoreComment=.TRUE., commentSymbol="#", ignoreBlank=.TRUE.), 4, "test-3" )\n'})}),"\n",(0,l.jsx)(t.p,{children:"Cleaning up."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:"CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var l=n(67294);const i={},s=l.createContext(i);function a(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);