"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[93514],{73671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(85893),i=n(11151);const s={},d="InitiateNodeToNodes",a={id:"Mesh/InitiateNodeToNodes",title:"InitiateNodeToNodes",description:"This routine generate the node to nodes mapping",source:"@site/docs/docs-api/Mesh/InitiateNodeToNodes.md",sourceDirName:"Mesh",slug:"/Mesh/InitiateNodeToNodes",permalink:"/docs-api/Mesh/InitiateNodeToNodes",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Mesh/InitiateNodeToNodes.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InitiateNodeToElements",permalink:"/docs-api/Mesh/InitiateNodeToElements"},next:{title:"IsAllNodePresent",permalink:"/docs-api/Mesh/IsAllNodePresent"}},r={},l=[];function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"initiatenodetonodes",children:"InitiateNodeToNodes"}),"\n",(0,o.jsx)(t.p,{children:"This routine generate the node to nodes mapping"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"In other words, it generates info of node-numbers in mesh surrounding a node number"}),"\n",(0,o.jsxs)(t.li,{children:["This mapping is stored inside ",(0,o.jsx)(t.code,{children:"obj%nodeData%globalNodeNum"})]}),"\n",(0,o.jsx)(t.li,{children:"For a local node number i, obj%nodeData(i)%globalNodeNum denotes the global node data surrounding the local node number."}),"\n",(0,o.jsx)(t.li,{children:"This list does not include self node."}),"\n",(0,o.jsxs)(t.li,{children:["The method needs node-to-elements data, therefore if this data is not initiated, then this method calls ",(0,o.jsx)(t.code,{children:"InitiateNodeToElements()"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE InitiateNodetoNodes(obj)\n    CLASS(Mesh_), INTENT(INOUT) :: obj\n    !! mesh data\n  END SUBROUTINE InitiateNodetoNodes\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>d});var o=n(67294);const i={},s=o.createContext(i);function d(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);