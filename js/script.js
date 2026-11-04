/* import clave from "./apikey.js";

//Conte
const sectoresContainer = document.getElementById('countriesContainer');


const response = await fetch(
  'https://api.restcountries.com/countries/v5?limit=100',
  { headers: { 'Authorization': clave } }
);


//?offset=25



async function recorrerPaises() {
  const countries = await response.json();


  countries.data.objects.forEach(country => {
    if (country.flag.url_svg !== "" && country.capitals.length != 0) {

      const card = document.createElement("article");
      card.className = "country-card";

      const flag = document.createElement("img");
      flag.src = country.flag.url_svg;
      flag.alt = "Bandera de " + country.names.official;
      card.appendChild(flag);

      const title = document.createElement("h2");
      title.textContent = country.names.official;
      card.appendChild(title);

      const paragraphCapital = document.createElement('p');
      paragraphCapital.textContent = "Capital: " + country.capitals[0].name;
      card.appendChild(paragraphCapital);

      const paragraphRegion = document.createElement('p');
      paragraphRegion.textContent = "Continente: " + country.region;
      card.appendChild(paragraphRegion);

      const paragraphLenguage = document.createElement('p');
      paragraphLenguage.textContent = "Idioma: " + country.languages[0].name;
      card.appendChild(paragraphLenguage);

      const paragraphCurrence= document.createElement('p');
      paragraphCurrence.textContent = "Moneda: " + country.currencies[0].name;
      card.appendChild(paragraphCurrence);


      sectoresContainer.appendChild(card);

      console.log(title.length);

    }
  })
};

recorrerPaises(); */

//-----PÁGINACIÓN-----//
//-----PÁGINACIÓN-----//
//-----PÁGINACIÓN-----//



import clave from "./apikey.js";

const sectoresContainer = document.getElementById('countriesContainer');
const btnAnterior = document.getElementById('prev-btn');
const btnSiguiente = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// 1. Variable para controlar el offset inicial
let offset = 0;
const limit = 100;

async function recorrerPaises() {
  // Limpiamos el contenedor antes de cargar los nuevos países
  sectoresContainer.innerHTML = "";

  try {
    // 2. Hacemos el fetch usando la variable offset de forma dinámica
    const response = await fetch(
      `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`,
      { headers: { 'Authorization': clave } }
    );

    const countries = await response.json();

    countries.data.objects.forEach(country => {
      if (country.flag.url_svg !== "" && country.capitals.length != 0) {
        const card = document.createElement("article");
        card.className = "country-card";

        const flag = document.createElement("img");
        flag.src = country.flag.url_svg;
        flag.alt = "Bandera de " + country.names.official;
        card.appendChild(flag);

        const title = document.createElement("h2");
        title.textContent = country.names.official;
        card.appendChild(title);

        const paragraphCapital = document.createElement('p');
        paragraphCapital.textContent = "Capital: " + country.capitals[0].name;
        card.appendChild(paragraphCapital);

        const paragraphRegion = document.createElement('p');
        paragraphRegion.textContent = "Continente: " + country.region;
        card.appendChild(paragraphRegion);

        const paragraphLenguage = document.createElement('p');
        paragraphLenguage.textContent = "Idioma: " + country.languages[0].name;
        card.appendChild(paragraphLenguage);

        const paragraphCurrence = document.createElement('p');
        paragraphCurrence.textContent = "Moneda: " + country.currencies[0].name;
        card.appendChild(paragraphCurrence);

        // 1. Creamos el botón de favoritos dentro del forEach
        const btnFavorito = document.createElement("button");
        btnFavorito.textContent = "⭐ Añadir a favoritos";
        btnFavorito.className = "btn-favorito"; // Por si le quieres dar estilos luego



        sectoresContainer.appendChild(card);
      }
    });

    // 3. Actualizamos el texto de la página visualmente (offset 0 = Pág 1, 100 = Pág 2, 200 = Pág 3)
    const numeroPagina = (offset / limit) + 1;
    pageInfo.textContent = `Página ${numeroPagina}`;

    // 4. Aplicamos la lógica de los estados de los botones (.disabled) que diseñamos antes
    btnAnterior.disabled = (offset === 0);
    btnSiguiente.disabled = (offset >= 200);

  } catch (error) {
    console.error("Error al cargar los países:", error);
  }
}

// Carga inicial al abrir la página
recorrerPaises();

// 5. Eventos de los botones para cambiar el offset
btnSiguiente.addEventListener('click', () => {
  if (offset < 200) {
    offset += 100;
    recorrerPaises();
  }
});

btnAnterior.addEventListener('click', () => {
  if (offset > 0) {
    offset -= 100;
    recorrerPaises();
  }
});

//-----FIN PÁGINACIÓN-----//
//-----FIN PÁGINACIÓN-----//
//-----FIN PÁGINACIÓN-----//



//-----FAVORITOS-----//
//-----FAVORITOS-----//
//-----FAVORITOS-----//

