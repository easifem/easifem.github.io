"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[8361,98891],{84483:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(85893),i=n(11151),t=n(90739),r=n(52991);const l={sidebar_position:1,date:new Date("2023-02-12T00:00:00.000Z"),update:new Date("2023-02-12T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["BoundaryCondition"],tags:["dirichletBC","boundaryCondition","easifemClasses"]},o="DirichletBC",c={id:"DirichletBC/index",title:"DirichletBC",description:"Methods",source:"@site/docs/docs-api/DirichletBC/index.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/",permalink:"/docs-api/DirichletBC/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DirichletBC/index.md",tags:[{label:"dirichletBC",permalink:"/docs-api/tags/dirichlet-bc"},{label:"boundaryCondition",permalink:"/docs-api/tags/boundary-condition"},{label:"easifemClasses",permalink:"/docs-api/tags/easifem-classes"}],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-02-12T00:00:00.000Z",update:"2023-02-12T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["BoundaryCondition"],tags:["dirichletBC","boundaryCondition","easifemClasses"]},sidebar:"tutorialSidebar",previous:{title:"DiffusionMatrix example 4",permalink:"/docs-api/DiffusionMatrix/DiffusionMatrix_test_4"},next:{title:"Structure",permalink:"/docs-api/DirichletBC/DirichletBC_"}},d={},h=[{value:"Methods",id:"methods",level:2}];function m(e){const s={h1:"h1",h2:"h2",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"dirichletbc",children:"DirichletBC"}),"\n","\n",(0,a.jsx)(t.default,{}),"\n",(0,a.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,a.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},90739:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=n(85893),i=n(11151);const t={sidebar_position:1,date:new Date("2023-11-28T00:00:00.000Z"),update:new Date("2023-11-28T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["BoundaryCondition","Guides"],tags:["AbstractBC","BoundaryCondition","easifemClasses","guides","DirichletBC"]},r="Dirichlet boundary condition",l={id:"programming-fem/dirichletBC/index",title:"Dirichlet boundary condition",description:"To apply boundary condition in FEM computation, EASIFEM, provides a class called DirichletBC.",source:"@site/docs/guides/programming-fem/dirichletBC/index.mdx",sourceDirName:"programming-fem/dirichletBC",slug:"/programming-fem/dirichletBC/",permalink:"/guides/programming-fem/dirichletBC/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/programming-fem/dirichletBC/index.mdx",tags:[{label:"AbstractBC",permalink:"/guides/tags/abstract-bc"},{label:"BoundaryCondition",permalink:"/guides/tags/boundary-condition"},{label:"easifemClasses",permalink:"/guides/tags/easifem-classes"},{label:"guides",permalink:"/guides/tags/guides"},{label:"DirichletBC",permalink:"/guides/tags/dirichlet-bc"}],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-11-28T00:00:00.000Z",update:"2023-11-28T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["BoundaryCondition","Guides"],tags:["AbstractBC","BoundaryCondition","easifemClasses","guides","DirichletBC"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/guides/programming-fem/finiteElementSpaces/"},next:{title:"Constant user function",permalink:"/guides/programming-fem/dirichletBC/dbc_userfunc_const"}},o={},c=[{value:"Learn from example:",id:"learn-from-example",level:2},{value:"Step 1: Set the properties of the DirichletBC",id:"step-1-set-the-properties-of-the-dirichletbc",level:3},{value:"Step 2: Define a boundary",id:"step-2-define-a-boundary",level:3},{value:"Step 3: Initiate instance of <code>DirichletBC</code>",id:"step-3-initiate-instance-of-dirichletbc",level:3},{value:"Step 4: Set the boundary condition",id:"step-4-set-the-boundary-condition",level:3},{value:"Step 5: Get the value of boundary condition",id:"step-5-get-the-value-of-boundary-condition",level:3},{value:"Further reading",id:"further-reading",level:2}];function d(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.a)(),...e.components},{Card:n,CardSection:t,Details:r}=s;return n||m("Card",!0),t||m("CardSection",!0),r||m("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"dirichlet-boundary-condition",children:"Dirichlet boundary condition"}),"\n",(0,a.jsxs)(s.p,{children:["To apply boundary condition in FEM computation, EASIFEM, provides a class called ",(0,a.jsx)(s.a,{href:"/docs-api/DirichletBC/DirichletBC_",children:"DirichletBC_"}),"."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"DirichletBC_"})," is a subclass of ",(0,a.jsx)(s.a,{href:"/docs-api/AbstractBC",children:"AbstractBC"}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["To understand how ",(0,a.jsx)(s.code,{children:"DirichletBC"})," works, lets consider an example of linear elasticity. Let's say we want to apply the following boundary condition."]}),"\n",(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{mathvariant:"bold",children:"u"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{mathvariant:"bold",children:"U"}),(0,a.jsx)(s.mn,{children:"0"})]}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mtext,{children:"\xa0on\xa0"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"\u0393"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathbf{u} = \\mathbf{U}_{0}, \\text{ on } \\Gamma"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4444em"}}),(0,a.jsx)(s.span,{className:"mord mathbf",children:"u"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8805em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathbf",children:"U"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"0"})})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord text",children:(0,a.jsx)(s.span,{className:"mord",children:"\xa0on\xa0"})}),(0,a.jsx)(s.span,{className:"mord",children:"\u0393"})]})]})]})}),"\n",(0,a.jsxs)(s.p,{children:["Now, we may think that there is only one boundary condition. But in easifem this is not the case. Actually, ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{mathvariant:"bold",children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathbf{u}"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4444em"}}),(0,a.jsx)(s.span,{className:"mord mathbf",children:"u"})]})})]}),", has three components in 3D (and two components in 2D). Therefore, the above boundary condition is actually boundary condition for ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"x"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u_x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),", ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"y"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u_y"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),", and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"z"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u_z"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),". So, we have three boundary condition on a given boundary ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{mathvariant:"normal",children:"\u0393"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Gamma"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord",children:"\u0393"})]})})]}),"."]}),"\n",(0,a.jsx)(s.p,{children:"The second point, which is quite obvious, is that every boundary condition has two things:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"The boundary"}),"\n",(0,a.jsx)(s.li,{children:"The value (condition)"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["To define the boundary EASIFEM employs the ",(0,a.jsx)(s.a,{href:"/docs-api/MeshSelection",children:"MeshSelection"})," class. The value can be specified in several ways as mentioned below in this section."]}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"Several instances of DirichletBC can have same boundary but different condition."})}),"\n",(0,a.jsx)(s.h2,{id:"learn-from-example",children:"Learn from example:"}),"\n",(0,a.jsx)(s.p,{children:"Let's consider the following example, in which we will specify the constant boundary condition."}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Click here to see the example"}),(0,a.jsx)("div",{children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\n\nnsd = dom%GetNSD()\n\n! We call Set SetAbstractBCParam to set the parameter for boundary condition\nCALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant)\n\n! We call SetMeshSelectionParam to set the parameter for boundary condition\nCALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n\nCALL boundary%Initiate(param)\n\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n\nCALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n\nCALL obj%Set(constantNodalValue=0.0_DFP)\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\nEND PROGRAM main\n'})})})]}),"\n",(0,a.jsx)(s.p,{children:"In the above code, to define the boundary condition, we follow the steps given below."}),"\n",(0,a.jsx)(s.h3,{id:"step-1-set-the-properties-of-the-dirichletbc",children:"Step 1: Set the properties of the DirichletBC"}),"\n",(0,a.jsxs)(s.p,{children:["We set the properties of ",(0,a.jsx)(s.code,{children:"DirichletBC_"})," by using the method called ",(0,a.jsx)(s.a,{href:"/docs-api/AbstractBC/SetAbstractBCParam",children:"SetAbstractBCParam"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:'CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant)\n'})}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["Because we are setting constant boundary condition, we used ",(0,a.jsx)(s.code,{children:"nodalValueType=Constant"}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["You can learn more about this method ",(0,a.jsx)(s.a,{href:"docs-api/AbstractBC/SetAbstractBCParam",children:"here"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"step-2-define-a-boundary",children:"Step 2: Define a boundary"}),"\n",(0,a.jsxs)(s.p,{children:["To define a boundary we will use the ",(0,a.jsx)(s.a,{href:"/docs-api/MeshSelection",children:"MeshSelection"}),". In the above code, we select the boundary by specifing the ",(0,a.jsx)(s.code,{children:"meshID"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n"})}),"\n",(0,a.jsxs)(s.p,{children:["After setting the boundary parameter we call ",(0,a.jsx)(s.a,{href:"/docs-api/MeshSelection/Initiate",children:"Initiate"})," method."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"CALL boundary%Initiate(param)\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Subsequently, we call ",(0,a.jsx)(s.code,{children:"Add"})," method to add the information of ",(0,a.jsx)(s.code,{children:"meshID"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"CALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["After adding the information of meshID we should call ",(0,a.jsx)(s.a,{href:"/docs-api/MeshSelection/Set",children:"Set"})," method, which means that we are done adding information to the boundary."]})}),"\n",(0,a.jsxs)(s.p,{children:["You can learn more about ",(0,a.jsx)(s.code,{children:"SetMeshSelectionParam"})," ",(0,a.jsx)(s.a,{href:"/docs-api/MeshSelection/SetMeshSelectionParam",children:"here"})]}),"\n",(0,a.jsxs)(s.h3,{id:"step-3-initiate-instance-of-dirichletbc",children:["Step 3: Initiate instance of ",(0,a.jsx)(s.code,{children:"DirichletBC"})]}),"\n",(0,a.jsxs)(s.p,{children:["After initiating the boundary, call ",(0,a.jsx)(s.a,{href:"/docs-api/AbstractBC/Initiate",children:"Initiate"}),". To initiate an instance of ",(0,a.jsx)(s.code,{children:"DirichletBC_"})," we need to pass the boundary, paramters, and domain."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"CALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n"})}),"\n",(0,a.jsx)(s.h3,{id:"step-4-set-the-boundary-condition",children:"Step 4: Set the boundary condition"}),"\n",(0,a.jsxs)(s.p,{children:["After initiating an instance of ",(0,a.jsx)(s.code,{children:"DirichletBC_"}),", next step is to set the boundary condition. To do so, we will use the method ",(0,a.jsx)(s.a,{href:"/docs-api/AbstractBC/Set",children:"Set"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["While setting the value we should respect the configuration used while calling ",(0,a.jsx)(s.code,{children:"SetAbstractBCParam"}),". For example, in the above example we configure boundary condition for ",(0,a.jsx)(s.code,{children:"nodalValueType=Constant"}),". Therefore, we should set the ",(0,a.jsx)(s.code,{children:"constantNodalValue"})," while calling the set method."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"CALL obj%Set(constantNodalValue=0.0_DFP)\n"})}),"\n",(0,a.jsx)(s.h3,{id:"step-5-get-the-value-of-boundary-condition",children:"Step 5: Get the value of boundary condition"}),"\n",(0,a.jsxs)(s.p,{children:["To get the boundary condition we will use the method ",(0,a.jsx)(s.a,{href:"/docs-api/AbstractBC/Get",children:"Get"}),". The Get function can take two arguments ",(0,a.jsx)(s.code,{children:"nodeNum(:)"})," and ",(0,a.jsx)(s.code,{children:"nodalValue(:,:)"}),". The ",(0,a.jsx)(s.code,{children:"nodeNum(:)"})," is compulsory, whereas ",(0,a.jsx)(s.code,{children:"nodalValue"})," can be optional."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["On return, the size of ",(0,a.jsx)(s.code,{children:"nodeNum"})," and ",(0,a.jsx)(s.code,{children:"SIZE(nodalValue, 1)"})," is same."]})}),"\n",(0,a.jsxs)(s.p,{children:["The columns in ",(0,a.jsx)(s.code,{children:"nodalValue"})," denotes the boundary condition at different times. You can read more about this subroutine ",(0,a.jsx)(s.a,{href:"/docs-api/AbstractBC/Get",children:"here"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(s.p,{children:["There is more to ",(0,a.jsx)(s.code,{children:"DirichletBC_"}),", and you can learn about them from following pages. (Here ",(0,a.jsx)(s.code,{children:"DBC"})," stands for ",(0,a.jsx)(s.code,{children:"DirichletBC_"}),")"]}),"\n",(0,a.jsxs)(t,{id:"quadraturePoints",children:[(0,a.jsx)(n,{title:"Constant user function",to:"/guides/programming-fem/dirichletBC/dbc_userfunc_const",description:"This example shows how to initiate DBC by using a constant UserFunction $u=\\alpha$"}),(0,a.jsx)(n,{title:"Spatial user function",to:"/guides/programming-fem/dirichletBC/dbc_userfunc_space",description:"This example shows how to initiate DBC by using a space dependent UserFunction, $u=g(x, y, z)$"}),(0,a.jsx)(n,{title:"Toml file constant value",to:"/guides/programming-fem/dirichletBC/dbc_toml_const",description:"This example shows how to initiate DBC by reading a toml-file. Constant boundary condition, $u=\\alpha$"}),(0,a.jsx)(n,{title:"Toml file constant function",to:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const",description:"This example shows how to initiate DBC by reading a toml-file. Constant boundary condition, $u=\\alpha$"}),(0,a.jsx)(n,{title:"Toml file space function",to:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const",description:"This example shows how to initiate DBC by reading a toml-file. Space boundary condition, $u=g(x,y,z)$"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},52991:(e,s,n)=>{n.d(s,{Z:()=>f});n(67294);var a=n(86010),i=n(53438),t=n(39960),r=n(13919),l=n(95999),o=n(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function h(e){let{href:s,children:n}=e;return(0,d.jsx)(t.Z,{href:s,className:(0,a.Z)("card padding--lg",c.cardContainer),children:n})}function m(e){let{href:s,icon:n,title:i,description:t}=e;return(0,d.jsxs)(h,{href:s,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,a.Z)("text--truncate",c.cardTitle),title:i,children:[n," ",i]}),t&&(0,d.jsx)("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:t,children:t})]})}function p(e){let{item:s}=e;const n=(0,i.LM)(s);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})}):null}function x(e){let{item:s}=e;const n=(0,r.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(s.docId??void 0);return(0,d.jsx)(m,{href:s.href,icon:n,title:s.label,description:s.description??a?.description})}function u(e){let{item:s}=e;switch(s.type){case"link":return(0,d.jsx)(x,{item:s});case"category":return(0,d.jsx)(p,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function j(e){let{className:s}=e;const n=(0,i.jA)();return(0,d.jsx)(f,{items:n.items,className:s})}function f(e){const{items:s,className:n}=e;if(!s)return(0,d.jsx)(j,{...e});const t=(0,i.MN)(s);return(0,d.jsx)("section",{className:(0,a.Z)("row",n),children:t.map(((e,s)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(u,{item:e})},s)))})}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var a=n(67294);const i={},t=a.createContext(i);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);