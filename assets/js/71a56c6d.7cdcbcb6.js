"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[40065],{98548:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(85893),t=a(11151);const i={authors:"Vikas Sharma, Ph. D.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"CommandLineInterface example-2"},o="CommandLineInterface: example-2",s={id:"CommandLine/CommandLine_test_2",title:"CommandLineInterface example-2",description:"Class and modules",source:"@site/docs/docs-api/CommandLine/CommandLine_test_2.md",sourceDirName:"CommandLine",slug:"/CommandLine/CommandLine_test_2",permalink:"/docs-api/CommandLine/CommandLine_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CommandLine/CommandLine_test_2.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"CommandLineInterface example-2"},sidebar:"tutorialSidebar",previous:{title:"CommandLineInterface example-1",permalink:"/docs-api/CommandLine/CommandLine_test_1"},next:{title:"CommandLineInterface example-3",permalink:"/docs-api/CommandLine/CommandLine_test_3"}},d={},c=[{value:"Class and modules",id:"class-and-modules",level:2},{value:"Usage",id:"usage",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"commandlineinterface-example-2",children:"CommandLineInterface: example-2"}),"\n",(0,r.jsx)(n.h2,{id:"class-and-modules",children:"Class and modules"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[[CommandLineInterface_]]"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"Importing the necessary modules and variables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nCHARACTER(LEN=99) :: str1\nCHARACTER(LEN=99) :: str2\nINTEGER(I4B) :: int1\nTYPE(CommandLineInterface_) :: cli\nINTEGER(I4B) :: error\n"})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Initiate : Initiating the CLI."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL cli%initiate( &\n     & progname='markdownToSource', &\n     & version='v21.11.0', &\n     & authors='Vikas Sharma, Ph.D.', &\n     & license='MIT', &\n     & description='Extract code from the markdown file and create a source file.',&\n     & examples=[ &\n     & 'markdownToSource                                           ', &\n     & 'markdownToSource -h                                        ', &\n     & 'markdownToSource --input inputFile.md --output outFile.F90 ', &\n     & 'markdownToSource -i inputFile.md -o outFile.F90            ', &\n     & 'markdownToSource --version                                 ', &\n     & 'markdownToSource -v                                        '])\n"})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Add : Adding options to CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL cli%add(switch='--string1',switch_ab='-s1',help='name of input markdown file',&\n     & required=.TRUE., act='store', error=error)\nIF (error .NE. 0) CALL Display(\"--debug--1\")\n"})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Add : Adding another option"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL cli%add(switch='--string2',switch_ab='-s2',help='name of output source file',&\n     & required=.FALSE., act='store', def='default', error=error)\nIF (error .NE. 0) THEN\n    CALL Display(\"--debug-2\")\n    STOP\nEND IF\n"})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Get : Getting options from CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL cli%get(switch=\'-s1\', val=str1, error=error)\nIF (error .NE. 0) THEN\n    CALL Display( "--debug-3" )\n    STOP\nELSE\n    CALL Display(str1, "str1: ")\nEND IF\n'})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Get : Getting the value of option"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL cli%get(switch=\'-s2\', val=str2, error=error)\nIF (error .NE. 0) THEN\n    CALL Display("--debug-4")\n    STOP\nELSE\n    CALL Display(str2, "str2: ")\nEND IF\n'})}),"\n",(0,r.jsx)(n.p,{children:"Finishing up."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var r=a(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);