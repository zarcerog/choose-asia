import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfUse = () => {
    const { t } = useTranslation();
    
    return (
        <div className="w-full pt-32 flex flex-col gap-6">
            <div className='mx-14 md:mx-32 lg:mx-64 flex flex-col gap-6 pb-16'>
                <h1 className='text-2xl'>{t("termsOfUse.termsOfUse")}</h1>
                <div className="border-t border-gray-300 my-4"></div>
                <p className='text-justify'>
                    {t('termsOfUse.firstP')}
                </p>
                <ul className='list-decimal flex gap-4 flex-col'>
                    <li>
                        <h2 className='font-bold'>{t('termsOfUse.secondPText')}</h2>
                        <p className='text-justify'>
                            {t('termsOfUse.secondP')}
                        </p>
                    </li>
                    <li className='flex flex-col gap-4'>
                        <h2 className='font-bold'>{t('termsOfUse.thirdPText')}</h2>
                        <p className='text-justify'>
                            {t('termsOfUse.thirdP')}
                        </p>
                        <p className='text-justify'>
                         {t('termsOfUse.thirdPT')}
                        </p>
                        <ul className='list-disc'>
                            <li>{t('termsOfUse.thirdP1')}</li>
                            <li>{t('termsOfUse.thirdP2')}</li>
                            <li>{t('termsOfUse.thirdP3')}</li>
                        </ul>
                        <ul className='list-decimal'>
                            <li>
                                <h2 className='font-semibold'>{t('termsOfUse.fourthPText')}</h2>
                                <p className='text-justify'>
                                    {t('termsOfUse.fourthP')}
                                </p>
                            </li>
                            <li>
                                <h2 className='font-semibold'>{t('termsOfUse.fifthPText')}</h2>
                                <p className='text-justify'>
                                    {t('termsOfUse.fifthP')}
                                </p>
                            </li>
                            <li>
                                <h2 className='font-semibold'>{t('termsOfUse.sixthPText')}</h2>
                                <p className='text-justify'>
                                    {t('termsOfUse.sixthP')}
                                </p>
                            </li>
                            <li>
                                <h2 className='font-semibold'>{t('termsOfUse.seventhPText')}</h2>
                                <p className='text-justify'>
                                    {t('termsOfUse.seventhP')}
                                </p>
                            </li>
                            <li>
                                <h2 className='font-semibold'>{t('termsOfUse.eighthPText')}</h2>
                                <p className='text-justify'>
                                    {t('termsOfUse.eigthP')}
                                </p>
                            </li>
                            <li>
                                <h2 className='font-semibold'>{t('termsOfUse.ninthPText')}</h2>
                                <p className='text-justify'>
                                    {t('termsOfUse.ninthP')}
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TermsOfUse;