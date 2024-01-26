"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49282],{3030:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>j,default:()=>b,frontMatter:()=>x,metadata:()=>o,toc:()=>p});var d=n(85893),r=n(11151),t=n(74866),i=n(85162);function l(e){const s={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nreal( DFP ), allocatable :: b( :, : )\n\n  b = RecursiveNode3D(order=0, ipType=Equidistance)\n  call Display(b, "b=")\n\n  b = RecursiveNode3D(order=1, ipType=Equidistance)\n  call Display(MdEncode(b), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode3D(order=2, ipType=Equidistance)\n  call Display(MdEncode(b), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode3D(order=3, ipType=Equidistance)\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.66667"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0.33333"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.66667"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.33333"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.66667"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.33333"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.66667"}),(0,d.jsx)(s.td,{children:"0.33333"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}function h(e){const s={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"This example is similar to example 3 but in this case we test domain."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nreal( DFP ), allocatable :: b( :, : )\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode3D(order=2, ipType=Equidistance, &\n    & domain="unit")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"x1"}),(0,d.jsx)(s.th,{children:"x2"}),(0,d.jsx)(s.th,{children:"x3"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode3D(order=2, ipType=Equidistance, &\n    & domain="biunit")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"x1"}),(0,d.jsx)(s.th,{children:"x2"}),(0,d.jsx)(s.th,{children:"x3"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"-1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"-1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"-1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-1"})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode3D(order=2, ipType=Equidistance, &\n    & domain="barycentric")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"b0"}),(0,d.jsx)(s.th,{children:"b1"}),(0,d.jsx)(s.th,{children:"b2"}),(0,d.jsx)(s.th,{children:"b3"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,d.jsx)(s.p,{children:'!!! note "Equilateral"'}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode3D(order=2, ipType=Equidistance, &\n    & domain="Equilateral")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,d.jsx)(s.p,{children:"b="}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"x1"}),(0,d.jsx)(s.th,{children:"x2"}),(0,d.jsx)(s.th,{children:"x3"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{children:"-0.57735"}),(0,d.jsx)(s.td,{children:"-0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-0.5"}),(0,d.jsx)(s.td,{children:"-0.28868"}),(0,d.jsx)(s.td,{children:"0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1.2247"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-0.5"}),(0,d.jsx)(s.td,{children:"0.28868"}),(0,d.jsx)(s.td,{children:"-0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"-5.55112E-17"}),(0,d.jsx)(s.td,{children:"0.57735"}),(0,d.jsx)(s.td,{children:"0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"1.1547"}),(0,d.jsx)(s.td,{children:"-0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"5.55112E-17"}),(0,d.jsx)(s.td,{children:"-0.57735"}),(0,d.jsx)(s.td,{children:"-0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"-0.28868"}),(0,d.jsx)(s.td,{children:"0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0.5"}),(0,d.jsx)(s.td,{children:"0.28868"}),(0,d.jsx)(s.td,{children:"-0.40825"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"-0.57735"}),(0,d.jsx)(s.td,{children:"-0.40825"})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}const x={},j="RecursiveNode3D",o={id:"RecursiveNodeUtility/RecursiveNode3D",title:"RecursiveNode3D",description:"Returns the barycentric coordinates of recursive nodes on a tetrahedron.",source:"@site/docs/docs-api/RecursiveNodeUtility/RecursiveNode3D.md",sourceDirName:"RecursiveNodeUtility",slug:"/RecursiveNodeUtility/RecursiveNode3D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode3D",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RecursiveNodeUtility/RecursiveNode3D.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RecursiveNode2D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode2D"},next:{title:"RefHexahedron",permalink:"/docs-api/RefHexahedron/"}},u={},p=[{value:"Interface",id:"interface",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const s={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"recursivenode3d",children:"RecursiveNode3D"}),"\n",(0,d.jsx)(s.p,{children:"Returns the barycentric coordinates of recursive nodes on a tetrahedron."}),"\n",(0,d.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION RecursiveNode3D(order, ipType, &\n    & domain) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n      !! order >= 0\n    INTEGER(I4B), INTENT(IN) :: ipType\n      !! interpolation point type\n      !! Equidistance\n      !! LobattoGaussJacobi\n      !! LobattoGaussChebyshev\n      !! LobattoGaussGegenbauer\n      !! GaussJacobi\n      !! GaussChebyshev\n      !! GaussGegenbauer\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n      !! barycentric coordinates, in xiJ format\n      !! size(ans,1) = 4 corresponding to b0, b1, b2, b3\n      !! size(ans,2) total number of points\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: domain\n      !! unit\n      !! Biunit\n      !! Equilateral\n  END FUNCTION RecursiveNode3D\nEND INTERFACE\n"})}),"\n",(0,d.jsx)(s.admonition,{type:"info",children:(0,d.jsx)(s.mdxAdmonitionTitle,{children:(0,d.jsx)(s.code,{children:"order"})})}),"\n",(0,d.jsx)(s.p,{children:"Order of element."}),"\n",(0,d.jsx)(s.admonition,{type:"info",children:(0,d.jsx)(s.mdxAdmonitionTitle,{children:(0,d.jsx)(s.code,{children:"ipType"})})}),"\n",(0,d.jsx)(s.p,{children:"Interpolation point type. Following values are allowed."}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Equidistance"}),"\n",(0,d.jsx)(s.li,{children:"GaussJacobi"}),"\n",(0,d.jsx)(s.li,{children:"GaussJacobiLobatto"}),"\n",(0,d.jsx)(s.li,{children:"GaussChebyshev"}),"\n",(0,d.jsx)(s.li,{children:"GaussChebyshevLobatto"}),"\n",(0,d.jsx)(s.li,{children:"GaussLegendre"}),"\n",(0,d.jsx)(s.li,{children:"GaussLegendreLobatto"}),"\n",(0,d.jsx)(s.li,{children:"GaussUltraspherical"}),"\n",(0,d.jsx)(s.li,{children:"GaussUltrasphericalLobatto"}),"\n"]}),"\n",(0,d.jsx)(s.admonition,{type:"info",children:(0,d.jsx)(s.mdxAdmonitionTitle,{children:(0,d.jsx)(s.code,{children:"domain"})})}),"\n",(0,d.jsx)(s.p,{children:"It specifies the domain of the element. It is an optional argument. It can take following values:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"UNIT"}),", unit segment ",(0,d.jsxs)(s.span,{className:"katex",children:[(0,d.jsx)(s.span,{className:"katex-mathml",children:(0,d.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,d.jsxs)(s.semantics,{children:[(0,d.jsxs)(s.mrow,{children:[(0,d.jsx)(s.mo,{stretchy:"false",children:"["}),(0,d.jsx)(s.mn,{children:"0"}),(0,d.jsx)(s.mo,{separator:"true",children:","}),(0,d.jsx)(s.mn,{children:"1"}),(0,d.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,d.jsx)(s.annotation,{encoding:"application/x-tex",children:"[0,1]"})]})})}),(0,d.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,d.jsxs)(s.span,{className:"base",children:[(0,d.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,d.jsx)(s.span,{className:"mopen",children:"["}),(0,d.jsx)(s.span,{className:"mord",children:"0"}),(0,d.jsx)(s.span,{className:"mpunct",children:","}),(0,d.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,d.jsx)(s.span,{className:"mord",children:"1"}),(0,d.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", in this case ",(0,d.jsx)(s.code,{children:"SIZE(ans,1)"})," is 3."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"BIUNIT"}),", biunit segment ",(0,d.jsxs)(s.span,{className:"katex",children:[(0,d.jsx)(s.span,{className:"katex-mathml",children:(0,d.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,d.jsxs)(s.semantics,{children:[(0,d.jsxs)(s.mrow,{children:[(0,d.jsx)(s.mo,{stretchy:"false",children:"["}),(0,d.jsx)(s.mo,{children:"\u2212"}),(0,d.jsx)(s.mn,{children:"1"}),(0,d.jsx)(s.mo,{separator:"true",children:","}),(0,d.jsx)(s.mn,{children:"1"}),(0,d.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,d.jsx)(s.annotation,{encoding:"application/x-tex",children:"[-1,1]"})]})})}),(0,d.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,d.jsxs)(s.span,{className:"base",children:[(0,d.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,d.jsx)(s.span,{className:"mopen",children:"["}),(0,d.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,d.jsx)(s.span,{className:"mord",children:"1"}),(0,d.jsx)(s.span,{className:"mpunct",children:","}),(0,d.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,d.jsx)(s.span,{className:"mord",children:"1"}),(0,d.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", in this case ",(0,d.jsx)(s.code,{children:"SIZE(ans, 1)"})," is 3."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"BARYCENTRIC"}),", in this case ",(0,d.jsx)(s.code,{children:"SIZE(ans,1)"})," is 4. This is also the default value."]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsxs)(t.Z,{children:[(0,d.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 Example",children:(0,d.jsx)(c,{})}),(0,d.jsx)(i.Z,{value:"example2",label:"Example 2",children:(0,d.jsx)(a,{})}),(0,d.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function b(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>i});n(67294);var d=n(86010);const r={tabItem:"tabItem_Ymn6"};var t=n(85893);function i(e){let{children:s,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,d.Z)(r.tabItem,i),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>g});var d=n(67294),r=n(86010),t=n(12466),i=n(16550),l=n(20469),c=n(91980),h=n(67392),a=n(50012);function x(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:s,children:n}=e;return(0,d.useMemo)((()=>{const e=s??function(e){return x(e).map((e=>{let{props:{value:s,label:n,attributes:d,default:r}}=e;return{value:s,label:n,attributes:d,default:r}}))}(n);return function(e){const s=(0,h.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function o(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function u(e){let{queryString:s=!1,groupId:n}=e;const r=(0,i.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(t),(0,d.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,t=j(e),[i,c]=(0,d.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!o({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const d=n.find((e=>e.default))??n[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:s,tabValues:t}))),[h,x]=u({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,a.Nk)(n);return[r,(0,d.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),b=(()=>{const e=h??p;return o({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,d.useCallback)((e=>{if(!o({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),x(e),m(e)}),[x,m,t]),tabValues:t}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function N(e){let{className:s,block:n,selectedValue:d,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,t.o5)(),a=e=>{const s=e.currentTarget,n=c.indexOf(s),r=l[n].value;r!==d&&(h(s),i(r))},x=e=>{let s=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:d===s?0:-1,"aria-selected":d===s,ref:e=>c.push(e),onKeyDown:x,onClick:a,...t,className:(0,r.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":d===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,d.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=p(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(N,{...e,...s}),(0,f.jsx)(v,{...e,...s})]})}function g(e){const s=(0,m.Z)();return(0,f.jsx)(y,{...e,children:x(e.children)},String(s))}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var d=n(67294);const r={},t=d.createContext(r);function i(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);