import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 mb-8 shadow-sm">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
            📈
          </span>
          <span className="text-sm text-muted-foreground">
            A National Network of Business School Clubs.
          </span>
          <a
            href="#about"
            className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
          >
            Learn more <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight max-w-4xl">
          Get Ready For the IPO Boom of the Century
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Join the premier network of business school clubs dedicated to IPO investing, research, and education.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Button variant="hero" size="lg" className="px-10 py-6 text-base">
            Start a Chapter Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
