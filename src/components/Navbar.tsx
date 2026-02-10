import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import logoHQ from "@/assets/logo-hq.png";
import logoIU from "@/assets/logo-iu.png";
import logoUT from "@/assets/logo-ut.png";
import logoAM from "@/assets/logo-am.png";
import logoSDSU from "@/assets/logo-sdsu.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Chapter Resources", href: "#chapter-resources" },
];

const chapters = {
  national: [
    { name: "IPO Investing HQ", logo: logoHQ },
  ],
  college: [
    { name: "IPO Investing at IU", logo: logoIU },
    { name: "IPO Investing at UT", logo: logoUT },
    { name: "IPO Investing at A&M", logo: logoAM },
    { name: "IPO Investing at SDSU", logo: logoSDSU },
  ],
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setChaptersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="IPO Investing HQ" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          {/* Our Chapters dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setChaptersOpen(!chaptersOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <img src={logoHQ} alt="" className="h-5 w-auto rounded" />
              Our Chapters
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${chaptersOpen ? "rotate-180" : ""}`} />
            </button>
            {chaptersOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-background border border-border rounded-lg shadow-lg z-50 py-3">
                <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">National</p>
                {chapters.national.map((ch) => (
                  <a key={ch.name} href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors">
                    <img src={ch.logo} alt="" className="h-7 w-auto rounded" />
                    <span className="text-sm font-medium text-foreground">{ch.name}</span>
                  </a>
                ))}

                <div className="my-2 border-t border-border" />

                <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">College Chapters</p>
                {chapters.college.map((ch) => (
                  <a key={ch.name} href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors">
                    <img src={ch.logo} alt="" className="h-7 w-auto rounded" />
                    <span className="text-sm font-medium text-foreground">{ch.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:flex">
          <Button variant="navAccent" size="sm">
            Start a Chapter
          </Button>
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
          {navLinks.slice(0, 2).map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}

          {/* Mobile chapters accordion */}
          <button
            onClick={() => setMobileChaptersOpen(!mobileChaptersOpen)}
            className="flex items-center gap-2 w-full py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <img src={logoHQ} alt="" className="h-5 w-auto rounded" />
            Our Chapters
            <ChevronDown className={`h-3.5 w-3.5 ml-auto transition-transform ${mobileChaptersOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileChaptersOpen && (
            <div className="pl-4 space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-1">National</p>
              {chapters.national.map((ch) => (
                <a key={ch.name} href="#" className="flex items-center gap-2 py-1.5 text-sm text-foreground">
                  <img src={ch.logo} alt="" className="h-6 w-auto rounded" />
                  {ch.name}
                </a>
              ))}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2">College Chapters</p>
              {chapters.college.map((ch) => (
                <a key={ch.name} href="#" className="flex items-center gap-2 py-1.5 text-sm text-foreground">
                  <img src={ch.logo} alt="" className="h-6 w-auto rounded" />
                  {ch.name}
                </a>
              ))}
            </div>
          )}

          {navLinks.slice(2).map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <Button variant="navAccent" size="sm" className="w-full">
            Start a Chapter
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
