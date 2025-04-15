"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Target,
  Award,
  Calendar,
  TrendingUp,
  CheckCircle2,
  Clock,
  BarChart2,
  Edit,
  Trash2,
  ChevronRight,
  Heart,
} from "lucide-react"
import { GoalTracker } from "@/components/goal-tracker"

export default function GoalsPage() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <DashboardShell title="Fitness Goals" description="Set, track, and achieve your personal fitness goals">
      <div className="flex items-center justify-between mb-4">
        <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="active">Active Goals</TabsTrigger>
            {/* <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger> */}
          </TabsList>
          <div className="py-4 space-y-4">
            <TabsContent value="active" className="space-y-4 mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">Goals in progress</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">68%</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                    <Progress value={68} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Goals due this week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Goal Streak</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12 days</div>
                    <p className="text-xs text-muted-foreground">Current streak</p>
                    <div className="mt-2 flex gap-1">
                      {Array(7)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className={`h-1.5 w-full rounded-full ${i < 5 ? "bg-primary" : "bg-muted"}`} />
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Current Goals</CardTitle>
                  <CardDescription>Track and manage your active fitness goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Run 20 miles per week</h3>
                            <p className="text-xs text-muted-foreground">Cardio • Ends in 3 days</p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                        >
                          On Track
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">12.4 / 20 miles</span>
                        </div>
                        <Progress value={62} />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Weekly</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <BarChart2 className="h-3.5 w-3.5" />
                            <span>+18% vs last week</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Meditate 10 minutes daily</h3>
                            <p className="text-xs text-muted-foreground">Wellness • Ongoing</p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                        >
                          Needs Attention
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">5 / 7 days this week</span>
                        </div>
                        <Progress value={71} />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Daily</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <BarChart2 className="h-3.5 w-3.5" />
                            <span>-5% vs last week</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Strength training 3x weekly</h3>
                            <p className="text-xs text-muted-foreground">Strength • Ends in 2 days</p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                        >
                          On Track
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">2 / 3 sessions</span>
                        </div>
                        <Progress value={67} />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Weekly</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <BarChart2 className="h-3.5 w-3.5" />
                            <span>Same as last week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Goal Recommendations</CardTitle>
                    <CardDescription>AI-suggested goals based on your activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border p-3 ">
                        <div className="flex items-center gap-3 pr-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <TrendingUp className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Increase weekly running distance by 10%</h4>
                            <p className="text-xs text-muted-foreground">Based on your recent progress</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border p-3 ">
                        <div className="flex items-center gap-3 pr-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <Heart className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Add 2 HIIT sessions per week</h4>
                            <p className="text-xs text-muted-foreground">To improve cardiovascular health</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border p-3 ">
                        <div className="flex items-center gap-3 pr-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Improve sleep quality score to 85%</h4>
                            <p className="text-xs text-muted-foreground">For better recovery and performance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Goal Progress Summary</CardTitle>
                    <CardDescription>Overview of your goal achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <GoalTracker />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Goals</CardTitle>
                  <CardDescription>Your achieved fitness milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              {i === 1
                                ? "Complete 10K steps daily for 30 days"
                                : i === 2
                                  ? "Lose 5 pounds in 8 weeks"
                                  : "Complete first half marathon"}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              Completed on {i === 1 ? "March 15, 2025" : i === 2 ? "February 28, 2025" : "January 12, 2025"}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <span>Details</span>
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Goal Templates</CardTitle>
                  <CardDescription>Pre-defined goals to help you get started</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              {i === 1
                                ? "5K Training Plan"
                                : i === 2
                                  ? "30-Day Strength Challenge"
                                  : i === 3
                                    ? "Weight Loss Program"
                                    : "Flexibility Improvement"}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {i === 1
                                ? "8-week running program"
                                : i === 2
                                  ? "Daily strength exercises"
                                  : i === 3
                                    ? "12-week nutrition and exercise plan"
                                    : "4-week stretching routine"}
                            </p>
                          </div>
                        </div>
                        <Button size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          <span>Use Template</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
