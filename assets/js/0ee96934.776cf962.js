"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30200],{31660:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=s(85893),t=s(11151),l=s(74866),a=s(85162);const r={title:"Arch Linux",sidebar_position:3},o=void 0,c={id:"getting-started/archlinux",title:"Arch Linux",description:"This section provides details of how to quickly install easifem library and run some sample programs (with default options).",source:"@site/docs/guides/getting-started/archlinux.md",sourceDirName:"getting-started",slug:"/getting-started/archlinux",permalink:"/guides/getting-started/archlinux",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/guides/getting-started/archlinux.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:3,frontMatter:{title:"Arch Linux",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Ubuntu",permalink:"/guides/getting-started/ubuntu"},next:{title:"Fedora",permalink:"/guides/getting-started/fedora"}},d={},u=[{value:"Build from source",id:"build-from-source",level:2},{value:"Step 1: install system dependencies",id:"step-1-install-system-dependencies",level:3},{value:"Step 2: Install <code>easifem</code> CLI",id:"step-2-install-easifem-cli",level:3},{value:"Step 3: Setting up environment variables",id:"step-3-setting-up-environment-variables",level:3},{value:"Step 4: install easifem",id:"step-4-install-easifem",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This section provides details of how to quickly install easifem library and run some sample programs (with default options)."}),"\n",(0,i.jsx)(n.p,{children:"Following steps are performed in this section."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Installing ",(0,i.jsx)(n.code,{children:"EASIFEM"})," command line interface."]}),"\n",(0,i.jsxs)(n.li,{children:["Set up the environment variables by using ",(0,i.jsx)(n.code,{children:"EASIFEM"})," CLI."]}),"\n",(0,i.jsx)(n.li,{children:"Install easifem library."}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"summary",type:"info",children:[(0,i.jsxs)(n.p,{children:["It is recommended that you read (and follow) the steps given below to quickly install ",(0,i.jsx)(n.code,{children:"easifem"}),". However, due to any reason, if you do not want to read the instruction given below, then just copy and paste the command given below."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yay -S gcc gcc-fortran openmp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua && \\\npython3 -m pip install easifem && \\\neasifem setenv -i ~/.easifem/install -b ~/.easifem/build -s ~/.easifem/src && \\\nsource ~/.config/easifem/easifemvar.sh && \\\neasifem install easifem\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"build-from-source",children:"Build from source"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-install-system-dependencies",children:"Step 1: install system dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["First install ",(0,i.jsx)(n.code,{children:"yay"})," on Arch Linux by following process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu\nsudo pacman -S base-devel\nsudo pacman -S git\nmkdir -pv ~/temp\nsudo git clone https://aur.archlinux.org/yay.git ~/temp/yay\ncd ~/temp/yay\nmakepkg -si\ncd ~ && rm -rf ~/temp/yay\nyay --version\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After successfully installing ",(0,i.jsx)(n.code,{children:"yay"})," we can install the system dependencies by using following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yay -S gcc gcc-fortran openmp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"step-2-install-easifem-cli",children:["Step 2: Install ",(0,i.jsx)(n.code,{children:"easifem"})," CLI"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m pip install easifem\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-setting-up-environment-variables",children:"Step 3: Setting up environment variables"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"easifem setenv -i ~/.easifem/install -b ~/.easifem/build -s ~/.easifem/src\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If your active shell is ",(0,i.jsx)(n.code,{children:"zsh"})," or ",(0,i.jsx)(n.code,{children:"bash"}),", then please run the following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="for bash or zsh shell only"',children:"# add to ~/.bashrc or ~/.zshrc\nsource ~/.config/easifem/easifemvar.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If your active shell is ",(0,i.jsx)(n.code,{children:"fish"}),", then run the following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="for fish shell"',children:"# add to ~/.config/fish/config.fish\nsource ~/.config/easifem/easifemvar.fish\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Check your shell"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.p,{children:"You can check your active shell by using the following command."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo $SHELL\n"})})]})]}),"\n",(0,i.jsx)(n.p,{children:"Now, you need to modify the shell file by adding following lines."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Click here to to know more about the environment variables"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["option ",(0,i.jsx)(n.code,{children:"-i"})," denotes the location of file system where ",(0,i.jsx)(n.code,{children:"easifem"})," will be installed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-b"})," denotes the location of file system where ",(0,i.jsx)(n.code,{children:"easifem"})," build files will be stored."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-s"})," denotes the location of file system where ",(0,i.jsx)(n.code,{children:"easifem"})," source file will be downloaded."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.a,{href:"/guides/install/archlinux/setup-environment",children:["You can learn more about the ",(0,i.jsx)(n.code,{children:"easifem"})," environment variables here"]}),"."]})]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Click here to see how to modify the shell(recommended)"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(n.p,{children:["If you do not want to source the ",(0,i.jsx)(n.code,{children:"easifemvar"})," files every time you open a new terminal window, then please add following lines to your shell configuration."]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(a.Z,{value:"1",label:"Bash Shell",children:[(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.code,{children:"Bash"})," shell, then you can place ",(0,i.jsx)(n.code,{children:"easifemvar.sh"})," in your shell. Open ",(0,i.jsx)(n.code,{children:"~/.bashrc"})," in the editor, and add the following line at the end of the file."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.config/easifem/easifemvar.sh\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Save the file and exit."}),"\n",(0,i.jsx)(n.li,{children:"Restart your terminal."}),"\n"]})]}),(0,i.jsxs)(a.Z,{value:"2",label:"Zsh Shell",children:[(0,i.jsxs)(n.p,{children:["If you are using the ",(0,i.jsx)(n.code,{children:"Zsh"})," shell, then you can place ",(0,i.jsx)(n.code,{children:"easifemvar.sh"})," in your shell. Open ",(0,i.jsx)(n.code,{children:"~/.zshrc"})," file in the editor, and add the following line at the end of the file:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.config/easifem/easifemvar.sh\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Save the file and exit."}),"\n",(0,i.jsx)(n.li,{children:"Restart your terminal."}),"\n"]})]}),(0,i.jsxs)(a.Z,{value:"3",label:"Fish Shell",children:[(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.code,{children:"Fish"})," shell, then you can place ",(0,i.jsx)(n.code,{children:"easifemvar.fish"})," in your shell. For fish shell, open ",(0,i.jsx)(n.code,{children:"~/.config/fish/config.fish"})," in the editor and add the following line at the end of the file:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source $HOME/.config/easifem/easifemvar.fish\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Save the file and exit."}),"\n",(0,i.jsx)(n.li,{children:"Restart your terminal."}),"\n"]})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-install-easifem",children:"Step 4: install easifem"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"easifem install easifem\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>a});s(67294);var i=s(86010);const t={tabItem:"tabItem_Ymn6"};var l=s(85893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,a),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>w});var i=s(67294),t=s(86010),l=s(12466),a=s(16550),r=s(20469),o=s(91980),c=s(67392),d=s(50012);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=h(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[c,u]=f({queryString:s,groupId:t}),[p,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Nk)(s);return[t,(0,i.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),x=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,r.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=s(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(85893);function j(e){let{className:n,block:s,selectedValue:i,selectValue:a,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=r[s].value;t!==i&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:r.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(67294);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);