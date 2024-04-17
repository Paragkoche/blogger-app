/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "www.google.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
