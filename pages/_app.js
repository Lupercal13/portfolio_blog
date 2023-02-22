import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Quote from "@/components/Quote";

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <div className=" ">
        <Nav />

        <Component {...pageProps} />
        <Footer/>
      </div>


    </div>
  );
}
