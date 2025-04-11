
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Plus, Trash, GripVertical } from "lucide-react";

type ResumeEditorProps = {
  setHasUnsavedChanges: (value: boolean) => void;
};

type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
};

const ResumeEditor = ({ setHasUnsavedChanges }: ResumeEditorProps) => {
  const [experience, setExperience] = useState<Experience[]>([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Lead development of the company's main SaaS product using React, TypeScript, and GraphQL. Improved performance by 40% and implemented CI/CD pipeline.",
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "WebSolutions",
      period: "2018 - 2021",
      description: "Developed and maintained multiple client projects using Node.js, Express, React, and MongoDB. Collaborated with design team to implement responsive UI/UX.",
    },
    {
      id: "3",
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2016 - 2018",
      description: "Created websites and web applications for clients in various industries. Focused on frontend development with HTML, CSS, and JavaScript.",
    },
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in web technologies and artificial intelligence.",
    },
    {
      id: "2",
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      period: "2010 - 2014",
      description: "Dean's List. Participated in various hackathons and coding competitions.",
    },
  ]);

  useEffect(() => {
    // Set initial state
    setHasUnsavedChanges(false);
  }, [setHasUnsavedChanges]);

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      title: "",
      company: "",
      period: "",
      description: "",
    };
    setExperience([...experience, newExperience]);
    setHasUnsavedChanges(true);
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string
  ) => {
    setExperience(
      experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
    setHasUnsavedChanges(true);
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter((exp) => exp.id !== id));
    setHasUnsavedChanges(true);
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      period: "",
      description: "",
    };
    setEducation([...education, newEducation]);
    setHasUnsavedChanges(true);
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    setEducation(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
    setHasUnsavedChanges(true);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
    setHasUnsavedChanges(true);
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="experience">
        <TabsList className="mb-6">
          <TabsTrigger value="experience">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>
                Add your professional experience, most recent first.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 border border-gray-200 rounded-md space-y-4 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="cursor-grab text-gray-400 mr-3">
                          <GripVertical size={20} />
                        </div>
                        <h3 className="text-lg font-medium">
                          {exp.title || "New Position"}
                        </h3>
                      </div>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeExperience(exp.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash size={16} className="text-gray-500" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
                        <Input
                          id={`title-${exp.id}`}
                          value={exp.title}
                          onChange={(e) =>
                            updateExperience(exp.id, "title", e.target.value)
                          }
                          placeholder="e.g. Senior Developer"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`company-${exp.id}`}>Company</Label>
                        <Input
                          id={`company-${exp.id}`}
                          value={exp.company}
                          onChange={(e) =>
                            updateExperience(exp.id, "company", e.target.value)
                          }
                          placeholder="e.g. Google"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`period-${exp.id}`}>Time Period</Label>
                        <Input
                          id={`period-${exp.id}`}
                          value={exp.period}
                          onChange={(e) =>
                            updateExperience(exp.id, "period", e.target.value)
                          }
                          placeholder="e.g. 2020 - Present"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`description-${exp.id}`}>Description</Label>
                      <Textarea
                        id={`description-${exp.id}`}
                        value={exp.description}
                        onChange={(e) =>
                          updateExperience(exp.id, "description", e.target.value)
                        }
                        placeholder="Describe your responsibilities and achievements..."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center"
                  onClick={addExperience}
                >
                  <Plus size={16} className="mr-2" />
                  Add Work Experience
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>
                Add your educational background, most recent first.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 border border-gray-200 rounded-md space-y-4 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="cursor-grab text-gray-400 mr-3">
                          <GripVertical size={20} />
                        </div>
                        <h3 className="text-lg font-medium">
                          {edu.degree || "New Degree"}
                        </h3>
                      </div>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeEducation(edu.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash size={16} className="text-gray-500" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                        <Input
                          id={`degree-${edu.id}`}
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(edu.id, "degree", e.target.value)
                          }
                          placeholder="e.g. Bachelor of Science in Computer Science"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                        <Input
                          id={`institution-${edu.id}`}
                          value={edu.institution}
                          onChange={(e) =>
                            updateEducation(edu.id, "institution", e.target.value)
                          }
                          placeholder="e.g. Stanford University"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`period-${edu.id}`}>Time Period</Label>
                        <Input
                          id={`period-${edu.id}`}
                          value={edu.period}
                          onChange={(e) =>
                            updateEducation(edu.id, "period", e.target.value)
                          }
                          placeholder="e.g. 2016 - 2020"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`description-${edu.id}`}>Description</Label>
                      <Textarea
                        id={`description-${edu.id}`}
                        value={edu.description}
                        onChange={(e) =>
                          updateEducation(edu.id, "description", e.target.value)
                        }
                        placeholder="Describe your studies, achievements, etc..."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center"
                  onClick={addEducation}
                >
                  <Plus size={16} className="mr-2" />
                  Add Education
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeEditor;
