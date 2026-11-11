const practicaExtendida = {
  "6": [
    {
      "q": "¿Cómo empieza un comentario de una línea en Python?",
      "a": [
        "#",
        "//",
        "<!--"
      ],
      "c": 0,
      "e": "# inicia un comentario de línea."
    },
    {
      "q": "¿Se ejecuta el texto posterior a # como instrucción?",
      "a": [
        "No, es un comentario",
        "Sí, siempre",
        "Solo si tiene números"
      ],
      "c": 0,
      "e": "El texto del comentario no se ejecuta como código."
    },
    {
      "q": "¿Qué indica NameError?",
      "a": [
        "Que no se encontró un nombre",
        "Que falta una carpeta siempre",
        "Que el computador perdió conexión"
      ],
      "c": 0,
      "e": "Suele aparecer al usar un nombre no definido."
    },
    {
      "q": "¿Qué tipo suele aparecer por sintaxis inválida?",
      "a": [
        "SyntaxError",
        "KeyError",
        "ZeroDivisionError"
      ],
      "c": 0,
      "e": "SyntaxError aparece cuando Python no puede interpretar la sintaxis."
    },
    {
      "q": "¿Qué aporta la última línea de un traceback?",
      "a": [
        "El tipo y el mensaje final del error",
        "La contraseña del equipo",
        "El listado de archivos completo"
      ],
      "c": 0,
      "e": "La última línea normalmente indica tipo y mensaje."
    },
    {
      "q": "¿Qué conviene revisar si falta una comilla?",
      "a": [
        "El cierre de la cadena",
        "El tamaño del monitor",
        "La conexión Bluetooth"
      ],
      "c": 0,
      "e": "Una cadena necesita delimitadores completos."
    },
    {
      "q": "¿Qué expresa # calcular total?",
      "a": [
        "Un comentario",
        "Una multiplicación",
        "Una llamada de función"
      ],
      "c": 0,
      "e": "Python ignora el comentario al ejecutar instrucciones."
    },
    {
      "q": "¿Qué error provoca dividir por cero con /?",
      "a": [
        "ZeroDivisionError",
        "NameError",
        "KeyError"
      ],
      "c": 0,
      "e": "Una división entre cero produce ZeroDivisionError."
    },
    {
      "q": "¿Qué conviene hacer al leer un error?",
      "a": [
        "Leer el tipo, mensaje y ubicación",
        "Borrar todo el proyecto",
        "Ignorarlo siempre"
      ],
      "c": 0,
      "e": "El traceback ayuda a localizar el fallo."
    },
    {
      "q": "¿Los comentarios sustituyen la ejecución de pruebas?",
      "a": [
        "No",
        "Sí",
        "Solo si son largos"
      ],
      "c": 0,
      "e": "Un comentario documenta; no verifica comportamiento."
    }
  ],
  "7": [
    {
      "q": "¿Qué tipo es el valor 12?",
      "a": [
        "int",
        "str",
        "float"
      ],
      "c": 0,
      "e": "12 sin decimal es un entero."
    },
    {
      "q": "¿Qué tipo es \"12\"?",
      "a": [
        "str",
        "int",
        "bool"
      ],
      "c": 0,
      "e": "Las comillas forman una cadena."
    },
    {
      "q": "¿Qué produce int(\"5\")?",
      "a": [
        "El entero 5",
        "El texto \"5\"",
        "Una lista"
      ],
      "c": 0,
      "e": "int convierte una cadena numérica válida."
    },
    {
      "q": "¿Cuál es el tipo de 2.5?",
      "a": [
        "float",
        "int",
        "str"
      ],
      "c": 0,
      "e": "2.5 es un float."
    },
    {
      "q": "¿Qué representa bool?",
      "a": [
        "Valores True y False",
        "Solo números enteros",
        "Solo cadenas"
      ],
      "c": 0,
      "e": "bool es el tipo booleano."
    },
    {
      "q": "¿Qué produce str(3)?",
      "a": [
        "El texto \"3\"",
        "El entero 3",
        "El booleano True"
      ],
      "c": 0,
      "e": "str convierte el valor a texto."
    },
    {
      "q": "¿Qué puede producir int(\"abc\")?",
      "a": [
        "ValueError",
        "KeyError",
        "Una conversión a cero"
      ],
      "c": 0,
      "e": "La cadena no representa un entero válido."
    },
    {
      "q": "¿Qué devuelve type(10).__name__?",
      "a": [
        "int",
        "str",
        "float"
      ],
      "c": 0,
      "e": "El valor 10 tiene tipo int."
    },
    {
      "q": "¿Qué comparación es verdadera?",
      "a": [
        "1 == 1.0",
        "1 == \"1\"",
        "\"a\" == \"A\""
      ],
      "c": 0,
      "e": "Los valores numéricos 1 y 1.0 se comparan como iguales."
    },
    {
      "q": "¿Qué es None?",
      "a": [
        "Un valor que representa ausencia de valor",
        "Una cadena vacía",
        "El número cero"
      ],
      "c": 0,
      "e": "None es un objeto especial que representa ausencia de valor."
    }
  ]
};

practicaExtendida[8] = [
  {
    "q": "¿Qué función solicita texto al usuario?",
    "a": [
      "input()",
      "print()",
      "len()"
    ],
    "c": 0,
    "e": "input presenta una solicitud y devuelve el texto ingresado."
  },
  {
    "q": "¿Qué recibe input(\"Nombre: \")?",
    "a": [
      "Un mensaje que se muestra",
      "Una variable que se modifica sola",
      "Una lista de opciones"
    ],
    "c": 0,
    "e": "El argumento de input es el mensaje mostrado antes de leer."
  },
  {
    "q": "¿Qué tipo devuelve input en Python 3?",
    "a": [
      "str",
      "int",
      "bool"
    ],
    "c": 0,
    "e": "La entrada se devuelve como cadena."
  },
  {
    "q": "Si escribes 23 en input, ¿qué devuelve?",
    "a": [
      "La cadena \"23\"",
      "El entero 23",
      "El float 23.0"
    ],
    "c": 0,
    "e": "input no convierte automáticamente a entero."
  },
  {
    "q": "¿Cómo conviertes una entrada numérica entera?",
    "a": [
      "int(input())",
      "str(print())",
      "input(int)"
    ],
    "c": 0,
    "e": "int intenta convertir el texto devuelto por input."
  },
  {
    "q": "¿Qué excepción puede generar int(\"hola\")?",
    "a": [
      "ValueError",
      "IndexError",
      "KeyError"
    ],
    "c": 0,
    "e": "El texto no representa un entero válido."
  },
  {
    "q": "¿Para qué se usa print tras leer un dato?",
    "a": [
      "Para mostrar información",
      "Para leer el teclado",
      "Para definir una clase"
    ],
    "c": 0,
    "e": "print escribe en la salida."
  },
  {
    "q": "¿Qué hace nombre = input(\"Nombre: \")?",
    "a": [
      "Guarda el texto ingresado en nombre",
      "Guarda la función input en nombre",
      "Imprime nombre automáticamente"
    ],
    "c": 0,
    "e": "La llamada lee una línea y la asignación guarda el resultado."
  },
  {
    "q": "¿Para qué sirve validar una entrada?",
    "a": [
      "Para comprobar que cumpla las reglas esperadas",
      "Para asegurar que nunca falle el equipo",
      "Para evitar cualquier función"
    ],
    "c": 0,
    "e": "Validar permite rechazar o manejar valores que no cumplen las reglas."
  },
  {
    "q": "¿Qué hace input al esperar una respuesta?",
    "a": [
      "Espera una línea del usuario",
      "Ejecuta todas las líneas siguientes al mismo tiempo",
      "Cierra Python"
    ],
    "c": 0,
    "e": "La ejecución espera hasta recibir la entrada en una consola normal."
  }
];

practicaExtendida[9] = [
  {
    "q": "¿Qué operador suma valores?",
    "a": [
      "+",
      "-",
      "%"
    ],
    "c": 0,
    "e": "+ suma números."
  },
  {
    "q": "¿Qué operador multiplica?",
    "a": [
      "*",
      "x",
      "//"
    ],
    "c": 0,
    "e": "* representa multiplicación."
  },
  {
    "q": "¿Qué devuelve 7 / 2?",
    "a": [
      "3.5",
      "3",
      "1"
    ],
    "c": 0,
    "e": "/ realiza división verdadera."
  },
  {
    "q": "¿Qué devuelve 7 // 2?",
    "a": [
      "3",
      "3.5",
      "1"
    ],
    "c": 0,
    "e": "// calcula el cociente redondeado hacia abajo."
  },
  {
    "q": "¿Qué devuelve 7 % 2?",
    "a": [
      "1",
      "0",
      "3.5"
    ],
    "c": 0,
    "e": "% devuelve el residuo según la división entera."
  },
  {
    "q": "¿Qué devuelve 2 ** 3?",
    "a": [
      "8",
      "6",
      "9"
    ],
    "c": 0,
    "e": "** eleva 2 a la potencia 3."
  },
  {
    "q": "¿Qué evalúa primero Python en 2 + 3 * 4?",
    "a": [
      "La multiplicación",
      "La suma",
      "El operador + y * son iguales"
    ],
    "c": 0,
    "e": "La multiplicación tiene prioridad sobre la suma."
  },
  {
    "q": "¿Qué produce (2 + 3) * 4?",
    "a": [
      "20",
      "14",
      "9"
    ],
    "c": 0,
    "e": "Los paréntesis hacen que se calcule primero la suma."
  },
  {
    "q": "¿Qué excepción genera 5 / 0?",
    "a": [
      "ZeroDivisionError",
      "NameError",
      "KeyError"
    ],
    "c": 0,
    "e": "No se permite dividir por cero."
  },
  {
    "q": "¿Qué devuelve 10 % 5?",
    "a": [
      "0",
      "5",
      "2"
    ],
    "c": 0,
    "e": "10 es divisible por 5 sin residuo."
  }
];

practicaExtendida[10] = [
  {
    "q": "¿Qué devuelve \"  Ana  \".strip()?",
    "a": [
      "\"Ana\"",
      "\"  Ana  \"",
      "\"A n a\""
    ],
    "c": 0,
    "e": "strip quita espacios de los extremos."
  },
  {
    "q": "¿Qué devuelve \"Ana Gómez\".replace(\" \", \"\")?",
    "a": [
      "\"AnaGómez\"",
      "\"Ana Gómez\"",
      "\" \""
    ],
    "c": 0,
    "e": "replace devuelve una cadena con las sustituciones."
  },
  {
    "q": "¿Qué hace upper()?",
    "a": [
      "Devuelve una copia en mayúsculas",
      "Modifica siempre la cadena original",
      "Convierte a entero"
    ],
    "c": 0,
    "e": "Las cadenas son inmutables y upper devuelve otra cadena."
  },
  {
    "q": "¿Qué hace lower()?",
    "a": [
      "Devuelve una copia en minúsculas",
      "Elimina espacios",
      "Invierte el texto"
    ],
    "c": 0,
    "e": "lower devuelve una cadena en minúsculas."
  },
  {
    "q": "¿Qué devuelve len(\"Hola\")?",
    "a": [
      "4",
      "3",
      "\"4\""
    ],
    "c": 0,
    "e": "Hola contiene cuatro caracteres."
  },
  {
    "q": "¿Cuál es el índice del primer carácter?",
    "a": [
      "0",
      "1",
      "-2"
    ],
    "c": 0,
    "e": "Las secuencias se indexan desde cero."
  },
  {
    "q": "¿Qué devuelve \"Python\"[0]?",
    "a": [
      "\"P\"",
      "\"y\"",
      "\"n\""
    ],
    "c": 0,
    "e": "El índice 0 corresponde al primer carácter."
  },
  {
    "q": "¿Qué devuelve \"Python\"[-1]?",
    "a": [
      "\"n\"",
      "\"P\"",
      "\"o\""
    ],
    "c": 0,
    "e": "-1 accede al último carácter."
  },
  {
    "q": "¿Qué caracteriza una f-string?",
    "a": [
      "Permite interpolar expresiones entre llaves",
      "Convierte siempre a float",
      "Solo admite números"
    ],
    "c": 0,
    "e": "Una cadena prefijada con f evalúa expresiones en llaves."
  },
  {
    "q": "¿Qué devuelve \"hola\".isalpha()?",
    "a": [
      "True",
      "False",
      "4"
    ],
    "c": 0,
    "e": "Todos los caracteres son letras."
  }
];

practicaExtendida[11] = [
  {
    "q": "¿Qué valores tiene el tipo bool?",
    "a": [
      "True y False",
      "0 y 1 solamente como texto",
      "Sí y No"
    ],
    "c": 0,
    "e": "bool representa verdadero y falso."
  },
  {
    "q": "¿Qué operador compara igualdad?",
    "a": [
      "==",
      "=",
      ":="
    ],
    "c": 0,
    "e": "== compara valores."
  },
  {
    "q": "¿Qué operador comprueba desigualdad?",
    "a": [
      "!=",
      "==",
      "="
    ],
    "c": 0,
    "e": "!= comprueba que los valores difieran."
  },
  {
    "q": "¿Qué resultado produce 5 > 3?",
    "a": [
      "True",
      "False",
      "5"
    ],
    "c": 0,
    "e": "5 es mayor que 3."
  },
  {
    "q": "¿Qué resultado produce 2 >= 2?",
    "a": [
      "True",
      "False",
      "2"
    ],
    "c": 0,
    "e": ">= incluye la igualdad."
  },
  {
    "q": "¿Qué resultado produce not True?",
    "a": [
      "False",
      "True",
      "None"
    ],
    "c": 0,
    "e": "not invierte el valor de verdad."
  },
  {
    "q": "¿Cuándo es verdadero A and B?",
    "a": [
      "Cuando ambas condiciones son verdaderas",
      "Cuando solo una es verdadera",
      "Siempre"
    ],
    "c": 0,
    "e": "and requiere que ambas sean verdaderas."
  },
  {
    "q": "¿Cuándo es verdadero A or B?",
    "a": [
      "Cuando al menos una condición es verdadera",
      "Solo cuando ambas son falsas",
      "Nunca"
    ],
    "c": 0,
    "e": "or permite que cualquiera de las condiciones sea verdadera."
  },
  {
    "q": "¿Qué representa False?",
    "a": [
      "Un valor booleano falso",
      "Una cadena",
      "Un nombre de función obligatorio"
    ],
    "c": 0,
    "e": "False es un valor de tipo bool."
  },
  {
    "q": "¿Qué devuelve bool(\"\")?",
    "a": [
      "False",
      "True",
      "\"\""
    ],
    "c": 0,
    "e": "Una cadena vacía es falsa en contexto booleano."
  }
];

practicaExtendida[12] = [
  {
    "q": "¿Para qué sirve elif?",
    "a": [
      "Para comprobar otra condición si las anteriores no se cumplieron",
      "Para repetir un ciclo",
      "Para crear una clase"
    ],
    "c": 0,
    "e": "elif presenta otra condición dentro de la cadena."
  },
  {
    "q": "¿Cuándo se ejecuta else?",
    "a": [
      "Si no se cumplió ninguna condición anterior",
      "Siempre",
      "Antes de if"
    ],
    "c": 0,
    "e": "else cubre los casos no capturados anteriormente."
  },
  {
    "q": "¿Puede existir una cadena if sin else?",
    "a": [
      "Sí",
      "No",
      "Solo dentro de funciones"
    ],
    "c": 0,
    "e": "else es opcional."
  },
  {
    "q": "¿Cuál palabra inicia una condición?",
    "a": [
      "if",
      "elif sin if",
      "else sin if"
    ],
    "c": 0,
    "e": "if inicia la estructura condicional."
  },
  {
    "q": "¿Qué ocurre tras encontrar una rama verdadera en if/elif/else?",
    "a": [
      "Se ejecuta esa rama y se omiten las siguientes",
      "Se ejecutan todas las ramas",
      "Se reinicia Python"
    ],
    "c": 0,
    "e": "Una cadena elige como máximo una rama."
  },
  {
    "q": "¿Qué signo termina if condicion?",
    "a": [
      ":",
      ";",
      "#"
    ],
    "c": 0,
    "e": "Los dos puntos introducen el bloque."
  },
  {
    "q": "¿Qué determina qué líneas pertenecen a una rama?",
    "a": [
      "La sangría",
      "El color del texto",
      "El nombre del archivo"
    ],
    "c": 0,
    "e": "La sangría agrupa instrucciones."
  },
  {
    "q": "¿Puede haber varios elif?",
    "a": [
      "Sí",
      "No",
      "Solo uno obligatoriamente"
    ],
    "c": 0,
    "e": "Puedes comprobar varias condiciones alternativas."
  },
  {
    "q": "¿else lleva una condición explícita?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo un número"
    ],
    "c": 0,
    "e": "else no lleva condición propia."
  },
  {
    "q": "¿Por qué importa el orden de if y elif?",
    "a": [
      "Porque se ejecuta la primera condición verdadera",
      "Porque Python ordena las condiciones automáticamente",
      "Porque todas las ramas se ejecutan"
    ],
    "c": 0,
    "e": "El orden puede cambiar la rama elegida."
  }
];

practicaExtendida[13] = [
  {
    "q": "¿Cuándo se repite un while?",
    "a": [
      "Mientras su condición sea verdadera",
      "Solo una vez",
      "Cuando su condición sea falsa"
    ],
    "c": 0,
    "e": "while vuelve a comprobar la condición antes de cada vuelta."
  },
  {
    "q": "¿Qué palabra inicia este ciclo?",
    "a": [
      "while",
      "def",
      "class"
    ],
    "c": 0,
    "e": "while introduce un ciclo condicionado."
  },
  {
    "q": "¿Qué debe seguir a la condición de while?",
    "a": [
      "Dos puntos",
      "Una coma",
      "Un signo #"
    ],
    "c": 0,
    "e": "Los dos puntos introducen el bloque."
  },
  {
    "q": "¿Qué controla qué líneas se repiten?",
    "a": [
      "La sangría del bloque",
      "El color del editor",
      "El nombre del archivo"
    ],
    "c": 0,
    "e": "Las líneas sangradas pertenecen al ciclo."
  },
  {
    "q": "¿Qué pasa si la condición inicial es falsa?",
    "a": [
      "El bloque no se ejecuta",
      "Se ejecuta una vez obligatoriamente",
      "Python se cierra"
    ],
    "c": 0,
    "e": "while comprueba la condición antes de ejecutar."
  },
  {
    "q": "¿Qué hace break dentro de while?",
    "a": [
      "Sale del ciclo",
      "Reinicia Python",
      "Pasa a la próxima vuelta"
    ],
    "c": 0,
    "e": "break termina el ciclo más cercano."
  },
  {
    "q": "¿Qué hace continue?",
    "a": [
      "Pasa a la siguiente iteración",
      "Sale de todos los ciclos",
      "Declara una clase"
    ],
    "c": 0,
    "e": "continue omite el resto de la vuelta actual."
  },
  {
    "q": "¿Qué puede causar un ciclo infinito?",
    "a": [
      "Una condición que nunca se vuelve falsa y sin salida",
      "Incrementar correctamente un contador",
      "Una condición inicialmente falsa"
    ],
    "c": 0,
    "e": "El ciclo debe tener una condición de salida alcanzable."
  },
  {
    "q": "¿Qué significa contador += 1?",
    "a": [
      "Sumar uno y asignar el resultado",
      "Comparar con uno",
      "Restar uno"
    ],
    "c": 0,
    "e": "+= actualiza el contador."
  },
  {
    "q": "¿Cuántas veces imprime i=0; while i<3: print(i); i+=1?",
    "a": [
      "3",
      "2",
      "4"
    ],
    "c": 0,
    "e": "Los valores impresos son 0, 1 y 2."
  }
];

practicaExtendida[14] = [
  {
    "q": "¿Qué es una lista en Python?",
    "a": [
      "Una secuencia ordenada y modificable",
      "Una secuencia necesariamente inmutable",
      "Una función"
    ],
    "c": 0,
    "e": "Una lista puede almacenar y modificar elementos."
  },
  {
    "q": "¿Cómo se crea una lista vacía?",
    "a": [
      "[]",
      "{}",
      "()"
    ],
    "c": 0,
    "e": "Los corchetes vacíos crean una lista."
  },
  {
    "q": "¿Cuál es el índice del primer elemento?",
    "a": [
      "0",
      "1",
      "-2"
    ],
    "c": 0,
    "e": "La indexación comienza en cero."
  },
  {
    "q": "¿Qué devuelve [10, 20][1]?",
    "a": [
      "20",
      "10",
      "1"
    ],
    "c": 0,
    "e": "El índice 1 corresponde al segundo elemento."
  },
  {
    "q": "¿Qué hace append(x)?",
    "a": [
      "Agrega x al final",
      "Elimina x",
      "Ordena la lista"
    ],
    "c": 0,
    "e": "append añade un elemento al final."
  },
  {
    "q": "¿Qué devuelve len([2, 4, 6])?",
    "a": [
      "3",
      "6",
      "2"
    ],
    "c": 0,
    "e": "len cuenta los elementos."
  },
  {
    "q": "¿Qué devuelve [1, 2, 3][-1]?",
    "a": [
      "3",
      "1",
      "2"
    ],
    "c": 0,
    "e": "-1 identifica el último elemento."
  },
  {
    "q": "¿Cómo se recorre una lista?",
    "a": [
      "Con for elemento in lista",
      "Con import lista siempre",
      "Con class lista"
    ],
    "c": 0,
    "e": "for visita los elementos de un iterable."
  },
  {
    "q": "¿Se puede cambiar lista[0]?",
    "a": [
      "Sí, si la lista no está vacía",
      "No, ninguna lista cambia",
      "Solo con una base de datos"
    ],
    "c": 0,
    "e": "Las listas son mutables."
  },
  {
    "q": "¿Qué excepción puede producir lista[100] si solo contiene dos elementos?",
    "a": [
      "IndexError",
      "KeyError",
      "NameError"
    ],
    "c": 0,
    "e": "El índice está fuera del rango."
  }
];

practicaExtendida[15] = [
  {
    "q": "¿Qué es una tupla?",
    "a": [
      "Una secuencia inmutable",
      "Una lista siempre modificable",
      "Una función"
    ],
    "c": 0,
    "e": "La tupla no permite reasignar sus posiciones."
  },
  {
    "q": "¿Cómo se escribe una tupla de un solo elemento?",
    "a": [
      "(1,)",
      " (1) ",
      "[1]"
    ],
    "c": 0,
    "e": "La coma indica una tupla de un elemento."
  },
  {
    "q": "¿Se puede acceder a una tupla por índice?",
    "a": [
      "Sí",
      "No",
      "Solo con claves de texto"
    ],
    "c": 0,
    "e": "Las tuplas son secuencias indexadas."
  },
  {
    "q": "¿Qué contiene un conjunto?",
    "a": [
      "Elementos únicos",
      "Solo valores duplicados",
      "Pares clave-valor obligatoriamente"
    ],
    "c": 0,
    "e": "Un conjunto elimina elementos duplicados."
  },
  {
    "q": "¿Cómo se crea un conjunto vacío?",
    "a": [
      "set()",
      "{}",
      "[]"
    ],
    "c": 0,
    "e": "{} crea un diccionario vacío."
  },
  {
    "q": "¿Qué devuelve len({1, 1, 2})?",
    "a": [
      "2",
      "3",
      "1"
    ],
    "c": 0,
    "e": "Los elementos repetidos se almacenan una sola vez."
  },
  {
    "q": "¿Qué hace add en un conjunto?",
    "a": [
      "Agrega un elemento",
      "Agrega pares clave-valor",
      "Ordena permanentemente"
    ],
    "c": 0,
    "e": "add incorpora un elemento al conjunto."
  },
  {
    "q": "¿Puede una tupla ser clave de diccionario?",
    "a": [
      "Sí, si todos sus elementos son hashables",
      "Nunca",
      "Solo si está vacía"
    ],
    "c": 0,
    "e": "Las claves deben ser hashables."
  },
  {
    "q": "¿Qué hace in con un conjunto?",
    "a": [
      "Comprueba pertenencia",
      "Ordena valores",
      "Convierte a lista"
    ],
    "c": 0,
    "e": "in verifica si un elemento pertenece."
  },
  {
    "q": "¿Puede una lista mutable ser elemento directo de un set?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo con números"
    ],
    "c": 0,
    "e": "Los elementos de set deben ser hashables."
  }
];

practicaExtendida[16] = [
  {
    "q": "¿Qué almacena un diccionario?",
    "a": [
      "Pares de claves y valores",
      "Solo valores sin claves",
      "Solo números"
    ],
    "c": 0,
    "e": "Un diccionario asocia claves con valores."
  },
  {
    "q": "¿Cómo se crea un diccionario vacío?",
    "a": [
      "{}",
      "[]",
      "()"
    ],
    "c": 0,
    "e": "Las llaves vacías crean un dict."
  },
  {
    "q": "¿Cómo se lee el nombre en cliente={\"nombre\":\"Ana\"}?",
    "a": [
      "cliente[\"nombre\"]",
      "cliente(0)",
      "cliente.nombre siempre"
    ],
    "c": 0,
    "e": "Las claves se consultan con corchetes."
  },
  {
    "q": "¿Qué hace get(\"ciudad\", \"Sin ciudad\") si falta la clave?",
    "a": [
      "Devuelve Sin ciudad",
      "Lanza KeyError obligatoriamente",
      "Agrega siempre la clave"
    ],
    "c": 0,
    "e": "get devuelve el valor por defecto indicado."
  },
  {
    "q": "¿Qué ocurre al consultar una clave inexistente con corchetes?",
    "a": [
      "KeyError",
      "IndexError",
      "ZeroDivisionError"
    ],
    "c": 0,
    "e": "El diccionario lanza KeyError si falta la clave."
  },
  {
    "q": "¿Cómo agregas edad=20 al diccionario cliente?",
    "a": [
      "cliente[\"edad\"] = 20",
      "cliente.append(20)",
      "cliente.add(\"edad\")"
    ],
    "c": 0,
    "e": "Una asignación por clave crea o actualiza el par."
  },
  {
    "q": "¿Qué devuelve len({\"a\":1,\"b\":2})?",
    "a": [
      "2",
      "3",
      "1"
    ],
    "c": 0,
    "e": "len cuenta las claves del diccionario."
  },
  {
    "q": "¿Qué devuelve \"a\" in {\"a\": 1}?",
    "a": [
      "True",
      "False",
      "1"
    ],
    "c": 0,
    "e": "in comprueba la presencia de la clave."
  },
  {
    "q": "¿Qué devuelve d.keys()?",
    "a": [
      "Una vista de las claves",
      "Una lista de valores siempre",
      "El primer valor"
    ],
    "c": 0,
    "e": "keys devuelve una vista de claves."
  },
  {
    "q": "¿Qué devuelve d.values()?",
    "a": [
      "Una vista de los valores",
      "Una vista de claves",
      "El número de claves"
    ],
    "c": 0,
    "e": "values devuelve una vista de valores."
  }
];

practicaExtendida[17] = [
  {
    "q": "¿Qué es un parámetro?",
    "a": [
      "Un nombre declarado en la función",
      "Un valor pasado en una llamada",
      "Una excepción"
    ],
    "c": 0,
    "e": "Los parámetros reciben valores dentro de la función."
  },
  {
    "q": "¿Qué es un argumento?",
    "a": [
      "Un valor proporcionado al llamar",
      "Un nombre declarado solamente",
      "Un módulo"
    ],
    "c": 0,
    "e": "Los argumentos se pasan en la llamada."
  },
  {
    "q": "En def sumar(a, b), ¿qué son a y b?",
    "a": [
      "Parámetros",
      "Argumentos pasados ya",
      "Clases"
    ],
    "c": 0,
    "e": "La definición declara esos parámetros."
  },
  {
    "q": "En sumar(2, 3), ¿qué son 2 y 3?",
    "a": [
      "Argumentos",
      "Decoradores",
      "Módulos"
    ],
    "c": 0,
    "e": "La llamada proporciona esos valores."
  },
  {
    "q": "¿Puede un parámetro tener valor por defecto?",
    "a": [
      "Sí",
      "No",
      "Solo si es una clase"
    ],
    "c": 0,
    "e": "Se declara por ejemplo con b=2."
  },
  {
    "q": "¿Qué ocurre al omitir un argumento con valor por defecto?",
    "a": [
      "Se usa el valor por defecto",
      "Siempre se produce TypeError",
      "Python cierra el programa"
    ],
    "c": 0,
    "e": "El valor predeterminado se aplica si no se suministra argumento."
  },
  {
    "q": "¿Qué es un argumento por nombre?",
    "a": [
      "Un argumento indicado con el nombre del parámetro",
      "Un nombre de archivo",
      "Una clase abstracta"
    ],
    "c": 0,
    "e": "Por ejemplo saludar(nombre=\"Ana\")."
  },
  {
    "q": "¿Puede una función tener dos parámetros?",
    "a": [
      "Sí",
      "No",
      "Solo si usa una lista"
    ],
    "c": 0,
    "e": "Una función puede declarar varios parámetros."
  },
  {
    "q": "¿Qué ocurre al omitir un argumento obligatorio?",
    "a": [
      "TypeError",
      "Siempre recibe None",
      "Siempre recibe cero"
    ],
    "c": 0,
    "e": "La llamada no cumple la firma requerida."
  },
  {
    "q": "¿Qué diferencia hay entre argumento posicional y por nombre?",
    "a": [
      "El primero se asigna por posición y el segundo por nombre",
      "Son archivos diferentes",
      "Ninguno entrega valores"
    ],
    "c": 0,
    "e": "Ambos proporcionan argumentos con reglas distintas."
  }
];

practicaExtendida[18] = [
  {
    "q": "¿Qué es una variable local?",
    "a": [
      "Un nombre definido en el ámbito de una función",
      "Un archivo del sistema",
      "Una clase heredada"
    ],
    "c": 0,
    "e": "Una asignación dentro de una función normalmente crea un nombre local."
  },
  {
    "q": "¿Dónde se usan normalmente los parámetros de una función?",
    "a": [
      "Dentro de la función",
      "Solo en otros archivos",
      "Solo fuera de la función"
    ],
    "c": 0,
    "e": "Los parámetros son nombres locales de la llamada."
  },
  {
    "q": "¿Cómo puede una función entregar un valor local a quien la llama?",
    "a": [
      "Mediante return",
      "Mediante un comentario",
      "Mediante import obligatorio"
    ],
    "c": 0,
    "e": "return devuelve un resultado que puede asignarse fuera."
  },
  {
    "q": "¿Qué ocurre si intentas usar fuera un nombre creado solo dentro de una función?",
    "a": [
      "Normalmente NameError",
      "El nombre aparece automáticamente",
      "Siempre se convierte en texto"
    ],
    "c": 0,
    "e": "El nombre local no queda definido automáticamente fuera."
  },
  {
    "q": "¿Dos funciones pueden tener variables locales con el mismo nombre?",
    "a": [
      "Sí",
      "No",
      "Solo si están en archivos diferentes"
    ],
    "c": 0,
    "e": "Cada llamada tiene su propio ámbito local."
  },
  {
    "q": "¿Qué significa asignar x = 3 dentro de una función?",
    "a": [
      "Normalmente crear o actualizar un nombre local",
      "Cambiar siempre la variable global x",
      "Imprimir 3 automáticamente"
    ],
    "c": 0,
    "e": "Sin una declaración especial, la asignación trata x como local."
  },
  {
    "q": "¿Para qué sirve global x dentro de una función?",
    "a": [
      "Para declarar que x se refiere al ámbito global",
      "Para crear una nueva clase",
      "Para convertir x a entero"
    ],
    "c": 0,
    "e": "global permite asignar al nombre del módulo desde esa función."
  },
  {
    "q": "¿Qué guarda resultado = calcular()?",
    "a": [
      "El valor devuelto por calcular",
      "El código fuente siempre",
      "El nombre del archivo"
    ],
    "c": 0,
    "e": "La llamada produce un valor que se asigna a resultado."
  },
  {
    "q": "¿Qué ocurre normalmente con un nombre local después de terminar la llamada?",
    "a": [
      "Deja de estar disponible como local de esa llamada",
      "Se convierte siempre en global",
      "Se escribe en un archivo"
    ],
    "c": 0,
    "e": "La variable local pertenece al contexto de la llamada."
  },
  {
    "q": "¿Para qué conviene devolver un resultado en lugar de depender de una global?",
    "a": [
      "Para hacer explícitos los datos de salida",
      "Para evitar toda excepción",
      "Para que Python no necesite memoria"
    ],
    "c": 0,
    "e": "El retorno facilita comprender y probar la función."
  }
];

practicaExtendida[19] = [
  {
    "q": "¿Qué es una excepción?",
    "a": [
      "Un evento que interrumpe el flujo normal de ejecución",
      "Una instrucción para imprimir",
      "Un tipo de carpeta"
    ],
    "c": 0,
    "e": "Una excepción señala una situación que puede necesitar manejo."
  },
  {
    "q": "¿Para qué sirve try?",
    "a": [
      "Para ejecutar código que podría generar una excepción",
      "Para definir una clase",
      "Para repetir siempre un bloque"
    ],
    "c": 0,
    "e": "try delimita el código supervisado."
  },
  {
    "q": "¿Para qué sirve except?",
    "a": [
      "Para manejar una excepción compatible",
      "Para abrir archivos siempre",
      "Para declarar una variable global"
    ],
    "c": 0,
    "e": "except captura excepciones del tipo indicado."
  },
  {
    "q": "¿Qué error produce int(\"hola\")?",
    "a": [
      "ValueError",
      "IndexError",
      "FileNotFoundError"
    ],
    "c": 0,
    "e": "El texto no es una representación entera válida."
  },
  {
    "q": "¿Qué error puede producir una división por cero?",
    "a": [
      "ZeroDivisionError",
      "KeyError",
      "NameError"
    ],
    "c": 0,
    "e": "Dividir por cero genera ZeroDivisionError."
  },
  {
    "q": "¿Qué ocurre si una excepción no se maneja?",
    "a": [
      "Se propaga y puede detener el programa",
      "Siempre se ignora",
      "Python corrige el dato"
    ],
    "c": 0,
    "e": "La excepción sube por las llamadas hasta encontrar un manejador."
  },
  {
    "q": "¿Qué significa except ValueError as error?",
    "a": [
      "Capturar una instancia de ValueError en la variable error",
      "Renombrar la clase permanentemente",
      "Crear un archivo llamado error"
    ],
    "c": 0,
    "e": "error permite consultar la instancia capturada."
  },
  {
    "q": "¿Se ejecutan las líneas posteriores al punto que falló dentro del mismo try?",
    "a": [
      "No, se salta al manejador compatible",
      "Sí, siempre",
      "Solo si hay print"
    ],
    "c": 0,
    "e": "La excepción interrumpe ese flujo del bloque try."
  },
  {
    "q": "¿Puede haber diferentes except para distintos errores?",
    "a": [
      "Sí",
      "No",
      "Solo dos obligatoriamente"
    ],
    "c": 0,
    "e": "Cada except puede manejar tipos específicos."
  },
  {
    "q": "¿Qué puede contener str(error)?",
    "a": [
      "El mensaje de la excepción",
      "Siempre el código fuente completo",
      "La ruta de todas las carpetas"
    ],
    "c": 0,
    "e": "La conversión a texto suele mostrar el mensaje de la excepción."
  }
];

practicaExtendida[20] = [
  {
    "q": "¿Qué hace raise?",
    "a": [
      "Lanza una excepción",
      "Imprime automáticamente cualquier dato",
      "Crea un archivo"
    ],
    "c": 0,
    "e": "raise inicia o vuelve a lanzar una excepción."
  },
  {
    "q": "¿Cuándo se ejecuta else de try?",
    "a": [
      "Cuando el bloque try termina sin excepción",
      "Cuando siempre ocurre cualquier error",
      "Antes de try"
    ],
    "c": 0,
    "e": "El else se ejecuta cuando try termina normalmente."
  },
  {
    "q": "¿Para qué sirve finally?",
    "a": [
      "Para ejecutar acciones de cierre al salir del try",
      "Para capturar solo ValueError",
      "Para repetir automáticamente la operación"
    ],
    "c": 0,
    "e": "finally se ejecuta durante la salida del bloque, con o sin excepción en condiciones normales."
  },
  {
    "q": "¿Qué ocurre después de raise dentro del mismo bloque si no se captura allí?",
    "a": [
      "Las instrucciones siguientes se omiten",
      "Se ejecutan siempre",
      "Se transforma el error en texto"
    ],
    "c": 0,
    "e": "raise transfiere el control al manejador compatible."
  },
  {
    "q": "¿Cómo se lanza un error con mensaje?",
    "a": [
      "raise ValueError(\"dato inválido\")",
      "print ValueError",
      "except \"dato inválido\""
    ],
    "c": 0,
    "e": "raise recibe una excepción o una clase de excepción."
  },
  {
    "q": "¿Puede try tener else?",
    "a": [
      "Sí, junto con al menos un except",
      "Solo si no hay except",
      "No, nunca"
    ],
    "c": 0,
    "e": "La cláusula else requiere al menos un except."
  },
  {
    "q": "¿Puede try usar finally sin except?",
    "a": [
      "Sí",
      "No",
      "Solo con una base de datos"
    ],
    "c": 0,
    "e": "try/finally es una construcción válida."
  },
  {
    "q": "¿finally se ejecuta al producirse una excepción dentro de try?",
    "a": [
      "Sí, al salir del bloque en condiciones normales",
      "No, nunca",
      "Solo si el error es ValueError"
    ],
    "c": 0,
    "e": "finally se ejecuta antes de que continúe la propagación."
  },
  {
    "q": "¿Para qué puede usarse finally?",
    "a": [
      "Para liberar un recurso",
      "Para comprobar únicamente igualdad",
      "Para definir argumentos"
    ],
    "c": 0,
    "e": "Puede ayudar a cerrar recursos o registrar una salida."
  },
  {
    "q": "¿Qué hace raise sin argumento dentro de except?",
    "a": [
      "Vuelve a lanzar la excepción activa",
      "Borra la excepción",
      "Devuelve None"
    ],
    "c": 0,
    "e": "Un raise sin argumento relanza la excepción activa."
  }
];

practicaExtendida[21] = [
  {
    "q": "¿Cómo se crea una excepción personalizada?",
    "a": [
      "Definiendo una clase que herede de Exception",
      "Creando solo una variable de texto",
      "Usando print"
    ],
    "c": 0,
    "e": "Una clase de excepción normalmente hereda de Exception."
  },
  {
    "q": "¿Para qué sirve una excepción personalizada?",
    "a": [
      "Para representar una situación específica de la aplicación",
      "Para garantizar que nunca haya fallos",
      "Para reemplazar todas las clases"
    ],
    "c": 0,
    "e": "Permite distinguir errores propios del dominio."
  },
  {
    "q": "¿Qué hace raise DatoInvalidoError(\"nombre vacío\")?",
    "a": [
      "Lanza esa excepción con un mensaje",
      "La imprime y continúa siempre",
      "Crea un archivo"
    ],
    "c": 0,
    "e": "raise interrumpe el flujo y lanza la excepción."
  },
  {
    "q": "¿Cómo se captura una excepción propia?",
    "a": [
      "Con except y el tipo correspondiente",
      "Con un comentario",
      "Con import logging únicamente"
    ],
    "c": 0,
    "e": "except puede manejar la clase definida para el error."
  },
  {
    "q": "¿Puede una excepción propia llevar un mensaje?",
    "a": [
      "Sí",
      "No",
      "Solo si hereda de str"
    ],
    "c": 0,
    "e": "La instancia puede recibir un mensaje al construirse."
  },
  {
    "q": "¿Puede una excepción propia heredar de ValueError?",
    "a": [
      "Sí",
      "No",
      "Solo si no lleva mensaje"
    ],
    "c": 0,
    "e": "Puede heredar de una excepción adecuada a su significado."
  },
  {
    "q": "¿Qué ventaja ofrece un tipo ReservaInvalidaError?",
    "a": [
      "Permite identificar errores de reservas",
      "Elimina la necesidad de probar",
      "Hace que toda reserva sea válida"
    ],
    "c": 0,
    "e": "Un tipo específico permite un manejo diferenciado."
  },
  {
    "q": "¿Es obligatorio definir métodos adicionales en una excepción propia?",
    "a": [
      "No",
      "Sí, al menos tres",
      "Solo para usar raise"
    ],
    "c": 0,
    "e": "Una clase de excepción simple puede heredar comportamiento."
  },
  {
    "q": "¿Qué captura except DatoInvalidoError as error?",
    "a": [
      "Una instancia compatible con ese tipo",
      "Un nombre de archivo",
      "Todas las cadenas de texto"
    ],
    "c": 0,
    "e": "error referencia la excepción capturada."
  },
  {
    "q": "¿Dónde se suele validar una regla como nombre no vacío?",
    "a": [
      "En el punto de creación o validación del dato",
      "Solo en el título de la aplicación",
      "En un comentario sin ejecutar"
    ],
    "c": 0,
    "e": "La validación debe ejecutarse antes de aceptar el dato."
  }
];

practicaExtendida[22] = [
  {
    "q": "¿Qué función abre un archivo en Python?",
    "a": [
      "open()",
      "print()",
      "len()"
    ],
    "c": 0,
    "e": "open crea un objeto de archivo para la ruta indicada."
  },
  {
    "q": "¿Para qué se usa with open(...) as archivo?",
    "a": [
      "Para gestionar el contexto y cerrar el archivo al salir",
      "Para convertir cualquier archivo a JSON",
      "Para evitar toda excepción"
    ],
    "c": 0,
    "e": "El contexto cierra el recurso al finalizar el bloque."
  },
  {
    "q": "¿Qué modo abre un archivo de texto para lectura?",
    "a": [
      "r",
      "w",
      "a"
    ],
    "c": 0,
    "e": "r es el modo de lectura predeterminado."
  },
  {
    "q": "¿Qué hace el modo w?",
    "a": [
      "Abre para escritura y trunca el archivo existente",
      "Solo lee el archivo",
      "Añade siempre al final sin truncar"
    ],
    "c": 0,
    "e": "w crea o sobrescribe el contenido existente."
  },
  {
    "q": "¿Qué hace el modo a?",
    "a": [
      "Abre para añadir al final",
      "Siempre borra el contenido",
      "Solo permite leer"
    ],
    "c": 0,
    "e": "a abre para escritura en modo de adición."
  },
  {
    "q": "¿Qué devuelve archivo.read() en modo texto?",
    "a": [
      "Una cadena con el contenido leído",
      "Una lista de números siempre",
      "Un booleano"
    ],
    "c": 0,
    "e": "read devuelve texto cuando el archivo está en modo texto."
  },
  {
    "q": "¿Qué hace archivo.write(\"Hola\")?",
    "a": [
      "Escribe la cadena en el archivo abierto",
      "Lee la primera línea",
      "Cierra Python"
    ],
    "c": 0,
    "e": "write envía texto al archivo abierto para escritura."
  },
  {
    "q": "¿Qué ocurre normalmente al salir de with open?",
    "a": [
      "El archivo se cierra",
      "La carpeta se borra",
      "Se ejecuta el archivo como programa"
    ],
    "c": 0,
    "e": "El gestor de contexto cierra el archivo."
  },
  {
    "q": "¿Qué excepción puede aparecer al abrir una ruta inexistente para lectura?",
    "a": [
      "FileNotFoundError",
      "ZeroDivisionError",
      "IndexError"
    ],
    "c": 0,
    "e": "La ruta solicitada no existe para esa operación."
  },
  {
    "q": "¿Para qué sirve encoding=\"utf-8\" al abrir texto?",
    "a": [
      "Para especificar la codificación del texto",
      "Para definir una contraseña",
      "Para crear un ciclo"
    ],
    "c": 0,
    "e": "La codificación indica cómo convertir texto y bytes."
  }
];

practicaExtendida[23] = [
  {
    "q": "¿Qué es un módulo de Python?",
    "a": [
      "Un archivo o unidad importable con código Python",
      "Una instancia obligatoria de una clase",
      "Un error de sintaxis"
    ],
    "c": 0,
    "e": "Un módulo permite organizar y reutilizar código."
  },
  {
    "q": "¿Qué hace import math?",
    "a": [
      "Importa el módulo math",
      "Calcula una raíz automáticamente",
      "Instala Python"
    ],
    "c": 0,
    "e": "import carga el módulo para utilizarlo."
  },
  {
    "q": "¿Cómo accedes a sqrt tras import math?",
    "a": [
      "math.sqrt",
      "sqrt sin importación previa",
      "math->sqrt"
    ],
    "c": 0,
    "e": "El punto permite consultar atributos del módulo."
  },
  {
    "q": "¿Qué hace from math import sqrt?",
    "a": [
      "Importa el nombre sqrt al ámbito actual",
      "Importa todos los archivos del computador",
      "Define una clase sqrt"
    ],
    "c": 0,
    "e": "La instrucción importa el nombre indicado desde math."
  },
  {
    "q": "¿Qué permite import math as m?",
    "a": [
      "Usar m como alias del módulo",
      "Cambiar permanentemente el nombre del módulo",
      "Borrar math"
    ],
    "c": 0,
    "e": "as asigna un alias en el ámbito actual."
  },
  {
    "q": "¿Para qué sirve organizar código en módulos?",
    "a": [
      "Para separar responsabilidades y reutilizarlo",
      "Para eliminar todas las pruebas",
      "Para impedir la colaboración"
    ],
    "c": 0,
    "e": "Los módulos permiten organizar funcionalidades relacionadas."
  },
  {
    "q": "¿Qué error puede aparecer si un módulo no se encuentra?",
    "a": [
      "ModuleNotFoundError",
      "IndexError",
      "ZeroDivisionError"
    ],
    "c": 0,
    "e": "La importación falla cuando no se encuentra el módulo solicitado."
  },
  {
    "q": "¿Qué es la biblioteca estándar?",
    "a": [
      "Un conjunto de módulos incluidos en Python",
      "Una única clase llamada Python",
      "Un editor obligatorio"
    ],
    "c": 0,
    "e": "Python proporciona muchos módulos estándar."
  },
  {
    "q": "¿Qué hace import?",
    "a": [
      "Busca y carga un módulo según el sistema de importación",
      "Crea automáticamente una base de datos",
      "Ejecuta siempre el programa completo desde cero"
    ],
    "c": 0,
    "e": "La importación localiza un módulo y lo pone a disposición."
  },
  {
    "q": "¿Para qué sirve un alias de importación?",
    "a": [
      "Para referirse a un módulo o nombre con otro identificador",
      "Para cifrar el código",
      "Para convertirlo en lista"
    ],
    "c": 0,
    "e": "as permite usar un nombre local diferente."
  }
];

practicaExtendida[24] = [
  {
    "q": "¿A qué se refiere self en un método de instancia?",
    "a": [
      "A la instancia actual",
      "A todas las instancias a la vez",
      "Al editor de código"
    ],
    "c": 0,
    "e": "self representa el objeto que recibe la llamada."
  },
  {
    "q": "¿Qué es un atributo de instancia?",
    "a": [
      "Un dato asociado a un objeto",
      "Un archivo obligatorio",
      "Una excepción integrada"
    ],
    "c": 0,
    "e": "Cada instancia puede mantener sus propios atributos."
  },
  {
    "q": "¿Cómo accedes al atributo nombre de cliente?",
    "a": [
      "cliente.nombre",
      "cliente->nombre",
      "nombre.cliente siempre"
    ],
    "c": 0,
    "e": "El punto permite acceder al atributo del objeto."
  },
  {
    "q": "¿Qué hace self.nombre = nombre?",
    "a": [
      "Asigna un atributo a la instancia",
      "Define otra clase",
      "Imprime el nombre necesariamente"
    ],
    "c": 0,
    "e": "La instancia guarda el valor recibido en su atributo."
  },
  {
    "q": "¿Qué es un método?",
    "a": [
      "Una función definida en una clase",
      "Solo un texto impreso",
      "Una carpeta del proyecto"
    ],
    "c": 0,
    "e": "Los métodos proporcionan comportamiento a objetos o clases."
  },
  {
    "q": "¿Cómo llamas al método confirmar de reserva?",
    "a": [
      "reserva.confirmar()",
      "reserva.confirmar sin paréntesis",
      "confirmar.reserva"
    ],
    "c": 0,
    "e": "Los paréntesis realizan la llamada."
  },
  {
    "q": "¿Qué método suele inicializar una instancia?",
    "a": [
      "__init__",
      "__file__",
      "__name__"
    ],
    "c": 0,
    "e": "__init__ prepara el estado inicial de la instancia."
  },
  {
    "q": "¿Dos instancias pueden tener valores diferentes para nombre?",
    "a": [
      "Sí",
      "No",
      "Solo si usan archivos distintos"
    ],
    "c": 0,
    "e": "Los atributos de instancia pueden diferir."
  },
  {
    "q": "¿Qué sucede al acceder a un atributo inexistente sin manejo especial?",
    "a": [
      "Puede producirse AttributeError",
      "Se crea automáticamente con 0",
      "Siempre se imprime None"
    ],
    "c": 0,
    "e": "El acceso falla si no se encuentra el atributo."
  },
  {
    "q": "¿Es obligatorio escribir self como primer parámetro por sintaxis?",
    "a": [
      "No, pero es la convención habitual",
      "Sí, es una palabra reservada",
      "Solo en Python 2"
    ],
    "c": 0,
    "e": "El nombre self es una convención; importa la posición del parámetro."
  }
];

practicaExtendida[25] = [
  {
    "q": "¿Qué significa encapsular en una clase?",
    "a": [
      "Organizar y controlar el acceso al estado y comportamiento",
      "Cifrar automáticamente todos los datos",
      "Eliminar todos los atributos"
    ],
    "c": 0,
    "e": "La encapsulación ayuda a definir cómo se usa y modifica el estado."
  },
  {
    "q": "¿Qué sugiere un nombre que comienza con un guion bajo?",
    "a": [
      "Que es de uso interno por convención",
      "Que Python lo oculta de forma absoluta",
      "Que es una constante obligatoria"
    ],
    "c": 0,
    "e": "Un guion bajo inicial comunica una intención de uso interno."
  },
  {
    "q": "¿Qué hace el doble guion bajo inicial en __numero?",
    "a": [
      "Activa la transformación de nombre en la clase",
      "Cifra el valor",
      "Hace imposible todo acceso"
    ],
    "c": 0,
    "e": "Python transforma el nombre para reducir colisiones; no proporciona privacidad absoluta."
  },
  {
    "q": "¿Para qué sirve @property?",
    "a": [
      "Para exponer un método mediante acceso como atributo",
      "Para importar módulos",
      "Para crear un archivo"
    ],
    "c": 0,
    "e": "Una propiedad permite calcular o controlar el acceso usando sintaxis de atributo."
  },
  {
    "q": "¿Cómo se lee una propiedad nombre de cliente?",
    "a": [
      "cliente.nombre",
      "cliente.nombre() siempre",
      "Cliente(nombre).property"
    ],
    "c": 0,
    "e": "Una propiedad se consulta con sintaxis de atributo."
  },
  {
    "q": "¿Qué puede hacer un getter?",
    "a": [
      "Devolver un valor o calcularlo",
      "Crear siempre otra clase",
      "Borrar todos los atributos"
    ],
    "c": 0,
    "e": "Un getter proporciona acceso controlado o calculado."
  },
  {
    "q": "¿Qué puede hacer un setter?",
    "a": [
      "Validar y asignar un nuevo valor",
      "Evitar toda excepción en el programa",
      "Importar Python"
    ],
    "c": 0,
    "e": "Un setter puede aplicar reglas antes de modificar el estado."
  },
  {
    "q": "¿Una propiedad sin setter permite asignarla normalmente?",
    "a": [
      "No, normalmente produce AttributeError",
      "Sí, siempre",
      "Solo si tiene números"
    ],
    "c": 0,
    "e": "Sin setter, la propiedad no admite asignación ordinaria."
  },
  {
    "q": "¿__dato es seguridad absoluta en Python?",
    "a": [
      "No",
      "Sí",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "La transformación de nombre no es una barrera de seguridad."
  },
  {
    "q": "¿Por qué validar antes de modificar un atributo?",
    "a": [
      "Para conservar reglas sobre el estado",
      "Para impedir usar funciones",
      "Para garantizar que el programa nunca falle"
    ],
    "c": 0,
    "e": "Las validaciones protegen las invariantes de la clase."
  }
];

practicaExtendida[26] = [
  {
    "q": "¿Qué permite la herencia?",
    "a": [
      "Definir una clase a partir de otra",
      "Eliminar automáticamente todas las pruebas",
      "Convertir una función en archivo"
    ],
    "c": 0,
    "e": "Una clase hija puede reutilizar y especializar comportamiento."
  },
  {
    "q": "¿Cómo se declara una clase Perro que hereda de Animal?",
    "a": [
      "class Perro(Animal):",
      "class Perro inherits Animal:",
      "def Perro(Animal):"
    ],
    "c": 0,
    "e": "La clase base se escribe entre paréntesis."
  },
  {
    "q": "¿Qué es una clase base?",
    "a": [
      "Una clase de la cual otra hereda",
      "Un objeto creado por input",
      "Un método sin parámetros"
    ],
    "c": 0,
    "e": "La clase base define comportamiento que una hija puede heredar."
  },
  {
    "q": "¿Qué es una clase hija?",
    "a": [
      "Una clase derivada de una clase base",
      "Un archivo de pruebas",
      "Un tipo de cadena"
    ],
    "c": 0,
    "e": "La clase hija amplía o especializa la base."
  },
  {
    "q": "¿Qué permite super()?",
    "a": [
      "Acceder al siguiente método de la jerarquía de resolución",
      "Crear siempre una instancia nueva",
      "Eliminar la clase padre"
    ],
    "c": 0,
    "e": "super facilita delegar en la implementación correspondiente de la jerarquía."
  },
  {
    "q": "¿Para qué puede usarse super().__init__()?",
    "a": [
      "Para inicializar la parte heredada de la instancia",
      "Para imprimir todas las clases",
      "Para borrar atributos"
    ],
    "c": 0,
    "e": "La hija puede delegar la inicialización a la implementación heredada."
  },
  {
    "q": "¿Qué es sobrescribir un método?",
    "a": [
      "Definir en la hija una implementación con el mismo nombre",
      "Cambiar el nombre del archivo",
      "Convertir el método en comentario"
    ],
    "c": 0,
    "e": "La implementación de la hija puede especializar el comportamiento."
  },
  {
    "q": "¿Una hija puede usar un método heredado que no sobrescribe?",
    "a": [
      "Sí",
      "No",
      "Solo si no tiene atributos"
    ],
    "c": 0,
    "e": "El método puede encontrarse en una clase base."
  },
  {
    "q": "¿Qué comprueba isinstance(perro, Animal) si Perro hereda de Animal y perro es una instancia de Perro?",
    "a": [
      "True",
      "False siempre",
      "Que perro es una cadena"
    ],
    "c": 0,
    "e": "Una instancia de la hija también es instancia de la base."
  },
  {
    "q": "¿La herencia implica necesariamente que todas las instancias tengan el mismo estado?",
    "a": [
      "No",
      "Sí",
      "Solo cuando hay métodos"
    ],
    "c": 0,
    "e": "Los atributos de instancia pueden tener valores distintos."
  }
];

practicaExtendida[27] = [
  {
    "q": "¿Qué significa polimorfismo en este contexto?",
    "a": [
      "Usar una operación común con objetos de diferentes tipos",
      "Guardar todo como texto",
      "Crear una sola clase para todo"
    ],
    "c": 0,
    "e": "Objetos distintos pueden responder a la misma operación de formas apropiadas."
  },
  {
    "q": "¿Qué es una clase abstracta?",
    "a": [
      "Una clase que puede definir una interfaz incompleta para sus derivadas",
      "Una instancia ya creada",
      "Un tipo de archivo"
    ],
    "c": 0,
    "e": "Una clase abstracta puede declarar métodos que deben implementarse."
  },
  {
    "q": "¿Qué módulo proporciona ABC y abstractmethod?",
    "a": [
      "abc",
      "json",
      "logging"
    ],
    "c": 0,
    "e": "abc contiene herramientas para clases base abstractas."
  },
  {
    "q": "¿Qué indica @abstractmethod?",
    "a": [
      "Que el método es abstracto en una clase base apropiada",
      "Que Python lo ejecuta automáticamente",
      "Que el método es privado"
    ],
    "c": 0,
    "e": "Marca un método como abstracto para el mecanismo de ABC."
  },
  {
    "q": "¿Se puede instanciar normalmente una clase ABC con métodos abstractos pendientes?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "Una clase con métodos abstractos sin implementar no puede instanciarse normalmente."
  },
  {
    "q": "¿Pueden dos clases implementar calcular_costo de manera diferente?",
    "a": [
      "Sí",
      "No",
      "Solo si usan el mismo atributo"
    ],
    "c": 0,
    "e": "Cada tipo puede definir su propia forma de calcular."
  },
  {
    "q": "¿Qué es una interfaz en términos generales?",
    "a": [
      "Un conjunto de operaciones disponibles para usar un objeto",
      "Solo la apariencia de una pantalla",
      "Una excepción de Python"
    ],
    "c": 0,
    "e": "Una interfaz describe cómo interactuar con una abstracción."
  },
  {
    "q": "¿Qué significa sobrescribir un método?",
    "a": [
      "Definir otra implementación en una clase derivada",
      "Borrar todas las instancias",
      "Convertir el método a texto"
    ],
    "c": 0,
    "e": "La clase derivada puede especializar la operación."
  },
  {
    "q": "¿Para qué sirve una clase base Servicio con calcular_costo abstracto?",
    "a": [
      "Para establecer una operación que las implementaciones deben proporcionar",
      "Para calcular siempre el mismo precio sin implementación",
      "Para impedir crear subclases"
    ],
    "c": 0,
    "e": "La base puede establecer un contrato para servicios concretos."
  },
  {
    "q": "¿Polimorfismo exige que todas las clases tengan exactamente los mismos atributos?",
    "a": [
      "No",
      "Sí",
      "Solo con números"
    ],
    "c": 0,
    "e": "Lo relevante es que proporcionen la operación esperada en ese contexto."
  }
];

practicaExtendida[28] = [
  {
    "q": "¿Qué es un iterable?",
    "a": [
      "Un objeto del que puede obtenerse un iterador",
      "Una función que siempre devuelve números",
      "Una excepción de archivo"
    ],
    "c": 0,
    "e": "Un iterable puede entregar sus elementos mediante un iterador."
  },
  {
    "q": "¿Qué hace iter(objeto)?",
    "a": [
      "Obtiene un iterador del objeto iterable",
      "Ordena el objeto",
      "Lo guarda en disco"
    ],
    "c": 0,
    "e": "iter solicita un iterador al objeto."
  },
  {
    "q": "¿Qué hace next(iterador)?",
    "a": [
      "Obtiene el siguiente elemento",
      "Reinicia el iterador",
      "Devuelve siempre todos los elementos"
    ],
    "c": 0,
    "e": "next solicita el siguiente valor disponible."
  },
  {
    "q": "¿Qué excepción indica que un iterador terminó?",
    "a": [
      "StopIteration",
      "ValueError",
      "KeyError"
    ],
    "c": 0,
    "e": "Un iterador agotado señala el final con StopIteration."
  },
  {
    "q": "¿Qué palabra produce un valor desde un generador?",
    "a": [
      "yield",
      "return siempre",
      "import"
    ],
    "c": 0,
    "e": "yield entrega un valor y suspende la función generadora."
  },
  {
    "q": "¿Qué devuelve al llamarse una función que contiene yield?",
    "a": [
      "Un objeto generador",
      "Todos sus valores como lista automáticamente",
      "Un archivo"
    ],
    "c": 0,
    "e": "La llamada crea el generador; el cuerpo avanza al iterarlo."
  },
  {
    "q": "¿Una lista es iterable?",
    "a": [
      "Sí",
      "No",
      "Solo si tiene números"
    ],
    "c": 0,
    "e": "Una lista puede proporcionar un iterador."
  },
  {
    "q": "¿Puede un for recorrer un generador?",
    "a": [
      "Sí",
      "No",
      "Solo si está vacío"
    ],
    "c": 0,
    "e": "for consume los valores proporcionados por el generador."
  },
  {
    "q": "¿Qué significa evaluación perezosa en un generador?",
    "a": [
      "Los valores se producen cuando se solicitan",
      "Todos los valores se calculan al definir la función",
      "No se puede ejecutar código"
    ],
    "c": 0,
    "e": "El generador avanza bajo demanda."
  },
  {
    "q": "¿Se puede recorrer otra vez el mismo generador agotado para obtener los mismos valores?",
    "a": [
      "No, normalmente hay que crear otro",
      "Sí, siempre se reinicia solo",
      "Solo con print"
    ],
    "c": 0,
    "e": "Un generador conserva su estado y queda agotado."
  }
];

practicaExtendida[29] = [
  {
    "q": "¿Qué es una comprensión de lista?",
    "a": [
      "Una forma compacta de construir una lista desde un iterable",
      "Una excepción de listas",
      "Un método para borrar Python"
    ],
    "c": 0,
    "e": "Una comprensión combina una expresión con un recorrido."
  },
  {
    "q": "¿Qué produce [x * 2 for x in [1, 2]]?",
    "a": [
      "[2, 4]",
      "[1, 2]",
      "[2]"
    ],
    "c": 0,
    "e": "Cada elemento se multiplica por dos."
  },
  {
    "q": "¿Qué símbolos delimitan una comprensión de lista?",
    "a": [
      "Corchetes",
      "Llaves únicamente",
      "Comillas"
    ],
    "c": 0,
    "e": "La comprensión de lista se escribe entre corchetes."
  },
  {
    "q": "¿Qué hace el if final en [x for x in datos if x > 0]?",
    "a": [
      "Filtra elementos",
      "Termina Python",
      "Define una clase"
    ],
    "c": 0,
    "e": "Solo se incluyen elementos que cumplen la condición."
  },
  {
    "q": "¿Qué resultado produce [x for x in [1, 2, 3] if x % 2 == 0]?",
    "a": [
      "[2]",
      "[1, 3]",
      "[0, 2]"
    ],
    "c": 0,
    "e": "Solo el 2 es par."
  },
  {
    "q": "¿Una comprensión de lista crea una lista nueva?",
    "a": [
      "Sí",
      "No, siempre modifica la original",
      "Solo si hay if"
    ],
    "c": 0,
    "e": "La expresión construye una lista resultado."
  },
  {
    "q": "¿Puede una comprensión construir un conjunto?",
    "a": [
      "Sí, con llaves y una expresión",
      "No",
      "Solo si usa print"
    ],
    "c": 0,
    "e": "{expresión for ...} crea un set."
  },
  {
    "q": "¿Puede una comprensión construir un diccionario?",
    "a": [
      "Sí, con clave: valor",
      "No",
      "Solo con listas vacías"
    ],
    "c": 0,
    "e": "{clave: valor for ...} crea un diccionario."
  },
  {
    "q": "¿Qué produce [x + 1 for x in [0, 2]]?",
    "a": [
      "[1, 3]",
      "[0, 2]",
      "[1, 2]"
    ],
    "c": 0,
    "e": "La expresión suma uno a cada valor."
  },
  {
    "q": "¿Siempre es mejor una comprensión compleja que un for explícito?",
    "a": [
      "No; importa la legibilidad",
      "Sí, siempre",
      "Solo si contiene tres ciclos"
    ],
    "c": 0,
    "e": "Un for explícito puede ser más claro en lógica compleja."
  }
];

practicaExtendida[30] = [
  {
    "q": "¿Qué es un decorador?",
    "a": [
      "Un callable que recibe y devuelve un objeto, habitualmente una función",
      "Una clase de archivo",
      "Un comentario obligatorio"
    ],
    "c": 0,
    "e": "Un decorador puede envolver o modificar comportamiento."
  },
  {
    "q": "¿Qué significa @decorador sobre una función?",
    "a": [
      "Aplicar el decorador a la función definida",
      "Ejecutar siempre un ciclo infinito",
      "Crear una excepción"
    ],
    "c": 0,
    "e": "La función se pasa al decorador y el resultado se asigna al nombre."
  },
  {
    "q": "¿Puede una función recibirse como argumento?",
    "a": [
      "Sí",
      "No",
      "Solo si retorna texto"
    ],
    "c": 0,
    "e": "En Python las funciones son objetos y pueden pasarse."
  },
  {
    "q": "¿Puede una función devolver otra función?",
    "a": [
      "Sí",
      "No",
      "Solo con archivos"
    ],
    "c": 0,
    "e": "Una función puede crear y devolver otra función."
  },
  {
    "q": "¿Qué suele hacer una función interna wrapper?",
    "a": [
      "Llamar la función original y añadir comportamiento",
      "Borrar el módulo",
      "Detener Python siempre"
    ],
    "c": 0,
    "e": "Un wrapper puede ejecutar acciones antes o después."
  },
  {
    "q": "¿Qué permite *args y **kwargs en un wrapper?",
    "a": [
      "Recibir argumentos posicionales y por nombre",
      "Instalar paquetes",
      "Crear una base de datos"
    ],
    "c": 0,
    "e": "Permiten reenviar distintas llamadas a la función envuelta."
  },
  {
    "q": "¿Para qué sirve functools.wraps?",
    "a": [
      "Ayuda a conservar metadatos de la función envuelta",
      "Ejecuta automáticamente todas las pruebas",
      "Elimina excepciones"
    ],
    "c": 0,
    "e": "wraps copia metadatos útiles al wrapper."
  },
  {
    "q": "¿Un decorador puede validar datos antes de llamar la función?",
    "a": [
      "Sí",
      "No",
      "Solo si devuelve una clase"
    ],
    "c": 0,
    "e": "Puede ejecutar comprobaciones antes de delegar."
  },
  {
    "q": "¿Un decorador debe devolver obligatoriamente None?",
    "a": [
      "No",
      "Sí",
      "Solo en Python 3"
    ],
    "c": 0,
    "e": "El decorador suele devolver un callable, aunque depende de su propósito."
  },
  {
    "q": "¿Para qué puede usarse un decorador?",
    "a": [
      "Añadir registro o medición alrededor de una función",
      "Cambiar el sistema operativo",
      "Garantizar que nunca haya fallos"
    ],
    "c": 0,
    "e": "Puede encapsular comportamiento transversal reutilizable."
  }
];

practicaExtendida[31] = [
  {
    "q": "¿Para qué sirven las pruebas automatizadas?",
    "a": [
      "Para comprobar comportamientos esperados de forma repetible",
      "Para demostrar ausencia absoluta de errores",
      "Para evitar ejecutar código"
    ],
    "c": 0,
    "e": "Las pruebas comparan resultados con expectativas."
  },
  {
    "q": "¿Qué módulo estándar ofrece TestCase?",
    "a": [
      "unittest",
      "json",
      "abc"
    ],
    "c": 0,
    "e": "unittest incluye clases para organizar pruebas."
  },
  {
    "q": "¿Qué comprueba assertEqual(a, b)?",
    "a": [
      "Que a y b sean iguales",
      "Que sean archivos",
      "Que ambos sean positivos"
    ],
    "c": 0,
    "e": "assertEqual falla si los valores no son iguales."
  },
  {
    "q": "¿Qué comprueba assertTrue(valor)?",
    "a": [
      "Que el valor sea verdadero en contexto booleano",
      "Que sea exactamente el texto True",
      "Que sea una lista"
    ],
    "c": 0,
    "e": "assertTrue verifica el valor de verdad."
  },
  {
    "q": "¿Qué permite assertRaises?",
    "a": [
      "Comprobar que se produzca una excepción esperada",
      "Ignorar todas las excepciones",
      "Convertir un error en archivo"
    ],
    "c": 0,
    "e": "assertRaises verifica el tipo de excepción esperado."
  },
  {
    "q": "¿Qué es un caso de prueba?",
    "a": [
      "Una comprobación de un comportamiento o escenario",
      "Una copia de seguridad siempre",
      "Un módulo de interfaz"
    ],
    "c": 0,
    "e": "Un caso define condiciones y un resultado esperado."
  },
  {
    "q": "¿Qué resultado indica un fallo de aserción?",
    "a": [
      "Que la expectativa comprobada no se cumplió",
      "Que la prueba necesariamente está bien y el producto mal",
      "Que se borraron los datos"
    ],
    "c": 0,
    "e": "El fallo requiere investigar código, prueba y expectativa."
  },
  {
    "q": "¿Conviene probar datos válidos e inválidos?",
    "a": [
      "Sí",
      "No, solo válidos",
      "Solo datos vacíos"
    ],
    "c": 0,
    "e": "Los casos variados ayudan a comprobar reglas y errores."
  },
  {
    "q": "¿Qué es un valor límite?",
    "a": [
      "Un dato situado en el borde de una regla",
      "Un comentario largo",
      "Un número elegido al azar siempre"
    ],
    "c": 0,
    "e": "Los límites pueden revelar errores de comparación."
  },
  {
    "q": "¿Qué hace setUp en TestCase?",
    "a": [
      "Prepara condiciones antes de cada prueba",
      "Ejecuta automáticamente Git push",
      "Cierra Python"
    ],
    "c": 0,
    "e": "setUp puede crear los objetos necesarios para cada prueba."
  }
];

practicaExtendida[32] = [
  {
    "q": "¿Qué es JSON?",
    "a": [
      "Un formato textual para intercambiar datos",
      "Una clase exclusiva de Python",
      "Una base de datos obligatoria"
    ],
    "c": 0,
    "e": "JSON representa datos estructurados en texto."
  },
  {
    "q": "¿Qué módulo estándar maneja JSON?",
    "a": [
      "json",
      "abc",
      "math exclusivamente"
    ],
    "c": 0,
    "e": "El módulo json convierte entre texto JSON y objetos Python."
  },
  {
    "q": "¿Qué hace json.loads(texto)?",
    "a": [
      "Convierte texto JSON a objetos Python",
      "Guarda directamente un archivo",
      "Crea una función"
    ],
    "c": 0,
    "e": "loads analiza una cadena JSON."
  },
  {
    "q": "¿Qué hace json.dumps(objeto)?",
    "a": [
      "Convierte un objeto compatible a texto JSON",
      "Abre una carpeta",
      "Ejecuta una consulta SQL"
    ],
    "c": 0,
    "e": "dumps serializa un objeto compatible a una cadena."
  },
  {
    "q": "¿Qué hace json.load(archivo)?",
    "a": [
      "Lee JSON desde un archivo abierto",
      "Convierte una cadena sin leer archivo",
      "Cierra siempre la aplicación"
    ],
    "c": 0,
    "e": "load analiza JSON desde un archivo."
  },
  {
    "q": "¿Qué hace json.dump(objeto, archivo)?",
    "a": [
      "Escribe JSON en un archivo abierto",
      "Devuelve siempre una lista",
      "Lee datos del teclado"
    ],
    "c": 0,
    "e": "dump serializa el objeto hacia el archivo."
  },
  {
    "q": "¿Qué representa un objeto JSON en Python normalmente?",
    "a": [
      "Un dict",
      "Una tupla obligatoria",
      "Una clase abstracta"
    ],
    "c": 0,
    "e": "Los objetos JSON se decodifican normalmente como diccionarios."
  },
  {
    "q": "¿Qué representa un arreglo JSON en Python normalmente?",
    "a": [
      "Una list",
      "Un set",
      "Una función"
    ],
    "c": 0,
    "e": "Los arreglos JSON se decodifican como listas."
  },
  {
    "q": "¿Qué valor Python corresponde a null en JSON?",
    "a": [
      "None",
      "False",
      "\"null\" siempre"
    ],
    "c": 0,
    "e": "El decodificador representa null como None."
  },
  {
    "q": "¿Qué valor Python corresponde a true en JSON?",
    "a": [
      "True",
      "\"true\"",
      "1 como texto"
    ],
    "c": 0,
    "e": "El booleano JSON true se decodifica como True."
  }
];

practicaExtendida[33] = [
  {
    "q": "¿Para qué sirve un entorno virtual?",
    "a": [
      "Aislar dependencias de un proyecto",
      "Cambiar la versión del navegador",
      "Reemplazar Git"
    ],
    "c": 0,
    "e": "Permite que proyectos distintos utilicen conjuntos de paquetes separados."
  },
  {
    "q": "¿Qué comando crea un entorno llamado .venv?",
    "a": [
      "python -m venv .venv",
      "python -m pip .venv",
      "python crear .venv"
    ],
    "c": 0,
    "e": "El módulo estándar venv crea el directorio del entorno."
  },
  {
    "q": "¿Dónde se activa normalmente un entorno en Windows PowerShell?",
    "a": [
      ".venv\\Scripts\\Activate.ps1",
      ".venv/bin/activate",
      "python activar"
    ],
    "c": 0,
    "e": "La ruta de activación depende del sistema y de la terminal."
  },
  {
    "q": "¿Qué comando activa habitualmente un entorno en bash?",
    "a": [
      "source .venv/bin/activate",
      ".venv\\Scripts\\Activate.ps1",
      "pip activate .venv"
    ],
    "c": 0,
    "e": "En sistemas tipo Unix el script de bash se encuentra en bin."
  },
  {
    "q": "¿Qué hace python -m pip install requests?",
    "a": [
      "Instala el paquete requests para ese intérprete",
      "Inicia el servidor de Python",
      "Crea una clase requests"
    ],
    "c": 0,
    "e": "python -m pip vincula pip con el intérprete indicado."
  },
  {
    "q": "¿Es necesario activar un entorno para usar su intérprete?",
    "a": [
      "No, se puede invocar directamente su Python",
      "Sí, es obligatorio siempre",
      "Solo en Windows"
    ],
    "c": 0,
    "e": "La activación es una comodidad que modifica las rutas de la terminal."
  },
  {
    "q": "¿Qué es un paquete de Python?",
    "a": [
      "Una forma de organizar módulos relacionados",
      "Una contraseña de acceso",
      "Un archivo de registro exclusivamente"
    ],
    "c": 0,
    "e": "Un paquete agrupa módulos que se pueden importar."
  },
  {
    "q": "¿Se deben guardar contraseñas en el repositorio?",
    "a": [
      "No, deben protegerse fuera del código publicado",
      "Sí, para facilitar la instalación",
      "Solo en README"
    ],
    "c": 0,
    "e": "Las credenciales expuestas pueden comprometer servicios."
  },
  {
    "q": "¿Para qué sirve requirements.txt habitualmente?",
    "a": [
      "Declarar dependencias instalables",
      "Ejecutar pruebas automáticamente",
      "Contener el intérprete completo"
    ],
    "c": 0,
    "e": "Puede contener paquetes y restricciones de versión."
  },
  {
    "q": "¿Qué hace pip list?",
    "a": [
      "Muestra paquetes instalados en el entorno",
      "Elimina todas las dependencias",
      "Enumera archivos de Git"
    ],
    "c": 0,
    "e": "El resultado corresponde al entorno del pip ejecutado."
  }
];

practicaExtendida[34] = [
  {
    "q": "¿Para qué sirven las anotaciones de tipo?",
    "a": [
      "Comunicar los tipos esperados y apoyar herramientas",
      "Cambiar automáticamente todos los valores",
      "Evitar cualquier error en ejecución"
    ],
    "c": 0,
    "e": "Las anotaciones documentan intenciones y permiten análisis estático."
  },
  {
    "q": "¿Qué indica def doble(x: int) -> int?",
    "a": [
      "Que se espera un entero y se anuncia un retorno entero",
      "Que Python convierte cualquier entrada en entero",
      "Que la función no devuelve nada"
    ],
    "c": 0,
    "e": "Las anotaciones describen el contrato, pero no convierten valores por sí mismas."
  },
  {
    "q": "¿Python valida automáticamente todas las anotaciones al ejecutar?",
    "a": [
      "No",
      "Sí, siempre",
      "Solo si se usa print"
    ],
    "c": 0,
    "e": "Normalmente Python conserva las anotaciones sin imponerlas."
  },
  {
    "q": "¿Qué significa nombre: str = \"Ana\"?",
    "a": [
      "Se anota nombre como texto y se asigna un valor",
      "Se convierte nombre en una función",
      "Se declara una excepción"
    ],
    "c": 0,
    "e": "La anotación indica el tipo esperado de la variable."
  },
  {
    "q": "¿Qué herramienta puede revisar tipos sin ejecutar el programa?",
    "a": [
      "Un verificador estático como mypy",
      "print exclusivamente",
      "Un navegador de archivos"
    ],
    "c": 0,
    "e": "Los verificadores comparan anotaciones y usos del código."
  },
  {
    "q": "¿Qué indica list[int] en Python moderno?",
    "a": [
      "Una lista cuyos elementos se esperan enteros",
      "Un entero que siempre vale uno",
      "Una lista de archivos exclusivamente"
    ],
    "c": 0,
    "e": "La anotación describe el contenido esperado de la lista."
  },
  {
    "q": "¿Qué indica una unión entre int y None?",
    "a": [
      "Un entero o None",
      "Una división entera",
      "Una excepción de sintaxis en todo Python moderno"
    ],
    "c": 0,
    "e": "La unión expresa alternativas de tipo."
  },
  {
    "q": "¿Qué devuelve normalmente una función sin return explícito?",
    "a": [
      "None",
      "0",
      "Una cadena vacía"
    ],
    "c": 0,
    "e": "Python devuelve None al terminar la función."
  },
  {
    "q": "¿Para qué sirve -> None en una función?",
    "a": [
      "Indicar que no se espera un valor de retorno útil",
      "Forzar una excepción",
      "Convertir el resultado a texto"
    ],
    "c": 0,
    "e": "Es una anotación sobre el retorno esperado."
  },
  {
    "q": "¿Qué significa el parámetro x: float?",
    "a": [
      "Se espera un valor numérico de tipo float",
      "x se convierte automáticamente con float",
      "La función se repite"
    ],
    "c": 0,
    "e": "La anotación no realiza una conversión automática."
  }
];

practicaExtendida[35] = [
  {
    "q": "¿Para qué sirve with en gestión de recursos?",
    "a": [
      "Organizar su entrada y salida",
      "Repetir un ciclo infinito",
      "Convertir un archivo en lista"
    ],
    "c": 0,
    "e": "with utiliza el protocolo de gestión de contexto para hacer limpieza."
  },
  {
    "q": "¿Qué pasa normalmente al salir de with open(...) as archivo?",
    "a": [
      "El archivo se cierra",
      "El archivo se borra",
      "Python se cierra"
    ],
    "c": 0,
    "e": "El gestor de contexto del archivo lo cierra al salir."
  },
  {
    "q": "¿Se ejecuta la limpieza de with si el bloque lanza una excepción?",
    "a": [
      "Sí, el gestor recibe la información de la excepción",
      "Nunca",
      "Solo si el archivo está vacío"
    ],
    "c": 0,
    "e": "El método de salida se invoca incluso cuando el bloque falla."
  },
  {
    "q": "¿Qué método entra a un gestor de contexto?",
    "a": [
      "__enter__",
      "__init_subclass__",
      "__iter__"
    ],
    "c": 0,
    "e": "__enter__ prepara el recurso y puede devolver el valor asignado tras as."
  },
  {
    "q": "¿Qué método maneja la salida de un gestor de contexto?",
    "a": [
      "__exit__",
      "__next__",
      "__str__"
    ],
    "c": 0,
    "e": "__exit__ recibe información de la excepción si ocurrió."
  },
  {
    "q": "¿Qué devuelve as archivo en with open(...) as archivo?",
    "a": [
      "El valor de entrada del gestor, aquí el archivo",
      "El nombre del usuario",
      "El número de líneas"
    ],
    "c": 0,
    "e": "En el caso de open es el objeto archivo abierto."
  },
  {
    "q": "¿Qué modo abre un archivo para lectura de texto por defecto?",
    "a": [
      "r",
      "w",
      "a"
    ],
    "c": 0,
    "e": "El modo r lee un archivo existente."
  },
  {
    "q": "¿Qué puede pasar con open(\"datos.txt\", \"w\") si el archivo ya existe?",
    "a": [
      "Su contenido se sobrescribe",
      "Solo se lee",
      "Se crea una copia automática"
    ],
    "c": 0,
    "e": "El modo w trunca el archivo existente al abrirlo."
  },
  {
    "q": "¿Qué modo añade texto al final de un archivo?",
    "a": [
      "a",
      "r",
      "x"
    ],
    "c": 0,
    "e": "El modo a abre para agregar al final."
  },
  {
    "q": "¿Por qué indicar encoding=\"utf-8\" al abrir texto?",
    "a": [
      "Para especificar cómo se codifican los caracteres",
      "Para duplicar el archivo",
      "Para impedir todas las excepciones"
    ],
    "c": 0,
    "e": "Especificar la codificación ayuda a interpretar acentos de forma coherente."
  }
];

practicaExtendida[36] = [
  {
    "q": "¿Qué define async def?",
    "a": [
      "Una función que al llamarse produce una corrutina",
      "Una función que se ejecuta siempre en otro procesador",
      "Una variable global"
    ],
    "c": 0,
    "e": "La corrutina debe ejecutarse o programarse para avanzar."
  },
  {
    "q": "¿Qué hace await?",
    "a": [
      "Espera un objeto esperable cediendo el control cuando corresponde",
      "Bloquea siempre todo el sistema",
      "Define una clase"
    ],
    "c": 0,
    "e": "await permite cooperar con otras tareas del bucle de eventos."
  },
  {
    "q": "¿Qué utilidad tiene asyncio.run(corrutina())?",
    "a": [
      "Ejecutar una corrutina principal en un bucle de eventos",
      "Convertir una lista en tupla",
      "Crear un proceso Git"
    ],
    "c": 0,
    "e": "asyncio.run administra un bucle de eventos para la llamada principal."
  },
  {
    "q": "¿Para qué suele ser útil asincronía?",
    "a": [
      "Gestionar numerosas esperas de entrada y salida",
      "Hacer que cualquier cálculo CPU sea paralelo automáticamente",
      "Reemplazar toda validación"
    ],
    "c": 0,
    "e": "Las tareas pueden avanzar mientras otras esperan operaciones compatibles."
  },
  {
    "q": "¿Llamar una función async ejecuta inmediatamente todo su cuerpo?",
    "a": [
      "No, crea una corrutina",
      "Sí, siempre termina antes de devolver",
      "Solo si contiene print"
    ],
    "c": 0,
    "e": "La corrutina necesita ser esperada o programada."
  },
  {
    "q": "¿Qué hace await asyncio.sleep(1)?",
    "a": [
      "Suspende la tarea de forma cooperativa durante la espera",
      "Cierra el programa para siempre",
      "Crea un archivo"
    ],
    "c": 0,
    "e": "Otras tareas del bucle pueden avanzar durante esa espera."
  },
  {
    "q": "¿async y await garantizan por sí solos paralelismo de CPU?",
    "a": [
      "No",
      "Sí, siempre usan varios núcleos",
      "Solo en listas"
    ],
    "c": 0,
    "e": "La concurrencia asíncrona no implica ejecución paralela de CPU."
  },
  {
    "q": "¿Dónde puede usarse await directamente?",
    "a": [
      "Dentro de una función async",
      "En cualquier archivo sin contexto",
      "Dentro de un comentario"
    ],
    "c": 0,
    "e": "En código Python normal await requiere un contexto asíncrono apropiado."
  },
  {
    "q": "¿Qué representa una tarea en asyncio?",
    "a": [
      "Una corrutina programada para ejecutarse",
      "Un archivo de texto",
      "Una excepción de importación"
    ],
    "c": 0,
    "e": "Una tarea permite que el bucle avance la corrutina."
  },
  {
    "q": "¿Qué hace asyncio.create_task(coro())?",
    "a": [
      "Programa la corrutina como tarea en el bucle activo",
      "La convierte en un entero",
      "Bloquea todos los ciclos"
    ],
    "c": 0,
    "e": "Se usa dentro de un bucle en ejecución para programar trabajo concurrente."
  }
];

practicaExtendida[37] = [
  {
    "q": "¿Para qué sirve una base de datos?",
    "a": [
      "Guardar y consultar información de forma organizada",
      "Reemplazar Python siempre",
      "Guardar solo imágenes"
    ],
    "c": 0,
    "e": "Una base de datos puede conservar registros entre ejecuciones."
  },
  {
    "q": "¿Qué módulo estándar permite usar SQLite?",
    "a": [
      "sqlite3",
      "jsondb",
      "random"
    ],
    "c": 0,
    "e": "sqlite3 viene con Python para trabajar con SQLite."
  },
  {
    "q": "¿Qué crea sqlite3.connect(\":memory:\")?",
    "a": [
      "Una base de datos temporal en memoria",
      "Un archivo permanente llamado memory",
      "Una conexión obligatoria a internet"
    ],
    "c": 0,
    "e": "La base de datos existe en memoria durante la conexión correspondiente."
  },
  {
    "q": "¿Qué instrucción SQL crea una tabla?",
    "a": [
      "CREATE TABLE",
      "READ TABLE",
      "OPEN TABLE"
    ],
    "c": 0,
    "e": "CREATE TABLE define una tabla y sus columnas."
  },
  {
    "q": "¿Qué instrucción SQL consulta registros?",
    "a": [
      "SELECT",
      "INSERT",
      "DROP"
    ],
    "c": 0,
    "e": "SELECT recupera datos según la consulta."
  },
  {
    "q": "¿Qué instrucción SQL agrega filas?",
    "a": [
      "INSERT",
      "SELECT",
      "DELETE"
    ],
    "c": 0,
    "e": "INSERT inserta registros en una tabla."
  },
  {
    "q": "¿Qué instrucción elimina filas?",
    "a": [
      "DELETE",
      "SELECT",
      "CREATE"
    ],
    "c": 0,
    "e": "DELETE elimina filas que cumplan las condiciones indicadas."
  },
  {
    "q": "¿Cómo pasar valores a una consulta SQLite de forma segura?",
    "a": [
      "Con marcadores ? y parámetros separados",
      "Concatenando siempre lo escrito por el usuario",
      "Guardando claves en el SQL"
    ],
    "c": 0,
    "e": "Los parámetros separan valores del texto de la consulta y reducen riesgos de inyección."
  },
  {
    "q": "¿Qué es una clave primaria?",
    "a": [
      "Un identificador que distingue filas de una tabla",
      "La contraseña de GitHub",
      "El nombre de toda función"
    ],
    "c": 0,
    "e": "Una clave primaria identifica un registro de forma única."
  },
  {
    "q": "¿Para qué sirve commit en una transacción?",
    "a": [
      "Confirmar los cambios pendientes",
      "Borrar toda la base",
      "Cerrar automáticamente Python"
    ],
    "c": 0,
    "e": "commit confirma la transacción para conservar sus cambios."
  }
];

practicaExtendida[38] = [
  {
    "q": "¿Qué es una API?",
    "a": [
      "Una interfaz con reglas para que programas intercambien información",
      "Un tipo de pantalla",
      "Una variable entera"
    ],
    "c": 0,
    "e": "Una API define cómo solicitar y recibir servicios o datos."
  },
  {
    "q": "¿Para qué se utiliza normalmente HTTP GET?",
    "a": [
      "Consultar un recurso",
      "Eliminar siempre un recurso",
      "Cambiar la contraseña de Python"
    ],
    "c": 0,
    "e": "GET se usa normalmente para recuperar información."
  },
  {
    "q": "¿Para qué suele utilizarse HTTP POST?",
    "a": [
      "Enviar datos para procesar o crear un recurso",
      "Consultar exclusivamente archivos locales",
      "Cerrar el navegador"
    ],
    "c": 0,
    "e": "El significado concreto depende de la API, pero POST suele enviar datos."
  },
  {
    "q": "¿Qué indica normalmente un código HTTP 200?",
    "a": [
      "Que la solicitud fue exitosa",
      "Que el servidor no existe",
      "Que se eliminó Python"
    ],
    "c": 0,
    "e": "La familia 2xx indica respuestas exitosas."
  },
  {
    "q": "¿Qué indica generalmente HTTP 404?",
    "a": [
      "No se encontró el recurso solicitado",
      "El usuario aprobó una prueba",
      "El JSON es siempre válido"
    ],
    "c": 0,
    "e": "404 indica que el recurso no se encontró o no se revela."
  },
  {
    "q": "¿Qué indica normalmente HTTP 500?",
    "a": [
      "Un error del servidor",
      "Una respuesta exitosa",
      "Un error de sintaxis Python necesariamente"
    ],
    "c": 0,
    "e": "Los códigos 5xx señalan errores del servidor."
  },
  {
    "q": "¿Qué es JSON?",
    "a": [
      "Un formato textual de intercambio de datos",
      "Una base de datos obligatoria",
      "Un servidor web"
    ],
    "c": 0,
    "e": "JSON representa datos estructurados como objetos y arreglos."
  },
  {
    "q": "¿Qué hace json.loads(texto)?",
    "a": [
      "Convierte texto JSON en objetos Python",
      "Envía una solicitud HTTP",
      "Abre una conexión SQLite"
    ],
    "c": 0,
    "e": "loads interpreta una cadena JSON válida."
  },
  {
    "q": "¿Por qué establecer un timeout en una petición?",
    "a": [
      "Para limitar el tiempo de espera",
      "Para garantizar que la red nunca falle",
      "Para cifrar automáticamente una contraseña"
    ],
    "c": 0,
    "e": "Los límites de espera permiten reaccionar ante servicios lentos o inaccesibles."
  },
  {
    "q": "¿Dónde deben guardarse los tokens de una API?",
    "a": [
      "En una configuración protegida fuera del repositorio público",
      "En el código publicado en GitHub",
      "En una captura compartida"
    ],
    "c": 0,
    "e": "Los tokens son credenciales y deben protegerse."
  }
];

practicaExtendida[39] = [
  {
    "q": "¿Por qué dividir un proyecto en funciones?",
    "a": [
      "Para organizar responsabilidades y facilitar pruebas",
      "Para que nunca ocurran errores",
      "Para evitar nombrar variables"
    ],
    "c": 0,
    "e": "Funciones pequeñas pueden concentrarse en una tarea y ser más fáciles de comprobar."
  },
  {
    "q": "¿Qué debe hacerse antes de empezar un proyecto?",
    "a": [
      "Definir qué problema resolverá y sus requisitos",
      "Escribir código sin objetivo",
      "Publicar las contraseñas"
    ],
    "c": 0,
    "e": "Los requisitos ayudan a saber qué construir y cómo comprobarlo."
  },
  {
    "q": "¿Para qué sirve un README?",
    "a": [
      "Explicar cómo instalar, ejecutar y entender el proyecto",
      "Ejecutar automáticamente todo el código",
      "Reemplazar las pruebas"
    ],
    "c": 0,
    "e": "El README documenta el uso y los requisitos del proyecto."
  },
  {
    "q": "¿Qué debe verificar una prueba de validación?",
    "a": [
      "Casos válidos, inválidos y límites",
      "Solo el primer caso válido",
      "Solo que existe el archivo"
    ],
    "c": 0,
    "e": "Las entradas variadas ayudan a detectar fallos y casos de borde."
  },
  {
    "q": "¿Qué hace una función validar_nombre que retorna False para \"\"?",
    "a": [
      "Indica que ese nombre no pasa la validación",
      "Imprime automáticamente un error",
      "Convierte la cadena en entero"
    ],
    "c": 0,
    "e": "El valor False permite que otra parte del programa decida qué hacer."
  },
  {
    "q": "¿Qué ventaja tiene separar entrada de datos y lógica?",
    "a": [
      "Permite probar la lógica sin depender de input",
      "Obliga a usar internet",
      "Elimina todos los parámetros"
    ],
    "c": 0,
    "e": "Una función que recibe valores puede probarse con distintos datos."
  },
  {
    "q": "¿Para qué sirve Git en un proyecto?",
    "a": [
      "Registrar cambios y colaborar con control de versiones",
      "Ejecutar Python más rápido",
      "Guardar contraseñas públicamente"
    ],
    "c": 0,
    "e": "Git mantiene historial de cambios y facilita el trabajo en equipo."
  },
  {
    "q": "¿Qué se debe hacer si una función falla en un caso límite?",
    "a": [
      "Investigar y corregir el comportamiento",
      "Eliminar la prueba para ocultar el error",
      "Ignorar el resultado"
    ],
    "c": 0,
    "e": "Una prueba fallida ofrece información para localizar un problema."
  },
  {
    "q": "¿Qué hace return en una función?",
    "a": [
      "Devuelve un valor a quien la llama",
      "Muestra siempre el valor en pantalla",
      "Reinicia el programa"
    ],
    "c": 0,
    "e": "return entrega un resultado que puede guardarse o comprobarse."
  },
  {
    "q": "¿Qué deben evitar los registros de eventos?",
    "a": [
      "Exponer credenciales o datos sensibles innecesarios",
      "Registrar errores controlados",
      "Identificar la operación fallida"
    ],
    "c": 0,
    "e": "Los logs deben facilitar el diagnóstico sin revelar secretos."
  }
];
