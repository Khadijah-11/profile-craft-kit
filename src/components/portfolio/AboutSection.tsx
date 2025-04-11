
import { Button } from "@/components/ui/button";

type AboutSectionProps = {
  user: {
    name: string;
    title: string;
    location: string;
    about: string;
    profileImage: string;
  };
};

const AboutSection = ({ user }: AboutSectionProps) => {
  const downloadResume = () => {
    // In a real application, this would download the user's resume
    alert("Resume download functionality would be implemented here");
  };

  return (
    <section id="about" className="pt-20 pb-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={user.profileImage}
                alt={user.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{user.name}</h1>
            <h2 className="text-xl text-blue-600 mb-3">{user.title}</h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              {user.location}
            </p>
            <div className="mb-6">
              {user.about.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button onClick={downloadResume} className="bg-blue-600 hover:bg-blue-700">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
