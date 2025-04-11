
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "1 portfolio site",
      "Basic templates",
      "Mobile responsive",
      "ProfileCraft subdomain",
      "Basic analytics",
    ],
    cta: "Get Started",
    ctaLink: "/register",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For professionals and freelancers",
    features: [
      "5 portfolio sites",
      "Premium templates",
      "Custom domain",
      "Advanced analytics",
      "No ProfileCraft branding",
      "Priority support",
      "Custom CSS/JS",
    ],
    cta: "Start Free Trial",
    ctaLink: "/register?plan=pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$19",
    period: "per month",
    description: "For small teams and agencies",
    features: [
      "Unlimited portfolio sites",
      "All Pro features",
      "Team management",
      "Collaboration tools",
      "API access",
      "White-label solution",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plans for every stage of your career</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for you and start building your professional online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden border ${
                plan.highlighted
                  ? "border-blue-600 shadow-lg relative"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 w-full text-center bg-blue-600 text-white text-sm py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.highlighted ? "pt-10" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link to={plan.ctaLink}>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
