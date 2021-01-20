# TP-VirtualDreams
## Resolución del trabajo práctico
### --- Ejercicio 2 ---
Las siguientes preguntas están orientadas a la comprensión del protocolo HTTP. Son agnósticas al lenguaje de programación, la idea es comprender los conceptos del estándar:
1.	¿Qué es un servidor HTTP? 
Un servidor HTTP o servidor web es un software que se encarga de realizar conexiones con el cliente desde el lado del servidor. Este genera una respuesta en base a las peticiones que recibe (bajo el protocolo HTTP), ya sea un documento o aplicación, que se envía al cliente, la cual es renderizada por el navegador web.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Los verbos HTTP son un conjunto de métodos que definen qué acción se desea realizar con el recurso solicitado. Los verbos más comunes son GET, POST, PUT, DELETE, PATCH y OPTIONS.

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
Un request es la petición que envía el cliente al servidor web solicitando realizar una acción.
Un response es la respuesta o mensaje del servidor al recibir una petición por parte del cliente.
Los headers HTTP nos brindan información adicional contextual de la petición o respuesta efectuada, es el cómo quiero hacerlo. Poseen una estructura del tipo “nombre: valor”.

4.	¿Qué es un queryString? (En el contexto de una url).
Un queryString es una parte del Localizador de Recursos Uniforme (URL) que se encarga de enviar pequeñas cantidades de información de una parte a otra (o del cliente al servidor). Pueden contener una amplia variedad de datos tales como consultas (queries), referencias a otros links, información sobre elementos de la misma página web, entre otros. Es una cadena de texto que se encuentra en la URL después del símbolo “?” y en forma de parámetros.

5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
El responseCode o código de respuesta es un número que indica qué sucedió con la petición.
Los posibles valores son:
-	1XX: Respuestas informativas. La petición fue recibida y se encuentra en proceso. Ejemplos: 101 (Continue), 101 (Switching Protocols).
-	2XX: Respuestas correctas. La petición se procesó correctamente. Ejemplos: 200 (OK), 201 (Created).
-	3XX: Respuestas de redirección: para continuar o concluir la petición, el usuario debe realizar más acciones. Ejemplos: 301 (Moved Permanately), 304 (Not modified).
-	4XX: Respuestas de error por parte del cliente. La petición recibida no se pudo procesar a causa de un error del cliente. Ejemplos: 401 (Unauthorized), 404 (Not Found).
-	5XX: Respuestas de error por parte del servidor. La petición recibida no se pudo procesar a causa de un fallo en el servidor. Ejemplos: 500 (Internal Server Error), 502 (Bad Gateway).

6.	¿Cómo se envía data en un Get y cómo en un POST? 
En un GET, los datos se envían haciendo uso de la URL, escribiéndolos en forma de parámetros luego del símbolo “?”, con formato nombre = valor y cada uno separado por el símbolo “&”.
Por otro lado, en un POST, el envío de datos se realiza con el mismo formato del GET pero introduciendo los parámetros en la solicitud HTTP para el servidor, de manera tal que está oculto para el usuario.

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
El verbo que se utiliza al acceder a una página web es GET ya que en la petición solicitamos los datos necesarios para mostrar dicha página.

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
-	JSON (JavaScript Object Notation) es un formato ligero de texto que permite el almacenamiento e intercambio de datos y resulta bastante sencillo de leer e interpretar, tanto para el programador como para la computadora. Ejemplo:
{
		“nombre”: “Diego”,
		“apellido”: “Brando”,
		“apodo”: “DIO”,
		“edad”: 21,
		“gustos”: [“caballos”, “carreras”, “dinosaurios”]
}
-	XML (Extensible Markup Language) es un formato de texto que también se utiliza para almacenar e intercambiar datos, pero con un formato más estricto y que lleva más tiempo que procesarlo que JSON. Ejemplo: 
<persona>
	<nombre>Diego</nombre>
	<apellido>Brando</apellido>
	<apodo>DIO</apodo>
	<edad>22</edad>
	<gustos>
		<gusto>caballos<gusto>
		<gusto>carreras<gusto>
<gusto>dinosaurios<gusto>
</gustos>
</persona>

9.	Explicar brevemente el estándar SOAP.
El estándar SOAP (Simple Object Access Protocol) establece cómo dos objetos en procesos diferentes se pueden comunicar mediante el intercambio de datos, el cual se efectúa con la utilización de mensajes SOAP. Dichos mensajes son documentos XML y poseen una estructura definida:
-	Envelope: raíz de la estructura, por lo tanto, es obligatoria, ya que identifica al mensaje como tal.
-	Header: permite enviar información sobre cómo se debe procesar el mensaje.
-	Body: es obligatoria y contiene información sobre la llamada y la respuesta.
-	Fault: contiene información sobre errores producidos durante el procesamiento y envío del mensaje (desde el emisor al receptor).

10.	Explicar brevemente el estándar REST Full.
REST (REpresentational State Transer) es un tipo de arquitectura web que se apoya totalmente en el estándar HTTP. Se compone de una lista de reglas entre los elementos, componentes, conectores y datos usados que se deben cumplir en el diseño de la arquitectura de una API (Application Programming Interface). Nos permite crear servicios y aplicaciones que pueden ser usadas por cualquier dispositivo que entienda HTTP, por lo tanto, es más simple que otras alternativas tal como SOAP. Además se basa en los siguientes diseños fundamentales clave: un protocolo cliente-servidor sin estado (cada mensaje contiene toda la información necesaria para procesar la petición, por lo tanto, ni el cliente ni el servidor necesitan recordar el estado de los mensajes), un conjunto de operaciones bien definidas (las cuales se aplican a todos los recursos), una sintaxis universal (para identificar los recursos, ya que cada recurso solo puede ser accedido a través de su URI) y el uso de hipermedios (para la información de la aplicación como para las transiciones de estado de la misma, el cual típicamente es un HTML o un XML, y, gracias a esto, es posible navegar de un recurso a otros siguiendo solamente enlaces).

11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers en un request contienen información en formato de parámetros que envía el cliente al realizar una petición.
El key Content-Type en un header es una propiedad utilizada para indicar el tipo de contenido o formato del dato que se está enviando. Ejemplo: 
Content-Type: image/jpg

### --- Ejercicio 3 ---
La resolución se encuentra en el PDF en la carpeta "/ejercicio3".

--- Ejercicio 4 ---
Instrucciones de uso:
1- Dirigirse a la carpeta "/ejercicio4".
2- Instalar por consola los módulos mediante los siguientes comandos:
. npm i request
. npm i request-promise
3- Ingresar por consola el siguiente comando para ejecutar el script:
. npm start

### --- Ejercicio 5 y 6 ---
Instrucciones de uso:
1- Dirigirse a la carpeta "/ejercicio5y6-servidor".
2- Instalar por consola los módulos mediante los siguientes comandos:
. npm i express
. npm i request
. npm i body-parser
3- Ingresar por consola el siguiente comando para ejecutar el script:
. npm start
