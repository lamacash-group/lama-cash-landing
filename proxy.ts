import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'ru', 'en'],
  defaultLocale: 'uk',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/',
    '/(uk|ru|en)/:path*',
    '/((?!_next|_vercel|studio|.*\\..*).*)'
  ]
};
