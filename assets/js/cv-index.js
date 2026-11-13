(() => {
 const sections=[...document.querySelectorAll('.cv-visual-section')];
 const links=[...document.querySelectorAll('.cv-visual-index a')];
 if(!sections.length)return;
 function highlight(){
  let active=sections[0];
  for(const section of sections)if(section.getBoundingClientRect().top<innerHeight*.4)active=section;
  for(const link of links){
   if(link.getAttribute('href')==='#'+active.id)link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  }
 }
 let queued=false;
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(()=>{highlight();queued=false;});}},{passive:true});
 highlight();
})();
