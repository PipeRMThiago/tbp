MEMORIA TÉCNICA DEL PROYECTO TBP


1. INTRODUCCIÓN Y OBJETIVOS
1.1. Contexto del Proyecto
TBP nace con un objetivo básico de que mi hijo de 7 años (que está motivado por las banderas de todos los paises del mundo) aprenda
datos simples y claros sobre los que más le generen interes.


1.2. Objetivos Principales
Desarrollar una aplicación web interactiva para la consulta y filtrado de datos geográficos mediante una API llamada RESTcountries.


2. ARQUITECTURA DE LA APLICACIÓN WEB

2.1. Estructura de Archivos

tbp/
├── css/
│   └── style.css
├── img/
│   └── tbp.webp
├── js/
│   ├── apikey.example.js
│   ├── apikey.js
│   └── script.js
├── .gitignore
├── favoritos.html
├── index.html
├── memoria.md
├── notas.txt
└── README.md

2.2. Tecnologías Empleadas
Frontend: HTML5, CSS3, JavaScript.

API Externa: REST Countries API (autenticación mediante token Bearer).

2.3. Funcionalidades Desarrolladas
Carga y Paginación Dinámica: Peticiones asíncronas (async/await) utilizando los parámetros offset y limit para navegar entre conjuntos de datos.

Ordenación de Datos: Clasificación alfabética de los elementos obtenidos mediante la función localeCompare.

Renderizado Dinámico: Manipulación del DOM para la generación de tarjetas de información.

Sistema de Filtros:

Filtro por región mediante la detección del evento change en elementos <select> y el uso de atributos data-region en el DOM.

Buscador predictivo por texto en tiempo real.


3. RESOLUCIÓN DE PROBLEMAS TÉCNICOS
3.1. Manejo de Elementos Dinámicos y Nulos
Problema: Errores de tipo TypeError al intentar aplicar métodos de cadena (toLowerCase) sobre atributos no existentes en elementos generados dinámicamente.

Solución: Inyección explícita de atributos data-* durante el ciclo de renderizado e implementación de cláusulas de guarda (guard clauses) en JavaScript.

4. CONCLUSIONES Y TRABAJO FUTURO
4.1. Estado Actual
Aplicación web funcional con consumo de API, paginación y filtrado.

4.2. Líneas de Mejora
Implementación de almacenamiento local (localStorage) para persistencia de elementos favoritos.

Sincronización del estado de filtros en la URL mediante la interfaz URLSearchParams.