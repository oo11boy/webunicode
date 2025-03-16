import pool from "../../../lib/db";

// دریافت همه دسته‌بندی‌ها (GET)
export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM categories");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطا در دریافت دسته‌بندی‌ها" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// اضافه کردن دسته‌بندی جدید (POST)
export async function POST(request) {
  try {
    const body = await request.json();
    const { text, link } = body;

    const [result] = await pool.query(
      "INSERT INTO categories (text, link) VALUES (?, ?)",
      [text, link]
    );

    return new Response(JSON.stringify({ id: result.insertId, text, link }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطا در ایجاد دسته‌بندی" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// ویرایش یک دسته‌بندی (PUT)
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, text, link } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: "شناسه دسته‌بندی الزامی است" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await pool.query("UPDATE categories SET text = ?, link = ? WHERE id = ?", [
      text,
      link,
      id,
    ]);

    return new Response(JSON.stringify({ id, text, link }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطا در ویرایش دسته‌بندی" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// حذف یک دسته‌بندی (DELETE)
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "شناسه دسته‌بندی الزامی است" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await pool.query("DELETE FROM categories WHERE id = ?", [id]);

    return new Response(JSON.stringify({ message: "دسته‌بندی با موفقیت حذف شد" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطا در حذف دسته‌بندی" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}