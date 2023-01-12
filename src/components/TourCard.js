export default function TourCard({tourTitle, tourDescription, coverPhoto, id}) {
    return(
        <div className="flex flex-row h-64">
            <div className="flex gap-6">
                <img src={coverPhoto} alt={tourTitle} />
                <div className="flex flex-col w-full">
                    <h1 className="text-[#ff9900] font-oswald font-extralight text-4xl my-6">{tourTitle}</h1>
                    <p className="font-lato font-normal text-xl mt-6 mb-4">{tourDescription}</p>
                    <button className="border-2 border-[#ff9900] text-[#ff9900] font-oswald font-extralight text-2xl px-6 py-2 rounded-lg">Programa</button>
                </div>
            </div>
        </div>
    );
}