export async function GET() {
    const ACCESS_TOKEN = import.meta.env.INSTA_ACCESS_TOKEN;
    const USER_ID = import.meta.env.INSTA_USER_ID
    const INSTAGRAM_API_URL = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}&limit=10`;
  
    try {
        const response = await fetch(INSTAGRAM_API_URL);
        if (!response.ok) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch Instagram posts" }),
            { status: response.status, headers: { "Content-Type": "application/json" } }
        );
        }

        const data = await response.json();

        // **Filtrer pour ne garder que les photos**
        const filteredPhotos = data.data
        .filter((post:any) => post.media_type === "IMAGE" || "CAROUSEL_ALBUM") // pas les vidéos
        .slice(0, 6); // 6 dernières photos

        return new Response(JSON.stringify({ data: filteredPhotos }), {
        headers: { "Content-Type": "application/json" },
        });
  
    } catch (error) {
        return new Response(
        JSON.stringify({ error: "Internal Server Error", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
  }
  