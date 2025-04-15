"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Heart,
  Clock,
  Zap,
  BarChart2,
  ArrowRight,
  Download,
  Share2,
  Plus,
} from "lucide-react"
import { HealthRiskPredictor } from "@/components/health-risk-predictor"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState("predictions")
  const [timeRange, setTimeRange] = useState("30days")

  return (
    <DashboardShell
      title="AI Insights"
      description="Personalized insights and predictions powered by artificial intelligence"
    >
      <div className="flex items-center justify-between mb-4">
        <Tabs defaultValue="predictions" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </Tabs>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <TabsContent value="predictions" className="space-y-4 mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Health Risk Score</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Low</div>
                <p className="text-xs text-muted-foreground">Based on your current metrics</p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-green-600 font-medium">Improved from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fitness Potential</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">High</div>
                <p className="text-xs text-muted-foreground">Based on your progress rate</p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-xs text-primary font-medium">+15% improvement potential</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recovery Status</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Optimal</div>
                <p className="text-xs text-muted-foreground">Based on HRV and sleep data</p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-green-600 font-medium">Ready for high intensity</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Predicted VO2 Max</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.8</div>
                <p className="text-xs text-muted-foreground">ml/kg/min (Good)</p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-xs text-primary font-medium">+2.3 from last measurement</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Health Risk Assessment</CardTitle>
              <CardDescription>AI-powered prediction based on your data</CardDescription>
            </CardHeader>
            <CardContent>
              <HealthRiskPredictor />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Predictions</CardTitle>
                <CardDescription>AI-estimated performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">5K Run Time</h4>
                        <p className="text-xs text-muted-foreground">Predicted: 24:12 (based on recent training)</p>
                      </div>
                    </div>
                    <Badge variant="outline">-0:48 from PR</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Max Strength (Bench Press)</h4>
                        <p className="text-xs text-muted-foreground">Predicted: 185 lbs (based on recent lifts)</p>
                      </div>
                    </div>
                    <Badge variant="outline">+15 lbs from last test</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Resting Heart Rate (30 days)</h4>
                        <p className="text-xs text-muted-foreground">Predicted trend: Decreasing by 2-3 BPM</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Improving
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Long-term Projections</CardTitle>
                <CardDescription>Where your fitness is heading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">3-Month Projection</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Cardiovascular Fitness</span>
                        <span className="text-green-600">+12%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Strength Metrics</span>
                        <span className="text-green-600">+8%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Recovery Efficiency</span>
                        <span className="text-green-600">+15%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Body Composition</span>
                        <span className="text-green-600">+5%</span>
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
                      <span>View detailed projection</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">6-Month Projection</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on your current training patterns and consistency
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          You're on track to reach your fitness goals by September 2025 if you maintain your current
                          training schedule and gradually increase intensity by 5-10% monthly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>AI-generated suggestions based on your data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-2 mt-1">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Increase Cardio Intensity</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your heart rate data suggests you could benefit from increasing the intensity of your cardio
                        workouts by 10-15%. Try adding interval training 2x per week.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">Cardio</Badge>
                        <Badge variant="secondary">Heart Rate</Badge>
                        <Badge variant="secondary">Intervals</Badge>
                      </div>
                      <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
                        <span>View suggested workouts</span>
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-2 mt-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Optimize Sleep Schedule</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Going to bed 30 minutes earlier (around 10:30 PM) could improve your deep sleep cycles by up to
                        18% and enhance overall recovery. Your optimal wake time appears to be 6:30 AM based on your
                        circadian rhythm patterns.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">Sleep</Badge>
                        <Badge variant="secondary">Recovery</Badge>
                        <Badge variant="secondary">Circadian Rhythm</Badge>
                      </div>
                      <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
                        <span>View sleep optimization plan</span>
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-2 mt-1">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Recovery Day Needed</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your activity patterns and heart rate variability indicate you should take a recovery day within
                        the next 48 hours. Consider light activities like walking or yoga instead of high-intensity
                        training.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">Recovery</Badge>
                        <Badge variant="secondary">HRV</Badge>
                        <Badge variant="secondary">Rest</Badge>
                      </div>
                      <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
                        <span>View recovery activities</span>
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Data Analysis</CardTitle>
              <CardDescription>In-depth analysis of your fitness data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Data analysis visualization will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Generated Reports</CardTitle>
                <CardDescription>AI-generated insights and summaries</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <BarChart2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          {i === 1
                            ? "Monthly Fitness Progress Report"
                            : i === 2
                              ? "Sleep Pattern Analysis"
                              : "Cardiovascular Health Assessment"}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Generated on {i === 1 ? "April 1, 2025" : i === 2 ? "March 15, 2025" : "February 28, 2025"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <span>View All Reports</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </div>
    </DashboardShell>
  )
}
