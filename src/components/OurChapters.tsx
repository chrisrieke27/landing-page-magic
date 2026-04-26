import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";
import chapterIU from "@/assets/chapter-iu.png";
import chapterUT from "@/assets/chapter-ut.png";
import chapterAM from "@/assets/chapter-am.png";
import chapterSDSU from "@/assets/chapter-sdsu.png";
import chapterClemson from "@/assets/chapter-clemson.png";
import logoHQ from "@/assets/logo-hq.png";

const ADMIN_PASSWORD = "IPO INVESTING";
const CUSTOM_CHAPTERS_KEY = "hq:customChapters";

type CustomChapter = {
  slug: string;
  name: string;
  shortName: string;
  logoDataUrl: string;
};

const baseChapters = [
  { name: "IPO Investing at IU", logo: chapterIU, href: "/chapters/iu" },
  { name: "IPO Investing at UT", logo: chapterUT, href: "/chapters/ut" },
  { name: "IPO Investing at A&M", logo: chapterAM, href: "/chapters/am" },
  { name: "IPO Investing at SDSU", logo: chapterSDSU, href: "/chapters/sdsu" },
  { name: "IPO Investing at Clemson", logo: chapterClemson, href: "/chapters/clemson" },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const loadCustom = (): CustomChapter[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_CHAPTERS_KEY);
    return raw ? (JSON.parse(raw) as CustomChapter[]) : [];
  } catch {
    return [];
  }
};

const OurChapters = () => {
  const navigate = useNavigate();
  const [customChapters, setCustomChapters] = useState<CustomChapter[]>([]);

  // Password modal state
  const [pwOpen, setPwOpen] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");

  // Admin panel state
  const [adminOpen, setAdminOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newLogoDataUrl, setNewLogoDataUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCustomChapters(loadCustom());
  }, []);

  const handlePwSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (pwInput === ADMIN_PASSWORD) {
      setPwOpen(false);
      setPwInput("");
      setPwError("");
      setAdminOpen(true);
    } else {
      setPwError("Incorrect password. Please try again.");
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setNewLogoDataUrl(String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const handleAddChapter = () => {
    const trimmed = newName.trim();
    if (!trimmed) {
      toast({ title: "Chapter name required", variant: "destructive" });
      return;
    }
    if (!newLogoDataUrl) {
      toast({ title: "Please upload a chapter logo", variant: "destructive" });
      return;
    }
    let slug = slugify(trimmed);
    if (!slug) slug = `chapter-${Date.now()}`;

    const existingSlugs = new Set([
      "iu",
      "ut",
      "am",
      "sdsu",
      "clemson",
      ...customChapters.map((c) => c.slug),
    ]);
    let unique = slug;
    let i = 2;
    while (existingSlugs.has(unique)) {
      unique = `${slug}-${i++}`;
    }

    const next: CustomChapter = {
      slug: unique,
      name: trimmed.startsWith("IPO Investing")
        ? trimmed
        : `IPO Investing at ${trimmed}`,
      shortName: trimmed.replace(/^IPO Investing( at)?\s*/i, "") || trimmed,
      logoDataUrl: newLogoDataUrl,
    };

    const updated = [...customChapters, next];
    setCustomChapters(updated);
    try {
      localStorage.setItem(CUSTOM_CHAPTERS_KEY, JSON.stringify(updated));
    } catch {
      /* ignore */
    }

    toast({ title: "Chapter added", description: `${next.name} is now live.` });
    setNewName("");
    setNewLogoDataUrl("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setAdminOpen(false);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1F5FA9" }}>
            Our Chapters
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* HQ admin tile */}
          <button
            type="button"
            onClick={() => {
              setPwError("");
              setPwInput("");
              setPwOpen(true);
            }}
            className="flex flex-col items-center text-center group focus:outline-none"
            aria-label="HQ admin panel"
          >
            <img
              src={logoHQ}
              alt="IPO Investing HQ"
              className="w-full max-w-[200px] aspect-square object-contain bg-white rounded-2xl shadow-sm border border-border/50 transition-transform group-hover:scale-105 group-hover:shadow-md p-4"
            />
          </button>

          {baseChapters.map((ch) => (
            <Link
              key={ch.name}
              to={ch.href}
              className="flex flex-col items-center text-center group"
            >
              <img
                src={ch.logo}
                alt={ch.name}
                className="w-full max-w-[200px] rounded-2xl shadow-sm border border-border/50 transition-transform group-hover:scale-105 group-hover:shadow-md"
              />
            </Link>
          ))}

          {customChapters.map((ch) => (
            <Link
              key={ch.slug}
              to={`/chapters/${ch.slug}`}
              className="flex flex-col items-center text-center group"
            >
              <img
                src={ch.logoDataUrl}
                alt={ch.name}
                className="w-full max-w-[200px] aspect-square object-contain bg-white rounded-2xl shadow-sm border border-border/50 transition-transform group-hover:scale-105 group-hover:shadow-md p-4"
              />
              <p className="mt-3 text-sm font-medium text-foreground">{ch.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Password modal */}
      <Dialog
        open={pwOpen}
        onOpenChange={(o) => {
          setPwOpen(o);
          if (!o) {
            setPwInput("");
            setPwError("");
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>PLEASE ENTER PASSWORD</DialogTitle>
            <DialogDescription>
              HQ admin access is required to manage chapters.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePwSubmit} className="space-y-2">
            <Input
              type="password"
              value={pwInput}
              onChange={(e) => {
                setPwInput(e.target.value);
                if (pwError) setPwError("");
              }}
              placeholder="Password"
              autoFocus
            />
            {pwError && <p className="text-sm text-destructive">{pwError}</p>}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setPwOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Admin panel modal */}
      <Dialog
        open={adminOpen}
        onOpenChange={(o) => {
          setAdminOpen(o);
          if (!o) {
            setNewName("");
            setNewLogoDataUrl("");
            if (fileInputRef.current) fileInputRef.current.value = "";
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>HQ Admin Panel</DialogTitle>
            <DialogDescription>Add a new chapter to the network.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chapter-logo">Upload Chapter Logo</Label>
              <Input
                id="chapter-logo"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
              />
              {newLogoDataUrl && (
                <img
                  src={newLogoDataUrl}
                  alt="Preview"
                  className="h-20 w-20 object-contain rounded-md border border-border bg-white p-2"
                />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="chapter-name">Chapter Name</Label>
              <Input
                id="chapter-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. IPO Investing at UCLA"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAdminOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddChapter}>
              <Upload className="h-4 w-4 mr-2" />
              Add Chapter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default OurChapters;
