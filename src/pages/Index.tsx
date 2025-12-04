import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ServiceTimes from "@/components/ServiceTimes";
import Shepherd from "@/components/Shepherd";
import LiveService from "@/components/LiveService";
import DonationSystem from "@/components/DonationSystem";
import Events from "@/components/Events";
import SermonsGrid from "@/components/SermonsGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import SocialMediaIntegration from "@/components/SocialMediaIntegration";
import NextSteps from "@/components/NextSteps";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/ProgressIndicator";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Glade Cathedral | Apex Design" 
        description="The Glory of the Latter House" 
        url="/" 
      />
      <ProgressIndicator />
      <Navigation />
      <main id="main-content" className="bg-slate-900 min-h-screen">
        <Hero />
        <Welcome />
        <ServiceTimes />
        <Shepherd />
        <LiveService />
        <SermonsGrid />
        <Events />
        <DonationSystem />
        <NewsletterSignup />
        <SocialMediaIntegration />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
};

export default Index;
