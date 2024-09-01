import pool from "@/lib/db";

export async function POST(request) {
    try {
      const data = await request.json(); // Parsing JSON data from the request body
  
      // Assuming the data has properties 'title' and 'image_url', adjust according to your table structure
      const { title, link ,menuid} = data;
  
      if (!title || !link ) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
  
      const [result] = await pool.query(
        "INSERT INTO submenu (title,link,menuid) VALUES (?,?,?)",
        [title,link,menuid]
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
  