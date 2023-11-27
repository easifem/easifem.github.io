"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[2322],{63072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(85893),s=n(11151);const r={repo:"https://github.com/vmagnin/gtk-fortran",licenses:["gpl-3"],tags:["easifemBase","extpkgs"]},a="GTKFortran",o={id:"install/extpkgs/GTKFortran",title:"GTKFortran",description:"\ud83e\udd92 Project website.",source:"@site/docs/guides/install/extpkgs/GTKFortran.md",sourceDirName:"install/extpkgs",slug:"/install/extpkgs/GTKFortran",permalink:"/guides/install/extpkgs/GTKFortran",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/guides/install/extpkgs/GTKFortran.md",tags:[{label:"easifemBase",permalink:"/guides/tags/easifem-base"},{label:"extpkgs",permalink:"/guides/tags/extpkgs"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{repo:"https://github.com/vmagnin/gtk-fortran",licenses:["gpl-3"],tags:["easifemBase","extpkgs"]},sidebar:"tutorialSidebar",previous:{title:"Functional-Fortran",permalink:"/guides/install/extpkgs/Functional-Fortran"},next:{title:"H5Fortran",permalink:"/guides/install/extpkgs/H5Fortran"}},l={},c=[{value:"Config option",id:"config-option",level:2},{value:"Build instruction for easifem",id:"build-instruction-for-easifem",level:2},{value:"Current location in easifem",id:"current-location-in-easifem",level:2},{value:"Comment",id:"comment",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"gtkfortran",children:"GTKFortran"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/vmagnin/gtk-fortran",children:"\ud83e\udd92 Project website"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"config-option",children:"Config option"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"-D CMAKE_BUILD_TYPE=debug\n-D EXCLUDE_PLPLOT=true\n-D NO_BUILD_EXAMPLES=true\n-D NO_BUILD_HL=true\n-D INSTALL_EXAMPLES=true\n"})}),"\n",(0,i.jsx)(t.h2,{id:"build-instruction-for-easifem",children:"Build instruction for easifem"}),"\n",(0,i.jsx)(t.p,{children:"Build only ARPACK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"build_dir=~/temp/easifem-extpkgs/arpack-ng/build\n\ncmake -S ./ -B ${build_dir} -D BUILD_SHARED_LIBS:BOOL=ON -D CMAKE_BUILD_TYPE:STRING=Release\n\ncmake --build ${build_dir} --target install\n"})}),"\n",(0,i.jsx)(t.h2,{id:"current-location-in-easifem",children:"Current location in easifem"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"/extpkgs/gtk-fortran\n"})}),"\n",(0,i.jsx)(t.h2,{id:"comment",children:"Comment"}),"\n",(0,i.jsxs)(t.p,{children:["In my experience, this program should be installed at ",(0,i.jsx)(t.code,{children:"/usr/local/"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);