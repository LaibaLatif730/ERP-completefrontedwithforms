import ShapeHero from "@/components/main-components/shape-hero";
import Navbar from "@/components/main-components/navbar";
import CompanyMarquee from "@/components/main-components/company-marquee";
import ERPModulesSection from "@/components/main-components/erp-modules-section";
import { AnimatedBeamSection } from "@/components/main-components/animated-beam-section";
import { ERPTimeline } from "@/components/main-components/erp-timeline";
import TestimonialsSection from "@/components/main-components/testimonials-section";
import StackedCircularFooter from "@/components/ui/footer_demo";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-screen">
        {/* Hero Section - 100vh */}
        <div className="h-screen">
          <ShapeHero title1="Welcome to" title2="Largify Suit" />
        </div>
        
        {/* Company Marquee Section */}
        <CompanyMarquee />
        
        
        {/* Animated Beam Section */}
        <AnimatedBeamSection />
        
        {/* ERP Modules Section */}
        <ERPModulesSection />
        
        {/* ERP Timeline Section */}
        <ERPTimeline />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        
      </main>
      
      {/* Footer Section */}
      <StackedCircularFooter />
    </>
  );
}