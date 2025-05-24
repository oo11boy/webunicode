"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SEOAnalyzer = ({ formData }) => {
  const [seoScore, setSeoScore] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [issues, setIssues] = useState([]);

  // تابع برای حذف تگ‌های HTML و شمارش کلمات خالص
  const getPlainText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // تابع تحلیل سئو
  const analyzeSEO = () => {
    let score = 0;
    const newSuggestions = [];
    const newIssues = [];
    // استفاده از window.location برای hostname به دلیل محدودیت‌های useRouter
    // در صورت نیاز به hostname دقیق، می‌توانید از متغیر محیطی یا تنظیمات سرور استفاده کنید
    const hostname =
      typeof window !== "undefined"
        ? window.location.hostname
        : "unicodewebdesign.com";
    const textContent = formData.text || "";
    const plainText = getPlainText(textContent);
    const wordCount = plainText
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const keyword = formData.keyword?.toLowerCase().trim() || "";

    // 1. بررسی عنوان متا (15 امتیاز)
    const metaTitleLength = formData.metatitle?.length || 0;
    const keywordInMetaTitle =
      keyword && formData.metatitle?.toLowerCase().includes(keyword);
    if (metaTitleLength >= 50 && metaTitleLength <= 60 && keywordInMetaTitle) {
      score += 15;
    } else {
      if (metaTitleLength < 50 || metaTitleLength > 60) {
        newIssues.push(
          `طول عنوان متا ${metaTitleLength} کاراکتر است. باید بین 50 تا 60 کاراکتر باشد.`
        );
        newSuggestions.push("عنوان متا را به 50-60 کاراکتر تنظیم کنید.");
      }
      if (!keywordInMetaTitle && keyword) {
        newIssues.push("کلمه کلیدی در عنوان متا وجود ندارد.");
        newSuggestions.push(
          `کلمه کلیدی "${keyword}" را در ابتدای عنوان متا قرار دهید.`
        );
      }
    }

    // 2. بررسی توضیحات متا (15 امتیاز)
    const metaDescriptionLength = formData.metadescription?.length || 0;
    const keywordInMetaDescription =
      keyword && formData.metadescription?.toLowerCase().includes(keyword);
    if (
      metaDescriptionLength >= 150 &&
      metaDescriptionLength <= 160 &&
      keywordInMetaDescription
    ) {
      score += 15;
    } else {
      if (metaDescriptionLength < 150 || metaDescriptionLength > 160) {
        newIssues.push(
          `طول توضیحات متا ${metaDescriptionLength} کاراکتر است. باید بین 150 تا 160 کاراکتر باشد.`
        );
        newSuggestions.push("توضیحات متا را به 150-160 کاراکتر تنظیم کنید.");
      }
      if (!keywordInMetaDescription && keyword) {
        newIssues.push("کلمه کلیدی در توضیحات متا وجود ندارد.");
        newSuggestions.push(
          `کلمه کلیدی "${keyword}" را در توضیحات متا قرار دهید.`
        );
      }
    }

    // 3. بررسی کلمه کلیدی در متن (15 امتیاز)
    const keywordCount = keyword
      ? (plainText.toLowerCase().match(new RegExp(keyword, "g")) || []).length
      : 0;
    const keywordDensity = wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;
    const first100Words = plainText
      .split(/\s+/)
      .slice(0, 100)
      .join(" ")
      .toLowerCase();
    const keywordInFirst100 = keyword && first100Words.includes(keyword);
    if (keywordDensity >= 1 && keywordDensity <= 2 && keywordInFirst100) {
      score += 15;
    } else {
      if (keywordDensity < 1 || keywordDensity > 2) {
        newIssues.push(
          `تراکم کلمه کلیدی (${keywordDensity.toFixed(
            2
          )}%) در متن اصلی مناسب نیست. باید بین 1-2% باشد.`
        );
        newSuggestions.push(
          "تعداد استفاده از کلمه کلیدی را تنظیم کنید تا تراکم بین 1-2% باشد."
        );
      }
      if (!keywordInFirst100 && keyword) {
        newIssues.push("کلمه کلیدی در 100 کلمه اول متن وجود ندارد.");
        newSuggestions.push(
          `کلمه کلیدی "${keyword}" را در 100 کلمه اول متن قرار دهید.`
        );
      }
    }

    // 4. بررسی هدینگ‌ها (15 امتیاز)
    let h2Count = 0;
    let hasH3orH4 = false;
    const hasH1InEditor = /<h1\b[^>]*>/i.test(textContent);
    if (textContent) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(textContent, "text/html");
      h2Count = doc.querySelectorAll("h2").length;
      hasH3orH4 = doc.querySelectorAll("h3, h4").length > 0;
    }
    if (!hasH1InEditor && h2Count >= 1 && h2Count <= 10) {
      score += 10 + (hasH3orH4 ? 5 : 0);
    } else {
      if (hasH1InEditor) {
        newIssues.push(
          "تگ H1 در متن ادیتور استفاده شده است. این تگ نباید در متن اصلی باشد."
        );
        newSuggestions.push(
          "تگ H1 را از متن ادیتور حذف کنید و از H2 یا H3 استفاده کنید."
        );
      }
      if (h2Count === 0) {
        newIssues.push("هدینگ H2 در متن وجود ندارد.");
        newSuggestions.push("حداقل یک هدینگ H2 به متن اضافه کنید.");
      } else if (h2Count > 10) {
        newIssues.push(`تعداد هدینگ‌های H2 (${h2Count}) بیش از حد است.`);
        newSuggestions.push("تعداد هدینگ‌های H2 را به 1-10 کاهش دهید.");
      }
      if (!hasH3orH4) {
        newSuggestions.push(
          "از هدینگ‌های H3 یا H4 برای زیربخش‌ها استفاده کنید."
        );
      }
    }

    // 5. بررسی تصاویر (10 امتیاز)
    let hasImageInText = false;
    let hasMissingAlt = false;
    let isWebPFormat = formData.mainimg?.toLowerCase().endsWith(".webp");
    if (textContent) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(textContent, "text/html");
      const images = doc.querySelectorAll("img");
      hasImageInText = images.length > 0;
      hasMissingAlt = Array.from(images).some(
        (img) =>
          !img.hasAttribute("alt") || img.getAttribute("alt").trim() === ""
      );
    }
    if (
      hasImageInText &&
      !hasMissingAlt &&
      (formData.mainimg || textContent.includes("<img"))
    ) {
      score += 8 + (isWebPFormat ? 2 : 0);
    } else {
      if (!hasImageInText) {
        newIssues.push("هیچ تصویری در متن اصلی وجود ندارد.");
        newSuggestions.push("حداقل یک تصویر به متن اصلی اضافه کنید.");
      }
      if (hasMissingAlt) {
        newIssues.push("ویژگی Alt برای برخی تصاویر وجود ندارد یا خالی است.");
        newSuggestions.push("ویژگی Alt توصیفی برای تمام تصاویر تنظیم کنید.");
      }
      if (!isWebPFormat && formData.mainimg) {
        newSuggestions.push(
          "برای بهبود سرعت بارگذاری، از فرمت WebP برای تصویر اصلی استفاده کنید."
        );
      }
    }

    // 6. بررسی لینک‌ها (10 امتیاز)
    let hasInternalLink = false;
    let hasExternalLink = false;
    let hasNofollowExternal = false;
    if (textContent) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(textContent, "text/html");
      const links = doc.querySelectorAll("a[href]");
      Array.from(links).forEach((link) => {
        try {
          const linkUrl = new URL(link.href, window.location.origin);
          if (linkUrl.hostname === hostname) {
            hasInternalLink = true;
          } else if (linkUrl.protocol.startsWith("http")) {
            hasExternalLink = true;
            if (link.getAttribute("rel")?.includes("nofollow")) {
              hasNofollowExternal = true;
            }
          }
        } catch (e) {}
      });
    }
    if (hasInternalLink && hasExternalLink) {
      score += 8 + (hasNofollowExternal ? 2 : 0);
    } else {
      if (!hasInternalLink) {
        newIssues.push("لینک داخلی وجود ندارد.");
        newSuggestions.push(
          `حداقل یک لینک داخلی به آدرس‌های مرتبط با ${hostname} اضافه کنید.`
        );
      }
      if (!hasExternalLink) {
        newIssues.push("لینک خارجی وجود ندارد.");
        newSuggestions.push(
          "حداقل یک لینک خارجی معتبر به منابع مرتبط اضافه کنید."
        );
      }
      if (hasExternalLink && !hasNofollowExternal) {
        newSuggestions.push(
          "برای لینک‌های خارجی غیرمعتبر، از rel='nofollow' استفاده کنید."
        );
      }
    }

    // 7. بررسی ساختار URL (10 امتیاز)
    const slug = formData.slug || "";
    const isValidSlug =
      /^[a-z0-9-]+$/i.test(slug) &&
      slug.length <= 100 &&
      keyword &&
      slug.toLowerCase().includes(keyword);
    if (isValidSlug) {
      score += 10;
    } else {
      newIssues.push("ساختار URL مناسب نیست.");
      newSuggestions.push(
        `URL باید کوتاه، توصیفی، شامل کلمه کلیدی "${keyword}" و فقط حاوی حروف، اعداد و خط تیره باشد.`
      );
    }

    // 8. بررسی طول محتوا و UX (15 امتیاز)
    const hasShortParagraphs = plainText
      .split("\n")
      .every((para) => para.split(/\s+/).length <= 50);
    const hasLists = textContent.includes("<ul") || textContent.includes("<ol");
    const hasCTA =
      plainText.toLowerCase().includes("بیشتر بخوانید") ||
      plainText.toLowerCase().includes("اکنون") ||
      plainText.toLowerCase().includes("تماس بگیرید");
    if (wordCount >= 600 && hasShortParagraphs && hasLists && hasCTA) {
      score += 15;
    } else {
      if (wordCount < 600) {
        newIssues.push(
          `محتوای اصلی ${wordCount} کلمه است. باید حداقل 600 کلمه باشد.`
        );
        newSuggestions.push("محتوا را به حداقل 600 کلمه افزایش دهید.");
      }
      if (!hasShortParagraphs) {
        newIssues.push("پاراگراف‌ها طولانی هستند.");
        newSuggestions.push("پاراگراف‌ها را به حداکثر 3-4 جمله محدود کنید.");
      }
      if (!hasLists) {
        newSuggestions.push(
          "از لیست‌های شماره‌دار یا بولت‌دار برای خوانایی استفاده کنید."
        );
      }
      if (!hasCTA) {
        newSuggestions.push(
          "حداقل یک Call-to-Action (مثل 'بیشتر بخوانید') اضافه کنید."
        );
      }
    }

    // 9. بررسی داده‌های ساختارمند (5 امتیاز)
    const hasSchema =
      textContent.includes("application/ld+json") ||
      textContent.includes("itemscope");
    if (hasSchema) {
      score += 5;
    } else {
      newSuggestions.push(
        "داده‌های ساختارمند (مانند Schema Article یا FAQ) اضافه کنید."
      );
    }

    // 10. بررسی متن کوتاه (5 امتیاز)
    const shortTextLength = formData.shorttext?.length || 0;
    if (shortTextLength >= 100 && shortTextLength <= 200) {
      score += 5;
    } else {
      newIssues.push(
        `طول متن کوتاه ${shortTextLength} کاراکتر است. باید بین 100 تا 200 کاراکتر باشد.`
      );
      newSuggestions.push("متن کوتاه را به 100-200 کاراکتر تنظیم کنید.");
    }

    // اطمینان از اینکه امتیاز بین 0 و 100 باشد
    setSeoScore(Math.max(0, Math.min(score, 100)));
    setSuggestions(newSuggestions);
    setIssues(newIssues);
  };

  // تحلیل لحظه‌ای هنگام تغییر فرم یا متن ادیتور
  useEffect(() => {
    analyzeSEO();
  }, [formData]);

  return (
    <div className="bg-white hidden lg:block lg:!w-1/3 lg:!sticky lg:!top-0 lg:!h-screen lg:overflow-y-auto  w-full h-full rounded-lg shadow-lg border border-gray-200 p-6 mt-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">تحلیل سئو</h2>
      
      {/* نمایش امتیاز سئو */}
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          امتیاز سئو
        </label>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className={`h-4 rounded-full ${
              seoScore >= 80
                ? "bg-green-500"
                : seoScore >= 50
                ? "bg-yellow-500"
                : "bg-red-500"
            } transition-all duration-300`}
            style={{ width: `${seoScore}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">امتیاز: {seoScore}/100</p>
      </div>

      {/* نمایش مشکلات */}
      {issues.length > 0 && (
        <div className="mb-4">
          <h3 className="text-md font-semibold text-red-600">مشکلات سئو</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {issues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      )}

      {/* نمایش پیشنهادات */}
      {suggestions.length > 0 && (
        <div>
          <h3 className="text-md font-semibold text-blue-600">
            پیشنهادات بهبود
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SEOAnalyzer;
