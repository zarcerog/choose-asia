import React from 'react';
import imageOne from '../assets/1.JPG';
import imageTwo from '../assets/2.JPG';
import imageThree from '../assets/3.jpeg';
import { useTranslation } from 'react-i18next';

const QueFem = () => {

  const { t } = useTranslation();

  return (
    <div name='que-fem' className='w-full'>
      <div className='w-full h-[346px] md:h-[520px] bg-[url(assets/que-fem.jpg)] bg-no-repeat bg-center bg-cover bg-[#CB6928]'></div>
      <section className='flex lg:px-[160px] px-7 py-2 lg:py-[1.5rem]'>
          <div className='px-[1.25%]'>
            <div className='w-full py-[14px] px-[8px]'>
              <span className='text-[#ff9900] text-3xl'>{t('queFem.queFem')}</span>
            </div>
            <div className='py-[14px] px-[8px]'>
              <p className='font-light text-lg text-[#434343] leading-relaxed pb-4 parr'>
                {t('queFem.first')}
              </p>
              <p className='font-light text-lg text-[#434343] leading-relaxed pb-4 parr'>
                {t('queFem.second')}
              </p>
              <p className='font-light text-lg text-[#434343] leading-relaxed pb-4 parr'>
                {t('queFem.third')}
              </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-4 xl:h-[244px] justify-between'>
              <img src={imageOne} alt="One" />
              <img src={imageTwo} alt="Two" />
              <img src={imageThree} alt="Three" />
            </div>
          </div>
        </section>
    </div>
  );
};

export default QueFem;
