import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import chapterIU from "@/assets/chapter-iu.png";
import chapterUT from "@/assets/chapter-ut.png";
import chapterAM from "@/assets/chapter-am.png";
import chapterSDSU from "@/assets/chapter-sdsu.png";
import chapterClemson from "@/assets/chapter-clemson.png";
import {
  CustomChapter,
  getChapterLogoUrl,
  loadCustomChapters,
} from "@/lib/customChapters";

const navLinks = [
  { label: "IPO Fund", href: "/ipo-fund" },
  { label: "IPO TV", href: "/ipo-tv" },
  { label: "Chapters", href: "/#chapters", hasDropdown: true },
  { label: "Resources", href: "/chapter-resources" },
  { label: "Contact", href: "/contact" },
];

const baseChapters = [
  { name: "IPO Investing at IU", logo: chapterIU, href: "/chapters/iu" },
  { name: "IPO Investing at UT", logo: chapterUT, href: "/chapters/ut" },
  { name: "IPO Investing at A&M", logo: chapterAM, href: "/chapters/am" },
  { name: "IPO Investing at SDSU", logo: chapterSDSU, href: "/chapters/sdsu" },
  { name: "IPO Investing at Clemson", logo: chapterClemson, href: "/chapters/clemson" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [customChapters, setCustomChapters] = useState<CustomChapter[]>([]);

  useEffect(() => {
    setCustomChapters(loadCustomChapters());
    const onUpdate = () => setCustomChapters(loadCustomChapters());
    window.addEventListener("storage", onUpdate);
    window.addEventListener("custom-chapters-updated", onUpdate);
    return () => {
      window.removeEventListener("storage", onUpdate);
      window.removeEventListener("custom-chapters-updated", onUpdate);
    };
  }, []);

  const allChapters = [
    ...baseChapters,
    ...customChapters.map((c) => ({
      name: c.name,
      logo: getChapterLogoUrl(c),
      href: `/chapters/${c.slug}`,
    })),
  ];

  const linkClass =
    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

  const renderLink = (
    link: { label: string; href: string },
    onClick?: () => void,
    className = linkClass
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
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <div className="w-72 bg-popover border border-border rounded-xl shadow-lg p-2">
                    {allChapters.map((ch) => (
                      <Link
                        key={ch.href}
                        to={ch.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <img
                          src={ch.logo}
                          alt={ch.name}
                          className="h-9 w-9 object-contain rounded bg-white border border-border/50 p-0.5 flex-shrink-0"
                        />
                        <span className="text-sm font-medium text-foreground">
                          {ch.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              renderLink(link)
            )
          )}
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
          {navLinks.map((link) => (
            <div key={link.label}>
              {renderLink(
                link,
                () => !link.hasDropdown && setMobileOpen(false),
                "block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              )}
              {link.hasDropdown && (
                <div className="pl-4 pb-2 space-y-1">
                  {allChapters.map((ch) => (
                    <Link
                      key={ch.href}
                      to={ch.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <img
                        src={ch.logo}
                        alt={ch.name}
                        className="h-6 w-6 object-contain rounded bg-white border border-border/50 p-0.5"
                      />
                      {ch.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
