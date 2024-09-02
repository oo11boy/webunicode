"use client"
import { useState } from 'react';
import axios from 'axios';

export function usePost(url) {
    const [data, setData] = useState(null); // برای ذخیره داده‌های موفقیت‌آمیز
    const [loading, setLoading] = useState(false); // برای وضعیت بارگذاری
    const [error, setError] = useState(null); // برای ذخیره خطاها

    const postData = async (payload) => {
        setLoading(true); // تنظیم وضعیت بارگذاری به true
        setError(null); // تنظیم خطا به null برای هر درخواست جدید

        try {
            const response = await axios.post(url, payload);
            setData(response.data); // ذخیره داده‌های موفقیت‌آمیز
        } catch (err) {
            setError(err); // ذخیره خطا در صورت بروز
        } finally {
            setLoading(false); // تنظیم وضعیت بارگذاری به false
        }
    };

    return { data, loading, error, postData };
}
