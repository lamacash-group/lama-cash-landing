import {Link} from "@/app/i18n/navigation";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {Metadata} from "next";
import {getLocale} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

    const titles: Record<string, string> = {
        uk: 'Контакти',
        ru: 'Контакты',
        en: 'Contacts'
    };

    const descriptions: Record<string, string> = {
        uk: 'Контакти LAMA CASH: цілодобова підтримка, наші соціальні мережі та способи зв\'язку для швидкого вирішення ваших питань.',
        ru: 'Контакты LAMA CASH: круглосуточная поддержка, наши социальные сети и способы связи для быстрого решения ваших вопросов.',
        en: 'LAMA CASH contacts: 24/7 support, our social networks, and ways to get in touch for quick resolution of your questions.'
    };

    const canonical = locale === 'uk' ? 'https://lama-cash.com/contacts' : `https://lama-cash.com/${locale}/contacts`;

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com/contacts',
                'ru': 'https://lama-cash.com/ru/contacts',
                'en': 'https://lama-cash.com/en/contacts',
                'x-default': 'https://lama-cash.com/contacts'
            }
        }
    };
}

export default function ContactsPage() {
    const t = useTranslations("Contacts");

    return (

        <main
            className="min-h-screen bg-gray-950 bg-linear-to-b from-gray-950 to-purple-950/40 py-12 px-4 md:px-8 flex flex-col justify-center text-white">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Lama Cash",
                        "url": "https://lama-cash.com",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+38-093-599-63-85",
                            "contactType": "customer service",
                            "email": "support@lama-cash.com",
                            "areaServed": "UA",
                            "availableLanguage": ["Ukrainian", "English"]
                        }
                    })
                }}
            />

            <div className="w-full max-w-6xl mx-auto space-y-8 mt-8">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-200">
                        {t("title")}
                    </h1>
                    <p className="text-gray-300 max-w-xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">


                    <div className="lg:col-span-2 space-y-4">


                        <Link href="mailto:support@lama-cash.com"
                           className="group flex items-center gap-5 p-6 bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-2xl hover:bg-purple-900/10 hover:border-purple-400/50 transition-all">
                            <div
                                className="w-12 h-12 shrink-0 flex items-center justify-center bg-purple-900/30 text-purple-400 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition-colors border border-purple-500/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-1 font-semibold">{t("emailTitle")}</h3>
                                <p className="text-white font-medium break-all group-hover:text-purple-200 transition-colors">support@lama-cash.com</p>
                            </div>
                        </Link>

                        <Link href="tel:+380935996385"
                           className="group flex items-center gap-5 p-6 bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-2xl hover:bg-purple-900/10 hover:border-purple-400/50 transition-all">
                            <div
                                className="w-12 h-12 shrink-0 flex items-center justify-center bg-purple-900/30 text-purple-400 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition-colors border border-purple-500/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-1 font-semibold">{t("phoneTitle")}</h3>
                                <p className="text-white font-medium group-hover:text-purple-200 transition-colors">+38
                                    (093) 599 63 85</p>
                            </div>
                        </Link>

                        <Link href="https://t.me/lamacash_manager" target="_blank"  rel="noopener"
                           className="group flex items-center gap-5 p-6 bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-2xl hover:bg-purple-900/10 hover:border-purple-400/50 transition-all">
                            <div
                                className="w-12 h-12 shrink-0 flex items-center justify-center bg-purple-900/30 text-purple-400 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition-colors border border-purple-500/20">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.298-.346-.105l-6.4 4.027-2.76-.86c-.6-.185-.615-.6.125-.89l10.736-4.136c.5-.186.943.11.825.825z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-1 font-semibold">{t("telegramTitle")}</h3>
                                <p className="text-white font-medium group-hover:text-purple-200 transition-colors">@lamacash_manager</p>
                            </div>
                        </Link>

                        <div
                            className="flex items-start gap-5 p-6 bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-2xl">
                            <div
                                className="w-12 h-12 shrink-0 flex items-center justify-center bg-purple-900/30 text-purple-400 rounded-xl mt-1 border border-purple-500/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-1 font-semibold">{t("officeScheduleTitle")}</h3>
                                <p className="text-white font-medium mb-2">{t("officeAddress")}</p>
                                <div className="text-sm text-gray-300 space-y-1">
                                    <p>{t("workdays")}</p>
                                    <p>{t("weekends")}</p>
                                    <p className="text-purple-400/80 text-xs mt-2">{t("appointmentNote")}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className="lg:col-span-3 bg-black/20 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 shadow-2xl h-fit">
                        <h2 className="text-2xl font-semibold text-white mb-6">{t("writeToUsTitle")}</h2>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 font-medium">{t("yourNameLabel")}</label>
                                    <input type="text" placeholder={t("yourNamePlaceholder")}
                                           className="w-full bg-black/30 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 font-medium">Email</label>
                                    <input type="email" placeholder="jhone@example.com"
                                           className="w-full bg-black/30 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"/>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-300 font-medium">{t("messageLabel")}</label>
                                <textarea rows={4} placeholder={t("messagePlaceholder")}
                                          className="w-full bg-black/30 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"></textarea>
                            </div>

                            <Button type="button"
                                    className="w-full h-13 text-base bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-950">
                                {t("sendMessageButton")}
                            </Button>
                        </form>
                    </div>

                </div>


                <div
                    className="mt-10 p-6 bg-purple-900/10 rounded-2xl border border-purple-500/10 flex flex-col md:flex-row items-start md:items-center justify-between text-gray-300 text-sm">
                    <div>
                        <p className="font-semibold text-white text-base mb-1">{t("legalInfoTitle")}</p>
                        <p>{t("legalInfoText")}</p>
                    </div>
                    <Link href="/legal"
                          className="mt-4 md:mt-0 px-5 py-2.5 bg-purple-900/30 hover:bg-purple-800/40 rounded-xl transition-colors border border-purple-500/20 text-purple-200 font-medium whitespace-nowrap">
                        {t("legalDocsButton")}
                    </Link>
                </div>


                <div className="flex justify-center pt-8 mb-10 border-t border-purple-500/20 mt-12">
                    <Link href="/"
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
                        {t("backToHome")}
                    </Link>
                </div>
            </div>
        </main>
    );
}