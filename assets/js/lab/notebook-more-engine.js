(function(root){
  'use strict';
  function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
  function normal(r){return Math.sqrt(-2*Math.log(Math.max(r(),1e-10)))*Math.cos(2*Math.PI*r());}
  const mean=a=>a.reduce((s,v)=>s+v,0)/a.length;
  const sd=a=>Math.sqrt(mean(a.map(v=>(v-mean(a))**2)));
  function median(a){const b=[...a].sort((x,y)=>x-y),i=Math.floor(b.length/2);return b.length%2?b[i]:(b[i-1]+b[i])/2;}
  function corr(data){const xs=data.map(p=>p.x),ys=data.map(p=>p.y),mx=mean(xs),my=mean(ys);return mean(data.map(p=>(p.x-mx)*(p.y-my)))/(sd(xs)*sd(ys));}
  function paired(n,seed,rho){const r=rng(seed);return Array.from({length:n},()=>{const x=normal(r);return {x,y:rho*x+Math.sqrt(1-rho*rho)*normal(r)};});}
  function mixture(n,seed){const r=rng(seed);return Array.from({length:n},()=>{const group=r()<.5?-1:1;return {x:group*1.3+normal(r)*.55,y:group*.8+normal(r)*.6};});}
  function nearest(p,reference){let best=Infinity,index=-1;reference.forEach((q,i)=>{const d=Math.hypot(p.x-q.x,p.y-q.y);if(d<best){best=d;index=i;}});return {distance:best,index};}
  function km(rows){const times=[...new Set(rows.map(p=>p.time))].sort((a,b)=>a-b);let atRisk=rows.length,survival=1;const curve=[{t:0,s:1}];for(const t of times){const atTime=rows.filter(p=>p.time===t),events=atTime.filter(p=>p.event).length;if(events){curve.push({t,s:survival});survival*=1-events/atRisk;curve.push({t,s:survival});}atRisk-=atTime.length;}return {curve,survival};}
  const domains={health:{title:'Wearable signals',x:'Heart rate (bpm)',y:'HRV (ms)',mu:[70,45],sigma:[6,7],sign:-1},battery:{title:'Battery monitoring',x:'Resistance (mΩ)',y:'Temperature (°C)',mu:[50,25],sigma:[5,2],sign:1}};
  function makeData(kind,c){
    if(kind==='survival'){const r=rng(c.seed);return {cohort:Array.from({length:c.n},()=>({eventTime:-10*Math.log(Math.max(r(),1e-10)),dropout:-12*Math.log(Math.max(r(),1e-10))}))};}
    if(kind==='validation')return {reference:paired(200,c.seed,c.rho/100),test:paired(1000,c.seed+10000,c.rho/100),rho:c.rho/100,seed:c.seed};
    if(kind==='privacy')return {reference:mixture(c.n,c.seed),holdout:mixture(400,c.seed+10000),seed:c.seed};
    const d=domains[c.domain],r=rng(c.seed);const raw=(z0,z1,label=0)=>({x:d.mu[0]+d.sigma[0]*z0,y:d.mu[1]+d.sigma[1]*d.sign*z1,label});
    const reference=Array.from({length:120},()=>raw(normal(r),normal(r)));const test=Array.from({length:240},()=>{const label=r()<.2?1:0;return raw(normal(r)+label*2.8,normal(r)+label*2,label);});return {reference,test,domain:d,seed:c.seed};
  }
  function analyze(kind,data,c){
    if(kind==='survival'){const rows=data.cohort.map(p=>{const limit=c.dropout?Math.min(c.followup,p.dropout):c.followup;return {...p,time:Math.min(p.eventTime,limit),event:p.eventTime<=limit};}),estimate=km(rows),events=rows.filter(p=>p.event).length;const naive=km(rows.map(p=>({...p,event:true}))).curve,truth=km(data.cohort.map(p=>({time:p.eventTime,event:true}))).curve;return {rows,estimate,events,censored:rows.length-events,naive,truth,followup:c.followup};}
    if(kind==='validation'){let synthetic;const n=data.reference.length,r=rng(data.seed+1000);if(c.method==='shuffle'){const ys=data.reference.map(p=>p.y);for(let i=n-1;i>0;i--){const j=Math.floor(r()*(i+1));[ys[i],ys[j]]=[ys[j],ys[i]];}synthetic=data.reference.map((p,i)=>({x:p.x,y:ys[i]}));}else synthetic=paired(n,data.seed+1000,c.method==='opposite'?-data.rho:data.rho);
      const w1=key=>{const a=data.reference.map(p=>p[key]).sort((a,b)=>a-b),b=synthetic.map(p=>p[key]).sort((a,b)=>a-b);return mean(a.map((v,i)=>Math.abs(v-b[i])));};
      const mse=train=>{const mx=mean(train.map(p=>p.x)),my=mean(train.map(p=>p.y)),slope=mean(train.map(p=>(p.x-mx)*(p.y-my)))/mean(train.map(p=>(p.x-mx)**2)),intercept=my-slope*mx;return mean(data.test.map(p=>(p.y-(intercept+slope*p.x))**2));};
      return {synthetic,referenceCorr:corr(data.reference),syntheticCorr:corr(synthetic),wx:w1('x'),wy:w1('y'),referenceMSE:mse(data.reference),syntheticMSE:mse(synthetic),referenceStats:['x','y'].map(k=>({mean:mean(data.reference.map(p=>p[k])),sd:sd(data.reference.map(p=>p[k]))})),syntheticStats:['x','y'].map(k=>({mean:mean(synthetic.map(p=>p[k])),sd:sd(synthetic.map(p=>p[k]))}))};
    }
    if(kind==='privacy'){const r=rng(data.seed+1000),synthetic=Array.from({length:240},()=>{const p=data.reference[Math.floor(r()*data.reference.length)],copy=r()<c.copies/100,dx=normal(r),dy=normal(r),noise=c.noise/100;return {x:p.x+(copy?0:dx*noise),y:p.y+(copy?0:dy*noise)};});const trainDistances=synthetic.map(p=>nearest(p,data.reference)),holdoutDistances=synthetic.map(p=>nearest(p,data.holdout).distance),copies=trainDistances.filter(d=>d.distance<1e-10).length;return {synthetic,trainDistances,holdoutDistances,copies,medianTrain:median(trainDistances.map(p=>p.distance)),medianHoldout:median(holdoutDistances)};}
    const mx=mean(data.reference.map(p=>p.x)),my=mean(data.reference.map(p=>p.y)),sx=sd(data.reference.map(p=>p.x)),sy=sd(data.reference.map(p=>p.y));const test=data.test.map(p=>({...p,x:p.x+(c.shift?1.5*data.domain.sigma[0]:0),y:p.y+(c.shift?1.5*data.domain.sigma[1]:0)}));const evaluated=test.map(p=>{const z0=(p.x-mx)/sx,z1=(p.y-my)/sy,score=Math.hypot(z0,z1);return {...p,z0,z1,score,flag:score>c.threshold};});const tp=evaluated.filter(p=>p.label&&p.flag).length,fp=evaluated.filter(p=>!p.label&&p.flag).length,fn=evaluated.filter(p=>p.label&&!p.flag).length,tn=evaluated.filter(p=>!p.label&&!p.flag).length;return {evaluated,tp,fp,fn,tn,recall:tp/(tp+fn),fpr:fp/(fp+tn),mx,my,sx,sy,threshold:c.threshold};
  }
  const api={rng,mean,sd,median,corr,nearest,km,domains,makeData,analyze};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.NotebookMoreEngine=api;
})(globalThis);
