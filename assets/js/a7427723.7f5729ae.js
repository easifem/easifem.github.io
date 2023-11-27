"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94958],{1587:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=s(85893),i=s(11151);const a={author:"Vikas Sharma, Ph.D.",date:"6 Nov 2022",tags:["Gmsh/Initialize","Gmsh/Finalize"]},t="Gmsh example 1",l={id:"GmshAPI/Gmsh_test_1",title:"Gmsh example 1",description:"Following methods are tested:",source:"@site/docs/docs-api/GmshAPI/Gmsh_test_1.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/Gmsh_test_1",permalink:"/docs-api/GmshAPI/Gmsh_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GmshAPI/Gmsh_test_1.md",tags:[{label:"Gmsh/Initialize",permalink:"/docs-api/tags/gmsh-initialize"},{label:"Gmsh/Finalize",permalink:"/docs-api/tags/gmsh-finalize"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"6 Nov 2022",tags:["Gmsh/Initialize","Gmsh/Finalize"]},sidebar:"tutorialSidebar",previous:{title:"Gmsh",permalink:"/docs-api/GmshAPI/Gmsh_"},next:{title:"Gmsh_test_2",permalink:"/docs-api/GmshAPI/Gmsh_test_2"}},o={},m=[{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"gmsh-example-1",children:"Gmsh example 1"}),"\n",(0,r.jsx)(n.p,{children:"Following methods are tested:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[[Gmsh_#Initialize]]"}),"\n",(0,r.jsx)(n.li,{children:"[[Gmsh_#Finalize]]"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Declare variables"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  TYPE( Gmsh_ ) :: gmsh\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Instance of [[Gmsh_]]."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CHARACTER( LEN = * ), PARAMETER :: title="t1"\n  REAL( DFP ), PARAMETER :: corner(3)=[0.,0.,0.]\n  REAL( DFP ), PARAMETER :: lx = 1.0\n  REAL( DFP ), PARAMETER :: ly = 1.0\n  REAL( DFP ), PARAMETER :: meshSize=MIN(lx,ly)/10\n  INTEGER( I4B ), PARAMETER :: order=1\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ) :: x, y, z, lc\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Gmsh/Initialize"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%Initialize()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%model%add( title )\n  x=corner(1); y=corner(2); z=corner(3); lc=meshSize\n  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=1)\n  x=x+lx; y=y; z=z; lc=lc\n  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=2)\n  x=x; y=y+ly; z=z; lc=lc\n  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=3)\n  x=corner(1); y=y; z=z; lc=lc\n  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=4)\n  ierr = gmsh%model%geo%addLine(startTag=1, endTag=2, tag=1)\n  ierr = gmsh%model%geo%addLine(2, 3, 2)\n  ierr = gmsh%model%geo%addLine(3, 4, 3)\n  ierr = gmsh%model%geo%addLine(4, 1, 4)\n  ierr = gmsh%model%geo%addCurveLoop([1, 2, 3, 4], tag=1)\n  ierr = gmsh%model%geo%addPlaneSurface([1], 1)\n  ierr = gmsh%model%geo%synchronize()\n  ierr = gmsh%option%setNumber(value=1, name=\"Mesh.SaveAll\")\n  ierr = gmsh%model%mesh%generate(2)\n  ierr = gmsh%model%mesh%setOrder(order)\n  ierr = gmsh%write( title//'.msh' )\n  !ierr = gmsh%fltk%run()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%Finalize()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})}),"\n",(0,r.jsx)(n.p,{children:"END PROGRAM main"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(67294);const i={},a=r.createContext(i);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);