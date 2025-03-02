import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Activity, BarChart2, Target, Heart, TrendingUp, Brain } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Activity className="h-6 w-6 text-primary" />
            <span>FitIQ</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </Link>
            <Link href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Intelligent Fitness Tracking for Your Personal Journey
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    FitIQ uses advanced AI to deliver personalized insights, predict health risks, and help you achieve
                    your fitness goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="FitIQ Dashboard Preview"
                width={550}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Intelligent Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our fitness tracker goes beyond basic metrics to provide deep personalization and predictive insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Brain className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>AI-Powered Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced algorithms analyze your data to provide personalized recommendations tailored to your
                    unique fitness profile.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Predictive Health Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Forecast potential health risks based on your historical data and activity patterns to help you make
                    proactive decisions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Advanced Visualization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Interactive charts and graphs help you track long-term trends and understand the impact of your
                    fitness activities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Smart Goal Setting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Set realistic, achievable goals based on your personal data and receive adaptive guidance to reach
                    them.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Holistic Health Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Track not just physical activity but sleep patterns, stress levels, and recovery metrics for a
                    complete health picture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Activity className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Real-time Feedback</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Receive immediate insights during workouts to optimize performance and prevent potential injuries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Roadmap</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our development journey and upcoming milestones
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-8">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-green-500 border-l-4">
                  <CardHeader>
                    <CardTitle>Completed Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Field research and user insights gathering</li>
                      <li>Preliminary AI model development for health risk prediction</li>
                      <li>Initial design phase and user interface mockups</li>
                      <li>Core feature specification and prioritization</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-blue-500 border-l-4">
                  <CardHeader>
                    <CardTitle>Upcoming Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Prototype development with integrated AI features</li>
                      <li>User testing phase and feedback collection</li>
                      <li>Refinement based on user testing insights</li>
                      <li>Final integration of all features</li>
                      <li>Beta launch and deployment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <h3 className="font-bold">Agile Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        Iterative cycles of design, development, and testing to ensure continuous improvement.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">User-Centered Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Continuous user feedback to refine and adapt the solution to real-world needs.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Data-Driven Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Using data from users and sensors to improve system accuracy and personalization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Activity className="h-5 w-5 text-primary" />
            <span>FitIQ</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FitIQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

