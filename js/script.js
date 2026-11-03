import clave from "./apikey.js";

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
    }
  })
};
recorrerPaises();

/* document.addEventListener("DOMContentLoaded", function () {
    console.log("hola");
 */



