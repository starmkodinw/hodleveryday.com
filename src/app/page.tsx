import Link from "next/link";
import Nav from "./components/nav";
import { getPosts } from "./ghost/post";

export default async function Home() {
  const blogs = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p>Hello World!!!</p>
      <Nav />
      {blogs?.map((blog: any) => (
        <Link href={`/posts/${blog.slug}`} key={blog.id}>
          <div key={blog.id} className="mt-4">
            <h2>{blog.title}</h2>
            <p>Slug : {blog.slug}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
