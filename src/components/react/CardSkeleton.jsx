export default function CardSkeleton() {
    return (
        <div className="flex w-full flex-col md:flex-row gap-4">
            <div className="flex items-center gap-4">
                <span className="loading loading-spinner text-violet-300  w-20  shrink-0 "></span>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                    
                </div>
            </div>
            <div className="skeleton h-32 w-full"></div>
        </div>
    )
}