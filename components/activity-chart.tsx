"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data - in a real app, this would come from your API
const generateData = () => {
  const data = []
  const now = new Date()
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generate some realistic looking data with slight trends
    const steps = Math.floor(6000 + Math.random() * 6000)
    const activeMinutes = Math.floor(60 + Math.random() * 60)
    const caloriesBurned = Math.floor(1500 + Math.random() * 1000)

    data.push({
      date: date.toLocaleDateString("en-US", { weekday: "short" }),
      steps,
      activeMinutes,
      caloriesBurned,
    })
  }
  return data
}

export function ActivityChart() {
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
    activeMinutes: {
      name: "Active Minutes",
      color: "#10b981",
      unit: "min",
    },
    caloriesBurned: {
      name: "Calories",
      color: "#ef4444",
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
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="activeMinutes">Active Minutes</TabsTrigger>
          <TabsTrigger value="caloriesBurned">Calories</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} tickMargin={10} />
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
