"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[40993],{24243:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var n=i(85893),d=i(11151);const s={sidebar_position:2,title:"Structure"},o=void 0,r={id:"AbstractNodeField/AbstractNodeField_",title:"Structure",description:"AbstractNodeField_ is an abstract class which represents the field of nodal variables in finite element method.",source:"@site/docs/docs-api/AbstractNodeField/AbstractNodeField_.md",sourceDirName:"AbstractNodeField",slug:"/AbstractNodeField/AbstractNodeField_",permalink:"/docs-api/AbstractNodeField/AbstractNodeField_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractNodeField/AbstractNodeField_.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Structure"},sidebar:"tutorialSidebar",previous:{title:"AbstractNodeField",permalink:"/docs-api/AbstractNodeField/"},next:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractNodeField/CheckEssentialParam"}},c={},a=[{value:"Structure",id:"structure",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AbstractNodeField_"})," is an abstract class which represents the field of nodal variables in finite element method."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AbstractNodeField_"})," is a child of ",(0,n.jsx)(t.a,{href:"/docs-api/AbstractField/AbstractField_",children:"AbstractField_"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The nodal field is associated with the nodes of a finite element mesh. These variables can be of following types:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"SCALAR"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"VECTOR"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"SPACE-TIME(ST) SCALAR"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SPACE-TIME(ST) VECTOR"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"TYPE, ABSTRACT, EXTENDS(AbstractField_) :: AbstractNodeField_\n  INTEGER(I4B) :: tSize = 0\n  !! Total length of the nodal field = tdof * tNodes\n  TYPE(RealVector_) :: realVec\n  !! Vector of reals to contains the nodes\n  TYPE(DOF_) :: dof\n  !! Degree of freedom object, which contains the information about\n  !! how the different components are stored inside the realVec\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.code,{children:"tSize"})})}),"\n",(0,n.jsxs)(t.p,{children:["Total length of the nodal field = ",(0,n.jsx)(t.code,{children:"tdof * tNodes"})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.code,{children:"realVec"})})}),"\n",(0,n.jsx)(t.p,{children:"Real vector, it contains the value."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.code,{children:"dof"})})}),"\n",(0,n.jsxs)(t.p,{children:["Degree of freedom object. Read more about it ",(0,n.jsx)(t.a,{href:"../DOF/DOF_",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"AbstractNodeField1",src:i(14765).Z+"",width:"713",height:"715"})}),"\n",(0,n.jsx)(t.admonition,{title:"How to extend?",type:"note",children:(0,n.jsxs)(t.p,{children:["In order to extend the abstract class ",(0,n.jsx)(t.code,{children:"AbstractNodeField"})," one should implement the methods given in ",(0,n.jsx)(t.a,{href:"/docs-api/AbstractField/AbstractField_",children:"AbstractField_"})," as well as the following methods:"]})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},14765:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/AbstractNodeField1-70e3555f08f17820354cc9dcaaef2b97.svg"},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(67294);const d={},s=n.createContext(d);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);