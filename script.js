(function(){var r=document.documentElement,b=document.getElementById('t');
try{var s=localStorage.getItem('theme');if(s)r.setAttribute('data-theme',s)}catch(e){}
b.addEventListener('click',function(){
var d=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
var n=d==='dark'?'light':'dark';r.setAttribute('data-theme',n);
try{localStorage.setItem('theme',n)}catch(e){}})})();
var cf=document.getElementById('f');
if(cf)cf.addEventListener('submit',function(ev){
ev.preventDefault();
var st=document.getElementById('fs');
function say(t,c){if(st){st.textContent=t;st.className='fstatus '+(c||'')}}
var n=document.getElementById('n'),e=document.getElementById('e'),s=document.getElementById('s'),m=document.getElementById('m');
var nv=n.value.trim(),ev2=e.value.trim(),sv=s?s.value.trim():'',mv=m.value.trim();
if(!nv||!ev2||!mv){say('Merci de remplir le nom, l’email et le message.','err');return}
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(ev2)){say('Adresse email invalide.','err');e.focus();return}
location.href='mailto:mamorisonolidon@gmail.com?subject='+encodeURIComponent(sv||('Contact portfolio – '+nv))+'&body='+encodeURIComponent(mv+'\n\n'+nv+' ('+ev2+')');
say('Votre application de messagerie va s’ouvrir pour envoyer le message.','ok');
});
(function(){
var h=document.querySelector('header'),nav=document.getElementById('nav'),b=document.getElementById('bg'),r=document.documentElement;
function set(o){nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');r.classList.toggle('nav-open',o);b.querySelector('use').setAttribute('href',o?'#i-x':'#i-menu')}
b.addEventListener('click',function(){set(!nav.classList.contains('open'))});
nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
document.addEventListener('click',function(e){if(!h.contains(e.target))set(false)});
matchMedia('(min-width:1181px)').addEventListener('change',function(){set(false)});
addEventListener('scroll',function(){h.classList.toggle('sc',scrollY>8)},{passive:true});
var links={};nav.querySelectorAll('a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;
for(var k in links){links[k].classList.remove('on');links[k].removeAttribute('aria-current')}
var a=links[en.target.id];if(a){a.classList.add('on');a.setAttribute('aria-current','true')}})},{rootMargin:'-40% 0px -55% 0px'});
Object.keys(links).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s)});
})();

(function(){
var cards=document.querySelectorAll('.sk-card');
if(!cards.length||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
document.documentElement.classList.add('sk-anim');
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');o.unobserve(e.target)}})},{threshold:.2});
cards.forEach(function(c){o.observe(c)});
})();


(function(){
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var els=document.querySelectorAll('.ab-text,.ab-card,.tl-item,.sv-card,.sk-intro,.pj-card,.pd-card,.ct-panel');
if(!els.length)return;
document.documentElement.classList.add('rv-on');
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(el){el.classList.add('rv');o.observe(el)});
})();

(function(){
var t=document.getElementById('tw');if(!t)return;
var w=['sites web','applications mobiles','interfaces modernes','cartes interactives'];
if(matchMedia('(prefers-reduced-motion: reduce)').matches){t.textContent=w[0];return}
var i=0,j=0,del=false;
function tick(){var s=w[i];
if(!del){j++;t.textContent=s.slice(0,j);if(j===s.length){del=true;return setTimeout(tick,1600)}}
else{j--;t.textContent=s.slice(0,j);if(j===0){del=false;i=(i+1)%w.length}}
setTimeout(tick,del?35:70)}
t.textContent='';tick();
})();
