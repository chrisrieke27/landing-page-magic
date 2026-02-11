import ipoSpacex from "@/assets/ipo-spacex.png";
import ipoOpenai from "@/assets/ipo-openai.png";
import ipoJerseymikes from "@/assets/ipo-jerseymikes.png";
import ipoDiscord from "@/assets/ipo-discord.png";

const ipos = [
  { name: "SpaceX", image: ipoSpacex },
  { name: "OpenAI", image: ipoOpenai },
  { name: "Jersey Mike's", image: ipoJerseymikes },
  { name: "Discord", image: ipoDiscord },
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
            <div
              key={company.name}
              className="flex flex-col items-center text-center group"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full max-w-[200px] rounded-2xl shadow-sm border border-border/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
              />
              <p className="mt-3 text-sm font-medium text-foreground">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingIPOs;
