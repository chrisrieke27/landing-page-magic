import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurChapters from "@/components/OurChapters";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="chapters">
        <OurChapters />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
