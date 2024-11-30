import Head from 'next/head';
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import './globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhiteSpace - Project Management Platform</title>
        <meta 
          name="description" 
          content="Collaborative project management software" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
      <HeroSection />
      <Pricing />
      <Features />
      </main>
      <Footer />
     </div>
  );
}
