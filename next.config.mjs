/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // فعال‌سازی Strict Mode
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // تعریف متغیر محیطی
    },
  };
  
  export default nextConfig;
  