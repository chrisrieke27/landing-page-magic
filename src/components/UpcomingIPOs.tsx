import ipoSpacex from "@/assets/ipo-spacex.png";
import ipoOpenai from "@/assets/ipo-openai.png";
import ipoJerseymikes from "@/assets/ipo-jerseymikes.png";
import ipoDiscord from "@/assets/ipo-discord.png";

const ipos = [
  { name: "SpaceX", image: ipoSpacex, url: "https://www.spacex.com/", position: "center" },
  { name: "OpenAI", image: ipoOpenai, url: "https://openai.com/", position: "55% center" },
  { name: "Jersey Mike's", image: ipoJerseymikes, url: "https://www.jerseymikes.com/", position: "center" },
  { name: "Discord", image: ipoDiscord, url: "https://discord.com/", position: "45% center" },
];

const UpcomingIPOs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1F5FA9" }}>
            Upcoming IPOs of 2026
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            High-growth companies that could define the next market cycle.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {ipos.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group no-underline"
            >
              <div className="w-full max-w-[200px] aspect-[4/3] rounded-2xl shadow-sm border border-border/50 overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: company.position }}
                />
              </div>
              <p className="mt-3 text-lg md:text-xl font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {company.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingIPOs;
