import Nav from "./components/nav";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import Script from "next/script";

export default async function Home() {
  return (
    <>
      <Script id="CNIAO5BC77U9AKSGATD0" strategy="lazyOnload">
        {`
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
    )ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
        
          ttq.load('CNIAO5BC77U9AKSGATD0');
          ttq.page();
        }(window, document, 'ttq');
    `}
      </Script>
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
