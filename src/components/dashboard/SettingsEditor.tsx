
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, ExternalLink } from "lucide-react";

type SettingsEditorProps = {
  setHasUnsavedChanges: (value: boolean) => void;
};

const SettingsEditor = ({ setHasUnsavedChanges }: SettingsEditorProps) => {
  const [settings, setSettings] = useState({
    username: "alexmorgan",
    domain: "alexmorgan.profilecraft.com",
    theme: "blue",
    displayContactForm: true,
    displaySocialIcons: true,
    isPublic: true,
    allowIndexing: true,
    primaryColor: "#3B82F6",
    accentColor: "#0D9488",
  });

  useEffect(() => {
    // Set initial state
    setHasUnsavedChanges(false);
  }, [setHasUnsavedChanges]);

  const handleChange = (field: string, value: string | boolean) => {
    setSettings({
      ...settings,
      [field]: value,
    });
    setHasUnsavedChanges(true);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio URL</CardTitle>
          <CardDescription>
            Customize your portfolio's web address.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="flex items-center">
                <Input
                  id="username"
                  value={settings.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                />
                <span className="ml-2 text-gray-500">.profilecraft.com</span>
              </div>
              <p className="text-sm text-gray-500">
                This will be your portfolio's URL: {settings.username}.profilecraft.com
              </p>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Switch
                    id="custom-domain"
                    checked={false}
                    onCheckedChange={() => {}}
                  />
                </div>
                <div className="ml-3">
                  <Label
                    htmlFor="custom-domain"
                    className="font-medium text-gray-900"
                  >
                    Use custom domain
                  </Label>
                  <p className="text-sm text-gray-500">
                    Connect your own domain to your portfolio.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium">
                    Custom domains are only available on the Pro plan.
                  </p>
                  <a
                    href="/pricing"
                    className="text-sm text-amber-800 underline hover:text-amber-900 inline-flex items-center mt-1"
                  >
                    Upgrade to Pro
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how your portfolio looks and feels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme">Color Theme</Label>
              <Select
                value={settings.theme}
                onValueChange={(value) => handleChange("theme", value)}
              >
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue (Default)</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="teal">Teal</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="gray">Minimal Gray</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex space-x-2">
                  <Input
                    id="primary-color"
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) =>
                      handleChange("primaryColor", e.target.value)
                    }
                    className="w-14 h-10 p-1"
                  />
                  <Input
                    value={settings.primaryColor}
                    onChange={(e) =>
                      handleChange("primaryColor", e.target.value)
                    }
                    placeholder="#000000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accent-color">Accent Color</Label>
                <div className="flex space-x-2">
                  <Input
                    id="accent-color"
                    type="color"
                    value={settings.accentColor}
                    onChange={(e) =>
                      handleChange("accentColor", e.target.value)
                    }
                    className="w-14 h-10 p-1"
                  />
                  <Input
                    value={settings.accentColor}
                    onChange={(e) =>
                      handleChange("accentColor", e.target.value)
                    }
                    placeholder="#000000"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="display-contact-form"
                    className="font-medium"
                  >
                    Display Contact Form
                  </Label>
                  <p className="text-sm text-gray-500">
                    Allow visitors to contact you through a form.
                  </p>
                </div>
                <Switch
                  id="display-contact-form"
                  checked={settings.displayContactForm}
                  onCheckedChange={(checked) =>
                    handleChange("displayContactForm", checked)
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="display-social-icons"
                    className="font-medium"
                  >
                    Display Social Media Icons
                  </Label>
                  <p className="text-sm text-gray-500">
                    Show links to your social media profiles.
                  </p>
                </div>
                <Switch
                  id="display-social-icons"
                  checked={settings.displaySocialIcons}
                  onCheckedChange={(checked) =>
                    handleChange("displaySocialIcons", checked)
                  }
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
          <CardDescription>
            Control who can see your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="is-public" className="font-medium">
                  Public Portfolio
                </Label>
                <p className="text-sm text-gray-500">
                  Make your portfolio visible to everyone.
                </p>
              </div>
              <Switch
                id="is-public"
                checked={settings.isPublic}
                onCheckedChange={(checked) =>
                  handleChange("isPublic", checked)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="allow-indexing" className="font-medium">
                  Search Engine Indexing
                </Label>
                <p className="text-sm text-gray-500">
                  Allow search engines like Google to index your portfolio.
                </p>
              </div>
              <Switch
                id="allow-indexing"
                checked={settings.allowIndexing}
                onCheckedChange={(checked) =>
                  handleChange("allowIndexing", checked)
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            Irreversible actions for your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button
              variant="destructive"
              type="button"
              className="w-full sm:w-auto"
            >
              Delete Portfolio
            </Button>
            <p className="text-sm text-gray-500">
              This action cannot be undone. This will permanently delete your
              portfolio and all its contents.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsEditor;
