/* hooks */
import { useState, useEffect } from 'preact/hooks';
import { inView, animate } from "motion";
import "./styles/style.css";
/* ExternalComponents */
import { MdClose, MdFilterList, MdFilterListOff} from 'react-icons/md';
import PlaceCard from './islandComponents/PlaceCard';
import CardSkeleton from './islandComponents/CardSkeleton';
import CardNotFound  from './islandComponents/CardNotFound';
/*  helpers */
import { queryConstructor } from '../../utils/queries';
import { obtenerListas } from '../../utils/lists';


export default function PlacesGrid({ category = ""}) {
    /* ESTADOS */
    const [isLoading, setIsLoading] = useState(false);
    const [isFilterLoading, setIsFilterLoading] = useState(true);
    const [error, setError] = useState(null);
    /* LISTAS*/
    const [places, setPlaces] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [actividades, setActividades] = useState([]);
    const [caracteristicas, setCaracteristicas] = useState([]);
    /* FILTROS */
    const [categoria, setCategoria] = useState(category);
    const [tipo, setTipo] = useState(null);
    const [actividad, setActividad] = useState(null);
    const [caracteristica, setCaracteristica] = useState(null);


    /* FUNCION PARA OBTENER DATOS */
    const fetchPlaces = async () => {
        const url = queryConstructor({ nombre: "", categoria: categoria, tipo: tipo, actividades: actividad, caracteristicas: caracteristica });

        try {
            setIsLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const data = await response.json();
            const result = obtenerListas(data);

            setPlaces(data)
            setTipos(result.tipos);
            setActividades(result.actividades);
            setCaracteristicas(result.caracteristicas);
        } catch (err) {
            setError({ msg: err.message, status: err.status });
        } finally {
            setIsLoading(false);
            setIsFilterLoading(false);
        }
    };

    /* FETCHING DE DATOS */
    useEffect(() => {
        fetchPlaces()
    }, [categoria, tipo, actividad, caracteristica]);

    useEffect(() => {
        const fadeUp = document.querySelectorAll(".fade-up");
        fadeUp.forEach(
            (el ) => {
                inView(el, () => {
                    animate(el, {
                       opacity: [0,  1],
                      }, {
                         duration:1.5,
                          easing: "ease-in-out"
                        });
                });
            }
        )
    })

    const handleTipo = (t) => {
        setError(null);
        setTipo(tipo === t ? null : t);
    };

    const handleActividad = (a) => {
        setError(null);
        setActividad(actividad === a ? null : a);
    };

    const handleCaracteristica = (c) => {
        setError(null);
        setCaracteristica(caracteristica === c ? null : c);
    };

    const resetFiltros = (e) => {
        e.preventDefault();
        setTipo(null);
        setActividad(null);
        setCaracteristica(null);
        setError(null);
    };

    /* INTERNAL COMPONENTS */
    function FilterSkeleton() {
        return (
            <li class="flex w-full flex-col gap-1">
                <div class="skeleton h-8 w-full"></div>
                <div class="skeleton h-8 w-full"></div>
                <div class="skeleton h-8 w-full"></div>
            </li>
            )
        }

    function Filter({filterName="", filterArray=[], filterSelected="", Skeleton=FilterSkeleton, handlerClick}){
        return(
            <div class="container">
            <small class="text-xs text-slate-500 tracking-tighter relative -bottom-3 bg-slate-100 px-1 left-8 font-bold">{filterName}</small>
            <ul class="menu flex w-full rounded-box border gap-1 justify-start py-5">
                {isFilterLoading ? (<Skeleton/>) : (
                    filterArray.map(($item$, index) => (
                        <li key={`${filterSelected}-${index}`} class=' w-full text-left text-sm'>
                        <button
                            class={`hover:bg-indigo-100 border-none py-1 ${filterSelected === $item$ ? `bg-indigo-400 text-white` : "border-2"}`}
                            onClick={() => handlerClick($item$)}
                        >   
                        <MdClose className={`text-lg duration-75 ${filterSelected === $item$ ? "text-black" : "text-transparent"}`} />
                            {$item$}
                        </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
        )
    }

    return (
    <article class=''>
        <section class="flex flex-col lg:flex-row gap-2">
            <section class="w-full lg:hidden bg-slate-100 rounded-lg shadow flex flex-col flex-nowrap justify-end">
            <div class="w-full flex flex-col items-center justify-center text-center py-0 px-3">
                <div class="breadcrumbs text-xs mx-auto">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/lugares">Lugares</a></li>
                        {categoria ? <li>{categoria == "recreativo" ? "Recreativos" : categoria }</li> : null}
                        {/* {tipo || actividad ? <li><MdFilterList className='text-sm inline' /> {tipo && actividad ?  tipo +" + "+ actividad : (tipo ? tipo : (actividad ? actividad : null)) }</li> : null} */}
                    </ul>
                </div>
            </div>
            
                <div class="dropdown dropdown-end w-full">
                    <div class="w-full flex flex-row justify-end">
                {tipo || actividad || caracteristica ? <button class="link text-sm mx-5" onClick={resetFiltros}><MdFilterListOff className='text-base inline' /> Quitar filtros</button> : <span class="my-5 mx-5  text-transparent">*</span>}
                        <div tabindex="0" role="button" class="btn btn-ghost m-2"> <MdFilterList className='text-base inline' /> Filtros</div>
                    </div>
                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow">
                        <div class="h-[80vh] overflow-y-auto">
                            <Filter filterName="Tipo" filterArray={tipos} filterSelected={tipo} handlerClick={handleTipo} />
                            <Filter filterName="Actividad" filterArray={actividades} filterSelected={actividad} handlerClick={handleActividad} />
                        </div>
                        </ul>
                    </div>
            </section>

            <aside id='filtros-nav' class={` filtros-nav-container w-96 bg-slate-100 rounded-lg border border-indigo-100  hidden lg:block px-5 py-5`}>
            <div class="w-full flex flex-col items-center justify-center text-center pb-10 px-3">
                <div class="breadcrumbs text-xs mx-auto">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/lugares">Lugares</a></li>
                        {categoria ? <li>{categoria == "recreativo" ? "Recreativos" : categoria }</li> : null}
                        {/* {tipo || actividad ? <li><MdFilterList className='text-sm inline' /> {tipo && actividad ?  tipo +" + "+ actividad : (tipo ? tipo : (actividad ? actividad : null)) }</li> : null} */}
                    </ul>
                </div>
            </div>
                <div class="">
                <h4 class='text-2xl'>Filtrar por</h4>
                {tipo || actividad || caracteristica ? <button class="link" onClick={resetFiltros}>Quitar filtros</button> : <span class="my-5 text-transparent">*</span>}
                <div class='flex flex-col gap-4'>
                    <Filter filterName="Tipo" filterArray={tipos} filterSelected={tipo} handlerClick={handleTipo} />
                    <Filter filterName="Actividad" filterArray={actividades} filterSelected={actividad} handlerClick={handleActividad} />
                </div>
                </div>
            </aside>

            <section class="w-full grid grid-cols-1 md:grid-cols-1 gap-10 pb-48" id="places-container">
            {isLoading ? <CardSkeleton /> : error ? <CardNotFound  /> : (
                places.map((place) => {const { key, ...props } = place; return (<div key={key}><PlaceCard {...props} /></div>)})
            )}
            </section>
        </section>
    </article>
    );
}