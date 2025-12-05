import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CathedralShowcase from "@/components/CathedralShowcase";
import ImageGallery from "@/components/ImageGallery";
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
        title="Glade Cathedral | Celestial Church of Christ Akoka Parish" 
        description="Experience the divine presence at Celestial Church of Christ, Akoka Parish — where heaven meets earth in sacred worship and celestial celebration." 
        url="/" 
      />
      <ProgressIndicator />
      <Navigation />
      <main id="main-content" className="bg-background min-h-screen">
        <Hero />
        <CathedralShowcase />
        <ImageGallery />
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
