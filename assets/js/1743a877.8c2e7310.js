"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[67829],{49581:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=r(85893),i=r(11151);const l={},d="Structure",t={id:"FEVariable/FEVariable_",title:"Structure",description:"Constructor methods",source:"@site/docs/docs-api/FEVariable/FEVariable_.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_",permalink:"/docs-api/FEVariable/FEVariable_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addition",permalink:"/docs-api/FEVariable/Addition"},next:{title:"FEVariable_test_21a",permalink:"/docs-api/FEVariable/FEVariable_test_21a"}},a={},c=[{value:"Constructor methods",id:"constructor-methods",level:2},{value:"NodalVariable",id:"nodalvariable",level:3},{value:"QuadratureVariable",id:"quadraturevariable",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"Get methods",id:"get-methods",level:2},{value:"SIZE",id:"size",level:3},{value:"SHAPE",id:"shape",level:3},{value:"Get",id:"get",level:3},{value:"Addition (+)",id:"addition-",level:2},{value:"Subtraction (-)",id:"subtraction--",level:2},{value:"Multiplication (*)",id:"multiplication-",level:2},{value:"Division",id:"division",level:2},{value:"POWER",id:"power",level:2},{value:"ABS",id:"abs",level:2},{value:"DOT_PRODUCT",id:"dot_product",level:2},{value:"NORM2",id:"norm2",level:2},{value:"Set methods",id:"set-methods",level:2},{value:"IO methods",id:"io-methods",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(n.h2,{id:"constructor-methods",children:"Constructor methods"}),"\n",(0,s.jsx)(n.h3,{id:"nodalvariable",children:"NodalVariable"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "NodalVariable"\nThis method creates a nodal variable. The common interface is as follows.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"obj=NodalVariable(val,rank,vartype)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udc8e ",(0,s.jsx)(n.code,{children:"rank"})," can be"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableScalar"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableVector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableMatrix"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\ude80 ",(0,s.jsx)(n.code,{children:"vartype"})," can be"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableConstant"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableSpace"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableTime"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableSpaceTime"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from [[FEVariable_test_1]]."}),"\n",(0,s.jsx)(n.h3,{id:"quadraturevariable",children:"QuadratureVariable"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "QuadratureVariable"\nThis method creates a quadrature variable. The common interface is as follows.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"obj=QuadratureVariable(val,rank,vartype)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udc8e ",(0,s.jsx)(n.code,{children:"rank"})," can be"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableScalar"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableVector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableMatrix"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\ude80 ",(0,s.jsx)(n.code,{children:"vartype"})," can be"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableConstant"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableSpace"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableTime"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TypeFEVariableSpaceTime"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[[FEVariable_test_1]]."}),"\n",(0,s.jsx)(n.li,{children:"[[FEVariable_test_2]]."}),"\n",(0,s.jsx)(n.li,{children:"[[FEVariable_test_3]]."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,s.jsx)(n.p,{children:'!!! note "Deallocate"\nThis method deallocates the data stored inside the [[FEVariable_]] instance.'}),"\n",(0,s.jsx)(n.h2,{id:"get-methods",children:"Get methods"}),"\n",(0,s.jsx)(n.h3,{id:"size",children:"SIZE"}),"\n",(0,s.jsx)(n.h3,{id:"shape",children:"SHAPE"}),"\n",(0,s.jsx)(n.h3,{id:"get",children:"Get"}),"\n",(0,s.jsx)(n.h2,{id:"addition-",children:"Addition (+)"}),"\n",(0,s.jsx)(n.p,{children:'!!! notes "+"\nAdd two instance of [[FEVariable_]].'}),"\n",(0,s.jsx)(n.p,{children:'!!! note ""\nA quadrature variable can be added to only a quadrature variable, unless one of the variable is constant.'}),"\n",(0,s.jsx)(n.p,{children:'!!! note ""\nA nodal variable can be added to only a nodal variable, unless one of the variable is a constant.'}),"\n",(0,s.jsxs)(n.p,{children:['!!! note ""\nThe rank of ',(0,s.jsx)(n.code,{children:"obj1"})," and ",(0,s.jsx)(n.code,{children:"obj2"})," should be the same, if none of the obj1 and obj2 are scalars."]}),"\n",(0,s.jsx)(n.p,{children:'!!! note ""\nA Scalar FEVariable can be added to a Vector and Matrix FEVariable.'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Defined on"}),(0,s.jsx)(n.th,{children:"obj1"}),(0,s.jsx)(n.th,{children:"obj2"}),(0,s.jsx)(n.th,{children:"result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NodalVariable"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"space"}),(0,s.jsx)(n.td,{children:"space"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"space"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"space"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"space"}),(0,s.jsx)(n.td,{children:"space"}),(0,s.jsx)(n.td,{children:"space"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from the following pages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_11a]] Scalar, Nodal Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_11b]] Scalar, Nodal Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_11c]] Scalar, Quadrature Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_11d]] Scalar, Quadrature Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_12a]] Vector, Nodal Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_12b]] Vector, Nodal Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_12c]] Vector, Quadrature Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_12d]] Vector, Quadrature Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_13a]] Matrix, Nodal Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_13b]] Matrix, Nodal Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_13c]] Matrix, Quadrature Variable"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_13d]] Matrix, Quadrature Variable"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"subtraction--",children:"Subtraction (-)"}),"\n",(0,s.jsx)(n.p,{children:'!!! notes "+"\nSubstract two instance of [[FEVariable_]].'}),"\n",(0,s.jsx)(n.p,{children:'!!! warning ""\nA quadrature variable can be subtract only from another quadrature variable'}),"\n",(0,s.jsx)(n.p,{children:'!!! warning ""\nA nodal variable can be subtracted from another nodal variable'}),"\n",(0,s.jsxs)(n.p,{children:['!!! warning ""\nThe rank of ',(0,s.jsx)(n.code,{children:"obj1"})," and ",(0,s.jsx)(n.code,{children:"obj2"})," should be the same"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Defined on"}),(0,s.jsx)(n.th,{children:"obj1"}),(0,s.jsx)(n.th,{children:"obj2"}),(0,s.jsx)(n.th,{children:"result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NodalVariable"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from the following pages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_21a]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_21b]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_21c]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_21d]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_22a]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_22b]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_22c]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_22d]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_23a]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_23b]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_23c]] Matrix, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_23d]] Matrix, Quadrature"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"multiplication-",children:"Multiplication (*)"}),"\n",(0,s.jsx)(n.p,{children:'!!! notes "+"\nMultiply two instance of [[FEVariable_]].'}),"\n",(0,s.jsx)(n.p,{children:'!!! warning ""\nA quadrature variable can be multiply with another quadrature variable'}),"\n",(0,s.jsx)(n.p,{children:'!!! warning ""\nA nodal variable can be multiplies with another nodal variable'}),"\n",(0,s.jsxs)(n.p,{children:['!!! warning ""\nThe rank of ',(0,s.jsx)(n.code,{children:"obj1"})," and ",(0,s.jsx)(n.code,{children:"obj2"})," should be the same"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Defined on"}),(0,s.jsx)(n.th,{children:"obj1"}),(0,s.jsx)(n.th,{children:"obj2"}),(0,s.jsx)(n.th,{children:"result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NodalVariable"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from the following pages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_31a]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_31b]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_31c]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_31d]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_32a]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_32b]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_32c]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_32d]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_33a]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_33b]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_33c]] Matrix, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_33d]] Matrix, Quadrature"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"division",children:"Division"}),"\n",(0,s.jsx)(n.p,{children:'!!! notes "/"\nDivision two instance of [[FEVariable_]].'}),"\n",(0,s.jsx)(n.p,{children:'!!! warning ""\nA quadrature variable can be divided by another quadrature variable'}),"\n",(0,s.jsx)(n.p,{children:'!!! warning ""\nA nodal variable can be divided by another nodal variable'}),"\n",(0,s.jsxs)(n.p,{children:['!!! warning ""\nThe rank of ',(0,s.jsx)(n.code,{children:"obj1"})," and ",(0,s.jsx)(n.code,{children:"obj2"})," should be the same"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Defined on"}),(0,s.jsx)(n.th,{children:"obj1"}),(0,s.jsx)(n.th,{children:"obj2"}),(0,s.jsx)(n.th,{children:"result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NodalVariable"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"constant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"}),(0,s.jsx)(n.td,{children:"scalar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"constant"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"}),(0,s.jsx)(n.td,{children:"spacetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from the following pages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_41a]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_41b]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_41c]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_41d]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_42a]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_42b]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_42c]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_42d]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_43a]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_43b]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_43c]] Matrix, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_43d]] Matrix, Quadrature"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"power",children:"POWER"}),"\n",(0,s.jsx)(n.p,{children:'!!! note ""\nans = obj ** n, where n is an integer.'}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from the following pages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_51]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_52]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_53]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_54]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_55]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_56]] Matrix, Quadrature"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"abs",children:"ABS"}),"\n",(0,s.jsx)(n.p,{children:'!!! note ""\nabsolute value of elements of [[FEVariable_]].'}),"\n",(0,s.jsx)(n.p,{children:"You can learn more about this method from the following pages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_61]] Scalar, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_62]] Scalar, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_63]] Vector, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_64]] Vector, Quadrature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_65]] Matrix, Nodal"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[[FEVariable_test_66]] Matrix, Quadrature"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dot_product",children:"DOT_PRODUCT"}),"\n",(0,s.jsx)(n.h2,{id:"norm2",children:"NORM2"}),"\n",(0,s.jsx)(n.h2,{id:"set-methods",children:"Set methods"}),"\n",(0,s.jsx)(n.h2,{id:"io-methods",children:"IO methods"})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>d});var s=r(67294);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);