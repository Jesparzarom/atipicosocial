
export function obtenerListas(places) {

    // Usar flatMap para obtener y aplanar las actividades de cada lugar
    const actividades = places.flatMap(lugar => lugar["actividades"]);
    const actividadesUnicas = [...new Set(actividades)];

    // Obtener localidades únicas
    const localidades = places.flatMap(lugar => lugar["localidad"]);
    const localidadesUnicas = [...new Set(localidades)];

    // Obtener tipos únicos
    const tipos = places.flatMap(lugar => lugar["tipo"]);
    const tiposUnicos = [...new Set(tipos)];

    return {
        actividades: actividadesUnicas,
        localidades: localidadesUnicas,
        tipos: tiposUnicos
    }; // Retornar las listas únicas
}