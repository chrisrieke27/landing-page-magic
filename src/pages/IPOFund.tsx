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

const portfolio = Array.from({ length: 10 }, (_, i) => ({
  name: `Company ${i + 1}`,
  logo: null as string | null,
}));

const LogoTile = ({ name, logo }: { name: string; logo: string | null }) => (
  <div className="aspect-square rounded-2xl bg-card border border-border/50 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
    {logo ? (
      <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
    ) : (
      <span className="text-muted-foreground text-sm font-medium text-center">{name}</span>
    )}
  </div>
);

const IPOFund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-20 pb-24" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ color: "#1F5FA9" }}
            >
              The IPO Fund
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Our Flagship Learning Experience
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {portfolio.map((c) => (
              <LogoTile key={c.name} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#1F5FA9" }}
            >
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each semester, members from every chapter compete in a 1-slide IPO
              stock pitch. The best advance to a national competition on Zoom —
              and the winner's pick receives real capital from IPO Investing Inc.
            </p>
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
            {portfolio.map((c) => (
              <div key={c.name} className="flex flex-col items-center">
                <LogoTile name={c.name} logo={c.logo} />
                <p
                  className="mt-3 text-base font-semibold text-foreground text-center"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {c.name}
                </p>
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
