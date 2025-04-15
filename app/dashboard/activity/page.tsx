"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { DashboardShell } from "@/components/dashboard-shell"
import { Activity, Clock, Flame, Heart, Plus, Dumbbell } from "lucide-react"
import { ActivityChart } from "@/components/activity-chart"
import { WorkoutList } from "@/components/workout-list"

export default function ActivityDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardShell title="Activity Dashboard" description="Track and analyze your workouts and physical activity">
      <Tabs defaultValue="overview" className="space-y-4" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
        </TabsList>

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
                <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87 min</div>
                <p className="text-xs text-muted-foreground">+23 min from average</p>
                <Progress value={72} className="mt-2" />
                <p className="mt-1 text-xs text-muted-foreground">72% of daily goal</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                <Flame className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,842</div>
                <p className="text-xs text-muted-foreground">+8% from average</p>
                <Progress value={61} className="mt-2" />
                <p className="mt-1 text-xs text-muted-foreground">61% of daily goal</p>
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
          </div>

          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Activity Trends</CardTitle>
                <CardDescription>Your activity metrics over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Workouts</CardTitle>
                  <CardDescription>Your last 5 workout sessions</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <WorkoutList />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Activity Distribution</CardTitle>
                <CardDescription>Breakdown of your activity types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium">Running</span>
                      </div>
                      <span className="text-sm">42%</span>
                    </div>
                    <Progress value={42} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium">Cycling</span>
                      </div>
                      <span className="text-sm">28%</span>
                    </div>
                    <Progress value={28} className="bg-muted [&>div]:bg-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm font-medium">Strength Training</span>
                      </div>
                      <span className="text-sm">18%</span>
                    </div>
                    <Progress value={18} className="bg-muted [&>div]:bg-purple-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Yoga</span>
                      </div>
                      <span className="text-sm">12%</span>
                    </div>
                    <Progress value={12} className="bg-muted [&>div]:bg-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity Summary</CardTitle>
                <CardDescription>Your activity for the current week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-xs font-medium">{day}</span>
                        <div
                          className={`mt-2 h-16 w-full rounded-md ${i <= 3 ? "bg-primary/20" : "bg-muted"} relative`}
                        >
                          <div
                            className={`absolute bottom-0 w-full rounded-md bg-primary ${i > 3 ? "h-0" : ""}`}
                            style={{
                              height: i === 0 ? "40%" : i === 1 ? "65%" : i === 2 ? "30%" : i === 3 ? "80%" : "0%",
                            }}
                          ></div>
                        </div>
                        <span className="mt-1 text-xs">
                          {i === 0 ? "4.2k" : i === 1 ? "6.8k" : i === 2 ? "3.1k" : i === 3 ? "8.5k" : "-"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div>
                      <p className="text-sm font-medium">Weekly Total</p>
                      <p className="text-xs text-muted-foreground">22,600 steps</p>
                    </div>
                    <Badge variant="secondary">+18% vs last week</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Workout History</CardTitle>
                <CardDescription>All your recorded workout sessions</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          {i % 3 === 0 ? (
                            <Dumbbell className="h-5 w-5 text-primary" />
                          ) : i % 2 === 0 ? (
                            <Activity className="h-5 w-5 text-primary" />
                          ) : (
                            <Heart className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {i % 3 === 0 ? "Strength Training" : i % 2 === 0 ? "Running" : "HIIT Workout"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {`April ${i + 1}, 2025 • ${i % 2 === 0 ? "Morning" : "Evening"}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{i % 3 === 0 ? "45 min" : i % 2 === 0 ? "5.2 km" : "32 min"}</p>
                        <p className="text-xs text-muted-foreground">
                          {i % 3 === 0 ? "320 cal" : i % 2 === 0 ? "410 cal" : "380 cal"}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Avg Heart Rate</span>
                        <span className="font-medium">{120 + i * 5} BPM</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Max Heart Rate</span>
                        <span className="font-medium">{160 + i * 3} BPM</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Intensity</span>
                        <div className="flex items-center gap-1">
                          {Array(5)
                            .fill(0)
                            .map((_, j) => (
                              <div
                                key={j}
                                className={`h-1.5 w-1.5 rounded-full ${j < (i % 5) + 1 ? "bg-primary" : "bg-muted"}`}
                              />
                            ))}
                          <span className="ml-1 text-xs">{(i % 5) + 1}/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Trends Analysis</CardTitle>
              <CardDescription>Long-term patterns in your activity data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Activity trends visualization will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity History</CardTitle>
              <CardDescription>Complete record of your past activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Activity history will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
