'use client'
import Navbar from "@/components/NavBar";
import AnimatedBackgroundV2 from './AnimatedBackground';
import Footer from "@/components/Footer";
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <AnimatedBackgroundV2 />
      {children}
      <Footer/>
    </>
  );
}