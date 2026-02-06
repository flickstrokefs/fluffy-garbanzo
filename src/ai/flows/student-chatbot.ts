'use server';
/**
 * @fileOverview A conversational chatbot for students.
 *
 * - studentChatbot - A function that handles the chatbot conversation.
 * - StudentChatbotInput - The input type for the studentChatbot function.
 * - StudentChatbotOutput - The return type for the studentChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {Message, Role} from 'genkit';

const StudentChatbotInputSchema = z.object({
  query: z.string().describe("The student's query."),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })
    )
    .describe('The conversation history.'),
});
export type StudentChatbotInput = z.infer<typeof StudentChatbotInputSchema>;

const StudentChatbotOutputSchema = z.object({
  response: z.string().describe("The chatbot's response."),
});
export type StudentChatbotOutput = z.infer<typeof StudentChatbotOutputSchema>;

export async function studentChatbot(
  input: StudentChatbotInput
): Promise<StudentChatbotOutput> {
  return studentChatbotFlow(input);
}

const studentChatbotFlow = ai.defineFlow(
  {
    name: 'studentChatbotFlow',
    inputSchema: StudentChatbotInputSchema,
    outputSchema: StudentChatbotOutputSchema,
  },
  async ({query, history}) => {
    
    const genkitHistory: Message[] = history.map(msg => ({
        role: msg.role as Role,
        content: [{text: msg.content}]
    }));

    const llmResponse = await ai.generate({
      prompt: query,
      history: genkitHistory,
      system: 'You are a friendly and helpful campus assistant chatbot. Your goal is to answer student queries about campus life, academics, and events. Be concise and helpful.',
    });

    return {response: llmResponse.text};
  }
);
