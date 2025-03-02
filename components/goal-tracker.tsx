"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function GoalTracker() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: "Run 20 miles per week",
      current: 12.4,
      target: 20,
      unit: "miles",
      daysLeft: 3,
    },
    {
      id: 2,
      name: "Meditate 10 minutes daily",
      current: 5,
      target: 7,
      unit: "days",
      daysLeft: 0,
    },
    {
      id: 3,
      name: "Strength training 3x weekly",
      current: 2,
      target: 3,
      unit: "sessions",
      daysLeft: 2,
    },
  ])

  return (
    <div className="space-y-4">
      {goals.map((goal) => {
        const progress = Math.min(100, Math.round((goal.current / goal.target) * 100))
        return (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">{goal.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {goal.daysLeft > 0 ? `${goal.daysLeft} days left` : "Due today"}
                </p>
              </div>
              <div className="text-sm font-medium">
                {goal.current} / {goal.target} {goal.unit}
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )
      })}

      <Button variant="outline" size="sm" className="w-full mt-4">
        <Plus className="h-4 w-4 mr-2" />
        Add New Goal
      </Button>
    </div>
  )
}

