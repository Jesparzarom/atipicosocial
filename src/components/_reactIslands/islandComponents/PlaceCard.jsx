import { MdPlace, MdLocationCity, MdCheck, MdWhatsapp, MdMail, MdWeb, MdPhone, MdOutlineWidgets } from "react-icons/md"
import { IoLogoInstagram } from "react-icons/io"
import { getWordFirstLetter } from "../../../assets/js/stringManipulators";
import { Image } from "astro:assets";

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
            path: "",
            alt: "",
        }
    }
) {

    const cardContactButtons = [
        { title: "LLamar", icon: <MdPhone class="text-xl" />, href: contacto.telefono ? `tel:${contacto.telefono}` : "" },
        { title: "WhatsApp", icon: <MdWhatsapp class="text-xl text-neutral" />, href: contacto.whatsapp ? `https://web.whatsapp.com/send/?phone=${contacto.whatsapp}` : "" },
        { title: "Web", icon: <MdWeb class="text-xl" />, href: contacto.web ? `${contacto.web}` : "" },
        { title: "Instagram", icon: <IoLogoInstagram class="text-xl" />, href: contacto.instagram ? `${contacto.instagram}` : "" },
        { title: "Mail", icon: <MdMail class="text-xl" />, href: contacto.email ? `mailto:${contacto.email}` : "" }
    ]

    const imagePath = cardImg.path ? ( 
        `/places/logos/${cardImg.path}`
    ) : (
        `https://placehold.co/500/91AFFF/DAE4FC/?font=oswald&text=${getWordFirstLetter(nombre)}&bg=#4B6FF1&fg=333333&tc=333333&/.png`
    );

    return (
        <article>
                <div class=" inset-x-0 top-0  h-2 bg-gradient-to-l from-teal-300 via-blue-500 to-violet-600 rounded-t-lg shadow-lg"></div>
            <section
                class="pb-20 bg-gradient-to-tr from-indigo-200 to-transparent  overflow-hidden rounded-b-lg  p-4 sm:p-6 lg:p-8 shadow"
            >
                <div class="sm:flex sm:justify-between sm:gap-4">

                    <div>

                        <h3 class="text-lg font-bold text-gray-900 sm:text-3xl">
                            {nombre}
                        </h3>

                        <div class="lg:flex lg:flex-row lg:gap-5">
                            <div class="flex gap-1 items-center">
                                <MdLocationCity class="text-indigo-500" /><p class="mt-1 text-sm font-medium text-gray-600">  {direccion}, {localidad} </p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <MdPlace class="text-indigo-500" /> <p class="mt-1 text-sm font-medium text-gray-600"> {ciudad}, {provincia} </p>
                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:block sm:shrink-0">
                        <img
                            alt={cardImg.alt}
                            src={imagePath}
                            width={500} height={500}
                            class="size-16 rounded-lg  shadow-sm"
                            loading="eager"
                        />
                    </div>
                </div>

                <div class="mt-5">
                    <p class="text-pretty text-lg text-gray-700 py-5 leading-none">
                        {descripcion}
                    </p>

                    <div class="my-3 flex justify-around">

                        <div class="">
                            <small class="mt-5 font-bold text-gray-600">Actividades</small>
                            <ul class="flex flex-wrap gap-1 mb-5">
                                    {actividades.map((actividad, index) =>
                                        <li class="text-sm flex flex-row  px-3 py-1 rounded-lg text-slate-700 tracking-tighter" key={"key" + `${index}`}> <MdOutlineWidgets class="text-xl text-indigo-500" />
                                            {actividad}
                                        </li>
                                    )}
                            </ul>
                        </div>

                        <div>
                            <small class="mt-10 font-bold text-gray-600">Características</small>
                            <ul class="flex flex-wrap gap-1">
                                {caracteristicas.map((caracteristica, index) =>
                                    <li class="text-sm flex flex-row  px-3 py-1 rounded-lg text-slate-700 tracking-tighter" key={"key" + `${index}`}> <MdCheck class="text-xl text-indigo-500" />
                                        {caracteristica}
                                    </li>
                                )}
                            </ul>
                        </div>

                    </div>

                </div>
                <div class="">
                    <div class="mt-6 flex flex-wrap  gap-y-2 gap-x-4 sm:gap-2">
                        <h4 class="w-full">Info</h4>

                        {
                            cardContactButtons.map((btn) => (
                            btn.href ? (
                            <div class="text-center" key={`key${btn.title}`}>
                                <a href={btn.href} target="_blank" class="text-sm btn btn-sm bg-teal-400 hover:bg-violet-300 font-medium shadow-lg border-none"> {btn.icon} {btn.title}</a>
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