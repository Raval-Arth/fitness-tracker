import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface DashboardShellProps {
  title: string
  description?: string
  children: React.ReactNode
  backLink?: string
  backLinkText?: string
}

export function DashboardShell({ title, description, children, backLink, backLinkText = "Back" }: DashboardShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          {backLink && (
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <Link href={backLink}>
                <ArrowLeft className="h-4 w-4" />
                {backLinkText}
              </Link>
            </Button>
          )}
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
