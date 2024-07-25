import { places } from "../../data/places/places"

function placeFilter(obj="", category="", city="") {
  let placesList = [];

  // Filtrar por categoría
  if (category && category !== "todo") {
    placesList = places[category] || [];
  } else {
    placesList = Object.values(places).flat();
  }

    // Filtrar por ciudad
    if (city && city !== "todas") {
      placesList = placesList.filter(place => place.ciudad.toLowerCase() === city);
    }
  
  return placesList
}

function getCategories(){
  return Object.keys(places)
}

function getActivities(category) {
  // Combine placeFilter results and extract unique activities efficiently
  return Array.from(new Set(placeFilter(category).flatMap(place => place.actividades)));
}

function getCities(category) {
  // Combine placeFilter results and extract unique activities efficiently
  return Array.from(new Set(placeFilter(category).flatMap(place => place.localidad)));
}

function getTipos(Arr="") {
  return Array.from(new Set(Arr.flatMap(place => place.tipo)));
}
function getLocalidades(Arr="") {
  return Array.from(new Set(Arr.flatMap(place => place.localidad)));
}
function getActividades(Arr="") {
  return Array.from(new Set(Arr.flatMap(place => place.actividades)));
}

function getCategorias(Arr="") {
  return Array.from(new Set(Arr.flatMap(place => place.categoria)));
}


function getFilters(data=""){
  const categories = Array.from(new Set(Arr.flatMap(place => place.categoria)));
  const types = Array.from(new Set(Arr.flatMap(place => place.actividades)));
  const locations =  Array.from(new Set(Arr.flatMap(place => place.localidad)));
  return {categories, types, locations}
}


export { placeFilter, getTipos, getActividades, getLocalidades, getCategorias, getFilters };
