import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const year = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="flex flex-col gap-6 w-screen justify-center items-center h-36 sm:h-24 border-t border-gray-200 shadow-md">
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                <a href="./privacy-policy" rel="noreferrer">
                    {t("privacyPolicy.privacyPolicy")}
                </a>
                <a href="./terms-of-use" rel="noreferrer">
                    {t("termsOfUse.termsOfUse")}
                </a>
            </div>
            <div className="mb-4">
                <p>Copyright © {year} ChooseAsia</p>
            </div>
        </footer>
    );
}

export default Footer;