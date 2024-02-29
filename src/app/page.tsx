import Link from "next/link";
import Nav from "./components/nav";
import { getPosts } from "./ghost/post";
import Affiliate from "./components/affiliate";

export default async function Home() {
  const blogs = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Nav />
      {blogs?.map((blog: any) => (
        <Link href={`/hodl/${blog.slug}`} key={blog.id}>
          <div key={blog.id} className="mt-4 mb-4">
            {/* <img src={blog.feature_image} alt={blog.title} /> */}
            <h2>{blog.title}</h2>
            {/* <p>Slug : {blog.slug}</p> */}
          </div>
        </Link>
      ))}
      <Affiliate />
    </main>
  );
}
