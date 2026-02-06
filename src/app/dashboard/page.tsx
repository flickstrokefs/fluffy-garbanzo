import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Newspaper, Users, Map, BookOpen, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { PerformanceTracker } from "@/components/performance-tracker"

const features = [
  {
    title: "Daily Pulse",
    description: "Mess menu, mails, and announcements.",
    href: "/dashboard/daily-pulse",
    icon: <Newspaper className="w-8 h-8 text-primary" />,
  },
  {
    title: "Student Exchange",
    description: "Marketplace, lost & found, and more.",
    href: "/dashboard/student-exchange",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Explorer's Guide",
    description: "Discover nearby places and navigate campus.",
    href: "/dashboard/explorers-guide",
    icon: <Map className="w-8 h-8 text-primary" />,
  },
  {
    title: "Academic Cockpit",
    description: "Timetable, courses, and assignments.",
    href: "/dashboard/academic-cockpit",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: "Campus Assistant",
    description: "Your conversational guide to campus.",
    href: "/dashboard/chatbot",
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome, Student!</h1>
        <p className="text-muted-foreground">Here's your campus companion overview.</p>
      </div>

      <PerformanceTracker />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title} className="group">
            <Card className="hover:border-primary hover:shadow-lg transition-all h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium font-headline">
                  {feature.title}
                </CardTitle>
                {feature.icon}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
               <CardContent>
                <div className="text-sm font-medium text-primary flex items-center">
                  Go to {feature.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
