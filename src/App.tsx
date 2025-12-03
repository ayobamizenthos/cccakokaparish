import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import LoadingAnimation from "@/components/LoadingAnimation";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AuthProvider } from "@/contexts/AuthContext";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ChoirMediaTeam = lazy(() => import("./pages/ChoirMediaTeam"));
const Sermons = lazy(() => import("./pages/Sermons"));
const SermonDetail = lazy(() => import("./pages/SermonDetail"));
const MemberPortal = lazy(() => import("./pages/MemberPortal"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Search = lazy(() => import("./pages/Search"));
const Feedback = lazy(() => import("./pages/Feedback"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <PWAInstallPrompt />
            <BrowserRouter>
              {/* Skip link for keyboard navigation */}
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <AnimatePresence mode="wait">
                <Suspense fallback={<LoadingAnimation />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/choir-media" element={<ChoirMediaTeam />} />
                    <Route path="/sermons" element={<Sermons />} />
                    <Route path="/sermon/:id" element={<SermonDetail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
