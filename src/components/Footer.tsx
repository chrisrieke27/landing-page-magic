import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-foreground">
              IPO<span className="text-primary">InvestingHQ</span>
            </span>
          </a>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#faqs" className="hover:text-foreground transition-colors">FAQs</a>
            <a href="#meeting-content" className="hover:text-foreground transition-colors">Meeting Content</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 IPO Investing HQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
