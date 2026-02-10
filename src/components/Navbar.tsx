import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
  { label: "Request Device", href: "#request" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Heart className="h-6 w-6 fill-primary" />
          <span className="text-foreground">
            Binary<span className="text-primary">Heart</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="nav" size="sm">
            Join Us
          </Button>
          <Button variant="navAccent" size="sm">
            Donate
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="nav" size="sm" className="flex-1">
              Join Us
            </Button>
            <Button variant="navAccent" size="sm" className="flex-1">
              Donate
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
