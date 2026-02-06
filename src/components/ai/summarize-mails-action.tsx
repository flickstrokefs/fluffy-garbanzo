'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeMails } from '@/ai/flows/summarize-mails';
import { Wand2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { mails as mailsType } from '@/lib/mock-data';

export function SummarizeMailsAction({ mails }: { mails: typeof mailsType }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const mailsString = mails.map(m => `${m.sender}: ${m.subject} - ${m.summary}`).join('\n');
      const result = await summarizeMails({ mails: mailsString });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error summarizing mails:', error);
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
      <Button onClick={handleSummarize} disabled={isLoading} variant="outline">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Summarize Mails
      </Button>
      {summary && (
        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="font-headline text-lg">Mails Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
