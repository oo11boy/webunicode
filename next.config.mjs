/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unicodewebdesign.storage.iran.liara.space','res.cloudinary.com'],
  },
    reactStrictMode: true, // فعال‌سازی Strict Mode
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // تعریف متغیر محیطی
    },
  };
  
  export default nextConfig;
  