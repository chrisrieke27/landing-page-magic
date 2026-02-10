import { Users, Globe, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Hands-On Meetings",
    description:
      "Interactive presentations, open discussion, and simulations that mirror real decision-making",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    title: "Real-World Focus",
    description:
      "Discussions centered on current events and how companies actually operate beyond textbook theory",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "IPO-Centered Learning",
    description:
      "Analysis of innovative companies before they go public and become the next breakout names",
    color: "bg-accent text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1F5FA9" }}>
            How IPO Investing is Different
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 ${step.color}`}
              >
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
