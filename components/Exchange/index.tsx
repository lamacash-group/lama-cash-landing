import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/app/i18n/navigation";
import {exchangeDirections, ExchangeDirectionConfig} from "@/config/exchange-directions";

interface VisualConfig {
    cardBg: string;
    badgeBg: string;
}

const visualMap: Record<string, VisualConfig> = {
    "usdt-to-usd-cash": {
        cardBg: "from-[#C7A7FF]/35 to-[#E3E3E3]",
        badgeBg: "bg-[#5FF6BA]/30 text-[#171717]",
    },
    "usd-cash-to-usdt": {
        cardBg: "from-[#C7A7FF]/35 to-[#E3E3E3]",
        badgeBg: "bg-[#5FF6BA]/30 text-[#171717]",
    },
    "usdt-to-uah-card": {
        cardBg: "from-[#D0EDFF] to-[#E3E3E3]",
        badgeBg: "bg-[#B088F4]/25 text-[#171717]",
    },
    "uah-card-to-usdt": {
        cardBg: "from-[#D0EDFF] to-[#E3E3E3]",
        badgeBg: "bg-[#B088F4]/25 text-[#171717]",
    },
    "paypal-to-usdt": {
        cardBg: "from-[#B3E2FF]/55 to-[#E3E3E3]",
        badgeBg: "bg-[#B3E2FF] text-[#171717]",
    },
    "wise-to-usdt": {
        cardBg: "from-[#DBFFC8] to-[#E3E3E3]",
        badgeBg: "bg-[#B9FD94] text-[#171717]",
    },
    "payoneer-to-usdt": {
        cardBg: "from-[#FFE2D0] to-[#E3E3E3]",
        badgeBg: "bg-[#FFB3B3] text-[#171717]",
    },
    "usdt-to-revolut": {
        cardBg: "from-[#EBDFFF] to-[#E3E3E3]",
        badgeBg: "bg-[#C7A7FF]/35 text-[#171717]",
    },
};

const defaultVisual: VisualConfig = {
    cardBg: "from-[#E3E3E3] to-[#D5D5D5]",
    badgeBg: "bg-gray-200 text-[#171717]",
};

const cardBadges: Record<string, Record<string, string>> = {
    "usdt-to-usd-cash": {
        uk: "Готівка USD",
        ru: "Наличные USD",
        en: "Cash USD",
    },
    "usd-cash-to-usdt": {
        uk: "Офлайн прийом",
        ru: "Офлайн прием",
        en: "Cash In",
    },
    "usdt-to-uah-card": {
        uk: "Виплата на карту",
        ru: "Выплата на карту",
        en: "Card Payout",
    },
    "uah-card-to-usdt": {
        uk: "Оплата з карти",
        ru: "Оплата с карты",
        en: "Card Deposit",
    },
    "paypal-to-usdt": {
        uk: "PayPal Transfer",
        ru: "PayPal Transfer",
        en: "PayPal Transfer",
    },
    "wise-to-usdt": {
        uk: "Wise Transfer",
        ru: "Wise Transfer",
        en: "Wise Transfer",
    },
    "payoneer-to-usdt": {
        uk: "Payoneer вивід",
        ru: "Payoneer вывод",
        en: "Payoneer Out",
    },
    "usdt-to-revolut": {
        uk: "Revolut Pay",
        ru: "Revolut Pay",
        en: "Revolut Pay",
    },
};

function formatMinAmount(item: ExchangeDirectionConfig, locale: string): string {
    const isUah = item.giveCurrency === "UAH" || item.receiveCurrency === "UAH";
    const formattedNumber = new Intl.NumberFormat(locale === "en" ? "en-US" : "uk-UA").format(item.minAmount);

    if (isUah) {
        return `${formattedNumber} UAH`;
    }

    return `$${formattedNumber}`;
}

export function ExchangeDirections() {
    const locale = useLocale();
    const t = useTranslations("ExchangeDirections");

    const directionsList = Object.values(exchangeDirections);

    return (
        <div
            aria-labelledby="exchange-directions-heading"
            className="w-full bg-[#E6E6E6] py-16 px-4 md:px-8"
        >
            <div className="max-w-[1320px] mx-auto">
                {/* Заголовок + Посилання на повний список тарифів */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                    <div>
                      <span
                          className="inline-block px-3 py-1 bg-black/5 text-[#7134C2] rounded-full text-xs font-semibold tracking-wide uppercase mb-2 font-rubik">
                        {t("eyebrow")}
                      </span>
                        <h2
                            id="exchange-directions-heading"
                            className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#171717] font-georgia"
                        >
                            {t("title")}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1 font-rubik">
                            {t("subtitle")}
                        </p>
                    </div>

                    <Link
                        href="/rates"
                        title={t("allRatesAria")}
                        aria-label={t("allRatesAria")}
                        className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] hover:bg-[#3C157F] text-white text-xs font-bold uppercase tracking-wider transition-colors font-getvoip shadow-md group"
                    >
                        <span>{t("allRatesCta")}</span>
                        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                              aria-hidden="true">
                          ↗
                        </span>
                    </Link>
                </header>

                {/* 4x2 Грід карток */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none p-0 m-0">
                    {directionsList.map((item: ExchangeDirectionConfig) => {
                        const visual = visualMap[item.slug] || defaultVisual;
                        const badgeText =
                            cardBadges[item.slug]?.[locale] ||
                            cardBadges[item.slug]?.["uk"] ||
                            item.badge[locale] ||
                            item.badge["uk"];
                        const descText = item.description[locale] || item.description["uk"];
                        const pairTitle = `${item.giveCurrency} → ${item.receiveCurrency}`;
                        const displayMinAmount = formatMinAmount(item, locale);

                        return (
                            <li key={item.slug} className="flex">
                                <Link
                                    href={`/exchange/${item.slug}`}
                                    title={t("exchangeAria", {give: item.giveCurrency, receive: item.receiveCurrency})}
                                    aria-label={t("exchangeAria", {
                                        give: item.giveCurrency,
                                        receive: item.receiveCurrency
                                    })}
                                    className={`group relative overflow-hidden rounded-3xl p-5 md:p-6 bg-linear-to-b ${visual.cardBg} border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-full`}
                                >
                                    <article className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="mb-3">
                                              <span
                                                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${visual.badgeBg} font-rubik`}
                                              >
                                                {badgeText}
                                              </span>
                                            </div>

                                            <h3 className="text-lg md:text-xl font-bold text-[#171717] uppercase tracking-tight font-getvoip group-hover:text-[#3C157F] transition-colors">
                                                {pairTitle}
                                            </h3>

                                            <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 font-rubik">
                                                {descText}
                                            </p>

                                            <div
                                                className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-gray-500 font-rubik">
                                              <span>
                                                {t("minAmountLabel")} <strong className="text-gray-800">
                                                  {displayMinAmount}
                                                </strong>
                                              </span>
                                                <span>
                                                  {t("speedLabel")} <strong className="text-gray-800">{item.speed}</strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between pt-2">
                                          <span
                                              className="text-xs font-bold uppercase tracking-wider text-[#171717] group-hover:text-[#3C157F] font-georgia">
                                            {t("exchangeCta")}
                                          </span>
                                            <div
                                                className="w-8 h-8 rounded-full bg-[#171717] group-hover:bg-[#41B4F2] text-white flex items-center justify-center text-xs transition-colors shadow-sm"
                                                aria-hidden="true"
                                            >
                                                ↗
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
