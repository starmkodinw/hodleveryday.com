import Nav from "./components/nav";
import { getPosts } from "./ghost/post";

export default async function Home() {
  const blogs = await getPosts();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p>Hello World!!!</p>
      <Nav />
      {blogs?.map((blog: any) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
        </div>
      ))
      }
    </main>
  );
}
