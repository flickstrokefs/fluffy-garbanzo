'use server';

/**
 * @fileOverview A flow to suggest relevant community posts based on user interests.
 *
 * - suggestCommunityPosts - A function that suggests community posts.
 * - SuggestCommunityPostsInput - The input type for the suggestCommunityPosts function.
 * - SuggestCommunityPostsOutput - The return type for the suggestCommunityPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCommunityPostsInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  interests: z.string().describe('A comma-separated list of the user\'s interests.'),
  communityPosts: z.string().describe('A comma-separated list of community posts titles and descriptions.'),
});
export type SuggestCommunityPostsInput = z.infer<typeof SuggestCommunityPostsInputSchema>;

const SuggestCommunityPostsOutputSchema = z.object({
  suggestedPosts: z.string().describe('A comma-separated list of community post titles that match the user\'s interests.'),
});
export type SuggestCommunityPostsOutput = z.infer<typeof SuggestCommunityPostsOutputSchema>;

export async function suggestCommunityPosts(input: SuggestCommunityPostsInput): Promise<SuggestCommunityPostsOutput> {
  return suggestCommunityPostsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCommunityPostsPrompt',
  input: {schema: SuggestCommunityPostsInputSchema},
  output: {schema: SuggestCommunityPostsOutputSchema},
  prompt: `You are a helpful assistant that suggests relevant community posts to users based on their interests.

  User Interests: {{{interests}}}
  Community Posts: {{{communityPosts}}}

  Suggest community posts that match the user\'s interests. Return the suggested posts as a comma-separated list of titles.
  `,
});

const suggestCommunityPostsFlow = ai.defineFlow(
  {
    name: 'suggestCommunityPostsFlow',
    inputSchema: SuggestCommunityPostsInputSchema,
    outputSchema: SuggestCommunityPostsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
