"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[28418],{3855:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(85893),t=i(11151);const a={sidebar_position:7,repo:"https://github.com/vickysharma0812/arpack-ng",licenses:["none"],tags:["easifemBase","extpkgs"]},l="ARPACK",r={id:"install/extpkgs/ARPACK",title:"ARPACK",description:"ARPACK-NG is a collection of Fortran77 subroutines designed to solve large scale eigenvalue problems.",source:"@site/docs/guides/install/extpkgs/ARPACK.md",sourceDirName:"install/extpkgs",slug:"/install/extpkgs/ARPACK",permalink:"/guides/install/extpkgs/ARPACK",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/guides/install/extpkgs/ARPACK.md",tags:[{label:"easifemBase",permalink:"/guides/tags/easifem-base"},{label:"extpkgs",permalink:"/guides/tags/extpkgs"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,repo:"https://github.com/vickysharma0812/arpack-ng",licenses:["none"],tags:["easifemBase","extpkgs"]},sidebar:"tutorialSidebar",previous:{title:"SuperLU",permalink:"/guides/install/extpkgs/SuperLU"},next:{title:"LIS",permalink:"/guides/install/extpkgs/LIS"}},o={},c=[{value:"Config option",id:"config-option",level:2},{value:"Build instruction for easifem",id:"build-instruction-for-easifem",level:2},{value:"Current location in easifem",id:"current-location-in-easifem",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"arpack",children:"ARPACK"}),"\n",(0,s.jsx)(n.p,{children:"ARPACK-NG is a collection of Fortran77 subroutines designed to solve large scale eigenvalue problems."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/opencollab/arpack-ng",children:"Project website"})}),"\n",(0,s.jsx)(n.li,{children:"Cmake build: YES"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"config-option",children:"Config option"}),"\n",(0,s.jsx)(n.p,{children:"Only ARPACK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"-D USE_ARPACK:BOOL=ON\n"})}),"\n",(0,s.jsx)(n.p,{children:"Both APRACK and PARPACK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"-D USE_ARPACK:BOOL=ON -D USE_PARPACK:BOOL=ON\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build-instruction-for-easifem",children:"Build instruction for easifem"}),"\n",(0,s.jsx)(n.p,{children:"Build only ARPACK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'build_dir=$HOME/temp/easifem-extpkgs/arpack-ng/build/\ncmake_def="-D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_EXTPKGS} -D BUILD_SHARED_LIBS:BOOL=ON -D CMAKE_BUILD_TYPE:STRING=Release -D MPI:BOOL=OFF"\n\ncmake -S . -B ${build_dir} ${cmake_def}\ncmake -B ${build_dir}\ncmake --build ${build_dir} --target install\n'})}),"\n",(0,s.jsx)(n.p,{children:"Build both ARPACK and PARPACK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"build_dir=~/temp/easifem-extpkgs/arpack-ng/build\n\ncmake -S ./ -B ${build_dir} -D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_EXTPKGS} -D BUILD_SHARED_LIBS:BOOL=ON -D MPI:BOOL=ON -D CMAKE_BUILD_TYPE:STRING=Release\n\ncmake --build ${build_dir} --target install\n"})}),"\n",(0,s.jsx)(n.h2,{id:"current-location-in-easifem",children:"Current location in easifem"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/extpkgs/arpack-ng\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var s=i(67294);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);