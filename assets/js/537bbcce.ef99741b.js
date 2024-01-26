"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[98124],{32549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(85893),s=t(11151);const i={author:"Vikas Sharma, Ph.D.",date:"27 Oct 2022",tags:["String/Str"]},a="String example 1",l={id:"String/String_test_1",title:"String example 1",description:"In this example we test following methods.",source:"@site/docs/docs-api/String/String_test_1.md",sourceDirName:"String",slug:"/String/String_test_1",permalink:"/docs-api/String/String_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/String/String_test_1.md",tags:[{label:"String/Str",permalink:"/docs-api/tags/string-str"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"27 Oct 2022",tags:["String/Str"]},sidebar:"tutorialSidebar",previous:{title:"String",permalink:"/docs-api/String/"},next:{title:"StringUtility",permalink:"/docs-api/StringUtility/"}},o={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"string-example-1",children:"String example 1"}),"\n",(0,r.jsx)(n.p,{children:"In this example we test following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Str"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[[String_]]"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Str for integer"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  BLOCK\n    CALL Display( Str(1), "Str(1) = " )\n    CALL Display( Str(1, no_sign=.TRUE.), "Str(1) = " )\n    CALL Display( Str(1, no_sign=.FALSE.), "Str(1) = " )\n  END BLOCK\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Str for real32"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  BLOCK\n    CALL Display( Str(1.0_Real32), "Str(1) = " )\n    CALL Display( Str(1.0_Real32, no_sign=.TRUE.), "Str(1) = " )\n    CALL Display( Str(1.0_Real32, no_sign=.FALSE.), "Str(1) = " )\n  END BLOCK\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Str for real64"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  BLOCK\n    CALL Display( Str(1.0_Real64), "Str(1) = " )\n    CALL Display( Str(1.0_Real64, no_sign=.TRUE.), "Str(1) = " )\n    CALL Display( Str(1.0_Real64, no_sign=.FALSE.), "Str(1) = " )\n  END BLOCK\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);