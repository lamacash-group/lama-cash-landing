export type TranslationKeys =
    | 'verifyManager'
    | 'services'
    | 'media'
    | 'blog'
    | 'contacts'
    | 'faqs';

export interface NavItem {
    key: TranslationKeys;
    href: string;
    block?: ScrollLogicalPosition;
    hasShield?: boolean;
}

export const menuItems: NavItem[] = [
    { key: 'verifyManager', href: '/verify-manager', hasShield: true },
    { key: 'services', href: '#services', block: 'start' },
    { key: 'media', href: '#media', block: 'start' },
    { key: 'blog', href: '/blog', block: 'start' },
    { key: 'contacts', href: '/contacts' },
    { key: 'faqs', href: '#faqs', block: 'start' },
];

export const navItems = menuItems;

export const FALLBACK_TRANSLATIONS: Record<TranslationKeys, string> = {
    verifyManager: 'Перевірка менеджера',
    services: 'Послуги',
    media: 'Медіа',
    blog: 'Блог',
    contacts: 'Контакти',
    faqs: 'FAQs',
};
