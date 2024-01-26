"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75884],{97845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>I,metadata:()=>E,toc:()=>T});var r=t(85893),a=t(11151),s=t(74866),l=t(85162);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nreal(dfp) :: mat(4,4)\n\nCALL Assert( &\n  & mat=mat, &\n  & s=[4,4], &\n  & msg="shape of mat is not same as [4,4]", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nCALL Assert( &\n  & mat=mat, &\n  & s=[5,5], &\n  & msg="shape of mat is not same as [5,5]", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nend program main\n'})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function c(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nreal(dfp) :: mat(4,4,2)\n\nCALL Assert( &\n  & mat=mat, &\n  & s=[4,4,2], &\n  & msg="shape of mat is not same as [4,4,2]", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nCALL Assert( &\n  & mat=mat, &\n  & s=[5,5,2], &\n  & msg="shape of mat is not same as [5,5,2]", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nend program main\n'})})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function d(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nreal(dfp) :: mat(4,4,2,2)\n\nCALL Assert( &\n  & mat=mat, &\n  & s=[4,4,2,2], &\n  & msg="shape of mat is not same as [4,4,2,2]", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nCALL Assert( &\n  & mat=mat, &\n  & s=[5,5,2,2], &\n  & msg="shape of mat is not same as [5,5,2,2]", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nend program main\n'})})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function f(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nCALL Assert( &\n  & n1 = 1, n2 = 2, &\n  & msg="n1 and n2 are not same", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nCALL Assert( &\n  & n1 = 1, n2 = 1, n3=1, &\n  & msg="n1, n2, n3 are not same", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nCALL Assert( &\n  & n1 = 1, n2 = 1, n3=1, n4=1, &\n  & msg="n1, n2, n3, n4 are not same", &\n  & line=__LINE__, &\n  & file=__FILE__, &\n  & routine="main()")\n\nend program main\n'})})}function N(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}const I={},p="Assert",E={id:"AssertUtility/Assert",title:"Assert",description:"Assertion related methods.",source:"@site/docs/docs-api/AssertUtility/Assert.md",sourceDirName:"AssertUtility",slug:"/AssertUtility/Assert",permalink:"/docs-api/AssertUtility/Assert",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AssertUtility/Assert.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AssertUtility",permalink:"/docs-api/AssertUtility/"},next:{title:"BLAS95",permalink:"/docs-api/BLAS95/"}},h={},T=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"assert",children:"Assert"}),"\n",(0,r.jsx)(n.p,{children:"Assertion related methods."}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE Assert(Mat, s, msg, file, line, routine)\n    REAL(DFP), INTENT(IN) :: Mat(:, :)\n    INTEGER(I4B), INTENT(IN) :: s(2)\n    INTEGER(I4B), INTENT(IN) :: line\n    CHARACTER(*), INTENT(IN) :: msg, file, routine\n  END SUBROUTINE\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["If shape of ",(0,r.jsx)(n.code,{children:"Mat"})," is not same as ",(0,r.jsx)(n.code,{children:"s"}),", then this routine prints error and stop program."]})]}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Assert(Mat, s, msg, file, line, routine)\n    REAL(DFP), INTENT(IN) :: Mat(:, :, :)\n    INTEGER(I4B), INTENT(IN) :: s(3)\n    INTEGER(I4B), INTENT(IN) :: line\n    CHARACTER(*), INTENT(IN) :: msg, file, routine\n  END SUBROUTINE\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(u,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Assert(Mat, s, msg, file, line, routine)\n    REAL(DFP), INTENT(IN) :: Mat(:, :, :, :)\n    INTEGER(I4B), INTENT(IN) :: s(4)\n    INTEGER(I4B), INTENT(IN) :: line\n    CHARACTER(*), INTENT(IN) :: msg, file, routine\n  END SUBROUTINE\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(m,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE Assert(n1, n2, msg, file, line, routine)\n  INTEGER(I4B), INTENT(IN) :: n1, n2\n  INTEGER(I4B), INTENT(IN) :: line\n  CHARACTER(*), INTENT(IN) :: msg, file, routine\nEND SUBROUTINE Assert\n"})})}),(0,r.jsx)(l.Z,{value:"interface2",label:"\u0700 Interface",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE Assert(n1, n2, n3, msg, file, line, routine)\n    INTEGER(I4B), INTENT(IN) :: n1, n2, n3\n    INTEGER(I4B), INTENT(IN) :: line\n    CHARACTER(*), INTENT(IN) :: msg, file, routine\n  END SUBROUTINE Assert\n"})})}),(0,r.jsx)(l.Z,{value:"interface3",label:"\u0700 Interface",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE Assert(n1, n2, n3, n4, msg, file, line, routine)\n    INTEGER(I4B), INTENT(IN) :: n1, n2, n3, n4\n    INTEGER(I4B), INTENT(IN) :: line\n    CHARACTER(*), INTENT(IN) :: msg, file, routine\n  END SUBROUTINE Assert\n"})})}),(0,r.jsx)(l.Z,{value:"interface4",label:"\u0700 interface",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE Assert(nn, msg, file, line, routine)\n    INTEGER(I4B), DIMENSION(:), INTENT(IN) :: nn\n    INTEGER(I4B), INTENT(IN) :: line\n    CHARACTER(*), INTENT(IN) :: msg, file, routine\n  END SUBROUTINE Assert\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(N,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),a=t(86010),s=t(12466),l=t(16550),i=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function N(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function I(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=N({queryString:t,groupId:a}),[I,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),E=(()=>{const e=c??I;return f({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{E&&o(E)}),[E]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=t(72389);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=t(85893);function T(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,h.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",E.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=I(e);return(0,h.jsxs)("div",{className:(0,a.Z)("tabs-container",E.tabList),children:[(0,h.jsx)(T,{...e,...n}),(0,h.jsx)(x,{...e,...n})]})}function _(e){const n=(0,p.Z)();return(0,h.jsx)(g,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);