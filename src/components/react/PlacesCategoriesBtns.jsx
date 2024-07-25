export  function CategoriesBtns({indexView}){
    const categorias = [
        {nombre: "recreativo", pagina:"recreativos"},
        {nombre: "entretenimiento", pagina:"entretenimiento"},
        {nombre: "servicios", pagina:"servicios"},
    ]
    
    return (
        <article className={`${indexView ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "flex"} overflow-x-auto gap-2 pb-4 `}>
        <a href={`/lugares/`} className={`category-btn ${indexView ? "hidden" : ""} btn btn-sm md:btn-lg btn-ghost rounded-xl bg-gradient-to-br from-indigo-400 to-blue-400 hover:from-indigo-300 hover:to-blue-300 border-none shadow-lg `}>
            <span className="">Todos</span>
        </a>
        {categorias.map((cat, index) => (
            <a key={cat + index} href={`/lugares/${cat.pagina}`} className={`transition-all ease-in-out duration-1000 ${indexView ? "h-32 lg:h-80 lg:text-3xl tracking-tighter" : ""} btn btn-sm md:btn-lg btn-ghost rounded-xl bg-gradient-to-br from-indigo-400 to-blue-400 hover:from-indigo-300 hover:to-blue-300 border-none shadow-lg `}>
                <span className="">{cat.nombre.slice(0, 1).toUpperCase() + cat.nombre.slice(1)}</span>
            </a>
        ))}
    </article>
    )
}
