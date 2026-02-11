import { TrendingUp, Newspaper, Briefcase } from "lucide-react";

const focuses = [
  { icon: TrendingUp, label: "Initial Public\nOfferings" },
  { icon: Newspaper, label: "Current\nEvents" },
  { icon: Briefcase, label: "Professional\nDevelopment" },
];

const CoreFocus = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1F5FA9" }}>
            Core Focus
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {focuses.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm"
            >
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                <f.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground whitespace-pre-line">{f.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocus;
