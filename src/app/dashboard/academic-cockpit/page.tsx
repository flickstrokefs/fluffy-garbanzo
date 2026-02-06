import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { assignments, courses, timetable } from "@/lib/mock-data";
import { PerformanceChart } from "@/components/performance-chart";
import { SummarizeAssignmentAction } from "@/components/ai/summarize-assignment-action";

export default function AcademicCockpitPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">The Academic Cockpit</h1>
        <p className="text-muted-foreground">Your central hub for all things academic.</p>
      </div>

      <Tabs defaultValue="assignments">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="timetable">Timetable</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="assignments">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Upcoming Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignments.map(assignment => (
                    <TableRow key={assignment.id}>
                      <TableCell className="font-medium">{assignment.course}</TableCell>
                      <TableCell>{assignment.title}</TableCell>
                      <TableCell>{new Date(assignment.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <SummarizeAssignmentAction assignment={assignment} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timetable">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Weekly Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(timetable).map(([day, classes]) => (
                  <div key={day}>
                    <h3 className="font-semibold capitalize mb-2">{day}</h3>
                    {classes.length > 0 ? (
                      <div className="space-y-2">
                      {classes.map((c, i) => (
                        <div key={i} className="p-2 bg-accent/50 rounded-md text-sm">
                          <p className="font-medium">{c.time}: {c.course}</p>
                          <p className="text-muted-foreground">{c.location}</p>
                        </div>
                      ))}
                      </div>
                    ) : <p className="text-sm text-muted-foreground">No classes scheduled.</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses">
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{course.name}</CardTitle>
                  <CardDescription>Instructor: {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Progress</p>
                    <Progress value={course.progress} />
                    <p className="text-xs text-muted-foreground">{course.progress}% complete</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="performance">
          <PerformanceChart />
        </TabsContent>
      </Tabs>
    </div>
  );
}
