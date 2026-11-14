(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  let trained=null, evaluated=null, counter=0, trainRun=0, testRun=0;
  const defaults={seed:47,agreement:99,useBackground:true,environment:'same'};
  function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
  function normal(r){return Math.sqrt(-2*Math.log(Math.max(r(),1e-10)))*Math.cos(2*Math.PI*r());}
  function makeExamples(count,seed){const r=rng(seed);return Array.from({length:count},()=>{const label=r()<.5?0:1;return {label,shape:(label?1:-1)+normal(r)*.8,backgroundDraw:r()};});}
  function addBackground(examples,agreement){return examples.map(p=>({...p,background:(p.backgroundDraw<agreement?p.label:1-p.label)?1:-1}));}
  function sigmoid(z){return 1/(1+Math.exp(-Math.max(-35,Math.min(35,z))));}
  function trainClassifier(examples,useBackground){
    const n=examples.length,means=[examples.reduce((s,p)=>s+p.shape,0)/n,examples.reduce((s,p)=>s+p.background,0)/n];
    const scales=[Math.sqrt(examples.reduce((s,p)=>s+(p.shape-means[0])**2,0)/n)||1,Math.sqrt(examples.reduce((s,p)=>s+(p.background-means[1])**2,0)/n)||1];
    const rows=examples.map(p=>[(p.shape-means[0])/scales[0],useBackground?(p.background-means[1])/scales[1]:0,p.label]);
    let weights=[0,0],bias=0;
    for(let epoch=0;epoch<500;epoch++){let g0=0,g1=0,gb=0;for(const [x0,x1,y] of rows){const error=sigmoid(bias+weights[0]*x0+weights[1]*x1)-y;g0+=error*x0;g1+=error*x1;gb+=error;}weights[0]-=.15*(g0/n+.005*weights[0]);weights[1]-=.15*(g1/n+.005*weights[1]);bias-=.15*gb/n;}
    return {weights,bias,means,scales,useBackground};
  }
  function predict(model,p){return sigmoid(model.bias+model.weights[0]*(p.shape-model.means[0])/model.scales[0]+(model.useBackground?model.weights[1]*(p.background-model.means[1])/model.scales[1]:0))>=.5?1:0;}
  function evaluate(model,examples){const predictions=examples.map(p=>({...p,prediction:predict(model,p)}));return {examples:predictions,accuracy:predictions.filter(p=>p.prediction===p.label).length/predictions.length};}
  function draft(){return {seed:Number($('seed').value),agreement:Number($('correlation').value),useBackground:$('use-background').checked,environment:$('environment').value};}
  function trainingDirty(){const d=draft();return !trained||d.seed!==trained.config.seed||d.agreement!==trained.config.agreement||d.useBackground!==trained.config.useBackground||!$('seed').checkValidity()||$('seed').value==='';}
  function testDirty(){return trainingDirty()||!evaluated||draft().environment!==evaluated.environment;}
  function runTraining(){if($('seed').value===''||!$('seed').checkValidity()){$('seed').reportValidity();return false;}const config=draft();const data=addBackground(makeExamples(800,config.seed),config.agreement/100);trained={config,model:trainClassifier(data,config.useBackground)};trainRun=++counter;evaluated=null;testRun=0;return true;}
  function runEvaluation(){if(trainingDirty())return false;const {config,model}=trained,base=makeExamples(600,config.seed+10000),environment=draft().environment;const agreement=environment==='same'?config.agreement/100:environment==='random'?.5:1-config.agreement/100;const familiar=evaluate(model,addBackground(base,config.agreement/100)),test=evaluate(model,addBackground(base,agreement));evaluated={environment,familiar,test};testRun=++counter;return true;}
  function percent(n){return(n*100).toFixed(1)+'%';}
  function renderGallery(){
    const gallery=$('prediction-gallery');gallery.replaceChildren();
    if(!evaluated){gallery.innerHTML='<p class="gallery-empty">Run cell 02 to inspect the predictions.</p>';$('gallery-status').textContent='No evaluation yet.';return;}
    const all=evaluated.test.examples,onlyErrors=$('show-errors').checked,filtered=onlyErrors?all.filter(p=>p.label!==p.prediction):all,shown=filtered.slice(0,12);
    for(const p of shown){const card=document.createElement('figure');const wrong=p.label!==p.prediction;card.className='prediction-example '+(p.background<0?'lilac':'pink')+(wrong?' wrong':'');
      const shape=p.shape<0?'<circle cx="25" cy="25" r="15"/>':'<rect x="10" y="10" width="30" height="30" rx="3"/>';
      card.innerHTML=`<div class="example-art"><svg viewBox="0 0 50 50" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2">${shape}</g></svg><span class="example-verdict" aria-hidden="true">${wrong?'×':'✓'}</span></div><figcaption class="example-labels">true: <strong>${p.label?'square':'circle'}</strong><br>pred: <strong>${p.prediction?'square':'circle'}</strong></figcaption>`;
      card.setAttribute('aria-label',`True class ${p.label?'square':'circle'}, predicted ${p.prediction?'square':'circle'}, ${wrong?'incorrect':'correct'}.`);gallery.append(card);}
    if(!shown.length)gallery.innerHTML='<p class="gallery-empty">No mistakes in this evaluation.</p>';
    const errors=all.filter(p=>p.label!==p.prediction).length;$('gallery-status').textContent=`Showing ${shown.length} ${onlyErrors?'mistakes':'examples'} · ${errors} mistakes in ${all.length} test examples.`;
  }
  function render(){
    const d=draft(),td=trainingDirty(),ed=testDirty();$('correlation-value').value=d.agreement+'%';
    $('train-state').textContent=td?'changes to run':'executed';$('test-state').textContent=ed?'changes to run':'executed';$('train-cell').classList.toggle('is-dirty',td);$('test-cell').classList.toggle('is-dirty',ed);
    $('execution-status').textContent=td?'Training changes to run':ed?'Evaluation changes to run':'All cells executed';$('execution-status').classList.toggle('pending',td||ed);
    $('train-prompt').textContent=`In [${trainRun||' '}]`;$('test-prompt').textContent=`In [${testRun||' '}]`;$('output-prompt').textContent=`Out [${testRun||' '}]`;
    $('train-code').textContent=`const seed = ${$('seed').value||'/* seed */'};\nconst trainingAgreement = ${d.agreement/100};\nconst training = addBackground(\n  makeExamples(800, seed), trainingAgreement\n);\nconst model = trainClassifier(training, ${d.useBackground});`;
    const testAgreement=d.environment==='same'?'trainingAgreement':d.environment==='random'?'0.5':'1 - trainingAgreement';
    $('test-code').textContent=`const test = addBackground(\n  makeExamples(600, seed + 10000),\n  ${testAgreement}\n);\nconst result = evaluate(model, test);`;
    $('environment-help').textContent=d.environment==='same'?'New examples, but the same relationship between background and label.':d.environment==='random'?'The background is independent of the class. The shape scores and labels stay the same.':'The background–label relationship is flipped. The shape scores and labels stay the same.';
    $('environment-arrow').textContent=d.environment==='same'?'→ same rule':d.environment==='random'?'→ random':'⇄ reversed';
    $('output-warning').hidden=!td&&!ed;$('output-warning').textContent=td?'Training settings changed. Run cell 01, then cell 02 — or Run all. Existing scores still refer to the last executed settings.':!evaluated?'Model trained. Run cell 02 to evaluate on held-out examples.':'Environment changed. Run cell 02 to update the results.';
    $('seed-status').textContent='executed seed: '+(trained?.config.seed??'—');$('shift-environment').disabled=td;
    $('shift-environment').textContent=evaluated?.environment==='reversed'?'↔ Restore the familiar rule':'↔ Swap the backgrounds';
    $('model-description').textContent=trained?`model inputs: shape_score${trained.config.useBackground?' + background_code':''}`:'';
    const labels={same:'Same relationship',random:'Random backgrounds',reversed:'Reversed relationship'};
    $('test-label').textContent=evaluated?labels[evaluated.environment]:'Test environment';
    $('familiar-score').textContent=evaluated?percent(evaluated.familiar.accuracy):'—';$('test-score').textContent=evaluated?percent(evaluated.test.accuracy):'—';
    $('familiar-bar').style.width=evaluated?percent(evaluated.familiar.accuracy):'0%';$('test-bar').style.width=evaluated?percent(evaluated.test.accuracy):'0%';
    const difference=evaluated?(evaluated.test.accuracy-evaluated.familiar.accuracy)*100:0;
    $('score-change').textContent=evaluated?`${difference>0?'+':''}${difference.toFixed(1)} percentage points vs familiar`:'Run evaluation to compare';
    const w=trained?trained.model.weights.map(Math.abs):[0,0],max=Math.max(...w,.001);
    $('shape-weight').textContent=w[0].toFixed(2);$('background-weight').textContent=w[1].toFixed(2);$('shape-weight-bar').style.width=w[0]/max*100+'%';$('background-weight-bar').style.width=w[1]/max*100+'%';
    $('observation').textContent=!evaluated?'The model is ready. Now test it on examples it has never seen.':!trained.config.useBackground?'Without the background input, predictions stay exactly the same when only backgrounds change. The shape cue is noisy, so some mistakes remain.':evaluated.environment==='same'?'A familiar-environment score cannot tell you whether the model learned the right cue. Swap the backgrounds without changing the shape scores or labels.':difference<-10?'The model’s score fell when the background rule changed. It had learned to rely on that convenient clue. Disable the background, retrain, and compare.':'This model is less affected by the background change. Try increasing background agreement during training, retrain, then swap again.';
    renderGallery();
  }
  function runAll(){if(runTraining())runEvaluation();render();}
  ['correlation','seed'].forEach(id=>$(id).addEventListener('input',render));['use-background','environment'].forEach(id=>$(id).addEventListener('change',render));$('show-errors').addEventListener('change',renderGallery);
  $('new-seed').addEventListener('click',()=>{$('seed').value=((Number($('seed').value)||0)+1)%1000000;render();});
  $('run-train').addEventListener('click',()=>{runTraining();render();});$('run-test').addEventListener('click',()=>{if(!runEvaluation()){$('execution-status').textContent='Run cell 01 first';$('run-train').focus();}else render();});$('run-all').addEventListener('click',runAll);
  $('shift-environment').addEventListener('click',()=>{if(trainingDirty())return;$('environment').value=evaluated?.environment==='reversed'?'same':'reversed';runEvaluation();render();});
  $('reset').addEventListener('click',()=>{$('seed').value=defaults.seed;$('correlation').value=defaults.agreement;$('use-background').checked=defaults.useBackground;$('environment').value=defaults.environment;$('show-errors').checked=false;counter=0;runAll();});
  runAll();
})();
