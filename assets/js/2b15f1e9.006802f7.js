"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76729],{70186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=n(85893),l=n(11151);const i={authors:"Vikas Sharma, Ph. D.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"TxtFile Example 9",tags:["TxtFile/Initiate","TxtFile/GetTotalRecords","TxtFile/Write"]},s="TxtFile Example 9",r={id:"TxtFile/TxtFile_test_9",title:"TxtFile Example 9",description:"This example shows the usage of Write methods to write a vector.",source:"@site/docs/docs-api/TxtFile/TxtFile_test_9.md",sourceDirName:"TxtFile",slug:"/TxtFile/TxtFile_test_9",permalink:"/docs-api/TxtFile/TxtFile_test_9",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TxtFile/TxtFile_test_9.md",tags:[{label:"TxtFile/Initiate",permalink:"/docs-api/tags/txt-file-initiate"},{label:"TxtFile/GetTotalRecords",permalink:"/docs-api/tags/txt-file-get-total-records"},{label:"TxtFile/Write",permalink:"/docs-api/tags/txt-file-write"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"TxtFile Example 9",tags:["TxtFile/Initiate","TxtFile/GetTotalRecords","TxtFile/Write"]},sidebar:"tutorialSidebar",previous:{title:"TxtFile Example 8",permalink:"/docs-api/TxtFile/TxtFile_test_8"},next:{title:"Ultraspherical",permalink:"/docs-api/UltrasphericalPolynomialUtility/"}},c={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"txtfile-example-9",children:"TxtFile Example 9"}),"\n",(0,a.jsxs)(t.p,{children:["This example shows the usage of ",(0,a.jsx)(t.code,{children:"Write"})," methods to write a vector."]}),"\n",(0,a.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[[TxtFile_]]"}),"\n",(0,a.jsx)(t.li,{children:"[[String]]"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"Importing modules and defining variables"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifemBase\n  use easifemClasses\n  type(txtfile_) :: obj\n  type(string) :: aline\n  integer(i4b), allocatable :: int_r0(:)\n  integer(i4b) :: iostat\n  real(dfp), allocatable :: real_r0( : )\n  character(len=*), parameter :: filename="./examples/w_vectorval.txt"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file. We use comma separated values."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  call obj%initiate(filename=filename, status='NEW', &\n    & action='WRITE', separator=\",\")\n  call obj%open()\n"})}),"\n",(0,a.jsx)(t.p,{children:"Write the value of integer vector. By default a vector is treated as a column."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  int_r0 = [10, 20, 30]\n  call obj%write(val=int_r0)\n"})}),"\n",(0,a.jsx)(t.p,{children:"The result is given below."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:"> result\n10\n20\n30\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can write the results as a row by setting ",(0,a.jsx)(t.code,{children:"orient=ROW"}),". Note that by default ",(0,a.jsx)(t.code,{children:'advance="YES"'}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  call obj%write(val=int_r0, orient="ROW")\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:"> result\n10,20,30\n"})}),"\n",(0,a.jsx)(t.p,{children:"Write the value of real vector."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  real_r0 = arange(0.0, 1.0, 0.5)\n  call obj%write(val=real_r0)\n"})}),"\n",(0,a.jsx)(t.p,{children:"The result is given below"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:">result\n 0.000000000000000E+000\n 0.500000000000000E+000\n 0.100000000000000E+001\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can set ",(0,a.jsx)(t.code,{children:'advance="NO"'})," to obtain the following.\nNote that if want to advance to next line, then you should make an empty call to write."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  call obj%write(val=real_r0, advance="NO")\n  !! now advancing\n  call obj%write()\n'})}),"\n",(0,a.jsx)(t.p,{children:"The result is given below:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:">result\n 0.000000000000000E+000, 0.500000000000000E+000, 0.100000000000000E+001,\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can also obtain the above result by usign ",(0,a.jsx)(t.code,{children:"orient=ROW"}),".\nIn this case ",(0,a.jsx)(t.code,{children:"advance=YES"})," by default."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  call obj%write(val=real_r0, orient="ROW")\n'})}),"\n",(0,a.jsx)(t.p,{children:"The results is given below"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:"> result\n 0.000000000000000E+000, 0.500000000000000E+000, 0.100000000000000E+001\n"})}),"\n",(0,a.jsxs)(t.p,{children:['Following code shows how you can write many rows in a single line. Remember to set advance="YES" for the last call, or make a call to ',(0,a.jsx)(t.code,{children:"obj%write()"})," without any arguments."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  call obj%write(val=10*real_r0, orient="ROW", advance="NO")\n  call obj%write(val=20*real_r0, orient="ROW", advance="YES")\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:">result\n 0.000000000000000E+000, 0.500000000000000E+001, 0.100000000000000E+002, 0.000000000000000E+000, 0.100000000000000E+002, 0.200000000000000E+002\n"})}),"\n",(0,a.jsx)(t.p,{children:"Cleaning up."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"call obj%deallocate()\nend program main\n"})})]})}function x(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const l={},i=a.createContext(l);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);