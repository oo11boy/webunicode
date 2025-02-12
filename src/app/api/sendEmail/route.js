import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // دریافت داده‌ها از درخواست
    const { email, name ,phone , type ,selection } = await request.json();

    // ایجاد transporter با استفاده از سرویس ایمیل (مثلاً Gmail)
// Email sending settings
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
      user: 'rswlq2503@gmail.com',
      pass: 'uyjw rpvn sqni yssg'
    }
  });
  

    // تنظیمات ایمیل
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // ایمیل مقصد
      subject: 'درخواست مشاوره و خرید سایت در یونیکد',
      text: `نام ${name},\n\n
      شماره ${phone},\n\n
      پلن ${type}
      نوع ${selection}
      `,
    };

    // ارسال ایمیل
    await transporter.sendMail(mailOptions);

    // پاسخ موفقیت‌آمیز
    return new Response(JSON.stringify({ message: 'ایمیل با موفقیت ارسال شد' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('خطا در ارسال ایمیل:', error);

    // پاسخ خطا
    return new Response(JSON.stringify({ message: 'خطا در ارسال ایمیل' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}