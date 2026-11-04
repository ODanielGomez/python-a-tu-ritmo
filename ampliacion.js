// Contenido adicional: cada tema tiene explicación, ejemplo y pregunta propia.
const temas = [
['Comentarios y lectura de errores','Fundamentos','Un comentario empieza con # y ayuda a explicar una decisión. Python ignora ese texto. Cuando hay un error, lee primero la última línea y después el archivo y la línea indicados.','# Guardamos la edad\nedad = 20\nprint(edad)','Los comentarios explican por qué se hace algo; no corrigen errores automáticamente.','Lee el error completo antes de cambiar código.','¿Qué hace un comentario que empieza con #?',['Python lo ignora al ejecutar','Ejecuta la línea dos veces','Crea una variable'],0],
['Tipos y conversiones','Fundamentos','Los tipos describen los valores. str representa texto, int enteros, float decimales y bool verdadero o falso. Una conversión puede fallar si el texto no representa el valor solicitado.','cantidad = int("12")\nprecio = float("2.5")\nprint(cantidad + precio)','int("hola") produce ValueError porque ese texto no representa un entero.','El número de identificación suele conservarse como texto.','¿Qué devuelve type(5)?',['int','str','float'],0],
['Entrada de datos','Fundamentos','input muestra una pregunta y devuelve lo escrito como texto. Si necesitas realizar operaciones matemáticas, debes convertir y validar la entrada.','texto = input("¿Cuántos años tienes? ")\nedad = int(texto)\nprint(edad + 1)','Aunque escribas 20, input entrega "20" como texto. int intenta convertirlo.','Primero piensa qué debería ocurrir si escriben letras.','¿Qué tipo devuelve input normalmente?',['str','int','bool'],0],
['Operadores y expresiones','Fundamentos','Los operadores aritméticos incluyen suma +, resta -, multiplicación *, división /, división entera //, residuo % y potencia **.','print(7 / 2)\nprint(7 // 2)\nprint(7 % 2)','La división / produce 3.5; // produce 3 y % devuelve 1.','Usa paréntesis para aclarar el orden de las operaciones.','¿Cuál es el residuo de 7 % 2?',['1','3.5','0'],0],
['Cadenas y formato','Fundamentos','Una cadena es una secuencia de caracteres. Con f-strings puedes incluir valores en un texto usando llaves.','nombre = "Omar"\nprint(f"Hola, {nombre}")\nprint(nombre.upper())','upper devuelve una nueva cadena en mayúsculas; no modifica la original.','Prueba strip(), lower() y replace() con ejemplos.','¿Qué hace strip()?',['Quita espacios de los extremos','Elimina todos los espacios','Convierte el texto en número'],0],
['Booleanos y comparaciones','Fundamentos','Las comparaciones devuelven True o False. == compara igualdad; = asigna. Puedes combinar condiciones con and, or y not.','edad = 20\ntiene_entrada = True\nprint(edad >= 18 and tiene_entrada)','and solo es verdadero cuando ambas condiciones son verdaderas.','Lee cada condición en voz alta.','¿Qué operador comprueba igualdad?',['==','=','=!'],0],
['elif y else','Control de flujo','elif permite comprobar otra condición cuando la anterior no se cumple. else se ejecuta si ninguna de las condiciones anteriores fue verdadera.','nota = 75\nif nota >= 90:\n    print("Excelente")\nelif nota >= 60:\n    print("Aprobado")\nelse:\n    print("Por mejorar")','Python comprueba las condiciones en orden y ejecuta el primer bloque que corresponda.','Prueba qué ocurre exactamente en el límite.','¿Cuándo se ejecuta else en esta estructura?',['Cuando ninguna condición anterior se cumple','Siempre antes de if','Cuando todas son verdaderas'],0],
['Ciclo while','Control de flujo','while repite un bloque mientras su condición sea verdadera. Debes asegurarte de que exista una forma de que la condición cambie o de salir con break.','contador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1','El contador avanza en cada vuelta y el ciclo termina al llegar a 3.','Un ciclo sin una salida puede seguir ejecutándose.','¿Cuántas veces imprime el ejemplo?',['3','2','4'],0],
['Listas y recorrido','Colecciones','Una lista guarda una secuencia ordenada y modificable. Sus índices empiezan en cero. append agrega un elemento al final.','frutas = ["pera", "mango"]\nfrutas.append("uva")\nprint(frutas[0])','El primer elemento tiene índice 0. Acceder a un índice inexistente produce IndexError.','Recorre la lista con for para visitar cada elemento.','¿Cuál es el índice del primer elemento?',['0','1','-2'],0],
['Tuplas y conjuntos','Colecciones','Una tupla es una secuencia que no se puede modificar en el lugar. Un conjunto contiene elementos únicos y es útil para eliminar duplicados o comprobar pertenencia.','punto = (3, 4)\ncolores = {"azul", "rojo", "azul"}\nprint(len(colores))','El conjunto contiene dos valores distintos, aunque azul se escribió dos veces.','No dependas de un orden fijo al recorrer un conjunto.','¿Cuántos elementos distintos hay en {1, 1, 2}?',['2','3','1'],0],
['Diccionarios','Colecciones','Un diccionario relaciona claves con valores. Puedes consultar una clave usando corchetes o get cuando quieres indicar un valor por defecto.','cliente = {"nombre": "Omar", "edad": 20}\nprint(cliente["nombre"])\nprint(cliente.get("ciudad", "Sin ciudad"))','Las claves permiten recuperar valores por su nombre. get puede evitar un KeyError si la clave falta.','Pregúntate qué debe ocurrir si la clave no existe.','¿Qué relaciona un diccionario?',['Claves con valores','Solo números consecutivos','Funciones con archivos'],0],
['Parámetros y argumentos','Funciones','Los parámetros son nombres que recibe una función; los argumentos son los valores que enviamos al llamarla. Algunos parámetros pueden tener un valor por defecto.','def saludar(nombre, saludo="Hola"):\n    return f"{saludo}, {nombre}"\n\nprint(saludar("Omar"))','Si no se envía saludo, la función usa "Hola". También podemos indicar saludo="Buenos días".','Evita usar listas o diccionarios mutables como valor por defecto sin entender su comportamiento.','¿Qué es "Omar" en saludar("Omar")?',['Un argumento','Una clase','Una excepción'],0],
['Alcance de variables','Funciones','Una variable creada dentro de una función normalmente es local a esa función. Los parámetros también son locales.','def calcular():\n    total = 10\n    return total\n\nresultado = calcular()','total existe en el contexto de calcular; resultado recibe el valor devuelto.','Devuelve los resultados que necesitas usar fuera.','¿Cómo usamos fuera el valor local calculado?',['Lo devolvemos con return','Siempre se comparte automáticamente','Lo convertimos en comentario'],0],
['Errores y excepciones','Errores','Una excepción señala que ocurrió un problema. try permite intentar una operación y except captura los tipos de error que sabemos manejar.','try:\n    numero = int("abc")\nexcept ValueError as error:\n    print("Número inválido:", error)','as error da un nombre temporal a la excepción capturada. Capturar tipos concretos facilita entender el fallo.','No uses un except vacío para ocultar errores desconocidos.','¿Qué error produce int("abc")?',['ValueError','IndexError','ZeroDivisionError'],0],
['else, finally y raise','Errores','else en un try se ejecuta si no hubo excepción en el bloque try. finally se ejecuta al salir del bloque, haya ocurrido o no una excepción. raise permite lanzar una excepción.','try:\n    valor = int("10")\nexcept ValueError:\n    print("Dato inválido")\nelse:\n    print(valor)\nfinally:\n    print("Proceso finalizado")','finally sirve, por ejemplo, para realizar limpieza. No debe usarse para ocultar fallos.','Prueba cambiar "10" por "hola" y compara el recorrido.','¿Cuándo se ejecuta else en try/except?',['Cuando el try termina sin excepción','Solo cuando hay ValueError','Antes del try'],0],
['Excepciones personalizadas','Errores','Puedes crear una excepción propia heredando de Exception. El encadenamiento con raise ... from error conserva la causa original.','class DatoInvalidoError(Exception):\n    pass\n\ntry:\n    int("x")\nexcept ValueError as error:\n    raise DatoInvalidoError("Dato inválido") from error','La nueva excepción comunica el problema del dominio y conserva la causa técnica.','Piensa qué mensaje necesita el usuario y cuál detalle necesita quien depura.','¿Para qué sirve from error al lanzar una excepción?',['Conserva la causa explícita','Imprime automáticamente el error','Elimina la excepción original'],0],
['Archivos y contextos','Archivos','with abre un recurso y se encarga de cerrarlo al salir del bloque. Indica la codificación del texto para evitar problemas con acentos.','with open("notas.txt", "w", encoding="utf-8") as archivo:\n    archivo.write("Hola, Python")','El modo w crea o sobrescribe el contenido del archivo. r lee y a agrega al final.','Ten cuidado: w puede reemplazar contenido existente.','¿Qué hace with al salir del bloque con un archivo?',['Se encarga de cerrarlo','Lo publica en internet','Lo borra'],0],
['Módulos e imports','Organización','Un módulo es un archivo Python. import permite acceder a funciones y clases definidas en un módulo.','import math\nprint(math.sqrt(25))','math es un módulo de la biblioteca estándar; sqrt calcula la raíz cuadrada.','Evita nombrar tus archivos igual que módulos estándar.','¿Qué hace import math?',['Importa el módulo math','Instala Python','Crea una clase'],0],
['Atributos y self','POO','self hace referencia al objeto que recibe la llamada. Un atributo creado con self pertenece a ese objeto.','class Reserva:\n    def __init__(self):\n        self.estado = "pendiente"\n\nr = Reserva()\nprint(r.estado)','Cada reserva puede guardar su propio estado.','self es una convención ampliamente usada para el primer parámetro de métodos de instancia.','¿A qué hace referencia self en un método?',['Al objeto actual','Al nombre del archivo','A todas las instancias simultáneamente'],0],
['Encapsulación y property','POO','La encapsulación organiza el acceso a los datos. @property permite consultar un método como atributo. Los dos guiones bajos activan la transformación del nombre; no son seguridad absoluta.','class Cliente:\n    def __init__(self, nombre):\n        self.__nombre = nombre\n\n    @property\n    def nombre(self):\n        return self.__nombre','cliente.nombre consulta la propiedad sin paréntesis; un setter permite validar cambios.','Un atributo privado no sustituye las validaciones.','¿Cómo se consulta una property nombre?',['cliente.nombre','cliente.nombre()','cliente->nombre'],0],
['Herencia y super','POO','Una clase hija puede heredar comportamiento de una clase base y añadir o redefinir métodos. super permite acceder a la implementación de la clase base.','class Servicio:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\nclass Sala(Servicio):\n    def __init__(self, nombre):\n        super().__init__(nombre)','La clase Sala reutiliza la inicialización de Servicio.','Piensa si la relación realmente es “es un tipo de”.','¿Para qué se usa super() en el ejemplo?',['Para llamar la inicialización de la clase base','Para borrar la clase hija','Para crear un archivo'],0],
['Polimorfismo y abstracción','POO','El polimorfismo permite tratar objetos distintos mediante una interfaz común. Una clase abstracta puede definir métodos que las clases concretas deben implementar.','from abc import ABC, abstractmethod\n\nclass Servicio(ABC):\n    @abstractmethod\n    def costo(self):\n        pass','Cada servicio concreto define su cálculo. Una clase abstracta con métodos pendientes no se instancia directamente.','Una misma llamada puede producir comportamientos distintos según el objeto.','¿Qué indica @abstractmethod?',['Que las clases concretas deben implementar ese método','Que el método es un número','Que se ejecuta sin crear objetos'],0],
['Iteradores y generadores','Python intermedio','Un generador produce valores a medida que se solicitan. yield pausa la función y conserva su estado para la siguiente petición.','def contar():\n    yield 1\n    yield 2\n\nfor numero in contar():\n    print(numero)','El generador entrega 1 y luego 2; no necesita construir una lista completa.','Un generador se recorre progresivamente.','¿Qué palabra produce un valor desde un generador?',['yield','class','except'],0],
['Comprensiones','Python intermedio','Una comprensión permite construir una colección a partir de otra mediante una expresión y, opcionalmente, una condición.','cuadrados = [n * n for n in range(5)]\nprint(cuadrados)','El resultado es [0, 1, 4, 9, 16]. Si la lógica es compleja, un ciclo normal puede ser más claro.','Prioriza que tú y tus compañeros puedan leer el código.','¿Cuántos valores produce range(5)?',['5','4','6'],0],
['Decoradores','Python intermedio','Un decorador recibe una función o clase y devuelve una versión procesada. Se escribe con @ encima de la definición.','def anunciar(funcion):\n    def envoltura():\n        print("Inicio")\n        return funcion()\n    return envoltura\n\n@anunciar\ndef saludar():\n    print("Hola")','Al llamar saludar(), primero se ejecuta el comportamiento de envoltura.','@property y @staticmethod son decoradores que ya conociste.','¿Dónde se escribe @decorador?',['Antes de la definición','Dentro del nombre de la función','Al final del archivo obligatoriamente'],0],
['Pruebas con unittest','Calidad','Una prueba compara lo que ocurre con lo que esperamos. unittest permite agrupar pruebas y comprobar valores o excepciones.','import unittest\n\nclass PruebaSuma(unittest.TestCase):\n    def test_suma(self):\n        self.assertEqual(2 + 3, 5)','Una prueba fallida ayuda a encontrar una diferencia; no demuestra por sí sola que todo el programa esté mal.','Incluye casos válidos, inválidos y límites.','¿Qué comprueba assertEqual(a, b)?',['Que a y b sean iguales','Que el programa cierre','Que a sea una cadena'],0],
['Archivos JSON','Datos','JSON es un formato de intercambio de datos. Python incluye el módulo json para convertir entre texto JSON y estructuras de Python.','import json\ndatos = {"nombre": "Omar"}\ntexto = json.dumps(datos, ensure_ascii=False)\nprint(texto)','dumps convierte a texto JSON; loads hace la conversión inversa.','No confundas JSON con una base de datos.','¿Qué función convierte un objeto Python a texto JSON?',['json.dumps','json.loads','json.open'],0],
['Entornos y paquetes','Herramientas','Un entorno virtual separa las dependencias de un proyecto. pip permite instalar paquetes, y un archivo de dependencias documenta cuáles se usan.','python -m venv .venv\n# Activa el entorno según tu sistema\npython -m pip install requests','Estos son comandos de terminal, no líneas para pegar dentro de un archivo .py.','No compartas claves ni carpetas de entorno en tu repositorio.','¿Para qué sirve un entorno virtual?',['Aislar dependencias del proyecto','Cambiar el teclado','Reemplazar Git'],0],
['Anotaciones de tipo','Python avanzado','Las anotaciones documentan los tipos esperados y ayudan a herramientas de análisis. Python no las comprueba automáticamente por defecto.','def saludar(nombre: str) -> str:\n    return f"Hola, {nombre}"','str indica el tipo esperado del parámetro y del resultado, pero necesitas validación si aceptas datos externos.','Una anotación es documentación útil, no una barrera de seguridad.','¿Python valida automáticamente todas las anotaciones?',['No, no por defecto','Sí, siempre','Solo si se usa print'],0],
['Context managers','Python avanzado','Un context manager organiza la entrada y salida de un bloque with. Puede liberar un recurso incluso si ocurre una excepción.','with open("datos.txt", encoding="utf-8") as archivo:\n    contenido = archivo.read()','El archivo se cierra al finalizar el bloque, incluso si ocurre un error durante su uso.','Conecta este concepto con try/finally.','¿Para qué es útil un context manager?',['Gestionar la limpieza de recursos','Crear automáticamente una base de datos','Evitar toda excepción'],0],
['Concurrencia y asincronía','Python avanzado','async y await permiten estructurar operaciones asíncronas. Son útiles para esperar tareas de entrada y salida; no convierten automáticamente todo el código en paralelo.','import asyncio\n\nasync def saludar():\n    await asyncio.sleep(1)\n    print("Hola")\n\nasyncio.run(saludar())','await cede el control mientras espera una operación asíncrona.','Identifica si tu tarea espera entrada/salida o consume mucho CPU.','¿Qué expresa await?',['Una espera sobre una operación asíncrona','Una clase abstracta','Un comentario'],0],
['Bases de datos y seguridad','Datos','Una base de datos permite almacenar información de forma persistente. Al usar SQL, emplea parámetros para los valores y protege contraseñas y credenciales.','import sqlite3\n\nwith sqlite3.connect(":memory:") as conexion:\n    conexion.execute("CREATE TABLE clientes (nombre TEXT)")\n    conexion.execute("INSERT INTO clientes VALUES (?)", ("Omar",))','El marcador ? separa el valor de la consulta SQL y ayuda a evitar inyecciones.','Nunca publiques contraseñas ni tokens en GitHub.','¿Cómo se deben pasar valores a una consulta SQL?',['Con parámetros adecuados al controlador','Concatenando siempre el texto del usuario','Escribiéndolos en comentarios'],0],
['APIs y HTTP','Aplicaciones','Una API permite que programas intercambien información mediante reglas definidas. HTTP usa métodos como GET y POST y devuelve códigos de estado.','from urllib.request import urlopen\n\n# Ejemplo: una consulta requiere red y una URL válida.\n# with urlopen("https://example.com", timeout=5) as respuesta:\n#     print(respuesta.status)','Una aplicación real debe controlar tiempos de espera, errores de red y respuestas inesperadas.','Nunca supongas que una petición a internet siempre funcionará.','¿Qué debe hacer una aplicación ante un error de red?',['Manejarlo y comunicarlo','Suponer que nunca ocurre','Reiniciar el computador'],0],
['Proyecto final y buenas prácticas','Proyecto','Un proyecto reúne requisitos, diseño, código, pruebas y documentación. Trabaja en partes pequeñas y registra cambios con Git.','# Idea: sistema de reservas\n# 1. Definir cliente y servicio\n# 2. Validar datos\n# 3. Crear y probar reservas','Primero define qué debe hacer cada componente; luego implementa y prueba un caso a la vez.','Un programa funciona mejor cuando también se puede entender y verificar.','¿Cuál es una buena práctica al desarrollar?',['Probar casos válidos e inválidos','Ignorar los mensajes de error','Subir contraseñas al repositorio'],0]
];
temas.forEach((t,i)=>{const id=lessons.length;lessons.push({title:t[0],sub:t[1]+' · 5 min',intro:t[2],code:t[3],explain:t[4],hint:t[5]});quiz.push({lesson:id,q:t[6],a:t[7],c:t[8],e:t[4]})});
// Actualizamos la ruta cuando se cargan los contenidos adicionales.
document.querySelector('#ruta .content-panel > p').textContent=`Una ruta de ${lessons.length} lecciones desde los fundamentos hasta temas avanzados. Cada lección incluye un ejemplo y una pregunta.`;
document.querySelector('#ruta .notice').textContent='Esta ruta cubre fundamentos y una introducción a temas avanzados. Python es amplio: sigue practicando con la documentación y proyectos reales.';
document.querySelector('#home .progress-copy').lastChild.textContent=' lecciones completadas';
renderAll();

// Mezclamos las respuestas para que la opción correcta no quede siempre igual.
renderQuiz = function () {
    answered = false;
    const x = quiz[currentQuestion];
    const alternativas = x.a.map((texto, indice) => ({texto, correcta: indice === x.c}));
    for (let i = alternativas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
    }
    const panel = document.getElementById('quiz-body');
    panel.innerHTML = `<p class="tag" style="color:#8872df;margin-top:25px">PREGUNTA ${currentQuestion + 1} DE ${quiz.length} · ${lessons[x.lesson].title}</p><div class="question"></div><div id="options"></div><div id="feedback" role="status"></div><div class="actions"><button class="secondary" id="next-q">Siguiente pregunta →</button></div>`;
    panel.querySelector('.question').textContent = x.q;
    const botones = [];
    alternativas.forEach((alternativa, i) => {
        const boton = document.createElement('button');
        boton.className = 'option';
        boton.textContent = `${String.fromCharCode(65 + i)}. ${alternativa.texto}`;
        boton.onclick = () => {
            if (answered) return;
            answered = true;
            state.attempts = (state.attempts || 0) + 1;
            if (alternativa.correcta) state.correct = (state.correct || 0) + 1;
            save();
            boton.classList.add(alternativa.correcta ? 'correct' : 'wrong');
            botones[alternativas.findIndex(item => item.correcta)].classList.add('correct');
            const mensaje = document.createElement('div');
            mensaje.className = 'feedback';
            mensaje.textContent = (alternativa.correcta ? '¡Correcto! ' : 'Sigamos aprendiendo. ') + x.e;
            document.getElementById('feedback').appendChild(mensaje);
        };
        botones.push(boton);
        document.getElementById('options').appendChild(boton);
    });
    document.getElementById('next-q').onclick = () => {
        currentQuestion = (currentQuestion + 1) % quiz.length;
        answered = false;
        renderQuiz();
    };
};

// Mostramos el progreso usando la cantidad real de lecciones disponibles.
renderProgress = function () {
    document.getElementById('progress-detail').innerHTML = `<div class="notice">Lecciones completadas: <b>${state.completed.length} / ${lessons.length}</b><br>Preguntas respondidas: <b>${state.attempts || 0}</b> · Correctas: <b>${state.correct || 0}</b><br>Palabras encontradas: <b>${state.found.length} / ${words.length}</b></div><p>El progreso se guarda únicamente en este navegador. Repite las preguntas y practica el código para reforzar lo aprendido.</p>`;
};

// Añadimos un laboratorio que ejecuta Python en un proceso separado del navegador.
const botonLaboratorio = document.createElement('button');
botonLaboratorio.innerHTML = '⌨ <span>Laboratorio Python</span>';
botonLaboratorio.onclick = () => {
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('visible', v.id === 'laboratorio'));
    document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b === botonLaboratorio));
    document.getElementById('crumb').textContent = 'Laboratorio';
    window.scrollTo(0, 0);
};
document.querySelector('.nav').appendChild(botonLaboratorio);
const laboratorio = document.createElement('section');
laboratorio.id = 'laboratorio';
laboratorio.className = 'view';
laboratorio.innerHTML = `<div class="panel content-panel lesson-content"><span class="tag" style="color:#806ae7">APRENDER HACIENDO</span><h1>Laboratorio Python</h1><p>Escribe código y ejecútalo en tu navegador. La primera carga necesita internet y puede tardar.</p><label for="codigo-python"><b>Tu código</b></label><textarea id="codigo-python" spellcheck="false" style="display:block;width:100%;min-height:190px;margin-top:10px;padding:16px;background:#252b3b;color:#e5e7ff;border:0;border-radius:12px;font:14px/1.6 monospace;resize:vertical">nombre = "Omar"\nprint(f"Hola, {nombre}")</textarea><div class="actions"><button class="action" id="ejecutar-python">▶ Ejecutar código</button><button class="secondary" id="detener-python">■ Detener</button></div><p id="estado-python" role="status" class="muted">Listo para empezar.</p><label for="salida-python"><b>Resultado</b></label><pre id="salida-python" aria-live="polite">La salida aparecerá aquí.</pre><div class="notice">El laboratorio usa Pyodide y necesita conexión para la primera carga. Algunas funciones, paquetes y programas interactivos con input() no están disponibles. Para usarlo, abre la app desde GitHub Pages o un servidor local; abrir index.html directamente puede bloquear el laboratorio.</div></div>`;
document.querySelector('.footer').before(laboratorio);
let trabajador = null;
let urlTrabajador = null;
let cronometro = null;
const codigoTrabajador = `import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/pyodide.mjs';
let python;
self.onmessage = async (evento) => {
  try {
    if (!python) { self.postMessage({tipo:'estado', texto:'Cargando Python; espera un momento...'}); python = await loadPyodide(); }
    python.setStdout({batched: texto => self.postMessage({tipo:'salida', texto})});
    python.setStderr({batched: texto => self.postMessage({tipo:'salida', texto})});
    const resultado = await python.runPythonAsync(evento.data.codigo);
    if (resultado !== undefined && resultado !== null) self.postMessage({tipo:'salida', texto:String(resultado)});
    self.postMessage({tipo:'fin'});
  } catch (error) { self.postMessage({tipo:'error', texto:String(error)}); }
};`;
function detenerLaboratorio(mensaje) {
    clearTimeout(cronometro);
    if (trabajador) trabajador.terminate();
    if (urlTrabajador) URL.revokeObjectURL(urlTrabajador);
    trabajador = null;
    urlTrabajador = null;
    document.getElementById('estado-python').textContent = mensaje;
    document.getElementById('ejecutar-python').disabled = false;
}
document.getElementById('detener-python').onclick = () => detenerLaboratorio('Ejecución detenida.');
document.getElementById('ejecutar-python').onclick = () => {
    if (trabajador) return;
    const salida = document.getElementById('salida-python');
    salida.textContent = '';
    document.getElementById('ejecutar-python').disabled = true;
    document.getElementById('estado-python').textContent = 'Preparando la ejecución...';
    try {
        urlTrabajador = URL.createObjectURL(new Blob([codigoTrabajador], {type:'text/javascript'}));
        trabajador = new Worker(urlTrabajador, {type:'module'});
        trabajador.onmessage = ({data}) => {
            if (data.tipo === 'estado') document.getElementById('estado-python').textContent = data.texto;
            if (data.tipo === 'salida') salida.textContent += data.texto + '\n';
            if (data.tipo === 'error') { salida.textContent += data.texto; detenerLaboratorio('Ocurrió un error. Revisa el mensaje.'); }
            if (data.tipo === 'fin') detenerLaboratorio('Ejecución terminada.');
        };
        trabajador.onerror = () => { salida.textContent = 'No se pudo cargar Python. Verifica tu conexión y usa GitHub Pages o un servidor local.'; detenerLaboratorio('No se pudo iniciar el laboratorio.'); };
        trabajador.postMessage({codigo: document.getElementById('codigo-python').value});
        cronometro = setTimeout(() => detenerLaboratorio('Ejecución detenida por superar el tiempo de espera.'), 120000);
    } catch (error) {
        salida.textContent = String(error);
        detenerLaboratorio('No se pudo iniciar el laboratorio.');
    }
};
