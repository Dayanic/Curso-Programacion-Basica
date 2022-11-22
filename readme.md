# Crea tu primer sitio web
Un **sitio web** funciona correctamente gracias a la participación de diversos tipos de archivos. Por lo tanto, antes de empezar a crear nuestro primer sitio web debemos repasar un concepto fundamental relacionado con **la estructura de los archivos**.

Aunque en esta clase generaremos un solo archivo para lanzar nuestro primer sitio web, a lo largo del curso necesitarás crear otros tipos de archivos para su correcto funcionamiento.

## **Estructura de un archivo**

Se trata de uno de los conceptos más fáciles de asimilar en el universo de los sistemas operativos. Nada más debes recordar alguno de tantos archivos que has creado desde que usas un computador.

Es muy probable que hayas pensado que carta.docx o dibujo.jpg eran, simplemente, nombres de archivos. Resulta que en esa descripción observamos **la estructura de un archivo**.

### **Nombre**
Debes tener claro que nombre es, apenas, una parte de la estructura de un archivo.

Los nombres son personalizados y descriptivos. Solo **en algunos casos deberás asignar nombres predefinidos** para que sean leídos automáticamente, como, por ejemplo, cuando produces un sitio web. La página principal, por defecto, debe llamarse *index.html*.

*Al asignar nombres a los archivos, debemos tener en cuenta una recomendación imprescindible como hispanohablantes: no utilizar caracteres especiales como tildes, comas o la eñe. Tampoco se deben emplear símbolos como &, $, %, !, o ". Por ejemplo, si debes crear una presentación en slides para una fecha especial, es mejor que definas el nombre de la siguiente manera: diaDelNino.pptx*

Tal como puedes darte cuenta en el ejemplo anterior, no uso ni tilde ni la eñe. Además, también debiste haber notado que no he dejado ningún espacio en el medio. En cambio, he utilizado letras mayúsculas.

### **Punto (.)**
Por más diminuto que nos parezca, **el punto es un elemento importante dentro de la estructura de un archivo**.

Este carácter **está presente en las estructuras de archivos de todos los sistemas operativos**. Tanto en Windows como en Mac, Linux, incluso, en Android se usa el punto después del nombre y antes de la extensión.

### **Extensión**
La extensión de un archivo es el componente que nos permite distinguirlo antes de ejecutarlo. Por ejemplo, si la extensión es *pdf* o *mp4*, sabemos que el primero es un documento y que el segundo es un video. Gracias a la **extensión** conocemos anticipadamente qué aplicación ejecutará el archivo.

Para el propósito del presente curso, tendremos en cuenta que un navegador como Chrome lee, entre otros archivos, aquellos cuya extensión es *html*. Por esta razón, el primer archivo que crearemos para lanzar un sitio web será uno que termine en *.html*. Pero, antes de todo, es necesario conocer acerca de esta tecnología.

## **¿Qué es HTML?**

HTML es un lenguaje de marcado o de **etiquetas**. Gracias a las etiquetas escritas dentro del archivo .html, puedes ver esta página tal y como está. Las etiquetas html son, algo así, como instrucciones que el navegador debe decodificar. Viene del inglés *HyperText Markup Language*.

Las traducciones al español tienen leves variaciones. Algunos le llaman *“lenguaje de etiquetas” o “marcas de hipertexto”*. Otros, simplemente, *“lenguaje de marcado”*. Un archivo con extensión *HTML* contiene texto plano. **HTML no es un archivo de texto enriquecido** como los que producimos en editores como Microsoft Word. Al crear un archivo HTML no podemos formatear su texto con subrayado o con negrita o con diferentes colores.

En este punto ya te habrás preguntado, ¿por qué veo este texto en negrita y en cursiva en el navegador que solo lee archivos HTML, los cuales son archivos de texto plano?. No te preocupes que no se trata de un engaño, es una buena pregunta.

La versión actual de HTML incorpora más de un centenar de etiquetas. En este curso utilizaremos algunas de las que más se implementan en un sitio web.

## **Configurando mi sistema operativo en modo profesional**

Ahora que ya sabemos lo importante que son las **extensiones**, estas deben estar siempre visibles en nuestro sistema operativo. Además, en el entorno de la programación, **es una buena práctica tener a la vista las extensiones de los archivos que están en nuestro computador**.

Por eso vamos a proceder a realizar la primera actividad de esta clase: **activar la función de** ***Mostrar las extensiones de los archivos*** en tu sistema operativo. Esta es una tarea muy sencilla, aunque varía de acuerdo a la versión de tu sistema operativo. Pero si trabajas en una versión reciente, el proceso es, aún, más sencillo.

# Sitios web con HTML

Seguro ya sabes que un sitio web es, en su forma más básica, un archivo HTML. Ahora, acompáñame a descubrir como funciona ese lenguaje, y cómo puedes usarlo para empezar a crear sitios web 🙂

## **Fundamentos de HTML**

El lenguaje de marcas de hipertexto (HTML) tiene reglas como cualquier otro lenguaje. Y no son tan complicadas cuando te tomas el tiempo para explorarlas poco a poco 😉

1️⃣ En HTML la información se organiza con etiquetas que consisten en una palabra o una letra encerradas entre los símbolos “<” y “>” .

Ej:
```html
<title>
```
2️⃣ Cada pieza contenido en tu sitio web se encuentra encerrada por etiquetas de apertura y de cierre.

Las etiquetas de cierre tienen un “/” antes de la palabra o letra que compone la etiqueta.

Ej:
```html
<title>Este es el texto que aparece en la pestaña del navegador</title>
```
3️⃣ Las etiquetas se escriben sin espacios internos ni mayúsculas. Un error de este estilo (de sintaxis) puede causar que el navegador no entienda la etiqueta.

4️⃣ Existen algunas etiquetas que se cierran a sí mismas. Estas generalmente no tienen contenido, así que empiezan y terminan con la etiqueta de apertura. Sin embargo, son muy útiles para introducir metadatos, organizar elementos de la página, o importar elementos de otras fuentes.

[Solo hay 14 de estas etiquetas](https://www.tutorialstonight.com/self-closing-tags-in-html#:~:text=%3Carea%3E%20%2D%20HTML,for%20the%20browsers). Pero las más comunes son:

| Etiqueta  | Uso |
| --------- | --- |
| ` <br> ` | Introduce un salto de línea en la página.|
| `<img>`| Introduce imágenes a tu sitio web.|
| `<input>` |	Introduce elementos para que el usuario te de información (cómo botones, campos de texto, listas desplegables, entre otros).|
| `<link>` |	Se usa mucho para cargar hojas externas de estilos (archivos “.css”) para definir los estilos de tu sitio web.|
| `<meta>` |	Se usa para darle metadata a tu sitio web (para que el navegador y buscadores cómo google puedan trabajar mejor con él).|

Ojo, hay una variante de HTML llamada XHTML que requiere que estas etiquetas terminen en “/>”. Por ese motivo, muchos developers acostumbran a terminar estas etiquetas de esa manera, incluso en el HTML común y corriente.

Esto no es obligatorio en el HTML que tú estas aprendiendo ahora, pero es bueno que lo tengas en mente para cuando trabajes con otros developers 👍

Ej:
```html
<meta charset="utf-8" />

<img src="./assets/img/Logo.svg" alt="Logo de Batata Bit" />
```
5️⃣ Hay etiquetas cuyo trabajo es contener otras etiquetas.

Cuando esto ocurre, se acostumbra usar la “indentación” de código para distinguir la jerarquía de las etiquetas.

En palabras más simples: Solo tienes que pulsar la tecla “tab” en las etiquetas hijo para que estas se muevan un poquito hacia la derecha. Eso te ayudará a distinguir a los padres de los hijos con mayor facilidad.

Ej:
```html
<picture class="logo">
    <img src="./assets/img/Logo.svg" alt="Logo de Batata Bit" />
</picture>
```
6️⃣ Muchas etiquetas HTML utilizan atributos. Estos son información adicional que se agrega en la etiqueta de apertura para personalizar sus propiedades y funcionalidad.

Estos siguen el siguiente patrón:

NombreDelAtributo=”ValorDelAtributo”

Aprenderás más sobre los atributos poco a poco. Por ahora lo importante es que sepas que existen 👍

Por cierto, en HTML, la combinación de etiquetas, atributos y contenido recibe el nombre de **elemento**.
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Clase%204%20-%201.png)

7️⃣ Puedes encontrar una lista completa de las etiquetas HTML que puedes usar, con explicaciones y ejemplos de uso, en este [sitio web](https://htmlreference.io/).

También puedes encontrarlas en referencias oficiales como las de [W3Schools](https://www.w3schools.com/tags/) o [Mozilla Developers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

Las más comunes para escribir son:

|Etiqueta | Uso |
| ------- | --- |
| `<p>` |“Paragraph”, te permite introducir párrafos.|
| `<a>`	| “Anchor”, te permite introducir hipervínculos.|
| `<b>`	| “Bold”, te permite escribir en negritas.|
| `<i>`	| “Italics”, te permite escribir en cursiva.|
| `<u>`	| “Underline”, te permite escribir texto subrayado.|
| `<ul>` | “Unordered list”, te permite crear una lista desordenara (con puntitos)|
| `<ol>` | “Ordered list”, te permite introducir una lista ordenada (con números o letras).|
| `<li>` | “List item”, se colocan dentro de un <ul> o un <ol>, y se convierten en los elementos de la lista.|
| `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` | “Heading”, insertan títulos y subtítulos en tu sitio web. El número que acompaña a la “h” representa el nivel del título, dónde h1 tiene la mayor jerarquía.|

8️⃣ Recuerda, **los archivos HTML cargan de arriba hacia abajo, un elemento tras otro**. Esto significa que el orden en el que escribas el HTML sí importa. Esos son todos por ahora 😁 Recuerda experimentar un poco con las etiquetas que conociste el día de hoy 😉

Para profundizar un poco más, no te pierdas de la siguiente clase: [Estructura de árbol en HTML](https://platzi.com/clases/3208-programacion-basica/51981-estructura-arbol-html/).

# Estructura de árbol en HTML
El lenguaje de marcas de hipertexto (HTML) se caracteriza porque su estructura es como la de un árbol 🙂 ¿Te animas a aprender cómo funciona? 😉

Imagina que cada etiqueta es una rama, y que el contenido son hojas. Por lo tanto, algunas etiquetas nacerán dentro de otras etiquetas, y podrías encontrar contenido en alguna de las etiquetas más pequeñas 😉 Ahora, explorémoslas en orden para que entiendas a qué me refiero.

## **La regla: `<!DOCTYPE html>`**

Primero, cada archivo HTML empieza con una etiqueta que se cierra sola. Esto es una convención y no modifica el contenido del sitio, pero es importante que empieces con ella.
```html
<!DOCTYPE html>
```
## **El árbol: `<html>`**

Debajo encontrarás el tronco del árbol: la etiqueta `<html>`. Todo el contenido del sitio va dentro de esta etiqueta, y está viene con un atributo que indica el idioma en que está escrito el sitio web.
```html
<!DOCTYPE html>
<html lang="es">

</html>
```
Después, el árbol se abre hacia dos secciones principales: la primera es `<head>`, dónde encontrarás la metadata del sitio web. Esta sección te ayudará a decirle al navegador cómo va a mostrar tu sitio web, y también te permite darle información a buscadores como google para que sepan cómo mostrar tu sitio.

Y la segunda rama principal es `<body>`, donde introducirás el contenido que los usuarios van a ver cuando visiten tu sitio web.
```html
<!DOCTYPE html>
<html lang="es">
    <head>

    </head>
    <body>
        
    </body>
</html>
```
## **Las raíces: `<head>`**

La etiqueta `<head>` se parece mucho a las raíces de un árbol: el usuario no puede verlas, pero son fundamentales para que el sitio web funcione.

Suele contener muchas etiquetas `<meta>` que revelan información sobre el sitio web al navegador y a buscadores como Google.

También incluye la etiqueta `<title>` que tiene el título del sitio web (que aparece en la pestaña del navegador), y al menos una etiqueta `<link>` que carga la hoja de estilos de tu sitio web (el archivo “.css”; esto es lo que organiza los elementos de tu sitio web y les da forma y color).

Aquí abajo te dejo un ejemplo muy común de lo que puedes encontrar en un `<head>`.
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta/>
        <meta/>
        <meta/>
        <title></title>
        <meta/>
        <link/>
    </head>
    <body>

    </body>
</html>
```
## **Las ramas, hojas y flores: `<body>`**

Mientras tanto, la etiqueta `<body>` contiene todo lo que el usuario puede ver en el sitio web, y también aquello con lo que puede interactuar. Esta puede ser tan compleja y diversa como las ramas de un arbol.

Si has visitado un sitio web antes, seguro habrás notado que está construido en diferentes secciones, y las más comunes son `<header>`, `<main>`, `<aside>` y `<footer>`.
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Clase%204%20-%202.png)

## **La etiqueta `<script>`**
Además de esos 4, se acostumbra agregar una etiqueta `<script>` al final de `<body>`. Esta es la que tiene todo el código en JavaScript que introduces en tu sitio web para que haga cosas divertidas 😉

Probablemente pensaste que esta etiqueta se coloca en `<head>` debido a que su contenido no se muestra al usuario. Y estás en lo cierto 🙂 En realidad funciona por igual tanto en `<head>` como en `<body>`. Pero, antes de decidir dónde colocarla, quiero que pienses en esto:

¿Recuerdas que **los archivos HTML cargan progresivamente de arriba a abajo**? Pues, por lo general, el usuario no interactúa con el sitio web hasta que este termina de cargar. Así que dejar `<script>` al final de `<body>` permite que tu sitio web cargue todo el aspecto visual antes de cargar su programa 😉

Al final queda de tu parte (o de tu equipo de trabajo) decidir dónde colocar `<script>`. Pero es una práctica común dejarlo al final de `<body>` para que el sitio web se muestre más rápido al usuario 🙂
```html
<!DOCTYPE html>
<html lang="es">
    <head>

    </head>
    <body>
        <header>

        </header>
        <main>

        </main>
        <footer>

        </footer>
        <script></script>
    </body>
</html>
```
## **HTML semántico**
En este punto, ya puedes introducir etiquetas comunes de escritura como `<p>` o `<ol>`. Sin embargo, existen otras etiquetas que suelen usarse dentro de `<body>` para ordenar aún más la información, lo que beneficia a la accesibilidad, al posicionamiento de tu sitio web en buscadores, y en ocasiones también a la aplicación de estilos.

Algunas etiquetas comunes de este estilo son:

Etiqueta | Uso
-------- | ---
 `<nav>` | Se usa para identificar el panel de navegación del sitio, dónde están los links al resto del contenido de tu sitio web.
`<section>` | Se usa para separar un elemento html en secciones, cada una con un propósito.
`<article>` | Se usa para identificar artículos individuales dentro de un sitio web. Se usa mucho para identificar entradas de un blog.
`<figure>` | Se usa como un contenedor de imágenes, para manipular su tamaño con mayor facilidad en CSS, y para agregar un pie de foto.
`<div>` | Este es un comodín. Es un contenedor que puede tener lo que sea dentro. Pero no beneficia la accesibilidad o el posicionamiento en buscadores.

Aquí abajo tienes un ejemplo de una estructura de HTML básica sin contenido. Verás que no es tan compleja luego de que conoces los elementos que la componen 😁
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta/>
        <meta/>
        <meta/>
        <title>Batata Bit</title>
        <meta/>
        <link/>
    </head>
    <body>
        <header>
            <nav>
            </nav>
        </header>
        <main>
            <section>
                <article>
                </article>
            </section>
        </main>
        <footer>
            <figure>
                <img/>
            </figure>
        </footer>
        <script></script>
    </body>
</html>
```
Por cierto, abajo te dejé el mismo código, pero con atributos 😁 Como hay más texto, quizás pienses que es más “temible” cuando los tiene. Pero la realidad es que los atributos no cambian la estructura, solo agregan información 🙂

Dale un vistazo para que te vayas acostumbrando a como se ven. Cuando empieces a usarlos te familiarizarás mucho más con ellos 😉
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="description" content="La próxima revolución en el intercambio de criptomonedas, Batatabit te ayuda a navegar entre los diferentes precios y tendencias" />
        <meta name="robots" content="index, follow" />
        <title>Batata Bit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./styles/mobile.css" />
    </head>
    <body>
        <header class="header">
            <nav>
            </nav>
        </header>
        <main class="main">
            <section class="added-value">
                <article class="added-value__cards--save-time">
                </article>
            </section>
        </main>
        <footer>
            <figure class="footer__logo">
                <img src="./assets/img/FooterLogo.svg" alt="El logo de batatabit" />
            </figure>
        </footer>
        <script src="./src/index.js"></script>
    </body>
</html>
```
Experimenta un poco con las etiquetas que conociste el día de hoy, y luego continúa tu aprendizaje aprendiendo a instalar tu primer editor de código: [Visual Studio Code](https://platzi.com/clases/3208-programacion-basica/51982-visual-studio-code/).

# Instalando tu primer editor de código
Si vas a aprender a programar, necesitas un editor de código. Pero ¿Por qué usar uno? ¿Cuál elegir? ¿Y cómo instalarlo? Quédate conmigo y respondamos todas esas preguntas 😉.

## **¿Qué es un editor de código?**

En pocas palabras, un editor de código es un software que te permite escribir y editar código en texto plano, a la vez que te brinda herramientas varias para facilitar tu proceso de trabajo.

El código se escribe en **texto plano**. Es decir, texto simple y sin ningún tipo de formato (como negritas, cursivas y variedades de tamaño o color). Por lo tanto, no puedes escribir código usando software dedicado a aplicar estos formatos en cartas y documentos (como Microsoft word, Google docs, o Pages).

Así que necesitas un software especializado que te permita escribir texto plano, pero que al mismo tiempo te brinde herramientas para facilitar tu proceso de trabajo. Algunas de estas herramientas son: detector de errores en el código, herramientas para autocompletar, buscar y reemplazar; resaltados varios para facilitar la lectura del código, entre otros.

Además. algunas de estas herramientas admiten la instalación de extensiones que permiten personalizar y ampliar aún más las capacidades del editor de código. Van desde asistencia con colores y resaltados, a herramientas de comunicación de equipos dentro del editor de código como [CodeStream](https://www.codestream.com/).

# Cómo declarar variables y usar prompt
Estos dos procesos pueden ser muy útiles cuando estás aprendiendo a programar.

## **Cómo declarar variables en JavaScript**

Sin complicarnos mucho, puedes declarar una variable en JavaScript escribiendo lo siguiente:
1. La palabra reservada “let”.
2. El nombre que quieres para tu variable.
3. El signo “=” para asignar un valor a ese nombre.
4. El valor que quieres para la variable. Puede ser texto (strings), números, y otras cosas que aprenderás si profundizas un poco más en JavaScript.
```javascript
let a = 1;
```
“Declarar una variable” consiste en reservar un nombre en la memoria de la computadora y asignarle el valor que tú indiques.

En JavaScript (el lenguaje que entienden los navegadores de internet) hay varias formas de declarar una variable. Sin embargo, cuando estas empezando, puedes declarar variables con “let” sin mayor problema 👍

## **Uso de promt()**

“Prompt()” es una función nativa del navegador. Cuando la usas, esta dispara una pequeña ventana con el texto que indiques entre los paréntesis, dónde le pide al usuario que te entregue alguna información. Por lo tanto, podemos usarla para obtener información del usuario y usarla en otro lugar.

Ejemplo:
```javascript
let nombre = "";
nombre = prompt("¿Cuál es tu nombre?");
alert(nombre + ", Bienvenido a Platzi :)");
```
Prueba a correr ese código en el navegador para que veas lo que ocurre, y animate a experimentar un poco con lo que aprendiste aquí 😊

Luego, pasa con confianza a la siguiente clase: [Algoritmo de piedra, papel o tijera](https://platzi.com/clases/3208-programacion-basica/51984-algoritmo-de-piedra-papel-o-tijera/).

# ¿Qué es backend?
Te encuentras muy cerca de finalizar tu primera aplicación. Es momento de desarrollar el backend de la misma, toda **la lógica del lado del servidor de tu proyecto que permitirá interactuar con otros usuarios e intercambiar mensajes**.

## **Diferencias backend y front-end**
Seguro ya sabes lo que es el front-end. **La parte visual de una aplicación web que puedes acceder a ella desde una navegador** o también denominado “cliente”. La misma se desarrolla con tecnologías como HTML, CSS y Javascript.

Por otro lado, el backend es todo lo que “no puedes ver”, ya que **es la lógica de una aplicación que se ejecuta en un “servidor”**. El backend se suele desarrollar con tecnologías como Java, PHP, C#, C++ o también con Javascript con NodeJS.

De esta breve explicación se desprenden dos conceptos claves que te acompañarán el resto de tu vida como programador. El cliente y el servidor.

## **Arquitectura cliente/servidor**
Si estás leyendo esto, es gracias a que tu navegador web (o aplicación mobile), el cliente, se conectó a los servidores de Platzi y los mismos le enviaron este texto.

La Internet moderna funciona a través de la arquitectura cliente/servidor. **Donde el cliente realiza peticiones de datos al servidor y este responde con los mismos**.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28753%29.png)

Un servidor puede responder de varias formas o con diferentes tipos de información dependiendo el tipo de petición del cliente.

## **Envío de páginas web**
Cuando ingresas a [https://platzi.com/](https://platzi.com/) el servidor realiza un tipo de respuesta enviándole al cliente, al navegador web, archivos para la construcción de una página web.
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28754%29.png)

Cada tipo de archivo es interpretado de una forma diferente por el navegador para construir la página. Incluso puedes enviar archivos multimedia como imágenes o videos.

## **Streaming de datos**
Cuando te encuentras viendo un video aquí en Platzi o en YouTube, los servidores envían cada fotograma del video en el orden que les corresponde para que el navegador web pueda reproducir el video y múltiples usuarios puedan verlo en tiempo real.
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Screenshot-from-2022-09-09-11-56-15%281%29.jpg)
## **Envió de datos**
Un tercer tipo de intercambio de información entre un servidor y un cliente es el **envío de datos en crudo con una determinada estructura** de los mismos.

Un servidor puede enviar información de estudiantes, clases y cursos al cliente para que este construya la interfaz con los mismos y el usuario pueda interactuar con los datos.
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28755%29.png)
Los datos suelen intercambiarse a través un formato de texto conocido como JSON o *Javascript Object Notation*. JSON es el estándar más utilizado hoy en día para intercambiar información entre aplicaciones y definir estructuras en los datos. El aspecto de este tipo de información es como el siguiente:
```javascript
{
    "nombre": "Diana",
    "edad": 27
}
```
Todo este intercambio de información entre un cliente y un servidor, o entre un front-end y un backend, se produce gracias a una API.

*Aplication Programming Interface* o “Interfaz de Programación de Aplicaciones” es otro concepto que te acompañará por mucho tiempo. Puedes verlo como una puerta de entrada para el cliente, para la obtención de datos desde un servidor.

El servidor debe permitir que un cliente haga consultas y reciba datos, a través de una API es que el intercambio de información es posible.

## **Protocolo HTTP**
**Internet está basado en protocolos que son formas estandarizadas de hacer las cosas**. El intercambio de datos entre un cliente y un servidor es posible gracias al protocolo HTTP.

*Hypertext Transfer Protocol* o “Protocolo de Transferencia de Hipertexto” por sus siglas en español, es el protocolo N°1 utilizado en internet para el intercambio de cualquier tipo de dato.

Seguro habrás visto que las páginas web comienzan con *http://* o *https://*. Ahora ya sabes qué significa.

```
HTTP vs. HTTPS
La S de HTTPS no es más que una extensión al protocolo HTTP que lo hace más Seguro para el intercambio de información cifrada o codificada entre el cliente y el servidor para evitar robo de datos.
```
## **Conclusión**
Front-end, backend, cliente y servidor. El protocolo HTTP, APIs y JSON. Son solo los primeros conceptos, tecnologías o terminologías que debes conocer del mundo de la programación.

No te preocupes si aún no tienes en claro para qué sirve cada cosa, profundizarás poco a poco en cada uno de ellos y comprenderás su utilización para la construcción de un backend, y de una aplicación web completa.

# ¿Qué es una terminal?
Una terminal de línea de comandos o CLI (Command-Line Interface), es **una interfaz de texto que nos permite interactuar con un proyecto, ejecutar tareas o navegar por todos los archivos y directorio de nuestro computador**.

En cualquier sistema operativo puedes ejecutar comandos en una terminal. Habrás observado que VS Code trae consigo una terminal. Existen muchas otras, todas muy similares.

A diferencia de una interfaz de usuario donde podemos observar e interactuar con archivos o directorios de forma visual y más amena, una terminal de línea de comando también lo permite a través de texto ejecutando comandos.

Parece algo más difícil, pero no te preocupes. Te acostumbrarás y te garantizo que lo agradecerás cuando seas un desarrollador de software profesional.

Con NodeJS, utilizaremos NPM que trae consigo su propio CLI para crear proyectos o instalar dependencias que nuestro proyecto necesitará.

Pero antes de eso…

## **¿Qué es una dependencia?**
Llamamos dependencia o librería a una **pieza de código desarrollada por un tercero**, por otra persona. Las mismas nos permiten **solucionar problemas triviales y reutilizar código para hacer más rápido nuestro trabajo** como programadores.

[NPM](https://platzi.com/clases/3208-programacion-basica/51939-terminal-de-comandos-y-nodejs/#:~:text=trabajo%20como%20programadores.-,NPM,-se%20encargar%C3%A1%20de) se encargará de descargar por nosotros las dependencias que necesitamos. En la actualidad, es el gestor de dependencias más grande del mundo. Cada lenguaje de programación suele tener el suyo, como lo es *Composer para PHP, Maven para Java o PIP* para Python.

Una dependencia puede servirnos para manejar fechas, para leer archivos, para realizar solicitudes HTTP o hasta para levantar un servidor, entre muchas otras funcionalidades. Realmente te encontrarás con dependencias de todo tipo y casi para cualquier cosa que quieras hacer. Poco a poco, irás descubriendo más y más dependencias que utilizarás para construir tus proyectos.

## **Comandos básicos que debes conocer**
Existen [muchos comandos](https://platzi.com/clases/3208-programacion-basica/51939-terminal-de-comandos-y-nodejs/#:~:text=Existen-,muchos%20comandos,-que%20incluso%20var%C3%ADan) que incluso varían dependiendo el sistema operativo en el que trabajes.

Los comandos más básicos que puede probar son `ls` o `ll` para listar los archivos o directorios. También utilizarás mucho el comando `cd` para desplazarte entre directorios dentro de tu computador.

Los CLI, como NPM, incorporan a tu sistema operativo una serie de comandos específicos para trabajar con una tecnología. Suelen utilizarse estos con un prefijo como `npm <command-name>`.

## **Hola Mundo con NodeJS**
Siempre, y para toda tu vida, que instales una nueva tecnologías, lo primero que realizarás es el “Hola Mundo” que **permite corroborar la correcta instalación de la tecnología o herramienta**.

Para crear tu primer proyecto en NodeJS, con ayuda de NPM, basta con utilizar el comando `npm init -y`. El mismo creará en cuestión de segundos tu primer proyecto.

Observa que este comando ha creado un archivo llamado `package.json` que contiene la configuración básica de cualquier proyecto desarrollador en NodeJS.
```javascript
{
  "name": "prueba",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
No debes preocuparte tanto por su contenido, poco a poco lo irás comprendiendo. Puedes observar, entre otros datos, el nombre del proyecto, la versión, una descripción y el archivo base del proyecto, entre otros datos.

Continúa creando un archivo que llamaremos `index.js` que será el archivo base de nuestro proyecto. Agrégale al mismo el siguiente contenido:
```javascript
console.log("¡Hola Mundo!");
```
Ya puede ejecutar tu primer proyecto en NodeJS utilizando el comando `node index.js`. Recuerda utilizar el nombre de tu archivo que acabas de crear para indicarle a Node qué archivo ejecutar.

En cuestión de segundos observarás un `¡Hola Mundo!` en la consola que hayas utilizado para lanzar el comando. Eso significa que NodeJS se encuentra correctamente instalado en tu computador y has ejecutado tu primer programa.

Ha sido bastante sencillo la creación de un proyecto con NodeJS y su ejecución. Ahora es momento de desarrollar tu primera aplicación backend apoyándote de estas tecnologías.

# ¿Qué es ExpressJS?
Una de las dependencias más antiguas, pero completamente vigente y recomendada, para trabajar con aplicaciones web en NodeJS es Express.js. La misma te permitirá, en pocas líneas de código, **exponer tu primer servidor web y crear tu primera API**.

# HTTP, localhost, servidores y puertos
A lo largo de tu vida como programador o programadora, te encontrarás con **múltiples conceptos que debes conocer y que verás realmente en todas partes**. Protocolos, servidores, puertos, el funcionamiento de cada tecnología. Veamos a continuación un explicativo de **conceptos básicos que tienes que comenzar a interiorizar**.

## **Estructura de un dominio**
Las páginas web se identifican por un dominio único e irrepetible. Conocerás el dominio de Google (https://google.com) o el dominio de Platzi (https://platzi.com).

Los dominios son también llamados URI y están compuestos por varias partes.

### **¿Qué es una URI?**
URI son las siglas en español de **Identificador de Recursos Uniforme** y es ese **identificador único de una página web**. El mismo está compuesto por dos partes, una URL (Localizador de Recursos Uniforme) y una URN (Nombre de Recurso Uniforme).

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28763%29.png)

### **Composición de una URI**
Dentro de una URI, podemos identificas varias partes que componen a la misma:

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Screenshot-from-2022-09-11-13-36-42%281%29.jpg)

* **URI**:
  * Esquema: Protocolo que la URI utiliza, pudiendo ser HTTP o HTTPS.
  * Dominio: Nombre del dominio de la página.
  * Puerto: Puerto por el que el servidor se encuentra “escuchando” para responder con la información de la página.
  * Ruta: Nombre de la página concreta que queremos solicitar dentro del dominio.
  * Cadena de búsqueda: Parámetros opcionales o variables para dar más información a la ruta.
* **URN**:
  * Nombre: Hace referencia a una sección particular dentro de una página. También denominado “fragmento”.

Entendiendo cómo se compone un dominio, profundicemos y comprendamos el qué y el porqué de cada parte.

### **Protocolo HTTP**
Conoces vagamente lo que es el protocolo HTTP o HTTPS. El Protocolo de Transferencia de Hipertexto es una **forma estandarizada de hacer las cosas o de transmitir información, en este caso**. La S de HTTPS significa Secure o seguro y permite la transferencia de datos codificados para evitar robo de información.

Tal vez recuerdes el significado de HTML (Lenguaje de Marcado de Hipertexto), mientras que el protocolo HTTP también hace referencia a esa palabra: “Hipertexto”. HTTP es el método de transferencia de este tipo de información.

Muchas veces el protocolo que utilizamos cuando utilizamos un navegador se encuentra implícito. Observamos la URI y solo vemos platzi.com/home, el HTTPS siempre se encuentra ahí, pero para hacer más amena la lectura de un dominio, los navegadores lo ocultan.

También cabe mencionar el famoso “WWW” que muchas veces acompaña a una URI. Puedes encontrarlo con el nombre de W3 o simplemente “La Web”. El mismo significa World Wide Web o Red Informática Mundial.

### **Dominio de una página**
El nombre propiamente dicho de una página se lo conoce como Dominio. Cuando hablamos de “la página de Platzi”, hacemos referencia a su dominio que es https://platzi.com.

Observa también el `.com` que tantas veces has visto en otras páginas. La extensión de los dominios hacen referencia al grupo al que este pertenece. Pudiendo tener extensiones gubernamentales como `.gob`, extensiones propias de un país como `.ar` o `.mx` o extensiones de otro tipo como `.net` que también es muy utilizado, entre muchos otros tipos de extensiones.

Los dominios son también denominados como DNS (Domain Name System). Es un concepto algo más avanzado que no debes preocuparte en este momento, pero en pocas palabras, **es la forma de resolver y localizar una página web en internet en todo el mundo**.

Imagina que en el mundo existen cientos de miles y miles de servidores con páginas webs. ¿Cómo encontrar el servidor de Platzi? Los DNS resuelven esto y permiten que la página de Platzi llegue a tu navegador.

### **Puertos**
Los puertos son **ese canal por el que se intercambia información entre un cliente y un servidor o entre subsistemas**. Es un número que va del 0 al 65535 (2^16) y se aconseja escoger uno a partir del 1024. Muchas tecnologías o protocolos tienen un puerto por defecto ya establecido como el puerto 80 para HTTP o el puerto 443 para el HTTPS.

Si utilizamos un puerto que ya se encuentra en uso, podemos tener problemas con nuestra aplicación. Por este motivo, se utilizan a partir del puerto 1024, dado que de ahí para atrás muy posiblemente ya se encuentran en uso en tu computador.

A medida que ganes experiencia en múltiples tecnologías te encontrarás con que existen muchos otros puertos ya predefinidos como el puerto 21 para el protocolo FTP, 22 para SSH, 3306 para MySQL, entre otros. Para NodeJS, se suele utilizar el puerto 3000 o el 8080.

Los puertos suelen estar ocultos y no los verás en una URI. Cuando accedes a una página a través de HTTP, implícitamente estás utilizando el puerto 80 o el puerto 443 si se trata de HTTPS. Si decides cambiar el puerto (no es recomendable), si deberás hacer referencia al mismo como platzi.com:3000/.

### **Ruta de una página**
La ruta es el nombre de una página en particular dentro de toda una página web. El nombre de cada página es asignado por el propio programador. Si te encuentras desarrollando una página de un buscador, puedes denominar a la misma como /buscador o /search, la páginas principal de una web suele ser /home o simplemente /.

Te animo a explorar la ruta de cualquier página que visites. Verás que su nombre siempre está relacionado con el contenido de la misma.

### **Parámetros de consulta**
Los parámetros de consulta deben ser opcionales. Una página continuará funcionando o será correctamente localizada existan o no estos.

Los mismos comienzan luego de un ? seguido del nombre de la variable y de su valor. Si una página tiene más de un parámetro, estos se separan con el caracter &. Por ejemplo: ?nombre=freddy&pais=colombia.

Estos parámetros se suelen utilizar para crear buscadores. Son variables para crear filtros de búsquedas o pasarle información dinámica que será capturada por la aplicación y manipulada.

### **Sección de una página**
Dentro de una misma página encontrarás varias secciones. Las mismas pueden identificarse con un nombre en particular o un ID. En el URI, puedes hacer referencia a esta sección con un # seguido del nombre de dicha sección. Por ejemplo https://platzi.com/home#routes.

Observarás que, al ingresar a este tipo de URI, serás dirigido directamente a esa sección dentro de la página. Es una forma de crear un “atajo” para el usuario cuando la página tiene mucho contenido.

## **Localhost o servidor local**
La palabra `localhost` será parte de ti de ahora en adelante. La misma significa “servidor local” y hace referencia a tu propio computador. Cuando levantas un servidor con NodeJS, puedes ingresar desde un navegador con `localhost:3000/` o con el puerto que hayas elegido.

Cualquier otra aplicación o programa que se encuentra ejecutándose en tu computador, también podrás acceder a él desde `locahost:<puerto>/`.

## **Peticiones HTTP**
Ya sabes lo que es el protocolo HTTP, pero aún hay un concepto más que debes interiorizar.

**Las solicitudes o peticiones que realices por medio de HTTP a un servidor puede ser de varios tipos**, cada uno de ellos destinado a un propósito específico. Los diferentes tipos de solicitudes HTTP se conocen como “Verbos HTTP”. Veamos de qué tipos existen:

* **GET**: El verbo GET se utiliza para la obtención de datos. Es el más utilizado. Siempre que ingresas a una página web, la solicitud se realiza por GET.
* **POST**: Utilizarás POST para la creación de datos o registros. POST tiene la particularidad de que codifica la información para el envío de datos secretos.
* **PUT**: PUT se usa para la actualización de datos, para indicarle al servidor de la actualización completa de un registro.
* **PATCH**: PATCH es muy similar a PUT, con la diferencia de que suele implementar para actualizar un solo dato de un registro.
* **DELETE**: Así como puedes obtener, crear y actualizar información, DELETE lo utilizarás para el borrado de datos.
No son todos, aún hay más tipos, pero estos son los más utilizados y que tienes que comenzar a conocer de momento.

Muchos de los verbos HTTP son intercambiable. O sea, siempre podrás obtener datos a través de PUT o POST, o borrar los mismos a través de GET. Las **buenas prácticas de desarrollo de software**, y los buenos programadores, respetan las “reglas” del protocolo y te aconsejo que tú también lo hagas.

## **Conclusión**
Muchos conceptos, mucha información nueva para ti. Te aconsejo que vuelvas a ver esta clase en varias oportunidades para consolidar el conocimiento, ya que todos los conceptos vistos aquí, te acompañarán el resto de tu vida como desarrollador de software.

# Express.js y fetch: API REST con JavaScript
Te encuentras desarrollando tu primer backend y tu primera API. Un backend está compuesto por **múltiples endpoints que serán utilizados por el front-end**. Es momento de conectar ambos mundos.

## **¿Qué es un endpoint?**
Un nuevo término que debes conocer y que siempre te acompañará. Llamamos endpoint, o punto final, a **cada URL que el backend exponer para que el front-end utilice**, ya sea para la obtención de datos, creación, actualización, etc.

Cada acción que tu backend pueda realizar, la misma se ejecutará a través de un endpoint.

### **Creando tu primer endpoint**
Crear un endpoint con ExpressJS para enviar datos a un cliente es muy sencillo. Ya tienes tu servidor levantado, al mismo vamos a agregarle endpoints para la obtención de datos.
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Endpoint para obtener datos
app.get('/datos', (req, res) => {
  const datos = '12345';
  res.send(datos);
});

app.listen(port, () => {
  console.log(`¡Servidor listo!`);
});
```
Observa el endpoint `/datos`, el mismo devuelve un número. Accede a este endpoint desde la URL `localhost:3000/datos` y visualizarás los mismos en el navegador.

Pero la obtención de esta información por parte de un cliente no suele realizarse directamente por el navagador. En su lugar, utilizamos un cliente HTTP para lograr conectar en backend y el front-end.

## **Conexión de backend y front-end**
Las consultas por parte de un front-end al backend se realizan por medio de un cliente HTTP. El mismo es una librería que te permitirá **hacer consultas a los endpoints y obtener información**.

Encontrarás muchos clientes HTTP en NPM. Para este ejemplo, usaremos uno llamado `fetch` que es propio de Javascript y no tendremos que instalar ninguna dependencia.

En los archivos JS de tu front-end, puedes realizar solicitudes HTTP de la siguiente manera:
```javascript
fetch('http://localhost:3000/datos')
  .then(response => response.json())
  .then(data => {
    console.log(data);      // 12345
  });
```
Al ejecutar esta función asíncrona, obtendrás los datos del backend en la variable `data` pudiendo manipular los mismos y mostrarlos en el HTML de tu página.

### **Problemas de CORS**
Puedes tener con un problema trivial al querer realizar consultas a un backend. Mejor dicho… vas a tener este problema.

CORS es un pequeño problema con el que te toparás mil veces en tu vida como programador. Pero no te preocupes, es de fácil resolución.

La consola de desarrollo de los navegadores te permitirá obtener más información cuando las cosas no funcionen. Si te encuentras con un error similar a:

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/redscreenshot%20%281%29.jpg)

Indica un problema de CORS que significa, por sus siglas en español, Intercambio de Recursos de Origen Cruzado. Es una **medida de seguridad de los backend para que no cualquier cliente, o cualquier front-end, realice consultas al mismo**.

El backend debe permitir explícitamente que un cliente haga consultas, de lo contrario rechazará las mismas.

Habilita CORS instalando su respectiva dependencia con `npm install cors` y realizando la importación de la misma.
```javascript
// Importamos CORS
const cors = require('cors');

// Activamos CORS
app.use(cors());
```
De esta forma, el backend está listo para recibir consultas y el front-end podrá obtener los datos y trabajar con los mismos.

## **Conclusión**
Acabas de dar tu primer paso en el desarrollo *full-stack*, o sea, en el desarrollo backend y front-end. ¡Felicidades!

Es solo el primer paso para integrar estos los dos mundos y poder visualizar en un front-end, los datos que el backend procesa o almacena en una base de datos.

# JSON y POST: mokepon online
**El intercambio de información entre un backend y un frontend** puede realizarse de varias formas. Será importante para ti como programador identificar cuándo utilizar cada uno de ellas.

## **Notación de Objetos de Javascript**
JSON, o *Javascript Object Notation* es un **estándar para la transferencia de datos entre dos sistemas**. Hoy en día, casi todos los protocolos de Internet funcionan por detrás con JSON cuando se trata de enviar y recibir información.

Su sintaxis es algo particular y puede causar confusión al principio. Comprendamos cómo se estructura un JSON y para qué nos servirá:

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/295558482_148259701195383_2425633102847281998_n-e41058ac-54dc-40c0-ad69-c6029c364e7d.webp)

Un JSON está compuesto por `claves` para acceder a determinados `valores`.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/JSON1-2b812f6b-8bf7-40b8-b8e1-14affbaa8b48.webp)

El formato JSON no deja de ser texto simple. Para acceder a su información, debemos “parsearlo” para convertir el mismo en un objeto y así poder obtener el valor de sus datos. Para lograr esto, empleamos la función propia de JavaScript `JSON.parse('')`.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/295567031_582534750039890_7016956545561340439_n-84f4bdb7-88de-4adc-8bcb-0a9d25fd1696.webp)

Un JSON es un objeto y dentro del mismo puede tener datos del tipo numéricos, texto, booleanos u otros objetos.

## **Habilitando JSON en ExpressJS**
Para enviar y recibir información en formato JSON con ExpressJS, debes activarlo de forma muy simple.
```javascript
// Importamos y creamos la aplicación de Express
const express = require('express');
const app = express();

// Activamos el formato JSON
app.use(express.json());
```
Con esta simple línea de código, tus endpoints ya puede procesar información en formato JSON.

# ¿Qué es una API REST?
Una API REST, o API RESTful o simplemente API, es el nombre técnico de las **aplicaciones backend para la consulta y manipulación de datos** por parte de un cliente.

REST significa “Transferencia de Estado Representacional”, por sus siglas en español. Son una serie de principios para el desarrollo de APIs. Algunos de estos principios son:

* Utiliza arquitectura cliente-servidor y el protocolo HTTP.
* Ausencia de estado, el backend no guarda el estado de la solicitud.
* Uso de caché para un funcionamiento más rápido.
* Intercambio de información utilizando JSON, XML o texto plano.
* Utilización de verbos GET, POST, PUT, DELETE.

Las API REST son un concepto del que poco a poco aprenderás más. Hasta el momento, ya conoces los conceptos básicos para la construcción de tu primer backend.

A medida que tu aplicación crezca y tengas más y más código, habrá errores, es inevitable tenerlos. **Los errores en un software se denominan BUG y el proceso de identificarlos y solucionarlo lo conocemos como DEBUGGING**.

# Errores en una aplicación
Te habrás dado cuenta de que la palabra BUG significa Insecto o bicho en inglés. Este término se originó en el siglo XIX cuando se construían complicadas y enormes máquinas. A estas máquinas se les llegaban a meter bichos (BUGS) y estorbaban el movimiento de alguna de sus piezas haciendo que fallaran.

El término Bug comenzó a popularizarse en los años '40 cuando operadores de una gran máquina encontraron una polilla atascada en el interior de la misma.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ND09_arts_quotations.webp)

Pegaron el bicho a un reporte explicando los motivos de los fallos de la máquina y desde entonces **decimos “bug” cuando nuestra aplicación tiene un error**.

## **Proceso de solución de bugs**
Hay diversos tipos de bugs dependiendo la gravedad del error que esté causando en un sistema. El proceso de identificar los mismos y solucionarlos es conocido como “Debug” o “Debuging”.

Las [herramientas para desarrolladores](https://platzi.com/cursos/devtools/) de los navegadores serán tu mejor aliado y te darán mucha información para localizar un fallo y solucionarlo.

## **Conclusión**
Bug y Debug, dos términos del cual oirás mucho al respecto a medida que te sumerjas en el mundo del desarrollo de software.

*“Puedes demostrar la presencia de bugs en una aplicación, pero no puedes demostrar la ausencia de los mismos.” (Vuelve a leer esta frase). No es posible demostrar que un sistema funciona bien al 100%. Puede haber bugs en donde sea y por este motivo también existen profesionales expertos en encontrarlos denominados Testers.*

Te toparás con bugs toda tu vida como programador. Aprender a debuguear de acuerdo al lenguaje o a la tecnología que estés utilizando te permitirá solucionar los mismos.

# Manipulación de arrays en Javascript
Ya sabes lo que es un array, un conjunto de datos que pueden o no ser del mismo tipo.

[Los arrays permiten muchas operaciones](https://platzi.com/cursos/arrays/) como la obtención de su longitud con `arr.length` o recorrer cada elemento con `arr.foreach()`. Veamos una serie de otras funciones que te serán muy útiles de ahora en adelante.

*Map*: La función `arr.map()` permite, además de recorrer cada elemento de un array, devolver otro array modificado a partir del original.
```javascript
const arr = [1, 2, 3, 4, 5];
const new_arr = arr.map(e => {
    // Sumamos 1 a los elementos pares
    if (e % 2 == 0)
        return e + 1;
    else
        return e;
});
console.log(new_arr);    // [1, 3, 3, 5, 5]
```

**Filter**: La función `arr.filter()` permite recorrer y filtrar elementos de un array para obtener un sub-array con menos cantidad de elementos a partir de una condición lógica.
```javascript
const arr = [1, 2, 3, 4, 5];
const new_arr = arr.filter(e => {
    // Devolvemos solo los elementos pares
    if (e % 2 == 0)
        return true;
});
console.log(new_arr);    // [2, 4]
```
Map y Filter son solo las dos primeras funciones de Javascript para manipular arrays que tienes que conocer. Poco a poco irás conociendo otras. Hasta el momento, practica creando arrays de datos y comprendiendo cómo funcionan estas.

Estas funciones son propias de Javascript y puedes utilizarlas tanto en el backend como en el front-end. En el futuro, podrás descubir herramientas similares de manipulación de datos para otros lenguajes de programación.

