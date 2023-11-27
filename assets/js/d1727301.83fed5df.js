"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[53203],{74224:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=t(85893),s=t(11151);const a={},c="SpaceComponents",p={id:"DOF/SpaceComponents",title:"SpaceComponents",description:"Interface",source:"@site/docs/docs-api/DOF/SpaceComponents.md",sourceDirName:"DOF",slug:"/DOF/SpaceComponents",permalink:"/docs-api/DOF/SpaceComponents",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DOF/SpaceComponents.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/DOF/Set"},next:{title:"TimeComponents",permalink:"/docs-api/DOF/TimeComponents"}},r={},i=[{value:"Interface",id:"interface",level:2}];function m(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"spacecomponents",children:"SpaceComponents"}),"\n",(0,o.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-fortran",children:"!----------------------------------------------------------------------------\n!                                                spacecomponents@getMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 16 Oct 2021\n! summary: Returns the space components of each physical vars\n\nINTERFACE\n  MODULE PURE FUNCTION dof_spacecomponents1(obj) RESULT(ans)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION dof_spacecomponents1\nEND INTERFACE\n\nINTERFACE OPERATOR(.spacecomponents.)\n  MODULE PROCEDURE dof_spacecomponents1\nEND INTERFACE\n\n!----------------------------------------------------------------------------\n!                                                spacecomponents@getMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 16 Oct 2021\n! summary: Returns the space component of a given physical vars\n\nINTERFACE\n  MODULE PURE FUNCTION dof_spacecomponents2(obj, ivar) RESULT(ans)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B) :: ans\n  END FUNCTION dof_spacecomponents2\nEND INTERFACE\n\nINTERFACE OPERATOR(.spacecomponents.)\n  MODULE PROCEDURE dof_spacecomponents2\nEND INTERFACE\n\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>p,a:()=>c});var o=t(67294);const s={},a=o.createContext(s);function c(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);