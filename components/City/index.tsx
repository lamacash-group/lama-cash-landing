import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/app/i18n/navigation";
import {citiesConfig, CityConfig} from "@/config/cities";


export function CityLocations() {
    const locale = useLocale();
    const t = useTranslations("CityLocations");
    const citiesList = Object.values(citiesConfig);


    return (
        <div
            aria-labelledby="cities-heading"
            className="w-full bg-[#171717] py-16 px-4 md:px-8 border-b border-white/5"
        >
            <div className="max-w-[1320px] mx-auto">
                {/* Заголовок */}
                <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                      <span
                          className="inline-block px-3 py-1 bg-white/10 text-[#C7A7FF] rounded-full text-xs font-medium tracking-wide uppercase mb-3 font-rubik">
                        {t("eyebrow")}
                      </span>
                        <h2
                            id="cities-heading"
                            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white font-getvoip"
                        >
                            {t("title")}
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 max-w-md font-rubik">
                        {t("subtitle")}
                    </p>
                </header>

                {/* Сітка міст */}
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
                    {citiesList.map((city: CityConfig) => {
                        const cityName = city.cityName[locale] || city.cityName["uk"];
                        const pinFact = city.quickFacts.find((f) => f.iconName === "pin");
                        const carFact = city.quickFacts.find((f) => f.iconName === "car");
                        const districtText = pinFact?.label[locale] || city.districts[0];
                        const deliveryText =
                            carFact?.label[locale] && carFact?.note[locale]
                                ? `${carFact.label[locale]} (${carFact.note[locale]})`
                                : t("courierDelivery");

                        return (
                            <li key={city.slug} className="flex">
                                <article
                                    className="group relative bg-[#212124] hover:bg-[#28282D] transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-white/10 hover:border-[#7134C2]/50 shadow-xl w-full">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <span
                                                className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#3C157F]/60 text-[#C7A7FF] border border-[#7134C2]/40 font-getvoip">
                                                {districtText}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-[#5FF6BA] animate-pulse"/>
                                                <span
                                                    className="text-xs text-[#5FF6BA] font-medium font-rubik">
                                                    {t("statusActive")}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-4 font-getvoip">
                                            {cityName}
                                        </h3>

                                        <div
                                            className="space-y-3 mt-4 text-sm text-gray-300 font-rubik">
                                            <div className="flex items-start gap-2.5">
                                                <span className="text-base select-none" aria-hidden="true">📍</span>
                                                <span className="text-gray-300">{districtText}</span>
                                            </div>
                                            <div className="flex items-start gap-2.5">
                                                <span className="text-base select-none" aria-hidden="true">⏱️</span>
                                                <div className="text-xs text-gray-300 space-y-0.5">
                                                    <div>
                                                        <span
                                                            className="text-gray-400">{t("weekdays")}:</span> {city.workingHours.weekdays}
                                                    </div>
                                                    <div>
                                                        <span
                                                            className="text-gray-400">{t("weekends")}:</span> {city.workingHours.weekends}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2.5">
                                                <span className="text-base select-none" aria-hidden="true">🚗</span>
                                                <span className="text-xs text-gray-400">{deliveryText}</span>
                                            </div>
                                        </div>

                                        {city.popularPairs && city.popularPairs.length > 0 && (
                                            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                                                {city.popularPairs.slice(0, 3).map((pair, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-gray-300 uppercase border border-white/5"
                                                    >
                                                        {pair.from} → {pair.to}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <Link
                                            href={`/city/${city.slug}`}
                                            title={t("ctaAria", {city: cityName})}
                                            aria-label={t("ctaAria", {city: cityName})}
                                            className="w-full flex items-center justify-between py-3 px-5 rounded-[15px] bg-[#171717] hover:bg-[#7134C2] text-white text-sm font-semibold transition-colors duration-200 uppercase tracking-wide font-getvoip"
                                        >
                                            <span>{t("ctaButton")}</span>
                                            <span className="text-lg group-hover:translate-x-1 transition-transform"
                                                  aria-hidden="true">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
