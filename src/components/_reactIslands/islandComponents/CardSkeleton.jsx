export default function CardSkeleton() {
    return (
        <article class="flex w-full flex-col md:flex-row gap-4 h-96 items-center rounded-lg  border-2 p-4 sm:p-6 lg:p-8">
            <article class="flex items-center gap-4">
                <span class="loading loading-spinner text-violet-300  w-20  shrink-0 "></span>
                <div class="flex flex-col gap-4">
                    <div class="skeleton h-4 w-20"></div>
                    <div class="skeleton h-4 w-28"></div>
                </div>
            </article>
            <div class="skeleton h-32 w-full"></div>
        </article>
    )
}