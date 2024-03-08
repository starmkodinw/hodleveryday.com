import { MetadataRoute } from "next";
import { getPosts } from "./ghost/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getPosts();

    const postEntries: MetadataRoute.Sitemap = blogs.map(({ slug, created_at }: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
        lastModified: new Date(created_at),
        priority: 1,
      }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`,
            lastModified: new Date(),
            priority: 0.5,
        },
        ...postEntries
    ]
}