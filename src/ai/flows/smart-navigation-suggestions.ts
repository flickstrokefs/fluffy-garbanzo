'use server';

/**
 * @fileOverview An AI agent to provide smart navigation suggestions for students.
 *
 * - getNavigationSuggestions - A function that returns navigation suggestions based on user input.
 * - NavigationSuggestionsInput - The input type for the getNavigationSuggestions function.
 * - NavigationSuggestionsOutput - The return type for the getNavigationSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NavigationSuggestionsInputSchema = z.object({
  currentLocation: z
    .string()
    .describe('The current location of the student.'),
  timeOfDay: z.string().describe('The current time of day.'),
  schedule: z
    .string()
    .describe(
      'The student schedule as a string. Example: 9:00 AM - Math Class, 10:00 AM - History Class'
    ),
});
export type NavigationSuggestionsInput = z.infer<
  typeof NavigationSuggestionsInputSchema
>;

const NavigationSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'A list of suggested locations or actions based on the input data.'
    ),
});
export type NavigationSuggestionsOutput = z.infer<
  typeof NavigationSuggestionsOutputSchema
>;

export async function getNavigationSuggestions(
  input: NavigationSuggestionsInput
): Promise<NavigationSuggestionsOutput> {
  return navigationSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'navigationSuggestionsPrompt',
  input: {schema: NavigationSuggestionsInputSchema},
  output: {schema: NavigationSuggestionsOutputSchema},
  prompt: `You are a helpful campus navigation assistant. A student is at {{{currentLocation}}} at {{{timeOfDay}}}. Their schedule is: {{{schedule}}}. Suggest some places the student might want to go next, or actions they might want to take. Return your suggestions as a numbered list.

Suggestions:`,
});

const navigationSuggestionsFlow = ai.defineFlow(
  {
    name: 'navigationSuggestionsFlow',
    inputSchema: NavigationSuggestionsInputSchema,
    outputSchema: NavigationSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
