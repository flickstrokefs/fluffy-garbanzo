'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generateAssignmentSummaries } from '@/ai/flows/generate-assignment-summaries';
import { Wand2, Loader2, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { assignments } from '@/lib/mock-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type Assignment = (typeof assignments)[0];

export function SummarizeAssignmentAction({ assignment }: { assignment: Assignment }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const result = await generateAssignmentSummaries({ assignmentDetails: assignment.details });
      setSummary(result.summary);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error summarizing assignment:', error);
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
    <>
      <Button variant="ghost" size="sm" onClick={handleSummarize} disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Summarize
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              AI Summary: {assignment.title}
            </DialogTitle>
            <DialogDescription>
              A concise summary of the assignment, highlighting key deadlines and requirements.
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {summary}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
