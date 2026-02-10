import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out to us with any questions or ideas you may have. We are always looking for new ways to grow and improve our network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <img src={logo} alt="IPO Investing HQ" className="h-8" />
                <span className="text-xl font-bold">IPO Investing HQ</span>
              </div>
              <p className="text-muted-foreground text-sm">A National Network of Business School Clubs</p>
            </div>

            <div className="bg-card rounded-2xl border p-5 shadow-sm flex items-center gap-4">
              <div className="rounded-full p-3 bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:contact@ipoinvestinghq.com" className="text-primary text-sm hover:underline">
                  contact@ipoinvestinghq.com
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl border p-5 shadow-sm flex items-center gap-4">
              <div className="rounded-full p-3 bg-primary/10 text-primary">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Follow Us</p>
                <p className="text-muted-foreground text-sm">@ipoinvestinghq</p>
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
