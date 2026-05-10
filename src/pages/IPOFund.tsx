import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Award, Video, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Trophy,
    title: "Chapter Competition",
    description: "Members pitch an upcoming IPO in one slide",
  },
  {
    icon: Award,
    title: "Chapter Winner Selected",
    description: "The best pitch from each chapter advances",
  },
  {
    icon: Video,
    title: "National Competition",
    description: "Chapter winners compete head-to-head on Zoom",
  },
  {
    icon: DollarSign,
    title: "We Invest",
    description:
      "The national winner's IPO receives real capital from IPO Investing Inc.",
  },
];

const portfolio = Array.from({ length: 10 }, (_, i) => `Company ${i + 1}`);

const IPOFund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1 — IPO Fund */}
      <section className="py-24" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-primary/10 text-primary"
          >
            Our Flagship Learning Experience
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "#1F5FA9" }}
          >
            IPO Fund
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            The IPO Fund is IPO Investing Inc.'s flagship learning experience.
            Each semester, members from each chapter compete in a 1-slide stock
            pitch on an upcoming IPO — and the national winner's pick receives
            real capital from IPO Investing Inc.'s national budget.
          </p>
        </div>
      </section>

      {/* Section 2 — How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1F5FA9" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {idx + 1}
                </div>
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 bg-primary/10 text-primary mt-2">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Our Portfolio */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1F5FA9" }}
            >
              Our Portfolio
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Companies our members believed in — before the market did.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {portfolio.map((name) => (
              <div
                key={name}
                className="aspect-square rounded-2xl bg-card border border-border/50 shadow-sm flex items-center justify-center text-muted-foreground text-sm font-medium hover:shadow-md transition-shadow"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Logo placeholders — upload final logos to replace.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPOFund;
