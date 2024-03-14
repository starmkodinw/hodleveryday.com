/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hodleveryday.ghost.io',
                port: '',
                pathname: '/content/images/**',
            },
            {
                protocol: 'https',
                hostname: 'hodleveryday.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'public.bnbstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.workpointtoday.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 's2.coinmarketcap.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
