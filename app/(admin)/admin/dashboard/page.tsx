"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Settings,
  Activity,
  TrendingUp,
  UserCheck,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock stats - replace with API calls
const dashboardStats = {
  totalUsers: 156,
  activeUsers: 124,
  newUsersWeek: 23,
  growthRate: 8.5,
  settingsUpdated: 4,
  siteUptime: "99.9%",
};

const quickActions = [
  {
    title: "Manage Users",
    description: "View, add, or remove user accounts",
    icon: Users,
    href: "/admin/users",
    color: "bg-blue-500",
  },
  {
    title: "Site Settings",
    description: "Configure site preferences and options",
    icon: Settings,
    href: "/admin/settings",
    color: "bg-green-500",
  },
  {
    title: "Activity Log",
    description: "View recent system activities",
    icon: Activity,
    href: "/admin/activity",
    color: "bg-purple-500",
  },
  {
    title: "Analytics",
    description: "View site traffic and usage stats",
    icon: TrendingUp,
    href: "/admin/analytics",
    color: "bg-orange-500",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, Admin
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your site's users and configuration from here
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardStats.totalUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">
                +{dashboardStats.growthRate}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Users
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardStats.activeUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round(
                (dashboardStats.activeUsers / dashboardStats.totalUsers) * 100
              )}
              % of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Site Uptime
            </CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardStats.siteUptime}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Last 30 days performance
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.title}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="px-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`${action.color} p-2 rounded-lg`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold">{action.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href={action.href}>Go to {action.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
