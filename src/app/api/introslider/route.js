import pool from "../../../lib/db";

export async function GET(request) {
  try {
    const [rows] = await pool.query("SELECT * FROM introslider");
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
    const data = await request.json(); // Parsing JSON data from the request body

    // Assuming the data has properties 'title' and 'image_url', adjust according to your table structure
    const { title, content, link, image } = data;

    if (!title || !content || !link || !image) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const [result] = await pool.query(
      "INSERT INTO introslider (title, content,link,image) VALUES (?, ?,?,?)",
      [title, content, link, image]
    );

    return new Response(
      JSON.stringify({
        message: "Data inserted successfully",
        id: result.insertId,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error inserting data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
