import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    title: "Chapter Competition",
    description: "Members pitch an upcoming IPO in one slide",
  },
  {
    title: "Chapter Winner Selected",
    description: "The best pitch from each chapter advances",
  },
  {
    title: "National Competition",
    description: "Chapter winners compete head-to-head on Zoom",
  },
  {
    title: "We Invest",
    description:
      "The national winner's IPO receives real capital from IPO Investing Inc.",
  },
];

const portfolio = Array.from({ length: 10 }, (_, i) => ({
  name: `Company ${i + 1}`,
  logo: null as string | null,
}));

const LogoBox = ({
  name,
  logo,
  className = "",
}: {
  name: string;
  logo: string | null;
  className?: string;
}) => (
  <div
    className={`rounded-2xl bg-card border border-border/50 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow ${className}`}
  >
    {logo ? (
      <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
    ) : (
      <span className="text-muted-foreground text-sm font-medium text-center">
        {name}
      </span>
    )}
  </div>
);

const IPOFund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Section — Two Column */}
      <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
            {/* Left column */}
            <div>
              <h1
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{ color: "#1F5FA9" }}
              >
                The IPO Fund
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Our Flagship Learning Experience
              </p>

              <div className="space-y-5">
                {steps.map((step, idx) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — vertical logo stack */}
            <div className="flex flex-col gap-3 max-w-sm w-full mx-auto lg:mx-0 lg:ml-auto">
              {portfolio.map((c) => (
                <LogoBox
                  key={c.name}
                  name={c.name}
                  logo={c.logo}
                  className="h-20"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section — Our Portfolio */}
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
                <LogoBox name={c.name} logo={c.logo} className="aspect-square w-full" />
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
