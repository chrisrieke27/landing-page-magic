import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
            <img src={logo} alt="IPO Investing HQ" className="h-7" />
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/#about" className="hover:text-foreground transition-colors">About</a>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/faqs" className="hover:text-foreground transition-colors">FAQs</Link>
            <Link to="/chapter-resources" className="hover:text-foreground transition-colors">Chapter Resources</Link>
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
