import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  "Members pitch an upcoming IPO in one slide",
  "The best pitch from each chapter advances",
  "Chapter winners compete head-to-head on Zoom",
  "The national winner's IPO receives real capital from IPO Investing Inc.",
];

const logos = Array.from({ length: 10 }, (_, i) => ({
  name: `Company ${i + 1}`,
  src: null as string | null,
}));

const IPOFund = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-1 bg-[#0B1220] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
            {/* Left column */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The IPO Fund
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                Our flagship learning experience — pitch an IPO, win nationally, and we invest real capital.
              </p>

              <ol className="space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="text-base md:text-lg text-white/90 leading-relaxed pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right column — logo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-4"
                >
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain brightness-0 invert"
                    />
                  ) : (
                    <span className="text-white/40 text-xs font-medium text-center">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPOFund;
