import{u as k,Q as p,a as I,b as f}from"./useApi.eb451e85.js";import{c as _,Q as h,b as s,d as b}from"./QItem.44f935d3.js";import{Q as v,a as L}from"./api.003f00bf.js";import{_ as S}from"./TrackedRunListItem.5a08d422.js";import{d as w}from"./dayjs.min.54da9cde.js";import{J as N,r as x,c as V,K as r,L as Q,M as e,d as a,Q as n,O as l,P as u,$ as y,R as B,S as j,F as P}from"./index.d4c03e1b.js";import"./use-router-link.ecbfef0e.js";import"./render.0ac7bcf9.js";import"./index.2cf0d985.js";import"./config.b6f61684.js";import"./QCircularProgress.b5983711.js";import"./format.801e7424.js";import"./QChip.11872492.js";import"./api.9a3f3035.js";import"./relativeTime.a9f93413.js";const q={class:"row"},C={class:"col-12 q-py-md"},D={class:"col-12"},X=N({__name:"BatchShowPage",props:{batchId:null},setup(g){const o=g,t=x(null);k(d=>{L.batchShow(o.batchId).then(i=>t.value=i).finally(d)});const c=V(()=>t.value===null?"Loading":t.value.name!==null&&t.value.name!==""?t.value.name:"dispatched at "+w(t.value.created_at).format("L LTS"));return(d,i)=>t.value!==null?(r(),Q(v,{key:0,class:"justify-evenly",padding:""},{default:e(()=>[a(I,null,{default:e(()=>[a(p,{icon:"list",to:"/batch",label:"Batches"}),a(p,{icon:"list",to:"/batch/"+o.batchId,label:"Batch #"+o.batchId},null,8,["to","label"])]),_:1}),n("div",q,[n("div",C,[a(b,{bordered:"",separator:""},{default:e(()=>[a(_,null,{default:e(()=>[a(h,null,{default:e(()=>[a(s,null,{default:e(()=>[l(u(t.value.batch_id),1)]),_:1}),a(s,{caption:""},{default:e(()=>[l("Batch ID")]),_:1})]),_:1})]),_:1}),a(_,null,{default:e(()=>[a(h,null,{default:e(()=>[a(s,null,{default:e(()=>[l(u(y(c)),1)]),_:1}),a(s,{caption:""},{default:e(()=>[l("Name")]),_:1})]),_:1})]),_:1})]),_:1})]),n("div",D,[a(b,{class:"rounded-borders q-pa-lg"},{default:e(()=>[a(s,{header:""},{default:e(()=>[l("Viewing batch '"+u(y(c))+"'",1)]),_:1}),a(f),(r(!0),B(P,null,j(t.value.runs,m=>(r(),B("div",{key:m.id},[a(S,{"tracked-run":m},null,8,["tracked-run"]),a(f)]))),128))]),_:1})])])]),_:1})):(r(),Q(v,{key:1,class:"items-center justify-evenly"},{default:e(()=>[l(" Loading ")]),_:1}))}});export{X as default};
