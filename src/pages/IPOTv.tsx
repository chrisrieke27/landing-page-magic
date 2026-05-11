import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IPOTv = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-24" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "#1F5FA9" }}
          >
            IPO TV
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Coming soon — video coverage of upcoming IPOs, member pitches, and national competitions.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IPOTv;
