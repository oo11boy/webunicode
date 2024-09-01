import pool from "../../../lib/db";

export async function GET(request) {
  try {
    const [rows] = await pool.query("SELECT * FROM siteinfo");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    
    // فیلدهای به‌روزرسانی شده را آماده کنید
    let query = "UPDATE siteinfo SET ";
    let fields = [];
    let values = [];

    if (data.numberphone) {
      fields.push("numberphone = ?");
      values.push(data.numberphone);
    }
    if (data.site_title) {
      fields.push("site_title = ?");
      values.push(data.site_title);
    }
    if (data.site_description) {
      fields.push("site_description = ?");
      values.push(data.site_description);
    }
    if (data.logo_image) {
      fields.push("logo_image = ?");
      values.push(data.logo_image);
    }
    if (data.site_email) {
        fields.push("site_email = ?");
        values.push(data.site_email);
      }
      if (data.telegram) {
        fields.push("telegram = ?");
        values.push(data.telegram);
      }
      if (data.instagram) {
        fields.push("instagram = ?");
        values.push(data.instagram);
      }
      if (data.github) {
        fields.push("github = ?");
        values.push(data.github);
      }
      if (data.linkedin) {
        fields.push("linkedin = ?");
        values.push(data.linkedin);
      }
      


    // اگر هیچ فیلدی برای به‌روزرسانی وجود نداشت، خطا برگردانید
    if (fields.length === 0) {
      return new Response(
        JSON.stringify({ error: "No fields provided for update" }),
        { status: 400 }
      );
    }

    // الحاق فیلدها به کوئری
    query += fields.join(", ") + " WHERE id = 1";

    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: "siteinfo not found or no changes made" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "siteinfo updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error updating siteinfo" }),
      { status: 500 }
    );
  }
}
