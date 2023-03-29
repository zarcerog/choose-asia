export default function TourCard({tourTitle, tourDescription, coverPhoto, id}) {
    return(
        <div className="flex flex-row">
            <div className="flex flex-col lg:flex-row gap-6">
                <img src={coverPhoto} alt={tourTitle} className="h-32 md:h-52 w-max" />
                <div className="flex flex-col w-full">
                    <h1 className="text-[#ff9900] font-oswald font-extralight text-xl md:text-2xl lg:text-4xl my-1">{tourTitle}</h1>
                    <p className="font-lato font-normal text-base md:text-lg lg:text-xl mt-1 md:mt-3 lg:mt-6 mb-2 lg:mb-4">{tourDescription}</p>
                    <a href='../contacte' className="border-2 border-[#ff9900] text-[#ff9900] font-oswald font-extralight text-xl lg:text-2xl px-2 lg:px-6 py-1 lg:py-2 rounded-lg hover:bg-[#cb69281a] w-max">Programa</a>
                </div>
            </div>
        </div>
    );
}