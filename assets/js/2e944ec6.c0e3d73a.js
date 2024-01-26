"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[88077],{44685:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(85893),o=i(11151);const a={},c="JacobianLine",r={id:"MappingUtility/JacobianLine",title:"JacobianLine",description:"Returns the Jacobian of mapping between two lines.",source:"@site/docs/docs-api/MappingUtility/JacobianLine.md",sourceDirName:"MappingUtility",slug:"/MappingUtility/JacobianLine",permalink:"/docs-api/MappingUtility/JacobianLine",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MappingUtility/JacobianLine.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobianHexahedron",permalink:"/docs-api/MappingUtility/JacobianHexahedron"},next:{title:"JacobianQuadrangle",permalink:"/docs-api/MappingUtility/JacobianQuadrangle"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"jacobianline",children:"JacobianLine"}),"\n",(0,t.jsx)(e.p,{children:"Returns the Jacobian of mapping between two lines."}),"\n",(0,t.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobianLine(from, to, xij) RESULT(ans)\n    CHARACTER(*), INTENT(IN) :: from\n    !! BIUNIT\n    !! UNIT\n    !! LINE\n    CHARACTER(*), INTENT(IN) :: to\n    !! BIUNIT\n    !! UNIT\n    !! LINE\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! nodal coordinates of general line (segment)\n    !! number of rows=1\n    !! number of cols=2\n    !! xij is needed when from or to are LINE\n    !! both from and to cannot be LINE\n    REAL(DFP) :: ans\n  END FUNCTION JacobianLine\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.mdxAdmonitionTitle,{children:(0,t.jsx)(e.code,{children:"from"})})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"BIUNIT"})," biunit line"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"UNIT"})," unit line"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"LINE"})," general LINE"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.mdxAdmonitionTitle,{children:(0,t.jsx)(e.code,{children:"to"})})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"BIUNIT"})," biunit line"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"UNIT"})," unit line"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"LINE"})," general LINE"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["If any of ",(0,t.jsx)(e.code,{children:"from"})," or ",(0,t.jsx)(e.code,{children:"to"})," is set to ",(0,t.jsx)(e.code,{children:"LINE"}),", then ",(0,t.jsx)(e.code,{children:"xij"})," must be provided, which represents the end points of a line segment."]})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["Both ",(0,t.jsx)(e.code,{children:"from"})," and ",(0,t.jsx)(e.code,{children:"to"})," cannot be set to ",(0,t.jsx)(e.code,{children:"LINE"}),"."]})})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>c});var t=i(67294);const o={},a=t.createContext(o);function c(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);