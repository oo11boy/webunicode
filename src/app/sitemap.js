import { getPosts } from "@/lib/DataFetching";

export default async function sitemap() {
  const dataposts = await getPosts();
  const posts = dataposts.map((item) => ({
    url: `https://unicodewebdesign.com/blogs/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

 

  return [
    {
      url: `https://unicodewebdesign.com`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://unicodewebdesign.com/store`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `https://unicodewebdesign.com/company`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `https://unicodewebdesign.com/goodprice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
 
    {
      url: `https://unicodewebdesign.com/Blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...posts
  ];
}
