/* ═══ THE REPUBLIC GAZETTE · sparkle layer (shared, Grade 5) ════════════════════════════════════════════════════
   One file for every G5 social studies lesson that has been sparkled. It holds NO lesson content: every word, card,
   picture and question comes from the lesson's own <script type="application/json" id="rg-data"> block in <head>.
   A missing key only turns off its own feature. teardown() puts the original page back.

   What it does (built at runtime on anchors the G5 template already has):
   · the press bar: a sticky bar that holds the four tabs, a tiny front-page proof that inks in as each tab is
     really done (masthead → headline → columns → photo), the student's name, and the 📠 wire
   · Ms. Avery (Editor-in-Chief) sends notes on a teletype wire; replies are tap-to-send; each note can have a ▶
     in her voice (audio/guide/g5ss-<lesson>-txt-<key>.mp3)
   · Editor's Lens line, the story so far, stage heads per tab, wire strips at the end of each tab
   · lesson modules (MOD table): scene1 · explore.reading · explore.evidence · planner · vocab (Word Desk) · almanac
   · Fact-Check one question at a time + "why that one's tempting" lines (quizMiss)
   · Go to Press stepper: Plan → Write → Archive Line → Review & publish; live word counters everywhere
   · the red pencil: the student strikes the Herald's claim and their correction prints over it
   · the Morgue: the newspaper's archive of every issue the student has published this year
   · desk tray: 🖍 highlighter (with a short lesson on key words), 📷 press camera (optional photo missions),
     newsroom props that teach how real newspapers worked
   · voice notes with Spotlight (page parts light up as Ms. Avery names them), the Reporter's Notebook download
   · ?review in the address adds a review bar (layer on/off, show empty media slots, reset progress)
   ════════════════════════════════════════════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  if(window.__rgSparkle) return; window.__rgSparkle=true;
  var DATA={}; try{ var dj=document.getElementById('rg-data'); if(dj) DATA=JSON.parse(dj.textContent)||{}; }catch(e){ console.warn('rg layer: bad rg-data',e); }
  if(!DATA.lesson){ return; }
  var LESSON=String(DATA.lesson).replace(/\./g,'-');
  var KEY='oao.rg.'+LESSON, PKEY='oao.rg.profile', CKEY='oao.rg.course';
  var SRC=DATA.imgBase||'https://raw.githubusercontent.com/bbirchum1/optima-5th-social-studies/main/images/', EXT=['.jpg','.png','.jpeg','.webp'];
  var LOCAL=DATA.localImg||'images/rg/';
  /* the year of issues for the Morgue: [issue, lesson, title, source image] (course data, not lesson content) */
  var COURSE=[[1,"5.01.01","Primary and Secondary Sources in American History","source-5-01-01-primary-secondary-sources"],[2,"5.01.02","Timelines and American History Periods","source-5-01-02-epochs-american-history"],[3,"5.01.03","Geographic Tools for Historical Questions","source-5-01-03-colonial-geographic-tools"],[4,"5.01.04","Claim, Evidence, and Reasoning in Social Studies","source-5-01-04-published-argument"],[5,"5.02.01","Latitude and Longitude","source-5-02-01-latitude-longitude-map"],[6,"5.02.02","Major Physical Features of the United States","source-5-02-02-physical-features-map"],[7,"5.02.03","States, Capitals, Territories, and the Thirteen Colonies","source-5-02-03-colonies-states-map"],[8,"5.02.04","Using Geography to Explain Historical Patterns","source-5-02-04-colonial-economic-patterns"],[9,"5.03.01","Mound Builders","source-5-03-01-mound-builder-site"],[10,"5.03.02","Anasazi / Ancestral Pueblo","source-5-03-02-ancestral-pueblo-dwelling"],[11,"5.03.03","Maya Civilization","source-5-03-03-maya-pyramid-ruins"],[12,"5.03.04","Aztec Civilization","source-5-03-04-aztec-civilization"],[13,"5.03.05","Inca Civilization","source-5-03-05-inca-stonework"],[14,"5.03.06","Compare Ancient American Civilizations",""],[15,"5.04.01","Native American Regions of North America","source-5-04-01-native-regions-map"],[16,"5.04.02","Desert Southwest: Cliff Dwellers and Pueblo Peoples","source-5-04-02-desert-southwest-pueblo"],[17,"5.04.03","Pacific Northwest Coastal Tribes","source-5-04-03-pacific-nw-totem-pole"],[18,"5.04.04","Nomadic Nations of the Great Plains","source-5-04-04-great-plains-tipi"],[19,"5.04.05","Woodland Tribes East of the Mississippi","source-5-04-05-woodland-longhouse"],[20,"5.04.06","Compare Culture, Environment, and Daily Life",""],[21,"5.05.01","Evidence Review: Peoples and Places Before Colonization",""],[22,"5.05.02","Historical Claim: How Geography Shaped Culture",""],[23,"5.06.01","Technology that Shaped European Exploration","source-5-06-01-navigation-instruments"],[24,"5.06.02","Motives for Exploration","source-5-06-02-exploration-motive-document"],[25,"5.06.03","Explorer Routes, Sponsors, and Accomplishments",""],[26,"5.06.04","Interactions Among Native Americans, Africans, and Europeans","source-5-06-04-european-native-contact"],[27,"5.06.05","Voluntary Trade: Positive and Negative Effects",""],[28,"5.06.06","Explorer Route and Impact Analysis","source-5-06-06-explorer-routes-map"],[29,"5.07.01","Motives for Colonial Settlement","source-5-07-01-colonial-settlement"],[30,"5.07.02","New England Colonies","source-5-07-02-new-england-colonial"],[31,"5.07.03","Middle Colonies",""],[32,"5.07.04","Southern Colonies","source-5-07-04-southern-colonial-plantation"],[33,"5.07.05","Daily Life in the Thirteen Colonies","source-5-07-05-colonial-daily-life"],[34,"5.07.06","Triangular Trade","source-5-07-06-triangular-trade-map"],[35,"5.07.07","Slavery in the Colonies and African American Life in the Colonial Era","source-5-07-07-colonial-african-american"],[36,"5.07.08","Colonial Region Comparison",""],[37,"5.08.01","French and Indian War","source-5-08-01-french-indian-war-map"],[38,"5.08.02","Parliamentary Acts and Colonial Grievances","source-5-08-02-colonial-protest-broadside"],[39,"5.08.03","Patriots, Loyalists, and Other Colonists",""],[40,"5.08.04","Declaration of Independence: Unalienable Rights",""],[41,"5.08.05","Significant Individuals and Groups in the Revolution","source-5-08-05-revolutionary-portrait"],[42,"5.08.06","Changing Roles and Impact of Women During the Revolution","source-5-08-06-women-revolution"],[43,"5.08.07","Political Participation Then and Now",""],[44,"5.08.08","Patriot or Loyalist Evidence Response","source-5-08-08-patriot-loyalist-sources"],[45,"5.09.01","Evidence Review: Grievances, Rights, and Perspectives",""],[46,"5.09.02","Council Chamber: Should the Colonies Separate?",""],[47,"5.10.01","Major Battles and Military Campaigns","source-5-10-01-revolutionary-battle"],[48,"5.10.02","Foreign Alliances and Individuals","source-5-10-02-foreign-ally-portrait"],[49,"5.10.03","Economic, Military, and Political Factors that Ended the War",""],[50,"5.10.04","Hardships of the American Revolution","source-5-10-04-revolution-hardships"],[51,"5.10.05","Northwest Ordinance of 1787",""],[52,"5.10.06","Articles of Confederation and the Constitutional Convention","source-5-10-06-constitutional-convention"],[53,"5.10.07","Ancient Influences on Current Government Structures",""],[54,"5.10.08","Revolutionary War Campaign Map and Timeline","source-5-10-08-revolution-campaign-map"],[55,"5.11.01","How and Why the U.S. Government Was Created by the Constitution",""],[56,"5.11.02","Representative Government and the Constitutional Republic",""],[57,"5.11.03","Articles I, II, and III: Powers of the National Government",""],[58,"5.11.04","Bill of Rights and Limits on Government",""],[59,"5.11.05","Federalism, Amendments, and the Florida Constitution",""],[60,"5.11.06","Rights, Human Dignity, and the Holocaust Definition",""],[61,"5.12.01","Louisiana Purchase and Western Exploration",""],[62,"5.12.02","War of 1812","source-5-12-02-war-of-1812-map"],[63,"5.12.03","Transportation, Communication, and Inventions",""],[64,"5.12.04","Manifest Destiny, Trails, Native American Responses, and Compromise","source-5-12-04-manifest-destiny-trails-map"],[65,"5.13.01","Build the American Historian-Citizen Exhibit",""],[66,"5.13.02","Final Claim: What Shaped the United States?",""],[67,"5.14.01","Civil War, Reconstruction & the Amendments","source-5-14-01-civil-war-reconstruction"],[68,"5.14.02","Industrialization, Immigration & Free Enterprise","source-5-14-02-industrialization-immigration"],[69,"5.14.03","World Wars, the Great Depression & the Home Front","source-5-14-03-world-wars-depression"],[70,"5.14.04","Civil Rights & Modern America","source-5-14-04-civil-rights-modern"],[71,"5.14.05","American Geography, Symbols & Culture","source-5-14-05-geography-symbols-culture"],[72,"5.14.06","Capstone: The American Story — Then to Now",""]];
  var AUD=DATA.audioBase||'audio/guide/';
  var ISSUE=DATA.issue||0, MIN_WORDS=DATA.minWords||30, T=DATA.texts||{}, QUIET=!!DATA.quiet;
  var html=document.documentElement;
  var RM=false; try{ RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}

  function get(k,d){ try{ var v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } }
  function put(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
  function fresh(){ return {thread:[],seen:{},ack:{},hints:{},m:{}}; }
  var S=get(KEY,null)||fresh(); ['thread','seen','ack','hints','m'].forEach(function(k){ if(!S[k]) S[k]=k==='thread'?[]:{}; });
  var C=get(CKEY,{published:[],lines:{},photos:{}}); C.published=C.published||[]; C.lines=C.lines||{};
  function save(){ put(KEY,S); put(CKEY,C); }
  function el(t,c,h){ var d=document.createElement(t); if(c) d.className=c; if(h!=null) d.innerHTML=h; return d; }
  function $(s,r){ return (r||document).querySelector(s); } function $$(s,r){ return [].slice.call((r||document).querySelectorAll(s)); }
  function after(r,n){ r.parentNode.insertBefore(n,r.nextSibling); } function before(r,n){ r.parentNode.insertBefore(n,r); }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function words(s){ return (s||'').trim().split(/\s+/).filter(Boolean).length; }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)), t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
  /* every module can carry DATA.<module>.why = {icon,q,t}: the context behind the newsroom theme */
  function whyCard(w){ if(!w) return ''; if(typeof w==='string') w={t:w}; return '<div class="rg-why"><span class="ic" aria-hidden="true">'+esc(w.icon||'🔎')+'</span><div><b>'+esc(w.q||'Why this?')+'</b> '+w.t+'</div></div>'; }
  function todo(t){ return t?'<p class="rg-todo">'+t+'</p>':''; }
  /* source pictures: try the lesson's own image folder in the same order as the page's autoloader */
  function srcImg(name,cls,alt){ var img=new Image(); img.className=cls||''; img.alt=alt||''; img.draggable=false; if(!name) return img; (function tryI(i){ if(i>=EXT.length) return; var t=new Image(); t.onload=function(){ img.src=t.src; img.dispatchEvent(new Event('rgload')); }; t.onerror=function(){ tryI(i+1); }; t.src=SRC+name+EXT[i]; })(0); return img; }
  function local(n){ return LOCAL+n; }

  /* ---- sound: tiny WebAudio cues, generated in code, quiet, never on page load ---- */
  var AC=null; function ac(){ if(!AC){ try{ AC=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return AC; }
  function tone(f,d,type,v,slide){ var a=ac(); if(!a) return; var o=a.createOscillator(), g=a.createGain(); o.type=type||'sine'; o.frequency.value=f; if(slide) o.frequency.exponentialRampToValueAtTime(slide,a.currentTime+d); g.gain.setValueAtTime(0.0001,a.currentTime); g.gain.exponentialRampToValueAtTime(v||0.05,a.currentTime+0.01); g.gain.exponentialRampToValueAtTime(0.0001,a.currentTime+d); o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime+d+0.02); }
  function noise(d,lo,hi,v){ var a=ac(); if(!a) return; var n=Math.floor(a.sampleRate*d), b=a.createBuffer(1,n,a.sampleRate), x=b.getChannelData(0); for(var i=0;i<n;i++) x[i]=(Math.random()*2-1)*(1-i/n); var s=a.createBufferSource(); s.buffer=b; var f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.value=(lo+hi)/2; f.Q.value=1.2; var g=a.createGain(); g.gain.value=v||0.08; s.connect(f); f.connect(g); g.connect(a.destination); s.start(); }
  var SFX={ clack:function(){ noise(0.03,1800,4000,0.05); }, ding:function(){ if(QUIET) return; tone(1568,0.5,'sine',0.035); }, chime:function(){ tone(880,0.18,'sine',0.04); setTimeout(function(){ tone(1320,0.25,'sine',0.035); },90); },
    thud:function(){ tone(120,0.18,'sine',0.08,60); noise(0.06,200,600,0.06); }, stamp:function(){ if(QUIET){ tone(220,0.12,'sine',0.04); return; } tone(90,0.2,'square',0.05,50); noise(0.08,300,900,0.1); },
    scratch:function(){ noise(0.22,2500,6000,0.035); }, soft:function(){ tone(523,0.25,'sine',0.025); }, bounce:function(){ tone(300,0.12,'triangle',0.04,200); },
    paper:function(){ noise(0.12,900,2400,0.05); }, snap:function(){ noise(0.09,1800,4200,0.09); setTimeout(function(){ noise(0.05,900,2400,0.05); },40); } };

  /* ================================================================ YOUR NAME — asked once (same filter as G4/ELA). Kept on this computer only. */
  var NAME_STRONG=['fuck','shit','bitch','cunt','whore','slut','wank','bollock','bastard','penis','vagina','boob','anus','turd','scrotum','testicle','nigg','fagg','retard','kike','chink','tranny','porn','rape','nazi','hitler'];
  var NAME_WHOLE=['ass','arse','hell','damn','crap','piss','poop','pee','fart','butt','bum','dick','cock','prick','knob','willy','tit','sex','kill','dumb','stupid','idiot','loser','ugly','fatso','poopy','poopyhead'];
  function nameFold(v){ return String(v).toLowerCase().replace(/[4@]/g,'a').replace(/3/g,'e').replace(/[1!|]/g,'i').replace(/0/g,'o').replace(/[$5]/g,'s').replace(/7/g,'t').replace(/[^a-z ]+/g,' ').replace(/(.)\1+/g,'$1').replace(/\s+/g,' ').trim(); }
  function nameProblem(raw){ var SF=NAME_STRONG.map(nameFold), WF=NAME_WHOLE.map(nameFold), name=String(raw||'').trim(), i;
    if(!name) return 'Type your first name.';
    if(name.replace(/[^A-Za-z]/g,'').length<2) return 'That is a bit short. What do people call you?';
    var f=nameFold(name); if(!f) return 'Use letters for your name.';
    for(i=0;i<SF.length;i++) if(SF[i]&&f.indexOf(SF[i])!==-1) return 'block';
    var toks=f.split(' '), joined=f.replace(/ /g,'');
    for(i=0;i<WF.length;i++){ if(toks.indexOf(WF[i])!==-1||joined===WF[i]) return 'block'; }
    return ''; }
  function okName(n){ return !!n&&!nameProblem(n); }
  function loadProfile(){ var keys=[PKEY,'oao.ff.profile','oao.profile']; for(var i=0;i<keys.length;i++){ var p=get(keys[i],null); if(p&&okName(p.name)) return {name:p.name}; } return null; }
  var P=null; function nm(){ return P&&P.name?P.name:''; }
  function storageWorks(){ try{ var k='oao.__probe'; localStorage.setItem(k,'1'); localStorage.removeItem(k); return true; }catch(e){ return false; } }
  var openingWaiting=false;
  function showNameCard(isEdit){ if($('.rg-name-card')) return;
    var anchor=$('.rg-note.opening')||document.getElementById('introSection'); if(!anchor) return;
    var card=el('div','rg rg-name-card');
    card.innerHTML='<div class="k"><img class="rg-avery" src="'+local('ms-avery-320.jpg')+'" alt="">'+(isEdit?'Fix your byline':'Before we begin · The Republic Gazette')+'</div><h3>'+(isEdit?'How should your name be spelled?':'Welcome to the newsroom. What name goes on your byline?')+'</h3><p class="sub">A <b>byline</b> is the line that tells readers who wrote a story. Just your first name. It stays on this computer.</p><div class="row"><input class="in" maxlength="24" autocomplete="off" placeholder="Your first name" aria-label="Your first name"><button type="button" class="go">'+(isEdit?'Save':'Start work')+'</button>'+(isEdit?'<button type="button" class="cancel">Cancel</button>':'')+'</div><div class="warn" role="alert"></div>';
    before(anchor,card);
    var input=$('.in',card), go=$('.go',card), warn=$('.warn',card);
    function clean(v){ return (v||'').replace(/[^A-Za-z \-']/g,'').trim().slice(0,24); }
    function sync(){ go.disabled=clean(input.value).length===0; warn.textContent=''; }
    input.value=nm(); input.addEventListener('input',sync); sync();
    input.addEventListener('keydown',function(e){ if(e.key==='Enter'&&!go.disabled) go.click(); });
    var cx=$('.cancel',card); if(cx) cx.addEventListener('click',function(){ card.remove(); });
    go.addEventListener('click',function(){ var name=clean(input.value), pr=nameProblem(input.value)||nameProblem(name);
      if(pr){ warn.textContent=pr==='block'?'Let’s use your real first name. This is the name that goes on your work.':pr; input.focus(); return; }
      P={name:name}; put(PKEY,{name:name,created:new Date().toISOString()});
      card.remove(); paintWho(); var bl=document.getElementById('brief-byline-name'); if(bl&&!bl.value.trim()){ bl.value=name; bl.dispatchEvent(new Event('input',{bubbles:true})); }
      if(openingWaiting){ openingWaiting=false; startOpening(); } });
    if(!isEdit) setTimeout(function(){ try{ input.focus({preventScroll:true}); }catch(e){} },50); else input.focus(); }
  function paintWho(){ var w=pressEl&&$('.rg-who',pressEl); if(!w) return; w.classList.toggle('rg-hide',!nm()); $('b',w).textContent=nm(); }
  /* {name,} → "Maya, " or nothing (then the next letter is capitalised) */
  function fill(t){ t=String(t||''); return t.replace(/^\{name,\}(\s*)(.)/,function(m,s,ch){ return nm()?nm()+', '+ch.toLowerCase():ch.toUpperCase(); }).replace(/\{name,\}/g,nm()?nm()+', ':'').replace(/\{name\}/g,nm()||'Junior Editor'); }

  /* base nodes the layer moves or rewrites are put back by teardown */
  var MOVES=[], TEXTS=[];
  function move(n,fn){ if(!n||!n.parentNode) return; var m=document.createComment('rg-move'); n.parentNode.insertBefore(m,n); MOVES.push([n,m]); fn(n); }
  function setText(n,t){ if(!n) return; TEXTS.push([n,n.innerHTML]); n.innerHTML=t; }
  function hide(n){ if(n) n.classList.add('rg-off'); }

  /* ================================================================ THE WIRE — Ms. Avery's notes on a teletype */
  var thread=S.thread, pendingKey=S.pendingKey||null, wireEl, wireBtn, tickEl, tickTimer, unread=0, CHOICES={}, typing=null;
  var AVERY='<img class="rg-avery" src="'+local('ms-avery-320.jpg')+'" alt="">';
  function push(m){ thread.push(m); save(); render(); }
  function avery(text,choiceKey,opts){ opts=opts||{}; text=fill(text); push({f:'t',t:text,k:sayKey(text),scene:opts.scene||currentScene(),ts:Date.now(),fresh:1}); if(choiceKey){ pendingKey=choiceKey; S.pendingKey=choiceKey; save(); } if(!opts.quiet){ unread++; ticker(text); } render(); }
  function student(text){ var sc=(pendingKey&&CHOICES[pendingKey]&&CHOICES[pendingKey].scene)||currentScene(); push({f:'s',t:text,scene:sc}); pendingKey=null; S.pendingKey=null; save(); }
  function asked(k){ S.asked=S.asked||{}; return S.asked[k]=S.asked[k]||[]; }
  function choicesHTML(){ var cs=pendingKey&&CHOICES[pendingKey]; if(!cs) return ''; var a=asked(pendingKey); return '<div class="rg-choices">'+cs.map(function(c,i){ return a.indexOf(i)!==-1?'':'<button type="button" class="rg-choice" data-key="'+pendingKey+'" data-i="'+i+'">'+esc(c.t)+'</button>'; }).join('')+'</div>'; }
  function msgHTML(m){ if(m.f!=='t') return '<div class="rg-msg s"><span>'+esc(m.t)+'</span></div>'; var k=m.k||sayKey(m.t); probeSay(k); return '<div class="rg-msg t"><span class="tx">'+esc(m.t)+'</span><button type="button" class="rg-say'+(SAY[k]?' ok':'')+(SAYNOW===k?' playing':'')+'" data-k="'+k+'" aria-label="Hear Ms. Avery read this">'+(SAYNOW===k?'❚❚':'▶')+'</button></div>'; }
  /* ▶ on a note when its clip exists. key = FNV-1a of the text with the student's name taken out, a-z0-9 only, first 6 hex */
  var SAY={}, SAYP={}, SAYNOW=null;
  function sayKey(t){ var s=String(t||''); if(nm()){ s=s.split(nm()+', ').join('').split(nm()+' — ').join('').split(nm()).join(''); } s=s.toLowerCase().replace(/[^a-z0-9]+/g,''); var h=0x811c9dc5; for(var i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619)>>>0; } return ('0000000'+h.toString(16)).slice(-8).slice(0,6); }
  function probeSay(k){ if(SAYP[k]) return; SAYP[k]=1; var a=new Audio(); a.preload='metadata'; a.addEventListener('loadedmetadata',function(){ SAY[k]=a; $$('.rg-say[data-k="'+k+'"]').forEach(function(b){ b.classList.add('ok'); }); }); a.addEventListener('ended',function(){ if(SAYNOW===k){ SAYNOW=null; paintSay(); } }); a.src=AUD+'g5ss-'+LESSON+'-txt-'+k+'.mp3'; }
  function paintSay(){ $$('.rg-say').forEach(function(b){ var on=b.dataset.k===SAYNOW; b.classList.toggle('playing',on); b.textContent=on?'❚❚':'▶'; }); }
  function onSay(e){ var b=e.target.closest&&e.target.closest('.rg-say'); if(!b) return; e.stopPropagation(); var k=b.dataset.k, a=SAY[k]; if(!a) return; if(SAYNOW===k){ a.pause(); SAYNOW=null; paintSay(); return; } if(SAYNOW&&SAY[SAYNOW]) SAY[SAYNOW].pause(); $$('audio').forEach(function(o){ o.pause(); }); a.currentTime=0; a.play(); SAYNOW=k; paintSay(); }
  function ack(sc){ var n=thread.filter(function(m){return m.scene===sc;}).length; if((S.ack[sc]||0)!==n){ S.ack[sc]=n; save(); render(); } }
  function noteHTML(label){ return '<div class="hd"><div class="k">'+AVERY+'<span>'+label+'</span></div><button type="button" class="fold">Fold up ▴</button></div><div class="rg-tape"></div><div class="rg-ch"></div><button type="button" class="mini">'+AVERY+'<span class="pv"></span><span class="go">Open the wire ▸</span></button>'; }
  function onNote(e){ var n=e.currentTarget; if(e.target.closest('.mini')){ openWire(true); return; } if(e.target.closest('.fold')){ ack(n.dataset.scene); return; } onChoice(e); }
  function onChoice(e){ var b=e.target.closest('.rg-choice'); if(!b) return; var cs=CHOICES[b.dataset.key]; if(!cs||b.dataset.key!==pendingKey) return; var key=b.dataset.key, i=+b.dataset.i, c=cs[i], a=asked(key); if(a.indexOf(i)===-1) a.push(i); SFX.clack(); student(c.t); if(c.reply) avery(c.reply,c.next||null,{scene:cs.scene,quiet:true});
    if(!c.next&&!c.end&&a.length<cs.length){ pendingKey=key; S.pendingKey=key; } save(); render(); }
  /* the newest note types out letter by letter (instant under reduced motion) */
  function typeOut(box){ var t=box&&box.querySelector('.rg-msg.t:last-of-type .tx'); if(!t||RM) return; var last=thread.filter(function(m){return m.f==='t';}).slice(-1)[0]; if(!last||!last.fresh) return; last.fresh=0; save();
    var full=t.textContent, i=0; t.textContent=''; t.classList.add('typing'); clearInterval(typing);
    typing=setInterval(function(){ i+=2; t.textContent=full.slice(0,i); if(i%6===0) SFX.clack(); if(i>=full.length){ clearInterval(typing); t.classList.remove('typing'); } },22); }
  function render(){
    if(wireEl){ var w=$('.rg-wire-roll',wireEl); w.innerHTML='<div class="rg-msg sys">— on the wire today —</div>'+thread.map(msgHTML).join(''); var comp=$('.rg-wire-reply',wireEl); comp.innerHTML=pendingKey&&CHOICES[pendingKey]?'<div class="lab">Tap a reply</div>'+choicesHTML():'<div class="none">No reply needed. Keep working. I’ll send a note when there’s news.</div>'; if(wireEl.classList.contains('open')) typeOut(w); w.scrollTop=w.scrollHeight; }
    if(wireBtn){ wireBtn.classList.toggle('unread',unread>0); $('.n',wireBtn).textContent=unread; }
    var open=wireEl&&wireEl.classList.contains('open');
    ['open','dispatch','desk','factcheck','press'].forEach(function(sc){ var n=$('.rg-note[data-scene="'+sc+'"]'); if(!n) return; var ms=thread.filter(function(m){return m.scene===sc;});
      if(open) S.ack[sc]=ms.length;
      var isNew=ms.length>(S.ack[sc]||0), lt=ms.filter(function(m){return m.f==='t';}).slice(-1)[0];
      n.classList.toggle('rg-hide',!ms.length); n.classList.toggle('new',isNew);
      $('.rg-tape',n).innerHTML=(sc==='open'?ms:ms.slice(-4)).map(msgHTML).join(''); $('.rg-ch',n).innerHTML=(pendingKey&&CHOICES[pendingKey]&&CHOICES[pendingKey].scene===sc)?choicesHTML():'';
      if(isNew&&!open) typeOut($('.rg-tape',n));
      var tc=thread.filter(function(m){return m.f==='t';}).length; $('.mini .pv',n).innerHTML=isNew&&lt?'<b>New note:</b> '+esc(lt.t):'<b>Notes from Ms. Avery</b> · '+tc+' on the wire'; });
    if(open) save(); }
  function openWire(o){ if(!wireEl) return; wireEl.classList.toggle('open',o); wireBtn&&wireBtn.setAttribute('aria-expanded',!!o); if(o){ unread=0; hideTicker(); SFX.paper(); } render(); }
  function ticker(text){ if(!tickEl||(wireEl&&wireEl.classList.contains('open'))) return; $('.tx',tickEl).textContent=text; tickEl.classList.remove('show'); void tickEl.offsetWidth; tickEl.classList.add('show'); SFX.ding(); clearTimeout(tickTimer); tickTimer=setTimeout(hideTicker,8000); }
  function hideTicker(){ if(tickEl) tickEl.classList.remove('show'); }
  function currentScene(){ var a=$('.tab-panel.active'); return a?a.id.replace('panel-',''):'dispatch'; }
  Object.keys(T.choices||{}).forEach(function(k){ var c=T.choices[k], list=(c.list||[]).slice(); list.scene=c.scene||'dispatch'; CHOICES[k]=list; });
  /* DATA.texts.beats = { s1Done|s2Done|quizDone|published|<module beat>: [{t, choice, quiet, scene}] } */
  var BEAT_SCENE={s1Done:'dispatch',s2Done:'desk',quizDone:'factcheck',published:'press'};
  function beat(k){ if(S.seen[k]) return; S.seen[k]=true; save(); var b=(T.beats||{})[k]; if(!b) return; [].concat(b).forEach(function(m){ if(typeof m==='string') m={t:m}; avery(m.t,m.choice||null,{scene:m.scene||BEAT_SCENE[k]||currentScene(),quiet:!!m.quiet}); }); }
  function buildWire(){
    wireEl=el('div','rg rg-wire'); wireEl.setAttribute('role','dialog'); wireEl.setAttribute('aria-label','Notes from Ms. Avery');
    wireEl.innerHTML='<div class="rg-wire-top"><div class="rg-wire-id">'+AVERY+'<div><div class="nm">Ms. Avery</div><div class="st">Editor-in-Chief · on the wire</div></div></div><button type="button" class="x" aria-label="Close the wire">✕</button></div><div class="rg-wire-mach" aria-hidden="true"><i></i><i></i><i></i></div><div class="rg-wire-roll"></div><div class="rg-wire-reply"></div>';
    wireEl.addEventListener('click',onChoice); $('.x',wireEl).addEventListener('click',function(){ openWire(false); });
    tickEl=el('div','rg rg-ticker','<span class="ic">📠</span><b>Ms. Avery:</b> <span class="tx"></span>'); tickEl.setAttribute('role','status');
    tickEl.addEventListener('click',function(){ openWire(true); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&wireEl&&wireEl.classList.contains('open')) openWire(false); });
    if(!window.__rgSay){ window.__rgSay=true; document.addEventListener('click',onSay,true); } }
  function buildOpening(){ var intro=document.getElementById('introSection'); if(!intro) return;
    var note=el('div','rg rg-note opening rg-hide'); note.dataset.scene='open'; note.innerHTML=noteHTML('On the wire from Ms. Avery'); note.addEventListener('click',onNote); before(intro,note);
    if(!thread.length){ if(!nm()&&storageWorks()) openingWaiting=true; else startOpening(); } }
  function startOpening(){ if(thread.length) return;
    var op=[].concat(T.opening||[]);
    avery('{name,}'+(T.hello||'Good morning, Junior Editor. It’s Ms. Avery.')+(DATA.connector?' '+DATA.connector:''),null,{scene:'open',quiet:true});
    op.forEach(function(m){ if(typeof m==='string') m={t:m}; avery(m.t,m.choice||null,{scene:'open',quiet:true}); });
    unread=op.length+1; render(); setTimeout(function(){ ticker(T.toast||'A new story just came in. Open the wire when you’re ready.'); },900); }
  function buildStory(){ var anchor=$('.rg-note.opening')||document.getElementById('introSection'); if(!anchor) return;
    var t=DATA.storySoFar||'You’re a Junior Editor at The Republic Gazette, a newspaper that checks before it prints. Our rival, The Hasty Herald, prints fast and checks little. Every issue you publish gets filed in the Morgue.';
    before(anchor,el('div','rg rg-story','<span class="k">🗞️ The story so far</span><span class="t">'+esc(t)+'</span>')); }

  /* ================================================================ THE PRESS BAR — tabs + a front page that inks in as you work */
  var pressEl, STAGES=DATA.stages||[];
  function proofSVG(){ return '<svg class="rg-proof" viewBox="0 0 60 78" aria-hidden="true"><rect x="1" y="1" width="58" height="76" rx="2" fill="#FBF7EC" stroke="#C9B98E"/>'+
    '<g class="pr m" data-pr="0"><rect x="6" y="5" width="48" height="8" rx="1"/><rect x="6" y="15" width="48" height="1.2"/></g>'+
    '<g class="pr h" data-pr="1"><rect x="6" y="19" width="40" height="4.5" rx="1"/><rect x="6" y="25" width="30" height="3" rx="1"/></g>'+
    '<g class="pr c" data-pr="2">'+[0,1,2].map(function(i){ var x=6+i*16.5; return '<rect x="'+x+'" y="32" width="14" height="1.6"/><rect x="'+x+'" y="35" width="14" height="1.6"/><rect x="'+x+'" y="38" width="12" height="1.6"/><rect x="'+x+'" y="41" width="14" height="1.6"/>'; }).join('')+'</g>'+
    '<g class="pr p" data-pr="3"><rect x="6" y="46" width="48" height="26" rx="1"/><path d="M10,68 l10,-10 l6,6 l8,-9 l14,13z" fill="#FBF7EC" opacity=".55"/><circle cx="16" cy="53" r="3" fill="#FBF7EC" opacity=".55"/></g>'+
    '<g class="rg-proof-ok"><circle cx="50" cy="66" r="8" fill="#8B2D26"/><path d="M46,66 l3,3 l5,-6" stroke="#fff" stroke-width="2" fill="none"/></g></svg>'; }
  function buildPress(){
    var bar=document.getElementById('tabBar'); if(!bar||!STAGES.length) return;
    pressEl=el('div','rg rg-press');
    pressEl.innerHTML='<div class="rg-press-row">'+proofSVG()+'<div class="rg-press-main"><div class="rg-press-sub"><span class="ttl">The Republic Gazette · Issue '+esc(ISSUE)+' · <span class="pg"></span></span><span class="rg-press-r"><span class="rg-trayslot"></span><button type="button" class="rg-who rg-hide" title="Fix the spelling of my byline">✎ <b></b></button><button type="button" class="rg-wire-btn" aria-expanded="false">📠 Wire <span class="n">0</span></button></span></div><div class="rg-tabslot"></div><div class="rg-press-cap"></div></div></div>';
    before(bar,pressEl); move(bar,function(n){ $('.rg-tabslot',pressEl).appendChild(n); });
    $('.rg-who',pressEl).addEventListener('click',function(){ showNameCard(true); }); paintWho();
    wireBtn=$('.rg-wire-btn',pressEl); wireBtn.addEventListener('click',function(){ openWire(!wireEl.classList.contains('open')); });
    pressEl.appendChild(wireEl); pressEl.appendChild(tickEl);
    if(window.switchTab&&!window.__rgWrapped){ var orig=window.switchTab; window.switchTab=function(tab){ var prev=currentScene(); var r=orig.apply(this,arguments); if(html.classList.contains('rg-on')){ if(prev!==tab){ ack(prev); if(prev==='dispatch') ack('open'); } html.dataset.rgTab=tab; markNow(tab); render(); refreshPress(); } return r; }; window.__rgWrapped=true; }
    html.dataset.rgTab=currentScene(); markNow(currentScene()); }
  function markNow(tab){ if(!pressEl) return; var i=STAGES.map(function(s){return s.tab;}).indexOf(tab); $('.pg',pressEl).textContent='tab '+(i+1)+' of '+STAGES.length; var st=STAGES[i]; $('.rg-press-cap',pressEl).textContent=st?['The proof inks in as you finish each tab.','Masthead ✓ → headline, columns and photo still to go.','Headline set. Fact-check, then go to press.','Last step: write, check, and print.'][i]||'':''; }
  var R={};
  function deskDone(){ var ok=true; if(R.reading) ok=ok&&R.reading.done(); if(R.evidence) ok=ok&&R.evidence.done(); return ok&&['journal-q1','journal-q2','journal-q3'].every(qDone); }
  function fcDone(){ var qs=$$('#panel-factcheck .factcheck-q'); return qs.length>0&&qs.every(function(q){ return !!q.querySelector('.factcheck-option.correct, .factcheck-option.incorrect'); }); }
  function refreshPress(){ var st=[R.scene1?R.scene1.done():true, deskDone(), fcDone(), !!S.published];
    if(st[2]&&!S.quizDone){ S.quizDone=true; save(); }
    STAGES.forEach(function(s,i){ var b=document.getElementById('btn-'+s.tab); if(b) b.classList.toggle('rg-done',st[i]); });
    if(pressEl){ $$('.pr',pressEl).forEach(function(g){ g.classList.toggle('on',st[+g.dataset.pr]); }); pressEl.classList.toggle('published',!!S.published); }
    updateStepper(); refreshVoice();
    if(st[0]) beat('s1Done'); if(st[1]) beat('s2Done'); if(S.quizDone) beat('quizDone'); if(S.published) beat('published'); }

  /* ================================================================ stage heads + a wire strip at the end of each tab */
  function buildScenes(){ STAGES.forEach(function(s,i){ var panel=document.getElementById('panel-'+s.tab); if(!panel) return;
      var sc=el('div','rg rg-scene','<div class="rg-scene-n">'+(i+1)+'</div><div><div class="rg-scene-k">'+esc(['Masthead','Headline','Columns','Photo'][i]||'')+'</div><div class="rg-scene-t">'+esc(s.t)+'</div><p class="rg-scene-why">'+esc(s.why)+'</p></div>');
      var vr=panel.firstElementChild&&panel.firstElementChild.classList.contains('video-ratio')?panel.firstElementChild:null; if(vr) after(vr,sc); else panel.insertBefore(sc,panel.firstChild);
      var tw=panel.querySelector('.tab-next-btn-wrap')||null; var note=el('div','rg rg-note rg-hide'); note.dataset.scene=s.tab; note.innerHTML=noteHTML('New note on the wire'); note.addEventListener('click',onNote); if(tw) before(tw,note); else panel.appendChild(note); }); }

  /* ================================================================ the top: Read aloud + Lesson details pills, one Editor's Lens line */
  function buildTop(){ var hd=$('.oao-header'); if(!hd) return;
    var tools=el('div','rg rg-hd-tools'), panels=[];
    function pill(label,panel){ var b=el('button','rg-pill',label); b.type='button'; b.setAttribute('aria-expanded','false'); b.addEventListener('click',function(){ var o=!panel.classList.contains('open'); panels.forEach(function(p){ p[1].classList.remove('open'); p[0].setAttribute('aria-expanded','false'); }); panel.classList.toggle('open',o); b.setAttribute('aria-expanded',o); }); panels.push([b,panel]); tools.appendChild(b); }
    var anchor=hd, ra=document.getElementById('optima-read-aloud');
    if(ra){ var rp=el('div','rg rg-hd-panel'); after(anchor,rp); anchor=rp; move(ra,function(n){ rp.appendChild(n); }); pill('🔊 Read aloud',rp); }
    var strip=$('.info-strip'); if(strip){ var dp=el('div','rg rg-hd-panel'); after(anchor,dp); move(strip,function(n){ dp.appendChild(n); }); pill('ⓘ Lesson details',dp); }
    after(hd,tools); }
  function buildLens(){ var two=$('#introSection .intro-2col'); if(!two||!DATA.lens) return;
    var v=$('.virtue-lens-label'), virtue=v?(v.textContent.split('·').pop()||'').replace(/★/g,'').trim():'';
    after(two,el('div','rg rg-lens','<b>Editor’s Lens</b><span>'+(virtue?'<em>'+esc(virtue)+'.</em> ':'')+esc(DATA.lens)+'</span>')); }

  /* ================================================================ THE LESSON MODULES (pick per lesson in DATA)
     scene1.type            dateit
     explore.reading.type   suncolumns
     explore.evidence.type  redpen
     planner.type           layout
     vocab.type             worddesk
     Every module returns {done(), journal(e,NA)} and keeps its state in S.m[<name>]. Add a type by adding a MOD entry. */
  var MOD={};
  function mstate(k,d){ if(!S.m[k]) S.m[k]=d; return S.m[k]; }
  function gameShell(cls,kicker,title,c){ var g=el('section','rg rg-game '+cls); g.innerHTML='<div class="rg-game-k">'+esc(kicker)+'</div><h3 class="rg-game-t">'+esc(title)+'</h3>'+whyCard(c&&c.why)+todo(c&&c.todo); return g; }
  /* drag OR tap: tap a card, then tap where it goes. dropTargets get .rg-drop; cb(card,target) */
  function dragTap(root,cardSel,targetSel,cb){ var picked=null;
    root.addEventListener('click',function(e){ var c=e.target.closest(cardSel); if(c&&root.contains(c)&&!c.classList.contains('placed')){ if(picked) picked.classList.remove('picked'); picked=c===picked?null:c; if(picked) picked.classList.add('picked'); SFX.clack(); return; }
      var t=e.target.closest(targetSel); if(t&&picked){ var p=picked; picked.classList.remove('picked'); picked=null; cb(p,t); } });
    root.addEventListener('dragstart',function(e){ var c=e.target.closest(cardSel); if(!c) return; picked=c; try{ e.dataTransfer.setData('text','x'); }catch(x){} });
    root.addEventListener('dragover',function(e){ if(e.target.closest(targetSel)) e.preventDefault(); });
    root.addEventListener('drop',function(e){ var t=e.target.closest(targetSel); if(!t||!picked) return; e.preventDefault(); var p=picked; picked=null; p.classList.remove('picked'); cb(p,t); }); }

  /* ---------------------------------------------------------------- dateit: guess when a picture was made, lock it, sealed till later */
  MOD.dateit=function(c,anchor){ var st=mstate('dateit',{});
    var g=gameShell('rg-dateit','Photo desk · before we trust it',c.title||'When was this picture made?',c);
    g.innerHTML+='<div class="rg-dt-wrap"><figure class="rg-dt-pic"><div class="rg-dt-img"></div><div class="rg-dt-cover" aria-hidden="true"><span>caption covered by the editor</span></div><figcaption>'+esc(c.cap||'')+'</figcaption></figure>'+
      '<div class="rg-dt-ctl"><div class="rg-dt-q">'+esc(c.q||'Drag the slider to the year you think it was made.')+'</div><div class="rg-dt-year"><b>'+(st.guess||Math.round(((c.min||1600)+(c.max||1900))/2/10)*10)+'</b></div>'+
      '<input type="range" class="rg-dt-range" min="'+(c.min||1600)+'" max="'+(c.max||1900)+'" step="'+(c.step||10)+'" value="'+(st.guess||Math.round(((c.min||1600)+(c.max||1900))/2/10)*10)+'" aria-label="Year guess">'+
      '<div class="rg-dt-scale"><span>'+(c.min||1600)+'</span><span>'+(((c.min||1600)+(c.max||1900))/2)+'</span><span>'+(c.max||1900)+'</span></div>'+
      '<div class="rg-dt-clues"><div class="lab">What makes you think so? <i>(tap any)</i></div>'+(c.clues||[]).map(function(x,i){ return '<button type="button" data-i="'+i+'" class="'+((st.clues||[]).indexOf(i)>-1?'on':'')+'">'+esc(x)+'</button>'; }).join('')+'</div>'+
      '<button type="button" class="rg-btn rg-dt-lock">🔒 Lock in my guess</button><div class="rg-dt-sealed"></div></div></div>';
    after(anchor,g); $('.rg-dt-img',g).appendChild(srcImg(c.img,'','A picture of a busy kitchen with a fireplace, a spinning wheel and a family at work'));
    var rng=$('.rg-dt-range',g), yr=$('.rg-dt-year b',g), lock=$('.rg-dt-lock',g), sealed=$('.rg-dt-sealed',g);
    rng.addEventListener('input',function(){ yr.textContent=rng.value; if(+rng.value%50===0) SFX.clack(); });
    $$('.rg-dt-clues button',g).forEach(function(b){ b.addEventListener('click',function(){ b.classList.toggle('on'); st.clues=$$('.rg-dt-clues button.on',g).map(function(x){ return +x.dataset.i; }); save(); SFX.clack(); }); });
    function paint(){ var L=!!st.locked; g.classList.toggle('locked',L); rng.disabled=L; lock.disabled=L; lock.textContent=L?'🔒 Guess locked':'🔒 Lock in my guess';
      sealed.innerHTML=L?'<div class="rg-envelope"><span class="seal">G</span><div><b>Sealed: your guess, '+esc(st.guess)+'.</b> '+esc(c.sealed||'We’ll open it on the next tab, after you look closely at the picture.')+'</div></div>':''; }
    lock.addEventListener('click',function(){ st.guess=+rng.value; st.locked=true; save(); SFX.stamp(); paint(); refreshPress(); beat('dateLocked'); });
    paint();
    return {el:g,done:function(){ return !!st.locked; },journal:function(e,NA){ return st.locked?'<p class="a">I guessed the kitchen picture was made in <b>'+e(st.guess)+'</b>'+((st.clues||[]).length?' because of: '+e((st.clues||[]).map(function(i){ return (c.clues||[])[i]; }).join(', '))+'.':'.')+(S.m.redpen&&S.m.redpen.date?' It was really made in '+e(c.answer)+'.':'')+'</p>':NA; }}; };

  /* ---------------------------------------------------------------- suncolumns: drag the sun through one day; each person's column sets in type */
  MOD.suncolumns=function(c,anchor){ var st=mstate('sun',{stop:-1,myth:{}}); var N=(c.times||[]).length;
    var g=gameShell('rg-sun','The Front Page Desk · one day, many lives',c.title||'Follow one day in the colonies',c);
    var sky='<svg class="rg-sky" viewBox="0 0 600 120" aria-hidden="true"><defs><linearGradient id="rgSkyG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#F6E7C1"/><stop offset="1" stop-color="#FBF7EC"/></linearGradient></defs><rect width="600" height="120" fill="url(#rgSkyG)"/><path d="M30,110 Q300,-50 570,110" fill="none" stroke="#C9B98E" stroke-dasharray="4 6"/>'+
      (c.times||[]).map(function(t,i){ var p=arc(i/(N-1)); return '<g class="rg-sky-stop" data-i="'+i+'"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="7" fill="#FBF7EC" stroke="#8B6F2E" stroke-width="2"/></g>'; }).join('')+
      '<path d="M0,112 L600,112" stroke="#8B6F2E" stroke-width="2"/><g class="rg-sun"><circle r="16" fill="#E9B44C"/><g stroke="#E9B44C" stroke-width="3" stroke-linecap="round">'+[0,45,90,135,180,225,270,315].map(function(a){ var r=a*Math.PI/180; return '<line x1="'+(Math.cos(r)*21)+'" y1="'+(Math.sin(r)*21)+'" x2="'+(Math.cos(r)*27)+'" y2="'+(Math.sin(r)*27)+'"/>'; }).join('')+'</g></g></svg>';
    function arc(t){ var x=30+540*t, y=110-4*160*t*(1-t)*0.98; return [x,y]; }
    g.innerHTML+='<div class="rg-sun-sky">'+sky+'<div class="rg-sun-labels">'+(c.times||[]).map(function(t,i){ return '<button type="button" data-i="'+i+'">'+esc(t)+'</button>'; }).join('')+'</div></div>'+
      '<div class="rg-sun-ctl"><button type="button" class="rg-btn rg-sun-next">Move the sun ▸</button><span class="rg-sun-now"></span></div>'+
      '<div class="rg-cols">'+(c.cols||[]).map(function(col){ return '<article class="rg-col'+(col.calm?' calm':'')+'" data-id="'+esc(col.id)+'"><header><span class="ic">'+esc(col.icon||'')+'</span><div><b>'+esc(col.who)+'</b><small>'+esc(col.where||'')+'</small></div></header><div class="rg-col-body"></div></article>'; }).join('')+'</div>'+
      '<div class="rg-myths"></div><div class="rg-sun-close"></div>';
    after(anchor,g);
    var sun=$('.rg-sun',g), nextB=$('.rg-sun-next',g), now=$('.rg-sun-now',g), mythBox=$('.rg-myths',g);
    function placeSun(t){ var p=arc(Math.max(0,Math.min(1,t))); sun.setAttribute('transform','translate('+p[0]+','+p[1]+')'); }
    function paint(type){ var s=st.stop; placeSun(s<0?0:s/(N-1)); g.classList.toggle('dawn',s<0);
      $$('.rg-sun-labels button',g).forEach(function(b){ var i=+b.dataset.i; b.classList.toggle('on',i<=s); b.classList.toggle('now',i===s); b.disabled=i>s+1; });
      $$('.rg-sky-stop',g).forEach(function(n){ n.classList.toggle('on',+n.dataset.i<=s); });
      $$('.rg-col',g).forEach(function(a){ var col=(c.cols||[]).filter(function(x){ return x.id===a.dataset.id; })[0], b=$('.rg-col-body',a), have=b.children.length;
        for(var i=have;i<=s;i++){ var p=el('p','rg-col-line','<span class="tm">'+esc(c.times[i])+'</span> '+esc(col.lines[i]||'')); b.appendChild(p); if(type&&i===s&&!RM){ p.classList.add('set'); } } });
      nextB.disabled=s>=N-1; nextB.textContent=s<0?'☀️ Start the day: sunrise ▸':s>=N-1?'The day is done':'Move the sun to '+(c.times[s+1]||'')+' ▸';
      now.textContent=s<0?'Drag the sun or tap the button.':'Now: '+c.times[s]+'. Read every column.';
      mythBox.innerHTML=(c.myths||[]).filter(function(m){ return m.after<=s; }).map(function(m){ var i=(c.myths||[]).indexOf(m), d=st.myth[i]; return '<div class="rg-myth'+(d?' done':'')+'" data-i="'+i+'"><div class="clip"><span class="h">The Hasty Herald</span><p>“'+esc(m.claim)+'”</p></div>'+(d?'<div class="fact">'+(m.img?'<figure><img alt="" src="'+esc(LOCAL+m.img)+'"><figcaption>'+esc(m.cap||'')+'</figcaption></figure>':'')+'<div><b>Fact-check:</b> '+esc(m.fact)+'</div></div>':'<div class="act"><button type="button" class="rg-btn alt" data-a="print">🖨 Print it</button><button type="button" class="rg-btn" data-a="check">🔍 Fact-check it</button><span class="say"></span></div>')+'</div>'; }).join('');
      var all=done(); $('.rg-sun-close',g).innerHTML=all&&c.close?'<div class="rg-win">'+esc(c.close)+'</div>':''; g.classList.toggle('finished',all); }
    function go(i){ if(i>st.stop+1||i<=st.stop) return; st.stop=i; save(); SFX.paper(); paint(true); refreshPress(); if(i===N-1) beat('sunDone'); }
    nextB.addEventListener('click',function(){ go(st.stop+1); });
    $('.rg-sun-labels',g).addEventListener('click',function(e){ var b=e.target.closest('button'); if(b) go(+b.dataset.i); });
    /* drag the sun along the arc */
    var svg=$('.rg-sky',g), dragging=false;
    sun.addEventListener('pointerdown',function(e){ dragging=true; sun.setPointerCapture&&sun.setPointerCapture(e.pointerId); e.preventDefault(); });
    sun.addEventListener('pointermove',function(e){ if(!dragging) return; var r=svg.getBoundingClientRect(), t=(e.clientX-r.left)/r.width*600; t=(t-30)/540; var lim=(st.stop+1)/(N-1); placeSun(Math.max(0,Math.min(lim,t))); var k=Math.round(t*(N-1)); if(k===st.stop+1&&Math.abs(t*(N-1)-k)<0.18) { dragging=false; go(k); } });
    sun.addEventListener('pointerup',function(){ dragging=false; paint(); });
    mythBox.addEventListener('click',function(e){ var b=e.target.closest('button[data-a]'); if(!b) return; var m=b.closest('.rg-myth'), i=+m.dataset.i;
      if(b.dataset.a==='print'){ $('.say',m).textContent=(c.myths[i].stop||'Hold the presses! A careful paper checks a claim before it prints it. Tap Fact-check it.'); SFX.bounce(); return; }
      st.myth[i]=true; save(); if(c.myths[i].calm) SFX.soft(); else SFX.chime(); paint(); refreshPress(); });
    function done(){ return st.stop>=N-1&&(c.myths||[]).every(function(m,i){ return st.myth[i]; }); }
    paint();
    return {el:g,done:done,journal:function(e,NA){ if(st.stop<0) return NA; return '<p class="a">I followed '+e((c.cols||[]).length)+' people through one day. '+((c.myths||[]).filter(function(m,i){ return st.myth[i]; }).map(function(m){ return 'Herald: “'+e(m.claim)+'” Fact: '+e(m.fact); }).join('<br>'))+'</p>'; },
      people:function(){ return (c.cols||[]).map(function(x){ return x.who; }); }}; };

  /* ---------------------------------------------------------------- redpen: circle what you see, open the date, find who's missing */
  MOD.redpen=function(c,anchor){ var st=mstate('redpen',{seen:{},miss:{}});
    var g=gameShell('rg-redpen','The Source Desk · mark it up like an editor',c.title||'Mark up the picture',c);
    var spots=c.spots||[], need=c.need||Math.min(4,spots.length);
    g.innerHTML+='<div class="rg-rp-wrap"><figure class="rg-rp-pic"><div class="rg-rp-img"></div><svg class="rg-rp-ink" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">'+spots.map(function(s,i){ return '<ellipse class="ring" data-i="'+i+'" cx="'+s.x+'" cy="'+s.y+'" rx="'+(s.rx||6)+'" ry="'+(s.ry||7)+'" pathLength="100"/>'; }).join('')+(c.date?'<rect class="ring date" x="'+(c.date.x-c.date.w/2)+'" y="'+(c.date.y-c.date.h/2)+'" width="'+c.date.w+'" height="'+c.date.h+'" rx="2" pathLength="100"/>':'')+'</svg>'+
      spots.map(function(s,i){ return '<button type="button" class="rg-rp-n" data-i="'+i+'" style="left:'+s.x+'%;top:'+s.y+'%" aria-label="Label '+(i+1)+': '+esc(s.label)+'">'+(i+1)+'</button>'; }).join('')+
      (c.date?'<button type="button" class="rg-rp-n date" style="left:'+c.date.x+'%;top:'+c.date.y+'%" aria-label="The caption and date">📅</button>':'')+'</figure>'+
      '<aside class="rg-rp-notes"><div class="lab">Editor’s margin notes</div><ol>'+spots.map(function(s,i){ return '<li data-i="'+i+'"><b>'+esc(s.label)+'</b><span>'+esc(s.t)+'</span></li>'; }).join('')+'</ol><div class="rg-rp-date"></div></aside></div>'+
      '<div class="rg-rp-count"></div><div class="rg-rp-miss"></div>';
    after(anchor,g); var pic=$('.rg-rp-img',g); pic.appendChild(srcImg(c.img,'',c.alt||''));
    function guess(){ return S.m.dateit&&S.m.dateit.locked?S.m.dateit.guess:null; }
    function paint(){ var n=Object.keys(st.seen).length;
      $$('.ring',g).forEach(function(r){ var i=r.dataset.i; r.classList.toggle('on',i!=null?!!st.seen[i]:!!st.date); });
      $$('.rg-rp-n',g).forEach(function(b){ var i=b.dataset.i; b.classList.toggle('on',i!=null?!!st.seen[i]:!!st.date); });
      $$('.rg-rp-notes li',g).forEach(function(li){ li.classList.toggle('on',!!st.seen[li.dataset.i]); });
      var dbtn=$('.rg-rp-n.date',g); if(dbtn){ dbtn.classList.toggle('ready',n>=need&&!st.date); dbtn.disabled=n<need; }
      $('.rg-rp-count',g).innerHTML=st.date?'':n<need?'🖍 <b>'+n+' of '+need+'</b> parts circled. Tap a number on the picture.':'📅 Now tap the date mark at the bottom of the picture to read the caption.';
      var gs=guess(), d=c.date||{};
      $('.rg-rp-date',g).innerHTML=st.date?'<div class="rg-reveal"><div class="big">'+esc(d.year)+'</div><div>'+esc(d.text)+'</div>'+(gs?'<div class="cmp">Your sealed guess: <b>'+gs+'</b>. '+(Math.abs(gs-d.year)<=20?'Very close!':gs<d.year?'You guessed '+(d.year-gs)+' years too early. That’s the trick: the picture shows the 1700s, but it was made later.':'You guessed '+(gs-d.year)+' years too late.')+'</div>':'')+'</div>':'';
      var M=c.missing||{}, cards=M.cards||[];
      $('.rg-rp-miss',g).innerHTML=st.date&&cards.length?'<div class="rg-rp-mhd"><b>'+esc(M.q||'Who is NOT in this picture?')+'</b> '+esc(M.todo||'Tap a card, then tap the frame it belongs in.')+'</div><div class="rg-rp-cards">'+cards.map(function(x,i){ var p=st.miss[i]; return p?'':'<button type="button" class="rg-card'+(x.calm?' calm':'')+'" draggable="true" data-i="'+i+'">'+esc(x.t)+'</button>'; }).join('')+'</div>'+
        '<div class="rg-frames"><div class="rg-frame" data-f="in"><div class="lab">🖼 In the picture</div>'+cards.map(function(x,i){ return st.miss[i]==='in'?'<span class="chip">'+esc(x.t)+'</span>':''; }).join('')+'</div><div class="rg-frame empty" data-f="out"><div class="lab">⬜ Missing from the picture</div>'+cards.map(function(x,i){ return st.miss[i]==='out'?'<span class="chip'+(x.calm?' calm':'')+'">'+esc(x.t)+'</span>':''; }).join('')+'</div></div><div class="rg-rp-say"></div>'+(done()&&c.close?'<div class="rg-win">'+esc(c.close)+'</div>':''):'';
      g.classList.toggle('finished',done()); }
    g.addEventListener('click',function(e){ var b=e.target.closest('.rg-rp-n'); if(!b) return;
      if(b.classList.contains('date')){ if(Object.keys(st.seen).length<need) return; st.date=true; save(); SFX.stamp(); paint(); refreshPress(); beat('dateOpened'); return; }
      st.seen[b.dataset.i]=true; save(); SFX.scratch(); paint(); var li=$('.rg-rp-notes li[data-i="'+b.dataset.i+'"]',g); if(li){ li.classList.add('flash'); setTimeout(function(){ li.classList.remove('flash'); },900); } refreshPress(); });
    dragTap(g,'.rg-card','.rg-frame',function(card,frame){ var i=+card.dataset.i, x=c.missing.cards[i], want=x.out?'out':'in';
      if(frame.dataset.f!==want){ card.classList.add('bounce'); setTimeout(function(){ card.classList.remove('bounce'); },500); SFX.bounce(); $('.rg-rp-say',g).textContent=x.hint||'Look again at the picture.'; return; }
      st.miss[i]=want; save(); x.calm?SFX.soft():SFX.chime(); $('.rg-rp-say',g).textContent=x.say||''; paint(); refreshPress(); });
    function done(){ var cards=(c.missing||{}).cards||[]; return !!st.date&&cards.every(function(x,i){ return !!st.miss[i]; }); }
    paint();
    return {el:g,done:done,journal:function(e,NA){ if(!st.date) return NA; var cards=(c.missing||{}).cards||[]; return '<p class="a">The picture was made in '+e((c.date||{}).year)+'. Missing from it: '+e(cards.filter(function(x,i){ return st.miss[i]==='out'; }).map(function(x){ return x.t; }).join(', '))+'.</p>'; }}; };

  /* ---------------------------------------------------------------- layout: drag your own notes onto a blank front page before you write */
  MOD.layout=function(c,anchor){ var st=mstate('layout',{slot:{}});
    var g=gameShell('rg-layout','Go to Press · lay out the page',c.title||'Plan your front page',c);
    g.innerHTML+='<div class="rg-lo-wrap"><div class="rg-lo-chips"><div class="lab">Your notes <i>(from your Editor’s Notebook)</i></div><div class="rg-lo-list"></div></div>'+
      '<div class="rg-lo-page"><div class="mast">The Republic Gazette</div>'+(c.slots||[]).map(function(s){ return '<div class="rg-lo-slot" data-id="'+esc(s.id)+'" data-kind="'+esc(s.kind||'')+'"><div class="lab">'+esc(s.t)+'</div><div class="val"></div><small>'+esc(s.hint||'')+'</small></div>'; }).join('')+'</div></div><div class="rg-lo-say"></div>';
    after(anchor,g);
    function chips(){ var out=[]; ['journal-q1','journal-q2','journal-q3'].forEach(function(id){ var t=document.getElementById(id); if(!t) return; (t.value||'').split(/(?<=[.!?])\s+/).forEach(function(s){ s=s.trim(); if(words(s)>=3) out.push(s); }); });
      (c.extra||[]).forEach(function(x){ out.push(x); }); return out; }
    function paint(){ var cs=chips(), used={}; Object.keys(st.slot).forEach(function(k){ used[st.slot[k]]=1; });
      $('.rg-lo-list',g).innerHTML=cs.length?cs.map(function(s){ return '<button type="button" class="rg-card'+(used[s]?' placed':'')+'" draggable="true">'+esc(s)+'</button>'; }).join(''):'<p class="rg-empty">Your notes show up here after you answer the Editor’s Notebook on the Desk tab (tab 2).</p>';
      $$('.rg-lo-slot',g).forEach(function(s){ var v=st.slot[s.dataset.id]; $('.val',s).textContent=v||''; s.classList.toggle('filled',!!v); });
      g.classList.toggle('finished',done()); $('.rg-lo-say',g).innerHTML=done()?'<div class="rg-win">'+esc(c.close||'Your page is laid out. Now write it in your own words below. Use your plan, don’t copy it.')+'</div>':''; }
    dragTap(g,'.rg-card','.rg-lo-slot',function(card,slot){ st.slot[slot.dataset.id]=card.textContent; save(); SFX.paper(); paint(); refreshPress(); });
    g.addEventListener('click',function(e){ var s=e.target.closest('.rg-lo-slot'); if(s&&st.slot[s.dataset.id]&&!$('.rg-card.picked',g)){ delete st.slot[s.dataset.id]; save(); paint(); refreshPress(); } });
    ['journal-q1','journal-q2','journal-q3'].forEach(function(id){ var t=document.getElementById(id); if(t) t.addEventListener('input',function(){ clearTimeout(g.__t); g.__t=setTimeout(paint,500); }); });
    function done(){ return (c.slots||[]).every(function(s){ return !!st.slot[s.id]; }); }
    paint();
    return {el:g,done:done,lines:function(){ return (c.slots||[]).map(function(s){ return [s.t,st.slot[s.id]||'']; }); }}; };

  /* ---------------------------------------------------------------- worddesk: crack the root in each word (set in backwards type), then use the word in a claim */
  MOD.worddesk=function(c,anchor){ var st=mstate('word',{cracked:{},line:''});
    var g=gameShell('rg-worddesk','The Word Desk',c.title||'Crack the root',c);
    g.innerHTML+='<div class="rg-wd-root"><span class="r">'+esc(c.root)+'</span> = <b>'+esc(c.meaning)+'</b></div><div class="rg-wd-words">'+(c.words||[]).map(function(w,i){ return '<div class="rg-wd-w" data-i="'+i+'"><div class="type">'+w.parts.map(function(p,j){ return '<span class="pc'+(j===w.root?' root':'')+'" data-j="'+j+'">'+esc(p)+'</span>'; }).join('')+'</div><div class="m">'+esc(w.m)+'</div></div>'; }).join('')+'</div>'+
      '<div class="rg-wd-fact"></div><div class="rg-wd-claim"><label><b>Use it in a claim.</b> '+esc(c.claim&&c.claim.prompt||'')+'</label><textarea class="rg-wd-in" rows="2" placeholder="'+esc(c.claim&&c.claim.starter||'')+'"></textarea><div class="rg-wc"></div></div>';
    after(anchor,g); var ta=$('.rg-wd-in',g); ta.value=st.line||'';
    function cl(){ var cc=c.claim||{}; var v=ta.value||''; var n=words(v), has=new RegExp(cc.must||'.','i').test(v); return [n>=(cc.min||8)&&has,n,has]; }
    function paint(){ var all=(c.words||[]).every(function(w,i){ return st.cracked[i]; });
      $$('.rg-wd-w',g).forEach(function(w){ w.classList.toggle('cracked',!!st.cracked[w.dataset.i]); });
      $('.rg-wd-fact',g).innerHTML=all&&c.fact?'<div class="rg-why"><span class="ic">💡</span><div><b>'+esc(c.factQ||'Discovery')+'</b> '+esc(c.fact)+'</div></div>':'';
      $('.rg-wd-claim',g).classList.toggle('rg-hide',!all);
      var r=cl(), cc=c.claim||{}; var wc=$('.rg-wc',g); wc.classList.toggle('ok',r[0]); wc.innerHTML=r[0]?'✓ '+r[1]+' words, and you used the word.':'📝 <b>'+r[1]+' of '+(cc.min||8)+' words.</b>'+(r[2]?'':' Use the word <b>'+esc(cc.word||'')+'</b>.');
      g.classList.toggle('finished',done()); }
    g.addEventListener('click',function(e){ var w=e.target.closest('.rg-wd-w'); if(!w) return; var i=w.dataset.i, pc=e.target.closest('.pc');
      if(st.cracked[i]) return; if(pc&&pc.classList.contains('root')){ st.cracked[i]=true; save(); SFX.chime(); paint(); refreshPress(); } else { w.classList.add('bounce'); setTimeout(function(){ w.classList.remove('bounce'); },450); SFX.bounce(); } });
    ta.addEventListener('input',function(){ st.line=ta.value; save(); paint(); });
    function done(){ return (c.words||[]).every(function(w,i){ return st.cracked[i]; })&&cl()[0]; }
    paint();
    return {el:g,done:done,journal:function(e,NA){ return st.line?'<p class="a"><b>'+e(c.root)+'</b> = '+e(c.meaning)+'. '+e(st.line)+'</p>':NA; }}; };

  /* ---------------------------------------------------------------- almanac: one real saying, verified word for word, tied to the virtue */
  function buildAlmanac(){ var A=DATA.almanac, ed=$('#panel-dispatch .editors-desk'); if(!A||!ed) return;
    var a=el('div','rg rg-almanac','<div class="rg-al-head"><span>☼</span> The Almanac Corner <span>☾</span></div><blockquote>“'+esc(A.saying)+'”</blockquote><cite>'+esc(A.cite)+'</cite><button type="button" class="rg-btn alt rg-al-turn">Turn the page ▸</button><div class="rg-al-back">'+(A.what?'<p><b>What’s an almanac?</b> '+esc(A.what)+'</p>':'')+'<p>'+esc(A.tie)+'</p>'+(A.q?'<p class="q">'+esc(A.q)+'</p>':'')+'</div>');
    after(ed,a); $('.rg-al-turn',a).addEventListener('click',function(){ a.classList.toggle('turned'); SFX.paper(); S.m.almanac=true; save(); }); if(S.m.almanac) a.classList.add('turned'); }

  function buildModules(){
    var p1=document.getElementById('panel-dispatch'), p2=document.getElementById('panel-desk'), p4=document.getElementById('panel-press');
    var s1=DATA.scene1; if(s1&&MOD[s1.type]&&p1){ var hw=$('.herald-wrap',p1)||$('.editors-desk',p1); if(hw) R.scene1=MOD[s1.type](s1,hw); }
    var ex=DATA.explore||{};
    if(ex.reading&&MOD[ex.reading.type]&&p2){ var sec=$$('.content-section',p2)[0]; if(sec){ var hd=$('h2',sec); hide(sec); R.reading=MOD[ex.reading.type](ex.reading,sec); } }
    if(ex.evidence&&MOD[ex.evidence.type]&&p2){ var fr=$('.source-image-frame',p2), sec2=fr&&fr.closest('.content-section'); if(sec2){ hide(sec2); R.evidence=MOD[ex.evidence.type](ex.evidence,sec2); } }
    var V=DATA.vocab, wd=p2&&$('.word-desk',p2); if(V&&MOD[V.type]&&wd){ hide(wd); R.vocab=MOD[V.type](V,wd); }
    var PL=DATA.planner, ga=p4&&$('.gazette-assignment-wrap',p4); if(PL&&MOD[PL.type]&&ga){ var mark=el('span','rg rg-mark'); before(ga,mark); R.planner=MOD[PL.type](PL,mark); }
    buildAlmanac(); }

  /* ================================================================ Fact-Check one claim at a time + "why that one's tempting" */
  function buildFactSteps(){ var qs=$$('#panel-factcheck .factcheck-q'); if(qs.length<2) return;
    var cur=0, bar=el('div','rg rg-qprog'); before(qs[0],bar); var score=document.getElementById('factcheckScore');
    qs.forEach(function(q,i){ var nx=el('button','rg rg-qnext',i<qs.length-1?'Next claim →':'See my record →'); nx.type='button'; q.appendChild(nx);
      nx.addEventListener('click',function(){ cur=i+1; paint(); var t=qs[cur]||score; if(t) t.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'}); }); });
    function answered(q){ return !!q.querySelector('.factcheck-option.correct, .factcheck-option.incorrect'); }
    function paint(){ if(!html.classList.contains('rg-on')) return; qs.forEach(function(q,i){ q.classList.toggle('rg-qhide',i!==cur); q.classList.toggle('rg-qready',answered(q)); });
      if(score) score.classList.toggle('rg-qhide',cur<qs.length);
      bar.innerHTML=cur<qs.length?qs.map(function(q,i){ return '<i class="'+(i<cur?'done':i===cur?'now':'')+'"></i>'; }).join('')+'<span>Claim '+(cur+1)+' of '+qs.length+'</span>':''; bar.classList.toggle('rg-hide',cur>=qs.length); refreshPress(); }
    var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(paint,30); }); mo.observe(document.getElementById('panel-factcheck'),{attributes:true,subtree:true,attributeFilter:['class']}); OBS.push(mo);
    paint(); }
  function buildQuizMiss(){ if(!DATA.quizMiss||typeof window.checkAnswer!=='function'||window.__rgQuizWrapped) return; window.__rgQuizWrapped=true;
    var orig=window.checkAnswer;
    window.checkAnswer=function(qId,opt,ok){ var q=document.getElementById(qId), was=q&&q.querySelector('.factcheck-option.correct, .factcheck-option.incorrect'); var r=orig.apply(this,arguments);
      if(was||!q||!html.classList.contains('rg-on')) return r;
      var idx=$$('#panel-factcheck .factcheck-q').indexOf(q), letter=((opt.querySelector('.factcheck-option-letter')||{}).textContent||'').trim(), line=(DATA.quizMiss[idx]||{})[letter];
      if(!ok&&line){ var fb=document.getElementById('fb-'+qId.replace('fc-',''))||q.lastElementChild; after(fb,el('div','rg rg-qmiss','<b>Why that one’s tempting:</b> '+esc(line))); }
      ok?SFX.chime():SFX.bounce(); return r; }; }

  /* ================================================================ answer chips, hint ladders, live word counters — all from DATA */
  function flagCount(f,v){ if(f.groups) return f.groups.filter(function(g){ return new RegExp('\\b('+g+')','i').test(v); }).length;
    var m=v.match(new RegExp(f.rx,'gi'))||[]; var u={}; m.forEach(function(x){ u[x.toLowerCase().trim()]=1; }); return Object.keys(u).length; }
  /* a question counts as answered with 8+ words and at most one chip missed: chips are hints, never locks */
  function qDone(id){ var fl=(DATA.flags||{})[id], t=document.getElementById(id); if(!t) return true; var v=t.value||'';
    if(!fl) return words(v)>=8; var hit=fl.filter(function(f){ return flagCount(f,v)>=f.n; }).length;
    return words(v)>=8&&hit>=fl.length-1; }
  function buildHelp(){ var ids={}; ['flags','hints','scholar'].forEach(function(k){ Object.keys(DATA[k]||{}).forEach(function(id){ ids[id]=1; }); });
    Object.keys(ids).forEach(function(id){ var host=document.getElementById(id); if(!host) return;
      var fl=(DATA.flags||{})[id], hs=(DATA.hints||{})[id], sc=(DATA.scholar||{})[id], box=el('div','rg rg-help');
      if(fl) box.innerHTML+='<div class="rg-flags"><span class="lab">Your answer needs</span>'+fl.map(function(f,i){ return '<span class="f" data-i="'+i+'">'+esc(f.t)+'</span>'; }).join('')+'</div>';
      if(hs) box.innerHTML+='<div class="rg-ladder"><button type="button" class="rg-nudge">✏️ Ask the editor for a nudge</button><ol class="rg-rungs"></ol></div>';
      if(sc) box.innerHTML+='<div class="rg-further">✦ '+esc(sc)+' <span>(optional)</span></div>';
      after(host,box);
      if(fl){ var paint=function(){ $$('.rg-flags .f',box).forEach(function(c){ var f=fl[+c.dataset.i]; c.classList.toggle('hit',flagCount(f,host.value||'')>=f.n); }); refreshPress(); }; host.addEventListener('input',paint); paint(); }
      if(hs){ var btn=$('.rg-nudge',box), ol=$('.rg-rungs',box);
        var show=function(){ var n=S.hints[id]||0; ol.innerHTML=hs.slice(0,n).map(function(h){ return '<li>'+esc(h)+'</li>'; }).join(''); btn.textContent=n===0?'✏️ Ask the editor for a nudge':n<hs.length?'✏️ Another nudge':'That’s every nudge. You’ve got this.'; btn.disabled=n>=hs.length; };
        btn.addEventListener('click',function(){ S.hints[id]=Math.min((S.hints[id]||0)+1,hs.length); save(); show(); SFX.scratch(); }); show(); } }); }
  function wc(id,need,label){ var t=document.getElementById(id); if(!t) return; var c=document.getElementById('rg-wc-'+id); if(!c){ c=el('div','rg rg-wc'); c.id='rg-wc-'+id; var h=t.nextElementSibling&&t.nextElementSibling.classList.contains('rg-help')?t.nextElementSibling:t; after(h,c); }
    var n=words(t.value); c.classList.toggle('ok',n>=need); c.innerHTML=n>=need?'✓ '+n+' words.'+(label?' '+label:''):'📝 <b>'+n+' of '+need+' words.</b> '+(n?'Keep going.':'Write at least '+need+' words.'); }
  function paintCounts(){ ['journal-q1','journal-q2','journal-q3'].forEach(function(id){ wc(id,8); }); wc('brief-headline',3); wc('brief-body',MIN_WORDS,'That’s enough for your brief.'); wc('archive-line',5); }

  /* ================================================================ Go to Press — four steps */
  var STEP4=DATA.steps||[{t:'Plan your page'},{t:'Write your brief'},{t:'Write your Archive Line'},{t:'Check, then print'}], stepperEl=null;
  function stepHead(i){ var h=el('div','rg rg-stephead','<span class="n">'+(i+1)+'</span><div class="t">'+esc(STEP4[i].t)+'</div>'); h.id='rg-step-'+(i+1); return h; }
  function buildSteps(){ var p=document.getElementById('panel-press'); if(!p) return; var ga=$('.gazette-assignment-wrap',p), al=$('.archive-line-card',p), gc=$('.gathered-card',p), ck=$('.checklist-card',p); if(!ga||!al||!ck) return;
    stepperEl=el('div','rg rg-stepper',STEP4.map(function(s,i){ return '<button type="button" data-i="'+(i+1)+'"><span class="n"><span>'+(i+1)+'</span></span>'+esc(s.t)+'</button>'; }).join(''));
    stepperEl.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; var h=document.getElementById('rg-step-'+b.dataset.i); if(h) h.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}); });
    var sh=$('.rg-scene',p); if(sh) after(sh,stepperEl); else p.insertBefore(stepperEl,p.firstChild);
    var plan=R.planner&&R.planner.el; before(plan||ga,stepHead(0)); before(ga,stepHead(1)); before(al,stepHead(2)); before(gc||ck,stepHead(3));
    p.addEventListener('input',function(){ paintCounts(); updateStepper(); }); updateStepper(); }
  function wn(id){ var t=document.getElementById(id); return t?words(t.value):0; }
  function checklistDone(){ var r=$$('.checklist-card .checklist-row'); return r.length>0&&r.every(function(x){ return x.classList.contains('checked'); }); }
  function updateStepper(){ paintCounts(); if(!stepperEl) return;
    var st=[R.planner?R.planner.done():true, wn('brief-headline')>=3&&wn('brief-body')>=MIN_WORDS, wn('archive-line')>=5, checklistDone()];
    $$('button',stepperEl).forEach(function(b,i){ b.classList.toggle('done',st[i]); }); }

  /* ================================================================ VOICE NOTES — Ms. Avery's audio. Never reads the page, never gives an answer.
     Hidden until its .mp3 loads (?review shows empty slots). Files: audio/guide/g5ss-<lesson>-<slot>.mp3
     DATA.voice: [{slot,label,at,script} | {label,at,parts:[{slot,who,script}]}]   at: see AT */
  var AT={
    dispatch:function(){ var h=$('#panel-dispatch .herald-wrap'); return h&&[h,'before']; },
    s1done:function(){ var g=R.scene1&&R.scene1.el; return g&&[g,'after']; },
    desk:function(){ var g=R.reading&&R.reading.el; return g&&[g,'before']; },
    afterread:function(){ var g=R.reading&&R.reading.el; return g&&[g,'after']; },
    source:function(){ var g=R.evidence&&R.evidence.el; return g&&[g,'before']; },
    notebook:function(){ var b=$('#panel-desk .reflection-block'); return b&&[b,'before']; },
    plan:function(){ var g=R.planner&&R.planner.el; return g&&[g,'before']; },
    write:function(){ var h=document.getElementById('rg-step-2'); return h&&[h,'after']; },
    score:function(){ var q=document.getElementById('factcheckScore'); return q&&[q,'after']; },
    redpencil:function(){ var r=$('.rg-redpencil'); return r&&[r,'before']; }
  };
  var WHEN={ quizDone:function(){ return !!S.quizDone; } };
  /* ═══ Spotlight (ported from the G4 layers): page parts light up, pop, point and reveal exactly when the voice names them.
     DATA.cues = {<slot>:[{at:'regex for the spoken word',sel:'css',i:n|all:true,fx:'glow'|'pop'|'wiggle'|'point'|'trace'|'reveal',tag:'label',scroll:true}]}
     DATA.cueWords = {<slot>:[[start,end,'word'],…]} (from a Scribe transcript; without it times are estimated) ═══ */
  function spotlight(id,script,audio){ var Cs=(DATA.cues||{})[id]; if(!Cs||!Cs.length||!audio) return;
    var toks=String(script||'').split(/\s+/).filter(Boolean), from=0, beats=[];
    function clean(t){ return String(t).replace(/^[^\w’']+|[^\w’']+$/g,''); }
    Cs.forEach(function(c){ var re=new RegExp(c.at,'i'), k=from; while(k<toks.length&&!re.test(clean(toks[k]))) k++; if(k>=toks.length){ try{ console.warn('spotlight: cue "'+c.at+'" is not in the '+id+' script'); }catch(e){} return; } beats.push({c:c,k:k}); from=k+1; });
    var W=(DATA.cueWords||{})[id]; if(W&&W.length){ var wf=0; beats.forEach(function(b){ var re=new RegExp(b.c.at,'i'), j=wf; while(j<W.length&&!re.test(clean(W[j][2]))) j++; if(j<W.length){ b.t=W[j][0]; wf=j+1; } }); }
    function est(k,dur){ var wt=function(t){ return t.length+2+(/[.!?]$/.test(t)?7:/[,;:]$/.test(t)?3:0); }; var tot=toks.reduce(function(n,t){ return n+wt(t); },0), b4=0; for(var i=0;i<k;i++) b4+=wt(toks[i]); return Math.max(0,b4/(tot||1)*(dur||30)-0.15); }
    var fired=-1, live=[], raf=0, clr=0;
    function els(c){ var a=$$(c.sel); if(c.i!=null) return a[c.i]?[a[c.i]]:[]; return c.all?a:a.slice(0,1); }
    function clearNow(){ live.forEach(function(e){ e.classList.remove('rg-cue-now','rg-cue-pop','rg-cue-wiggle','rg-cue-point','rg-cue-trace'); var t=e.querySelector(':scope > .rg-cue-tag'); if(t) t.remove(); }); live=[]; }
    function fire(i){ var b=beats[i]; if(!b) return; clearNow();
      els(b.c).forEach(function(e){ e.classList.remove('rg-cue-wait'); e.classList.add('rg-cue-lit','rg-cue-now'); var fx=b.c.fx||'glow'; if(fx!=='glow'&&fx!=='reveal'&&!RM){ void e.offsetWidth; e.classList.add('rg-cue-'+fx); }
        if((b.c.tag||fx==='point')&&getComputedStyle(e).position==='static') e.classList.add('rg-cue-rel');
        if(b.c.tag){ var t=document.createElement('span'); t.className='rg-cue-tag'; t.setAttribute('aria-hidden','true'); t.textContent=b.c.tag; e.appendChild(t); }
        if(b.c.scroll){ var r=e.getBoundingClientRect(); if(r.bottom<60||r.top>innerHeight-60) e.scrollIntoView({block:'center',behavior:RM?'auto':'smooth'}); }
        live.push(e); }); }
    function at(t,dur){ var n=-1; beats.forEach(function(b,i){ if(t>=(b.t!=null?b.t-0.1:est(b.k,dur))) n=i; }); while(fired<n){ fired++; fire(fired); } }
    function tick(){ if(audio.paused) return; at(audio.currentTime,audio.duration); raf=requestAnimationFrame(tick); }
    audio.addEventListener('play',function(){ clearTimeout(clr); if(audio.currentTime<0.3){ fired=-1; clearNow(); }
      beats.forEach(function(b){ if((b.c.fx||'')==='reveal') els(b.c).forEach(function(e){ if(!e.classList.contains('rg-cue-lit')) e.classList.add('rg-cue-wait'); }); });
      html.classList.add('rg-cueing'); cancelAnimationFrame(raf); raf=requestAnimationFrame(tick); });
    audio.addEventListener('timeupdate',function(){ if(!audio.paused) at(audio.currentTime,audio.duration); });
    function end(done){ cancelAnimationFrame(raf); html.classList.remove('rg-cueing'); $$('.rg-cue-wait').forEach(function(e){ e.classList.remove('rg-cue-wait'); }); clr=setTimeout(clearNow,done?1600:0); if(done) fired=-1; }
    audio.addEventListener('pause',function(){ if(!audio.ended) end(false); }); audio.addEventListener('ended',function(){ end(true); }); }
  function buildVoice(){ (DATA.voice||[]).forEach(function(v){ var w=AT[v.at]&&AT[v.at](); if(!w) return;
    var parts=v.parts||[{slot:v.slot,script:v.script}], key=v.slot||parts.map(function(p){ return p.slot; }).join('+'), bars='';
    for(var i=0;i<34;i++) bars+='<i style="height:'+(4+Math.round(12*Math.abs(Math.sin(i*1.7+key.length))))+'px"></i>';
    var tx=parts.map(function(p){ return (p.who?'<b>'+esc(p.who)+':</b> ':'')+esc(p.script); }).join('<br><br>');
    var n=el('div','rg rg-vn rg-hide',AVERY+'<div class="mid"><div class="k">Voice memo from Ms. Avery</div><div class="t">'+esc(v.label)+'</div><div class="wave">'+bars+'</div></div><button type="button" class="play" aria-label="Play voice memo">▶</button><button type="button" class="rd">📄 Read the words instead</button><div class="tx">'+tx+'</div>');
    n.dataset.slot=key; n.__when=WHEN[v.when]; w[1]==='after'?after(w[0],n):before(w[0],n);
    var play=$('.play',n), cur=0, ok=0, bad=false;
    var aus=parts.map(function(p,idx){ var au=new Audio(); au.preload='metadata';
      au.addEventListener('loadedmetadata',function(){ if(++ok===parts.length&&!bad){ n.classList.remove('rg-hide','rg-empty'); play.disabled=false; var m=$('.mock',n); if(m) m.remove(); } });
      au.addEventListener('error',function(){ bad=true; n.classList.remove('rg-hide'); n.classList.add('rg-empty'); play.disabled=true; if(!$('.mock',n)) $('.k',n).insertAdjacentHTML('beforeend','<span class="mock"> · empty slot: g5ss-'+LESSON+'-'+p.slot+'.mp3</span>'); });
      au.addEventListener('ended',function(){ if(idx<parts.length-1){ cur=idx+1; aus[cur].currentTime=0; aus[cur].play(); } else { cur=0; n.classList.remove('playing'); play.textContent='▶'; } });
      return au; });
    function stop(){ aus[cur].pause(); n.classList.remove('playing'); play.textContent='▶'; } n.__stop=stop;
    play.addEventListener('click',function(){ if(n.classList.contains('playing')){ stop(); return; } $$('.rg-vn.playing').forEach(function(o){ if(o!==n&&o.__stop) o.__stop(); }); aus[cur].play(); n.classList.add('playing'); play.textContent='❚❚'; });
    $('.rd',n).addEventListener('click',function(){ n.classList.toggle('read'); this.textContent=n.classList.contains('read')?'Hide words':'📄 Read the words instead'; });
    parts.forEach(function(p,idx){ aus[idx].src=AUD+'g5ss-'+LESSON+'-'+p.slot+'.mp3'; spotlight(p.slot,p.script,aus[idx]); }); }); refreshVoice(); }
  function refreshVoice(){ $$('.rg-vn').forEach(function(n){ if(n.__when) n.classList.toggle('rg-wait',!n.__when()); }); }
  function paintVideos(){ if(!html.classList.contains('rg-on')) return; $$('.video-ratio').forEach(function(v){ v.classList.toggle('rg-empty',!v.querySelector('iframe,video')); }); }
  function buildMedia(){ paintVideos(); var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(paintVideos,100); }); mo.observe(document.body,{childList:true,subtree:true}); OBS.push(mo); }

  /* ================================================================ THE RED PENCIL — correct the Herald, then print */
  function buildRedPencil(){ var p=document.getElementById('panel-press'), cert=document.getElementById('certCard'); if(!p||!cert) return; var RP=DATA.redpencil||{};
    var claim=(RP.claim||(($('.herald-claim')||{}).textContent||'')).replace(/^[\s“"]+|[\s”"]+$/g,'');
    var box=el('section','rg rg-game rg-redpencil','<div class="rg-game-k">Before it prints · the signature move</div><h3 class="rg-game-t">Correct the Herald</h3>'+whyCard(RP.why)+'<div class="rg-rpc-lock"></div><div class="rg-rpc-clip"><div class="h">The Hasty Herald</div><div class="hl">'+esc(RP.headline||(($('.herald-headline')||{}).textContent||''))+'</div><p class="claim"><span class="txt">“'+esc(claim)+'”</span><svg class="strike" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M1,6 C20,3 40,8 60,4 S90,7 99,4" pathLength="100"/></svg></p><div class="caret" aria-hidden="true">‸</div><div class="fix"></div><div class="stamp">Corrected · The Republic Gazette</div></div><div class="rg-rpc-act"></div>');
    before(cert,box);
    function paint(){ var ready=checklistDone()&&wn('archive-line')>=5, line=(document.getElementById('archive-line')||{}).value||'';
      box.classList.toggle('ready',ready); box.classList.toggle('struck',!!S.struck); box.classList.toggle('done',!!S.published);
      $('.rg-rpc-lock',box).innerHTML=ready||S.published?'':'<p class="rg-todo">🔒 Finish your Archive Line and tick every box in the checklist. Then the red pencil is yours.</p>';
      $('.fix',box).textContent=S.published?(S.m.correction||line):'';
      var act=$('.rg-rpc-act',box);
      act.innerHTML=S.published?'<div class="rg-win">'+esc(RP.win||'Printed. Your correction is on the record, and Issue '+ISSUE+' is filed in the Morgue.')+'</div>':!ready?'':!S.struck?'<button type="button" class="rg-btn red" data-a="strike">✏️ Strike the Herald’s claim</button>':'<button type="button" class="rg-btn" data-a="print">‸ Print my Archive Line as the correction</button>'; }
    box.addEventListener('click',function(e){ var b=e.target.closest('button[data-a]'); if(!b) return;
      if(b.dataset.a==='strike'){ S.struck=true; save(); SFX.scratch(); paint(); }
      else { S.m.correction=(document.getElementById('archive-line')||{}).value||''; S.published=true; if(ISSUE&&C.published.indexOf(ISSUE)<0) C.published.push(ISSUE); C.lines[ISSUE]={line:S.m.correction,head:(document.getElementById('brief-headline')||{}).value||'',lesson:DATA.lesson}; save(); SFX.stamp(); paint(); refreshPress(); paintMorgue(true); var m=$('.rg-morgue'); if(m) setTimeout(function(){ m.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}); },900); } });
    var p4=document.getElementById('panel-press'); p4.addEventListener('input',paint); p4.addEventListener('click',function(e){ if(e.target.closest('.checklist-row')) setTimeout(paint,0); });
    paint(); }

  /* ================================================================ THE MORGUE — every issue the student has published this year */
  var ISSUES=DATA.issues||COURSE;
  function unitOf(code){ return +String(code).split('.')[1]; }
  function buildMorgue(){ var p=document.getElementById('panel-press'), cert=document.getElementById('certCard'); if(!p||!cert) return; var M=DATA.morgue||{};
    var m=el('section','rg rg-morgue','<div class="rg-mg-head"><div><div class="rg-game-k">The Gazette’s archive</div><h3 class="rg-game-t">🗄 The Morgue</h3></div>'+(M.realImg?'<figure class="rg-mg-real"><img alt="" src="'+esc(LOCAL+M.realImg)+'"><figcaption>'+esc(M.realCap||'')+'</figcaption></figure>':'')+'</div>'+whyCard(M.why||{icon:'🗄',q:'Why is it called “the morgue”?',t:'Real newspapers call their archive of old issues and clippings “the morgue.” It’s where finished stories are filed away so reporters can look them up later. Every issue you publish gets filed here.'})+'<div class="rg-mg-drawers"></div><div class="rg-mg-open"></div>');
    var after_=$('.rg-redpencil',p)||cert; after(after_,m); paintMorgue(false); }
  function paintMorgue(justFiled){ var m=$('.rg-morgue'); if(!m) return; m.classList.toggle('rg-hide',!S.published&&!C.published.length);
    var units={}; ISSUES.forEach(function(x){ var u=unitOf(x[1]); (units[u]=units[u]||[]).push(x); });
    var curU=unitOf(DATA.lesson);
    $('.rg-mg-drawers',m).innerHTML=Object.keys(units).map(function(u){ var list=units[u], filed=list.filter(function(x){ return C.published.indexOf(x[0])>-1; }).length;
      return '<details class="rg-drawer"'+(+u===curU?' open':'')+'><summary><span class="lbl">Unit '+u+'</span><span class="cnt">'+filed+' of '+list.length+' filed</span></summary><div class="rg-mg-grid">'+list.map(function(x){ var f=C.published.indexOf(x[0])>-1, me=x[0]===ISSUE;
        return '<button type="button" class="rg-issue'+(f?' filed':'')+(me&&justFiled?' new':'')+'" data-n="'+x[0]+'"'+(f?'':' disabled')+'><span class="no">No. '+x[0]+'</span><span class="pic"'+(f&&x[3]?' data-img="'+esc(x[3])+'"':'')+'></span><span class="tt">'+x[2]+'</span>'+(f?'':'<span class="lk">not filed yet</span>')+'</button>'; }).join('')+'</div></details>'; }).join('');
    $$('.rg-issue .pic[data-img]',m).forEach(function(p){ if(!p.firstChild) p.appendChild(srcImg(p.dataset.img,'','')); });
    m.onclick=function(e){ var b=e.target.closest('.rg-issue.filed'); if(!b) return; var L=C.lines[b.dataset.n]||{}; $('.rg-mg-open',m).innerHTML='<div class="rg-clip"><div class="h">Issue '+esc(b.dataset.n)+(L.head?' · '+esc(L.head):'')+'</div><p>'+(L.line?'Archive Line: “'+esc(L.line)+'”':'Filed.')+'</p></div>'; SFX.paper(); }; }

  /* ================================================================ DESK TRAY — highlighter, press camera, newsroom props */
  var HL_SEL='p, li, .rg-col-line, .rg-rp-notes li span, .dispatch-body, .herald-claim, .editors-desk-question, .factcheck-q-text, .rg-why div, .rg-myth .fact div';
  var HL_COLORS={ y:{n:'Key word',c:'#FFE58A'}, g:{n:'Evidence',c:'#B8EBC6'}, p:{n:'I wonder',c:'#FFC9DE'} };
  function store(k,v){ var key='oao.rg.'+LESSON+'.'+k; if(v===undefined){ try{ return localStorage.getItem(key); }catch(e){ return null; } } try{ localStorage.setItem(key,v); return true; }catch(e){ return false; } }
  function hlBlocks(){ return $$(HL_SEL).filter(function(b){ if(b.closest('.rg-tray, .rg-modal, .rg-hlbar, .gathered-card, textarea, .rg-wire, .rg-note, .rg-vn, .rg-off, script, style')) return false;
      if(!b.closest('.tab-panel, #introSection')) return false; if(b.parentElement&&b.parentElement.closest(HL_SEL)) return false; return b.textContent.trim().length>2; }); }
  function tnodes(block){ var w=document.createTreeWalker(block,NodeFilter.SHOW_TEXT,null), a=[], n; while((n=w.nextNode())) a.push(n); return a; }
  function blockText(b){ return tnodes(b).map(function(n){ return n.nodeValue; }).join(''); }
  function offsetIn(block,node,off){ var ns=tnodes(block), sum=0; if(node.nodeType!==3){ var child=node.childNodes[off]; var probe=child?(function f(x){ if(x.nodeType===3) return x; for(var c=x.firstChild;c;c=c.nextSibling){ var r=f(c); if(r) return r; } return null; })(child):null; if(!probe) return blockText(block).length; node=probe; off=0; }
    for(var i=0;i<ns.length;i++){ if(ns[i]===node) return sum+off; sum+=ns[i].nodeValue.length; } return -1; }
  function wrapHL(block,s,e,color,id){ var ns=tnodes(block), pos=0; ns.forEach(function(n){ var len=n.nodeValue.length, a=Math.max(s,pos), b=Math.min(e,pos+len);
      if(a<b){ var start=a-pos, end=b-pos, mid=n; if(start>0) mid=n.splitText(start); if(end-start<mid.nodeValue.length) mid.splitText(end-start);
        var m=document.createElement('mark'); m.className='rg-hl rg-hl-'+color; m.dataset.hl=id; m.title=HL_COLORS[color].n+' · tap twice to remove'; mid.parentNode.insertBefore(m,mid); m.appendChild(mid); }
      pos+=len; }); }
  function unwrapHL(id){ $$('mark[data-hl="'+id+'"]').forEach(function(m){ var p=m.parentNode; while(m.firstChild) p.insertBefore(m.firstChild,m); p.removeChild(m); p.normalize(); }); }
  function highlights(){ try{ return JSON.parse(store('hl')||'[]'); }catch(e){ return []; } }
  function saveHL(a){ store('hl',JSON.stringify(a)); paintTray(); }
  function whereAmI(b){ var p=b.closest('.tab-panel'); var i=STAGES.map(function(s){ return 'panel-'+s.tab; }).indexOf(p&&p.id); return i>-1?'Tab '+(i+1)+' · '+STAGES[i].t:'Dispatch'; }
  function modal(){ var m=$('#rgModal'); if(!m){ m=el('div','rg rg-modal'); m.id='rgModal'; m.addEventListener('click',function(e){ if(e.target===m) m.classList.remove('open'); }); document.body.appendChild(m); } m.classList.add('open'); return m; }
  var trayEl=null;
  function buildTray(){ trayEl=el('span','rg rg-tray','<button type="button" class="rg-tb hl" title="Highlighter: mark the words that matter">🖍<span>Highlight</span><b class="cnt"></b></button><button type="button" class="rg-tb cam" title="Press camera: snap anything on the page">📷<span>Camera</span><b class="cnt"></b></button><button type="button" class="rg-tb roll" title="My clippings">🗂<span>Clippings</span><b class="cnt"></b></button><button type="button" class="rg-tb props" title="How real newspapers worked">📐<span>Newsroom</span></button>');
    var slot=pressEl&&$('.rg-trayslot',pressEl); if(slot) slot.appendChild(trayEl); else document.body.appendChild(trayEl);
    $('.hl',trayEl).addEventListener('click',function(){ if(html.classList.contains('rg-hlmode')){ setHL(false); return; } if(!store('hl-coached')) openCoach(); else setHL(true); });
    $('.cam',trayEl).addEventListener('click',startSnap); $('.roll',trayEl).addEventListener('click',openRoll); $('.props',trayEl).addEventListener('click',openProps);
    buildHighlighter(); buildHunt(); paintTray(); }
  function paintTray(){ if(!trayEl) return; var h=highlights().length, ph=photos().length, ms=(DATA.camera||{}).missions||[], md=ms.filter(function(x,i){ return photos().some(function(p){ return p.mission===i; }); }).length;
    $('.hl .cnt',trayEl).textContent=h||''; $('.cam .cnt',trayEl).textContent=ms.length?md+'/'+ms.length:''; $('.roll .cnt',trayEl).textContent=(h+ph)||''; paintHunt(); }
  var hlbar=null, pend=null;
  function buildHighlighter(){ hlbar=el('div','rg rg-hlbar','<span>🖍</span>'+Object.keys(HL_COLORS).map(function(k){ return '<button type="button" data-c="'+k+'"><i style="background:'+HL_COLORS[k].c+'"></i>'+HL_COLORS[k].n+'</button>'; }).join(''));
    document.body.appendChild(hlbar);
    var banner=el('div','rg rg-hlbanner','🖍 <b>Highlighter on.</b> Drag across a few key words, then pick a color. <button type="button" data-a="tips">Tips</button><button type="button" data-a="off">Turn off</button>'); document.body.appendChild(banner);
    $('[data-a="tips"]',banner).addEventListener('click',openCoach); $('[data-a="off"]',banner).addEventListener('click',function(){ setHL(false); });
    function hideBar(){ hlbar.classList.remove('show'); pend=null; }
    function check(){ if(!html.classList.contains('rg-on')||!html.classList.contains('rg-hlmode')) return hideBar(); var sel=window.getSelection(); if(!sel||sel.isCollapsed||!sel.rangeCount) return hideBar();
      var r=sel.getRangeAt(0), sn=r.startContainer.nodeType===3?r.startContainer.parentElement:r.startContainer, blocks=hlBlocks(), block=sn.closest&&sn.closest(HL_SEL);
      while(block&&blocks.indexOf(block)<0) block=block.parentElement&&block.parentElement.closest(HL_SEL); if(!block) return hideBar();
      var s=offsetIn(block,r.startContainer,r.startOffset), e=block.contains(r.endContainer)?offsetIn(block,r.endContainer,r.endOffset):blockText(block).length; if(s<0||e<=s) return hideBar();
      var t=blockText(block).slice(s,e), lead=t.length-t.replace(/^\s+/,'').length; s+=lead; t=t.trim(); e=s+t.length; if(t.length<2) return hideBar();
      pend={block:block,b:blocks.indexOf(block),s:s,e:e,t:t}; var rr=r.getBoundingClientRect();
      hlbar.style.left=Math.max(8,Math.min(innerWidth-300,rr.left+rr.width/2-140))+'px'; hlbar.style.top=(rr.bottom+scrollY+10)+'px'; hlbar.classList.add('show'); }
    var tmr=null; document.addEventListener('selectionchange',function(){ clearTimeout(tmr); tmr=setTimeout(check,260); });
    $$('button',hlbar).forEach(function(b){ b.addEventListener('pointerdown',function(e){ e.preventDefault(); }); b.addEventListener('click',function(){ if(!pend) return; var id='h'+Date.now().toString(36), c=b.dataset.c, a=highlights();
      a.push({id:id,b:pend.b,s:pend.s,e:pend.e,t:pend.t,c:c,where:whereAmI(pend.block)}); saveHL(a); wrapHL(pend.block,pend.s,pend.e,c,id); window.getSelection().removeAllRanges(); hideBar(); SFX.scratch(); }); });
    document.addEventListener('click',function(e){ var m=e.target.closest&&e.target.closest('mark.rg-hl'); if(!m) return; if(!m.classList.contains('arm')){ $$('mark[data-hl="'+m.dataset.hl+'"]').forEach(function(x){ x.classList.add('arm'); }); setTimeout(function(){ $$('mark.arm').forEach(function(x){ x.classList.remove('arm'); }); },2500); return; } unwrapHL(m.dataset.hl); saveHL(highlights().filter(function(h){ return h.id!==m.dataset.hl; })); });
    var blocks=hlBlocks(); highlights().forEach(function(h){ var b=blocks[h.b]; if(!b||blockText(b).slice(h.s,h.e)!==h.t){ b=blocks.filter(function(x){ return blockText(x).indexOf(h.t)>-1; })[0]; if(!b) return; h.s=blockText(b).indexOf(h.t); h.e=h.s+h.t.length; } wrapHL(b,h.s,h.e,h.c,h.id); }); }
  function setHL(on){ html.classList.toggle('rg-hlmode',on); var b=trayEl&&$('.hl',trayEl); if(b) b.classList.toggle('on',on); SFX.clack(); if(!on&&hlbar) hlbar.classList.remove('show'); }
  function openCoach(){ var Co=DATA.hlCoach||{}, Pr=Co.practice||{}, m=modal(), toks=(Pr.text||'').split(' ');
    m.innerHTML='<div class="rg-sheet"><button class="x" type="button" aria-label="Close">✕</button><h3>🖍 '+esc(Co.title||'Highlight like an editor')+'</h3><div class="rg-tips">'+(Co.tips||[]).map(function(t){ return '<div class="rg-tip"><span>'+t[0]+'</span><div><b>'+esc(t[1])+'</b> '+esc(t[2])+'</div></div>'; }).join('')+'</div>'+
      (Pr.text?'<div class="rg-prac"><div class="q">'+esc(Pr.q)+'</div><div class="s">'+toks.map(function(w,i){ return '<button type="button" data-i="'+i+'">'+esc(w)+'</button>'; }).join(' ')+'</div><div class="fb"></div><button type="button" class="rg-btn alt ck">Check my key words</button></div>':'')+
      '<div class="row"><button type="button" class="rg-btn go">Start highlighting</button></div></div>';
    $('.x',m).addEventListener('click',function(){ m.classList.remove('open'); });
    $('.go',m).addEventListener('click',function(){ store('hl-coached','1'); m.classList.remove('open'); setHL(true); });
    function clean(w){ return w.replace(/[^A-Za-z’']/g,'').toLowerCase(); }
    $$('.s button',m).forEach(function(b){ b.addEventListener('click',function(){ b.classList.toggle('on'); SFX.clack(); }); });
    var ck=$('.ck',m), tries=0; if(ck) ck.addEventListener('click',function(){ tries++; var on=$$('.s button.on',m).map(function(b){ return clean(b.textContent); }), key=(Pr.key||[]).map(function(w){ return w.toLowerCase(); }), small=(Pr.small||[]).map(function(w){ return w.toLowerCase(); });
      var hit=on.filter(function(w){ return key.indexOf(w)>-1; }).length, sm=on.filter(function(w){ return small.indexOf(w)>-1; }), msg, good=hit>=3&&!sm.length&&on.length<=7;
      if(!on.length) msg='Tap a few words first.'; else if(on.length>7) msg='That’s most of the sentence. Pick only the words that carry the idea (3 to 6).'; else if(sm.length) msg='“'+sm[0]+'” is a small glue word. It doesn’t carry the idea, so skip it.'; else if(hit>=3) msg='✓ Yes! Those are the key words.'; else msg='Close. Ask: who is it about, and what happened to them?';
      var fb=$('.fb',m); fb.innerHTML=esc(msg)+((good||tries>=2)&&Pr.model?'<div class="model">'+esc(Pr.model)+'</div>':''); fb.className='fb show'+(good?' ok':''); $$('.s button',m).forEach(function(b){ b.classList.toggle('key',(good||tries>=2)&&key.indexOf(clean(b.textContent))>-1); }); good?SFX.chime():SFX.bounce(); }); }
  /* ---- press camera: drag a box, snap it, caption it (html2canvas, loaded only when needed) ---- */
  var MEMPH=null; function photos(){ if(MEMPH) return MEMPH; try{ return JSON.parse(store('photos')||'[]'); }catch(e){ return []; } }
  function savePhotos(a){ MEMPH=a; var ok=store('photos',JSON.stringify(a)); paintTray(); return ok; }
  function ensureH2C(cb){ if(window.html2canvas) return cb(); var s=document.createElement('script'); s.src=DATA.h2c||'assets/sparkle/vendor/html2canvas.min.js'; s.onload=cb; s.onerror=function(){ ticker('The camera file is missing. Tell your teacher.'); }; document.head.appendChild(s); }
  var huntEl=null;
  function buildHunt(){ var CAM=DATA.camera||{}, MS=CAM.missions||[]; if(!MS.length) return; var anchor=$('#panel-dispatch .rg-scene'); if(!anchor) return;
    huntEl=el('div','rg rg-hunt','<div class="cam">📷</div><div><div class="rg-game-k">Bonus · Photo assignment <span class="opt">optional</span></div><div class="t">'+esc(CAM.title||'Every newspaper needs pictures. Can you snap all '+MS.length+'?')+'</div><ol></ol><div class="row"><button type="button" class="rg-btn alt">📷 Try the camera</button><span>'+esc(CAM.how||'Tap 📷 Camera in the desk tray, then drag a box around anything on the page. Your photos print in your Reporter’s Notebook.')+'</span></div></div>');
    after(anchor,huntEl); $('button',huntEl).addEventListener('click',startSnap); paintHunt(); }
  function paintHunt(){ if(!huntEl) return; var MS=(DATA.camera||{}).missions||[], a=photos(), n=0; $('ol',huntEl).innerHTML=MS.map(function(ms,i){ var d=a.some(function(p){ return p.mission===i; }); if(d) n++; return '<li class="'+(d?'on':'')+'"><span>'+(d?'✅':'🎯')+'</span>'+esc(ms)+'</li>'; }).join(''); huntEl.classList.toggle('done',n===MS.length); }
  var ov=null;
  function startSnap(){ var MAX=(DATA.camera||{}).max||8; if(photos().length>=MAX){ ticker('Your clippings are full. Delete a photo in 🗂 Clippings to make room.'); return; }
    ov=el('div','rg rg-snapov','<div class="vf"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i></div><div class="tip"><span class="rec">● CAMERA ON</span><b>Drag a box around what you want to snap.</b><button type="button">✕ Cancel</button></div><div class="mid"><span>📷</span>Press, hold and drag to draw your box</div><div class="box"></div>');
    document.body.appendChild(ov); SFX.clack(); var box=$('.box',ov), st=null;
    function end(){ if(ov){ ov.remove(); ov=null; } document.removeEventListener('keydown',esc1); } function esc1(e){ if(e.key==='Escape') end(); }
    $('.tip button',ov).addEventListener('click',function(e){ e.stopPropagation(); end(); }); document.addEventListener('keydown',esc1);
    function rect(e){ return {x:Math.min(st.x,e.clientX),y:Math.min(st.y,e.clientY),w:Math.abs(e.clientX-st.x),h:Math.abs(e.clientY-st.y)}; }
    function draw(e){ var r=rect(e); box.style.cssText='display:block;left:'+r.x+'px;top:'+r.y+'px;width:'+r.w+'px;height:'+r.h+'px'; }
    ov.addEventListener('pointerdown',function(e){ if(e.target.closest('.tip')) return; st={x:e.clientX,y:e.clientY}; ov.classList.add('drag'); ov.setPointerCapture&&ov.setPointerCapture(e.pointerId); draw(e); });
    ov.addEventListener('pointermove',function(e){ if(st) draw(e); });
    ov.addEventListener('pointerup',function(e){ if(!st) return; var r=rect(e); st=null; if(r.w<24||r.h<24){ box.style.display='none'; ov.classList.remove('drag'); return; } end(); snap(r); }); }
  function snap(r){ var flash=el('div','rg rg-flash'); document.body.appendChild(flash); SFX.snap(); setTimeout(function(){ flash.remove(); },450);
    ensureH2C(function(){ var wrap=$('.lesson-shell')||document.body, ref=document.elementFromPoint(r.x+r.w/2,r.y+r.h/2)||wrap, root=ref;
      while(root&&root!==wrap&&root.parentElement){ var q=root.getBoundingClientRect(); if(q.left<=r.x+1&&q.top<=r.y+1&&q.right>=r.x+r.w-1&&q.bottom>=r.y+r.h-1&&root.tagName!=='SPAN'&&root.tagName!=='B') break; root=root.parentElement; }
      if(!root||!wrap.contains(root)) root=wrap; var rr=root.getBoundingClientRect(), sc=Math.min(2,window.devicePixelRatio||1,Math.sqrt(12e6/Math.max(1,rr.width*rr.height)),8000/Math.max(1,rr.height),8000/Math.max(1,rr.width));
      window.html2canvas(root,{scale:sc,useCORS:true,logging:false,imageTimeout:3000,backgroundColor:'#FAF3E0',windowWidth:document.documentElement.clientWidth,windowHeight:innerHeight,scrollX:0,scrollY:-scrollY,
        ignoreElements:function(n){ return n.classList&&(n.classList.contains('rg-tray')||n.classList.contains('rg-flash')||n.classList.contains('rg-modal')||n.classList.contains('rg-snapov')); }})
      .then(function(full){ var cv=document.createElement('canvas'); cv.width=Math.round(r.w*sc); cv.height=Math.round(r.h*sc); cv.getContext('2d').drawImage(full,(r.x-rr.left)*sc,(r.y-rr.top)*sc,r.w*sc,r.h*sc,0,0,cv.width,cv.height);
        var s=Math.min(1,700/cv.width), out=document.createElement('canvas'); out.width=Math.round(cv.width*s); out.height=Math.round(cv.height*s); out.getContext('2d').drawImage(cv,0,0,out.width,out.height); caption(out.toDataURL('image/jpeg',0.72)); })
      .catch(function(){ ticker('That snap didn’t work. Scroll a little and try again.'); }); }); }
  function caption(src){ var m=modal(), MS=(DATA.camera||{}).missions||[];
    m.innerHTML='<div class="rg-sheet"><button class="x" type="button" aria-label="Close">✕</button><h3>📷 New photo for the paper</h3><div class="rg-pola big"><img alt="" src="'+src+'"><input class="cap" maxlength="80" placeholder="Write a caption: what does this show?"></div>'+(MS.length?'<div class="rg-ms"><b>Is it for a photo assignment? (optional)</b>'+MS.map(function(ms,i){ var d=photos().some(function(p){ return p.mission===i; }); return '<button type="button" class="opt'+(d?' done':'')+'" data-m="'+i+'">'+(d?'✓ ':'')+esc(ms)+'</button>'; }).join('')+'</div>':'')+'<div class="row"><button type="button" class="rg-btn sv">Add to my clippings</button><button type="button" class="rg-btn alt ts">Toss it</button></div></div>';
    var pick=null; $$('.opt',m).forEach(function(b){ b.addEventListener('click',function(){ $$('.opt',m).forEach(function(x){ if(x!==b) x.classList.remove('on'); }); b.classList.toggle('on'); pick=b.classList.contains('on')?+b.dataset.m:null; SFX.clack(); }); });
    function close(){ m.classList.remove('open'); } $('.x',m).addEventListener('click',close); $('.ts',m).addEventListener('click',close);
    $('.sv',m).addEventListener('click',function(){ var a=photos().slice(); a.push({src:src,cap:$('.cap',m).value.trim(),tab:currentScene(),mission:pick,t:Date.now()}); savePhotos(a); close(); SFX.chime(); ticker(pick!==null?'Photo assignment done: '+MS[pick]:'Saved to your clippings. It prints in your Reporter’s Notebook.'); });
    setTimeout(function(){ var c=$('.cap',m); c&&c.focus(); },50); }
  function openRoll(){ var m=modal(), a=photos(), H=highlights();
    function grp(c){ var x=H.filter(function(h){ return h.c===c; }); return x.length?'<h4><i style="background:'+HL_COLORS[c].c+'"></i>'+HL_COLORS[c].n+'</h4>'+x.map(function(h){ return '<div class="rg-note-l">“'+esc(h.t)+'” <small>'+esc(h.where)+'</small></div>'; }).join(''):''; }
    m.innerHTML='<div class="rg-sheet"><button class="x" type="button" aria-label="Close">✕</button><h3>🗂 My clippings</h3><h4>📷 Photos ('+a.length+')</h4><div class="rg-roll">'+(a.length?a.map(function(p,i){ return '<div class="rg-pola"><img alt="" src="'+p.src+'"><div class="c">'+esc(p.cap||'(no caption)')+'</div><button type="button" class="del" data-i="'+i+'" title="Delete">🗑</button></div>'; }).join(''):'<p class="rg-empty">No photos yet. Tap 📷 Camera, then drag a box around anything on the page.</p>')+'</div><h4>🖍 Highlights</h4>'+(H.length?grp('y')+grp('g')+grp('p'):'<p class="rg-empty">No highlights yet.</p>')+'<div class="row"><button type="button" class="rg-btn nb">📓 Download my Reporter’s Notebook</button></div></div>';
    $('.x',m).addEventListener('click',function(){ m.classList.remove('open'); });
    $$('.del',m).forEach(function(b){ b.addEventListener('click',function(){ var x=photos().slice(); x.splice(+b.dataset.i,1); savePhotos(x); openRoll(); }); });
    $('.nb',m).addEventListener('click',notebook); }
  var PROPS=DATA.props||[];
  function openProps(){ var m=modal();
    m.innerHTML='<div class="rg-sheet rg-props"><button class="x" type="button" aria-label="Close">✕</button><h3>📐 The newsroom desk</h3><p class="sub">Tap a tool on the editor’s desk to learn how real newspapers were made.</p><div class="rg-prop-row">'+PROPS.map(function(p,i){ return '<button type="button" class="rg-prop" data-i="'+i+'"><span>'+esc(p.icon)+'</span>'+esc(p.name)+'</button>'; }).join('')+'</div><div class="rg-prop-fact"></div></div>';
    $('.x',m).addEventListener('click',function(){ m.classList.remove('open'); });
    $$('.rg-prop',m).forEach(function(b){ b.addEventListener('click',function(){ var p=PROPS[+b.dataset.i]; $$('.rg-prop',m).forEach(function(x){ x.classList.toggle('on',x===b); }); $('.rg-prop-fact',m).innerHTML='<b>'+esc(p.name)+'.</b> '+esc(p.fact); SFX.paper(); S.m.props=S.m.props||{}; S.m.props[b.dataset.i]=1; save(); }); }); }

  /* ================================================================ the Reporter's Notebook: a page to keep */
  function notebookHTML(){ var e=function(s){ return esc(s==null?'':s); }, NA='<p class="na">(not done yet)</p>', box=function(v){ v=(v||'').trim(); return v?'<p class="a">'+e(v).replace(/\n/g,'<br>')+'</p>':NA; }, val=function(id){ var t=document.getElementById(id); return t?t.value:''; };
    var N=DATA.notes||{}, h='<h1>📓 My Reporter’s Notebook</h1><div class="sub">The Republic Gazette · Issue '+e(ISSUE)+' · '+e(DATA.lesson)+' · '+e(DATA.title)+(nm()?' · Junior Editor '+e(nm()):'')+'</div>';
    var bq=$('#introSection .intro-card-body'); if(bq) h+='<div class="bq"><b>Today’s question</b>'+e(bq.textContent.trim())+'</div>';
    h+='<h2>What I learned</h2><ul>'+(N.learned||[]).map(function(x){ return '<li>'+e(x)+'</li>'; }).join('')+(N.vocab||[]).map(function(v){ return '<li><b>'+e(v[0])+'</b>: '+e(v[1])+'</li>'; }).join('')+'</ul>';
    h+='<h2>1 · The Dispatch</h2>'+(R.scene1&&R.scene1.journal?R.scene1.journal(e,NA):NA);
    h+='<h2>2 · The Desk</h2>'+(R.reading&&R.reading.journal?R.reading.journal(e,NA):'')+(R.evidence&&R.evidence.journal?R.evidence.journal(e,NA):'');
    $$('.reflection-textarea').forEach(function(t,i){ h+='<h3>'+e(t.dataset.label||('Question '+(i+1)))+'</h3>'+box(t.value); });
    if(R.vocab) h+='<h3>The Word Desk</h3>'+R.vocab.journal(e,NA);
    var fc=$$('#panel-factcheck .factcheck-q').filter(function(q){ return q.querySelector('.factcheck-option.correct'); }).length; h+='<h2>3 · Fact-Check</h2>'+(S.quizDone?'<p class="a">'+fc+' of '+$$('#panel-factcheck .factcheck-q').length+' claims verified.</p>':NA);
    var plan=R.planner&&R.planner.lines?R.planner.lines():[]; h+='<h2>4 · Go to Press</h2><h3>My page plan</h3>'+(plan.some(function(x){ return x[1]; })?'<p class="a">'+plan.map(function(x){ return e(x[0])+': '+e(x[1]); }).join('<br>')+'</p>':NA);
    h+='<h3>Headline</h3>'+box(val('brief-headline'))+'<h3>Front Page Brief</h3>'+box(val('brief-body'))+'<h3>Archive Line</h3>'+box(val('archive-line'));
    var H=highlights(); if(H.length) h+='<h2>🖍 My highlights</h2><ul>'+H.map(function(x){ return '<li><b>'+e(HL_COLORS[x.c].n)+':</b> “'+e(x.t)+'”</li>'; }).join('')+'</ul>';
    var ph=photos(); if(ph.length) h+='<h2>📷 My photos</h2><div class="ph">'+ph.map(function(p){ return '<figure><img src="'+p.src+'"><figcaption>'+e(p.cap||'')+'</figcaption></figure>'; }).join('')+'</div>';
    return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+e(DATA.lesson)+' · My Reporter’s Notebook</title><style>body{font-family:Georgia,serif;max-width:700px;margin:36px auto;padding:0 20px;color:#1A1F2E;line-height:1.6}h1{font-size:24px;margin:0;border-bottom:3px double #1A2138;padding-bottom:8px}.sub{color:#4A5568;font:14px system-ui,sans-serif;margin:6px 0 18px}.bq{background:#FAF3E0;border-left:4px solid #B8923E;padding:10px 14px}.bq b{display:block;font:700 11px system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8B6F2E}h2{font-size:17px;color:#1A2138;border-bottom:1px solid #D4C9A8;padding-bottom:4px;margin:26px 0 8px}h3{font:700 14px system-ui,sans-serif;color:#4A5568;margin:16px 0 4px}.a{background:#FAF8F2;border-left:3px solid #8B2D26;padding:6px 12px;margin:4px 0}.na{color:#9AA3B8;font-style:italic}.ph{display:flex;flex-wrap:wrap;gap:10px}.ph figure{margin:0;width:200px}.ph img{width:100%;border:1px solid #ccc}.ph figcaption{font-size:12px}.ft{margin-top:30px;color:#9AA3B8;font:12px system-ui,sans-serif}</style></head><body>'+h+'<div class="ft">Optima Academy Online · Social Studies · Grade 5 · The Republic Gazette</div></body></html>'; }
  function notebook(){ if(typeof window.refreshGathered==='function') try{ window.refreshGathered(); }catch(e){} var htmlS=notebookHTML(), win=null; try{ win=window.open('','_blank'); }catch(e){}
    if(win){ win.document.write(htmlS); win.document.close(); setTimeout(function(){ try{ win.print(); }catch(e){} },400); return; }
    try{ var a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([htmlS],{type:'text/html'})); a.download=(DATA.lesson||'lesson')+'-reporters-notebook.html'; document.body.appendChild(a); a.click(); a.remove(); }catch(e){} }
  function buildNotebook(){ window.__rgNotebookHTML=notebookHTML;
    if(!window.__rgNbWrapped&&typeof window.downloadJournal==='function'){ var orig=window.downloadJournal; window.downloadJournal=function(){ if(html.classList.contains('rg-on')) notebook(); else orig(); }; window.__rgNbWrapped=true; }
    setText($('.gathered-btn-pdf'),'📓 Download my Reporter’s Notebook'); }

  /* ================================================================ review bar (?review), teardown, build */
  var OBS=[];
  function buildReviewBar(){ if(!/[?&#]review\b/.test(location.search+location.hash)||$('.rg-mockbar')) return;
    var bar=el('div','rg-mockbar','<b>✦ REVIEW · '+esc(DATA.lesson)+'</b><label><input type="checkbox" id="rgOn" checked> layer on</label><label><input type="checkbox" id="rgEmpty"> show empty media slots</label><button type="button" id="rgReset">reset progress</button>'); document.body.appendChild(bar);
    $('#rgOn',bar).addEventListener('change',function(e){ e.target.checked?build():teardown(); }); $('#rgEmpty',bar).addEventListener('change',function(e){ html.classList.toggle('rg-showempty',e.target.checked); });
    $('#rgReset',bar).addEventListener('click',function(){ try{ Object.keys(localStorage).forEach(function(k){ if(k.indexOf(KEY)===0) localStorage.removeItem(k); }); }catch(e){} S=fresh(); thread=S.thread; pendingKey=null; MEMPH=null; teardown(); build(); }); }
  function teardown(){ html.classList.remove('rg-on','rg-quiet','rg-hlmode','rg-cueing'); delete html.dataset.rgTab;
    OBS.forEach(function(o){ o.disconnect(); }); OBS=[];
    $$('mark.rg-hl').forEach(function(m){ var p=m.parentNode; while(m.firstChild) p.insertBefore(m.firstChild,m); p.removeChild(m); p.normalize(); });
    MOVES.reverse().forEach(function(x){ x[1].parentNode.insertBefore(x[0],x[1]); x[1].remove(); }); MOVES=[];
    TEXTS.reverse().forEach(function(x){ x[0].innerHTML=x[1]; }); TEXTS=[];
    $$('.rg').forEach(function(n){ n.remove(); });
    $$('[class*="rg-"]').forEach(function(n){ [].slice.call(n.classList).forEach(function(c){ if(c.indexOf('rg-')===0) n.classList.remove(c); }); });
    pressEl=wireEl=wireBtn=tickEl=stepperEl=trayEl=hlbar=huntEl=null; R={}; unread=0; }
  function build(){ try{ P=loadProfile(); html.classList.add('rg-on'); if(QUIET) html.classList.add('rg-quiet');
      buildTop(); buildWire(); buildOpening(); buildPress(); buildStory(); if(openingWaiting) showNameCard(false); buildScenes(); buildLens(); buildModules();
      buildFactSteps(); buildQuizMiss(); buildHelp(); buildSteps(); buildRedPencil(); buildMorgue(); buildVoice(); buildMedia(); buildTray(); buildNotebook();
      var bl=document.getElementById('brief-byline-name'); if(bl&&!bl.value.trim()&&nm()) bl.value=nm();
      refreshPress(); render(); }catch(e){ console.warn('rg layer:',e); } }
  window.__rgSparkleAPI={teardown:teardown,build:build,data:DATA,sayKey:sayKey};
  function go(){ build(); buildReviewBar(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',go); else go();
})();
