import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['eazyviral.com','t4.ftcdn.net'],
    },
};
 
export default withNextIntl(nextConfig);