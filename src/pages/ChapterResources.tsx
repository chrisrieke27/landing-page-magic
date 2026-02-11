import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Rocket, Users, Presentation, CheckCircle, Shield, Star, Megaphone, UserPlus, BarChart3, MessageSquare } from "lucide-react";

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
        a: "Meet your university's requirements (advisor, constitution, minimum members, etc.). HQ provides templates and guidance. Chapters that follow the process have not been rejected.",
      },
      {
        q: "3. Build Your Founding Team",
        a: "Recruit 4–6 reliable students to serve as initial leaders. Invite ~10 students to your first meeting. It is completely fine to leave room for future members to join.",
      },
      {
        q: "4. Host 2 Required Meetings (First Semester)",
        a: (
          <div className="space-y-2">
            <p><strong>Meeting 1:</strong> Interest Meeting (introduce mission using HQ slide deck)</p>
            <p><strong>Meeting 2:</strong> First Official Meeting (IPO of the Week, Finance Topic, etc.)</p>
            <p className="pt-1">Future semesters: Minimum 5 meetings per semester</p>
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
            <p><strong>VP of Finance:</strong> Oversees meeting logistics (including refreshments)</p>
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
        a: "Refreshments help. Use short videos about companies students find interesting. Meetings should be engaging and interactive — not dry lectures.",
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
