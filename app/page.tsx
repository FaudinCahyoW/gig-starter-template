import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Feature } from "@/components/sections/feature";
import { About } from "@/components/sections/about";
import { Testimoni } from "@/components/sections/testimoni";
import { FrequentlyQuestion } from "@/components/sections/faq";
import {  CTABanner } from "@/components/sections/ctaBanner";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased">
      <Navbar/>
      <Hero/>
      <Feature/>
      <About/>
      <Testimoni/>
      <FrequentlyQuestion/>
      <CTABanner/>
      <Footer/>
    </main>
  );
}
