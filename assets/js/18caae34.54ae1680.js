"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99359],{6658:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=l(85893),i=l(11151);const o={title:"PLPlot Getting Started"},r="PLPlot Getting Started",a={id:"PLPlot/PLPlot_GettingStarted",title:"PLPlot Getting Started",description:"A Simple Example",source:"@site/docs/docs-api/PLPlot/PLPlot_GettingStarted.md",sourceDirName:"PLPlot",slug:"/PLPlot/PLPlot_GettingStarted",permalink:"/docs-api/PLPlot/PLPlot_GettingStarted",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/PLPlot/PLPlot_GettingStarted.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"PLPlot Getting Started"},sidebar:"tutorialSidebar",previous:{title:"PLPlot Devices",permalink:"/docs-api/PLPlot/PLPlot_Devices"},next:{title:"PLPlot Installation",permalink:"/docs-api/PLPlot/PLPlot_Installation"}},s={},p=[{value:"A Simple Example",id:"a-simple-example",level:2},{value:"PLINIT",id:"plinit",level:2},{value:"PLSDEV",id:"plsdev",level:2},{value:"PLENV",id:"plenv",level:2},{value:"PLBOX",id:"plbox",level:2},{value:"PLLAB",id:"pllab",level:2},{value:"PLPOIN",id:"plpoin",level:2},{value:"PLSTRING",id:"plstring",level:2},{value:"PLSYM",id:"plsym",level:2},{value:"PLLINE",id:"plline",level:2},{value:"COLORS",id:"colors",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"plplot-getting-started",children:"PLPlot Getting Started"}),"\n",(0,n.jsx)(t.h2,{id:"a-simple-example",children:"A Simple Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  INTEGER, PARAMETER :: NSIZE = 101\n  REAL( DFP ), DIMENSION(NSIZE) :: x, y\n  REAL( DFP ) :: xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 100.0\n  INTEGER :: ierr\n  ! Prepare data to be plotted.\n  x = arange(0, NSIZE-1) / REAL(NSIZE-1, DFP)\n  y = ymax * x**2\n  ! Parse and process command line arguments\n  ierr = PLPARSEOPTS( PL_PARSE_FULL )\n  IF(ierr .NE. 0) THEN\n    CALL Display( "plparseopts error" )\n    STOP\n  END IF\n  !> Initiate the PLPLOT enviroment\n  CALL PLINIT\n  ! Create a labelled box to hold the plot.\n  ! we have specified the box dimension\n  CALL PLENV( xmin, xmax, ymin, ymax, 0, 0 )\n  CALL PLLAB( "x", "y=100 x#u2#d", "Simple PLplot demo of a 2D line plot" )\n  ! Plot the data that was prepared above.\n  CALL PLLINE( x, y )\n  ! Close PLplot library\n  CALL PLEND\nEND PROGRAM main\n'})}),"\n",(0,n.jsx)(t.h2,{id:"plinit",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/initializing.html",children:"PLINIT"})}),"\n",(0,n.jsx)(t.p,{children:"This routine should be called before doing anything with PLPLOT. It is the main initialization routine for PLPLOT."}),"\n",(0,n.jsxs)(t.p,{children:["There are several routines affecting the initialization that must be called\xa0",(0,n.jsx)(t.em,{children:"before"}),"\xa0",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plinit.html",title:"plinit: Initialize PLplot",children:(0,n.jsx)(t.code,{children:"plinit"})}),", if they are used. The function\xa0",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsdev.html",title:"plsdev: Set the device (keyword) name",children:(0,n.jsx)(t.code,{children:"plsdev"})}),"\xa0allows you to set the device explicitly. The function\xa0",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsetopt.html",title:"plsetopt: Set any command-line option",children:(0,n.jsx)(t.code,{children:"plsetopt"})}),"\xa0allows you to set any command-line option internally in your code. The function\xa0",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plssub.html",title:"plssub: Set the number of subpages in x and y",children:(0,n.jsx)(t.code,{children:"plssub"})}),"\xa0may be called to divide the output device plotting area into several subpages of equal size, each of which can be used separately."]}),"\n",(0,n.jsx)(t.h1,{id:"plend",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/finishing.html",children:"PLEND"})}),"\n",(0,n.jsxs)(t.p,{children:["Always call ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plend.html",title:"plend: End plotting session",children:(0,n.jsx)(t.code,{children:"plend"})})," to close any output plot files and to free up resources."]}),"\n",(0,n.jsx)(t.h2,{id:"plsdev",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsdev.html",children:"PLSDEV"})}),"\n",(0,n.jsxs)(t.p,{children:["The output device can be a terminal, disk file, window system, pipe, or socket.  If the output device has not already been specified when ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plinit.html",title:"plinit: Initialize PLplot",children:(0,n.jsx)(t.code,{children:"plinit"})})," is called, the output device will be taken from the value of the ",(0,n.jsx)(t.code,{children:"PLPLOT_DEV"})," environment variable. If this variable is not set (or is empty), a list of valid output devices is given and the user is prompted for a choice."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The device can be specified BEFORE calling ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plinit.html",title:"plinit: Initialize PLplot",children:(0,n.jsx)(t.code,{children:"plinit"})})," by:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"CALL PLSDEV(STRING::devname)\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["An ASCII character string containing the device name keyword of the required output device. If ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"devname"})})," is NULL or if the first character of the string is a ``?'', the normal (prompted) start up is used."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Following is the list of device name."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",children:"  Plotting Options:\n\t  < 1> xwin       X-Window (Xlib)\n\t  < 2> tk         Tcl/TK Window\n\t  < 3> ps         PostScript File (monochrome)\n\t  < 4> psc        PostScript File (color)\n\t  < 5> xfig       Fig file\n\t  < 6> null       Null device\n\t  < 7> ntk        New tk driver\n\t  < 8> tkwin      New tk driver\n\t  < 9> mem        User-supplied memory device\n\t  <10> wxwidgets  wxWidgets Driver\n\t  <11> psttf      PostScript File (monochrome)\n\t  <12> psttfc     PostScript File (color)\n\t  <13> svg        Scalable Vector Graphics (SVG 1.1)\n\t  <14> pdf        Portable Document Format PDF\n\t  <15> bmpqt      Qt Windows bitmap driver\n\t  <16> jpgqt      Qt jpg driver\n\t  <17> pngqt      Qt png driver\n\t  <18> ppmqt      Qt ppm driver\n\t  <19> tiffqt     Qt tiff driver\n\t  <20> svgqt      Qt SVG driver\n\t  <21> qtwidget   Qt Widget\n\t  <22> epsqt      Qt EPS driver\n\t  <23> pdfqt      Qt PDF driver\n\t  <24> extqt      External Qt driver\n\t  <25> memqt      Memory Qt driver\n\t  <26> xcairo     Cairo X Windows Driver\n\t  <27> pdfcairo   Cairo PDF Driver\n\t  <28> pscairo    Cairo PS Driver\n\t  <29> epscairo   Cairo EPS Driver\n\t  <30> svgcairo   Cairo SVG Driver\n\t  <31> pngcairo   Cairo PNG Driver\n\t  <32> memcairo   Cairo Memory Driver\n\t  <33> extcairo   Cairo External Context Driver\n"})}),"\n",(0,n.jsx)(t.p,{children:"I prefer one of the following"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'CALL PLSDEV("qtwidget")\nCALL PLSDEV("xwin")\nCALL PLSDEV("wxwidgets")\n'})}),"\n",(0,n.jsx)(t.h2,{id:"plenv",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html",children:"PLENV"})}),"\n",(0,n.jsxs)(t.p,{children:["The function ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html",title:"plenv: Set up standard window and draw box",children:(0,n.jsx)(t.code,{children:"plenv"})})," is used to define the scales and axes for simple graphs. ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html",title:"plenv: Set up standard window and draw box",children:(0,n.jsx)(t.code,{children:"plenv"})}),"\xa0starts a new picture on the next subpage (or a new page if necessary), and defines the ranges of the variables required. The routine will also draw a box, axes, and numeric labels if requested."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"plenv\xa0(xmin,\xa0xmax,\xa0ymin,\xa0ymax,\xa0just,\xa0axis)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"plbox",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plbox.html",children:"PLBOX"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"plbox\xa0(xopt,\xa0xtick,\xa0nxsub,\xa0yopt,\xa0ytick,\xa0nysub)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"pllab",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/labelling.html",children:"PLLAB"})}),"\n",(0,n.jsxs)(t.p,{children:["The function ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/pllab.html",title:"pllab: Simple routine to write labels",children:(0,n.jsx)(t.code,{children:"pllab"})})," may be called after ",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html",title:"plenv: Set up standard window and draw box",children:(0,n.jsx)(t.code,{children:"plenv"})})," to write labels on the x and y axes, and at the top of the graph. \xa0"]}),"\n",(0,n.jsx)(t.h2,{id:"plpoin",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plpoin.html",children:"PLPOIN"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"CALL PLPOIN(REAL::X(:),REAL::Y(:),INT::CODE)\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"0 < code < 32"}),", then Hershey symbols is plotted. If ",(0,n.jsx)(t.code,{children:"32 <= code <= 127"})," the corresponding printable ASCII character is plotted."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"http://plplot.sourceforge.net/examples-data/demo06/x06.01.png",alt:""})}),"\n",(0,n.jsx)(t.h2,{id:"plstring",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plstring.html",children:"PLSTRING"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"CALL PLSTRING(REAL::X(:),REAL::Y(:),STRING::STRING)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Plot a glyph at the specified points. The glyph is specified with a PLplot user string. \xa0",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plstring.html",title:"plstring: Plot a glyph at the specified points",children:(0,n.jsx)(t.code,{children:"plstring"})}),"\xa0is now the preferred way of drawing points for unicode-aware devices because it gives users full access via a UTF-8 string to any unicode glyph they prefer for the symbol that is is available via system fonts."]}),"\n",(0,n.jsxs)(t.p,{children:["See the following  ",(0,n.jsx)(t.a,{href:"http://plplot.org/examples.php?demo=07",children:"example 7"})]}),"\n",(0,n.jsx)(t.h2,{id:"plsym",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsym.html",children:"PLSYM"})}),"\n",(0,n.jsx)(t.p,{children:"TO BE ADDED LATER."}),"\n",(0,n.jsx)(t.h2,{id:"plline",children:(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plline.html",children:"PLLINE"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plline.html",title:"plline: Draw a line",children:(0,n.jsx)(t.code,{children:"plline"})}),"\xa0draws a line or curve. The curve consists of\xa0",(0,n.jsx)(t.code,{children:"n-1"}),"\xa0line segments joining the\xa0",(0,n.jsx)(t.code,{children:"n"}),"\xa0points in the input arrays. For single line segments,\xa0",(0,n.jsx)(t.a,{href:"http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/pljoin.html",title:"pljoin: Draw a line between two points",children:(0,n.jsx)(t.code,{children:"pljoin"})}),"\xa0is used to join two points."]}),"\n",(0,n.jsx)(t.h2,{id:"colors",children:"COLORS"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"PLCOL0"}),"\n",(0,n.jsx)(t.li,{children:"PLSCOL0"}),"\n",(0,n.jsx)(t.li,{children:"PLCOLBG"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"http://plplot.sourceforge.net/examples-data/demo02/x02.01.png",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Following example will print black on white"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\n USE easifemBase\n IMPLICIT NONE\n INTEGER, PARAMETER :: NSIZE = 101\n REAL( DFP ), DIMENSION(NSIZE) :: x, y\n REAL( DFP ) :: xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 100.0\n INTEGER :: ierr\n ! Prepare data to be plotted.\n x = arange(0, NSIZE-1) / REAL(NSIZE-1, DFP)\n y = ymax * x**2\n ! Parse and process command line arguments\n ierr = PLPARSEOPTS( PL_PARSE_FULL )\n IF(ierr .NE. 0) THEN\n   CALL Display( "plparseopts error" )\n   STOP\n END IF\n !> Initiate the PLPLOT enviroment\n CALL PLSDEV("qtwidget")\n CALL PLSCOLBG(255,255,255)\n CALL PLINIT\n CALL PLSCOL0(0, 0,0,0)\n CALL PLCOL0(0)\n ! COLOR\n ! Create a labelled box to hold the plot.\n ! we have specified the box dimension\n CALL PLENV( xmin, xmax, ymin, ymax, 0, 0 )\n CALL PLLAB( "x", "y=100 x#u2#d", "Simple PLplot demo of a 2D line plot" )\n ! Plot the data that was prepared above.\n CALL PLPOIN( x, y, 4 )\n ! Close PLplot library\n CALL PLEND\nEND PROGRAM main\n'})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,l)=>{l.d(t,{Z:()=>a,a:()=>r});var n=l(67294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);