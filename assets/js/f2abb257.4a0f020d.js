"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[36634],{77870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>T,contentTitle:()=>f,default:()=>x,frontMatter:()=>g,metadata:()=>N,toc:()=>y});var t=r(85893),i=r(11151),l=r(74866),a=r(85162);function o(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\ntype(ReferenceQuadrangle_) :: refelem\ncall initiate(obj=refelem, nsd=2)\ncall display(refelem, "ans: ")\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"ans: \n\n# ElemType : Quadrangle4\n# XiDimension :: 2\n# NSD : 2\n# Order : 1\n# EntityCounts(0) : 4\n# EntityCounts(1) : 4\n# EntityCounts(2) : 1\n# EntityCounts(3) : 0\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    0.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n    0.00000   \n# Node( 3 ) : \n--------------\n   1.00000    \n   1.00000    \n   0.00000    \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n    0.00000   \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n# Topology( 6 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n# Topology( 7 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n# Topology( 8 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    1     \n# Topology( 9 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    2     \n    3     \n    4     \n"})})})]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function c(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\ntype(ReferenceQuadrangle_) :: refelem\nrefelem = ReferenceQuadrangle(nsd=2)\ncall display(refelem, "ans: ")\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"ans: \n\n# ElemType : Quadrangle4\n# XiDimension :: 2\n# NSD : 2\n# Order : 1\n# EntityCounts(0) : 4\n# EntityCounts(1) : 4\n# EntityCounts(2) : 1\n# EntityCounts(3) : 0\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    0.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n    0.00000   \n# Node( 3 ) : \n--------------\n   1.00000    \n   1.00000    \n   0.00000    \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n    0.00000   \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n# Topology( 6 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n# Topology( 7 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n# Topology( 8 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    1     \n# Topology( 9 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    2     \n    3     \n    4     \n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nclass(ReferenceElement_), pointer :: refelem\nrefelem => ReferenceQuadrangle_Pointer(nsd=2)\ncall display(refelem, "ans: ")\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"ans: \n\n# ElemType : Quadrangle4\n# XiDimension :: 2\n# NSD : 2\n# Order : 1\n# EntityCounts(0) : 4\n# EntityCounts(1) : 4\n# EntityCounts(2) : 1\n# EntityCounts(3) : 0\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    0.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n    0.00000   \n# Node( 3 ) : \n--------------\n   1.00000    \n   1.00000    \n   0.00000    \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n    0.00000   \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n# Topology( 6 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n# Topology( 7 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n# Topology( 8 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    1     \n# Topology( 9 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    2     \n    3     \n    4     \n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function m(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifemBase\n  class( ReferenceElement_ ), pointer :: refelem => null()\n  type( ReferenceQuadrangle_ ) :: highorder_elem\n  refelem => referenceQuadrangle_pointer( nsd = 2 )\n\n  call refelem%highOrderElement( order = 2, Highorderobj = highorder_elem, ipType=Equidistance)\n  call display( highorder_elem, "higher order highorder_elem : ")\n\n  !call refelem%LagrangeElement( order = 3, Highorderobj = highorder_elem )\n  !call display( highorder_elem, "3rd order highorder_elem : ")\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"higher order highorder_elem :"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"# ElemType : Quadrangle9\n# XiDimension :: 2\n# NSD : 2\n# Order : 2\n# EntityCounts(0) : 9\n# EntityCounts(1) : 4\n# EntityCounts(2) : 1\n# EntityCounts(3) : 0\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    0.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n    0.00000   \n# Node( 3 ) : \n--------------\n   1.00000    \n   1.00000    \n   0.00000    \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n    0.00000   \n# Node( 5 ) : \n--------------\n    0.00000   \n   -1.00000   \n    0.00000   \n# Node( 6 ) : \n--------------\n   1.00000    \n   0.00000    \n   0.00000    \n# Node( 7 ) : \n--------------\n   0.00000    \n   1.00000    \n   0.00000    \n# Node( 8 ) : \n--------------\n   -1.00000   \n    0.00000   \n    0.00000   \n# Node( 9 ) : \n--------------\n   0.00000    \n   0.00000    \n   0.00000    \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    5     \n# Topology( 6 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    6     \n# Topology( 7 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    7     \n# Topology( 8 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    8     \n# Topology( 9 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    9     \n# Topology( 10 ) : \n# ElemType : Line3\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n    5     \n# Topology( 11 ) : \n# ElemType : Line3\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n    6     \n# Topology( 12 ) : \n# ElemType : Line3\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n    7     \n# Topology( 13 ) : \n# ElemType : Line3\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    1     \n    8     \n# Topology( 14 ) : \n# ElemType : Quadrangle9\n# XiDim : 2\n# Nptrs : \n1\n2\n3\n4\n.\n.\n.\n6\n7\n8\n9\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}const g={},f="Initiate",N={id:"ReferenceQuadrangle/Initiate",title:"Initiate",description:"This routine initiate an instance of Quadrangle element.",source:"@site/docs/docs-api/ReferenceQuadrangle/Initiate.md",sourceDirName:"ReferenceQuadrangle",slug:"/ReferenceQuadrangle/Initiate",permalink:"/docs-api/ReferenceQuadrangle/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceQuadrangle/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ReferenceQuadrangle",permalink:"/docs-api/ReferenceQuadrangle/"},next:{title:"Measure_Simplex_Quadrangle",permalink:"/docs-api/ReferenceQuadrangle/Measure_Simplex_Quadrangle"}},T={},y=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2 (ReferenceQuadrangle)",id:"interface-2-referencequadrangle",level:2},{value:"Interface 3 (ReferenceQuadrangle_Pointer)",id:"interface-3-referencequadrangle_pointer",level:2},{value:"Getting higher order element",id:"getting-higher-order-element",level:2}];function E(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,t.jsx)(n.p,{children:"This routine initiate an instance of Quadrangle element."}),"\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(a.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE Initiate\n  MODULE SUBROUTINE initiate_ref_Quadrangle(obj, NSD, xij)\n    CLASS(ReferenceQuadrangle_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: NSD\n    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)\n  END SUBROUTINE initiate_ref_Quadrangle\nEND INTERFACE Initiate\n"})})}),(0,t.jsx)(a.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(s,{})}),(0,t.jsx)(a.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2-referencequadrangle",children:"Interface 2 (ReferenceQuadrangle)"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(a.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE ReferenceQuadrangle\n  MODULE FUNCTION reference_Quadrangle(NSD, xij) RESULT(obj)\n    INTEGER(I4B), INTENT(IN) :: NSD\n    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)\n    TYPE(ReferenceQuadrangle_) :: obj\n  END FUNCTION reference_Quadrangle\nEND INTERFACE ReferenceQuadrangle\n"})}),(0,t.jsx)(n.p,{children:"This function retuns an instance of linear quadrangle element."})]}),(0,t.jsx)(a.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(d,{})}),(0,t.jsx)(a.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-3-referencequadrangle_pointer",children:"Interface 3 (ReferenceQuadrangle_Pointer)"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(a.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE ReferenceQuadrangle_Pointer\n  MODULE FUNCTION reference_Quadrangle_Pointer(NSD, xij) RESULT(obj)\n    INTEGER(I4B), INTENT(IN) :: NSD\n    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)\n    CLASS(ReferenceQuadrangle_), POINTER :: obj\n  END FUNCTION reference_Quadrangle_Pointer\nEND INTERFACE ReferenceQuadrangle_Pointer\n"})}),(0,t.jsx)(n.p,{children:"This function returns pointer to newly created linear quadrangle elements."})]}),(0,t.jsx)(a.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(p,{})}),(0,t.jsx)(a.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"getting-higher-order-element",children:"Getting higher order element"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(a.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,t.jsx)(n.p,{children:"This routine returns the higher order quadrangle element."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE highorderElement_Quadrangle(refelem, order, obj, &\n    & ipType)\n    CLASS(ReferenceElement_), INTENT(IN) :: refelem\n    INTEGER(I4B), INTENT(IN) :: order\n    CLASS(ReferenceElement_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: ipType\n  END SUBROUTINE highorderElement_Quadrangle\nEND INTERFACE\n"})}),(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"ipType"})}),(0,t.jsx)(n.p,{children:"Interpolation point type. It can take following values:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Equidistance"}),"\n",(0,t.jsx)(n.li,{children:"GaussLegendreLobatto"}),"\n",(0,t.jsx)(n.li,{children:"GaussChebyshevLobatto"}),"\n",(0,t.jsx)(n.li,{children:"GaussJacobiLobatto"}),"\n",(0,t.jsx)(n.li,{children:"GaussUltrasphericalLobatto"}),"\n",(0,t.jsx)(n.li,{children:"GaussLegendre"}),"\n",(0,t.jsx)(n.li,{children:"GaussChebyshev"}),"\n",(0,t.jsx)(n.li,{children:"GaussUltrasphericalLobatto"}),"\n",(0,t.jsx)(n.li,{children:"GaussJacobi"}),"\n"]})]})]}),(0,t.jsx)(a.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(h,{})}),(0,t.jsx)(a.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>a});r(67294);var t=r(86010);const i={tabItem:"tabItem_Ymn6"};var l=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,a),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>j});var t=r(67294),i=r(86010),l=r(12466),a=r(16550),o=r(20469),s=r(91980),c=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const i=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,l=p(e),[a,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=h({queryString:r,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Nk)(r);return[i,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:i}),N=(()=>{const e=c??g;return m({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{N&&s(N)}),[N]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=r(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=r(85893);function y(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=s.indexOf(n),i=o[r].value;i!==t&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...l,className:(0,i.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function E(e){let{lazy:n,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function x(e){const n=g(e);return(0,T.jsxs)("div",{className:(0,i.Z)("tabs-container",N.tabList),children:[(0,T.jsx)(y,{...e,...n}),(0,T.jsx)(E,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,T.jsx)(x,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(67294);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);