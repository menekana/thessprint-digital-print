import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import EquipmentSection from "@/components/EquipmentSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <EquipmentSection />
      <CallToActionSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
