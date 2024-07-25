import { useState, useEffect, } from 'react';
import { getTipos, getActividades, getLocalidades, getCategorias, getFilters } from '../../assets/js/placeFilter';
import PlaceCard from './PlaceCard';
import CardSkeleton from './CardSkeleton';
import { MdClose } from 'react-icons/md';
import { CategoriesBtns } from './PlacesCategoriesBtns';
import { queryConstructor } from '../../data/places/queries';
import { obtenerListas } from '../../data/places/lists';



export default function PlacesGrid({ category = "", placesIndexView = true }) {

    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null);
    const [places, setPlaces] = useState([]);

    /* FILTROS */
    // seleccionados 
    const [tipo, setTipo] = useState(null)
    const [categoria, setCategoria] = useState(null);
    const [localidad, setLocalidad] = useState(null);
    const [actividad, setActividad] = useState(null);

    // Listas 
    const [tipos, setTipos] = useState([])
    const [localidades, setLocalidades] = useState([])
    const [actividades, setActividades] = useState([])

    /*  FETCHING DE DATOS */
    useEffect(() => {
        const url = queryConstructor({ nombre: "", categoria: category, localidad: localidad, tipo: tipo, actividades: actividad })
        console.log(url)
        const fetchItems = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.statusText);
                }
                const data = await response.json();
                setPlaces(data);

                const result = obtenerListas(places)
                setActividades(result.actividades);
                setLocalidades(result.localidades);
                setTipos(result.tipos);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false)
            }
        };
        fetchItems();

    }, [tipo, actividad, localidad, categoria]);



    const handleTipo = (event) => {
        setTipo(event.target.value);
    }
    const handleActividades = (event) => {
        setActividad(event.target.value);
    }
    const handleLocalidad = (event) => {
        setLocalidad(event.target.value);
    }

    return (
        <>
            <section className="">
                <CategoriesBtns indexView={placesIndexView} />
            </section>

            <section className='w-full flex gap-2  px-2 py-5'>

                <section
                    id='filtros-nav'
                    className={` p-5 w-96  z-[80] h-screen bg-slate-100 rounded-lg border border-indigo-100`}
                >
                    <h4>Filtros</h4>
                    <button onClick={() => console.log("click")} className='lg:hidden'><MdClose /></button>
                    <div className='flex flex-col gap-10'>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Tipo</span>
                                <span className="label-text-alt link hover:link-primary" onClick={event => setTipo("")}>Restablecer</span>
                            </div>
                            <select  className="select bg-indigo-100" id="tipolugar" defaultValue={"todos"} onChange={event => handleTipo(event)}>
                            <option className="font-bold text-sm" value="todos">todos</option>
                            {
                                tipos.map((tipo, index) => (
                                    <option key={"tipo" + index} value={tipo.slice(0, 1).toUpperCase() + tipo.slice(1)}>{tipo}</option>
                                ))
                            }
                            </select>
                            <div className="label">
                                <span className="label-text-alt"></span>
                                <span className="label-text-alt"></span>
                            </div>
                        </label>

                        <select className="select select-bordered max-w-sm" id="tipolugar" defaultValue={"Tipo"} onChange={event => handleActividades(event)}>
                            <option disabled value="tipo" className='font-bold text-sm'>Tipo</option>
                            {
                                actividades.map((tag) => (
                                    <option key={"key" + tag} value={tag}>{tag}</option>
                                ))
                            }
                        </select>

                        <div className='form-control'>
                            <select className="select select-xs select-bordered max-w-sm" id="ciudadlugar" defaultValue={"ciudad"} onChange={event => handleLocalidad(event)}>
                                <option disabled className="font-bold text-sm" value="ciudad">Ciudad</option>
                                {
                                    localidades.map((city) => (
                                        <option key={"city" + city} value={city}>{city}</option>
                                    ))
                                }
                            </select>
                            <label className='label label-text-alt'><button onClick={event => setLocalidad("")} className='link'>Restablecer filtro</button> </label>
                        </div>


                        <select className="select select-xs select-bordered max-w-sm" id="ciudadlugar" defaultValue={"Tipos"} onChange={event => handleTipo(event)}>
                            <option disabled className="font-bold text-sm" value="Tipos">Tipos</option>
                            <option className="" value="todos">Todos</option>
                            {
                                tipos.map((tipo, index) => (
                                    <option key={"tipo" + index} value={tipo.slice(0, 1).toUpperCase() + tipo.slice(1)}>{tipo}</option>
                                ))
                            }
                        </select>
                    </div>
                </section>

                <section className="w-full px-5 grid grid-cols-1 md:grid-cols-2 gap-10 pb-48" id="places-container">
                    {isLoading ? (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    ) : (
                        places.length > 0 ? (
                            places.map((place, index) => {
                                const { key, ...props } = place

                                return (<div key={place.key}>
                                    <PlaceCard {...props} />
                                </div>)

                            })
                        ) : (
                            isLoading === false && <p className='alert col-span-full'>No se encontraron resultados</p>
                        )
                    )}
                </section>

            </section>
        </>
    );
}