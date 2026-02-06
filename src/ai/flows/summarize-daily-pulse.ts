'use server';
/**
 * @fileOverview Summarizes the daily pulse information (mess menu, mails, announcements) using AI.
 *
 * - summarizeDailyPulse - A function that handles the summarization process.
 * - SummarizeDailyPulseInput - The input type for the summarizeDailyPulse function.
 * - SummarizeDailyPulseOutput - The return type for the summarizeDailyPulse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDailyPulseInputSchema = z.object({
  messMenu: z.string().describe('The daily mess menu.'),
  mails: z.string().describe('Summaries of important mails.'),
  announcements: z.string().describe('Important announcements.'),
});
export type SummarizeDailyPulseInput = z.infer<typeof SummarizeDailyPulseInputSchema>;

const SummarizeDailyPulseOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the daily pulse information.'),
});
export type SummarizeDailyPulseOutput = z.infer<typeof SummarizeDailyPulseOutputSchema>;

export async function summarizeDailyPulse(input: SummarizeDailyPulseInput): Promise<SummarizeDailyPulseOutput> {
  return summarizeDailyPulseFlow(input);
}

const summarizeDailyPulsePrompt = ai.definePrompt({
  name: 'summarizeDailyPulsePrompt',
  input: {schema: SummarizeDailyPulseInputSchema},
  output: {schema: SummarizeDailyPulseOutputSchema},
  prompt: `You are a smart campus assistant. Provide a concise summary of the daily pulse information, which includes mess menu, mails, and announcements.

Mess Menu: {{{messMenu}}}

Mails: {{{mails}}}

Announcements: {{{announcements}}}`,
});

const summarizeDailyPulseFlow = ai.defineFlow(
  {
    name: 'summarizeDailyPulseFlow',
    inputSchema: SummarizeDailyPulseInputSchema,
    outputSchema: SummarizeDailyPulseOutputSchema,
  },
  async input => {
    const {output} = await summarizeDailyPulsePrompt(input);
    return output!;
  }
);
