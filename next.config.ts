import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    allowedDevOrigins: ['3e27-195-191-73-117.ngrok-free.app'],
};

const withNextIntl = createNextIntlPlugin(
    './request.ts'
);
export default withNextIntl(nextConfig);
