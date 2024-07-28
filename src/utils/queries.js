
function queryConstructor(params = { nombre: "", categoria: "", localidad: "", tipo: "", actividades: "", caracteristicas: "" }) {

    const { nombre, categoria, localidad, tipo, actividades, caracteristicas } = params;

    const baseUrl = 'http://localhost:8000/api/v1/lugares/';

    // Crear una instancia de URLSearchParams
    const args = new URLSearchParams();

    // Agregar los parámetros si están presentes
    if (nombre) args.append("nombre", nombre);
    if (categoria) args.append("categoria", categoria);
    if (localidad) args.append("localidad", localidad);
    if (tipo) args.append("tipo", tipo);
    if  (caracteristicas) args.append("caracteristicas", caracteristicas);
    if (actividades) args.append("actividades", actividades);

    // Crear la URL completa con los parámetros
    const queryUrl = args.toString() ? `${baseUrl}?${args.toString()}` : baseUrl;
    return queryUrl;
}

export { queryConstructor }
