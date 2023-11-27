"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65831],{43384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(85893),s=n(11151);const r={title:"IntVector example 7",tags:["IntVector/Initiate","IntVector/Display","IntVector/Get"]},a="Intvector example 7",i={id:"IntVector/IntVector_test_7",title:"IntVector example 7",description:'!!! note ""',source:"@site/docs/docs-api/IntVector/IntVector_test_7.md",sourceDirName:"IntVector",slug:"/IntVector/IntVector_test_7",permalink:"/docs-api/IntVector/IntVector_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/IntVector/IntVector_test_7.md",tags:[{label:"IntVector/Initiate",permalink:"/docs-api/tags/int-vector-initiate"},{label:"IntVector/Display",permalink:"/docs-api/tags/int-vector-display"},{label:"IntVector/Get",permalink:"/docs-api/tags/int-vector-get"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"IntVector example 7",tags:["IntVector/Initiate","IntVector/Display","IntVector/Get"]},sidebar:"tutorialSidebar",previous:{title:"IntVector example 6",permalink:"/docs-api/IntVector/IntVector_test_6"},next:{title:"IntegerUtility",permalink:"/docs-api/IntegerUtility/"}},c={},l=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"intvector-example-7",children:"Intvector example 7"}),"\n",(0,o.jsxs)(t.p,{children:['!!! note ""\nThis examples shows how to USE ',(0,o.jsx)(t.code,{children:"Get"})," method to access the entries inside the [[IntVector_]]. The output results can be in various formats including the native fortran INTEGER vectors."]}),"\n",(0,o.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"[[IntVector_]]"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    TYPE(IntVector_) :: obj1, obj2, obj(4)\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! note ""\nInitiate an instance of [[IntVector_]]'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj(1) = [1,2]\n    obj(2) = [3,4,5]\n    obj(3) = [6,7,8]\n    obj(4) = [9,10]\n"})}),"\n",(0,o.jsxs)(t.p,{children:['!!! note ""\nLet us serialized the entries of obj(1:4) and get the values in a scalar instance of intvector. Here, RETURN ',(0,o.jsx)(t.code,{children:"datatype"})," is  [[IntVector_]]"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2=Get(obj=obj, dataType=TypeIntVector)\n    CALL Display(obj2, \"obj2:\", orient='row')\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! note ""\nNow let us get first two values from each obj(1:4) and packed them in an instance of intvector.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2=Get(obj=obj, indx=[1,2], datatype=TypeIntVector)\n    CALL Display(obj2, \"obj2:\", orient='row')\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! error ""\nNote that in the each entry in the indx should be in the bound of obj(1:4).'}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Here, TypeIntVector is a PARAMETER defined in the easifemBase library."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:['!!! note ""\nNow let us get the selected values specified by the indices in ',(0,o.jsx)(t.code,{children:"indx"}),"."]}),"\n",(0,o.jsx)(t.p,{children:'!!! settings ""\nCleanup'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    CALL DEALLOCATE(obj1)\n    CALL DEALLOCATE(obj2)\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);