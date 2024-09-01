import pool from "../../../../lib/db";

export async function DELETE(request, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const [result] = await pool.query("DELETE FROM introslider WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: "introslider not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "introslider deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error deleting introslider" }),
      { status: 500 }
    );
  }
}
export async function PUT(request, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const data = await request.json();
    
    // فیلدهای به‌روزرسانی شده را آماده کنید
    let query = "UPDATE introslider SET ";
    let fields = [];
    let values = [];

    if (data.title) {
      fields.push("title = ?");
      values.push(data.title);
    }
    if (data.content) {
      fields.push("content = ?");
      values.push(data.content);
    }
    if (data.link) {
      fields.push("link = ?");
      values.push(data.link);
    }
    if (data.image) {
      fields.push("image = ?");
      values.push(data.image);
    }

    // اگر هیچ فیلدی برای به‌روزرسانی وجود نداشت، خطا برگردانید
    if (fields.length === 0) {
      return new Response(
        JSON.stringify({ error: "No fields provided for update" }),
        { status: 400 }
      );
    }

    // الحاق فیلدها به کوئری
    query += fields.join(", ") + " WHERE id = ?";
    values.push(id); // افزودن ID به انتهای آرایه مقادیر

    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: "introslider not found or no changes made" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "introslider updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error updating introslider" }),
      { status: 500 }
    );
  }
}
