import pool from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM posts");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("GET Error:", error);
    return new Response(JSON.stringify({ error: "Error fetching data", details: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("POST Request Body:", body); // لاگ داده‌های ارسالی

    const { metatitle, metadescription, h1title, mainimg, text, keyword,link, shorttext, cat } = body;

    // اعتبارسنجی فیلدهای الزامی
    if (!metatitle || !metadescription || !h1title || !text || !keyword || !link || !shorttext) {
      return new Response(
        JSON.stringify({ error: "Missing required fields", details: "All fields except mainimg and cat are required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // تبدیل آرایه cat به رشته (مثلاً JSON یا با جداکننده)
    const catValue = Array.isArray(cat) ? JSON.stringify(cat) : cat || null;

    const [result] = await pool.query(
      "INSERT INTO posts (metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
      [metatitle, metadescription, h1title, mainimg || null, text, keyword, link, shorttext, catValue]
    );

    return new Response(
      JSON.stringify({
        id: result.insertId,
        metatitle,
        metadescription,
        h1title,
        mainimg,
        text,
        keyword,
        link,
        shorttext,
        cat: catValue,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(
      JSON.stringify({ error: "Error creating post", details: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    console.log("PUT Request Body:", body); // لاگ داده‌های ارسالی

    const { id, metatitle, metadescription, h1title, mainimg, text, keyword, link, shorttext, cat } = body;

    // اعتبارسنجی فیلدهای الزامی
    if (!id || !metatitle || !metadescription || !h1title || !text || !keyword || !link || !shorttext) {
      return new Response(
        JSON.stringify({ error: "Missing required fields", details: "ID and all fields except mainimg and cat are required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // تبدیل آرایه cat به رشته
    const catValue = Array.isArray(cat) ? JSON.stringify(cat) : cat || null;

    await pool.query(
      "UPDATE posts SET metatitle = ?, metadescription = ?, h1title = ?, mainimg = ?, text = ?, keyword = ?, link = ?, shorttext = ?, cat = ?, updated_at = NOW() WHERE id = ?",
      [metatitle, metadescription, h1title, mainimg || null, text, keyword, link, shorttext, catValue, id]
    );

    return new Response(
      JSON.stringify({
        id,
        metatitle,
        metadescription,
        h1title,
        mainimg,
        text,
        keyword,
        link,
        shorttext,
        cat: catValue,
        updated_at: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("PUT Error:", error);
    return new Response(
      JSON.stringify({ error: "Error updating post", details: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    console.log("DELETE Request ID:", id); // لاگ ID

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Missing ID" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    await pool.query("DELETE FROM posts WHERE id = ?", [id]);

    return new Response(
      JSON.stringify({ message: "Post deleted" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("DELETE Error:", error);
    return new Response(
      JSON.stringify({ error: "Error deleting post", details: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}