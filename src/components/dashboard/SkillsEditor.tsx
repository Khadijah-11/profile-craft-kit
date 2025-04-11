
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Plus, X, GripVertical } from "lucide-react";

type SkillsEditorProps = {
  setHasUnsavedChanges: (value: boolean) => void;
};

type Skill = {
  id: string;
  name: string;
  level: number;
};

const SkillsEditor = ({ setHasUnsavedChanges }: SkillsEditorProps) => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "JavaScript", level: 90 },
    { id: "2", name: "React", level: 85 },
    { id: "3", name: "Node.js", level: 80 },
    { id: "4", name: "TypeScript", level: 75 },
    { id: "5", name: "HTML/CSS", level: 90 },
    { id: "6", name: "GraphQL", level: 70 },
    { id: "7", name: "MongoDB", level: 75 },
    { id: "8", name: "PostgreSQL", level: 65 },
    { id: "9", name: "Docker", level: 60 },
    { id: "10", name: "AWS", level: 65 },
  ]);

  useEffect(() => {
    // Set initial state
    setHasUnsavedChanges(false);
  }, [setHasUnsavedChanges]);

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: "",
      level: 50,
    };
    setSkills([...skills, newSkill]);
    setHasUnsavedChanges(true);
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
    setHasUnsavedChanges(true);
  };

  const updateSkill = (id: string, field: string, value: string | number) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
    setHasUnsavedChanges(true);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>
            Add your technical skills and rate your proficiency level.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center space-x-4 p-4 border border-gray-200 rounded-md group"
              >
                <div className="cursor-grab text-gray-400">
                  <GripVertical size={20} />
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4">
                    <Label htmlFor={`skill-${skill.id}`} className="sr-only">
                      Skill Name
                    </Label>
                    <Input
                      id={`skill-${skill.id}`}
                      value={skill.name}
                      onChange={(e) =>
                        updateSkill(skill.id, "name", e.target.value)
                      }
                      placeholder="Skill Name"
                    />
                  </div>
                  
                  <div className="md:col-span-6 flex items-center space-x-4">
                    <div className="w-full">
                      <Label htmlFor={`level-${skill.id}`} className="sr-only">
                        Proficiency Level
                      </Label>
                      <Slider
                        id={`level-${skill.id}`}
                        value={[skill.level]}
                        min={0}
                        max={100}
                        step={5}
                        onValueChange={(value) =>
                          updateSkill(skill.id, "level", value[0])
                        }
                      />
                    </div>
                    <span className="text-sm font-medium w-10 text-right">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSkill(skill.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={16} className="text-gray-500" />
                  <span className="sr-only">Remove skill</span>
                </Button>
              </div>
            ))}
            
            <Button
              type="button"
              variant="outline"
              className="w-full mt-2 flex items-center justify-center"
              onClick={addSkill}
            >
              <Plus size={16} className="mr-2" />
              Add Skill
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Skills Visualization</CardTitle>
          <CardDescription>
            Preview how your skills will be displayed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.id} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium">
                    {skill.name || "Unnamed Skill"}
                  </span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsEditor;
