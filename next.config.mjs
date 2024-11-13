/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  logging: {
    fetches: { fullUrl: true },
  },
};

export default withNextIntl(nextConfig);
