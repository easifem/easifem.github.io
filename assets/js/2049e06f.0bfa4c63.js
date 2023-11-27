"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[77252],{20424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(85893),r=t(11151);const a={title:"IntVector example 5",tags:["IntVector/Initiate","IntVector/Display","IntVector/IN"]},s="Intvector example 2",i={id:"IntVector/IntVector_test_5",title:"IntVector example 5",description:'!!! note ""',source:"@site/docs/docs-api/IntVector/IntVector_test_5.md",sourceDirName:"IntVector",slug:"/IntVector/IntVector_test_5",permalink:"/docs-api/IntVector/IntVector_test_5",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/IntVector/IntVector_test_5.md",tags:[{label:"IntVector/Initiate",permalink:"/docs-api/tags/int-vector-initiate"},{label:"IntVector/Display",permalink:"/docs-api/tags/int-vector-display"},{label:"IntVector/IN",permalink:"/docs-api/tags/int-vector-in"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"IntVector example 5",tags:["IntVector/Initiate","IntVector/Display","IntVector/IN"]},sidebar:"tutorialSidebar",previous:{title:"IntVector example 4",permalink:"/docs-api/IntVector/IntVector_test_4"},next:{title:"IntVector example 6",permalink:"/docs-api/IntVector/IntVector_test_6"}},c={},l=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"intvector-example-2",children:"Intvector example 2"}),"\n",(0,o.jsx)(n.p,{children:'!!! note ""\nThis examples shows how to use Operator(.in.) to find out if an integer set is a subset of another integer set.'}),"\n",(0,o.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"[[IntVector_]]"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nTYPE(IntVector_) :: obj1, obj2\n"})}),"\n",(0,o.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[IntVector_]]'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"obj1 = [1,2,3]\nobj2 = [1,2,3]\n"})}),"\n",(0,o.jsx)(n.p,{children:'!!! note ""\nUsing opertor(.in.) for native fortran integer vectors'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'CALL OK(obj1%val .in. obj2%val, "operator(.in.)")\nCALL OK(obj1 .in. obj2, "operator(.in.)")\n'})}),"\n",(0,o.jsx)(n.p,{children:"Let us try anoter test."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'obj1 = [1,2,3]\nobj2 = [3,2,1]\nCALL OK(obj1%val .in. obj2%val, "operator(.in.)")\nCALL OK(obj1 .in. obj2, "operator(.in.)")\n'})}),"\n",(0,o.jsx)(n.p,{children:"Let us try one more test"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'obj1 = [1,2,3]\nobj2 = [1,4,6,3,3,2,2]\nCALL OK( obj1%val .in. obj2%val, "operator(.in.)")\nCALL OK( obj1 .in. obj2, "operator(.in.)")\n'})}),"\n",(0,o.jsx)(n.p,{children:"The following test should fail."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'obj1 = [1,2,5]\nCALL OK( obj1%val .in. obj2%val, "operator(.in.)-should-fail")\nCALL OK( obj1 .in. obj2, "operator(.in.)-should-fail")\n'})}),"\n",(0,o.jsx)(n.p,{children:"The following test should fail."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'obj1 = [1,2,5,6]\nCALL OK( obj1 .in. obj2, "operator(.in.)-should-fail")\n'})}),"\n",(0,o.jsx)(n.p,{children:'!!! settings ""\nCleanup'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(67294);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);