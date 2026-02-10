import { Gift, Wrench, Heart } from "lucide-react";

const steps = [
  {
    icon: Gift,
    title: "Donate",
    description:
      "Contribute your unused electronics. We accept laptops, desktops, tablets, and more.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wrench,
    title: "Refurbish",
    description:
      "Our trained student volunteers inspect, repair, and restore each device to full working order.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Heart,
    title: "Distribute",
    description:
      "Refurbished devices are given to individuals and communities who need them most.",
    color: "bg-accent text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Our simple process transforms retired technology into opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
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
