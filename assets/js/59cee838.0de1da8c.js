"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[57863],{51142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(85893),a=n(11151);const s={title:"VTKPlot example 2",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKPlot/Plot"]},l="VTKPlot example 2",i={id:"VTKPlot/VTKPlot_test_2",title:"VTKPlot example 2",description:"This example shows how to use plot function from [[VTKPlot_]] class. We plot a cartesian grid and function over it.",source:"@site/docs/docs-api/VTKPlot/VTKPlot_test_2.md",sourceDirName:"VTKPlot",slug:"/VTKPlot/VTKPlot_test_2",permalink:"/docs-api/VTKPlot/VTKPlot_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VTKPlot/VTKPlot_test_2.md",tags:[{label:"VTKPlot/Plot",permalink:"/docs-api/tags/vtk-plot-plot"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"VTKPlot example 2",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKPlot/Plot"]},sidebar:"tutorialSidebar",previous:{title:"VTKPlot example 1",permalink:"/docs-api/VTKPlot/VTKPlot_test_1"},next:{title:"VTKPlot example 3",permalink:"/docs-api/VTKPlot/VTKPlot_test_3"}},r={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"vtkplot-example-2",children:"VTKPlot example 2"}),"\n",(0,o.jsx)(t.p,{children:"This example shows how to use plot function from [[VTKPlot_]] class. We plot a cartesian grid and function over it."}),"\n",(0,o.jsx)(t.h2,{id:"use-association",children:"Use association"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"[[VTKPlot_]]"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"MODULE func_module\n  USE easifemBase\n  CONTAINS\n  PURE FUNCTION f( x ) RESULT( ans )\n    REAL(DFP), INTENT( IN ) :: x( : )\n    REAL(DFP) :: ans\n    ans = x(1)*(x(1)-1) + x(2)*(x(2)-1)\n  END FUNCTION\nEND MODULE func_module\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"PROGRAM MAIN\n  USE easifemBase\n  USE easifemClasses\n  USE func_module\n  IMPLICIT NONE\n  TYPE( VTKPlot_ ) :: obj\n  REAL( DFP ), ALLOCATABLE :: x( : ), y( : )\n  PROCEDURE(f), POINTER :: func => NULL()\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! note ""\nPlotting a two dimensional structured grid.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:'  x = linspace( 0.0_DFP, 1.0_DFP, 5)\n  y = linspace( 0.0_DFP, 1.0_DFP, 5)\n  CALL obj%initiate( )\n  func => f\n  CALL obj%plot( x, y, func, "./test_2.vts")\n  CALL obj%deallocate()\n  func => NULL()\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"end program\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var o=n(67294);const a={},s=o.createContext(a);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);