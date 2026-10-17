import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale, getTranslations} from "next-intl/server";
import {Link} from "@/app/i18n/navigation";
import {routing} from "@/app/i18n/routing";
import {getAllCitySlugs, getCityConfig} from "@/config/cities";
import Calculator from "@/components/Rates/Calculator";
import {
    ArrowIcon,
    BuildingIcon,
    CarIcon,
    CheckIcon,
    ClockIcon,
    PinIcon,
    ShieldIcon,
    TelegramIcon,
} from "@/components/shared/Icons";
import {SectionHeading} from "@/components/shared/SectionHeading";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
    const slugs = getAllCitySlugs();
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
    const config = getCityConfig(slug);

    if (!config) {
        return {};
    }

    const h1 = config.h1[locale] || config.h1.uk;
    const leadText = config.leadText[locale] || config.leadText.uk;
    const title = `${h1} | LAMA CASH`;

    const canonicalUrl =`https://lama-cash.com/${locale}/city/${slug}`;

    return {
        title,
        description: leadText,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                uk: `https://lama-cash.com/uk/city/${slug}`,
                ru: `https://lama-cash.com/ru/city/${slug}`,
                en: `https://lama-cash.com/en/city/${slug}`,
                "x-default": `https://lama-cash.com/uk/city/${slug}`,
            },
        },
        openGraph: {
            title,
            description: leadText,
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
            description: leadText,
            images: ["/og/og-image.png"],
        },
    };
}

const getFactIcon = (name: string) => {
    switch (name) {
        case "pin":
            return PinIcon;
        case "car":
            return CarIcon;
        case "clock":
            return ClockIcon;
        case "building":
            return BuildingIcon;
        case "shield":
        default:
            return ShieldIcon;
    }
};

export default async function CityPage({params}: Props) {
    const {locale, slug} = await params;
    const config = getCityConfig(slug);

    if (!config) {
        notFound();
    }

    setRequestLocale(locale);

    const t = await getTranslations({locale, namespace: "CityTemplate"});

    const cityName = config.cityName[locale] || config.cityName.uk;
    const h1 = config.h1[locale] || config.h1.uk;
    const leadText = config.leadText[locale] || config.leadText.uk;
    const faqs = config.faqs[locale] || config.faqs.uk || [];
    const article = config.seoArticle[locale] || config.seoArticle.uk;

    const canonicalUrl = `https://lama-cash.com/${locale}/city/${slug}`;
    const homeUrl = `https://lama-cash.com/${locale}`;

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
                        name: t("cities"),
                        item: `${homeUrl}#coverage`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: cityName,
                        item: canonicalUrl,
                    },
                ],
            },
            {
                "@type": ["FinancialService", "LocalBusiness"],
                name: `LAMA CASH ${cityName}`,
                description: leadText,
                url: canonicalUrl,
                telephone: "+38-093-599-63-85",
                priceRange: "$$",
                areaServed: {
                    "@type": "City",
                    name: cityName,
                },
                openingHoursSpecification: [
                    {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: config.workingHours.weekdays.split(" — ")[0] || "09:00",
                        closes: config.workingHours.weekdays.split(" — ")[1] || "20:00",
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Saturday", "Sunday"],
                        opens: config.workingHours.weekends.split(" — ")[0] || "10:00",
                        closes: config.workingHours.weekends.split(" — ")[1] || "19:00",
                    },
                ],
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

    const safetyStandards = [
        {
            number: "01",
            title: t("safety01Title"),
            text: t("safety01Text"),
            accent: "bg-[#c7a7ff]",
        },
        {
            number: "02",
            title: t("safety02Title"),
            text: t("safety02Text"),
            accent: "bg-[#b3e2ff]",
        },
        {
            number: "03",
            title: t("safety03Title"),
            text: t("safety03Text"),
            accent: "bg-[#b9fd94]",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-[#e6e6e6] text-[#171717]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdData)}}
            />

            <main>
                {/* Local Hero */}
                <div
                    className="relative overflow-hidden bg-[linear-gradient(10.25deg,#3c157f_-9.46%,#7134c2_40.87%,#171717_93.06%)] text-white">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_12%_22%,rgba(199,167,255,.32),transparent_25%),radial-gradient(circle_at_88%_75%,rgba(65,180,242,.14),transparent_24%)]"/>

                    <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-7 md:px-8 md:pb-24 md:pt-10">
                        <div className="mb-9 flex items-center gap-2 text-xs text-white/45">
                            <Link className="transition hover:text-white" href="/">
                                {t("home")}
                            </Link>
                            <span>/</span>
                            <a className="transition hover:text-white" href="#coverage">
                                {t("cities")}
                            </a>
                            <span>/</span>
                            <span className="text-white/80">{cityName}</span>
                        </div>

                        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
                            <div>
                                <div
                                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
                                    <span className="size-2 rounded-full bg-[#5ff6ba] shadow-[0_0_16px_#5ff6ba]"/>
                                    {t("heroStatus", {
                                        city: cityName,
                                        closingTime:
                                            config.workingHours.weekdays.split(" — ")[1] || "20:00",
                                    })}
                                </div>
                                <h1 className="font-display max-w-4xl text-[2.55rem] font-black uppercase leading-[.98] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                    {h1}
                                </h1>
                                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
                                    {leadText}
                                </p>

                                <div className="mt-8 grid max-w-2xl gap-2.5 sm:grid-cols-2">
                                    {config.quickFacts.map((fact) => {
                                        const FactIcon = getFactIcon(fact.iconName);
                                        return (
                                            <div
                                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-3.5 backdrop-blur-md"
                                                key={fact.label[locale] || fact.label.uk}
                                            >
                        <span
                            className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#c7a7ff]">
                          <FactIcon className="size-5"/>
                        </span>
                                                <span>
                          <span className="block text-sm font-semibold">
                            {fact.label[locale] || fact.label.uk}
                          </span>
                          <span className="mt-0.5 block text-xs text-white/40">
                            {fact.note[locale] || fact.note.uk}
                          </span>
                        </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="relative w-full lg:w-120 lg:shrink-0" id="booking">
                                <div className="absolute -inset-10 rounded-full bg-[#b088f4]/20 blur-3xl"/>
                                <Calculator
                                    variant="card"
                                    initialGiveTicker="USDT"
                                    initialGetTicker="USD"
                                    initialCityName={cityName}
                                    initialCitySlug={slug}
                                    initialAmount="5000"
                                    sourcePage="city"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Formats Grid */}
                <section
                    className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
                    id="formats"
                >
                    <SectionHeading
                        eyebrow={t("formatsEyebrow")}
                        title={t("formatsTitle", {city: cityName})}
                    />
                    <div className="grid gap-4 lg:grid-cols-2">
                        <article
                            className="group relative min-h-120 overflow-hidden rounded-[1.75rem] bg-linear-to-b from-[#c7a7ff] to-[#e3e3e3] p-7 md:p-9">
                            <div className="flex items-start justify-between">
                                <span
                                    className="grid size-14 place-items-center rounded-2xl bg-white/55 text-[#3c157f] backdrop-blur-md">
                                    <BuildingIcon className="size-7"/>
                                </span>
                                <span
                                    className="rounded-full bg-white/50 px-4 py-2 text-[.68rem] font-bold uppercase tracking-wider backdrop-blur">
                                    {t("format01Badge")}
                                </span>
                            </div>
                            <div className="absolute bottom-8 left-7 right-7 md:bottom-9 md:left-9 md:right-9">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7134c2]">
                                    {t("format01Label")}
                                </p>
                                <h3 className="font-display text-3xl font-black uppercase leading-tight">
                                    {t("format01Title")}
                                </h3>
                                <div className="mt-6 grid gap-3 text-sm text-black/65 sm:grid-cols-2">
                                    {[
                                        t("format01Feature1"),
                                        t("format01Feature2"),
                                        t("format01Feature3"),
                                        t("format01Feature4"),
                                    ].map((item) => (
                                        <span className="flex items-center gap-2" key={item}>
                      <span className="grid size-5 place-items-center rounded-full bg-white/70 text-[#3c157f]">
                        <CheckIcon className="size-3"/>
                      </span>
                                            {item}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </article>

                        <article
                            className="group relative min-h-120 overflow-hidden rounded-[1.75rem] bg-linear-to-b from-[#b3e2ff] to-[#e3e3e3] p-7 md:p-9">
                            <div className="flex items-start justify-between">
                <span
                    className="grid size-14 place-items-center rounded-2xl bg-white/55 text-[#176b9a] backdrop-blur-md">
                  <CarIcon className="size-7"/>
                </span>
                                <span
                                    className="rounded-full bg-[#171717] px-4 py-2 text-[.68rem] font-bold uppercase tracking-wider text-white">
                  {t("format02Badge")}
                </span>
                            </div>
                            <div className="absolute bottom-8 left-7 right-7 md:bottom-9 md:left-9 md:right-9">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#176b9a]">
                                    {t("format02Label")}
                                </p>
                                <h3 className="font-display text-3xl font-black uppercase leading-tight">
                                    {t("format02Title")}
                                </h3>
                                <div className="mt-6 grid gap-3 text-sm text-black/65 sm:grid-cols-2">
                                    {[
                                        t("format02Feature1", {city: cityName}),
                                        t("format02Feature2"),
                                        t("format02Feature3"),
                                        t("format02Feature4"),
                                    ].map((item) => (
                                        <span className="flex items-center gap-2" key={item}>
                      <span className="grid size-5 place-items-center rounded-full bg-white/70 text-[#176b9a]">
                        <CheckIcon className="size-3"/>
                      </span>
                                            {item}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Safety Standards Cards */}
                <section
                    className="bg-[#171717] py-20 text-white md:py-28"
                    id="safety"
                >
                    <div className="mx-auto max-w-7xl px-5 md:px-8">
                        <SectionHeading
                            eyebrow={t("safetyEyebrow")}
                            title={t("safetyTitle")}
                            light
                        />
                        <div className="grid gap-3 md:grid-cols-3">
                            {safetyStandards.map((item) => (
                                <article
                                    className="relative min-h-80 overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/6 p-6 backdrop-blur-md md:p-7"
                                    key={item.number}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`h-2 w-12 rounded-full ${item.accent}`}/>
                                        <span className="font-display text-5xl font-black text-white/8">
                      {item.number}
                    </span>
                                    </div>
                                    <div className="absolute bottom-7 left-6 right-6 md:left-7 md:right-7">
                                        <h3 className="font-display text-xl font-black uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-relaxed text-white/50">
                                            {item.text}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* City Coverage Map/Grid */}
                <section
                    className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
                    id="coverage"
                >
                    <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
                        <div
                            className="relative min-h-128 overflow-hidden rounded-[1.75rem] bg-[#eee7fa] p-7 md:p-10">
                            <div
                                className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(113,52,194,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(113,52,194,.12)_1px,transparent_1px)] bg-size-[40px_40px]"/>
                            <div
                                className="absolute left-[18%] top-[22%] size-36 rounded-full border border-[#7134c2]/20"/>
                            <div
                                className="absolute left-[38%] top-[38%] size-52 rounded-full border border-[#7134c2]/20"/>
                            <div
                                className="absolute right-[16%] top-[18%] size-28 rounded-full border border-[#7134c2]/20"/>
                            <div
                                className="absolute bottom-[17%] right-[21%] grid size-16 place-items-center rounded-full bg-[#7134c2] text-white shadow-2xl shadow-[#7134c2]/30">
                                <PinIcon className="size-7"/>
                            </div>
                            <div className="relative z-10 max-w-xl">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7134c2]">
                                    {t("coverageEyebrow")}
                                </p>
                                <h2 className="font-display mt-3 text-3xl font-black uppercase leading-[1.08] md:text-5xl">
                                    {t("coverageTitle", {city: cityName})}
                                </h2>
                                <p className="mt-5 max-w-md text-sm leading-relaxed text-black/55">
                                    {t("coverageText")}
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col justify-between rounded-[1.75rem] bg-white p-7 shadow-xl shadow-black/5 md:p-9">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7134c2]">
                                    {t("districtsLabel")}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2.5">
                                    {config.districts.map((district) => (
                                        <span
                                            className="rounded-full border border-black/10 bg-[#f0f0f0] px-4 py-2.5 text-sm font-semibold"
                                            key={district}
                                        >
                      {district}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                <div className="rounded-2xl bg-[#171717] p-5 text-white">
                                    <ClockIcon className="size-6 text-[#5ff6ba]"/>
                                    <p className="mt-4 text-xs text-white/40">{t("weekdays")}</p>
                                    <p className="mt-1 font-bold">{config.workingHours.weekdays}</p>
                                </div>
                                <div className="rounded-2xl bg-[#c7a7ff] p-5">
                                    <ClockIcon className="size-6 text-[#3c157f]"/>
                                    <p className="mt-4 text-xs text-black/40">{t("weekends")}</p>
                                    <p className="mt-1 font-bold">{config.workingHours.weekends}</p>
                                </div>
                            </div>

                            <a
                                className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 px-5 py-4 text-sm font-semibold transition hover:border-[#7134c2] hover:text-[#7134c2]"
                                href={`https://t.me/lama_cash_manager`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {t("managerDuty", {city: cityName})}
                                <TelegramIcon className="size-5 text-[#41b4f2]"/>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Popular Exchange Pairs Tags */}
                <section className="border-y border-black/5 bg-white/60 py-20 md:py-24">
                    <div className="mx-auto max-w-7xl px-5 md:px-8">
                        <SectionHeading
                            eyebrow={t("pairsEyebrow")}
                            title={t("pairsTitle", {city: cityName})}
                        />
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {config.popularPairs.map((pair) => (
                                <a
                                    className="group flex items-center justify-between rounded-3xl border border-black/5 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                                    href="#booking"
                                    key={`${pair.from}-${pair.to}`}
                                >
                  <span className="flex items-center gap-3">
                    <span
                        className={`grid size-11 place-items-center rounded-2xl text-xs font-black ${pair.color}`}
                    >
                      {pair.from.slice(0, 1)}
                    </span>
                    <span>
                      <span className="font-display block text-lg font-black">
                        {pair.from} / {pair.to}
                      </span>
                      <span className="mt-1 block text-xs text-black/40">
                        {pair.label[locale] || pair.label.uk}
                      </span>
                    </span>
                  </span>
                                    <ArrowIcon
                                        className="size-5 text-black/20 transition group-hover:translate-x-1 group-hover:text-[#7134c2]"/>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO Article */}
                <section className="bg-white py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
                        <div>
                            <div className="sticky top-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7134c2]">
                                    {t("guideEyebrow", {city: cityName})}
                                </p>
                                <h2 className="font-display mt-3 text-3xl font-black uppercase leading-[1.1] md:text-5xl">
                                    {t("guideTitle")}
                                </h2>
                                <div className="mt-8 rounded-3xl bg-[#171717] p-6 text-white">
                                    <ShieldIcon className="size-8 text-[#5ff6ba]"/>
                                    <p className="font-display mt-5 text-lg font-black uppercase">
                                        {t("addressCalloutTitle")}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                                        {t("addressCalloutText")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <article className="prose-lama">
                            {article && (
                                <>
                                    <p className="lead">{article.lead}</p>
                                    {article.sections.map((sec, idx) => (
                                        <div key={idx}>
                                            <h3>{sec.title}</h3>
                                            <p className="whitespace-pre-line">{sec.content}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            <aside>
                                <strong>{t("asideImportant")}</strong> {t("asideText")}
                            </aside>
                        </article>
                    </div>
                </section>

                {/* City FAQ Section */}
                <section
                    className="bg-[linear-gradient(180deg,#472672_0%,#171717_55%)] py-20 text-white md:py-28"
                    id="faq"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
                        <SectionHeading
                            eyebrow={t("faqEyebrow")}
                            title={t("faqTitle", {city: cityName})}
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

                {/* City CTA Banner */}
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
                                    {t("ctaTitle", {city: cityName})}
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
