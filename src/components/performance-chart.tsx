"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"

const chartData = [
  { course: "Math", grade: 85 },
  { course: "History", grade: 92 },
  { course: "Science", grade: 78 },
  { course: "English", grade: 88 },
  { course: "Art", grade: 95 },
]

const chartConfig = {
  grade: {
    label: "Grade",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Performance</CardTitle>
        <CardDescription>Your grades across different courses.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="course"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="grade" fill="var(--color-grade)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
