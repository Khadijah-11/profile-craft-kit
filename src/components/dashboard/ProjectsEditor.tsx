
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Trash, Upload, X, GripVertical, ExternalLink } from "lucide-react";

type ProjectsEditorProps = {
  setHasUnsavedChanges: (value: boolean) => void;
};

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

const ProjectsEditor = ({ setHasUnsavedChanges }: ProjectsEditorProps) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1470&auto=format&fit=crop",
      link: "#",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tags: ["React", "Firebase", "Material UI", "PWA"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
      link: "#",
    },
    {
      id: "3",
      title: "Health Tracking Dashboard",
      description: "An interactive dashboard for tracking health metrics with data visualization and insights.",
      tags: ["TypeScript", "Chart.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
      link: "#",
    },
  ]);

  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    // Set initial state
    setHasUnsavedChanges(false);
  }, [setHasUnsavedChanges]);

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      description: "",
      tags: [],
      image: "",
      link: "",
    };
    setProjects([...projects, newProject]);
    setHasUnsavedChanges(true);
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
    setHasUnsavedChanges(true);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    setHasUnsavedChanges(true);
  };

  const addTag = (projectId: string) => {
    if (newTag.trim()) {
      const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tags: [...project.tags, newTag.trim()],
          };
        }
        return project;
      });
      
      setProjects(updatedProjects);
      setNewTag("");
      setHasUnsavedChanges(true);
    }
  };

  const removeTag = (projectId: string, tagToRemove: string) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tags: project.tags.filter((tag) => tag !== tagToRemove),
          };
        }
        return project;
      })
    );
    setHasUnsavedChanges(true);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>
            Showcase your best work. Add projects you've created.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-48 relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <Button
                      type="button"
                      size="sm"
                      className="absolute bottom-2 right-2 bg-white text-gray-700 hover:bg-gray-100"
                    >
                      Change Image
                    </Button>
                  </div>
                  
                  <div className="w-full md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="cursor-grab text-gray-400 mr-3">
                          <GripVertical size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {project.title || "New Project"}
                        </h3>
                      </div>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeProject(project.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash size={16} className="text-gray-500" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`title-${project.id}`}>Project Title</Label>
                        <Input
                          id={`title-${project.id}`}
                          value={project.title}
                          onChange={(e) =>
                            updateProject(project.id, "title", e.target.value)
                          }
                          placeholder="e.g. Portfolio Website"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`description-${project.id}`}>Description</Label>
                        <Textarea
                          id={`description-${project.id}`}
                          value={project.description}
                          onChange={(e) =>
                            updateProject(project.id, "description", e.target.value)
                          }
                          placeholder="Describe your project..."
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`link-${project.id}`}>Project Link</Label>
                        <div className="flex space-x-2">
                          <Input
                            id={`link-${project.id}`}
                            value={project.link}
                            onChange={(e) =>
                              updateProject(project.id, "link", e.target.value)
                            }
                            placeholder="https://yourproject.com"
                          />
                          {project.link && (
                            <Button
                              type="button"
                              size="icon"
                              variant="outline"
                              asChild
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink size={16} />
                                <span className="sr-only">Open link</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Technologies Used</Label>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag) => (
                            <div
                              key={tag}
                              className="flex items-center bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                            >
                              {tag}
                              <button
                                type="button"
                                onClick={() => removeTag(project.id, tag)}
                                className="ml-1 text-blue-500 hover:text-blue-700"
                              >
                                <X size={14} />
                                <span className="sr-only">Remove tag</span>
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Input
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            placeholder="Add a technology..."
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                addTag(project.id);
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={() => addTag(project.id)}
                            variant="outline"
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={addProject}
            >
              <Plus size={16} className="mr-2" />
              Add Project
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Gallery Preview</CardTitle>
          <CardDescription>
            Here's how your projects will appear in your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title || "Untitled Project"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description || "No description provided."}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsEditor;
