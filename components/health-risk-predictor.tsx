"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function HealthRiskPredictor() {
  const [risks, setRisks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to get AI-predicted health risks
    setTimeout(() => {
      setRisks([
        {
          name: "Cardiovascular Risk",
          score: 18,
          description: "Based on your heart rate patterns and activity level, your cardiovascular risk is low.",
          recommendations: [
            "Continue with regular cardio exercise",
            "Consider adding interval training for heart health",
          ],
        },
        {
          name: "Sleep Quality Risk",
          score: 42,
          description: "Your sleep patterns show some irregularity which may impact recovery and overall health.",
          recommendations: ["Establish a consistent sleep schedule", "Reduce screen time 1 hour before bed"],
        },
        {
          name: "Stress Level Risk",
          score: 35,
          description: "Your heart rate variability indicates moderate stress levels.",
          recommendations: [
            "Consider adding meditation to your routine",
            "Schedule regular breaks during high-intensity work periods",
          ],
        },
      ])
      setLoading(false)
    }, 1500)
  }, [])

  const getRiskLevel = (score) => {
    if (score < 20) return { level: "Low", color: "bg-green-500" }
    if (score < 50) return { level: "Moderate", color: "bg-yellow-500" }
    if (score < 80) return { level: "High", color: "bg-orange-500" }
    return { level: "Very High", color: "bg-red-500" }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <div className="animate-pulse flex space-x-2">
          <div className="h-3 w-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 bg-primary rounded-full animate-bounce"></div>
        </div>
        <p className="text-sm text-muted-foreground">AI analyzing your health data...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">AI-powered risk assessment based on your data</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Info className="h-4 w-4" />
                <span className="sr-only">About risk assessment</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-xs">
                This assessment uses AI to analyze your health data and predict potential risks. It is not a medical
                diagnosis and should not replace professional medical advice.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="space-y-4">
        {risks.map((risk, index) => {
          const { level, color } = getRiskLevel(risk.score)
          return (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h4 className="font-medium">{risk.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`h-2 w-2 rounded-full ${color}`}></span>
                      <span className="text-sm">{level} Risk</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{risk.score}%</div>
                </div>
                <Progress value={risk.score} className="rounded-none h-1" />
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">{risk.description}</p>
                  <div className="mt-2">
                    <h5 className="text-sm font-medium mb-1">Recommendations:</h5>
                    <ul className="text-sm space-y-1">
                      {risk.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
