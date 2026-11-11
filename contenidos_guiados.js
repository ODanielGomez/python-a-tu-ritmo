// Contenidos ampliados: cada reto tiene su propia consigna y pista.
const contenidosGuiados = [
 {objetivo:'Entender qué significa programar, ejecutar una instrucción y observar su resultado.', bloques:[
 ['1. Una instrucción a la vez','Programar consiste en describir pasos que el computador puede ejecutar. Una receta es una comparación útil: sus instrucciones deben ser claras y estar ordenadas.'],
 ['2. Lenguaje y programa','Python es un lenguaje de programación. Un programa es el conjunto de instrucciones que escribimos con ese lenguaje; Python las interpreta para producir un resultado.'],
 ['3. Tu primera instrucción','En print("Hola, mundo"), print es una función que muestra información. Los paréntesis contienen lo que le entregamos; las comillas indican que Hola, mundo es texto.'],
 ['4. Lee el resultado','El código y el resultado son distintos: escribes una instrucción en el editor y el programa muestra la salida. Si cambias el texto entre comillas, cambiará lo que aparece.'],
 ['5. Los errores son pistas','Si olvidas una comilla o un paréntesis, Python puede mostrar SyntaxError. Lee la línea indicada, revisa los signos y vuelve a ejecutar.']
 ], retos:[
 ['Explica con tus palabras qué es programar.','Piensa en instrucciones ordenadas para una tarea.'],
 ['Escribe tres pasos para preparar una bebida. ¿Qué ocurriría si cambias su orden?','Enumera cada paso.'],
 ['En el laboratorio, muestra el texto Hola, mundo usando print.','Recuerda los paréntesis y las comillas.'],
 ['Modifica el texto anterior para que muestre tu nombre.','Cambia solo el contenido entre comillas.'],
 ['Escribe dos instrucciones print, una debajo de otra, y observa el orden de salida.','Python ejecuta estas instrucciones de arriba hacia abajo.'],
 ['Predice qué mostrará print("2 + 3") y ejecútalo.','Está entre comillas: es texto.'],
 ['Compara el resultado anterior con print(2 + 3).','Ahora Python recibe una operación numérica sin comillas.'],
 ['Escribe una instrucción con una comilla sin cerrar y observa el error; después corrígela.','Compara los signos de apertura y cierre.'],
 ['Muestra tu nombre y en una línea diferente tu ciudad.','Necesitas dos instrucciones o una cadena con salto de línea.'],
 ['Explica la diferencia entre el código que escribiste y la salida que aparece.','Una cosa es la instrucción y otra su resultado.']
 ]},
 {objetivo:'Guardar valores, reconocer tipos básicos y explicar la diferencia entre asignar y comparar.',bloques:[
 ['1. Guardar un dato','Una variable es un nombre que hace referencia a un valor. En nombre = "Omar", el signo = asigna el valor de la derecha al nombre de la izquierda.'],
 ['2. Texto y números','Las comillas crean una cadena: "20" es texto. Sin comillas, 20 es un entero; 20.5 es un decimal de tipo float. True y False representan valores booleanos.'],
 ['3. Usar y cambiar','Puedes mostrar nombre con print(nombre). Si luego asignas otro valor a nombre, las instrucciones posteriores usarán ese nuevo valor.'],
 ['4. Nombres claros','Usa nombres descriptivos como numero_reservas. Python distingue mayúsculas y minúsculas: edad y Edad son nombres diferentes. No puedes empezar un nombre con un número.'],
 ['5. Asignar no es comparar','= asigna. Para preguntar si dos valores son iguales usamos ==. Aprenderemos más comparaciones en una etapa posterior.']
 ],retos:[
 ['Crea una variable llamada nombre con tu nombre y muéstrala.','El nombre es texto: usa comillas.'],
 ['Crea una variable edad con un número entero y muéstrala.','Escribe el número sin comillas.'],
 ['Crea precio con un valor decimal y muestra su tipo usando type.','En Python el separador decimal es un punto.'],
 ['Guarda "20" y 20 en variables diferentes; muestra el tipo de cada una.','Las comillas hacen que el primero sea texto.'],
 ['Asigna 5 a puntos, después asigna 8 y muestra puntos. ¿Qué valor aparece?','Se muestra la asignación más reciente.'],
 ['Define ciudad y Ciudad con textos diferentes y muestra ambas.','Python distingue mayúsculas de minúsculas.'],
 ['Guarda tu nombre y tu ciudad; muestra un mensaje que incluya ambos.','Puedes usar una f-string con llaves.'],
 ['Crea una variable booleana llamada tiene_cuenta y asígnale True o False.','True y False empiezan con mayúscula y no llevan comillas.'],
 ['Predice el resultado de x = 2; x = x + 3; print(x), y luego compruébalo.','La segunda línea calcula usando el valor anterior.'],
 ['Escribe una frase que explique la diferencia entre = y ==.','Uno guarda un valor; el otro compara.']
 ]},
 {objetivo:'Tomar decisiones con if, comparar valores e interpretar la sangría.',bloques:[
 ['1. Una pregunta para el programa','Una condición es una expresión que produce True o False. Por ejemplo, edad >= 18 pregunta si edad es mayor o igual a 18.'],
 ['2. La estructura if','Python evalúa la condición. Si es verdadera, ejecuta las instrucciones del bloque. Los dos puntos terminan la cabecera y la sangría indica qué líneas pertenecen al bloque.'],
 ['3. Si la condición es falsa','Si la condición es falsa y no hay else, Python omite el bloque y continúa con lo que sigue. else permite definir un camino alternativo.'],
 ['4. Comparaciones frecuentes','== compara igualdad; != comprueba que sean diferentes; > y < comparan mayor o menor; >= y <= incluyen el límite. El signo = por sí solo asigna.'],
 ['5. Prueba los límites','Si preguntas edad >= 18, prueba 17, 18 y 19. Esto ayuda a verificar que el límite se comporte como esperas.']
 ],retos:[
 ['Crea edad con valor 20 y muestra un mensaje si es mayor o igual a 18.','Usa if y una línea con sangría.'],
 ['Cambia edad a 17. ¿Se muestra el mensaje anterior?','Comprueba primero si 17 >= 18.'],
 ['Prueba edad 18 y explica si el operador incluye ese límite.','El operador >= incluye la igualdad.'],
 ['Agrega else para mostrar un mensaje cuando la edad sea menor.','else va alineado con if.'],
 ['Comprueba si un número es igual a 10.','Para comparar igualdad utiliza ==.'],
 ['Prueba que un número sea diferente de cero.','El operador != significa diferente.'],
 ['Comprueba si una nota es mayor que 3.0 y prueba exactamente 3.0.','> no incluye la igualdad.'],
 ['Modifica la condición para que 3.0 sí cumpla y vuelve a probar.','Usa el operador que incluye el límite.'],
 ['Escribe dos instrucciones con sangría dentro de if y observa cuándo se ejecutan.','Ambas deben tener la misma sangría.'],
 ['Explica qué sucede cuando una condición es False y no existe else.','Observa si Python entra o no al bloque.']
 ]}
];

contenidosGuiados[3] = {objetivo:'Recorrer elementos y comprender cuándo termina un ciclo for.', bloques:[
 ['Qué es','Un ciclo for repite un bloque una vez por cada elemento de una colección o secuencia. La variable del ciclo recibe, en cada vuelta, el siguiente elemento.'],
 ['Para qué y cuándo','Úsalo cuando necesitas procesar elementos de una lista, caracteres de un texto o una secuencia de números. Por ejemplo, mostrar el nombre de cada cliente.'],
 ['Paso a paso','En for numero in range(3), range(3) produce 0, 1 y 2. Primero numero vale 0, luego 1 y por último 2. Al agotarse la secuencia, el ciclo termina.'],
 ['La sangría','Las instrucciones con sangría bajo for pertenecen al ciclo. Una instrucción sin esa sangría se ejecuta después de que termina.'],
 ['Error frecuente','range(3) no incluye el 3: su límite final queda por fuera. Prueba range(1, 4) para obtener 1, 2 y 3.'] ]};
contenidosGuiados[4] = {objetivo:'Crear funciones, enviarles valores y utilizar lo que devuelven.', bloques:[
 ['Qué es','Una función agrupa instrucciones bajo un nombre. Definirla con def no ejecuta su cuerpo: este se ejecuta cuando llamas la función.'],
 ['Para qué y cuándo','Úsala para reutilizar una operación o separar una tarea. Por ejemplo, una función puede calcular el total de una reserva sin volver a escribir el cálculo.'],
 ['Parámetro y argumento','En def saludar(nombre), nombre es un parámetro. En saludar("Omar"), "Omar" es el argumento que recibe ese parámetro durante esa llamada.'],
 ['Devolver y mostrar','return entrega un valor a quien llamó la función; print lo muestra en pantalla. Puedes guardar el valor de return y usarlo después.'],
 ['Paso a paso','En def sumar(a, b): return a + b, una llamada sumar(2, 3) asigna 2 a a y 3 a b, calcula 5 y lo devuelve.'] ]};
contenidosGuiados[5] = {objetivo:'Distinguir clases, objetos, atributos y métodos.', bloques:[
 ['Qué es','Una clase describe datos y comportamientos relacionados. Un objeto es una instancia creada a partir de esa clase.'],
 ['Un ejemplo cotidiano','Una clase Cliente puede servir de modelo; Omar y Ana pueden ser dos objetos distintos, cada uno con sus propios datos.'],
 ['Atributos y métodos','Un atributo guarda un dato del objeto, como nombre. Un método es una función definida en la clase que describe un comportamiento.'],
 ['Cómo se crea','Cliente("Omar") llama a la clase y crea un objeto. El método __init__ recibe el nuevo objeto y puede asignar sus atributos iniciales.'],
 ['Qué significa self','En un método de instancia, self hace referencia al objeto que recibe la llamada. self.nombre permite consultar o guardar el nombre de ese objeto.'] ]};
contenidosGuiados[6] = {objetivo:'Leer mensajes de error y usar comentarios para explicar decisiones.', bloques:[
 ['Qué es','Un comentario es texto dentro del código que Python no ejecuta. Una excepción es una señal de que ocurrió un problema durante una operación.'],
 ['Cuándo usarlos','Un comentario puede aclarar por qué existe una regla. Un mensaje de error ayuda a investigar por qué el programa no pudo continuar como esperaba.'],
 ['Comentarios','En edad = 20  # Edad del cliente, lo que sigue a # es un comentario. Las comillas son distintas: "#" es un carácter dentro de un texto.'],
 ['Leer un traceback','Empieza por la última línea para identificar el tipo y mensaje del error. Después revisa el archivo y la línea de tu código que aparecen en el recorrido.'],
 ['Prueba pequeña','Si int("hola") falla, lee ValueError y prueba int("10"). El segundo texto sí representa un número entero.'] ]};
contenidosGuiados[7] = {objetivo:'Reconocer los tipos básicos y convertir valores de manera consciente.', bloques:[
 ['Qué es un tipo','El tipo describe qué clase de valor tienes y qué operaciones admite. int representa enteros; float, números decimales; str, texto; y bool, True o False.'],
 ['Cuándo convertir','input devuelve texto. Si el usuario escribe "12" y deseas sumarle 3, primero puedes convertirlo con int("12") para obtener el número 12.'],
 ['Paso a paso','int("12") produce 12. Después, 12 + 3 produce 15. En cambio, "12" + "3" une los textos y produce "123".'],
 ['Conversiones y errores','int("hola") genera ValueError porque ese texto no representa un entero. Debes validar o manejar esa posibilidad cuando recibas datos externos.'],
 ['Datos que parecen números','Una identificación suele guardarse como texto: así puedes conservar ceros iniciales y evitar tratarla como una cantidad para sumar.'] ]};

contenidosGuiados[8] = {objetivo:'Solicitar datos, reconocer que input devuelve texto y convertir cuando sea necesario.', bloques:[
 ['Qué es','input es una función que muestra una pregunta, espera a que escribas y devuelve lo ingresado como una cadena de texto.'],
 ['Para qué sirve','Permite que una persona proporcione datos al programa. Por ejemplo, puedes preguntar su nombre o la cantidad de asistentes a una reserva.'],
 ['Paso a paso','En texto = input("¿Cuántos años tienes? "), la pregunta aparece en pantalla. Si escribes 20, texto guarda "20", con tipo str.'],
 ['Convertir','edad = int(texto) intenta convertir "20" en el entero 20. Luego print(edad + 1) muestra 21. Sin convertir, no puedes sumar directamente ese texto con el número 1.'],
 ['Si la entrada es incorrecta','Si escriben "hola", int(texto) genera ValueError. Más adelante aprenderás a controlarlo con try y except. No necesitas convertir un nombre o una identificación para guardarlos.'] ]};
contenidosGuiados[9] = {objetivo:'Distinguir división, división al piso y residuo, y elegir la operación adecuada.', bloques:[
 ['Qué son','Los operadores indican operaciones: + suma, - resta, * multiplica, / divide, // calcula el cociente redondeado hacia abajo, % calcula el residuo y ** eleva a una potencia.'],
 ['División /','7 / 2 da 3.5. Úsala cuando necesitas el resultado de la división, incluyendo la parte decimal, como repartir siete unidades entre dos personas.'],
 ['División //','7 // 2 da 3: con números positivos indica cuántos grupos completos de dos caben en siete. Con negativos, redondea hacia menos infinito: -7 // 2 da -4.'],
 ['Residuo %','7 % 2 da 1: después de formar tres grupos de dos queda una unidad. Con divisor 2 y enteros, el residuo es 0 o 1; con divisor 5 puede ser 0, 1, 2, 3 o 4.'],
 ['Relación y elección','En Python, a = (a // b) * b + a % b si b no es cero. Usa / para el cociente con decimales, // para el cociente al piso y % para el residuo. Dividir entre cero produce ZeroDivisionError.'] ]};
contenidosGuiados[10] = {objetivo:'Trabajar con texto, formato y métodos sin modificar accidentalmente el valor original.', bloques:[
 ['Qué es','Una cadena o str guarda texto, por ejemplo "Omar". Las comillas indican dónde empieza y termina el texto; no se incluyen en su contenido.'],
 ['Métodos de texto','Un método realiza una operación sobre el texto. nombre.upper() devuelve una versión en mayúsculas; nombre.lower() devuelve una en minúsculas.'],
 ['Los espacios y strip','"  Ana María  ".strip() devuelve "Ana María": quita espacios de los extremos y conserva el espacio interior.'],
 ['Valores nuevos','Las cadenas son inmutables: métodos como strip y replace devuelven un texto nuevo. Si quieres conservarlo, asígnalo, por ejemplo nombre = nombre.strip().'],
 ['Formatear','En f"Hola, {nombre}", Python coloca el valor de nombre dentro del texto. Si nombre es "Omar", el resultado es "Hola, Omar".'] ]};
contenidosGuiados[11] = {objetivo:'Combinar comparaciones para tomar decisiones con valores verdaderos o falsos.', bloques:[
 ['Qué son','Una comparación produce un booleano: True o False. Por ejemplo, 5 > 3 es True y 5 == 3 es False.'],
 ['Asignar o comparar','= guarda un valor en una variable, como edad = 20. == compara si dos valores son iguales, como edad == 20.'],
 ['Combinar condiciones','and da True cuando ambas condiciones son verdaderas; or da True cuando al menos una lo es. not invierte el resultado: not True es False.'],
 ['Paso a paso','Si edad vale 20 y tiene_entrada vale True, edad >= 18 es True. Entonces True and True también da True. Si no tiene entrada, el resultado completo es False.'],
 ['Cuándo usarlo','Usa comparaciones para expresar reglas, por ejemplo: admitir una persona si es mayor de edad y tiene entrada. Pon paréntesis cuando ayuden a leer una condición.'] ]};
contenidosGuiados[12] = {objetivo:'Elegir entre varias alternativas mediante if, elif y else.', bloques:[
 ['Qué hacen','if comprueba una condición. elif permite probar otra si la anterior no se cumplió; else se ejecuta si ninguna de las condiciones anteriores fue verdadera.'],
 ['Cuándo se usa','Es útil cuando hay varias categorías excluyentes, por ejemplo asignar un mensaje según una nota.'],
 ['Paso a paso','Con nota = 75, Python comprueba primero nota >= 90: es False. Luego comprueba nota >= 60: es True, así que ejecuta el bloque de elif y no entra en else.'],
 ['El orden importa','Se ejecuta la primera rama cuya condición sea verdadera. Si compruebas primero nota >= 60, una nota de 95 también cumple esa condición y no alcanzaría la rama de 90.'],
 ['Sangría y límites','El código dentro de cada rama debe tener sangría. Prueba valores como 59, 60 y 90 para entender qué ocurre justo en cada límite.'] ]};

contenidosGuiados[13] = {
  "objetivo": "Controlar repeticiones con while.",
  "bloques": [
    [
      "Qué es",
      "while repite un bloque mientras su condición sea verdadera. Antes de cada vuelta, Python comprueba esa condición."
    ],
    [
      "Cuándo usarlo",
      "Es útil cuando no conoces de antemano cuántas veces necesitarás repetir una acción, como pedir una opción hasta que sea válida."
    ],
    [
      "Ejemplo paso a paso",
      "Si contador empieza en 0, while contador < 3 muestra 0, 1 y 2. Después contador pasa a 3, la condición es falsa y termina."
    ],
    [
      "Evitar ciclos infinitos",
      "La condición debe poder cambiar o debe existir una salida, por ejemplo break. Si nunca deja de ser verdadera, el ciclo podría continuar indefinidamente."
    ],
    [
      "Comparación con for",
      "for recorre elementos de un iterable; while repite mientras una condición se cumpla. Ambos pueden terminar con break."
    ]
  ]
};

contenidosGuiados[14] = {
  "objetivo": "Guardar y recorrer elementos en una lista.",
  "bloques": [
    [
      "Qué es",
      "Una lista es una colección ordenada y modificable. Se escribe con corchetes, por ejemplo [\"pera\", \"mango\"]."
    ],
    [
      "Cuándo usarla",
      "Sirve para guardar varios datos en una secuencia, como una lista de clientes o de productos."
    ],
    [
      "Índices",
      "El primer elemento está en la posición 0: frutas[0] devuelve \"pera\". Una posición inexistente produce IndexError."
    ],
    [
      "Modificar",
      "append agrega un elemento al final de la misma lista. Después de frutas.append(\"uva\"), la lista tiene tres elementos."
    ],
    [
      "Recorrer",
      "for fruta in frutas visita cada elemento por turno. La variable fruta toma el valor de cada elemento durante su vuelta."
    ]
  ]
};

contenidosGuiados[15] = {
  "objetivo": "Diferenciar tuplas y conjuntos.",
  "bloques": [
    [
      "Tupla",
      "Una tupla es una secuencia ordenada que no permite cambiar directamente sus posiciones; por ejemplo, punto = (3, 4)."
    ],
    [
      "Cuándo usarla",
      "Una tupla puede representar datos agrupados cuyo orden importa, como una coordenada con posición horizontal y vertical."
    ],
    [
      "Conjunto",
      "Un conjunto guarda elementos únicos. {\"azul\", \"rojo\", \"azul\"} contiene dos elementos porque no conserva duplicados."
    ],
    [
      "Cuándo usarlo",
      "Es útil para eliminar repetidos o comprobar pertenencia. No debes depender del orden de recorrido de un conjunto."
    ],
    [
      "Un detalle",
      "Una tupla no cambia sus posiciones, pero puede contener un objeto mutable, como una lista. Un conjunto vacío se crea con set(), porque {} crea un diccionario."
    ]
  ]
};

contenidosGuiados[16] = {
  "objetivo": "Relacionar claves y valores mediante diccionarios.",
  "bloques": [
    [
      "Qué es",
      "Un diccionario asocia claves con valores: {\"nombre\": \"Omar\", \"edad\": 20} relaciona \"nombre\" con \"Omar\"."
    ],
    [
      "Cuándo usarlo",
      "Úsalo cuando necesitas consultar datos mediante un nombre o identificador, como los campos de un cliente."
    ],
    [
      "Acceder",
      "cliente[\"nombre\"] devuelve \"Omar\". Si la clave no existe, los corchetes producen KeyError."
    ],
    [
      "Consultar con get",
      "cliente.get(\"ciudad\", \"Sin ciudad\") devuelve el valor de ciudad si existe; de lo contrario devuelve \"Sin ciudad\"."
    ],
    [
      "Actualizar",
      "cliente[\"edad\"] = 21 cambia el valor asociado a esa clave. Una clave nueva agrega otro par al diccionario."
    ]
  ]
};

contenidosGuiados[17] = {
  "objetivo": "Diferenciar parámetros de argumentos.",
  "bloques": [
    [
      "Parámetros",
      "Los parámetros son nombres definidos en la función: en def saludar(nombre), nombre es un parámetro."
    ],
    [
      "Argumentos",
      "Los argumentos son los valores que envías al llamar la función: en saludar(\"Omar\"), \"Omar\" es un argumento."
    ],
    [
      "Valor por defecto",
      "En def saludar(nombre, saludo=\"Hola\"), saludo usa \"Hola\" si no se proporciona otro valor."
    ],
    [
      "Llamada paso a paso",
      "saludar(\"Omar\") asigna \"Omar\" a nombre, usa el saludo por defecto y puede devolver \"Hola, Omar\"."
    ],
    [
      "Argumentos nombrados",
      "saludar(\"Omar\", saludo=\"Buenos días\") indica explícitamente el parámetro saludo. No confundas devolver con mostrar: return entrega el valor y print lo muestra."
    ]
  ]
};

contenidosGuiados[18] = {
  "objetivo": "Entender dónde se puede utilizar una variable.",
  "bloques": [
    [
      "Qué es alcance",
      "El alcance determina desde dónde se puede consultar un nombre. Una variable asignada normalmente dentro de una función es local a esa función."
    ],
    [
      "Ejemplo",
      "En def calcular(): total = 10, total es local a calcular y no queda disponible por ese nombre fuera de la función."
    ],
    [
      "Usar el resultado",
      "Si la función hace return total, resultado = calcular() guarda fuera el valor 10 devuelto por la función."
    ],
    [
      "Parámetros",
      "Los parámetros también son nombres locales de la función durante cada llamada."
    ],
    [
      "Cuándo importa",
      "Entender el alcance evita depender de variables que no existen en un lugar. Pasar argumentos y devolver resultados suele hacer más claras las funciones."
    ]
  ]
};

contenidosGuiados[19] = {
  "objetivo": "Detectar y manejar errores previstos.",
  "bloques": [
    [
      "Qué es una excepción",
      "Una excepción indica que ocurrió un problema durante una operación. Por ejemplo, int(\"abc\") produce ValueError."
    ],
    [
      "Para qué sirve try",
      "Dentro de try colocas la operación que podría fallar. Si no ocurre una excepción, el programa continúa después del bloque."
    ],
    [
      "Para qué sirve except",
      "except ValueError captura ese tipo de error para manejarlo, por ejemplo mostrando \"Número inválido\"."
    ],
    [
      "Qué significa as error",
      "En except ValueError as error, error es un nombre para el objeto de la excepción capturada. Puedes consultar su mensaje dentro del bloque."
    ],
    [
      "Evitar ocultar fallos",
      "Captura los tipos que sabes manejar. No supongas que cualquier error tiene la misma causa ni uses el mensaje para ocultar un problema inesperado."
    ]
  ]
};

contenidosGuiados[20] = {
  "objetivo": "Distinguir else, finally y raise.",
  "bloques": [
    [
      "else",
      "En una estructura try/except, else se ejecuta si el bloque try termina sin lanzar una excepción."
    ],
    [
      "finally",
      "finally se ejecuta al salir de la estructura, ocurra o no una excepción; puede utilizarse para limpieza."
    ],
    [
      "raise",
      "raise lanza una excepción. Por ejemplo, puedes lanzar un error si una edad no cumple una regla de validación."
    ],
    [
      "Paso a paso",
      "Si int(\"10\") funciona, se ejecuta else y luego finally. Si se captura ValueError, se ejecuta except y después finally."
    ],
    [
      "Importante",
      "finally no significa que todo haya salido bien. Una excepción no capturada puede seguir propagándose después de ejecutar finally."
    ]
  ]
};

contenidosGuiados[21] = {
  "objetivo": "Crear y utilizar excepciones propias.",
  "bloques": [
    [
      "Qué son",
      "Una excepción personalizada es una clase que representa un error específico de tu programa. Normalmente hereda de Exception."
    ],
    [
      "Cuándo usarlas",
      "Son útiles para distinguir una regla de tu aplicación, por ejemplo DatoInvalidoError cuando una identificación está vacía."
    ],
    [
      "Definir",
      "class DatoInvalidoError(Exception): pass crea un tipo propio de excepción. pass deja el cuerpo vacío cuando no necesitas agregar comportamiento."
    ],
    [
      "Lanzar y capturar",
      "raise DatoInvalidoError(\"Dato inválido\") lanza el error; except DatoInvalidoError puede capturarlo en otra parte."
    ],
    [
      "Conservar la causa",
      "raise DatoInvalidoError(\"Dato inválido\") from error indica que la excepción original fue la causa directa. Esto ayuda a investigar el fallo."
    ]
  ]
};

contenidosGuiados[22] = {
  "objetivo": "Leer y escribir archivos de texto de manera responsable.",
  "bloques": [
    [
      "Qué es",
      "Un archivo puede conservar información en disco después de que termina el programa, a diferencia de una variable en memoria."
    ],
    [
      "Abrir con with",
      "with open(\"notas.txt\", \"w\", encoding=\"utf-8\") as archivo abre un archivo de texto y organiza su cierre al salir del bloque."
    ],
    [
      "Escribir",
      "archivo.write(\"Hola, Python\") escribe el texto. El modo w crea el archivo si hace falta o sobrescribe su contenido si ya existe."
    ],
    [
      "Otros modos",
      "r abre para lectura y normalmente requiere que el archivo exista. a abre para agregar contenido al final."
    ],
    [
      "Errores y rutas",
      "Abrir puede fallar por ruta inexistente o permisos. Indicar UTF-8 ayuda a interpretar caracteres como tildes de forma coherente."
    ]
  ]
};

contenidosGuiados[23] = {
  "objetivo": "Organizar código mediante módulos e importaciones.",
  "bloques": [
    [
      "Qué es un módulo",
      "Un módulo es una unidad de código Python; con frecuencia es un archivo .py que contiene funciones, clases o variables."
    ],
    [
      "Importar",
      "import math permite utilizar elementos del módulo. Después math.sqrt(25) calcula la raíz cuadrada y devuelve 5.0."
    ],
    [
      "Importar un nombre",
      "from math import sqrt permite llamar sqrt(25) directamente. Elige una forma que deje claro de dónde vienen los nombres."
    ],
    [
      "Para qué sirve",
      "Separar el código en módulos facilita reutilizar funciones y organizar responsabilidades en un proyecto."
    ],
    [
      "Error frecuente",
      "No nombres tu archivo math.py si necesitas importar el módulo estándar math: tu archivo podría interferir con esa importación."
    ]
  ]
};

contenidosGuiados[24] = {
  "objetivo": "Reconocer atributos de instancia y el papel de self.",
  "bloques": [
    [
      "Objeto y atributo",
      "Una instancia es un objeto creado a partir de una clase. Un atributo almacena información asociada a ese objeto."
    ],
    [
      "Inicialización",
      "En __init__, self.estado = \"pendiente\" asigna el estado inicial al objeto que se está creando."
    ],
    [
      "Qué es self",
      "self es el nombre habitual del primer parámetro de un método de instancia; hace referencia al objeto que recibe la llamada."
    ],
    [
      "Acceder desde fuera",
      "Después de r = Reserva(), r.estado permite consultar el valor de ese objeto."
    ],
    [
      "Objetos independientes",
      "Dos instancias pueden tener estados distintos. Cambiar el atributo de una no cambia automáticamente el atributo de la otra."
    ]
  ]
};

contenidosGuiados[25] = {
  "objetivo": "Entender encapsulación, nombres con doble guion y property.",
  "bloques": [
    [
      "Encapsulación",
      "Organiza cómo se accede y modifica la información de un objeto, para mantener claras sus reglas de uso."
    ],
    [
      "Doble guion bajo",
      "Un nombre como self.__nombre activa una transformación de nombre dentro de la clase. Dificulta el acceso accidental, pero no es privacidad absoluta."
    ],
    [
      "Consultar con property",
      "@property permite definir un método que se consulta como un atributo: cliente.nombre, sin escribir paréntesis."
    ],
    [
      "Paso a paso",
      "El método nombre recibe self y devuelve self.__nombre. Al consultar cliente.nombre, Python ejecuta ese método y entrega el valor."
    ],
    [
      "Lectura y escritura",
      "Si no se define un setter, la propiedad no admite asignación directa. Para cambiar datos puedes definir una operación que aplique validaciones."
    ]
  ]
};

contenidosGuiados[26] = {
  "objetivo": "Reutilizar y especializar comportamiento mediante herencia.",
  "bloques": [
    [
      "Qué es",
      "La herencia permite que una clase hija utilice y amplíe comportamiento de una clase base. Sala(Servicio) declara que Sala hereda de Servicio."
    ],
    [
      "Cuándo usarla",
      "Sirve cuando la relación tiene sentido: una sala puede ser un tipo de servicio y compartir parte de su información."
    ],
    [
      "Inicialización con super",
      "super().__init__(nombre) llama al inicializador de la clase base desde el de la clase hija, siguiendo el orden de resolución de métodos."
    ],
    [
      "Paso a paso",
      "Al crear Sala(\"Mediana\"), el inicializador de Sala puede enviar ese nombre al inicializador de Servicio, que asigna self.nombre."
    ],
    [
      "Especializar",
      "La hija puede añadir atributos o redefinir métodos. No es necesario usar herencia si solo quieres compartir un dato sin una relación apropiada."
    ]
  ]
};

contenidosGuiados[27] = {
  "objetivo": "Reconocer polimorfismo y clases abstractas.",
  "bloques": [
    [
      "Polimorfismo",
      "Permite usar una misma operación con objetos que la implementan de maneras distintas. Por ejemplo, distintos servicios pueden calcular su costo de acuerdo con sus reglas."
    ],
    [
      "Un ejemplo",
      "Una sala puede calcular tarifa por horas y una asesoría puede usar una tarifa fija. En ambos casos, el programa puede llamar calcular_costo()."
    ],
    [
      "Abstracción",
      "Una clase abstracta expresa una interfaz o comportamiento que las clases concretas deben completar."
    ],
    [
      "En Python",
      "ABC y @abstractmethod, del módulo abc, permiten declarar métodos abstractos. Una subclase concreta debe implementarlos antes de poder instanciarse."
    ],
    [
      "Cuándo sirve",
      "Ayuda a organizar tipos de servicio que comparten una operación, dejando que cada uno defina cómo cumplirla. Las pruebas deben verificar cada implementación."
    ]
  ]
};

contenidosGuiados[28] = {
  "objetivo": "Recorrer valores con iteradores y generadores.",
  "bloques": [
    [
      "Iterable",
      "Un iterable es un objeto del que se puede obtener un iterador, como una lista o una cadena. Un iterador entrega sus elementos uno a uno."
    ],
    [
      "iter y next",
      "iter(lista) obtiene un iterador; next(iterador) pide el siguiente elemento. Cuando no quedan valores, next lanza StopIteration."
    ],
    [
      "Generadores",
      "Una función que contiene yield crea un generador. Al llamar la función se obtiene el generador; su cuerpo avanza cuando se solicitan valores."
    ],
    [
      "Ejemplo paso a paso",
      "En contar(), el primer yield entrega 1 y pausa la función. En la siguiente vuelta entrega 2; después termina. El for muestra ambos valores."
    ],
    [
      "Cuándo usarlo",
      "Un generador es útil para producir valores bajo demanda sin construir necesariamente una lista completa. Una vez agotado, normalmente hay que crear otro para repetirlo."
    ]
  ]
};

contenidosGuiados[29] = {
  "objetivo": "Crear colecciones mediante comprensiones.",
  "bloques": [
    [
      "Qué son",
      "Una comprensión construye una colección describiendo una expresión y un recorrido. Por ejemplo, [n * n for n in range(5)] crea una lista."
    ],
    [
      "Paso a paso",
      "range(5) proporciona 0, 1, 2, 3 y 4. Para cada n, se calcula n * n. El resultado es [0, 1, 4, 9, 16]."
    ],
    [
      "Filtrar",
      "Puedes añadir una condición: [n for n in range(5) if n % 2 == 0] produce [0, 2, 4]."
    ],
    [
      "Otras colecciones",
      "{n: n * n for n in range(3)} crea un diccionario; {n * n for n in range(3)} crea un conjunto."
    ],
    [
      "Cuándo usarla",
      "Es útil para transformaciones y filtros sencillos. Si la expresión es difícil de entender, un ciclo for convencional puede ser más claro."
    ]
  ]
};

contenidosGuiados[30] = {
  "objetivo": "Comprender decoradores y funciones envolventes.",
  "bloques": [
    [
      "Qué es",
      "Un decorador recibe una función y devuelve una función u otro objeto invocable. Puede agregar comportamiento alrededor de la función original."
    ],
    [
      "Para qué sirve",
      "Se usa, por ejemplo, para agregar registro de eventos o comprobar permisos en funciones relacionadas, evitando repetir la misma estructura."
    ],
    [
      "Paso a paso",
      "En el ejemplo, anunciar recibe saludar y devuelve envoltura. Al llamar saludar después de decorar, se ejecuta envoltura, que muestra \"Inicio\" y llama a la función original."
    ],
    [
      "Sintaxis @",
      "@anunciar sobre def saludar equivale conceptualmente a asignar saludar = anunciar(saludar) después de definirla. El ejemplo define la función; debes llamarla para observar la salida."
    ],
    [
      "Argumentos",
      "Una envoltura que deba aceptar argumentos puede recibir *args y **kwargs y reenviarlos. functools.wraps ayuda a conservar metadatos de la función original."
    ]
  ]
};

contenidosGuiados[31] = {
  "objetivo": "Crear pruebas automatizadas con unittest.",
  "bloques": [
    [
      "Qué son",
      "Una prueba automatizada ejecuta una operación y comprueba si el resultado coincide con lo esperado. unittest es un módulo estándar de Python."
    ],
    [
      "Organización",
      "Una clase de pruebas puede heredar de unittest.TestCase. Los métodos cuyo nombre comienza por test_ se pueden descubrir y ejecutar como pruebas."
    ],
    [
      "Comparar",
      "self.assertEqual(2 + 3, 5) comprueba que ambos valores sean iguales. Si no lo son, la prueba falla y muestra información para investigar."
    ],
    [
      "Ejecutar",
      "python -m unittest discover es un comando de terminal que busca pruebas siguiendo las convenciones de unittest. Definir la clase por sí solo no muestra un resultado."
    ],
    [
      "Casos importantes",
      "Prueba valores válidos, inválidos y límites. Una suite que pasa aumenta la confianza, pero no demuestra que el programa no tenga ningún error."
    ]
  ]
};

contenidosGuiados[32] = {
  "objetivo": "Convertir datos entre Python y JSON.",
  "bloques": [
    [
      "Qué es",
      "JSON es un formato de texto para intercambiar datos estructurados. Puede representar objetos, arreglos, texto, números, booleanos y null."
    ],
    [
      "De Python a JSON",
      "json.dumps(datos) devuelve una cadena JSON. ensure_ascii=False permite que caracteres como tildes aparezcan directamente en el texto."
    ],
    [
      "De JSON a Python",
      "json.loads(texto) interpreta una cadena JSON y devuelve una estructura Python, por ejemplo un diccionario o una lista."
    ],
    [
      "Archivos",
      "json.dump escribe en un archivo abierto; json.load lee desde él. La s de dumps y loads indica que trabajan con texto en memoria."
    ],
    [
      "Errores frecuentes",
      "JSON exige comillas dobles en sus textos y claves: {\"nombre\": \"Omar\"}. Un texto JSON inválido produce json.JSONDecodeError al intentar interpretarlo."
    ]
  ]
};

contenidosGuiados[33] = {
  "objetivo": "Crear entornos virtuales y gestionar dependencias.",
  "bloques": [
    [
      "Qué es",
      "Un entorno virtual separa las dependencias de Python de un proyecto. Dos proyectos pueden necesitar versiones diferentes del mismo paquete."
    ],
    [
      "Crear",
      "En una terminal, python -m venv .venv crea un directorio llamado .venv para el entorno. Es un comando de terminal, no una instrucción dentro de un archivo .py."
    ],
    [
      "Activar",
      "En PowerShell de Windows se usa normalmente .venv\\Scripts\\Activate.ps1; en bash de Linux o macOS, source .venv/bin/activate. Las políticas locales pueden afectar la activación."
    ],
    [
      "Instalar",
      "python -m pip install requests instala ese paquete para el intérprete seleccionado. python -m pip install -r requirements.txt instala los requisitos de un archivo."
    ],
    [
      "Compartir el proyecto",
      "Documenta las dependencias y normalmente excluye .venv de Git. No publiques contraseñas ni tokens en archivos de configuración del repositorio."
    ]
  ]
};

contenidosGuiados[34] = {
  "objetivo": "Usar anotaciones para comunicar tipos esperados.",
  "bloques": [
    [
      "Qué son",
      "Las anotaciones describen tipos esperados en variables, parámetros o retornos. Ayudan a la lectura y a herramientas de análisis."
    ],
    [
      "Ejemplo",
      "def saludar(nombre: str) -> str indica que se espera texto en nombre y que la función declara un retorno de texto."
    ],
    [
      "Qué no hacen",
      "Por sí solas, las anotaciones normalmente no convierten ni validan los valores al ejecutar el programa. Los datos externos todavía necesitan validación."
    ],
    [
      "Colecciones y alternativas",
      "list[int] describe una lista de enteros esperados. str | None describe una unión en versiones modernas; Optional[str] es otra forma mediante typing."
    ],
    [
      "Cuándo usarlas",
      "Son útiles para documentar contratos y detectar problemas con herramientas como un verificador estático. Complementan las pruebas; no las sustituyen."
    ]
  ]
};

contenidosGuiados[35] = {
  "objetivo": "Gestionar recursos con with.",
  "bloques": [
    [
      "Qué es",
      "Un gestor de contexto organiza lo que sucede al entrar y salir de un bloque with. Puede realizar limpieza aunque ocurra una excepción dentro del bloque."
    ],
    [
      "Con archivos",
      "with open(\"datos.txt\", encoding=\"utf-8\") as archivo abre el archivo para lectura y asigna el objeto a archivo. Al salir del bloque, el gestor cierra el archivo."
    ],
    [
      "El ejemplo",
      "contenido = archivo.read() lee el texto disponible. Si el archivo no existe o no hay permisos, abrirlo puede lanzar una excepción."
    ],
    [
      "Protocolo",
      "Un gestor de contexto define operaciones de entrada y salida mediante __enter__ y __exit__. El valor devuelto por __enter__ se asigna después de as."
    ],
    [
      "Cuándo usarlo",
      "Es útil con archivos y otros recursos compatibles. No supongas que todos los gestores hacen exactamente la misma limpieza: revisa el recurso utilizado."
    ]
  ]
};

contenidosGuiados[36] = {
  "objetivo": "Distinguir corrutinas, tareas y espera asíncrona.",
  "bloques": [
    [
      "Qué es",
      "async def define una función asíncrona. Al llamarla se crea una corrutina; esta debe ejecutarse o programarse para que avance."
    ],
    [
      "await",
      "await espera un objeto compatible y puede ceder el control al bucle de eventos mientras se completa la operación."
    ],
    [
      "Ejemplo paso a paso",
      "asyncio.run(saludar()) ejecuta la corrutina principal. Dentro, await asyncio.sleep(1) espera de manera cooperativa y después print muestra \"Hola\"."
    ],
    [
      "Cuándo usarlo",
      "Es útil para coordinar varias esperas de entrada y salida, como solicitudes de red compatibles. No convierte automáticamente un cálculo intensivo en paralelo."
    ],
    [
      "Evitar bloquear",
      "Una llamada bloqueante dentro de una corrutina puede detener el bucle de eventos. La asincronía no reemplaza el manejo de errores ni los tiempos de espera."
    ]
  ]
};

contenidosGuiados[37] = {
  "objetivo": "Guardar y consultar datos con SQLite de forma segura.",
  "bloques": [
    [
      "Qué es",
      "Una base de datos organiza información para almacenarla y consultarla. sqlite3 es un módulo estándar para trabajar con SQLite."
    ],
    [
      "Conexión",
      "sqlite3.connect(\":memory:\") crea una base temporal en memoria asociada a la conexión. Una base en un archivo puede conservarse entre ejecuciones."
    ],
    [
      "Ejemplo",
      "CREATE TABLE clientes (nombre TEXT) crea una tabla. INSERT agrega una fila y SELECT permite consultar sus datos."
    ],
    [
      "Parámetros",
      "En conexion.execute(\"INSERT INTO clientes VALUES (?)\", (\"Omar\",)), ? representa un valor y la tupla lo entrega separado del texto SQL. La coma crea una tupla de un elemento."
    ],
    [
      "Transacción y cierre",
      "with conexion confirma o revierte la transacción según corresponda, pero no cierra por sí solo la conexión sqlite3; ciérrala cuando termines. Protege credenciales y evita concatenar entradas en SQL."
    ]
  ]
};

contenidosGuiados[38] = {
  "objetivo": "Entender peticiones HTTP y respuestas de una API.",
  "bloques": [
    [
      "Qué es una API",
      "Una API define reglas para que programas interactúen. Una API web puede exponer recursos mediante HTTP y devolver datos en JSON u otro formato."
    ],
    [
      "Métodos",
      "GET suele consultar un recurso y POST suele enviar datos para procesarlos o crearlos. El comportamiento concreto depende de la documentación de la API."
    ],
    [
      "Respuestas",
      "Los códigos 2xx suelen indicar éxito; 404 indica que no se encontró o no se revela el recurso; 5xx señala un problema del servidor."
    ],
    [
      "Ejemplo",
      "urlopen puede abrir una URL y timeout limita la espera. El ejemplo está comentado porque necesita conexión y una dirección válida: descoméntalo solo en un entorno apropiado."
    ],
    [
      "Buenas prácticas",
      "Controla tiempos de espera, errores de red y datos inesperados. No publiques tokens ni contraseñas, y consulta la documentación del servicio antes de enviar datos."
    ]
  ]
};

contenidosGuiados[39] = {
  "objetivo": "Integrar lo aprendido en un proyecto comprobable.",
  "bloques": [
    [
      "Definir el problema",
      "Describe qué debe hacer el programa y cuáles son sus límites. Para un sistema de reservas, identifica los datos y operaciones necesarias."
    ],
    [
      "Dividir responsabilidades",
      "Una clase Cliente puede validar datos; un servicio puede calcular su costo; una reserva puede relacionarlos con fecha, hora y estado."
    ],
    [
      "Construir por partes",
      "Empieza con un caso pequeño que funcione. Luego agrega validaciones y funciones, comprobando cada cambio antes de continuar."
    ],
    [
      "Probar",
      "Incluye casos válidos, inválidos y límites: por ejemplo, una fecha pasada o un nombre vacío. Usa pruebas automatizadas para detectar cambios que rompan lo anterior."
    ],
    [
      "Documentar y compartir",
      "Explica en README cómo ejecutar el proyecto y sus pruebas. Usa Git para registrar cambios y revisa que no subas credenciales ni datos sensibles."
    ]
  ]
};
