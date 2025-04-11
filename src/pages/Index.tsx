
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your professional portfolio?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose from our professionally designed templates and showcase your work to the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/templates">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Choose a Template
                </Button>
              </Link>
              <Link to="/portfolio/demo">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Demo Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
