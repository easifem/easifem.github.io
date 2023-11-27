"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22021],{61745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=t(85893),s=t(11151);const l={title:"PLPlot example 1"},o="PLPlot example 1",r={id:"PLPlot/PLPlot_test_1",title:"PLPlot example 1",description:'!!! note ""',source:"@site/docs/docs-api/PLPlot/PLPlot_test_1.md",sourceDirName:"PLPlot",slug:"/PLPlot/PLPlot_test_1",permalink:"/docs-api/PLPlot/PLPlot_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/PLPlot/PLPlot_test_1.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"PLPlot example 1"},sidebar:"tutorialSidebar",previous:{title:"PLPlot LinePlot",permalink:"/docs-api/PLPlot/PLPlot_LinePlot"},next:{title:"PLPlot example 2",permalink:"/docs-api/PLPlot/PLPlot_test_2"}},i={},d=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"plplot-example-1",children:"PLPlot example 1"}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nThis example shows how to plot a graph by using plplot.'}),"\n",(0,a.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"IMPORT modules and declare variables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  INTEGER, PARAMETER :: NSIZE = 101\n  REAL( DFP ), DIMENSION(NSIZE) :: x, y\n  REAL( DFP ) :: xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 100.0\n  INTEGER :: ierr\n"})}),"\n",(0,a.jsx)(n.p,{children:"Prepare data to be plotted."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  x = arange(0, NSIZE-1) / REAL(NSIZE-1, DFP)\n  y = ymax * x**2\n"})}),"\n",(0,a.jsx)(n.p,{children:"Parse and process command line arguments"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  ierr = PLPARSEOPTS( PL_PARSE_FULL )\n  IF(ierr .NE. 0) THEN\n    CALL Display( "plparseopts error" )\n    STOP\n  END IF\n'})}),"\n",(0,a.jsx)(n.p,{children:"Initiate the PLPLOT enviroment"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL PLINIT\n"})}),"\n",(0,a.jsx)(n.p,{children:"Create a labelled box to hold the plot. We have specified the box dimension"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL PLENV( xmin, xmax, ymin, ymax, 0, 0 )\n  CALL PLLAB( "x", "y=100 x#u2#d", "Simple PLplot demo of a 2D line plot" )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Plot the data that was prepared above."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL PLLINE( x, y )\n"})}),"\n",(0,a.jsx)(n.p,{children:"Close PLplot library"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL PLEND\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const s={},l=a.createContext(s);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);