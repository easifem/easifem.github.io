"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[46436],{14575:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=t(85893),n=t(11151);const i={authors:"Vikas Sharma, Ph. D.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"TxtFile Example 7",tags:["TxtFile/Initiate","TxtFile/GetTotalRecords","TxtFile/Read"]},s="TxtFile Example 7",r={id:"TxtFile/TxtFile_test_7",title:"TxtFile Example 7",description:"This example shows the usage of Read methods to read a matrix.",source:"@site/docs/docs-api/TxtFile/TxtFile_test_7.md",sourceDirName:"TxtFile",slug:"/TxtFile/TxtFile_test_7",permalink:"/docs-api/TxtFile/TxtFile_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TxtFile/TxtFile_test_7.md",tags:[{label:"TxtFile/Initiate",permalink:"/docs-api/tags/txt-file-initiate"},{label:"TxtFile/GetTotalRecords",permalink:"/docs-api/tags/txt-file-get-total-records"},{label:"TxtFile/Read",permalink:"/docs-api/tags/txt-file-read"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"TxtFile Example 7",tags:["TxtFile/Initiate","TxtFile/GetTotalRecords","TxtFile/Read"]},sidebar:"tutorialSidebar",previous:{title:"TxtFile Example 6",permalink:"/docs-api/TxtFile/TxtFile_test_6"},next:{title:"TxtFile Example 8",permalink:"/docs-api/TxtFile/TxtFile_test_8"}},o={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"txtfile-example-7",children:"TxtFile Example 7"}),"\n",(0,l.jsxs)(a.p,{children:["This example shows the usage of ",(0,l.jsx)(a.code,{children:"Read"})," methods to read a matrix."]}),"\n",(0,l.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"[[TxtFile_]]"}),"\n",(0,l.jsx)(a.li,{children:"[[String]]"}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a.p,{children:"Importing modules and defining variables"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'program main\n  use easifemBase\n  use easifemClasses\n  type(txtfile_) :: obj\n  type(string) :: aline\n  integer(i4b), allocatable :: intval(:,:), iostat\n  real(dfp), allocatable :: realval(:,:)\n  type(intvector_), allocatable :: intvectorval( : )\n  type(realvector_), allocatable :: realvectorval( : )\n  character(len=*), parameter :: filename="./examples/matrixval.txt"\n'})}),"\n",(0,l.jsx)(a.p,{children:"Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  call obj%initiate(filename=filename, status='OLD', &\n    & action='READ')\n  call obj%open()\n"})}),"\n",(0,l.jsx)(a.p,{children:"Read the value in the integer."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  call obj%read(val=intval, iostat=iostat)\n  call display( intval, "intval = ")\n'})}),"\n",(0,l.jsx)(a.p,{children:"Read the value in the real."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  call obj%rewind()\n  call obj%read(val=realval, iostat=iostat)\n  call display( realval, "realval = ")\n'})}),"\n",(0,l.jsx)(a.p,{children:"Read the value in a vector of [[IntVector_]]."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  call obj%rewind()\n  call obj%read(val=intvectorval, iostat=iostat)\n  call display( intvectorval, "intvectorval = ")\n'})}),"\n",(0,l.jsx)(a.p,{children:"Read the value in a vector of [[RealVector_]]."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  call obj%rewind()\n  call obj%read(val=realvectorval, iostat=iostat)\n  call display( realvectorval, "realvectorval = ")\n'})}),"\n",(0,l.jsx)(a.p,{children:"Cleaning up."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"call obj%deallocate()\nend program main\n"})})]})}function x(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>s});var l=t(67294);const n={},i=l.createContext(n);function s(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(i.Provider,{value:a},e.children)}}}]);