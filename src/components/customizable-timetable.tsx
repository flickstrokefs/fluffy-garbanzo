'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { timetable as initialTimetable } from '@/lib/mock-data';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Timetable = typeof initialTimetable;
type TimetableEntry = {
  time: string;
  course: string;
  location: string;
};

const classSchema = z.object({
  day: z.string().min(1, 'Day is required'),
  time: z.string().min(1, 'Time is required'),
  course: z.string().min(1, 'Course is required'),
  location: z.string().min(1, 'Location is required'),
});

type ClassFormValues = z.infer<typeof classSchema>;

export function CustomizableTimetable() {
  const [timetable, setTimetable] = useState<Timetable>(initialTimetable);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<{ day: string; index: number; data: TimetableEntry } | null>(null);

  const { control, handleSubmit, register, reset, setValue } = useForm<ClassFormValues>({
    resolver: zodResolver(classSchema),
    defaultValues: {
      day: '',
      time: '',
      course: '',
      location: '',
    },
  });

  const onSubmit = (data: ClassFormValues) => {
    setTimetable(prev => {
      const newTimetable = { ...prev };
      if (editingClass) {
        // If we are editing, we might need to move the class to a new day.
        // First, remove it from its old position.
        const oldDayClasses = [...newTimetable[editingClass.day]];
        oldDayClasses.splice(editingClass.index, 1);
        newTimetable[editingClass.day] = oldDayClasses;

        // Then add it to the new day's list.
        newTimetable[data.day] = [...(newTimetable[data.day] || []), { time: data.time, course: data.course, location: data.location }];
      } else {
        newTimetable[data.day] = [...(newTimetable[data.day] || []), { time: data.time, course: data.course, location: data.location }];
      }

      // Sort classes by time
      Object.keys(newTimetable).forEach(day => {
        newTimetable[day].sort((a, b) => a.time.localeCompare(b.time));
      });
      
      return newTimetable;
    });
    reset();
    setIsDialogOpen(false);
    setEditingClass(null);
  };
  
  const handleEdit = (day: string, index: number, classData: TimetableEntry) => {
    setEditingClass({ day, index, data: classData });
    setValue('day', day);
    setValue('time', classData.time);
    setValue('course', classData.course);
    setValue('location', classData.location);
    setIsDialogOpen(true);
  };
  
  const handleDelete = (day: string, index: number) => {
    setTimetable(prev => {
      const newTimetable = { ...prev };
      const dayClasses = [...newTimetable[day]];
      dayClasses.splice(index, 1);
      newTimetable[day] = dayClasses;
      return newTimetable;
    });
  };
  
  const openAddDialog = () => {
    reset();
    setEditingClass(null);
    setIsDialogOpen(true);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Weekly Timetable</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog}>
              <Plus className="mr-2 h-4 w-4" /> Add Class
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingClass ? 'Edit Class' : 'Add a new Class'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="day">Day</Label>
                <Controller
                  name="day"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!!editingClass}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a day" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(initialTimetable).map(day => (
                          <SelectItem key={day} value={day} className="capitalize">{day}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input id="time" {...register('time')} placeholder="e.g., 09:00 - 10:00" />
              </div>
              <div>
                <Label htmlFor="course">Course</Label>
                <Input id="course" {...register('course')} placeholder="e.g., Data Structures" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" {...register('location')} placeholder="e.g., Room 101" />
              </div>
              <DialogFooter>
                <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(timetable).map(([day, classes]) => (
            <div key={day}>
              <h3 className="font-semibold capitalize mb-2 border-b pb-1">{day}</h3>
              {classes.length > 0 ? (
                <div className="space-y-2">
                  {classes.map((c, i) => (
                    <div key={i} className="p-2 bg-accent/50 rounded-md text-sm group relative">
                      <p className="font-medium">{c.time}: {c.course}</p>
                      <p className="text-muted-foreground">{c.location}</p>
                      <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleEdit(day, i, c)}>
                            <Pencil className="h-3 w-3" />
                         </Button>
                         <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleDelete(day, i)}>
                            <Trash2 className="h-3 w-3" />
                         </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : <p className="text-sm text-muted-foreground">No classes scheduled.</p>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
