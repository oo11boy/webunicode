// lib/generateSchema.js

export const generateArticleSchema = (post) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // URL پایه سایتت رو توی .env بذار
    const articleUrl = `${baseUrl}/blogs/${post.id}`; // URL داینامیک مقاله
  
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.h1title || "بدون عنوان",
      "description": post.metadescription || post.shorttext || "بدون توضیحات",
      "image": post.mainimg || "",
      "datePublished": post.datePublished || new Date().toISOString(),
      "dateModified": post.dateModified || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": post.author || "نویسنده پیش‌فرض"
      },
      "publisher": {
        "@type": "Organization",
        "name": "نام سایت شما", // اینو با نام واقعی سایتت عوض کن
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.jpg` // لوگوی سایتت رو بذار
        }
      },
      "keywords": post.keyword || "",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleUrl
      }
    };
  };