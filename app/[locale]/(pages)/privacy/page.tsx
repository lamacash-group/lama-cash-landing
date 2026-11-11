import React from "react";
import {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/app/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
    const {locale} = await params;
    setRequestLocale(locale);

    const titles: Record<string, string> = {
        uk: 'Політика Конфіденційності',
        ru: 'Политика конфиденциальности',
        en: 'Privacy Policy'
    };

    const descriptions: Record<string, string> = {
        uk: 'Ознайомтеся з політикою конфіденційності LAMA CASH та дізнайтеся, як ми захищаємо ваші дані.',
        ru: 'Ознакомьтесь с политикой конфиденциальности LAMA CASH и узнайте, как мы защищаем ваши данные.',
        en: 'Read the LAMA CASH privacy policy and learn how we protect your personal data.'
    };

    const canonical = locale === 'uk' ? 'https://lama-cash.com/privacy' : `https://lama-cash.com/${locale}/privacy`;

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com/privacy',
                'ru': 'https://lama-cash.com/ru/privacy',
                'en': 'https://lama-cash.com/en/privacy',
                'x-default': 'https://lama-cash.com/privacy'
            }
        },
        openGraph: {
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
            url: canonical,
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
        },
    };
}

interface PrivacyContent {
    title: string;
    section1: {
        title: string;
        p1: string;
        p2: string;
    };
    section2: {
        title: string;
        p1: string;
        items: string[];
        p2: string;
    };
    section3: {
        title: string;
        p1: string;
        items: string[];
    };
    section4: {
        title: string;
        p1: string;
        items: string[];
        p2Text: string;
    };
    section5: {
        title: string;
        p1: string;
        items: string[];
        p2: string;
    };
    section6: {
        title: string;
        p1: string;
        items: string[];
        p2: string;
        p3: string;
        p4: string;
    };
    section7: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
    };
    section8: {
        title: string;
        p1: string;
        items: string[];
        p2: string;
    };
    section9: {
        title: string;
        p1: string;
        p2: string;
    };
    section10: {
        title: string;
        p1: string;
        phoneLabel: string;
    };
}

const privacyData: Record<string, PrivacyContent> = {
    uk: {
        title: 'Політика Конфіденційності',
        section1: {
            title: 'Загальні положення',
            p1: '1.1 Ця Політика конфіденційності (далі - Політика) визначає порядок збору, обробки, використання та захисту персональних даних користувачів вебсайту lama-cash.com (далі - «Сайт»).',
            p2: '1.2 Використовуючи Сайт, оформлюючи заявку або звертаючись до Компанії через доступні канали зв’язку, користувач погоджується з положеннями цієї Політики в частині, що застосовується до відповідної взаємодії.',
        },
        section2: {
            title: 'Збір персональних даних',
            p1: '2.1 Залежно від характеру звернення або операції Компанія може отримувати та обробляти:',
            items: [
                'Ім’я та прізвище (якщо не обмежено налаштуваннями Telegram);',
                'Номер телефону (якщо не обмежено налаштуваннями Telegram);',
                'Дані облікового запису або ідентифікатори в месенджерах, зокрема Telegram (якщо не обмежено налаштуваннями Telegram);',
                'Реквізити рахунків, банківських карток та платіжних систем, необхідні для проведення операції;',
                'Інформацію про здійснені заявки та транзакції;',
                'Дані, необхідні для ідентифікації та верифікації клієнта, якщо така процедура передбачена для відповідної операції (для міжнародних операцій);',
                'IP-адресу, тип пристрою, операційну систему, браузер, мову браузера та інші технічні дані;',
                'Інформацію про взаємодію користувача із Сайтом.',
            ],
            p2: '2.2 Компанія отримує лише ті дані, які необхідні для відповідної мети та виконання запиту користувача.',
        },
        section3: {
            title: 'Для чого використовуються персональні дані',
            p1: '3.1 Персональні дані обробляються для:',
            items: [
                'Приймання та обробки заявок на обмін валют і криптовалют;',
                'Проведення та супроводу фінансових операцій;',
                'Комунікації з клієнтом щодо заявки або операції;',
                'Підтвердження та уточнення реквізитів;',
                'Ідентифікації та верифікації клієнта, якщо це необхідно (для міжнародних операцій);',
                'Виконання вимог законодавства України та міжнародних стандартів (зокрема, боротьба з відмиванням грошей та фінансуванням тероризму);',
                'Розгляду звернень та запитів користувачів;',
                'Аналізу використання Сайту та покращення його функціональності.',
            ],
        },
        section4: {
            title: 'Права користувача на доступ та видалення персональних даних',
            p1: '4.1 Користувач має право відповідно до законодавства:',
            items: [
                'Отримувати інформацію про обробку своїх персональних даних;',
                'Отримувати доступ до своїх персональних даних;',
                'Вимагати виправлення неточних або неповних даних;',
                'Звертатися із запитом щодо видалення своїх персональних даних, якщо вони більше не потрібні для виконання зобов’язань перед користувачем;',
            ],
            p2Text: '4.2 Необхідні запити на доступ або видалення персональних даних можуть бути відправлені на email підтримки: ',
        },
        section5: {
            title: 'Захист персональних даних',
            p1: '5.1 Компанія застосовує сучасні технологічні заходи для захисту персональних даних, включаючи:',
            items: [
                'Захищене HTTPS-з\'єднання (Шифрування персональних даних при їх передачі через інтернет);',
                'Контроль доступу до інформації;',
                'Технічні засоби захисту інформаційних систем (брандмауери та інші методи захисту інформаційних систем);',
                'Обмеження доступу до персональних даних для уповноважених працівників та контроль осіб, які мають доступ до них;',
            ],
            p2: '5.2 Компанія здійснює регулярну перевірку безпеки систем для організації належного рівня захисту персональних даних.',
        },
        section6: {
            title: 'Передача даних третім особам',
            p1: '6.1 Компанія не передає персональні дані третім особам без згоди користувача, за винятком випадків, передбачених законодавством України. Дані можуть бути доступними:',
            items: [
                'Платіжним системам та фінансовим партнерам - у межах проведення відповідної операції;',
                'Державним органам що здійснюють контроль та нагляд - виключно у випадках передбачених законодавством, зокрема за рішенням суду;',
            ],
            p2: '6.2 У разі передачі персональних даних третім особам Компанія вживає необхідних заходів для забезпечення їх належного захисту відповідно до цієї Політики.',
            p3: '6.3 Запити державних органів щодо надання персональних даних розглядаються Компанією та виконуються лише за наявності належних правових підстав і відповідного обґрунтування.',
            p4: '6.4 Компанія вживає необхідних заходів для недопущення необґрунтованої або безпідставної передачі персональних даних Клієнтів будь-яким третім особам, у тому числі державним органам та органам місцевого самоврядування.',
        },
        section7: {
            title: 'Google, аналітика та рекламні технології',
            p1: '7.1 Для забезпечення роботи Сайту, аналізу його використання та оцінки ефективності маркетингових активностей Компанія може використовувати сторонні сервіси, зокрема Google Analytics, Google Ads та інші технологічні інструменти.',
            p2: '7.2 Такі сервіси можуть обробляти технічні дані про відвідування Сайту, пристрій, браузер, джерело переходу та взаємодію користувача із Сайтом.',
            p3: '7.3 У випадках, коли використовуються рекламні або аналітичні технології, що передбачають використання cookie чи інших ідентифікаторів, відповідна обробка здійснюється згідно з налаштуваннями користувача.',
            p4: '7.4 Користувач може керувати використанням cookie через налаштування свого браузера та, де це передбачено, через доступні налаштування згоди на Сайті.',
            p5: '7.5 Інформація про використання даних для рекламних цілей та сторонніх рекламних сервісів надається користувачу відповідно до вимог застосовної політики конфіденційності.',
        },
        section8: {
            title: 'Файли cookie',
            p1: '8.1 Сайт може використовувати файли cookie та аналогічні технології для:',
            items: [
                'Забезпечення коректної роботи Сайту;',
                'Збереження технічних та користувацьких налаштувань;',
                'Аналізу відвідуваності та поведінки користувачів;',
                'Покращення роботи та зручності Сайту;',
                'Вимірювання ефективності рекламних кампаній.',
            ],
            p2: '8.2 Користувач може змінити налаштування cookie у своєму браузері. Вимкнення окремих cookie може вплинути на роботу деяких функцій Сайту.',
        },
        section9: {
            title: 'Зміни до Політики',
            p1: '9.1 Компанія має право оновлювати цю Політику у зв’язку зі змінами законодавства.',
            p2: '9.2 Актуальна редакція Політики постійно доступна на цій сторінці. Нова редакція набирає чинності з моменту її опублікування.',
        },
        section10: {
            title: 'Контактна інформація',
            p1: '10.1 З питань щодо цієї Політики або обробки персональних даних звертайтеся до нас:',
            phoneLabel: 'Телефон',
        },
    },
    ru: {
        title: 'Политика конфиденциальности',
        section1: {
            title: 'Общие положения',
            p1: '1.1 Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок сбора, обработки, использования и защиты персональных данных пользователей веб-сайта lama-cash.com (далее — «Сайт»).',
            p2: '1.2 Используя Сайт, оформляя заявку или обращаясь в Компанию через доступные каналы связи, пользователь соглашается с положениями настоящей Политики в части, применимой к соответствующему взаимодействию.',
        },
        section2: {
            title: 'Сбор персональных данных',
            p1: '2.1 В зависимости от характера обращения или операции Компания может получать и обрабатывать:',
            items: [
                'Имя и фамилию (если не ограничено настройками Telegram);',
                'Номер телефона (если не ограничено настройками Telegram);',
                'Данные учетной записи или идентификаторы в мессенджерах, в частности Telegram (если не ограничено настройками Telegram);',
                'Реквизиты счетов, банковских карт и платежных систем, необходимые для проведения операции;',
                'Информацию о совершенных заявках и транзакциях;',
                'Данные, необходимые для идентификации и верификации клиента, если такая процедура предусмотрена для соответствующей операции (для международных операций);',
                'IP-адрес, тип устройства, операционную систему, браузер, язык браузера и другие технические данные;',
                'Информацию о взаимодействии пользователя с Сайтом.',
            ],
            p2: '2.2 Компания получает только те данные, которые необходимы для соответствующей цели и выполнения запроса пользователя.',
        },
        section3: {
            title: 'Для чего используются персональные данные',
            p1: '3.1 Персональные данные обрабатываются для:',
            items: [
                'Приема и обработки заявок на обмен валют и криптовалют;',
                'Проведения и сопровождения финансовых операций;',
                'Коммуникации с клиентом касательно заявки или операции;',
                'Подтверждения и уточнения реквизитов;',
                'Идентификации и верификации клиента, если это необходимо (для международных операций);',
                'Выполнения требований законодательства Украины и международных стандартов (в частности, борьба с отмыванием денег и финансированием терроризма);',
                'Рассмотрения обращений и запросов пользователей;',
                'Анализа использования Сайта и улучшения его функциональности.',
            ],
        },
        section4: {
            title: 'Права пользователя на доступ и удаление персональных данных',
            p1: '4.1 Пользователь имеет право в соответствии с законодательством:',
            items: [
                'Получать информацию об обработке своих персональных данных;',
                'Получать доступ к своим персональным данным;',
                'Требовать исправления неточных или неполных данных;',
                'Обращаться с запросом об удалении своих персональных данных, если они больше не требуются для выполнения обязательств перед пользователем;',
            ],
            p2Text: '4.2 Необходимые запросы на доступ или удаление персональных данных могут быть отправлены на email службы поддержки: ',
        },
        section5: {
            title: 'Защита персональных данных',
            p1: '5.1 Компания применяет современные технологические меры для защиты персональных данных, включая:',
            items: [
                'Защищенное HTTPS-соединение (шифрование персональных данных при их передаче через интернет);',
                'Контроль доступа к информации;',
                'Технические средства защиты информационных систем (брандмауэры и другие методы защиты информационных систем);',
                'Ограничение доступа к персональным данным для уполномоченных сотрудников и контроль лиц, имеющих доступ к ним;',
            ],
            p2: '5.2 Компания осуществляет регулярную проверку безопасности систем для организации надлежащего уровня защиты персональных данных.',
        },
        section6: {
            title: 'Передача данных третьим лицам',
            p1: '6.1 Компания не передает персональные данные третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством Украины. Данные могут быть доступны:',
            items: [
                'Платежным системам и финансовым партнерам — в рамках проведения соответствующей операции;',
                'Государственным органам, осуществляющим контроль и надзор, — исключительно в случаях, предусмотренных законодательством, в частности по решению суда;',
            ],
            p2: '6.2 В случае передачи персональных данных третьим лицам Компания принимает необходимые меры для обеспечения их надлежащей защиты в соответствии с настоящей Политикой.',
            p3: '6.3 Запросы государственных органов о предоставлении персональных данных рассматриваются Компанией и выполняются только при наличии надлежащих правовых оснований и соответствующего обоснования.',
            p4: '6.4 Компания принимает необходимые меры для недопущения необоснованной или беспричинной передачи персональных данных Клиентов любым третьим лицам, в том числе государственным органам и органам местного самоуправления.',
        },
        section7: {
            title: 'Google, аналитика и рекламные технологии',
            p1: '7.1 Для обеспечения работы Сайта, анализа его использования и оценки эффективности маркетинговых активностей Компания может использовать сторонние сервисы, в частности Google Analytics, Google Ads и другие технологические инструменты.',
            p2: '7.2 Такие сервисы могут обрабатывать технические данные о посещении Сайта, устройстве, браузере, источнике перехода и взаимодействии пользователя с Сайтом.',
            p3: '7.3 В случаях, когда используются рекламные или аналитические технологии, предусматривающие использование cookie или других идентификаторов, соответствующая обработка осуществляется в соответствии с настройками пользователя.',
            p4: '7.4 Пользователь может управлять использованием cookie через настройки своего браузера и, где это предусмотрено, через доступные настройки согласия на Сайте.',
            p5: '7.5 Информация об использовании данных для рекламных целей и сторонних рекламных сервисов предоставляется пользователю в соответствии с требованиями применимой политики конфиденциальности.',
        },
        section8: {
            title: 'Файлы cookie',
            p1: '8.1 Сайт может использовать файлы cookie и аналогичные технологии для:',
            items: [
                'Обеспечения корректной работы Сайта;',
                'Сохранения технических и пользовательских настроек;',
                'Анализа посещаемости и поведения пользователей;',
                'Улучшения работы и удобства Сайта;',
                'Измерения эффективности рекламных кампаний.',
            ],
            p2: '8.2 Пользователь может изменить настройки cookie в своем браузере. Отключение отдельных cookie может повлиять на работу некоторых функций Сайта.',
        },
        section9: {
            title: 'Изменения в Политике',
            p1: '9.1 Компания имеет право обновлять настоящую Политику в связи с изменениями законодательства.',
            p2: '9.2 Актуальная редакция Политики постоянно доступна на этой странице. Новая редакция вступает в силу с момента ее опубликования.',
        },
        section10: {
            title: 'Контактная информация',
            p1: '10.1 По вопросам касательно настоящей Политики или обработки персональных данных обращайтесь к нам:',
            phoneLabel: 'Телефон',
        },
    },
    en: {
        title: 'Privacy Policy',
        section1: {
            title: 'General Provisions',
            p1: '1.1 This Privacy Policy (hereinafter referred to as the "Policy") defines the procedure for collecting, processing, using, and protecting the personal data of users of the website lama-cash.com (hereinafter referred to as the "Website").',
            p2: '1.2 By using the Website, submitting an application, or contacting the Company through available communication channels, the user agrees to the provisions of this Policy to the extent applicable to the relevant interaction.',
        },
        section2: {
            title: 'Collection of Personal Data',
            p1: '2.1 Depending on the nature of the request or transaction, the Company may receive and process:',
            items: [
                'Full name (unless restricted by Telegram settings);',
                'Phone number (unless restricted by Telegram settings);',
                'Account data or messenger identifiers, specifically Telegram (unless restricted by Telegram settings);',
                'Account, bank card, and payment system details necessary for executing the transaction;',
                'Information regarding submitted applications and transactions;',
                'Data required for client identification and verification, if such procedure is required for the respective transaction (for international transactions);',
                'IP address, device type, operating system, browser, browser language, and other technical data;',
                'Information regarding the user\'s interaction with the Website.',
            ],
            p2: '2.2 The Company only collects data necessary for the relevant purpose and fulfillment of the user\'s request.',
        },
        section3: {
            title: 'Purposes of Personal Data Processing',
            p1: '3.1 Personal data is processed for:',
            items: [
                'Receiving and processing requests for currency and cryptocurrency exchange;',
                'Executing and supporting financial transactions;',
                'Communicating with the client regarding an application or transaction;',
                'Confirming and verifying payment details;',
                'Client identification and verification, if necessary (for international transactions);',
                'Complying with Ukrainian legislative requirements and international standards (specifically, anti-money laundering and combating the financing of terrorism);',
                'Reviewing inquiries and requests from users;',
                'Analyzing Website usage and improving its functionality.',
            ],
        },
        section4: {
            title: 'User Rights to Access and Erasure of Personal Data',
            p1: '4.1 The user has the right under applicable law to:',
            items: [
                'Receive information about the processing of their personal data;',
                'Access their personal data;',
                'Request correction of inaccurate or incomplete data;',
                'Request the deletion of their personal data if it is no longer required to fulfill obligations to the user;',
            ],
            p2Text: '4.2 Requests for access or deletion of personal data can be sent to our support email: ',
        },
        section5: {
            title: 'Protection of Personal Data',
            p1: '5.1 The Company applies modern technical measures to protect personal data, including:',
            items: [
                'Secure HTTPS connection (encryption of personal data during transmission over the Internet);',
                'Access control to information;',
                'Technical means for information system protection (firewalls and other information security measures);',
                'Restricting personal data access to authorized personnel and monitoring individuals with access rights;',
            ],
            p2: '5.2 The Company performs regular security assessments of its systems to ensure an adequate level of personal data protection.',
        },
        section6: {
            title: 'Transfer of Data to Third Parties',
            p1: '6.1 The Company does not disclose personal data to third parties without the user\'s consent, except as provided by the legislation of Ukraine. Data may be accessible to:',
            items: [
                'Payment systems and financial partners — to the extent required to execute the relevant transaction;',
                'State supervisory and regulatory authorities — exclusively in cases provided by law, in particular pursuant to a court order;',
            ],
            p2: '6.2 In the event of transferring personal data to third parties, the Company takes necessary measures to ensure adequate protection in accordance with this Policy.',
            p3: '6.3 Requests from government authorities for personal data are reviewed by the Company and fulfilled only where appropriate legal grounds and valid justification exist.',
            p4: '6.4 The Company takes necessary steps to prevent unjustified or unwarranted disclosure of Client personal data to any third parties, including state and local authorities.',
        },
        section7: {
            title: 'Google, Analytics, and Advertising Technologies',
            p1: '7.1 To ensure Website functionality, analyze its usage, and assess the effectiveness of marketing campaigns, the Company may use third-party services, including Google Analytics, Google Ads, and other technology tools.',
            p2: '7.2 Such services may process technical data regarding Website visits, device, browser, referral source, and user interaction with the Website.',
            p3: '7.3 Where advertising or analytics technologies involving cookies or other identifiers are used, such processing is carried out according to the user\'s settings.',
            p4: '7.4 Users can manage cookie usage through their browser settings and, where applicable, through consent preferences available on the Website.',
            p5: '7.5 Information regarding the use of data for advertising purposes and third-party advertising services is provided to the user in accordance with applicable privacy policies.',
        },
        section8: {
            title: 'Cookies',
            p1: '8.1 The Website may use cookies and similar technologies to:',
            items: [
                'Ensure the proper functioning of the Website;',
                'Save technical and user preferences;',
                'Analyze traffic and user behavior;',
                'Improve Website performance and usability;',
                'Measure the effectiveness of advertising campaigns.',
            ],
            p2: '8.2 The user can change cookie settings in their browser. Disabling certain cookies may affect the operation of some Website features.',
        },
        section9: {
            title: 'Changes to the Policy',
            p1: '9.1 The Company reserves the right to update this Policy in response to legal and regulatory changes.',
            p2: '9.2 The current version of the Policy is always accessible on this page. The new version takes effect upon its publication.',
        },
        section10: {
            title: 'Contact Information',
            p1: '10.1 For inquiries regarding this Policy or personal data processing, please contact us:',
            phoneLabel: 'Phone',
        },
    },
};

export default async function PrivacyPage({params}: {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
    setRequestLocale(locale);

    const content = privacyData[locale] || privacyData.uk;

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className="min-h-screen w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] py-10 px-4 md:px-8 font-sans">
                <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-white/80">

                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">{content.title}</h1>

                    <div className="space-y-8 text-base md:text-base leading-relaxed">
                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section1.title}</h2>
                            <p className="mb-2">{content.section1.p1}</p>
                            <p>{content.section1.p2}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section2.title}</h2>
                            <p className="mb-2">{content.section2.p1}</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-white/70">
                                {content.section2.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p>{content.section2.p2}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section3.title}</h2>
                            <p className="mb-2">{content.section3.p1}</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                {content.section3.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section4.title}</h2>
                            <p className="mb-2">{content.section4.p1}</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-white/70">
                                {content.section4.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p>
                                {content.section4.p2Text}
                                <a href="mailto:supportlamacash@gmail.com" className="text-[#5ce1e6] hover:underline">
                                    supportlamacash@gmail.com
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section5.title}</h2>
                            <p className="mb-2">{content.section5.p1}</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-white/70">
                                {content.section5.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p>{content.section5.p2}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section6.title}</h2>
                            <p className="mb-2">{content.section6.p1}</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-white/70">
                                {content.section6.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className="mb-2">{content.section6.p2}</p>
                            <p className="mb-2">{content.section6.p3}</p>
                            <p>{content.section6.p4}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section7.title}</h2>
                            <p className="mb-2">{content.section7.p1}</p>
                            <p className="mb-2">{content.section7.p2}</p>
                            <p className="mb-2">{content.section7.p3}</p>
                            <p className="mb-2">{content.section7.p4}</p>
                            <p>{content.section7.p5}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section8.title}</h2>
                            <p className="mb-2">{content.section8.p1}</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-white/70">
                                {content.section8.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p>{content.section8.p2}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section9.title}</h2>
                            <p className="mb-2">{content.section9.p1}</p>
                            <p>{content.section9.p2}</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white mb-3">{content.section10.title}</h2>
                            <p className="mb-2">{content.section10.p1}</p>
                            <p>Email: <a href="mailto:supportlamacash@gmail.com" className="text-[#5ce1e6] hover:underline">supportlamacash@gmail.com</a></p>
                            <p>{content.section10.phoneLabel}: <a href="tel:+380935996385" className="text-[#5ce1e6] hover:underline">+38 (093) 599 63 85</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
