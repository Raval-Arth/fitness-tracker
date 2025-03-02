"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  BarChart2,
  Calendar,
  Heart,
  Home,
  Settings,
  TrendingUp,
  User,
  AlertTriangle,
  Award,
  Clock,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { HealthMetricsChart } from "@/components/health-metrics-chart"
import { ActivityCalendar } from "@/components/activity-calendar"
import { HealthRiskPredictor } from "@/components/health-risk-predictor"
import { GoalTracker } from "@/components/goal-tracker"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Activity className="h-6 w-6 text-primary" />
            <span>FitIQ</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="/settings">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium">
                <Button
                  variant={activeTab === "overview" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button
                  variant={activeTab === "activity" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("activity")}
                >
                  <Activity className="mr-2 h-4 w-4" />
                  Activity
                </Button>
                <Button
                  variant={activeTab === "health" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("health")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Health Metrics
                </Button>
                <Button
                  variant={activeTab === "goals" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("goals")}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Goals
                </Button>
                <Button
                  variant={activeTab === "insights" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("insights")}
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Insights
                </Button>
                <Button
                  variant={activeTab === "calendar" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("calendar")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <Tabs defaultValue="overview" className="space-y-4" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex items-center md:hidden">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="health">Health</TabsTrigger>
                  <TabsTrigger value="goals">Goals</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8,249</div>
                      <p className="text-xs text-muted-foreground">+12% from yesterday</p>
                      <Progress value={68} className="mt-2" />
                      <p className="mt-1 text-xs text-muted-foreground">68% of daily goal</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">72 BPM</div>
                      <p className="text-xs text-muted-foreground">Resting average</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs font-medium">Min: 58</span>
                        <Progress value={72} max={180} className="flex-1" />
                        <span className="text-xs font-medium">Max: 142</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">7h 12m</div>
                      <p className="text-xs text-muted-foreground">+32min from average</p>
                      <div className="mt-2 grid grid-cols-4 gap-1">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-medium">Deep</span>
                          <Progress value={80} className="h-12 w-2 rounded-full" orientation="vertical" />
                          <span className="text-xs">2h</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-medium">Light</span>
                          <Progress value={60} className="h-12 w-2 rounded-full" orientation="vertical" />
                          <span className="text-xs">3h</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-medium">REM</span>
                          <Progress value={40} className="h-12 w-2 rounded-full" orientation="vertical" />
                          <span className="text-xs">1.5h</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-medium">Awake</span>
                          <Progress value={20} className="h-12 w-2 rounded-full" orientation="vertical" />
                          <span className="text-xs">0.7h</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Weekly Goals</CardTitle>
                      <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4/7</div>
                      <p className="text-xs text-muted-foreground">Days with completed goals</p>
                      <div className="mt-2 grid grid-cols-7 gap-1">
                        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <span className="text-xs font-medium">{day}</span>
                            <div className={`mt-1 h-2 w-2 rounded-full ${i < 4 ? "bg-primary" : "bg-muted"}`} />
                          </div>
                        ))}
                      </div>
                      <Progress value={57} className="mt-2" />
                      <p className="mt-1 text-xs text-muted-foreground">57% weekly completion rate</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Health Metrics Trend</CardTitle>
                      <CardDescription>Your key metrics over the past 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HealthMetricsChart />
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Health Risk Assessment</CardTitle>
                      <CardDescription>AI-powered prediction based on your data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HealthRiskPredictor />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Personalized Recommendations</CardTitle>
                      <CardDescription>Based on your recent activity and goals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/20 p-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Increase Cardio Intensity</h4>
                            <p className="text-sm text-muted-foreground">
                              Your heart rate data suggests you could benefit from increasing the intensity of your
                              cardio workouts by 10-15%.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/20 p-2">
                            <Clock className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Optimize Sleep Schedule</h4>
                            <p className="text-sm text-muted-foreground">
                              Going to bed 30 minutes earlier could improve your deep sleep cycles and overall recovery.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/20 p-2">
                            <AlertTriangle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Recovery Day Needed</h4>
                            <p className="text-sm text-muted-foreground">
                              Your activity patterns and heart rate variability indicate you should take a recovery day
                              within the next 48 hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Goal Progress</CardTitle>
                      <CardDescription>Your current fitness goals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <GoalTracker />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Dashboard</CardTitle>
                    <CardDescription>Your recent workouts and activity metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-muted-foreground py-10">
                      Activity tracking content will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="health" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Health Metrics</CardTitle>
                    <CardDescription>Detailed health data and analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-muted-foreground py-10">
                      Health metrics content will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="goals" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Fitness Goals</CardTitle>
                    <CardDescription>Set and track your personal fitness goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-muted-foreground py-10">
                      Goals tracking content will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="insights" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                    <CardDescription>Personalized insights and predictions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-muted-foreground py-10">
                      AI insights content will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="calendar" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Calendar</CardTitle>
                    <CardDescription>View your activity history and schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ActivityCalendar />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

