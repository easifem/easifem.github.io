"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[54603],{57038:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var s=i(85893),t=i(11151);const l={author:"Vikas Sharma, Ph.D.",date:"4 Sept 2022",tags:["MultiIndices","MultiIndices/Initiate","MultiIndices/Deallocate","MultiIndices/Display","MultiIndices/GetMultiIndices"]},d="MultiIndices example 3",c={id:"MultiIndices/MultiIndices_test_3",title:"MultiIndices example 3",description:"Modules and classes",source:"@site/docs/docs-api/MultiIndices/MultiIndices_test_3.md",sourceDirName:"MultiIndices",slug:"/MultiIndices/MultiIndices_test_3",permalink:"/docs-api/MultiIndices/MultiIndices_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MultiIndices/MultiIndices_test_3.md",tags:[{label:"MultiIndices",permalink:"/docs-api/tags/multi-indices"},{label:"MultiIndices/Initiate",permalink:"/docs-api/tags/multi-indices-initiate"},{label:"MultiIndices/Deallocate",permalink:"/docs-api/tags/multi-indices-deallocate"},{label:"MultiIndices/Display",permalink:"/docs-api/tags/multi-indices-display"},{label:"MultiIndices/GetMultiIndices",permalink:"/docs-api/tags/multi-indices-get-multi-indices"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"4 Sept 2022",tags:["MultiIndices","MultiIndices/Initiate","MultiIndices/Deallocate","MultiIndices/Display","MultiIndices/GetMultiIndices"]},sidebar:"tutorialSidebar",previous:{title:"MultiIndices_test_2",permalink:"/docs-api/MultiIndices/MultiIndices_test_2"},next:{title:"NeumannBC",permalink:"/docs-api/NeumannBC/"}},a={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"!!! example &quot;result&quot;\nindices=",id:"-example-resultindices",level:2},{value:"!!! example &quot;result&quot;\nindices=",id:"-example-resultindices-1",level:2},{value:"!!! example &quot;result&quot;\nindices=",id:"-example-resultindices-2",level:2},{value:"!!! example &quot;result&quot;\nindices=",id:"-example-resultindices-3",level:2},{value:"!!! example &quot;result&quot;\nindices=",id:"-example-resultindices-4",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"multiindices-example-3",children:"MultiIndices example 3"}),"\n",(0,s.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[[MultiIndices_]]"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\ntype(multiindices_) :: obj\ninteger(i4b) :: n, d\ninteger(i4b), allocatable :: indices(:,:)\n"})}),"\n",(0,s.jsx)(n.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'  obj=MultiIndices(n=0, d=1)\n  indices = GetMultiIndices(obj=obj, upto=.true.)\n  CALL Display(indices, "indices=")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"-example-resultindices",children:'!!! example "result"\nindices='}),"\n",(0,s.jsx)(n.p,{children:"0  0"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "n=1, d=1"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'  obj=MultiIndices(n=1, d=1)\n  indices = GetMultiIndices(obj, .true.)\n  CALL Display(transpose(indices), "indices=")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"-example-resultindices-1",children:'!!! example "result"\nindices='}),"\n",(0,s.jsx)(n.p,{children:"0  0\n0  1\n1  0"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "n=2, d=1"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'  obj=MultiIndices(n=2, d=1)\n  indices = GetMultiIndices(obj, .true.)\n  CALL Display(transpose(indices), "indices=")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"-example-resultindices-2",children:'!!! example "result"\nindices='}),"\n",(0,s.jsx)(n.p,{children:"0  0\n0  1\n1  0\n0  2\n1  1\n2  0"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "n=2, d=2"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'  obj=MultiIndices(n=2, d=2)\n  indices = GetMultiIndices(obj, .true.)\n  CALL Display(transpose(indices), "indices=")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"-example-resultindices-3",children:'!!! example "result"\nindices='}),"\n",(0,s.jsx)(n.p,{children:"0  0  0\n0  0  1\n0  1  0\n1  0  0\n0  0  2\n0  1  1\n0  2  0\n1  0  1\n1  1  0\n2  0  0"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "n=2, d=3"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'  obj=MultiIndices(n=2, d=3)\n  indices = GetMultiIndices(obj, .true.)\n  CALL Display(transpose(indices), "indices=")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"-example-resultindices-4",children:'!!! example "result"\nindices='}),"\n",(0,s.jsx)(n.p,{children:"0  0  0  0\n0  0  0  1\n0  0  1  0\n0  1  0  0\n1  0  0  0\n0  0  0  2\n0  0  1  1\n0  0  2  0\n0  1  0  1\n0  1  1  0\n0  2  0  0\n1  0  0  1\n1  0  1  0\n1  1  0  0\n2  0  0  0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>d});var s=i(67294);const t={},l=s.createContext(t);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);