// app/api/data/route.js
import pool from '../../../lib/db';

export async function GET(request) {
  try {
    // Fetch mainmenu data
    const [mainMenuRows] = await pool.query('SELECT * FROM mainmenu');

    // Fetch submenu data
    const [subMenuRows] = await pool.query('SELECT * FROM submenu');
    // Create a map to easily find submenus by their menuid
    const submenuMap = subMenuRows.reduce((map, submenu) => {
      if (!map[submenu.menuid]) {
        map[submenu.menuid] = [];
      }
      map[submenu.menuid].push(submenu);
      return map;
    }, {});

    // Attach submenus to their corresponding mainmenu items
    const result = mainMenuRows.map(mainMenu => {
      const item = { ...mainMenu };
      if (submenuMap[mainMenu.id]) {
        item.submenu = submenuMap[mainMenu.id];
      }
      return item;
    });

    return new Response(JSON.stringify(result), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching data' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}



export async function POST(request) {
  try {
    const data = await request.json(); // Parsing JSON data from the request body

    // Assuming the data has properties 'title' and 'image_url', adjust according to your table structure
    const { title, link } = data;

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
      "INSERT INTO mainmenu (title,link) VALUES (?,?)",
      [title,link]
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
