import Head from "next/head";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aamir Khan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Script
        src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"
        type="module"
      />
      <Script
        src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"
        nomodule=""
        defer
      />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
