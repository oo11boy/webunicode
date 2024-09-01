import pool from "../../../../lib/db";

export async function DELETE(request, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const [result] = await pool.query("DELETE FROM submenu WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: "submenu not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "submenu deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error deleting submenu" }),
      { status: 500 }
    );
  }
}
