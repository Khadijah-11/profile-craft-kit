
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import ProfileEditor from "@/components/dashboard/ProfileEditor";
import SkillsEditor from "@/components/dashboard/SkillsEditor";
import ResumeEditor from "@/components/dashboard/ResumeEditor";
import ProjectsEditor from "@/components/dashboard/ProjectsEditor";
import SettingsEditor from "@/components/dashboard/SettingsEditor";
import { useToast } from "@/components/ui/use-toast";
import {
  User,
  Code2,
  Briefcase,
  FolderKanban,
  Settings,
  Eye,
  Palette,
} from "lucide-react";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(searchParams.get("template") || "modern");

  useEffect(() => {
    // Set template from URL if available
    const templateParam = searchParams.get("template");
    if (templateParam) {
      setSelectedTemplate(templateParam);
    }
  }, [searchParams]);

  const getCurrentTab = () => {
    const path = location.pathname;
    if (path.endsWith("/skills")) return "skills";
    if (path.endsWith("/resume")) return "resume";
    if (path.endsWith("/projects")) return "projects";
    if (path.endsWith("/settings")) return "settings";
    return "profile";
  };

  const handleTabChange = (value: string) => {
    if (hasUnsavedChanges) {
      if (confirm("You have unsaved changes. Are you sure you want to leave this page?")) {
        setHasUnsavedChanges(false);
        navigate(`/dashboard/${value === "profile" ? "" : value}`);
      }
    } else {
      navigate(`/dashboard/${value === "profile" ? "" : value}`);
    }
  };

  const handleSave = () => {
    // Simulate saving
    setTimeout(() => {
      setHasUnsavedChanges(false);
      toast({
        title: "Changes saved successfully",
        description: "Your portfolio has been updated.",
      });
    }, 500);
  };

  const getTemplateDisplayName = () => {
    switch (selectedTemplate) {
      case "modern": return "Modern";
      case "creative": return "Creative";
      case "professional": return "Professional";
      case "minimalist": return "Minimalist";
      default: return "Default";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Edit Your Portfolio</h1>
            <p className="text-gray-500">
              Template: {getTemplateDisplayName()} 
              <Link to="/templates" className="ml-2 text-blue-600 hover:underline">
                Change
              </Link>
            </p>
          </div>
          <div className="flex space-x-3">
            <Link to={`/portfolio/${selectedTemplate}-demo`} target="_blank">
              <Button variant="outline" className="flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </Link>
            <Button 
              onClick={handleSave} 
              disabled={!hasUnsavedChanges}
              className={!hasUnsavedChanges ? "opacity-50 cursor-not-allowed" : ""}
            >
              Save Changes
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Tabs value={getCurrentTab()} onValueChange={handleTabChange}>
            <TabsList className="w-full justify-start border-b p-0 overflow-x-auto">
              <TabsTrigger
                value="profile"
                className="flex items-center px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                <Code2 className="mr-2 h-4 w-4" />
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="resume"
                className="flex items-center px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Resume
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="flex items-center px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="flex items-center px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="p-6">
            <Routes>
              <Route path="/" element={<ProfileEditor setHasUnsavedChanges={setHasUnsavedChanges} />} />
              <Route path="/skills" element={<SkillsEditor setHasUnsavedChanges={setHasUnsavedChanges} />} />
              <Route path="/resume" element={<ResumeEditor setHasUnsavedChanges={setHasUnsavedChanges} />} />
              <Route path="/projects" element={<ProjectsEditor setHasUnsavedChanges={setHasUnsavedChanges} />} />
              <Route path="/settings" element={<SettingsEditor setHasUnsavedChanges={setHasUnsavedChanges} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
