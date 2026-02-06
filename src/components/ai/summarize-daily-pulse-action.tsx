'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeDailyPulse } from '@/ai/flows/summarize-daily-pulse';
import { Wand2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { SummarizeDailyPulseInput } from '@/ai/flows/summarize-daily-pulse';

export function SummarizeDailyPulseAction({ data }: { data: SummarizeDailyPulseInput }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeDailyPulse(data);
      setSummary(result.summary);
    } catch (error) {
      console.error('Error summarizing daily pulse:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate summary. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleSummarize} disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Get AI Summary
      </Button>
      {summary && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-lg">Today's Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
