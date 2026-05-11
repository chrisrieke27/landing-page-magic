import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChapterResources from "./pages/ChapterResources";
import ChapterPortal from "./pages/ChapterPortal";
import Contact from "./pages/Contact";
import IPOFund from "./pages/IPOFund";
import IPOTv from "./pages/IPOTv";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chapter-resources" element={<ChapterResources />} />
          <Route path="/chapters/:slug" element={<ChapterPortal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ipo-fund" element={<IPOFund />} />
          <Route path="/ipo-tv" element={<IPOTv />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
