const retosFundamentos = {
  "2": [
    {
      "tipo": "opciones",
      "titulo": "Una decisión",
      "pregunta": "Si edad vale 20, ¿se cumple edad >= 18?",
      "opciones": [
        "Sí",
        "No"
      ],
      "correcta": 0,
      "pista": "Compara 20 con 18.",
      "explicacion": "20 es mayor que 18."
    },
    {
      "tipo": "opciones",
      "titulo": "El bloque",
      "pregunta": "¿Qué indica la sangría después de if?",
      "opciones": [
        "Qué instrucciones pertenecen al bloque",
        "Que termina el programa",
        "Que es un comentario"
      ],
      "correcta": 0,
      "pista": "Mira las líneas desplazadas hacia la derecha.",
      "explicacion": "La sangría agrupa instrucciones del bloque."
    },
    {
      "tipo": "codigo",
      "titulo": "Tu primera condición",
      "pregunta": "Con edad = 20, muestra Mayor solo si edad es al menos 18.",
      "inicial": "edad = 20\n# Escribe la condición y el print\n",
      "salida": "Mayor",
      "pista": "Usa if, >= y dos puntos.",
      "explicacion": "El bloque se ejecuta cuando la condición es verdadera."
    },
    {
      "tipo": "opciones",
      "titulo": "Condición falsa",
      "pregunta": "Si edad es 16, ¿qué ocurre con el bloque de if edad >= 18?",
      "opciones": [
        "Se omite",
        "Se ejecuta siempre",
        "El programa se reinicia"
      ],
      "correcta": 0,
      "pista": "16 no alcanza 18.",
      "explicacion": "Si la condición es falsa, el bloque se omite."
    },
    {
      "tipo": "codigo",
      "titulo": "Otra posibilidad",
      "pregunta": "Si edad es menor que 18 muestra Menor; usa else para el otro caso.",
      "inicial": "edad = 16\n# Completa if y else\n",
      "salida": "Menor",
      "pista": "Compara con < y cuida la sangría.",
      "explicacion": "La rama que corresponde a la condición se ejecuta."
    },
    {
      "tipo": "opciones",
      "titulo": "Comparar",
      "pregunta": "¿Qué operador compara si dos valores son iguales?",
      "opciones": [
        "==",
        "=",
        "!="
      ],
      "correcta": 0,
      "pista": "Tiene dos signos iguales.",
      "explicacion": "== compara; = asigna."
    },
    {
      "tipo": "codigo",
      "titulo": "Comprobar una clave",
      "pregunta": "Muestra Acceso cuando clave sea igual a \"python\".",
      "inicial": "clave = \"python\"\n# Comprueba la clave\n",
      "salida": "Acceso",
      "pista": "Usa == para comparar texto.",
      "explicacion": "== produce verdadero cuando los valores coinciden."
    },
    {
      "tipo": "opciones",
      "titulo": "Dos condiciones",
      "pregunta": "¿Cuándo es verdadero A and B?",
      "opciones": [
        "Cuando ambas son verdaderas",
        "Cuando solo una es verdadera",
        "Siempre"
      ],
      "correcta": 0,
      "pista": "Piensa en la palabra “y”.",
      "explicacion": "and exige que ambas condiciones sean verdaderas."
    },
    {
      "tipo": "codigo",
      "titulo": "Rango válido",
      "pregunta": "Muestra Válido cuando nota esté entre 0 y 5, inclusive.",
      "inicial": "nota = 4\n# Comprueba el rango\n",
      "salida": "Válido",
      "pista": "Puedes comparar 0 <= nota <= 5.",
      "explicacion": "La condición comprueba los dos extremos."
    },
    {
      "tipo": "opciones",
      "titulo": "Otras opciones",
      "pregunta": "¿Para qué sirve elif?",
      "opciones": [
        "Para revisar otra condición",
        "Para repetir un bloque",
        "Para importar una clase"
      ],
      "correcta": 0,
      "pista": "Se revisa si el if anterior no se cumplió.",
      "explicacion": "elif permite plantear otra condición."
    }
  ],
  "3": [
    {
      "tipo": "opciones",
      "titulo": "Recorrer",
      "pregunta": "En un for que recorre tres nombres, ¿cuántas veces se ejecuta el bloque?",
      "opciones": [
        "Tres",
        "Una",
        "Depende de la longitud del nombre"
      ],
      "correcta": 0,
      "pista": "Una vez por elemento.",
      "explicacion": "El ciclo recorre cada elemento de la lista."
    },
    {
      "tipo": "codigo",
      "titulo": "Primera repetición",
      "pregunta": "Recorre nombres y muestra cada nombre en una línea.",
      "inicial": "nombres = [\"Ana\", \"Omar\"]\n# Escribe el for\n",
      "salida": "Ana\nOmar",
      "pista": "Usa for nombre in nombres y dos puntos.",
      "explicacion": "La variable del ciclo toma cada nombre."
    },
    {
      "tipo": "opciones",
      "titulo": "Lista vacía",
      "pregunta": "¿Cuántas veces entra el for si la lista está vacía?",
      "opciones": [
        "Ninguna",
        "Una",
        "Infinitas"
      ],
      "correcta": 0,
      "pista": "No hay elementos que recorrer.",
      "explicacion": "Una lista vacía no produce iteraciones."
    },
    {
      "tipo": "codigo",
      "titulo": "Cuenta hasta tres",
      "pregunta": "Usa range para mostrar 1, 2 y 3 en líneas separadas.",
      "inicial": "# Escribe el ciclo\n",
      "salida": "1\n2\n3",
      "pista": "range(1, 4) termina antes del 4.",
      "explicacion": "El límite superior de range no se incluye."
    },
    {
      "tipo": "opciones",
      "titulo": "range",
      "pregunta": "¿Qué valores produce range(3)?",
      "opciones": [
        "0, 1, 2",
        "1, 2, 3",
        "0, 1, 2, 3"
      ],
      "correcta": 0,
      "pista": "Empieza en cero y termina antes de 3.",
      "explicacion": "El rango produce 0, 1 y 2."
    },
    {
      "tipo": "codigo",
      "titulo": "Una tabla pequeña",
      "pregunta": "Muestra el doble de cada número de la lista.",
      "inicial": "numeros = [1, 2, 3]\n# Recorre y multiplica cada número por 2\n",
      "salida": "2\n4\n6",
      "pista": "Usa numero * 2 dentro del ciclo.",
      "explicacion": "Cada vuelta procesa un elemento."
    },
    {
      "tipo": "opciones",
      "titulo": "Variable de ciclo",
      "pregunta": "En for fruta in frutas, ¿qué representa fruta?",
      "opciones": [
        "El elemento actual",
        "Toda la lista siempre",
        "La cantidad de elementos"
      ],
      "correcta": 0,
      "pista": "Cambia en cada vuelta.",
      "explicacion": "fruta recibe cada elemento de frutas."
    },
    {
      "tipo": "codigo",
      "titulo": "Suma acumulada",
      "pregunta": "Suma los números de la lista y muestra el total.",
      "inicial": "numeros = [1, 2, 3]\ntotal = 0\n# Acumula y muestra total después del ciclo\n",
      "salida": "6",
      "pista": "En cada vuelta suma el número a total.",
      "explicacion": "El acumulador conserva la suma parcial."
    },
    {
      "tipo": "opciones",
      "titulo": "Sangría",
      "pregunta": "¿Dónde debe estar el print para ejecutarse en cada vuelta?",
      "opciones": [
        "Dentro del bloque con sangría",
        "Antes del for",
        "Fuera del ciclo"
      ],
      "correcta": 0,
      "pista": "Debe pertenecer al bloque.",
      "explicacion": "La sangría determina qué se repite."
    },
    {
      "tipo": "codigo",
      "titulo": "Índices",
      "pregunta": "Muestra cada número de 0 a 2, uno por línea.",
      "inicial": "# Usa range y un for\n",
      "salida": "0\n1\n2",
      "pista": "Prueba range(3).",
      "explicacion": "range(3) comienza en cero."
    }
  ],
  "4": [
    {
      "tipo": "opciones",
      "titulo": "Definición",
      "pregunta": "¿Qué palabra define una función en Python?",
      "opciones": [
        "def",
        "return",
        "if"
      ],
      "correcta": 0,
      "pista": "Son tres letras.",
      "explicacion": "def introduce la definición de una función."
    },
    {
      "tipo": "opciones",
      "titulo": "Llamada",
      "pregunta": "¿Qué hace saludar(\"Ana\")?",
      "opciones": [
        "Llama la función con un dato",
        "Define una clase",
        "Crea una lista"
      ],
      "correcta": 0,
      "pista": "Los paréntesis pueden contener argumentos.",
      "explicacion": "La función se ejecuta con el argumento recibido."
    },
    {
      "tipo": "codigo",
      "titulo": "Tu función",
      "pregunta": "Crea una función saludo que devuelva \"Hola\" y muestra su resultado.",
      "inicial": "# Define saludo, llámala y muestra el resultado\n",
      "salida": "Hola",
      "pista": "Usa def, return y print al llamar.",
      "explicacion": "return entrega el valor a quien llama."
    },
    {
      "tipo": "opciones",
      "titulo": "Parámetro",
      "pregunta": "En def saludar(nombre), ¿qué es nombre?",
      "opciones": [
        "Un parámetro",
        "Una lista obligatoria",
        "La salida en pantalla"
      ],
      "correcta": 0,
      "pista": "Recibe un valor al llamar la función.",
      "explicacion": "Un parámetro es el nombre usado dentro de la función."
    },
    {
      "tipo": "codigo",
      "titulo": "Con un parámetro",
      "pregunta": "Define doble(numero), devuelve el doble y muestra doble(4).",
      "inicial": "# Define doble y muéstralo\n",
      "salida": "8",
      "pista": "Devuelve numero * 2.",
      "explicacion": "La misma función puede usarse con distintos argumentos."
    },
    {
      "tipo": "opciones",
      "titulo": "return",
      "pregunta": "¿Qué hace return?",
      "opciones": [
        "Devuelve un valor y termina esa llamada",
        "Siempre muestra un mensaje",
        "Repite la función"
      ],
      "correcta": 0,
      "pista": "El valor vuelve a quien llamó la función.",
      "explicacion": "return entrega el resultado y termina la llamada."
    },
    {
      "tipo": "codigo",
      "titulo": "Dos argumentos",
      "pregunta": "Define sumar(a, b) y muestra el resultado de sumar(2, 3).",
      "inicial": "# Define la función y muestra el resultado\n",
      "salida": "5",
      "pista": "Usa return a + b.",
      "explicacion": "Los dos parámetros reciben los argumentos de la llamada."
    },
    {
      "tipo": "opciones",
      "titulo": "print y return",
      "pregunta": "¿Qué hace print?",
      "opciones": [
        "Muestra información",
        "Devuelve obligatoriamente el resultado de la función",
        "Crea un parámetro"
      ],
      "correcta": 0,
      "pista": "Piensa en la pantalla.",
      "explicacion": "print muestra; return entrega un valor a quien llama."
    },
    {
      "tipo": "codigo",
      "titulo": "Reutilizar",
      "pregunta": "Define doble y muestra doble(2) y doble(3), una por línea.",
      "inicial": "# Define la función una vez y llámala dos veces\n",
      "salida": "4\n6",
      "pista": "Dos llamadas pueden usar la misma función.",
      "explicacion": "Reutilizar evita duplicar instrucciones."
    },
    {
      "tipo": "opciones",
      "titulo": "Sin return",
      "pregunta": "Si una función termina sin return explícito, ¿qué devuelve?",
      "opciones": [
        "None",
        "0 siempre",
        "Una cadena vacía siempre"
      ],
      "correcta": 0,
      "pista": "Python usa un valor especial para ausencia de resultado.",
      "explicacion": "Por defecto, la función devuelve None."
    }
  ],
  "5": [
    {
      "tipo": "opciones",
      "titulo": "Clase",
      "pregunta": "¿Qué representa Cliente en class Cliente:?",
      "opciones": [
        "Una clase",
        "Un objeto ya creado",
        "Un número"
      ],
      "correcta": 0,
      "pista": "Es la estructura para crear objetos.",
      "explicacion": "Una clase define cómo son sus instancias."
    },
    {
      "tipo": "opciones",
      "titulo": "Instancia",
      "pregunta": "¿Qué hace cliente = Cliente(\"Ana\")?",
      "opciones": [
        "Crea un objeto Cliente",
        "Elimina la clase",
        "Imprime automáticamente"
      ],
      "correcta": 0,
      "pista": "Se llama la clase con un dato.",
      "explicacion": "cliente queda asociado a una instancia de Cliente."
    },
    {
      "tipo": "codigo",
      "titulo": "Tu primer objeto",
      "pregunta": "Crea Cliente con atributo nombre y muestra Ana desde un objeto.",
      "inicial": "# Define Cliente, crea el objeto y muestra su nombre\n",
      "salida": "Ana",
      "pista": "En __init__, guarda el nombre en self.nombre.",
      "explicacion": "Cada instancia puede guardar sus propios datos."
    },
    {
      "tipo": "opciones",
      "titulo": "self",
      "pregunta": "En un método de instancia, ¿a qué se refiere self?",
      "opciones": [
        "Al objeto que usa el método",
        "A todos los objetos a la vez",
        "Al archivo Python"
      ],
      "correcta": 0,
      "pista": "Representa la instancia actual.",
      "explicacion": "self permite acceder a los datos de esa instancia."
    },
    {
      "tipo": "codigo",
      "titulo": "Dos clientes",
      "pregunta": "Crea dos objetos y muestra sus nombres, Ana y Omar, uno por línea.",
      "inicial": "# Define Cliente y crea dos instancias\n",
      "salida": "Ana\nOmar",
      "pista": "Cada objeto recibe su propio nombre.",
      "explicacion": "Los objetos de una misma clase pueden tener valores distintos."
    },
    {
      "tipo": "opciones",
      "titulo": "Atributo",
      "pregunta": "¿Cómo se consulta el atributo nombre del objeto cliente?",
      "opciones": [
        "cliente.nombre",
        "Cliente(nombre) siempre",
        "nombre.cliente"
      ],
      "correcta": 0,
      "pista": "Usa un punto después del objeto.",
      "explicacion": "El punto permite acceder a atributos del objeto."
    },
    {
      "tipo": "codigo",
      "titulo": "Un método",
      "pregunta": "Crea una clase Saludo con un método mensaje que devuelva Hola; muéstralo.",
      "inicial": "# Define la clase, crea un objeto y llama el método\n",
      "salida": "Hola",
      "pista": "Recuerda self y los paréntesis al llamar el método.",
      "explicacion": "Un método es una función definida en una clase."
    },
    {
      "tipo": "opciones",
      "titulo": "__init__",
      "pregunta": "¿Cuándo se llama normalmente __init__?",
      "opciones": [
        "Al crear una instancia",
        "Cada vez que se imprime cualquier texto",
        "Solo al cerrar el programa"
      ],
      "correcta": 0,
      "pista": "Prepara el estado inicial del objeto.",
      "explicacion": "__init__ inicializa la nueva instancia."
    },
    {
      "tipo": "codigo",
      "titulo": "Cambiar un atributo",
      "pregunta": "Crea un objeto con nombre Ana, cámbialo a Omar y muéstralo.",
      "inicial": "# Define Cliente, crea el objeto y cambia su atributo\n",
      "salida": "Omar",
      "pista": "Asigna el nuevo texto a cliente.nombre.",
      "explicacion": "Una asignación puede cambiar un atributo público."
    },
    {
      "tipo": "opciones",
      "titulo": "Objetos distintos",
      "pregunta": "¿Dos objetos Cliente deben tener el mismo nombre?",
      "opciones": [
        "No, cada uno puede tener su propio valor",
        "Sí, siempre",
        "Solo si usan self"
      ],
      "correcta": 0,
      "pista": "Piensa en dos clientes reales.",
      "explicacion": "Cada instancia mantiene sus propios atributos."
    }
  ]
};

retosFundamentos[2].push(...[
  {
    "tipo": "opciones",
    "titulo": "Alternativa",
    "pregunta": "Si una condición de if es falsa, ¿qué rama ofrece una alternativa?",
    "opciones": [
      "else",
      "def",
      "return"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "else es la alternativa de if."
  },
  {
    "tipo": "opciones",
    "titulo": "Igualdad",
    "pregunta": "¿Qué operador compara igualdad?",
    "opciones": [
      "==",
      "=",
      "+="
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "== compara; = asigna."
  },
  {
    "tipo": "opciones",
    "titulo": "Diferente",
    "pregunta": "¿Qué operador compara desigualdad?",
    "opciones": [
      "!=",
      "==",
      "="
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "!= indica que dos valores son distintos."
  },
  {
    "tipo": "opciones",
    "titulo": "Conjunción",
    "pregunta": "¿Cuándo es verdadero A and B?",
    "opciones": [
      "Cuando las dos condiciones son verdaderas",
      "Cuando una sola es verdadera",
      "Siempre"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "and requiere que ambas condiciones sean verdaderas."
  },
  {
    "tipo": "opciones",
    "titulo": "Dos puntos",
    "pregunta": "¿Qué signo aparece al final de la condición if? ",
    "opciones": [
      ":",
      ";",
      "#"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": ": introduce el bloque de código."
  }
]);

retosFundamentos[3].push(...[
  {
    "tipo": "opciones",
    "titulo": "range",
    "pregunta": "¿Cuáles valores produce range(2)?",
    "opciones": [
      "0 y 1",
      "1 y 2",
      "0, 1 y 2"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "El límite final no se incluye."
  },
  {
    "tipo": "opciones",
    "titulo": "Romper",
    "pregunta": "¿Qué hace break en un ciclo?",
    "opciones": [
      "Sale del ciclo",
      "Avanza a la siguiente iteración",
      "Crea un ciclo nuevo"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "break sale del ciclo actual."
  },
  {
    "tipo": "opciones",
    "titulo": "Continuar",
    "pregunta": "¿Qué hace continue?",
    "opciones": [
      "Pasa a la próxima iteración",
      "Cierra el programa",
      "Detiene el ciclo para siempre"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "continue omite el resto de la vuelta actual."
  },
  {
    "tipo": "opciones",
    "titulo": "Secuencia",
    "pregunta": "Si una lista tiene cuatro elementos, ¿cuántas iteraciones tiene un for sin interrupciones?",
    "opciones": [
      "Cuatro",
      "Tres",
      "Cinco"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "Hay una iteración por elemento."
  },
  {
    "tipo": "opciones",
    "titulo": "Acumulador",
    "pregunta": "¿Para qué sirve un acumulador?",
    "opciones": [
      "Para conservar un resultado parcial",
      "Para iniciar Python",
      "Para cerrar un archivo"
    ],
    "correcta": 0,
    "pista": "Repasa el ejemplo de la lección.",
    "explicacion": "Un acumulador guarda el resultado actualizado."
  }
]);

retosFundamentos[4].push(...[
  {
    "tipo": "opciones",
    "titulo": "Llamada",
    "pregunta": "¿Qué símbolo permite llamar una función?",
    "opciones": [
      "Paréntesis",
      "Corchetes siempre",
      "Una almohadilla"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "Se usan paréntesis para llamar funciones."
  },
  {
    "tipo": "opciones",
    "titulo": "Argumentos",
    "pregunta": "¿Qué se pasa al llamar sumar(2, 3)?",
    "opciones": [
      "Argumentos",
      "Parámetros declarados",
      "Clases"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "2 y 3 son argumentos."
  },
  {
    "tipo": "opciones",
    "titulo": "Valor por defecto",
    "pregunta": "¿Puede un parámetro tener un valor por defecto?",
    "opciones": [
      "Sí",
      "No",
      "Solo si es una clase"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "Un parámetro puede declarar un valor predeterminado."
  },
  {
    "tipo": "opciones",
    "titulo": "Resultado",
    "pregunta": "¿Qué instrucción entrega un resultado?",
    "opciones": [
      "return",
      "input",
      "import"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "return entrega un valor a quien llamó la función."
  },
  {
    "tipo": "opciones",
    "titulo": "Reutilización",
    "pregunta": "¿Para qué sirve definir una función?",
    "opciones": [
      "Para agrupar y reutilizar instrucciones",
      "Para crear archivos necesariamente",
      "Para eliminar todos los errores"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "Una función organiza acciones reutilizables."
  }
]);

retosFundamentos[5].push(...[
  {
    "tipo": "opciones",
    "titulo": "Instancia",
    "pregunta": "¿Qué es cliente = Cliente(\"Ana\")?",
    "opciones": [
      "La creación de una instancia",
      "Una condición",
      "Un comentario"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "La llamada a la clase produce una instancia."
  },
  {
    "tipo": "opciones",
    "titulo": "Acceso",
    "pregunta": "¿Cómo se consulta el nombre de cliente?",
    "opciones": [
      "cliente.nombre",
      "cliente->nombre",
      "nombre(cliente) siempre"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "El punto accede al atributo."
  },
  {
    "tipo": "opciones",
    "titulo": "Método",
    "pregunta": "¿Qué es un método de instancia?",
    "opciones": [
      "Una función definida en una clase que actúa sobre una instancia",
      "Solo un número",
      "Una ruta del sistema"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "Un método de instancia recibe normalmente self."
  },
  {
    "tipo": "opciones",
    "titulo": "Inicialización",
    "pregunta": "¿Para qué sirve __init__?",
    "opciones": [
      "Para inicializar la instancia",
      "Para cerrar Python",
      "Para crear comentarios"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "__init__ prepara el estado inicial del objeto."
  },
  {
    "tipo": "opciones",
    "titulo": "self",
    "pregunta": "¿A qué se refiere self?",
    "opciones": [
      "A la instancia que ejecuta el método",
      "A todas las clases",
      "Al usuario del computador"
    ],
    "correcta": 0,
    "pista": "Piensa en el ejemplo de la lección.",
    "explicacion": "self hace referencia al objeto correspondiente."
  }
]);
