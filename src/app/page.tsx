import Nav from "./components/nav";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import AffiliateCard from "@/app/components/affiliateCard";

export default async function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col mt-[75px] items-center justify-center w-full">
        
            <div className="w-full md:w-[50%] lg:w-[40%] break-words">
              <AffiliateCard />
              <Blogs />
            </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
