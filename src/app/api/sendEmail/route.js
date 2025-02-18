import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // دریافت داده‌ها از درخواست
    const { email, name ,phone , type ,selection,emailaddress,portfolioid } = await request.json();

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
      to: email, 
      subject: 'درخواست مشاوره و خرید سایت در یونیکد',
      html: `
      <div style="font-family:yekan; font-size: 16px; color: #333;direction:rtl;">
        <p>اطلاعات درخواست به شرح زیر است:</p>
        <ul style="line-height: 1.6;">
          <li><strong>نام:</strong> ${name}</li>
          <li><strong>شماره تماس:</strong> ${phone}</li>
          <li><strong>پلن انتخابی:</strong> ${type}</li>
          <li><strong>نوع سایت:</strong> ${selection}</li>
          <li><strong>ایمیل:</strong> ${emailaddress}</li>
          <li><strong>قالب انتخابی:</strong> <a href="https://unicodewebdesign.com/viewportfolio/${portfolioid}">مشاهده قالب</a></li>
        </ul>
        <p>به زودی با شما تماس خواهیم گرفت تا جزئیات بیشتری را بررسی کنیم و شما را در مسیر ساخت وب‌سایت مورد نظرتان همراهی کنیم.</p>
        <p>با احترام،<br>تیم یونیکد</p>
      </div>
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