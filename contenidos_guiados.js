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
