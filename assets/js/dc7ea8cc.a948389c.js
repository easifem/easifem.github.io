"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12405],{38445:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>o,metadata:()=>p,toc:()=>b});var r=n(85893),d=n(11151),t=n(74866),i=n(85162);function l(e){const s={code:"code",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["In this example ",(0,r.jsx)(s.code,{children:"ipType=Equidistance"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nreal( DFP ), allocatable :: b( :, : )\ninteger(i4b) :: iptype = Equidistance\n\n  b = RecursiveNode2D(order=0, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"0.33333"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"0.33333"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"0.33333"})})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=1, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=2, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=3, ipType=ipType)\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.66667"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.66667"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function c(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function a(e){const s={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"This example is similar to example 2, but in this case we test domain option."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nreal( DFP ), allocatable :: b( :, : )\n  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="Unit")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"x1"}),(0,r.jsx)(s.th,{children:"x2"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.66667"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.66667"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="biunit")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"x1"}),(0,r.jsx)(s.th,{children:"x2"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"-1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"-0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-0.33333"}),(0,r.jsx)(s.td,{children:"-1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-0.33333"}),(0,r.jsx)(s.td,{children:"-0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"-1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"-0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"-1"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="barycentric")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"b0"}),(0,r.jsx)(s.th,{children:"b1"}),(0,r.jsx)(s.th,{children:"b2"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.66667"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.66667"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="Equilateral")\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"x1"}),(0,r.jsx)(s.th,{children:"x2"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"-0.57735"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-0.66667"}),(0,r.jsx)(s.td,{children:"9.61481E-17"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-0.33333"}),(0,r.jsx)(s.td,{children:"0.57735"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1.11022E-16"}),(0,r.jsx)(s.td,{children:"1.1547"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-0.33333"}),(0,r.jsx)(s.td,{children:"-0.57735"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.57735"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"-0.57735"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.66667"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"-0.57735"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function x(e){const s={code:"code",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["In this example ",(0,r.jsx)(s.code,{children:"ipType=GaussLegendreLobatto"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nreal( DFP ), allocatable :: b( :, : )\ninteger(i4b) :: iptype = GaussLegendreLobatto\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=0, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"0.33333"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"0.33333"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"0.33333"})})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=1, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=2, ipType=ipType)\n  call Display(MdEncode(b), "b="//char_lf)\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"8.32667E-17"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"8.32667E-17"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"8.32667E-17"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"8.32667E-17"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"8.32667E-17"}),(0,r.jsx)(s.td,{children:"0.5"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"8.32667E-17"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'  b = RecursiveNode2D(order=3, ipType=ipType)\n  call Display(MdEncode(transpose(b)), "b=")\n'})}),"\n",(0,r.jsx)(s.p,{children:"b="}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-8.32667E-17"}),(0,r.jsx)(s.td,{children:"-8.32667E-17"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4.01682E-17"}),(0,r.jsx)(s.td,{children:"0.27639"}),(0,r.jsx)(s.td,{children:"0.72361"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4.01682E-17"}),(0,r.jsx)(s.td,{children:"0.72361"}),(0,r.jsx)(s.td,{children:"0.27639"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-8.32667E-17"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"-8.32667E-17"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.27639"}),(0,r.jsx)(s.td,{children:"4.01682E-17"}),(0,r.jsx)(s.td,{children:"0.72361"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"}),(0,r.jsx)(s.td,{children:"0.33333"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.27639"}),(0,r.jsx)(s.td,{children:"0.72361"}),(0,r.jsx)(s.td,{children:"4.01682E-17"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.72361"}),(0,r.jsx)(s.td,{children:"4.01682E-17"}),(0,r.jsx)(s.td,{children:"0.27639"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0.72361"}),(0,r.jsx)(s.td,{children:"0.27639"}),(0,r.jsx)(s.td,{children:"4.01682E-17"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"-8.32667E-17"}),(0,r.jsx)(s.td,{children:"-8.32667E-17"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function j(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}const o={},u="RecursiveNode2D",p={id:"RecursiveNodeUtility/RecursiveNode2D",title:"RecursiveNode2D",description:"Returns the barycentric coordinates of recursive nodes on the triangle.",source:"@site/docs/docs-api/RecursiveNodeUtility/RecursiveNode2D.md",sourceDirName:"RecursiveNodeUtility",slug:"/RecursiveNodeUtility/RecursiveNode2D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode2D",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RecursiveNodeUtility/RecursiveNode2D.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RecursiveNode1D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode1D"},next:{title:"RecursiveNode3D",permalink:"/docs-api/RecursiveNodeUtility/RecursiveNode3D"}},m={},b=[{value:"Interface",id:"interface",level:2},{value:"Examples",id:"examples",level:2}];function f(e){const s={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"recursivenode2d",children:"RecursiveNode2D"}),"\n",(0,r.jsx)(s.p,{children:"Returns the barycentric coordinates of recursive nodes on the triangle."}),"\n",(0,r.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION RecursiveNode2D(order, ipType, domain) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n      !! order >= 0\n    INTEGER(I4B), INTENT(IN) :: ipType\n      !! interpolation point type\n      !! Equidistance\n      !! LobattoGaussJacobi\n      !! LobattoGaussChebyshev\n      !! LobattoGaussGegenbauer\n      !! GaussJacobi\n      !! GaussChebyshev\n      !! GaussGegenbauer\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n      !! barycentric coordinates, in xiJ format\n      !! size(ans,1) = 3 corresponding to b0, b1, b2\n      !! size(ans,2) total number of points\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: domain\n      !! unit\n      !! Biunit\n      !! Equilateral\n  END FUNCTION RecursiveNode2D\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.mdxAdmonitionTitle,{children:(0,r.jsx)(s.code,{children:"order"})})}),"\n",(0,r.jsx)(s.p,{children:"Order of element."}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.mdxAdmonitionTitle,{children:(0,r.jsx)(s.code,{children:"ipType"})})}),"\n",(0,r.jsx)(s.p,{children:"Interpolation point type. Following values are allowed."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Equidistance"}),"\n",(0,r.jsx)(s.li,{children:"GaussJacobi"}),"\n",(0,r.jsx)(s.li,{children:"GaussJacobiLobatto"}),"\n",(0,r.jsx)(s.li,{children:"GaussChebyshev"}),"\n",(0,r.jsx)(s.li,{children:"GaussChebyshevLobatto"}),"\n",(0,r.jsx)(s.li,{children:"GaussLegendre"}),"\n",(0,r.jsx)(s.li,{children:"GaussLegendreLobatto"}),"\n",(0,r.jsx)(s.li,{children:"GaussUltraspherical"}),"\n",(0,r.jsx)(s.li,{children:"GaussUltrasphericalLobatto"}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.mdxAdmonitionTitle,{children:(0,r.jsx)(s.code,{children:"domain"})})}),"\n",(0,r.jsx)(s.p,{children:"It specifies the domain of the element. It is an optional argument. It can take following values:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"UNIT"}),", unit segment ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mn,{children:"0"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"[0,1]"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord",children:"0"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", in this case ",(0,r.jsx)(s.code,{children:"SIZE(ans,1)"})," is 2."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"BIUNIT"}),", biunit segment ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mo,{children:"\u2212"}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"[-1,1]"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", in this case ",(0,r.jsx)(s.code,{children:"SIZE(ans, 1)"})," is 2."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"BARYCENTRIC"}),", in this case ",(0,r.jsx)(s.code,{children:"SIZE(ans,1)"})," is 3. This is also the default value."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 Example 1",children:(0,r.jsx)(c,{})}),(0,r.jsxs)(i.Z,{value:"example2",label:"Example 2",children:[(0,r.jsx)(h,{}),(0,r.jsx)(i.Z,{value:"example3",label:"Example 3",children:(0,r.jsx)(j,{})})]}),(0,r.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function N(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>i});n(67294);var r=n(86010);const d={tabItem:"tabItem_Ymn6"};var t=n(85893);function i(e){let{children:s,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(d.tabItem,i),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>g});var r=n(67294),d=n(86010),t=n(12466),i=n(16550),l=n(20469),c=n(91980),a=n(67392),h=n(50012);function x(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return x(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:d}}=e;return{value:s,label:n,attributes:r,default:d}}))}(n);return function(e){const s=(0,a.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function o(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function u(e){let{queryString:s=!1,groupId:n}=e;const d=(0,i.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(t),(0,r.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(d.location.search);s.set(t,e),d.replace({...d.location,search:s.toString()})}),[t,d])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:d}=e,t=j(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!o({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:t}))),[a,x]=u({queryString:n,groupId:d}),[p,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[d,t]=(0,h.Nk)(n);return[d,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:d}),b=(()=>{const e=a??p;return o({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!o({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),x(e),m(e)}),[x,m,t]),tabValues:t}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function N(e){let{className:s,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,t.o5)(),h=e=>{const s=e.currentTarget,n=c.indexOf(s),d=l[n].value;d!==r&&(a(s),i(d))},x=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>c.push(e),onKeyDown:x,onClick:h,...t,className:(0,d.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function y(e){let{lazy:s,children:n,selectedValue:d}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===d));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==d})))})}function v(e){const s=p(e);return(0,f.jsxs)("div",{className:(0,d.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(N,{...e,...s}),(0,f.jsx)(y,{...e,...s})]})}function g(e){const s=(0,m.Z)();return(0,f.jsx)(v,{...e,children:x(e.children)},String(s))}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var r=n(67294);const d={},t=r.createContext(d);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);