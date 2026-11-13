for(const media of document.querySelectorAll('[data-album]')){
 const photos=JSON.parse(media.dataset.album);
 let i=0;
 for(const button of media.querySelectorAll('[data-step]'))button.addEventListener('click',()=>{
  i=(i+Number(button.dataset.step)+photos.length)%photos.length;
  const img=media.querySelector('figure img');
  img.src=photos[i].src;img.alt=photos[i].alt;
  media.querySelector('figcaption').textContent=photos[i].alt;
  media.querySelector('.gallery-count').textContent=(i+1)+' / '+photos.length;
  media.querySelector('figure').classList.toggle('is-cover',photos[i].src.endsWith('/cover.jpg'));
 });
}
