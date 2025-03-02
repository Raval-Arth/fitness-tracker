"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data - in a real app, this would come from your API
const generateData = () => {
  const data = []
  const now = new Date()
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generate some realistic looking data with slight trends
    const steps = Math.floor(6000 + Math.random() * 6000)
    const heartRate = Math.floor(60 + Math.random() * 20)
    const sleepHours = 5 + Math.random() * 4
    const caloriesBurned = Math.floor(1800 + Math.random() * 800)

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      steps,
      heartRate,
      sleepHours: Number.parseFloat(sleepHours.toFixed(1)),
      caloriesBurned,
    })
  }
  return data
}

export function HealthMetricsChart() {
  const [data, setData] = useState([])
  const [activeMetric, setActiveMetric] = useState("steps")

  useEffect(() => {
    setData(generateData())
  }, [])

  const metrics = {
    steps: {
      name: "Steps",
      color: "#3b82f6",
      unit: "steps",
    },
    heartRate: {
      name: "Heart Rate",
      color: "#ef4444",
      unit: "bpm",
    },
    sleepHours: {
      name: "Sleep",
      color: "#8b5cf6",
      unit: "hours",
    },
    caloriesBurned: {
      name: "Calories",
      color: "#10b981",
      unit: "kcal",
    },
  }

  const formatYAxis = (value) => {
    if (activeMetric === "steps" || activeMetric === "caloriesBurned") {
      return value.toLocaleString()
    }
    return value
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const metric = metrics[activeMetric]
      return (
        <Card className="p-2 shadow-lg border">
          <p className="font-medium">{label}</p>
          <p className="text-sm">
            {metric.name}: {payload[0].value.toLocaleString()} {metric.unit}
          </p>
        </Card>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeMetric} onValueChange={setActiveMetric} className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="heartRate">Heart Rate</TabsTrigger>
          <TabsTrigger value="sleepHours">Sleep</TabsTrigger>
          <TabsTrigger value="caloriesBurned">Calories</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              tickMargin={10}
              tickFormatter={(value, index) => (index % 3 === 0 ? value : "")}
            />
            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12 }} tickMargin={10} domain={["auto", "auto"]} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey={activeMetric}
              stroke={metrics[activeMetric].color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

