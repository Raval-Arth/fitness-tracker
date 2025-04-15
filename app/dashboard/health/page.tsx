"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardShell } from "@/components/dashboard-shell"
import { Heart, Droplet, Brain, TreesIcon as Lungs, Utensils, Clock, Plus, AlertTriangle } from "lucide-react"
import { HealthMetricsChart } from "@/components/health-metrics-chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HealthMetricsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeRange, setTimeRange] = useState("30days")

  return (
    <DashboardShell title="Health Metrics" description="Comprehensive view of your health data and vital statistics">
      <div className="flex items-center justify-between mb-4">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>


          <div className="py-4 space-y-4">
            <TabsContent value="overview" className="space-y-4 mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Resting Heart Rate</CardTitle>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">68 BPM</div>
                    <p className="text-xs text-muted-foreground">-4 BPM from last month</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-medium">Low</span>
                      <Progress value={45} className="flex-1" />
                      <span className="text-xs font-medium">High</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Healthy range: 60-100 BPM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Blood Oxygen</CardTitle>
                    <Droplet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">98%</div>
                    <p className="text-xs text-muted-foreground">+1% from average</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-medium">90%</span>
                      <Progress value={80} className="flex-1" />
                      <span className="text-xs font-medium">100%</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Healthy range: 95-100%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Stress Level</CardTitle>
                    <Brain className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Medium</div>
                    <p className="text-xs text-muted-foreground">Based on HRV analysis</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-medium">Low</span>
                      <Progress value={60} className="flex-1" />
                      <span className="text-xs font-medium">High</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Trending downward</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Respiratory Rate</CardTitle>
                    <Lungs className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">14 BPM</div>
                    <p className="text-xs text-muted-foreground">Normal range</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-medium">12</span>
                      <Progress value={40} className="flex-1" />
                      <span className="text-xs font-medium">20</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Healthy range: 12-20 BPM</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-7">
                <Card className="md:col-span-4">
                  <CardHeader>
                    <CardTitle>Health Metrics Trend</CardTitle>
                    <CardDescription>Your key metrics over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[350px]">
                    <HealthMetricsChart />
                  </CardContent>
                </Card>
                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Sleep Analysis</CardTitle>
                    <CardDescription>Your sleep patterns and quality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">7h 12m</p>
                          <p className="text-xs text-muted-foreground">Average sleep duration</p>
                        </div>
                        <div>
                          <p className="font-medium">82%</p>
                          <p className="text-xs text-muted-foreground">Sleep quality</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Sleep Stages</span>
                          <span>Hours</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-primary"></div>
                              <span className="text-sm">Deep Sleep</span>
                            </div>
                            <span className="text-sm">1h 45m</span>
                          </div>
                          <Progress value={24} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                              <span className="text-sm">Light Sleep</span>
                            </div>
                            <span className="text-sm">3h 30m</span>
                          </div>
                          <Progress value={49} className="bg-muted [&>div]:bg-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                              <span className="text-sm">REM Sleep</span>
                            </div>
                            <span className="text-sm">1h 27m</span>
                          </div>
                          <Progress value={20} className="bg-muted [&>div]:bg-purple-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                              <span className="text-sm">Awake</span>
                            </div>
                            <span className="text-sm">30m</span>
                          </div>
                          <Progress value={7} className="bg-muted [&>div]:bg-gray-500" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Nutrition Overview</CardTitle>
                    <CardDescription>Your dietary patterns and metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                          <Utensils className="h-5 w-5 text-primary mb-1" />
                          <span className="text-lg font-bold">1,850</span>
                          <span className="text-xs text-muted-foreground">Calories</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                          <div className="h-5 w-5 flex items-center justify-center text-primary mb-1 font-bold">P</div>
                          <span className="text-lg font-bold">95g</span>
                          <span className="text-xs text-muted-foreground">Protein</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                          <div className="h-5 w-5 flex items-center justify-center text-primary mb-1 font-bold">H₂O</div>
                          <span className="text-lg font-bold">2.4L</span>
                          <span className="text-xs text-muted-foreground">Water</span>
                        </div>
                      </div>

                      <div className="pt-4 space-y-2">
                        <h4 className="text-sm font-medium">Macronutrient Distribution</h4>
                        <div className="flex h-4 overflow-hidden rounded-full">
                          <div className="bg-primary h-full" style={{ width: "30%" }}></div>
                          <div className="bg-blue-500 h-full" style={{ width: "45%" }}></div>
                          <div className="bg-green-500 h-full" style={{ width: "25%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Protein (30%)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <span>Carbs (45%)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span>Fat (25%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Health Alerts</CardTitle>
                    <CardDescription>Important notifications about your health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-700">Elevated Resting Heart Rate</h4>
                          <p className="text-sm text-yellow-600">
                            Your resting heart rate has been higher than usual for the past 3 days. Consider reducing
                            intensity and focusing on recovery.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-700">Sleep Pattern Change</h4>
                          <p className="text-sm text-blue-600">
                            Your deep sleep has decreased by 15% compared to your monthly average. Consider adjusting your
                            bedtime routine.
                          </p>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="heart" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Heart Health Dashboard</CardTitle>
                  <CardDescription>Detailed analysis of your cardiovascular metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Heart health metrics visualization will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sleep" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Sleep Analysis</CardTitle>
                  <CardDescription>Detailed breakdown of your sleep patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Sleep analysis visualization will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition Tracking</CardTitle>
                  <CardDescription>Analysis of your dietary habits and nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Nutrition tracking visualization will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stress" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Stress Management</CardTitle>
                  <CardDescription>Monitoring and analysis of your stress levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Stress management visualization will be displayed here
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
