"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, MousePointer, TrendingUp } from "lucide-react";

// Mock analytics data
const stats = [
  {
    label: "Total Visitors",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "blue",
  },
  {
    label: "Page Views",
    value: "5,678",
    change: "+8%",
    icon: Eye,
    color: "green",
  },
  {
    label: "Avg. Time",
    value: "3m 45s",
    change: "+2%",
    icon: MousePointer,
    color: "purple",
  },
  {
    label: "Bounce Rate",
    value: "32%",
    change: "-5%",
    icon: TrendingUp,
    color: "orange",
  },
];

const topPages = [
  { page: "/home", visits: 1234, growth: "+15%" },
  { page: "/about", visits: 856, growth: "+8%" },
  { page: "/contact", visits: 542, growth: "+23%" },
  { page: "/blog", visits: 421, growth: "+5%" },
];

const trafficSources = [
  { source: "Direct", percentage: 45, color: "bg-blue-500" },
  { source: "Google", percentage: 30, color: "bg-green-500" },
  { source: "Social", percentage: 15, color: "bg-purple-500" },
  { source: "Other", percentage: 10, color: "bg-gray-500" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Site performance and traffic data
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClass = `text-${stat.color}-600 dark:text-${stat.color}-400`;
          const bgClass = `bg-${stat.color}-100 dark:bg-gray-800`;

          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${bgClass} p-3 rounded-full`}>
                    <Icon className={`h-6 w-6 ${colorClass}`} />
                  </div>
                </div>
                <div className="mt-4">
                  <span
                    className={`text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              Top Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div
                  key={page.page}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {page.page}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {page.visits} visits
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm ${
                      page.growth.startsWith("+")
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {page.growth}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-900 dark:text-white">
                      {source.source}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {source.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div
                      className={`${source.color} h-2 rounded-full`}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart Version */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Visitors This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between gap-2 pt-4">
            {[
              { day: "Mon", value: 65, heightClass: "h-[65%]" },
              { day: "Tue", value: 80, heightClass: "h-[80%]" },
              { day: "Wed", value: 75, heightClass: "h-[75%]" },
              { day: "Thu", value: 90, heightClass: "h-[90%]" },
              { day: "Fri", value: 85, heightClass: "h-[85%]" },
              { day: "Sat", value: 70, heightClass: "h-[70%]" },
              { day: "Sun", value: 60, heightClass: "h-[60%]" },
            ].map((item) => (
              <div key={item.day} className="flex flex-col items-center flex-1">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.day}
                </div>
                <div
                  className={`w-full ${item.heightClass} bg-blue-500 dark:bg-blue-600 rounded-t-lg transition-all hover:opacity-80`}
                />
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
