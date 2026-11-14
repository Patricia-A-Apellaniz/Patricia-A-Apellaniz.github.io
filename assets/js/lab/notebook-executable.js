(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const defaults = {size:36, seed:47, count:240, method:'local'};
  let committedSample, committedGenerator, sample = [], generated = [], execution = 0, sampleRun = 0, generatorRun = 0;
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function normal(r) { return Math.sqrt(-2 * Math.log(Math.max(r(), 1e-10))) * Math.cos(2 * Math.PI * r()); }
  const random = rng(291), population = Array.from({length:600}, (_,i) => {
    const g=i<270?0:i<510?1:2, a=normal(random), b=normal(random);
    return g===0?{x:29+8*a,y:35+5*a+6*b,g}:g===1?{x:71+7*a,y:64-3*a+8*b,g}:{x:46+3*a,y:80+3*b,g};
  });
  function samplePopulation(n, seed) {
    const r=rng(seed), shuffled=[...population];
    for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
    return shuffled.slice(0,n);
  }
  function generateSynthetic(observed,{method,count,seed}) {
    const r=rng(seed);
    if(method==='local') return Array.from({length:count},()=>{const p=observed[Math.floor(r()*observed.length)];return {x:p.x+normal(r)*3.5,y:p.y+normal(r)*3.5};});
    const n=observed.length, mx=observed.reduce((s,p)=>s+p.x,0)/n, my=observed.reduce((s,p)=>s+p.y,0)/n;
    const vx=observed.reduce((s,p)=>s+(p.x-mx)**2,0)/(n-1), vy=observed.reduce((s,p)=>s+(p.y-my)**2,0)/(n-1), cov=observed.reduce((s,p)=>s+(p.x-mx)*(p.y-my),0)/(n-1);
    const a=Math.sqrt(vx),b=cov/a,c=Math.sqrt(Math.max(vy-b*b,0));
    return Array.from({length:count},()=>{const u=normal(r),v=normal(r);return {x:mx+a*u,y:my+b*u+c*v};});
  }
  function draft() { return {size:Number($('sample-size').value),seed:Number($('seed').value),count:Number($('synthetic-size').value),method:$('method').value}; }
  function sampleDirty(){const d=draft();return !committedSample||d.size!==committedSample.size||d.seed!==committedSample.seed||!$('seed').validity.valid||$('seed').value==='';}
  function generatorDirty(){const d=draft();return sampleDirty()||!committedGenerator||d.count!==committedGenerator.count||d.method!==committedGenerator.method;}
  function validSeed(){if($('seed').value===''||!$('seed').checkValidity()){$('seed').reportValidity();return false;}return true;}
  function runSample(){if(!validSeed())return false;const d=draft();committedSample={size:d.size,seed:d.seed};sample=samplePopulation(d.size,d.seed);sampleRun=++execution;generated=[];committedGenerator=null;generatorRun=0;return true;}
  function runGenerator(){if(sampleDirty()){ $('execution-status').textContent='Run cell 01 first';$('sample-cell').scrollIntoView({block:'center',behavior:'smooth'});$('run-sample').focus();return false;}const d=draft();committedGenerator={method:d.method,count:d.count,seed:committedSample.seed+1000};generated=generateSynthetic(sample,committedGenerator);generatorRun=++execution;return true;}
  function chart(id,points,synthetic){
    const all=[...population,...generated], low=Math.min(-5,...all.flatMap(p=>[p.x,p.y]))-4,high=Math.max(105,...all.flatMap(p=>[p.x,p.y]))+4;
    const x=v=>38+(v-low)/(high-low)*290,y=v=>263-(v-low)/(high-low)*243;
    let svg=`<defs><clipPath id="clip-${id}"><rect x="38" y="20" width="290" height="243"/></clipPath></defs>`;
    for(let i=0;i<=100;i+=25)svg+=`<path d="M${x(i)} 20V263M38 ${y(i)}H328" stroke="#e7dce3" stroke-width=".7" stroke-dasharray="2 5"/>`;
    svg+='<path d="M38 20V263H328" fill="none" stroke="#c5afbe"/><g fill="#8b7484" font-family="system-ui,sans-serif" font-size="9"><text x="183" y="289" text-anchor="middle">Feature 1</text><text transform="translate(13 145) rotate(-90)" text-anchor="middle">Feature 2</text></g>';
    svg+=`<g clip-path="url(#clip-${id})">`;
    if($('show-reference').checked)for(const p of population)svg+=`<circle cx="${x(p.x).toFixed(2)}" cy="${y(p.y).toFixed(2)}" r="2" fill="#b6b4ac" opacity=".32"/>`;
    for(const p of points)svg+=`<circle cx="${x(p.x).toFixed(2)}" cy="${y(p.y).toFixed(2)}" r="${synthetic?2.5:3.8}" fill="${synthetic?'#c29bcc':'#743c69'}" fill-opacity="${synthetic?.28:.85}" stroke="${synthetic?'#9b66aa':'#fffcf8'}" stroke-width="${synthetic?.8:1.2}"/>`;
    svg+='</g>';
    if(synthetic&&!points.length)svg+='<text x="183" y="144" text-anchor="middle" fill="#a08498" font-family="monospace" font-size="11">Run cell 02 to generate data.</text>';
    $(id).innerHTML=svg;
    $(id).setAttribute('aria-label',`${points.length} ${synthetic?'synthetic':'observed'} points on two abstract features${$('show-reference').checked?', with reference population in grey':''}.`);
  }
  function render(){
    const d=draft(),sd=sampleDirty(),gd=generatorDirty();
    $('sample-value').value=d.size;$('synthetic-value').value=d.count;
    $('sample-state').textContent=sd?'changes to run':'executed';$('generator-state').textContent=gd?'changes to run':'executed';
    $('sample-cell').classList.toggle('is-dirty',sd);$('generator-cell').classList.toggle('is-dirty',gd);
    $('execution-status').textContent=sd?'Sampling changes to run':gd?'Generation changes to run':'All cells executed';$('execution-status').classList.toggle('pending',sd||gd);
    $('sample-prompt').textContent=`In [${sampleRun||' '}]`;$('generator-prompt').textContent=`In [${generatorRun||' '}]`;$('output-prompt').textContent=`Out [${generatorRun||' '}]`;
    $('sample-code').textContent=`const observed = samplePopulation(${d.size}, ${$('seed').value||'/* seed */'});\n// Sampling without replacement.`;
    $('generator-code').textContent=`const synthetic = generateSynthetic(observed, {\n  method: "${d.method}",\n  count: ${d.count},\n  seed: ${Number.isFinite(d.seed)?d.seed+1000:'/* seed + 1000 */'}\n});`;
    $('method-help').textContent=d.method==='local'?'Resample a point, then add a little Gaussian noise.':'Fit one bell-shaped distribution to the whole sample.';
    chart('observed-plot',sample,false);chart('synthetic-plot',generated,true);
    $('observed-count').textContent=sample.length+' points';$('generated-count').textContent=generated.length?generated.length+' points':'not run';
    $('output-warning').hidden=!sd&&!gd;
    $('output-warning').textContent=sd?'Parameters changed. Run cell 01, then cell 02 — or use Run all. The plots still show the last executed values.':!generated.length?'New sample ready. Run cell 02 to generate from it.':'Generator parameters changed. Run cell 02 to update the result. The plots still show the last executed values.';
    const local=committedGenerator?.method==='local', small=sample.filter(p=>p.g===2).length;
    $('observation').textContent=!generated.length?'The observed sample is ready. Now generate from it and compare with the reference population.':local?(small===0?'This sample missed the small group. More points around what we saw won’t bring that group back. Reveal the reference population to find it.':`The small group has ${small} observed point${small===1?'':'s'}. Resampling can reproduce its presence, but also the sample’s imbalance. More points don’t fix that.`):'One Gaussian smooths everything into a single cloud. It can put new points in the gaps between groups, where the reference population has very few observations.';
    $('experiment-status').textContent=`${sample.length} observed → ${generated.length} synthetic${$('show-reference').checked?' · reference in grey':''}`;
    $('seed-status').textContent='executed seed: '+(committedSample?.seed??'—');$('save-figure').disabled=sd||gd||!generated.length;
  }
  function runAll(){if(!runSample()){render();return;}runGenerator();render();}
  $('sample-size').addEventListener('input',render);$('synthetic-size').addEventListener('input',render);$('seed').addEventListener('input',render);$('method').addEventListener('change',render);$('show-reference').addEventListener('change',render);
  $('new-seed').addEventListener('click',()=>{$('seed').value=(Math.max(0,Math.min(999999,Number($('seed').value)||0))+1)%1000000;render();});
  $('run-sample').addEventListener('click',()=>{runSample();render();});
  $('run-generator').addEventListener('click',()=>{if(runGenerator())render();});
  $('run-all').addEventListener('click',runAll);
  $('reset').addEventListener('click',()=>{$('sample-size').value=defaults.size;$('seed').value=defaults.seed;$('synthetic-size').value=defaults.count;$('method').value=defaults.method;$('show-reference').checked=false;execution=0;switchPlot('observed');runAll();});
  function switchPlot(view){document.querySelector('.plot-grid').dataset.active=view;document.querySelectorAll('[data-plot]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.plot===view)));}
  document.querySelectorAll('[data-plot]').forEach(b=>b.addEventListener('click',()=>switchPlot(b.dataset.plot)));
  $('save-figure').addEventListener('click',()=>{
    if(sampleDirty()||generatorDirty()||!generated.length)return;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 390"><rect width="760" height="390" fill="#fffcf8"/><g font-family="sans-serif" fill="#743c69"><text x="25" y="30" font-size="17">A little more data? · Patricia’s notebook</text><text x="25" y="59" font-size="12">Observed (${sample.length})</text><text x="405" y="59" font-size="12">Synthetic (${generated.length})</text><text x="25" y="377" font-size="10">Illustrative data · seed ${committedSample.seed} · ${committedGenerator.method}${$('show-reference').checked?' · reference population in grey':''}</text></g><g transform="translate(0 65)">${$('observed-plot').innerHTML}</g><g transform="translate(380 65)">${$('synthetic-plot').innerHTML}</g></svg>`;
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'})),a=document.createElement('a');a.href=url;a.download=`synthetic-data-seed-${committedSample.seed}.svg`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  runAll();
})();
