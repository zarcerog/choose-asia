import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full pt-32 flex flex-col gap-6">
            <div className='mx-14 md:mx-32 lg:mx-64 flex flex-col gap-6 pb-16'>
                <h1 className='text-2xl'>{t('privacyPolicy.privacyPolicy')}</h1>
                <div className="border-t border-gray-300 my-4"></div>
                <p className='text-justify'>
                    {t('privacyPolicy.firstP')}
                </p>
                <p className='text-justify'>
                    {t('privacyPolicy.secondPText')}
                    <br />
                    {t('privacyPolicy.secondP')}
                </p>
                <p className='text-justify'>
                    {t('privacyPolicy.thirdPText')}
                    <br />
                    {t('privacyPolicy.thirdP')}
                </p>
                <p className='text-justify'>
                    {t('privacyPolicy.fourthPText')}
                    <br />
                    {t('privacyPolicy.fourthP')}
                </p>
                <p className='text-justify'>
                    {t('privacyPolicy.fifthPText')}
                    <br />
                    {t('privacyPolicy.fifthP')}
                </p>
                <p className='text-justify'>
                    {t('privacyPolicy.sixthPText')}
                    <br />
                    {t('privacyPolicy.sixthP')}
                </p>
                <p className='text-justify'>
                    {t('privacyPolicy.seventhPText')}
                    <br />
                    {t('privacyPolicy.seventhP')}
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;