import React from 'react';
import { useTranslation } from 'react-i18next';

const Allotjament = () => {

    const { t } = useTranslation();

    return (
      <div name='allotjament' className='w-full h-screen'>
        <div className='w-full h-[440px] md:h-[340px] bg-[url(assets/allotjament.jpg)] bg-no-repeat bg-center bg-cover flex justify-center items-center'>
        <div className='pt-2 md:pt-10 px-12 md:px-48'>
                    <span className='text-[#ff9900] text-4xl'>{t('allotjament.allotjament')}</span>
                    <p className='text-white text-xl leading-relaxed font-normal pt-5'>
                        {t('allotjament.paragraph')}
                    </p>
                </div>
        </div>
        <section className='flex px-[20px] md:px-[160px] py-[1.5rem]'>
            <div className='px-[1.25%]'>
              <div className='py-[14px] px-[8px]'>
                <ul className='list-disc'>
                    <li className='mb-2'>SIEM REAP:  <a href='https://www.sokkhak-boutiqueresort.com/' className='underline text-gray-500'>Sokkhak Boutique Resort</a> / 
                                    <a href='https://www.thecyclodangkor.com/' className='underline text-gray-500'>The Cyclo d'Angkor Boutique Hotel</a> / 
                                    <a href='https://www.viroth-hotel.com/' className='underline text-gray-500'>Viroth's Hotel</a> / 
                                    <a href='https://www.boreiangkor.com/ ' className='underline text-gray-500'>Borei Angkor</a> / 
                                    <a href='https://taraangkorhotel.com/' className='underline text-gray-500'>Tara Angkor</a> / 
                                    <a href='https://rambutansiemreap.com/' className='underline text-gray-500'>Rambutan Siem Reap</a> / 
                                    <a href='https://www.sakmutboutiquehotel.com/ ' className='underline text-gray-500'>Sakmut Boutique Hotel</a> / 
                                    <a href='https://www.avanihotels.com/en/angkor-siem-reap?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=FCCAngkor&utm_content=Home&utm_campaign=Google_GMB' className='underline text-gray-500'>FCC Angkor</a> / 
                                    <a href='https://www.maison557.com/' className='underline text-gray-500'>Maison 557</a>
                    </li>
                    <li className='mb-2'>PHNOM PENH: <a href='https://palacegateapp.com/' className='underline text-gray-500'>Palace Gate Hotel & Resort</a> / 
                                    <a href='https://palacegateapp.com/' className='underline text-gray-500'>Baitong Hotel & Resort</a> / 
                                    <a href='https://www.penhhouse.asia/ ' className='underline text-gray-500'>Penh House</a>
                    </li>
                    <li className='mb-2'>KOMPONG THOM: <a href='https://sites.google.com/view/sambor-village-hotel/' className='underline text-gray-500'>Sambor Village</a></li>
                    <li className='mb-2'>KROCHE: <a href='https://www.lerelaisdechhlong.com/' className='underline text-gray-500'>Le Relais de Chhlong</a></li>
                    <li className='mb-2'>KAMPONG CHAM: <a href='http://lbnasian.com/' className='underline text-gray-500'>LBN Asian Hotel</a></li>
                    <li className='mb-2'>RATANAKIRI: <a href='https://ratanakiri-lodge.com/?lng=en' className='underline text-gray-500'>Terres Rouges</a></li>
                    <li className='mb-2'>KOH KER: <a href='https://www.kohkertemplesgarden.com/' className='underline text-gray-500'>Koh Ker Hotel</a></li>
                </ul>
              </div>
            </div>
          </section>
      </div>
    );
  };
  
  export default Allotjament;
  