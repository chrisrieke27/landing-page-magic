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
    title: "General",
    icon: <Info className="h-5 w-5" />,
    iconBg: "bg-primary/10 text-primary",
    questions: [
      {
        q: "What is IPO Investing?",
        a: "IPO Investing is a 501(c)(3) nonprofit and national network of student-run business school clubs focused on initial public offerings, current events, and professional development.",
      },
      {
        q: "What is an IPO?",
        a: "An IPO (Initial Public Offering) is when a private company offers its shares to the public for the first time, allowing anyone to buy ownership in the company through the stock market.",
      },
      {
        q: "How is IPO Investing different from every other business club out there?",
        a: "Unlike traditional business clubs, IPO Investing chapters emphasize discussion-based meetings, current events, and how companies actually operate. College students find this much more interesting than theoretical textbook concepts or passive lectures.",
      },
      {
        q: "When was IPO Investing founded?",
        a: "IPO Investing was founded in January 2024 at Indiana University by Chris Rieke.",
      },
    ],
  },
  {
    title: "For New Chapters",
    icon: <Users className="h-5 w-5" />,
    iconBg: "bg-green-100 text-green-600",
    questions: [
      {
        q: "What are the benefits of partnering with IPO Investing?",
        a: "Partnering with IPO Investing provides chapters with branding, structure, and national recognition. Chapters receive professionally designed logos and slide decks, access to curated meeting content and ideas, and recognition as an official partner organization at their university.",
      },
      {
        q: "How do I apply and what are the requirements to start a chapter?",
        a: "Chapters apply through the application link on the website. Applications are reviewed, and prospective chapters must be accepted before launching. IPO Investing is a registered trademark owned by the organization, and approved chapters are authorized to use the name and branding.",
      },
      {
        q: "What are the requirements to stay in good standing?",
        a: "Chapters must attend the semesterly presidents' meeting and submit meeting photos to the chapter portal to remain in good standing.",
      },
    ],
  },
  {
    title: "Meetings",
    icon: <BookOpen className="h-5 w-5" />,
    iconBg: "bg-purple-100 text-purple-600",
    questions: [
      {
        q: "What topics are covered in chapter meetings?",
        a: "Chapter meetings typically cover current market events, an IPO of the Week, a Finance Video of the Week, and a rotating finance topic. Meetings follow a broad curriculum designed to complement, not duplicate, traditional business school coursework.",
      },
      {
        q: "Can chapters customize their meeting content?",
        a: "Yes. While chapters are strongly encouraged to follow the core curriculum, they are welcome to introduce new ideas and formats. Some of our most popular segments, including Finance Video of the Week, originated from chapter recommendations.",
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
