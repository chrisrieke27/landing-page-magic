import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus } from "lucide-react";

const steps = [
  "Members pitch an upcoming IPO in one slide",
  "The best pitch from each chapter advances",
  "Chapter winners compete head-to-head on Zoom",
  "The national winner's IPO receives real capital from IPO Investing Inc.",
];

const IPOFund = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0B1220] text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            The IPO Fund
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our flagship learning experience — pitch an IPO, win nationally, and we invest real capital.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#0B1220] text-white pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-[#13243f] to-[#0e1a30] hover:border-[#1F5FA9]/60 transition-colors"
              >
                <div
                  className="text-6xl md:text-7xl font-bold mb-4 leading-none"
                  style={{ color: "#1F5FA9" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50 mb-3">
                  Step {i + 1}
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Picks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1F5FA9" }}>
              Past Picks
            </h2>
            <p className="text-muted-foreground text-lg">
              Companies our members believed in — before the market did.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground/50 hover:border-[#1F5FA9]/50 hover:text-[#1F5FA9]/70 transition-colors"
              >
                <Plus className="h-8 w-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPOFund;
