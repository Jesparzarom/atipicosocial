
import { MdClose } from "react-icons/md"
import React, {useEffect} from "react"

export default function SIdeMenuFilters(props) {

  useEffect(() =>{
    const closeBtn = document.getElementById("close-filters")
    closeBtn.addEventListener("click", () => {
      props.setToggleMenu(false)
    })
  }, [])


    return (
        <nav id="side-filter-menu" className={`side-filter-menu px-5   bg-gradient-to-t from-white to-base-100   top-0 w-96 right-0 fixed h-screen py-40 z-[89] rounded-s-lg shadow-lg`} data-aos="fade-up" data-aos-duration={250}>
            <button className="relative -top-12 left-0 text-xl btn btn-ghost btn-sm" id="close-filters" >
                <MdClose className="" /> <span className="text-base">Cerrar</span>
            </button>
            <h3 className="text-center text-xl">Filtrar lugares</h3>
            
            <ul className="menu menu-vertical">
                <li>
                <select className="select select-xs select-bordered max-w-sm" id="tipolugar" defaultValue={"Tipo"}>
                    <option disabled value="tipo" className='font-bold text-sm'>Tipo</option>
                    <option value="todo">Todo</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="recreativos">Recreativos</option>
                    <option value="servicios">Servicios</option>
                    <option value="otros">Otros</option>
                </select>
                </li>
                <li>
                    <select className="select select-xs select-bordered max-w-sm" id="ciudadlugar" defaultValue={"ciudad"}>
                        <option disabled className="font-bold text-sm" value="ciudad">Ciudad</option>
                        <option value="todo">Todo</option>
                        <option value="lanús">Lanús</option>
                        <option value="lomas de zamora">Lomas de Zamora</option>
                    </select>
                </li>
                <li>
                <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-lg">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
                </li>
            </ul>
        </nav>
    )
}



