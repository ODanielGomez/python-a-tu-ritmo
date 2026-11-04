// Banco de práctica: 101 variantes por tema, construidas a partir de retos guiados.
// Son ejercicios abiertos: el estudiante revisa el resultado por sí mismo.
const retosPorTema = [
 ['Escribe una secuencia de instrucciones para resolver una necesidad del caso','Explica qué entrada necesita el programa y qué resultado debe mostrar','Usa print para comunicar un resultado relacionado con el caso','Cambia el orden de las instrucciones y explica qué ocurre'],
 ['Crea variables que representen dos datos del caso e imprímelas','Cambia el valor de una variable y explica qué se muestra','Guarda texto y un número en variables distintas y consulta sus tipos','Intercambia dos valores usando una variable auxiliar'],
 ['Escribe una condición if para comprobar un límite del caso','Agrega else para indicar qué ocurre cuando no se cumple','Prueba un valor exactamente en el límite','Combina dos condiciones usando and u or'],
 ['Recorre una lista de elementos relacionados con el caso usando for','Muestra cada elemento y lleva un contador','Recorre una lista vacía y describe el resultado','Usa range para repetir una acción'],
 ['Escribe una función que reciba un dato del caso y devuelva un resultado','Llama la función dos veces con argumentos diferentes','Compara imprimir el resultado y devolverlo con return','Agrega un parámetro con un valor por defecto'],
 ['Crea una clase sencilla para representar un elemento del caso','Crea dos objetos con datos diferentes y muestra sus atributos','Agrega un método que describa el objeto','Modifica un atributo y explica a qué instancia afecta'],
 ['Añade un comentario que explique una decisión en el código del caso','Provoca un error sencillo y localiza su última línea','Corrige una variable mal escrita y explica el NameError','Escribe una nota que describa la causa de un error'],
 ['Convierte un texto numérico del caso a int y úsalo en una operación','Prueba una conversión inválida y observa el error','Compara el tipo de un valor antes y después de convertirlo','Explica por qué una identificación puede guardarse como texto'],
 ['Pide un dato del caso con input e imprímelo','Solicita un número y conviértelo antes de usarlo','Describe qué sucede si se ingresan letras en vez de un número','Maneja una entrada inválida con un mensaje claro'],
 ['Calcula un total del caso usando suma y multiplicación','Calcula el residuo de dos cantidades relacionadas con el caso','Compara división normal y división entera','Usa paréntesis para cambiar el orden de una operación'],
 ['Forma un mensaje del caso usando una f-string','Elimina espacios de los extremos de un texto','Compara el texto original con el resultado de upper','Usa replace y explica si cambia la cadena original'],
 ['Compara dos cantidades del caso y muestra el resultado booleano','Combina dos condiciones usando and','Construye una condición con or y prueba ambas posibilidades','Invierte una condición con not y explica el resultado'],
 ['Clasifica una cantidad del caso con if, elif y else','Prueba un valor en cada rama de la clasificación','Prueba un valor exactamente en un límite','Cambia el orden de las condiciones y observa el efecto'],
 ['Usa while para contar hasta una cantidad del caso','Haz que el ciclo termine al alcanzar una condición','Usa break para salir del ciclo y explica cuándo se ejecuta','Explica qué podría producir un ciclo infinito'],
 ['Crea una lista con elementos del caso y muestra el primero','Agrega un elemento con append y recorre la lista','Comprueba qué ocurre al intentar acceder a un índice inexistente','Cuenta los elementos de la lista con len'],
 ['Guarda dos datos del caso en una tupla y léelos','Elimina duplicados de una colección usando set','Comprueba si un elemento pertenece a un conjunto','Explica la diferencia entre modificar una lista y una tupla'],
 ['Crea un diccionario con datos del caso y consulta una clave','Usa get para consultar una clave que no existe','Agrega una clave y muestra el diccionario actualizado','Recorre las claves y sus valores'],
 ['Crea una función con dos parámetros para el caso y llámala','Agrega un parámetro con un valor por defecto','Llama la función usando argumentos por nombre','Identifica cuáles son los parámetros y cuáles los argumentos'],
 ['Define una variable local dentro de una función relacionada con el caso','Devuelve el valor local y guárdalo fuera de la función','Intenta explicar qué pasa si accedes a una variable local desde fuera','Usa el mismo nombre dentro y fuera y compara sus valores'],
 ['Captura con try y except un error de conversión del caso','Muestra un mensaje claro cuando se produzca ValueError','Usa as para consultar el objeto de excepción','Prueba una entrada válida y otra inválida'],
 ['Usa raise para rechazar un dato inválido del caso','Añade else para el camino sin excepción','Añade finally para informar que terminó el proceso','Prueba los caminos con y sin error'],
 ['Define una excepción personalizada para un dato inválido del caso','Lanza y captura esa excepción con un mensaje','Transforma un ValueError en tu excepción usando from','Describe la diferencia entre el mensaje propio y la causa original'],
 ['Escribe información del caso en un archivo de prueba temporal','Lee el archivo usando with y encoding UTF-8','Compara los modos w y a usando un archivo de prueba','Explica qué sucede con el archivo al salir de with'],
 ['Importa math y aplica una función a un valor del caso','Crea un módulo propio con una función sencilla e impórtala','Explica la diferencia entre import y from ... import','Evita usar nombres de archivos iguales a módulos estándar'],
 ['Crea una clase del caso con dos atributos de instancia','Agrega un método que use self para leer un atributo','Crea dos objetos y cambia un atributo en uno','Explica qué objeto representa self en cada llamada'],
 ['Crea una clase del caso con un atributo de doble guion bajo','Expón una lectura con @property','Agrega una validación al cambiar un valor mediante un setter','Explica por qué el doble guion bajo no garantiza seguridad'],
 ['Crea una clase base y una hija relacionadas con el caso','Usa super para inicializar la parte de la clase base','Agrega un atributo propio a la clase hija','Explica qué comportamiento comparte la hija con la base'],
 ['Define una interfaz común para dos servicios del caso','Implementa el mismo método de manera distinta en dos clases','Recorre objetos distintos llamando al mismo método','Explica por qué una clase abstracta incompleta no debe instanciarse'],
 ['Crea un generador que produzca cantidades del caso con yield','Recorre el generador con for','Compara el generador con una lista para una secuencia pequeña','Explica qué ocurre cuando el generador ya no tiene valores'],
 ['Crea una lista mediante una comprensión usando datos del caso','Añade una condición a la comprensión','Escribe el mismo resultado con un for convencional','Compara cuál versión te parece más legible y por qué'],
 ['Crea un decorador que anuncie una acción del caso','Aplícalo a una función y observa el orden de ejecución','Haz que la función decorada devuelva un valor','Explica la relación entre @decorador y la función envoltura'],
 ['Escribe una prueba con unittest para una función del caso','Prueba un valor válido usando assertEqual','Comprueba una excepción con assertRaises','Añade un caso límite y explica el resultado esperado'],
 ['Convierte un diccionario del caso a JSON con dumps','Recupera los datos usando loads','Conserva acentos usando ensure_ascii=False','Explica la diferencia entre texto JSON y diccionario Python'],
 ['Describe los pasos para crear un entorno virtual para el caso','Identifica cuáles instrucciones se ejecutan en la terminal','Explica para qué sirve instalar dependencias en un entorno','Indica qué información no debe subirse al repositorio'],
 ['Agrega anotaciones de tipo a una función del caso','Anota el tipo del resultado con ->','Explica si una anotación impide por sí sola un dato inválido','Añade una validación real cuando el dato venga del usuario'],
 ['Usa with para gestionar un archivo de prueba del caso','Explica qué recurso se libera al salir del bloque','Describe qué ocurre si se produce una excepción dentro de with','Compara la gestión de recursos con try y finally'],
 ['Escribe una función async que represente una espera del caso','Usa await asyncio.sleep para simular una espera','Compara esperar una tarea con ejecutar tareas en paralelo','Explica por qué async no acelera automáticamente cálculos de CPU'],
 ['Crea una tabla SQLite en memoria para datos del caso','Inserta un registro usando parámetros SQL','Consulta el registro y muestra el resultado','Explica por qué no conviene concatenar datos del usuario en SQL'],
 ['Describe una petición GET que podría servir para el caso','Indica qué debe hacer el programa si la red falla','Explica para qué sirve un tiempo de espera','Describe cómo tratarías una respuesta de error del servidor'],
 ['Define un requisito pequeño de un proyecto basado en el caso','Divide la solución en funciones o clases y explica sus responsabilidades','Diseña una prueba válida y otra inválida','Escribe una explicación breve para el README del proyecto']
];
const contextosEjercicio = [
 'una reserva de sala','un registro de cliente','un catálogo de productos','una biblioteca','una tienda','un curso virtual','una lista de tareas','un inventario','un control de gastos','una agenda de citas','un sistema de turnos','un evento','una cafetería','una aplicación de notas','una cuenta de usuario','una venta','una evaluación académica','una mascota','una colección de películas','un servicio de transporte','un club deportivo','una entrega de pedidos','una clase de dispositivos','un sistema de soporte','una lista de contactos','un servicio de asesoría'
];
const ejerciciosPorTema = 101;
if (retosPorTema.length !== lessons.length) throw new Error('El banco de ejercicios no coincide con la ruta.');
state.ejercicios = state.ejercicios && typeof state.ejercicios === 'object' ? state.ejercicios : {};
let temaEjercicio = 0, numeroEjercicio = 0;
const botonBanco = document.createElement('button');
botonBanco.innerHTML = '✎ <span>Ejercicios por tema</span>';
botonBanco.onclick = mostrarBanco;
document.querySelector('.nav').appendChild(botonBanco);
const seccionBanco = document.createElement('section');
seccionBanco.id = 'banco-ejercicios';
seccionBanco.className = 'view';
seccionBanco.innerHTML = `<div class="panel content-panel lesson-content"><span class="tag" style="color:#806ae7">PRACTICA PASO A PASO</span><h1>Ejercicios por tema</h1><p>101 variantes guiadas para cada lección. Cambian el reto y el contexto: no son 101 conceptos distintos. Resuélvelas a tu ritmo y revisa tu resultado.</p><label for="tema-ejercicio"><b>Elige un tema</b></label><select id="tema-ejercicio" style="display:block;width:100%;padding:12px;margin:10px 0 16px;border:1px solid #d8dce8;border-radius:10px;background:white;font:inherit"></select><div id="reto-actual" aria-live="polite"></div><div class="actions"><button class="secondary" id="reto-anterior">← Anterior</button><button class="action" id="reto-completar">Marcar como realizado</button><button class="secondary" id="reto-siguiente">Siguiente →</button></div><p id="reto-estado" role="status"></p><div class="actions"><button class="secondary" id="reto-laboratorio">Ir al laboratorio Python →</button></div><div class="notice">Son retos abiertos de práctica y reflexión: marcarlos como realizados no comprueba automáticamente tu respuesta. Algunos ejercicios de archivos, paquetes, terminal o entrada interactiva requieren Python en tu computador.</div></div>`;
document.querySelector('.footer').before(seccionBanco);
const selectorTema = document.getElementById('tema-ejercicio');
lessons.forEach((leccion, indice) => {const opcion=document.createElement('option'); opcion.value=indice; opcion.textContent=`${indice + 1}. ${leccion.title}`; selectorTema.appendChild(opcion)});
selectorTema.onchange = () => {temaEjercicio=Number(selectorTema.value); numeroEjercicio=0; pintarEjercicio()};
function mostrarBanco() {
 document.querySelectorAll('.view').forEach(v=>v.classList.toggle('visible',v===seccionBanco));
 document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b===botonBanco));
 document.getElementById('crumb').textContent='Ejercicios';
 selectorTema.value=temaEjercicio; pintarEjercicio(); window.scrollTo(0,0);
}
function pintarEjercicio() {
 const tema=lessons[temaEjercicio]; const accion=retosPorTema[temaEjercicio][numeroEjercicio % 4];
 const contexto=contextosEjercicio[Math.floor(numeroEjercicio / 4)];
 const clave=`${temaEjercicio}:${numeroEjercicio}`; const terminados=Object.keys(state.ejercicios).filter(k=>k.startsWith(`${temaEjercicio}:`) && state.ejercicios[k]).length;
 const panel=document.getElementById('reto-actual'); panel.replaceChildren();
 const titulo=document.createElement('h2'); titulo.textContent=`Ejercicio ${numeroEjercicio+1} de ${ejerciciosPorTema}`;
 const consigna=document.createElement('p'); consigna.textContent=`${accion}. Situación: ${contexto}.`;
 const pista=document.createElement('p'); pista.textContent=`Pista: ${tema.hint}`;
 const avance=document.createElement('p'); avance.textContent=`Realizados en este tema: ${terminados} de ${ejerciciosPorTema}.`;
 panel.append(titulo,consigna,pista,avance);
 document.getElementById('reto-estado').textContent=state.ejercicios[clave]?'Marcaste este ejercicio como realizado.':'';
 document.getElementById('reto-completar').textContent=state.ejercicios[clave]?'Marcar como pendiente':'Marcar como realizado';
 document.getElementById('reto-anterior').disabled=numeroEjercicio===0;
 document.getElementById('reto-siguiente').disabled=numeroEjercicio===ejerciciosPorTema-1;
}
document.getElementById('reto-anterior').onclick=()=>{if(numeroEjercicio>0){numeroEjercicio--;pintarEjercicio()}};
document.getElementById('reto-siguiente').onclick=()=>{if(numeroEjercicio<ejerciciosPorTema-1){numeroEjercicio++;pintarEjercicio()}};
document.getElementById('reto-completar').onclick=()=>{const clave=`${temaEjercicio}:${numeroEjercicio}`;state.ejercicios[clave]=!state.ejercicios[clave];save();pintarEjercicio()};
document.getElementById('reto-laboratorio').onclick=()=>botonLaboratorio.click();
