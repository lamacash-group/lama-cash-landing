import { useTranslations } from 'next-intl';
import { ShieldCheck } from 'lucide-react';
import {Link} from "@/app/i18n/navigation";

export default function ManagerCheckBanner() {
    const t = useTranslations('ManagerCheckBanner');

    return (
        <div className="w-full max-w-5xl mx-auto px-20 max-sm:px-9 py-6 font-rubik">
            <div className="relative overflow-hidden rounded-3xl p-8 max-sm:py-3.5 max-sm:px-8 bg-linear-to-b from-[#F48A8C] via-[#FFB3B3] to-[#FFFFFF] shadow-lg">

                <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 max-sm:gap-2 text-center md:text-left">


                    <div className="flex flex-col gap-1.5 max-sm:gap-0 text-center">
                        <h2 className="text-2xl max-md:text-base font-medium text-[#171717] uppercase whitespace-pre-line">
                            {t('title')}
                        </h2>
                        <p className="text-xl max-md:text-sm text-[#171717] font-light">
                            {t('subtitle')}
                        </p>
                    </div>


                    <Link
                        href="/verify-manager"
                        className="inline-flex items-center max-sm:max-w-70 max-sm:w-full justify-center font-getvoip font-bold text-[13px] max-sm:text-[9px] tracking-[3%] uppercase gap-2.5 px-6 py-3.5 rounded-[10px] bg-[#171717] text-white shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                    >
                        <ShieldCheck className="w-6 h-6 text-white" />
                        <span>{t('buttonText')}</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}