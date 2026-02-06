'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadialBar, RadialBarChart, PolarAngleAxis, ResponsiveContainer } from "recharts";

const cgpa = 8.5;
const attendance = 90;

const cgpaData = [{ name: 'CGPA', value: cgpa, fill: 'hsl(var(--primary))' }];
const attendanceData = [{ name: 'Attendance', value: attendance, fill: 'hsl(var(--chart-2))' }];

const radialBarChartStyle = {
    background: {
        fill: 'hsl(var(--muted))',
    }
} as const;

export function PerformanceTracker() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Performance Overview</CardTitle>
            <CardDescription>Your current CGPA and attendance percentage.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center pt-6">
            <div className="relative h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="80%"
                        outerRadius="100%"
                        data={cgpaData}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <PolarAngleAxis type="number" domain={[0, 10]} angleAxisId={0} tick={false} />
                        <RadialBar background={radialBarChartStyle.background} dataKey="value" cornerRadius={10} />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-bold">{cgpa.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">CGPA</span>
                </div>
            </div>
             <div className="relative h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="80%"
                        outerRadius="100%"
                        data={attendanceData}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar background={radialBarChartStyle.background} dataKey="value" cornerRadius={10} />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-bold">{attendance}%</span>
                    <span className="text-sm text-muted-foreground">Attendance</span>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
