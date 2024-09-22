import pool from "@/lib/db";

export async function POST(request) {
    try {
      const data = await request.json();

      const { name, phone, email, portfolioid, type, selection, comdomain, extrahost } = data;
  
      if (!name || !phone || !email || !type || !portfolioid ) {
        
        
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
  
      const [result] = await pool.query(
        "INSERT INTO request_site (name, phone, email, portfolioid, type, selection, comdomain, extrahost) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [name, phone, email, portfolioid, type, selection, comdomain, extrahost]
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
    console.log('error', error);
      return new Response(JSON.stringify({ error: "Error inserting data" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }