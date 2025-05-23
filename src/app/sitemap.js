import { getPosts } from "@/lib/DataFetching";

const BASE_URL = "https://unicodewebdesign.com";

const staticRoutes = [
  {
    url: `${BASE_URL}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${BASE_URL}/landingpage`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${BASE_URL}/store`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/company`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/resume`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/Blogs`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
];

async function generateDynamicRoutes() {
  try {
    const posts = await getPosts();
    
    return posts.map((post) => ({
      url: `${BASE_URL}/blogs/${post.id}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Failed to fetch posts for sitemap:", error);
    return [];
  }
}

export default async function sitemap() {
  const dynamicRoutes = await generateDynamicRoutes();
  return [...staticRoutes, ...dynamicRoutes];
}