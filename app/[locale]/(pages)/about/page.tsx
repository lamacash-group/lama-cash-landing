import Link from 'next/link';
import Image from "next/image";
import {Metadata} from "next";
import {getLocale} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

    const titles: Record<string, string> = {
        uk: 'Про компанію',
        ru: 'О компании',
        en: 'About Us'
    };

    const descriptions: Record<string, string> = {
        uk: 'Дізнайтеся більше про LAMA CASH: наша команда, місія та чому тисячі клієнтів обирають наш сервіс для обміну крипти.',
        ru: 'Узнайте больше о LAMA CASH: наша команда, миссия и почему тысячи клиентов выбирают наш сервис для обмена крипты.',
        en: 'Learn more about LAMA CASH: our team, mission, and why thousands of clients choose our crypto exchange service.'
    };

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
    };
}


export default function AboutPage() {
    return (
        <main
            className="min-h-screen bg-gray-950 bg-linear-to-b from-gray-950 to-purple-950/40 py-12 px-4 md:px-8 flex flex-col justify-center text-white">
            <div className="w-full max-w-6xl mx-auto space-y-8 mt-8">

                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-200">
                        Про компанію Lama Cash
                    </h1>
                    <p className="text-gray-300 max-w-2xl text-lg">
                        Дізнайтеся більше про нашу історію, цінності та команду, яка стоїть за створенням надійного
                        фінансового сервісу з 2022 року.
                    </p>
                </div>


                <div className="bg-black/20 mb-10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    <div
                        className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">


                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Наша історія та місія</h2>
                                <p className="mb-4">
                                    Lama Cash успішно працює на ринку фінансових та криптовалютних послуг <strong>з 2022
                                    року</strong>.
                                    Ми прагнемо зробити процес обміну криптовалют максимально прозорим, швидким та
                                    безпечним для кожного користувача.
                                </p>
                                <p>
                                    Сьогодні ми є надійним партнером для тисяч клієнтів, забезпечуючи транзакції по всій
                                    Україні та за її межами.
                                    Наша мета — стерти межі між традиційними фінансами та цифровими активами.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Принципи AML та безпека</h2>
                                <p>
                                    Ми суворо дотримуємося міжнародних стандартів <strong>AML (Anti-Money
                                    Laundering)</strong> та KYC.
                                    Завдяки інноваційним технологіям, кожна транзакція проходить багаторівневу
                                    перевірку, що гарантує
                                    абсолютну чистоту коштів та повну юридичну безпеку для наших клієнтів.
                                </p>
                            </section>
                        </div>

                        <div className="space-y-8">

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {label: 'Років на ринку', value: '5+'},
                                    {label: 'Успішних угод', value: '100K+'},
                                    {label: 'Активних клієнтів', value: '50K+'},
                                    {label: 'Підтримка', value: '24/7'},
                                ].map((stat, idx) => (
                                    <div key={idx}
                                         className="bg-purple-900/10 border border-purple-500/20 rounded-2xl p-6 text-center hover:bg-purple-900/30 transition-colors">
                                        <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                                        <div
                                            className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-black/30 border border-purple-500/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-3">Визнання та нагороди</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Наша відданість безпеці відзначена експертами ринку. У 2025 році команда здобула
                                    престижну нагороду{' '}
                                    <a href="#" className="text-purple-400 hover:text-purple-300 underline font-medium">
                                        NcryptoAwards 2025
                                    </a>.
                                </p>

                                <div
                                    className="relative w-full h-48 rounded-xl border border-purple-500/20 overflow-hidden">
                                    <Image
                                        src="/NCryptoAwards.jpg"
                                        alt="NcryptoAwards 2025"
                                        fill
                                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div
                        className="mt-12 pt-8 border-t border-purple-500/20 flex justify-between items-center relative z-10">
                        <Link href="/"
                              className="group flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
                            Повернутися на головну
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}