'use server';
/**
 * @fileOverview Summarizes mails using AI.
 *
 * - summarizeMails - A function that handles the summarization process.
 * - SummarizeMailsInput - The input type for the summarizeMails function.
 * - SummarizeMailsOutput - The return type for the summarizeMails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMailsInputSchema = z.object({
  mails: z.string().describe('A string containing the mails to be summarized.'),
});
export type SummarizeMailsInput = z.infer<typeof SummarizeMailsInputSchema>;

const SummarizeMailsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the mails.'),
});
export type SummarizeMailsOutput = z.infer<typeof SummarizeMailsOutputSchema>;

export async function summarizeMails(input: SummarizeMailsInput): Promise<SummarizeMailsOutput> {
  return summarizeMailsFlow(input);
}

const summarizeMailsPrompt = ai.definePrompt({
  name: 'summarizeMailsPrompt',
  input: {schema: SummarizeMailsInputSchema},
  output: {schema: SummarizeMailsOutputSchema},
  prompt: `You are a smart assistant. Provide a concise summary of the following mails.

Mails: {{{mails}}}
`,
});

const summarizeMailsFlow = ai.defineFlow(
  {
    name: 'summarizeMailsFlow',
    inputSchema: SummarizeMailsInputSchema,
    outputSchema: SummarizeMailsOutputSchema,
  },
  async input => {
    const {output} = await summarizeMailsPrompt(input);
    return output!;
  }
);
