"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ActivityCalendar() {
  const [date, setDate] = useState(new Date())

  // Sample activity data - in a real app, this would come from your API
  const activityData = {
    "2025-03-01": { steps: 12345, workouts: ["Running", "Yoga"] },
    "2025-03-02": { steps: 8765, workouts: ["Strength Training"] },
    "2025-03-03": { steps: 10234, workouts: ["Cycling", "Swimming"] },
    "2025-02-28": { steps: 9876, workouts: ["HIIT", "Stretching"] },
    "2025-02-27": { steps: 7654, workouts: ["Running"] },
  }

  // Convert date to string format for lookup
  const formatDate = (date) => {
    return date.toISOString().split("T")[0]
  }

  // Get activity for selected date
  const selectedDateActivity = activityData[formatDate(date)]

  // Custom day rendering to show activity indicators
  const renderDay = (day) => {
    const dateStr = formatDate(day)
    const hasActivity = activityData[dateStr]

    if (!hasActivity) return null

    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date) => date && setDate(date)}
        className="rounded-md border"
        components={{
          DayContent: (props) => (
            <div className="relative h-9 w-9 p-0 flex items-center justify-center">
              <span>{props.day.day}</span>
              <div className="absolute bottom-1">{renderDay(props.day.date)}</div>
            </div>
          ),
        }}
      />

      {selectedDateActivity ? (
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">
              Activity for {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Steps</p>
                <p className="text-lg font-medium">{selectedDateActivity.steps.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Workouts</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedDateActivity.workouts.map((workout, i) => (
                    <Badge key={i} variant="secondary">
                      {workout}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">No activity data for this date</CardContent>
        </Card>
      )}
    </div>
  )
}
