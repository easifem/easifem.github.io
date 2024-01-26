"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[57536],{49860:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>m});var l=n(85893),a=n(11151);const r={author:"Vikas Sharma, Ph.D.",date:"6 Nov 2022",tags:["Gmsh/Initiatize","Gmsh/Finalize","Gmsh/Clear","GmshModel/Add","GmshModel/List","GmshModel/GetCurrent","GmshModel/SetCurrent","GmshModel/SetFilename","GmshModel/GetFilename","GmshModel/Remove"]},i="GmshModel example 1",t={id:"GmshAPI/GmshModel_test_1",title:"GmshModel example 1",description:"Following methods of [[GmshModel_]] are tested:",source:"@site/docs/docs-api/GmshAPI/GmshModel_test_1.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/GmshModel_test_1",permalink:"/docs-api/GmshAPI/GmshModel_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/GmshAPI/GmshModel_test_1.md",tags:[{label:"Gmsh/Initiatize",permalink:"/docs-api/tags/gmsh-initiatize"},{label:"Gmsh/Finalize",permalink:"/docs-api/tags/gmsh-finalize"},{label:"Gmsh/Clear",permalink:"/docs-api/tags/gmsh-clear"},{label:"GmshModel/Add",permalink:"/docs-api/tags/gmsh-model-add"},{label:"GmshModel/List",permalink:"/docs-api/tags/gmsh-model-list"},{label:"GmshModel/GetCurrent",permalink:"/docs-api/tags/gmsh-model-get-current"},{label:"GmshModel/SetCurrent",permalink:"/docs-api/tags/gmsh-model-set-current"},{label:"GmshModel/SetFilename",permalink:"/docs-api/tags/gmsh-model-set-filename"},{label:"GmshModel/GetFilename",permalink:"/docs-api/tags/gmsh-model-get-filename"},{label:"GmshModel/Remove",permalink:"/docs-api/tags/gmsh-model-remove"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"6 Nov 2022",tags:["Gmsh/Initiatize","Gmsh/Finalize","Gmsh/Clear","GmshModel/Add","GmshModel/List","GmshModel/GetCurrent","GmshModel/SetCurrent","GmshModel/SetFilename","GmshModel/GetFilename","GmshModel/Remove"]},sidebar:"tutorialSidebar",previous:{title:"GmshModel",permalink:"/docs-api/GmshAPI/GmshModel_"},next:{title:"GmshModel example 2",permalink:"/docs-api/GmshAPI/GmshModel_test_2"}},d={},m=[{value:"Usage",id:"usage",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"gmshmodel-example-1",children:"GmshModel example 1"}),"\n",(0,l.jsx)(s.p,{children:"Following methods of [[GmshModel_]] are tested:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#Add]]"}),"\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#List]]"}),"\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#GetCurrent]]"}),"\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#SetCurrent]]"}),"\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#SetFilename]]"}),"\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#GetFilename]]"}),"\n",(0,l.jsx)(s.li,{children:"[[GmshModel_#Remove]]"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\n  use easifemBase\n  use easifemClasses\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "declare variables"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  type(gmsh_) :: gmsh\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Instance of [[Gmsh_]] engine"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  integer(i4b) :: ierr, names_n\n  type(string), allocatable :: names(:)\n  character(gmsh_api_max_str_len) :: name\n  type(string), allocatable :: strs(:)\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "Gmsh/Initialize"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%initialize()\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/Add"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:'  ierr = gmsh%model%add("t1")\n  ierr = gmsh%model%add("t2")\n  ierr = gmsh%model%add("t3")\n'})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/List"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:'  block\n  INTEGER( I4B ) :: ii\n  ierr = gmsh%model%list(names)\n  call display( ierr, "size of names = ")\n  do ii = 1, ierr\n    call display( names(ii), "names = ")\n  end do\n  end block\n'})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/GetCurrent"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%model%getCurrent(name)\n  call display(name, 'name: ')\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/SetCurrent"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%model%setCurrent('t1')\n  ierr = gmsh%model%getCurrent(name)\n  call display(name, 'name: ')\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/SetFileName"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%model%setFileName('t1.geo')\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/GetFileName"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%model%getFileName(name)\n  call display(name, 'name: ')\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "GmshModel/Remove"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%model%remove()\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "Gmsh/Clear"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%clear()\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "Gmsh/Finalize"'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"  ierr = gmsh%finalize()\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>i});var l=n(67294);const a={},r=l.createContext(a);function i(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);