import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import chapterIU from "@/assets/chapter-iu.png";
import chapterUT from "@/assets/chapter-ut.png";
import chapterAM from "@/assets/chapter-am.png";
import chapterSDSU from "@/assets/chapter-sdsu.png";
import chapterClemson from "@/assets/chapter-clemson.png";
import HQAdminPanel from "@/components/HQAdminPanel";
import {
  CustomChapter,
  getChapterLogoUrl,
  loadCustomChapters,
} from "@/lib/customChapters";

const baseChapters = [
  { name: "IPO Investing at IU", logo: chapterIU, href: "/chapters/iu" },
  { name: "IPO Investing at UT", logo: chapterUT, href: "/chapters/ut" },
  { name: "IPO Investing at A&M", logo: chapterAM, href: "/chapters/am" },
  { name: "IPO Investing at SDSU", logo: chapterSDSU, href: "/chapters/sdsu" },
  { name: "IPO Investing at Clemson", logo: chapterClemson, href: "/chapters/clemson" },
];

const OurChapters = () => {
  const [customChapters, setCustomChapters] = useState<CustomChapter[]>([]);

  useEffect(() => {
    setCustomChapters(loadCustomChapters());
    const onStorage = () => setCustomChapters(loadCustomChapters());
    window.addEventListener("storage", onStorage);
    window.addEventListener("custom-chapters-updated", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("custom-chapters-updated", onStorage);
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1F5FA9" }}>
            Our Chapters
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
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
                src={getChapterLogoUrl(ch)}
                alt={ch.name}
                className="w-full max-w-[200px] aspect-square object-contain bg-white rounded-2xl shadow-sm border border-border/50 transition-transform group-hover:scale-105 group-hover:shadow-md p-4"
              />
              <p className="mt-3 text-sm font-medium text-foreground">{ch.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChapters;
