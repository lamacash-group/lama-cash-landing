export type LocalizedContent = Record<string, string>;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: Record<string, string>;
  text: Record<string, string>;
}

export interface BenefitItem {
  kicker: Record<string, string>;
  title: Record<string, string>;
  text: Record<string, string>;
  color: string;
}

export interface ExchangeDirectionConfig {
  slug: string;
  giveCurrency: string;
  receiveCurrency: string;
  defaultRate: number;
  minAmount: number;
  reserve: string;
  speed: string;
  badge: Record<string, string>;
  h1: Record<string, string>;
  description: Record<string, string>;
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
  steps: StepItem[];
  benefits: BenefitItem[];
}

export const commonBenefits: BenefitItem[] = [
  {
    kicker: {
      uk: "Визнання",
      ru: "Признание",
      en: "Recognition",
    },
    title: {
      uk: "NcryptoAwards 2025",
      ru: "NcryptoAwards 2025",
      en: "NcryptoAwards 2025",
    },
    text: {
      uk: "Нагорода української криптоспільноти — підтвердження якості сервісу та довіри клієнтів.",
      ru: "Награда украинского криптосообщества — подтверждение качества сервиса и доверия клиентов.",
      en: "Ukrainian crypto community award confirming service quality and customer trust.",
    },
    color: "from-[#c7a7ff] to-[#e3e3e3]",
  },
  {
    kicker: {
      uk: "Досвід",
      ru: "Опыт",
      en: "Experience",
    },
    title: {
      uk: "3+ роки на ринку",
      ru: "3+ года на рынке",
      en: "3+ years on market",
    },
    text: {
      uk: "Понад 400 000 учасників спільноти знають Lama Cash як швидкий і передбачуваний обмін.",
      ru: "Более 400 000 участников сообщества знают Lama Cash как быстрый и надежный обмен.",
      en: "Over 400,000 community members choose Lama Cash for fast and predictable exchange.",
    },
    color: "from-[#b3e2ff] to-[#e3e3e3]",
  },
  {
    kicker: {
      uk: "Безпека",
      ru: "Безопасность",
      en: "Security",
    },
    title: {
      uk: "100% AML-перевірка",
      ru: "100% AML-проверка",
      en: "100% AML Checked",
    },
    text: {
      uk: "Перевіряємо кожну транзакцію до обміну, щоб мінімізувати ризики блокувань і брудних активів.",
      ru: "Проверяем каждую транзакцию до обмена, чтобы минимизировать риски блокировок.",
      en: "Every transaction is AML-verified before completion to eliminate blocked assets risk.",
    },
    color: "from-[#b9fd94] to-[#e3e3e3]",
  },
];

export const exchangeDirections: Record<string, ExchangeDirectionConfig> = {
  // PROFILE 1: CASH EXCHANGES
  "usdt-to-usd-cash": {
    slug: "usdt-to-usd-cash",
    giveCurrency: "USDT",
    receiveCurrency: "USD",
    defaultRate: 1.0,
    minAmount: 200,
    reserve: "$250 000+",
    speed: "15 хв",
    badge: {
      uk: "Видача за 15 хв • Кур'єр від $30 000",
      ru: "Выдача за 15 мин • Курьер от $30 000",
      en: "Payout in 15 min • Courier from $30,000",
    },
    h1: {
      uk: "Обмін USDT на готівку USD в Україні",
      ru: "Обмен USDT на наличные USD в Украине",
      en: "Exchange USDT to USD Cash in Ukraine",
    },
    description: {
      uk: "Безпечний вивід USDT у готівковий USD у касах Lama Cash (Київ, Львів, Одеса). Основна мережа TRC20. Мінімальна сума від $200, автодоставка від $30 000.",
      ru: "Безопасный вывод USDT в наличный USD в кассах Lama Cash (Киев, Львов, Одесса). Основная сеть TRC20. Минимум от $200, автодоставка от $30 000.",
      en: "Secure USDT withdrawal to cash USD at Lama Cash branches (Kyiv, Lviv, Odesa). Primary network TRC20. Minimum from $200, courier delivery from $30,000.",
    },
    seoArticle: {
      uk: {
        lead: "Вивід USDT у готівкові долари в Україні здійснюється через закриті VIP-каси в центрі міст або за допомогою служби інкасації. Ми гарантуємо перевірку кожної купюри на банківських детекторах та повну AML-чистоту цифрових активів.",
        sections: [
          {
            title: "Умови обміну та мінімальні ліміти",
            content:
              "Мінімальна сума для обміну USDT на готівкові долари становить $200 (або еквівалент). Базовою мережею для швидких розрахунків є TRC20 (Tether на Tron), проте за попереднім запитом менеджер може надати реквізити в мережах ERC20, Arbitrum, Polygon або TON.",
          },
          {
            title: "Кур'єрська доставка та інкасація від $30 000",
            content:
              "Для великих сум від $30 000 доступна опція доставки готівки броньованим авто у супроводі охорони. Послуга діє в межах Києва, Львова, Одеси та найближчих передмість після індивідуального підтвердження черговим менеджером.",
          },
          {
            title: "Як проходить видача доларів у касі",
            content:
              "Операція займає в середньому 15 хвилин. Ви приїжджаєте в офіс у погоджений слот, перераховуєте готівку на лічильнику з перевіркою детекторами валют і відправляєте USDT на надану менеджером адресу.",
          },
        ],
      },
      ru: {
        lead: "Вывод USDT в наличные доллары в Украине через закрытые VIP-отделения в центре Киева, Львова и Одессы или посредством защищенной автодоставки.",
        sections: [
          {
            title: "Условия и минимальная сумма сделки",
            content:
              "Минимальный порог обмена составляет $200. Основной блокчейн-сетью для переводов является TRC20 (другие сети, такие как ERC20 или Polygon, подключаются по запросу).",
          },
          {
            title: "Доставка инкассатором от $30 000",
            content:
              "Для объемов от $30 000 доступна адресная доставка наличных с вооруженным сопровождением по предварительному согласованию с менеджером.",
          },
        ],
      },
      en: {
        lead: "Cash out USDT to physical USD banknotes at secure private desks in central Kyiv, Lviv, and Odesa, or via dedicated cash transport.",
        sections: [
          {
            title: "Exchange parameters and network options",
            content:
              "Minimum exchange threshold is $200. The default settlement blockchain is TRC20, ensuring near-instant transfers and lowest network fees (ERC20/Polygon/TON upon request).",
          },
          {
            title: "Armored cash delivery from $30,000",
            content:
              "Dedicated courier delivery is available for orders starting from $30,000 across major Ukrainian metropolitan areas.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Яка мінімальна сума для отримання готівкових доларів?",
          answer:
            "Мінімальна сума для видачі готівки в офісі становить $200 (або еквівалент в USDT).",
        },
        {
          question: "У якій мережі здійснюється переказ USDT?",
          answer:
            "Основна та найшвидша мережа для розрахунків — TRC20. Також за запитом менеджер надасть реквізити в ERC20, Polygon або TON.",
        },
        {
          question: "З якої суми доступна адресна доставка кур'єром?",
          answer:
            "Доставка готівки автомобілем інкасації доступна для сум від $30 000 після погодження часу та адреси з менеджером.",
        },
        {
          question: "Скільки часу триває зустріч в офісі?",
          answer:
            "Стандартна процедура обміну займає близько 15 хвилин після підтвердження транзакції в блокчейні.",
        },
      ],
      ru: [
        {
          question: "Какая минимальная сумма обмена USDT на наличные USD?",
          answer:
            "Минимальная сумма составляет $200 (или эквивалент в USDT).",
        },
        {
          question: "В какой сети принимается USDT?",
          answer:
            "Основная сеть — TRC20. Сети ERC20, Polygon и TON доступны по запросу у менеджера.",
        },
        {
          question: "С какой суммы осуществляется доставка?",
          answer:
            "Инкассаторская доставка наличных курьером доступна для сумм от $30 000.",
        },
      ],
      en: [
        {
          question: "What is the minimum amount for USDT to USD cash exchange?",
          answer:
            "The minimum in-branch cash exchange amount is $200 (or equivalent in USDT).",
        },
        {
          question: "Which blockchain network is used by default?",
          answer:
            "TRC20 is our primary network for instant execution and minimal fees. ERC20, Polygon, and TON are available upon request.",
        },
        {
          question: "What is the courier delivery minimum?",
          answer:
            "Armored cash delivery is provided for orders starting from $30,000.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Заявка в Telegram",
          ru: "Заявка в Telegram",
          en: "Telegram Request",
        },
        text: {
          uk: "Вкажіть суму від $200 та місто — менеджер відповість за кілька хвилин.",
          ru: "Укажите сумму от $200 и город — менеджер ответит за несколько минут.",
          en: "Specify amount from $200 and target city — manager replies in minutes.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Фіксація курсу",
          ru: "Фиксация курса",
          en: "Locking Rate",
        },
        text: {
          uk: "Погоджуємо точний курс, суму до видачі та зручний час візиту.",
          ru: "Согласовываем точный курс, сумму к выдаче и время визита.",
          en: "Agree on the exact rate, payout sum, and time slot.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Зустріч в офісі",
          ru: "Встреча в офисе",
          en: "Office Visit",
        },
        text: {
          uk: "Приїжджайте до безпечного центру у вибраному місті (або доставка від $30 000).",
          ru: "Приезжайте в закрытый офис в центре города (или доставка от $30 000).",
          en: "Visit our secure city center branch (or courier from $30,000).",
        },
      },
      {
        number: "04",
        title: {
          uk: "Отримання готівки",
          ru: "Получение наличных",
          en: "Cash Collection",
        },
        text: {
          uk: "Переказуйте USDT у мережі TRC20 та одразу забирайте перевірені USD.",
          ru: "Переводите USDT в сети TRC20 и сразу забирайте проверенные USD.",
          en: "Transfer USDT via TRC20 and immediately collect counted USD cash.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  "usd-cash-to-usdt": {
    slug: "usd-cash-to-usdt",
    giveCurrency: "USD",
    receiveCurrency: "USDT",
    defaultRate: 1.0,
    minAmount: 200,
    reserve: "300 000+ USDT",
    speed: "15 хв",
    badge: {
      uk: "Купівля USDT від $200 • Мережа TRC20",
      ru: "Покупка USDT от $200 • Сеть TRC20",
      en: "Buy USDT from $200 • TRC20 network",
    },
    h1: {
      uk: "Купівля USDT за готівкові USD в Україні",
      ru: "Покупка USDT за наличные USD в Украине",
      en: "Buy USDT with Cash USD in Ukraine",
    },
    description: {
      uk: "Купівля Tether USDT за готівкові долари у відділеннях Lama Cash. Мінімальна сума від $200, доставка від $30 000. Миттєве зарахування на гаманець у мережі TRC20.",
      ru: "Покупка Tether USDT за наличные доллары в кассах Lama Cash. Минимальная сумма от $200, доставка от $30 000. Моментальное зачисление в сети TRC20.",
      en: "Buy Tether USDT with cash USD at Lama Cash branches. Minimum from $200, delivery from $30,000. Instant wallet crediting via TRC20.",
    },
    seoArticle: {
      uk: {
        lead: "Купівля криптовалюти за готівку — швидкий спосіб поповнити баланс некастодіального або біржового гаманця без банківських фінмоніторингів та лімітів.",
        sections: [
          {
            title: "Як проходить купівля USDT за долари",
            content:
              "Ви передаєте готівковий USD у касі, де купюри перевіряються на лічильнику валют. Одразу після цього менеджер відправляє еквівалентну суму USDT на ваш гаманець у мережі TRC20 (або іншій узгодженій мережі). Мінімальний поріг — $200.",
          },
          {
            title: "Інкасація готівки від $30 000",
            content:
              "Якщо ви плануєте велику угоду від $30 000, команда інкасації виїжджає на заздалегідь узгоджену адресу у вашому місті з мобільним лічильником валют.",
          },
        ],
      },
      ru: {
        lead: "Покупка криптовалюты за наличные доллары в Украине без очередей и посредников.",
        sections: [
          {
            title: "Минимальный порог и процедура",
            content:
              "Сумма сделки начинается от $200. Перевод USDT осуществляется в сети TRC20 сразу после пересчета банкнот.",
          },
        ],
      },
      en: {
        lead: "Acquire Tether USDT with cash USD directly into your non-custodial wallet.",
        sections: [
          {
            title: "Transaction requirements",
            content:
              "Minimum exchange volume is $200. Fast blockchain dispatch via TRC20 network ensures instant balance credit.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Яка мінімальна сума купівлі USDT за долари?",
          answer: "Мінімальна сума купівлі становить від $200.",
        },
        {
          question: "Чи можна замовити виїзд інкасатора?",
          answer:
            "Так, кур'єрська інкасація доступна для угод від $30 000.",
        },
      ],
      ru: [
        {
          question: "Какая минимальная сумма покупки USDT?",
          answer: "Минимальная сумма покупки составляет $200.",
        },
      ],
      en: [
        {
          question: "What is the minimum volume to buy USDT with cash?",
          answer: "The minimum purchase volume is $200.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Повідомте суму",
          ru: "Сообщите сумму",
          en: "Specify Amount",
        },
        text: {
          uk: "Вкажіть суму від $200 та адресу гаманця TRC20.",
          ru: "Укажите сумму от $200 и адрес кошелька TRC20.",
          en: "Specify amount from $200 and TRC20 address.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Візит або доставка",
          ru: "Визит или доставка",
          en: "Visit or Delivery",
        },
        text: {
          uk: "Завітайте до каси або замовте інкасацію від $30 000.",
          ru: "Приезжайте в кассу или закажите инкассацию от $30 000.",
          en: "Visit the branch or order cash collection from $30,000.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Перевірка купюр",
          ru: "Проверка купюр",
          en: "Cash Verification",
        },
        text: {
          uk: "Перераховуємо долари через лічильник та детектор.",
          ru: "Пересчитываем доллары через детектор и счетчик.",
          en: "Dollars are counted and verified via detector.",
        },
      },
      {
        number: "04",
        title: {
          uk: "Миттєве зарахування",
          ru: "Мгновенное зачисление",
          en: "Instant Payout",
        },
        text: {
          uk: "USDT надходять на ваш гаманець одразу під час зустрічі.",
          ru: "USDT поступают на ваш кошелек прямо во время встречи.",
          en: "USDT arrives in your wallet right during the meeting.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  // PROFILE 2: CARD P2P EXCHANGES
  "usdt-to-uah-card": {
    slug: "usdt-to-uah-card",
    giveCurrency: "USDT",
    receiveCurrency: "UAH",
    defaultRate: 41.5,
    minAmount: 8000,
    reserve: "5 000 000+ UAH",
    speed: "15–30 хв",
    badge: {
      uk: "Monobank, PrivatBank, PUMB • Без блокувань",
      ru: "Monobank, PrivatBank, PUMB • Без блокировок",
      en: "Monobank, PrivatBank, PUMB • Anti-block safe",
    },
    h1: {
      uk: "Вивід USDT на картку UAH в Україні",
      ru: "Вывод USDT на карту UAH в Украине",
      en: "Exchange USDT to UAH Card in Ukraine",
    },
    description: {
      uk: "Швидкий P2P вивід USDT на картки українських банків (Monobank, PrivatBank, PUMB). Мінімальна сума від 8 000 UAH. Безпечні виплати з анти-блок захистом.",
      ru: "Быстрый P2P вывод USDT на карты украинских банков (Monobank, PrivatBank, PUMB). Минимум от 8 000 UAH. Безопасные выплаты с анти-блок защитой.",
      en: "Fast P2P USDT withdrawal to Ukrainian bank cards (Monobank, PrivatBank, PUMB). Minimum from 8,000 UAH. Safe payouts with anti-block guidelines.",
    },
    seoArticle: {
      uk: {
        lead: "Вивід криптовалюти USDT на гривневу банківську картку здійснюється через перевірені P2P-канали, що гарантує захист рахунків від блокувань з боку фінмоніторингу українських банків.",
        sections: [
          {
            title: "Анти-блок стандарти та безпека банківських карток",
            content:
              "Щоб уникнути обмежень і блокувань за правилами НБУ, ми проводимо виплати виключно з чистих персональних рахунків. Для більших сум здійснюється акуратне дроблення платежів на транші без підозрілих призначень платежів.",
          },
          {
            title: "Ліміти та регламент зарахування",
            content:
              "Мінімальна сума заявки становить 8 000 UAH (еквівалент ~$200). Час обробки та повного зарахування коштів на картку становить від 15 до 30 хвилин після підтвердження транзакції в мережі TRC20.",
          },
        ],
      },
      ru: {
        lead: "Вывод USDT на карты Monobank, Приват24 и ПУМБ по безопасным P2P-стандартам.",
        sections: [
          {
            title: "Защита карт от блокировок финмониторинга",
            content:
              "Минимальная сумма обмена — 8 000 UAH. Платежи отправляются частями с чистых счетов без сомнительных комментариев к переводам.",
          },
        ],
      },
      en: {
        lead: "Direct P2P payouts from USDT to Ukrainian UAH bank cards with full compliance guidelines.",
        sections: [
          {
            title: "Anti-block standards and minimum limits",
            content:
              "Minimum exchange order is 8,000 UAH (~$200 equivalent). P2P transactions are executed within 15–30 minutes directly to your debit card.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Яка мінімальна сума виводу USDT на картку?",
          answer:
            "Мінімальна сума для виводу на гривневу картку становить 8 000 UAH.",
        },
        {
          question: "Скільки часу займає зарахування на картку?",
          answer:
            "Регламент обробки P2P-переказу становить 15–30 хвилин з моменту підтвердження транзакції в мережі.",
        },
        {
          question: "Чи є ризик блокування картки банком?",
          answer:
            "Ми суворо дотримуємося лімітів та анти-блок протоколів: відправляємо кошти з перевірених рахунків і за необхідності розбиваємо суму на комфортні транші.",
        },
      ],
      ru: [
        {
          question: "Какая минимальная сумма для вывода на карту?",
          answer: "Минимальный порог составляет 8 000 UAH.",
        },
        {
          question: "Сколько времени занимает зачисление?",
          answer: "Обработка P2P перевода занимает от 15 до 30 минут.",
        },
      ],
      en: [
        {
          question: "What is the minimum amount for UAH card withdrawal?",
          answer: "The minimum order amount is 8,000 UAH.",
        },
        {
          question: "How long does card settlement take?",
          answer: "Settlement takes between 15 and 30 minutes via P2P rails.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Вкажіть реквізити",
          ru: "Укажите реквизиты",
          en: "Card Details",
        },
        text: {
          uk: "Введіть суму від 8 000 UAH та номер картки банку.",
          ru: "Введите сумму от 8 000 UAH и номер карты банка.",
          en: "Provide payout amount from 8,000 UAH and 16-digit card number.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Отримайте адресу",
          ru: "Получите адрес",
          en: "Get Deposit Address",
        },
        text: {
          uk: "Менеджер надасть перевірену адресу TRC20 для переказу USDT.",
          ru: "Менеджер предоставит реквизиты TRC20 для перевода USDT.",
          en: "Manager provides verified TRC20 deposit address.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Відправка токенів",
          ru: "Отправка токенов",
          en: "Transfer Crypto",
        },
        text: {
          uk: "Переведіть потрібну суму зі свого криптогаманця.",
          ru: "Переведите нужную сумму со своего криптокошелька.",
          en: "Send tokens from your non-custodial or exchange wallet.",
        },
      },
      {
        number: "04",
        title: {
          uk: "Гривня на картці",
          ru: "Гривна на карте",
          en: "UAH Credited",
        },
        text: {
          uk: "Кошти надходять на вашу картку протягом 15–30 хвилин.",
          ru: "Деньги зачисляются на вашу карту за 15–30 минут.",
          en: "UAH arrives on your card within 15–30 minutes.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  "uah-card-to-usdt": {
    slug: "uah-card-to-usdt",
    giveCurrency: "UAH",
    receiveCurrency: "USDT",
    defaultRate: 0.024,
    minAmount: 8000,
    reserve: "200 000+ USDT",
    speed: "15–30 хв",
    badge: {
      uk: "Оплата з будь-якої картки UA • Від 8 000 UAH",
      ru: "Оплата с любой карты UA • От 8 000 UAH",
      en: "Any UA bank card • From 8,000 UAH",
    },
    h1: {
      uk: "Купівля USDT з банківської картки UAH",
      ru: "Покупка USDT с банковской карты UAH",
      en: "Buy USDT with UAH Bank Card",
    },
    description: {
      uk: "Купівля стейблкоїнів USDT з гривневої картки будь-якого українського банку. Мінімальна сума від 8 000 UAH, регламент 15–30 хв. Безпечний P2P-обмін.",
      ru: "Покупка стейблкоинов USDT с гривневой карты любого украинского банка. Минимум от 8 000 UAH, регламент 15–30 мин. Безопасный P2P-обмен.",
      en: "Buy USDT stablecoins using Ukrainian UAH bank cards. Minimum from 8,000 UAH, 15–30 min execution. Safe P2P exchange.",
    },
    seoArticle: {
      uk: {
        lead: "Купівля USDT з гривневої картки онлайн дозволяє швидко придбати стейблкоїни без поїздок до каси.",
        sections: [
          {
            title: "Правила безпечної оплати з картки",
            content:
              "Мінімальна сума замовлення становить 8 000 UAH. Переказ здійснюється через стандартні внутрішньобанківські платежі за інструкцією менеджера, що забезпечує стабільність транзакцій.",
          },
        ],
      },
      ru: {
        lead: "Покупка криптовалюты USDT с гривневой карты онлайн от 8 000 UAH.",
        sections: [
          {
            title: "Порядок проведения сделки",
            content:
              "Отправьте заявку, переведите гривну по полученным реквизитам и получите USDT на свой персональный кошелек за 15–30 минут.",
          },
        ],
      },
      en: {
        lead: "Purchase USDT online with Ukrainian debit or credit cards starting from 8,000 UAH.",
        sections: [
          {
            title: "P2P security guidelines",
            content:
              "Orders start from 8,000 UAH. Tokens are dispatched directly to your wallet once card transfer confirms.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Яка мінімальна сума для купівлі USDT з картки?",
          answer: "Мінімальна сума купівлі становить від 8 000 UAH.",
        },
      ],
      ru: [
        {
          question: "Какая минимальная сумма для покупки с карты?",
          answer: "Минимальная сумма покупки составляет от 8 000 UAH.",
        },
      ],
      en: [
        {
          question: "What is the minimum purchase with a card?",
          answer: "The minimum purchase order is 8,000 UAH.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Заповніть суму",
          ru: "Заполните сумму",
          en: "Enter Amount",
        },
        text: {
          uk: "Вкажіть суму від 8 000 UAH для обміну на USDT.",
          ru: "Укажите сумму от 8 000 UAH для обмена на USDT.",
          en: "Enter amount from 8,000 UAH to convert to USDT.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Отримайте картку",
          ru: "Получите карту",
          en: "Receive Details",
        },
        text: {
          uk: "Менеджер надасть реквізити для переказу гривні.",
          ru: "Менеджер выдаст реквизиты для перевода гривны.",
          en: "Manager shares verified card payment destination.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Оплата замовлення",
          ru: "Оплата заказа",
          en: "Submit Payment",
        },
        text: {
          uk: "Здійсніть переказ через мобільний додаток банку.",
          ru: "Сделайте перевод через банковское приложение.",
          en: "Send funds via your mobile banking app.",
        },
      },
      {
        number: "04",
        title: {
          uk: "Отримання USDT",
          ru: "Получение USDT",
          en: "Receive USDT",
        },
        text: {
          uk: "Токени надходять на ваш гаманець протягом 15–30 хвилин.",
          ru: "Токены поступают на ваш кошелек в течение 15–30 минут.",
          en: "Crypto tokens arrive directly within 15–30 minutes.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  // PROFILE 3: INTERNATIONAL PAYMENT SYSTEMS
  "paypal-to-usdt": {
    slug: "paypal-to-usdt",
    giveCurrency: "PAYPAL",
    receiveCurrency: "USDT",
    defaultRate: 0.96,
    minAmount: 1000,
    reserve: "150 000+ USDT",
    speed: "2–4 години (протягом робочого дня)",
    badge: {
      uk: "Тільки Personal Accounts • Від $1 000",
      ru: "Только Personal Accounts • От $1 000",
      en: "Personal Accounts Only • From $1,000",
    },
    h1: {
      uk: "Обмін PayPal на USDT",
      ru: "Обмен PayPal на USDT",
      en: "Exchange PayPal to USDT",
    },
    description: {
      uk: "Безпечний вивід коштів з PayPal на USDT. Мінімальна сума від $1 000, регламент 2–4 години. Тільки з особистих акаунтів (Personal Accounts).",
      ru: "Безопасный вывод средств с PayPal на USDT. Минимум от $1 000, регламент 2–4 часа. Только с личных аккаунтов (Personal Accounts).",
      en: "Secure PayPal balance conversion to USDT. Minimum $1,000, 2–4 hour processing. Personal accounts only.",
    },
    seoArticle: {
      uk: {
        lead: "Виведення балансу з платіжної системи PayPal у стейблкоїни USDT з дотриманням суворих вимог фінансової безпеки.",
        sections: [
          {
            title: "Сувора вимога: виключно особисті акаунти (Personal Accounts)",
            content:
              "УВАГА: Ми приймаємо перекази виключно з особистих акаунтів (Personal Accounts), зареєстрованих на ваше ім'я. Платежі від юридичних осіб (Business / Corporate Accounts) або від третіх сторін суворо не приймаються та повертаються відправнику з вирахуванням комісій платіжної системи.",
          },
          {
            title: "Регламент обробки та мінімальна сума",
            content:
              "Мінімальна сума для обміну PayPal на USDT становить $1 000. Час обробки заявки та виплати становить 2–4 години протягом робочого дня після фактичного надходження коштів на рахунок.",
          },
        ],
      },
      ru: {
        lead: "Вывод средств с баланса PayPal в криптовалюту USDT с соблюдением требований финансового контроля.",
        sections: [
          {
            title: "Требование: только личные аккаунты (Personal Accounts)",
            content:
              "ВАЖНО: Обмен производится только с личных аккаунтов (Personal Accounts). Платежи от юридических лиц или третьих сторон категорически не принимаются.",
          },
          {
            title: "Лимиты и регламент",
            content:
              "Минимальная сумма — $1 000. Срок обработки заявки составляет 2–4 часа в течение рабочего дня.",
          },
        ],
      },
      en: {
        lead: "Convert PayPal balance directly into Tether USDT safely and predictably.",
        sections: [
          {
            title: "Strict policy: Personal accounts only",
            content:
              "IMPORTANT: We only accept payments from Personal Accounts matching your verified identity. Payments from legal entities, corporate profiles, or third parties are strictly prohibited and will be rejected.",
          },
          {
            title: "Processing timeframe and limits",
            content:
              "The minimum transaction volume is $1,000. Standard execution window is 2–4 hours during regular business hours.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Чи можна надіслати кошти з корпоративного акаунту або від компанії?",
          answer:
            "Ні. Прийом коштів здійснюється тільки з особистих акаунтів (Personal Accounts). Платежі від юридичних осіб або третіх сторін не приймаються.",
        },
        {
          question: "Яка мінімальна сума обміну PayPal на USDT?",
          answer: "Мінімальна сума обміну становить $1 000.",
        },
        {
          question: "Скільки часу займає зарахування криптовалюти?",
          answer:
            "Регламент обробки становить 2–4 години протягом робочого дня після успішного підтвердження платежу в PayPal.",
        },
      ],
      ru: [
        {
          question: "Можно ли отправить платеж с бизнес-аккаунта компании?",
          answer:
            "Нет. Принимаются средства исключительно с личных аккаунтов (Personal Accounts). Платежи от юридических лиц или третьих сторон отклоняются.",
        },
        {
          question: "Какова минимальная сумма обмена PayPal?",
          answer: "Минимальная сумма составляет $1 000.",
        },
      ],
      en: [
        {
          question: "Can I send funds from a business or corporate PayPal profile?",
          answer:
            "No. Only payments from personal accounts are accepted. Transfers from legal entities or third parties are strictly rejected.",
        },
        {
          question: "What is the minimum exchange volume for PayPal?",
          answer: "The minimum exchange limit is $1,000.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Узгодьте деталі",
          ru: "Согласуйте детали",
          en: "Agree on terms",
        },
        text: {
          uk: "Вкажіть суму від $1 000 та підтвердіть особистий статус акаунту.",
          ru: "Укажите сумму от $1 000 и подтвердите личный статус аккаунта.",
          en: "Specify sum from $1,000 and confirm personal account status.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Отримайте email",
          ru: "Получите email",
          en: "Get PayPal email",
        },
        text: {
          uk: "Менеджер надасть актуальну адресу отримувача.",
          ru: "Менеджер выдаст действующий email для перевода.",
          en: "Manager supplies the designated recipient email.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Відправте платіж",
          ru: "Отправьте платеж",
          en: "Send payment",
        },
        text: {
          uk: "Здійсніть переказ безпосередньо у системі PayPal.",
          ru: "Совершите перевод внутри системы PayPal.",
          en: "Execute transfer inside the PayPal dashboard.",
        },
      },
      {
        number: "04",
        title: {
          uk: "Отримайте USDT",
          ru: "Получите USDT",
          en: "Receive USDT",
        },
        text: {
          uk: "Менеджер виплачує USDT протягом 2–4 годин робочого дня.",
          ru: "Менеджер выплачивает USDT в течение 2–4 часов рабочего дня.",
          en: "Receive USDT within 2–4 hours during the business day.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  "wise-to-usdt": {
    slug: "wise-to-usdt",
    giveCurrency: "WISE",
    receiveCurrency: "USDT",
    defaultRate: 0.985,
    minAmount: 1000,
    reserve: "180 000+ USDT",
    speed: "2–4 години (протягом робочого дня)",
    badge: {
      uk: "Тільки Personal Accounts • Від $1 000",
      ru: "Только Personal Accounts • От $1 000",
      en: "Personal Accounts Only • From $1,000",
    },
    h1: {
      uk: "Обмін Wise на USDT",
      ru: "Обмен Wise на USDT",
      en: "Exchange Wise to USDT",
    },
    description: {
      uk: "Швидкий обмін з Wise на USDT. Мінімальна сума від $1 000, регламент 2–4 години. Тільки з особистих акаунтів (Personal Accounts).",
      ru: "Быстрый обмен с Wise на USDT. Минимум от $1 000, регламент 2–4 часа. Только с личных аккаунтов (Personal Accounts).",
      en: "Fast Wise to USDT exchange. Minimum from $1,000, 2–4 hour window. Strictly Personal Accounts only.",
    },
    seoArticle: {
      uk: {
        lead: "Конвертація балансів Wise (EUR, USD) у стейблкоїни USDT з дотриманням правил платіжної платформи.",
        sections: [
          {
            title: "Суворе правило: тільки особисті рахунки (Personal Accounts)",
            content:
              "УВАГА: Обмін можливий виключно з особистих рахунків Wise (Personal Accounts). Платежі від компаній (Business Accounts) та від третіх осіб не приймаються.",
          },
          {
            title: "Ліміти та час зарахування",
            content:
              "Мінімальна сума становить $1 000. Час виконання операції — 2–4 години протягом робочого дня після успішного проходження платежу.",
          },
        ],
      },
      ru: {
        lead: "Обмен средств Wise в криптовалюту USDT по фиксированному регламенту.",
        sections: [
          {
            title: "Правило Personal Accounts",
            content:
              "Переводы принимаются исключительно с персональных аккаунтов. Платежи от юридических лиц не обрабатываются.",
          },
        ],
      },
      en: {
        lead: "Exchange Wise EUR and USD balances for USDT with full transparency.",
        sections: [
          {
            title: "Personal accounts rule",
            content:
              "Transfers are accepted strictly from verified Personal Accounts. Business/corporate transfers are strictly declined.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Чи можна відправити Wise з бізнес-рахунку компанії?",
          answer:
            "Ні, ми приймаємо платежі тільки з особистих акаунтів (Personal Accounts). Платежі від юридичних осіб або третіх сторін не приймаються.",
        },
        {
          question: "Яка мінімальна сума обміну Wise на USDT?",
          answer: "Мінімальна сума становить $1 000.",
        },
      ],
      ru: [
        {
          question: "Можно ли отправить Wise с бизнес-аккаунта?",
          answer:
            "Нет. Принимаются только переводы с личных счетов (Personal Accounts).",
        },
      ],
      en: [
        {
          question: "Can I transfer funds from a Wise Business profile?",
          answer:
            "No. Only Personal Accounts are eligible. Business transfers are not accepted.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Подайте заявку",
          ru: "Подайте заявку",
          en: "Submit request",
        },
        text: {
          uk: "Вкажіть суму від $1 000 та підтвердіть, що акаунт особистий.",
          ru: "Укажите сумму от $1 000 и подтвердите личный статус счета.",
          en: "Specify amount from $1,000 and confirm personal account.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Отримайте дані",
          ru: "Получите данные",
          en: "Wise details",
        },
        text: {
          uk: "Менеджер надасть реквізити без згадок криптовалюти.",
          ru: "Менеджер предоставит реквизиты без упоминания крипты.",
          en: "Manager provides verified Wise account details.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Переказ Wise",
          ru: "Перевод Wise",
          en: "Execute transfer",
        },
        text: {
          uk: "Виконайте внутрішній переказ зі свого особистого рахунку.",
          ru: "Совершите перевод со своего личного аккаунта.",
          en: "Send payment from your personal Wise balance.",
        },
      },
      {
        number: "04",
        title: {
          uk: "Отримання USDT",
          ru: "Получение USDT",
          en: "Get USDT",
        },
        text: {
          uk: "USDT надходять на ваш гаманець протягом 2–4 годин.",
          ru: "USDT отправляются на кошелек в течение 2–4 часов.",
          en: "USDT is dispatched within 2–4 hours during business hours.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  "payoneer-to-usdt": {
    slug: "payoneer-to-usdt",
    giveCurrency: "PAYONEER",
    receiveCurrency: "USDT",
    defaultRate: 0.97,
    minAmount: 1000,
    reserve: "200 000+ USDT",
    speed: "2–4 години (протягом робочого дня)",
    badge: {
      uk: "Тільки Personal Accounts • Від $1 000",
      ru: "Только Personal Accounts • От $1 000",
      en: "Personal Accounts Only • From $1,000",
    },
    h1: {
      uk: "Обмін Payoneer на USDT",
      ru: "Обмен Payoneer на USDT",
      en: "Exchange Payoneer to USDT",
    },
    description: {
      uk: "Виведення коштів з Payoneer на криптовалютний гаманець USDT. Від $1 000, регламент 2–4 години. Тільки з особистих акаунтів (Personal Accounts).",
      ru: "Вывод средств с Payoneer на криптокошелек USDT. От $1 000, регламент 2–4 часа. Только с личных аккаунтов (Personal Accounts).",
      en: "Withdraw Payoneer funds into USDT crypto wallets. From $1,000, 2–4 hour processing. Personal accounts only.",
    },
    seoArticle: {
      uk: {
        lead: "Виведення коштів з акаунтів Payoneer у стейблкоїни USDT для IT-фахівців та фрилансерів.",
        sections: [
          {
            title: "Вимога до акаунтів: виключно особисті (Personal Accounts)",
            content:
              "УВАГА: Оплата приймається виключно з особистих профілів Payoneer (Personal Accounts). Платежі від компаній або третіх осіб не обслуговуються.",
          },
          {
            title: "Мінімальна сума та терміни",
            content:
              "Мінімальний обсяг заявки — $1 000. Виплата USDT здійснюється протягом 2–4 годин після надходження коштів.",
          },
        ],
      },
      ru: {
        lead: "Вывод средств с Payoneer в USDT быстро и по правилам финансовой безопасности.",
        sections: [
          {
            title: "Только Personal Accounts",
            content:
              "Транзакции принимаются только с персональных аккаунтов фрилансеров и специалистов. Корпоративные платежи отклоняются.",
          },
        ],
      },
      en: {
        lead: "Directly transfer Payoneer balance into crypto USDT tokens.",
        sections: [
          {
            title: "Personal accounts policy",
            content:
              "Transactions are processed exclusively from verified Personal Accounts. Corporate/company balances are strictly not accepted.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Чи приймаються платежі від юридичних осіб або компаній?",
          answer:
            "Ні. Прийом коштів здійснюється тільки з особистих акаунтів (Personal Accounts). Платежі від компаній або третіх осіб не приймаються.",
        },
        {
          question: "Яка мінімальна сума для виведення з Payoneer?",
          answer: "Мінімальна сума становить $1 000.",
        },
      ],
      ru: [
        {
          question: "Принимаются ли платежи от юридических лиц?",
          answer:
            "Нет. Только с личных аккаунтов (Personal Accounts). Платежи от юридических лиц или третьих сторон не принимаются.",
        },
      ],
      en: [
        {
          question: "Can I transfer funds from a business Payoneer profile?",
          answer:
            "No. Only personal profiles are supported. Transfers from third parties or corporate entities will be declined.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Вкажіть суму",
          ru: "Укажите сумму",
          en: "Specify sum",
        },
        text: {
          uk: "Вкажіть суму від $1 000 на особистому балансі Payoneer.",
          ru: "Укажите сумму от $1 000 на личном балансе Payoneer.",
          en: "Inform manager about amount from $1,000 on personal balance.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Отримайте email",
          ru: "Получите email",
          en: "Payoneer email",
        },
        text: {
          uk: "Отримайте перевірену адресу для функції Make a Payment.",
          ru: "Получите адрес для функции Make a Payment.",
          en: "Receive an active account email for Make a Payment.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Підтвердіть переказ",
          ru: "Подтвердите перевод",
          en: "Confirm transfer",
        },
        text: {
          uk: "Надішліть скріншот або ID транзакції у чат.",
          ru: "Отправьте подтверждение перевода в диалог.",
          en: "Share confirmation screenshot in Telegram chat.",
        },
      },
      {
        number: "04",
        title: {
          uk: "Зарахування USDT",
          ru: "Зачисление USDT",
          en: "Receive USDT",
        },
        text: {
          uk: "Менеджер виплачує еквівалент у USDT протягом 2–4 годин.",
          ru: "Менеджер выплачивает USDT в течение 2–4 часов.",
          en: "Manager transfers equivalent USDT within 2–4 hours.",
        },
      },
    ],
    benefits: commonBenefits,
  },

  "usdt-to-revolut": {
    slug: "usdt-to-revolut",
    giveCurrency: "USDT",
    receiveCurrency: "REVOLUT",
    defaultRate: 0.99,
    minAmount: 1000,
    reserve: "150 000+ EUR",
    speed: "2–4 години (протягом робочого дня)",
    badge: {
      uk: "Тільки Personal Accounts • Від $1 000",
      ru: "Только Personal Accounts • От $1 000",
      en: "Personal Accounts Only • From $1,000",
    },
    h1: {
      uk: "Вивід USDT на Revolut",
      ru: "Вывод USDT на Revolut",
      en: "Exchange USDT to Revolut",
    },
    description: {
      uk: "Поповнення Revolut за рахунок USDT. Від $1 000, регламент 2–4 години. Тільки на особисті акаунти (Personal Accounts).",
      ru: "Пополнение Revolut за счет USDT. От $1 000, регламент 2–4 часа. Только на личные аккаунты (Personal Accounts).",
      en: "Top up Revolut using Tether USDT. From $1,000, 2–4 hour window. Strictly Personal Accounts only.",
    },
    seoArticle: {
      uk: {
        lead: "Обмін криптовалюти USDT на баланс Revolut у валютах EUR або USD з прямою відправкою на ваш особистий профіль.",
        sections: [
          {
            title: "Правило Personal Accounts",
            content:
              "УВАГА: Виплати здійснюються виключно на особисті профілі Revolut (Personal Accounts). Поповнення бізнес-рахунків компаній або рахунків третіх осіб не здійснюється.",
          },
          {
            title: "Мінімальний поріг та терміни",
            content:
              "Мінімальна сума операції — $1 000. Час зарахування становить 2–4 години протягом робочого дня після підтвердження надходження USDT.",
          },
        ],
      },
      ru: {
        lead: "Вывод USDT на карты и счета Revolut с соблюдением регламентов безопасности.",
        sections: [
          {
            title: "Выплаты только на личные аккаунты",
            content:
              "Выплаты производятся строго на персональные аккаунты Revolut (Revtag/IBAN). Бизнес-аккаунты не обслуживаются.",
          },
        ],
      },
      en: {
        lead: "Top up your Revolut EUR or USD balances instantly using Tether USDT.",
        sections: [
          {
            title: "Personal accounts only",
            content:
              "Funds are dispatched strictly to personal Revolut accounts. Business and third-party profiles are not eligible.",
          },
        ],
      },
    },
    faqs: {
      uk: [
        {
          question: "Чи можна поповнити Revolut Business моєї компанії?",
          answer:
            "Ні. Виплати здійснюються тільки на особисті акаунти (Personal Accounts). Платежі на юридичні особи або треті сторони не здійснюються.",
        },
        {
          question: "Яка мінімальна сума для поповнення Revolut?",
          answer: "Мінімальна сума становить $1 000.",
        },
      ],
      ru: [
        {
          question: "Возможен ли вывод на Revolut Business компании?",
          answer:
            "Нет. Выплаты осуществляются исключительно на персональные аккаунты (Personal Accounts).",
        },
      ],
      en: [
        {
          question: "Can I credit a Revolut Business account?",
          answer:
            "No. Transfers are made exclusively to personal Revolut accounts. Business accounts are not supported.",
        },
      ],
    },
    steps: [
      {
        number: "01",
        title: {
          uk: "Вкажіть Revtag",
          ru: "Укажите Revtag",
          en: "Enter Revtag",
        },
        text: {
          uk: "Надішліть свій особистий Revtag і суму від $1 000.",
          ru: "Отправьте свой личный Revtag и сумму от $1 000.",
          en: "Send your personal Revtag and sum from $1,000.",
        },
      },
      {
        number: "02",
        title: {
          uk: "Фіксація курсу",
          ru: "Фиксация курса",
          en: "Lock Rate",
        },
        text: {
          uk: "Погоджуємо умови та надаємо реквізити USDT.",
          ru: "Согласовываем курс и реквизиты для перевода USDT.",
          en: "Agree on final rate and obtain deposit wallet.",
        },
      },
      {
        number: "03",
        title: {
          uk: "Переказ USDT",
          ru: "Перевод USDT",
          en: "Send USDT",
        },
        text: {
          uk: "Переведіть активи у погодженій блокчейн-мережі (TRC20).",
          ru: "Переведите токены в сети TRC20.",
          en: "Send tokens within the chosen network (TRC20).",
        },
      },
      {
        number: "04",
        title: {
          uk: "Зарахування Revolut",
          ru: "Зачисление Revolut",
          en: "Revolut Credit",
        },
        text: {
          uk: "Кошти надходять на ваш баланс протягом 2–4 годин.",
          ru: "Деньги зачисляются на ваш счет в течение 2–4 часов.",
          en: "Funds appear on your personal Revolut balance within 2–4 hours.",
        },
      },
    ],
    benefits: commonBenefits,
  },
};

export function getAllExchangeSlugs(): string[] {
  return Object.keys(exchangeDirections);
}

export function getExchangeConfig(slug: string): ExchangeDirectionConfig | undefined {
  return exchangeDirections[slug];
}
