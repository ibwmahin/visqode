import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroVid from "./components/IntroVid";
import Navigation from "./components/Navigation/Navigation";
import Process from "./components/Process";
import StarSection from "./components/StarSection";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Comparison from "./components/Comparison";
import Services from "./components/Services";
import FAQSection from "./components/FAQSection";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
const App = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#010413] to-[#000] overflow-x-hidden">
        <Navigation />
        <Hero />
        <StarSection />
        <IntroVid />
        <About />
        <WhyUs />
        <Comparison />
        <Pricing />
        <div className="my-32">
          <Process />
        </div>
        <Services />
        <FAQSection />
        {/* Cta Section */}
        <CTA />
        {/* footer gose from here */}
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
