import pool from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM posts");
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

export async function POST(request) {
  try {
    const body = await request.json();
    const { metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat } = body;

    const [result] = await pool.query(
      "INSERT INTO posts (metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat]
    );

    return new Response(JSON.stringify({ id: result.insertId, ...body }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat } = body;

    await pool.query(
      "UPDATE posts SET metatitle = ?, metadescription = ?, h1title = ?, mainimg = ?, text = ?, keyword = ?, link = ?, shorttext = ?, cat = ? WHERE id = ?",
      [metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat, id]
    );

    return new Response(JSON.stringify({ id, ...body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error updating post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await pool.query("DELETE FROM posts WHERE id = ?", [id]);

    return new Response(JSON.stringify({ message: "Post deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error deleting post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}