export default async function sitemap() {
    let data = await fetch(`${process.env.NEXT_PUBLIC_URL}/getallusers`)
    let result = await data.json()
    let sitedata = result.map((item)=>({
        url: `${process.env.NEXT_PUBLIC_URL}/${item.username}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
    }))
    return [
      {
        url: `${process.env.NEXT_PUBLIC_URL}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/login`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },...sitedata
    ]
  }