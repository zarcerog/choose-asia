import React from "react";
import TourCard from "../components/TourCard.js";
import { useQuery, gql } from "@apollo/client";
import { useTranslation } from "react-i18next";

const QUERYcat = gql`
  {
    tours {
      id
      position
      tourTitle
      tourDescription
      coverPhoto {
        url
      }
      programcat {
        url
      }
    }
  }
`;

const QUERYesp = gql`
  {
    tours(locales: [es, ca]) {
      id
      position
      tourTitle
      tourDescription
      coverPhoto {
        url
      }
      programesp {
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

  const { error, data, loading } = useQuery(QUERY);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="relative inline-block h-8 w-8 rounded-full border-2 border-gray-600 border-t-2 transform animate-spin">
          <div className="absolute top-0 left-0 h-full w-full bg-gray-600 opacity-75"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const sortedTours = [...data.tours].sort((a, b) => a.position - b.position);

  return (
    <div name="tours" className="w-full">
      <div className="w-full h-[600px] md:h-[340px] bg-[url(assets/tours.jpg)] bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <div className="pt-2 md:pt-10 px-12 md:px-48">
          <span className="text-[#ff9900] text-4xl">{t('tours.tours')}</span>
          <p className="text-white text-xl leading-relaxed font-normal pt-5 par-tours">
            {t('tours.paragraph')}
          </p>
        </div>
      </div>
      <div className="grid gap-4 py-6 xl:grid-cols-1 place-items-center">
        {sortedTours.map((tour) => (
          <TourCard
            key={tour.id}
            tourTitle={tour.tourTitle}
            tourDescription={tour.tourDescription}
            coverPhoto={tour.coverPhoto.url}
            program={tour.programcat ? tour.programcat.url : tour.programesp ? tour.programesp.url : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
