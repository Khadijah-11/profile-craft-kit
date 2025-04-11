
import { ArrowRight, Layers, LayoutTemplate, PenTool, Share2, User, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <LayoutTemplate className="w-12 h-12 text-blue-600" />,
    title: "Professional Templates",
    description: "Choose from a variety of professional templates designed to showcase your work beautifully.",
  },
  {
    icon: <PenTool className="w-12 h-12 text-blue-600" />,
    title: "Easy Customization",
    description: "Customize colors, fonts, and layout to match your personal brand with our intuitive editor.",
  },
  {
    icon: <Layers className="w-12 h-12 text-blue-600" />,
    title: "Responsive Design",
    description: "Your portfolio looks great on all devices - desktop, tablet, and mobile.",
  },
  {
    icon: <User className="w-12 h-12 text-blue-600" />,
    title: "Personal Domain",
    description: "Get a personalized domain for your portfolio to share with potential clients and employers.",
  },
  {
    icon: <Share2 className="w-12 h-12 text-blue-600" />,
    title: "Social Integration",
    description: "Connect your social media profiles and showcase your presence across platforms.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Analytics",
    description: "Track visitors to your portfolio and understand which projects get the most attention.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to showcase your work</h2>
          <p className="text-lg text-gray-600">
            ProfileCraft provides all the tools you need to create a professional portfolio that stands out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/features" 
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Explore all features
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
