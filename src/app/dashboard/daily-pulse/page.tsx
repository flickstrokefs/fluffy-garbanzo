import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { announcements, mails, messMenu } from "@/lib/mock-data";
import { SummarizeDailyPulseAction } from "@/components/ai/summarize-daily-pulse-action";

export default function DailyPulsePage() {
  const dailyPulseData = {
    messMenu: JSON.stringify(messMenu),
    mails: mails.map(m => `${m.sender}: ${m.subject}`).join(', '),
    announcements: announcements.map(a => a.title).join(', '),
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">The Daily Pulse</h1>
        <p className="text-muted-foreground">Your daily digest of campus happenings.</p>
      </div>

      <SummarizeDailyPulseAction data={dailyPulseData} />

      <Tabs defaultValue="mess">
        <TabsList>
          <TabsTrigger value="mess">Mess Menu</TabsTrigger>
          <TabsTrigger value="mails">Mails</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        <TabsContent value="mess">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Today's Mess Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Meal</TableHead>
                    <TableHead>Menu</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Breakfast</TableCell>
                    <TableCell>{messMenu.breakfast}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lunch</TableCell>
                    <TableCell>{messMenu.lunch}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dinner</TableCell>
                    <TableCell>{messMenu.dinner}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mails">
          <div className="space-y-4">
            {mails.map(mail => (
              <Card key={mail.id}>
                <CardHeader>
                  <CardTitle className="text-base font-medium">{mail.subject}</CardTitle>
                  <CardDescription>From: {mail.sender}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{mail.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="announcements">
          <div className="space-y-4">
            {announcements.map(announcement => (
              <Card key={announcement.id}>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{announcement.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
