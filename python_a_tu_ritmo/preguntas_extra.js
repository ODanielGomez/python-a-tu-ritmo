// Preguntas adicionales escritas por tema: en cada fila, la primera respuesta es correcta.
const preguntasExtra = [
 ['¿Cuál es un ejemplo de instrucción que muestra un mensaje?',['print("Hola")','if','return'], 'print muestra un valor en la salida.'],
 ['¿Qué sucede en edad = 20?',['Se asigna 20 a edad','Se compara edad con 20','Se borra edad'], 'El signo = asigna un valor a un nombre.'],
 ['Si una condición de if es falsa y no hay else, ¿qué ocurre?',['El bloque de if no se ejecuta','El programa siempre falla','El bloque se repite'], 'El bloque de if solo se ejecuta cuando su condición es verdadera.'],
 ['¿Cuántas veces se ejecuta un for sobre una lista de tres elementos?',['Tres','Dos','Cuatro'], 'El ciclo visita cada elemento una vez en este ejemplo.'],
 ['¿Cuál es la diferencia entre return y print?',['return devuelve un valor; print lo muestra','Ambos siempre hacen lo mismo','return solo sirve para números'], 'Una función puede devolver un valor y quien la llama puede decidir imprimirlo.'],
 ['¿Qué crea Cliente("Omar") si Cliente es una clase?',['Una instancia de Cliente','Un archivo','Una excepción'], 'Llamar a la clase crea un objeto de esa clase.'],
 ['¿Dónde se encuentra generalmente el tipo y mensaje de una excepción en un traceback?',['Al final','Siempre al comienzo','Dentro de los comentarios'], 'La última línea suele indicar el tipo y el mensaje del error.'],
 ['¿Qué puede ocurrir con int("hola")?',['ValueError','Se convierte en cero','Devuelve True'], 'El texto hola no representa un entero válido.'],
 ['Si escribes 42 en input, ¿qué recibes inicialmente?',['El texto "42"','El entero 42','Una lista'], 'input entrega una cadena; es necesario convertirla para operaciones numéricas.'],
 ['¿Qué resultado produce 11 % 2?',['1','5.5','0'], 'Cinco grupos de dos suman diez y queda uno.'],
 ['¿Qué devuelve "  Ana  ".strip()?',['"Ana"','"  Ana  "','"A n a"'], 'strip elimina los espacios de los extremos.'],
 ['¿Qué produce not True?',['False','True','None'], 'not invierte el valor lógico.'],
 ['Si una condición if es verdadera, ¿se comprueba el elif de la misma cadena?',['No','Sí, siempre','Solo si hay else'], 'Una cadena if/elif/else ejecuta como máximo una rama.'],
 ['¿Qué necesita un while para no repetirse indefinidamente?',['Una condición que llegue a ser falsa o una salida','Un print obligatorio','Una lista vacía'], 'El ciclo necesita alguna forma de terminar.'],
 ['¿Qué hace append en una lista?',['Agrega un elemento al final','Borra toda la lista','Ordena obligatoriamente'], 'append agrega un elemento al final de la lista.'],
 ['¿Qué estructura elimina valores duplicados?',['set','Una cadena','Una excepción'], 'Un conjunto conserva elementos únicos.'],
 ['¿Qué permite consultar un valor predeterminado si una clave falta?',['dict.get','dict.append','dict.strip'], 'get puede recibir un valor predeterminado como segundo argumento.'],
 ['En def sumar(a, b), ¿qué son a y b?',['Parámetros','Argumentos enviados','Archivos'], 'Los parámetros son nombres definidos por la función.'],
 ['¿Dónde suele estar disponible una variable creada dentro de una función?',['Dentro de esa función','En todos los archivos','En GitHub'], 'Una variable local pertenece al ámbito de su función.'],
 ['¿Qué tipo de excepción produce dividir entre cero?',['ZeroDivisionError','KeyError','IndexError'], 'Dividir entre cero genera ZeroDivisionError.'],
 ['¿Para qué sirve raise?',['Para lanzar una excepción','Para repetir un bloque','Para cerrar Python'], 'raise inicia la propagación de una excepción.'],
 ['¿De qué clase puede heredar una excepción personalizada normal?',['Exception','str','list'], 'Heredar de Exception permite capturarla como una excepción ordinaria.'],
 ['¿Qué hace el modo "w" al abrir un archivo existente?',['Puede sobrescribir su contenido','Solo lee','Siempre agrega al final'], 'El modo w abre para escritura y trunca el archivo existente.'],
 ['¿Cómo accedes a sqrt tras import math?',['math.sqrt','math->sqrt','sqrt.math'], 'El punto accede al nombre sqrt dentro del módulo.'],
 ['¿Qué representa self en un método de instancia?',['El objeto que recibe la llamada','Todas las clases de Python','Una variable global'], 'self referencia la instancia concreta que recibe el método.'],
 ['¿Cómo se lee una propiedad nombre creada con @property?',['objeto.nombre','objeto.nombre()','objeto->nombre'], 'Una property se consulta como atributo, sin paréntesis.'],
 ['¿Para qué suele usarse super() en una clase hija?',['Para acceder a la implementación de la clase base','Para borrar sus atributos','Para importar una biblioteca'], 'super permite acceder a métodos según el orden de resolución de clases.'],
 ['¿Qué permite el polimorfismo?',['Usar una operación común con objetos de distintos tipos','Evitar crear funciones','Eliminar toda herencia'], 'Distintos objetos pueden responder a la misma operación de maneras propias.'],
 ['¿Qué palabra usa una función generadora para entregar valores?',['yield','raise','class'], 'yield produce un valor y pausa el generador.'],
 ['¿Qué crea [n * 2 for n in range(3)]?',['[0, 2, 4]','[2, 4, 6]','[0, 1, 2]'], 'range(3) produce 0, 1 y 2; cada valor se multiplica por dos.'],
 ['¿Para qué sirve un decorador?',['Aplicar una transformación a una función o clase','Crear siempre una clase nueva','Cambiar el lenguaje a HTML'], 'Un decorador recibe un objeto y devuelve el objeto procesado o reemplazado.'],
 ['¿Qué comprueba assertRaises en unittest?',['Que se lance una excepción esperada','Que dos textos sean iguales','Que la prueba tarde un segundo'], 'assertRaises verifica que una operación produzca el tipo de excepción esperado.'],
 ['¿Qué hace json.loads?',['Convierte texto JSON a datos de Python','Convierte cualquier archivo en imagen','Instala JSON'], 'loads interpreta una cadena que contiene JSON.'],
 ['¿Dónde se ejecuta python -m venv .venv?',['En la terminal','En un comentario Python','Dentro de una cadena'], 'Es un comando de terminal para crear un entorno virtual.'],
 ['¿Una anotación de tipo valida automáticamente una entrada en ejecución?',['No, no por defecto','Sí, siempre','Solo en Windows'], 'Las anotaciones no sustituyen la validación de datos.'],
 ['¿Qué ventaja tiene with al manejar un archivo?',['Ayuda a cerrarlo al terminar el bloque','Evita todos los errores','Crea una copia en GitHub'], 'El administrador de contexto gestiona la salida y el cierre.'],
 ['¿Qué indica await en una función asíncrona?',['Espera un resultado asíncrono y cede el control','Ejecuta cualquier tarea en paralelo automáticamente','Cierra el evento'], 'await permite suspender la corrutina mientras espera un resultado.'],
 ['¿Cómo se deben enviar valores a una consulta SQL?',['Mediante parámetros del controlador','Concatenando entradas sin validar','Guardándolos en el nombre de tabla'], 'Las consultas parametrizadas separan los datos de la instrucción SQL.'],
 ['¿Qué conviene configurar en una petición de red?',['Un tiempo de espera y manejo de errores','Una contraseña dentro del código','Una repetición infinita sin límite'], 'Una conexión puede fallar o tardar demasiado; es necesario tratar esos casos.'],
 ['¿Qué casos conviene incluir al probar un proyecto?',['Válidos, inválidos y límites','Solo el primer caso válido','Ninguno si el código funciona una vez'], 'Los casos variados ayudan a descubrir errores y condiciones límite.']
];
if (preguntasExtra.length !== lessons.length) throw new Error('Revisar correspondencia de las preguntas.');
preguntasExtra.forEach((p, i) => quiz.push({lesson:i, q:p[0], a:p[1], c:0, e:p[2]}));
// El ejemplo se muestra cuando la pregunta hace referencia al ejemplo de la lección.
[12, 13, 26].forEach(indice => { quiz[indice].code = lessons[indice].code; });
let preguntaResuelta = false;
renderQuiz = function () {
    preguntaResuelta = false;
    const x = quiz[currentQuestion];
    const respuestas = x.a.map((texto, indice) => ({texto, correcta:indice === x.c}));
    for(let i=respuestas.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[respuestas[i],respuestas[j]]=[respuestas[j],respuestas[i]];}
    const panel=document.getElementById('quiz-body');
    panel.innerHTML='<p class="tag" style="color:#8872df;margin-top:25px"></p><div class="question"></div><div id="ejemplo-pregunta"></div><div id="options"></div><div id="feedback" role="status" aria-live="polite"></div><div class="actions"><button class="secondary" id="next-q" disabled>Siguiente pregunta →</button></div>';
    panel.querySelector('.tag').textContent=`PREGUNTA ${currentQuestion+1} DE ${quiz.length} · ${lessons[x.lesson].title}`;
    panel.querySelector('.question').textContent=x.q;
    if(x.code){const pre=document.createElement('pre');pre.textContent=x.code;panel.querySelector('#ejemplo-pregunta').appendChild(pre);}
    const siguiente=panel.querySelector('#next-q');
    respuestas.forEach((respuesta,i)=>{
        const boton=document.createElement('button');boton.className='option';boton.textContent=`${String.fromCharCode(65+i)}. ${respuesta.texto}`;
        boton.onclick=()=>{
            if(preguntaResuelta)return;
            state.attempts=(state.attempts||0)+1;
            panel.querySelectorAll('.option').forEach(b=>b.classList.remove('wrong'));
            const feedback=panel.querySelector('#feedback');feedback.replaceChildren();
            const mensaje=document.createElement('div');mensaje.className='feedback';
            if(respuesta.correcta){
                preguntaResuelta=true;state.correct=(state.correct||0)+1;boton.classList.add('correct');
                mensaje.textContent='¡Correcto! '+x.e;siguiente.disabled=false;
            }else{
                boton.classList.add('wrong');mensaje.textContent='Aún no es esa respuesta. Vuelve a intentarlo. Pista: '+lessons[x.lesson].hint;
            }
            feedback.appendChild(mensaje);save();
        };
        panel.querySelector('#options').appendChild(boton);
    });
    siguiente.onclick=()=>{if(!preguntaResuelta)return;currentQuestion=(currentQuestion+1)%quiz.length;renderQuiz();};
};
