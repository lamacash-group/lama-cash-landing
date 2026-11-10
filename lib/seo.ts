const BASE_URL = 'https://lama-cash.com';

/**
 * Normalizes any route path so it doesn't duplicate slashes or create trailing slashes.
 * e.g., '/' -> '', '/about' -> '/about', 'about' -> '/about'
 */
function normalizePath(path: string): string {
    if (!path || path === '/') return '';
    return path.startsWith('/') ? path : `/${path}`;
}

export function getCanonicalUrl(locale: string, path: string): string {
    const cleanPath = normalizePath(path);
    return locale === 'uk' ? `${BASE_URL}${cleanPath}` : `${BASE_URL}/${locale}${cleanPath}`;
}

export function getAlternateLanguages(path: string) {
    const cleanPath = normalizePath(path);
    return {
        uk: `${BASE_URL}${cleanPath}`,
        ru: `${BASE_URL}/ru${cleanPath}`,
        en: `${BASE_URL}/en${cleanPath}`,
        'x-default': `${BASE_URL}${cleanPath}`,
    };
}
