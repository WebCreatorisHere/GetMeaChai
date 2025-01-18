import connectdb from "./db/connectdb";
import User from "./models/user";
export default async function sitemap() {
  try {
    await connectdb()
    let result = await User.find({}) 

    // Map the user data to sitemap entries
    const sitedata = result.map((item) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/${item.username}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.2,
    }));

    // Return the full sitemap array
    return [
      {
        url: `${process.env.NEXT_PUBLIC_URL}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/login`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      ...sitedata,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
