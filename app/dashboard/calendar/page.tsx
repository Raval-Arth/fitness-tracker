"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardShell } from "@/components/dashboard-shell"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Activity,
  Dumbbell,
  Heart,
  Clock,
  MoreHorizontal,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActivityCalendar } from "@/components/activity-calendar"

export default function CalendarPage() {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState("month")

  // Sample activity data - in a real app, this would come from your API
  const activityData = {
    "2025-04-01": { steps: 12345, workouts: ["Running", "Yoga"] },
    "2025-04-02": { steps: 8765, workouts: ["Strength Training"] },
    "2025-04-03": { steps: 10234, workouts: ["Cycling", "Swimming"] },
    "2025-03-28": { steps: 9876, workouts: ["HIIT", "Stretching"] },
    "2025-03-27": { steps: 7654, workouts: ["Running"] },
  }

  // Convert date to string format for lookup
  const formatDate = (date) => {
    return date.toISOString().split("T")[0]
  }

  // Get activity for selected date
  const selectedDateActivity = activityData[formatDate(date)]

  return (
    <DashboardShell title="Activity Calendar" description="Schedule and track your workouts and activities">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const newDate = new Date(date)
              newDate.setMonth(newDate.getMonth() - 1)
              setDate(newDate)
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const newDate = new Date(date)
              newDate.setMonth(newDate.getMonth() + 1)
              setDate(newDate)
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">
            {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h2>
          <Button variant="ghost" size="sm" onClick={() => setDate(new Date())}>
            Today
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Select value={view} onValueChange={setView}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="day">Day</SelectItem>
            </SelectContent>
          </Select>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Activity
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardContent className="p-0">
            <ActivityCalendar />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>
              {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </CardTitle>
            <CardDescription>{selectedDateActivity ? "Activity details" : "No activities scheduled"}</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateActivity ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Activity Summary</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                      <Activity className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">{selectedDateActivity.steps.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">Steps</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                      <Dumbbell className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">{selectedDateActivity.workouts.length}</span>
                      <span className="text-xs text-muted-foreground">Workouts</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Workouts</h3>
                  <div className="space-y-3">
                    {selectedDateActivity.workouts.map((workout, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            {workout === "Running" ? (
                              <Activity className="h-4 w-4 text-primary" />
                            ) : workout === "Strength Training" || workout === "HIIT" ? (
                              <Dumbbell className="h-4 w-4 text-primary" />
                            ) : workout === "Yoga" || workout === "Stretching" ? (
                              <Heart className="h-4 w-4 text-primary" />
                            ) : (
                              <Clock className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{workout}</p>
                            <p className="text-xs text-muted-foreground">
                              {i === 0 ? "7:00 AM - 8:00 AM" : "6:00 PM - 7:00 PM"}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                <h3 className="font-medium mb-1">No Activities</h3>
                <p className="text-sm text-muted-foreground mb-4">There are no activities scheduled for this day.</p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Activity
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
            <CardDescription>Your scheduled workouts for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => {
                const futureDate = new Date()
                futureDate.setDate(futureDate.getDate() + i)

                return (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
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
                          {i % 3 === 0 ? "Strength Training" : i % 2 === 0 ? "Running" : "Yoga"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {futureDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}{" "}
                          • {i % 2 === 0 ? "7:00 AM" : "6:00 PM"}
                        </p>
                      </div>
                    </div>
                    <Badge variant={i === 1 ? "default" : "outline"}>
                      {i === 1 ? "Tomorrow" : i === 2 ? "In 2 days" : `In ${i} days`}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Patterns</CardTitle>
            <CardDescription>Your workout frequency and consistency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Weekly Distribution</h3>
                <div className="grid grid-cols-7 gap-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-xs font-medium">{day}</span>
                      <div className="mt-2 h-20 w-full rounded-md bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full rounded-md bg-primary"
                          style={{
                            height:
                              i === 0
                                ? "80%"
                                : i === 1
                                  ? "40%"
                                  : i === 2
                                    ? "60%"
                                    : i === 3
                                      ? "30%"
                                      : i === 4
                                        ? "70%"
                                        : i === 5
                                          ? "90%"
                                          : "20%",
                          }}
                        ></div>
                      </div>
                      <span className="mt-1 text-xs">
                        {i === 0
                          ? "3"
                          : i === 1
                            ? "1"
                            : i === 2
                              ? "2"
                              : i === 3
                                ? "1"
                                : i === 4
                                  ? "2"
                                  : i === 5
                                    ? "3"
                                    : "1"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t">
                <h3 className="text-sm font-medium mb-2">Most Active Times</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-primary mb-1" />
                    <span className="text-lg font-bold">Morning</span>
                    <span className="text-xs text-muted-foreground">6:00 AM - 8:00 AM</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                    <Activity className="h-5 w-5 text-primary mb-1" />
                    <span className="text-lg font-bold">Evening</span>
                    <span className="text-xs text-muted-foreground">5:00 PM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
