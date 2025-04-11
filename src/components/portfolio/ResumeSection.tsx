
import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

type ResumeSectionProps = {
  experience: Experience[];
  education: Education[];
};

const ResumeSection = ({ experience, education }: ResumeSectionProps) => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="resume" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center justify-center px-6 py-3 rounded-lg transition-all ${
                activeTab === "experience"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center justify-center px-6 py-3 rounded-lg transition-all ${
                activeTab === "education"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </button>
          </div>

          {activeTab === "experience" && (
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 sm:pl-12">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6 pb-6 sm:pl-8 sm:pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.company}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 sm:pl-12">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6 pb-6 sm:pl-8 sm:pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.institution}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
