"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5383],{4531:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=n(85893),t=n(11151);const i={date:new Date("2022-07-20T00:00:00.000Z"),update:new Date("2022-07-20T00:00:00.000Z"),status:"stable",docs:"todo",extpkgs:null,category:["Example"],tags:["example","CSVFile/Initiate","CSVFile/Open","CSVFile/Read","CSVFile/Get"]},s="CSVFile example 2",c={id:"CSVFile/CSVFile_test_2",title:"CSVFile example 2",description:"In this example we create an instance of [[CSVFile_]], then we open it and read it. And use get subroutine.",source:"@site/docs/docs-api/CSVFile/CSVFile_test_2.md",sourceDirName:"CSVFile",slug:"/CSVFile/CSVFile_test_2",permalink:"/docs-api/CSVFile/CSVFile_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSVFile/CSVFile_test_2.md",tags:[{label:"example",permalink:"/docs-api/tags/example"},{label:"CSVFile/Initiate",permalink:"/docs-api/tags/csv-file-initiate"},{label:"CSVFile/Open",permalink:"/docs-api/tags/csv-file-open"},{label:"CSVFile/Read",permalink:"/docs-api/tags/csv-file-read"},{label:"CSVFile/Get",permalink:"/docs-api/tags/csv-file-get"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{date:"2022-07-20T00:00:00.000Z",update:"2022-07-20T00:00:00.000Z",status:"stable",docs:"todo",extpkgs:null,category:["Example"],tags:["example","CSVFile/Initiate","CSVFile/Open","CSVFile/Read","CSVFile/Get"]},sidebar:"tutorialSidebar",previous:{title:"CSVFile example 1",permalink:"/docs-api/CSVFile/CSVFile_test_1"},next:{title:"Chebyshev1",permalink:"/docs-api/Chebyshev1PolynomialUtility/"}},r={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const l={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h1,{id:"csvfile-example-2",children:"CSVFile example 2"}),"\n",(0,a.jsxs)(l.p,{children:["In this example we create an instance of [[CSVFile_]], then we open it and read it. And use ",(0,a.jsx)(l.code,{children:"get"})," subroutine."]}),"\n",(0,a.jsx)(l.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsx)(l.li,{children:"[[CSVFile_]]"}),"\n",(0,a.jsx)(l.li,{children:"[[String]]"}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(l.p,{children:"Importing modules and defining variables"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'PROGRAM main\n  use easifemBase\n  use easifemClasses\n  type(csvfile_) :: obj\n  type(string) :: aline\n  type(string), allocatable :: strvec( : )\n  integer(i4b) :: ii, intval\n  type( intvector_ ) :: intvec\n  type( realvector_ ) :: realvec\n  real(dfp) :: realval\n  character(len=*), parameter :: filename="./example/test1.txt"\n  integer( i4b ), allocatable :: datatypes( : )\n'})}),"\n",(0,a.jsx)(l.p,{children:"Initiate an instance of [[CSVFile_]], and then Open the [[CSVFile_]] file"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"  call obj%Initiate(filename=filename, status='OLD', action='READ')\n  call obj%setHeaderIndx(1_I4B)\n  call obj%Open()\n  call obj%Read()\n"})}),"\n",(0,a.jsx)(l.p,{children:"Get a single value."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'  call obj%get( irow=1, icol=1, val=intval)\n  call display( intval, "intval = " )\n'})}),"\n",(0,a.jsx)(l.p,{children:"Get the entire column in [[IntVector_]]"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'  call obj%get( icol=1, val=intvec)\n  call display( intvec, "intvec = " )\n'})}),"\n",(0,a.jsx)(l.p,{children:"Get the entire column in integer vector"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'  call deallocate( intvec )\n  call obj%get( icol=1, val=intvec%val)\n  call display( intvec%val, "intvec%val = " )\n'})}),"\n",(0,a.jsx)(l.p,{children:"Get the entire column in [[RealVector_]]"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'  call obj%get( icol=1, val=realvec)\n  call display( realvec, "realvec = " )\n'})}),"\n",(0,a.jsx)(l.p,{children:"Get the entire column in real vector"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'  call deallocate( realvec )\n  call obj%get( icol=1, val=realvec%val)\n  call display( realvec%val, "realvec%val = " )\n'})}),"\n",(0,a.jsx)(l.p,{children:"Get the entire column in string vector"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:'  call obj%get( icol=1, val=strvec)\n  do ii = 1, size(strvec); call display( strvec(ii), "strvec(ii) = " ); end do\n'})}),"\n",(0,a.jsx)(l.p,{children:"Cleaning up."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,l,n)=>{n.d(l,{Z:()=>c,a:()=>s});var a=n(67294);const t={},i=a.createContext(t);function s(e){const l=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:l},e.children)}}}]);