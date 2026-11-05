// Ruta guiada: los ejercicios abiertos se autoevalúan; la prueba sí valida respuestas.
(() => {
 const KEY='python-ruta-guiada-v1';
 let ruta;
 try {ruta=JSON.parse(localStorage.getItem(KEY)) || {etapas:{}};} catch (_) {ruta={etapas:{}};}
 if (!ruta.etapas || typeof ruta.etapas !== 'object') ruta.etapas={};
 const guardar=()=>{try{localStorage.setItem(KEY,JSON.stringify(ruta));}catch(_){}};
 const datos=i=>ruta.etapas[i] ||= {leida:false,retos:[],aprobadas:[]};
 const terminada=i=>{const d=datos(i);return d.leida && d.retos.length>=10 && d.aprobadas.includes(0) && d.aprobadas.includes(1)};
 const habilitada=i=>i===0 || terminada(i-1);
 const avance=()=>{let i=0;while(i<lessons.length && terminada(i))i++;return Math.min(i,lessons.length-1)};
 let etapa=avance(), paso='mapa', reto=0, pregunta=0;
 const css=document.createElement('style'); css.textContent=`
 .camino-hero{padding:28px;background:linear-gradient(130deg,#5740c9,#8e73ee);color:white;border-radius:22px;margin-bottom:22px}.camino-hero h1{color:white;margin:6px 0}.camino-hero p{color:#eee9ff}.camino-meta{display:flex;gap:10px;flex-wrap:wrap}.camino-chip{border-radius:999px;background:#ffffff24;padding:7px 12px;font-size:12px}.camino-lista{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}.camino-card{border:1px solid #e3e2f1;border-radius:16px;padding:16px;background:#fff;text-align:left;color:#232b42;cursor:pointer}.camino-card:disabled{opacity:.58;cursor:not-allowed}.camino-card strong{display:block;margin:9px 0}.camino-card small{color:#6b7280}.camino-steps{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}.camino-step{background:#f2efff;color:#644fc9;padding:7px 10px;border-radius:999px;font-size:12px}.camino-progress{height:8px;border-radius:9px;background:#ecebf2;overflow:hidden;margin:12px 0 22px}.camino-progress span{display:block;background:#8266ed;height:100%}.camino-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}.camino-row button:disabled{opacity:.45;cursor:not-allowed}.camino-nota{background:#f7f5ff;border-radius:14px;padding:15px;margin:16px 0;color:#554f70}.camino-code{white-space:pre-wrap;overflow-wrap:anywhere}.camino-result{border-radius:14px;background:#effaf4;color:#286349;padding:16px;margin:16px 0}
 `;document.head.appendChild(css);
 const estiloSendero=document.createElement('style'); estiloSendero.textContent=`
 .sendero {position:relative;list-style:none;margin:28px auto 10px;padding:8px 0;max-width:620px;}
 .sendero::before {content:"";position:absolute;z-index:0;left:50%;top:45px;bottom:45px;border-left:5px dashed #d7cefb;transform:translateX(-50%);}
 .sendero-estacion {position:relative;z-index:1;width:100%;min-height:120px;display:flex;align-items:center;justify-content:center;}
 .sendero-estacion::before {content:"";position:absolute;left:50%;width:18%;border-top:4px dashed #d7cefb;z-index:-1;}
 .sendero-estacion:nth-child(even)::before {left:auto;right:50%;}
 .sendero-boton {width:min(310px,76%);min-height:94px;display:flex;align-items:center;gap:14px;padding:13px;text-align:left;border:1px solid #ebe7f7;border-radius:20px;background:#fff;box-shadow:0 5px 18px #403a7910;transform:translateX(24%);color:#242a41;cursor:pointer;}
 .sendero-estacion:nth-child(even) .sendero-boton {transform:translateX(-24%);}
 .sendero-boton:disabled {cursor:not-allowed;background:#f8f8fc;color:#717889;box-shadow:none;}
 .sendero-boton:focus-visible {outline:3px solid #765ce9;outline-offset:4px;}
 .sendero-nodo {display:grid;place-items:center;flex:0 0 58px;height:58px;border-radius:50%;font-weight:800;font-size:20px;background:#ebe9f4;color:#77798e;}
 .sendero-info {display:flex;flex-direction:column;gap:5px;min-width:0;}.sendero-info strong {font-size:15px;line-height:1.25;}.sendero-info small {font-size:11px;color:#74798c;line-height:1.25;}
 .sendero-estacion.actual .sendero-boton {border:2px solid #8165ef;box-shadow:0 8px 26px #785fdb24;}.sendero-estacion.actual .sendero-nodo {background:#795de5;color:white;box-shadow:0 0 0 6px #eee9ff;}
 .sendero-estacion.terminada .sendero-nodo {background:#dcf5e9;color:#16885d;}.sendero-estacion.terminada .sendero-boton {border-color:#c9efdc;}
 @media (max-width:580px) {.sendero::before {left:35px}.sendero-estacion {min-height:105px;justify-content:flex-start;padding-left:4px}.sendero-estacion::before {display:none}.sendero-boton,.sendero-estacion:nth-child(even) .sendero-boton {width:100%;transform:none;min-height:84px}.sendero-nodo {flex-basis:52px;height:52px}}
 `;document.head.appendChild(estiloSendero);
 const view=document.createElement('section');view.id='recorrido';view.className='view';document.querySelector('.footer').before(view);
 function mostrar(){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('visible',v===view));document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.view==='ruta'));document.getElementById('crumb').textContent='Mi ruta';pintar();window.scrollTo(0,0)}
 document.querySelectorAll('[data-view="ruta"],[data-go="ruta"]').forEach(b=>b.onclick=()=>{paso='mapa';mostrar()});
 document.getElementById('continue').onclick=()=>{etapa=avance();paso='leccion';mostrar()};
 function nodo(tag,txt,clase){const e=document.createElement(tag);if(txt!==null)e.textContent=txt;if(clase)e.className=clase;return e}
 function btn(texto,fn,clase='secondary',disabled=false){let b=nodo('button',texto,clase);b.disabled=disabled;b.onclick=fn;return b}
 function renderMapa(){
  const terminadas=lessons.filter((_,i)=>terminada(i)).length;
  const hero=nodo('div',null,'camino-hero');hero.innerHTML='<span>✦ TU CAMINO DE APRENDIZAJE</span><h1>Un tema a la vez, a tu ritmo.</h1><p>Lee, practica y completa la prueba para abrir la siguiente etapa.</p>';
  const m=nodo('div',null,'camino-meta');m.append(nodo('span',`${terminadas} de ${lessons.length} etapas completadas`,'camino-chip'),nodo('span','10 retos + prueba por etapa','camino-chip'));hero.appendChild(m);view.appendChild(hero);
  const panel=nodo('div',null,'panel content-panel');panel.append(nodo('h2','Tu ruta de Python'),nodo('p','Elige una etapa disponible. Tu avance se guarda en este navegador.'));
  const pista=nodo('ol',null,'sendero'); pista.setAttribute('aria-label','Etapas de aprendizaje');
  lessons.forEach((l,i)=>{
   const d=datos(i), hecha=terminada(i), disponible=habilitada(i), actual=disponible&&!hecha;
   const estado=hecha?'Completada':actual?'Tu siguiente paso':'Bloqueada';
   const item=nodo('li',null,'sendero-estacion '+(hecha?'terminada':actual?'actual':'bloqueada'));
   const boton=nodo('button',null,'sendero-boton');boton.disabled=!disponible;
   boton.setAttribute('aria-label',`Etapa ${i+1}: ${l.title}. ${estado}. ${d.retos.length} de 10 retos y ${d.aprobadas.length} de 2 preguntas.`);
   const burbuja=nodo('span',hecha?'✓':disponible?String(i+1):'🔒','sendero-nodo');burbuja.setAttribute('aria-hidden','true');
   const info=nodo('span',null,'sendero-info');info.append(nodo('small',`ETAPA ${String(i+1).padStart(2,'0')} · ${estado}`),nodo('strong',l.title),nodo('small',`${d.retos.length}/10 retos · ${d.aprobadas.length}/2 preguntas`));
   boton.append(burbuja,info);boton.onclick=()=>{etapa=i;paso='leccion';mostrar()};item.appendChild(boton);pista.appendChild(item);
  });panel.appendChild(pista);view.appendChild(panel)
 }
 function panelBase(){let p=nodo('div',null,'panel content-panel lesson-content');p.appendChild(btn('← Ver ruta',()=>{paso='mapa';mostrar()},'small-link'));p.append(nodo('p',`ETAPA ${etapa+1} DE ${lessons.length}`,'tag'),nodo('h1',lessons[etapa].title));let d=datos(etapa);let steps=nodo('div',null,'camino-steps');steps.append(nodo('span',`${d.leida?'✓':'1'} Lección`,'camino-step'),nodo('span',`${d.retos.length}/10 Retos`,'camino-step'),nodo('span',`${d.aprobadas.length}/2 Prueba final`,'camino-step'));p.appendChild(steps);let pct=Math.round((Number(d.leida)+d.retos.length+d.aprobadas.length)/13*100);let bar=nodo('div',null,'camino-progress'),fill=nodo('span');fill.style.width=pct+'%';bar.appendChild(fill);p.appendChild(bar);return p}
 function renderLeccion(p){const l=lessons[etapa];p.append(nodo('h2','1. Aprende el concepto'),nodo('p',l.intro));const contenido=contenidosGuiados[etapa];if(contenido){p.append(nodo('div','Objetivo: '+contenido.objetivo,'camino-nota'));contenido.bloques.forEach(([titulo,texto])=>p.append(nodo('h3',titulo),nodo('p',texto)));}else{p.append(nodo('div','Esta etapa es una introducción breve; su contenido detallado está pendiente de ampliar.','camino-nota'));}p.append(nodo('h3','Miremos un ejemplo'));let pre=nodo('pre',l.code,'camino-code');p.append(pre,nodo('p',l.explain),nodo('div','💡 '+l.hint,'camino-nota'));let row=nodo('div',null,'camino-row');row.appendChild(btn('Entendido, ir a los retos →',()=>{datos(etapa).leida=true;guardar();paso='retos';reto=0;pintar()},'action'));p.appendChild(row)}
 function renderRetos(p){const d=datos(etapa);p.append(nodo('h2',`2. Reto ${reto+1} de 10`));let idx=reto, accion=retosPorTema[etapa][idx%4],contexto=contextosEjercicio[Math.floor(idx/4)];const guiado=contenidosGuiados[etapa]?.retos[idx];p.append(nodo('p',guiado?guiado[0]:`${accion}. Situación: ${contexto}.`),nodo('div','💡 '+(guiado?guiado[1]:lessons[etapa].hint),'camino-nota'),nodo('p','Resuélvelo en tu computador o en el laboratorio. Después, marca si lo realizaste. La aplicación no corrige estos retos abiertos automáticamente.'));let row=nodo('div',null,'camino-row');row.append(btn('← Anterior',()=>{reto--;pintar()},'secondary',reto===0),btn(d.retos.includes(reto)?'✓ Realizado':'Marcar como realizado',()=>{if(!d.retos.includes(reto))d.retos.push(reto);guardar();pintar()},'action',d.retos.includes(reto)),btn('Siguiente →',()=>{reto++;pintar()},'secondary',reto>=9||!d.retos.includes(reto)));p.appendChild(row);let actions=nodo('div',null,'camino-row');actions.style.marginTop='14px';actions.append(btn('Ir al laboratorio',()=>botonLaboratorio.click()),btn('Comenzar prueba final →',()=>{pregunta=0;paso='prueba';pintar()},'action',d.retos.length<10));p.appendChild(actions)}
 function renderPrueba(p){const d=datos(etapa);let q=quiz[etapa+pregunta*lessons.length];p.append(nodo('h2',`3. Prueba final · Pregunta ${pregunta+1} de 2`),nodo('p',q.q));if(q.code)p.appendChild(nodo('pre',q.code,'camino-code'));let ops=nodo('div'),feedback=nodo('div',null,'camino-nota');feedback.setAttribute('role','status');let row=nodo('div',null,'camino-row');let next=btn(pregunta===0?'Siguiente pregunta →':'Terminar etapa →',()=>{if(pregunta===0){pregunta=1;paso='prueba'}else paso='terminada';pintar()},'action',!d.aprobadas.includes(pregunta));let options=q.a.map((v,i)=>({v,correct:i===q.c}));for(let i=options.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]]}options.forEach(o=>{let b=btn(o.v,()=>{if(d.aprobadas.includes(pregunta))return;if(o.correct){d.aprobadas.push(pregunta);guardar();feedback.textContent='¡Correcto! '+q.e;next.disabled=false;b.classList.add('correct')}else{feedback.textContent='Aún no. Inténtalo de nuevo. Pista: '+lessons[etapa].hint;b.classList.add('wrong')}},'option');ops.appendChild(b)});if(d.aprobadas.includes(pregunta))feedback.textContent='Ya respondiste correctamente esta pregunta. '+q.e;row.appendChild(next);p.append(ops,feedback,row)}
 function renderTerminada(p){p.append(nodo('h2','¡Etapa completada! 🎉'),nodo('div','Terminaste la lección, los 10 retos y las dos preguntas de la prueba.','camino-result'));let row=nodo('div',null,'camino-row');row.appendChild(btn('Ver mi ruta',()=>{paso='mapa';mostrar()}));if(etapa<lessons.length-1)row.appendChild(btn('Siguiente etapa →',()=>{etapa++;paso='leccion';mostrar()},'action'));p.appendChild(row)}
 function pintar(){view.replaceChildren();if(paso==='mapa'){renderMapa();return}if(!habilitada(etapa)){paso='mapa';renderMapa();return}const p=panelBase();if(paso==='leccion')renderLeccion(p);if(paso==='retos')renderRetos(p);if(paso==='prueba')renderPrueba(p);if(paso==='terminada')renderTerminada(p);view.appendChild(p)}
})();
