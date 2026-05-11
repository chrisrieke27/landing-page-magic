import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "IPO Fund", href: "/ipo-fund" },
  { label: "IPO TV", href: "/ipo-tv" },
  { label: "Chapters", href: "/#chapters" },
  { label: "Resources", href: "/chapter-resources" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderLink = (
    link: { label: string; href: string },
    onClick?: () => void,
    className = "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
  ) =>
    link.href.startsWith("/") && !link.href.includes("#") ? (
      <Link key={link.label} to={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    ) : (
      <a key={link.label} href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="IPO Investing HQ" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <div className="hidden md:flex">
          <Link to="/contact">
            <Button variant="navAccent" size="sm">
              Start a Chapter
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 space-y-1">
          {navLinks.map((link) =>
            renderLink(
              link,
              () => setMobileOpen(false),
              "block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            )
          )}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button variant="navAccent" size="sm" className="w-full">
              Start a Chapter
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
