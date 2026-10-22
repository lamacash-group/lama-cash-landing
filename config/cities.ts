export interface FAQItem {
  question: string;
  answer: string;
}

export interface CityFact {
  label: Record<string, string>;
  note: Record<string, string>;
  iconName: "pin" | "car" | "clock" | "shield" | "building";
}

export interface ExchangePair {
  from: string;
  to: string;
  label: Record<string, string>;
  color: string;
}

export interface CityConfig {
  slug: string;
  cityName: Record<string, string>;
  inCity: Record<string, string>;
  acrossCity: Record<string, string>;
  cityGenitive: Record<string, string>;
  workingHours: {
    weekdays: string;
    weekends: string;
  };
  districts: string[];
  h1: Record<string, string>;
  leadText: Record<string, string>;
  quickFacts: CityFact[];
  popularPairs: ExchangePair[];
  seoArticle: Record<
    string,
    {
      lead: string;
      sections: Array<{
        title: string;
        content: string;
      }>;
    }
  >;
  faqs: Record<string, FAQItem[]>;
}

export const citiesConfig: Record<string, CityConfig> = {
  kyiv: {
    slug: "kyiv",
    cityName: {
      uk: "Київ",
      ru: "Киев",
      en: "Kyiv",
    },
    inCity: {
      uk: "у Києві",
      ru: "в Киеве",
      en: "in Kyiv",
    },
    acrossCity: {
      uk: "по всьому Києву",
      ru: "по всему Киеву",
      en: "across all of Kyiv",
    },
    cityGenitive: {
      uk: "Києву",
      ru: "Киеву",
      en: "Kyiv",
    },
    workingHours: {
      weekdays: "09:00 — 20:00",
      weekends: "10:00 — 20:00",
    },
    districts: [
      "Печерськ",
      "Шевченківський",
      "Поділ",
      "Оболонь",
      "Голосіїв",
      "Лівий берег",
      "Позняки",
      "Солом’янка",
    ],
    h1: {
      uk: "Безпечний криптообмінник у Києві",
      ru: "Безопасный криптообменник в Киеве",
      en: "Secure Crypto Exchange in Kyiv",
    },
    leadText: {
      uk: "Купівля та продаж USDT, BTC і ETH за готівковий USD або UAH. Закритий VIP-офіс у центрі Києва (Печерськ) та броньована доставка від $30 000.",
      ru: "Покупка и продажа USDT, BTC и ETH за наличные USD или UAH. Закрытый VIP-офис в центре Киева (Печерск) и бронированная доставка от $30 000.",
      en: "Buy and sell USDT, BTC, and ETH for cash USD or UAH. Private VIP branch in central Kyiv (Pechersk) and armored courier delivery from $30,000.",
    },
    quickFacts: [
      {
        iconName: "pin",
        label: {
          uk: "Печерськ / Центр",
          ru: "Печерск / Центр",
          en: "Pechersk / Center",
        },
        note: {
          uk: "офіс за записом",
          ru: "офис по записи",
          en: "by appointment only",
        },
      },
      {
        iconName: "car",
        label: {
          uk: "Паркінг та доставка",
          ru: "Паркинг и доставка",
          en: "Parking & Delivery",
        },
        note: {
          uk: "кур'єр від $30 000",
          ru: "курьер от $30 000",
          en: "courier from $30,000",
        },
      },
      {
        iconName: "clock",
        label: {
          uk: "Готовність від 15 хв",
          ru: "Готовность от 15 мин",
          en: "Ready in 15 mins",
        },
        note: {
          uk: "фіксація курсу до 90 хв",
          ru: "фиксация курса до 90 мин",
          en: "rate locked up to 90 min",
        },
      },
      {
        iconName: "shield",
        label: {
          uk: "Закрита VIP-каса",
          ru: "Закрытая VIP-касса",
          en: "Private VIP Desk",
        },
        note: {
          uk: "детектори та охорона",
          ru: "детекторы и охрана",
          en: "detectors & security",
        },
      },
    ],
    popularPairs: [
      {
        from: "USDT",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#5ff6ba]",
      },
      {
        from: "USDT",
        to: "UAH",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#c7a7ff]",
      },
      {
        from: "BTC",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#b3e2ff]",
      },
      {
        from: "ETH",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#b9fd94]",
      },
      {
        from: "USD",
        to: "UAH",
        label: { uk: "Каса", ru: "Касса", en: "Desk" },
        color: "bg-[#ffb3b3]",
      },
      {
        from: "Картка",
        to: "USDT",
        label: { uk: "Онлайн", ru: "Онлайн", en: "Online" },
        color: "bg-[#958dff]",
      },
    ],
    seoArticle: {
      uk: {
        lead: "Криптообмін у Києві з Lama Cash поєднує швидкість сучасного блокчейну з бездоганною безпекою фізичної каси в діловому центрі столиці на Печерську.",
        sections: [
          {
            title: "Локація на Печерську та політика безпеки каси",
            content:
              "Наше київське відділення розташоване в центральній частині міста — у престижному діловому районі Печерська. З міркувань безпеки клієнтів та збереження конфіденційності вхід до каси суворо обмежений: точна адреса бізнес-центру, інструкція для заїзду на паркінг та індивідуальний часовий слот надаються черговим менеджером у Telegram виключно після підтвердження заявки.",
          },
          {
            title: "Фіксація курсу з урахуванням столичного трафіку",
            content:
              "Ми добре розуміємо специфіку дорожнього руху в Києві, особливо переїзди мостами між Лівим та Правим берегами в години пік. Після погодження угоди наш менеджер фіксує курс на термін до 90 хвилин, щоб ви могли комфортно та без поспіху дістатися каси за будь-яких заторів.",
          },
          {
            title: "Інкасація та доставка від $30 000",
            content:
              "Для великих угод обсягом від $30 000 доступна послуга автомобільної доставки інкасатором по всьому Києву (Оболонь, Поділ, Голосіїв, Позняки) або в заміські локації (Козин, Конча-Заспа). Доставка погоджується індивідуально та супроводжується озброєною охороною.",
          },
        ],
      },
      ru: {
        lead: "Криптообмен в Киеве с Lama Cash сочетает скорость современных цифровых транзакций и надежность физической VIP-кассы в центре столицы на Печерске.",
        sections: [
          {
            title: "Локация на Печерске и политика конфиденциальности",
            content:
              "Наш киевский офис расположен в самом центре делового Печерска. В целях безопасности клиентов и защиты данных точный адрес и бронь парковочного места предоставляются менеджером в Telegram только после подтверждения заявки.",
          },
          {
            title: "Фиксация курса с запасом на столичные пробки",
            content:
              "Мы фиксируем курс на срок до 90 минут, что дает запас времени при переезде через мосты и движении по загруженным магистралям Киева.",
          },
          {
            title: "Инкассаторская доставка от $30 000",
            content:
              "Для крупных операций от $30 000 доступна безопасная доставка автокурьером по всему Киеву и в закрытые коттеджные поселки пригорода.",
          },
        ],
      },
      en: {
        lead: "Crypto exchange in Kyiv with Lama Cash delivers instant digital conversion paired with absolute offline privacy in central Pechersk.",
        sections: [
          {
            title: "Central Pechersk branch and private access policy",
            content:
              "Our Kyiv branch is situated in the financial hub of Pechersk. To ensure maximum confidentiality and client protection, exact business center coordinates and private parking passes are issued strictly via our official Telegram manager upon verification.",
          },
          {
            title: "Extended 90-minute rate lock for Kyiv traffic",
            content:
              "Understanding city traffic between the Left and Right banks, we freeze your exchange rate for up to 90 minutes from booking confirmation.",
          },
          {
            title: "Armored cash transport from $30,000",
            content:
              "For transactions starting from $30,000, secure dedicated cash delivery is available across all of Kyiv and private suburban residences.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Як фіксується курс, якщо я їду через міст у заторах?",
          answer:
            "Ми розуміємо столичний трафік і фіксуємо узгоджений курс на термін до 90 хвилин після підтвердження заявки в Telegram. Цього часу достатньо, щоб спокійно доїхати з лівого берега чи передмістя.",
        },
        {
          question: "Чи є закритий паркінг біля офісу на Печерську?",
          answer:
            "Так, клієнтам надається доступ на охоронюваний підземний або закритий наземний паркінг бізнес-центру за попереднім записом у менеджера.",
        },
        {
          question: "Чи доступна кур'єрська доставка готівки по Києву?",
          answer:
            "Так, автокур'єр та інкасаторська доставка доступні для угод від $30 000 по всіх районах Києва та найближчому передмістю за попереднім узгодженням.",
        },
        {
          question: "Чому точна адреса офісу надається лише після заявки?",
          answer:
            "Всі наші відділення розташовані в центрі міста. Ми не працюємо у форматі відкритої вуличної обмінки задля безпеки клієнтів і відсутності сторонніх осіб у касі. Адреса та перепустка надаються в Telegram перед візитом.",
        },
        {
          question: "Як перевіряються долари в київській касі?",
          answer:
            "Кожна купюра перевіряється на оптичних та магнітних детекторах банківського класу у вашій присутності. Ми видаємо тільки чисті долари нового зразка («синій долар»).",
        },
      ],
      ru: [
        {
          question: "Как фиксируется курс, если я стою в пробках на мосту?",
          answer:
            "Мы фиксируем курс на 90 минут после подтверждения встречи в Telegram, чтобы вы могли спокойно добраться до кассы с любого берега Киева.",
        },
        {
          question: "Есть ли закрытый паркинг возле офиса на Печерске?",
          answer:
            "Да, для клиентов бронируется место на охраняемом паркинге бизнес-центра в центре Киева.",
        },
        {
          question: "С какой суммы доступна доставка наличных по Киеву?",
          answer:
            "Инкассаторская доставка курьером по Киеву и пригороду осуществляется для операций от $30 000 по согласованию с менеджером.",
        },
        {
          question: "Почему точный адрес офиса сообщается только после заявки?",
          answer:
            "Офис расположен в центре города, однако доступ осуществляется строго по предварительной записи ради безопасности и конфиденциальности каждого клиента.",
        },
      ],
      en: [
        {
          question: "How is the rate locked during Kyiv bridge traffic jams?",
          answer:
            "We freeze your confirmed rate for up to 90 minutes, allowing plenty of time to drive across the city without worrying about price swings.",
        },
        {
          question: "Is secure parking provided at the Pechersk office?",
          answer:
            "Yes, private guarded business center parking is arranged by our manager prior to your appointment.",
        },
        {
          question: "What is the threshold for courier cash delivery in Kyiv?",
          answer:
            "Armored courier delivery across Kyiv and nearby residences is available for transactions starting from $30,000.",
        },
        {
          question: "Why is the exact address revealed only after verification?",
          answer:
            "All our desks operate in prime city center hubs, but access is restricted to confirmed private appointments to protect client assets and confidentiality.",
        },
      ],
    },
  },

  lviv: {
    slug: "lviv",
    cityName: {
      uk: "Львів",
      ru: "Львов",
      en: "Lviv",
    },
    inCity: {
      uk: "у Львові",
      ru: "во Львове",
      en: "in Lviv",
    },
    acrossCity: {
      uk: "по всьому Львову",
      ru: "по всему Львову",
      en: "across all of Lviv",
    },
    cityGenitive: {
      uk: "Львову",
      ru: "Львову",
      en: "Lviv",
    },
    workingHours: {
      weekdays: "09:00 — 20:00",
      weekends: "10:00 — 20:00",
    },
    districts: [
      "Галицький (Центр)",
      "Франківський",
      "Сихівський",
      "Личаківський",
      "Шевченківський",
      "Залізничний",
    ],
    h1: {
      uk: "Обмін криптовалют у Львові",
      ru: "Обмен криптовалют во Львове",
      en: "Crypto Exchange in Lviv",
    },
    leadText: {
      uk: "Швидкий і безпечний обмін USDT на готівкові долари та євро у Львові. Затишний VIP-офіс у Галицькому районі біля центру та доставка від $30 000.",
      ru: "Быстрый и безопасный обмен USDT на наличные доллары и евро во Львове. Уютный VIP-офис в Галицком районе возле центра и доставка от $30 000.",
      en: "Fast and secure USDT exchange for cash USD and EUR in Lviv. Private VIP desk in Halytskyi district near city center and delivery from $30,000.",
    },
    quickFacts: [
      {
        iconName: "pin",
        label: {
          uk: "Галицький район / Центр",
          ru: "Галицкий район / Центр",
          en: "Halytskyi / City Center",
        },
        note: {
          uk: "офіс за записом",
          ru: "офис по записи",
          en: "by appointment only",
        },
      },
      {
        iconName: "car",
        label: {
          uk: "Зручний під'їзд та паркінг",
          ru: "Удобный подъезд и паркинг",
          en: "Easy Access & Parking",
        },
        note: {
          uk: "кур'єр від $30 000",
          ru: "курьер от $30 000",
          en: "courier from $30,000",
        },
      },
      {
        iconName: "clock",
        label: {
          uk: "Операція за 15 хв",
          ru: "Сделка за 15 мин",
          en: "15 min deal",
        },
        note: {
          uk: "резерви USD та EUR",
          ru: "резервы USD и EUR",
          en: "USD & EUR reserves",
        },
      },
      {
        iconName: "shield",
        label: {
          uk: "Конфіденційність 100%",
          ru: "Конфиденциальность 100%",
          en: "100% Privacy",
        },
        note: {
          uk: "закритий доступ",
          ru: "закрытый доступ",
          en: "private access",
        },
      },
    ],
    popularPairs: [
      {
        from: "USDT",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#5ff6ba]",
      },
      {
        from: "USDT",
        to: "EUR",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#c7a7ff]",
      },
      {
        from: "USDT",
        to: "UAH",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#b3e2ff]",
      },
      {
        from: "BTC",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#b9fd94]",
      },
      {
        from: "Картка",
        to: "USDT",
        label: { uk: "Онлайн", ru: "Онлайн", en: "Online" },
        color: "bg-[#ffb3b3]",
      },
    ],
    seoArticle: {
      uk: {
        lead: "Львів як західний фінансовий та IT-хаб потребує високих стандартів роботи з готівкою: наявності великих резервів євро та доларів, конфіденційності та зручної логістики.",
        sections: [
          {
            title: "Розташування у Галицькому районі та зручний заїзд",
            content:
              "Наша каса у Львові знаходиться в Галицькому районі, у безпосередній близькості до історичного центру та площі Ринок. Локація обрана таким чином, щоб уникнути складних обмежень пішохідних зон та історичної бруківки — ви зможете зручно під'їхати автомобілем та скористатися приватним місцем для паркування.",
          },
          {
            title: "Постійні резерви готівкового євро (EUR)",
            content:
              "Через активні транскордонні розрахунки та поїздки до країн ЄС у Львові особливо популярний обмін стейблкоїнів на готівкове євро. Ми забезпечуємо постійний резерв купюр номіналом 50, 100 та 200 EUR без пошкоджень та печаток.",
          },
          {
            title: "Доставка інкасацією по Львівській області від $30 000",
            content:
              "Для клієнтів із великими обсягами (від $30 000) працює служба доставки готівки у супроводі охорони. Виїзд можливий по всьому Львову або в передмістя (Сокільники, Винники, Брюховичі).",
          },
        ],
      },
      ru: {
        lead: "Львовское отделение Lama Cash предоставляет услуги быстрого обмена криптовалют с акцентом на приватность и европейский уровень сервиса.",
        sections: [
          {
            title: "Локация в Галицком районе",
            content:
              "Офис расположен в Галицком районе вблизи центра с удобным подъездом на авто в обход пешеходных ограничений брусчатки.",
          },
          {
            title: "Высокие резервы наличного евро",
            content:
              "В наличии всегда крупные суммы в EUR и новых долларах США для IT-специалистов и предпринимателей.",
          },
          {
            title: "Инкассация от $30 000",
            content:
              "Адресная доставка с охраной доступна по всему Львову при сумме сделки от $30 000.",
          },
        ],
      },
      en: {
        lead: "Lviv crypto operations with Lama Cash provide fast digital cash settlement with dedicated EUR reserves and discreet branch access.",
        sections: [
          {
            title: "Halytskyi district location with easy vehicle access",
            content:
              "Positioned near Rynok Square in Halytskyi district, our branch allows direct car access bypassing historic cobblestone pedestrian zones.",
          },
          {
            title: "Ample EUR and USD banknote reserves",
            content:
              "Given the proximity to the EU border, we maintain strong liquidity in crisp 50/100/200 EUR and new USD series notes.",
          },
          {
            title: "Cash courier transport from $30,000",
            content:
              "Guarded delivery across all of Lviv and nearby towns is available for deals starting from $30,000.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Як зручно дістатися офісу в центрі Львова поруч із площею Ринок?",
          answer:
            "Офіс розташований у Галицькому районі з комфортним заїздом в обхід пішохідних зон та бруківки. Поруч із будівлею є зручне місце для паркування автомобіля, координати якого надсилає менеджер.",
        },
        {
          question: "Чи є у Львові стабільний резерв готівкового євро (EUR)?",
          answer:
            "Так, враховуючи прикордонне розташування та запити клієнтів, у львівському відділенні завжди є значний резерв готівкових євро та доларів нового зразка.",
        },
        {
          question: "Чи можлива кур'єрська доставка готівки у Львові?",
          answer:
            "Так, адресна доставка автокур'єром з охороною доступна для сум від $30 000 у будь-який район Львова та передмістя.",
        },
        {
          question: "Чому адреса львівської каси не опублікована відкрито на сайті?",
          answer:
            "Всі відділення Lama Cash знаходяться в центрі міст, але прийом здійснюється виключно за попереднім записом у Telegram для повної безпеки коштів та приватності клієнтів.",
        },
      ],
      ru: [
        {
          question: "Как подъехать к офису в центре Львова возле площади Рынок?",
          answer:
            "Офис находится в Галицком районе с удобным подъездом на авто без пешеходных ограничений старого города. Парковочное место согласовывается с менеджером.",
        },
        {
          question: "Есть ли во Львове резерв наличных евро (EUR)?",
          answer:
            "Да, в наличии всегда крупные резервы как USD нового образца, так и чистых банкнот EUR.",
        },
        {
          question: "Работает ли доставка курьером во Львове?",
          answer:
            "Да, доставка наличных с сопровождением осуществляется для сделок от $30 000 по предварительной договоренности.",
        },
      ],
      en: [
        {
          question: "How do I access the central Lviv office avoiding pedestrian zones?",
          answer:
            "Our Halytskyi district office provides smooth vehicular access avoiding cobblestone pedestrian restrictions, complete with nearby parking coordinated by your manager.",
        },
        {
          question: "Are cash EUR reserves readily available in Lviv?",
          answer:
            "Yes, we continuously maintain high liquidity in verified EUR and new series USD notes.",
        },
        {
          question: "Is courier cash delivery available in Lviv?",
          answer:
            "Yes, guarded car delivery is available across Lviv for transactions of $30,000 or greater.",
        },
      ],
    },
  },

  odesa: {
    slug: "odesa",
    cityName: {
      uk: "Одеса",
      ru: "Одесса",
      en: "Odesa",
    },
    inCity: {
      uk: "в Одесі",
      ru: "в Одессе",
      en: "in Odesa",
    },
    acrossCity: {
      uk: "по всій Одесі",
      ru: "по всей Одессе",
      en: "across all of Odesa",
    },
    cityGenitive: {
      uk: "Одесі",
      ru: "Одессе",
      en: "Odesa",
    },
    workingHours: {
      weekdays: "09:00 — 20:00",
      weekends: "10:00 — 20:00",
    },
    districts: [
      "Приморський (Центр)",
      "Аркадія",
      "Великий Фонтан",
      "Таїрова",
      "Черемушки",
      "Пересипський (Суворовський)",
    ],
    h1: {
      uk: "Надійний криптообмінник в Одесі",
      ru: "Надежный криптообменник в Одессе",
      en: "Reliable Crypto Exchange in Odesa",
    },
    leadText: {
      uk: "Обмін USDT, Bitcoin та Ethereum на готівку в Одесі. VIP-каса у Приморському районі (Аркадія), готівкові USD/EUR та адресна інкасація від $30 000.",
      ru: "Обмен USDT, Bitcoin и Ethereum на наличные в Одессе. VIP-касса в Приморском районе (Аркадия), наличные USD/EUR и адресная инкассация от $30 000.",
      en: "Exchange USDT, Bitcoin, and Ethereum for cash in Odesa. VIP desk in Prymorskyi district (Arcadia), USD/EUR cash liquidity, and delivery from $30,000.",
    },
    quickFacts: [
      {
        iconName: "pin",
        label: {
          uk: "Приморський / Аркадія",
          ru: "Приморский / Аркадия",
          en: "Prymorskyi / Arcadia",
        },
        note: {
          uk: "офіс за записом",
          ru: "офис по записи",
          en: "by appointment only",
        },
      },
      {
        iconName: "car",
        label: {
          uk: "Доставка до авто чи готелю",
          ru: "Доставка к авто или отелю",
          en: "Delivery to Hotel / Car",
        },
        note: {
          uk: "кур'єр від $30 000",
          ru: "курьер от $30 000",
          en: "courier from $30,000",
        },
      },
      {
        iconName: "clock",
        label: {
          uk: "Швидкість 15 хв",
          ru: "Скорость 15 мин",
          en: "15 min speed",
        },
        note: {
          uk: "без черг та очікування",
          ru: "без очередей и ожидания",
          en: "zero waiting time",
        },
      },
      {
        iconName: "shield",
        label: {
          uk: "Банківські детектори",
          ru: "Банковские детекторы",
          en: "Bank Grade Detectors",
        },
        note: {
          uk: "перевірка купюр 100%",
          ru: "проверка купюр 100%",
          en: "100% verified cash",
        },
      },
    ],
    popularPairs: [
      {
        from: "USDT",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#5ff6ba]",
      },
      {
        from: "USDT",
        to: "EUR",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#c7a7ff]",
      },
      {
        from: "USDT",
        to: "UAH",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#b3e2ff]",
      },
      {
        from: "BTC",
        to: "USD",
        label: { uk: "Готівка", ru: "Наличные", en: "Cash" },
        color: "bg-[#b9fd94]",
      },
      {
        from: "USD",
        to: "USDT",
        label: { uk: "Каса", ru: "Касса", en: "Desk" },
        color: "bg-[#ffb3b3]",
      },
    ],
    seoArticle: {
      uk: {
        lead: "Одеса — активне ділове місто, де швидкість і безпека готівкових розрахунків мають першорядне значення для бізнесу та приватних інвесторів.",
        sections: [
          {
            title: "Локація у Приморському районі поруч з Аркадією",
            content:
              "Наша каса розташована в центральній діловій частині Одеси — у Приморському районі біля Аркадії. Локація має зручний заїзд, комфортний паркінг та суворий пропускний режим для повної безпеки зустрічей.",
          },
          {
            title: "Доставка готівки в Аркадію, на Фонтан та в готелі",
            content:
              "Для операцій обсягом від $30 000 доступна адресна доставка кур'єром у супроводі охорони по всій Одесі: в апартаменти Аркадії, приватні резиденції на Фонтані або в готелі та офіси.",
          },
          {
            title: "Чисті купюри нового зразка USD та EUR",
            content:
              "В Одесі завжди підтримується резерв доларів США нового зразка («синій долар») та євро без потертостей, написів чи штампів. Кожна купюра проходить перевірку на оптичному та ультрафіолетовому обладнанні у вашій присутності.",
          },
        ],
      },
      ru: {
        lead: "Одесское представительство Lama Cash гарантирует конфиденциальный и оперативный обмен криптовалюты на наличные доллары и евро.",
        sections: [
          {
            title: "Локация в Приморском районе и Аркадии",
            content:
              "Офис расположен в Приморском районе Одессы с закрытой переговорной комнатой и профессиональными счетчиками валют.",
          },
          {
            title: "Доставка от $30 000 в Аркадию и на Фонтан",
            content:
              "Для сумм от $30 000 работает служба адресной доставки в жилые комплексы, отели и офисы по всей Одессе с охраной.",
          },
          {
            title: "Гарантия подлинности банкнот",
            content:
              "Мы работаем исключительно с идеальными купюрами USD и EUR без повреждений и штампов.",
          },
        ],
      },
      en: {
        lead: "Fast and reliable crypto cash operations in Odesa with private desks in Prymorskyi district and prompt delivery.",
        sections: [
          {
            title: "Prymorskyi district & Arcadia location",
            content:
              "Our Odesa VIP office operates in the coastal business sector of Prymorskyi district / Arcadia with restricted verified access.",
          },
          {
            title: "Direct delivery to Arcadia and Fontan residences from $30,000",
            content:
              "We provide secure cash courier transport directly to your hotel, residence, or office across all of Odesa for amounts of $30,000 and above.",
          },
          {
            title: "Verified new series banknotes",
            content:
              "Reserves feature only pristine new USD series and EUR notes authenticated on multi-channel detectors.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Чи можлива доставка готівки в готелі або житлові комплекси в Аркадії чи на Фонтані?",
          answer:
            "Так, кур'єрська інкасація доступна для сум від $30 000 з прямою доставкою в апартаменти, готелі або офіси Аркадії, Великого Фонтану та будь-яких районів Одеси.",
        },
        {
          question: "Чи завжди є в наявності готівкові долари нового зразка та євро в Одесі?",
          answer:
            "Так, в одеській касі завжди підтримується запас банкнот нового зразка («синій долар») та євро у відмінному стані без слідів зношення чи штампів.",
        },
        {
          question: "Чому адреса каси в Приморському районі надається тільки після узгодження в Telegram?",
          answer:
            "Всі відділення Lama Cash знаходяться в центрі міста. Для захисту безпеки клієнтів і забезпечення конфіденційності вхід до каси здійснюється суворо за індивідуальним записом після підтвердження заявки.",
        },
        {
          question: "Скільки часу займає обмін у касі?",
          answer:
            "У середньому візит займає 15 хвилин: менеджер перераховує готівку на лічильнику з детекцією, ви надсилаєте криптовалюту, і після підтвердження транзакції ви отримуєте кошти.",
        },
      ],
      ru: [
        {
          question: "Возможна ли доставка в отели или жилые комплексы Аркадии и Фонтана?",
          answer:
            "Да, инкассаторская доставка с охраной осуществляется для сумм от $30 000 в отели, апартаменты и офисы Аркадии и Фонтана.",
        },
        {
          question: "Всегда ли в наличии доллары нового образца и евро?",
          answer:
            "Да, мы выдаем только банкноты нового образца без пометок и печатей с проверкой на детекторах.",
        },
        {
          question: "Почему адрес в Приморском районе предоставляется после заявки?",
          answer:
            "Офис расположен в центре города, однако доступ предоставляется индивидуально после согласования встречи в Telegram ради вашей безопасности.",
        },
      ],
      en: [
        {
          question: "Can cash be delivered to hotels or residences in Arcadia or Fontan?",
          answer:
            "Yes, private courier delivery with armed protection is available for amounts starting from $30,000 across Arcadia, Fontan, and all of Odesa.",
        },
        {
          question: "Are new series USD notes and EUR always in stock?",
          answer:
            "Yes, our Odesa cash desk consistently stocks verified new USD series and EUR bills verified on optical detectors.",
        },
        {
          question: "Why is the Prymorskyi district office address provided only via Telegram?",
          answer:
            "All branches are located in downtown districts, but operates by confirmed appointment only to protect customer privacy and security.",
        },
      ],
    },
  },
};

export function getAllCitySlugs(): string[] {
  return Object.keys(citiesConfig);
}

export function getCityConfig(slug: string): CityConfig | undefined {
  return citiesConfig[slug];
}
