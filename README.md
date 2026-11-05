# tbp
Proyecto "ThiagobuscaPaises"
"TBP" o ThigoBuscaPaises" es una pequeña web que utiliza el llamado de una api llamada restCountries para
crear tarjetas con datos de todos los países del mundo, entre lo que se encuentra la imagen de la bandera, 
el nombre oficial, su capital, y un par de datos más para que los niños (o algunas personas que quieran aprender)
puedan aprender datos básicos de los principales países o de sus favoritos.

## Características Principal

Filtro y Búsqueda: La filtración la podemos realizar mediante regiones o por coincidencia en su nombre.
Paginación: Navegación por resultados mediante `offset` y `limit`.

---

## Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript.
* **API Externa:** REST Countries API.
* **Base de Datos:** PostgreSQL.

---

## 🚀 Instalación y Uso

1. **Clona este repositorio:**
```bash
git clone git@github.com:PipeRMThiago/tbp.git 

2. Para poder acceder a los datos de la API que utilizo en mi proyecto de página web debes seguir los siguientes pasos:

1. Entrar al sitio web: Ve a la página oficial de REST Countries y haz clic en el botón para obtener una clave o registrarte ("Get an API key").

2. Registrarte: Rellena el formulario de registro con tus datos básicos (nombre completo, correo electrónico y contraseña) y acepta los términos de servicio.

3. Acceder al panel: Inicia sesión con tu nueva cuenta recién creada.

4. Generar y copiar tu API Key: Dirígete a la sección de API Keys dentro de tu panel de usuario para visualizar o generar tu clave única.

5. Configurarla en tu proyecto: Cópiala y guárdala de forma segura (tal como lo hiciste en tu archivo apikey.js) para utilizarla en las peticiones HTTP de tu aplicación mediante la cabecera de autorización:
