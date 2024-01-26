"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[69809],{11302:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(85893),o=n(11151);const s={title:"PLPlot Installation"},i="PLPlot Installation",a={id:"PLPlot/PLPlot_Installation",title:"PLPlot Installation",description:"Installation of binary packages",source:"@site/docs/docs-api/PLPlot/PLPlot_Installation.md",sourceDirName:"PLPlot",slug:"/PLPlot/PLPlot_Installation",permalink:"/docs-api/PLPlot/PLPlot_Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/PLPlot/PLPlot_Installation.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"PLPlot Installation"},sidebar:"tutorialSidebar",previous:{title:"PLPlot Getting Started",permalink:"/docs-api/PLPlot/PLPlot_GettingStarted"},next:{title:"PLPlot LinePlot",permalink:"/docs-api/PLPlot/PLPlot_LinePlot"}},r={},c=[{value:"Installation of binary packages",id:"installation-of-binary-packages",level:2},{value:"Building from source",id:"building-from-source",level:2},{value:"Download the source code",id:"download-the-source-code",level:3},{value:"Building \ud83e\ude9b",id:"building-",level:3},{value:"Running examples",id:"running-examples",level:2}];function p(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"plplot-installation",children:"PLPlot Installation"}),"\n",(0,t.jsx)(l.h2,{id:"installation-of-binary-packages",children:"Installation of binary packages"}),"\n",(0,t.jsx)(l.p,{children:"Ubuntu \ud83c\udf7b"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-bash",children:"sudo apt-get install libplplot-dev libplplotfortran0\n"})}),"\n",(0,t.jsx)(l.p,{children:"MacOS \ud83c\udf4e"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-bash",children:"brew install plplot\n"})}),"\n",(0,t.jsx)(l.h2,{id:"building-from-source",children:"Building from source"}),"\n",(0,t.jsx)(l.h3,{id:"download-the-source-code",children:"Download the source code"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-bash",children:"git clone https://git.code.sf.net/p/plplot/plplot plplot-plplot\n"})}),"\n",(0,t.jsx)(l.p,{children:"I have also installed some extra libraries, which are given below."}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"libcairo-dev"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"libglu1-mesa-dev"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"freeglut3-dev"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"mesa-common-dev"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"pyqt5"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"pyqt5-tools"})}),"\n"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-bash",children:"sudo apt install libcairo-dev libglu1-mesa-dev freeglut3-dev mesa-common-dev\npip3 install pyqt5 pyqt5-tools\n"})}),"\n",(0,t.jsx)(l.h3,{id:"building-",children:"Building \ud83e\ude9b"}),"\n",(0,t.jsx)(l.p,{children:"After downloading the source code, run the following command inside of terminal"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-bash",children:"cd plplot-plplot\ngit branch $(whoami)\ngit checkout $(whoami)\n"})}),"\n",(0,t.jsxs)(l.p,{children:["We will use ",(0,t.jsx)(l.code,{children:"-DCMAKE_INSTALL_PREFIX"})," to specify the director wherein ",(0,t.jsx)(l.code,{children:"PLplot"})," will be installed."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:'cmake -S ./ -B ./build DCMAKE_INSTALL_PREFIX=~/.easifem/extpkgs  -G "Unix Makefiles"\ncmake --build ./build --target all\ncmake --build ./build --target install\n'})}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"My Configuration:"})," In my case, I want to install ",(0,t.jsx)(l.code,{children:"PLplot"})," in ",(0,t.jsx)(l.code,{children:"~/.easifem/extpkgs"}),". I have already set an environment variable ",(0,t.jsx)(l.code,{children:"export EASIFEM_EXTPKGS=~/.easifem/extpkgs"}),", so I will use ",(0,t.jsx)(l.code,{children:"${EASIFEM_EXTPKGS}"}),", but you can specify the path explicitly."]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"-DCMAKE_INSTALL_PREFIX:PATH=~/.easifem/extpkgs"})}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"-DCMAKE_BUILD_TYPE:STRING=Release"}),", other option is ",(0,t.jsx)(l.code,{children:"Debug"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"-DBUILD_SHARED_LIBS:BOOL=ON"}),", set ",(0,t.jsx)(l.code,{children:"OFF"})," if shared lib are not desired"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"-DBUILD_TEST:BOOL=ON"}),", set ",(0,t.jsx)(l.code,{children:"OFF"})," you dont want to build the tests"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"-DENABLE_fortran:BOOL=ON"}),", set ",(0,t.jsx)(l.code,{children:"OFF"}),", if you dont want fortran bindings"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"-DENABLE_lua:BOOL=ON"}),", set ",(0,t.jsx)(l.code,{children:"OFF"})," if you do not want Lua language bindings"]}),"\n"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:'cmake -S ./ -B ~/temp/easifem-extpkgs/plplot/build -G "Unix Makefiles"  -DCMAKE_INSTALL_PREFIX=${EASIFEM_EXTPKGS} -DCMAKE_BUILD_TYPE:STRING=Release -DBUILD_SHARED_LIBS:BOOL=ON  -DBUILD_TEST:BOOL=ON -DENABLE_fortran:BOOL=ON -DENABLE_lua:BOOL=ON\n\ncmake --build ~/temp/easifem-extpkgs/plplot/build --target all\n'})}),"\n",(0,t.jsxs)(l.p,{children:["Now you can go to ",(0,t.jsx)(l.code,{children:"$EASIFEM_EXTPKGS"})]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 include/plplot\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 man\n\u2514\u2500\u2500 share\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Contents of ",(0,t.jsx)(l.code,{children:"/bin"})," is shown below"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"/bin\n\u251c\u2500\u2500 plserver\n\u251c\u2500\u2500 pltcl\n\u2514\u2500\u2500 pltek\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Contents of ",(0,t.jsx)(l.code,{children:"/include/plplot"})," \ud83d\udcc1"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"\u251c\u2500\u2500 csadll.h\n\u251c\u2500\u2500 csa.h\n\u251c\u2500\u2500 disptab.h\n\u251c\u2500\u2500 drivers.h\n\u251c\u2500\u2500 pdf.h\n\u251c\u2500\u2500 plConfig.h\n\u251c\u2500\u2500 pldebug.h\n\u251c\u2500\u2500 plDevs.h\n\u251c\u2500\u2500 pldll.h\n\u251c\u2500\u2500 plevent.h\n\u251c\u2500\u2500 plplot.h\n\u251c\u2500\u2500 plplotP.h\n\u251c\u2500\u2500 plstream.h\n\u251c\u2500\u2500 plstrm.h\n\u251c\u2500\u2500 pltcl.h\n\u251c\u2500\u2500 pltk.h\n\u251c\u2500\u2500 plxwd.h\n\u251c\u2500\u2500 qsastimedll.h\n\u251c\u2500\u2500 qsastime.h\n\u251c\u2500\u2500 qt.h\n\u2514\u2500\u2500 tclMatrix.h\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Contents of ",(0,t.jsx)(l.code,{children:"/lib"})," \ud83d\udcc1"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"\u251c\u2500\u2500 cmake\n\u251c\u2500\u2500 fortran\n\u251c\u2500\u2500 libcsirocsa.so -> libcsirocsa.so.0\n\u251c\u2500\u2500 libcsirocsa.so.0 -> libcsirocsa.so.0.0.1\n\u251c\u2500\u2500 libcsirocsa.so.0.0.1\n\u251c\u2500\u2500 libplfortrandemolib.a\n\u251c\u2500\u2500 libplplotcxx.so -> libplplotcxx.so.15\n\u251c\u2500\u2500 libplplotcxx.so.15 -> libplplotcxx.so.15.0.0\n\u251c\u2500\u2500 libplplotcxx.so.15.0.0\n\u251c\u2500\u2500 libplplotfortran.so -> libplplotfortran.so.0\n\u251c\u2500\u2500 libplplotfortran.so.0 -> libplplotfortran.so.0.2.0\n\u251c\u2500\u2500 libplplotfortran.so.0.2.0\n\u251c\u2500\u2500 libplplotqt.so -> libplplotqt.so.2\n\u251c\u2500\u2500 libplplotqt.so.2 -> libplplotqt.so.2.0.3\n\u251c\u2500\u2500 libplplotqt.so.2.0.3\n\u251c\u2500\u2500 libplplot.so -> libplplot.so.17\n\u251c\u2500\u2500 libplplot.so.17 -> libplplot.so.17.0.0\n\u251c\u2500\u2500 libplplot.so.17.0.0\n\u251c\u2500\u2500 libplplottcltk_Main.so -> libplplottcltk_Main.so.1\n\u251c\u2500\u2500 libplplottcltk_Main.so.1 -> libplplottcltk_Main.so.1.0.1\n\u251c\u2500\u2500 libplplottcltk_Main.so.1.0.1\n\u251c\u2500\u2500 libplplottcltk.so -> libplplottcltk.so.14\n\u251c\u2500\u2500 libplplottcltk.so.14 -> libplplottcltk.so.14.1.0\n\u251c\u2500\u2500 libplplottcltk.so.14.1.0\n\u251c\u2500\u2500 libqsastime.so -> libqsastime.so.0\n\u251c\u2500\u2500 libqsastime.so.0 -> libqsastime.so.0.0.1\n\u251c\u2500\u2500 libqsastime.so.0.0.1\n\u251c\u2500\u2500 libtclmatrix.so -> libtclmatrix.so.10\n\u251c\u2500\u2500 libtclmatrix.so.10 -> libtclmatrix.so.10.3.0\n\u251c\u2500\u2500 libtclmatrix.so.10.3.0\n\u251c\u2500\u2500 pkgconfig\n\u2514\u2500\u2500 plplot5.15.0\n-plplot5.15.0\n\u2514\u2500\u2500 drivers\n    \u251c\u2500\u2500 mem.driver_info\n    \u251c\u2500\u2500 mem.so\n    \u251c\u2500\u2500 ntk.driver_info\n    \u251c\u2500\u2500 ntk.so\n    \u251c\u2500\u2500 null.driver_info\n    \u251c\u2500\u2500 null.so\n    \u251c\u2500\u2500 ps.driver_info\n    \u251c\u2500\u2500 ps.so\n    \u251c\u2500\u2500 qt.driver_info\n    \u251c\u2500\u2500 qt.so\n    \u251c\u2500\u2500 svg.driver_info\n    \u251c\u2500\u2500 svg.so\n    \u251c\u2500\u2500 tk.driver_info\n    \u251c\u2500\u2500 tk.so\n    \u251c\u2500\u2500 tkwin.driver_info\n    \u251c\u2500\u2500 tkwin.so\n    \u251c\u2500\u2500 xfig.driver_info\n    \u251c\u2500\u2500 xfig.so\n    \u251c\u2500\u2500 xwin.driver_info\n    \u2514\u2500\u2500 xwin.so\n"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"lib/cmake"})," directory contains files necessary for using PLplot with CMake. The contents of this directory are given below."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"\u251c\u2500\u2500 export_csirocsa.cmake\n\u251c\u2500\u2500 export_csirocsa-release.cmake\n\u251c\u2500\u2500 export_mem.cmake\n\u251c\u2500\u2500 export_mem-release.cmake\n\u251c\u2500\u2500 export_ntk.cmake\n\u251c\u2500\u2500 export_ntk-release.cmake\n\u251c\u2500\u2500 export_null.cmake\n\u251c\u2500\u2500 export_null-release.cmake\n\u251c\u2500\u2500 export_plfortrandemolib.cmake\n\u251c\u2500\u2500 export_plfortrandemolib-release.cmake\n\u251c\u2500\u2500 export_plplot.cmake\n\u251c\u2500\u2500 export_plplotcxx.cmake\n\u251c\u2500\u2500 export_plplotcxx-release.cmake\n\u251c\u2500\u2500 export_plplotfortran.cmake\n\u251c\u2500\u2500 export_plplotfortran-release.cmake\n\u251c\u2500\u2500 export_plplotqt.cmake\n\u251c\u2500\u2500 export_plplotqt-release.cmake\n\u251c\u2500\u2500 export_plplot-release.cmake\n\u251c\u2500\u2500 export_plplottcltk.cmake\n\u251c\u2500\u2500 export_plplottcltk_Main.cmake\n\u251c\u2500\u2500 export_plplottcltk_Main-release.cmake\n\u251c\u2500\u2500 export_plplottcltk-release.cmake\n\u251c\u2500\u2500 export_plserver.cmake\n\u251c\u2500\u2500 export_plserver-release.cmake\n\u251c\u2500\u2500 export_pltcl.cmake\n\u251c\u2500\u2500 export_pltcl-release.cmake\n\u251c\u2500\u2500 export_pltek.cmake\n\u251c\u2500\u2500 export_pltek-release.cmake\n\u251c\u2500\u2500 export_ps.cmake\n\u251c\u2500\u2500 export_ps-release.cmake\n\u251c\u2500\u2500 export_qsastime.cmake\n\u251c\u2500\u2500 export_qsastime-release.cmake\n\u251c\u2500\u2500 export_qt.cmake\n\u251c\u2500\u2500 export_qt-release.cmake\n\u251c\u2500\u2500 export_svg.cmake\n\u251c\u2500\u2500 export_svg-release.cmake\n\u251c\u2500\u2500 export_tclmatrix.cmake\n\u251c\u2500\u2500 export_tclmatrix-release.cmake\n\u251c\u2500\u2500 export_tk.cmake\n\u251c\u2500\u2500 export_tk-release.cmake\n\u251c\u2500\u2500 export_tkwin.cmake\n\u251c\u2500\u2500 export_tkwin-release.cmake\n\u251c\u2500\u2500 export_xfig.cmake\n\u251c\u2500\u2500 export_xfig-release.cmake\n\u251c\u2500\u2500 export_xwin.cmake\n\u251c\u2500\u2500 export_xwin-release.cmake\n\u251c\u2500\u2500 plplotConfig.cmake\n\u251c\u2500\u2500 plplotConfigVersion.cmake\n\u2514\u2500\u2500 plplot_exports.cmake\n"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"lib/pkgconfig"})," directory contains files necessary for finding PLplot using pkgconfig in CMake projects. The contents of this directory are given below."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"\u251c\u2500\u2500 plplot-c++.pc\n\u251c\u2500\u2500 plplot-fortran.pc\n\u251c\u2500\u2500 plplot.pc\n\u251c\u2500\u2500 plplot-qt.pc\n\u251c\u2500\u2500 plplot-tcl_Main.pc\n\u2514\u2500\u2500 plplot-tcl.pc\n"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"lib/fortran/modules/plplot"})," directory contains Fortran module files as shown below."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"\u251c\u2500\u2500 plfortrandemolib.mod\n\u251c\u2500\u2500 plplot_double.mod\n\u251c\u2500\u2500 plplot_graphics.mod\n\u251c\u2500\u2500 plplot.mod\n\u251c\u2500\u2500 plplot_private_exposed.mod\n\u251c\u2500\u2500 plplot_private_utilities.mod\n\u251c\u2500\u2500 plplot_single.mod\n\u2514\u2500\u2500 plplot_types.mod\n"})}),"\n",(0,t.jsxs)(l.p,{children:["After a successful build open your ",(0,t.jsx)(l.code,{children:".bashrc"})," or ",(0,t.jsx)(l.code,{children:".zshrc"})," and add following lines to it"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:'export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:${EASIFEM_EXTPKGS}/lib/pkgconfig"\n'})}),"\n",(0,t.jsxs)(l.p,{children:["Note: You have to replace ",(0,t.jsx)(l.code,{children:"${EASIFEM}"})," with the PLplot installation path."]}),"\n",(0,t.jsx)(l.p,{children:"Subsequently, run the following command inside terminal."}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"source ~/.bashrc #if bash if default SHELL\n"})}),"\n",(0,t.jsx)(l.p,{children:"or"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:"source ~/.zshrc #if ZSH is default\n"})}),"\n",(0,t.jsx)(l.h2,{id:"running-examples",children:"Running examples"}),"\n",(0,t.jsxs)(l.p,{children:["Create a directory ",(0,t.jsx)(l.code,{children:"test"})," \ud83d\udcc1"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sh",children:'mkdir test\ncd test\ncurl -o PLplot_example_1.F90 https://api.cacher.io/raw/ae828dbdfa2aebf3af0a/403d8f4836d78bddc387/PLplot_example_1.F90\ncurl -o CMakeLists.txt https://api.cacher.io/raw/3ca8ef3a43180dba7f35/cbb8263d9026e996d6ca/PLplot_CMakeLists.txt\ncmake -B ./build -DFILE_NAME:STRING="PLplot_example_1.F90"\ncmake --build ./build\n./build/test\n'})}),"\n",(0,t.jsx)(l.p,{children:"The content of CMakeLists.txt is given below"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-cmake",children:'CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0 FATAL_ERROR)\nSET(PROJECT_NAME "plplot")\nPROJECT(${PROJECT_NAME})\nENABLE_LANGUAGE(Fortran C)\nSET(TARGET_NAME "test")\n\nSET(PLplot_INCLUDE_DIR "$ENV{EASIFEM_EXTPKGS}/lib/fortran/modules/plplot" )\nSET(PLplot_LIBRARY "$ENV{EASIFEM_EXTPKGS}/lib/libplplot.so" )\nSET(PLplot_Fortran_LIBRARY "$ENV{EASIFEM_EXTPKGS}/lib/libplplotfortran.so" )\nOPTION(FILE_NAME "File name")\nADD_EXECUTABLE(${TARGET_NAME} ${FILE_NAME})\n\nTARGET_LINK_LIBRARIES(\n  ${TARGET_NAME}\n  ${PLplot_LIBRARY}\n  ${PLplot_Fortran_LIBRARY} )\n\nTARGET_INCLUDE_DIRECTORIES( ${TARGET_NAME} PRIVATE ${PLplot_INCLUDE_DIR} )\n'})})]})}function d(e={}){const{wrapper:l}={...(0,o.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,l,n)=>{n.d(l,{Z:()=>a,a:()=>i});var t=n(67294);const o={},s=t.createContext(o);function i(e){const l=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:l},e.children)}}}]);