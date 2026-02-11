import chapterIU from "@/assets/chapter-iu.png";
import chapterUT from "@/assets/chapter-ut.png";
import chapterAM from "@/assets/chapter-am.png";
import chapterSDSU from "@/assets/chapter-sdsu.png";

const chapters = [
  { name: "IPO Investing at IU", logo: chapterIU },
  { name: "IPO Investing at UT", logo: chapterUT },
  { name: "IPO Investing at A&M", logo: chapterAM },
  { name: "IPO Investing at SDSU", logo: chapterSDSU },
];

const OurChapters = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1F5FA9" }}>
            Our Chapters
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {chapters.map((ch) => (
            <div key={ch.name} className="flex flex-col items-center text-center">
              <img
                src={ch.logo}
                alt={ch.name}
                className="w-full max-w-[200px] rounded-2xl shadow-sm border border-border/50"
              />
              <p className="mt-3 text-base md:text-lg font-medium text-foreground w-full text-center">{ch.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChapters;
