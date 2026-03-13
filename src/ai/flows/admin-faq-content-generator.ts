'use server';
/**
 * @fileOverview This file implements an AI tool for administrators to generate concise answers
 * for common questions based on BDSA's services and information, streamlining the FAQ section maintenance.
 *
 * - generateFaqAnswer - A function that generates an answer for a given FAQ question.
 * - AdminFAQContentGeneratorInput - The input type for the generateFaqAnswer function.
 * - AdminFAQContentGeneratorOutput - The return type for the generateFaqAnswer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminFAQContentGeneratorInputSchema = z.object({
  question: z.string().describe('The common question for which an answer is needed.'),
  relevantInformation: z
    .array(z.string())
    .optional()
    .describe('Optional: Additional information or context about BDSA services to help answer the question.'),
});
export type AdminFAQContentGeneratorInput = z.infer<typeof AdminFAQContentGeneratorInputSchema>;

const AdminFAQContentGeneratorOutputSchema = z.object({
  answer: z.string().describe('The AI-generated concise answer to the question.'),
});
export type AdminFAQContentGeneratorOutput = z.infer<typeof AdminFAQContentGeneratorOutputSchema>;

export async function generateFaqAnswer(
  input: AdminFAQContentGeneratorInput
): Promise<AdminFAQContentGeneratorOutput> {
  return adminFaqContentGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adminFaqContentGeneratorPrompt',
  input: {schema: AdminFAQContentGeneratorInputSchema},
  output: {schema: AdminFAQContentGeneratorOutputSchema},
  prompt: `You are an expert on the Bangladesh Digital Systems Authority (BDSA). Your task is to generate concise, informative, and official answers to common questions.

Use the following information as primary context, if provided:
{{#if relevantInformation}}{{#each relevantInformation}}- {{{this}}}\n{{/each}}{{/if}}

Question: {{{question}}}

Please provide a clear, direct, and professional answer that an administrator would use in an official FAQ section. Focus on the core information relevant to BDSA's services and purpose.`,
});

const adminFaqContentGeneratorFlow = ai.defineFlow(
  {
    name: 'adminFaqContentGeneratorFlow',
    inputSchema: AdminFAQContentGeneratorInputSchema,
    outputSchema: AdminFAQContentGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate FAQ answer.');
    }
    return output;
  }
);
