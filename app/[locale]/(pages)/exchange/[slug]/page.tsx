import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale, getTranslations} from "next-intl/server";
import {Link} from "@/app/i18n/navigation";
import {routing} from "@/app/i18n/routing";
import {
    getAllExchangeSlugs,
    getExchangeConfig,
} from "@/config/exchange-directions";
import Calculator from "@/components/Rates/Calculator";
import {
    ArrowIcon,
    ClockIcon,
    ShieldIcon,
    TelegramIcon,
    WalletIcon,
} from "@/components/shared/Icons";
import {SectionHeading} from "@/components/shared/SectionHeading";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
    const slugs = getAllExchangeSlugs();
    const params: Array<{ locale: string; slug: string }> = [];

    for (const locale of routing.locales) {
        for (const slug of slugs) {
            params.push({locale, slug});
        }
    }

    return params;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {locale, slug} = await params;
    const config = getExchangeConfig(slug);

    if (!config) {
        return {};
    }

    const h1 = config.h1[locale] || config.h1.uk;
    const description = config.description[locale] || config.description.uk;
    const title = `${h1} | LAMA CASH`;

    const canonicalUrl = `https://lama-cash.com/${locale}/exchange/${slug}`

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                uk: `https://lama-cash.com/uk/exchange/${slug}`,
                ru: `https://lama-cash.com/ru/exchange/${slug}`,
                en: `https://lama-cash.com/en/exchange/${slug}`,
                "x-default": `https://lama-cash.com/uk/exchange/${slug}`,
            },
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "LAMA CASH",
            type: "website",
            images: [
                {
                    url: "/og/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og/og-image.png"],
        },
    };
}

const cityLinks = [
    {name: {uk: "Київ", ru: "Киев", en: "Kyiv"}, slug: "kyiv"},
    {name: {uk: "Львів", ru: "Львов", en: "Lviv"}, slug: "lviv"},
    {name: {uk: "Одеса", ru: "Одесса", en: "Odesa"}, slug: "odesa"},
    // {name: {uk: "Дніпро", ru: "Днепр", en: "Dnipro"}, slug: "dnipro"},
    // {name: {uk: "Харків", ru: "Харьков", en: "Kharkiv"}, slug: "kharkiv"},
];

export default async function ExchangePage({params}: Props) {
    const {locale, slug} = await params;
    const config = getExchangeConfig(slug);

    if (!config) {
        notFound();
    }

    setRequestLocale(locale);

    const t = await getTranslations({locale, namespace: "ExchangeTemplate"});

    const h1 = config.h1[locale] || config.h1.uk;
    const description = config.description[locale] || config.description.uk;
    const badgeText = config.badge[locale] || config.badge.uk;
    const faqs = config.faqs[locale] || config.faqs.uk || [];
    const article = config.seoArticle[locale] || config.seoArticle.uk;

    const currentPairLabel = `${config.giveCurrency} → ${config.receiveCurrency}`;
    const canonicalUrl = `https://lama-cash.com/${locale}/exchange/${slug}`;
    const homeUrl = `https://lama-cash.com/${locale}`

    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "LAMA CASH",
                        item: homeUrl,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: t("exchange"),
                        item: `${homeUrl}/rates`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: h1,
                        item: canonicalUrl,
                    },
                ],
            },
            {
                "@type": "Service",
                name: h1,
                serviceType: "Cryptocurrency Exchange",
                description,
                provider: {
                    "@type": "Organization",
                    name: "LAMA CASH",
                    url: "https://lama-cash.com",
                },
                areaServed: "UA",
                offers: {
                    "@type": "Offer",
                    priceCurrency: config.receiveCurrency,
                    price: String(config.defaultRate),
                },
            },
            {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
        ],
    };


    return (
        <div className="min-h-screen overflow-hidden bg-[#e6e6e6] text-[#171717]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdData)}}
            />

            <main>
                {/* Hero Section */}
                <div
                    className="relative overflow-hidden bg-[linear-gradient(10.25deg,#3c157f_-9.46%,#7134c2_40.87%,#171717_93.06%)] text-white">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_15%_20%,rgba(199,167,255,.35),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(65,180,242,.18),transparent_22%)]"/>

                    <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
                        <div className="mb-10 flex items-center gap-2 text-xs text-white/45">
                            <Link className="transition hover:text-white" href="/">
                                {t("home")}
                            </Link>
                            <span>/</span>
                            <Link className="transition hover:text-white" href="/rates">
                                {t("exchange")}
                            </Link>
                            <span>/</span>
                            <span className="text-white/75">{currentPairLabel}</span>
                        </div>

                        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
                            <div className="relative z-10">
                                <div
                                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
                                    <span className="size-2 rounded-full bg-[#5ff6ba] shadow-[0_0_16px_#5ff6ba]"/>
                                    {badgeText}
                                </div>
                                <h1 className="font-display max-w-3xl text-[2.6rem] font-black uppercase leading-[.98] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                    {h1}
                                </h1>
                                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                                    {description}
                                </p>
                                <div className="mt-8 flex flex-wrap gap-2.5">
                                    <span
                                        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur">
                                        <ClockIcon className="size-4 text-[#5ff6ba]"/>{" "}
                                        {t("speedLabel", {speed: config.speed})}
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur">
                                        <ShieldIcon className="size-4 text-[#b3e2ff]"/>{" "}
                                        {t("amlBadge")}
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur">
                                        <WalletIcon className="size-4 text-[#c7a7ff]"/>{" "}
                                        {t("noHiddenFeesBadge")}
                                    </span>
                                </div>
                            </div>

                            <div className="relative w-full lg:w-120 lg:shrink-0" id="calculator">
                                <div className="absolute -inset-8 rounded-full bg-[#b088f4]/20 blur-3xl"/>
                                <Calculator
                                    variant="card"
                                    initialGiveTicker={config.giveCurrency}
                                    initialGetTicker={config.receiveCurrency}
                                    initialAmount={String(config.minAmount || 1000)}
                                    sourcePage="exchange"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Conditions & Reserves Bar */}
                <section className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
                    <div
                        className="grid overflow-hidden rounded-b-[1.75rem] border-x border-b border-black/5 bg-white shadow-xl shadow-black/5 sm:grid-cols-3">
                        <div className="border-b border-black/5 p-6 sm:border-b-0 sm:border-r md:p-8">
                            <p className="text-xs text-black/45">{t("rateLabel")}</p>
                            <p className="mt-2 text-xl font-bold">
                                1.00 {config.giveCurrency} = {config.defaultRate}{" "}
                                {config.receiveCurrency}
                            </p>
                        </div>
                        <div className="border-b border-black/5 p-6 sm:border-b-0 sm:border-r md:p-8">
                            <p className="text-xs text-black/45">{t("reserveLabel")}</p>
                            <p className="mt-2 text-xl font-bold">{config.reserve}</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-xs text-black/45">{t("minAmountLabel")}</p>
                            <p className="mt-2 text-xl font-bold">
                                {config.minAmount} {config.giveCurrency}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section
                    className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
                    id="process"
                >
                    <SectionHeading
                        eyebrow={t("processEyebrow")}
                        title={t("processTitle")}
                    />
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {config.steps.map((step, index) => (
                            <article
                                className="group relative flex min-h-64 flex-col gap-4 rounded-[1.65rem] bg-[#f0f0f0] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                                key={step.number}
                            >
                                <div className="flex items-start justify-between">
                                    <span className="font-display text-4xl font-black text-[#7134c2]">
                                        {step.number}
                                    </span>
                                    {index < config.steps.length - 1 && (
                                        <ArrowIcon className="size-5 text-black/20"/>
                                    )}
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-display text-lg font-black uppercase">
                                        {step.title[locale] || step.title.uk}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-black/55">
                                        {step.text[locale] || step.text.uk}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Cities Linking Row */}
                <section
                    className="border-y border-black/5 bg-white/50 py-16 md:py-20"
                    id="cities"
                >
                    <div className="mx-auto max-w-7xl px-5 md:px-8">
                        <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7134c2]">
                                    {t("geoEyebrow")}
                                </p>
                                <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">
                                    {t("geoTitle")}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-2.5 lg:justify-end">
                                {cityLinks.map((item) => (
                                    <Link
                                        className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:border-[#7134c2] hover:text-[#7134c2]"
                                        href={`/city/${item.slug}`}
                                        key={item.slug}
                                    >
                                        {item.name[locale as keyof typeof item.name] ||
                                            item.name.uk}
                                    </Link>
                                ))}
                                <Link
                                    className="flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7134c2]"
                                    href="/rates"
                                >
                                    {t("allCities")} <ArrowIcon className="size-4"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
                    <SectionHeading
                        eyebrow={t("benefitsEyebrow")}
                        title={t("benefitsTitle")}
                    />
                    <div className="grid gap-4 md:grid-cols-3">
                        {config.benefits.map((benefit, index) => (
                            <article
                                className={`relative min-h-96 overflow-hidden rounded-[1.75rem] bg-linear-to-b ${benefit.color} p-7 md:p-8`}
                                key={index}
                            >
                <span
                    className="inline-flex rounded-full bg-white/55 px-3 py-2 text-[.68rem] font-bold uppercase tracking-wider backdrop-blur">
                  {benefit.kicker[locale] || benefit.kicker.uk}
                </span>
                                <span
                                    className="font-display absolute right-6 top-5 text-7xl font-black text-black/6">
                  0{index + 1}
                </span>
                                <div className="absolute bottom-8 left-7 right-7 md:left-8 md:right-8">
                                    <h3 className="font-display max-w-xs text-2xl font-black uppercase leading-tight">
                                        {benefit.title[locale] || benefit.title.uk}
                                    </h3>
                                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/60">
                                        {benefit.text[locale] || benefit.text.uk}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* SEO Article */}
                <section className="bg-white py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
                        <div>
                            <div className="sticky top-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7134c2]">
                                    {t("guideEyebrow")}
                                </p>
                                <h2 className="font-display mt-3 text-3xl font-black uppercase leading-[1.1] md:text-5xl">
                                    {h1}
                                </h2>
                                <div className="mt-8 rounded-3xl bg-[#171717] p-6 text-white">
                                    <ShieldIcon className="size-8 text-[#5ff6ba]"/>
                                    <p className="font-display mt-5 text-lg font-black uppercase">
                                        {t("safetyCardTitle")}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                                        {t("safetyCardText")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <article className="prose-lama">
                            {article && (
                                <>
                                    <p className="lead">{article.lead}</p>
                                    {article.sections.map((section, idx) => (
                                        <div key={idx}>
                                            <h3>{section.title}</h3>
                                            <p className="whitespace-pre-line">{section.content}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            <aside>
                                <strong>{t("asideImportant")}</strong> {t("asideText")}
                            </aside>

                            <div className="mt-8 overflow-hidden rounded-3xl border border-black/10">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>{t("tableParam")}</th>
                                        <th>{t("tableValue")}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{t("tableMinAmount")}</td>
                                        <td>
                                            {t("tableMinAmountValue", {
                                                amount: config.minAmount,
                                                currency: config.giveCurrency,
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("tableSpeed")}</td>
                                        <td>{config.speed}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("tableReserve")}</td>
                                        <td>{config.reserve}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("tableAml")}</td>
                                        <td>{t("tableAmlValue")}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Accessible FAQ Section */}
                <section
                    className="bg-[linear-gradient(180deg,#472672_0%,#171717_55%)] py-20 text-white md:py-28"
                    id="faq"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
                        <SectionHeading
                            eyebrow={t("faqEyebrow")}
                            title={t("faqTitle")}
                            light
                        />
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <details
                                    className="group rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md open:bg-white open:text-[#171717] md:p-6"
                                    key={faq.question}
                                    open={index === 0}
                                >
                                    <summary
                                        className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">
                                        <span>{faq.question}</span>
                                        <span
                                            className="grid size-9 shrink-0 place-items-center rounded-full border border-current/15 transition group-open:rotate-45">
                      +
                    </span>
                                    </summary>
                                    <p className="max-w-2xl pt-4 text-sm leading-relaxed opacity-60">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA to Telegram */}
                <section className="bg-[#171717] px-5 pb-16 md:px-8 md:pb-24">
                    <div
                        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#c7a7ff] px-6 py-12 md:px-12 md:py-16">
                        <div className="absolute -right-16 -top-28 size-80 rounded-full border-[3rem] border-white/20"/>
                        <div
                            className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3c157f]">
                                    {t("ctaEyebrow")}
                                </p>
                                <h2 className="font-display mt-3 max-w-3xl text-3xl font-black uppercase leading-[1.08] md:text-5xl">
                                    {t("ctaTitle")}
                                </h2>
                            </div>
                            <a
                                className="font-display flex shrink-0 items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:shadow-xl"
                                href={`https://t.me/lama_cash_manager`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {t("ctaButton")}{" "}
                                <TelegramIcon className="size-5 text-[#41b4f2]"/>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
