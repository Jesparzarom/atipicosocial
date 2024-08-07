
export function obtenerListas(places) {
    // Usar flatMap para obtener y aplanar las actividades de cada lugar

    const actividades = places.flatMap(lugar => lugar["actividades"]);
    const actividadesUnicas = [...new Set(actividades)];

    const caracteristicas = places.flatMap(lugar => lugar["caracteristicas"]);
    const caracteristicasUnicas = [...new Set(caracteristicas)];

    const localidades = places.flatMap(lugar => lugar["localidad"]);
    const localidadesUnicas = [...new Set(localidades)];


    const tipos = places.flatMap(lugar => lugar["tipo"]);
    const tiposUnicos = [...new Set(tipos)];

    const ciudades = places.flatMap(lugar => lugar["ciudad"]);
    const ciudadesUnicas = [...new Set(ciudades)];

    return {
        actividades: actividadesUnicas,
        caracteristicas: caracteristicasUnicas,
        localidades: localidadesUnicas,
        tipos: tiposUnicos,
        ciudades: ciudadesUnicas
    };
}
