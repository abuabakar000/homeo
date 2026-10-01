import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Specialties from '@/components/Specialties';
import ProductsAndDelivery from '@/components/ProductsAndDelivery';
import AboutDoctor from '@/components/AboutDoctor';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import FloatingMobileBar from '@/components/FloatingMobileBar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFCFB]">
      <Navbar />
      <Hero />
      <Specialties />
      <ProductsAndDelivery />
      <AboutDoctor />
      <LocationContact />
      <Footer />
      <FloatingMobileBar />
    </main>
  );
}
