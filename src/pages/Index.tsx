import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurChapters from "@/components/OurChapters";
import CoreFocus from "@/components/CoreFocus";
import HowItWorks from "@/components/HowItWorks";
import UpcomingIPOs from "@/components/UpcomingIPOs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OurChapters />
      <CoreFocus />
      <HowItWorks />
      <UpcomingIPOs />
      <Footer />
    </div>
  );
};

export default Index;
