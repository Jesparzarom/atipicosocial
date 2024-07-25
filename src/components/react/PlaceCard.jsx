import { MdPlace, MdLocationCity, MdCheck, MdWhatsapp, MdMail, MdWeb, MdPhone, MdOutlineWidgets } from "react-icons/md"
import { IoLogoInstagram } from "react-icons/io"

export default function PlaceCard(
    { 
        key="",
        tipo = "Categoría",
        nombre = "Nombre",
        direccion = "Calle #000",
        ciudad = "Ciudad",
        provincia = "Provincia",
        localidad = "",
        coordenadas = {
            lat: "-0",
            lon: "0",
        },
        descripcion = "Una descripción corta acerca del lugar",
        contacto = {
            "telefono": "234-567-8901",
            "whatsapp": "",
            "web": "",
            "instagram": "",
            "email": ""
        },
        actividades=["uno", "dos"],
        caracteristicas = ["iluminación suave", "otro", "otro mas"],
        cardImg = {
            path: "https://images.unsplash.com/photo-1581343191085-f2ded7b8d9d0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "imágen de lapices de colores, representando al inclusión",
        }
    }
) {

    const cardContactButtons = [
        { title: "LLamar", icon: <MdPhone className="text-xl" />, href: contacto.telefono ? `tel:${contacto.telefono}` : "" },
        { title: "WhatsApp", icon: <MdWhatsapp className="text-xl text-neutral" />, href: contacto.whatsapp ? `https://web.whatsapp.com/send/?phone=${contacto.whatsapp}` : "" },
        { title: "Web", icon: <MdWeb className="text-xl" />, href: contacto.web ? `${contacto.web}` : "" },
        { title: "Instagram", icon: <IoLogoInstagram className="text-xl" />, href: contacto.instagram ? `${contacto.instagram}` : "" },
        { title: "Mail", icon: <MdMail className="text-xl" />, href: contacto.email ? `mailto:${contacto.email}` : "" }
    ]

    return (
        <article>
                <div className=" inset-x-0 top-0  h-2 bg-gradient-to-l from-teal-300 via-blue-500 to-violet-600 rounded-t-lg shadow-lg"></div>
            <section
                className="pb-20 bg-gradient-to-tr from-indigo-200 to-transparent  overflow-hidden rounded-b-lg  p-4 sm:p-6 lg:p-8 shadow"
            >
                <div className="sm:flex sm:justify-between sm:gap-4">

                    <div>

                        <h3 className="text-lg font-bold text-gray-900 sm:text-3xl">
                            {nombre}
                        </h3>

                        <div className="lg:flex lg:flex-row lg:gap-5">
                            <div className="flex gap-1 items-center">
                                <MdLocationCity className="text-indigo-500" /><p className="mt-1 text-sm font-medium text-gray-600">  {direccion}, {localidad} </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MdPlace className="text-indigo-500" /> <p className="mt-1 text-sm font-medium text-gray-600"> {ciudad}, {provincia} </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt={cardImg.alt}
                            src={cardImg.path ? "/places/logos/" + cardImg.path: "https://placehold.co/400/teal/white/?text="+tipo}
                            className="size-16 rounded-lg  shadow-sm"
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-pretty text-lg text-gray-700 py-5 leading-none">
                        {descripcion}
                    </p>
                    <div className="my-3">
                    <small className="mt-5 font-bold text-gray-600">Actividades</small>
                        <ul className="flex flex-wrap gap-1 mb-5">
                            {actividades.map((actividad, index) =>
                                <li className="text-sm flex flex-row  px-3 py-1 rounded-lg text-slate-700 tracking-tighter" key={"key" + `${index}`}> <MdOutlineWidgets className="text-xl text-indigo-500" />
                                    {actividad}
                                </li>
                            )}
                        </ul>
                       <small className="mt-10 font-bold text-gray-600">Características</small>
                        <ul className="flex flex-wrap gap-1">
                            {caracteristicas.map((caracteristica, index) =>
                                <li className="text-sm flex flex-row  px-3 py-1 rounded-lg text-slate-700 tracking-tighter" key={"key" + `${index}`}> <MdCheck className="text-xl text-indigo-500" />
                                    {caracteristica}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="mt-6 flex flex-wrap  gap-y-2 gap-x-4 sm:gap-2">
                        <h4 className="w-full">Info</h4>

                        {
                            cardContactButtons.map((btn) => (
                            btn.href ? (
                            <div className="text-center" key={`key${btn.title}`}>
                                <a href={btn.href} target="_blank" className="text-sm btn btn-sm bg-teal-400 hover:bg-violet-300 font-medium shadow-lg border-none"> {btn.icon} {btn.title}</a>
                            </div>
                            ) : ("")
                            ))
                        }
                    </div>
                </div>
            </section>
        </article>
    )
}