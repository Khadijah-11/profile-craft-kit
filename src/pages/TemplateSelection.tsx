
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";

// Template options
const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "A clean, minimalist design with a focus on visuals and typography.",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Colorful and dynamic layout for artists and designers.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Formal and structured layout for business professionals.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Ultra-clean design with focus on content and white space.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
  },
];

const TemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      // Navigate to the dashboard with the selected template
      navigate(`/dashboard?template=${selectedTemplate}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Choose Your Portfolio Template</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a template that best represents your personal brand and style. You can customize all elements after choosing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {templates.map((template) => (
              <Card 
                key={template.id}
                className={`overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === template.id 
                    ? "ring-4 ring-blue-500 scale-105" 
                    : "hover:shadow-lg"
                }`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                  <p className="text-gray-600 text-sm">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={handleContinue}
              disabled={!selectedTemplate}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg"
              size="lg"
            >
              Continue with {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : "Selected"} Template
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateSelection;
