import Benefits from "../components/landingPage/Benefits";
import CTAsection from "../components/landingPage/CTAsection";
import Features from "../components/landingPage/Features";
import HeroSection from "../components/landingPage/HeroSection";
import HowItWorks from "../components/landingPage/HowItWorks";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTAsection />
      <Footer />
    </div>
  );
};

export default LandingPage;
