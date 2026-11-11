const evaluacionesEspeciales = {
  "0": [
    {
      "q": "Un programa es…",
      "a": [
        "Un conjunto de instrucciones para realizar tareas",
        "Una pantalla del computador",
        "Un tipo de teclado"
      ],
      "c": 0,
      "e": "Un programa reúne instrucciones que una computadora puede ejecutar."
    },
    {
      "q": "¿Cuál de estas tareas describe mejor un algoritmo?",
      "a": [
        "Una secuencia ordenada de pasos para resolver un problema",
        "Un aparato físico",
        "Un mensaje de error"
      ],
      "c": 0,
      "e": "Un algoritmo describe una secuencia de pasos para alcanzar un objetivo."
    },
    {
      "q": "¿Qué pasa al ejecutar print(\"Sol\") y después print(\"Luna\")?",
      "a": [
        "Muestra Sol y luego Luna en líneas separadas",
        "Muestra Luna y luego Sol",
        "Muestra SolLuna en una sola línea"
      ],
      "c": 0,
      "e": "Cada print agrega un salto de línea al final por defecto."
    },
    {
      "q": "¿Qué muestra print(\"8 - 3\")?",
      "a": [
        "8 - 3",
        "5",
        "Un error"
      ],
      "c": 0,
      "e": "Las comillas hacen que el contenido se trate como texto."
    },
    {
      "q": "¿Qué muestra print(8 - 3)?",
      "a": [
        "5",
        "8 - 3",
        "83"
      ],
      "c": 0,
      "e": "Sin comillas Python evalúa la resta y print muestra el resultado."
    },
    {
      "q": "Si escribes print(\"Hola\" sin cerrar el paréntesis, ¿qué tipo de problema ocurre?",
      "a": [
        "Un error de sintaxis",
        "Un problema de conexión a internet necesariamente",
        "El programa funciona sin cambios"
      ],
      "c": 0,
      "e": "Falta un paréntesis de cierre, por lo que Python no puede analizar esa instrucción."
    },
    {
      "q": "¿Cuál es la salida de print(3 * 2)?",
      "a": [
        "6",
        "3 * 2",
        "32"
      ],
      "c": 0,
      "e": "El operador * multiplica los números."
    },
    {
      "q": "¿Cuál de estas opciones es una instrucción válida para mostrar el texto Python?",
      "a": [
        "print(\"Python\")",
        "print(Python)",
        "print(\"Python)"
      ],
      "c": 0,
      "e": "El texto necesita comillas completas y print requiere paréntesis."
    },
    {
      "q": "¿Cuál es la diferencia entre print(\"4\") y print(4)?",
      "a": [
        "Ambos muestran 4, pero uno recibe texto y el otro un número",
        "El segundo genera error siempre",
        "Ambos valores son de tipo texto"
      ],
      "c": 0,
      "e": "Pueden mostrar los mismos caracteres aunque los tipos de datos sean diferentes."
    },
    {
      "q": "¿Qué salida produce print(\"A\", \"B\") usando la configuración normal?",
      "a": [
        "A B",
        "AB",
        "A,B"
      ],
      "c": 0,
      "e": "print separa sus argumentos con un espacio por defecto."
    },
    {
      "q": "¿Qué hace Python al encontrar # inicio de programa?",
      "a": [
        "Trata el resto de la línea como comentario",
        "Muestra el comentario automáticamente",
        "Ejecuta el comentario"
      ],
      "c": 0,
      "e": "El texto de un comentario no se ejecuta como una instrucción."
    },
    {
      "q": "Si un programa muestra un error, ¿cuál es un primer paso útil?",
      "a": [
        "Leer el mensaje y la línea indicada",
        "Borrar todo el proyecto",
        "Cambiar código al azar"
      ],
      "c": 0,
      "e": "El mensaje y la ubicación aportan pistas para encontrar la causa."
    },
    {
      "q": "¿Qué sucede con print(\"hola\".upper())?",
      "a": [
        "Muestra HOLA",
        "Cambia permanentemente todos los textos",
        "Muestra upper"
      ],
      "c": 0,
      "e": "upper devuelve una versión en mayúsculas del texto."
    },
    {
      "q": "¿Qué resultado producen print(2 + 2) y print(\"2 + 2\"), en ese orden?",
      "a": [
        "4 y luego 2 + 2",
        "2 + 2 y luego 4",
        "4 y luego 4"
      ],
      "c": 0,
      "e": "La primera instrucción evalúa una suma; la segunda muestra texto."
    },
    {
      "q": "¿Para qué sirve probar un programa después de escribirlo?",
      "a": [
        "Para observar su resultado y detectar problemas",
        "Para garantizar que nunca tendrá errores",
        "Para convertirlo automáticamente en una página web"
      ],
      "c": 0,
      "e": "Las pruebas ayudan a encontrar fallos, aunque no garantizan ausencia total de errores."
    }
  ]
};

evaluacionesEspeciales[1] = [
  {
    "q": "Después de ejecutar x = 4; x = x + 3, ¿cuánto vale x?",
    "a": [
      "7",
      "4",
      "43"
    ],
    "c": 0,
    "e": "La expresión de la derecha se calcula antes de asignar el resultado a x."
  },
  {
    "q": "¿Qué tipo devuelve type(3.5)?",
    "a": [
      "float",
      "int",
      "str"
    ],
    "c": 0,
    "e": "3.5 es un número de punto flotante en Python."
  },
  {
    "q": "¿Qué muestra print(type(\"3\").__name__)?",
    "a": [
      "str",
      "int",
      "float"
    ],
    "c": 0,
    "e": "Las comillas forman una cadena, aunque contenga un dígito."
  },
  {
    "q": "¿Qué ocurre si usas un nombre de variable que no se ha definido?",
    "a": [
      "Normalmente se produce NameError",
      "Python crea la variable con valor cero",
      "Python convierte el nombre en texto"
    ],
    "c": 0,
    "e": "Python no puede encontrar un nombre que no ha sido definido en el alcance disponible."
  },
  {
    "q": "¿Cuál es un nombre válido de variable?",
    "a": [
      "cantidad_clientes",
      "cantidad-clientes",
      "4clientes"
    ],
    "c": 0,
    "e": "Un identificador puede usar guiones bajos y no debe comenzar con un dígito."
  },
  {
    "q": "¿Son edad y Edad el mismo nombre en Python?",
    "a": [
      "No, Python distingue mayúsculas de minúsculas",
      "Sí, son siempre equivalentes",
      "Solo si guardan un entero"
    ],
    "c": 0,
    "e": "edad y Edad son identificadores diferentes."
  },
  {
    "q": "Si a = 3 y b = a, y luego a = 7, ¿cuánto vale b?",
    "a": [
      "3",
      "7",
      "10"
    ],
    "c": 0,
    "e": "b sigue haciendo referencia al valor 3; reasignar a no cambia b."
  },
  {
    "q": "¿Qué resultado produce type(True).__name__?",
    "a": [
      "bool",
      "str",
      "float"
    ],
    "c": 0,
    "e": "True es un valor booleano y su tipo es bool."
  },
  {
    "q": "¿Qué indica el signo = en precio = 5000?",
    "a": [
      "Asigna el valor al nombre precio",
      "Comprueba si precio y 5000 son iguales",
      "Imprime el precio"
    ],
    "c": 0,
    "e": "= realiza una asignación; para comprobar igualdad se usa ==."
  },
  {
    "q": "¿Qué ocurre con int(\"12\") + 3?",
    "a": [
      "Produce 15",
      "Produce \"123\"",
      "Produce un error siempre"
    ],
    "c": 0,
    "e": "int convierte el texto numérico a entero antes de sumar."
  },
  {
    "q": "¿Qué sucede al intentar ejecutar int(\"doce\")?",
    "a": [
      "Se produce ValueError",
      "Devuelve 12",
      "Devuelve None"
    ],
    "c": 0,
    "e": "El texto «doce» no tiene un formato numérico que int pueda convertir."
  },
  {
    "q": "¿Cuál expresión concatena las cadenas \"2\" y \"3\"?",
    "a": [
      "\"2\" + \"3\"",
      "2 + 3",
      "2 * 3"
    ],
    "c": 0,
    "e": "El operador + entre cadenas produce la cadena \"23\"."
  },
  {
    "q": "¿Qué muestra print(\"2\" * 3)?",
    "a": [
      "222",
      "6",
      "23"
    ],
    "c": 0,
    "e": "Multiplicar una cadena por un entero repite la cadena."
  },
  {
    "q": "¿Cuál es el valor de total después de total = 10; total += 2?",
    "a": [
      "12",
      "10",
      "102"
    ],
    "c": 0,
    "e": "+= actualiza el valor sumando el operando derecho."
  },
  {
    "q": "¿Por qué puede ser útil guardar una identificación como texto?",
    "a": [
      "Puede contener ceros iniciales o caracteres que no son dígitos",
      "Porque Python no admite números largos",
      "Porque texto siempre ocupa menos memoria"
    ],
    "c": 0,
    "e": "Una identificación puede necesitar conservar ceros iniciales o caracteres especiales."
  }
];

evaluacionesEspeciales[2] = [
  {
    "q": "Si x vale 7, ¿cuál es el resultado de x > 5?",
    "a": [
      "True",
      "False",
      "7"
    ],
    "c": 0,
    "e": "7 es mayor que 5."
  },
  {
    "q": "¿Cuándo se ejecuta el bloque de if?",
    "a": [
      "Cuando la condición es verdadera",
      "Siempre",
      "Cuando la condición es falsa"
    ],
    "c": 0,
    "e": "El bloque se ejecuta cuando la condición se evalúa como verdadera."
  },
  {
    "q": "¿Qué sucede si una condición de if es falsa y no hay else?",
    "a": [
      "Se omite el bloque y continúa el programa",
      "Se repite indefinidamente",
      "Se detiene todo Python"
    ],
    "c": 0,
    "e": "Sin else se continúa con la siguiente instrucción posterior al bloque."
  },
  {
    "q": "¿Qué operador comprueba desigualdad?",
    "a": [
      "!=",
      "=",
      "=="
    ],
    "c": 0,
    "e": "!= produce True cuando los valores son diferentes."
  },
  {
    "q": "¿Qué ocurre con x = 5; print(x >= 5)?",
    "a": [
      "Muestra True",
      "Muestra False",
      "Produce SyntaxError"
    ],
    "c": 0,
    "e": "5 es igual a 5 y satisface >=."
  },
  {
    "q": "¿Para qué sirve else después de if?",
    "a": [
      "Para ejecutar un bloque si la condición no se cumple",
      "Para repetir if",
      "Para definir una función"
    ],
    "c": 0,
    "e": "else define la alternativa cuando no se cumple la condición anterior."
  },
  {
    "q": "¿Cuántas ramas de una cadena if/elif/else se ejecutan como máximo?",
    "a": [
      "Una",
      "Dos siempre",
      "Todas"
    ],
    "c": 0,
    "e": "Se ejecuta la primera rama cuya condición se cumple, o else."
  },
  {
    "q": "¿Qué valor tiene not False?",
    "a": [
      "True",
      "False",
      "None"
    ],
    "c": 0,
    "e": "not invierte el valor de verdad."
  },
  {
    "q": "¿Qué resultado da True and False?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "and solo es verdadero si ambas condiciones son verdaderas."
  },
  {
    "q": "¿Qué resultado da False or True?",
    "a": [
      "True",
      "False",
      "None"
    ],
    "c": 0,
    "e": "or es verdadero si al menos una condición es verdadera."
  },
  {
    "q": "¿Qué ocurre con if 0: print(\"Sí\")?",
    "a": [
      "No imprime Sí",
      "Imprime Sí",
      "Siempre genera TypeError"
    ],
    "c": 0,
    "e": "En una condición, 0 se evalúa como falso."
  },
  {
    "q": "¿Qué indica el signo : al final de if x > 0:?",
    "a": [
      "El inicio de un bloque",
      "El final obligatorio del programa",
      "Un comentario"
    ],
    "c": 0,
    "e": "Los dos puntos introducen el bloque de la condición."
  },
  {
    "q": "¿Cuál es el resultado de 2 < 3 < 5?",
    "a": [
      "True",
      "False",
      "Error de sintaxis"
    ],
    "c": 0,
    "e": "Es una comparación encadenada: 2 < 3 y 3 < 5."
  },
  {
    "q": "Si x = 3, ¿qué rama se ejecuta en if x > 5: ... elif x > 1: ... else: ...?",
    "a": [
      "La rama elif",
      "La rama if",
      "La rama else"
    ],
    "c": 0,
    "e": "3 no es mayor que 5, pero sí es mayor que 1."
  },
  {
    "q": "¿Qué operador debe usarse para comprobar igualdad?",
    "a": [
      "==",
      "=",
      "=>"
    ],
    "c": 0,
    "e": "== compara valores, mientras = asigna."
  }
];

evaluacionesEspeciales[3] = [
  {
    "q": "¿Qué valores produce range(1, 4)?",
    "a": [
      "1, 2 y 3",
      "1, 2, 3 y 4",
      "0, 1, 2 y 3"
    ],
    "c": 0,
    "e": "El límite final de range no está incluido."
  },
  {
    "q": "¿Cuántas vueltas tiene for x in [4, 5, 6]?",
    "a": [
      "Tres",
      "Dos",
      "Cuatro"
    ],
    "c": 0,
    "e": "El bloque se ejecuta una vez por cada uno de los tres elementos."
  },
  {
    "q": "¿Qué hace break en un ciclo?",
    "a": [
      "Sale del ciclo más cercano",
      "Detiene el computador",
      "Vuelve al principio siempre"
    ],
    "c": 0,
    "e": "break termina el ciclo que lo contiene."
  },
  {
    "q": "¿Qué hace continue dentro de un ciclo?",
    "a": [
      "Pasa a la siguiente iteración",
      "Termina todos los ciclos",
      "Reinicia el programa"
    ],
    "c": 0,
    "e": "continue omite el resto del bloque de la iteración actual."
  },
  {
    "q": "¿Qué muestra list(range(0))?",
    "a": [
      "[]",
      "[0]",
      "[1]"
    ],
    "c": 0,
    "e": "Un rango de longitud cero no produce elementos."
  },
  {
    "q": "¿Cuál es la función del acumulador total en total += numero?",
    "a": [
      "Conservar la suma que se ha calculado",
      "Definir una lista vacía",
      "Finalizar el ciclo"
    ],
    "c": 0,
    "e": "El acumulador se actualiza en cada iteración."
  },
  {
    "q": "¿Qué valor toma n en la segunda vuelta de for n in [2, 4, 6]?",
    "a": [
      "4",
      "2",
      "6"
    ],
    "c": 0,
    "e": "El ciclo visita los elementos de la lista en orden."
  },
  {
    "q": "¿Qué devuelve list(range(2, 7, 2))?",
    "a": [
      "[2, 4, 6]",
      "[2, 4, 6, 8]",
      "[2, 3, 4, 5, 6]"
    ],
    "c": 0,
    "e": "Empieza en 2, avanza de 2 en 2 y termina antes de 7."
  },
  {
    "q": "¿Qué imprime for x in []: print(x)?",
    "a": [
      "Nada",
      "Una lista vacía",
      "Un error obligatorio"
    ],
    "c": 0,
    "e": "Una lista vacía no contiene elementos para recorrer."
  },
  {
    "q": "¿Dónde va una instrucción que se quiere repetir?",
    "a": [
      "Dentro del bloque del ciclo con sangría",
      "Antes del for",
      "En un comentario"
    ],
    "c": 0,
    "e": "La sangría determina qué instrucciones pertenecen al ciclo."
  },
  {
    "q": "¿Para qué sirve enumerate(lista)?",
    "a": [
      "Para obtener índices y elementos durante el recorrido",
      "Para eliminar duplicados",
      "Para ordenar la lista automáticamente"
    ],
    "c": 0,
    "e": "enumerate genera pares con índice y valor."
  },
  {
    "q": "¿Qué imprime list(range(3))?",
    "a": [
      "[0, 1, 2]",
      "[1, 2, 3]",
      "[0, 1, 2, 3]"
    ],
    "c": 0,
    "e": "range(3) comienza en 0 y termina antes de 3."
  },
  {
    "q": "Si un for tiene un break, ¿qué ocurre con su cláusula else?",
    "a": [
      "No se ejecuta por ese ciclo",
      "Se ejecuta siempre",
      "Genera un SyntaxError"
    ],
    "c": 0,
    "e": "El else del for se ejecuta al terminar sin break."
  },
  {
    "q": "¿Cuál es el resultado de sumar los elementos de [1, 2, 3]?",
    "a": [
      "6",
      "123",
      "3"
    ],
    "c": 0,
    "e": "La suma aritmética de los tres elementos es 6."
  },
  {
    "q": "¿Qué es una iteración?",
    "a": [
      "Una ejecución del cuerpo del ciclo",
      "Una variable global",
      "Una función exclusiva de listas"
    ],
    "c": 0,
    "e": "Cada vuelta del ciclo es una iteración."
  }
];

evaluacionesEspeciales[4] = [
  {
    "q": "¿Cuál es la función de def?",
    "a": [
      "Definir una función",
      "Llamar una función",
      "Devolver un resultado"
    ],
    "c": 0,
    "e": "def introduce una definición de función."
  },
  {
    "q": "Si una función termina sin return, ¿qué recibe quien la llama?",
    "a": [
      "None",
      "0 siempre",
      "Una cadena vacía"
    ],
    "c": 0,
    "e": "Python devuelve None implícitamente."
  },
  {
    "q": "En def sumar(a, b), ¿qué son a y b?",
    "a": [
      "Parámetros",
      "Argumentos usados al llamar",
      "Valores globales obligatorios"
    ],
    "c": 0,
    "e": "Son nombres locales que reciben argumentos."
  },
  {
    "q": "En sumar(2, 3), ¿qué son 2 y 3?",
    "a": [
      "Argumentos",
      "Parámetros declarados",
      "Atributos de clase"
    ],
    "c": 0,
    "e": "Los argumentos son valores pasados durante la llamada."
  },
  {
    "q": "¿Qué hace return dentro de una función?",
    "a": [
      "Devuelve un valor y termina la llamada",
      "Solo imprime",
      "Vuelve a ejecutar la función"
    ],
    "c": 0,
    "e": "return entrega un resultado al llamador y finaliza esa llamada."
  },
  {
    "q": "¿Es obligatorio que una función tenga parámetros?",
    "a": [
      "No",
      "Sí, por lo menos uno",
      "Sí, siempre dos"
    ],
    "c": 0,
    "e": "Una función puede definirse sin parámetros."
  },
  {
    "q": "¿Qué hace print?",
    "a": [
      "Muestra información en la salida",
      "Devuelve siempre el texto a la función que la llamó",
      "Crea una variable"
    ],
    "c": 0,
    "e": "print muestra; normalmente devuelve None."
  },
  {
    "q": "¿Cómo se llama una función sin argumentos llamada saludar?",
    "a": [
      "saludar()",
      "def saludar",
      "saludar:"
    ],
    "c": 0,
    "e": "Los paréntesis realizan la llamada."
  },
  {
    "q": "Si def doble(n): return n * 2, ¿cuánto vale doble(3)?",
    "a": [
      "6",
      "3",
      "9"
    ],
    "c": 0,
    "e": "El parámetro n recibe 3 y se devuelve su doble."
  },
  {
    "q": "¿Qué ocurre con el código dentro de def antes de llamar la función?",
    "a": [
      "La definición se crea, pero el cuerpo no se ejecuta por la definición",
      "El cuerpo se ejecuta repetidamente",
      "Python lo elimina"
    ],
    "c": 0,
    "e": "El cuerpo se ejecuta cuando la función se llama."
  },
  {
    "q": "¿Qué valor devuelve def f(): return 2 + 3?",
    "a": [
      "5",
      "23",
      "None"
    ],
    "c": 0,
    "e": "La expresión se evalúa y return entrega 5."
  },
  {
    "q": "¿Qué ocurre después de ejecutar return dentro de una función?",
    "a": [
      "Termina esa llamada",
      "Continúa en la siguiente línea del mismo cuerpo",
      "Se reinicia el programa"
    ],
    "c": 0,
    "e": "Las instrucciones posteriores de esa ejecución no se ejecutan."
  },
  {
    "q": "¿Cuál es una razón para usar funciones?",
    "a": [
      "Reutilizar y organizar instrucciones",
      "Evitar todas las excepciones",
      "Eliminar la necesidad de probar"
    ],
    "c": 0,
    "e": "Las funciones ayudan a organizar y reutilizar comportamiento."
  },
  {
    "q": "¿Puede usarse el resultado de una función en una variable?",
    "a": [
      "Sí, mediante una asignación",
      "No, solo puede imprimirse",
      "Solo si es texto"
    ],
    "c": 0,
    "e": "Una expresión de llamada puede asignarse a un nombre."
  },
  {
    "q": "¿Qué ocurre si se llama una función que exige un argumento sin proporcionarlo?",
    "a": [
      "Se produce TypeError",
      "El argumento toma 0 siempre",
      "Se produce automáticamente un ciclo"
    ],
    "c": 0,
    "e": "Falta un argumento obligatorio para la llamada."
  }
];

evaluacionesEspeciales[5] = [
  {
    "q": "¿Qué es una clase en Python?",
    "a": [
      "Una definición que permite crear objetos",
      "Un objeto que siempre existe",
      "Un archivo de registro"
    ],
    "c": 0,
    "e": "Una clase define comportamiento y puede servir para construir instancias."
  },
  {
    "q": "¿Qué es una instancia de una clase?",
    "a": [
      "Un objeto creado a partir de esa clase",
      "Una copia del archivo .py",
      "Un nombre de paquete"
    ],
    "c": 0,
    "e": "Una instancia es un objeto asociado a una clase."
  },
  {
    "q": "¿Para qué se usa self en un método de instancia?",
    "a": [
      "Para referirse a la instancia actual",
      "Para referirse siempre a todas las instancias",
      "Para importar la clase"
    ],
    "c": 0,
    "e": "self permite acceder a los atributos y métodos de la instancia."
  },
  {
    "q": "¿Cuándo se ejecuta normalmente __init__?",
    "a": [
      "Al inicializar una instancia nueva",
      "Al eliminar un módulo",
      "Cada vez que se muestra texto"
    ],
    "c": 0,
    "e": "__init__ inicializa los datos de una instancia recién creada."
  },
  {
    "q": "¿Cómo se lee el atributo nombre de cliente?",
    "a": [
      "cliente.nombre",
      "cliente(nombre)",
      "nombre->cliente"
    ],
    "c": 0,
    "e": "El punto permite acceder al atributo del objeto."
  },
  {
    "q": "¿Cómo se llama el método confirmar de reserva?",
    "a": [
      "reserva.confirmar()",
      "reserva.confirmar",
      "confirmar.reserva"
    ],
    "c": 0,
    "e": "Los paréntesis ejecutan la llamada al método."
  },
  {
    "q": "¿Dos clientes pueden tener nombres distintos?",
    "a": [
      "Sí, cada instancia puede tener sus propios atributos",
      "No, comparten obligatoriamente todos los valores",
      "Solo si usan clases diferentes"
    ],
    "c": 0,
    "e": "Los atributos de instancia pueden variar entre objetos."
  },
  {
    "q": "En Cliente(\"Ana\"), ¿qué representa \"Ana\"?",
    "a": [
      "Un argumento pasado al crear la instancia",
      "El nombre del archivo",
      "Un decorador"
    ],
    "c": 0,
    "e": "Es un valor entregado en la llamada a la clase."
  },
  {
    "q": "¿Qué define un método?",
    "a": [
      "Una función asociada a una clase",
      "Un archivo de texto obligatorio",
      "Solo una variable numérica"
    ],
    "c": 0,
    "e": "Un método se define en una clase para proporcionar comportamiento."
  },
  {
    "q": "¿Qué significa self.nombre = nombre en __init__?",
    "a": [
      "Asigna a la instancia el valor recibido",
      "Crea otra clase",
      "Imprime el nombre automáticamente"
    ],
    "c": 0,
    "e": "Se guarda el valor recibido en el atributo nombre de la instancia."
  },
  {
    "q": "¿Qué ocurre al acceder directamente a un atributo que no existe?",
    "a": [
      "Normalmente se produce AttributeError",
      "Python crea el atributo con None",
      "Siempre se produce ValueError"
    ],
    "c": 0,
    "e": "Si no se encuentra el atributo, Python normalmente lanza AttributeError."
  },
  {
    "q": "¿Qué hace isinstance(cliente, Cliente)?",
    "a": [
      "Comprueba si cliente es instancia de Cliente o una subclase",
      "Crea otro cliente",
      "Compara el nombre del cliente"
    ],
    "c": 0,
    "e": "isinstance verifica compatibilidad de tipo."
  },
  {
    "q": "¿Una clase puede definir más de un método?",
    "a": [
      "Sí",
      "No, solo uno",
      "Solo si no tiene atributos"
    ],
    "c": 0,
    "e": "Una clase puede incluir varios métodos."
  },
  {
    "q": "¿Cómo puede representar una clase al cliente de una reserva?",
    "a": [
      "Con atributos para sus datos y métodos para sus acciones",
      "Solo con comentarios",
      "Obligatoriamente con una base de datos"
    ],
    "c": 0,
    "e": "Una clase puede modelar datos y comportamiento relacionados."
  },
  {
    "q": "¿Qué distingue un atributo de un método?",
    "a": [
      "El atributo guarda o expone un dato; el método se puede llamar",
      "Son siempre exactamente lo mismo",
      "El atributo solo existe en archivos"
    ],
    "c": 0,
    "e": "Un método proporciona comportamiento; un atributo expone un valor."
  }
];

evaluacionesEspeciales[6] = [
  {
    "q": "¿Qué error informa que una variable no se ha definido?",
    "a": [
      "NameError",
      "IndexError",
      "FileNotFoundError"
    ],
    "c": 0,
    "e": "NameError señala un nombre que no está disponible."
  },
  {
    "q": "¿Qué error puede producir print(\"Hola)?",
    "a": [
      "SyntaxError",
      "KeyError",
      "ImportError"
    ],
    "c": 0,
    "e": "Una cadena sin cerrar hace inválida la sintaxis."
  },
  {
    "q": "¿Qué indica la línea File y un número en un traceback?",
    "a": [
      "El archivo y la línea relacionada con la ejecución",
      "La solución automática",
      "El tamaño de la memoria"
    ],
    "c": 0,
    "e": "El traceback identifica el archivo y la línea."
  },
  {
    "q": "¿Qué hace el código anterior a # en x = 3 # valor?",
    "a": [
      "Asigna 3 a x",
      "Se ignora toda la línea",
      "Imprime el comentario"
    ],
    "c": 0,
    "e": "El comentario comienza en #; lo anterior puede ejecutarse."
  },
  {
    "q": "¿Qué error se produce al acceder a la posición 5 de una lista con dos elementos?",
    "a": [
      "IndexError",
      "NameError",
      "SyntaxError"
    ],
    "c": 0,
    "e": "No existe ese índice en la lista."
  },
  {
    "q": "¿Qué excepción produce 3 / 0?",
    "a": [
      "ZeroDivisionError",
      "TypeError",
      "KeyError"
    ],
    "c": 0,
    "e": "No se permite dividir por cero."
  },
  {
    "q": "Si print(edad) causa NameError, ¿qué es razonable revisar?",
    "a": [
      "Si edad fue definido y escrito correctamente",
      "El color del editor",
      "El volumen del equipo"
    ],
    "c": 0,
    "e": "Un nombre no definido o mal escrito puede causar NameError."
  },
  {
    "q": "¿Qué es un traceback?",
    "a": [
      "Una descripción de llamadas y ubicación de una excepción",
      "Un algoritmo de ordenación",
      "Un tipo de lista"
    ],
    "c": 0,
    "e": "Ayuda a seguir dónde se originó y propagó el error."
  },
  {
    "q": "¿Qué representa SyntaxError?",
    "a": [
      "Un problema en la sintaxis del código",
      "Una carpeta vacía",
      "Un resultado booleano"
    ],
    "c": 0,
    "e": "Python no puede interpretar una construcción inválida."
  },
  {
    "q": "¿El comentario # print(5) muestra 5?",
    "a": [
      "No",
      "Sí",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "El texto comentado no se ejecuta."
  },
  {
    "q": "¿Qué error puede producir \"3\" + 2?",
    "a": [
      "TypeError",
      "IndexError",
      "FileNotFoundError"
    ],
    "c": 0,
    "e": "No se pueden sumar directamente str e int con +."
  },
  {
    "q": "¿Qué se recomienda después de corregir un error?",
    "a": [
      "Ejecutar de nuevo y comprobar el resultado",
      "Suponer que todo funciona",
      "Eliminar las pruebas"
    ],
    "c": 0,
    "e": "Una nueva ejecución ayuda a comprobar el cambio."
  },
  {
    "q": "¿Qué error puede aparecer al pedir una clave inexistente con diccionario[clave]?",
    "a": [
      "KeyError",
      "SyntaxError",
      "ZeroDivisionError"
    ],
    "c": 0,
    "e": "Un diccionario lanza KeyError si la clave no existe."
  },
  {
    "q": "¿Qué es más útil en un comentario?",
    "a": [
      "Explicar una decisión que no es evidente",
      "Repetir cada símbolo sin contexto",
      "Guardar contraseñas"
    ],
    "c": 0,
    "e": "Los comentarios deben ayudar a comprender decisiones."
  },
  {
    "q": "¿Un programa sin errores de sintaxis está garantizado de ser correcto?",
    "a": [
      "No",
      "Sí",
      "Solo si tiene comentarios"
    ],
    "c": 0,
    "e": "Aun con sintaxis válida puede haber errores de lógica o ejecución."
  }
];

evaluacionesEspeciales[7] = [
  {
    "q": "¿Qué tipo tiene 5.0?",
    "a": [
      "float",
      "int",
      "str"
    ],
    "c": 0,
    "e": "La notación decimal produce un float."
  },
  {
    "q": "¿Qué tipo tiene \"False\"?",
    "a": [
      "str",
      "bool",
      "int"
    ],
    "c": 0,
    "e": "Entre comillas es una cadena."
  },
  {
    "q": "¿Qué devuelve float(\"2.5\")?",
    "a": [
      "2.5 como float",
      "\"2.5\" como str",
      "2 como int"
    ],
    "c": 0,
    "e": "float convierte una representación decimal válida."
  },
  {
    "q": "¿Qué produce bool(0)?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "El entero cero se considera falso."
  },
  {
    "q": "¿Qué produce bool(\"0\")?",
    "a": [
      "True",
      "False",
      "0"
    ],
    "c": 0,
    "e": "Una cadena no vacía es verdadera en contexto booleano."
  },
  {
    "q": "¿Qué devuelve int(3.9)?",
    "a": [
      "3",
      "4",
      "3.9"
    ],
    "c": 0,
    "e": "int trunca la parte fraccionaria hacia cero."
  },
  {
    "q": "¿Qué produce int(-3.9)?",
    "a": [
      "-3",
      "-4",
      "3"
    ],
    "c": 0,
    "e": "int trunca hacia cero."
  },
  {
    "q": "¿Qué sucede con int(\"2.5\")?",
    "a": [
      "ValueError",
      "Devuelve 2",
      "Devuelve 2.5"
    ],
    "c": 0,
    "e": "int no acepta directamente esa cadena decimal."
  },
  {
    "q": "¿Cuál es el tipo de None?",
    "a": [
      "NoneType",
      "str",
      "bool"
    ],
    "c": 0,
    "e": "None pertenece al tipo NoneType."
  },
  {
    "q": "¿Qué produce str(True)?",
    "a": [
      "La cadena \"True\"",
      "El booleano True",
      "El entero 1"
    ],
    "c": 0,
    "e": "str crea una representación textual."
  },
  {
    "q": "¿Qué tipo retorna input normalmente?",
    "a": [
      "str",
      "int",
      "bool"
    ],
    "c": 0,
    "e": "input devuelve una cadena."
  },
  {
    "q": "¿Qué resultado produce 4 / 2 en Python 3?",
    "a": [
      "2.0",
      "2 entero",
      "\"2\""
    ],
    "c": 0,
    "e": "La división / de enteros produce un float."
  },
  {
    "q": "¿Qué resultado produce type([]).__name__?",
    "a": [
      "list",
      "tuple",
      "dict"
    ],
    "c": 0,
    "e": "Los corchetes vacíos crean una lista."
  },
  {
    "q": "¿Por qué se conserva a veces una identificación en texto?",
    "a": [
      "Para conservar ceros iniciales o caracteres",
      "Porque Python no puede sumar",
      "Porque str impide el ingreso"
    ],
    "c": 0,
    "e": "Como identificador, no suele requerir cálculos y puede contener caracteres especiales."
  },
  {
    "q": "¿Qué verifica isinstance(3, int)?",
    "a": [
      "Si 3 es instancia de int",
      "Si 3 es texto",
      "Si 3 es negativo"
    ],
    "c": 0,
    "e": "isinstance comprueba la relación del valor con un tipo."
  }
];

evaluacionesEspeciales[8] = [
  {
    "q": "Con entrada \"7\", ¿qué produce int(input()) + 2?",
    "a": [
      "9",
      "\"72\"",
      "Error por fuerza"
    ],
    "c": 0,
    "e": "int convierte el texto a entero antes de sumar."
  },
  {
    "q": "Con entrada \"7\", ¿qué produce input() + \"2\"?",
    "a": [
      "\"72\"",
      "9",
      "14"
    ],
    "c": 0,
    "e": "El operador + concatena las dos cadenas."
  },
  {
    "q": "¿Qué conviene hacer ante un ValueError por entrada?",
    "a": [
      "Capturarlo y explicar el dato esperado",
      "Ignorarlo siempre",
      "Cambiar el monitor"
    ],
    "c": 0,
    "e": "Un except puede dar un mensaje y permitir reintentar."
  },
  {
    "q": "¿Qué puede hacer .strip() con una entrada de texto?",
    "a": [
      "Quitar espacios al principio y al final",
      "Eliminar todos los espacios internos",
      "Convertirla a entero"
    ],
    "c": 0,
    "e": "strip devuelve una copia sin espacios de los extremos."
  },
  {
    "q": "¿Una identificación debe convertirse siempre a int?",
    "a": [
      "No, puede conservarse como texto",
      "Sí, obligatoriamente",
      "Solo si empieza por cero"
    ],
    "c": 0,
    "e": "Como identificador puede necesitar ceros iniciales o caracteres."
  },
  {
    "q": "¿Cómo guardas el resultado de input para usarlo después?",
    "a": [
      "Con una asignación a una variable",
      "Escribiendo solo un comentario",
      "Con return fuera de una función"
    ],
    "c": 0,
    "e": "Una asignación vincula el resultado a un nombre."
  },
  {
    "q": "¿Qué sucede si el usuario pulsa Enter sin escribir texto?",
    "a": [
      "input devuelve una cadena vacía",
      "input devuelve 0",
      "input devuelve False"
    ],
    "c": 0,
    "e": "Una línea vacía produce la cadena vacía."
  },
  {
    "q": "¿Cómo compruebas si una entrada contiene solo espacios?",
    "a": [
      "Comparando entrada.strip() con \"\"",
      "Comparando entrada con 0",
      "Aplicando len al mensaje de input"
    ],
    "c": 0,
    "e": "strip elimina los espacios de los extremos."
  },
  {
    "q": "¿Qué hace float(input()) si se ingresa 2.5?",
    "a": [
      "Devuelve el float 2.5",
      "Devuelve la cadena \"2.5\"",
      "Devuelve el entero 2"
    ],
    "c": 0,
    "e": "float convierte un texto decimal válido."
  },
  {
    "q": "¿Qué es el mensaje en input(\"Edad: \")?",
    "a": [
      "Una indicación para la persona",
      "Una validación numérica",
      "Una excepción"
    ],
    "c": 0,
    "e": "El mensaje orienta sobre el dato esperado."
  },
  {
    "q": "¿Qué ocurre si se intenta sumar directamente input() y 2?",
    "a": [
      "TypeError",
      "Siempre suma numéricamente",
      "Siempre produce 2"
    ],
    "c": 0,
    "e": "No se puede sumar str e int directamente."
  },
  {
    "q": "¿Qué permite un ciclo alrededor de la solicitud?",
    "a": [
      "Volver a pedir un dato hasta que sea válido",
      "Garantizar que input devuelva int",
      "Evitar toda condición"
    ],
    "c": 0,
    "e": "Un ciclo puede repetir la lectura después de un error."
  },
  {
    "q": "¿Qué devuelve len(\"Ana\")?",
    "a": [
      "3",
      "2",
      "\"3\""
    ],
    "c": 0,
    "e": "len cuenta los caracteres de la cadena."
  },
  {
    "q": "¿Qué entrada podría convertirse con int?",
    "a": [
      "\"-12\"",
      "\"doce\"",
      "\"2.5\""
    ],
    "c": 0,
    "e": "int acepta la representación entera con signo."
  },
  {
    "q": "¿Por qué no debe mostrarse una contraseña ingresada en un registro?",
    "a": [
      "Porque expondría información sensible",
      "Porque print solo acepta números",
      "Porque Python no admite cadenas"
    ],
    "c": 0,
    "e": "Las contraseñas son datos sensibles y no deben registrarse."
  }
];

evaluacionesEspeciales[9] = [
  {
    "q": "¿Qué devuelve -7 // 2?",
    "a": [
      "-4",
      "-3",
      "-3.5"
    ],
    "c": 0,
    "e": "La división // redondea hacia abajo, hacia menos infinito."
  },
  {
    "q": "¿Qué devuelve -7 % 2?",
    "a": [
      "1",
      "-1",
      "0"
    ],
    "c": 0,
    "e": "Se cumple -7 == (-4)*2 + 1."
  },
  {
    "q": "¿Qué devuelve 5 + 2 * 3?",
    "a": [
      "11",
      "21",
      "15"
    ],
    "c": 0,
    "e": "Primero se multiplica 2 por 3."
  },
  {
    "q": "¿Qué devuelve 10 - 3 - 2?",
    "a": [
      "5",
      "9",
      "11"
    ],
    "c": 0,
    "e": "Las restas se evalúan de izquierda a derecha."
  },
  {
    "q": "¿Qué devuelve 9 // 4?",
    "a": [
      "2",
      "2.25",
      "1"
    ],
    "c": 0,
    "e": "9 contiene dos grupos completos de 4."
  },
  {
    "q": "¿Qué devuelve 9 % 4?",
    "a": [
      "1",
      "2",
      "2.25"
    ],
    "c": 0,
    "e": "Sobra 1 tras dividir 9 entre 4."
  },
  {
    "q": "¿Qué devuelve 4 ** 0?",
    "a": [
      "1",
      "0",
      "4"
    ],
    "c": 0,
    "e": "Todo número distinto de cero elevado a cero vale 1."
  },
  {
    "q": "¿Qué devuelve 2 ** 3 ** 2?",
    "a": [
      "512",
      "64",
      "12"
    ],
    "c": 0,
    "e": "La potencia se agrupa desde la derecha: 2 ** (3 ** 2)."
  },
  {
    "q": "¿Qué tipo tiene el resultado de 8 / 2?",
    "a": [
      "float",
      "int",
      "str"
    ],
    "c": 0,
    "e": "/ devuelve float en Python 3."
  },
  {
    "q": "¿Qué devuelve 3 * (1 + 2)?",
    "a": [
      "9",
      "5",
      "6"
    ],
    "c": 0,
    "e": "Primero se resuelve el paréntesis."
  },
  {
    "q": "¿Qué devuelve 5.5 % 2?",
    "a": [
      "1.5",
      "1",
      "0"
    ],
    "c": 0,
    "e": "El residuo también puede ser decimal."
  },
  {
    "q": "¿Qué comprueba numero % 2 == 0 para un entero?",
    "a": [
      "Si es par",
      "Si es positivo",
      "Si es decimal"
    ],
    "c": 0,
    "e": "Un entero par tiene residuo cero al dividirse entre 2."
  },
  {
    "q": "¿Qué devuelve 6 // 3?",
    "a": [
      "2",
      "2.0 siempre",
      "0"
    ],
    "c": 0,
    "e": "Con ambos operandos enteros el cociente es entero."
  },
  {
    "q": "¿Qué calcula 2 ** 4?",
    "a": [
      "16",
      "8",
      "6"
    ],
    "c": 0,
    "e": "Equivale a 2 multiplicado por sí mismo cuatro veces."
  },
  {
    "q": "¿Qué devuelve divmod(7, 2)?",
    "a": [
      "(3, 1)",
      "(3.5, 0)",
      "(2, 1)"
    ],
    "c": 0,
    "e": "divmod devuelve cociente entero y residuo."
  }
];

evaluacionesEspeciales[10] = [
  {
    "q": "¿Qué devuelve \"Ana María\".isalpha()?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "El espacio no es una letra."
  },
  {
    "q": "¿Qué devuelve \"  Ana María  \".strip()?",
    "a": [
      "\"Ana María\"",
      "\"AnaMaría\"",
      "\"  Ana María  \""
    ],
    "c": 0,
    "e": "strip conserva el espacio interior."
  },
  {
    "q": "¿Qué devuelve \"123\".isdigit()?",
    "a": [
      "True",
      "False",
      "123"
    ],
    "c": 0,
    "e": "Todos sus caracteres son dígitos."
  },
  {
    "q": "¿Qué devuelve \"12a\".isdigit()?",
    "a": [
      "False",
      "True",
      "12"
    ],
    "c": 0,
    "e": "La letra a no es un dígito."
  },
  {
    "q": "¿Qué devuelve \"\".isdigit()?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "Una cadena vacía no cumple isdigit."
  },
  {
    "q": "Si nombre = \"ana\", ¿qué valor conserva nombre tras nombre.upper() sin asignación?",
    "a": [
      "\"ana\"",
      "\"ANA\"",
      "None"
    ],
    "c": 0,
    "e": "upper no modifica la cadena original."
  },
  {
    "q": "¿Qué produce f\"Hola, {nombre}\" si nombre vale \"Ana\"?",
    "a": [
      "\"Hola, Ana\"",
      "\"Hola, {nombre}\"",
      "\"nombre\""
    ],
    "c": 0,
    "e": "La f-string inserta el valor de nombre."
  },
  {
    "q": "¿Qué devuelve \"uno,dos\".split(\",\")?",
    "a": [
      "[\"uno\", \"dos\"]",
      "\"uno dos\"",
      "2"
    ],
    "c": 0,
    "e": "split devuelve una lista de fragmentos."
  },
  {
    "q": "¿Qué devuelve \"-\".join([\"a\", \"b\"])?",
    "a": [
      "\"a-b\"",
      "[\"a\", \"b\"]",
      "\"ab\""
    ],
    "c": 0,
    "e": "join intercala el separador entre cadenas."
  },
  {
    "q": "¿Qué devuelve \"Python\"[1:3]?",
    "a": [
      "\"yt\"",
      "\"yth\"",
      "\"Py\""
    ],
    "c": 0,
    "e": "El corte incluye el índice 1 y excluye el 3."
  },
  {
    "q": "¿Qué devuelve \"abc\".replace(\"b\", \"X\")?",
    "a": [
      "\"aXc\"",
      "\"abc\"",
      "\"b\""
    ],
    "c": 0,
    "e": "replace devuelve una copia con la sustitución."
  },
  {
    "q": "¿Qué devuelve \"hola\".startswith(\"ho\")?",
    "a": [
      "True",
      "False",
      "\"ho\""
    ],
    "c": 0,
    "e": "startswith comprueba el prefijo."
  },
  {
    "q": "¿Qué devuelve \"hola\".endswith(\"la\")?",
    "a": [
      "True",
      "False",
      "\"la\""
    ],
    "c": 0,
    "e": "endswith comprueba el sufijo."
  },
  {
    "q": "¿Qué excepción puede aparecer al acceder a \"a\"[4]?",
    "a": [
      "IndexError",
      "KeyError",
      "ValueError"
    ],
    "c": 0,
    "e": "El índice excede la longitud de la cadena."
  },
  {
    "q": "¿Qué comprueba \" \" .isspace()?",
    "a": [
      "Si la cadena contiene espacios en blanco",
      "Si es numérica",
      "Si está vacía"
    ],
    "c": 0,
    "e": "isspace verifica caracteres de espacio y requiere al menos uno."
  }
];

evaluacionesEspeciales[11] = [
  {
    "q": "¿Qué devuelve 3 < 5 and 5 < 8?",
    "a": [
      "True",
      "False",
      "3"
    ],
    "c": 0,
    "e": "Ambas comparaciones son verdaderas."
  },
  {
    "q": "¿Qué devuelve False or False?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "Ninguna de las dos condiciones es verdadera."
  },
  {
    "q": "¿Qué devuelve not (2 == 2)?",
    "a": [
      "False",
      "True",
      "2"
    ],
    "c": 0,
    "e": "La igualdad es verdadera y not la invierte."
  },
  {
    "q": "¿Qué devuelve 3 != 4?",
    "a": [
      "True",
      "False",
      "1"
    ],
    "c": 0,
    "e": "3 y 4 son distintos."
  },
  {
    "q": "¿Qué devuelve 2 == \"2\"?",
    "a": [
      "False",
      "True",
      "TypeError necesariamente"
    ],
    "c": 0,
    "e": "El entero y la cadena son valores distintos."
  },
  {
    "q": "¿Qué devuelve 0 == False?",
    "a": [
      "True",
      "False",
      "TypeError"
    ],
    "c": 0,
    "e": "Los valores numéricos 0 y False se comparan como iguales."
  },
  {
    "q": "¿Qué devuelve bool([])?",
    "a": [
      "False",
      "True",
      "[]"
    ],
    "c": 0,
    "e": "Una lista vacía es falsa en contexto booleano."
  },
  {
    "q": "¿Qué devuelve bool([0])?",
    "a": [
      "True",
      "False",
      "0"
    ],
    "c": 0,
    "e": "Una lista con un elemento no está vacía."
  },
  {
    "q": "¿Qué ocurre en False and funcion()?",
    "a": [
      "funcion no se evalúa",
      "funcion se ejecuta siempre",
      "Python ejecuta la función dos veces"
    ],
    "c": 0,
    "e": "and aplica evaluación de cortocircuito."
  },
  {
    "q": "¿Qué ocurre en True or funcion()?",
    "a": [
      "funcion no se evalúa",
      "funcion se ejecuta siempre",
      "Se produce un error obligatorio"
    ],
    "c": 0,
    "e": "or puede terminar al encontrar un valor verdadero."
  },
  {
    "q": "¿Qué devuelve 1 < 2 < 3?",
    "a": [
      "True",
      "False",
      "1"
    ],
    "c": 0,
    "e": "Ambas comparaciones de la cadena se cumplen."
  },
  {
    "q": "¿Qué diferencia hay entre = y ==?",
    "a": [
      "= asigna y == compara",
      "Ambos solo asignan",
      "Ambos solo comparan"
    ],
    "c": 0,
    "e": "Son operadores con funciones diferentes."
  },
  {
    "q": "¿Qué valor tiene bool(None)?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "None es falso en contexto booleano."
  },
  {
    "q": "¿Qué devuelve \"a\" == \"A\"?",
    "a": [
      "False",
      "True",
      "TypeError"
    ],
    "c": 0,
    "e": "La comparación de cadenas distingue mayúsculas."
  },
  {
    "q": "¿Qué hace x is None?",
    "a": [
      "Comprueba si x es el objeto None",
      "Convierte x en None",
      "Compara si x es cero"
    ],
    "c": 0,
    "e": "is comprueba identidad con None."
  }
];

evaluacionesEspeciales[12] = [
  {
    "q": "Con nota=90, ¿qué rama corresponde si primero se comprueba nota >= 90?",
    "a": [
      "La primera rama",
      "Una rama posterior necesariamente",
      "Ninguna"
    ],
    "c": 0,
    "e": "La condición se cumple en el límite."
  },
  {
    "q": "Con x=5, en if x>3 / elif x>4, ¿qué rama se elige?",
    "a": [
      "La primera",
      "La segunda",
      "Ambas"
    ],
    "c": 0,
    "e": "La primera condición verdadera detiene la cadena."
  },
  {
    "q": "Con x=2, si if x>5 y elif x>3 son falsas, ¿qué se ejecuta si hay else?",
    "a": [
      "else",
      "if",
      "elif"
    ],
    "c": 0,
    "e": "else se usa cuando no se cumplieron las condiciones anteriores."
  },
  {
    "q": "¿Qué ocurre si falta sangría después de if?",
    "a": [
      "Se produce un error de sintaxis o sangría",
      "Python siempre la agrega",
      "El bloque se ejecuta igual"
    ],
    "c": 0,
    "e": "Python requiere un bloque correctamente sangrado."
  },
  {
    "q": "¿Cómo compruebas que x esté entre 1 y 5 inclusive?",
    "a": [
      "1 <= x <= 5",
      "1 < x < 5",
      "x = 1 = 5"
    ],
    "c": 0,
    "e": "Los operadores <= incluyen ambos límites."
  },
  {
    "q": "¿Qué se debería probar en una validación por rangos?",
    "a": [
      "Valores dentro, fuera y en los límites",
      "Solo un valor central",
      "Solo cadenas vacías"
    ],
    "c": 0,
    "e": "Los límites ayudan a detectar condiciones incorrectas."
  },
  {
    "q": "¿Puede else estar antes de elif en la misma cadena?",
    "a": [
      "No",
      "Sí",
      "Solo con números"
    ],
    "c": 0,
    "e": "else cierra la cadena y debe ir después de elif."
  },
  {
    "q": "¿Qué produce if False: print(\"A\") sin else?",
    "a": [
      "No imprime A",
      "Imprime A",
      "Siempre produce TypeError"
    ],
    "c": 0,
    "e": "El bloque se omite cuando la condición es falsa."
  },
  {
    "q": "¿Qué rama se ejecuta si varias condiciones elif son verdaderas?",
    "a": [
      "La primera verdadera encontrada",
      "Todas",
      "La última siempre"
    ],
    "c": 0,
    "e": "La cadena se detiene en la primera rama verdadera."
  },
  {
    "q": "¿Se pueden combinar condiciones con and en un if?",
    "a": [
      "Sí",
      "No",
      "Solo fuera de funciones"
    ],
    "c": 0,
    "e": "Una condición puede combinar expresiones booleanas."
  },
  {
    "q": "¿Qué hace elif?",
    "a": [
      "Comprueba una condición alternativa",
      "Finaliza Python",
      "Crea una variable global"
    ],
    "c": 0,
    "e": "elif permite probar otra condición."
  },
  {
    "q": "En if x >= 10, ¿x=10 cumple la condición?",
    "a": [
      "Sí",
      "No",
      "Solo si x es texto"
    ],
    "c": 0,
    "e": ">= incluye la igualdad."
  },
  {
    "q": "¿Cómo expresas una alternativa sin condición?",
    "a": [
      "else:",
      "else x > 0:",
      "elif:"
    ],
    "c": 0,
    "e": "else no recibe una condición."
  },
  {
    "q": "¿Qué sucede si no hay ninguna condición verdadera y tampoco hay else?",
    "a": [
      "Se continúa después de la estructura",
      "Se repite automáticamente",
      "Siempre falla"
    ],
    "c": 0,
    "e": "El programa sigue tras la estructura."
  },
  {
    "q": "¿Qué diferencia hay entre if separados y una cadena if/elif?",
    "a": [
      "Los if separados pueden ejecutar varios bloques",
      "Ambos ejecutan como máximo uno",
      "elif siempre ejecuta todos"
    ],
    "c": 0,
    "e": "Cada if separado se evalúa de manera independiente."
  }
];

evaluacionesEspeciales[13] = [
  {
    "q": "Con i=1, ¿cuántas vueltas hay al aumentar i hasta i<4?",
    "a": [
      "3",
      "4",
      "2"
    ],
    "c": 0,
    "e": "Se procesan 1, 2 y 3."
  },
  {
    "q": "¿Qué resultado queda al sumar 1, 2 y 3 en un acumulador inicializado en 0?",
    "a": [
      "6",
      "123",
      "3"
    ],
    "c": 0,
    "e": "Cada vuelta agrega el siguiente número."
  },
  {
    "q": "¿Cuándo se vuelve a comprobar la condición?",
    "a": [
      "Antes de cada nueva iteración",
      "Solo al finalizar el programa",
      "Nunca después del inicio"
    ],
    "c": 0,
    "e": "while evalúa nuevamente la condición."
  },
  {
    "q": "¿Cuál es la diferencia habitual entre while y for?",
    "a": [
      "while depende de una condición; for recorre un iterable",
      "for no permite break",
      "while solo funciona con números"
    ],
    "c": 0,
    "e": "Ambos repiten, pero expresan la repetición de manera diferente."
  },
  {
    "q": "¿Qué sucede si break termina un while con else?",
    "a": [
      "El else del ciclo no se ejecuta",
      "El else se ejecuta siempre",
      "Python genera un error"
    ],
    "c": 0,
    "e": "El else del ciclo se ejecuta al terminar sin break."
  },
  {
    "q": "¿Cuándo puede ejecutarse else en un while?",
    "a": [
      "Cuando termina normalmente sin break",
      "Solo si ocurre una excepción",
      "En cada vuelta"
    ],
    "c": 0,
    "e": "El else del ciclo acompaña la terminación normal."
  },
  {
    "q": "¿Qué representa True en while True?",
    "a": [
      "Una condición siempre verdadera",
      "Un entero negativo",
      "Una cadena"
    ],
    "c": 0,
    "e": "El ciclo necesita una salida como break para terminar."
  },
  {
    "q": "¿Qué se imprime si i=2 y la condición i<2 es falsa?",
    "a": [
      "Nada",
      "2",
      "0"
    ],
    "c": 0,
    "e": "No se entra al bloque."
  },
  {
    "q": "¿Qué valor tiene i después de comenzar en 0 y aumentar tres veces?",
    "a": [
      "3",
      "2",
      "4"
    ],
    "c": 0,
    "e": "Cada actualización suma uno."
  },
  {
    "q": "¿Qué ocurre con continue antes de actualizar el contador?",
    "a": [
      "Podría repetirse sin avanzar",
      "El contador se actualiza automáticamente",
      "Se produce siempre un TypeError"
    ],
    "c": 0,
    "e": "Si se omite la actualización la condición puede seguir verdadera."
  },
  {
    "q": "¿Cómo detener una búsqueda al encontrar el elemento?",
    "a": [
      "Usar break dentro de la condición",
      "Usar solo print",
      "Crear una lista vacía"
    ],
    "c": 0,
    "e": "break permite salir inmediatamente."
  },
  {
    "q": "¿Qué es una iteración?",
    "a": [
      "Una vuelta del ciclo",
      "Una clase",
      "Una excepción"
    ],
    "c": 0,
    "e": "Una iteración es una ejecución del bloque."
  },
  {
    "q": "¿Puede un while contener otro while?",
    "a": [
      "Sí",
      "No",
      "Solo si están en archivos separados"
    ],
    "c": 0,
    "e": "Un ciclo puede anidarse dentro de otro."
  },
  {
    "q": "¿Cómo evitar un ciclo infinito al leer una entrada?",
    "a": [
      "Modificar la condición o usar una salida clara",
      "Confiar en que Python lo terminará siempre",
      "Eliminar todas las variables"
    ],
    "c": 0,
    "e": "La condición debe poder cambiar o debe existir un break."
  },
  {
    "q": "¿Qué sucede con while False: print(1)?",
    "a": [
      "No imprime",
      "Imprime 1",
      "Imprime False"
    ],
    "c": 0,
    "e": "La condición inicial ya es falsa."
  }
];

evaluacionesEspeciales[14] = [
  {
    "q": "¿Qué devuelve [1, 2, 3][0:2]?",
    "a": [
      "[1, 2]",
      "[1, 2, 3]",
      "[2, 3]"
    ],
    "c": 0,
    "e": "El límite final del corte se excluye."
  },
  {
    "q": "¿Qué hace extend([2, 3]) sobre [1]?",
    "a": [
      "Agrega ambos elementos al final",
      "Agrega siempre la lista como un solo elemento",
      "Elimina el 1"
    ],
    "c": 0,
    "e": "extend incorpora elementos de un iterable."
  },
  {
    "q": "¿Qué hace append([2, 3]) sobre [1]?",
    "a": [
      "Agrega una lista como un elemento",
      "Agrega 2 y 3 por separado",
      "Ordena la lista"
    ],
    "c": 0,
    "e": "append agrega exactamente el objeto recibido."
  },
  {
    "q": "¿Qué devuelve [1, 2, 3].pop()?",
    "a": [
      "3",
      "1",
      "None"
    ],
    "c": 0,
    "e": "pop sin índice extrae y devuelve el último elemento."
  },
  {
    "q": "¿Qué hace remove(2) en [1, 2, 2]?",
    "a": [
      "Elimina la primera aparición de 2",
      "Elimina todos los doses",
      "Devuelve una lista nueva ordenada"
    ],
    "c": 0,
    "e": "remove elimina la primera coincidencia."
  },
  {
    "q": "¿Qué ocurre al llamar remove con un valor ausente?",
    "a": [
      "ValueError",
      "IndexError",
      "No pasa nada siempre"
    ],
    "c": 0,
    "e": "remove no encuentra el valor y lanza ValueError."
  },
  {
    "q": "¿Qué devuelve 2 in [1, 2]?",
    "a": [
      "True",
      "False",
      "2"
    ],
    "c": 0,
    "e": "in comprueba pertenencia."
  },
  {
    "q": "¿Qué valor devuelve una llamada normal a append?",
    "a": [
      "None",
      "La lista modificada",
      "El elemento añadido"
    ],
    "c": 0,
    "e": "append modifica la lista y devuelve None."
  },
  {
    "q": "¿Qué hace sorted([3, 1, 2])?",
    "a": [
      "Devuelve una nueva lista ordenada",
      "Modifica necesariamente la lista original",
      "Devuelve None"
    ],
    "c": 0,
    "e": "sorted crea una nueva lista ordenada."
  },
  {
    "q": "¿Qué diferencia existe entre sort() y sorted()?",
    "a": [
      "sort modifica la lista; sorted devuelve otra lista",
      "Ambos devuelven siempre None",
      "sorted solo funciona con números"
    ],
    "c": 0,
    "e": "sort opera sobre la lista y sorted crea un resultado nuevo."
  },
  {
    "q": "¿Qué devuelve [1, 2] + [3]?",
    "a": [
      "[1, 2, 3]",
      "[4, 5]",
      "6"
    ],
    "c": 0,
    "e": "+ concatena listas."
  },
  {
    "q": "¿Qué devuelve list(\"ab\")?",
    "a": [
      "[\"a\", \"b\"]",
      "[\"ab\"]",
      "2"
    ],
    "c": 0,
    "e": "list recorre la cadena carácter por carácter."
  },
  {
    "q": "¿Qué ocurre si dos variables apuntan a la misma lista y se modifica la lista?",
    "a": [
      "Ambas observan el cambio",
      "Se modifica solo una copia automática",
      "Python prohíbe tener dos referencias"
    ],
    "c": 0,
    "e": "Las variables pueden referirse al mismo objeto mutable."
  },
  {
    "q": "¿Qué crea lista.copy()?",
    "a": [
      "Una copia superficial de la lista",
      "Una copia profunda automática",
      "Un alias idéntico"
    ],
    "c": 0,
    "e": "copy crea otra lista pero conserva referencias a elementos internos."
  },
  {
    "q": "¿Cuántas vueltas realiza for x in una lista vacía?",
    "a": [
      "Ninguna",
      "Una",
      "Dos"
    ],
    "c": 0,
    "e": "No hay elementos para recorrer."
  }
];

evaluacionesEspeciales[15] = [
  {
    "q": "¿Qué devuelve (3, 4)[0]?",
    "a": [
      "3",
      "4",
      "0"
    ],
    "c": 0,
    "e": "El primer elemento ocupa índice cero."
  },
  {
    "q": "¿Qué sucede al intentar t[0] = 5 en una tupla?",
    "a": [
      "TypeError",
      "La tupla cambia",
      "Se agrega un elemento"
    ],
    "c": 0,
    "e": "Las posiciones de la tupla no se pueden reasignar."
  },
  {
    "q": "¿Qué puede contener una tupla?",
    "a": [
      "Valores de distintos tipos",
      "Solo enteros",
      "Solo textos"
    ],
    "c": 0,
    "e": "Una tupla puede mezclar tipos."
  },
  {
    "q": "¿Qué hace set([1, 1, 2])?",
    "a": [
      "Crea un conjunto con 1 y 2",
      "Crea una lista con tres elementos",
      "Genera siempre un error"
    ],
    "c": 0,
    "e": "set conserva elementos únicos."
  },
  {
    "q": "¿Qué hace el operador de unión entre conjuntos?",
    "a": [
      "Calcula la unión",
      "Calcula la intersección",
      "Concatena textos"
    ],
    "c": 0,
    "e": "La unión incluye elementos de ambos conjuntos."
  },
  {
    "q": "¿Qué hace el operador & entre conjuntos?",
    "a": [
      "Calcula la intersección",
      "Calcula la unión",
      "Suma elementos"
    ],
    "c": 0,
    "e": "La intersección contiene elementos comunes."
  },
  {
    "q": "¿Qué hace {1, 2} - {2}?",
    "a": [
      "Produce {1}",
      "Produce {2}",
      "Produce {1, 2}"
    ],
    "c": 0,
    "e": "La diferencia conserva elementos ausentes del segundo conjunto."
  },
  {
    "q": "¿El conjunto garantiza orden de inserción como contrato general?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo con enteros"
    ],
    "c": 0,
    "e": "No se debe depender del orden de recorrido de set."
  },
  {
    "q": "¿Qué significa desempaquetar a, b = (1, 2)?",
    "a": [
      "Asignar 1 a a y 2 a b",
      "Crear un conjunto vacío",
      "Sumar ambos valores"
    ],
    "c": 0,
    "e": "Cada nombre recibe el elemento correspondiente."
  },
  {
    "q": "¿Qué sucede al desempaquetar dos valores en tres nombres sin asterisco?",
    "a": [
      "ValueError",
      "Los nombres extra reciben None",
      "Se ignora un nombre"
    ],
    "c": 0,
    "e": "El número de valores debe corresponder."
  },
  {
    "q": "¿Es posible agregar elementos a un set?",
    "a": [
      "Sí, con add",
      "No, set es inmutable",
      "Solo con append"
    ],
    "c": 0,
    "e": "set es mutable y proporciona add."
  },
  {
    "q": "¿Qué hace discard si el valor no existe en el set?",
    "a": [
      "No lanza error por esa ausencia",
      "Lanza KeyError siempre",
      "Devuelve un elemento aleatorio"
    ],
    "c": 0,
    "e": "discard ignora la ausencia."
  },
  {
    "q": "¿Qué hace remove si el valor no existe en el set?",
    "a": [
      "Lanza KeyError",
      "No hace nada siempre",
      "Devuelve None sin comprobar"
    ],
    "c": 0,
    "e": "remove exige que el elemento exista."
  },
  {
    "q": "¿Qué es frozenset?",
    "a": [
      "Un conjunto inmutable",
      "Una tupla mutable",
      "Un diccionario ordenado"
    ],
    "c": 0,
    "e": "frozenset representa un conjunto que no cambia."
  },
  {
    "q": "¿Una tupla puede contener una lista?",
    "a": [
      "Sí, aunque la lista interna siga siendo mutable",
      "No, nunca",
      "Solo si la lista está vacía"
    ],
    "c": 0,
    "e": "La inmutabilidad de la tupla no vuelve inmutables los objetos contenidos."
  }
];

evaluacionesEspeciales[16] = [
  {
    "q": "¿Qué devuelve d.items()?",
    "a": [
      "Una vista de pares clave-valor",
      "Solo claves",
      "Solo valores"
    ],
    "c": 0,
    "e": "items permite recorrer claves y valores juntos."
  },
  {
    "q": "¿Qué ocurre al asignar una clave que ya existe?",
    "a": [
      "Se actualiza su valor",
      "Se crean dos claves iguales",
      "Se detiene Python"
    ],
    "c": 0,
    "e": "Cada clave tiene un valor asociado en el diccionario."
  },
  {
    "q": "¿Una clave de diccionario puede ser una lista mutable?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo con números"
    ],
    "c": 0,
    "e": "Las claves deben ser hashables."
  },
  {
    "q": "¿Puede una cadena ser clave?",
    "a": [
      "Sí",
      "No",
      "Solo si es numérica"
    ],
    "c": 0,
    "e": "Las cadenas son hashables y pueden ser claves."
  },
  {
    "q": "¿Qué devuelve {}.get(\"x\") sin valor por defecto?",
    "a": [
      "None",
      "KeyError",
      "0"
    ],
    "c": 0,
    "e": "get devuelve None por defecto si no encuentra la clave."
  },
  {
    "q": "¿Qué hace d.pop(\"x\")?",
    "a": [
      "Elimina la clave y devuelve su valor",
      "Solo imprime la clave",
      "Ordena el diccionario"
    ],
    "c": 0,
    "e": "pop extrae el valor asociado a la clave."
  },
  {
    "q": "¿Qué devuelve {\"a\": 1}[\"a\"]?",
    "a": [
      "1",
      "\"a\"",
      "None"
    ],
    "c": 0,
    "e": "La clave a está asociada al valor entero 1."
  },
  {
    "q": "¿Los valores de un diccionario pueden repetirse?",
    "a": [
      "Sí",
      "No",
      "Solo si son enteros"
    ],
    "c": 0,
    "e": "Las claves son únicas; los valores pueden repetirse."
  },
  {
    "q": "¿Qué recorre for clave in d?",
    "a": [
      "Las claves",
      "Los valores obligatoriamente",
      "Los índices numéricos"
    ],
    "c": 0,
    "e": "Iterar directamente sobre un diccionario recorre sus claves."
  },
  {
    "q": "¿Qué recorre for clave, valor in d.items()?",
    "a": [
      "Pares clave-valor",
      "Solo los valores",
      "Solo posiciones"
    ],
    "c": 0,
    "e": "items entrega pares de claves y valores."
  },
  {
    "q": "¿Qué hace d.update({\"a\": 2})?",
    "a": [
      "Agrega o actualiza el par",
      "Elimina d",
      "Convierte d a lista"
    ],
    "c": 0,
    "e": "update incorpora las asociaciones recibidas."
  },
  {
    "q": "¿Qué obtiene d.get(\"a\", 0) si a existe con valor None?",
    "a": [
      "None",
      "0",
      "KeyError"
    ],
    "c": 0,
    "e": "get usa el valor por defecto únicamente si la clave falta."
  },
  {
    "q": "¿Puede un valor de diccionario ser una lista?",
    "a": [
      "Sí",
      "No",
      "Solo en archivos JSON"
    ],
    "c": 0,
    "e": "Los valores pueden ser objetos de distintos tipos."
  },
  {
    "q": "¿Qué pasa si se usa del d[\"a\"] y la clave existe?",
    "a": [
      "Se elimina el par",
      "Se elimina todo Python",
      "Se convierte el valor a cero"
    ],
    "c": 0,
    "e": "del elimina la asociación de esa clave."
  },
  {
    "q": "¿Para qué sirve un diccionario en un cliente?",
    "a": [
      "Para asociar nombres de campos con datos",
      "Para garantizar datos correctos sin validación",
      "Para almacenar solo números consecutivos"
    ],
    "c": 0,
    "e": "Las claves permiten nombrar cada dato."
  }
];

evaluacionesEspeciales[17] = [
  {
    "q": "Con def f(a, b=2): return a+b, ¿qué devuelve f(3)?",
    "a": [
      "5",
      "3",
      "2"
    ],
    "c": 0,
    "e": "b usa su valor predeterminado 2."
  },
  {
    "q": "Con la misma función, ¿qué devuelve f(3, 4)?",
    "a": [
      "7",
      "5",
      "4"
    ],
    "c": 0,
    "e": "El argumento 4 reemplaza el valor por defecto de b."
  },
  {
    "q": "¿Qué devuelve f(b=4, a=3) para esa función?",
    "a": [
      "7",
      "5",
      "TypeError siempre"
    ],
    "c": 0,
    "e": "Los argumentos por nombre pueden indicarse en ese orden."
  },
  {
    "q": "¿Puede un parámetro ser una lista?",
    "a": [
      "Sí",
      "No",
      "Solo si está vacía"
    ],
    "c": 0,
    "e": "Un argumento puede ser una lista."
  },
  {
    "q": "¿Por qué hay que tener cuidado con una lista como valor por defecto?",
    "a": [
      "Se comparte entre llamadas que usan ese valor",
      "Python crea una lista nueva obligatoriamente en cada llamada",
      "Las listas no existen en funciones"
    ],
    "c": 0,
    "e": "El valor predeterminado se evalúa al definir la función."
  },
  {
    "q": "¿Qué patrón permite crear una lista nueva cuando no se recibe una?",
    "a": [
      "Usar None y crear la lista dentro",
      "Usar [] como valor por defecto siempre",
      "Asignar una cadena"
    ],
    "c": 0,
    "e": "Se comprueba None y se crea un objeto nuevo en la función."
  },
  {
    "q": "¿Qué significa *args en una definición?",
    "a": [
      "Recibir argumentos posicionales adicionales",
      "Importar paquetes",
      "Definir una clase"
    ],
    "c": 0,
    "e": "args agrupa los argumentos posicionales adicionales."
  },
  {
    "q": "¿Qué significa **kwargs?",
    "a": [
      "Recibir argumentos por nombre adicionales",
      "Multiplicar obligatoriamente dos valores",
      "Leer un archivo"
    ],
    "c": 0,
    "e": "kwargs agrupa argumentos adicionales por nombre."
  },
  {
    "q": "¿Puede una función recibir una cantidad variable de argumentos?",
    "a": [
      "Sí",
      "No",
      "Solo dos"
    ],
    "c": 0,
    "e": "*args y **kwargs permiten recibir cantidades variables."
  },
  {
    "q": "¿Qué sucede si un mismo parámetro recibe un valor posicional y otro por nombre?",
    "a": [
      "TypeError",
      "Se suman automáticamente",
      "Se ignora siempre el segundo"
    ],
    "c": 0,
    "e": "La llamada asignaría dos valores al mismo parámetro."
  },
  {
    "q": "¿Qué hace return en una función?",
    "a": [
      "Devuelve un resultado",
      "Convierte argumentos a texto",
      "Agrega siempre un elemento a una lista"
    ],
    "c": 0,
    "e": "return entrega un valor al llamador."
  },
  {
    "q": "¿Un parámetro existe como nombre local de la función?",
    "a": [
      "Sí",
      "No",
      "Solo en el archivo README"
    ],
    "c": 0,
    "e": "El parámetro está disponible en el ámbito local de la llamada."
  },
  {
    "q": "¿Qué sucede cuando se pasa una lista a una función que modifica esa lista?",
    "a": [
      "Quien llamó puede observar la modificación",
      "Se crea siempre una copia profunda",
      "Python bloquea cualquier cambio"
    ],
    "c": 0,
    "e": "La función recibe una referencia al mismo objeto mutable."
  },
  {
    "q": "¿Es obligatorio usar el mismo nombre de variable y parámetro?",
    "a": [
      "No",
      "Sí",
      "Solo para enteros"
    ],
    "c": 0,
    "e": "El argumento puede ser una expresión o una variable con otro nombre."
  },
  {
    "q": "¿Se ejecuta el cuerpo de una función solo por definirla?",
    "a": [
      "No, normalmente al llamarla",
      "Sí, siempre",
      "Solo si tiene parámetros"
    ],
    "c": 0,
    "e": "La definición crea la función; la llamada ejecuta su cuerpo."
  }
];

evaluacionesEspeciales[18] = [
  {
    "q": "Con x=1 fuera y x=2 dentro de una función sin global, ¿cambia x fuera?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si x es entero"
    ],
    "c": 0,
    "e": "La asignación interna crea un nombre local independiente."
  },
  {
    "q": "¿Qué se muestra si una función devuelve 5 y se ejecuta print(función())?",
    "a": [
      "5",
      "None siempre",
      "El código de la función"
    ],
    "c": 0,
    "e": "print recibe y muestra el valor devuelto."
  },
  {
    "q": "¿Qué sucede con x=10; def f(): print(x), si f no asigna x?",
    "a": [
      "Puede leer x del ámbito global",
      "Siempre lanza TypeError",
      "Modifica x automáticamente"
    ],
    "c": 0,
    "e": "Si no existe un nombre local x, puede consultarse el nombre global."
  },
  {
    "q": "¿Qué significa LEGB?",
    "a": [
      "Orden de búsqueda: local, envolvente, global y construido",
      "Una regla de archivos JSON",
      "Un método de listas"
    ],
    "c": 0,
    "e": "Python busca nombres siguiendo esos ámbitos según el caso."
  },
  {
    "q": "¿Qué es un ámbito envolvente?",
    "a": [
      "El ámbito de una función exterior que contiene otra",
      "El archivo de registro",
      "Una carpeta temporal"
    ],
    "c": 0,
    "e": "Una función anidada puede acceder a nombres de una función exterior."
  },
  {
    "q": "¿Para qué sirve nonlocal en una función anidada?",
    "a": [
      "Para asignar a un nombre de una función envolvente",
      "Para importar todos los módulos",
      "Para definir una variable global del sistema"
    ],
    "c": 0,
    "e": "nonlocal se refiere a un nombre existente en un ámbito envolvente."
  },
  {
    "q": "¿Puede una función recibir por parámetro un dato que existe fuera?",
    "a": [
      "Sí",
      "No",
      "Solo si es una cadena"
    ],
    "c": 0,
    "e": "La llamada puede pasar el valor como argumento."
  },
  {
    "q": "¿Qué devuelve por defecto una función que termina sin return explícito?",
    "a": [
      "None",
      "0",
      "Una lista vacía"
    ],
    "c": 0,
    "e": "Python devuelve None cuando no se devuelve otro valor."
  },
  {
    "q": "¿Qué error puede surgir al leer x antes de asignarla dentro de la misma función?",
    "a": [
      "UnboundLocalError",
      "KeyError",
      "FileNotFoundError"
    ],
    "c": 0,
    "e": "Si x se trata como local pero aún no tiene valor, se produce ese error."
  },
  {
    "q": "¿Qué es un nombre global en un módulo?",
    "a": [
      "Un nombre definido en el ámbito del módulo",
      "Un nombre compartido automáticamente entre computadores",
      "Un atributo privado"
    ],
    "c": 0,
    "e": "El ámbito global de una función corresponde normalmente al módulo donde se define."
  },
  {
    "q": "¿Una lista pasada como argumento puede modificarse dentro de una función?",
    "a": [
      "Sí, y quien llamó puede observar el cambio",
      "No, Python copia siempre la lista",
      "Solo después de usar global"
    ],
    "c": 0,
    "e": "La función recibe una referencia al mismo objeto mutable."
  },
  {
    "q": "¿Qué cambia si una función reasigna su parámetro a otra lista?",
    "a": [
      "El nombre local pasa a referirse a la nueva lista",
      "La variable del llamador cambia automáticamente de referencia",
      "Se modifica obligatoriamente la lista original"
    ],
    "c": 0,
    "e": "Reasignar el parámetro no reasigna el nombre del llamador."
  },
  {
    "q": "¿Qué ventaja tienen funciones con entradas y salidas explícitas?",
    "a": [
      "Son más fáciles de probar y reutilizar",
      "Nunca pueden fallar",
      "No requieren parámetros"
    ],
    "c": 0,
    "e": "Sus dependencias y resultados son más claros."
  },
  {
    "q": "¿Es recomendable usar variables globales para todos los cálculos?",
    "a": [
      "No necesariamente; puede dificultar pruebas y seguimiento",
      "Sí, siempre",
      "Es obligatorio en Python"
    ],
    "c": 0,
    "e": "Usarlas de forma controlada ayuda a evitar dependencias ocultas."
  },
  {
    "q": "¿Qué se imprime con x=1; def f(): return 2; print(x) tras llamar f?",
    "a": [
      "1",
      "2",
      "3"
    ],
    "c": 0,
    "e": "El retorno de f no cambia x si no se asigna a x."
  }
];

evaluacionesEspeciales[19] = [
  {
    "q": "¿Qué tipo de excepción puede lanzar lista[5] si la lista está vacía?",
    "a": [
      "IndexError",
      "KeyError",
      "ValueError"
    ],
    "c": 0,
    "e": "El índice no existe en la lista."
  },
  {
    "q": "¿Qué tipo de excepción puede lanzar diccionario[\"x\"] si falta esa clave?",
    "a": [
      "KeyError",
      "IndexError",
      "ZeroDivisionError"
    ],
    "c": 0,
    "e": "La búsqueda por clave faltante produce KeyError."
  },
  {
    "q": "¿Capturar una excepción significa que la operación que falló se completó?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo cuando hay un mensaje"
    ],
    "c": 0,
    "e": "El manejador permite responder al fallo; no completa la operación automáticamente."
  },
  {
    "q": "¿Qué beneficio tiene capturar excepciones específicas?",
    "a": [
      "Manejar el error previsto sin ocultar otros",
      "Garantizar que no haya errores",
      "Hacer innecesarias las validaciones"
    ],
    "c": 0,
    "e": "El tipo específico limita qué errores captura el bloque."
  },
  {
    "q": "¿Qué excepción puede producir sumar \"2\" + 2?",
    "a": [
      "TypeError",
      "NameError",
      "KeyError"
    ],
    "c": 0,
    "e": "No se pueden sumar directamente esos tipos con +."
  },
  {
    "q": "¿Puede un except capturar una tupla de tipos de excepción?",
    "a": [
      "Sí",
      "No",
      "Solo con números"
    ],
    "c": 0,
    "e": "La sintaxis permite indicar varios tipos entre paréntesis."
  },
  {
    "q": "¿Qué ocurre con except Exception?",
    "a": [
      "Captura excepciones derivadas de Exception",
      "Captura solo ValueError",
      "Hace imposible cualquier error"
    ],
    "c": 0,
    "e": "Su alcance es amplio y debe utilizarse con cuidado."
  },
  {
    "q": "¿Qué diferencia hay entre un error de sintaxis y una excepción de ejecución?",
    "a": [
      "El primero impide analizar código inválido; la segunda ocurre al ejecutar",
      "Son exactamente lo mismo",
      "Un error de sintaxis siempre ocurre después de ejecutar todo"
    ],
    "c": 0,
    "e": "Son etapas y situaciones diferentes."
  },
  {
    "q": "¿Qué información ofrece un traceback?",
    "a": [
      "Las llamadas y ubicación relacionadas con el fallo",
      "Una solución garantizada",
      "La contraseña del usuario"
    ],
    "c": 0,
    "e": "El traceback ayuda a investigar cómo se produjo una excepción."
  },
  {
    "q": "¿Es correcto usar except sin especificar tipo para ocultar todos los errores?",
    "a": [
      "No es una buena práctica general",
      "Sí, siempre",
      "Es obligatorio"
    ],
    "c": 0,
    "e": "Un except genérico sin control puede ocultar fallos inesperados."
  },
  {
    "q": "¿Qué ocurre si no hay except compatible en el nivel actual?",
    "a": [
      "La excepción se propaga",
      "Python la transforma en cero",
      "Se repite automáticamente la línea"
    ],
    "c": 0,
    "e": "Se busca un manejador en niveles superiores de la llamada."
  },
  {
    "q": "¿Qué hace logging.exception dentro de un except?",
    "a": [
      "Registra un mensaje y la información de la excepción activa",
      "Elimina el error de Python",
      "Corrige la entrada"
    ],
    "c": 0,
    "e": "logging.exception incluye información para diagnosticar el fallo."
  },
  {
    "q": "¿Puede una excepción capturada mostrarse con print(error)?",
    "a": [
      "Sí",
      "No",
      "Solo si es un número"
    ],
    "c": 0,
    "e": "La instancia tiene una representación de texto."
  },
  {
    "q": "¿Qué conviene comprobar además de gestionar errores?",
    "a": [
      "El resultado correcto y los casos límite",
      "Solo que el programa se abra",
      "Únicamente el color de la interfaz"
    ],
    "c": 0,
    "e": "Las pruebas deben cubrir casos válidos, inválidos y límites."
  },
  {
    "q": "¿Qué ocurre si except ValueError recibe un TypeError?",
    "a": [
      "Ese except no lo maneja",
      "Lo convierte en ValueError automáticamente",
      "Lo ignora como correcto"
    ],
    "c": 0,
    "e": "Solo captura tipos compatibles con el indicado."
  }
];

evaluacionesEspeciales[20] = [
  {
    "q": "¿Qué ocurre con else si se captura una excepción del try?",
    "a": [
      "No se ejecuta ese else",
      "Se ejecuta antes de except",
      "Se ejecuta siempre"
    ],
    "c": 0,
    "e": "else requiere que try haya terminado sin excepción."
  },
  {
    "q": "¿Qué significa raise NuevoError(\"mensaje\") from error?",
    "a": [
      "Indica explícitamente la causa de la nueva excepción",
      "Copia un archivo",
      "Ignora la excepción original"
    ],
    "c": 0,
    "e": "from establece una causa explícita en el encadenamiento."
  },
  {
    "q": "¿Es obligatorio usar as error en cada except?",
    "a": [
      "No",
      "Sí",
      "Solo con finally"
    ],
    "c": 0,
    "e": "Solo se necesita si quieres acceder a la instancia capturada."
  },
  {
    "q": "¿Qué ocurre con finally si hay return dentro de try?",
    "a": [
      "Se ejecuta antes de que la función regrese",
      "Se omite siempre",
      "Se convierte en except"
    ],
    "c": 0,
    "e": "finally se ejecuta durante la salida normal de la función."
  },
  {
    "q": "¿Qué riesgo tiene devolver un valor desde finally?",
    "a": [
      "Puede ocultar una excepción o un retorno previo",
      "Hace que el bloque no se ejecute",
      "Siempre impide crear funciones"
    ],
    "c": 0,
    "e": "El flujo de salida de finally puede reemplazar el anterior."
  },
  {
    "q": "¿Qué es una causa explícita de excepción?",
    "a": [
      "Una excepción vinculada mediante raise ... from ...",
      "Un comentario del archivo",
      "Una lista de opciones"
    ],
    "c": 0,
    "e": "from registra qué excepción originó otra."
  },
  {
    "q": "¿Un raise puede usarse para validar una fecha inválida?",
    "a": [
      "Sí",
      "No",
      "Solo si se imprime primero"
    ],
    "c": 0,
    "e": "Se puede lanzar una excepción cuando un dato no cumple una regla."
  },
  {
    "q": "¿Qué sucede si finally también lanza una excepción?",
    "a": [
      "La nueva excepción se propaga y puede reemplazar el flujo anterior",
      "Siempre se ignora",
      "Se vuelve un booleano"
    ],
    "c": 0,
    "e": "Una excepción en finally cambia el flujo de salida."
  },
  {
    "q": "¿Para qué sirve el bloque else en try/except/else?",
    "a": [
      "Para separar acciones que siguen a un try exitoso",
      "Para manejar cualquier error",
      "Para volver al inicio"
    ],
    "c": 0,
    "e": "else agrupa el camino sin excepción del bloque try."
  },
  {
    "q": "¿Cuál es el orden habitual de estas cláusulas?",
    "a": [
      "try, except, else, finally",
      "finally, try, except, else",
      "else, finally, try, except"
    ],
    "c": 0,
    "e": "Las cláusulas se escriben en ese orden cuando se usan juntas."
  },
  {
    "q": "¿Qué diferencia hay entre crear ValueError(\"x\") y usar raise?",
    "a": [
      "raise lanza la excepción creada",
      "Crear el objeto ya la lanza automáticamente",
      "raise solo imprime"
    ],
    "c": 0,
    "e": "Construir una instancia no cambia el flujo hasta lanzarla."
  },
  {
    "q": "¿Qué hace raise ValueError(\"x\")?",
    "a": [
      "Lanza ValueError con el mensaje x",
      "Devuelve la cadena x",
      "Crea un archivo x"
    ],
    "c": 0,
    "e": "La excepción transporta el mensaje indicado."
  },
  {
    "q": "¿Puede usarse finally para registrar que terminó una operación?",
    "a": [
      "Sí",
      "No",
      "Solo si no hay error"
    ],
    "c": 0,
    "e": "finally permite ejecutar una acción al salir del bloque."
  },
  {
    "q": "¿El bloque else maneja errores del propio else en el except anterior?",
    "a": [
      "No, ese except maneja excepciones del try",
      "Sí, siempre",
      "Solo en Python 2"
    ],
    "c": 0,
    "e": "Las excepciones del else se propagan según los manejadores exteriores."
  },
  {
    "q": "¿Qué hace raise ... from None?",
    "a": [
      "Suprime la visualización del contexto previo en el traceback",
      "Elimina todos los errores del programa",
      "Devuelve None"
    ],
    "c": 0,
    "e": "La sintaxis suprime el contexto implícito mostrado."
  }
];

evaluacionesEspeciales[21] = [
  {
    "q": "¿Qué ocurre si una excepción propia no se captura?",
    "a": [
      "Se propaga como cualquier otra excepción",
      "Se ignora automáticamente",
      "Siempre retorna False"
    ],
    "c": 0,
    "e": "Las excepciones personalizadas siguen las reglas normales de propagación."
  },
  {
    "q": "¿Qué tipo conviene como base general para errores propios de aplicación?",
    "a": [
      "Exception",
      "BaseException sin motivo",
      "str"
    ],
    "c": 0,
    "e": "Heredar de Exception permite integrarse con el manejo normal de errores."
  },
  {
    "q": "¿Qué permite except Exception respecto a una excepción propia derivada de Exception?",
    "a": [
      "Puede capturarla",
      "Nunca puede capturarla",
      "La convierte en un número"
    ],
    "c": 0,
    "e": "La captura considera la jerarquía de herencia."
  },
  {
    "q": "¿Qué expresa raise ReservaInvalidaError(\"fecha pasada\")?",
    "a": [
      "La reserva no cumple una regla y se lanza un error",
      "Una confirmación de reserva",
      "La fecha actual del sistema"
    ],
    "c": 0,
    "e": "El mensaje informa la razón del rechazo."
  },
  {
    "q": "¿Qué se obtiene con str(error) si el mensaje fue \"dato inválido\"?",
    "a": [
      "El texto del mensaje",
      "Una lista vacía",
      "El archivo completo"
    ],
    "c": 0,
    "e": "La representación textual suele contener el mensaje."
  },
  {
    "q": "¿Qué hace raise ErrorPropio(\"formato\") from error?",
    "a": [
      "Encadena explícitamente el error original como causa",
      "Elimina el error original",
      "Vuelve válida la entrada"
    ],
    "c": 0,
    "e": "La causa original queda asociada a la nueva excepción."
  },
  {
    "q": "¿Es conveniente que el mensaje explique qué dato está mal?",
    "a": [
      "Sí",
      "No",
      "Solo para errores de red"
    ],
    "c": 0,
    "e": "Un mensaje claro facilita corregir la entrada."
  },
  {
    "q": "¿Una excepción personalizada es una clase?",
    "a": [
      "Sí",
      "No",
      "Es siempre una función"
    ],
    "c": 0,
    "e": "Se define como clase y se crean instancias de ella."
  },
  {
    "q": "¿Puede una excepción personalizada tener atributos adicionales?",
    "a": [
      "Sí",
      "No",
      "Solo atributos numéricos"
    ],
    "c": 0,
    "e": "Puede guardar información contextual cuando resulta útil."
  },
  {
    "q": "¿Qué hace pass en una clase de excepción sencilla?",
    "a": [
      "Sirve como cuerpo vacío válido",
      "Lanza la excepción",
      "Finaliza Python"
    ],
    "c": 0,
    "e": "pass permite una definición sin instrucciones adicionales."
  },
  {
    "q": "¿Se recomienda capturar una excepción propia y continuar sin informar ni registrar nada?",
    "a": [
      "No como práctica general",
      "Sí, siempre",
      "Es obligatorio"
    ],
    "c": 0,
    "e": "Ocultar el fallo puede dificultar el diagnóstico."
  },
  {
    "q": "¿Puede manejarse el mismo tipo de excepción en varios lugares?",
    "a": [
      "Sí",
      "No",
      "Solo dentro de su clase"
    ],
    "c": 0,
    "e": "Cada llamada puede decidir dónde capturar la excepción."
  },
  {
    "q": "¿Qué ocurre cuando un except es más general y aparece antes que otro más específico?",
    "a": [
      "Puede capturar primero el error compatible",
      "Se ejecutan ambos except",
      "Python elige siempre el más específico automáticamente"
    ],
    "c": 0,
    "e": "Los except se revisan en orden."
  },
  {
    "q": "¿Una excepción personalizada sustituye la validación del dato?",
    "a": [
      "No; la validación decide cuándo lanzarla",
      "Sí, valida automáticamente",
      "Solo si tiene un comentario"
    ],
    "c": 0,
    "e": "La clase representa el error y la condición determina cuándo lanzarlo."
  },
  {
    "q": "¿Qué prueba ayuda a verificar una excepción propia?",
    "a": [
      "Un caso inválido que compruebe el tipo y mensaje esperado",
      "Solo abrir el programa",
      "Cambiar el color del editor"
    ],
    "c": 0,
    "e": "Una prueba debe provocar y comprobar el fallo previsto."
  }
];

evaluacionesEspeciales[22] = [
  {
    "q": "¿Qué significa abrir un archivo en modo binario?",
    "a": [
      "Trabajar con bytes en lugar de texto decodificado",
      "Leer solo números pares",
      "Convertir automáticamente a PDF"
    ],
    "c": 0,
    "e": "El modo b trabaja con bytes."
  },
  {
    "q": "¿Qué modo abre para lectura binaria?",
    "a": [
      "rb",
      "rt",
      "wb"
    ],
    "c": 0,
    "e": "r indica lectura y b modo binario."
  },
  {
    "q": "¿Qué hace readline()?",
    "a": [
      "Lee una línea desde la posición actual",
      "Borra el archivo",
      "Devuelve siempre todas las líneas como lista"
    ],
    "c": 0,
    "e": "readline lee la siguiente línea disponible."
  },
  {
    "q": "¿Qué permite for linea in archivo?",
    "a": [
      "Recorrer el archivo línea por línea",
      "Cambiar automáticamente la codificación",
      "Eliminar cada línea"
    ],
    "c": 0,
    "e": "Un archivo de texto es iterable por líneas."
  },
  {
    "q": "¿Qué hace seek(0)?",
    "a": [
      "Mueve la posición de lectura o escritura al inicio",
      "Borra el archivo",
      "Cierra el recurso"
    ],
    "c": 0,
    "e": "seek cambia la posición actual en el archivo."
  },
  {
    "q": "¿Qué ocurre si usas write sobre un archivo abierto solo con r?",
    "a": [
      "Se produce un error de operación no admitida",
      "Se escribe normalmente siempre",
      "Se cambia a modo w automáticamente"
    ],
    "c": 0,
    "e": "El modo de lectura no permite escribir."
  },
  {
    "q": "¿Qué precaución exige el modo w?",
    "a": [
      "Puede borrar el contenido existente",
      "Nunca crea archivos",
      "Solo sirve para leer"
    ],
    "c": 0,
    "e": "Abrir en w trunca el archivo existente."
  },
  {
    "q": "¿Qué opción permite añadir texto sin truncar el contenido existente?",
    "a": [
      "a",
      "w",
      "r"
    ],
    "c": 0,
    "e": "a abre en modo de adición."
  },
  {
    "q": "¿Una ruta relativa se interpreta respecto a qué?",
    "a": [
      "El directorio de trabajo actual",
      "Siempre la carpeta del intérprete",
      "Siempre el escritorio"
    ],
    "c": 0,
    "e": "Las rutas relativas dependen del directorio de trabajo."
  },
  {
    "q": "¿Qué representa un gestor de contexto?",
    "a": [
      "Un objeto que administra entrada y salida de un bloque with",
      "Un tipo de número entero",
      "Un comentario de Python"
    ],
    "c": 0,
    "e": "El protocolo gestiona recursos alrededor del bloque."
  },
  {
    "q": "¿with garantiza que no ocurrirá ningún error de archivos?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "with gestiona el cierre, pero pueden ocurrir errores de ruta o permisos."
  },
  {
    "q": "¿Qué excepción puede aparecer si no hay permisos para abrir un archivo?",
    "a": [
      "PermissionError",
      "KeyError",
      "ZeroDivisionError"
    ],
    "c": 0,
    "e": "El sistema puede impedir el acceso solicitado."
  },
  {
    "q": "¿Qué ocurre si falla open antes de entrar a with?",
    "a": [
      "El bloque with no llega a ejecutarse",
      "El archivo se abre vacío siempre",
      "Python crea todas las carpetas automáticamente"
    ],
    "c": 0,
    "e": "La apertura debe completarse antes de entrar al bloque."
  },
  {
    "q": "¿Qué utilidad tiene io.StringIO?",
    "a": [
      "Simular un archivo de texto en memoria",
      "Crear una conexión de red",
      "Cifrar archivos"
    ],
    "c": 0,
    "e": "StringIO ofrece una interfaz de texto en memoria."
  },
  {
    "q": "¿Dónde se conservan normalmente los datos de StringIO?",
    "a": [
      "En memoria durante su vida útil",
      "En un archivo permanente automáticamente",
      "En GitHub sin configuración"
    ],
    "c": 0,
    "e": "StringIO no guarda por sí solo en el disco."
  }
];

evaluacionesEspeciales[23] = [
  {
    "q": "¿Qué devuelve math.sqrt(25)?",
    "a": [
      "5.0",
      "25",
      "\"5\""
    ],
    "c": 0,
    "e": "sqrt devuelve la raíz cuadrada como float."
  },
  {
    "q": "¿Cuándo se ejecuta el código de nivel superior de un módulo normalmente?",
    "a": [
      "Cuando se importa por primera vez en el proceso",
      "En cada acceso a un atributo",
      "Solo al apagar el equipo"
    ],
    "c": 0,
    "e": "La primera importación carga y ejecuta el módulo si no está en caché."
  },
  {
    "q": "¿Dónde conserva Python referencias a módulos importados?",
    "a": [
      "sys.modules",
      "Una lista llamada print",
      "El archivo README únicamente"
    ],
    "c": 0,
    "e": "sys.modules guarda módulos cargados en el proceso."
  },
  {
    "q": "¿Qué significa from math import sqrt as raiz?",
    "a": [
      "Importar sqrt con el alias raiz",
      "Crear una clase llamada raiz",
      "Reemplazar la función sqrt para todos"
    ],
    "c": 0,
    "e": "El nombre local raiz apunta al objeto importado."
  },
  {
    "q": "¿Qué variable contiene el nombre de un módulo?",
    "a": [
      "__name__",
      "__file_name_only__",
      "self"
    ],
    "c": 0,
    "e": "__name__ identifica el módulo en su contexto."
  },
  {
    "q": "¿Qué indica if __name__ == \"__main__\"?",
    "a": [
      "Que ese bloque se ejecuta cuando el archivo es el programa principal",
      "Que el archivo no puede importarse",
      "Que se instala el módulo"
    ],
    "c": 0,
    "e": "La condición distingue la ejecución principal de una importación normal."
  },
  {
    "q": "¿Un módulo puede importar otro módulo?",
    "a": [
      "Sí",
      "No",
      "Solo si contiene una clase"
    ],
    "c": 0,
    "e": "Los módulos pueden depender de otros módulos."
  },
  {
    "q": "¿Qué riesgo tiene nombrar un archivo local math.py?",
    "a": [
      "Puede ocultar el módulo estándar math",
      "Python desinstala math",
      "El equipo se reinicia"
    ],
    "c": 0,
    "e": "El sistema de búsqueda puede resolver primero el archivo local."
  },
  {
    "q": "¿Qué es un paquete?",
    "a": [
      "Una forma de organizar módulos relacionados",
      "Una excepción obligatoria",
      "Una variable global especial"
    ],
    "c": 0,
    "e": "Un paquete agrupa módulos bajo un espacio de nombres."
  },
  {
    "q": "¿import math muestra automáticamente el resultado de sqrt(9)?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "Importar no llama a sqrt por sí mismo."
  },
  {
    "q": "¿Qué hace from modulo import *?",
    "a": [
      "Importa varios nombres públicos según las reglas del módulo",
      "Crea pruebas para el módulo",
      "Borra el espacio de nombres"
    ],
    "c": 0,
    "e": "La importación con * puede dificultar identificar el origen de nombres."
  },
  {
    "q": "¿Qué proporciona sys.path?",
    "a": [
      "Rutas que participan en la búsqueda de módulos",
      "Una lista de errores del navegador",
      "La contraseña de Python"
    ],
    "c": 0,
    "e": "sys.path influye en la resolución de importaciones."
  },
  {
    "q": "¿Hay diferencia entre instalar un paquete e importarlo?",
    "a": [
      "Sí; instalarlo lo hace disponible e importarlo lo carga en el programa",
      "No, siempre son idénticos",
      "Importar siempre instala el paquete"
    ],
    "c": 0,
    "e": "Son operaciones diferentes."
  },
  {
    "q": "¿Qué hace math.pi?",
    "a": [
      "Accede al valor pi expuesto por math",
      "Llama automáticamente a print",
      "Crea una lista"
    ],
    "c": 0,
    "e": "pi es un atributo del módulo math."
  },
  {
    "q": "¿Conviene probar un módulo importándolo y ejecutando sus funciones?",
    "a": [
      "Sí",
      "No, jamás",
      "Solo si tiene más de cien líneas"
    ],
    "c": 0,
    "e": "Las pruebas permiten comprobar su comportamiento."
  }
];

evaluacionesEspeciales[24] = [
  {
    "q": "¿Qué recibe normalmente self al llamar cliente.saludar()?",
    "a": [
      "La instancia cliente",
      "La clase str siempre",
      "La carpeta actual"
    ],
    "c": 0,
    "e": "Python enlaza el método con la instancia correspondiente."
  },
  {
    "q": "¿Qué diferencia hay entre cliente.nombre y cliente.nombre()?",
    "a": [
      "El segundo intenta llamar el valor del atributo",
      "Son siempre equivalentes",
      "El primero crea una instancia"
    ],
    "c": 0,
    "e": "Los paréntesis intentan ejecutar el objeto obtenido."
  },
  {
    "q": "¿Qué ocurre si nombre contiene una cadena y se llama cliente.nombre()?",
    "a": [
      "Normalmente TypeError",
      "Se imprime automáticamente",
      "Se cambia el nombre"
    ],
    "c": 0,
    "e": "Una cadena no es invocable como función."
  },
  {
    "q": "¿Puede un método consultar otro atributo mediante self?",
    "a": [
      "Sí",
      "No",
      "Solo si el atributo es numérico"
    ],
    "c": 0,
    "e": "self permite acceder a atributos de esa instancia."
  },
  {
    "q": "¿Qué devuelve un método sin return explícito?",
    "a": [
      "None",
      "0 siempre",
      "El propio objeto obligatoriamente"
    ],
    "c": 0,
    "e": "Una función sin return explícito devuelve None."
  },
  {
    "q": "¿Qué hace cliente = Cliente(\"Ana\")?",
    "a": [
      "Crea una instancia y la asigna a cliente",
      "Define la clase desde cero",
      "Crea solo una cadena"
    ],
    "c": 0,
    "e": "La llamada a la clase construye una instancia."
  },
  {
    "q": "¿Qué es un atributo de clase?",
    "a": [
      "Un valor definido en la clase y accesible desde ella",
      "Un valor necesariamente único de cada archivo",
      "Una excepción"
    ],
    "c": 0,
    "e": "Los atributos de clase se comparten mediante la clase, salvo que se oculten en instancias."
  },
  {
    "q": "¿Puede una instancia definir un atributo con el mismo nombre que uno de clase?",
    "a": [
      "Sí; el atributo de instancia puede ocultarlo en su búsqueda",
      "No, nunca",
      "Solo en una base de datos"
    ],
    "c": 0,
    "e": "La resolución de atributos puede encontrar primero el valor de instancia."
  },
  {
    "q": "¿Para qué sirve return en un método?",
    "a": [
      "Para devolver un resultado al llamador",
      "Para guardar siempre un archivo",
      "Para cambiar de clase automáticamente"
    ],
    "c": 0,
    "e": "Un método puede devolver un valor como cualquier función."
  },
  {
    "q": "¿Puede un objeto guardar otro objeto como atributo?",
    "a": [
      "Sí",
      "No",
      "Solo si ambos son cadenas"
    ],
    "c": 0,
    "e": "Un atributo puede referirse a otra instancia."
  },
  {
    "q": "¿Qué representa self en Cliente.__init__(self, nombre)?",
    "a": [
      "La instancia que se está inicializando",
      "El argumento de texto nombre",
      "El módulo logging"
    ],
    "c": 0,
    "e": "self permite establecer datos en la nueva instancia."
  },
  {
    "q": "¿Cómo puede un método llamar a otro de la misma instancia?",
    "a": [
      "self.otro_metodo()",
      "otro_metodo.self",
      "self = otro_metodo"
    ],
    "c": 0,
    "e": "La llamada utiliza el atributo del objeto."
  },
  {
    "q": "¿Un método de instancia puede acceder a atributos mediante self?",
    "a": [
      "Sí",
      "No",
      "Solo si son globales"
    ],
    "c": 0,
    "e": "self proporciona acceso al estado de la instancia."
  },
  {
    "q": "¿Qué comprueba isinstance(cliente, Cliente)?",
    "a": [
      "Si cliente es instancia de Cliente o una subclase",
      "Si cliente es una cadena vacía",
      "Si cliente fue impreso"
    ],
    "c": 0,
    "e": "isinstance comprueba la relación del objeto con el tipo."
  },
  {
    "q": "¿Cambiar un atributo de una instancia modifica siempre otra?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si ambas tienen nombre"
    ],
    "c": 0,
    "e": "Los atributos propios de distintas instancias pueden ser independientes."
  }
];

evaluacionesEspeciales[25] = [
  {
    "q": "¿Cómo se declara el setter de una propiedad nombre?",
    "a": [
      "Con @nombre.setter",
      "Con @nombre.import",
      "Con raise nombre"
    ],
    "c": 0,
    "e": "El decorador setter asocia la función de asignación con la propiedad."
  },
  {
    "q": "¿Qué ocurre al leer una property que calcula self.precio * 2?",
    "a": [
      "Se ejecuta su getter y devuelve el resultado",
      "Se sobrescribe necesariamente self.precio",
      "Se crea una carpeta"
    ],
    "c": 0,
    "e": "El getter se ejecuta al acceder a la propiedad."
  },
  {
    "q": "¿Qué significa una API pública de una clase?",
    "a": [
      "Los atributos y métodos destinados al uso externo",
      "Todos los detalles internos sin distinción",
      "Solo los comentarios"
    ],
    "c": 0,
    "e": "La interfaz pública comunica las operaciones que se ofrecen a quien usa la clase."
  },
  {
    "q": "¿Es obligatorio usar getters para todos los atributos en Python?",
    "a": [
      "No",
      "Sí",
      "Solo para cadenas"
    ],
    "c": 0,
    "e": "Se pueden usar atributos públicos cuando no se necesita controlar el acceso."
  },
  {
    "q": "¿Qué ocurre si un setter detecta un valor inválido y lanza una excepción antes de asignar?",
    "a": [
      "Se interrumpe la asignación del setter",
      "El valor se guarda necesariamente",
      "Python borra la instancia"
    ],
    "c": 0,
    "e": "La asignación posterior no se ejecuta si la excepción se lanza antes."
  },
  {
    "q": "¿Qué busca evitar la transformación de nombres de __atributo?",
    "a": [
      "Colisiones accidentales de nombres entre clases",
      "Cualquier forma de acceso externo",
      "El uso de objetos"
    ],
    "c": 0,
    "e": "El nombre se transforma incluyendo el nombre de la clase."
  },
  {
    "q": "¿Qué resultado suele tener una propiedad calculada sin almacenamiento propio?",
    "a": [
      "Puede derivar su valor de otros atributos",
      "Siempre guarda otra copia en disco",
      "Siempre devuelve None"
    ],
    "c": 0,
    "e": "Un getter puede calcular el valor cuando se consulta."
  },
  {
    "q": "¿Qué hace hasattr(obj, \"nombre\")?",
    "a": [
      "Comprueba si el atributo puede obtenerse",
      "Cifra el atributo",
      "Asigna None al atributo"
    ],
    "c": 0,
    "e": "hasattr consulta la existencia mediante acceso al atributo."
  },
  {
    "q": "¿Puede una property lanzar una excepción?",
    "a": [
      "Sí",
      "No",
      "Solo si tiene setter"
    ],
    "c": 0,
    "e": "El código del getter puede producir o lanzar excepciones."
  },
  {
    "q": "¿Qué ayuda a mantener una invariante?",
    "a": [
      "Validar los cambios en los puntos de entrada",
      "Permitir siempre cualquier dato sin revisión",
      "Evitar todas las clases"
    ],
    "c": 0,
    "e": "Las reglas de validación mantienen estados permitidos."
  },
  {
    "q": "¿La encapsulación requiere necesariamente doble guion bajo?",
    "a": [
      "No",
      "Sí",
      "Solo para métodos"
    ],
    "c": 0,
    "e": "Puede aplicarse con convenciones, propiedades y métodos."
  },
  {
    "q": "¿Qué permite cambiar una property internamente?",
    "a": [
      "La forma de obtener el valor manteniendo el acceso como atributo",
      "La sintaxis completa de Python",
      "El sistema operativo"
    ],
    "c": 0,
    "e": "La propiedad puede conservar una interfaz de lectura estable."
  },
  {
    "q": "¿Qué hace getattr(obj, \"edad\", None)?",
    "a": [
      "Intenta obtener edad y usa None si falta",
      "Borra edad",
      "Convierte edad en número"
    ],
    "c": 0,
    "e": "El tercer argumento es el valor por defecto cuando no se encuentra el atributo."
  },
  {
    "q": "¿Un getter debería mostrar necesariamente el valor con print?",
    "a": [
      "No; puede devolverlo",
      "Sí, siempre",
      "Solo si el valor es privado"
    ],
    "c": 0,
    "e": "Devolver el valor permite decidir cómo usarlo."
  },
  {
    "q": "¿Validar únicamente en la interfaz evita por sí solo todos los estados inválidos?",
    "a": [
      "No",
      "Sí",
      "Solo para fechas"
    ],
    "c": 0,
    "e": "Otras partes del programa también pueden construir o modificar objetos."
  }
];

evaluacionesEspeciales[26] = [
  {
    "q": "¿Qué ocurre si una hija sobrescribe un método heredado?",
    "a": [
      "La búsqueda normal puede utilizar la implementación de la hija",
      "Python ejecuta siempre solo la versión base",
      "La clase base se borra"
    ],
    "c": 0,
    "e": "La implementación de la hija tiene prioridad en la búsqueda normal."
  },
  {
    "q": "¿Puede una hija añadir atributos propios?",
    "a": [
      "Sí",
      "No",
      "Solo si elimina la clase base"
    ],
    "c": 0,
    "e": "Puede ampliar el estado de la instancia."
  },
  {
    "q": "¿Puede una hija llamar un método heredado con super().metodo()?",
    "a": [
      "Sí",
      "No",
      "Solo si el método devuelve texto"
    ],
    "c": 0,
    "e": "super permite delegar en la jerarquía de métodos."
  },
  {
    "q": "¿Qué es la MRO?",
    "a": [
      "El orden de resolución de métodos de una clase",
      "Un formato de archivo de Python",
      "Una excepción de lectura"
    ],
    "c": 0,
    "e": "La MRO determina el orden de búsqueda en la jerarquía."
  },
  {
    "q": "¿Python permite herencia múltiple?",
    "a": [
      "Sí",
      "No",
      "Solo con funciones"
    ],
    "c": 0,
    "e": "Una clase puede declarar más de una base."
  },
  {
    "q": "¿Qué ayuda a decidir si conviene heredar?",
    "a": [
      "Si la hija representa una especialización coherente de la base",
      "Si los nombres tienen la misma longitud",
      "Si se quiere evitar toda prueba"
    ],
    "c": 0,
    "e": "La relación entre tipos y comportamiento debe tener sentido."
  },
  {
    "q": "¿Qué alternativa puede servir para reutilizar comportamiento sin herencia?",
    "a": [
      "Composición",
      "Eliminar las clases",
      "Cambiar todos los valores a texto"
    ],
    "c": 0,
    "e": "La composición combina objetos con responsabilidades separadas."
  },
  {
    "q": "¿Heredar una clase ejecuta automáticamente todos sus métodos?",
    "a": [
      "No",
      "Sí",
      "Solo si tienen self"
    ],
    "c": 0,
    "e": "Los métodos se ejecutan al llamarlos, no por el hecho de heredar."
  },
  {
    "q": "¿Qué ocurre si una hija define __init__ y necesita inicializar la base?",
    "a": [
      "Puede delegar con super().__init__()",
      "Python siempre ejecuta ambos sin intervención",
      "Debe borrar la base"
    ],
    "c": 0,
    "e": "La hija puede llamar explícitamente la inicialización heredada."
  },
  {
    "q": "¿Puede una hija cambiar el resultado de un método sobrescrito?",
    "a": [
      "Sí",
      "No",
      "Solo para enteros"
    ],
    "c": 0,
    "e": "La hija puede proporcionar otro comportamiento compatible con su propósito."
  },
  {
    "q": "¿Qué devuelve issubclass(Perro, Animal) si Perro hereda de Animal?",
    "a": [
      "True",
      "False",
      "Una instancia de Perro"
    ],
    "c": 0,
    "e": "issubclass comprueba la relación entre clases."
  },
  {
    "q": "¿super() significa necesariamente llamar solo al padre directo?",
    "a": [
      "No, sigue la MRO",
      "Sí, siempre incluso con múltiples bases",
      "Solo funciona en módulos"
    ],
    "c": 0,
    "e": "La resolución de super sigue el orden MRO."
  },
  {
    "q": "¿Qué ventaja puede ofrecer una clase base?",
    "a": [
      "Centralizar comportamiento común",
      "Garantizar ausencia de errores",
      "Evitar documentación"
    ],
    "c": 0,
    "e": "Puede reunir comportamiento compartido por varias clases."
  },
  {
    "q": "¿Una clase hija puede sobrescribir __str__?",
    "a": [
      "Sí",
      "No",
      "Solo con Python 2"
    ],
    "c": 0,
    "e": "Los métodos especiales también pueden sobrescribirse."
  },
  {
    "q": "¿Conviene comprobar con pruebas los métodos heredados y sobrescritos?",
    "a": [
      "Sí",
      "No",
      "Solo si no hay constructor"
    ],
    "c": 0,
    "e": "Las pruebas ayudan a comprobar el comportamiento esperado."
  }
];

evaluacionesEspeciales[27] = [
  {
    "q": "¿Qué es duck typing?",
    "a": [
      "Usar un objeto según las operaciones que ofrece",
      "Comprobar siempre el nombre exacto de su clase",
      "Transformar objetos en diccionarios"
    ],
    "c": 0,
    "e": "Python a menudo usa objetos según su comportamiento disponible."
  },
  {
    "q": "¿Qué ocurre si se llama un método que el objeto no proporciona?",
    "a": [
      "Puede producirse AttributeError",
      "Python crea el método automáticamente",
      "Siempre se devuelve cero"
    ],
    "c": 0,
    "e": "El acceso al método falla si no está disponible."
  },
  {
    "q": "¿Una clase derivada concreta debe implementar los métodos abstractos pendientes para instanciarse?",
    "a": [
      "Sí",
      "No",
      "Solo si usa print"
    ],
    "c": 0,
    "e": "Una clase sigue siendo abstracta mientras queden métodos abstractos pendientes."
  },
  {
    "q": "¿Una implementación de un método puede llamar a super()?",
    "a": [
      "Sí",
      "No",
      "Solo si no tiene parámetros"
    ],
    "c": 0,
    "e": "Puede delegar en la implementación siguiente de la jerarquía."
  },
  {
    "q": "¿Qué devuelve una función abstracta si se llama su cuerpo explícitamente y no tiene return?",
    "a": [
      "Depende de su implementación; una función sin return devuelve None",
      "Siempre un error de sintaxis",
      "Una instancia de la subclase"
    ],
    "c": 0,
    "e": "abstractmethod marca un contrato, pero el método puede tener una implementación."
  },
  {
    "q": "¿Puede una clase abstracta tener métodos concretos?",
    "a": [
      "Sí",
      "No",
      "Solo con una base de datos"
    ],
    "c": 0,
    "e": "Puede combinar operaciones implementadas y abstractas."
  },
  {
    "q": "¿Qué ventaja ofrece programar contra una interfaz?",
    "a": [
      "Permite usar implementaciones distintas mediante operaciones comunes",
      "Garantiza que todas las implementaciones no tengan errores",
      "Impide escribir pruebas"
    ],
    "c": 0,
    "e": "Las operaciones comunes reducen el acoplamiento al tipo concreto."
  },
  {
    "q": "¿Una clase que implementa una operación con el nombre esperado puede ser útil sin heredar una base concreta?",
    "a": [
      "Sí, según las necesidades del código",
      "No, nunca",
      "Solo si es una cadena"
    ],
    "c": 0,
    "e": "El código puede usar el comportamiento disponible sin herencia explícita."
  },
  {
    "q": "¿Qué conviene verificar en implementaciones polimórficas?",
    "a": [
      "Que cada una cumpla los resultados y reglas esperados",
      "Solo el nombre de la clase",
      "Únicamente la cantidad de comentarios"
    ],
    "c": 0,
    "e": "Las pruebas deben comprobar el contrato y sus casos importantes."
  },
  {
    "q": "¿Qué ocurre si una subclase omite un método abstracto obligatorio?",
    "a": [
      "Permanece abstracta bajo ABC",
      "Se implementa sola necesariamente",
      "Python la transforma en lista"
    ],
    "c": 0,
    "e": "El método abstracto pendiente impide instanciarla normalmente."
  },
  {
    "q": "¿El polimorfismo sustituye todas las validaciones?",
    "a": [
      "No",
      "Sí",
      "Solo para servicios"
    ],
    "c": 0,
    "e": "Cada implementación debe validar sus propias reglas cuando corresponda."
  },
  {
    "q": "¿Puede una función recibir distintos objetos que tengan un método ejecutar?",
    "a": [
      "Sí",
      "No",
      "Solo si usan la misma instancia"
    ],
    "c": 0,
    "e": "Puede trabajar con objetos que proporcionen la operación requerida."
  },
  {
    "q": "¿Qué describe mejor la abstracción?",
    "a": [
      "Destacar las operaciones relevantes y ocultar detalles de implementación",
      "Eliminar todo el código",
      "Guardar contraseñas en comentarios"
    ],
    "c": 0,
    "e": "La abstracción permite usar una capacidad sin depender de cada detalle interno."
  },
  {
    "q": "¿Dos implementaciones deben producir exactamente el mismo cálculo?",
    "a": [
      "No; deben respetar el contrato correspondiente",
      "Sí, por definición siempre",
      "Solo si comparten nombre"
    ],
    "c": 0,
    "e": "El comportamiento puede variar respetando las expectativas de la operación."
  },
  {
    "q": "¿Qué es una implementación concreta?",
    "a": [
      "Una clase que proporciona el comportamiento necesario para usarse",
      "Una pregunta de selección múltiple",
      "Una variable sin valor"
    ],
    "c": 0,
    "e": "Una implementación concreta completa las operaciones requeridas."
  }
];

evaluacionesEspeciales[28] = [
  {
    "q": "¿Qué devuelve next(iter([4, 5]))?",
    "a": [
      "4",
      "5",
      "[4, 5]"
    ],
    "c": 0,
    "e": "iter crea un iterador y next obtiene su primer valor."
  },
  {
    "q": "¿Qué hace next(it, valor) si it está agotado?",
    "a": [
      "Devuelve el valor por defecto",
      "Siempre lanza TypeError",
      "Reinicia it"
    ],
    "c": 0,
    "e": "El segundo argumento se devuelve al agotarse el iterador."
  },
  {
    "q": "¿Un iterador suele ser también iterable?",
    "a": [
      "Sí",
      "No",
      "Solo si es una lista"
    ],
    "c": 0,
    "e": "Un iterador proporciona normalmente __iter__ y __next__."
  },
  {
    "q": "¿Qué método solicita el siguiente valor en el protocolo de iteración?",
    "a": [
      "__next__",
      "__init__",
      "__str__"
    ],
    "c": 0,
    "e": "__next__ proporciona el siguiente valor o lanza StopIteration."
  },
  {
    "q": "¿Qué método participa al obtener un iterador?",
    "a": [
      "__iter__",
      "__repr__",
      "__len__ exclusivamente"
    ],
    "c": 0,
    "e": "__iter__ proporciona un iterador para el objeto."
  },
  {
    "q": "¿Qué sucede con el estado local al ejecutar yield?",
    "a": [
      "Se conserva para continuar después",
      "Se borra siempre",
      "Se convierte en global"
    ],
    "c": 0,
    "e": "El generador queda suspendido con su estado."
  },
  {
    "q": "¿Qué es (x * 2 for x in numeros)?",
    "a": [
      "Una expresión generadora",
      "Una lista creada obligatoriamente",
      "Un diccionario"
    ],
    "c": 0,
    "e": "La expresión entre paréntesis produce un generador."
  },
  {
    "q": "¿Qué devuelve list(x for x in [1, 2])?",
    "a": [
      "[1, 2]",
      "Un generador sin consumir",
      "[2, 1] necesariamente"
    ],
    "c": 0,
    "e": "list consume el generador y reúne sus valores."
  },
  {
    "q": "¿Qué ventaja puede ofrecer un generador para muchos datos?",
    "a": [
      "Evitar guardar todos los resultados a la vez",
      "Garantizar que ningún cálculo falle",
      "Ordenar automáticamente"
    ],
    "c": 0,
    "e": "Los valores pueden producirse uno a uno."
  },
  {
    "q": "¿Qué hace yield from iterable?",
    "a": [
      "Delega la producción de valores al iterable",
      "Convierte todo en JSON",
      "Elimina el iterable"
    ],
    "c": 0,
    "e": "yield from puede ceder valores de otro iterable."
  },
  {
    "q": "¿Qué pasa si llamas next a un generador agotado sin valor por defecto?",
    "a": [
      "Lanza StopIteration",
      "Devuelve None siempre",
      "Reinicia el generador"
    ],
    "c": 0,
    "e": "El protocolo señala que no quedan elementos."
  },
  {
    "q": "¿Qué ocurre con for al agotarse el iterador normalmente?",
    "a": [
      "Termina el ciclo",
      "Muestra el traceback de StopIteration siempre",
      "Reinicia el iterable"
    ],
    "c": 0,
    "e": "for maneja el fin normal de la iteración."
  },
  {
    "q": "¿Un iterador garantiza poder retroceder?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si usa yield"
    ],
    "c": 0,
    "e": "El protocolo básico proporciona avance, no retroceso."
  },
  {
    "q": "¿Qué sucede si creas dos iteradores separados de una lista?",
    "a": [
      "Cada uno puede mantener su propia posición",
      "Comparten siempre una única posición",
      "Se borra la lista"
    ],
    "c": 0,
    "e": "Cada llamada a iter(lista) puede crear un iterador independiente."
  },
  {
    "q": "¿Un generador puede producir una secuencia infinita?",
    "a": [
      "Sí, si su lógica no termina",
      "No, Python lo prohíbe",
      "Solo con archivos"
    ],
    "c": 0,
    "e": "Puede generar indefinidamente, por lo que el consumidor debe limitarlo."
  }
];

evaluacionesEspeciales[29] = [
  {
    "q": "¿Qué produce [x for x in range(3)]?",
    "a": [
      "[0, 1, 2]",
      "[1, 2, 3]",
      "[0, 1, 2, 3]"
    ],
    "c": 0,
    "e": "range(3) produce 0, 1 y 2."
  },
  {
    "q": "¿Qué produce {x for x in [1, 1, 2]}?",
    "a": [
      "Un conjunto con 1 y 2",
      "Una lista de tres valores",
      "Un diccionario con dos pares"
    ],
    "c": 0,
    "e": "El conjunto elimina duplicados."
  },
  {
    "q": "¿Qué produce {x: x * 2 for x in [1, 2]}?",
    "a": [
      "{1: 2, 2: 4}",
      "[2, 4]",
      "{2: 1, 4: 2}"
    ],
    "c": 0,
    "e": "Cada x se convierte en clave y su doble en valor."
  },
  {
    "q": "¿Qué hace [x for x in []]?",
    "a": [
      "Devuelve []",
      "Produce necesariamente IndexError",
      "Devuelve None"
    ],
    "c": 0,
    "e": "No hay elementos que incluir."
  },
  {
    "q": "¿Qué produce [x for x in [1, 2, 3] if x > 1]?",
    "a": [
      "[2, 3]",
      "[1]",
      "[1, 2, 3]"
    ],
    "c": 0,
    "e": "El filtro conserva los valores mayores que 1."
  },
  {
    "q": "¿Qué forma permite elegir entre dos expresiones dentro de una comprensión?",
    "a": [
      "[a if condicion else b for x in datos]",
      "[if condicion for datos]",
      "[else for x]"
    ],
    "c": 0,
    "e": "La expresión condicional va antes del for."
  },
  {
    "q": "¿Una comprensión puede tener más de un for?",
    "a": [
      "Sí",
      "No",
      "Solo en diccionarios"
    ],
    "c": 0,
    "e": "Puede incluir recorridos anidados, aunque debe mantenerse legible."
  },
  {
    "q": "¿Qué devuelve [x * x for x in [2, 3]]?",
    "a": [
      "[4, 9]",
      "[2, 3]",
      "[4, 6]"
    ],
    "c": 0,
    "e": "Cada elemento se multiplica por sí mismo."
  },
  {
    "q": "¿Qué diferencia hay entre [x for x in datos] y (x for x in datos)?",
    "a": [
      "La primera crea una lista y la segunda un generador",
      "Ambas crean siempre una lista",
      "Ambas crean un diccionario"
    ],
    "c": 0,
    "e": "Los corchetes crean una lista y los paréntesis una expresión generadora."
  },
  {
    "q": "¿Puede el resultado de una comprensión estar vacío?",
    "a": [
      "Sí",
      "No",
      "Solo si el iterable tiene texto"
    ],
    "c": 0,
    "e": "Puede estar vacío por el iterable o por el filtro."
  },
  {
    "q": "¿Qué produce [len(x) for x in [\"a\", \"sol\"]]?",
    "a": [
      "[1, 3]",
      "[\"a\", \"sol\"]",
      "[2]"
    ],
    "c": 0,
    "e": "len calcula la longitud de cada cadena."
  },
  {
    "q": "¿Una comprensión siempre debe tener if?",
    "a": [
      "No",
      "Sí",
      "Solo si usa range"
    ],
    "c": 0,
    "e": "El filtro es opcional."
  },
  {
    "q": "¿Qué hace [x for x in datos if x]?",
    "a": [
      "Incluye los elementos verdaderos en contexto booleano",
      "Convierte todos a True",
      "Incluye solo enteros"
    ],
    "c": 0,
    "e": "La condición filtra según el valor de verdad."
  },
  {
    "q": "¿Qué puede mejorar la claridad de una comprensión?",
    "a": [
      "Usar nombres descriptivos y mantenerla sencilla",
      "Añadir todos los ciclos posibles",
      "Eliminar espacios obligatoriamente"
    ],
    "c": 0,
    "e": "La legibilidad debe guiar la elección."
  },
  {
    "q": "¿Una comprensión sustituye la necesidad de validar resultados?",
    "a": [
      "No",
      "Sí",
      "Solo con listas"
    ],
    "c": 0,
    "e": "Las pruebas también son necesarias para comprensiones."
  }
];

evaluacionesEspeciales[30] = [
  {
    "q": "¿Qué representa @d seguido de def f?",
    "a": [
      "Aproximadamente f = d(f)",
      "f = f(d) siempre",
      "import d"
    ],
    "c": 0,
    "e": "La sintaxis aplica d al objeto función."
  },
  {
    "q": "¿Cuándo se aplica normalmente el decorador de una función definida con @?",
    "a": [
      "Al ejecutar la definición de la función",
      "Solo al apagar el programa",
      "Cada vez que se importa cualquier módulo"
    ],
    "c": 0,
    "e": "La expresión del decorador se aplica cuando se ejecuta la definición."
  },
  {
    "q": "¿Un wrapper puede devolver el resultado de la función original?",
    "a": [
      "Sí",
      "No",
      "Solo si es entero"
    ],
    "c": 0,
    "e": "Puede retornar el resultado tras añadir comportamiento."
  },
  {
    "q": "¿Qué sucede si un wrapper no acepta los argumentos con los que se llama?",
    "a": [
      "Puede producirse TypeError",
      "Python los ignora siempre",
      "Se convierten automáticamente en texto"
    ],
    "c": 0,
    "e": "La firma debe ser compatible con la llamada."
  },
  {
    "q": "¿Qué hace return funcion(*args, **kwargs) dentro de wrapper?",
    "a": [
      "Llama la función con los argumentos y devuelve su resultado",
      "Devuelve los argumentos sin llamar",
      "Crea un archivo"
    ],
    "c": 0,
    "e": "Desempaqueta y reenvía ambos tipos de argumentos."
  },
  {
    "q": "¿Puede un decorador recibir configuración adicional?",
    "a": [
      "Sí, mediante una fábrica de decoradores u otro callable",
      "No",
      "Solo si es global"
    ],
    "c": 0,
    "e": "Una función exterior puede recibir opciones y devolver el decorador."
  },
  {
    "q": "¿Una función decorada sigue teniendo que probarse?",
    "a": [
      "Sí",
      "No",
      "Solo si usa clases"
    ],
    "c": 0,
    "e": "Conviene probar tanto el comportamiento original como el añadido."
  },
  {
    "q": "¿Qué puede hacer un decorador de registro?",
    "a": [
      "Registrar información sobre una llamada",
      "Cifrar todos los datos automáticamente",
      "Evitar que se ejecute la función por definición"
    ],
    "c": 0,
    "e": "Un wrapper puede registrar eventos antes o después."
  },
  {
    "q": "¿Es obligatorio usar la sintaxis @ para aplicar un decorador?",
    "a": [
      "No; también puede aplicarse mediante una asignación",
      "Sí",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "f = decorador(f) expresa la aplicación explícita."
  },
  {
    "q": "¿Qué ocurre si un decorador devuelve un objeto no invocable y luego se llama la función decorada?",
    "a": [
      "Puede producirse TypeError",
      "Python convierte el objeto en función",
      "Siempre funciona"
    ],
    "c": 0,
    "e": "El nombre queda asociado al objeto devuelto por el decorador."
  },
  {
    "q": "¿Puede un decorador implementarse con una clase callable?",
    "a": [
      "Sí",
      "No",
      "Solo con una lista"
    ],
    "c": 0,
    "e": "Una instancia con __call__ puede actuar como decorador."
  },
  {
    "q": "¿Qué aspecto puede perderse sin functools.wraps?",
    "a": [
      "Metadatos como el nombre y la documentación originales",
      "El sistema operativo",
      "La existencia del archivo"
    ],
    "c": 0,
    "e": "El wrapper puede mostrar sus propios metadatos."
  },
  {
    "q": "¿Un decorador debe modificar siempre los argumentos?",
    "a": [
      "No",
      "Sí",
      "Solo argumentos de texto"
    ],
    "c": 0,
    "e": "Puede limitarse a observar o añadir acciones sin modificarlos."
  },
  {
    "q": "¿Qué es un closure?",
    "a": [
      "Una función que puede conservar acceso a variables de un ámbito envolvente",
      "Una carpeta temporal",
      "Un error de importación"
    ],
    "c": 0,
    "e": "Una función interna puede capturar variables del entorno exterior."
  },
  {
    "q": "¿Un decorador garantiza que el código sea correcto?",
    "a": [
      "No",
      "Sí",
      "Solo si usa wraps"
    ],
    "c": 0,
    "e": "El decorador también puede contener errores y debe probarse."
  }
];

evaluacionesEspeciales[31] = [
  {
    "q": "¿Qué hace tearDown en TestCase?",
    "a": [
      "Realiza limpieza después de cada prueba",
      "Crea la clase de prueba",
      "Instala dependencias"
    ],
    "c": 0,
    "e": "tearDown permite liberar recursos tras una prueba."
  },
  {
    "q": "¿Qué comando puede descubrir pruebas con unittest?",
    "a": [
      "python -m unittest discover",
      "python -m print tests",
      "python install unittest"
    ],
    "c": 0,
    "e": "unittest discover busca pruebas según su configuración."
  },
  {
    "q": "¿Un método de prueba de unittest suele comenzar por qué prefijo?",
    "a": [
      "test_",
      "checkfile_",
      "main_"
    ],
    "c": 0,
    "e": "El descubrimiento de unittest usa habitualmente el prefijo test."
  },
  {
    "q": "¿Qué comprueba assertIsNone(valor)?",
    "a": [
      "Que el valor sea None",
      "Que sea una cadena vacía",
      "Que sea cero"
    ],
    "c": 0,
    "e": "assertIsNone verifica identidad con None."
  },
  {
    "q": "¿Qué comprueba assertIn(elemento, coleccion)?",
    "a": [
      "Que el elemento pertenezca a la colección",
      "Que ambos sean idénticos",
      "Que la colección esté vacía"
    ],
    "c": 0,
    "e": "assertIn comprueba pertenencia."
  },
  {
    "q": "¿Una prueba debe depender necesariamente del orden de otras pruebas?",
    "a": [
      "No",
      "Sí",
      "Solo si usa assertEqual"
    ],
    "c": 0,
    "e": "Es preferible que las pruebas sean independientes."
  },
  {
    "q": "¿Qué es una prueba de regresión?",
    "a": [
      "Una prueba para evitar que reaparezca un fallo corregido",
      "Una prueba que borra datos de producción",
      "Un comentario de código"
    ],
    "c": 0,
    "e": "Ayuda a detectar si un fallo vuelve a aparecer."
  },
  {
    "q": "¿Qué es una prueba unitaria?",
    "a": [
      "Una prueba de una unidad de comportamiento en un contexto controlado",
      "Una prueba que exige toda la infraestructura real",
      "Un archivo sin aserciones"
    ],
    "c": 0,
    "e": "Se centra en una parte acotada del comportamiento."
  },
  {
    "q": "¿Qué es mock en pruebas?",
    "a": [
      "Una herramienta para sustituir o simular una dependencia",
      "Un cifrado de contraseñas",
      "Una base de datos obligatoria"
    ],
    "c": 0,
    "e": "Los dobles permiten controlar dependencias durante una prueba."
  },
  {
    "q": "¿Qué permite unittest.mock.patch?",
    "a": [
      "Sustituir temporalmente un objeto durante una prueba",
      "Publicar el proyecto",
      "Evitar que Python importe módulos"
    ],
    "c": 0,
    "e": "patch reemplaza temporalmente una referencia para controlar el entorno."
  },
  {
    "q": "¿Por qué probar una excepción esperada?",
    "a": [
      "Para comprobar que se rechaza una operación inválida",
      "Para obligar a que toda operación falle",
      "Para evitar usar mensajes"
    ],
    "c": 0,
    "e": "Permite verificar el manejo de situaciones inválidas."
  },
  {
    "q": "¿Una prueba que solo repite la implementación aporta siempre suficiente confianza?",
    "a": [
      "No",
      "Sí",
      "Solo si usa print"
    ],
    "c": 0,
    "e": "Es mejor comprobar comportamiento observable y casos relevantes."
  },
  {
    "q": "¿Todas las pruebas que pasan garantizan que el programa no tenga errores?",
    "a": [
      "No",
      "Sí",
      "Solo si hay diez"
    ],
    "c": 0,
    "e": "Las pruebas cubren los casos ejecutados, no todas las posibilidades."
  },
  {
    "q": "¿Qué conviene comprobar tras corregir un fallo?",
    "a": [
      "El caso que fallaba y los comportamientos relacionados",
      "Solo el color de la interfaz",
      "Que no haya comentarios"
    ],
    "c": 0,
    "e": "Una prueba de regresión puede evitar que reaparezca."
  },
  {
    "q": "¿Qué significa aislar datos de prueba?",
    "a": [
      "Preparar datos controlados sin depender de estados ajenos",
      "Usar siempre información real",
      "Desactivar todas las validaciones"
    ],
    "c": 0,
    "e": "Los datos controlados mejoran la repetibilidad."
  }
];

evaluacionesEspeciales[32] = [
  {
    "q": "¿Qué valor Python corresponde a false en JSON?",
    "a": [
      "False",
      "None",
      "\"false\""
    ],
    "c": 0,
    "e": "El booleano JSON false se decodifica como False."
  },
  {
    "q": "¿Qué diferencia hay entre load y loads?",
    "a": [
      "load lee desde un archivo; loads desde una cadena",
      "Ambos solo escriben archivos",
      "loads solo acepta listas"
    ],
    "c": 0,
    "e": "La s indica que trabaja con una cadena de entrada."
  },
  {
    "q": "¿Qué diferencia hay entre dump y dumps?",
    "a": [
      "dump escribe a un archivo; dumps devuelve una cadena",
      "Ambos solo leen archivos",
      "dumps cierra siempre el programa"
    ],
    "c": 0,
    "e": "dump escribe al flujo y dumps produce texto."
  },
  {
    "q": "¿Qué ocurre al analizar texto JSON mal formado?",
    "a": [
      "Puede producirse JSONDecodeError",
      "Siempre se corrige automáticamente",
      "Se devuelve un diccionario vacío"
    ],
    "c": 0,
    "e": "El analizador informa que el texto no cumple la sintaxis."
  },
  {
    "q": "¿JSON admite comentarios con # como sintaxis estándar?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo dentro de números"
    ],
    "c": 0,
    "e": "El estándar JSON no define comentarios con #."
  },
  {
    "q": "¿Cómo se escriben normalmente las claves de un objeto JSON?",
    "a": [
      "Como cadenas entre comillas dobles",
      "Como nombres sin comillas siempre",
      "Como clases de Python"
    ],
    "c": 0,
    "e": "La sintaxis JSON requiere nombres de propiedad como cadenas."
  },
  {
    "q": "¿Un texto con comillas simples para claves es JSON estándar válido?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si contiene números"
    ],
    "c": 0,
    "e": "La sintaxis JSON utiliza comillas dobles para cadenas."
  },
  {
    "q": "¿Qué parámetro de dumps facilita una salida con sangría?",
    "a": [
      "indent",
      "append",
      "sep_file"
    ],
    "c": 0,
    "e": "indent permite dar formato al texto serializado."
  },
  {
    "q": "¿Qué hace ensure_ascii=False en json.dumps?",
    "a": [
      "Permite conservar caracteres no ASCII en la cadena resultante",
      "Cifra el JSON",
      "Valida una contraseña"
    ],
    "c": 0,
    "e": "El parámetro controla el escape de caracteres no ASCII."
  },
  {
    "q": "¿Puede json.dumps serializar cualquier objeto Python sin personalización?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si hereda de int"
    ],
    "c": 0,
    "e": "Algunos objetos requieren un conversor personalizado."
  },
  {
    "q": "¿Qué conviene hacer al leer JSON externo?",
    "a": [
      "Validar la estructura y los datos esperados",
      "Confiar en cualquier contenido",
      "Ejecutarlo como código Python"
    ],
    "c": 0,
    "e": "El contenido puede ser incorrecto o no cumplir las reglas de la aplicación."
  },
  {
    "q": "¿Una cadena JSON es lo mismo que un diccionario Python?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si está vacía"
    ],
    "c": 0,
    "e": "Una es texto y el otro es un objeto en memoria."
  },
  {
    "q": "¿Qué produce json.loads(\"[1, 2]\")?",
    "a": [
      "La lista [1, 2]",
      "La cadena \"[1, 2]\"",
      "El conjunto {1, 2}"
    ],
    "c": 0,
    "e": "El arreglo JSON se convierte en una lista."
  },
  {
    "q": "¿Para qué sirve una codificación explícita UTF-8 al trabajar con JSON en archivo de texto?",
    "a": [
      "Para interpretar y escribir correctamente los caracteres",
      "Para convertir JSON en Python ejecutable",
      "Para evitar todas las excepciones"
    ],
    "c": 0,
    "e": "La codificación controla la conversión entre texto y bytes."
  },
  {
    "q": "¿JSON conserva automáticamente todos los tipos propios de Python?",
    "a": [
      "No",
      "Sí, todos",
      "Solo si se usa print"
    ],
    "c": 0,
    "e": "JSON tiene sus propios tipos y no representa directamente todos los objetos Python."
  }
];

evaluacionesEspeciales[33] = [
  {
    "q": "¿Qué comando instala dependencias desde requirements.txt?",
    "a": [
      "python -m pip install -r requirements.txt",
      "python requirements.txt",
      "pip remove requirements.txt"
    ],
    "c": 0,
    "e": "La opción -r lee los requisitos del archivo."
  },
  {
    "q": "¿Por qué conviene ignorar .venv en Git?",
    "a": [
      "Se puede reconstruir y contiene archivos locales",
      "Porque borra los archivos del proyecto",
      "Porque Git no admite directorios"
    ],
    "c": 0,
    "e": "Un entorno puede ser grande y específico de la máquina."
  },
  {
    "q": "¿Qué significa fijar una versión con requests==2.31.0?",
    "a": [
      "Solicitar esa versión específica",
      "Actualizar siempre a la última",
      "Eliminar requests"
    ],
    "c": 0,
    "e": "El operador == indica una versión exacta en un requisito."
  },
  {
    "q": "¿Qué muestra python -m pip --version?",
    "a": [
      "La versión de pip y su ubicación",
      "La contraseña de GitHub",
      "El contenido de una lista"
    ],
    "c": 0,
    "e": "La salida ayuda a identificar qué instalación de pip se ejecuta."
  },
  {
    "q": "¿Crear un entorno instala automáticamente todos los paquetes de tu proyecto?",
    "a": [
      "No, hay que instalarlos",
      "Sí, siempre consulta requirements.txt",
      "Solo si el proyecto usa Git"
    ],
    "c": 0,
    "e": "venv crea el entorno; sus dependencias deben instalarse aparte."
  },
  {
    "q": "¿Qué efecto tiene deactivate tras activar un entorno?",
    "a": [
      "Restaura la configuración anterior de la terminal",
      "Elimina el entorno del disco",
      "Desinstala Python"
    ],
    "c": 0,
    "e": "deactivate termina la activación en esa sesión de terminal."
  },
  {
    "q": "¿Cuál es una ventaja de python -m pip frente a pip?",
    "a": [
      "Usa pip asociado al intérprete invocado",
      "Impide cualquier error de red",
      "No necesita Python instalado"
    ],
    "c": 0,
    "e": "Es útil para evitar instalar en un intérprete diferente."
  },
  {
    "q": "¿Qué ocurre si falta una dependencia importada?",
    "a": [
      "Puede producirse ModuleNotFoundError",
      "Python la instala siempre",
      "Se borra el módulo actual"
    ],
    "c": 0,
    "e": "La dependencia debe estar disponible para ese intérprete."
  },
  {
    "q": "¿Un entorno virtual es una máquina virtual completa?",
    "a": [
      "No, aísla principalmente el entorno de Python",
      "Sí, incluye otro sistema operativo",
      "Sí, necesita un hipervisor"
    ],
    "c": 0,
    "e": "Un entorno virtual no proporciona aislamiento de sistema completo."
  },
  {
    "q": "¿Qué práctica facilita reproducir instalaciones?",
    "a": [
      "Documentar versiones de dependencias",
      "Omitir dependencias del proyecto",
      "Copiar contraseñas en README"
    ],
    "c": 0,
    "e": "Registrar versiones ayuda a recrear el entorno."
  },
  {
    "q": "¿Dónde se ejecuta normalmente python -m venv .venv?",
    "a": [
      "En la terminal",
      "Dentro de una cadena Python",
      "En un comentario únicamente"
    ],
    "c": 0,
    "e": "Es un comando del sistema, no una sentencia Python."
  },
  {
    "q": "¿Un módulo estándar como json requiere instalarse con pip normalmente?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo con un entorno virtual"
    ],
    "c": 0,
    "e": "json pertenece a la biblioteca estándar de Python."
  },
  {
    "q": "¿Qué muestra pip freeze?",
    "a": [
      "Versiones instaladas en formato de requisitos",
      "Solo los archivos .py",
      "La memoria libre"
    ],
    "c": 0,
    "e": "Su salida se usa con frecuencia para registrar dependencias."
  },
  {
    "q": "¿Qué hace from math import sqrt?",
    "a": [
      "Importa sqrt desde math",
      "Instala automáticamente math desde internet",
      "Crea un entorno"
    ],
    "c": 0,
    "e": "math es un módulo estándar y sqrt es una de sus funciones."
  },
  {
    "q": "Si dos proyectos necesitan versiones distintas, ¿qué ayuda?",
    "a": [
      "Crear un entorno virtual para cada proyecto",
      "Compartir una sola instalación sin control",
      "Eliminar ambos proyectos"
    ],
    "c": 0,
    "e": "Cada entorno puede tener sus propias dependencias."
  }
];

evaluacionesEspeciales[34] = [
  {
    "q": "¿Es válido llamar una función anotada con otro tipo en tiempo de ejecución?",
    "a": [
      "Puede serlo; depende de lo que haga la función",
      "Nunca, Python siempre lo impide",
      "Solo si está vacía"
    ],
    "c": 0,
    "e": "La anotación por sí sola no valida los argumentos."
  },
  {
    "q": "¿Qué representa dict[str, int]?",
    "a": [
      "Un diccionario con claves de texto y valores enteros esperados",
      "Una lista de textos",
      "Una función sin argumentos"
    ],
    "c": 0,
    "e": "La anotación describe las claves y los valores esperados."
  },
  {
    "q": "¿Qué muestra __annotations__ en una función?",
    "a": [
      "Sus anotaciones registradas",
      "Todas las variables del computador",
      "Solo el código fuente"
    ],
    "c": 0,
    "e": "La información de anotaciones puede consultarse en ese atributo."
  },
  {
    "q": "¿Anotar un valor elimina la necesidad de validar entradas externas?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo con cadenas"
    ],
    "c": 0,
    "e": "Los datos externos aún necesitan validación en ejecución."
  },
  {
    "q": "¿Qué diferencia hay entre anotación y conversión?",
    "a": [
      "La anotación describe; int(valor) intenta convertir",
      "Ambas convierten automáticamente",
      "Ninguna"
    ],
    "c": 0,
    "e": "Una conversión ejecuta una operación; una anotación comunica un tipo."
  },
  {
    "q": "¿Qué expresa def saludar(nombre: str) -> str?",
    "a": [
      "Recibe texto esperado y declara un retorno de texto",
      "Imprime sin poder retornar",
      "Acepta solo archivos"
    ],
    "c": 0,
    "e": "La firma comunica los tipos previstos de entrada y salida."
  },
  {
    "q": "¿Qué indica tuple[int, str]?",
    "a": [
      "Una tupla esperada con entero y texto",
      "Un conjunto de dos enteros",
      "Un diccionario mutable"
    ],
    "c": 0,
    "e": "Describe una tupla de dos posiciones con tipos concretos."
  },
  {
    "q": "¿Cuál es una ventaja de anotar tipos?",
    "a": [
      "Facilitar lectura, autocompletado y revisión",
      "Garantizar que no existen errores",
      "Eliminar pruebas"
    ],
    "c": 0,
    "e": "Las anotaciones ayudan a herramientas y a quienes leen el código."
  },
  {
    "q": "¿Qué sucede con x: int = \"hola\" sin un validador adicional?",
    "a": [
      "La asignación puede ejecutarse",
      "Python siempre cambia hola por 0",
      "Se instala mypy"
    ],
    "c": 0,
    "e": "El intérprete normalmente no impone la anotación al asignar."
  },
  {
    "q": "¿Qué significa Optional[int] de typing?",
    "a": [
      "int o None",
      "Una lista de enteros",
      "Un entero obligatorio mayor que cero"
    ],
    "c": 0,
    "e": "Optional representa una unión con None."
  },
  {
    "q": "¿Puede una anotación especificar si un entero es positivo por sí sola?",
    "a": [
      "No, normalmente se necesita validación adicional",
      "Sí, int siempre es positivo",
      "Solo con print"
    ],
    "c": 0,
    "e": "El tipo int incluye valores negativos, cero y positivos."
  },
  {
    "q": "¿Qué expresa list[str] para una lista vacía?",
    "a": [
      "Se esperan textos cuando tenga elementos",
      "Que ya contiene un texto",
      "Que no puede agregarse nada"
    ],
    "c": 0,
    "e": "La anotación describe el tipo previsto, no crea elementos."
  },
  {
    "q": "¿Qué hace return en def f() -> int?",
    "a": [
      "Devuelve un valor; la anotación comunica el tipo esperado",
      "Imprime obligatoriamente",
      "Convierte siempre el resultado"
    ],
    "c": 0,
    "e": "return y la anotación tienen funciones diferentes."
  },
  {
    "q": "¿Son las anotaciones un sustituto de las pruebas?",
    "a": [
      "No, se complementan",
      "Sí, impiden toda excepción",
      "Solo en funciones pequeñas"
    ],
    "c": 0,
    "e": "Las pruebas verifican comportamientos que los tipos no cubren."
  },
  {
    "q": "¿Qué opción representa una función que podría devolver texto o None?",
    "a": [
      "def buscar() -> Optional[str]",
      "def buscar() -> int solamente",
      "def buscar() -> bool solamente"
    ],
    "c": 0,
    "e": "La unión expresa ambas posibilidades de retorno."
  }
];

evaluacionesEspeciales[35] = [
  {
    "q": "¿Es obligatorio asignar el resultado con as en todo with?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "Se puede usar with sin as si no se necesita el valor de entrada."
  },
  {
    "q": "¿Qué módulo facilita crear gestores con un generador?",
    "a": [
      "contextlib",
      "random",
      "math"
    ],
    "c": 0,
    "e": "contextlib incluye el decorador contextmanager."
  },
  {
    "q": "¿Qué ocurre si __exit__ devuelve True ante una excepción?",
    "a": [
      "Puede suprimir esa excepción",
      "Reinicia Python",
      "Abre otro archivo automáticamente"
    ],
    "c": 0,
    "e": "Un valor verdadero señala que la excepción se ha manejado."
  },
  {
    "q": "¿Qué ocurre si __exit__ devuelve False ante una excepción?",
    "a": [
      "La excepción sigue propagándose",
      "La excepción desaparece siempre",
      "El bloque vuelve a empezar"
    ],
    "c": 0,
    "e": "Un valor falso no suprime el error."
  },
  {
    "q": "¿with garantiza que open siempre tenga éxito?",
    "a": [
      "No, abrir el archivo puede fallar",
      "Sí, crea cualquier ruta automáticamente",
      "Sí, incluso sin permisos"
    ],
    "c": 0,
    "e": "La apertura puede lanzar excepciones como FileNotFoundError o PermissionError."
  },
  {
    "q": "¿Qué patrón complementa with al manejar una ruta inexistente?",
    "a": [
      "Capturar FileNotFoundError cuando corresponda",
      "Ignorar todos los errores",
      "Usar print sin abrir el archivo"
    ],
    "c": 0,
    "e": "Una excepción específica permite informar que falta el archivo."
  },
  {
    "q": "¿Qué hace archivo.read() en modo texto?",
    "a": [
      "Lee el contenido como texto",
      "Borra el archivo",
      "Devuelve el tamaño del disco"
    ],
    "c": 0,
    "e": "read recupera el contenido disponible del archivo."
  },
  {
    "q": "¿Qué ocurre al ejecutar archivo.write(\"Hola\") en modo texto escribible?",
    "a": [
      "Escribe esos caracteres",
      "Ejecuta Hola como Python",
      "Elimina la carpeta"
    ],
    "c": 0,
    "e": "write añade los caracteres en la posición actual del archivo."
  },
  {
    "q": "¿Puede with gestionar otros recursos además de archivos?",
    "a": [
      "Sí, si implementan el protocolo de contexto",
      "No, solo archivos .txt",
      "Solo números"
    ],
    "c": 0,
    "e": "Los gestores pueden organizar recursos como bloqueos o conexiones."
  },
  {
    "q": "¿Qué relación tiene with con try/finally?",
    "a": [
      "Ambos pueden garantizar limpieza al salir de un bloque",
      "Son idénticos en toda situación",
      "finally instala paquetes"
    ],
    "c": 0,
    "e": "with encapsula el patrón de preparación y limpieza mediante el protocolo."
  },
  {
    "q": "¿Qué devuelve archivo.closed después de salir del bloque with normal?",
    "a": [
      "True",
      "False siempre",
      "El contenido"
    ],
    "c": 0,
    "e": "La propiedad closed indica que el archivo ya está cerrado."
  },
  {
    "q": "¿Qué error puede ocurrir al leer un archivo después de cerrarlo?",
    "a": [
      "ValueError",
      "ZeroDivisionError",
      "StopIteration siempre"
    ],
    "c": 0,
    "e": "Las operaciones sobre un archivo cerrado suelen lanzar ValueError."
  },
  {
    "q": "¿Cuál es un riesgo de usar w para actualizar información?",
    "a": [
      "Perder el contenido anterior",
      "Duplicar automáticamente todos los datos",
      "Crear un entorno virtual"
    ],
    "c": 0,
    "e": "w sobrescribe, por lo que hay que elegir el modo con cuidado."
  },
  {
    "q": "¿Para qué sirve finally en una implementación manual de limpieza?",
    "a": [
      "Ejecutar acciones al salir aunque haya error",
      "Evitar que se abra el recurso",
      "Convertir errores en texto automáticamente"
    ],
    "c": 0,
    "e": "finally puede liberar un recurso incluso si el bloque falla."
  },
  {
    "q": "¿Qué hace with open(\"n.txt\", encoding=\"utf-8\") as f por defecto?",
    "a": [
      "Abre el archivo existente para leer texto",
      "Lo borra",
      "Lo abre siempre para agregar"
    ],
    "c": 0,
    "e": "Si no se especifica modo, open utiliza r."
  }
];

evaluacionesEspeciales[36] = [
  {
    "q": "¿Qué función permite esperar varios resultados de corrutinas?",
    "a": [
      "asyncio.gather",
      "json.dumps",
      "str.strip"
    ],
    "c": 0,
    "e": "gather reúne los resultados de objetos esperables."
  },
  {
    "q": "¿Qué puede ocurrir si se usa time.sleep dentro de una corrutina?",
    "a": [
      "Bloquea el hilo del bucle durante la pausa",
      "Cede automáticamente a otras tareas",
      "Convierte el código en paralelo"
    ],
    "c": 0,
    "e": "time.sleep bloquea; asyncio.sleep permite espera cooperativa."
  },
  {
    "q": "¿Qué necesita asyncio.create_task para funcionar?",
    "a": [
      "Un bucle de eventos activo en el hilo",
      "Una base de datos obligatoria",
      "Un archivo requirements.txt"
    ],
    "c": 0,
    "e": "create_task programa en el bucle que está ejecutándose."
  },
  {
    "q": "¿Qué hace return dentro de async def?",
    "a": [
      "Produce el resultado que recibe quien espera la corrutina",
      "Imprime automáticamente",
      "Lanza StopIteration al usuario"
    ],
    "c": 0,
    "e": "await puede recibir el valor devuelto por la corrutina."
  },
  {
    "q": "¿Una función bloqueante se vuelve asíncrona solo por llamarla desde async def?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo cuando devuelve texto"
    ],
    "c": 0,
    "e": "El trabajo bloqueante puede detener el bucle si no se adapta."
  },
  {
    "q": "¿Qué caracteriza la concurrencia?",
    "a": [
      "Varias tareas progresan durante un mismo periodo",
      "Todas usan obligatoriamente procesadores distintos",
      "No se manejan errores"
    ],
    "c": 0,
    "e": "La concurrencia organiza avances que pueden alternarse."
  },
  {
    "q": "¿Qué es una operación de entrada y salida?",
    "a": [
      "Leer un archivo o esperar una respuesta de red",
      "Sumar dos enteros exclusivamente",
      "Declarar una variable"
    ],
    "c": 0,
    "e": "E/S involucra comunicación o acceso a recursos externos."
  },
  {
    "q": "¿Qué debe hacerse con errores de red en tareas asíncronas?",
    "a": [
      "Capturarlos y gestionarlos cuando corresponda",
      "Suponer que nunca ocurren",
      "Ocultarlos siempre"
    ],
    "c": 0,
    "e": "Las operaciones asíncronas también pueden fallar."
  },
  {
    "q": "¿Qué sucede con el resultado de asyncio.gather por defecto?",
    "a": [
      "Se devuelve una secuencia de resultados en orden de argumentos",
      "Se imprime automáticamente",
      "Se guarda en JSON"
    ],
    "c": 0,
    "e": "gather reúne resultados siguiendo el orden de los objetos enviados."
  },
  {
    "q": "¿Qué devuelve llamar async def f(): return 3 mediante f()?",
    "a": [
      "Una corrutina",
      "El entero 3 directamente",
      "Una lista con 3"
    ],
    "c": 0,
    "e": "El valor 3 se obtiene al ejecutar y esperar la corrutina."
  },
  {
    "q": "¿Qué sucede si una corrutina nunca se espera ni programa?",
    "a": [
      "No se ejecuta normalmente y puede aparecer una advertencia",
      "Se ejecuta dos veces",
      "Se guarda como archivo"
    ],
    "c": 0,
    "e": "Crear una corrutina no basta para que su cuerpo avance."
  },
  {
    "q": "¿Qué hace await f() si f devuelve 3 al terminar?",
    "a": [
      "Recibe 3 como resultado",
      "Recibe la palabra await",
      "Convierte 3 en texto"
    ],
    "c": 0,
    "e": "await obtiene el resultado cuando la corrutina termina."
  },
  {
    "q": "¿Cuál es una buena situación para usar asyncio?",
    "a": [
      "Esperar muchas respuestas de red compatibles",
      "Acelerar por sí solo un cálculo de CPU intensivo",
      "Sustituir todo uso de funciones"
    ],
    "c": 0,
    "e": "La espera de red es un caso habitual de concurrencia asíncrona."
  },
  {
    "q": "¿Qué función de asyncio puede ejecutar una función bloqueante en otro hilo?",
    "a": [
      "asyncio.to_thread",
      "asyncio.sleep",
      "asyncio.run dentro de cada función"
    ],
    "c": 0,
    "e": "to_thread ayuda a evitar que ciertas llamadas bloqueen el bucle."
  },
  {
    "q": "¿Qué conviene establecer para una petición de red?",
    "a": [
      "Un límite de espera y manejo de fallos",
      "Una espera infinita sin manejo",
      "Una contraseña en el código"
    ],
    "c": 0,
    "e": "Los tiempos de espera y las excepciones permiten responder a fallos de red."
  }
];

evaluacionesEspeciales[37] = [
  {
    "q": "¿Qué hace rollback?",
    "a": [
      "Revierte los cambios no confirmados de la transacción",
      "Confirma los cambios",
      "Muestra todas las tablas"
    ],
    "c": 0,
    "e": "rollback deshace las modificaciones pendientes de la transacción."
  },
  {
    "q": "¿Qué valor de Python corresponde normalmente a SQL NULL?",
    "a": [
      "None",
      "False siempre",
      "La cadena \"null\""
    ],
    "c": 0,
    "e": "El controlador adapta None al valor SQL NULL."
  },
  {
    "q": "¿Qué hace cursor.fetchone()?",
    "a": [
      "Obtiene la siguiente fila del resultado",
      "Elimina la tabla",
      "Confirma la transacción"
    ],
    "c": 0,
    "e": "fetchone devuelve una fila o None si no quedan filas."
  },
  {
    "q": "¿Qué hace cursor.fetchall()?",
    "a": [
      "Obtiene las filas restantes del resultado",
      "Borra los registros",
      "Crea una conexión"
    ],
    "c": 0,
    "e": "fetchall reúne las filas pendientes en una lista."
  },
  {
    "q": "¿Qué filtra WHERE en una consulta?",
    "a": [
      "Las filas que cumplen una condición",
      "El nombre de Python",
      "La versión de Windows"
    ],
    "c": 0,
    "e": "WHERE limita las filas consideradas por la operación."
  },
  {
    "q": "¿Por qué no conviene concatenar entradas del usuario en SQL?",
    "a": [
      "Puede permitir inyección SQL",
      "Porque Python prohíbe cadenas",
      "Porque SQLite solo acepta números"
    ],
    "c": 0,
    "e": "Los parámetros evitan interpretar los valores como parte de la estructura SQL."
  },
  {
    "q": "¿Se pueden usar marcadores ? para sustituir directamente nombres de tablas?",
    "a": [
      "No, los parámetros representan valores",
      "Sí, cualquier parte de SQL",
      "Solo nombres de usuario"
    ],
    "c": 0,
    "e": "Los identificadores requieren una estrategia separada y validada."
  },
  {
    "q": "¿Un archivo SQLite guardado en disco puede persistir al cerrar la aplicación?",
    "a": [
      "Sí",
      "No, siempre se borra",
      "Solo si se usa internet"
    ],
    "c": 0,
    "e": "Una base SQLite en archivo puede conservar sus datos entre ejecuciones."
  },
  {
    "q": "¿Qué debe hacerse con tokens y contraseñas?",
    "a": [
      "Mantenerlos fuera del repositorio público y protegerlos",
      "Publicarlos en README",
      "Incluirlos en todas las consultas"
    ],
    "c": 0,
    "e": "Las credenciales deben tratarse como información sensible."
  },
  {
    "q": "¿Qué puede ocurrir al insertar un valor que viola una restricción UNIQUE?",
    "a": [
      "Puede lanzarse sqlite3.IntegrityError",
      "Se imprime el valor sin guardarlo siempre",
      "Se instala SQLite de nuevo"
    ],
    "c": 0,
    "e": "La base puede rechazar registros que incumplen restricciones."
  },
  {
    "q": "¿Qué consulta recupera nombres de la tabla clientes?",
    "a": [
      "SELECT nombre FROM clientes",
      "INSERT nombre FROM clientes",
      "CREATE nombre IN clientes"
    ],
    "c": 0,
    "e": "SELECT indica las columnas y FROM identifica la tabla."
  },
  {
    "q": "¿Cuál es el resultado de fetchone si ya no quedan filas?",
    "a": [
      "None",
      "Una excepción en todos los casos",
      "El número cero"
    ],
    "c": 0,
    "e": "fetchone devuelve None cuando el resultado se agotó."
  },
  {
    "q": "¿Qué representa una transacción?",
    "a": [
      "Un conjunto de cambios que puede confirmarse o revertirse",
      "Una lista de módulos instalados",
      "Un tipo de variable de Python"
    ],
    "c": 0,
    "e": "Las transacciones ayudan a mantener consistencia de los cambios."
  },
  {
    "q": "¿with conexion en sqlite3 cierra automáticamente la conexión al salir?",
    "a": [
      "No, gestiona la transacción; la conexión debe cerrarse aparte",
      "Sí, siempre cierra la conexión",
      "Sí, y borra el archivo"
    ],
    "c": 0,
    "e": "El gestor de sqlite3 confirma o revierte la transacción, pero no cierra la conexión."
  },
  {
    "q": "¿Qué parámetro es correcto para un único valor en sqlite3?",
    "a": [
      "(nombre,)",
      "(nombre)",
      "[nombre, None] siempre"
    ],
    "c": 0,
    "e": "La coma crea una tupla de un elemento para pasar como parámetros."
  }
];

evaluacionesEspeciales[38] = [
  {
    "q": "¿Qué hace urllib.parse.urlencode?",
    "a": [
      "Construye una cadena de parámetros codificados",
      "Ejecuta una consulta SQL",
      "Convierte texto en una clase"
    ],
    "c": 0,
    "e": "urlencode codifica pares clave y valor para una consulta URL."
  },
  {
    "q": "¿Qué devuelve urlencode({\"nombre\": \"Ana\"})?",
    "a": [
      "nombre=Ana",
      "{\"nombre\": \"Ana\"}",
      "nombre:Ana"
    ],
    "c": 0,
    "e": "Se obtiene una cadena de consulta con clave y valor."
  },
  {
    "q": "¿Qué devuelve json.loads('{\"estado\":\"ok\"}')['estado']?",
    "a": [
      "ok",
      "estado",
      "None"
    ],
    "c": 0,
    "e": "loads crea un diccionario y la clave estado contiene ok."
  },
  {
    "q": "¿Qué parte de una URL suele contener parámetros de consulta?",
    "a": [
      "La parte posterior a ?",
      "El nombre de una función Python",
      "El tipo de dato bool"
    ],
    "c": 0,
    "e": "Los parámetros de consulta suelen aparecer después del signo de interrogación."
  },
  {
    "q": "¿Qué comunica el encabezado Content-Type: application/json?",
    "a": [
      "El contenido usa formato JSON",
      "La solicitud fue exitosa necesariamente",
      "La contraseña es válida"
    ],
    "c": 0,
    "e": "Content-Type describe el formato del cuerpo del mensaje."
  },
  {
    "q": "¿Qué diferencia hay entre una API y JSON?",
    "a": [
      "Una API define una interfaz; JSON es un formato de datos",
      "Son exactamente lo mismo",
      "JSON solo sirve para archivos de imagen"
    ],
    "c": 0,
    "e": "Una API puede intercambiar datos en JSON u otros formatos."
  },
  {
    "q": "¿Una solicitud HTTP exitosa garantiza que el contenido tenga las claves esperadas?",
    "a": [
      "No, también hay que validar la respuesta",
      "Sí, siempre",
      "Solo si se usa GET"
    ],
    "c": 0,
    "e": "El estado y el contenido son comprobaciones distintas."
  },
  {
    "q": "¿Qué excepción puede ocurrir al interpretar JSON inválido?",
    "a": [
      "json.JSONDecodeError",
      "ZeroDivisionError siempre",
      "StopAsyncIteration siempre"
    ],
    "c": 0,
    "e": "loads rechaza texto que no cumple el formato JSON."
  },
  {
    "q": "¿Qué diferencia hay entre 4xx y 5xx?",
    "a": [
      "4xx suele indicar problemas de la solicitud y 5xx del servidor",
      "Ambos significan éxito",
      "4xx solo existe en Python"
    ],
    "c": 0,
    "e": "Estas familias describen categorías distintas de respuestas HTTP."
  },
  {
    "q": "¿Qué significa HTTPS?",
    "a": [
      "HTTP protegido mediante TLS",
      "Un tipo de diccionario",
      "Una variante de print"
    ],
    "c": 0,
    "e": "TLS protege la comunicación, aunque no garantiza que un servicio sea confiable."
  },
  {
    "q": "¿Es seguro registrar un token completo en un archivo de logs compartido?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo cuando empieza por letras"
    ],
    "c": 0,
    "e": "Los registros también pueden exponer credenciales."
  },
  {
    "q": "¿Qué debe hacer una aplicación si una API no responde?",
    "a": [
      "Manejar el tiempo de espera y comunicar el fallo",
      "Esperar para siempre sin informar",
      "Borrar los datos locales"
    ],
    "c": 0,
    "e": "La gestión de fallos ayuda a que la aplicación se recupere o informe."
  },
  {
    "q": "¿Una respuesta JSON que contiene [1, 2] se convierte con loads en qué?",
    "a": [
      "Una lista de Python",
      "Una tupla obligatoriamente",
      "Una función"
    ],
    "c": 0,
    "e": "Un arreglo JSON se interpreta normalmente como una lista."
  },
  {
    "q": "¿Qué devuelve urlencode({\"ciudad\": \"San Juan\"}) normalmente?",
    "a": [
      "ciudad=San+Juan",
      "ciudad=San Juan sin codificar",
      "San Juan=ciudad"
    ],
    "c": 0,
    "e": "urlencode codifica los espacios de los valores para una consulta."
  },
  {
    "q": "¿Todas las API públicas usan exactamente los mismos campos y métodos?",
    "a": [
      "No, hay que revisar su documentación",
      "Sí, todas tienen idénticas respuestas",
      "Solo si usan Python"
    ],
    "c": 0,
    "e": "Cada API define su propio contrato y condiciones."
  }
];

evaluacionesEspeciales[39] = [
  {
    "q": "¿Qué devuelve calcular_total(10, 3) si retorna precio * cantidad?",
    "a": [
      "30",
      "13",
      "103"
    ],
    "c": 0,
    "e": "La multiplicación de 10 por 3 da 30."
  },
  {
    "q": "¿Qué ventaja tiene una prueba automatizada reproducible?",
    "a": [
      "Permite comprobar un comportamiento repetidamente",
      "Garantiza ausencia total de errores",
      "Sustituye toda revisión de requisitos"
    ],
    "c": 0,
    "e": "Una prueba repetible ayuda a detectar regresiones después de cambios."
  },
  {
    "q": "¿Qué debería ocurrir al intentar guardar una reserva con datos inválidos?",
    "a": [
      "Rechazarla e informar el problema",
      "Guardarla silenciosamente",
      "Borrar las demás reservas"
    ],
    "c": 0,
    "e": "La validación protege la consistencia y comunica el motivo del rechazo."
  },
  {
    "q": "¿Qué es una regresión?",
    "a": [
      "Un comportamiento que antes funcionaba y deja de hacerlo tras un cambio",
      "Una variable sin valor",
      "Un archivo README"
    ],
    "c": 0,
    "e": "Las pruebas ayudan a descubrir fallos introducidos por cambios posteriores."
  },
  {
    "q": "¿Qué sucede con los datos guardados solo en una lista al cerrar el programa?",
    "a": [
      "Normalmente se pierden",
      "Se guardan automáticamente en GitHub",
      "Se convierten en una base de datos"
    ],
    "c": 0,
    "e": "La memoria del proceso no es almacenamiento persistente."
  },
  {
    "q": "¿Qué puede utilizarse para conservar información entre ejecuciones?",
    "a": [
      "Un archivo o una base de datos",
      "Una variable local solamente",
      "Un comentario"
    ],
    "c": 0,
    "e": "La persistencia requiere almacenamiento que sobreviva al proceso."
  },
  {
    "q": "¿Qué hace try/except en una operación de archivo?",
    "a": [
      "Permite manejar excepciones que se esperan",
      "Evita cualquier error posible",
      "Crea automáticamente todas las carpetas"
    ],
    "c": 0,
    "e": "Capturar errores concretos permite actuar ante problemas previstos."
  },
  {
    "q": "¿Por qué conviene comprobar que una reserva no cruza un horario ocupado?",
    "a": [
      "Para evitar asignar el mismo recurso en periodos superpuestos",
      "Para cambiar el nombre del cliente",
      "Para convertir fechas en texto"
    ],
    "c": 0,
    "e": "Una regla de disponibilidad debe comparar recurso e intervalo."
  },
  {
    "q": "¿Qué información conviene guardar en una reserva?",
    "a": [
      "Cliente, servicio, fecha, hora y estado según los requisitos",
      "Solo el nombre del archivo Python",
      "Únicamente el color de la interfaz"
    ],
    "c": 0,
    "e": "Los datos elegidos deben permitir identificar y gestionar la operación."
  },
  {
    "q": "¿Qué diferencia hay entre print y return?",
    "a": [
      "print muestra; return entrega un valor",
      "Ambos siempre almacenan en disco",
      "return muestra siempre en pantalla"
    ],
    "c": 0,
    "e": "El valor devuelto puede utilizarse o probarse en otra función."
  },
  {
    "q": "¿Qué debe hacer un programa ante una identificación vacía si el requisito la prohíbe?",
    "a": [
      "Rechazarla con un mensaje claro",
      "Confirmarla como válida",
      "Añadir una contraseña automáticamente"
    ],
    "c": 0,
    "e": "La validación debe cumplir las reglas acordadas para los datos."
  },
  {
    "q": "¿Qué es un caso límite para una cantidad que debe ser mayor que cero?",
    "a": [
      "Probar cero",
      "Probar solo 100",
      "Probar solo un nombre"
    ],
    "c": 0,
    "e": "Cero se encuentra justo en la frontera de la regla indicada."
  },
  {
    "q": "¿Qué debe hacerse antes de publicar el repositorio?",
    "a": [
      "Revisar que no incluya claves y que la documentación sea clara",
      "Subir todo sin revisar",
      "Eliminar todas las pruebas"
    ],
    "c": 0,
    "e": "Una revisión evita publicar secretos y facilita el uso del proyecto."
  },
  {
    "q": "¿Qué aporta usar nombres descriptivos como calcular_total?",
    "a": [
      "Ayuda a entender la intención del código",
      "Hace innecesarias todas las pruebas",
      "Impide modificar el valor"
    ],
    "c": 0,
    "e": "Los nombres claros facilitan lectura y mantenimiento."
  },
  {
    "q": "¿Qué conviene hacer después de cambiar una función usada por otros módulos?",
    "a": [
      "Ejecutar las pruebas relacionadas y revisar la integración",
      "Suponer que nada cambió",
      "Borrar el historial de Git"
    ],
    "c": 0,
    "e": "Los cambios pueden afectar otras partes que dependen de esa función."
  }
];
