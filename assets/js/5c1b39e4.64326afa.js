"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[73935],{39976:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=i(85893),s=i(11151);const d={},a="GmshModel",c={id:"GmshAPI/GmshModel_",title:"GmshModel",description:"STATUS",source:"@site/docs/docs-api/GmshAPI/GmshModel_.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/GmshModel_",permalink:"/docs-api/GmshAPI/GmshModel_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GmshAPI/GmshModel_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GmshModelOCC_",permalink:"/docs-api/GmshAPI/GmshModelOCC_"},next:{title:"GmshModel example 1",permalink:"/docs-api/GmshAPI/GmshModel_test_1"}},r={},o=[{value:"STATUS",id:"status",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Structure",id:"structure",level:2},{value:"Methods",id:"methods",level:2},{value:"Add",id:"add",level:3},{value:"Remove",id:"remove",level:3},{value:"List",id:"list",level:3},{value:"GetCurrent",id:"getcurrent",level:3},{value:"SetCurrent",id:"setcurrent",level:3},{value:"GetFileName",id:"getfilename",level:3},{value:"SetFileName",id:"setfilename",level:3},{value:"GetEntities",id:"getentities",level:3},{value:"SetEntityName",id:"setentityname",level:3},{value:"GetEntityName",id:"getentityname",level:3},{value:"GetPhysicalGroups",id:"getphysicalgroups",level:3},{value:"GetEntitiesForPhysicalGroup",id:"getentitiesforphysicalgroup",level:3},{value:"GetPhysicalGroupsForEntity",id:"getphysicalgroupsforentity",level:3},{value:"AddPhysicalGroup",id:"addphysicalgroup",level:3},{value:"RemovePhysicalGroups",id:"removephysicalgroups",level:3},{value:"SetPhysicalName",id:"setphysicalname",level:3},{value:"RemovePhysicalName",id:"removephysicalname",level:3},{value:"GetPhysicalName",id:"getphysicalname",level:3},{value:"SetTag",id:"settag",level:3},{value:"GetBoundary",id:"getboundary",level:3},{value:"GetAdjacencies",id:"getadjacencies",level:3},{value:"GetEntitiesInBoundingBox",id:"getentitiesinboundingbox",level:3},{value:"GetBoundingBox",id:"getboundingbox",level:3},{value:"GetDimension",id:"getdimension",level:3},{value:"AddDiscreteEntity",id:"adddiscreteentity",level:3},{value:"RemoveEntities",id:"removeentities",level:3},{value:"RemoveEntityName",id:"removeentityname",level:3},{value:"GetType",id:"gettype",level:3},{value:"GetParent",id:"getparent",level:3},{value:"GetNumberOfPartitions",id:"getnumberofpartitions",level:3},{value:"GetPartitions",id:"getpartitions",level:3},{value:"GetValue",id:"getvalue",level:3},{value:"GetDerivative",id:"getderivative",level:3},{value:"GetSecondDerivative",id:"getsecondderivative",level:3},{value:"GetCurvature",id:"getcurvature",level:3},{value:"GetPrincipalCurvatures",id:"getprincipalcurvatures",level:3},{value:"GetNormal",id:"getnormal",level:3},{value:"GetParametrization",id:"getparametrization",level:3},{value:"GetParametrizationBounds",id:"getparametrizationbounds",level:3},{value:"IsInside",id:"isinside",level:3},{value:"GetClosestPoint",id:"getclosestpoint",level:3},{value:"ReparametrizeOnSurface",id:"reparametrizeonsurface",level:3},{value:"SetVisibility",id:"setvisibility",level:3},{value:"GetVisibility",id:"getvisibility",level:3},{value:"SetVisibilityPerWindow",id:"setvisibilityperwindow",level:3},{value:"SetColor",id:"setcolor",level:3},{value:"GetColor",id:"getcolor",level:3},{value:"SetCoordinates",id:"setcoordinates",level:3},{value:"GetAttributeNames",id:"getattributenames",level:3},{value:"GetAttribute",id:"getattribute",level:3},{value:"SetAttribute",id:"setattribute",level:3},{value:"RemoveAttribute",id:"removeattribute",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"gmshmodel",children:"GmshModel"}),"\n",(0,n.jsx)(t.h2,{id:"status",children:"STATUS"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Add"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Remove"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","List"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetCurrent"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetCurrent"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetFileName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetFileName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetEntities"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetEntityName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetEntityName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetPhysicalGroups"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetEntitiesForPhysicalGroup"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetPhysicalGroupsForEntity"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","AddPhysicalGroup"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","RemovePhysicalGroups"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetPhysicalName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","RemovePhysicalName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetPhysicalName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetTag"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetBoundary"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetAdjacencies"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetEntitiesInBoundingBox"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetBoundingBox"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetDimension"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","AddDiscreteEntity"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","RemoveEntities"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","RemoveEntityName"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetType"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetParent"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetPartitions"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetValue"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetDerivative"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetSecondDerivative"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetCurvature"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetPrincipalCurvatures"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetNormal"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetParametrization"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetParametrizationBounds"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","IsInside"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetClosestPoint"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","ReparametrizeOnSurface"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetVisibility"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetVisibility"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetVisibilityPerWindow"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetColor"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetColor"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetCoordinates"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetAttributeNames"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","SetAttribute"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","GetAttribute"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","RemoveAttribute"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"TYPE :: GmshModel_\n  PRIVATE\n  TYPE(GmshModelGeo_), PUBLIC, POINTER :: Geo => NULL()\n  TYPE(GmshModelOcc_), PUBLIC, POINTER :: Occ => NULL()\n  TYPE(GmshModelMesh_), PUBLIC, POINTER :: Mesh => NULL()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"add",children:"Add"}),"\n",(0,n.jsx)(t.p,{children:"!> Add a new model, with name `name', and set it as the current model."}),"\n",(0,n.jsx)(t.h3,{id:"remove",children:"Remove"}),"\n",(0,n.jsx)(t.p,{children:"!> Remove the current model."}),"\n",(0,n.jsx)(t.h3,{id:"list",children:"List"}),"\n",(0,n.jsx)(t.p,{children:"!> List the names of all models."}),"\n",(0,n.jsx)(t.h3,{id:"getcurrent",children:"GetCurrent"}),"\n",(0,n.jsx)(t.p,{children:"!> Get the name of the current model."}),"\n",(0,n.jsx)(t.h3,{id:"setcurrent",children:"SetCurrent"}),"\n",(0,n.jsx)(t.p,{children:"!> Set the current model to the model with name `name'. If several models have\n!! the same name, select the one that was added first."}),"\n",(0,n.jsx)(t.h3,{id:"getfilename",children:"GetFileName"}),"\n",(0,n.jsx)(t.p,{children:"!> Get the file name (if any) associated with the current model. A file name\n!! is associated when a model is read from a file on disk."}),"\n",(0,n.jsx)(t.h3,{id:"setfilename",children:"SetFileName"}),"\n",(0,n.jsx)(t.p,{children:"!> Set the file name associated with the current model."}),"\n",(0,n.jsx)(t.h3,{id:"getentities",children:"GetEntities"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get all the entities in the current model. If ",(0,n.jsx)(t.code,{children:"dim' is >= 0, return only !! the entities of the specified dimension (e.g. points if"}),"dim' == 0). The\n!! entities are returned as a vector of (dim, tag) pairs."]}),"\n",(0,n.jsx)(t.h3,{id:"setentityname",children:"SetEntityName"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the name of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"getentityname",children:"GetEntityName"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the name of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"getphysicalgroups",children:"GetPhysicalGroups"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get all the physical groups in the current model. If ",(0,n.jsx)(t.code,{children:"dim' is >= 0, return !! only the entities of the specified dimension (e.g. physical points if"}),"dim'\n!! == 0). The entities are returned as a vector of (dim, tag) pairs."]}),"\n",(0,n.jsx)(t.h3,{id:"getentitiesforphysicalgroup",children:"GetEntitiesForPhysicalGroup"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the tags of the model entities making up the physical group of\n!! dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"getphysicalgroupsforentity",children:"GetPhysicalGroupsForEntity"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the tags of the physical groups (if any) to which the model entity of\n!! dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag' belongs."]}),"\n",(0,n.jsx)(t.h3,{id:"addphysicalgroup",children:"AddPhysicalGroup"}),"\n",(0,n.jsxs)(t.p,{children:["!> Add a physical group of dimension ",(0,n.jsx)(t.code,{children:"dim', grouping the model entities with !! tags"}),"tags'. Return the tag of the physical group, equal to ",(0,n.jsx)(t.code,{children:"tag' if"}),"tag'\n!! is positive, or a new tag if ",(0,n.jsx)(t.code,{children:"tag' < 0. Set the name of the physical group !! if"}),"name' is not empty."]}),"\n",(0,n.jsx)(t.h3,{id:"removephysicalgroups",children:"RemovePhysicalGroups"}),"\n",(0,n.jsxs)(t.p,{children:["!> Remove the physical groups ",(0,n.jsx)(t.code,{children:"dimTags' (given as a vector of (dim, tag) !! pairs) from the current model. If"}),"dimTags' is empty, remove all groups."]}),"\n",(0,n.jsx)(t.h3,{id:"setphysicalname",children:"SetPhysicalName"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the name of the physical group of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"removephysicalname",children:"RemovePhysicalName"}),"\n",(0,n.jsx)(t.p,{children:"!> Remove the physical name `name' from the current model."}),"\n",(0,n.jsx)(t.h3,{id:"getphysicalname",children:"GetPhysicalName"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the name of the physical group of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"settag",children:"SetTag"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the tag of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag' to the new value\n!! `newTag'."]}),"\n",(0,n.jsx)(t.h3,{id:"getboundary",children:"GetBoundary"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the boundary of the model entities ",(0,n.jsx)(t.code,{children:"dimTags', given as a vector of !! (dim, tag) pairs. Return in"}),"outDimTags' the boundary of the individual\n!! entities (if ",(0,n.jsx)(t.code,{children:"combined' is false) or the boundary of the combined !! geometrical shape formed by all input entities (if"}),"combined' is true).\n!! Return tags multiplied by the sign of the boundary entity if ",(0,n.jsx)(t.code,{children:"oriented' is !! true. Apply the boundary operator recursively down to dimension 0 (i.e. to !! points) if"}),"recursive' is true."]}),"\n",(0,n.jsx)(t.h3,{id:"getadjacencies",children:"GetAdjacencies"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the upward and downward adjacencies of the model entity of dimension\n!! ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'. The ",(0,n.jsx)(t.code,{children:"upward' vector returns the tags of adjacent !! entities of dimension"}),"dim' + 1; the ",(0,n.jsx)(t.code,{children:"downward' vector returns the tags of !! adjacent entities of dimension"}),"dim' - 1."]}),"\n",(0,n.jsx)(t.h3,{id:"getentitiesinboundingbox",children:"GetEntitiesInBoundingBox"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the model entities in the bounding box defined by the two points\n!! (",(0,n.jsx)(t.code,{children:"xmin',"}),"ymin', ",(0,n.jsx)(t.code,{children:"zmin') and ("}),"xmax', ",(0,n.jsx)(t.code,{children:"ymax',"}),"zmax'). If ",(0,n.jsx)(t.code,{children:"dim' is >= 0, !! return only the entities of the specified dimension (e.g. points if"}),"dim'\n!! == 0)."]}),"\n",(0,n.jsx)(t.h3,{id:"getboundingbox",children:"GetBoundingBox"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the bounding box (",(0,n.jsx)(t.code,{children:"xmin',"}),"ymin', ",(0,n.jsx)(t.code,{children:"zmin'), ("}),"xmax', ",(0,n.jsx)(t.code,{children:"ymax',"}),"zmax') of\n!! the model entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'. If ",(0,n.jsx)(t.code,{children:"dim' and"}),"tag' are\n!! negative, get the bounding box of the whole model."]}),"\n",(0,n.jsx)(t.h3,{id:"getdimension",children:"GetDimension"}),"\n",(0,n.jsx)(t.p,{children:"!> Return the geometrical dimension of the current model."}),"\n",(0,n.jsx)(t.h3,{id:"adddiscreteentity",children:"AddDiscreteEntity"}),"\n",(0,n.jsxs)(t.p,{children:["!> Add a discrete model entity (defined by a mesh) of dimension ",(0,n.jsx)(t.code,{children:"dim' in the !! current model. Return the tag of the new discrete entity, equal to"}),"tag' if\n!! ",(0,n.jsx)(t.code,{children:"tag' is positive, or a new tag if"}),"tag' < 0. ",(0,n.jsx)(t.code,{children:"boundary' specifies the tags !! of the entities on the boundary of the discrete entity, if any. Specifying !!"}),"boundary' allows Gmsh to construct the topology of the overall model."]}),"\n",(0,n.jsx)(t.h3,{id:"removeentities",children:"RemoveEntities"}),"\n",(0,n.jsxs)(t.p,{children:["!> Remove the entities ",(0,n.jsx)(t.code,{children:"dimTags' (given as a vector of (dim, tag) pairs) of !! the current model, provided that they are not on the boundary of (or !! embedded in) higher-dimensional entities. If"}),"recursive' is true, remove\n!! all the entities on their boundaries, down to dimension 0."]}),"\n",(0,n.jsx)(t.h3,{id:"removeentityname",children:"RemoveEntityName"}),"\n",(0,n.jsx)(t.p,{children:"!> Remove the entity name `name' from the current model."}),"\n",(0,n.jsx)(t.h3,{id:"gettype",children:"GetType"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the type of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"getparent",children:"GetParent"}),"\n",(0,n.jsxs)(t.p,{children:["!> In a partitioned model, get the parent of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and !! tag"}),"tag', i.e. from which the entity is a part of, if any. ",(0,n.jsx)(t.code,{children:"parentDim' and !!"}),"parentTag' are set to -1 if the entity has no parent."]}),"\n",(0,n.jsx)(t.h3,{id:"getnumberofpartitions",children:"GetNumberOfPartitions"}),"\n",(0,n.jsx)(t.p,{children:"!> Return the number of partitions in the model."}),"\n",(0,n.jsx)(t.h3,{id:"getpartitions",children:"GetPartitions"}),"\n",(0,n.jsx)(t.p,{children:"!> In a partitioned model, return the tags of the partition(s) to which the\n!! entity belongs."}),"\n",(0,n.jsx)(t.h3,{id:"getvalue",children:"GetValue"}),"\n",(0,n.jsxs)(t.p,{children:["!> Evaluate the parametrization of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'\n!! at the parametric coordinates ",(0,n.jsx)(t.code,{children:"parametricCoord'. Only valid for"}),"dim' equal\n!! to 0 (with empty ",(0,n.jsx)(t.code,{children:"parametricCoord'), 1 (with"}),"parametricCoord' containing\n!! parametric coordinates on the curve) or 2 (with ",(0,n.jsx)(t.code,{children:"parametricCoord' !! containing u, v parametric coordinates on the surface, concatenated: [p1u, !! p1v, p2u, ...]). Return x, y, z coordinates in"}),"coord', concatenated: [p1x,\n!! p1y, p1z, p2x, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"getderivative",children:"GetDerivative"}),"\n",(0,n.jsxs)(t.p,{children:["!> Evaluate the derivative of the parametrization of the entity of dimension\n!! ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag' at the parametric coordinates ",(0,n.jsx)(t.code,{children:"parametricCoord'. Only !! valid for"}),"dim' equal to 1 (with ",(0,n.jsx)(t.code,{children:"parametricCoord' containing parametric !! coordinates on the curve) or 2 (with"}),"parametricCoord' containing u, v\n!! parametric coordinates on the surface, concatenated: [p1u, p1v, p2u, ...]).\n!! For ",(0,n.jsx)(t.code,{children:"dim' equal to 1 return the x, y, z components of the derivative with !! respect to u [d1ux, d1uy, d1uz, d2ux, ...]; for"}),"dim' equal to 2 return the\n!! x, y, z components of the derivative with respect to u and v: [d1ux, d1uy,\n!! d1uz, d1vx, d1vy, d1vz, d2ux, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"getsecondderivative",children:"GetSecondDerivative"}),"\n",(0,n.jsxs)(t.p,{children:["!> Evaluate the second derivative of the parametrization of the entity of\n!! dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag' at the parametric coordinates\n!! ",(0,n.jsx)(t.code,{children:"parametricCoord'. Only valid for"}),"dim' equal to 1 (with ",(0,n.jsx)(t.code,{children:"parametricCoord' !! containing parametric coordinates on the curve) or 2 (with !!"}),"parametricCoord' containing u, v parametric coordinates on the surface,\n!! concatenated: [p1u, p1v, p2u, ...]). For ",(0,n.jsx)(t.code,{children:"dim' equal to 1 return the x, y, !! z components of the second derivative with respect to u [d1uux, d1uuy, !! d1uuz, d2uux, ...]; for"}),"dim' equal to 2 return the x, y, z components of\n!! the second derivative with respect to u and v, and the mixed derivative\n!! with respect to u and v: [d1uux, d1uuy, d1uuz, d1vvx, d1vvy, d1vvz, d1uvx,\n!! d1uvy, d1uvz, d2uux, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"getcurvature",children:"GetCurvature"}),"\n",(0,n.jsxs)(t.p,{children:["!> Evaluate the (maximum) curvature of the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag !!"}),"tag' at the parametric coordinates ",(0,n.jsx)(t.code,{children:"parametricCoord'. Only valid for"}),"dim'\n!! equal to 1 (with ",(0,n.jsx)(t.code,{children:"parametricCoord' containing parametric coordinates on the !! curve) or 2 (with"}),"parametricCoord' containing u, v parametric coordinates\n!! on the surface, concatenated: [p1u, p1v, p2u, ...])."]}),"\n",(0,n.jsx)(t.h3,{id:"getprincipalcurvatures",children:"GetPrincipalCurvatures"}),"\n",(0,n.jsxs)(t.p,{children:["!> Evaluate the principal curvatures of the surface with tag ",(0,n.jsx)(t.code,{children:"tag' at the !! parametric coordinates"}),"parametricCoord', as well as their respective\n!! directions. `parametricCoord' are given by pair of u and v coordinates,\n!! concatenated: [p1u, p1v, p2u, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"getnormal",children:"GetNormal"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the normal to the surface with tag ",(0,n.jsx)(t.code,{children:"tag' at the parametric coordinates !!"}),"parametricCoord'. The ",(0,n.jsx)(t.code,{children:"parametricCoord' vector should contain u and v !! coordinates, concatenated: [p1u, p1v, p2u, ...]."}),"normals' are returned as\n!! a vector of x, y, z components, concatenated: [n1x, n1y, n1z, n2x, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"getparametrization",children:"GetParametrization"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the parametric coordinates ",(0,n.jsx)(t.code,{children:"parametricCoord' for the points"}),"coord' on\n!! the entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'. ",(0,n.jsx)(t.code,{children:"coord' are given as x, y, z !! coordinates, concatenated: [p1x, p1y, p1z, p2x, ...]."}),"parametricCoord'\n!! returns the parametric coordinates t on the curve (if ",(0,n.jsx)(t.code,{children:"dim' = 1) or u and v !! coordinates concatenated on the surface (if"}),"dim' = 2), i.e. [p1t, p2t,\n!! ...] or [p1u, p1v, p2u, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"getparametrizationbounds",children:"GetParametrizationBounds"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the ",(0,n.jsx)(t.code,{children:"min' and"}),"max' bounds of the parametric coordinates for the entity\n!! of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"isinside",children:"IsInside"}),"\n",(0,n.jsxs)(t.p,{children:["!> Check if the coordinates (or the parametric coordinates if ",(0,n.jsx)(t.code,{children:"parametric' is !! set) provided in"}),"coord' correspond to points inside the entity of\n!! dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag', and return the number of points inside. This\n!! feature is only available for a subset of entities, depending on the\n!! underlying geometrical representation."]}),"\n",(0,n.jsx)(t.h3,{id:"getclosestpoint",children:"GetClosestPoint"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the points ",(0,n.jsx)(t.code,{children:"closestCoord' on the entity of dimension"}),"dim' and tag\n!! ",(0,n.jsx)(t.code,{children:"tag' to the points"}),"coord', by orthogonal projection. ",(0,n.jsx)(t.code,{children:"coord' and !!"}),"closestCoord' are given as x, y, z coordinates, concatenated: [p1x, p1y,\n!! p1z, p2x, ...]. ",(0,n.jsx)(t.code,{children:"parametricCoord' returns the parametric coordinates t on !! the curve (if"}),"dim' = 1) or u and v coordinates concatenated on the surface\n!! (if `dim' = 2), i.e. [p1t, p2t, ...] or [p1u, p1v, p2u, ...]."]}),"\n",(0,n.jsx)(t.h3,{id:"reparametrizeonsurface",children:"ReparametrizeOnSurface"}),"\n",(0,n.jsxs)(t.p,{children:["!> Reparametrize the boundary entity (point or curve, i.e. with ",(0,n.jsx)(t.code,{children:"dim' == 0 or !!"}),"dim' == 1) of tag ",(0,n.jsx)(t.code,{children:"tag' on the surface"}),"surfaceTag'. If ",(0,n.jsx)(t.code,{children:"dim' == 1, !! reparametrize all the points corresponding to the parametric coordinates !!"}),"parametricCoord'. Multiple matches in case of periodic surfaces can be\n!! selected with `which'. This feature is only available for a subset of\n!! entities, depending on the underlying geometrical representation."]}),"\n",(0,n.jsx)(t.h3,{id:"setvisibility",children:"SetVisibility"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the visibility of the model entities ",(0,n.jsx)(t.code,{children:"dimTags' (given as a vector of !! (dim, tag) pairs) to"}),"value'. Apply the visibility setting recursively if\n!! `recursive' is true."]}),"\n",(0,n.jsx)(t.h3,{id:"getvisibility",children:"GetVisibility"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the visibility of the model entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"setvisibilityperwindow",children:"SetVisibilityPerWindow"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the global visibility of the model per window to ",(0,n.jsx)(t.code,{children:"value', where !!"}),"windowIndex' identifies the window in the window list."]}),"\n",(0,n.jsx)(t.h3,{id:"setcolor",children:"SetColor"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the color of the model entities ",(0,n.jsx)(t.code,{children:"dimTags' (given as a vector of (dim, !! tag) pairs) to the RGBA value ("}),"r', ",(0,n.jsx)(t.code,{children:"g',"}),"b', ",(0,n.jsx)(t.code,{children:"a'), where"}),"r', ",(0,n.jsx)(t.code,{children:"g',"}),"b' and\n!! ",(0,n.jsx)(t.code,{children:"a' should be integers between 0 and 255. Apply the color setting !! recursively if"}),"recursive' is true."]}),"\n",(0,n.jsx)(t.h3,{id:"getcolor",children:"GetColor"}),"\n",(0,n.jsxs)(t.p,{children:["!> Get the color of the model entity of dimension ",(0,n.jsx)(t.code,{children:"dim' and tag"}),"tag'."]}),"\n",(0,n.jsx)(t.h3,{id:"setcoordinates",children:"SetCoordinates"}),"\n",(0,n.jsxs)(t.p,{children:["!> Set the ",(0,n.jsx)(t.code,{children:"x',"}),"y', `z' coordinates of a geometrical point."]}),"\n",(0,n.jsx)(t.h3,{id:"getattributenames",children:"GetAttributeNames"}),"\n",(0,n.jsx)(t.p,{children:"!> Get the names of any optional attributes stored in the model."}),"\n",(0,n.jsx)(t.h3,{id:"getattribute",children:"GetAttribute"}),"\n",(0,n.jsx)(t.p,{children:"!> Get the values of the attribute with name `name'."}),"\n",(0,n.jsx)(t.h3,{id:"setattribute",children:"SetAttribute"}),"\n",(0,n.jsx)(t.p,{children:"!> Set the values of the attribute with name `name'."}),"\n",(0,n.jsx)(t.h3,{id:"removeattribute",children:"RemoveAttribute"}),"\n",(0,n.jsx)(t.p,{children:"!> Remove the attribute with name `name'."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>a});var n=i(67294);const s={},d=n.createContext(s);function a(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);