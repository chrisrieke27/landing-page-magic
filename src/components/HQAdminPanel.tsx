import { useState } from "react";
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
import {
  CustomChapter,
  loadCustomChapters,
  saveCustomChapters,
  slugify,
} from "@/lib/customChapters";

const ADMIN_PASSWORD = "IPO INVESTING";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called after a chapter is added so the parent can refresh its list */
  onChapterAdded?: (chapter: CustomChapter) => void;
};

/**
 * Two-step HQ admin flow: password gate, then add-chapter form.
 * Used by the Navbar (and anywhere else) to manage the chapter network.
 */
const HQAdminPanel = ({ open, onOpenChange, onChapterAdded }: Props) => {
  const [stage, setStage] = useState<"password" | "form">("password");
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");

  const [name, setName] = useState("");
  const [founded, setFounded] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [brandingUrl, setBrandingUrl] = useState("");

  const reset = () => {
    setStage("password");
    setPwInput("");
    setPwError("");
    setName("");
    setFounded("");
    setLogoUrl("");
    setBrandingUrl("");
  };

  const handleOpenChange = (o: boolean) => {
    onOpenChange(o);
    if (!o) reset();
  };

  const handlePwSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwInput === ADMIN_PASSWORD) {
      setStage("form");
      setPwError("");
    } else {
      setPwError("Incorrect password. Please try again.");
    }
  };

  const handleAddChapter = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      toast({ title: "Chapter name required", variant: "destructive" });
      return;
    }
    if (!logoUrl.trim()) {
      toast({ title: "Chapter logo link required", variant: "destructive" });
      return;
    }

    const existing = loadCustomChapters();
    let slug = slugify(trimmed) || `chapter-${Date.now()}`;
    const taken = new Set([
      "iu",
      "ut",
      "am",
      "sdsu",
      "clemson",
      ...existing.map((c) => c.slug),
    ]);
    let unique = slug;
    let i = 2;
    while (taken.has(unique)) unique = `${slug}-${i++}`;

    const next: CustomChapter = {
      slug: unique,
      name: trimmed.toLowerCase().startsWith("ipo investing")
        ? trimmed
        : `IPO Investing at ${trimmed}`,
      shortName: trimmed.replace(/^IPO Investing( at)?\s*/i, "") || trimmed,
      logoUrl: logoUrl.trim(),
      founded: founded.trim() || undefined,
      brandingUrl: brandingUrl.trim() || undefined,
    };

    const updated = [...existing, next];
    saveCustomChapters(updated);
    onChapterAdded?.(next);

    toast({ title: "Chapter added", description: `${next.name} is now live.` });
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {stage === "password" ? (
          <>
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
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>HQ Admin Panel</DialogTitle>
              <DialogDescription>
                Add a new chapter to the network.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="chapter-name">Chapter Name</Label>
                <Input
                  id="chapter-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. IPO Investing at UCLA"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chapter-founded">Date Founded</Label>
                <Input
                  id="chapter-founded"
                  value={founded}
                  onChange={(e) => setFounded(e.target.value)}
                  placeholder="e.g. September 2026"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chapter-logo-url">
                  Chapter Logo (Google Drive link)
                </Label>
                <Input
                  id="chapter-logo-url"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/.../view"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chapter-branding">
                  Branding Google Drive Link
                </Label>
                <Input
                  id="chapter-branding"
                  value={brandingUrl}
                  onChange={(e) => setBrandingUrl(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => handleOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddChapter}>
                <Upload className="h-4 w-4 mr-2" />
                Add Chapter
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HQAdminPanel;
