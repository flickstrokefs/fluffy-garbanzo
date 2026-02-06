'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Siren, HeartPulse } from "lucide-react";
import { emergencyContacts } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EmergencyPage() {
    const { toast } = useToast();
    const [isSending, setIsSending] = useState(false);

    const handleSosClick = () => {
        setIsSending(true);
        setTimeout(() => {
            toast({
                title: "Alert Sent",
                description: "Campus authorities have been notified of your emergency.",
                variant: "destructive",
            });
            setIsSending(false);
        }, 2000);
    }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Emergency SOS</h1>
        <p className="text-muted-foreground">Quick access to emergency contacts and help.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
                <Siren className="mr-2 text-destructive"/>
                SOS Alert System
            </CardTitle>
            <CardDescription>
                Press the button below only in a genuine emergency. This will immediately notify campus security and emergency services.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-8">
             <AlertDialog>
              <AlertDialogTrigger asChild>
                 <Button variant="destructive" className="h-32 w-32 rounded-full text-2xl font-bold shadow-lg animate-pulse">
                    SOS
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Emergency Alert</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to send an emergency alert? This action should only be used in a real emergency.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleSosClick} disabled={isSending}>
                    {isSending ? 'Sending...' : 'Yes, Send Alert'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center">
                    <HeartPulse className="mr-2"/>
                    Helpline Links
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Button variant="link" asChild className="p-0 justify-start">
                    <a href="#" target="_blank" rel="noopener noreferrer">National Suicide Prevention Lifeline</a>
                </Button>
                <Button variant="link" asChild className="p-0 justify-start">
                    <a href="#" target="_blank" rel="noopener noreferrer">Crisis Text Line</a>
                </Button>
                 <Button variant="link" asChild className="p-0 justify-start">
                    <a href="#" target="_blank" rel="noopener noreferrer">The Trevor Project</a>
                </Button>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
                <Phone className="mr-2"/>
                Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyContacts.map(contact => (
              <div key={contact.id} className="flex items-center justify-between p-3 bg-muted rounded-md">
                <div>
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.type}</p>
                </div>
                <Button asChild variant="outline">
                    <a href={`tel:${contact.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {contact.phone}
                    </a>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
