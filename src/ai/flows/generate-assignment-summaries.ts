// src/ai/flows/generate-assignment-summaries.ts
'use server';
/**
 * @fileOverview Assignment summary generation flow.
 *
 * This file defines a Genkit flow that takes assignment details as input and generates a concise summary,
 * highlighting key deadlines and requirements. It exports:
 * - generateAssignmentSummaries: The function to trigger the flow.
 * - GenerateAssignmentSummariesInput: The input type for the function.
 * - GenerateAssignmentSummariesOutput: The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAssignmentSummariesInputSchema = z.object({
  assignmentDetails: z
    .string()
    .describe('Detailed description of the assignment, including requirements and deadlines.'),
});
export type GenerateAssignmentSummariesInput = z.infer<
  typeof GenerateAssignmentSummariesInputSchema
>;

const GenerateAssignmentSummariesOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the assignment, highlighting key deadlines and requirements.'
    ),
  progress: z
    .string()
    .describe('Short, one-sentence summary of the generated output'),
});
export type GenerateAssignmentSummariesOutput = z.infer<
  typeof GenerateAssignmentSummariesOutputSchema
>;

export async function generateAssignmentSummaries(
  input: GenerateAssignmentSummariesInput
): Promise<GenerateAssignmentSummariesOutput> {
  return generateAssignmentSummariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAssignmentSummariesPrompt',
  input: {schema: GenerateAssignmentSummariesInputSchema},
  output: {schema: GenerateAssignmentSummariesOutputSchema},
  prompt: `You are an expert academic assistant. Your task is to summarize assignment details for students, highlighting key deadlines and requirements.

Assignment Details: {{{assignmentDetails}}}

Provide a concise summary that helps students quickly grasp the important aspects of the task. Keep it short and to the point. Add one short, one-sentence summary of what you have generated to the 'progress' field in the output.`, // include the progress field in prompt
});

const generateAssignmentSummariesFlow = ai.defineFlow(
  {
    name: 'generateAssignmentSummariesFlow',
    inputSchema: GenerateAssignmentSummariesInputSchema,
    outputSchema: GenerateAssignmentSummariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      ...output!,
      progress: "Generated a concise assignment summary, highlighting deadlines and requirements.",
    };
  }
);
