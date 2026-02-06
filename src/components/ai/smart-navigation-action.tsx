'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getNavigationSuggestions } from '@/ai/flows/smart-navigation-suggestions';
import { Wand2, Loader2, List, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { timetable } from '@/lib/mock-data';

export function SmartNavigationAction() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState('');
  const { toast } = useToast();

  const handleGetSuggestions = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) {
      toast({ title: "Location needed", description: "Please enter your current location.", variant: "destructive"});
      return;
    }

    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await getNavigationSuggestions({
        currentLocation: location,
        timeOfDay: new Date().toLocaleTimeString(),
        schedule: JSON.stringify(timetable),
      });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error('Error getting navigation suggestions:', error);
      toast({
        title: 'Error',
        description: 'Failed to get suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Smart Navigation</CardTitle>
        <CardDescription>Get AI-powered suggestions on where to go next.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleGetSuggestions} className="space-y-4">
          <div>
            <Label htmlFor="location">Your Current Location</Label>
            <Input 
              id="location" 
              placeholder="e.g., Library" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Get Suggestions
          </Button>
        </form>
        {suggestions.length > 0 && (
          <div className="space-y-2 pt-4">
            <h3 className="font-semibold flex items-center"><List className="mr-2 h-5 w-5 text-primary"/> Suggestions</h3>
            <ul className="list-none space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start p-2 rounded-md bg-accent/50">
                  <MapPin className="h-4 w-4 mr-2 mt-1 text-primary shrink-0"/>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
