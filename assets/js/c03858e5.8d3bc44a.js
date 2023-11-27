"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35752],{29358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>T});var o=t(85893),r=t(11151);const a={},i="SetParam",s={id:"RefLine/SetParam",title:"SetParam",description:"Set the parameters of reference element.",source:"@site/docs/docs-api/RefLine/SetParam.md",sourceDirName:"RefLine",slug:"/RefLine/SetParam",permalink:"/docs-api/RefLine/SetParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/RefLine/SetParam.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RefCoord",permalink:"/docs-api/RefLine/RefCoord"},next:{title:"RefPrism",permalink:"/docs-api/RefPrism/"}},c={},T=[{value:"Interface",id:"interface",level:2}];function N(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"setparam",children:"SetParam"}),"\n",(0,o.jsx)(n.p,{children:"Set the parameters of reference element."}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE refelem_SetParam(obj, xij, entityCounts, &\n    & xidimension, name, nameStr, nsd, &\n    & pointTopology, edgeTopology, faceTopology, cellTopology)\n    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: entityCounts(4)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: xidimension\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: name\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: nameStr\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: pointTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: edgeTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: faceTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: cellTopology(:)\n  END SUBROUTINE refelem_SetParam\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(N,{...e})}):N(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(67294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);