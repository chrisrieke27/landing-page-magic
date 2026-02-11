import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, User, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(`Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:chrisrieke27@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client!", description: "Your message is ready to send." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">Contact IPO Investing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in starting a chapter or have other questions? Fill out the form below and our team will be in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <img src={logo} alt="IPO Investing Inc." className="h-8" />
                <span className="text-xl font-bold">IPO Investing Inc.</span>
              </div>
              <p className="text-muted-foreground text-sm"><strong>EIN: 41-3993990</strong><br />501(c)(3) Delaware Corporation</p>
            </div>

            <div className="bg-card rounded-2xl border p-5 shadow-sm flex items-center gap-4">
              <div className="rounded-full p-3 bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:chrisrieke27@gmail.com" className="text-primary text-sm hover:underline">
                  chrisrieke27@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl border p-5 shadow-sm flex items-center gap-4">
              <div className="rounded-full p-3 bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Text</p>
                <a href="tel:2144155590" className="text-primary text-sm hover:underline">
                  214-415-5590
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl border p-5 shadow-sm flex items-center gap-4">
              <div className="rounded-full p-3 bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <a href="https://linkedin.com/company/ipo-investing" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                  IPO Investing
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card rounded-2xl border p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">First name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      required
                      maxLength={100}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Last name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      required
                      maxLength={100}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    className="pl-9"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    maxLength={255}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="tel"
                    className="pl-9"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea
                    className="pl-9 min-h-[120px]"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    maxLength={1000}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">Send message</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
