import React from 'react';
import OunChock from '../assets/oun-chock.jpg';
import Gloria from '../assets/gloria.jpg';
import { useTranslation } from 'react-i18next';

const QuiSom = () => {

  const { t } = useTranslation();

  return (
    <div name='qui-som' className='w-full'>
      <div className='w-full h-[346px] md:h-[520px] bg-[url(assets/qui-som.jpg)] bg-no-repeat bg-center bg-cover'></div>
      <div>
        <section className='flex lg:px-[160px] px-7 py-2 lg:py-[1.5rem]'>
          <div className='lg:px-[1.25%] px-2'>
            <div className='w-full py-[14px] px-[8px]'>
              <span className='text-[#ff9900] text-3xl'>{t('quiSom.quiSom')}</span>
            </div>
            <div className='py-[14px] px-[8px]'>
              <p className='font-light text-lg text-[#434343] leading-relaxed'>
                {t('quiSom.text')}
              </p>
            </div>
          </div>
        </section>
        <section className='flex lg:px-[160px] px-7 lg:py-[1.5rem] py-2 w-screen'>
          <div className='lg:px-[1.25%] px-2 w-full'>
            <div className='flex flex-col items-center md:items-start md:flex-row md:justify-evenly lg:gap-7 gap-2 w-full'>
              <div className='flex flex-col gap-4 max-w-full lg:max-w-[450px] h-max items-center'>
                <div className='lg:h-72 max-w-sm'>
                  <img src={OunChock} alt='Oun Chok' />
                </div>
                <span className='name font-extralight text-lg text-[#ff9900]'>Oun Chok</span>
                <p className='name font-light text-sm parr'>
                  {t('quiSom.chok')}
                </p>
              </div>
              <div className='flex flex-col gap-4 max-w-full lg:max-w-[450px] h-max items-center'>
                <div className='lg:h-72 max-w-sm'>
                  <img src={Gloria} alt='Gloria' />
                </div>
                <span className='name font-extralight text-lg text-[#ff9900]'>{t('quiSom.nomGloria')}</span>
                <p className='name font-light text-sm parr'>
                  {t('quiSom.gloria')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuiSom;
