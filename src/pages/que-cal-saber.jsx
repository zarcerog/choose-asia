import React from "react";
import Question from "../components/Question";
import { useTranslation } from "react-i18next";

const QueCalSaber = ({nav}) => {

    const { t } = useTranslation();

    return (
      <div name='que-cal-saber' className='w-full'>
        <div className='w-full h-[340px] bg-[url(assets/que-cal-saber.jpg)] bg-no-repeat bg-center bg-cover bg-[#CB6928]'></div>
        <section className='py-16 mx-auto w-full px-4 max-w-4xl'>
            <div className='w-full py-[14px] px-[8px]'>
              <span className='text-[#ff9900] text-3xl'>{t('queCalSaber.queCalSaber')}</span>
            </div>
            <div
              className={
                nav
                ? 'hidden'
                : ''
              }
            >
              <Question question={t('queCalSaber.firstQuestion')} answer={t('queCalSaber.firstAnswer')} />
              <Question question={t('queCalSaber.secondQuestion')} answer={t('queCalSaber.secondAnswer')} />
              <Question question={t('queCalSaber.thirdQuestion')} answer={t('queCalSaber.thirdAnswer')} />
              <Question question={t('queCalSaber.fourthQuestion')} answer={t('queCalSaber.fourthAnswer')} />
              <Question question={t('queCalSaber.fifthQuestion')} answer={t('queCalSaber.fifthAnswer')} />
              <Question question={t('queCalSaber.sixthQuestion')} answer={t('queCalSaber.sixthAnswer')} />
              <Question question={t('queCalSaber.seventhQuestion')} answer={t('queCalSaber.seventhAnswer')} />
            </div>
        </section>
      </div>
    );
  };
  
  export default QueCalSaber;