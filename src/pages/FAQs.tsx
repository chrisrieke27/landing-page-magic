import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info, TrendingUp, Users, BookOpen } from "lucide-react";

const faqCategories = [
  {
    title: "General Information",
    icon: <Info className="h-5 w-5" />,
    iconBg: "bg-primary/10 text-primary",
    questions: [
      {
        q: "What is IPO Investing HQ?",
        a: "IPO Investing HQ is a national network of business school clubs dedicated to educating students about IPO investing, market analysis, and building long-term investment strategies.",
      },
      {
        q: "Who can join IPO Investing HQ?",
        a: "Any college or university student interested in learning about IPO investing and the stock market can join. We welcome students from all majors and backgrounds.",
      },
    ],
  },
  {
    title: "For Chapters",
    icon: <Users className="h-5 w-5" />,
    iconBg: "bg-green-100 text-green-600",
    questions: [
      {
        q: "How do I start a chapter at my school?",
        a: "Starting a chapter is easy! Click the 'Start a Chapter' button and fill out the application form. Our team will review your application and get back to you within a few business days with next steps.",
      },
      {
        q: "What resources do chapters receive?",
        a: "Chapters receive access to curated meeting content, presentation materials, guest speaker connections, and a community of fellow chapter leaders across the country.",
      },
      {
        q: "How often should chapters meet?",
        a: "We recommend chapters meet at least bi-weekly during the academic year. However, the frequency can be adjusted based on your school's schedule and member availability.",
      },
    ],
  },
  {
    title: "IPO Investing",
    icon: <TrendingUp className="h-5 w-5" />,
    iconBg: "bg-orange-100 text-orange-600",
    questions: [
      {
        q: "What is an IPO?",
        a: "An IPO, or Initial Public Offering, is when a private company offers its shares to the public for the first time. It allows the company to raise capital from public investors and provides an opportunity for early investors to realize gains.",
      },
      {
        q: "Why focus on IPO investing?",
        a: "IPO investing offers unique opportunities to invest in companies at the beginning of their public journey. Understanding IPOs helps students develop critical analytical skills applicable across all areas of finance.",
      },
    ],
  },
  {
    title: "Meeting Content",
    icon: <BookOpen className="h-5 w-5" />,
    iconBg: "bg-purple-100 text-purple-600",
    questions: [
      {
        q: "What topics are covered in chapter meetings?",
        a: "Meetings cover a range of topics including IPO analysis frameworks, market trends, financial statement analysis, valuation methods, and current IPO case studies.",
      },
      {
        q: "Can chapters customize their meeting content?",
        a: "Absolutely! While we provide a suggested curriculum and resources, chapters are encouraged to tailor their meetings to the interests and skill levels of their members.",
      },
    ],
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h1>
          <p className="text-muted-foreground text-lg">
            Can't find the answer you're looking for?{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Contact us
            </Link>{" "}
            and we'll help you out.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-2xl border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={`rounded-full p-2 ${category.iconBg}`}>
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${category.title}-${i}`}
                    className="border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
