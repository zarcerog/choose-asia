export default function TourCard({tourTitle, tourDescription, coverPhoto, id, program}) {
    var bool = false;
    
    if (program === null) {
        program = "../contacte";
        bool = true;
    }
    
    return(
        <div className="flex flex-col shadow-lg p-4 py-6 max-w-xl md:min-w-[576px] min-w-sm border-2 hover:bg-[#cb69281a] font-oswald rounded-lg">
            <img src={coverPhoto} alt={tourTitle} className="object-cover w-auto h-44" />
            <h1 className="text-[#ff9900] font-oswald text-2xl font-normal my-1">{tourTitle}</h1>
            <div className="flex flex-row gap-2 content-center">
                <h6 className="font-lato font-normal text-base mt-1 mb-2">{tourDescription}</h6>
            </div>
            <a href={program} target={bool ? "" : "_blank"} rel="noreferrer" className="border-2 border-[#ff9900] text-[#ff9900] font-oswald font-extralight text-xl lg:text-2xl px-2 lg:px-6 py-1 lg:py-2 rounded-lg hover:bg-[#cb69281a] w-max">Programa</a>
        </div>
    );
}