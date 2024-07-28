export default function CardNotFound(props) {
    return (
        <div class="flex w-full flex-col md:flex-row gap-4 h-96 items-center rounded-lg  border-2 p-4 sm:p-6 lg:p-8 justify-center">
            <div class="flex flex-col justify-center text-3xl items-center">
               <p><span class="font-bold text-indigo-400 ">Sin resultados...</span></p>
               <small class="text-sm max-w-sm text-slate-600 leading-none tracking-tighter">
                Pronto agregaremos más lugares. ¿te gustaría contribuir? mandanos un mail con el luguar a 
                <a href="mailto:hola@lugares.club" class="link"> sugerencias@atipicosocial.com</a>
                </small>
            </div>
        </div>
    )
}