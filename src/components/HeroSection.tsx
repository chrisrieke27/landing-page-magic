import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center">
        {/* Announcement Badge */}
        <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 mb-8 shadow-sm">
          <img src={logo} alt="IPO Investing HQ" className="h-5" />
          <span className="text-sm text-muted-foreground">
            A National Network of Business School Clubs.
          </span>
          <a
            href="/#about"
            className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
          >
            Learn more <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Heading */}
        <h1 className="font-extrabold tracking-tight leading-tight" style={{ color: "#1F5FA9", fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="md:hidden text-5xl">IPO Investing</span>
          <span className="hidden md:inline text-6xl lg:text-7xl">Start an IPO Investing Chapter<br />at Your Business School</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Learn about innovative companies through our interactive curriculum.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="px-14 py-8 text-xl md:text-2xl">
              Start a Chapter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
