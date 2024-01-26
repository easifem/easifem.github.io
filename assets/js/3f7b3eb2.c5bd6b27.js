"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[29160],{10589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=n(85893),r=n(11151);const i={},c="Import",s={id:"LinSolverLis/Import",title:"Import",description:"Import the linear solver from external file.",source:"@site/docs/docs-api/LinSolverLis/Import.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/Import",permalink:"/docs-api/LinSolverLis/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinSolverLis/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPreconditionOption",permalink:"/docs-api/LinSolverLis/GetPreconditionOption"},next:{title:"Initiate",permalink:"/docs-api/LinSolverLis/Initiate"}},d={},o=[{value:"Interface",id:"interface",level:2},{value:"Template",id:"template",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,l.jsx)(t.p,{children:"Import the linear solver from external file."}),"\n",(0,l.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Import(obj, hdf5, group)\n    CLASS(LinSolver_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,l.jsx)(t.p,{children:"The template of the file is given below"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"engine"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"NATIVE_SERIAL"})}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This variable helps us to create correct child of ",(0,l.jsx)(t.code,{children:"AbstractLinSolver"})," class. For other children we have following values reserved  : ",(0,l.jsx)(t.code,{children:"NATIVE_OMP"}),",",(0,l.jsx)(t.code,{children:"NATIVE_MPI"}),",",(0,l.jsx)(t.code,{children:"PETSC"}),",",(0,l.jsx)(t.code,{children:"LIS_SERIAL"}),",",(0,l.jsx)(t.code,{children:"LIS_OMP"}),",",(0,l.jsx)(t.code,{children:"LIS_MPI"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"solverName"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Name of the solver"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"preconditionOption"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"LEFT"}),", ",(0,l.jsx)(t.code,{children:"RIGHT"}),", ",(0,l.jsx)(t.code,{children:"LEFT_RIGHT"}),", ",(0,l.jsx)(t.code,{children:"NONE"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"convergenceIn"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"RESIDUAL"}),", ",(0,l.jsx)(t.code,{children:"SOLUTION"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"convergenceType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"ABSOLUT"}),", ",(0,l.jsx)(t.code,{children:"RELATIVE"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"relativeToRHS"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Char"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"T"}),", ",(0,l.jsx)(t.code,{children:"F"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"It is used when convergence Type is relative"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"maxIter"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"INT"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Maximum number of iterations"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"KrylovSubspaceSize"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"INT"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"This is used when GMRES is used, you can set it to 15 to 20."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"relativeTolerance"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Tolerance for checking the relative convergence"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"absoluteTolerance"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Tolerance for checking the absolute convergence"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Following code explains it"}),"\n",(0,l.jsxs)(t.p,{children:["Let us generate the ",(0,l.jsx)(t.code,{children:"hdf5File_"})," (hdf5 file) using ",(0,l.jsx)(t.code,{children:"export"})," command as shown below."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'  type( LinSolver_ ) :: obj\n  type( ParameterList_ ) :: param\n  type( hdf5File_ ) :: hdf5\n  integer( i4b ) :: ierr, tnodes\n  call display( "TESTING INITIATE AND EXPORT" )\n  call FPL_INIT(); call param%initiate()\n  call setLinSolverParam( param=param, solverName=LIS_CG,&\n    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE., &\n    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n  call obj%initiate(param)\n  call hdf5%initiate( filename="./templateLinSolver.hdf5", MODE="NEW" )\n  call hdf5%open()\n  call obj%export( hdf5, "" )\n  call hdf5%close(); call hdf5%Deallocate()\n  call obj%Deallocate()\n  call param%Deallocate(); call FPL_FINALIZE()\n'})}),"\n",(0,l.jsxs)(t.p,{children:["Now let us ",(0,l.jsx)(t.code,{children:"import"})," this information as shown below."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'  type( LinSolver_ ) :: obj\n  type( hdf5File_ ) :: hdf5\n  integer( i4b ) :: ierr, tnodes\n  call display( "TESTING IMPORT" )\n  call hdf5%initiate( filename="./templateLinSolver.hdf5", MODE="READ" )\n  call hdf5%open()\n  call obj%import(hdf5,"")\n  call obj%display("")\n  call hdf5%close(); call hdf5%Deallocate()\n  call obj%Deallocate()\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var l=n(67294);const r={},i=l.createContext(r);function c(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);