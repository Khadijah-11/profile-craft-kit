
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "@/components/shared/Footer";
import PortfolioNavbar from "@/components/portfolio/PortfolioNavbar";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

// Demo data for the portfolio
const demoData = {
  user: {
    name: "Alex Morgan",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      dribbble: "https://dribbble.com/",
    },
    about: `I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in React, Node.js, and modern JavaScript frameworks. I love creating elegant solutions to complex problems and continuously learning new technologies.
    
    When I'm not coding, you'll find me hiking, reading sci-fi novels, or experimenting with new cooking recipes. I believe in clean code, user-centered design, and the power of technology to make a positive impact on people's lives.`,
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
  },
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "GraphQL", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 65 },
    { name: "Docker", level: 60 },
    { name: "AWS", level: 65 },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Lead development of the company's main SaaS product using React, TypeScript, and GraphQL. Improved performance by 40% and implemented CI/CD pipeline.",
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions",
      period: "2018 - 2021",
      description: "Developed and maintained multiple client projects using Node.js, Express, React, and MongoDB. Collaborated with design team to implement responsive UI/UX.",
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2016 - 2018",
      description: "Created websites and web applications for clients in various industries. Focused on frontend development with HTML, CSS, and JavaScript.",
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in web technologies and artificial intelligence.",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      period: "2010 - 2014",
      description: "Dean's List. Participated in various hackathons and coding competitions.",
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1470&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tags: ["React", "Firebase", "Material UI", "PWA"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Health Tracking Dashboard",
      description: "An interactive dashboard for tracking health metrics with data visualization and insights.",
      tags: ["TypeScript", "Chart.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Social Media Analytics Tool",
      description: "A tool for analyzing social media engagement and audience demographics.",
      tags: ["React", "Python", "Django", "D3.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A mobile-first weather application with location-based forecasts and alerts.",
      tags: ["React Native", "API Integration", "Geolocation"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform with search and filtering capabilities.",
      tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1426&auto=format&fit=crop",
      link: "#",
    },
  ],
};

const Portfolio = () => {
  const { username } = useParams();
  const [portfolioData, setPortfolioData] = useState(demoData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would fetch data from an API based on the username
    // For now, we'll just simulate loading and use demo data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar user={portfolioData.user} />
      
      <main className="flex-grow">
        <AboutSection user={portfolioData.user} />
        <SkillsSection skills={portfolioData.skills} />
        <ResumeSection experience={portfolioData.experience} education={portfolioData.education} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection user={portfolioData.user} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
