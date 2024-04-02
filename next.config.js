/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "6qqvulupxkymxmw6.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
