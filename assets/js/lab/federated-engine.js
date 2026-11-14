(function(root){
  'use strict';
  function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
  function normal(r){return Math.sqrt(-2*Math.log(Math.max(r(),1e-10)))*Math.cos(2*Math.PI*r());}
  function makeHospital(count,seed,index,heterogeneity){const r=rng(seed),prevalence=.5+(index-1)*.45*heterogeneity;return Array.from({length:count},()=>{const label=r()<prevalence?1:0;return {x:[((label?1:-1)*1.15+normal(r)*1.05)/2,((label?1:-1)*.6+(index-1)*2.1*heterogeneity+normal(r)*.9)/3],label};});}
  function partitionHospitals({seed,heterogeneity,unequal}){const counts=unequal?[320,120,40]:[160,160,160];return counts.map((n,i)=>({name:['A','B','C'][i],train:makeHospital(n,seed+i*1000,i,heterogeneity),test:makeHospital(200,seed+10000+i*1000,i,heterogeneity)}));}
  function train(model,data,steps){let w=[...model];for(let s=0;s<steps;s++){const g=[0,0,0];for(const p of data){const z=Math.max(-35,Math.min(35,w[0]*p.x[0]+w[1]*p.x[1]+w[2])),e=1/(1+Math.exp(-z))-p.label;g[0]+=e*p.x[0];g[1]+=e*p.x[1];g[2]+=e;}w=w.map((v,j)=>v-.3*(g[j]/data.length+(j<2?.005*v:0)));}return w;}
  function averageModels(models,counts){const total=counts.reduce((a,b)=>a+b,0);return [0,1,2].map(j=>models.reduce((s,w,i)=>s+w[j]*counts[i]/total,0));}
  function accuracy(model,data){return data.reduce((s,p)=>s+Number(Number(model[0]*p.x[0]+model[1]*p.x[1]+model[2]>=0)===p.label),0)/data.length;}
  function start(hospitals){return {hospitals,round:0,federated:[0,0,0],central:[0,0,0],locals:hospitals.map(()=>[0,0,0]),history:[],updates:[]};}
  function nextRound(state,localSteps){const {hospitals}=state,counts=hospitals.map(h=>h.train.length);const updates=hospitals.map(h=>train(state.federated,h.train,localSteps));const federated=averageModels(updates,counts),central=train(state.central,hospitals.flatMap(h=>h.train),localSteps),locals=hospitals.map((h,i)=>train(state.locals[i],h.train,localSteps));const test=hospitals.flatMap(h=>h.test);return {...state,round:state.round+1,federated,central,locals,updates,history:[...state.history,{round:state.round+1,federated:accuracy(federated,test),central:accuracy(central,test)}]};}
  const api={partitionHospitals,train,averageModels,accuracy,start,nextRound};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.FederatedExperiment=api;
})(globalThis);
