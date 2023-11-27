"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[36340],{3195:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>t,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var l=s(85893),i=s(11151);const d={author:"Vikas Sharma, Ph.D.",date:"9 Nov 2022",tags:["Gmsh/Initialize","GmshModel/Add","GmshModel/SetFileName","GmshModelGeo/SetFileName","GmshModelGeo/AddPoint","GmshModelGeo/AddLine","GmshModelGeo/AddCurveLoop","GmshModelGeo/AddPlaneSurface","GmshModelGeo/Synchronize"]},a="GmshModelGeo example 2",r={id:"GmshAPI/GmshModelGeo_test_2",title:"GmshModelGeo example 2",description:"In this example we test following methods:",source:"@site/docs/docs-api/GmshAPI/GmshModelGeo_test_2.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/GmshModelGeo_test_2",permalink:"/docs-api/GmshAPI/GmshModelGeo_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GmshAPI/GmshModelGeo_test_2.md",tags:[{label:"Gmsh/Initialize",permalink:"/docs-api/tags/gmsh-initialize"},{label:"GmshModel/Add",permalink:"/docs-api/tags/gmsh-model-add"},{label:"GmshModel/SetFileName",permalink:"/docs-api/tags/gmsh-model-set-file-name"},{label:"GmshModelGeo/SetFileName",permalink:"/docs-api/tags/gmsh-model-geo-set-file-name"},{label:"GmshModelGeo/AddPoint",permalink:"/docs-api/tags/gmsh-model-geo-add-point"},{label:"GmshModelGeo/AddLine",permalink:"/docs-api/tags/gmsh-model-geo-add-line"},{label:"GmshModelGeo/AddCurveLoop",permalink:"/docs-api/tags/gmsh-model-geo-add-curve-loop"},{label:"GmshModelGeo/AddPlaneSurface",permalink:"/docs-api/tags/gmsh-model-geo-add-plane-surface"},{label:"GmshModelGeo/Synchronize",permalink:"/docs-api/tags/gmsh-model-geo-synchronize"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"9 Nov 2022",tags:["Gmsh/Initialize","GmshModel/Add","GmshModel/SetFileName","GmshModelGeo/SetFileName","GmshModelGeo/AddPoint","GmshModelGeo/AddLine","GmshModelGeo/AddCurveLoop","GmshModelGeo/AddPlaneSurface","GmshModelGeo/Synchronize"]},sidebar:"tutorialSidebar",previous:{title:"GmshModelGeo example 1",permalink:"/docs-api/GmshAPI/GmshModelGeo_test_1"},next:{title:"GmshModelMeshField_",permalink:"/docs-api/GmshAPI/GmshModelMeshField_"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Points",id:"points",level:3},{value:"Line and curves",id:"line-and-curves",level:3},{value:"CurveLoop",id:"curveloop",level:3},{value:"AddPlaneSurface",id:"addplanesurface",level:3},{value:"Synchronize",id:"synchronize",level:3},{value:"Write",id:"write",level:3},{value:"Cleanup",id:"cleanup",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"gmshmodelgeo-example-2",children:"GmshModelGeo example 2"}),"\n",(0,l.jsx)(n.p,{children:"In this example we test following methods:"}),"\n",(0,l.jsx)(n.p,{children:"In this example we create a circle geometry and mesh."}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  TYPE( gmsh_ ) :: gmsh\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Instance of [[Gmsh_]]."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'  INTEGER( I4B ) :: ierr, tag\n  REAL( DFP ), PARAMETER :: R=1.0, Xc=0.0, Yc=0.0, Zc=0.0\n  REAL( DFP ) :: x, y, z, meshSize\n  CHARACTER( LEN = GMSH_API_MAX_STR_LEN ), ALLOCATABLE :: names( : )\n  CHARACTER( LEN = GMSH_API_MAX_STR_LEN ) :: name\n  CHARACTER(LEN=*), PARAMETER :: PREFIX="t1"\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[[Gmsh_#Initialize]]"}),"\n",(0,l.jsx)(n.li,{children:"[[GmshModel_#Add]]"}),"\n",(0,l.jsx)(n.li,{children:"[[GmshModel_#SetFileName]]"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%initialize()\n  ierr = gmsh%model%add( PREFIX )\n  ierr = gmsh%model%setFileName( PREFIX//".geo" )\n'})}),"\n",(0,l.jsx)(n.h3,{id:"points",children:"Points"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[[GmshModelGeo_#AddPoint]]"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Point-1: Specifying tag explicitly"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  x = Xc-R; y = Yc; z = Zc; meshSize = 0.1; tag=1\n  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)\n  x = Xc+R; y = Yc; z = Zc; meshSize = 0.1; tag=2\n  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)\n  x = Xc; y = Yc; z = Zc; meshSize = 0.1; tag=3\n  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"line-and-curves",children:"Line and curves"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"[[GmshModelGeo_#AddCircleArc]]"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"explicit tag"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"automatic tag"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["if ",(0,l.jsx)(n.code,{children:"tag=-1"})," it means automatic tag."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"nx, ny, nz"})," are optional, default value is zero."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%model%geo%AddCircleArc( &\n    & startTag=1, &\n    & centerTag=3, &\n    & endTag=2, &\n    & tag=1, &\n    & nx=0.0, &\n    & ny=0.0, &\n    & nz=0.0 )\n  call ok(ierr .NE. 0_I4B, "AddCircleArc(1)")\n'})}),"\n",(0,l.jsx)(n.p,{children:"Adding another circle arc."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'  ierr = gmsh%model%geo%AddCircleArc( &\n    & startTag=2, &\n    & centerTag=3, &\n    & endTag=1, &\n    & tag=2)\n  call ok(ierr .NE. 0_I4B, "AddCircleArc(2)")\n'})}),"\n",(0,l.jsx)(n.h3,{id:"curveloop",children:"CurveLoop"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"[[GmshModelGeo_#AddCurveLoop]]"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"reorient"})," is optional, default value is false."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"tag"})," is optional"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%model%geo%addCurveLoop( &\n    & curveTags=[1,2], tag=1, reorient=.TRUE.)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"addplanesurface",children:"AddPlaneSurface"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"[[GmshModelGeo_#AddPlaneSurface]]"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"tag"})," is explicitly given."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%model%geo%addPlaneSurface(wireTags=[1], tag=1)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"synchronize",children:"Synchronize"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[[GmshModelGeo_#Synchronize]]"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"ierr = gmsh%model%geo%Synchronize()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"write",children:"Write"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[[Gmsh_#Write]]"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'ierr = gmsh%Write(PREFIX//".msh")\n'})}),"\n",(0,l.jsx)(n.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[[Gmsh_#Finalize]]"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  ierr = gmsh%finalize()\n\nEND PROGRAM main\n"})})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var l=s(67294);const i={},d=l.createContext(i);function a(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);