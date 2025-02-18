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
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'درخواست مشاوره و خرید سایت در یونیکد',
    html: `
      <div style="font-family: yekan; color: #333; line-height: 1.6;direction:rtl">
        <h2 style="color: #9844F1; text-align: center;">درخواست مشاوره و خرید سایت در یونیکد</h2>
        <p style="font-size: 16px;">سلام،</p>
        <p style="font-size: 16px;">درخواست جدیدی برای مشاوره و خرید سایت ثبت شده است. جزئیات درخواست به شرح زیر است:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">نام:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">شماره تماس:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">پلن:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${type}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">نوع درخواست:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${selection}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">آدرس ایمیل:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${emailaddress}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">قالب انتخابی</td>
            <td style="padding: 10px; border: 1px solid #ddd;">
          <a href="https://unicodewebdesign.com/viewportfolio/${portfolioid}" >مشاهده </a>
           </td>
          </tr>
        </table>
        <p style="font-size: 16px; margin-top: 20px;">با تشکر،<br>تیم یونیکد</p>
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