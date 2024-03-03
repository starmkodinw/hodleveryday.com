import Nav from "./components/nav";
import Footer from "./components/footer";
import Blogs from "./components/blogs";

export default async function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col mt-[115px] items-center justify-center w-full">
          <Blogs />
        </div>
      </main>
      <Footer />
    </>
  );
}
