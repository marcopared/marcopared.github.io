const withBundleAnalyzer = require("@next/bundle-analyzer")({
 enabled: process.env.ANALYZE === "true",
});
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
 pageExtensions: ["jsx", "js"],
 env: {
  VERSION: process.env.npm_package_version,
 },
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: [
     {
      key: "Access-Control-Allow-Origin",
      value: "https://marcoparedes.vercel.app",
     },
     {
      key: "Access-Control-Allow-Methods",
      value: "GET,OPTIONS",
     },
     {
      key: "Access-Control-Allow-Headers",
      value: "Content-Type",
     },
     {
      key: "Referrer-Policy",
      value: "no-referrer",
     },
     {
      key: "X-Content-Type-Options",
      value: "nosniff",
     },
     {
      key: "X-DNS-Prefetch-Control",
      value: "on",
     },
     {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
     },
     {
      key: "Strict-Transport-Security",
      value: "max-age=31536000; includeSubDomains; preload",
     },
     {
      key: "Cache-Control",
      value: "public, max-age=21600, must-revalidate",
     },
     {
      key: "X-XSS-Protection",
      value: "1; mode=block",
     },
     {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=()",
     },
    ],
   },
   {
    source: "/(.*).xml",
    headers: [
     {
      key: "Content-Type",
      value: "application/xml",
     },
    ],
   },
   {
    source: "/(.*).json",
    headers: [
     {
      key: "Content-Type",
      value: "application/json",
     },
     {
      key: "Cache-Control",
      value: "public, max-age=604800, must-revalidate",
     },
    ],
   },
   {
    source: "/assets/(.*)",
    headers: [
     {
      key: "Cache-Control",
      value: "public, max-age=31536000, must-revalidate",
     },
    ],
   },
   {
    source: "/favicon.ico",
    headers: [
     {
      key: "Cache-Control",
      value: "public, max-age=31536000, must-revalidate",
     },
    ],
   },
  ];
 },
 async redirects() {
  return [
   {
    source: "/discord",
    destination: "https://discord.gg/uxtSMtd2xZ",
    permanent: true,
   },
   {
    source: "/twitter",
    destination: "https://twitter.com/marco_pared",
    permanent: true,
   },
   {
    source: "/instagram",
    destination: "https://www.instagram.com/marc.pared/",
    permanent: true,
   },
   {
    source: "/github",
    destination: "https://github.com/marcopared",
    permanent: true,
   },
   {
    source: "/r/:path*",
    destination: "/:path*",
    permanent: true,
   },
   {
    source: "/discord-server",
    destination: "/discord",
    permanent: true,
   },
   {
    source: "/feed.xml",
    destination: "/feed",
    permanent: true,
   },
  ];
 },
};

module.exports = () => {
 const plugins = [withContentlayer, withBundleAnalyzer];
 const config = plugins.reduce((acc, next) => next(acc), {
  ...nextConfig,
 });
 return config;
};
