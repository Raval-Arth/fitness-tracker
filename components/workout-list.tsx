"use client"
import { Button } from "@/components/ui/button"
import { Activity, Dumbbell, Heart, MoreHorizontal } from "lucide-react"

export function WorkoutList() {
  // Sample data - in a real app, this would come from your API
  const workouts = [
    {
      id: 1,
      type: "Running",
      date: "Today",
      time: "7:30 AM",
      duration: "32 min",
      distance: "5.2 km",
      calories: 410,
      intensity: 4,
    },
    {
      id: 2,
      type: "Strength Training",
      date: "Yesterday",
      time: "6:15 PM",
      duration: "45 min",
      calories: 320,
      intensity: 5,
    },
    {
      id: 3,
      type: "HIIT",
      date: "April 2, 2025",
      time: "8:00 AM",
      duration: "25 min",
      calories: 380,
      intensity: 5,
    },
    {
      id: 4,
      type: "Yoga",
      date: "April 1, 2025",
      time: "7:00 PM",
      duration: "60 min",
      calories: 220,
      intensity: 2,
    },
    {
      id: 5,
      type: "Cycling",
      date: "March 31, 2025",
      time: "5:30 PM",
      duration: "40 min",
      distance: "12.5 km",
      calories: 450,
      intensity: 4,
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              {workout.type === "Running" || workout.type === "Cycling" ? (
                <Activity className="h-5 w-5 text-primary" />
              ) : workout.type === "Strength Training" || workout.type === "HIIT" ? (
                <Dumbbell className="h-5 w-5 text-primary" />
              ) : (
                <Heart className="h-5 w-5 text-primary" />
              )}
            </div>
            <div>
              <p className="font-medium">{workout.type}</p>
              <p className="text-xs text-muted-foreground">
                {workout.date} • {workout.time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{workout.distance ? workout.distance : workout.duration}</p>
              <p className="text-xs text-muted-foreground">{workout.calories} cal</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
