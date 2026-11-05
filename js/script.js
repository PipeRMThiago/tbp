
import clave from "./apikey.js"; /* importe para ocultar la apiKey */

const sectoresContainer = document.getElementById('countriesContainer');
const btnAnterior = document.getElementById('prev-btn');
const btnSiguiente = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// 1. Variable para controlar el offset inicial
let offset = 0;
const limit = 100; //cantidad de cartas que me envía la api

let region = '';

async function recorrerPaises() {
  // Limpiamos el contenedor antes de cargar los nuevos países
  sectoresContainer.innerHTML = "";

  const url = new URL('https://api.restcountries.com/countries/v5'); //creo una nueva url para meter los parametros a medida que cambie
  url.searchParams.append('limit', limit);
  url.searchParams.append('offset', offset);

  if (region) {
    url.searchParams.append('region', region);
  }

  try {
    // 2. Hacemos el fetch usando la variable offset de forma dinámica
    const response = await fetch(
      url.toString(),
      { headers: { 'Authorization': clave } }
    );

    const countries = await response.json();

    /* con esto me clasifica la lista por orden alfabetico */
    countries.data.objects.sort((a, b) => {
      return a.names.official.localeCompare(b.names.official);
    });


    countries.data.objects.forEach(country => {
      if (country.flag.url_svg !== "" && country.capitals.length != 0) {
        const card = document.createElement("article");
        card.className = "country-card";

        card.setAttribute("data-region", country.region);

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
        btnFavorito.textContent = "❤️";
        btnFavorito.className = "btn-favorito"; // Por si le quieres dar estilos luego
        card.appendChild(btnFavorito);



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
  if (offset < 250) {
    offset += limit;
    recorrerPaises();
  }
});

btnAnterior.addEventListener('click', () => {
  if (offset > 0) {
    offset -= limit;
    recorrerPaises();
  }
});

const regionFilter = document.getElementById('regionFilter');

regionFilter.addEventListener('change', (e) => {
  offset = 0;
  region = e.target.value.toLowerCase();
  recorrerPaises();
});


// -----------buscador por medio del input ----------- 
// -----------buscador por medio del input ----------- 


const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    const countryCards = document.querySelectorAll('.country-card');

    countryCards.forEach(card => {
      const titleElement = card.querySelector('h2');
      if (!titleElement) return;

      const countryName = titleElement.textContent.toLowerCase();

      if (countryName.includes(searchText)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
// -----------buscador por medio del input ----------- 
// -----------buscador por medio del input ----------- 



// --------------------Local Storage---------------- 

function getFavoritesFromLocalStorage(){
    const favoritesString = localStorage.getItem("favorites");
    // Si no existe, devolvemos un array vacío por defecto
    if (!favoritesString) {
        return [];
    }
    return JSON.parse(favoritesString);
}

function saveFavoritesToLocalStorage(favorites){
    const favoritesString =JSON.stringify(favorites);
    localStorage.setItem("favorites", favoritesString);
}

function clearFavorites(favorites){
    localStorage.setItem("favorites", "[]");
}

function addToFavorites(element){
    const favorites = getFavoritesFromLocalStorage();
    const oldFavorite = favorites.find(f=>f.name === element.name);
    if (!oldFavorite){
        favorites.push(element);
        saveFavoritesToLocalStorage(favorites);
    }
}

function removeFavorite(element){
    const favorites = getFavoritesFromLocalStorage();
    const oldFavoriteIndex = favorites.findIndex(f=>f.name === element.name);
    if (oldFavoriteIndex !== -1){
        favorites.splice(oldFavoriteIndex,1);
        saveFavoritesToLocalStorage(favorites);
    }
}

//Añadir o quitar del localStorage 
function toggleFavorites(element){
    let result = false;
    const favorites = getFavoritesFromLocalStorage();
    const oldFavoriteIndex = favorites.findIndex(f=>f.name === element.name);
    if (oldFavoriteIndex === -1){
        favorites.push(element);
        result = true;
    }else{
        favorites.splice(oldFavoriteIndex,1);
    }
    saveFavoritesToLocalStorage(favorites);
    return result;
}

function isInFavorites(element){
    const favorites = getFavoritesFromLocalStorage();
    const oldFavorite = favorites.find(f=>f.name === element.name);
    if (oldFavorite){
        return true;
    }else{
        return false;
    }
}

export {
    getFavoritesFromLocalStorage,
    saveFavoritesToLocalStorage,
    clearFavorites,
    addToFavorites,
    removeFavorite,
    toggleFavorites,
    isInFavorites
}

