
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Image, Upload } from "lucide-react";

type ProfileEditorProps = {
  setHasUnsavedChanges: (value: boolean) => void;
};

const ProfileEditor = ({ setHasUnsavedChanges }: ProfileEditorProps) => {
  const [profile, setProfile] = useState({
    name: "Alex Morgan",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    about: "I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in React, Node.js, and modern JavaScript frameworks. I love creating elegant solutions to complex problems and continuously learning new technologies.\n\nWhen I'm not coding, you'll find me hiking, reading sci-fi novels, or experimenting with new cooking recipes. I believe in clean code, user-centered design, and the power of technology to make a positive impact on people's lives.",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      dribbble: "https://dribbble.com/",
    },
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
  });

  useEffect(() => {
    // Set initial state
    setHasUnsavedChanges(false);
  }, [setHasUnsavedChanges]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setProfile({
        ...profile,
        [parent]: {
          ...profile[parent as keyof typeof profile],
          [child]: value,
        },
      });
    } else {
      setProfile({
        ...profile,
        [name]: value,
      });
    }
    
    setHasUnsavedChanges(true);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            This information will be displayed at the top of your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                name="title"
                value={profile.title}
                onChange={handleChange}
                placeholder="Frontend Developer"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={profile.location}
                onChange={handleChange}
                placeholder="New York, NY"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>
            Tell visitors about yourself, your background, and what you're passionate about.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="about">Bio</Label>
            <Textarea
              id="about"
              name="about"
              value={profile.about}
              onChange={handleChange}
              placeholder="Write something about yourself..."
              rows={8}
            />
            <p className="text-sm text-gray-500">
              You can use paragraphs to structure your bio. Use a blank line to create a new paragraph.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Profile Image</CardTitle>
          <CardDescription>
            Upload a professional photo of yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-200">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <Button type="button" className="flex items-center">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Photo
              </Button>
              <p className="text-sm text-gray-500">
                Recommended: Square image, at least 400x400 pixels.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Social Media Links</CardTitle>
          <CardDescription>
            Add links to your social media profiles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                name="socialLinks.github"
                value={profile.socialLinks.github}
                onChange={handleChange}
                placeholder="https://github.com/yourusername"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                name="socialLinks.linkedin"
                value={profile.socialLinks.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourusername"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                name="socialLinks.twitter"
                value={profile.socialLinks.twitter}
                onChange={handleChange}
                placeholder="https://twitter.com/yourusername"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dribbble">Dribbble</Label>
              <Input
                id="dribbble"
                name="socialLinks.dribbble"
                value={profile.socialLinks.dribbble}
                onChange={handleChange}
                placeholder="https://dribbble.com/yourusername"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileEditor;
