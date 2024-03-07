import Nav from "./components/header";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import AffiliateCardSmall from "@/app/components/affiliateCardSmall";
import Coin from "./coin/coin";
import { DividerSmall } from "./components/divider";

export default async function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col mt-[75px] items-center justify-center w-full">
        
            <div className="w-full md:w-[50%] lg:w-[40%] break-words">
              <Coin symbol="BTC" />
              <Coin symbol="ETH" />
              <Coin symbol="BNB" />
              <Coin symbol="KUB" />
              <DividerSmall />
              <AffiliateCardSmall />
              <DividerSmall />
              <Blogs />
            </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
