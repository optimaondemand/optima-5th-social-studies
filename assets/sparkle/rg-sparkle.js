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
  function put(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); return true; }catch(e){ return false; } }
  function fresh(){ return {thread:[],seen:{},ack:{},hints:{},m:{}}; }
  var S=get(KEY,null)||fresh(); ['thread','seen','ack','hints','m'].forEach(function(k){ if(!S[k]) S[k]=k==='thread'?[]:{}; });
  var C=get(CKEY,{published:[],lines:{},photos:{}}); C.published=C.published||[]; C.lines=C.lines||{};
  /* one save for everything (drafts, evidence, answers, published work). Honest status; never overwrite another tab's archive. */
  var SAVE_ST={ok:true,at:0}, FROZEN=false, RESTORING=false;
  function mergeCourse(stored,mine){ var out={published:[],lines:{},photos:(mine&&mine.photos)||(stored&&stored.photos)||{}}; [stored,mine].forEach(function(c){ if(!c) return; (c.published||[]).forEach(function(n){ if(out.published.indexOf(n)<0) out.published.push(n); }); Object.keys(c.lines||{}).forEach(function(k){ var a=out.lines[k], b=c.lines[k]; if(!a||((b&&b.at)||0)>=((a&&a.at)||0)) out.lines[k]=b; }); }); return out; }
  function save(){ if(FROZEN){ if(typeof paintSave==='function') paintSave(); return false; } var a=put(KEY,S), cur=get(CKEY,null); if(cur) C=mergeCourse(cur,C); var b=put(CKEY,C); SAVE_ST.ok=a&&b; SAVE_ST.at=Date.now(); if(typeof paintSave==='function') paintSave(); return SAVE_ST.ok; }
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
  /* remembers which file type worked, so a picture is probed once per computer, not on every load */
  var EXTOK=get('oao.rg.imgext',{})||{};
  function srcImg(name,cls,alt){ var img=new Image(); img.className=cls||''; img.alt=alt||''; img.draggable=false; img.decoding='async'; if(!name) return img; var known=EXTOK[name], order=known?[known].concat(EXT.filter(function(x){ return x!==known; })):EXT;
    (function tryI(i){ if(i>=order.length) return; var t=new Image(); t.onload=function(){ img.src=t.src; if(EXTOK[name]!==order[i]){ EXTOK[name]=order[i]; put('oao.rg.imgext',EXTOK); } img.dispatchEvent(new Event('rgload')); }; t.onerror=function(){ tryI(i+1); }; t.src=SRC+name+order[i]; })(0); return img; }
  function local(n){ return LOCAL+n; }

  /* ---- sound: tiny WebAudio cues, generated in code, quiet, never on page load ---- */
  var AC=null; function ac(){ if(!AC){ try{ AC=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return AC; }
  function tone(f,d,type,v,slide){ if(P&&P.quiet) return; var a=ac(); if(!a) return; var o=a.createOscillator(), g=a.createGain(); o.type=type||'sine'; o.frequency.value=f; if(slide) o.frequency.exponentialRampToValueAtTime(slide,a.currentTime+d); g.gain.setValueAtTime(0.0001,a.currentTime); g.gain.exponentialRampToValueAtTime(v||0.05,a.currentTime+0.01); g.gain.exponentialRampToValueAtTime(0.0001,a.currentTime+d); o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime+d+0.02); }
  function noise(d,lo,hi,v){ if(P&&P.quiet) return; var a=ac(); if(!a) return; var n=Math.floor(a.sampleRate*d), b=a.createBuffer(1,n,a.sampleRate), x=b.getChannelData(0); for(var i=0;i<n;i++) x[i]=(Math.random()*2-1)*(1-i/n); var s=a.createBufferSource(); s.buffer=b; var f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.value=(lo+hi)/2; f.Q.value=1.2; var g=a.createGain(); g.gain.value=v||0.08; s.connect(f); f.connect(g); g.connect(a.destination); s.start(); }
  var SFX={ clack:function(){ noise(0.03,1800,4000,0.05); }, ding:function(){ if(QUIET) return; tone(1568,0.5,'sine',0.035); }, chime:function(){ tone(880,0.18,'sine',0.04); setTimeout(function(){ tone(1320,0.25,'sine',0.035); },90); },
    thud:function(){ tone(120,0.18,'sine',0.08,60); noise(0.06,200,600,0.06); }, stamp:function(){ if(QUIET){ tone(220,0.12,'sine',0.04); return; } tone(90,0.2,'square',0.05,50); noise(0.08,300,900,0.1); },
    scratch:function(){ noise(0.22,2500,6000,0.035); }, soft:function(){ tone(523,0.25,'sine',0.025); }, bounce:function(){ tone(300,0.12,'triangle',0.04,200); },
    paper:function(){ noise(0.12,900,2400,0.05); }, ring:function(){ if(QUIET) return; for(var k=0;k<10;k++) (function(k){ setTimeout(function(){ tone(k%2?1180:1420,0.05,'square',0.012); },k*55); })(k); }, pickup:function(){ noise(0.05,600,1800,0.07); setTimeout(function(){ tone(420,0.06,'sine',0.02); },70); }, snap:function(){ noise(0.09,1800,4200,0.09); setTimeout(function(){ noise(0.05,900,2400,0.05); },40); } };

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
  function loadProfile(){ var q=(get(PKEY,{})||{}).quiet, keys=[PKEY,'oao.ff.profile','oao.profile']; for(var i=0;i<keys.length;i++){ var p=get(keys[i],null); if(p&&okName(p.name)) return {name:p.name,quiet:!!q}; } return q?{name:'',quiet:true}:null; }
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
      P={name:name,quiet:!!(P&&P.quiet)}; put(PKEY,{name:name,quiet:P.quiet,created:new Date().toISOString()});
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
  function noteHTML(label){ return '<div class="hd"><div class="k">'+AVERY+'<span>'+label+'</span></div><button type="button" class="fold">Fold up ▴</button></div><div class="rg-tape"></div><div class="rg-ch"></div><button type="button" class="mini">'+AVERY+'<span class="pv"></span><span class="go">Open ▸</span></button>'; }
  function onNote(e){ var n=e.currentTarget; if(e.target.closest('.mini')){ openWire(true); return; } if(e.target.closest('.fold')){ ack(n.dataset.scene); return; } onChoice(e); }
  function onChoice(e){ var b=e.target.closest('.rg-choice'); if(!b) return; var cs=CHOICES[b.dataset.key]; if(!cs||b.dataset.key!==pendingKey) return; var key=b.dataset.key, i=+b.dataset.i, c=cs[i], a=asked(key); if(a.indexOf(i)===-1) a.push(i); SFX.clack(); student(c.t); if(c.reply) avery(c.reply,c.next||null,{scene:cs.scene,quiet:true}); if(c.go&&typeof goSrc==='function') setTimeout(function(){ openWire(false); goSrc(c.go); },RM?300:1800);
    if(!c.next&&!c.end&&a.length<cs.length){ pendingKey=key; S.pendingKey=key; } save(); render(); }
  /* the newest note types out letter by letter (instant under reduced motion) */
  function typeOut(box){ var t=box&&box.querySelector('.rg-msg.t:last-of-type .tx'); if(!t||RM) return; var last=thread.filter(function(m){return m.f==='t';}).slice(-1)[0]; if(!last||!last.fresh) return; last.fresh=0; save();
    var full=t.textContent, i=0; t.textContent=''; t.classList.add('typing'); clearInterval(typing);
    typing=setInterval(function(){ i+=2; t.textContent=full.slice(0,i); if(i%6===0) SFX.clack(); var pp=box.closest&&box.closest('.rg-wire-paper'); if(pp) pp.scrollTop=pp.scrollHeight; if(i>=full.length){ clearInterval(typing); t.classList.remove('typing'); } },22); }
  /* the paper is the scroller: always land on the newest note (again after the rise animation and while typing) */
  function pinWire(){ if(!wireEl) return; var pp=$('.rg-wire-paper',wireEl); if(!pp) return; pp.scrollTop=pp.scrollHeight; requestAnimationFrame(function(){ pp.scrollTop=pp.scrollHeight; }); [350,800].forEach(function(ms){ setTimeout(function(){ pp.scrollTop=pp.scrollHeight; },ms); }); }
  function render(){
    if(wireEl){ var w=$('.rg-wire-roll',wireEl); w.innerHTML='<div class="rg-msg sys">— from the editor’s desk —</div>'+thread.map(msgHTML).join(''); var comp=$('.rg-wire-reply',wireEl); comp.innerHTML=pendingKey&&CHOICES[pendingKey]?'<div class="lab">Tap a reply</div>'+choicesHTML():'<div class="none">No reply needed. Keep working. I’ll write again when there’s news.</div>'; if(wireEl.classList.contains('open')) typeOut(w); pinWire(); }
    if(wireBtn){ wireBtn.classList.toggle('unread',unread>0); $('.n',wireBtn).textContent=unread; }
    var open=wireEl&&wireEl.classList.contains('open');
    ['open','dispatch','desk','factcheck','press'].forEach(function(sc){ var n=$('.rg-note[data-scene="'+sc+'"]'); if(!n) return; var ms=thread.filter(function(m){return m.scene===sc;});
      if(open) S.ack[sc]=ms.length;
      var isNew=ms.length>(S.ack[sc]||0), lt=ms.filter(function(m){return m.f==='t';}).slice(-1)[0];
      n.classList.toggle('rg-hide',!ms.length); n.classList.toggle('new',isNew);
      $('.rg-tape',n).innerHTML=(sc==='open'?ms:ms.slice(-4)).map(msgHTML).join(''); $('.rg-ch',n).innerHTML=(pendingKey&&CHOICES[pendingKey]&&CHOICES[pendingKey].scene===sc)?choicesHTML():'';
      if(isNew&&!open) typeOut($('.rg-tape',n));
      var tc=thread.filter(function(m){return m.f==='t';}).length; var lastAsk=pendingKey&&CHOICES[pendingKey]&&CHOICES[pendingKey].scene===sc; $('.mini .pv',n).innerHTML=isNew&&lt?'<b>New note:</b> '+esc(lt.t):lastAsk?'<b>Ms. Avery is waiting for your reply</b>':'<b>Notes from Ms. Avery</b> · '+tc+' so far'; n.classList.toggle('ask',!!lastAsk); });
    if(open) save(); }
  function openWire(o){ if(!wireEl) return; wireEl.classList.toggle('open',o); wireBtn&&wireBtn.setAttribute('aria-expanded',!!o); if(o){ unread=0; hideTicker(); SFX.paper(); } render(); }
  function ticker(text){ if(!tickEl||(wireEl&&wireEl.classList.contains('open'))) return; $('.tx',tickEl).textContent=(nm()&&text.indexOf(nm())===-1?nm()+', '+text.charAt(0).toLowerCase()+text.slice(1):text); tickEl.classList.remove('show'); void tickEl.offsetWidth; tickEl.classList.add('show'); SFX.ding(); clearTimeout(tickTimer); tickTimer=setTimeout(function(){ if(!(pendingKey&&CHOICES[pendingKey])) hideTicker(); },8000); }
  function hideTicker(){ if(tickEl) tickEl.classList.remove('show'); }
  function currentScene(){ var a=$('.tab-panel.active'); return a?a.id.replace('panel-',''):'dispatch'; }
  Object.keys(T.choices||{}).forEach(function(k){ var c=T.choices[k], list=(c.list||[]).slice(); list.scene=c.scene||'dispatch'; CHOICES[k]=list; });
  /* DATA.texts.beats = { s1Done|s2Done|quizDone|published|<module beat>: [{t, choice, quiet, scene}] } */
  var BEAT_SCENE={s1Done:'dispatch',s2Done:'desk',quizDone:'factcheck',published:'press'};
  function beat(k){ if(S.seen[k]) return; S.seen[k]=true; save(); var b=(T.beats||{})[k]; if(!b) return; [].concat(b).forEach(function(m){ if(typeof m==='string') m={t:m}; avery(m.t,m.choice||null,{scene:m.scene||BEAT_SCENE[k]||currentScene(),quiet:!!m.quiet}); }); }
  function buildWire(){
    wireEl=el('div','rg rg-wire'); wireEl.setAttribute('role','dialog'); wireEl.setAttribute('aria-label','Ms. Avery, your editor');
    var TW='<svg class="rg-tw-svg" viewBox="0 0 400 168" aria-hidden="true"><defs><linearGradient id="rgTwB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A4A3E"/><stop offset="1" stop-color="#1C2620"/></linearGradient><linearGradient id="rgTwP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A4A4A"/><stop offset=".45" stop-color="#151515"/><stop offset="1" stop-color="#2C2C2C"/></linearGradient><radialGradient id="rgTwK" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#FFFBEA"/><stop offset="1" stop-color="#C9BE9C"/></radialGradient></defs>'+
      '<rect x="30" y="2" width="340" height="22" rx="11" fill="url(#rgTwP)"/><rect x="40" y="6" width="320" height="3" rx="1.5" fill="#fff" opacity=".18"/>'+
      '<circle cx="18" cy="13" r="13" fill="#222"/><circle cx="18" cy="13" r="8" fill="#C9A66B"/><circle cx="382" cy="13" r="13" fill="#222"/><circle cx="382" cy="13" r="8" fill="#C9A66B"/>'+
      '<path d="M4,10 h-0 q-2,-12 14,-14" fill="none" stroke="#C9A66B" stroke-width="3" stroke-linecap="round"/>'+
      '<line x1="44" y1="30" x2="356" y2="30" stroke="#C9A66B" stroke-width="2.5"/>'+
      '<path d="M44,36 Q200,22 356,36 L392,150 Q392,162 380,162 L20,162 Q8,162 8,150 Z" fill="url(#rgTwB)" stroke="#C9A66B" stroke-width="2"/>'+
      '<path d="M140,38 Q200,24 260,38 L246,62 Q200,52 154,62 Z" fill="#111813"/>'+[0,1,2,3,4,5,6,7,8,9,10].map(function(k){ var a=-60+k*12, r=Math.PI*a/180; return '<line x1="'+(200+Math.sin(r)*10)+'" y1="'+(62-Math.cos(r)*6)+'" x2="'+(200+Math.sin(r)*40)+'" y2="'+(62-Math.cos(r)*26)+'" stroke="#8C8C7A" stroke-width="1.5"/>'; }).join('')+
      '<rect x="176" y="64" width="48" height="13" rx="2" fill="#C9A66B"/><text x="200" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="9" font-weight="700" fill="#1C2620" letter-spacing="1.5">AVERY</text>'+
      [[86,11,40],[106,10,52],[126,9,64]].map(function(row){ var out='', y=row[0], n=row[1], x0=row[2]; for(var k=0;k<n;k++){ var x=x0+k*((400-2*x0)/(n-1)); out+='<circle cx="'+x+'" cy="'+(y+2)+'" r="9" fill="#0B0F0C"/><circle cx="'+x+'" cy="'+y+'" r="8.5" fill="url(#rgTwK)" stroke="#5C5A4A" stroke-width="1"/>'; } return out; }).join('')+
      '<rect x="120" y="140" width="160" height="10" rx="5" fill="url(#rgTwK)" stroke="#5C5A4A"/></svg>';
    wireEl.innerHTML='<div class="rg-wire-paper"><div class="rg-wire-head">'+AVERY+'<div><div class="nm">Ms. Avery</div><div class="st">Editor-in-Chief · The Republic Gazette</div></div><button type="button" class="x" aria-label="Close">✕</button></div><div class="rg-wire-roll"></div></div><div class="rg-tw">'+TW+'</div><div class="rg-wire-reply"></div>';

    wireEl.addEventListener('click',onChoice); $('.x',wireEl).addEventListener('click',function(){ openWire(false); });
    tickEl=el('div','rg rg-ticker','<span class="ic">'+AVERY+'</span><span class="bd"><b>Ms. Avery <small>now</small></b><span class="tx"></span></span>'); tickEl.setAttribute('role','status');
    tickEl.addEventListener('click',function(){ openWire(true); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&wireEl&&wireEl.classList.contains('open')) openWire(false); });
    if(!window.__rgSay){ window.__rgSay=true; document.addEventListener('click',onSay,true); } }
  function buildOpening(){ var intro=document.getElementById('introSection'); if(!intro) return;
    if(!thread.length){ if(!nm()&&storageWorks()) openingWaiting=true; else startOpening(); } }
  function startOpening(){ if(thread.length) return;
    var op=[].concat(T.opening||[]);
    avery('{name,}'+(T.hello||'Good morning, Junior Editor. It’s Ms. Avery.')+(DATA.connector?' '+DATA.connector:''),null,{scene:'open',quiet:true});
    op.forEach(function(m){ if(typeof m==='string') m={t:m}; avery(m.t,m.choice||null,{scene:'open',quiet:true}); });
    unread=op.length+1; render(); setTimeout(function(){ openWire(true); },900); }
  function buildStory(){ var anchor=$('.rg-note.opening')||document.getElementById('introSection'); if(!anchor) return;
    var t=DATA.storySoFar||'You’re a Junior Editor at The Republic Gazette, a newspaper that checks before it prints. Our rival, The Hasty Herald, prints fast and checks little. Every issue you publish gets filed in the Morgue.';
    var le=$('#lastEditionBlock .story-block-summary'), last=le?le.textContent.replace(/Tap to recap\.?|▼/g,'').trim():'';
    var bx=el('div','rg rg-story','<span class="k">🗞️ The story so far</span><span class="t">'+esc(t)+(last?' <span class="last">'+esc(last)+'</span>':'')+'</span>');
    var pd=document.getElementById('panel-dispatch'); if(pd){ var sc=$('.rg-scene',pd); if(sc) after(sc,bx); else pd.insertBefore(bx,pd.firstChild); } else { var pr=pressEl; if(pr) after(pr,bx); else before(anchor,bx); } }

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
    var unit=(($$('.info-strip .info-cell')[1]||{}).querySelector?($$('.info-strip .info-cell')[1].querySelector('.info-value')||{}).textContent:'')||'';
    pressEl=el('div','rg rg-press');
    pressEl.innerHTML='<div class="rg-press-top"><span class="kick">The Republic Gazette · '+esc(unit)+' · <b class="pg"></b></span><span class="rg-press-r"><button type="button" class="rg-who rg-hide" title="Fix the spelling of my byline"><b></b> ✎</button><button type="button" class="rg-wire-btn" aria-expanded="false" aria-label="Ms. Avery, your editor" title="Ms. Avery, your editor">'+AVERY+'<span class="lb">Ms. Avery</span><span class="n">0</span></button></span></div><div class="rg-press-row">'+proofSVG()+'<div class="rg-tabslot"></div></div>';
    var hero=$('.hero-newspaper'); if(hero) after(hero,pressEl); else before(bar,pressEl);
    pressEl.addEventListener('click',function(e){ var t=e.target.closest('.rg-pt'); if(!t) return; var tb=$('.rg-tb.'+t.dataset.t); if(tb) tb.click(); });
    move(bar,function(n){ $('.rg-tabslot',pressEl).appendChild(n); });
    STAGES.forEach(function(s,i){ var b=document.getElementById('btn-'+s.tab); if(!b) return; var lab=b.textContent.replace(/[✓]/g,'').trim(); setText(b,'<span class="rg-tn">'+(i+1)+'</span><span class="rg-tabt"><b>'+esc(lab)+'</b><small>'+esc(s.t)+'</small></span><span class="tab-check"></span>'); });
    $('.rg-who',pressEl).addEventListener('click',function(){ showNameCard(true); }); paintWho();
    wireBtn=$('.rg-wire-btn',pressEl); wireBtn.addEventListener('click',function(){ openWire(!wireEl.classList.contains('open')); });
    pressEl.appendChild(wireEl); pressEl.appendChild(tickEl);
    if(window.switchTab&&!window.__rgWrapped){ var orig=window.switchTab; window.switchTab=function(tab){ var prev=currentScene(); var r=orig.apply(this,arguments); if(html.classList.contains('rg-on')){ if(prev!==tab){ ack(prev); if(prev==='dispatch') ack('open'); } html.dataset.rgTab=tab; markNow(tab); render(); refreshPress(); } return r; }; window.__rgWrapped=true; }
    html.dataset.rgTab=currentScene(); markNow(currentScene()); }
  function markNow(tab){ if(!pressEl) return; var i=STAGES.map(function(s){return s.tab;}).indexOf(tab); $('.pg',pressEl).textContent='Tab '+(i+1)+' of '+STAGES.length; }
  var R={};
  function deskDone(){ var ok=true; if(R.reading) ok=ok&&R.reading.done(); if(R.pair) ok=ok&&R.pair.done(); if(R.almanac&&R.almanac.el.closest('#panel-desk')) ok=ok&&R.almanac.done(); if(R.evidence) ok=ok&&R.evidence.done(); return ok&&['journal-q1','journal-q2','journal-q3'].every(qDone); }
  function fcDone(){ var qs=$$('#panel-factcheck .factcheck-q'); return qs.length>0&&qs.every(function(q){ return !!q.querySelector('.factcheck-option.correct, .factcheck-option.incorrect'); })&&(typeof ccDone!=='function'||ccDone()); }
  /* the one stage rule: the tabs' ✓, the proof, the progress bar and the stepper all read this */
  function stageState(){ return [R.scene1?R.scene1.done():true, deskDone(), fcDone(), !!S.published]; }
  function refreshPress(){ var st=stageState();
    if(st[2]&&!S.quizDone){ S.quizDone=true; save(); }
    STAGES.forEach(function(s,i){ var b=document.getElementById('btn-'+s.tab); if(b) b.classList.toggle('rg-done',st[i]); });
    if(pressEl){ $$('.pr',pressEl).forEach(function(g){ g.classList.toggle('on',st[+g.dataset.pr]); }); pressEl.classList.toggle('published',!!S.published); }
    updateStepper(); refreshVoice(); if(typeof paintReady==='function'&&readyEl) paintReady(); if(window.updateProgress) try{ window.updateProgress(); }catch(e){}
    if(st[0]) beat('s1Done'); if(st[1]) beat('s2Done'); if(S.quizDone) beat('quizDone'); if(S.published) beat('published'); }

  /* ================================================================ stage heads + a wire strip at the end of each tab */
  function buildScenes(){ STAGES.forEach(function(s,i){ var panel=document.getElementById('panel-'+s.tab); if(!panel) return;
      var sc=el('div','rg rg-scene','<div class="rg-scene-n">'+(i+1)+'</div><div><div class="rg-scene-k">'+esc(['Masthead','Headline','Columns','Photo'][i]||'')+'</div><div class="rg-scene-t">'+esc(s.t)+'</div><p class="rg-scene-why">'+esc(s.why)+'</p></div>');
      var vr=panel.firstElementChild&&panel.firstElementChild.classList.contains('video-ratio')?panel.firstElementChild:null; if(vr) after(vr,sc); else panel.insertBefore(sc,panel.firstChild);
    }); }

  /* ================================================================ the top: Read aloud + Lesson details pills, one Editor's Lens line */
  function buildTop(){ var hd=$('.oao-header'), shell=$('.lesson-shell'); if(!hd) return;
    if(shell) move(hd,function(n){ shell.insertBefore(n,shell.firstChild); });
    var vals=$$('.info-strip .info-cell').map(function(cell){ var v=$('.info-value',cell), l=$('.info-label',cell); return [l?l.textContent.trim():'',v?v.textContent.trim():'']; });
    var t=$('.oao-header-title',hd); if(t&&vals.length>=3) t.appendChild(el('div','rg rg-hd-meta','<b>'+esc(vals[1][0])+':</b> '+esc(vals[1][1])+' · '+esc(vals[0][1])+' · <b>Virtue:</b> '+esc(vals[2][1])));
    var tools=el('div','rg rg-hd-tools'), panels=[];
    function pill(label,panel){ var b=el('button','rg-pill',label); b.type='button'; b.setAttribute('aria-expanded','false'); b.addEventListener('click',function(){ var o=!panel.classList.contains('open'); panels.forEach(function(p){ p[1].classList.remove('open'); p[0].setAttribute('aria-expanded','false'); }); panel.classList.toggle('open',o); b.setAttribute('aria-expanded',o); }); panels.push([b,panel]); tools.appendChild(b); }
    var anchor=hd, ra=document.getElementById('optima-read-aloud');
    if(ra){ var rp=el('div','rg rg-hd-panel'); after(anchor,rp); anchor=rp; move(ra,function(n){ rp.appendChild(n); }); pill('🔊 Read aloud',rp); }
    var strip=$('.info-strip'); if(strip){ var dp=el('div','rg rg-hd-panel'); after(anchor,dp); move(strip,function(n){ dp.appendChild(n); }); pill('ⓘ Lesson details',dp); DETAILS=dp;
      var learn=$$('#introSection .intro-2col .intro-card')[1]; if(learn) move(learn,function(n){ dp.appendChild(n); }); var need=$('#introSection .need-strip'); if(need) move(need,function(n){ dp.appendChild(n); }); }
    hd.appendChild(tools); }
  var DETAILS=null;
  function buildLens(){ var two=$('#introSection .intro-2col'); if(!two||!DATA.lens) return;
    var v=$('.virtue-lens-label'), virtue=v?(v.textContent.split('·').pop()||'').replace(/★/g,'').trim():'';
    var ln=el('div','rg rg-lens','<b>Editor’s Lens</b><span>'+(virtue?'<em>'+esc(virtue)+'.</em> ':'')+esc(DATA.lens)+'</span>'); if(DETAILS) DETAILS.appendChild(ln); else after(two,ln); }

  /* ================================================================ THE LESSON MODULES (pick per lesson in DATA)
     scene1.type            dateit
     explore.reading.type   suncolumns
     explore.evidence.type  redpen
     planner.type           layout
     vocab.type             worddesk
     Every module returns {done(), journal(e,NA)} and keeps its state in S.m[<name>]. Add a type by adding a MOD entry. */
  var MOD={};
  function mstate(k,d){ if(!S.m[k]) S.m[k]=d; return S.m[k]; }
  /* every activity says three things plainly: why it is here, what to do, and what it is for (DATA.<module>.job) */
  function jobHTML(j){ if(!j) return ''; var steps=String(j.do||'').split(/\s*(?=\b\d+\.\s)/).map(function(x){ return x.replace(/^\d+\.\s*/,'').trim(); }).filter(Boolean);
    return '<div class="rg-job slim"'+(j.words?' data-words="'+esc(JSON.stringify(j.words))+'"':'')+'>'+(steps.length?'<div class="do"><b>Your job</b>'+(steps.length>1?'<ol>'+steps.map(function(s){ return '<li>'+esc(s)+'</li>'; }).join('')+'</ol>':'<p>'+esc(steps[0])+'</p>')+'</div>':'')+
      ((j.why||j.use)?'<details class="why"><summary>Why are we doing this?</summary>'+(j.why?'<p>'+esc(j.why)+'</p>':'')+(j.use?'<p><b>What it’s for:</b> '+esc(j.use)+'</p>':'')+'</details>':'')+
      (j.words?'<div class="words"><span>Words:</span> '+j.words.map(function(w){ return '<button type="button" class="rg-def" data-def="'+esc(w[1])+'">'+esc(w[0])+'</button>'; }).join(' ')+'</div>':'')+'</div>'; }
  function gameShell(cls,kicker,title,c){ var g=el('section','rg rg-game '+cls); g.dataset.tab='Issue '+ISSUE+' · '+kicker.split('·')[0].trim(); g.innerHTML='<div class="rg-game-k">'+esc(kicker)+'</div><h3 class="rg-game-t">'+esc(title)+'</h3>'+(c&&c.job?jobHTML(c.job):whyCard(c&&c.why)+todo(c&&c.todo)); return g; }
  /* drag OR tap: tap a card, then tap where it goes. dropTargets get .rg-drop; cb(card,target) */
  /* keyboard: cards and targets are real buttons (Tab, then Enter/Space); after a repaint, focus lands on the next card */
  function dragTap(root,cardSel,targetSel,cb){ var picked=null;
    function refocus(t){ setTimeout(function(){ if(document.activeElement&&document.activeElement!==document.body&&root.contains(document.activeElement)) return; var key=t.dataset.k?'[data-k="'+t.dataset.k+'"]':t.dataset.f?'[data-f="'+t.dataset.f+'"]':''; var nx=$(cardSel,root)||(key&&$(targetSel+key,root)); if(nx&&!/^(BUTTON|INPUT|SELECT|TEXTAREA)$/.test(nx.tagName)) nx=$('button',nx)||nx; if(nx) nx.focus({preventScroll:true}); },30); }
    root.addEventListener('click',function(e){ var c=e.target.closest(cardSel); if(c&&root.contains(c)&&!c.classList.contains('placed')){ if(picked){ picked.classList.remove('picked'); picked.setAttribute('aria-pressed','false'); } picked=c===picked?null:c; if(picked){ picked.classList.add('picked'); picked.setAttribute('aria-pressed','true'); } SFX.clack(); return; }
      var t=e.target.closest(targetSel); if(t&&picked&&!e.target.closest('.rg-evbtn')){ var p=picked; picked.classList.remove('picked'); picked=null; cb(p,t); refocus(t); } });
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
      (c.later?'<div class="rg-dt-later" role="group" aria-label="'+esc(c.later.q)+'"><div class="lab">'+esc(c.later.q)+'</div>'+c.later.opts.map(function(o,i){ return '<button type="button" data-i="'+i+'" aria-pressed="'+(st.later===i)+'" class="'+(st.later===i?'on':'')+'">'+esc(o)+'</button>'; }).join('')+'</div>':'')+
      '<div class="rg-dt-clues"><div class="lab">What makes you think so? <i>(tap any)</i></div>'+(c.clues||[]).map(function(x,i){ return '<button type="button" data-i="'+i+'" class="'+((st.clues||[]).indexOf(i)>-1?'on':'')+'">'+esc(x)+'</button>'; }).join('')+'</div>'+
      '<button type="button" class="rg-btn rg-dt-lock">🔒 Lock in my guess</button><div class="rg-dt-sealed"></div></div></div>';
    after(anchor,g); $('.rg-dt-img',g).appendChild(srcImg(c.img,'','A picture of a busy kitchen with a fireplace, a spinning wheel and a family at work'));
    var rng=$('.rg-dt-range',g), yr=$('.rg-dt-year b',g), lock=$('.rg-dt-lock',g), sealed=$('.rg-dt-sealed',g);
    rng.addEventListener('input',function(){ yr.textContent=rng.value; if(+rng.value%50===0) SFX.clack(); });
    $$('.rg-dt-later button',g).forEach(function(b){ b.addEventListener('click',function(){ if(st.locked) return; st.later=+b.dataset.i; save(); SFX.clack(); $$('.rg-dt-later button',g).forEach(function(x){ var on=x===b; x.classList.toggle('on',on); x.setAttribute('aria-pressed',on); }); paint(); }); });
    $$('.rg-dt-clues button',g).forEach(function(b){ b.setAttribute('aria-pressed',(st.clues||[]).indexOf(+b.dataset.i)>-1); b.addEventListener('click',function(){ b.classList.toggle('on'); b.setAttribute('aria-pressed',b.classList.contains('on')); st.clues=$$('.rg-dt-clues button.on',g).map(function(x){ return +x.dataset.i; }); save(); SFX.clack(); }); });
    function paint(){ var L=!!st.locked, needLater=!!c.later&&st.later==null; g.classList.toggle('locked',L); rng.disabled=L; lock.disabled=L||needLater; lock.textContent=L?'🔒 Guess locked':needLater?'🔒 Answer both questions to lock it':'🔒 Lock in my guess';
      $$('.rg-dt-later button',g).forEach(function(x){ x.disabled=L; });
      sealed.innerHTML=L?'<div class="rg-envelope"><span class="seal">G</span><div><b>Sealed: the scene seems to show about '+esc(st.guess)+'.'+(c.later&&st.later!=null?' Drawn later? '+esc(c.later.opts[st.later])+'.':'')+'</b> '+esc(c.sealed||'We’ll open it on the next tab, after you look closely at the picture.')+'</div></div>':''; }
    lock.addEventListener('click',function(){ st.guess=+rng.value; st.locked=true; save(); SFX.stamp(); paint(); refreshPress(); beat('dateLocked'); });
    paint();
    return {el:g,done:function(){ return !!st.locked; },journal:function(e,NA){ return st.locked?'<p class="a">Before the reveal, I thought the scene showed about <b>'+e(st.guess)+'</b>'+((st.clues||[]).length?' because of: '+e((st.clues||[]).map(function(i){ return (c.clues||[])[i]; }).join(', '))+'.':'.')+(c.later&&st.later!=null?' Could it have been drawn later? I said: '+e(c.later.opts[st.later])+'.':'')+(S.m.redpen&&S.m.redpen.date?' The print was made about '+e(c.answer)+' and shows a scene set about '+e(c.shows||'')+'.':'')+'</p>':NA; },
      state:function(){ return {guess:st.guess, later:c.later&&st.later!=null?c.later.opts[st.later]:'', clues:(st.clues||[]).map(function(i){ return (c.clues||[])[i]; }), locked:!!st.locked}; }}; };

  /* ---------------------------------------------------------------- suncolumns: drag the sun through one day; each person's column sets in type */
  MOD.suncolumns=function(c,anchor){ var st=mstate('sun',{stop:-1,myth:{}}); var N=(c.times||[]).length;
    var g=gameShell('rg-sun','The Front Page Desk · one day, many lives',c.title||'Follow one day in the colonies',c);
    if(c.note) g.innerHTML+='<p class="rg-recon"><b>About these six routines.</b> '+esc(c.note)+'</p>';
    function lineCard(col,i){ return {k:'routine', t:col.lines[i]||'', who:col.who, when:(c.times||[])[i]||'', where:col.where||'', from:c.srcLabel||'Lesson reconstruction', ctx:c.period||'', tags:[col.id,'routine'], ret:{tab:'desk', sel:'.rg-col[data-id="'+col.id+'"] .rg-col-line[data-i="'+i+'"]'}}; }
    var sky='<svg class="rg-sky" viewBox="0 0 600 120" aria-hidden="true"><defs><linearGradient id="rgSkyG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#F6E7C1"/><stop offset="1" stop-color="#FBF7EC"/></linearGradient></defs><rect width="600" height="120" fill="url(#rgSkyG)"/><path d="M30,104 Q300,-44 570,104" fill="none" stroke="#C9B98E" stroke-dasharray="4 6"/>'+
      (c.times||[]).map(function(t,i){ var p=arc(i/(N-1)); return '<g class="rg-sky-stop" data-i="'+i+'"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="7" fill="#FBF7EC" stroke="#8B6F2E" stroke-width="2"/></g>'; }).join('')+
      '<path d="M0,112 L600,112" stroke="#8B6F2E" stroke-width="2"/><g class="rg-sun"><circle r="16" fill="#E9B44C"/><g stroke="#E9B44C" stroke-width="3" stroke-linecap="round">'+[0,45,90,135,180,225,270,315].map(function(a){ var r=a*Math.PI/180; return '<line x1="'+(Math.cos(r)*21)+'" y1="'+(Math.sin(r)*21)+'" x2="'+(Math.cos(r)*27)+'" y2="'+(Math.sin(r)*27)+'"/>'; }).join('')+'</g></g></svg>';
    function arc(t){ var x=30+540*t, y=104-4*74*t*(1-t); return [x,y]; } /* peak stays inside the sky window */
    g.innerHTML+='<div class="rg-sun-sky">'+sky+'<div class="rg-sun-labels">'+(c.times||[]).map(function(t,i){ return '<button type="button" data-i="'+i+'">'+esc(t)+'</button>'; }).join('')+'</div></div>'+
      '<div class="rg-sun-ctl"><button type="button" class="rg-btn rg-sun-next">Move the sun ▸</button><span class="rg-sun-now"></span></div>'+
      '<div class="rg-cols">'+(c.cols||[]).map(function(col){ return '<article class="rg-col'+(col.calm?' calm':'')+'" data-id="'+esc(col.id)+'"><header><span class="ic">'+esc(col.icon||'')+'</span><div><b>'+esc(col.who)+'</b><small>'+esc(col.where||'')+'</small></div></header><div class="rg-col-body"></div></article>'; }).join('')+'</div>'+
      '<div class="rg-myths"></div><div class="rg-sun-close"></div>';
    after(anchor,g);
    var sun=$('.rg-sun',g), nextB=$('.rg-sun-next',g), now=$('.rg-sun-now',g), mythBox=$('.rg-myths',g);
    var view=-1; function placeSun(t){ var p=arc(Math.max(0,Math.min(1,t))); sun.setAttribute('transform','translate('+p[0]+','+p[1]+')'); }
    function paint(type){ var s=st.stop; if(view<0||view>s) view=s; placeSun(view<0?0:view/(N-1)); g.classList.toggle('dawn',s<0); g.classList.toggle('looking-back',view>=0&&view<s);
      $$('.rg-sun-labels button',g).forEach(function(b){ var i=+b.dataset.i; b.classList.toggle('on',i<=s); b.classList.toggle('now',i===view); b.disabled=i>s+1; });
      $$('.rg-sky-stop',g).forEach(function(n){ n.classList.toggle('on',+n.dataset.i<=s); n.classList.toggle('now',+n.dataset.i===view); });
      $$('.rg-col',g).forEach(function(a){ var col=(c.cols||[]).filter(function(x){ return x.id===a.dataset.id; })[0], b=$('.rg-col-body',a), have=b.children.length;
        for(var i=have;i<=s;i++){ var p=el('p','rg-col-line','<span class="who-m">'+esc(col.who)+' · </span><span class="tm">'+esc(c.times[i])+'</span> <span class="txt">'+esc(col.lines[i]||'')+'</span> '+evBtn(lineCard(col,i),'sm')); p.dataset.i=i; b.appendChild(p); if(type&&i===s&&!RM){ p.classList.add('set'); } } $$('.rg-col-line',b).forEach(function(p,i){ p.classList.toggle('dim',view>=0&&i!==view); p.classList.toggle('cur',i===view); }); });
      nextB.disabled=s>=N-1; nextB.textContent=s<0?'☀️ Start the day: sunrise ▸':s>=N-1?'The day is done':'Move the sun to '+(c.times[s+1]||'')+' ▸';
      now.textContent=s<0?'Drag the sun or tap the button.':view<s?'Looking back at '+c.times[view]+'. Tap '+c.times[s]+' to come back.':'Now: '+c.times[s]+'. Read every column.'+(s>0?' Tap an earlier time to look back.':'');
      mythBox.innerHTML=(c.myths||[]).filter(function(m){ return m.after<=s; }).map(function(m){ var i=(c.myths||[]).indexOf(m), d=st.myth[i]; return '<div class="rg-myth'+(d?' done':'')+'" data-i="'+i+'"><div class="clip"><span class="h">The Hasty Herald</span><p>“'+esc(m.claim)+'”</p></div>'+(d?'<div class="fact">'+(m.img?'<figure><img alt="" src="'+esc(LOCAL+m.img)+'"><figcaption>'+esc(m.cap||'')+'</figcaption></figure>':'')+'<div><b>Fact-check:</b> '+esc(m.fact)+' '+evBtn({k:'lesson', t:m.fact, who:'Fact-check of the Herald', when:'', where:'', from:'Lesson explanation (a fact-check written for this lesson)', ctx:'The Herald claimed: “'+m.claim+'”', tags:['herald'], ret:{tab:'desk', sel:'.rg-myth[data-i="'+i+'"]'}},'sm')+'</div></div>':'<div class="act"><button type="button" class="rg-btn alt" data-a="print">🖨 Print it</button><button type="button" class="rg-btn" data-a="check">🔍 Fact-check it</button><span class="say"></span></div>')+'</div>'; }).join('');
      var all=done(); $('.rg-sun-close',g).innerHTML=all&&c.close?'<div class="rg-win">'+esc(c.close)+'</div>':''; g.classList.toggle('finished',all); }
    function go(i){ if(i<=st.stop){ if(i>=0&&i!==view){ view=i; SFX.paper(); paint(); } return; } if(i>st.stop+1) return; st.stop=i; view=i; save(); SFX.paper(); paint(true); if(R.pair) R.pair.paint(); refreshPress(); if(i===N-1) beat('sunDone'); }
    nextB.addEventListener('click',function(){ go(st.stop+1); });
    $('.rg-sun-labels',g).addEventListener('click',function(e){ var b=e.target.closest('button'); if(b) go(+b.dataset.i); });
    /* drag the sun along the arc */
    var svg=$('.rg-sky',g), dragging=false;
    sun.addEventListener('pointerdown',function(e){ dragging=true; sun.setPointerCapture&&sun.setPointerCapture(e.pointerId); e.preventDefault(); });
    sun.addEventListener('pointermove',function(e){ if(!dragging) return; var r=svg.getBoundingClientRect(), t=(e.clientX-r.left)/r.width*600; t=(t-30)/540; var lim=Math.min(1,(st.stop+1)/(N-1)); t=Math.max(0,Math.min(lim,t)); placeSun(t); var k=Math.round(t*(N-1)); if(Math.abs(t*(N-1)-k)<0.18&&k!==view&&k<=st.stop+1){ go(k); } });
    sun.addEventListener('pointerup',function(){ dragging=false; paint(); }); svg.addEventListener('click',function(e){ var n=e.target.closest('.rg-sky-stop'); if(n) go(+n.dataset.i); });
    mythBox.addEventListener('click',function(e){ var b=e.target.closest('button[data-a]'); if(!b) return; var m=b.closest('.rg-myth'), i=+m.dataset.i;
      if(b.dataset.a==='print'){ $('.say',m).textContent=(c.myths[i].stop||'Hold the presses! A careful paper checks a claim before it prints it. Tap Fact-check it.'); SFX.bounce(); return; }
      st.myth[i]=true; save(); if(c.myths[i].calm) SFX.soft(); else SFX.chime(); paint(); refreshPress(); });
    function done(){ return st.stop>=N-1&&(c.myths||[]).every(function(m,i){ return st.myth[i]; }); }
    paint();
    return {el:g,done:done,journal:function(e,NA){ if(st.stop<0) return NA; return '<p class="a">I followed '+e((c.cols||[]).length)+' people through one day. '+((c.myths||[]).filter(function(m,i){ return st.myth[i]; }).map(function(m){ return 'Herald: “'+e(m.claim)+'” Fact: '+e(m.fact); }).join('<br>'))+'</p>'; },
      people:function(){ return (c.cols||[]).map(function(x){ return x.who; }); }}; };

  /* ---------------------------------------------------------------- redpen v2: look first, then mark it up; open the date (made vs. shown);
     sort what the picture shows / leaves out / CAN'T tell us; name another source; write the limitation in your own words */
  MOD.redpen=function(c,anchor){ var st=mstate('redpen',{seen:{},miss:{}});
    var g=gameShell('rg-redpen','The Source Desk · mark it up like an editor',c.title||'Mark up the picture',c);
    var spots=c.spots||[], need=c.need||Math.min(4,spots.length), last=null, say={}, M=c.missing||{}, cats=M.cats||[{k:'in',t:'In the picture'},{k:'out',t:'Not in the picture'}], FU=c.followup||null, D=c.date||{};
    var SRC_FROM=c.from||'Historical source: the kitchen print';
    function lpos(s){ if(s.lx!=null) return [s.lx,s.ly]; return [Math.max(14,Math.min(86,s.x+(s.x<50?-1:1)*-16)),Math.max(8,Math.min(86,s.y+(s.y<50?16:-16)))]; }
    function spotCard(s,i){ return {k:'source', t:'The print shows '+s.label.charAt(0).toLowerCase()+s.label.slice(1)+'.', who:'Kitchen print', when:'made about '+(D.year||''), where:'', from:SRC_FROM, ctx:s.t, tags:['picture'], ret:{tab:'desk', sel:'.rg-rp-n[data-i="'+i+'"]'}}; }
    g.innerHTML+='<div class="rg-rp-look"><label for="rg-rp-notice"><b>Look first.</b> '+esc(c.lookQ||'Before the editor’s marks appear, look closely. Write one thing you notice in this picture.')+'</label><textarea id="rg-rp-notice" rows="2" placeholder="I notice…">'+esc(st.notice||'')+'</textarea><div class="row"><button type="button" class="rg-btn alt rg-rp-zoom">🔍 Look closer</button><button type="button" class="rg-btn rg-rp-go">Show the editor’s marks</button><span class="rg-rp-sv"></span></div></div>'+
      '<div class="rg-rp-wrap"><figure class="rg-rp-pic"><div class="rg-rp-img"></div><svg class="rg-rp-ink" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">'+spots.map(function(s,i){ return '<ellipse class="ring" data-i="'+i+'" cx="'+s.x+'" cy="'+s.y+'" rx="'+(s.rx||6)+'" ry="'+(s.ry||7)+'"/>'; }).join('')+
      spots.map(function(s,i){ var L=lpos(s); return '<line class="lead" data-i="'+i+'" x1="'+s.x+'" y1="'+s.y+'" x2="'+L[0]+'" y2="'+L[1]+'"/>'; }).join('')+(c.date?'<rect class="ring date" x="'+(D.x-D.w/2)+'" y="'+(D.y-D.h/2)+'" width="'+D.w+'" height="'+D.h+'" rx="2"/>':'')+'</svg>'+
      spots.map(function(s,i){ return '<button type="button" class="rg-rp-n" data-i="'+i+'" style="left:'+s.x+'%;top:'+s.y+'%" aria-label="Mark '+(i+1)+': '+esc(s.label)+'">'+(i+1)+'</button>'; }).join('')+
      spots.map(function(s,i){ var L=lpos(s); return '<div class="rg-rp-ann" data-i="'+i+'" style="left:'+L[0]+'%;top:'+L[1]+'%"><b><span class="no">'+(i+1)+'</span> '+esc(s.label)+'</b><span class="txt">'+esc(s.t)+'</span></div>'; }).join('')+
      (c.date?'<button type="button" class="rg-rp-n date" style="left:'+D.x+'%;top:'+D.y+'%" aria-label="Open the caption and date">📅</button>':'')+'</figure>'+
      '<div class="rg-rp-cur" aria-live="polite"></div><div class="rg-rp-date"></div></div>'+
      '<div class="rg-rp-count" aria-live="polite"></div><div class="rg-rp-miss"></div><div class="rg-rp-fu"></div><div class="rg-rp-close"></div>';
    after(anchor,g); var pic=$('.rg-rp-img',g); pic.appendChild(srcImg(c.img,'',c.alt||''));
    var notice=$('#rg-rp-notice',g);
    function guess(){ return S.m.dateit&&S.m.dateit.locked?S.m.dateit:null; }
    function looked(){ return !!st.looked; }
    function sortDone(){ var cards=M.cards||[]; return cards.length>0&&cards.every(function(x,i){ return !!st.miss[i]; }); }
    function paint(){ var n=Object.keys(st.seen).length;
      g.classList.toggle('looking',!looked());
      $('.rg-rp-go',g).disabled=words(notice.value)<4; $('.rg-rp-go',g).classList.toggle('rg-hide',looked());
      $('.rg-rp-sv',g).innerHTML=words(notice.value)>=4?evBtn({k:'mine', auto:'notice', t:notice.value.trim(), who:'What I noticed in the kitchen print', when:'', where:'', from:'My own observation of the kitchen print', ctx:'What I noticed before reading the editor’s notes.', tags:['picture','mine'], ret:{tab:'desk', sel:'#rg-rp-notice'}},'sm'):'';
      $$('.ring',g).forEach(function(r){ var i=r.dataset.i; r.classList.toggle('on',i!=null?!!st.seen[i]:!!st.date); });
      $$('.rg-rp-n',g).forEach(function(b){ var i=b.dataset.i; b.classList.toggle('on',i!=null?!!st.seen[i]:!!st.date); b.disabled=!looked()||(i==null&&n<need); b.setAttribute('aria-pressed',i!=null?!!st.seen[i]:!!st.date); });
      $$('.rg-rp-ann',g).forEach(function(a){ var i=a.dataset.i, open=i===last; a.classList.toggle('on',!!st.seen[i]); a.classList.toggle('open',open); var sv=$('.rg-evbtn',a); if(open&&!sv) a.insertAdjacentHTML('beforeend',evBtn(spotCard(spots[+i],+i),'sm')); if(!open&&sv) sv.remove(); });
      $$('.lead',g).forEach(function(l){ l.classList.toggle('on',!!st.seen[l.dataset.i]); });
      var cs=last!=null&&spots[+last]; $('.rg-rp-cur',g).innerHTML=cs?'<b>'+(+last+1)+'. '+esc(cs.label)+'</b> '+esc(cs.t)+' '+evBtn(spotCard(cs,+last),'sm'):'';
      var dbtn=$('.rg-rp-n.date',g); if(dbtn){ dbtn.classList.toggle('ready',looked()&&n>=need&&!st.date); }
      $('.rg-rp-count',g).innerHTML=!looked()?'':st.date?'':n<need?'🖍 <b>'+n+' of '+need+'</b> marks opened. Tap a number on the picture.':'📅 Now tap the date mark at the bottom of the picture to read the caption.';
      paintDate(); paintMiss(); paintFU(); fin(); }
    /* ---- the date: when it was MADE vs. the time it SHOWS; the student's explanation is the point, not the guess */
    function paintDate(){ var box=$('.rg-rp-date',g); if(!st.date){ box.innerHTML=''; return; } var gs=guess();
      if(!box.firstChild){ box.innerHTML='<div class="rg-reveal"><div class="rg-dates"><div><span class="k">Made</span><b>about '+esc(D.year)+'</b><small>'+esc(D.madeBy||'')+'</small></div><div class="gap" aria-hidden="true">← '+esc((D.year||0)-(D.shows||0))+' years →</div><div><span class="k">Shows</span><b>about '+esc(D.shows||'')+'</b><small>'+esc(D.showsWhy||'')+'</small></div></div>'+
        '<p>'+esc(D.text)+'</p>'+(gs?'<p class="cmp">Your sealed note: the scene seems to show about <b>'+esc(gs.guess)+'</b>'+(gs.later!=null&&(DATA.scene1||{}).later?'; drawn later? <b>'+esc(DATA.scene1.later.opts[gs.later])+'</b>':'')+'. '+esc(D.cmp||'Now explain it better than any guess could.')+'</p>':'')+
        '<label for="rg-rp-dexp"><b>'+esc(D.q||'In your own words: what is the difference between when this scene is set and when the print was made? Why does it matter when you use it as evidence?')+'</b></label><textarea id="rg-rp-dexp" rows="3">'+esc(st.dexp||'')+'</textarea><div class="rg-rp-dfb" aria-live="polite"></div></div>';
        var ta=$('#rg-rp-dexp',box); ta.addEventListener('input',function(){ st.dexp=ta.value; save(); paintDexp(); paintMiss(); paintFU(); fin(); refreshPress(); }); }
      paintDexp(); }
    function paintDexp(){ var fb=$('.rg-rp-dfb',g); if(!fb) return; var v=st.dexp||'', n=words(v);
      if(n<12){ fb.innerHTML='<p class="rg-todo">📝 '+n+' of 12 words. Mention both dates, and say why the gap matters.</p>'; return; }
      var chk=(D.check||[]).map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('');
      fb.innerHTML='<div class="rg-selfcheck"><b>Check your own explanation.</b> Did you…<ul>'+chk+'</ul></div><details class="rg-model"><summary>Compare with the editor’s note</summary><p>'+esc(D.model||'')+'</p></details>'+
        evBtn({k:'mine', auto:'date', t:v, who:'Made vs. shown: my explanation', when:'', where:'', from:'My own notes about the kitchen print', ctx:D.card||'', tags:['picture','date'], ret:{tab:'desk', sel:'#rg-rp-dexp'}},''); }
    function sayFor(i){ return say[i]||''; }
    function paintMiss(){ var cards=M.cards||[], box=$('.rg-rp-miss',g);
      if(!(st.date&&words(st.dexp||'')>=12&&cards.length)){ box.innerHTML=''; return; }
      var fk=document.activeElement&&g.contains(document.activeElement)?(document.activeElement.dataset.i!=null&&document.activeElement.classList.contains('rg-card')?'c':document.activeElement.dataset.f?'f'+document.activeElement.dataset.f:''):'';
      box.innerHTML='<div class="rg-rp-mhd"><b>'+esc(M.q||'What can this picture tell us?')+'</b> '+esc(M.todo||'Choose a card, then choose where it belongs.')+'</div><div class="rg-rp-cards" role="group" aria-label="Cards to sort">'+cards.map(function(x,i){ return st.miss[i]?'':'<button type="button" class="rg-card'+(x.calm?' calm':'')+'" draggable="true" data-i="'+i+'" aria-pressed="false">'+esc(x.t)+'</button>'; }).join('')+'</div>'+
        '<div class="rg-frames three">'+cats.map(function(ct){ return '<div class="rg-frame'+(ct.k==='cant'?' cant':'')+'" data-f="'+ct.k+'"><button type="button" class="drop" data-f="'+ct.k+'"><span class="lab">'+esc(ct.icon||'')+' '+esc(ct.t)+'</span><span class="rg-sr"> (put the chosen card here)</span></button>'+cards.map(function(x,i){ return st.miss[i]===ct.k?'<span class="chip'+(x.calm?' calm':'')+'">'+esc(x.t)+(ct.k==='cant'?' '+evBtn({k:'mine', t:'The 1876 kitchen print can’t show '+x.t.toLowerCase()+'.', who:'Limitation of the kitchen print', when:'', where:'', from:'My note about what the source can’t show', ctx:x.say||'', tags:['picture','limitation','mine'], ret:{tab:'desk', sel:'.rg-frame[data-f="cant"]'}},'xs'):'')+'</span>':''; }).join('')+'</div>'; }).join('')+'</div>'+
        '<div class="rg-rp-say" aria-live="polite">'+(st.lastSay?esc(st.lastSay):'')+'</div>';
      if(fk==='c'){ var nc=$('.rg-rp-cards .rg-card',box); if(nc) nc.focus(); } else if(fk){ var f=$('.rg-frame[data-f="'+fk.slice(1)+'"] .drop',box); if(f) f.focus(); } }
    function paintFU(){ var box=$('.rg-rp-fu',g); if(!FU||!sortDone()){ box.innerHTML=''; return; }
      if(!box.firstChild){ box.innerHTML='<fieldset class="rg-fu"><legend>'+esc(FU.q)+'</legend>'+FU.opts.map(function(o,i){ return '<label class="rg-radio"><input type="radio" name="rg-fu" value="'+i+'"'+(st.fu===i?' checked':'')+'> '+esc(o.t)+'</label>'; }).join('')+'<div class="rg-fu-fb" aria-live="polite"></div></fieldset>'+
        '<div class="rg-lim"><label for="rg-rp-lim"><b>'+esc(FU.limQ||'Write the limitation in your own words.')+'</b></label><textarea id="rg-rp-lim" rows="2" placeholder="'+esc(FU.limPh||'This picture can’t show…')+'">'+esc(st.lim||'')+'</textarea><div class="rg-lim-sv"></div></div>';
        $$('input[name="rg-fu"]',box).forEach(function(r){ r.addEventListener('change',function(){ st.fu=+r.value; save(); paintFUfb(); fin(); refreshPress(); }); });
        var lt=$('#rg-rp-lim',box); lt.addEventListener('input',function(){ st.lim=lt.value; save(); paintFUfb(); fin(); refreshPress(); if(words(lt.value)>=8) beat('limitWritten'); }); }
      paintFUfb(); }
    function paintFUfb(){ var fb=$('.rg-fu-fb',g); if(!fb) return; var o=FU.opts[st.fu]; fb.innerHTML=o?'<p class="'+(o.ok?'ok':'no')+'">'+(o.ok?'✓ ':'Think again: ')+esc(o.say)+'</p>':'';
      var sv=$('.rg-lim-sv',g); sv.innerHTML=words(st.lim||'')>=8?evBtn({k:'mine', auto:'limit', t:(st.lim||'').trim(), who:'What the kitchen print can’t show', when:'', where:'', from:'My note about what the source can’t show', ctx:o&&o.ok?'Another source that could help: '+o.t:'', tags:['picture','limitation','mine'], ret:{tab:'desk', sel:'#rg-rp-lim'}},''):'<p class="rg-todo">📝 '+words(st.lim||'')+' of 8 words.</p>'; }
    notice.addEventListener('input',function(){ st.notice=notice.value; save(); paint(); });
    $('.rg-rp-go',g).addEventListener('click',function(){ st.looked=true; save(); SFX.paper(); paint(); var b=$('.rg-rp-n',g); if(b) b.focus(); });
    $('.rg-rp-zoom',g).addEventListener('click',function(){ var im=$('.rg-rp-img img',g); zoomImage(im&&im.src,c.alt||'',c.zoomCap||''); });
    g.addEventListener('click',function(e){ var b=e.target.closest('.rg-rp-n'); if(b&&!b.disabled){
        if(b.classList.contains('date')){ if(Object.keys(st.seen).length<need) return; st.date=true; save(); SFX.stamp(); paint(); refreshPress(); beat('dateOpened'); var t=$('#rg-rp-dexp',g); if(t) setTimeout(function(){ t.focus({preventScroll:true}); },400); return; }
        st.seen[b.dataset.i]=true; last=b.dataset.i; save(); SFX.scratch(); paint(); refreshPress(); return; }
      var a=e.target.closest('.rg-rp-ann.on'); var sl=window.getSelection&&window.getSelection(); if(a&&!e.target.closest('.rg-evbtn')&&!(sl&&!sl.isCollapsed)){ last=a.dataset.i===last?null:a.dataset.i; paint(); } });
    dragTap(g,'.rg-rp-cards .rg-card','.rg-frame',function(card,frame){ var i=+card.dataset.i, x=M.cards[i], want=x.k||(x.out?'out':'in');
      if(frame.dataset.f!==want){ card.classList.add('bounce'); setTimeout(function(){ card.classList.remove('bounce'); },500); SFX.bounce(); st.lastSay=x.hint||'Look again at the picture.'; $('.rg-rp-say',g).textContent=st.lastSay; return; }
      st.miss[i]=want; st.lastSay=x.say||''; save(); x.calm?SFX.soft():SFX.chime(); paintMiss(); paintFU(); fin(); refreshPress(); if(want==='cant') beat('cantTell'); });
    function done(){ return !!st.date&&words(st.dexp||'')>=12&&sortDone()&&(!FU||(FU.opts[st.fu]&&FU.opts[st.fu].ok&&words(st.lim||'')>=8)); }
    function fin(){ var d=done(); g.classList.toggle('finished',d); var cl=$('.rg-rp-close',g); if(cl) cl.innerHTML=d&&c.close?'<div class="rg-win">'+esc(c.close)+'</div>':''; }
    paint();
    return {el:g,done:done,state:function(){ var cards=M.cards||[]; var by={}; cats.forEach(function(ct){ by[ct.k]=cards.filter(function(x,i){ return st.miss[i]===ct.k; }).map(function(x){ return x.t; }); });
        return {notice:st.notice||'', marks:Object.keys(st.seen).length, opened:!!st.date, dateExp:st.dexp||'', sort:by, cats:cats, followup:FU&&FU.opts[st.fu]?FU.opts[st.fu].t:'', followOk:!!(FU&&FU.opts[st.fu]&&FU.opts[st.fu].ok), limitation:st.lim||''}; },
      journal:function(e,NA){ if(!st.date) return NA; var x=this.state(); return '<p class="a">The print was made about '+e(D.year)+' and shows a scene set about '+e(D.shows)+'. '+(x.dateExp?'My explanation: '+e(x.dateExp)+'<br>':'')+cats.map(function(ct){ return '<b>'+e(ct.t)+':</b> '+e((x.sort[ct.k]||[]).join(', ')||'—'); }).join('<br>')+(x.limitation?'<br><b>Limitation:</b> '+e(x.limitation):'')+'</p>'; }}; };

  /* ---------------------------------------------------------------- layout: drag your own notes onto a blank front page before you write */
  MOD.layout=function(c,anchor){ var st=mstate('layout2',{head:null,p1:null,p2:null,f:{}});
    /* the people come from the lesson's own reading module, so the plan points back at evidence the student read */
    var cols=((DATA.explore||{}).reading||{}).cols||[], times=((DATA.explore||{}).reading||{}).times||[], H=c.head||{}, F=c.factors||[];
    var g=gameShell('rg-layout2','Go to Press · plan the page',c.title||'Plan your front page',c);
    g.innerHTML+='<div class="rg-lo2-page"><div class="mast">The Republic Gazette</div>'+
      '<div class="rg-lo2-box head"><div class="lab"><span class="n">1</span>'+esc(H.label||'Headline: your claim')+'</div><div class="opts" data-slot="head"></div></div>'+
      '<div class="rg-lo2-two"><div class="rg-lo2-box"><div class="lab"><span class="n">2</span>'+esc(c.p1Label||'Column 1: one person')+'</div><div class="opts" data-slot="p1"></div></div><div class="rg-lo2-box"><div class="lab"><span class="n">3</span>'+esc(c.p2Label||'Column 2: a very different day')+'</div><div class="opts" data-slot="p2"></div></div></div>'+
      '<div class="rg-lo2-cmp"></div>'+
      '<div class="rg-lo2-box why"><div class="lab"><span class="n">4</span>'+esc(c.whyLabel||'Why it matters: what made their days so different?')+' <i>(pick one or more)</i></div><div class="opts" data-slot="f"></div></div></div><div class="rg-lo2-say"></div>';
    after(anchor,g);
    function col(id){ return cols.filter(function(x){ return x.id===id; })[0]; }
    function paint(){
      var hs=$('[data-slot="head"]',g), had=hs.contains(document.activeElement)&&document.activeElement.dataset.v;
      hs.innerHTML=(H.choices||[]).map(function(h,i){ return '<button type="button" class="rg-lo2-opt angle'+(st.head===i?' on':'')+'" data-k="head" data-v="'+i+'" aria-pressed="'+(st.head===i)+'"><b>'+esc(h.t)+'</b>'+(h.tip?'<small>'+esc(h.tip)+'</small>':'')+'</button>'; }).join('')+
        (H.own?'<div class="own"><label for="rg-lo2-own">'+esc(H.own)+'</label><input id="rg-lo2-own" maxlength="90" value="'+esc(st.own||'')+'" placeholder="Write your own angle"></div>':'');
      var oi=$('#rg-lo2-own',g); if(oi) oi.addEventListener('input',function(){ st.own=oi.value; if(oi.value.trim()) st.head=-1; else if(st.head===-1) st.head=null; save(); $$('.rg-lo2-opt.angle',g).forEach(function(x){ x.classList.toggle('on',+x.dataset.v===st.head); x.setAttribute('aria-pressed',+x.dataset.v===st.head); }); g.classList.toggle('finished',done()); $('.rg-lo2-say',g).innerHTML=done()?'<div class="rg-win">'+esc(c.close||'')+'</div>':''; refreshPress(); });
      if(had!=null&&had!==false){ var fb=$('[data-v="'+had+'"]',hs); if(fb) fb.focus(); }
      var fk=document.activeElement&&g.contains(document.activeElement)?document.activeElement.dataset.k+'|'+document.activeElement.dataset.v:'';
      ['p1','p2'].forEach(function(k){ $('[data-slot="'+k+'"]',g).innerHTML=cols.map(function(x){ var other=k==='p1'?st.p2:st.p1; return '<button type="button" class="rg-lo2-opt person'+(st[k]===x.id?' on':'')+(x.calm?' calm':'')+'" aria-pressed="'+(st[k]===x.id)+'" data-k="'+k+'" data-v="'+esc(x.id)+'"'+(other===x.id?' disabled':'')+'><span class="ic">'+esc(x.icon||'')+'</span>'+esc(x.who)+'</button>'; }).join(''); });
      $('[data-slot="f"]',g).innerHTML=F.map(function(f,i){ return '<button type="button" class="rg-lo2-opt'+(st.f[i]?' on':'')+'" aria-pressed="'+!!st.f[i]+'" data-k="f" data-v="'+i+'">'+esc(f)+'</button>'; }).join('');
      if(fk&&fk.indexOf('head')!==0){ var p=fk.split('|'), fe=$('.rg-lo2-opt[data-k="'+p[0]+'"][data-v="'+p[1]+'"]',g); if(fe) fe.focus(); }
      var a=col(st.p1), b=col(st.p2), cmp=$('.rg-lo2-cmp',g);
      cmp.innerHTML=a&&b?'<div class="hd">Compare them hour by hour. These are your notes from the Desk tab.</div><div class="tbl"><div></div><b>'+esc(a.icon+' '+a.who)+'</b><b>'+esc(b.icon+' '+b.who)+'</b>'+times.map(function(t,i){ return '<span class="tm">'+esc(t)+'</span><p>'+esc(a.lines[i]||'')+'</p><p>'+esc(b.lines[i]||'')+'</p>'; }).join('')+'</div><div class="q">'+esc(c.cmpQ||'What is the biggest difference between their days?')+'</div>':'';
      g.classList.toggle('finished',done()); $('.rg-lo2-say',g).innerHTML=done()?'<div class="rg-win">'+esc(c.close||'Your page is planned. Now write it in your own words below.')+'</div>':''; }
    g.addEventListener('click',function(e){ var b=e.target.closest('.rg-lo2-opt'); if(!b||b.disabled) return; var k=b.dataset.k, v=b.dataset.v;
      if(k==='head'){ var h=H.choices[+v]; if(!h.ok){ b.classList.add('bounce'); setTimeout(function(){ b.classList.remove('bounce'); },450); SFX.bounce(); $('.rg-lo2-say',g).innerHTML='<p class="hint" role="status">'+esc(h.hint||'Look again.')+'</p>'; return; } st.head=+v; st.own=''; beat('angleChosen'); }
      else if(k==='f'){ st.f[v]=!st.f[v]; }
      else st[k]=st[k]===v?null:v;
      save(); SFX.paper(); paint(); refreshPress(); });
    function angleOK(){ var h=(H.choices||[])[st.head]; return !!(h&&h.ok)||(st.head===-1&&words(st.own||'')>=2); }
    function done(){ return !!(angleOK()&&st.p1&&st.p2&&st.p1!==st.p2&&Object.keys(st.f).some(function(k){ return st.f[k]; })); }
    paint();
    return {el:g,done:done,paint:paint,angle:function(){ if(st.head===-1) return {t:st.own||'', own:true, fit:[]}; var h=(H.choices||[])[st.head]; return h&&h.ok?h:null; },pair:function(){ return [col(st.p1),col(st.p2)]; },factors:function(){ return F.filter(function(f,i){ return st.f[i]; }); },lines:function(){ var h=st.head===-1?{t:st.own}:(H.choices||[])[st.head], a=col(st.p1), b=col(st.p2); return [['Angle',h&&(h.ok||st.head===-1)?h.t:''],['Column 1',a?a.who:''],['Column 2',b?b.who:''],['Why it matters',F.filter(function(f,i){ return st.f[i]; }).join(', ')]]; }}; };

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

  /* ---------------------------------------------------------------- almanac v3: why it's here, said up front.
     1 · the real 1748 cover (it promises sunrise and sunset times)  2 · a calendar page: read the sun, count the workday
     3 · same sunrise for everyone, but who got to stop at sunset? */
  function buildAlmanac(){ var A=DATA.almanac, ed=$('#panel-dispatch .editors-desk'); if(!A||!(ed||R.reading)) return; var st=mstate('almanac3',{seen:{},q:{},sort:{},step:1,mo:0});
    var spots=A.spots||[], sort=A.sort||{}, MO=A.months||[], P=A.point||{};
    var a=el('section','rg rg-almanac2 rg-al3','<div class="rg-al2-head"><span class="sun">☀</span><b>The Almanac Corner</b><span class="moon">☾</span></div>'+
      (A.job?jobHTML(A.job):'<div class="rg-al3-point"><span class="ic">🕰️</span><div><b>'+esc(P.q||'Why is an almanac here?')+'</b> '+esc(P.t||'')+'</div></div>')+
      '<ol class="rg-al3-steps">'+['Read the real cover','Read the sun times','Who got to stop?'].map(function(t,i){ return '<li data-s="'+(i+1)+'"><span class="n">'+(i+1)+'</span>'+t+'</li>'; }).join('')+'</ol>'+
      '<div class="rg-al3-stage"><div class="rg-al3-s1"><div class="rg-al2-cover"><img alt="Title page of Poor Richard improved, an almanac for the year 1748, printed and sold by B. Franklin in Philadelphia" src="'+esc(LOCAL+A.img)+'">'+
        spots.map(function(s,i){ return '<button type="button" class="rg-al2-n" data-i="'+i+'" style="left:'+s.x+'%;top:'+s.y+'%" aria-label="'+(i+1)+': '+esc(s.label)+'">'+(i+1)+'</button><div class="rg-al3-ann'+(s.x>50?' l':'')+'" data-i="'+i+'" style="top:'+s.y+'%;left:calc('+s.x+'% + 24px)"><b>'+esc(s.label)+'</b><span>'+esc(s.t)+'</span>'+evBtn({k:'source', t:'The 1748 almanac cover promises '+s.label+'.', who:'Poor Richard improved', when:'1748', where:'Philadelphia', from:'Historical source: title page of Poor Richard improved, 1748 (Library of Congress)', ctx:s.t, tags:['almanac'], ret:{tab:'desk', sel:'.rg-al3', mod:'almanac', arg:1}},'xs')+'</div>'; }).join('')+
        '<div class="cap">'+esc(A.imgCap||'')+'</div></div><div class="rg-al3-go"></div></div>'+
      '<div class="rg-al3-s2"></div><div class="rg-al3-s3"></div></div>');
    var rd=R.reading&&R.reading.el; if(rd&&A.onDesk!==false) after(rd,a); else after(ed,a);
    function hm(t){ var p=t.split(':'); return +p[0]+(+p[1])/60; }
    function page(){ var m=MO[st.mo]; if(!m) return '';
      var r0=m.rows[0], rise=hm(r0[1]), set=12+hm(r0[2]);
      return '<div class="rg-al3-tabs">'+MO.map(function(x,i){ return '<button type="button" data-mo="'+i+'" class="'+(i===st.mo?'on':'')+'"'+(i>0&&!st.q[MO[i-1].k]?' disabled':'')+'>'+esc(x.name)+(st.q[x.k]?' ✓':'')+'</button>'; }).join('')+'<button type="button" class="back" data-a="cover">◂ Cover</button></div>'+
        '<div class="rg-al3-page"><div class="hd">'+esc(m.head)+'</div><table><thead><tr><th>Day</th><th>☀ Sun rises</th><th>☀ Sun sets</th><th>Weather guess</th></tr></thead><tbody>'+
        m.rows.map(function(r){ return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td class="w">'+esc(r[3])+'</td></tr>'; }).join('')+'</tbody></table>'+
        '<div class="say">“'+esc(A.saying)+'”<cite>'+esc(A.cite||'')+'</cite>'+evBtn({k:'source', quote:true, t:A.saying, who:'Poor Richard’s Almanack', when:'1735', where:'Philadelphia', from:'Historical source: '+(A.cite||'Poor Richard’s Almanack, 1735'), ctx:'A saying printed in Benjamin Franklin’s almanac.', tags:['almanac'], ret:{tab:'desk', sel:'.rg-al3', mod:'almanac', arg:2}},'xs')+'</div><div class="re">'+esc(A.note||'')+'</div></div>'+
        '<div class="rg-al3-day'+(st.q[m.k]?' shown':'')+'" aria-hidden="true"><div class="trk"><i class="lit" style="left:'+(rise/24*100)+'%;width:'+((set-rise)/24*100)+'%"></i>'+[0,6,12,18,24].map(function(h){ return '<span style="left:'+(h/24*100)+'%">'+(h===0||h===24?'12 am':h===12?'noon':h===6?'6 am':'6 pm')+'</span>'; }).join('')+'</div><div class="lb">'+(st.q[m.k]?esc(m.name)+': about '+Math.round(set-rise)+' hours of daylight':'')+'</div></div>'+
        (st.q[m.k]?'<div class="rg-al3-sv">'+evBtn({k:'lesson', t:'In '+m.name+' near Philadelphia, the sun rose about '+r0[1]+' and set about '+r0[2]+', about '+Math.round(set-rise)+' hours of daylight.', who:'Almanac calendar page', when:m.name, where:'Philadelphia (latitude 40°)', from:'Lesson re-set of an almanac calendar page (sun times worked out for latitude 40°)', ctx:A.note||'', tags:['almanac'], ret:{tab:'desk', sel:'.rg-al3', mod:'almanac', arg:2}},'')+'</div>':'')+'<div class="rg-al3-q"><b>'+esc(m.q)+'</b><div class="ch">'+m.choices.map(function(c,i){ return '<button type="button" class="rg-btn alt'+(st.q[m.k]&&i===m.ok?' right':'')+'" data-c="'+i+'"'+(st.q[m.k]?' disabled':'')+'>'+esc(c)+'</button>'; }).join('')+'</div><div class="fb">'+(st.q[m.k]?'✓ '+esc(m.yes):'')+'</div></div>'+
        (MO.every(function(x){ return st.q[x.k]; })?'<div class="rg-al3-bridge">'+esc(A.bridge||'')+' <button type="button" class="rg-btn" data-a="s3">Who got to stop? ▸</button></div>':''); }
    function paint(){ var n=Object.keys(st.seen).length, need=spots.length;
      a.dataset.step=st.step; $$('.rg-al3-steps li',a).forEach(function(li){ var k=+li.dataset.s; li.classList.toggle('on',k===st.step); li.classList.toggle('ok',k<st.step||(k===3&&done())); });
      $$('.rg-al2-n',a).forEach(function(b){ b.classList.toggle('on',!!st.seen[b.dataset.i]); }); $$('.rg-al3-ann',a).forEach(function(x){ x.classList.toggle('on',x.dataset.i===String(st.last)); });
      $('.rg-al3-go',a).innerHTML=n<need?'<p class="rg-todo">Tap the '+need+' gold numbers on the cover ('+n+' of '+need+').</p>':'<button type="button" class="rg-btn" data-a="open">📖 Open it to June</button>';
      $('.rg-al3-s2',a).innerHTML=st.step===2?page():'';
      var cards=sort.cards||[];
      $('.rg-al3-s3',a).innerHTML=st.step===3&&cards.length?'<button type="button" class="back rg-al3-back" data-a="s2">◂ Back to the calendar</button><div class="q"><b>'+esc(sort.q)+'</b> '+esc(sort.todo||'Tap a person, then tap a basket.')+'</div><div class="rg-al2-cards" role="group" aria-label="People to sort">'+cards.map(function(c,i){ return st.sort[i]?'':'<button type="button" class="rg-card'+(c.calm?' calm':'')+'" data-i="'+i+'" draggable="true" aria-pressed="false">'+esc(c.icon||'')+' '+esc(c.t)+'</button>'; }).join('')+'</div><div class="rg-al2-bins">'+['yes','no'].map(function(k){ return '<button type="button" class="rg-al2-bin" data-k="'+k+'"><span class="lab">'+(k==='yes'?'☀ Chose their own hours':'⛓ Someone else chose')+'</span>'+cards.map(function(c,i){ return st.sort[i]===k?'<span class="chip'+(c.calm?' calm':'')+'"><b>'+esc(c.t)+'</b> '+esc(c.why)+'</span>':''; }).join('')+'</button>'; }).join('')+'</div><div class="say"></div>'+(done()?'<div class="rg-win">'+esc(A.tie)+'</div>':''):'';
      a.classList.toggle('finished',done()); }
    a.addEventListener('click',function(e){ var b=e.target.closest('.rg-al2-n'); if(b){ st.seen[b.dataset.i]=true; st.last=b.dataset.i; save(); SFX.scratch(); paint(); return; }
      if(e.target.closest('.rg-evbtn')) return; var sel0=window.getSelection&&window.getSelection(); if(sel0&&!sel0.isCollapsed) return;
      var x=e.target.closest('.rg-al3-ann'); if(x){ st.last=null; paint(); return; }
      var t=e.target.closest('[data-mo]'); if(t&&!t.disabled){ st.mo=+t.dataset.mo; save(); SFX.paper(); paint(); return; }
      var c=e.target.closest('.rg-al3-q [data-c]'); if(c){ var m=MO[st.mo]; if(+c.dataset.c===m.ok){ st.q[m.k]=true; save(); SFX.chime(); paint(); var nx=MO.findIndex(function(y){ return !st.q[y.k]; }); if(nx>-1) setTimeout(function(){ st.mo=nx; save(); SFX.paper(); paint(); },1600); }
        else { c.classList.add('bounce'); setTimeout(function(){ c.classList.remove('bounce'); },450); SFX.bounce(); $('.rg-al3-q .fb',a).textContent=m.no||'Look at the sun times again.'; } return; }
      var g=e.target.closest('[data-a]'); if(!g) return; var k=g.dataset.a;
      if(k==='open'){ st.step=2; st.mo=0; } else if(k==='cover'){ st.step=1; } else if(k==='s3'){ st.step=3; } else if(k==='s2'){ st.step=2; }
      save(); SFX.paper(); paint(); refreshPress(); var tp=a.getBoundingClientRect().top; if(tp<0) a.scrollIntoView({block:'start',behavior:RM?'auto':'smooth'}); });
    $('.rg-al3-steps',a).addEventListener('click',function(e){ var li=e.target.closest('li'); if(!li) return; var k=+li.dataset.s; if(k===1||(k===2&&Object.keys(st.seen).length>=spots.length)||(k===3&&MO.every(function(x){ return st.q[x.k]; }))){ st.step=k; save(); paint(); } });
    dragTap(a,'.rg-al2-cards .rg-card','.rg-al2-bin',function(card,bin){ var i=+card.dataset.i, c=sort.cards[i];
      if(bin.dataset.k!==c.k){ card.classList.add('bounce'); setTimeout(function(){ card.classList.remove('bounce'); },450); SFX.bounce(); $('.say',a).textContent=c.hint||'Look back at that person’s column.'; return; }
      st.sort[i]=c.k; save(); c.calm?SFX.soft():SFX.chime(); paint(); refreshPress(); });
    function done(){ return MO.every(function(x){ return st.q[x.k]; })&&(sort.cards||[]).every(function(c,i){ return !!st.sort[i]; }); }
    paint(); R.almanac={el:a,done:done,go:function(k){ st.step=k||1; save(); paint(); },state:function(){ var cards=sort.cards||[]; return {cover:Object.keys(st.seen).length, months:MO.map(function(m){ return {name:m.name, ok:!!st.q[m.k], rise:m.rows[0][1], set:m.rows[0][2], q:m.q, a:st.q[m.k]?m.choices[m.ok]:''}; }), sort:{yes:cards.filter(function(c,i){ return st.sort[i]==='yes'; }).map(function(c){ return c.t; }), no:cards.filter(function(c,i){ return st.sort[i]==='no'; }).map(function(c){ return c.t; })}}; }}; }

  /* ---------------------------------------------------------------- study a pair: two people, same hour, side by side (shared with the press planner) */
  function buildPair(){ var PC=DATA.pair, rd=R.reading&&R.reading.el; if(!PC||!rd) return; var st=mstate('layout2',{head:null,p1:null,p2:null,f:{}});
    var cols=((DATA.explore||{}).reading||{}).cols||[], times=((DATA.explore||{}).reading||{}).times||[];
    function col(id){ return cols.filter(function(x){ return x.id===id; })[0]; }
    var g=gameShell('rg-pair','The Front Page Desk · look closely',PC.title||'Study two people closely',PC);
    function opts(sel){ return '<option value="">Choose a person…</option>'+cols.map(function(x){ return '<option value="'+esc(x.id)+'"'+(sel===x.id?' selected':'')+'>'+esc(x.who)+'</option>'; }).join(''); }
    g.innerHTML+='<div class="rg-pair-pick"><label>Person 1 <select class="p1">'+opts(st.p1)+'</select></label><label>Person 2 <select class="p2">'+opts(st.p2)+'</select></label></div><div class="rg-pair-tbl" aria-live="polite"></div><div class="rg-pair-legal"></div>'+
      '<div class="rg-pair-note"><label for="rg-pair-note"><b>'+esc(PC.q||'At the same hour, what is the biggest difference between their days?')+'</b></label><textarea id="rg-pair-note" rows="3" placeholder="At sunrise, … but …">'+esc(st.pnote||'')+'</textarea><div class="sv"></div></div>';
    after(R.almanac&&R.almanac.el&&R.almanac.el.closest('#panel-desk')?R.almanac.el:rd,g); var s1=$('select.p1',g), s2=$('select.p2',g), ta=$('#rg-pair-note',g);
    function paint(){ var a=col(st.p1), b=col(st.p2), reached=((S.m.sun||{}).stop);
      $('.rg-pair-tbl',g).innerHTML=a&&b&&a!==b?'<table><caption class="rg-sr">'+esc(a.who)+' and '+esc(b.who)+', hour by hour</caption><thead><tr><th scope="col">Time</th><th scope="col">'+esc(a.icon+' '+a.who)+'</th><th scope="col">'+esc(b.icon+' '+b.who)+'</th></tr></thead><tbody>'+times.map(function(t,i){ var locked=reached==null||reached<i; return '<tr><th scope="row">'+esc(t)+'</th><td>'+(locked?'<i>Move the sun to '+esc(t)+' first.</i>':esc(a.lines[i]||'')+' '+evBtn({k:'routine', t:a.lines[i]||'', who:a.who, when:t, where:a.where||'', from:((DATA.explore||{}).reading||{}).srcLabel||'Lesson reconstruction', ctx:((DATA.explore||{}).reading||{}).period||'', tags:[a.id,'routine'], ret:{tab:'desk', sel:'.rg-col[data-id="'+a.id+'"] .rg-col-line[data-i="'+i+'"]'}},'xs'))+'</td><td>'+(locked?'<i>Move the sun to '+esc(t)+' first.</i>':esc(b.lines[i]||'')+' '+evBtn({k:'routine', t:b.lines[i]||'', who:b.who, when:t, where:b.where||'', from:((DATA.explore||{}).reading||{}).srcLabel||'Lesson reconstruction', ctx:((DATA.explore||{}).reading||{}).period||'', tags:[b.id,'routine'], ret:{tab:'desk', sel:'.rg-col[data-id="'+b.id+'"] .rg-col-line[data-i="'+i+'"]'}},'xs'))+'</td></tr>'; }).join('')+'</tbody></table>':a&&b?'<p class="rg-todo">Choose two different people.</p>':'<p class="rg-todo">Choose two people to compare.</p>';
      var L=(PC.legal||[]).filter(function(x){ return a&&b&&x.ids.indexOf(a.id)>-1&&x.ids.indexOf(b.id)>-1; })[0];
      $('.rg-pair-legal',g).innerHTML=L?'<div class="rg-legal"><b>'+esc(L.t)+'</b> '+esc(L.d)+'</div>':'';
      var n=words(ta.value); $('.sv',g).innerHTML=n>=10&&a&&b?evBtn({k:'mine', auto:'pair', t:ta.value.trim(), who:a.who+' and '+b.who, when:'same hour', where:'', from:'My comparison notes (Desk tab)', ctx:'Compared from the lesson’s illustrative routines.', tags:[a.id,b.id,'mine','compare'], ret:{tab:'desk', sel:'#rg-pair-note'}},''):'<p class="rg-todo">📝 '+n+' of 10 words.</p>';
      g.classList.toggle('finished',done()); }
    function done(){ return !!(st.p1&&st.p2&&st.p1!==st.p2&&words(st.pnote||'')>=10); }
    [s1,s2].forEach(function(sel,k){ sel.addEventListener('change',function(){ st[k?'p2':'p1']=sel.value||null; save(); paint(); refreshPress(); SFX.paper(); }); });
    ta.addEventListener('input',function(){ st.pnote=ta.value; save(); paint(); refreshPress(); });
    paint(); R.pair={el:g,done:done,paint:paint,state:function(){ var a=col(st.p1), b=col(st.p2); return {p1:a?a.who:'', p2:b?b.who:'', note:st.pnote||''}; }}; }

  function buildModules(){
    var p1=document.getElementById('panel-dispatch'), p2=document.getElementById('panel-desk'), p4=document.getElementById('panel-press');
    var s1=DATA.scene1; if(s1&&MOD[s1.type]&&p1){ var hw=$('.herald-wrap',p1)||$('.editors-desk',p1); if(hw) R.scene1=MOD[s1.type](s1,hw); }
    var ex=DATA.explore||{};
    if(ex.reading&&MOD[ex.reading.type]&&p2){ var sec=$$('.content-section',p2)[0]; if(sec){ var hd=$('h2',sec); hide(sec); R.reading=MOD[ex.reading.type](ex.reading,sec); } }
    if(ex.evidence&&MOD[ex.evidence.type]&&p2){ var fr=$('.source-image-frame',p2), sec2=fr&&fr.closest('.content-section'); if(sec2){ hide(sec2); R.evidence=MOD[ex.evidence.type](ex.evidence,sec2); } }
    var V=DATA.vocab, wd=p2&&$('.word-desk',p2); if(V&&MOD[V.type]&&wd){ hide(wd); R.vocab=MOD[V.type](V,wd); }
    var PL=DATA.planner, ga=p4&&$('.gazette-assignment-wrap',p4); if(PL&&MOD[PL.type]&&ga){ var mark=el('span','rg rg-mark'); before(ga,mark); R.planner=MOD[PL.type](PL,mark); }
    buildAlmanac(); buildPair(); }

  /* ================================================================ THE BROADSHEET — one tab laid out as a real front page
     DATA.broadsheet = { tab, head, deck, dateline, ears:[l,r], steps:[{key, t}] }
     Masthead + lead headline + "How to read this page" index; each activity gets a numbered jump head,
     and a fold line splits the page. Nothing moves: the numbers are inserted beside what is already there. */
  var BS_FIND={
    listen:function(){ return $('#panel-desk .rg-vn[data-slot="v3"]')||(R.reading&&R.reading.el); },
    sun:function(){ return R.reading&&R.reading.el; },
    herald:function(){ return R.reading&&$('.rg-myths',R.reading.el); },
    picture:function(){ return $('#panel-desk .rg-vn[data-slot="v4"]')||(R.evidence&&R.evidence.el); },
    almanac:function(){ return R.almanac&&R.almanac.el; },
    pair:function(){ return R.pair&&R.pair.el; },
    word:function(){ return R.vocab&&R.vocab.el; },
    notebook:function(){ return $('#panel-desk .reflection-block'); } };
  var BS_DONE={
    listen:function(){ return !!(S.heard&&S.heard.v3); },
    sun:function(){ var m=S.m.sun, N=(((DATA.explore||{}).reading||{}).times||[]).length, my=(((DATA.explore||{}).reading||{}).myths||[]); return !!m&&m.stop>=N-1&&my.every(function(x,i){ return m.myth&&m.myth[i]; }); },
    herald:function(){ var m=S.m.sun, my=(((DATA.explore||{}).reading||{}).myths||[]); return !!m&&my.every(function(x,i){ return m.myth&&m.myth[i]; }); },
    picture:function(){ return !!(R.evidence&&R.evidence.done()); },
    almanac:function(){ return !!(R.almanac&&R.almanac.done()); },
    pair:function(){ return !!(R.pair&&R.pair.done()); },
    word:function(){ return !!(R.vocab&&R.vocab.done&&R.vocab.done()); },
    notebook:function(){ return ['journal-q1','journal-q2','journal-q3'].every(qDone); } };
  var bsEl=null, BS_GROUPS={}, BS_ORDER=[];
  function bsFirstOpen(){ for(var i=0;i<BS_ORDER.length;i++){ var k=BS_ORDER[i]; if(!(BS_DONE[k]&&BS_DONE[k]())) return k; } return null; }
  function bsOwner(node){ if(!node) return null; if(node.classList&&node.classList.contains('rg-bs-jump')&&BS_GROUPS[node.dataset.k]) return node.dataset.k; for(var i=0;i<BS_ORDER.length;i++){ var k=BS_ORDER[i]; if(BS_GROUPS[k].some(function(g){ return g===node||g.contains(node); })) return k; } return null; }
  function bsReveal(node){ var k=bsOwner(node); if(k&&S.m.bsOpen!==k) bsOpen(k,false); }
  function bsOpen(k,scroll){ S.m.bsOpen=k; save(); paintBsOpen(); if(scroll&&k){ var j=document.getElementById('rg-bs-'+k); if(j) setTimeout(function(){ j.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}); },40); } }
  function paintBsOpen(){ BS_ORDER.forEach(function(k){ var on=S.m.bsOpen===k, j=document.getElementById('rg-bs-'+k); if(j){ j.classList.toggle('open',on); j.classList.toggle('shut',!on); j.setAttribute('aria-expanded',on?'true':'false'); }
      BS_GROUPS[k].forEach(function(n){ n.classList.toggle('rg-bs-off',!on); }); });
    BS_ORDER.forEach(function(k){ var g=BS_GROUPS[k], bar=g[g.length-1]; if(bar&&bar.classList.contains('rg-bs-nextbar')) bar.classList.toggle('ready',!!(BS_DONE[k]&&BS_DONE[k]())); }); }
  function buildBroadsheet(){ var B=DATA.broadsheet; if(!B) return; var panel=document.getElementById('panel-'+(B.tab||'desk')); if(!panel) return;
    var steps=(B.steps||[]).filter(function(s){ return BS_FIND[s.key]&&BS_FIND[s.key](); }); if(!steps.length) return;
    panel.classList.add('rg-bs');
    var first=BS_FIND[steps[0].key]();
    bsEl=el('header','rg rg-bs-mast','<div class="ears"><div class="ear">'+esc((B.ears||[])[0]||'')+'</div><div class="name">The Republic Gazette</div><div class="ear r">'+esc((B.ears||[])[1]||'')+'</div></div>'+
      '<div class="line">'+esc(B.dateline||'')+'</div>'+
      '<div class="lead"><div class="story"><div class="kick">'+esc(B.kicker||'Today’s front page')+'</div><h2 class="hl">'+esc(B.head||'')+'</h2><p class="deck">'+esc(B.deck||'')+'</p>'+(B.lede?'<p class="lede">'+(B.place?'<b>'+esc(B.place)+' —</b> ':'')+esc(B.lede)+'</p>':'')+'</div>'+
      '<nav class="idx" aria-label="How to read this page"><div class="ih">How to read this page</div><ol>'+steps.map(function(s,i){ return '<li data-k="'+s.key+'"><a href="#rg-bs-'+s.key+'"><span class="n">'+(i+1)+'</span><span class="t">'+esc(s.t)+'</span><span class="ok" aria-label="done">✓</span></a></li>'; }).join('')+'</ol><div class="prog"></div></nav></div>');
    before(first,bsEl);
    if(B.evIntro){ var ei=el('div','rg rg-evintro','<span class="ic" aria-hidden="true">🖍</span><div><b>What you’re looking for today</b><p>'+esc(B.evIntro)+'</p><button type="button" class="rg-btn">🖍 Turn on the highlighter</button></div>'); after(bsEl,ei); $('button',ei).addEventListener('click',function(){ if(!html.classList.contains('rg-hlmode')){ var t=$('.rg-tb.hl'); if(t) t.click(); } }); }
    steps.forEach(function(s,i){ var t=BS_FIND[s.key](); if(!t) return;
      var j=el('div','rg rg-bs-jump','<span class="n">'+(i+1)+'</span><span class="t"><small>Step '+(i+1)+' of '+steps.length+'</small>'+esc(s.t)+'</span><span class="ok">✓ Done</span>'); j.id='rg-bs-'+s.key; j.dataset.k=s.key;
      if(s.fold) before(t,el('div','rg rg-bs-fold','<span>'+esc(B.fold||'Below the fold')+'</span>'));
      if(s.key==='herald'){ t.parentNode.insertBefore(j,t); } else before(t,j); });
    /* one step at a time: every panel child after a step head belongs to that step; only the open step shows */
    BS_GROUPS={}; BS_ORDER=[]; var curK=null;
    [].slice.call(panel.children).forEach(function(k){ if(k.classList.contains('rg-bs-jump')){ curK=k.dataset.k; BS_GROUPS[curK]=[]; BS_ORDER.push(curK); return; } if(curK&&!k.classList.contains('tab-next-btn-wrap')) BS_GROUPS[curK].push(k); });
    BS_ORDER.forEach(function(k,i){ var j=document.getElementById('rg-bs-'+k), g=BS_GROUPS[k]; j.setAttribute('role','button'); j.tabIndex=0; j.setAttribute('aria-controls','rg-bs-body-'+k);
      var nx=BS_ORDER[i+1], bar=el('div','rg rg-bs-nextbar',nx?'<button type="button" class="rg-btn">Next: '+esc((steps.filter(function(s){ return s.key===nx; })[0]||{}).t||'next step')+' →</button>':''); var last=g[g.length-1]||j; after(last,bar); g.push(bar);
      if(nx) $('button',bar).addEventListener('click',function(){ bsOpen(nx,true); });
      j.addEventListener('click',function(){ bsOpen(S.m.bsOpen===k?null:k,false); });
      j.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); j.click(); } }); });
    S.m.bsOpen=S.m.bsOpen!==undefined&&BS_GROUPS[S.m.bsOpen]?S.m.bsOpen:bsFirstOpen();
    bsEl.addEventListener('click',function(e){ var a=e.target.closest('a[href^="#rg-bs-"]'); if(!a) return; e.preventDefault(); var k=a.getAttribute('href').slice(7); if(!BS_GROUPS[k]) k=bsOwner(document.getElementById('rg-bs-'+k)); if(k) bsOpen(k,true); });
    paintBroadsheet();
    var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(paintBroadsheet,120); }); mo.observe(panel,{subtree:true,attributes:true,attributeFilter:['class']}); OBS.push(mo);
    panel.addEventListener('input',function(){ clearTimeout(mo.t); mo.t=setTimeout(paintBroadsheet,200); }); }
  function paintBroadsheet(){ if(!bsEl) return; var keys=$$('.idx li',bsEl).map(function(li){ return li.dataset.k; }), n=0, nextSet=false;
    keys.forEach(function(k){ var d=BS_DONE[k]?BS_DONE[k]():false; if(d) n++; var li=$('.idx li[data-k="'+k+'"]',bsEl); li.classList.toggle('done',d); li.classList.toggle('next',!d&&!nextSet); var j=document.getElementById('rg-bs-'+k); if(j){ j.classList.toggle('done',d); j.classList.toggle('next',!d&&!nextSet); } if(!d) nextSet=true;
      if(k==='herald'&&j){ var my=j.nextElementSibling; j.classList.toggle('rg-hide',!(my&&my.children.length)); } });
    paintBsOpen(); $('.prog',bsEl).innerHTML='<i style="width:'+Math.round(n/keys.length*100)+'%"></i><span>'+n+' of '+keys.length+' done</span>'; }

  /* ================================================================ THE NEWSROOM DESK (5.07.05 v6)
     One evidence drawer for the whole lesson → the student's own front page → one saved record that the proof,
     the printed edition, the Morgue, the copy/print/download exports and the notebook all read from.
     Nothing here writes the student's sentences. Selecting cards never completes the assignment. */

  /* ---- evidence kinds: say plainly what each clipping is ---- */
  var EVK={ routine:{n:'Example written for this lesson', s:'Example', d:'Based on real history, but written for this lesson. It is not a real person’s diary.'},
    source:{n:'Real source from the past', s:'Source', d:'A detail from something people really made long ago, like an old print or almanac.'},
    lesson:{n:'Fact from the lesson', s:'Lesson', d:'A fact the lesson’s authors checked and wrote for you.'},
    mine:{n:'My own notes', s:'Mine', d:'Something I noticed or wrote myself.'},
    photo:{n:'My photo', s:'Photo', d:'A photo I took of part of the lesson page.'} };
  function EV(){ if(!S.ev) S.ev=[]; return S.ev; }
  function evGet(id){ return EV().filter(function(c){ return c.id===id; })[0]; }
  function evSig(c){ return (c.k||'')+'|'+(c.who||'')+'|'+(c.t||'').trim().toLowerCase().slice(0,160); }
  function evHas(c){ var s=evSig(c); return EV().filter(function(x){ return evSig(x)===s; })[0]; }
  var EVQ={}, EVN=0;
  /* the "＋ Save as evidence" button: works the same everywhere (routines, picture, almanac, highlights, photos) */
  /* Evidence is collected with the highlighter (＋ Save as evidence on its bar). The student's own written notes go into the
     drawer by themselves (card.auto). Buttons only appear where something can't be highlighted (force). */
  function autoEv(card){ var x=EV().filter(function(c){ return c.auto===card.auto; })[0];
    if(x){ if(x.t!==card.t){ x.t=card.t; x.ctx=card.ctx||x.ctx; x.who=card.who||x.who; save(); paintEvidence(); } return x; }
    var c=addEvidence(card,true); evToast(c); return c; }
  function evBtn(card,size,force){ if(!card||!(card.t||'').trim()) return '';
    if(card.auto){ autoEv(card); return '<span class="rg-evauto">✓ This note is saved in your evidence drawer</span>'; }
    if(!force) return ''; var k='q'+(++EVN); EVQ[k]=card; var have=evHas(card);
    return '<button type="button" class="rg-evbtn'+(size?' '+size:'')+(have?' saved':'')+'" data-evq="'+k+'" aria-pressed="'+!!have+'">'+(have?'✓ In your drawer':'＋ Save as evidence')+'</button>'; }
  function addEvidence(card,quiet){ var have=evHas(card); if(have) return have;
    var c={}; for(var k in card) if(card.hasOwnProperty(k)) c[k]=card[k];
    c.id='e'+Date.now().toString(36)+Math.random().toString(36).slice(2,5); c.at=Date.now(); c.note=c.note||''; c.use=false; EV().push(c); save();
    paintEvidence(); if(!quiet){ evToast(c); SFX.paper(); beat('firstEv'); } return c; }
  function removeEvidence(id){ var c=evGet(id); if(!c) return; S.ev=EV().filter(function(x){ return x.id!==id; });
    /* the student's words stay: an attachment whose card is removed keeps its explanation and waits for a replacement */
    (D().att||[]).forEach(function(a){ if(a.ev===id){ a.ev=null; a.was=c.who+(c.when?' · '+c.when:''); } });
    save(); paintEvidence(); paintDesk(); evToast(null,'Removed from your drawer.',c); }
  function cardMeta(c){ return [c.who,c.when,c.where].filter(Boolean).join(' · '); }

  document.addEventListener('click',function(e){ var b=e.target.closest&&e.target.closest('.rg-evbtn'); if(!b||!html.classList.contains('rg-on')) return; e.preventDefault();
    var card=EVQ[b.dataset.evq]; if(!card) return; var have=evHas(card);
    if(have){ openDrawer(have.id); return; }
    addEvidence(card); $$('.rg-evbtn').forEach(function(x){ var q=EVQ[x.dataset.evq]; if(q&&evHas(q)){ x.classList.add('saved'); x.setAttribute('aria-pressed','true'); x.textContent='✓ In your drawer'; } });
    b.classList.add('pop'); setTimeout(function(){ b.classList.remove('pop'); },500); });

  /* ---- a small, honest toast when a clipping goes in (with Undo) ---- */
  var toastEl=null, toastT=null;
  function evToast(c,msg,undo){ if(!toastEl){ toastEl=el('div','rg rg-evtoast'); toastEl.setAttribute('role','status'); document.body.appendChild(toastEl); }
    toastEl.innerHTML=c?'<span class="ic">🗂</span><span><b>Saved to your evidence drawer.</b> '+esc((c.t||'').slice(0,90))+((c.t||'').length>90?'…':'')+(c.ask?'<span class="ask">🤔 '+esc(c.ask)+'</span>':'')+'</span><button type="button" data-a="open">Open drawer</button><button type="button" data-a="undo">Undo</button>':'<span class="ic">🗂</span><span>'+esc(msg||'')+'</span>'+(undo?'<button type="button" data-a="restore">Undo</button>':'');
    toastEl.onclick=function(e){ var b=e.target.closest('button'); if(!b) return; if(b.dataset.a==='open') openDrawer(c&&c.id); if(b.dataset.a==='undo'&&c){ S.ev=EV().filter(function(x){ return x.id!==c.id; }); save(); paintEvidence(); refreshEvBtns(); }
      if(b.dataset.a==='restore'&&undo){ EV().push(undo); (D().att||[]).forEach(function(a){ if(!a.ev&&a.was===undo.who+(undo.when?' · '+undo.when:'')) a.ev=undo.id; }); save(); paintEvidence(); paintDesk(); } toastEl.classList.remove('show'); };
    toastEl.classList.remove('show'); void toastEl.offsetWidth; toastEl.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(function(){ toastEl.classList.remove('show'); },c&&c.ask?11000:5200);
    var cnt=trayEl&&$('.rg-tb.roll',trayEl); if(cnt&&!RM){ cnt.classList.remove('bump'); void cnt.offsetWidth; cnt.classList.add('bump'); } }
  function refreshEvBtns(){ $$('.rg-evbtn').forEach(function(x){ var q=EVQ[x.dataset.evq]; var have=q&&evHas(q); x.classList.toggle('saved',!!have); x.setAttribute('aria-pressed',!!have); x.textContent=have?'✓ In your drawer':'＋ Save as evidence'; }); }

  /* ---- return to source: open the right tab, scroll, flash the spot ---- */
  function goSrc(ret){ if(!ret) return; closeDrawer(true); if(ret.tab&&window.switchTab&&currentScene()!==ret.tab) window.switchTab(ret.tab);
    if(ret.mod&&R[ret.mod]&&R[ret.mod].go) R[ret.mod].go(ret.arg);
    if(ret.tab==='factcheck'&&FSTEP) FSTEP(true,ret.sel&&$(ret.sel));
    if(ret.tab==='desk'&&typeof bsReveal==='function'){ var t0=ret.sel&&$(ret.sel); if(t0) bsReveal(t0); }
    setTimeout(function(){ var t=ret.sel&&$(ret.sel); if(!t){ ticker('That part of the page isn’t open yet. Keep going on that tab to reach it.'); return; }
      t.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'}); t.classList.remove('rg-srcflash'); void t.offsetWidth; t.classList.add('rg-srcflash'); setTimeout(function(){ t.classList.remove('rg-srcflash'); },2200);
      if(!t.hasAttribute('tabindex')&&!/^(BUTTON|INPUT|TEXTAREA|SELECT|A)$/.test(t.tagName)) t.setAttribute('tabindex','-1'); try{ t.focus({preventScroll:true}); }catch(x){} },RM?60:420); }

  /* ---- a card, the same in the drawer, the press tray and the attach picker ---- */
  function cardHTML(c,mode){ var K=EVK[c.k]||EVK.lesson, fit=angleFits(c), quote=!!c.quote;
    var h='<article class="rg-evc k-'+esc(c.k)+(c.use?' use':'')+(fit&&mode==='tray'?' fit':'')+'" data-id="'+esc(c.id)+'" aria-label="'+esc(K.n+': '+cardMeta(c))+'">'+
      '<div class="top"><span class="badge" title="'+esc(K.d)+'">'+esc(K.n)+'</span>'+(fit&&mode==='tray'?'<span class="fitb">fits your main idea</span>':'')+'</div>'+
      '<div class="who">'+esc(cardMeta(c)||'Clipping')+'</div>'+
      (c.img?'<img class="shot" alt="'+esc(c.t)+'" src="'+esc(c.img)+'">':'')+
      '<p class="det'+(quote?' q':'')+'">'+esc(c.t)+'</p><div class="from">'+esc(c.from||K.d)+'</div>'+(c.ask&&mode!=='pick'?'<p class="rg-evask">🤔 '+esc(c.ask)+'</p>':'');
    if(mode==='pick') return h+'</article>';
    h+=(c.ctx?'<details class="ctx"><summary>Context</summary><p>'+esc(c.ctx)+'</p></details>':'');
    if(mode==='drawer') h+='<label class="note">What could this help prove? <span>(optional)</span><textarea rows="2" data-note="'+esc(c.id)+'">'+esc(c.note||'')+'</textarea></label>';
    h+='<div class="acts">'+(mode==='tray'?'<label class="use"><input type="checkbox" data-use="'+esc(c.id)+'"'+(c.use?' checked':'')+'> Use on my front page</label>':'<button type="button" data-use="'+esc(c.id)+'" aria-pressed="'+!!c.use+'">'+(c.use?'✓ On my front page':'Use on my front page')+'</button>')+
      (c.ret?'<button type="button" data-ret="'+esc(c.id)+'">↩ Show where it came from</button>':'')+'<button type="button" class="rm" data-rm="'+esc(c.id)+'" aria-label="Remove this clipping">Remove</button></div>';
    return h+'</article>'; }

  /* ================================================================ THE DRAWER (every tab): all clippings, highlights and photos */
  var drawerEl=null, drawerOpener=null, drawerFilter='all';
  function buildDrawer(){ drawerEl=el('aside','rg rg-evdrawer'); drawerEl.setAttribute('role','dialog'); drawerEl.setAttribute('aria-modal','true'); drawerEl.setAttribute('aria-labelledby','rg-drawer-h'); drawerEl.hidden=true;
    drawerEl.innerHTML='<div class="hd"><h2 id="rg-drawer-h">🗂 Evidence drawer <span class="n"></span></h2><button type="button" class="x" aria-label="Close the evidence drawer">✕</button></div>'+
      '<p class="sub"><b>Evidence</b> is a detail that helps prove an idea. Today you are testing one idea: <i>was daily life in the colonies the same for everyone?</i> Use the 🖍 highlighter to save details that show how people’s days were the same or different. Notes you write yourself land here too. On the Go to Press tab, you’ll pick at least two and explain what each one proves.</p>'+
      '<div class="flt" role="group" aria-label="Show">'+[['all','All'],['routine','Examples'],['source','Real sources'],['lesson','Lesson facts'],['mine','My notes'],['photo','Photos']].map(function(f){ return '<button type="button" data-f="'+f[0]+'" aria-pressed="'+(f[0]==='all')+'">'+f[1]+'</button>'; }).join('')+'</div>'+
      '<div class="list"></div><div class="more"></div>';
    document.body.appendChild(drawerEl);
    $('.x',drawerEl).addEventListener('click',function(){ closeDrawer(); });
    drawerEl.addEventListener('keydown',function(e){ if(e.key==='Escape'){ e.stopPropagation(); closeDrawer(); } if(e.key==='Tab') trapTab(e,drawerEl); });
    drawerEl.addEventListener('click',onCardClick); drawerEl.addEventListener('input',onCardInput); drawerEl.addEventListener('change',onCardInput);
    $('.flt',drawerEl).addEventListener('click',function(e){ var b=e.target.closest('button[data-f]'); if(!b) return; drawerFilter=b.dataset.f; $$('.flt button',drawerEl).forEach(function(x){ x.setAttribute('aria-pressed',x===b); }); paintDrawer(); }); }
  function openDrawer(focusId){ if(!drawerEl) return; drawerOpener=document.activeElement; drawerEl.hidden=false; html.classList.add('rg-evdrawer-open'); paintDrawer(); requestAnimationFrame(function(){ drawerEl.classList.add('open'); var t=focusId&&$('.rg-evc[data-id="'+focusId+'"]',drawerEl); if(t){ t.scrollIntoView({block:'center'}); t.classList.add('rg-srcflash'); var b=$('button',t); if(b) b.focus(); } else $('.x',drawerEl).focus(); }); }
  function closeDrawer(noFocus){ if(!drawerEl||drawerEl.hidden) return; drawerEl.classList.remove('open'); html.classList.remove('rg-evdrawer-open'); setTimeout(function(){ drawerEl.hidden=true; },RM?0:220); if(!noFocus&&drawerOpener&&drawerOpener.focus) try{ focusBack(drawerOpener); }catch(e){} }
  function trapTab(e,box){ var f=$$('button:not([disabled]),input,textarea,select,summary,a[href],[tabindex="0"]',box).filter(function(x){ return x.offsetParent!==null; }); if(!f.length) return; var a=f[0], z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){ e.preventDefault(); z.focus(); } else if(!e.shiftKey&&document.activeElement===z){ e.preventDefault(); a.focus(); } }
  function paintDrawer(){ if(!drawerEl||drawerEl.hidden) return; var all=EV(), list=all.filter(function(c){ return drawerFilter==='all'||c.k===drawerFilter; });
    $('.n',drawerEl).textContent='('+all.length+')';
    $('.list',drawerEl).innerHTML=list.length?list.slice().reverse().map(function(c){ return cardHTML(c,'drawer'); }).join(''):'<p class="rg-empty">'+(all.length?'Nothing of this kind yet.':'Your drawer is empty. To save evidence, tap 🧰 Tools at the bottom right, then 🖍 Highlight, drag across a detail, and tap <b>＋ Save as evidence</b>. Notes you write yourself are saved here too.')+'</p>';
    var H=highlights(), ph=photos(), hs=H.filter(function(h){ return !evHas(hlCard(h)); }), ps=ph.filter(function(p){ return !evHas(photoCard(p)); });
    $('.more',drawerEl).innerHTML=(hs.length||ps.length)?'<h3>Not in the drawer yet</h3>'+hs.map(function(h){ return '<div class="rg-loose"><span>🖍 “'+esc(h.t)+'” <small>'+esc(h.where||'')+'</small></span>'+evBtn(hlCard(h),'xs')+'</div>'; }).join('')+ps.map(function(p){ return '<div class="rg-loose"><img alt="" src="'+p.src+'"><span>'+esc(p.cap||'(no caption)')+'</span>'+evBtn(photoCard(p),'xs')+'</div>'; }).join(''):'';
    var nb=$('.rg-nbbtn',drawerEl); if(!nb){ nb=el('button','rg-btn alt rg-nbbtn','📓 Open my Reporter’s Notebook (print or save as PDF)'); nb.type='button'; nb.addEventListener('click',notebook); drawerEl.appendChild(nb); } }
  function hlCard(h){ if(h.meta){ var m={}; for(var q in h.meta) m[q]=h.meta[q]; m.t=h.t; m.ret={tab:h.meta.tab, sel:'mark[data-hl="'+h.id+'"]'}; m.hl=h.id; return m; } var k=/Tab 2/.test(h.where||'')?'routine':'lesson'; return {k:k, t:h.t, who:'Highlighted words', when:'', where:'', from:'Highlighted from '+(h.where||'the lesson')+(k==='routine'?' (lesson reconstruction or explanation)':''), ctx:'', tags:['highlight'], ret:{tab:/Tab 2/.test(h.where||'')?'desk':/Tab 3/.test(h.where||'')?'factcheck':/Tab 4/.test(h.where||'')?'press':'dispatch', sel:'mark[data-hl="'+h.id+'"]'}}; }
  function photoCard(p){ return {k:'photo', t:p.cap||'A photo from the lesson page', who:'My photo', when:'', where:'', from:'Photo I took of the lesson page'+(p.tab?' ('+p.tab+' tab)':''), ctx:'', img:p.src, pt:p.t, tags:['photo'], ret:p.tab?{tab:p.tab, sel:'.tab-panel.active'}:null}; }
  function onCardClick(e){ var b=e.target.closest('button'); if(!b) return;
    if(b.dataset.ret){ var c=evGet(b.dataset.ret); if(c) goSrc(c.ret); return; }
    if(b.dataset.rm){ removeEvidence(b.dataset.rm); return; }
    if(b.dataset.use){ var c2=evGet(b.dataset.use); if(c2){ c2.use=!c2.use; save(); paintEvidence(); paintDesk(); var nb=$('button[data-use="'+c2.id+'"]',drawerEl); if(nb) nb.focus(); } } }
  function onCardInput(e){ var t=e.target; if(t.dataset.note){ var c=evGet(t.dataset.note); if(c){ c.note=t.value; save(); } return; }
    if(t.dataset.use&&t.type==='checkbox'){ var c2=evGet(t.dataset.use); if(c2){ c2.use=t.checked; save(); paintEvidence(true); paintDesk(); } } }

  /* ================================================================ save status, quiet newsroom, one-tab-at-a-time */
  function paintSave(){ var s=pressEl&&$('.rg-savest',pressEl); if(!s) return; var t=new Date(SAVE_ST.at||Date.now()), hh=t.getHours()%12||12, mm=('0'+t.getMinutes()).slice(-2);
    s.className='rg-savest '+(FROZEN?'frozen':SAVE_ST.ok?'ok':'bad'); s.textContent=FROZEN?'⚠ Not saving here (open in another tab)':SAVE_ST.ok?(SAVE_ST.at?'✓ Saved '+hh+':'+mm:'✓ Saved'):'⚠ Not saved on this device'; s.title=SAVE_ST.ok?'Your work is saved in this browser on this computer.':'This browser is not letting the lesson save. Your work stays only while this page is open. Copy your submission before you leave.'; }
  function quiet(){ return !!(P&&P.quiet); }
  function setQuiet(on){ if(!P) P={name:''}; P.quiet=!!on; var p=get(PKEY,{})||{}; p.quiet=!!on; put(PKEY,p); var b=$('.rg-tb.quiet'); if(b){ b.setAttribute('aria-pressed',!!on); b.setAttribute('aria-label',on?'Sounds are off (quiet newsroom). Turn sounds on':'Sounds are on. Turn sounds off'); b.innerHTML=(on?'🔕':'🔔')+'<span>'+(on?'Quiet':'Sounds')+'</span>'; } }
  function buildNewsroomBar(){ if(!pressEl) return; var r=$('.rg-press-r',pressEl); if(!r) return;
    var ev=el('button','rg-evcount','🗂 <span class="l">Evidence</span> <b>0</b>'); ev.type='button'; ev.title='Open your evidence drawer'; ev.addEventListener('click',function(){ openDrawer(); });
    var q=el('button','rg-quietbtn',''); q.type='button'; q.title='Turn the newsroom’s small sound effects on or off. Ms. Avery’s voice still plays when you press play.'; q.addEventListener('click',function(){ setQuiet(!quiet()); });
    var sv=el('span','rg-savest'); sv.setAttribute('role','status');
    $('.rg-press-top',pressEl).appendChild(sv); if(trayEl){ q.className='rg-tb quiet'; trayEl.appendChild(q); } setQuiet(quiet()); paintSave(); }
  window.addEventListener('storage',function(e){ if(!html.classList.contains('rg-on')) return;
    if(e.key===CKEY){ var cur=get(CKEY,null); if(cur) C=mergeCourse(cur,C); try{ paintMorgue(false); }catch(x){} return; }
    if(e.key===KEY&&!FROZEN){ FROZEN=true; paintSave(); var b=el('div','rg rg-frozen','<b>This lesson is open in another tab or window.</b> To keep your work safe, this tab stopped saving. <button type="button">Reload this tab</button>'); b.setAttribute('role','alert'); $('button',b).addEventListener('click',function(){ location.reload(); }); document.body.appendChild(b); } });

  /* ================================================================ ONE AUDIO AT A TIME (memos, note clips, the page's Read aloud) */
  var AUDS=[];
  function hush(keep){ AUDS.forEach(function(a){ if(a!==keep&&!a.paused) a.pause(); }); Object.keys(SAY).forEach(function(k){ var a=SAY[k]; if(a&&a!==keep&&!a.paused){ a.pause(); if(SAYNOW===k){ SAYNOW=null; paintSay(); } } });
    $$('.rg-vn.playing').forEach(function(n){ if(n.__stop&&(!keep||n.__aud!==keep)) n.__stop(); }); try{ if(keep&&window.speechSynthesis) window.speechSynthesis.cancel(); }catch(e){} }
  document.addEventListener('click',function(e){ if(e.target.closest&&e.target.closest('#optima-read-aloud button')) hush(null); },true);
  document.addEventListener('play',function(e){ if(e.target&&e.target.tagName==='AUDIO'||e.target instanceof Audio) hush(e.target); },true);

  /* ================================================================ FACT-CHECK: saved answers + two harder claims */
  function fcOpts(q){ return $$('.factcheck-option',q); }
  function restoreQuiz(){ var F=S.fc||{}; Object.keys(F).forEach(function(id){ var q=document.getElementById(id); if(!q||q.querySelector('.factcheck-option.correct, .factcheck-option.incorrect')) return; var o=fcOpts(q)[F[id].i]; if(!o) return; RESTORING=true; try{ window.checkAnswer(id,o,!!F[id].ok); }catch(e){} RESTORING=false; }); }
  function kbdQuiz(){ $$('#panel-factcheck .factcheck-options').forEach(function(g){ g.setAttribute('role','group'); fcOpts(g).forEach(function(o){ if(!o.hasAttribute('tabindex')) o.setAttribute('tabindex','0'); o.setAttribute('role','button'); o.setAttribute('aria-pressed',o.classList.contains('correct')||o.classList.contains('incorrect')?'true':'false');
      if(o.classList.contains('disabled')) o.setAttribute('aria-disabled','true'); if(!o.__kb){ o.__kb=1; o.addEventListener('keydown',function(e){ if((e.key==='Enter'||e.key===' ')&&!o.classList.contains('disabled')){ e.preventDefault(); o.click(); } }); } }); }); }
  var CC=DATA.claimChecks||[];
  function ccDone(){ var A=S.cc||{}; return CC.every(function(c){ var a=A[c.id]||{}; var v=(c.verdicts||[]).filter(function(x){ return x.k===a.v; })[0], d=(c.details||[])[a.d]; return v&&v.ok&&d&&d.ok&&words(a.why||'')>=8; }); }
  function buildClaims(){ if(!CC.length) return; var p=document.getElementById('panel-factcheck'), sc=document.getElementById('factcheckScore'); if(!p||!sc) return; S.cc=S.cc||{};
    var box=el('section','rg rg-game rg-claims'); box.dataset.tab='Issue '+ISSUE+' · Editor’s call';
    box.innerHTML='<div class="rg-game-k">Fact-Check · the editor’s call</div><h3 class="rg-game-t">'+esc((DATA.claimIntro||{}).title||'Two harder claims')+'</h3><p class="rg-todo">'+esc((DATA.claimIntro||{}).todo||'For each claim: decide if it is supported, misleading, or if there is not enough evidence. Then choose the detail that helps you decide, and explain the connection in your own words.')+'</p>'+
      CC.map(function(c,ci){ var A=S.cc[c.id]||{}; return '<div class="rg-cc" data-c="'+esc(c.id)+'"><div class="clip"><span class="h">'+esc(c.by||'The Hasty Herald')+'</span><p>“'+esc(c.claim)+'”</p></div>'+
        '<fieldset><legend><span class="n">1</span> Your call</legend>'+(c.verdicts||[]).map(function(v){ return '<label class="rg-radio"><input type="radio" name="cc-'+esc(c.id)+'-v" value="'+esc(v.k)+'"'+(A.v===v.k?' checked':'')+'> '+esc(v.t)+'</label>'; }).join('')+'<div class="fb v" aria-live="polite"></div></fieldset>'+
        '<fieldset class="det"><legend><span class="n">2</span> Which detail helps you decide?</legend>'+(c.details||[]).map(function(d,i){ return '<label class="rg-radio"><input type="radio" name="cc-'+esc(c.id)+'-d" value="'+i+'"'+(A.d===i?' checked':'')+'> <span><b>'+esc(d.from)+'</b> '+esc(d.t)+'</span></label>'; }).join('')+'<div class="fb d" aria-live="polite"></div></fieldset>'+
        '<div class="why"><label for="cc-'+esc(c.id)+'-why"><span class="n">3</span> <b>Explain the connection.</b> '+esc(c.whyQ||'How does that detail show whether the claim is right?')+'</label><textarea id="cc-'+esc(c.id)+'-why" rows="3">'+esc(A.why||'')+'</textarea><div class="wcl"></div></div></div>'; }).join('');
    after(sc,box);
    function paintOne(c){ var A=S.cc[c.id]||{}, w=$('.rg-cc[data-c="'+c.id+'"]',box), v=(c.verdicts||[]).filter(function(x){ return x.k===A.v; })[0], d=(c.details||[])[A.d];
      $('.fb.v',w).innerHTML=v?'<p class="'+(v.ok?'ok':'no')+'">'+(v.ok?'✓ ':'Not quite. ')+esc(v.say)+'</p>':''; $('.fb.d',w).innerHTML=d?'<p class="'+(d.ok?'ok':'no')+'">'+(d.ok?'✓ ':'Look again. ')+esc(d.say)+'</p>':'';
      var n=words(A.why||''); $('.wcl',w).innerHTML=n>=8?'✓ '+n+' words. '+evBtn({k:'mine', auto:'claim-'+c.id, t:A.why, who:'My fact-check', when:'', where:'', from:'My explanation on the Fact-Check tab', ctx:'Claim: “'+c.claim+'”'+(d?' · Detail: '+d.t:''), tags:['factcheck','mine'], ret:{tab:'factcheck', sel:'#cc-'+c.id+'-why'}},'xs'):'📝 '+n+' of 8 words.';
      w.classList.toggle('done',!!(v&&v.ok&&d&&d.ok&&n>=8)); }
    box.addEventListener('change',function(e){ var t=e.target, w=t.closest('.rg-cc'); if(!w) return; var c=CC.filter(function(x){ return x.id===w.dataset.c; })[0], A=S.cc[c.id]=S.cc[c.id]||{tries:0};
      if(/-v$/.test(t.name)){ A.v=t.value; A.tries=(A.tries||0)+1; var v=(c.verdicts||[]).filter(function(x){ return x.k===A.v; })[0]; v&&v.ok?SFX.chime():SFX.bounce(); }
      if(/-d$/.test(t.name)){ A.d=+t.value; }
      save(); paintOne(c); refreshPress(); paintReady(); });
    box.addEventListener('input',function(e){ var t=e.target; if(t.tagName!=='TEXTAREA') return; var w=t.closest('.rg-cc'), c=CC.filter(function(x){ return x.id===w.dataset.c; })[0], A=S.cc[c.id]=S.cc[c.id]||{}; A.why=t.value; save(); paintOne(c); refreshPress(); paintReady(); });
    CC.forEach(paintOne); }

  /* ================================================================ GO TO PRESS: the evidence tray + the student's own front page */
  function D(){ if(!S.d) S.d={att:[],rev:{},self:{}}; S.d.att=S.d.att||[]; S.d.rev=S.d.rev||{}; S.d.self=S.d.self||{}; return S.d; }
  var NW=DATA.newsroom||{}, PARAS=NW.paras||[];
  var ABS=/\b(everyone|everybody|all|always|never|nobody|no one|every|only)\b/i;
  var deskEl=null;
  function angle(){ return R.planner&&R.planner.angle?R.planner.angle():null; }
  function angleFits(c){ var a=angle(); if(!a||!a.fit||!c.tags) return false; return c.tags.some(function(t){ return a.fit.indexOf(t)>-1; }); }
  function baseVal(id){ var t=document.getElementById(id); return t?t.value:''; }
  function setBase(id,v){ var t=document.getElementById(id); if(!t||t.value===v) return; t.value=v; try{ localStorage.setItem((window._lessonKey||'')+'-'+id,v); }catch(e){} }
  function syncBase(){ var d=D(); setBase('brief-headline',d.head||''); setBase('brief-byline-name',d.by||''); setBase('brief-body',[d.cmp,d.exp].filter(function(x){ return (x||'').trim(); }).join('\n\n')+((d.cap||'').trim()?'\n\nAbout our source: '+d.cap.trim():'')); }
  function migrate(){ var d=D(); if(d.migrated) return; d.migrated=1; d.head=d.head||baseVal('brief-headline'); d.by=d.by||baseVal('brief-byline-name')||nm(); if(!d.cmp&&baseVal('brief-body').trim()) d.cmp=baseVal('brief-body'); save(); }
  function secHTML(p,i){ return '<section class="rg-nd-sec" data-p="'+p.k+'"><div class="lab"><span class="n">'+(i+1)+'</span><label for="rg-f-'+p.k+'">'+esc(p.t)+'</label>'+(p.opt?'<i>optional</i>':'')+'</div><p class="ask" id="rg-ask-'+p.k+'">'+esc(p.ask)+'</p>'+
    '<div class="aids"><details class="notes"><summary>📒 Your notes from earlier</summary><div class="nl"></div></details>'+(p.starters?'<details class="starters"><summary>✏️ Need help starting? (optional)</summary><p class="ex">These are the first few words of a sentence, not answers. Tap one, then finish the sentence in your own words.</p><div class="sl"></div></details>':'')+'</div>'+
    '<textarea id="rg-f-'+p.k+'" rows="'+(p.rows||4)+'" aria-describedby="rg-ask-'+p.k+'" placeholder="'+esc(p.ph||'Write here in your own words.')+'"></textarea><div class="wcn" aria-live="polite"></div><div class="rev"></div>'+
    (p.ev?'<div class="att"></div><button type="button" class="rg-nd-attach" data-p="'+p.k+'" aria-expanded="false">＋ Add evidence to this part</button>'+findHTML(p.k)+'<div class="pick" hidden></div>':'')+'</section>'; }
  function buildDesk(){ var p=document.getElementById('panel-press'), ga=p&&$('.gazette-assignment-wrap',p); if(!ga||!PARAS.length) return; migrate();
    hide(ga); deskEl=el('section','rg rg-nd'); deskEl.id='rg-nd';
    var herald=(DATA.redpencil||{}).claim||(($('.herald-claim')||{}).textContent||'').replace(/^[\s“"]+|[\s”"]+$/g,'');
    deskEl.innerHTML='<div class="rg-nd-hd"><div class="rg-game-k">Go to Press · build your front page</div><h3 class="rg-game-t">'+esc(NW.title||'Your front page')+'</h3>'+(NW.job?jobHTML(NW.job):'<p class="rg-todo">'+esc(NW.todo||'')+'</p>')+'</div>'+
      '<div class="rg-nd-grid"><aside class="rg-nd-tray" aria-labelledby="rg-tray-h"><button type="button" class="rg-nd-trayt" aria-expanded="true" aria-controls="rg-tray-body"><span id="rg-tray-h">🗂 Evidence tray</span> <b class="cnt"></b></button><div id="rg-tray-body"><div class="fit"></div><div class="list"></div><p class="foot">'+esc(NW.trayFoot||'')+'</p><button type="button" class="rg-btn alt open">Open the full drawer</button></div></aside>'+
      '<article class="rg-nd-paper" aria-label="Front page proof"><div class="mast">The Republic Gazette</div><div class="ed"><span>Vol. I · Issue '+esc(ISSUE)+' · Philadelphia</span><span class="st">Draft (not printed yet)</span></div>'+
      '<div class="mode" role="group" aria-label="Proof view"><button type="button" data-m="edit" aria-pressed="true">✏️ Write</button><button type="button" data-m="read" aria-pressed="false">👁 Read it like a reader</button></div>'+
      '<div class="edit"><div class="rg-nd-sec head"><label for="rg-f-head" class="lab">Headline <i>your own words</i></label><input id="rg-f-head" class="hl" maxlength="90" placeholder="Write your own headline"><div class="ideas"></div><div class="rev"></div></div>'+
      '<div class="by"><label for="rg-f-by">By</label> <input id="rg-f-by" maxlength="40" placeholder="your name"> <span>· Junior Editor</span><small>The <b>byline</b> tells who wrote the story.</small></div>'+
      PARAS.map(secHTML).join('')+
      '<section class="rg-nd-sec cor" data-p="cor"><div class="lab"><span class="n">'+(PARAS.length+1)+'</span><label for="rg-f-cor">Correction</label></div><div class="herald"><span class="h">The Hasty Herald printed:</span> “'+esc(herald)+'”</div><p class="ask" id="rg-ask-cor">'+esc(NW.corAsk||'Write the correction in one or two sentences. What is true instead?')+'</p><textarea id="rg-f-cor" rows="2" aria-describedby="rg-ask-cor" placeholder="Correction: …"></textarea><div class="wcn" aria-live="polite"></div></section></div>'+
      '<div class="read" hidden></div></article></div>';
    after(ga,deskEl);
    var d=D(); $('#rg-f-head',deskEl).value=d.head||''; $('#rg-f-by',deskEl).value=d.by||''; PARAS.forEach(function(q){ $('#rg-f-'+q.k,deskEl).value=d[q.k]||''; }); $('#rg-f-cor',deskEl).value=d.cor||'';
    deskEl.addEventListener('input',onDeskInput); deskEl.addEventListener('click',onDeskClick); deskEl.addEventListener('change',onCardInput);
    $('.rg-nd-tray',deskEl).addEventListener('click',onCardClick);
    $('.rg-nd-trayt',deskEl).addEventListener('click',function(){ var o=this.getAttribute('aria-expanded')!=='true'; this.setAttribute('aria-expanded',o); $('#rg-tray-body',deskEl).hidden=!o; });
    $('.open',deskEl).addEventListener('click',function(){ openDrawer(); });

    paintDesk(); }
  function onDeskInput(e){ var t=e.target, d=D();
    if(t.id==='rg-f-head') d.head=t.value; else if(t.id==='rg-f-by') d.by=t.value; else if(t.id==='rg-f-cor') d.cor=t.value;
    else if(t.id&&t.id.indexOf('rg-f-')===0) d[t.id.slice(5)]=t.value;
    else if(t.dataset.why){ var a=d.att.filter(function(x){ return x.id===t.dataset.why; })[0]; if(a) a.why=t.value; }
    else if(t.dataset.keep){ d.rev[t.dataset.keep]=d.rev[t.dataset.keep]||{}; d.rev[t.dataset.keep].why=t.value; }
    else return;
    save(); syncBase(); paintDeskLight(); }
  function onDeskClick(e){ var b=e.target.closest('button'); if(!b) return; var d=D();
    if(b.dataset.find){ var F=((EH.find||{})[b.dataset.find]||{}).go||[], g=F[+b.dataset.i]; if(g) goSrc(g); return; }
    if(b.dataset.m){ $$('.mode button',deskEl).forEach(function(x){ x.setAttribute('aria-pressed',x===b); }); var rd=b.dataset.m==='read'; $('.edit',deskEl).hidden=rd; $('.read',deskEl).hidden=!rd; if(rd) $('.read',deskEl).innerHTML=editionHTML(record(),true); return; }
    if(b.classList.contains('rg-nd-attach')){ var pk=$('.pick',b.parentNode), o=pk.hidden; $$('.pick',deskEl).forEach(function(x){ x.hidden=true; }); $$('.rg-nd-attach',deskEl).forEach(function(x){ x.setAttribute('aria-expanded','false'); }); if(o){ pk.innerHTML=pickHTML(b.dataset.p); pk.hidden=false; b.setAttribute('aria-expanded','true'); var f=$('button',pk); if(f) f.focus(); } return; }
    if(b.dataset.pick){ var p=b.dataset.p, c=evGet(b.dataset.pick); if(!c) return; c.use=true; var rep=b.dataset.rep, a;
      if(rep){ a=d.att.filter(function(x){ return x.id===rep; })[0]; if(a){ a.ev=c.id; a.was=null; } } else { a={id:'a'+Date.now().toString(36), ev:c.id, p:p, why:''}; d.att.push(a); }
      save(); SFX.paper(); var pk2=b.closest('.pick'); pk2.hidden=true; paintDesk(); paintEvidence(); var w=$('textarea[data-why="'+a.id+'"]',deskEl); if(w){ w.focus(); var ch=w.closest('.rg-att'); if(ch&&!RM){ ch.classList.add('new'); setTimeout(function(){ ch.classList.remove('new'); },900); } } return; }
    if(b.dataset.unatt){ d.att=d.att.filter(function(x){ return x.id!==b.dataset.unatt; }); save(); paintDesk(); return; }
    if(b.dataset.replace){ var a2=d.att.filter(function(x){ return x.id===b.dataset.replace; })[0]; if(!a2) return; var sec=b.closest('.rg-nd-sec'), pk3=$('.pick',sec); pk3.innerHTML=pickHTML(a2.p,a2.id); pk3.hidden=false; var f2=$('button',pk3); if(f2) f2.focus(); return; }
    if(b.dataset.src){ var c3=evGet(b.dataset.src); if(c3) goSrc(c3.ret); return; }
    if(b.dataset.start){ var p2=b.dataset.p, ta=$('#rg-f-'+p2,deskEl), txt=b.dataset.start; ta.value=(ta.value&&!/\s$/.test(ta.value)?ta.value+' ':ta.value)+txt+' '; d[p2]=ta.value; save(); syncBase(); ta.focus(); try{ ta.setSelectionRange(ta.value.length,ta.value.length); }catch(x){} b.classList.add('used'); paintDeskLight(); return; }
    if(b.dataset.idea){ var hi=$('#rg-f-head',deskEl); if(!hi.value.trim()||b.dataset.force){ hi.value=b.dataset.idea; d.head=hi.value; save(); syncBase(); paintDeskLight(); } hi.focus(); hi.select(); return; }
    if(b.dataset.revise){ var rp=b.dataset.revise, ta2=$('#rg-f-'+rp,deskEl), m=ta2&&ABS.exec(ta2.value); d.rev[rp]={w:m?m[1]:'',state:'revising'}; save(); paintRev(); if(ta2){ ta2.focus(); if(m) try{ ta2.setSelectionRange(m.index,m.index+m[1].length); }catch(x){} } return; }
    if(b.dataset.keepit){ var kp=b.dataset.keepit; d.rev[kp]=d.rev[kp]||{}; d.rev[kp].state='keep'; save(); paintRev(); var kin=$('input[data-keep="'+kp+'"]',deskEl); if(kin) kin.focus(); return; } }
  function pickHTML(p,rep){ var all=EV(), use=all.filter(function(c){ return c.use; }), rest=all.filter(function(c){ return !c.use; });
    if(!all.length) return '<p class="rg-empty">Your drawer is empty. Go back to the Desk tab, highlight useful details, and tap <b>＋ Save as evidence</b>.</p>';
    function row(c){ return '<li><button type="button" data-pick="'+esc(c.id)+'" data-p="'+esc(p)+'"'+(rep?' data-rep="'+esc(rep)+'"':'')+'>'+cardHTML(c,'pick')+'</button></li>'; }
    return '<div class="ph">'+(rep?'Swap it for…':'Which saved detail do you want to add?')+'</div>'+(use.length?'<div class="gl">In your report</div><ul>'+use.map(row).join('')+'</ul>':'')+(rest.length?'<div class="gl">More in your drawer</div><ul>'+rest.map(row).join('')+'</ul>':''); }
  /* light paint: counts, readiness, revision prompts — never rebuilds the text boxes, so typing never loses focus */
  function paintDeskLight(){ if(!deskEl) return; var d=D();
    PARAS.concat([{k:'cor',min:NW.corMin||8}]).forEach(function(q){ var w=$('.rg-nd-sec[data-p="'+q.k+'"] .wcn',deskEl); if(!w) return; var n=words(d[q.k]||''); w.className='wcn'+(n>=(q.min||0)?' ok':''); w.textContent=q.min?(n>=q.min?'✓ '+n+' words':'📝 '+n+' of '+q.min+' words'):n+' words'; });
    paintRev(); paintReady(); if(!$('.read',deskEl).hidden) $('.read',deskEl).innerHTML=editionHTML(record(),true); if(S.pub){ clearTimeout(paintDeskLight.t); paintDeskLight.t=setTimeout(paintEdition,400); } }
  function paintDesk(){ if(!deskEl) return; var d=D(), ev=EV(), use=ev.filter(function(c){ return c.use; });
    $('.rg-nd-tray .cnt',deskEl).textContent=ev.length+' saved · '+use.length+' in use';
    var a=angle(); $('.rg-nd-tray .fit',deskEl).innerHTML=a?'<p><b>Your main idea (angle):</b> '+esc(a.t)+(a.fitTip?'<br><small>'+esc(a.fitTip)+'</small>':'')+'</p>':'<p><small>Choose your main idea in step 1, and the tray will show which saved details fit it best.</small></p>';
    var fk=document.activeElement&&deskEl.contains(document.activeElement)&&document.activeElement.dataset.use;
    $('.rg-nd-tray .list',deskEl).innerHTML=ev.length?ev.slice().sort(function(x,y){ return (angleFits(y)?1:0)-(angleFits(x)?1:0); }).map(function(c){ return cardHTML(c,'tray'); }).join(''):'<p class="rg-empty">Nothing saved yet. On the Desk tab, tap 🧰 Tools, then 🖍 Highlight, drag across a detail that shows how people’s days were different, then tap <b>＋ Save as evidence</b>.</p>';
    if(fk){ var fe=$('input[data-use="'+fk+'"]',deskEl); if(fe) fe.focus(); }
    var ideas=(a&&a.ideas)||NW.ideas||[]; $('.head .ideas',deskEl).innerHTML=ideas.length?'<span class="k">Headline ideas <i>(examples: change them to make them yours)</i></span>'+ideas.map(function(t){ return '<button type="button" data-idea="'+esc(t)+'">'+esc(t)+'</button>'; }).join(''):'';
    var notes=earlierNotes();
    PARAS.forEach(function(q){ var sec=$('.rg-nd-sec[data-p="'+q.k+'"]',deskEl); var nl=$('.nl',sec), sl=$('.sl',sec), att=$('.att',sec);
      var mine=notes.filter(function(n){ return !q.notes||q.notes.indexOf(n.k)>-1; });
      nl.innerHTML=mine.length?mine.map(function(n){ return '<div class="rg-pn"><b>'+esc(n.l)+'</b><p>'+esc(n.t)+'</p></div>'; }).join(''):'<p class="rg-empty">No notes for this part yet.</p>'; $('summary',$('.notes',sec)).textContent='📒 Your notes from earlier ('+mine.length+')';
      if(sl) sl.innerHTML=starters(q).map(function(t){ return '<button type="button" data-start="'+esc(t)+'" data-p="'+q.k+'">'+esc(t)+' …</button>'; }).join('');
      if(att){ var A=d.att.filter(function(x){ return x.p===q.k; }); att.innerHTML=A.map(function(x){ var c=evGet(x.ev), n=markerNo(x.id), K=c?(EVK[c.k]||EVK.lesson):null;
          return '<div class="rg-att'+(c?'':' gone')+'"><span class="mk" aria-hidden="true">'+n+'</span><div class="b">'+(c?'<div class="t"><b>'+esc(cardMeta(c))+'</b> <span class="badge">'+esc(K.n)+'</span></div><p class="det">'+esc(c.t)+'</p>':'<div class="t"><b>Clipping removed</b>'+(x.was?' ('+esc(x.was)+')':'')+'. Your explanation is kept below. Attach a replacement.</div>')+
            '<label>What does this detail help prove? <i>(your own words)</i><textarea rows="2" data-why="'+esc(x.id)+'">'+esc(x.why||'')+'</textarea></label><div class="acts">'+(c&&c.ret?'<button type="button" data-src="'+esc(c.id)+'">↩ Show where it came from</button>':'')+'<button type="button" data-replace="'+esc(x.id)+'">⇄ Replace</button><button type="button" data-unatt="'+esc(x.id)+'">Take it off</button></div></div></div>'; }).join(''); } });
    paintDeskLight(); }
  function markerNo(aid){ var d=D(), order=[]; PARAS.forEach(function(q){ d.att.forEach(function(a){ if(a.p===q.k) order.push(a.id); }); }); return order.indexOf(aid)+1; }
  function starters(q){ var a=angle(), pr=R.planner&&R.planner.pair?R.planner.pair():[], f=R.planner&&R.planner.factors?R.planner.factors():[];
    function low(t){ return t?t.charAt(0).toLowerCase()+t.slice(1):''; }
    return (q.starters||[]).map(function(t){ return t.replace(/\{p1\}/g,pr[0]?low(pr[0].who):'one person').replace(/\{p2\}/g,pr[1]?low(pr[1].who):'another person').replace(/\{f\}/g,f.length?f.map(low).join(' and '):'…'); }); }
  function earlierNotes(){ var out=[], push=function(k,l,t){ if((t||'').trim()) out.push({k:k,l:l,t:t.trim()}); };
    var pz=R.pair&&R.pair.state?R.pair.state():null; if(pz) push('pair','Desk · comparing '+pz.p1+' and '+pz.p2,pz.note);
    $$('.reflection-textarea').forEach(function(t,i){ push('journal'+(i+1),'Notebook · '+(t.dataset.label||('Question '+(i+1))),t.value); });
    var rp=R.evidence&&R.evidence.state?R.evidence.state():null; if(rp){ push('notice','Source desk · what I noticed',rp.notice); push('date','Source desk · made vs. shown',rp.dateExp); push('limit','Source desk · what the picture can’t show',rp.limitation); }
    (CC||[]).forEach(function(c){ var A=(S.cc||{})[c.id]; if(A&&A.why) push('claims','Fact-Check · '+c.claim.slice(0,50)+'…',A.why); });
    EV().filter(function(c){ return (c.note||'').trim(); }).forEach(function(c){ push('cardnotes','Drawer note · '+cardMeta(c),c.note); });
    return out; }
  /* the one editorial revision prompt: a sweeping word, kept with a reason or revised. It never grades. */
  function paintRev(){ if(!deskEl) return; var d=D(); ['head'].concat(PARAS.map(function(q){ return q.k; })).forEach(function(k){ var sec=k==='head'?$('.rg-nd-sec.head',deskEl):$('.rg-nd-sec[data-p="'+k+'"]',deskEl); if(!sec) return; var box=$('.rev',sec); if(!box) return;
      var v=d[k]||'', m=ABS.exec(v), r=d.rev[k]||{};
      if(!m){ if(r.w&&r.state!=='revised'){ r.state='revised'; d.rev[k]=r; save(); if(!RM){ box.classList.add('fixed'); setTimeout(function(){ box.classList.remove('fixed'); },1200); } }
        box.innerHTML=r.state==='revised'?'<p class="rg-revok">✓ Revised. Careful wording is a kind of honesty.</p>':''; return; }
      if(!r.w||r.w.toLowerCase()!==m[1].toLowerCase()){ r={w:m[1],state:'open'}; d.rev[k]=r; save(); beat('revisePrompt'); }
      if(r.state==='keep'){ var n=words(r.why||''); if(!$('input[data-keep="'+k+'"]',box)) box.innerHTML='<div class="rg-redmark keep"><b>✏ Keeping “'+esc(r.w)+'”.</b> <label>Why does your evidence support that word? <input data-keep="'+k+'" maxlength="160" value="'+esc(r.why||'')+'"></label><span class="kn"></span></div>'; $('.kn',box).textContent=n>=5?'✓ Reason noted.':'📝 '+n+' of 5 words.'; return; }
      box.innerHTML='<div class="rg-redmark" role="note"><b>✏ Editor’s mark:</b> Your sentence says “<span class="w">'+esc(r.w)+'</span>.” That word means <i>no exceptions</i>. Does your evidence really show that? <span class="acts"><button type="button" data-revise="'+k+'">Change the word</button><button type="button" data-keepit="'+k+'">Keep it, and explain why</button></span></div>'; }); }
  function revOK(){ var d=D(); return ['head'].concat(PARAS.map(function(q){ return q.k; })).every(function(k){ var v=d[k]||''; if(!ABS.test(v)) return true; var r=d.rev[k]||{}; return r.state==='keep'&&words(r.why||'')>=5; }); }

  /* ================================================================ ONE readiness rule for the stepper, checklist, print button and certificate */
  function attOK(){ var A=D().att.filter(function(a){ return a.ev&&evGet(a.ev)&&words(a.why||'')>=(NW.whyMin||6); }), ids={}; A.forEach(function(a){ ids[a.ev]=1; }); return Object.keys(ids).length>=(NW.evMin||2); }
  function readiness(){ var d=D(), W=function(k){ return words(d[k]||''); }, items=[
      {k:'notebook',t:'Editor’s Notebook: all three answers',ok:['journal-q1','journal-q2','journal-q3'].every(qDone),go:{tab:'desk',sel:'.reflection-block'}},
      {k:'fact',t:'Fact-Check tab: all five claims',ok:fcDone(),go:{tab:'factcheck',sel:'#panel-factcheck .rg-qprog'}},
      {k:'head',t:'Your own headline',ok:W('head')>=3,go:{tab:'press',sel:'#rg-f-head'}},
      {k:'by',t:'Your byline',ok:!!(d.by||'').trim(),go:{tab:'press',sel:'#rg-f-by'}}].concat(PARAS.filter(function(q){ return q.min; }).map(function(q){ return {k:q.k,t:q.short||q.t,ok:W(q.k)>=q.min,go:{tab:'press',sel:'#rg-f-'+q.k}}; })).concat([
      {k:'ev',t:'At least '+(NW.evMin||2)+' different pieces of evidence added, each with your own explanation',ok:attOK(),go:{tab:'press',sel:'.rg-nd-attach'}},
      {k:'cor',t:'The correction to the Herald',ok:W('cor')>=(NW.corMin||8),go:{tab:'press',sel:'#rg-f-cor'}},
      {k:'rev',t:'The editor’s red mark answered (word changed, or kept with a reason)',ok:revOK(),go:{tab:'press',sel:'.rg-redmark'}},
      {k:'arch',t:'One careful Archive Line',ok:wn('archive-line')>=5,go:{tab:'press',sel:'#archive-line'}},
      {k:'self',t:'Check your own work (4 boxes)',ok:selfOK(),go:{tab:'press',sel:'.rg-selfck'}}]);
    return {items:items, ready:items.every(function(x){ return x.ok; }), missing:items.filter(function(x){ return !x.ok; })}; }
  var SELF=DATA.selfCheck||[];
  function selfOK(){ var s=D().self; return SELF.every(function(x,i){ return !!s[i]; }); }
  var readyEl=null;
  function buildReady(){ var p=document.getElementById('panel-press'), ck=p&&$('.checklist-card',p); if(!ck) return;
    ck.addEventListener('click',function(e){ if(html.classList.contains('rg-on')&&e.target.closest('.checklist-row')){ e.stopPropagation(); e.preventDefault(); } },true);
    var rows=$$('.checklist-row',ck), hint=document.getElementById('checklistHint'); rows.forEach(hide); if(hint) hide(hint); var h3=$('h3',ck); if(h3) setText(h3,'✓ Before you print');
    readyEl=el('div','rg rg-ready','<fieldset class="rg-selfck"><legend>Check your own work</legend><p class="sub">'+esc((DATA.selfIntro)||'Read your page once more. Tick each one only when it’s true.')+'</p>'+SELF.map(function(t,i){ return '<label class="rg-check"><input type="checkbox" data-self="'+i+'"'+(D().self[i]?' checked':'')+'> '+esc(t)+'</label>'; }).join('')+'</fieldset>'+
      '<div class="rg-readyl"><div class="hd"><small>This only checks that each part is filled in, not that it’s right.</small></div><ul></ul></div>');
    ck.appendChild(readyEl);
    readyEl.addEventListener('change',function(e){ var t=e.target; if(t.dataset.self==null) return; D().self[t.dataset.self]=t.checked; save(); paintReady(); });
    readyEl.addEventListener('click',function(e){ var b=e.target.closest('button[data-go]'); if(!b) return; var it=readiness().items.filter(function(x){ return x.k===b.dataset.go; })[0]; if(it) goSrc(it.go); }); }
  function paintReady(){ var R0=readiness(); html.classList.toggle('rg-pub',!!S.published); if(readyEl){ var G=DATA.readyGroups||R0.items.map(function(x){ return {t:x.t,k:[x.k]}; }), by={}; R0.items.forEach(function(x){ by[x.k]=x; });
      var shown={}; G=G.map(function(g){ var its=g.k.map(function(k){ shown[k]=1; return by[k]; }).filter(Boolean); return {t:g.t,its:its}; }); R0.items.forEach(function(x){ if(!shown[x.k]) G.push({t:x.t,its:[x]}); });
      var pre=R0.items.filter(function(x){ return x.k!=='self'&&x.k!=='arch'; }).every(function(x){ return x.ok; }), lock=!pre&&!selfOK();
      $('ul',readyEl).innerHTML=G.map(function(g){ var left=g.its.filter(function(x){ return !x.ok; }), ok=!left.length, sl=lock&&!ok&&left[0].k==='self';
        return '<li class="'+(ok?'ok':'')+'"><span class="ic" aria-hidden="true">'+(ok?'✓':'○')+'</span><span>'+esc(g.t)+(sl?' <small>This opens when everything above is done.</small>':ok||g.its.length<2?'':' <small>'+left.length+' of '+g.its.length+' left · next: '+esc(left[0].t)+'</small>')+'</span>'+(ok?'<span class="rg-sr">done</span>':sl?'':'<button type="button" data-go="'+left[0].k+'">Go there</button>')+'</li>'; }).join('');
      $('.rg-selfck',readyEl).hidden=lock; }
    var cert=document.getElementById('certCard'); if(cert){ cert.classList.toggle('locked',!S.published); cert.classList.toggle('unlocked',!!S.published); }
    if(deskEl){ $('.ed .st',deskEl).textContent=S.published?(stale()?'Printed · changed since':'Printed edition'):'Draft (not printed yet)'; }
    updateStepper(); if(typeof paintRedPencil==='function') paintRedPencil(); return R0; }

  /* ================================================================ THE RECORD: one object behind the proof, print, archive and every export */
  function record(){ var d=D(), sc=R.scene1&&R.scene1.state?R.scene1.state():{}, rp=R.evidence&&R.evidence.state?R.evidence.state():null, al=R.almanac&&R.almanac.state?R.almanac.state():null, pz=R.pair&&R.pair.state?R.pair.state():null, a=angle();
    var ev=[]; PARAS.forEach(function(q){ d.att.forEach(function(x){ if(x.p!==q.k) return; var c=evGet(x.ev); ev.push({n:ev.length+1, p:q.k, para:q.t, t:c?c.t:'(clipping removed)', kind:c?(EVK[c.k]||EVK.lesson).n:'', meta:c?cardMeta(c):'', from:c?c.from:'', why:(x.why||'').trim()}); }); });
    var qs=$$('#panel-factcheck .factcheck-q');
    return { lesson:DATA.lesson, issue:ISSUE, title:DATA.title, editor:(d.by||nm()||'').trim(), at:Date.now(), angle:a?a.t:'',
      head:(d.head||'').trim(), cmp:(d.cmp||'').trim(), exp:(d.exp||'').trim(), cap:(d.cap||'').trim(), cor:(d.cor||'').trim(), herald:(DATA.redpencil||{}).claim||'', arch:baseVal('archive-line').trim(), ev:ev,
      rev:Object.keys(d.rev).filter(function(k){ return d.rev[k].w; }).map(function(k){ var r=d.rev[k]; return {part:k, word:r.w, state:r.state, why:r.why||''}; }),
      notebook:$$('.reflection-textarea').map(function(t,i){ return {q:t.dataset.label||('Question '+(i+1)), a:(t.value||'').trim()}; }),
      pair:pz, scene:sc, source:rp, almanac:al,
      quiz:qs.map(function(q,i){ var F=(S.fc||{})[q.id]||null, o=F?fcOpts(q)[F.i]:null; return {q:(($('.factcheck-q-text',q)||{}).textContent||'Claim '+(i+1)).trim(), a:o?o.textContent.replace(/\s+/g,' ').trim():'', ok:F?!!F.ok:null}; }),
      claims:CC.map(function(c){ var A=(S.cc||{})[c.id]||{}, v=(c.verdicts||[]).filter(function(x){ return x.k===A.v; })[0], dd=(c.details||[])[A.d]; return {claim:c.claim, verdict:v?v.t:'', detail:dd?dd.from+' '+dd.t:'', why:(A.why||'').trim()}; }),
      self:SELF.filter(function(t,i){ return D().self[i]; }) }; }
  function stale(){ if(!S.pub) return false; var r=record(); return ['head','cmp','exp','cap','cor','editor'].some(function(k){ return r[k]!==S.pub[k]; })||JSON.stringify(r.ev)!==JSON.stringify(S.pub.ev); }
  function paraHTML(txt,marks,live){ var h=esc(txt||'').replace(/\n+/g,'</p><p>'); return '<p>'+(h||'<span class="ph">This part is still blank.</span>')+marks.map(function(m){ return live?' <button type="button" class="mk" aria-expanded="false" aria-controls="rg-evn-'+m.n+'" data-mk="'+m.n+'" aria-label="Evidence '+m.n+'">['+m.n+']</button>':' <sup>['+m.n+']</sup>'; }).join('')+'</p>'+(live?marks.map(function(m){ return '<div class="evn" id="rg-evn-'+m.n+'" hidden><b>Evidence '+m.n+' · '+esc(m.kind)+'</b><p class="clip">'+esc(m.t)+'</p><p class="src">'+esc(m.meta)+(m.from?' — '+esc(m.from):'')+'</p><p class="why"><b>What it supports (the editor’s words):</b> '+esc(m.why||'(not explained yet)')+'</p></div>'; }).join(''):''); }
  function editionHTML(r,live){ var by=function(k){ return r.ev.filter(function(m){ return m.p===k; }); };
    var h='<div class="rg-ed"><div class="mast">The Republic Gazette</div><div class="ed"><span>Vol. I · Issue '+esc(r.issue)+'</span><span>'+esc(r.title||'')+'</span></div>'+
      '<h2 class="hl">'+(r.head?esc(r.head):'<span class="ph">Your headline</span>')+'</h2><div class="by">By '+esc(r.editor||'Junior Editor')+', Junior Editor</div>';
    PARAS.forEach(function(q){ if(q.k==='cap') return; h+=(q.kick?'<div class="kick">'+esc(q.kick)+'</div>':'')+paraHTML(r[q.k],by(q.k),live); });
    var capM=by('cap'); h+='<figure class="cap"><figcaption><b>About our source.</b> '+(r.cap?esc(r.cap):'<span class="ph">Your source caption or limitation.</span>')+capM.map(function(m){ return live?' <button type="button" class="mk" aria-expanded="false" aria-controls="rg-evn-'+m.n+'" data-mk="'+m.n+'">['+m.n+']</button>':' <sup>['+m.n+']</sup>'; }).join('')+'</figcaption>'+(live?capM.map(function(m){ return '<div class="evn" id="rg-evn-'+m.n+'" hidden><b>Evidence '+m.n+' · '+esc(m.kind)+'</b><p class="clip">'+esc(m.t)+'</p><p class="src">'+esc(m.meta)+(m.from?' — '+esc(m.from):'')+'</p><p class="why"><b>What it supports:</b> '+esc(m.why||'')+'</p></div>'; }).join(''):'')+'</figure>';
    h+='<div class="corr"><div class="k">Correction</div><p class="was">The Hasty Herald printed: <s>“'+esc(r.herald)+'”</s></p><p>'+(r.cor?esc(r.cor):'<span class="ph">Your correction.</span>')+'</p></div>';
    if(!live&&r.ev.length) h+='<div class="notes"><div class="k">Evidence notes</div><ol>'+r.ev.map(function(m){ return '<li><b>'+esc(m.kind)+':</b> '+esc(m.t)+' <i>('+esc(m.meta)+(m.from?' — '+esc(m.from):'')+')</i><br><b>What it supports:</b> '+esc(m.why||'(not explained)')+'</li>'; }).join('')+'</ol></div>';
    return h+'</div>'; }
  document.addEventListener('click',function(e){ var b=e.target.closest&&e.target.closest('.rg-ed button.mk'); if(!b) return; var p=b.closest('.rg-ed'), n=$('#rg-evn-'+b.dataset.mk,p)||$('[id="rg-evn-'+b.dataset.mk+'"]',p); if(!n) return; var o=n.hidden; n.hidden=!o; b.setAttribute('aria-expanded',o); });
  function recordText(r,status){ var L=[], hr='════════════════════════════════════════', P=function(s){ L.push(s==null?'':s); }, blank=function(v){ return (v||'').trim()||'(blank)'; };
    P(hr); P('  THE REPUBLIC GAZETTE · EDITOR’S SUBMISSION'); P('  Lesson '+r.lesson+' · '+r.title); P('  Vol. I · Issue '+r.issue+' · '+(status||'Proof')); P('  Junior Editor: '+blank(r.editor)); P(hr); P('');
    P('--- MY FRONT PAGE ---'); if(r.angle) P('Angle: '+r.angle); P('Headline: '+blank(r.head)); P('Byline: By '+blank(r.editor)); P('');
    PARAS.forEach(function(q){ var ms=r.ev.filter(function(m){ return m.p===q.k; }).map(function(m){ return '['+m.n+']'; }).join(' '); P(q.t.toUpperCase()+':'); P(blank(r[q.k])+(ms?' '+ms:'')); P(''); });
    P('CORRECTION:'); P('The Hasty Herald printed: “'+r.herald+'”'); P(blank(r.cor)); P('');
    P('--- EVIDENCE NOTES ---'); if(!r.ev.length) P('(no evidence attached yet)'); r.ev.forEach(function(m){ P('['+m.n+'] '+m.kind+' · '+m.meta); P('    Detail: '+m.t); P('    Source: '+(m.from||'')); P('    What it supports (my words): '+blank(m.why)); }); P('');
    if(r.rev.length){ P('--- REVISION ---'); r.rev.forEach(function(x){ P('Word: “'+x.word+'” → '+(x.state==='revised'?'revised':x.state==='keep'?'kept. Reason: '+blank(x.why):'not answered yet')); }); P(''); }
    P('--- ARCHIVE LINE ---'); P(blank(r.arch)); P('');
    P('--- EDITOR’S NOTEBOOK ---'); r.notebook.forEach(function(n){ P(n.q); P(blank(n.a)); P(''); });
    if(r.pair){ P('--- COMPARING TWO PEOPLE (Desk) ---'); P((r.pair.p1||'?')+' and '+(r.pair.p2||'?')); P(blank(r.pair.note)); P(''); }
    if(r.source){ var s=r.source; P('--- THE SOURCE DESK: THE KITCHEN PRINT ---'); if(r.scene&&r.scene.locked) P('Before the reveal: the scene seemed to show about '+r.scene.guess+'. Drawn later? '+(r.scene.later||'—')); P('What I noticed: '+blank(s.notice)); P('Made vs. shown (my explanation): '+blank(s.dateExp)); (s.cats||[]).forEach(function(ct){ P(ct.t+': '+((s.sort[ct.k]||[]).join(', ')||'—')); }); P('Another source that could help: '+(s.followup||'—')); P('What this picture can’t show (my words): '+blank(s.limitation)); P(''); }
    if(r.almanac){ P('--- THE ALMANAC ---'); r.almanac.months.forEach(function(m){ P(m.name+': sun rose '+m.rise+', set '+m.set+'. '+(m.ok?'My answer: '+m.a:'(not answered)')); }); P('Chose their own hours: '+(r.almanac.sort.yes.join(', ')||'—')); P('Someone else chose: '+(r.almanac.sort.no.join(', ')||'—')); P(''); }
    P('--- FACT-CHECK ---'); r.quiz.forEach(function(q,i){ P((i+1)+'. '+q.q); P('   My answer: '+(q.a||'(not answered)')+(q.ok==null?'':q.ok?' ✓':' ✗')); }); r.claims.forEach(function(c){ P('Claim: “'+c.claim+'”'); P('   My call: '+blank(c.verdict)); P('   Detail: '+blank(c.detail)); P('   My explanation: '+blank(c.why)); }); P('');
    P('--- MY SELF-CHECK ---'); SELF.forEach(function(t){ P((r.self.indexOf(t)>-1?'[x] ':'[ ] ')+t); }); P('');
    P('(The routines in this lesson are illustrative reconstructions written for the lesson, not diary quotations.)');
    return L.join('\n'); }
  function current(){ return S.pub&&!stale()?{r:S.pub,st:'Printed edition'}:S.pub?{r:record(),st:'Proof (edited since printing)'}:{r:record(),st:'Proof (not printed yet)'}; }
  function printView(){ var cu=current(), r=cu.r, body=editionHTML(r,false)+'<hr><pre class="pk">'+esc(recordText(r,cu.st))+'</pre>';
    var doc='<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+esc(r.lesson)+' · Issue '+esc(r.issue)+' · '+esc(r.editor||'Junior Editor')+'</title><style>body{font:16px/1.55 Georgia,serif;color:#1A1F2E;max-width:760px;margin:30px auto;padding:0 20px}.st{font:700 12px system-ui;letter-spacing:.1em;text-transform:uppercase;color:#8B2D26}.mast{font:700 38px/1 Georgia,serif;text-align:center;border-bottom:3px double #1A1F2E;padding-bottom:8px}.ed{display:flex;justify-content:space-between;font:12px system-ui;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #999;padding:5px 0;margin-bottom:12px}.hl{font:900 34px/1.08 Georgia,serif;margin:10px 0}.by{font:700 12px system-ui;text-transform:uppercase;letter-spacing:.08em;color:#555;border-bottom:1px solid #ccc;padding-bottom:8px;margin-bottom:10px}.kick{font:700 11px system-ui;letter-spacing:.12em;text-transform:uppercase;color:#8B2D26;margin-top:14px}sup{color:#8B2D26;font-weight:700}.cap{margin:14px 0;padding:8px 12px;border-left:3px solid #B8923E;background:#FAF6EA}.corr{border:2px solid #1A1F2E;padding:8px 12px;margin:16px 0}.corr .k,.notes .k{font:700 11px system-ui;letter-spacing:.12em;text-transform:uppercase}.notes{font-size:14px;border-top:1px solid #999;margin-top:16px}.ph{color:#999;font-style:italic}.pk{white-space:pre-wrap;font:12px/1.5 ui-monospace,Menlo,monospace;background:#F7F5EF;padding:12px}@media print{.noprint{display:none}}</style></head><body><div class="st">'+esc(cu.st)+'</div>'+body+'<p class="noprint"><button onclick="print()">Print or save as PDF</button></p></body></html>';
    var w=null; try{ w=window.open('','_blank'); }catch(e){}
    if(w){ w.document.write(doc); w.document.close(); setTimeout(function(){ try{ w.focus(); w.print(); }catch(e){} },350); return; }
    download(doc,(r.lesson||'lesson')+'-issue-'+r.issue+'-front-page.html','text/html'); ticker('Your browser blocked the print window, so the page was downloaded instead. Open it and print it.'); }
  function download(txt,name,type){ try{ var a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([txt],{type:type||'text/plain'})); a.download=name; document.body.appendChild(a); a.click(); a.remove(); return true; }catch(e){ return false; } }
  function buildExports(){ var gc=$('.gathered-card'); if(!gc) return; var out=document.getElementById('gatheredOutput');
    window.refreshGathered=(function(orig){ var f=function(){ if(!html.classList.contains('rg-on')) return orig.apply(this,arguments); var cu=current(); if(out) out.value=recordText(cu.r,cu.st); }; f.__orig=orig; return f; })(window.refreshGathered.__orig||window.refreshGathered);
    window.copyGathered=(function(orig){ var f=function(){ if(!html.classList.contains('rg-on')) return orig.apply(this,arguments); window.refreshGathered(); var t=out.value, msg=document.getElementById('copiedMsg');
      function ok(){ if(msg){ msg.textContent='Copied! Now paste it into your turn-in document.'; msg.classList.add('show'); setTimeout(function(){ msg.classList.remove('show'); },2400); } }
      function fail(){ out.focus(); out.select(); if(msg){ msg.textContent='Your browser blocked copying. The text is selected: press Ctrl+C (or ⌘C) to copy it.'; msg.classList.add('show'); } }
      if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok,function(){ try{ out.select(); document.execCommand('copy')?ok():fail(); }catch(e){ fail(); } }); else { try{ out.select(); document.execCommand('copy')?ok():fail(); }catch(e){ fail(); } } }; f.__orig=orig; return f; })(window.copyGathered.__orig||window.copyGathered);
    window.downloadJournal=(function(orig){ var f=function(){ if(!html.classList.contains('rg-on')) return orig.apply(this,arguments); var cu=current(); download(recordText(cu.r,cu.st),(DATA.lesson||'lesson')+'-issue-'+ISSUE+'-submission.txt','text/plain'); }; f.__orig=orig; return f; })(window.downloadJournal.__orig||window.downloadJournal);
    setText($('.gathered-header-title',gc),'Your submission'); setText($('.gathered-intro',gc),'Everything you made today, in one place. Copy it, download it, or print it.');
    setText($('.gathered-btn-copy',gc),'📋 Copy my submission'); setText($('.gathered-btn-pdf',gc),'⬇ Download text file (.txt)');
    var acts=$('.gathered-actions',gc), pb=el('button','rg gathered-btn rg-printbtn','🖨 Print or save as PDF'); pb.type='button'; pb.addEventListener('click',printView); acts.appendChild(pb);
    var nb=el('button','rg gathered-btn rg-nbbtn2','📓 Reporter’s Notebook (print or save as PDF)'); nb.type='button'; nb.addEventListener('click',notebook); acts.appendChild(nb); }

  /* ================================================================ PUBLISH: the red pencil ritual prints the student's record */
  function publish(){ var R0=readiness(); if(!R0.ready) return false; var r=record(); S.pub=r; S.published=true; S.pubAt=Date.now();
    if(ISSUE&&C.published.indexOf(ISSUE)<0) C.published.push(ISSUE); C.lines[ISSUE]={line:r.cor, head:r.head, lesson:DATA.lesson, at:Date.now(), rec:r};
    save(); return true; }
  var edEl=null;
  function paintEdition(){ var p=document.getElementById('panel-press'); if(!p) return; if(!edEl){ edEl=el('section','rg rg-printed'); var rp=$('.rg-redpencil',p)||document.getElementById('certCard'); if(!rp) return; after(rp,edEl); }
    if(!S.pub){ edEl.hidden=true; return; } edEl.hidden=false; var st=stale();
    edEl.innerHTML='<div class="hd"><div class="rg-game-k">The printed edition</div>'+(st?'<p class="rg-stale" role="status">You changed your page after printing. The printed edition below is what’s in the Morgue. Print again to update it.</p>':'')+'</div>'+editionHTML(S.pub,true)+'<div class="row"><button type="button" class="rg-btn" data-a="print">🖨 Print or save as PDF</button><button type="button" class="rg-btn alt" data-a="txt">⬇ Download text file (.txt)</button><button type="button" class="rg-btn alt" data-a="copy">📋 Copy my submission</button><button type="button" class="rg-btn alt" data-a="revise">✏️ Revise and reprint</button></div>';
    edEl.onclick=function(e){ var b=e.target.closest('button[data-a]'); if(!b) return; var a=b.dataset.a; if(a==='print') printView(); if(a==='txt') window.downloadJournal(); if(a==='copy'){ window.copyGathered(); ticker('Copied your submission.'); } if(a==='revise'){ var f=$('#rg-f-head'); if(f){ f.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'}); f.focus({preventScroll:true}); } } }; }

  /* ================================================================ wiring + small fixes from the audit */
  function fixModalAndKeys(){ document.addEventListener('keydown',function(e){ if(e.key!=='Escape'||!html.classList.contains('rg-on')) return; var m=$('#rgModal.open'); if(m){ closeModal(); return; } if(wireEl&&wireEl.classList.contains('open')){ openWire(false); if(wireBtn) wireBtn.focus(); } }); }
  function buildNewsroom(){ if(!window.__rgKeysFixed){ fixModalAndKeys(); window.__rgKeysFixed=true; } buildNewsroomBar(); buildDrawer(); buildNudges(); buildClaims(); restoreQuiz(); kbdQuiz(); if(FSTEP) FSTEP(true); buildDesk(); buildReady(); buildExports(); var gcx=$('#panel-press .gathered-card'), tz=$('#panel-press .next-issue-teaser'); if(gcx&&tz) move(gcx,function(n){ tz.parentNode.insertBefore(n,tz); }); paintEdition(); paintReady(); paintEvidence();
    var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(kbdQuiz,40); }); var fp=document.getElementById('panel-factcheck'); if(fp){ mo.observe(fp,{attributes:true,subtree:true,attributeFilter:['class']}); OBS.push(mo); }
    if(window.switchTab&&!window.__rgNdWrapped){ var o=window.switchTab; window.switchTab=function(t){ var r=o.apply(this,arguments); if(html.classList.contains('rg-on')&&t==='press'){ if(R.planner&&R.planner.paint) R.planner.paint(); paintDesk(); paintReady(); } return r; }; window.__rgNdWrapped=true; }
    if(window.updateProgress&&!window.__rgProgWrapped){ var up=window.updateProgress; window.updateProgress=function(){ var r=up.apply(this,arguments); if(html.classList.contains('rg-on')){ var st=stageState(), n=st.filter(Boolean).length, f=document.getElementById('progressFill'), t=document.getElementById('progressPct'); if(f) f.style.width=(n*25)+'%'; if(t) t.textContent=(n*25)+'%'; } return r; }; window.__rgProgWrapped=true; }
    var ch=document.getElementById('checklistHint'); if(ch&&/Issue 1\b/.test(ch.innerHTML)) setText(ch,ch.innerHTML.replace(/Issue 1\b/,'Issue '+ISSUE)); }
  function paintEvidence(trayOnly){ var n=EV().length; if(trayEl) paintTray(); if(!trayOnly) paintDrawer(); refreshEvBtns(); if(trayOnly&&deskEl){ $('.rg-nd-tray .cnt',deskEl).textContent=n+' saved · '+EV().filter(function(c){ return c.use; }).length+' in use'; $$('.rg-nd-tray .rg-evc',deskEl).forEach(function(a){ var c=evGet(a.dataset.id); if(c) a.classList.toggle('use',!!c.use); }); } }

  /* a closer look at a historical picture: full size, scrollable, closes with Escape */
  function zoomImage(src,alt,cap){ if(!src) return; var m=modal(); m.innerHTML='<div class="rg-sheet rg-zoom"><button class="x" type="button" aria-label="Close">✕</button><h3>🔍 Look closer</h3><div class="zw" tabindex="0" aria-label="Scrollable picture"><img alt="'+esc(alt||'')+'" src="'+esc(src)+'"></div><p class="cap">'+esc(cap||'')+'</p><div class="row"><button type="button" class="rg-btn alt zi">＋ Zoom in</button><button type="button" class="rg-btn alt zo">－ Zoom out</button></div></div>';
    var im=$('.zw img',m), z=1; function setZ(v){ z=Math.max(1,Math.min(3,v)); im.style.width=(z*100)+'%'; }
    $('.x',m).addEventListener('click',closeModal); $('.zi',m).addEventListener('click',function(){ setZ(z+0.5); }); $('.zo',m).addEventListener('click',function(){ setZ(z-0.5); }); }

  /* ================================================================ EVIDENCE HINTS: Ms. Avery's nudge, the "is this on topic?" question, Find-evidence links */
  var EH=DATA.evHints||{};
  function hlCount(){ return EV().filter(function(c){ return (c.tags||[]).indexOf('highlight')>-1; }).length; }
  function evAsk(c,block){ var K=EH.check; if(!K) return ''; var t=c.t||'';
    if(block&&block.closest('.rg-job')) return K.direction||'';
    if(c.who==='The Hasty Herald') return K.herald||'';
    if(c.who==='Highlighted from the lesson'&&K.rx&&!(new RegExp(K.rx,'i')).test(t)) return K.off||'';
    return ''; }
  function buildNudges(){ var N=EH.nudges||[]; if(!N.length) return; S.deskT=S.deskT||0;
    var t=setInterval(function(){ if(!html.classList.contains('rg-on')||currentScene()!=='desk'||document.visibilityState!=='visible') return; S.deskT+=5; if(S.deskT%30===0) save();
      N.forEach(function(n,i){ var k='evn'+i; if(S.seen[k]||S.deskT<n.after||hlCount()>=(n.below||1)) return; S.seen[k]=true; save(); avery(n.t,n.choice||null,{scene:'desk'}); }); },5000);
    OBS.push({disconnect:function(){ clearInterval(t); }}); }
  function findHTML(k){ var F=(EH.find||{})[k]; if(!F) return ''; return '<details class="rg-find"><summary>🔎 Find evidence for this part</summary><p>'+esc(F.t)+'</p><div class="go">'+(F.go||[]).map(function(g,i){ return '<button type="button" data-find="'+k+'" data-i="'+i+'">'+esc(g.l)+' →</button>'; }).join('')+'</div></details>'; }
  function hlMetaFor(block){ var rd=(DATA.explore||{}).reading||{}, tab=(block.closest('.tab-panel')||{id:'panel-dispatch'}).id.replace('panel-',''), base={tab:tab, where:'', when:'', tags:['highlight']};
    function m(o){ for(var k in o) base[k]=o[k]; return base; }
    var line=block.closest('.rg-col-line'), col=block.closest('.rg-col');
    if(line&&col){ var c=(rd.cols||[]).filter(function(x){ return x.id===col.dataset.id; })[0]; return m({k:'routine', who:c?c.who:'', when:(rd.times||[])[+line.dataset.i]||'', where:c?c.where||'':'', from:rd.srcLabel||'Example written for this lesson', ctx:rd.period||'', tags:[c?c.id:'','routine','highlight']}); }
    if(block.closest('.rg-pair-tbl')) return m({k:'routine', who:'Study two people', from:rd.srcLabel||'Example written for this lesson', ctx:rd.period||'', tags:['routine','compare','highlight']});
    var al=block.closest('.rg-al3');
    if(al){ var A=DATA.almanac||{}; if(block.closest('.say')) return m({k:'source', quote:true, who:'Poor Richard’s Almanack', when:'1735', where:'Philadelphia', from:'Real source from the past: '+(A.cite||'Poor Richard’s Almanack, 1735'), tags:['almanac','highlight']});
      if(block.closest('.rg-al3-ann')) return m({k:'source', who:'Poor Richard improved (cover)', when:'1748', where:'Philadelphia', from:'Real source from the past: the 1748 almanac cover (Library of Congress)', tags:['almanac','highlight']});
      return m({k:'lesson', who:'Almanac calendar page', where:'Philadelphia', from:'Fact from the lesson: a calendar page re-set for this lesson (sun times worked out for Philadelphia)', ctx:A.note||'', tags:['almanac','highlight']}); }
    if(block.closest('.rg-redpen')){ var ev=(DATA.explore||{}).evidence||{}; return m({k:'source', who:'Kitchen print', when:'made about '+((ev.date||{}).year||''), from:ev.from||'Real source from the past: the kitchen print', tags:['picture','highlight']}); }
    if(block.closest('.rg-myth')) return m({k:'lesson', who:'Fact-check of the Herald', from:'Fact from the lesson (a fact-check written for this lesson)', tags:['herald','highlight']});
    if(block.closest('.herald-wrap, .herald-claim')) return m({k:'lesson', who:'The Hasty Herald', from:'The Hasty Herald’s story (the rival paper in our newsroom story). It is a claim to check, not a fact.', tags:['herald','highlight']});
    return m({k:'lesson', who:'Highlighted from the lesson', from:'Fact from the lesson ('+whereAmI(block)+')'}); }

  /* ================================================================ Fact-Check one claim at a time + "why that one's tempting" */
  var FSTEP=null;
  /* one heading per activity: a module right under a step head drops its own kicker + title */
  function tidyHeads(){ var st=$('.rg-story'), sc=$('#panel-dispatch .rg-scene'); if(st&&sc) before(sc,st); $$('.rg-game, .rg-nd').forEach(function(g){ if(g.classList.contains('rg-worddesk')) return; var p=g.previousElementSibling; while(p&&(p.classList.contains('rg-vn')||getComputedStyle(p).display==='none')) p=p.previousElementSibling; if(p&&(p.classList.contains('rg-bs-jump')||p.classList.contains('rg-stephead'))) g.classList.add('rg-notitle'); }); }
  /* Words to know: tap a dotted word (in the job line or in the text) to see what it means */
  var defTip=null;
  function showDef(b){ if(!defTip){ defTip=el('div','rg rg-deftip'); defTip.setAttribute('role','tooltip'); document.body.appendChild(defTip); }
    if(defTip.dataset.for===b.textContent&&defTip.classList.contains('show')){ defTip.classList.remove('show'); return; }
    defTip.innerHTML='<b>'+esc(b.textContent)+'</b>: '+esc(b.dataset.def); defTip.dataset.for=b.textContent; var r=b.getBoundingClientRect(); defTip.classList.add('show');
    var w=Math.min(300,innerWidth-24); defTip.style.width=w+'px'; defTip.style.left=Math.max(12,Math.min(r.left+scrollX,scrollX+innerWidth-w-12))+'px'; defTip.style.top=(r.bottom+scrollY+6)+'px'; }
  function wireDefs(){ $$('.rg-job[data-words]').forEach(function(j){ var W; try{ W=JSON.parse(j.dataset.words); }catch(e){ return; } var root=j.closest('.rg-game, .rg-al3, .rg-nd, section')||j.parentNode;
      W.forEach(function(w){ var word=w[0]; if($$('.rg-def.inl',root).some(function(x){ return x.textContent.toLowerCase().indexOf(word.toLowerCase())===0; })) return;
        var rx=new RegExp('\\b('+word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'s?)\\b','i'), tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){ var p=n.parentNode; if(!p||p.closest('textarea,input,button,select,option,label,script,style,svg,mark,h3,.rg-job,.rg-def,.rg-game-k,.rg-bs-off,[hidden]')) return NodeFilter.FILTER_REJECT; return rx.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP; }}), n=tw.nextNode();
        if(!n) return; var m=rx.exec(n.nodeValue), after=n.splitText(m.index); after.splitText(m[1].length); var b=document.createElement('button'); b.type='button'; b.className='rg-def inl'; b.dataset.def=w[1]; after.parentNode.insertBefore(b,after); b.appendChild(after); }); }); }
  function buildDefs(){ wireDefs(); var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(wireDefs,400); }); $$('.tab-panel').forEach(function(p){ mo.observe(p,{childList:true,subtree:true}); }); OBS.push(mo);
    if(!window.__rgDefs){ window.__rgDefs=true; document.addEventListener('click',function(e){ var b=e.target.closest('.rg-def'); if(b){ e.preventDefault(); e.stopPropagation(); showDef(b); return; } if(defTip&&!e.target.closest('.rg-deftip')) defTip.classList.remove('show'); },true);
      document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&defTip) defTip.classList.remove('show'); }); } }
  function buildFactSteps(){ var qs=$$('#panel-factcheck .factcheck-q'); if(qs.length<2) return;
    var cur=0, bar=el('nav','rg rg-qprog'); bar.setAttribute('aria-label','Fact-Check claims'); before(qs[0],bar); var score=document.getElementById('factcheckScore');
    function items(){ return qs.concat($$('#panel-factcheck .rg-cc')); }
    function answered(it){ return it.classList.contains('rg-cc')?it.classList.contains('done'):!!it.querySelector('.factcheck-option.correct, .factcheck-option.incorrect'); }
    function firstOpen(){ var L=items(); for(var i=0;i<L.length;i++){ if(!answered(L[i])) return i; } return L.length; }
    function go(i){ var L=items(); cur=Math.max(0,Math.min(i,L.length)); paint(); var t=cur<L.length?L[cur]:score; if(t) setTimeout(function(){ t.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}); },30); }
    function nextBtn(it,i,N){ if($(':scope > .rg-qnext',it)) return; var nx=el('button','rg rg-qnext',i<N-1?'Next claim →':'See my record →'); nx.type='button'; it.appendChild(nx); nx.addEventListener('click',function(){ go(i+1); }); }
    function paint(){ if(!html.classList.contains('rg-on')) return; var L=items(), N=L.length, open=firstOpen(), cl=$('#panel-factcheck .rg-claims');
      L.forEach(function(it,i){ nextBtn(it,i,N); it.classList.toggle('rg-qhide',i!==cur); it.classList.toggle('rg-qready',answered(it)); });
      if(score) score.classList.toggle('rg-qhide',cur<N);
      if(cl) cl.classList.toggle('rg-qhide',cur<qs.length||cur>=N);
      var lbl=cur<N?'Claim '+(cur+1)+' of '+N+(cur>=qs.length?' · the editor’s call':''):'All '+N+' claims checked';
      bar.innerHTML=L.map(function(it,i){ var can=i<=open; return '<button type="button" data-i="'+i+'" class="'+(answered(it)?'done':'')+(i===cur?' now':'')+'"'+(can?'':' disabled')+' aria-label="Claim '+(i+1)+(answered(it)?', done':'')+'"'+(i===cur?' aria-current="step"':'')+'></button>'; }).join('')+'<span>'+lbl+'</span>';
      refreshPress(); }
    bar.addEventListener('click',function(e){ var t=e.target.closest('button[data-i]'); if(t&&!t.disabled) go(+t.dataset.i); });
    var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(paint,30); }); mo.observe(document.getElementById('panel-factcheck'),{attributes:true,subtree:true,attributeFilter:['class']}); OBS.push(mo);
    FSTEP=function(reset,el){ var it=el&&el.closest&&el.closest('.factcheck-q, .rg-cc'), i=it?items().indexOf(it):-1; if(i>-1&&i<=firstOpen()) cur=i; else if(reset) cur=firstOpen(); paint(); };
    paint(); }
  function buildQuizMiss(){ if(typeof window.checkAnswer!=='function'||window.__rgQuizWrapped) return; window.__rgQuizWrapped=true; DATA.quizMiss=DATA.quizMiss||[];
    var orig=window.checkAnswer;
    window.checkAnswer=function(qId,opt,ok){ var q=document.getElementById(qId), was=q&&q.querySelector('.factcheck-option.correct, .factcheck-option.incorrect'); var r=orig.apply(this,arguments);
      if(was||!q||!html.classList.contains('rg-on')) return r;
      if(!RESTORING){ S.fc=S.fc||{}; var oi=$$('.factcheck-option',q).indexOf(opt); S.fc[qId]={i:oi,ok:!!ok,at:Date.now(),tries:((S.fc[qId]||{}).tries||0)+1}; save(); }
      $$('.factcheck-option',q).forEach(function(o){ o.setAttribute('aria-disabled','true'); o.setAttribute('aria-pressed',o===opt?'true':'false'); });
      var idx=$$('#panel-factcheck .factcheck-q').indexOf(q), letter=((opt.querySelector('.factcheck-option-letter')||{}).textContent||'').trim(), line=(DATA.quizMiss[idx]||{})[letter];
      if(!ok&&line){ var fb=document.getElementById('fb-'+qId.replace('fc-',''))||q.lastElementChild; after(fb,el('div','rg rg-qmiss','<b>Why that one’s tempting:</b> '+esc(line))); }
      if(!RESTORING){ ok?SFX.chime():SFX.bounce(); } refreshPress(); return r; }; }

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
  function paintCounts(){ ['journal-q1','journal-q2','journal-q3'].forEach(function(id){ wc(id,8); }); if(!deskEl){ wc('brief-headline',3); wc('brief-body',MIN_WORDS,'That’s enough for your brief.'); } wc('archive-line',5); }

  /* ================================================================ Go to Press — four steps */
  var STEP4=DATA.steps||[{t:'Plan your page'},{t:'Write your brief'},{t:'Write your Archive Line'},{t:'Check, then print'}], stepperEl=null;
  function stepHead(i){ var h=el('div','rg rg-stephead','<span class="n">'+(i+1)+'</span><div class="t">'+esc(STEP4[i].t)+'</div>'); h.id='rg-step-'+(i+1); return h; }
  function buildSteps(){ var p=document.getElementById('panel-press'); if(!p) return; var ga=$('.gazette-assignment-wrap',p), al=$('.archive-line-card',p), gc=$('.gathered-card',p), ck=$('.checklist-card',p); if(!ga||!al||!ck) return;
    stepperEl=el('div','rg rg-stepper',STEP4.map(function(s,i){ return '<button type="button" data-i="'+(i+1)+'"><span class="n"><span>'+(i+1)+'</span></span>'+esc(s.t)+'</button>'; }).join(''));
    stepperEl.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; var h=document.getElementById('rg-step-'+b.dataset.i); if(h) h.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}); });
    var sh=$('.rg-scene',p); if(sh) after(sh,stepperEl); else p.insertBefore(stepperEl,p.firstChild);
    var plan=R.planner&&R.planner.el; before(plan||ga,stepHead(0)); before(ga,stepHead(1)); before(al,stepHead(2)); before(ck,stepHead(3));
    p.addEventListener('input',function(){ paintCounts(); updateStepper(); }); updateStepper(); }
  function wn(id){ var t=document.getElementById(id); return t?words(t.value):0; }
  function checklistDone(){ var r=$$('.checklist-card .checklist-row'); return r.length>0&&r.every(function(x){ return x.classList.contains('checked'); }); }
  function updateStepper(){ paintCounts(); if(!stepperEl) return;
    var rd=typeof readiness==='function'&&deskEl?readiness().items:null, ok=function(ks){ return !!rd&&ks.every(function(k){ return rd.filter(function(x){ return x.k===k; }).every(function(x){ return x.ok; }); }); };
    var st=rd?[R.planner?R.planner.done():true, ok(['head','by','cmp','exp','cap','ev','cor','rev']), ok(['arch']), !!S.published]:[R.planner?R.planner.done():true, wn('brief-headline')>=3&&wn('brief-body')>=MIN_WORDS, wn('archive-line')>=5, checklistDone()];
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
    redpencil:function(){ var r=$('.rg-redpencil'); return r&&[r,'before']; },
    factcheck:function(){ var f=$('#panel-factcheck .factcheck-intro'); return f&&[f,'after']; }
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
    var n=el('div','rg rg-vn rg-hide',PHONE+'<div class="mid"><div class="k">'+AVERY+'<span class="who">Ms. Avery is calling</span></div><div class="t">'+esc(v.label)+'</div><div class="wave">'+bars+'</div></div><button type="button" class="play" aria-label="Answer Ms. Avery’s call"><span class="i">📞</span><span class="l">Answer</span></button><button type="button" class="rd">📄 Read the words instead</button><div class="tx">'+tx+'</div>');
    n.dataset.slot=key; n.__when=WHEN[v.when]; w[1]==='after'?after(w[0],n):before(w[0],n);
    var play=$('.play',n), cur=0, ok=0, bad=false;
    var aus=parts.map(function(p,idx){ var au=new Audio(); au.preload='metadata';
      au.addEventListener('loadedmetadata',function(){ if(++ok===parts.length&&!bad){ n.classList.remove('rg-hide','rg-empty'); play.disabled=false; var m=$('.mock',n); if(m) m.remove(); } });
      au.addEventListener('error',function(){ bad=true; n.classList.remove('rg-hide'); n.classList.add('rg-empty'); play.disabled=true; if(!$('.mock',n)) $('.k',n).insertAdjacentHTML('beforeend','<span class="mock"> · empty slot: g5ss-'+LESSON+'-'+p.slot+'.mp3</span>'); });
      au.addEventListener('ended',function(){ if(idx<parts.length-1){ cur=idx+1; aus[cur].currentTime=0; aus[cur].play(); } else { cur=0; hangUp(); } });
      AUDS.push(au); return au; });
    n.__aud=aus[0]; var H=S.heard=S.heard||{};
    function label(){ $('.i',play).textContent=n.classList.contains('playing')?'❚❚':H[key]?'▶':'📞'; $('.l',play).textContent=n.classList.contains('playing')?'Pause':H[key]?'Play again':'Answer'; $('.who',n).textContent=n.classList.contains('playing')?'Ms. Avery, on the line':H[key]?'Voice memo from Ms. Avery':'Ms. Avery is calling'; n.classList.toggle('heard',!!H[key]); }
    function hangUp(){ n.classList.remove('playing'); n.classList.add('hangup'); setTimeout(function(){ n.classList.remove('hangup'); },700); label(); }
    function stop(){ aus[cur].pause(); hangUp(); } n.__stop=stop;
    play.addEventListener('click',function(){ if(n.classList.contains('playing')){ stop(); return; } $$('.rg-vn.playing').forEach(function(o){ if(o!==n&&o.__stop) o.__stop(); });
      hush(aus[cur]); n.classList.remove('ringing'); SFX.pickup(); n.classList.add('playing'); if(!H[key]){ H[key]=true; save(); } label(); setTimeout(function(){ if(n.classList.contains('playing')){ hush(aus[cur]); aus[cur].play(); } },RM?0:450); });
    /* the phone rings (twice, then rests) when it scrolls into view, until the student has answered it once */
    if('IntersectionObserver' in window){ var rung=0, io=new IntersectionObserver(function(es){ es.forEach(function(en){ if(!en.isIntersecting||H[key]||n.classList.contains('playing')||n.classList.contains('rg-hide')) return; if(rung>=3) return; rung++; n.classList.remove('ringing'); void n.offsetWidth; n.classList.add('ringing'); if(rung===1) SFX.ring(); setTimeout(function(){ n.classList.remove('ringing'); },2600); }); },{threshold:.8}); io.observe(n); OBS.push(io); }
    label();
    $('.rd',n).setAttribute('aria-expanded','false'); $('.rd',n).addEventListener('click',function(){ n.classList.toggle('read'); var o=n.classList.contains('read'); this.setAttribute('aria-expanded',o); this.textContent=o?'Hide words':'📄 Read the words instead'; if(o&&!H[key]){ H[key]=true; save(); label(); } });
    parts.forEach(function(p,idx){ aus[idx].src=AUD+'g5ss-'+LESSON+'-'+p.slot+'.mp3'; spotlight(p.slot,p.script,aus[idx]); }); }); refreshVoice(); }
  function refreshVoice(){ $$('.rg-vn').forEach(function(n){ if(n.__when) n.classList.toggle('rg-wait',!n.__when()); }); }
  function paintVideos(){ if(!html.classList.contains('rg-on')) return; $$('.video-ratio').forEach(function(v){ v.classList.toggle('rg-empty',!v.querySelector('iframe,video')); }); }
  function buildMedia(){ paintVideos(); var mo=new MutationObserver(function(){ clearTimeout(mo.t); mo.t=setTimeout(paintVideos,100); }); mo.observe(document.body,{childList:true,subtree:true}); OBS.push(mo); }

  /* ================================================================ THE RED PENCIL — correct the Herald, then print */
  var paintRedPencil=null;
  function buildRedPencil(){ var p=document.getElementById('panel-press'), cert=document.getElementById('certCard'); if(!p||!cert) return; var RP=DATA.redpencil||{};
    var claim=(RP.claim||(($('.herald-claim')||{}).textContent||'')).replace(/^[\s“"]+|[\s”"]+$/g,'');
    var box=el('section','rg rg-game rg-redpencil','<div class="rg-game-k">Go to press · the signature move</div><h3 class="rg-game-t">Correct the Herald, then print</h3>'+whyCard(RP.why)+'<div class="rg-rpc-lock" aria-live="polite"></div><div class="rg-rpc-clip"><div class="h">The Hasty Herald</div><div class="hl">'+esc(RP.headline||(($('.herald-headline')||{}).textContent||''))+'</div><p class="claim"><span class="txt">“'+esc(claim)+'”</span><svg class="strike" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M1,6 C20,3 40,8 60,4 S90,7 99,4"/></svg></p><div class="caret" aria-hidden="true">‸</div><div class="fix"></div><div class="stamp">Corrected · The Republic Gazette</div></div><div class="rg-rpc-act"></div>');
    var ck=$('.checklist-card',p); after(ck||cert,box);
    function paint(){ var R0=typeof readiness==='function'&&deskEl?readiness():{ready:wn('archive-line')>=5,missing:[]}, ready=R0.ready, st=typeof stale==='function'&&S.pub?stale():false;
      box.classList.toggle('ready',ready); box.classList.toggle('struck',!!S.struck); box.classList.toggle('done',!!S.published&&!st);
      $('.rg-rpc-lock',box).innerHTML=ready?'':'<p class="rg-todo">🔒 The red pencil unlocks when the list above is complete. '+(R0.missing.length?'Still to do: '+esc(R0.missing.map(function(x){ return x.t; }).slice(0,3).join('; '))+(R0.missing.length>3?'…':'')+'.':'')+'</p>';
      $('.fix',box).textContent=S.pub?S.pub.cor:'';
      var act=$('.rg-rpc-act',box);
      act.innerHTML=S.published&&!st?'<div class="rg-win">'+esc(RP.win||'Printed. Your correction is on the record, and Issue '+ISSUE+' is filed in the Morgue.')+'</div>':!ready?'':!S.struck?'<button type="button" class="rg-btn red" data-a="strike">✏️ Strike the Herald’s claim</button>':'<button type="button" class="rg-btn" data-a="print">‸ '+(S.published?'Reprint my front page':'Print my front page and correction')+'</button>'; }
    paintRedPencil=paint;
    box.addEventListener('click',function(e){ var b=e.target.closest('button[data-a]'); if(!b) return;
      if(b.dataset.a==='strike'){ S.struck=true; save(); SFX.scratch(); paint(); var pb=$('button[data-a="print"]',box); if(pb) pb.focus(); }
      else { if(!publish()){ paint(); return; } SFX.stamp(); paint(); refreshPress(); paintMorgue(true); paintEdition(); paintReady(); if(typeof fireConfetti==='function'&&!RM&&!(P&&P.quiet)) try{ fireConfetti(); }catch(x){} var ed=$('.rg-printed'); if(ed) setTimeout(function(){ ed.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}); var h=$('.rg-ed .hl',ed); if(h){ h.setAttribute('tabindex','-1'); h.focus({preventScroll:true}); } },700); } });
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
    function pics(d){ $$('.rg-issue .pic[data-img]',d).forEach(function(p){ if(!p.firstChild) p.appendChild(srcImg(p.dataset.img,'','')); }); }
    $$('.rg-drawer',m).forEach(function(d){ if(d.open) pics(d); d.addEventListener('toggle',function(){ if(d.open) pics(d); }); });
    m.onclick=function(e){ var b=e.target.closest('.rg-issue.filed'); if(!b) return; var L=C.lines[b.dataset.n]||{}; $('.rg-mg-open',m).innerHTML=L.rec?'<div class="rg-clip big">'+editionHTML(L.rec,true)+'</div>':'<div class="rg-clip"><div class="h">Issue '+esc(b.dataset.n)+(L.head?' · '+esc(L.head):'')+'</div><p>'+(L.line?'“'+esc(L.line)+'”':'Filed.')+'</p></div>'; SFX.paper(); }; }

  /* ================================================================ DESK TRAY — highlighter, press camera, newsroom props */
  var HL_SEL='p, li, .rg-col-line, .rg-rp-notes li span, .dispatch-body, .herald-claim, .editors-desk-question, .factcheck-q-text, .rg-why div, .rg-myth .fact div, .rg-rp-ann .txt, .rg-rp-cur, .rg-al3-page td, .rg-al3-page .say, .rg-al3-ann > span, .rg-al3-day .lb, .rg-legal, .rg-pair-tbl td, .rg-job p';
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
  var modalOpener=null;
  function modal(){ var m=$('#rgModal'); if(!m){ m=el('div','rg rg-modal'); m.id='rgModal'; m.setAttribute('role','dialog'); m.setAttribute('aria-modal','true'); m.addEventListener('click',function(e){ if(e.target===m) closeModal(); }); m.addEventListener('keydown',function(e){ if(e.key==='Tab') trapTab(e,m); }); document.body.appendChild(m); }
    if(!m.classList.contains('open')) modalOpener=document.activeElement; m.classList.add('open'); setTimeout(function(){ var h=$('h3',m); if(h) m.setAttribute('aria-label',h.textContent); if(!m.contains(document.activeElement)){ var f=$('.x',m)||$('button',m); if(f) f.focus(); } },30); return m; }
  function closeModal(){ var m=$('#rgModal'); if(!m) return; m.classList.remove('open'); if(modalOpener&&modalOpener.focus&&document.contains(modalOpener)) try{ focusBack(modalOpener); }catch(e){} modalOpener=null; }
  var trayEl=null, dockEl=null;
  function focusBack(t){ if(!t) return; if(dockEl&&dockEl.contains(t)&&!dockEl.classList.contains('open')){ var m=$('.rg-dock-main',dockEl); if(m) t=m; } t.focus(); }
  /* Ms. Avery's desk phone: a black rotary phone; the handset lifts when the student answers */
  var PHONE='<svg class="rg-ph" viewBox="0 0 120 104" aria-hidden="true"><g class="rg-ph-ring"><path d="M8,30 q-6,10 0,20 M2,24 q-9,16 0,32"/><path d="M112,30 q6,10 0,20 M118,24 q9,16 0,32"/></g>'+
    '<path class="cord" d="M22,62 c-8,4 -4,10 -10,14 c-6,4 -2,10 -8,14 c-4,3 0,8 6,8 L30,96"/>'+
    '<g class="rg-ph-body"><path d="M18,96 L30,52 Q60,42 90,52 L102,96 Q60,104 18,96 Z" fill="#1A2138"/><path d="M30,52 Q60,42 90,52 L92,58 Q60,49 28,58 Z" fill="#2E3A5C"/>'+
    '<rect x="32" y="40" width="6" height="14" rx="2" fill="#0E1426"/><rect x="82" y="40" width="6" height="14" rx="2" fill="#0E1426"/>'+
    '<circle cx="60" cy="76" r="16" fill="#E9DFC6" stroke="#B8923E" stroke-width="1.5"/>'+[0,1,2,3,4,5,6,7,8,9].map(function(k){ var r=(k*30-120)*Math.PI/180; return '<circle cx="'+(60+Math.cos(r)*11).toFixed(1)+'" cy="'+(76+Math.sin(r)*11).toFixed(1)+'" r="2.6" fill="#1A2138"/>'; }).join('')+'<circle cx="60" cy="76" r="5" fill="#B8923E"/></g>'+
    '<g class="rg-ph-hs"><path d="M24,40 q-8,-2 -8,-10 q0,-9 10,-9 l8,3 l52,0 l8,-3 q10,0 10,9 q0,8 -8,10 l-10,-3 l-52,0 Z" fill="#0E1426"/><rect x="30" y="24" width="60" height="7" rx="3.5" fill="#2E3A5C"/></g></svg>';
  var TOOL_ICON={"hl": "<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M7 33h18\" stroke=\"#FFE14D\" stroke-width=\"5\" stroke-linecap=\"round\"/><g transform=\"rotate(40 22 17)\"><rect x=\"17\" y=\"3\" width=\"10\" height=\"19\" rx=\"2.5\" fill=\"#F4C430\" stroke=\"#8B6F2E\" stroke-width=\"1.2\"/><rect x=\"17\" y=\"3\" width=\"10\" height=\"5\" rx=\"2\" fill=\"#1A2138\"/><path d=\"M17 22h10l-2 5h-6z\" fill=\"#FAF3E0\" stroke=\"#8B6F2E\" stroke-width=\"1\"/><path d=\"M19.5 27h5l-1.2 4h-2.6z\" fill=\"#FFE14D\"/><rect x=\"19\" y=\"9\" width=\"2.2\" height=\"11\" rx=\"1\" fill=\"#fff\" opacity=\".45\"/></g></svg>", "cam": "<svg viewBox=\"0 0 48 40\" aria-hidden=\"true\"><rect x=\"9\" y=\"4\" width=\"9\" height=\"6\" rx=\"1\" fill=\"#C9A66B\" stroke=\"#5C3D24\"/><path d=\"M13.5 4V1.5\" stroke=\"#5C3D24\" stroke-width=\"1.5\"/><circle cx=\"13.5\" cy=\"1.5\" r=\"1.6\" fill=\"#FFF7DA\"/><rect x=\"4\" y=\"10\" width=\"40\" height=\"24\" rx=\"3\" fill=\"#2B2620\" stroke=\"#C9A66B\" stroke-width=\"1.5\"/><rect x=\"4\" y=\"15\" width=\"40\" height=\"3\" fill=\"#5C3D24\"/><circle cx=\"25\" cy=\"23\" r=\"9\" fill=\"#C9A66B\"/><circle cx=\"25\" cy=\"23\" r=\"6.5\" fill=\"#1A2138\"/><circle cx=\"25\" cy=\"23\" r=\"4\" fill=\"#3D5B8A\"/><circle cx=\"23.5\" cy=\"21.5\" r=\"1.4\" fill=\"#fff\" opacity=\".85\"/><rect x=\"36\" y=\"12\" width=\"5\" height=\"3\" rx=\"1\" fill=\"#E9B44C\"/></svg>", "roll": "<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M5 11h11l3 3h16v19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\" fill=\"#C9A66B\" stroke=\"#5C3D24\" stroke-width=\"1.2\"/><rect x=\"9\" y=\"8\" width=\"20\" height=\"16\" fill=\"#FBF7EC\" stroke=\"#B9AD8F\" transform=\"rotate(-6 19 16)\"/><rect x=\"12\" y=\"11\" width=\"13\" height=\"2\" fill=\"#1A2138\" transform=\"rotate(-6 19 16)\"/><rect x=\"12\" y=\"15\" width=\"10\" height=\"1.4\" fill=\"#9A917C\" transform=\"rotate(-6 19 16)\"/><path d=\"M5 17h30v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z\" fill=\"#E0C48A\" stroke=\"#5C3D24\" stroke-width=\"1.2\"/></svg>", "props": "<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"4\" y=\"30\" width=\"32\" height=\"5\" rx=\"1.5\" fill=\"#5C3D24\"/><path d=\"M20 30V5\" stroke=\"#9AA3B8\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><g fill=\"#FBF7EC\" stroke=\"#9A917C\"><rect x=\"11\" y=\"18\" width=\"18\" height=\"10\" transform=\"rotate(-8 20 23)\"/><rect x=\"12\" y=\"12\" width=\"16\" height=\"9\" transform=\"rotate(6 20 16)\"/></g><rect x=\"13\" y=\"14.5\" width=\"9\" height=\"1.5\" fill=\"#8B2D26\" transform=\"rotate(6 20 16)\"/></svg>"};
  function buildTray(){ trayEl=el('div','rg rg-tray','<button type="button" class="rg-tb cam" title="Press camera: snap anything on the page">'+TOOL_ICON.cam+'<span>Snap</span><b class="cnt"></b></button><button type="button" class="rg-tb hl" title="Highlighter: mark the key words">'+TOOL_ICON.hl+'<span>Highlight</span><b class="cnt"></b></button><button type="button" class="rg-tb roll" title="Evidence drawer: every clipping, highlight and photo">'+TOOL_ICON.roll+'<span>Evidence</span><b class="cnt"></b></button><button type="button" class="rg-tb props" title="How real newspapers worked">'+TOOL_ICON.props+'<span>Newsroom</span></button>');
    trayEl.id='rg-tools'; dockEl=el('div','rg rg-dock'); dockEl.appendChild(trayEl);
    var main=el('button','rg-dock-main','<span class="ic" aria-hidden="true">🧰</span><span class="lb">Tools</span><b class="cnt"></b>'); main.type='button'; main.setAttribute('aria-expanded','false'); main.setAttribute('aria-controls','rg-tools'); main.title='Tools: camera, highlighter, evidence drawer and more';
    dockEl.appendChild(main); document.body.appendChild(dockEl);
    function dock(o){ dockEl.classList.toggle('open',o); main.setAttribute('aria-expanded',o?'true':'false'); }
    /* hover opens; leaving starts a short timer, so moving from the button up to a tool never closes it */
    var hovT=null, hovAt=0, fine=window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches;
    if(fine){ dockEl.addEventListener('pointerenter',function(e){ if(e.pointerType!=='mouse') return; clearTimeout(hovT); if(!dockEl.classList.contains('open')){ dock(true); hovAt=Date.now(); } });
      dockEl.addEventListener('pointerleave',function(e){ if(e.pointerType!=='mouse') return; clearTimeout(hovT); hovT=setTimeout(function(){ if(!dockEl.contains(document.activeElement)||document.activeElement===main) dock(false); },650); }); }
    main.addEventListener('click',function(e){ if(e.detail>0&&Date.now()-hovAt<900){ return; } var o=!dockEl.classList.contains('open'); dock(o); if(o&&e.detail===0){ var f=$('.rg-tb',trayEl); if(f) setTimeout(function(){ f.focus(); },60); } });
    trayEl.addEventListener('click',function(e){ if(e.target.closest('.rg-tb')) dock(false); });
    document.addEventListener('click',function(e){ if(dockEl&&dockEl.classList.contains('open')&&!dockEl.contains(e.target)) dock(false); });
    dockEl.addEventListener('keydown',function(e){ if(e.key==='Escape'&&dockEl.classList.contains('open')){ dock(false); main.focus(); } });
    $('.hl',trayEl).addEventListener('click',function(){ if(html.classList.contains('rg-hlmode')){ setHL(false); return; } if(!store('hl-coached')) openCoach(); else setHL(true); });
    $('.cam',trayEl).addEventListener('click',startSnap); $('.roll',trayEl).addEventListener('click',function(){ openDrawer(); }); $('.props',trayEl).addEventListener('click',openProps);
    buildHighlighter(); buildHunt(); paintTray(); }
  function paintTray(){ if(!trayEl) return; var h=highlights().length, ph=photos().length, ms=(DATA.camera||{}).missions||[], md=ms.filter(function(x,i){ return photos().some(function(p){ return p.mission===i; }); }).length;
    $('.hl .cnt',trayEl).textContent=h||''; $('.cam .cnt',trayEl).textContent=ms.length?md+'/'+ms.length:''; $('.roll .cnt',trayEl).textContent=EV().length||''; if(dockEl) $('.rg-dock-main .cnt',dockEl).textContent=EV().length||''; paintHunt(); }
  var hlbar=null, pend=null;
  function buildHighlighter(){ hlbar=el('div','rg rg-hlbar','<span>🖍</span><button type="button" data-c="g" data-ev="1" class="ev"><i style="background:'+HL_COLORS.g.c+'"></i>＋ Save as evidence</button>'+['y','p'].map(function(k){ return '<button type="button" data-c="'+k+'"><i style="background:'+HL_COLORS[k].c+'"></i>'+HL_COLORS[k].n+'</button>'; }).join(''));
    document.body.appendChild(hlbar);
    var banner=el('div','rg rg-hlbanner','🖍 <b>Highlighter on.</b> Drag across a detail, then tap <b>＋ Save as evidence</b> (or Key word, or I wonder). <button type="button" data-a="tips">Tips</button><button type="button" data-a="off">Turn off</button>'); document.body.appendChild(banner);
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
    $$('button',hlbar).forEach(function(b){ b.addEventListener('pointerdown',function(e){ e.preventDefault(); }); b.addEventListener('click',function(){ if(!pend) return; var blk=pend.block, id='h'+Date.now().toString(36), c=b.dataset.c, a=highlights();
      var h={id:id,b:pend.b,s:pend.s,e:pend.e,t:pend.t,c:c,where:whereAmI(pend.block),meta:hlMetaFor(pend.block)}; a.push(h); saveHL(a); wrapHL(pend.block,pend.s,pend.e,c,id); window.getSelection().removeAllRanges(); hideBar(); SFX.scratch();
        if(b.dataset.ev||c==='g'){ var hc=hlCard(h), qa=evAsk(hc,blk); if(qa) hc.ask=qa; addEvidence(hc); } }); });
    document.addEventListener('click',function(e){ var m=e.target.closest&&e.target.closest('mark.rg-hl'); if(!m) return; if(!m.classList.contains('arm')){ $$('mark[data-hl="'+m.dataset.hl+'"]').forEach(function(x){ x.classList.add('arm'); }); setTimeout(function(){ $$('mark.arm').forEach(function(x){ x.classList.remove('arm'); }); },2500); return; } var hid=m.dataset.hl; unwrapHL(hid); saveHL(highlights().filter(function(h){ return h.id!==hid; })); if(EV().some(function(c){ return c.hl===hid; })){ S.ev=EV().filter(function(c){ return c.hl!==hid; }); save(); paintEvidence(); evToast(null,'Highlight removed, and taken out of your evidence drawer.'); } });
    var blocks=hlBlocks(); highlights().forEach(function(h){ var b=blocks[h.b]; if(!b||blockText(b).slice(h.s,h.e)!==h.t){ b=blocks.filter(function(x){ return blockText(x).indexOf(h.t)>-1; })[0]; if(!b) return; h.s=blockText(b).indexOf(h.t); h.e=h.s+h.t.length; } wrapHL(b,h.s,h.e,h.c,h.id); }); }
  function setHL(on){ html.classList.toggle('rg-hlmode',on); var b=trayEl&&$('.hl',trayEl); if(b) b.classList.toggle('on',on); SFX.clack(); if(!on&&hlbar) hlbar.classList.remove('show'); }
  function openCoach(){ var Co=DATA.hlCoach||{}, Pr=Co.practice||{}, m=modal(), toks=(Pr.text||'').split(' ');
    m.innerHTML='<div class="rg-sheet"><button class="x" type="button" aria-label="Close">✕</button><h3>🖍 '+esc(Co.title||'Highlight like an editor')+'</h3><div class="rg-tips">'+(Co.tips||[]).map(function(t){ return '<div class="rg-tip"><span>'+t[0]+'</span><div><b>'+esc(t[1])+'</b> '+esc(t[2])+'</div></div>'; }).join('')+'</div>'+
      (Pr.text?'<div class="rg-prac"><div class="q">'+esc(Pr.q)+'</div><div class="s">'+toks.map(function(w,i){ return '<button type="button" data-i="'+i+'">'+esc(w)+'</button>'; }).join(' ')+'</div><div class="fb"></div><button type="button" class="rg-btn alt ck">Check my key words</button></div>':'')+
      '<div class="row"><button type="button" class="rg-btn go">Start highlighting</button></div></div>';
    $('.x',m).addEventListener('click',function(){ closeModal(); });
    $('.go',m).addEventListener('click',function(){ store('hl-coached','1'); closeModal(); setHL(true); });
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
    huntEl=el('div','rg rg-hunt','<div class="cam">📷</div><div><div class="rg-game-k">Bonus · Photo assignment <span class="opt">optional</span></div><div class="t">'+esc(CAM.title||'Every newspaper needs pictures. Can you snap all '+MS.length+'?')+'</div><ol></ol><div class="row"><button type="button" class="rg-btn alt">📷 Try the camera</button><span>'+esc(CAM.how||'Tap 🧰 Tools at the bottom right, then 📷 Snap, then drag a box around anything on the page. Your photos print in your Reporter’s Notebook.')+'</span></div></div>');
    if(CAM.onPage) after(anchor,huntEl); else { huntEl=null; return; } $('button',huntEl).addEventListener('click',startSnap); paintHunt(); }
  function paintHunt(){ if(!huntEl) return; var MS=(DATA.camera||{}).missions||[], a=photos(), n=0; $('ol',huntEl).innerHTML=MS.map(function(ms,i){ var d=a.some(function(p){ return p.mission===i; }); if(d) n++; return '<li class="'+(d?'on':'')+'"><span>'+(d?'✅':'🎯')+'</span>'+esc(ms)+'</li>'; }).join(''); huntEl.classList.toggle('done',n===MS.length); }
  var ov=null;
  function snapMissions(){ var MS=(DATA.camera||{}).missions||[]; if(!MS.length) return ''; var a=photos(); return '<div class="ms"><span>Bonus photo assignment <i>(optional)</i>:</span><ol>'+MS.map(function(m,i){ var d=a.some(function(p){ return p.mission===i; }); return '<li class="'+(d?'on':'')+'">'+(d?'✅ ':'🎯 ')+esc(m)+'</li>'; }).join('')+'</ol></div>'; }
  function startSnap(){ var MAX=(DATA.camera||{}).max||8; if(photos().length>=MAX){ ticker('Your photo spots are full. Delete a photo in your evidence drawer to make room.'); return; }
    ov=el('div','rg rg-snapov','<div class="vf"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i></div><div class="tip"><span class="rec">● CAMERA ON</span><b>Drag a box around what you want to snap.</b><button type="button">✕ Cancel</button>'+snapMissions()+'</div><div class="mid"><span>📷</span>Press, hold and drag to draw your box</div><div class="box"></div>');
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
    m.innerHTML='<div class="rg-sheet"><button class="x" type="button" aria-label="Close">✕</button><h3>📷 New photo for the paper</h3><div class="rg-pola big"><img alt="" src="'+src+'"><input class="cap" maxlength="80" placeholder="Write a caption: what does this show?"></div>'+(MS.length?'<div class="rg-ms"><b>Is it for a photo assignment? (optional)</b>'+MS.map(function(ms,i){ var d=photos().some(function(p){ return p.mission===i; }); return '<button type="button" class="opt'+(d?' done':'')+'" data-m="'+i+'">'+(d?'✓ ':'')+esc(ms)+'</button>'; }).join('')+'</div>':'')+'<label class="rg-check"><input type="checkbox" class="toev" checked> Also put it in my evidence drawer</label><div class="err" role="alert"></div><div class="row"><button type="button" class="rg-btn sv">Save photo</button><button type="button" class="rg-btn alt ts">Toss it</button></div></div>';
    var pick=null; $$('.opt',m).forEach(function(b){ b.addEventListener('click',function(){ $$('.opt',m).forEach(function(x){ if(x!==b) x.classList.remove('on'); }); b.classList.toggle('on'); pick=b.classList.contains('on')?+b.dataset.m:null; SFX.clack(); }); });
    function close(){ closeModal(); } $('.x',m).addEventListener('click',close); $('.ts',m).addEventListener('click',close);
    $('.sv',m).addEventListener('click',function(){ var a=photos().slice(), ph={src:src,cap:$('.cap',m).value.trim(),tab:currentScene(),mission:pick,t:Date.now()}; a.push(ph);
      if(!savePhotos(a)){ MEMPH=a.slice(0,-1); $('.err',m).textContent='This computer is out of room for photos, so this one was not saved. Delete an older photo in your evidence drawer, or toss this one.'; SFX.bounce(); return; }
      if($('.toev',m).checked) addEvidence(photoCard(ph),true); close(); SFX.chime(); ticker(pick!==null?'Photo assignment done: '+MS[pick]:'Photo saved'+($('.toev',m).checked?' and added to your evidence drawer.':'.')); });
    setTimeout(function(){ var c=$('.cap',m); c&&c.focus(); },50); }
  function openRoll(){ var m=modal(), a=photos(), H=highlights();
    function grp(c){ var x=H.filter(function(h){ return h.c===c; }); return x.length?'<h4><i style="background:'+HL_COLORS[c].c+'"></i>'+HL_COLORS[c].n+'</h4>'+x.map(function(h){ return '<div class="rg-note-l">“'+esc(h.t)+'” <small>'+esc(h.where)+'</small></div>'; }).join(''):''; }
    m.innerHTML='<div class="rg-sheet"><button class="x" type="button" aria-label="Close">✕</button><h3>🗂 My clippings</h3><h4>📷 Photos ('+a.length+')</h4><div class="rg-roll">'+(a.length?a.map(function(p,i){ return '<div class="rg-pola"><img alt="" src="'+p.src+'"><div class="c">'+esc(p.cap||'(no caption)')+'</div><button type="button" class="del" data-i="'+i+'" title="Delete">🗑</button></div>'; }).join(''):'<p class="rg-empty">No photos yet. Tap the 📷 Snap camera, then drag a box around anything on the page.</p>')+'</div><h4>🖍 Highlights</h4>'+(H.length?grp('y')+grp('g')+grp('p'):'<p class="rg-empty">No highlights yet.</p>')+'<div class="row"><button type="button" class="rg-btn nb">📓 Download my Reporter’s Notebook</button></div></div>';
    $('.x',m).addEventListener('click',function(){ closeModal(); });
    $$('.del',m).forEach(function(b){ b.addEventListener('click',function(){ var x=photos().slice(); x.splice(+b.dataset.i,1); savePhotos(x); openRoll(); }); });
    $('.nb',m).addEventListener('click',notebook); }
  var PROPS=DATA.props||[];
  function openProps(){ var m=modal();
    m.innerHTML='<div class="rg-sheet rg-props"><button class="x" type="button" aria-label="Close">✕</button><h3>📐 The newsroom desk</h3><p class="sub">Tap a tool on the editor’s desk to learn how real newspapers were made.</p><div class="rg-prop-row">'+PROPS.map(function(p,i){ return '<button type="button" class="rg-prop" data-i="'+i+'"><span>'+esc(p.icon)+'</span>'+esc(p.name)+'</button>'; }).join('')+'</div><div class="rg-prop-fact"></div></div>';
    $('.x',m).addEventListener('click',function(){ closeModal(); });
    $$('.rg-prop',m).forEach(function(b){ b.addEventListener('click',function(){ var p=PROPS[+b.dataset.i]; $$('.rg-prop',m).forEach(function(x){ x.classList.toggle('on',x===b); }); $('.rg-prop-fact',m).innerHTML='<b>'+esc(p.name)+'.</b> '+esc(p.fact); SFX.paper(); S.m.props=S.m.props||{}; S.m.props[b.dataset.i]=1; save(); }); }); }

  /* ================================================================ the Reporter's Notebook: a page to keep */
  function notebookHTML(){ var e=function(s){ return esc(s==null?'':s); }, cu=current(), r=cu.r;
    var h='<h1>📓 My Reporter’s Notebook</h1><div class="sub">The Republic Gazette · Issue '+e(ISSUE)+' · '+e(DATA.lesson)+' · '+e(DATA.title)+(r.editor?' · Junior Editor '+e(r.editor):'')+' · '+e(cu.st)+'</div>';
    h+='<h2>My front page</h2>'+editionHTML(r,false)+'<h2>Everything I did today</h2><pre class="pk">'+e(recordText(r,cu.st))+'</pre>';
    var H=highlights(); if(H.length) h+='<h2>🖍 My highlights</h2><ul>'+H.map(function(x){ return '<li><b>'+e(HL_COLORS[x.c].n)+':</b> “'+e(x.t)+'” <small>('+e(x.where||'')+')</small></li>'; }).join('')+'</ul>';
    var ph=photos(); if(ph.length) h+='<h2>📷 My photos</h2><div class="ph">'+ph.map(function(p){ return '<figure><img alt="" src="'+p.src+'"><figcaption>'+e(p.cap||'')+'</figcaption></figure>'; }).join('')+'</div>';
    return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+e(DATA.lesson)+' · My Reporter’s Notebook</title><style>body{font-family:Georgia,serif;max-width:760px;margin:36px auto;padding:0 20px;color:#1A1F2E;line-height:1.55}h1{font-size:24px;margin:0;border-bottom:3px double #1A2138;padding-bottom:8px}.sub{color:#4A5568;font:14px system-ui,sans-serif;margin:6px 0 18px}h2{font-size:17px;color:#1A2138;border-bottom:1px solid #D4C9A8;padding-bottom:4px;margin:26px 0 8px}.rg-ed .mast{font:700 30px Georgia,serif;text-align:center;border-bottom:3px double #1A1F2E}.rg-ed .ed{display:flex;justify-content:space-between;font:11px system-ui;text-transform:uppercase;border-bottom:1px solid #aaa;padding:4px 0}.rg-ed .hl{font:900 28px/1.1 Georgia,serif}.rg-ed .by{font:700 12px system-ui;text-transform:uppercase;color:#555}.rg-ed .kick,.rg-ed .k{font:700 11px system-ui;letter-spacing:.1em;text-transform:uppercase;color:#8B2D26}.rg-ed sup{color:#8B2D26}.rg-ed .cap{border-left:3px solid #B8923E;background:#FAF6EA;margin:10px 0;padding:6px 10px}.rg-ed .corr{border:2px solid #1A1F2E;padding:6px 10px}.rg-ed .notes{font-size:14px}.ph{color:#999}.pk{white-space:pre-wrap;font:12px/1.5 ui-monospace,Menlo,monospace;background:#F7F5EF;padding:12px}.ph figure{margin:0;width:200px;display:inline-block;vertical-align:top}.ph img{width:100%;border:1px solid #ccc}.ph figcaption{font-size:12px}</style></head><body>'+h+'<p style="font:12px system-ui;color:#888;margin-top:30px">Optima Academy Online · Social Studies · Grade 5 · The Republic Gazette</p></body></html>'; }
  function notebook(){ if(typeof window.refreshGathered==='function') try{ window.refreshGathered(); }catch(e){} var htmlS=notebookHTML(), win=null; try{ win=window.open('','_blank'); }catch(e){}
    if(win){ win.document.write(htmlS); win.document.close(); setTimeout(function(){ try{ win.print(); }catch(e){} },400); return; }
    try{ var a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([htmlS],{type:'text/html'})); a.download=(DATA.lesson||'lesson')+'-reporters-notebook.html'; document.body.appendChild(a); a.click(); a.remove(); }catch(e){} }
  function buildNotebook(){ window.__rgNotebookHTML=notebookHTML;

    }

  /* ================================================================ review bar (?review), teardown, build */
  var OBS=[];
  function buildReviewBar(){ if(!/[?&#]review\b/.test(location.search+location.hash)||$('.rg-mockbar')) return;
    var bar=el('div','rg-mockbar','<b>✦ REVIEW · '+esc(DATA.lesson)+'</b><label><input type="checkbox" id="rgOn" checked> layer on</label><label><input type="checkbox" id="rgEmpty"> show empty media slots</label><button type="button" id="rgReset">reset progress</button>'); document.body.appendChild(bar);
    $('#rgOn',bar).addEventListener('change',function(e){ e.target.checked?build():teardown(); }); $('#rgEmpty',bar).addEventListener('change',function(e){ html.classList.toggle('rg-showempty',e.target.checked); });
    $('#rgReset',bar).addEventListener('click',function(){ try{ Object.keys(localStorage).forEach(function(k){ if(k.indexOf(KEY)===0) localStorage.removeItem(k); }); }catch(e){} S=fresh(); thread=S.thread; pendingKey=null; MEMPH=null; teardown(); build(); }); }
  function teardown(){ FSTEP=null; $$('.rg-bs-off').forEach(function(n){ n.classList.remove('rg-bs-off'); }); $$('.rg-notitle').forEach(function(n){ n.classList.remove('rg-notitle'); }); html.classList.remove('rg-on','rg-quiet','rg-hlmode','rg-cueing','rg-pub'); delete html.dataset.rgTab;
    OBS.forEach(function(o){ o.disconnect(); }); OBS=[];
    $$('mark.rg-hl').forEach(function(m){ var p=m.parentNode; while(m.firstChild) p.insertBefore(m.firstChild,m); p.removeChild(m); p.normalize(); });
    MOVES.reverse().forEach(function(x){ x[1].parentNode.insertBefore(x[0],x[1]); x[1].remove(); }); MOVES=[];
    TEXTS.reverse().forEach(function(x){ x[0].innerHTML=x[1]; }); TEXTS=[];
    $$('.rg').forEach(function(n){ n.remove(); });
    $$('[class*="rg-"]').forEach(function(n){ [].slice.call(n.classList).forEach(function(c){ if(c.indexOf('rg-')===0) n.classList.remove(c); }); });
    defTip=null; pressEl=wireEl=wireBtn=tickEl=stepperEl=trayEl=dockEl=hlbar=huntEl=bsEl=null; deskEl=readyEl=edEl=drawerEl=toastEl=null; html.classList.remove('rg-evdrawer-open'); R={}; unread=0; }
  function build(){ try{ P=loadProfile(); html.classList.add('rg-on'); if(QUIET) html.classList.add('rg-quiet');
      buildTop(); buildWire(); buildOpening(); buildPress(); buildStory(); if(openingWaiting) showNameCard(false); buildScenes(); buildLens(); buildModules();
      buildFactSteps(); buildQuizMiss(); buildHelp(); buildSteps(); buildRedPencil(); buildMorgue(); buildVoice(); buildBroadsheet(); buildMedia(); buildTray(); buildNotebook(); buildNewsroom(); tidyHeads(); buildDefs();
      var bl=document.getElementById('brief-byline-name'); if(bl&&!bl.value.trim()&&nm()) bl.value=nm();
      refreshPress(); render(); }catch(e){ console.warn('rg layer:',e); } }
  window.__rgSparkleAPI={teardown:teardown,build:build,data:DATA,sayKey:sayKey};
  function go(){ build(); buildReviewBar(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',go); else go();
})();
