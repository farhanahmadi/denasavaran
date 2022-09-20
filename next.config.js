// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports =  {
  images: {
    domains: ["denasavaranapi.denasavaran-urmia.ir"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
