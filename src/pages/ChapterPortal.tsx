import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Lock, LockOpen, Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

import logoIU from "@/assets/logo-iu.png";
import logoUT from "@/assets/logo-ut.png";
import logoAM from "@/assets/logo-am.png";
import logoSDSU from "@/assets/logo-sdsu.png";
import logoClemson from "@/assets/logo-clemson.png";

type ChapterConfig = {
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  driveUrl: string;
};

const CHAPTERS: Record<string, ChapterConfig> = {
  iu: {
    slug: "iu",
    name: "IPO Investing at IU",
    shortName: "IU",
    logo: logoIU,
    driveUrl:
      "https://drive.google.com/drive/folders/17VvW50OvMSifEUs4gTrZwlFa0AqhjIK6?usp=drive_link",
  },
  ut: {
    slug: "ut",
    name: "IPO Investing at UT",
    shortName: "UT",
    logo: logoUT,
    driveUrl:
      "https://drive.google.com/drive/folders/1Y5_baWMLMRZqrNttA60AnUyN9lGxMUGq?usp=drive_link",
  },
  am: {
    slug: "am",
    name: "IPO Investing at A&M",
    shortName: "A&M",
    logo: logoAM,
    driveUrl:
      "https://drive.google.com/drive/folders/1schgA7yx07Ok5IM88HUsFB2cXrULIVO4?usp=sharing",
  },
  sdsu: {
    slug: "sdsu",
    name: "IPO Investing at SDSU",
    shortName: "SDSU",
    logo: logoSDSU,
    driveUrl:
      "https://drive.google.com/drive/folders/1qW1qaDkTiTYIxkFeY_0-UJflZhvqX7le?usp=drive_link",
  },
  clemson: {
    slug: "clemson",
    name: "IPO Investing at Clemson",
    shortName: "Clemson",
    logo: logoClemson,
    driveUrl:
      "https://drive.google.com/drive/folders/1EeK43wwQpMLtuBARH93w1gpiy4af3tzA?usp=drive_link",
  },
};

const PASSWORD = "IPO";

type Meeting = { id: number; date: string; theme: string };
type RosterRow = { id: string; role: string; name: string; removable?: boolean };

const defaultMeetings = (): Meeting[] =>
  Array.from({ length: 8 }, (_, i) => ({ id: i + 1, date: "TBD", theme: "TBD" }));

const defaultRoster = (): RosterRow[] => [
  { id: "copres-1", role: "Co-President", name: "" },
  { id: "copres-2", role: "Co-President", name: "" },
  { id: "vp-ops", role: "VP of Operations", name: "" },
  { id: "vp-fin", role: "VP of Finance", name: "" },
  { id: "vp-mkt", role: "VP of Marketing", name: "" },
  { id: "vp-rec", role: "VP of Recruitment", name: "" },
  { id: "dir-1", role: "Director", name: "", removable: true },
];

function useLocalStorage<T>(key: string, initial: () => T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial();
    } catch {
      return initial();
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, [key, value]);
  return [value, setValue] as const;
}

const ChapterPortal = () => {
  const { slug } = useParams<{ slug: string }>();
  const chapter = slug ? CHAPTERS[slug.toLowerCase()] : undefined;

  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Chapter not found</h1>
          <Link to="/" className="text-primary underline">
            Return home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return <ChapterPortalContent chapter={chapter} key={chapter.slug} />;
};

const ChapterPortalContent = ({ chapter }: { chapter: ChapterConfig }) => {
  const [meetings, setMeetings] = useLocalStorage<Meeting[]>(
    `chapter:${chapter.slug}:meetings`,
    defaultMeetings,
  );
  const [roster, setRoster] = useLocalStorage<RosterRow[]>(
    `chapter:${chapter.slug}:roster`,
    defaultRoster,
  );

  const [editMode, setEditMode] = useState(false);
  const [pwOpen, setPwOpen] = useState(false);
  const [pwInput, setPwInput] = useState("");

  useEffect(() => {
    document.title = `${chapter.name} | IPO Investing`;
  }, [chapter.name]);

  const handleUnlock = () => {
    if (pwInput === PASSWORD) {
      setEditMode(true);
      setPwOpen(false);
      setPwInput("");
      toast({ title: "Edit mode enabled", description: "Click cells to update." });
    } else {
      toast({ title: "Incorrect password", variant: "destructive" });
    }
  };

  const updateMeeting = (id: number, field: "date" | "theme", val: string) => {
    setMeetings((prev) => prev.map((m) => (m.id === id ? { ...m, [field]: val } : m)));
  };

  const updateRoster = (id: string, name: string) => {
    setRoster((prev) => prev.map((r) => (r.id === id ? { ...r, name } : r)));
  };

  const addDirector = () => {
    const newId = `dir-${Date.now()}`;
    setRoster((prev) => [...prev, { id: newId, role: "Director", name: "", removable: true }]);
  };

  const removeDirector = (id: string) => {
    setRoster((prev) => prev.filter((r) => r.id !== id));
  };

  const directors = useMemo(() => roster.filter((r) => r.role === "Director"), [roster]);
  const execBoard = useMemo(() => roster.filter((r) => r.role !== "Director"), [roster]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-accent to-background py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-center md:text-left">
              <img
                src={chapter.logo}
                alt={chapter.name}
                className="h-24 w-24 rounded-2xl shadow-md border border-border/50 bg-white object-contain"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
                  Chapter Portal
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {chapter.name}
                </h1>
              </div>
              <div>
                {editMode ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditMode(false);
                      toast({ title: "Edit mode disabled" });
                    }}
                  >
                    <LockOpen className="h-4 w-4 mr-2" />
                    Lock
                  </Button>
                ) : (
                  <Button variant="outline" onClick={() => setPwOpen(true)}>
                    <Lock className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-16 max-w-4xl">
          {/* Schedule */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Fall 2026 Meeting Schedule
            </h2>
            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-24">Meeting</TableHead>
                    <TableHead className="w-48">Date</TableHead>
                    <TableHead>Theme</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {meetings.map((m) => (
                    <TableRow key={m.id}>
                      <TableCell className="font-medium">#{m.id}</TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            value={m.date}
                            onChange={(e) => updateMeeting(m.id, "date", e.target.value)}
                            placeholder="TBD"
                            className="h-9"
                          />
                        ) : (
                          <span className={m.date === "TBD" ? "text-muted-foreground" : ""}>
                            {m.date}
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            value={m.theme}
                            onChange={(e) => updateMeeting(m.id, "theme", e.target.value)}
                            placeholder="TBD"
                            className="h-9"
                          />
                        ) : (
                          <span className={m.theme === "TBD" ? "text-muted-foreground" : ""}>
                            {m.theme}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Roster */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Roster</h2>
            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2">Position</TableHead>
                    <TableHead>Name</TableHead>
                    {editMode && <TableHead className="w-12" />}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {execBoard.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.role}</TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            value={r.name}
                            onChange={(e) => updateRoster(r.id, e.target.value)}
                            placeholder="Add name"
                            className="h-9"
                          />
                        ) : (
                          <span className={!r.name ? "text-muted-foreground" : ""}>
                            {r.name || "—"}
                          </span>
                        )}
                      </TableCell>
                      {editMode && <TableCell />}
                    </TableRow>
                  ))}
                  {directors.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">Director</TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            value={r.name}
                            onChange={(e) => updateRoster(r.id, e.target.value)}
                            placeholder="Add name"
                            className="h-9"
                          />
                        ) : (
                          <span className={!r.name ? "text-muted-foreground" : ""}>
                            {r.name || "—"}
                          </span>
                        )}
                      </TableCell>
                      {editMode && (
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeDirector(r.id)}
                            aria-label="Remove director"
                          >
                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {editMode && (
                <div className="p-3 border-t border-border bg-muted/30">
                  <Button variant="outline" size="sm" onClick={addDirector}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Director
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Google Drive Resources
            </h2>
            <div className="rounded-xl border border-border bg-card shadow-sm p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Access slide decks, templates, and shared materials for {chapter.shortName}.
              </p>
              <a href={chapter.driveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="navAccent" size="lg">
                  Access Chapter Resources
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      <Dialog open={pwOpen} onOpenChange={setPwOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Edit Password</DialogTitle>
            <DialogDescription>
              Enter the chapter password to edit the schedule and roster.
            </DialogDescription>
          </DialogHeader>
          <Input
            type="password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder="Password"
            autoFocus
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setPwOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUnlock}>Unlock</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChapterPortal;
