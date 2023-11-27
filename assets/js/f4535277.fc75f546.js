"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[95298],{43500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var i=t(85893),l=t(11151),a=t(74866),r=t(85162);function s(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This example shows the use of ",(0,i.jsx)(n.a,{href:"/docs-api/Display_Method/SetDisplayProfile",children:"SetDisplayProfile"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nREAL( DFP ) :: Amat(4,4)\n\nCALL RANDOM_NUMBER(Amat)\n\nCALL Display(Amat, "Default display, Amat=")\n\nCALL SetDisplayProfile(DisplayProfileTerminal)\nCALL Display(Amat, "DisplayProfileTerminal, Amat=")\n\n\nCALL BlankLines(nol=2)\nCALL SetDisplayProfile( &\n& DispProfile=DisplayProfileTerminal, &\n& style="LEFT")\nCALL Display(Amat, "style=LEFT, Amat=")\n\n\nCALL BlankLines(nol=2)\nCALL SetDisplayProfile( &\n& DispProfile=DisplayProfileTerminal, &\n& style="ABOVE")\nCALL Display(Amat, "style=Above, Amat=")\n\n\nCALL BlankLines(nol=2)\nCALL SetDisplayProfile( &\n& DispProfile=DisplayProfileTerminal, &\n& style="PAD")\nCALL Display(Amat, "style=PAD, Amat=")\n\n\nCALL BlankLines(nol=2)\nCALL SetDisplayProfile( &\n& DispProfile=DisplayProfileTerminal, &\n& style="UNDERLINE")\nCALL Display(Amat, "style=UNDERLINE, Amat=")\n\n\nend program main\n'})}),"\n",(0,i.jsx)(n.h2,{id:"results",children:"results"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"        Default display, Amat=        \n--------------------------------------\n0.473240  0.794931  0.302510  0.015565\n0.616153  0.537996  0.672348  0.040016\n0.814727  0.157292  0.483702  0.836481\n0.405293  0.527994  0.218889  0.681952\n\n     DisplayProfileTerminal, Amat=    \n--------------------------------------\n0.473240  0.794931  0.302510  0.015565\n0.616153  0.537996  0.672348  0.040016\n0.814727  0.157292  0.483702  0.836481\n0.405293  0.527994  0.218889  0.681952\n \n \nstyle=LEFT, Amat=0.473240  0.794931  0.302510  0.015565\n                 0.616153  0.537996  0.672348  0.040016\n                 0.814727  0.157292  0.483702  0.836481\n                 0.405293  0.527994  0.218889  0.681952\n \n \n          style=Above, Amat=          \n0.473240  0.794931  0.302510  0.015565\n0.616153  0.537996  0.672348  0.040016\n0.814727  0.157292  0.483702  0.836481\n0.405293  0.527994  0.218889  0.681952\n \n \n-----------style=PAD, Amat=-----------\n0.473240  0.794931  0.302510  0.015565\n0.616153  0.537996  0.672348  0.040016\n0.814727  0.157292  0.483702  0.836481\n0.405293  0.527994  0.218889  0.681952\n \n \n        style=UNDERLINE, Amat=        \n--------------------------------------\n0.473240  0.794931  0.302510  0.015565\n0.616153  0.537996  0.672348  0.040016\n0.814727  0.157292  0.483702  0.836481\n0.405293  0.527994  0.218889  0.681952\n"})})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const c={},d="SetDisplayProfile",u={id:"Display_Method/SetDisplayProfile",title:"SetDisplayProfile",description:"This routine sets the display settings.",source:"@site/docs/docs-api/Display_Method/SetDisplayProfile.md",sourceDirName:"Display_Method",slug:"/Display_Method/SetDisplayProfile",permalink:"/docs-api/Display_Method/SetDisplayProfile",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Display_Method/SetDisplayProfile.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/Display_Method/Display"},next:{title:"DistributedVector",permalink:"/docs-api/DistributedVector/"}},p={},h=[{value:"Interface",id:"interface",level:2},{value:"DispProfile",id:"dispprofile",level:4},{value:"advance",id:"advance",level:4},{value:"digmax",id:"digmax",level:4},{value:"matsep",id:"matsep",level:4},{value:"orient",id:"orient",level:4},{value:"sep",id:"sep",level:4},{value:"style",id:"style",level:4},{value:"unit",id:"unit",level:4},{value:"zeroas",id:"zeroas",level:4}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"setdisplayprofile",children:"SetDisplayProfile"}),"\n",(0,i.jsx)(n.p,{children:"This routine sets the display settings."}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"SUBROUTINE setDisplayProfile(DispProfile, advance, digmax, &\n  & matsep, orient, sep, style, unit, zeroas)\n  TYPE(DISP_SETTINGS), INTENT(IN) :: DispProfile\n  CHARACTER(*), OPTIONAL, INTENT(IN) :: advance\n  INTEGER(I4B), OPTIONAL, INTENT(IN) :: digmax\n  CHARACTER(*), OPTIONAL, INTENT(IN) :: matsep\n  CHARACTER(*), OPTIONAL, INTENT(IN) :: orient\n  CHARACTER(*), OPTIONAL, INTENT(IN) :: sep\n  CHARACTER(*), OPTIONAL, INTENT(IN) :: style\n  INTEGER(I4B), OPTIONAL, INTENT(IN) :: unit\n  CHARACTER(*), OPTIONAL, INTENT(IN) :: zeroas\nEND SUBROUTINE setDisplayProfile\n"})})}),(0,i.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,i.jsx)(o,{})}),(0,i.jsx)(r.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,i.jsx)(n.h4,{id:"dispprofile",children:"DispProfile"}),"\n",(0,i.jsxs)(n.p,{children:["DispProfile is an instance of DISP_SETTINGS. You can pass following predefined global variables for ",(0,i.jsx)(n.code,{children:"DispProfile"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"DisplayProfileTerminal"}),"\n",(0,i.jsx)(n.li,{children:"DisplayProfilePrint"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"DisplayProfileTerminal",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'advance="YES"'}),"\n",(0,i.jsx)(n.li,{children:'matsep=","'}),"\n",(0,i.jsx)(n.li,{children:'orient="COL"'}),"\n",(0,i.jsx)(n.li,{children:'style="UNDERLINE"'}),"\n",(0,i.jsx)(n.li,{children:'trim="FALSE"'}),"\n",(0,i.jsx)(n.li,{children:'ZEROAS="."'}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{title:"DisplayProfilePrint",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'advance="YES"'}),"\n",(0,i.jsx)(n.li,{children:'matsep=","'}),"\n",(0,i.jsx)(n.li,{children:'orient="COL"'}),"\n",(0,i.jsx)(n.li,{children:'style="UNDERLINE"'}),"\n",(0,i.jsx)(n.li,{children:'trim="FALSE"'}),"\n",(0,i.jsx)(n.li,{children:'ZEROAS=""'}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"advance",children:"advance"}),"\n",(0,i.jsx)(n.p,{children:"It can take following values:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'"YES",  go to the next line.'}),"\n",(0,i.jsx)(n.li,{children:'"NO", stay on the same line.'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"digmax",children:"digmax"}),"\n",(0,i.jsx)(n.p,{children:"Number of significant digits to show."}),"\n",(0,i.jsx)(n.h4,{id:"matsep",children:"matsep"}),"\n",(0,i.jsx)(n.p,{children:"Character used for separating the elements of matrix."}),"\n",(0,i.jsx)(n.h4,{id:"orient",children:"orient"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'"ROW", display a vector as row.'}),"\n",(0,i.jsx)(n.li,{children:'"COL", display a vector as column.'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sep",children:"sep"}),"\n",(0,i.jsx)(n.p,{children:"String used to separate matrix columns."}),"\n",(0,i.jsx)(n.h4,{id:"style",children:"style"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'"LEFT", title is immediately to the left of the first line of the displayed item.'}),"\n",(0,i.jsx)(n.li,{children:'"ABOVE", title is centred immediately above the item'}),"\n",(0,i.jsx)(n.li,{children:'"PAD", title is centred above the item, padded with hyphens (-).'}),"\n",(0,i.jsx)(n.li,{children:'"UNDERLINE", title is centred above the item, underlined with hyphens.'}),"\n",(0,i.jsx)(n.li,{children:'"NUMBER", each matrix or vector row and / or column is numbered.'}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Any of the four title position styles can also be combined with the number style by specifying for\nexample STYLE = 'PAD & NUMBER'."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Any character except space may be used instead of hyphen\nby prefixing it to the style. STYLE = '*underline' will thus underline the title with asterisks."})}),"\n",(0,i.jsx)(n.h4,{id:"unit",children:"unit"}),"\n",(0,i.jsx)(n.p,{children:"Unit number of external file."}),"\n",(0,i.jsx)(n.h4,{id:"zeroas",children:"zeroas"}),"\n",(0,i.jsx)(n.p,{children:"String to display instead of zeros."})]})}function f(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(86010);const l={tabItem:"tabItem_Ymn6"};var a=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>A});var i=t(67294),l=t(86010),a=t(12466),r=t(16550),s=t(20469),o=t(91980),c=t(67392),d=t(50012);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,r.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=p(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:l}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,d.Nk)(t);return[l,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),x=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,a]),tabValues:a}}var y=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),l=s[t].value;l!==i&&(c(n),r(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,l.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function D(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,l.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function A(e){const n=(0,y.Z)();return(0,v.jsx)(D,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const l={},a=i.createContext(l);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);