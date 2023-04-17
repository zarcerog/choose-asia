import React from "react";
import TourCard from "./TourCard.js";
import { useQuery, gql } from "@apollo/client";
import { useTranslation } from "react-i18next";

const QUERYcat = gql`
    {
        tours {
            id,
            tourTitle,
            tourDescription,
            coverPhoto {
                url
            }
        }
    }
`;

const QUERYesp = gql`
    {
        tours(locales: [es, ca]) {
            id,
            tourTitle,
            tourDescription
            coverPhoto {
                url
            }
        }
    }   
`;



const Tours = () => {

    const { t, i18n } = useTranslation();

    const QUERY = i18n.language === 'es' ? QUERYesp : QUERYcat;

    // Important: refresh the page when the language changes so that the query is re-run
    React.useEffect(() => {
        i18n.on('languageChanged', () => {
            window.location.reload();
        });
    }, [i18n]);

    const {error, data, loading} = useQuery(QUERY);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="relative inline-block h-8 w-8 rounded-full border-2 border-gray-600 border-t-2 transform animate-spin">
                    <div className="absolute top-0 left-0 h-full w-full bg-gray-600 opacity-75"></div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>Something went wrong...</div>
        )
    }
    
    return (
        <div name='tours' className='w-full h-screen'>
            <div className='w-full h-[600px] md:h-[340px] bg-[url(assets/tours.jpg)] bg-no-repeat bg-center bg-cover flex justify-center items-center'>
                <div className='pt-2 md:pt-10 px-12 md:px-48'>
                    <span className='text-[#ff9900] text-4xl'>{t('tours.tours')}</span>
                    <p className='text-white text-xl leading-relaxed font-normal pt-5 par-tours'>
                        {t('tours.paragraph')}
                    </p>
                </div>
            </div>
            <div className="flex flex-col pt-2 md:pt-10 px-12 md:px-48 gap-10">
                {data.tours.map((tour) => {
                    return (
                        <TourCard key={tour.id} tourTitle={tour.tourTitle} tourDescription={tour.tourDescription} coverPhoto={tour.coverPhoto.url} />
                    )
                })};
            </div>
        </div>
    );
};

export default Tours;