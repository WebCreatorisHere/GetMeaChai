export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
          Disallow:"",
      },
      sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
    }
  }
