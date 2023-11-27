"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[48659],{61102:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>t});var i=l(85893),s=l(11151);const a={author:"Vikas Sharma, Ph.D.",date:"9 Nov 2022",tags:["Gmsh/Initialize","GmshModel/Add","GmshModel/SetFileName","GmshModelGeo/SetFileName","GmshModelGeo/AddPoint","GmshModelGeo/AddLine","GmshModelGeo/AddCurveLoop","GmshModelGeo/AddPlaneSurface","GmshModelGeo/Synchronize","GmshFLTK/Initialize","GmshFLTK/IsAvailable","GmshFLTK/Wait"]},d="GmshModelGeo example 1",o={id:"GmshAPI/GmshFLTK_test_1",title:"GmshModelGeo example 1",description:"In this example we test following methods:",source:"@site/docs/docs-api/GmshAPI/GmshFLTK_test_1.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/GmshFLTK_test_1",permalink:"/docs-api/GmshAPI/GmshFLTK_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GmshAPI/GmshFLTK_test_1.md",tags:[{label:"Gmsh/Initialize",permalink:"/docs-api/tags/gmsh-initialize"},{label:"GmshModel/Add",permalink:"/docs-api/tags/gmsh-model-add"},{label:"GmshModel/SetFileName",permalink:"/docs-api/tags/gmsh-model-set-file-name"},{label:"GmshModelGeo/SetFileName",permalink:"/docs-api/tags/gmsh-model-geo-set-file-name"},{label:"GmshModelGeo/AddPoint",permalink:"/docs-api/tags/gmsh-model-geo-add-point"},{label:"GmshModelGeo/AddLine",permalink:"/docs-api/tags/gmsh-model-geo-add-line"},{label:"GmshModelGeo/AddCurveLoop",permalink:"/docs-api/tags/gmsh-model-geo-add-curve-loop"},{label:"GmshModelGeo/AddPlaneSurface",permalink:"/docs-api/tags/gmsh-model-geo-add-plane-surface"},{label:"GmshModelGeo/Synchronize",permalink:"/docs-api/tags/gmsh-model-geo-synchronize"},{label:"GmshFLTK/Initialize",permalink:"/docs-api/tags/gmsh-fltk-initialize"},{label:"GmshFLTK/IsAvailable",permalink:"/docs-api/tags/gmsh-fltk-is-available"},{label:"GmshFLTK/Wait",permalink:"/docs-api/tags/gmsh-fltk-wait"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"9 Nov 2022",tags:["Gmsh/Initialize","GmshModel/Add","GmshModel/SetFileName","GmshModelGeo/SetFileName","GmshModelGeo/AddPoint","GmshModelGeo/AddLine","GmshModelGeo/AddCurveLoop","GmshModelGeo/AddPlaneSurface","GmshModelGeo/Synchronize","GmshFLTK/Initialize","GmshFLTK/IsAvailable","GmshFLTK/Wait"]},sidebar:"tutorialSidebar",previous:{title:"GmshFLTK",permalink:"/docs-api/GmshAPI/GmshFLTK_"},next:{title:"GmshModelGeo example 1",permalink:"/docs-api/GmshAPI/GmshFLTK_test_2"}},r={},t=[{value:"Usage",id:"usage",level:2},{value:"Point",id:"point",level:3},{value:"Line",id:"line",level:3},{value:"CurveLoop",id:"curveloop",level:3},{value:"PlaneSurface",id:"planesurface",level:3},{value:"Synchronize",id:"synchronize",level:3},{value:"FLTK",id:"fltk",level:3},{value:"Cleanup",id:"cleanup",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gmshmodelgeo-example-1",children:"GmshModelGeo example 1"}),"\n",(0,i.jsx)(n.p,{children:"In this example we test following methods:"}),"\n",(0,i.jsx)(n.p,{children:"In this example we create a square geometry and mesh."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  TYPE( gmsh_ ) :: gmsh\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Instance of [[Gmsh_]]."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  INTEGER( I4B ) :: ierr, tag\n  REAL( DFP ), PARAMETER :: LENGTH=1.0, WIDTH=1.0\n  REAL( DFP ) :: x, y, z, meshSize\n  CHARACTER( LEN = 120 ), ALLOCATABLE :: names( : )\n  CHARACTER( LEN = 120 ) :: name\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[Gmsh_#Initialize]]"}),"\n",(0,i.jsx)(n.li,{children:"[[GmshModel_#Add]]"}),"\n",(0,i.jsx)(n.li,{children:"[[GmshModel_#SetFileName]]"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%initialize()\n  ierr = gmsh%model%add(\"t1\")\n  ierr = gmsh%model%setFileName('t1.geo')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"point",children:"Point"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[GmshModelGeo_#AddPoint]]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Point-1: Specifying tag explicitly"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  x = 0.0; y = 0.0; z = 0.0; meshSize = 0.01; tag=1\n  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)\n  call ok(ierr .NE. 0_I4B, "(a) ")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Point-2: Not Specifying the tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  x = LENGTH; y = 0.0; z = 0.0; meshSize = 0.01\n  tag = gmsh%model%geo%addPoint(x,y,z,meshSize)\n  call ok(tag .eq. 2_I4B, "(b) ")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Point-3: Setting ",(0,i.jsx)(n.code,{children:"tag=-1"})," equivalent to not specifying the tag explicitly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  x = LENGTH; y = WIDTH; z = 0.0; meshSize = 0.01; tag=-1\n  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)\n  call ok(ierr .eq. 3_I4B, "(c) ")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Point-4: Specifying tag explicitly."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  x = 0.0; y = WIDTH; z = 0.0; meshSize = 0.01; tag=4\n  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)\n  call ok(ierr .NE. 0_I4B, "(d) ")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"line",children:"Line"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[GmshModelGeo_#AddLine]]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Line-1: explicit tag"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%model%geo%addLine(startTag=1,endTag=2,tag=1)\n  call ok(ierr .NE. 0_I4B, "(e) ")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Line-2: automatic tag"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  tag = gmsh%model%geo%addLine(2,3)\n  call ok(tag .EQ. 2_I4B, "(f) ")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Line-3: if ",(0,i.jsx)(n.code,{children:"tag=-1"})," it means automatic tag."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  tag = gmsh%model%geo%addLine(3,4,-1)\n  call ok(tag .EQ. 3_I4B, "(f) ")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Line-4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%model%geo%addLine(4,1,4)\n  call ok(ierr .NE. 0_I4B, "(g) ")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"curveloop",children:"CurveLoop"}),"\n",(0,i.jsx)(n.p,{children:'!!! note "GmshModelGeo/AddCurveLoop"\n[[GmshModelGeo_#AddCurveLoop]]'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reorient"})," is optional, default value is false."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tag"})," is optional"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%model%geo%addCurveLoop( &\n    & curveTags=[1,2,3,4], tag=1, reorient=.TRUE.)\n  call ok(ierr .NE. 0_I4B, "(h) ")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"planesurface",children:"PlaneSurface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"[[GmshModelGeo_#AddPlaneSurface]]"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tag"})," is explicitly given."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%model%geo%addPlaneSurface(wireTags=[1], tag=1)\n  call ok(ierr .NE. 0_I4B, "(i) ")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"synchronize",children:"Synchronize"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[GmshModelGeo_#Synchronize]]"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"ierr = gmsh%model%geo%Synchronize()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fltk",children:"FLTK"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[GmshFLTK_#Initialize]]"}),"\n",(0,i.jsx)(n.li,{children:"[[GmshFLTK_#IsAvailable]]"}),"\n",(0,i.jsx)(n.li,{children:"[[GmshFLTK_#Wait]]"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"ierr = gmsh%fltk%initialize()\ndo\n  if( .not. gmsh%fltk%isAvailable()) exit\n  ierr = gmsh%fltk%wait()\nend do\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[Gmsh_#Finalize]]"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%finalize()\nEND PROGRAM main\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>d});var i=l(67294);const s={},a=i.createContext(s);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);