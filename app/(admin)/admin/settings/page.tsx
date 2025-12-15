"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "My Website",
    siteDescription: "A modern website",
    contactEmail: "contact@example.com",
    darkMode: true,
    maintenanceMode: false,
    allowRegistrations: true,
  });

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Site Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Basic configuration for your website
        </p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              value={settings.siteName}
              onChange={(e) => handleChange("siteName", e.target.value)}
              className="dark:border-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="siteDescription">Site Description</Label>
            <Input
              id="siteDescription"
              value={settings.siteDescription}
              onChange={(e) => handleChange("siteDescription", e.target.value)}
              className="dark:border-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input
              id="contactEmail"
              type="email"
              value={settings.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
              className="dark:border-gray-800"
            />
          </div>
        </CardContent>
      </Card>

      {/* Feature Toggles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-gray-900 dark:text-white">Dark Mode</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Allow users to use dark theme
              </p>
            </div>
            <Switch
              checked={settings.darkMode}
              onCheckedChange={(checked) => handleChange("darkMode", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-gray-900 dark:text-white">
                Allow Registrations
              </Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Users can create new accounts
              </p>
            </div>
            <Switch
              checked={settings.allowRegistrations}
              onCheckedChange={(checked) =>
                handleChange("allowRegistrations", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-gray-900 dark:text-white">
                Maintenance Mode
              </Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Site will be temporarily unavailable
              </p>
            </div>
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) =>
                handleChange("maintenanceMode", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Reset</Button>
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
