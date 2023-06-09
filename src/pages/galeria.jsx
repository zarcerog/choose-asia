import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { useTranslation } from 'react-i18next';
import Slider from '../components/Slider'

const Allotjament = ({nav}) => {
    const { t } = useTranslation();
    
    return (
      <div name='galeria' className='w-full'>
        <div>
            <div className='flex flex-col items-center justify-center gap-4 pt-20 max-w-[1400px] max-h-[780px] w-full'>
                <Slider />
            </div>
        </div>
        <div 
            className={
                nav
                ? 'hidden'
                : 'px-5 py-20 flex flex-col md:flex-row justify-center items-center md:items-start gap-5 md:gap-10'
            }
        >
            <div>
                <div className='w-full sm:w-96 lg:w-[512px]'>
                    <YouTubeEmbed embedId='Mi4FLOengzM' />
                </div>
                <div className='w-full sm:w-96 lg:w-[512px]'>
                    <p className='pt-2 font-light text-xl text-[#434343] leading-relaxed parr'>Españoles en el Mundo - Glòria Gay</p>
                    <p className='pt-3 font-light text-md text-[#434343] leading-relaxed parr'>
                        {t('galeria')}
                    </p>
                </div>
            </div>
            <div className='w-full sm:w-96 lg:w-[512px]'>
                <YouTubeEmbed embedId='1TFTqAyD2zI' />
            </div>
        </div>
    </div>

    
    );
  };
  
  export default Allotjament;
  