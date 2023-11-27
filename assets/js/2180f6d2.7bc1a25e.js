"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[92330],{56057:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=o(85893),n=o(11151);const a={title:"VTKPlot example 3",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKPlot/Plot"]},l="VTKPlot example 3",i={id:"VTKPlot/VTKPlot_test_3",title:"VTKPlot example 3",description:"This example shows how to use plot function from [[VTKPlot_]] class. We plot a 3D cartesian grid using x, y, and z.",source:"@site/docs/docs-api/VTKPlot/VTKPlot_test_3.md",sourceDirName:"VTKPlot",slug:"/VTKPlot/VTKPlot_test_3",permalink:"/docs-api/VTKPlot/VTKPlot_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VTKPlot/VTKPlot_test_3.md",tags:[{label:"VTKPlot/Plot",permalink:"/docs-api/tags/vtk-plot-plot"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"VTKPlot example 3",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKPlot/Plot"]},sidebar:"tutorialSidebar",previous:{title:"VTKPlot example 2",permalink:"/docs-api/VTKPlot/VTKPlot_test_2"},next:{title:"VTKPlot example 4",permalink:"/docs-api/VTKPlot/VTKPlot_test_4"}},r={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vtkplot-example-3",children:"VTKPlot example 3"}),"\n",(0,s.jsx)(t.p,{children:"This example shows how to use plot function from [[VTKPlot_]] class. We plot a 3D cartesian grid using x, y, and z."}),"\n",(0,s.jsx)(t.h2,{id:"use-association",children:"Use association"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"[[VTKPlot_]]"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"PROGRAM MAIN\n  USE easifemBase\n  USE easifemClasses\n  USE func_module\n  IMPLICIT NONE\n  TYPE( VTKPlot_ ) :: obj\n  REAL( DFP ), ALLOCATABLE :: x( : ), y( : ), z( : )\n"})}),"\n",(0,s.jsx)(t.p,{children:'!!! note ""\nPlotting a two dimensional structured grid.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:'  x = linspace( 0.0_DFP, 10.0_DFP, 11)\n  y = linspace( 0.0_DFP, 5.0_DFP, 6)\n  z = linspace( 0.0_DFP, 5.0_DFP, 6)\n  CALL obj%initiate( )\n  CALL obj%plot( x, y, z, "./test_3.vts")\n  CALL obj%deallocate()\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"end program\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>l});var s=o(67294);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);