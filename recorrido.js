// Ruta guiada: los ejercicios abiertos se autoevalúan; la prueba sí valida respuestas.
(() => {
 const KEY='python-ruta-guiada-v1';
 let ruta;
 try {ruta=JSON.parse(localStorage.getItem(KEY)) || {etapas:{}};} catch (_) {ruta={etapas:{}};}
 if (!ruta.etapas || typeof ruta.etapas !== 'object') ruta.etapas={};
 const guardar=()=>{try{localStorage.setItem(KEY,JSON.stringify(ruta));}catch(_){} sincronizar()};
 const datos=i=>{
  const d=ruta.etapas[i] ||= {leida:false,retos:[],aprobadas:[]};
  // Solo migramos las etapas modificadas: conservamos los dos retos de código.
  // Las preguntas nuevas se vuelven a comprobar, pues cambiaron de contenido.
  if(i>=8 && i<=39 && d.versionPractica!==2){
   if(Array.isArray(d.verificadosAvanzados)) d.verificadosAvanzados=d.verificadosAvanzados.filter(n=>n<2);
   d.versionPractica=2;
  }
  return d;
 };
 const cantidad=i=>i===0 ? 14 : i<6 ? 15 : practicaExtendida[i] ? 12 : 4;
 const completados=i=>{const d=datos(i); return i<6 ? (d.verificados||[]).length : (d.verificadosAvanzados||[]).length};
 const terminada=i=>{const d=datos(i);return d.leida && completados(i)>=cantidad(i) && (evaluacionesEspeciales[i] ? d.examenAprobado===true : (d.aprobadas.includes(0) && d.aprobadas.includes(1)))};
 const habilitada=i=>i===0 || terminada(i-1);
 function sincronizar(){const n=lessons.filter((_,i)=>terminada(i)).length, porcentaje=Math.round(n/lessons.length*100);const cuenta=document.getElementById('progress-count'),porc=document.getElementById('progress-percent'),barra=document.getElementById('progress-bar'),ring=document.getElementById('ring');if(cuenta)cuenta.textContent=`${n} de ${lessons.length}`;if(porc)porc.textContent=porcentaje+'%';if(barra)barra.style.width=porcentaje+'%';if(ring){ring.dataset.label=porcentaje+'%';ring.style.setProperty('--pct',porcentaje)}}
 document.querySelector('[data-view="progreso"]').addEventListener('click',()=>{const el=document.getElementById('progress-detail'),n=lessons.filter((_,i)=>terminada(i)).length;el.textContent=`Ruta completada: ${n} de ${lessons.length} etapas. Se guarda en este navegador y dispositivo.`;});
 const reiniciar=document.getElementById('reset-progress');reiniciar.onclick=()=>{if(confirm('¿Quieres borrar todo el progreso guardado en este navegador?')){ruta={etapas:{}};state={completed:[],attempts:0,correct:0,found:[]};save();guardar();renderAll();sincronizar();renderGame();renderProgress();document.getElementById('progress-detail').textContent='Ruta completada: 0 de '+lessons.length+' etapas.'}};

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
 document.getElementById('continue').onclick=()=>{etapa=avance();const d=datos(etapa);paso=d.leida?'retos':'leccion';reto=Array.from({length:cantidad(etapa)},(_,i)=>i).find(i=>!(etapa<6?(d.verificados||[]):(d.verificadosAvanzados||[])).includes(i)) ?? 0;mostrar()};
 sincronizar();
 function nodo(tag,txt,clase){const e=document.createElement(tag);if(txt!==null)e.textContent=txt;if(clase)e.className=clase;return e}
 function btn(texto,fn,clase='secondary',disabled=false){let b=nodo('button',texto,clase);b.disabled=disabled;b.onclick=fn;return b}
 function renderMapa(){
  const terminadas=lessons.filter((_,i)=>terminada(i)).length;
  const hero=nodo('div',null,'camino-hero');hero.innerHTML='<span>✦ TU CAMINO DE APRENDIZAJE</span><h1>Un tema a la vez, a tu ritmo.</h1><p>Lee, practica y completa la prueba para abrir la siguiente etapa.</p>';
  const ir=btn('Continuar mi aprendizaje →',()=>{etapa=avance();const d=datos(etapa);paso=d.leida?'retos':'leccion';reto=Math.max(0,Array.from({length:cantidad(etapa)},(_,i)=>i).find(i=>!(etapa<6?(d.verificados||[]):(d.verificadosAvanzados||[])).includes(i)) ?? 0);mostrar()},'action');hero.appendChild(ir); const m=nodo('div',null,'camino-meta');m.append(nodo('span',`${terminadas} de ${lessons.length} etapas completadas`,'camino-chip'),nodo('span','Retos y prueba por etapa','camino-chip'));hero.appendChild(m);view.appendChild(hero);
  const panel=nodo('div',null,'panel content-panel');panel.append(nodo('h2','Tu ruta de Python'),nodo('p','Elige una etapa disponible. Tu avance se guarda en este navegador. Las 40 etapas incluyen evaluaciones de 15 preguntas. En los ejercicios de código se comprueba la salida.'));
  const pista=nodo('ol',null,'sendero'); pista.setAttribute('aria-label','Etapas de aprendizaje');
  lessons.forEach((l,i)=>{
   const d=datos(i), hecha=terminada(i), disponible=habilitada(i), actual=disponible&&!hecha;
   const estado=hecha?'Completada':actual?'Tu siguiente paso':'Bloqueada';
   const item=nodo('li',null,'sendero-estacion '+(hecha?'terminada':actual?'actual':'bloqueada'));
   const boton=nodo('button',null,'sendero-boton');boton.disabled=!disponible;
   boton.setAttribute('aria-label',`Etapa ${i+1}: ${l.title}. ${estado}. ${completados(i)} de ${cantidad(i)} retos y ${evaluacionesEspeciales[i] ? (d.examenAprobado ? 15 : 0) : d.aprobadas.length} de ${evaluacionesEspeciales[i] ? 15 : 2} preguntas.`);
   const burbuja=nodo('span',hecha?'✓':disponible?String(i+1):'🔒','sendero-nodo');burbuja.setAttribute('aria-hidden','true');
   const info=nodo('span',null,'sendero-info');info.append(nodo('small',`ETAPA ${String(i+1).padStart(2,'0')} · ${estado}`),nodo('strong',l.title),nodo('small',`${completados(i)}/${cantidad(i)} retos · ${evaluacionesEspeciales[i] ? (d.examenAprobado ? 15 : 0) : d.aprobadas.length}/${evaluacionesEspeciales[i] ? 15 : 2} preguntas`));
   boton.append(burbuja,info);boton.onclick=()=>{etapa=i;paso=d.leida?'retos':'leccion';reto=Array.from({length:cantidad(i)},(_,j)=>j).find(j=>!(i<6?(d.verificados||[]):(d.verificadosAvanzados||[])).includes(j)) ?? 0;mostrar()};item.appendChild(boton);pista.appendChild(item);
  });panel.appendChild(pista);view.appendChild(panel)
 }
 function panelBase(){let p=nodo('div',null,'panel content-panel lesson-content');p.appendChild(btn('← Ver ruta',()=>{paso='mapa';mostrar()},'small-link'));if(paso!=='leccion' && paso!=='resultado_examen')p.appendChild(btn('Repasar explicación',()=>{paso='leccion';pintar()},'small-link'));p.append(nodo('p',`ETAPA ${etapa+1} DE ${lessons.length}`,'tag'),nodo('h1',lessons[etapa].title));let d=datos(etapa);let steps=nodo('div',null,'camino-steps');steps.append(nodo('span',`${d.leida?'✓':'1'} Lección`,'camino-step'),nodo('span',`${completados(etapa)}/${cantidad(etapa)} Retos`,'camino-step'),nodo('span',`${evaluacionesEspeciales[etapa] ? (d.examenAprobado ? 15 : 0) : d.aprobadas.length}/${evaluacionesEspeciales[etapa] ? 15 : 2} Prueba final`,'camino-step'));p.appendChild(steps);let pct=Math.round((Number(d.leida)+completados(etapa)+(evaluacionesEspeciales[etapa]?(d.examenAprobado?2:0):d.aprobadas.length))/(cantidad(etapa)+3)*100);let bar=nodo('div',null,'camino-progress'),fill=nodo('span');fill.style.width=pct+'%';bar.appendChild(fill);p.appendChild(bar);return p}
 function renderLeccion(p){const l=lessons[etapa];p.append(nodo('h2','1. Aprende el concepto'),nodo('p',l.intro));const contenido=contenidosGuiados[etapa];if(contenido){p.append(nodo('div','Objetivo: '+contenido.objetivo,'camino-nota'));contenido.bloques.forEach(([titulo,texto])=>p.append(nodo('h3',titulo),nodo('p',texto)));}else{p.append(nodo('div','Esta etapa es una introducción breve; su contenido detallado está pendiente de ampliar.','camino-nota'));}p.append(nodo('h3','Miremos un ejemplo'));let pre=nodo('pre',l.code,'camino-code');p.append(pre,nodo('p',l.explain),nodo('div','💡 '+l.hint,'camino-nota'));let guia=nodo('details',null,'camino-nota');guia.append(nodo('summary','Vamos paso a paso: cómo leer el ejemplo'),nodo('p','1. Lee el código de arriba hacia abajo. Identifica los nombres y los valores.'),nodo('p','2. Observa los paréntesis, los dos puntos y la sangría cuando aparezcan.'),nodo('p','3. Predice qué pasará antes de ejecutarlo; después compara tu idea con la explicación.'),nodo('p','4. Si algo no queda claro, vuelve a leer el bloque correspondiente o prueba un cambio pequeño en el laboratorio.'));p.appendChild(guia);let row=nodo('div',null,'camino-row');row.appendChild(btn('Entendido, ir a los retos →',()=>{datos(etapa).leida=true;guardar();paso='retos';reto=0;pintar()},'action'));p.appendChild(row)}
 function renderRetos(p){if(etapa>=6){renderRetoAvanzado(p);return;}if(etapa===0 || etapa===1 || Boolean(retosFundamentos[etapa])){renderRetoInteractivo(p);return;}const d=datos(etapa);p.append(nodo('h2',`2. Reto ${reto+1} de 10`));let idx=reto, accion=retosPorTema[etapa][idx%4],contexto=contextosEjercicio[Math.floor(idx/4)];const guiado=contenidosGuiados[etapa]?.retos[idx];p.append(nodo('p',guiado?guiado[0]:`${accion}. Situación: ${contexto}.`),nodo('div','💡 '+(guiado?guiado[1]:lessons[etapa].hint),'camino-nota'),nodo('p','Resuélvelo en tu computador o en el laboratorio. Después, marca si lo realizaste. La aplicación no corrige estos retos abiertos automáticamente.'));let row=nodo('div',null,'camino-row');row.append(btn('← Anterior',()=>{reto--;pintar()},'secondary',reto===0),btn(d.retos.includes(reto)?'✓ Realizado':'Marcar como realizado',()=>{if(!d.retos.includes(reto))d.retos.push(reto);guardar();pintar()},'action',d.retos.includes(reto)),btn('Siguiente →',()=>{reto++;pintar()},'secondary',reto>=9||!d.retos.includes(reto)));p.appendChild(row);let actions=nodo('div',null,'camino-row');actions.style.marginTop='14px';actions.append(btn('Ir al laboratorio',()=>botonLaboratorio.click()),btn('Comenzar prueba final →',()=>iniciarRepaso(),'action',d.retos.length<10));p.appendChild(actions)}
 function renderRetoInteractivo(p){
  const d=datos(etapa),x=(etapa===0 ? retosInteractivos : etapa===1 ? retosVariables : retosFundamentos[etapa])[reto], total=cantidad(etapa);
  // Conservar el avance anterior; los nuevos retos requieren su propia verificación.
  if(!Array.isArray(d.verificados)) d.verificados=[];
  const hecho=d.verificados.includes(reto);
  p.append(nodo('h2',`2. Reto ${reto+1} de ${total} · ${x.titulo}`),nodo('p',x.pregunta));
  const feedback=nodo('div',hecho?'Reto verificado. Puedes practicar de nuevo.':'Elige o escribe tu respuesta.','camino-nota');feedback.setAttribute('role','status');
  const opciones=nodo('div'),row=nodo('div',null,'camino-row');
  const siguiente=btn('Siguiente →',()=>{reto++;pintar()},'secondary',reto>=total-1||!hecho);
  const prueba=btn('Comenzar prueba final →',()=>iniciarRepaso(),'action',d.verificados.length<total);
  const verificar=()=>{if(!d.verificados.includes(reto))d.verificados.push(reto);if(!d.retos.includes(reto))d.retos.push(reto);guardar();feedback.textContent='¡Correcto! '+x.explicacion;siguiente.disabled=reto>=total-1;prueba.disabled=d.verificados.length<total;};
  if(x.tipo==='opciones'){
    x.opciones.forEach((texto,i)=>{const b=btn(texto,()=>{if(i===x.correcta){b.classList.add('correct');verificar()}else{b.classList.add('wrong');feedback.textContent='Aún no. Pista: '+x.pista}},'option');opciones.appendChild(b)});
  }else{
    const label=nodo('label','Tu código en Python');const editor=nodo('textarea');editor.value=x.inicial;editor.setAttribute('aria-label','Tu código en Python');editor.spellcheck=false;editor.style.cssText='display:block;width:100%;min-height:140px;margin:10px 0;padding:14px;background:#252b3b;color:white;border:0;border-radius:12px;font:14px/1.5 monospace;resize:vertical';
    const salida=nodo('pre','La salida aparecerá aquí.','camino-code');salida.setAttribute('aria-live','polite');
    let worker=null,url=null,timer=null;const run=btn('▶ Ejecutar y comprobar',()=>{
      if(worker)return;salida.textContent='';feedback.textContent='Cargando Python y ejecutando…';run.disabled=true;
      try{url=URL.createObjectURL(new Blob([codigoTrabajador],{type:'text/javascript'}));worker=new Worker(url,{type:'module'});let out='';
      const limpiar=()=>{clearTimeout(timer);if(worker)worker.terminate();if(url)URL.revokeObjectURL(url);worker=null;url=null;run.disabled=false};
      worker.onmessage=({data})=>{if(data.tipo==='estado')feedback.textContent=data.texto;if(data.tipo==='salida'){out+=data.texto+'\n';salida.textContent=out}if(data.tipo==='error'){salida.textContent=data.texto;feedback.textContent='Revisa el error y vuelve a intentarlo. Pista: '+x.pista;limpiar()}if(data.tipo==='fin'){const actual=out.replace(/\r\n/g,'\n').replace(/\n$/,'');if(actual===x.salida)verificar();else feedback.textContent='La salida todavía no coincide. Pista: '+x.pista;limpiar()}};
      worker.onerror=()=>{feedback.textContent='No se pudo cargar Python. Comprueba la conexión y vuelve a intentarlo.';limpiar()};worker.postMessage({codigo:editor.value});timer=setTimeout(()=>{feedback.textContent='Se detuvo por tiempo. Revisa tu código.';limpiar()},30000);
      }catch(e){feedback.textContent='No se pudo iniciar Python: '+e.message;run.disabled=false}
    },'action');opciones.append(label,editor,nodo('p','La comprobación compara la salida solicitada; revisa también que tu código use el concepto indicado.'),run,nodo('p','Resultado:'),salida);
  }
  row.append(btn('← Anterior',()=>{reto--;pintar()},'secondary',reto===0),siguiente,prueba);
  p.append(opciones,feedback,row);
 }
 function renderRetoAvanzado(p){
  const d=datos(etapa); if(!Array.isArray(d.verificadosAvanzados))d.verificadosAvanzados=[];
  if(reto<2){
   const x=retosAvanzados[etapa][reto];
   p.append(nodo('h2',`2. Reto ${reto+1} de ${cantidad(etapa)} · ${x.titulo}`),nodo('p',x.pregunta));
   const editor=nodo('textarea');editor.value=x.inicial;editor.setAttribute('aria-label','Escribe tu código Python');editor.spellcheck=false;editor.style.cssText='display:block;width:100%;min-height:160px;margin:10px 0;padding:14px;background:#252b3b;color:white;border:0;border-radius:12px;font:14px/1.5 monospace;resize:vertical';
   const ayuda=nodo('details',null,'camino-nota');ayuda.append(nodo('summary','Pista 1: orienta tu solución'),nodo('p',x.pista));const ayudaDos=nodo('details',null,'camino-nota');ayudaDos.append(nodo('summary','Pista 2: revisa tu resultado'),nodo('p','Divide el ejercicio en pasos: prepara los datos, aplica la operación solicitada y muestra el resultado. Compara lo que aparece con la consigna.'));
   const estado=nodo('div','Escribe tu solución y ejecútala.','camino-nota');estado.setAttribute('role','status');const salida=nodo('pre','La salida aparecerá aquí.','camino-code');salida.setAttribute('aria-live','polite');
   const siguiente=btn('Siguiente →',()=>{reto++;pintar()},'secondary',!d.verificadosAvanzados.includes(reto));
   let worker=null,url=null,timer=null;
   const ejecutar=btn('▶ Ejecutar y comprobar',()=>{if(worker)return;estado.textContent='Cargando Python y ejecutando…';salida.textContent='';ejecutar.disabled=true;let texto='';
    const limpiar=()=>{clearTimeout(timer);worker?.terminate();if(url)URL.revokeObjectURL(url);worker=null;url=null;ejecutar.disabled=false};
    try{url=URL.createObjectURL(new Blob([codigoTrabajador],{type:'text/javascript'}));worker=new Worker(url,{type:'module'});worker.onmessage=({data})=>{if(data.tipo==='estado')estado.textContent=data.texto;if(data.tipo==='salida'){texto+=data.texto+'\n';salida.textContent=texto}if(data.tipo==='error'){salida.textContent=data.texto;estado.textContent='Revisa el error y prueba de nuevo. Puedes abrir la pista.';limpiar()}if(data.tipo==='fin'){const actual=texto.replace(/\r\n/g,'\n').replace(/\n$/,'');if(actual===x.salida){if(!d.verificadosAvanzados.includes(reto))d.verificadosAvanzados.push(reto);guardar();estado.textContent='¡La salida coincide! '+x.explicacion;siguiente.disabled=false}else estado.textContent='La salida no coincide todavía. Compara lo que aparece con lo que pide el reto y consulta la pista.';limpiar()}};worker.onerror=()=>{estado.textContent='No se pudo cargar Python. Comprueba la conexión a internet.';limpiar()};worker.postMessage({codigo:editor.value});timer=setTimeout(()=>{estado.textContent='Ejecución detenida por tiempo. Revisa si hay un ciclo que no termina.';limpiar()},60000)}catch(e){estado.textContent='No fue posible iniciar Python.';limpiar()}
   },'action');
   p.append(editor,ayuda,ayudaDos,nodo('p','La comprobación compara la salida. Después revisa si usaste el concepto solicitado.'),ejecutar,nodo('p','Salida:'),salida,estado);const row=nodo('div',null,'camino-row');row.append(btn('← Anterior',()=>{reto--;pintar()},'secondary',reto===0),siguiente);p.appendChild(row);return;
  }
  const ampliadas=practicaExtendida[etapa];const q=ampliadas ? ampliadas[reto-2] : quiz[etapa+(reto-2)*lessons.length];p.append(nodo('h2',`2. Reto ${reto+1} de ${cantidad(etapa)} · Comprueba tu idea`),nodo('p',q.q));if(q.code)p.appendChild(nodo('pre',q.code,'camino-code'));const feedback=nodo('div','Elige una respuesta.','camino-nota');feedback.setAttribute('role','status');const row=nodo('div',null,'camino-row');const sig=btn(reto===cantidad(etapa)-1?'Ir a la prueba final →':'Siguiente →',()=>{if(reto===cantidad(etapa)-1){iniciarRepaso();return}else reto++;pintar()},'action',!d.verificadosAvanzados.includes(reto));const opcionesPractica=q.a.map((opcion,i)=>({opcion,i}));for(let k=opcionesPractica.length-1;k>0;k--){let j=Math.floor(Math.random()*(k+1));[opcionesPractica[k],opcionesPractica[j]]=[opcionesPractica[j],opcionesPractica[k]]}opcionesPractica.forEach(({opcion,i})=>p.appendChild(btn(opcion,()=>{if(i===q.c){if(!d.verificadosAvanzados.includes(reto))d.verificadosAvanzados.push(reto);guardar();feedback.textContent='¡Correcto! '+q.e;sig.disabled=false}else feedback.textContent='Todavía no. Pista: '+lessons[etapa].hint},'option')));if(d.verificadosAvanzados.includes(reto))feedback.textContent='Ya resolviste este reto. '+q.e;row.append(btn('← Anterior',()=>{reto--;pintar()},'secondary'),sig);p.append(feedback,row);
 }
 let revisionExamen=null;
 function renderExamenEspecial(p){
  const d=datos(etapa), examen=evaluacionesEspeciales[etapa];
  if(!d.intentoExamen){
   p.append(nodo('h2','Evaluación del tema'),nodo('p','Son 15 preguntas nuevas. Debes acertar al menos 12 (80 %) para desbloquear el siguiente tema.'),nodo('div','Si no apruebas, se reiniciará el progreso de toda la ruta desde la primera etapa. Antes de comenzar puedes repasar.','camino-nota'));
   const acciones=nodo('div',null,'camino-row');acciones.append(btn('← Repasar el tema',()=>{paso='leccion';pintar()}),btn('Comenzar evaluación',()=>{d.intentoExamen={respuestas:[]};guardar();pintar()},'action'));p.append(acciones);return;
  }
  const respuestas=d.intentoExamen.respuestas, indice=respuestas.length;
  if(indice>=examen.length){
   const correctas=respuestas.filter((v,i)=>v===examen[i].c).length, aprobado=correctas>=12;
   revisionExamen={respuestas:respuestas.slice(),correctas,aprobado,examen};
   if(aprobado){d.examenAprobado=true;delete d.intentoExamen;guardar()}else{ruta={etapas:{}};state={completed:[],attempts:0,correct:0,found:[]};save();guardar();renderAll();sincronizar()}
   paso='resultado_examen';pintar();return;
  }
  const q=examen[indice];p.append(nodo('h2',`Pregunta ${indice+1} de 15`),nodo('p',q.q));if(q.code)p.appendChild(nodo('pre',q.code,'camino-code'));
  const orden=q.a.map((texto,i)=>({texto,i}));for(let k=orden.length-1;k>0;k--){let j=Math.floor(Math.random()*(k+1));[orden[k],orden[j]]=[orden[j],orden[k]]}orden.forEach(({texto,i})=>p.appendChild(btn(texto,()=>{respuestas.push(i);guardar();pintar()},'option')));
  p.append(nodo('p','Tu respuesta se guarda al seleccionarla. Al final podrás revisar todas las explicaciones.','camino-nota'));
 }
 function renderResultadoExamen(p){
  const res=revisionExamen;if(!res){paso='mapa';pintar();return;}p.append(nodo('h2',res.aprobado?'¡Evaluación aprobada!':'Evaluación no aprobada'),nodo('div',`Resultado: ${res.correctas} de 15. ${res.aprobado?'Desbloqueaste la siguiente etapa.':'La ruta se reinició desde la primera etapa.'}`,'camino-nota'));
  res.examen.forEach((q,i)=>{const elegido=res.respuestas[i],bloque=nodo('div',null,'camino-nota');bloque.append(nodo('strong',`${i+1}. ${q.q}`),nodo('p',`Tu respuesta: ${q.a[elegido]} ${elegido===q.c?'✓':'✗'}`),nodo('p',`Respuesta correcta: ${q.a[q.c]}`),nodo('p',q.e));p.appendChild(bloque)});
  p.appendChild(btn('Volver a la ruta',()=>{revisionExamen=null;paso='mapa';mostrar()},'action'));
 }
 let repaso=null;
 function iniciarRepaso(){
  if(etapa===0){pregunta=0;paso='prueba';pintar();return;}
  const disponibles=quiz.filter(q=>Number.isInteger(q.lesson)&&q.lesson<etapa&&terminada(q.lesson));
  if(!disponibles.length){pregunta=0;paso='prueba';pintar();return;}
  const porTema=new Map();disponibles.forEach(q=>{if(!porTema.has(q.lesson))porTema.set(q.lesson,[]);porTema.get(q.lesson).push(q)});
  const temas=[...porTema.keys()];for(let i=temas.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[temas[i],temas[j]]=[temas[j],temas[i]]}
  const seleccion=temas.slice(0,Math.min(5,temas.length)).map(i=>{const lista=porTema.get(i);return lista[Math.floor(Math.random()*lista.length)]});
  repaso={preguntas:seleccion,indice:0,correcta:false};paso='repaso';pintar();
 }
 function renderRepaso(p){
  if(!repaso||repaso.indice>=repaso.preguntas.length){pregunta=0;paso='prueba';pintar();return;}
  const q=repaso.preguntas[repaso.indice];p.append(nodo('h2',`Repaso acumulativo · ${repaso.indice+1} de ${repaso.preguntas.length}`),nodo('p',`Recordemos: ${lessons[q.lesson].title}`),nodo('p',q.q));
  if(q.code)p.appendChild(nodo('pre',q.code,'camino-code'));
  const aviso=nodo('div','El repaso no afecta tu progreso. Intenta responder y revisa la explicación.','camino-nota');aviso.setAttribute('role','status');
  const siguiente=btn(repaso.indice===repaso.preguntas.length-1?'Ir a la evaluación →':'Siguiente pregunta →',()=>{repaso.indice++;repaso.correcta=false;pintar()},'action',!repaso.correcta);
  const opciones=q.a.map((texto,i)=>({texto,i}));for(let i=opciones.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opciones[i],opciones[j]]=[opciones[j],opciones[i]]}
  opciones.forEach(({texto,i})=>{const boton=btn(texto,()=>{if(i===q.c){repaso.correcta=true;boton.classList.add('correct');aviso.textContent='¡Correcto! '+q.e;siguiente.disabled=false}else{boton.classList.add('wrong');aviso.textContent='Aún no. Pista: '+lessons[q.lesson].hint}},'option');p.appendChild(boton)});
  const acciones=nodo('div',null,'camino-row');acciones.append(btn('Volver a la práctica',()=>{paso='retos';pintar()}),siguiente);p.append(aviso,acciones);
 }
 function renderPrueba(p){if(evaluacionesEspeciales[etapa]){renderExamenEspecial(p);return;}const d=datos(etapa);let q=quiz[etapa+pregunta*lessons.length];p.append(nodo('h2',`3. Prueba final · Pregunta ${pregunta+1} de 2`),nodo('p',q.q));if(q.code)p.appendChild(nodo('pre',q.code,'camino-code'));let ops=nodo('div'),feedback=nodo('div',null,'camino-nota');feedback.setAttribute('role','status');let row=nodo('div',null,'camino-row');let next=btn(pregunta===0?'Siguiente pregunta →':'Terminar etapa →',()=>{if(pregunta===0){pregunta=1;paso='prueba'}else paso='terminada';pintar()},'action',!d.aprobadas.includes(pregunta));let options=q.a.map((v,i)=>({v,correct:i===q.c}));for(let i=options.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]]}options.forEach(o=>{let b=btn(o.v,()=>{if(d.aprobadas.includes(pregunta))return;if(o.correct){d.aprobadas.push(pregunta);guardar();feedback.textContent='¡Correcto! '+q.e;next.disabled=false;b.classList.add('correct')}else{feedback.textContent='Aún no. Inténtalo de nuevo. Pista: '+lessons[etapa].hint;b.classList.add('wrong')}},'option');ops.appendChild(b)});if(d.aprobadas.includes(pregunta))feedback.textContent='Ya respondiste correctamente esta pregunta. '+q.e;row.appendChild(next);p.append(ops,feedback,row)}
 function renderTerminada(p){p.append(nodo('h2','¡Etapa completada! 🎉'),nodo('div','Terminaste la lección, los retos y las dos preguntas de la prueba.','camino-result'));let row=nodo('div',null,'camino-row');row.appendChild(btn('Ver mi ruta',()=>{paso='mapa';mostrar()}));if(etapa<lessons.length-1)row.appendChild(btn('Siguiente etapa →',()=>{etapa++;paso='leccion';mostrar()},'action'));p.appendChild(row)}
 const entrevista=document.createElement('section');entrevista.id='entrevista';entrevista.className='view';document.querySelector('.footer').before(entrevista);
 const botonEntrevista=document.createElement('button');botonEntrevista.textContent='🎙 Simulacro de entrevista';botonEntrevista.onclick=()=>abrirEntrevista();document.querySelector('.nav').appendChild(botonEntrevista);
 let simulacro=null;
 function abrirEntrevista(){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('visible',v===entrevista));document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b===botonEntrevista));document.getElementById('crumb').textContent='Simulacro de entrevista';entrevista.replaceChildren();
  const p=nodo('div',null,'panel content-panel lesson-content');entrevista.appendChild(p);p.append(nodo('h1','Simulacro de entrevista'),nodo('p','Practica con preguntas de los temas que ya completaste. Este simulacro no reinicia tu ruta.'));
  if(!simulacro){const disponibles=quiz.filter(q=>terminada(q.lesson));if(!disponibles.length){p.append(nodo('div','Completa una etapa de la ruta para habilitar preguntas de entrevista.','camino-nota'));return}p.append(nodo('p',`Hay ${disponibles.length} preguntas disponibles de tus temas completados. Se seleccionarán hasta 10.`));p.appendChild(btn('Comenzar simulacro',()=>{const pool=disponibles.slice();for(let i=pool.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}simulacro={preguntas:pool.slice(0,10),respuestas:[]};abrirEntrevista()},'action'));return}
  if(simulacro.respuestas.length===simulacro.preguntas.length){const correctas=simulacro.respuestas.filter((v,i)=>v===simulacro.preguntas[i].c).length;p.append(nodo('h2',`Resultado: ${correctas} de ${simulacro.preguntas.length}`));simulacro.preguntas.forEach((q,i)=>{const b=nodo('div',null,'camino-nota'),respuesta=simulacro.respuestas[i];b.append(nodo('strong',`${i+1}. ${q.q}`),nodo('p',`Tema: ${lessons[q.lesson].title}`),nodo('p',`Tu respuesta: ${q.a[respuesta]} ${respuesta===q.c?'✓':'✗'}`),nodo('p',`Respuesta correcta: ${q.a[q.c]}`),nodo('p',q.e));p.appendChild(b)});p.appendChild(btn('Nuevo simulacro',()=>{simulacro=null;abrirEntrevista()},'action'));return}
  const n=simulacro.respuestas.length,q=simulacro.preguntas[n];p.append(nodo('p',`Pregunta ${n+1} de ${simulacro.preguntas.length} · ${lessons[q.lesson].title}`),nodo('h2',q.q));if(q.code)p.appendChild(nodo('pre',q.code,'camino-code'));const opciones=q.a.map((texto,i)=>({texto,i}));for(let i=opciones.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[opciones[i],opciones[j]]=[opciones[j],opciones[i]]}opciones.forEach(({texto,i})=>p.appendChild(btn(texto,()=>{simulacro.respuestas.push(i);abrirEntrevista()},'option')));
 }
 function pintar(){view.replaceChildren();if(paso==='mapa'){renderMapa();return}if(paso!=='resultado_examen' && !habilitada(etapa)){paso='mapa';renderMapa();return}const p=panelBase();if(paso==='leccion')renderLeccion(p);if(paso==='retos')renderRetos(p);if(paso==='prueba')renderPrueba(p);if(paso==='repaso')renderRepaso(p);if(paso==='terminada')renderTerminada(p);if(paso==='resultado_examen')renderResultadoExamen(p);view.appendChild(p)}
})();
