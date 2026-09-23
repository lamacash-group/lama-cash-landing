export interface Currency {
  id: string;
  name: string;
  ticker: string;
  category: "Валюта" | "Банки" | "Платіжні системи" | "Інші сервіси";
  iconPlaceholderColor: string;
  iconPath?: string;
}

export interface Location {
  id: string;
  country: string;
  city: string;
  category: "Україна" | "Країни ЄС" | "США" | "Азія";
  iconPlaceholderColor: string;
  iconPath?: string;
}

export const currencies: Currency[] = [
  { id: "1", name: "US Dollar", ticker: "USD", category: "Валюта", iconPlaceholderColor: "bg-blue-500", iconPath: "/rates/flag-united-states.png" },
  { id: "2", name: "Euro", ticker: "EUR", category: "Валюта", iconPlaceholderColor: "bg-green-500", iconPath: "/rates/flag-european-union.png" },
  { id: "3", name: "Ukrainian Hryvnia", ticker: "UAH", category: "Валюта", iconPlaceholderColor: "bg-yellow-400", iconPath: "/rates/flag-ukraine.png" },
  { id: "4", name: "Tether", ticker: "USDT", category: "Валюта", iconPlaceholderColor: "bg-teal-500", iconPath: "/rates/USDT.png" },
  { id: "5", name: "Bitcoin", ticker: "BTC", category: "Валюта", iconPlaceholderColor: "bg-orange-500", iconPath: "/rates/BTC.png" },
  { id: "6", name: "Ethereum", ticker: "ETH", category: "Валюта", iconPlaceholderColor: "bg-indigo-500", iconPath: "/rates/ETH.png" },
  { id: "7", name: "Tron", ticker: "TRX", category: "Валюта", iconPlaceholderColor: "bg-red-500", iconPath: "/rates/TRX.png" },
  { id: "8", name: "Wise", ticker: "WISE", category: "Платіжні системи", iconPlaceholderColor: "bg-green-600", iconPath: "/rates/WISE.png" },
  { id: "9", name: "Revolut", ticker: "REVOLUT", category: "Банки", iconPlaceholderColor: "bg-purple-600", iconPath: "/rates/REVOLUT.png" },
  { id: "10", name: "PayPal", ticker: "PAYPAL", category: "Платіжні системи", iconPlaceholderColor: "bg-blue-700", iconPath: "/rates/PAYPAL.png" },
  { id: "11", name: "Payoneer", ticker: "PAYONEER", category: "Платіжні системи", iconPlaceholderColor: "bg-orange-600", iconPath: "/rates/PAYONEER.png" },
];

export const locations: Location[] = [
  { id: "ua1", country: "Україна", city: "Київ", category: "Україна", iconPlaceholderColor: "bg-yellow-300", iconPath: "/rates/flag-ukraine.png" },
  { id: "ua2", country: "Україна", city: "Одеса", category: "Україна", iconPlaceholderColor: "bg-yellow-300", iconPath: "/rates/flag-ukraine.png"},
  { id: "ua3", country: "Україна", city: "Харків", category: "Україна", iconPlaceholderColor: "bg-yellow-300", iconPath: "/rates/flag-ukraine.png" },
  { id: "ua4", country: "Україна", city: "Львів", category: "Україна", iconPlaceholderColor: "bg-yellow-300", iconPath: "/rates/flag-ukraine.png" },
  { id: "ua5", country: "Україна", city: "Дніпро", category: "Україна", iconPlaceholderColor: "bg-yellow-300", iconPath: "/rates/flag-ukraine.png" },
  { id: "eu1", country: "Польща", city: "Варшава", category: "Країни ЄС", iconPlaceholderColor: "bg-red-400", iconPath: "/rates/flag-poland.png" },
  { id: "eu2", country: "Німеччина", city: "Берлін", category: "Країни ЄС", iconPlaceholderColor: "bg-black", iconPath: "/rates/flag-germany.png" },
  { id: "us1", country: "США", city: "Нью-Йорк", category: "США", iconPlaceholderColor: "bg-red-600", iconPath: "/rates/flag-united-states.png" },
  { id: "asia1", country: "ОАЕ", city: "Дубай", category: "Азія", iconPlaceholderColor: "bg-green-700", iconPath: "/rates/flag-united-arab.png" },
];
