"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[88210],{40806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>x,default:()=>m,frontMatter:()=>o,metadata:()=>j,toc:()=>p});var r=n(85893),s=n(11151),d=n(74866),i=n(85162);function l(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nBLOCK\nREAL( Real32 ) :: A( 4, 4 )\nCALL RANDOM_NUMBER(A); A = A*10\nCALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)\nCALL Display(MdEncode(Triu(A,diagNo=0)), "(3,3) diagNo=0, = " // CHAR_LF // CHAR_LF )\nCALL Display(MdEncode(Triu(A,diagNo=1)), "(3,3) diagNo=1, = " // CHAR_LF  // CHAR_LF)\nCALL Display(MdEncode(Triu(A,diagNo=2)), "(3,3) diagNo=2, = " // CHAR_LF // CHAR_LF )\nEND BLOCK\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t.p,{children:"A ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"7.4672"}),(0,r.jsx)(t.td,{children:"7.2656"}),(0,r.jsx)(t.td,{children:"2.6319"}),(0,r.jsx)(t.td,{children:"7.4388"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3.3308"}),(0,r.jsx)(t.td,{children:"4.4818"}),(0,r.jsx)(t.td,{children:"8.0987"}),(0,r.jsx)(t.td,{children:"7.1544"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5.7006"}),(0,r.jsx)(t.td,{children:"8.3514"}),(0,r.jsx)(t.td,{children:"2.9005"}),(0,r.jsx)(t.td,{children:"6.3054"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2.1553"}),(0,r.jsx)(t.td,{children:"7.2467"}),(0,r.jsx)(t.td,{children:"4.8848"}),(0,r.jsx)(t.td,{children:"6.7111"})]})]})]}),(0,r.jsx)(t.p,{children:"(3,3) diagNo=0, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"7.4672"}),(0,r.jsx)(t.td,{children:"7.2656"}),(0,r.jsx)(t.td,{children:"2.6319"}),(0,r.jsx)(t.td,{children:"7.4388"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"4.4818"}),(0,r.jsx)(t.td,{children:"8.0987"}),(0,r.jsx)(t.td,{children:"7.1544"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.9005"}),(0,r.jsx)(t.td,{children:"6.3054"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.7111"})]})]})]}),(0,r.jsx)(t.p,{children:"(3,3) diagNo=1, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"7.2656"}),(0,r.jsx)(t.td,{children:"2.6319"}),(0,r.jsx)(t.td,{children:"7.4388"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"8.0987"}),(0,r.jsx)(t.td,{children:"7.1544"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.3054"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]})]})]}),(0,r.jsx)(t.p,{children:"(3,3) diagNo=2, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.6319"}),(0,r.jsx)(t.td,{children:"7.4388"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"7.1544"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Let's get the upper triangular form above Subdiagonals."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'BLOCK\nREAL( Real32 ) :: A( 4, 4 )\nCALL RANDOM_NUMBER(A); A = A*10\n\nCALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)\nCALL Display(MdEncode(Triu(A,diagNo=-1)), "(3,3) diagNo=-1, = " // CHAR_LF  // CHAR_LF)\nCALL Display(MdEncode(Triu(A,diagNo=-2)), "(3,3) diagNo=-2, = " // CHAR_LF // CHAR_LF )\nEND BLOCK\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t.p,{children:"(3,3) diagNo=-1, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3.5096"}),(0,r.jsx)(t.td,{children:"8.8744"}),(0,r.jsx)(t.td,{children:"1.7549"}),(0,r.jsx)(t.td,{children:"1.5576"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"8.661"}),(0,r.jsx)(t.td,{children:"7.3655"}),(0,r.jsx)(t.td,{children:"2.6134"}),(0,r.jsx)(t.td,{children:"9.767"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"9.788"}),(0,r.jsx)(t.td,{children:"1.4703"}),(0,r.jsx)(t.td,{children:"3.3602"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"8.0666"}),(0,r.jsx)(t.td,{children:"1.1451"})]})]})]}),(0,r.jsx)(t.p,{children:"(3,3) diagNo=-2, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3.5096"}),(0,r.jsx)(t.td,{children:"8.8744"}),(0,r.jsx)(t.td,{children:"1.7549"}),(0,r.jsx)(t.td,{children:"1.5576"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"8.661"}),(0,r.jsx)(t.td,{children:"7.3655"}),(0,r.jsx)(t.td,{children:"2.6134"}),(0,r.jsx)(t.td,{children:"9.767"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6.0823"}),(0,r.jsx)(t.td,{children:"9.788"}),(0,r.jsx)(t.td,{children:"1.4703"}),(0,r.jsx)(t.td,{children:"3.3602"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"4.1367"}),(0,r.jsx)(t.td,{children:"8.0666"}),(0,r.jsx)(t.td,{children:"1.1451"})]})]})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function c(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nREAL( Real32 ) :: A( 4, 4 )\nCALL RANDOM_NUMBER(A); A = A*10\n\nCALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)\nCALL Display(MdEncode(Triu(A, flate=.TRUE., diagNo=0)), "diagNo=0, = " // CHAR_LF // CHAR_LF )\nCALL Display(MdEncode(Triu(A, flate=.TRUE., diagNo=1)), "diagNo=1, = " // CHAR_LF  // CHAR_LF)\nCALL Display(MdEncode(Triu(A, flate=.TRUE., diagNo=2)), "diagNo=2, = " // CHAR_LF // CHAR_LF )\n\nend program main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t.p,{children:"A ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.99172"}),(0,r.jsx)(t.td,{children:"0.2666"}),(0,r.jsx)(t.td,{children:"4.3266"}),(0,r.jsx)(t.td,{children:"5.4603"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2.5813"}),(0,r.jsx)(t.td,{children:"0.14775"}),(0,r.jsx)(t.td,{children:"1.7741"}),(0,r.jsx)(t.td,{children:"5.3106"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.9852"}),(0,r.jsx)(t.td,{children:"5.8142"}),(0,r.jsx)(t.td,{children:"4.8581"}),(0,r.jsx)(t.td,{children:"9.2279"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.4559"}),(0,r.jsx)(t.td,{children:"7.9147"}),(0,r.jsx)(t.td,{children:"7.84"}),(0,r.jsx)(t.td,{children:"9.2751"})]})]})]}),(0,r.jsx)(t.p,{children:"diagNo=0, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.99172"}),(0,r.jsx)(t.td,{children:"0.14775"}),(0,r.jsx)(t.td,{children:"4.8581"}),(0,r.jsx)(t.td,{children:"9.2751"}),(0,r.jsx)(t.td,{children:"0.2666"}),(0,r.jsx)(t.td,{children:"1.7741"}),(0,r.jsx)(t.td,{children:"9.2279"}),(0,r.jsx)(t.td,{children:"4.3266"}),(0,r.jsx)(t.td,{children:"5.3106"}),(0,r.jsx)(t.td,{children:"5.4603"})]})})]}),(0,r.jsx)(t.p,{children:"diagNo=1, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.2666"}),(0,r.jsx)(t.td,{children:"1.7741"}),(0,r.jsx)(t.td,{children:"9.2279"}),(0,r.jsx)(t.td,{children:"4.3266"}),(0,r.jsx)(t.td,{children:"5.3106"}),(0,r.jsx)(t.td,{children:"5.4603"})]})})]}),(0,r.jsx)(t.p,{children:"diagNo=2, ="}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4.3266"}),(0,r.jsx)(t.td,{children:"5.3106"}),(0,r.jsx)(t.td,{children:"5.4603"})]})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const o={},x="Triu",j={id:"TriagUtility/Triu",title:"Triu",description:"This function returns the upper triangle part of a matrix.",source:"@site/docs/docs-api/TriagUtility/Triu.md",sourceDirName:"TriagUtility",slug:"/TriagUtility/Triu",permalink:"/docs-api/TriagUtility/Triu",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TriagUtility/Triu.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TrilIndx",permalink:"/docs-api/TriagUtility/TrilIndx"},next:{title:"TriuIndx",permalink:"/docs-api/TriagUtility/TriuIndx"}},u={},p=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"triu",children:"Triu"}),"\n",(0,r.jsx)(t.p,{children:"This function returns the upper triangle part of a matrix."}),"\n",(0,r.jsx)(t.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION Triu(A, diagNo) RESULT(ans)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo\n    !! diagonal number, default = 0\n    !! diagNo>0 means super diagonal\n    !! diagNo<0 means subdiagonal\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64) :: ans(SIZE(A, 1), SIZE(A, 2))\n  END FUNCTION Triu\n"})})}),(0,r.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(a,{})}),(0,r.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(t.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"MODULE PURE FUNCTION Triu_12(A, flate, diagNo) RESULT(ans)\n  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)\n  LOGICAL(LGT), INTENT(IN) :: flate\n  !! This variable is only for creating unique interface\n  INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo\n    !! diagonal number, default = 0\n    !! diagNo>0 means super diagonal\n    !! diagNo<0 means subdiagonal\n  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE :: ans(:)\nEND FUNCTION Triu_12\n"})}),(0,r.jsxs)(t.p,{children:["In this case the upper triangular part is returned in flat form. That is, the first ",(0,r.jsx)(t.code,{children:"n"})," entries of ",(0,r.jsx)(t.code,{children:"ans"})," denotes the main diagonal. Then next ",(0,r.jsx)(t.code,{children:"n-1"})," entries denotes first super-diagonal, and so on."]})]}),(0,r.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(h,{})}),(0,r.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(86010);const s={tabItem:"tabItem_Ymn6"};var d=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),s=n(86010),d=n(12466),i=n(16550),l=n(20469),a=n(91980),c=n(67392),h=n(50012);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),d=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(d),(0,r.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,d=x(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:d}))),[c,o]=u({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,h.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&d.set(e)}),[n,d])]}({groupId:s}),m=(()=>{const e=c??p;return j({value:e,tabValues:d})?e:null})();(0,l.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),f(e)}),[o,f,d]),tabValues:d}}var f=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.o5)(),h=e=>{const t=e.currentTarget,n=a.indexOf(t),s=l[n].value;s!==r&&(c(t),i(s))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:o,onClick:h,...d,className:(0,s.Z)("tabs__item",m.tabItem,d?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:s}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=d.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function N(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(A,{...e,...t})]})}function T(e){const t=(0,f.Z)();return(0,b.jsx)(N,{...e,children:o(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);