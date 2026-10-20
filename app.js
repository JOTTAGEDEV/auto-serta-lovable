// Contatos e animações independentes de plataforma. Sem dependências.
const phone='5548988450189';
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=`https://wa.me/${phone}?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um serviço para meu carro.')}`;a.target='_blank';a.rel='noopener noreferrer'});
document.querySelectorAll('[data-map]').forEach(a=>{a.href='https://www.google.com/maps/search/?api=1&query=Auto+Serta+Mecanica+Rua+Joao+Aldoff+549+Palhoca+SC';a.target='_blank';a.rel='noopener noreferrer'});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');nav.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const dialog=document.querySelector('.lightbox');let previousFocus;
document.querySelectorAll('.photo-open').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;const source=button.querySelector('img');dialog.querySelector('img').src=source.src;dialog.querySelector('img').alt=source.alt;dialog.querySelector('p').textContent=source.alt;dialog.showModal();document.body.style.overflow='hidden'}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus()});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let observer;
function setupReveals(){observer?.disconnect();document.documentElement.classList.toggle('motion-ready',!reduced.matches);if(reduced.matches)return;observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el))}
setupReveals();
const story=document.querySelector('.photo-story'),frames=[...document.querySelectorAll('.story-frame')],bars=[...document.querySelectorAll('.story-progress span')];
const captions=['Estrutura da oficina','Um espaço para cuidar do seu carro','Auto Serta, por dentro','Nossa equipe'];
const progress=document.createElement('div');progress.className='page-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
let scheduled=false;
function renderScroll(){scheduled=false;const r=story.getBoundingClientRect();const travel=story.offsetHeight-document.querySelector('.story-stage').offsetHeight;const p=Math.max(0,Math.min(1,-r.top/Math.max(1,travel)));const position=p*(frames.length-1);const active=Math.min(frames.length-1,Math.round(position));if(!reduced.matches){frames.forEach((img,i)=>{const opacity=i===0?1:Math.max(0,Math.min(1,(position-(i-1)-.35)/.65));img.style.opacity=String(opacity);img.style.transform=`scale(${1.035-Math.min(1,Math.max(0,position-i))*.035})`});}else{frames.forEach(img=>{img.style.opacity='';img.style.transform=''})}bars.forEach((bar,i)=>bar.classList.toggle('active',i<=active));document.querySelector('.story-count').textContent=`${String(active+1).padStart(2,'0')} / 04`;document.querySelector('.story-caption').textContent=captions[active];const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?scrollY/max:0})`}
function queueScroll(){if(!scheduled){scheduled=true;requestAnimationFrame(renderScroll)}}
addEventListener('scroll',queueScroll,{passive:true});addEventListener('resize',queueScroll);reduced.addEventListener('change',()=>{setupReveals();queueScroll()});renderScroll();
