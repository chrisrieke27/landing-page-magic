import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Rocket, Users, Presentation, ExternalLink, Video } from "lucide-react";

const resourceCategories = [
  {
    title: "5 Steps to Start a Chapter",
    icon: <Rocket className="h-5 w-5" />,
    iconBg: "bg-primary/10 text-primary",
    questions: [
      {
        q: "1. Receive National Approval",
        a: "Submit your application and complete onboarding with IPO Investing HQ.",
      },
      {
        q: "2. Secure University Recognition (Most Important)",
        a: "Meet your university's requirements (advisor, constitution, minimum members, etc.). ChatGPT can provide detailed instructions, and we can help with the application process. Chapters that follow the process have not been rejected.",
      },
      {
        q: "3. Build Your Founding Team",
        a: (
          <div className="space-y-1">
            <p>Recruit 4–6 reliable students to serve as initial leaders.</p>
            <p>Invite 10+ students to your first meeting.</p>
            <p>It is completely fine to leave room on exec board.</p>
          </div>
        ),
      },
      {
        q: "4. Host 2 Required Meetings (First Semester)",
        a: (
          <div className="space-y-2">
            <p><strong>Meeting 1:</strong> Call Out Meeting (introduce mission using HQ slide deck)</p>
            <p><strong>Meeting 2:</strong> First Official Meeting (IPO of the Week, Finance Topic, etc.)</p>
            <p className="pt-1">Future semesters: Minimum <strong>5 meetings</strong> per semester</p>
          </div>
        ),
      },
      {
        q: "5. Maintain Active Status",
        a: (
          <div className="space-y-1">
            <p>• Submit meeting photos</p>
            <p>• Attend national Zoom meetings</p>
            <p>• Maintain consistent activity</p>
            <p className="pt-2 text-sm italic">Inactive or "ghost" chapters risk charter revocation and required rebranding.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "4-Tier Management Structure",
    icon: <Users className="h-5 w-5" />,
    iconBg: "bg-green-100 text-green-600",
    questions: [
      {
        q: "1. Co-Presidents (2)",
        a: (
          <div className="space-y-1">
            <p><strong>Co-President (Operations):</strong> Scheduling, university compliance, national compliance</p>
            <p><strong>Co-President (Leadership):</strong> Oversees executive team</p>
          </div>
        ),
      },
      {
        q: "2. Executive Board",
        a: (
          <div className="space-y-1">
            <p><strong>VP of Operations:</strong> Manages slide deck & coordinates presentations</p>
            <p><strong>VP of Finance:</strong> Oversees funding & bringing candy</p>
            <p><strong>VP of Marketing:</strong> Runs Instagram (weekly story + page posts)</p>
            <p><strong>VP of Recruitment:</strong> Leads recruitment and member growth</p>
          </div>
        ),
      },
      {
        q: "3. Directors",
        a: (
          <div className="space-y-2">
            <p>Directors lead meeting content, such as:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>IPO of the Week</li>
              <li>Current Events</li>
              <li>WSJ Article of the Week</li>
              <li>Discussion Topic</li>
            </ul>
            <p className="pt-1">Directors handle the majority of meeting content so executives can focus on operations and growth.</p>
            <p className="text-sm italic">Analysts may apply to become Directors at the end of each semester.</p>
          </div>
        ),
      },
      {
        q: "4. Analysts",
        a: "All active members who attend meetings. Attendance is required to maintain Analyst status.",
      },
    ],
  },
  {
    title: "How to Run a Strong Meeting",
    icon: <Presentation className="h-5 w-5" />,
    iconBg: "bg-purple-100 text-purple-600",
    questions: [
      {
        q: "1. Bring Energy",
        a: "Get candy at meetings. Use short videos about companies students find interesting.",
      },
      {
        q: "2. Make It Interactive",
        a: "Ask questions. Encourage debate. If multiple members are speaking, the meeting is working.",
      },
      {
        q: "3. Follow a Structured Agenda",
        a: (
          <div className="space-y-1">
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>IPO of the Week</li>
              <li>Current Events</li>
              <li>WSJ Article</li>
              <li>Corporate Strategy Video</li>
              <li>Finance Topic</li>
              <li>Discussion Topic</li>
            </ul>
          </div>
        ),
      },
    ],
  },
];

const ChapterResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            IPO Investing™ Playbook
          </h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to launch and run a successful chapter.{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Contact us
            </Link>{" "}
            if you need help.
          </p>
          <p className="text-muted-foreground text-lg mt-2">
            Meetings should be engaging and interactive - not dry lectures.
          </p>
        </div>

        {/* Branding */}
        <div className="bg-card rounded-2xl border p-6 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-full p-2 bg-blue-100 text-blue-600">
              <ExternalLink className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Branding</h2>
          </div>
          <p className="text-muted-foreground">
            <a
              href="https://drive.google.com/drive/folders/1PvNRIY3sT1fwaEYhAnCxtLGIG37yLVpb?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Google Drive Link
            </a>{" "}
            — Logos & slide deck templates for chapters.
          </p>
        </div>

        {/* Video Resources */}
        <div className="bg-card rounded-2xl border p-6 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full p-2 bg-red-100 text-red-600">
              <Video className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Video Resources</h2>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Why Start a Chapter:</strong> <span className="italic">Link coming soon</span></p>
            <p><strong>How to Start a Chapter:</strong> <span className="italic">Link coming soon</span></p>
            <p><strong>How to Run a Good Meeting:</strong> <span className="italic">Link coming soon</span></p>
          </div>
        </div>

        <div className="space-y-8">
          {resourceCategories.map((category) => (
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

export default ChapterResources;
