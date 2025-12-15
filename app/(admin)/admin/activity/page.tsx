"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock activity data
const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "Logged in",
    ip: "192.168.1.1",
    time: "10:30 AM",
    date: "Today",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated profile",
    ip: "192.168.1.2",
    time: "9:15 AM",
    date: "Today",
  },
  {
    id: 3,
    user: "Admin",
    action: "Changed settings",
    ip: "192.168.1.3",
    time: "Yesterday",
    date: "3:45 PM",
  },
  {
    id: 4,
    user: "Bob Johnson",
    action: "Created account",
    ip: "192.168.1.4",
    time: "Yesterday",
    date: "11:20 AM",
  },
  {
    id: 5,
    user: "System",
    action: "Backup completed",
    ip: "System",
    time: "2 days ago",
    date: "10:00 PM",
  },
  {
    id: 6,
    user: "Admin",
    action: "User deleted",
    ip: "192.168.1.5",
    time: "2 days ago",
    date: "4:30 PM",
  },
];

export default function ActivityLogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Activity Log
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track all user and system activities
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search activities..." className="pl-10" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              156
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Activities
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              23
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              5
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Failed Logins
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              89%
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Success Rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Activity List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="font-medium text-blue-800 dark:text-blue-300">
                        {activity.user.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {activity.user}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.action}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {activity.time}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.date}
                  </p>
                  <Badge variant="outline" className="mt-1">
                    {activity.ip}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
