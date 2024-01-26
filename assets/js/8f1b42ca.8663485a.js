"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[51605],{81367:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var t=i(85893),l=i(11151);const o={},s="Structure",a={id:"DomainConnectivity/DomainConnectivity_",title:"Structure",description:"This class is designed for generating mapping between two domains, or parts of two domains.",source:"@site/docs/docs-api/DomainConnectivity/DomainConnectivity_.md",sourceDirName:"DomainConnectivity",slug:"/DomainConnectivity/DomainConnectivity_",permalink:"/docs-api/DomainConnectivity/DomainConnectivity_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DomainConnectivity/DomainConnectivity_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/DomainConnectivity/Deallocate"},next:{title:"GlobalFacetID",permalink:"/docs-api/DomainConnectivity/GlobalFacetID"}},c={},r=[{value:"Structure",id:"structure-1",level:2},{value:"FacetConnectivity",id:"facetconnectivity",level:2},{value:"ElementConnectivity",id:"elementconnectivity",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"This class is designed for generating mapping between two domains, or parts of two domains."}),"\n",(0,t.jsx)(n.p,{children:"Two domains can have the following relation between them"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"pType"})," has the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Same geometry"}),"\n",(0,t.jsx)(n.li,{children:"Same number of elements"}),"\n",(0,t.jsx)(n.li,{children:"CellToCell is an identity"}),"\n",(0,t.jsx)(n.li,{children:"Different number of nodes"}),"\n",(0,t.jsx)(n.li,{children:"Different order"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"hType"})," has the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Same geometry"}),"\n",(0,t.jsx)(n.li,{children:"Different number of elements"}),"\n",(0,t.jsx)(n.li,{children:"Different number of nodes"}),"\n",(0,t.jsx)(n.li,{children:"order is same."}),"\n",(0,t.jsx)(n.li,{children:"Same element topology for a given mesh"}),"\n",(0,t.jsx)(n.li,{children:"CellToCell(iel) will be a collection of elements in Domain 2."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"rType"})," has the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Same geometry"}),"\n",(0,t.jsx)(n.li,{children:"Same number of nodes"}),"\n",(0,t.jsx)(n.li,{children:"Same number of elements"}),"\n",(0,t.jsx)(n.li,{children:"CellToCell is identity matrix"}),"\n",(0,t.jsx)(n.li,{children:"NodeToNode is an identity matrix"}),"\n",(0,t.jsx)(n.li,{children:"Spatial position of nodes would be different"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"structure-1",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"The structure of DomainConnectivity is given below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"TYPE :: DomainConnectivity_\n  PRIVATE\n  LOGICAL(LGT), PUBLIC :: isInitiated = .FALSE.\n  LOGICAL(LGT), PUBLIC :: isFacetToCell = .FALSE.\n  LOGICAL(LGT), PUBLIC :: isNodeToNode = .FALSE.\n  LOGICAL(LGT), PUBLIC :: isCellToCell = .FALSE.\n  INTEGER(I4B), ALLOCATABLE :: nodeToNode(:)\n  INTEGER(I4B), ALLOCATABLE :: cellToCell(:)\n  INTEGER(I4B), ALLOCATABLE :: cellToCellExtraData(:, :)\n  TYPE(FacetConnectivity_), ALLOCATABLE :: facetToCell(:)\n  TYPE(ElementConnectivity_), ALLOCATABLE :: elemToElem(:)\n"})}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"isInitiated, is true if an instance of DomainConnectivity is initiated"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"isFacetToCell is true if facetToCell data is initiated"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"isNodeToNode is true if nodeToNode data is initiated"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"isCellToCell is true if cellToCell data is initiated"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"nodeToNode, contains the node-to-node mapping from one mesh/domain to another mesh/domain."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We can create mapping between parts of domain (mesh) or domains. See ",(0,t.jsx)(n.a,{href:"/docs-api/DomainConnectivity/InitiateNodeToNodes",children:"InitiateNodeToNodes"})]}),"\n",(0,t.jsx)(n.li,{children:"Size of NodeToNode is equal to the largest node number in domain-1 or mesh-1 (depending upon how the data is initiated)"}),"\n",(0,t.jsxs)(n.li,{children:["NodeToNode(i) implies global node number in domain-2/mesh-2, corresponding to global node number ",(0,t.jsx)(n.code,{children:"i"})," in domain-1/mesh-1."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cellToCell contains the cell-to-cell mapping from one mesh/domain to another mesh/domain."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We can create mapping between parts of domain (mesh) or domains. See, ",(0,t.jsx)(n.a,{href:"/docs-api/DomainConnectivity/InitiateCellToCellData",children:"InitiateCellToCellData"})]}),"\n",(0,t.jsx)(n.li,{children:"Size of cellToCell is equal to the largest element number in domain-1 or mesh-1 (depending upon how the data is initiated)"}),"\n",(0,t.jsxs)(n.li,{children:["cellToCell(i) denotes global element number in domain-2/ mesh-2, corresponding to global element number ",(0,t.jsx)(n.code,{children:"i"})," in domain-1/ mesh-1"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cellToCellExtraData: Currently,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cellToCellExtraData has two rows (a) the first row is dim, (b) the second row is entityNum."}),"\n",(0,t.jsxs)(n.li,{children:["each column represents the element number, for example","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"iel1 in domain1, then cellToCell(iel1) gives iel2 in domain2"}),"\n",(0,t.jsx)(n.li,{children:"cellToCellExtraData(1, iel1) gives dimension of mesh which contains iel2"}),"\n",(0,t.jsx)(n.li,{children:"cellToCellExtraData(2, iel1) gives entityNum of mesh which contains iel2"}),"\n",(0,t.jsxs)(n.li,{children:["In this way, ",(0,t.jsx)(n.code,{children:"domain2%getMeshPointer(dim, entityNum)"})," can give us the pointer to the mesh which contains the iel2"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"facetToCell, facet to cell-connectivity data."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","elemToElem, currently, we do not know how to implement it (TODO)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"facetconnectivity",children:"FacetConnectivity"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"TYPE :: FacetConnectivity_\n  INTEGER(I4B) :: facetID = 0\n    !! global element number of facet element in facet mesh\n  INTEGER(I4B) :: GlobalCellData(4, 2) = 0\n    !! 1,1 --\x3e Global element number of master cell\n    !! 2,1 --\x3e master cell's local facet number connected to facet-elem\n    !! 3,1 --\x3e master mesh dimension\n    !! 4,1 --\x3e master mesh entity number\n    !! 1,2 --\x3e Global element number of slave cell\n    !! 2,2 --\x3e slave cell's local facet number connected to facet-elem\n    !! 3,2 --\x3e slave mesh dimension\n    !! 4,2 --\x3e slave mesh entity number\nEND TYPE FacetConnectivity_\n"})}),"\n",(0,t.jsx)(n.h2,{id:"elementconnectivity",children:"ElementConnectivity"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"TYPE :: ElementConnectivity_\n  INTEGER(I4B) :: masterGlobalElemNum = 0\n  INTEGER(I4B) :: masterLocalFacetID = 0\n  INTEGER(I4B) :: slaveGlobalElemNum = 0\n  INTEGER(I4B) :: slaveLocalFacetID = 0\nEND TYPE ElementConnectivity_\n"})})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(67294);const l={},o=t.createContext(l);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);