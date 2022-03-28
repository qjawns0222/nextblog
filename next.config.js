/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/test",
        destination: "/ack",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
