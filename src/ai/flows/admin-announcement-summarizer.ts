'use server';
/**
 * @fileOverview An AI tool for administrators to automatically generate concise summaries of new official announcements or news insights.
 *
 * - summarizeAnnouncement - A function that handles the announcement summarization process.
 * - AdminAnnouncementSummarizerInput - The input type for the summarizeAnnouncement function.
 * - AdminAnnouncementSummarizerOutput - The return type for the summarizeAnnouncement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminAnnouncementSummarizerInputSchema = z.object({
  text: z.string().describe('The full text of the announcement or news insight to be summarized.'),
});
export type AdminAnnouncementSummarizerInput = z.infer<typeof AdminAnnouncementSummarizerInputSchema>;

const AdminAnnouncementSummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the announcement.'),
});
export type AdminAnnouncementSummarizerOutput = z.infer<typeof AdminAnnouncementSummarizerOutputSchema>;

export async function summarizeAnnouncement(
  input: AdminAnnouncementSummarizerInput
): Promise<AdminAnnouncementSummarizerOutput> {
  return adminAnnouncementSummarizerFlow(input);
}

const adminAnnouncementSummarizerPrompt = ai.definePrompt({
  name: 'adminAnnouncementSummarizerPrompt',
  input: {schema: AdminAnnouncementSummarizerInputSchema},
  output: {schema: AdminAnnouncementSummarizerOutputSchema},
  prompt: `You are an assistant specialized in summarizing official announcements and news insights concisely. Summarize the following announcement text to capture its main points for efficient publication. The summary should be clear, informative, and engaging, suitable for public consumption.

Announcement Text: {{{text}}}`,
});

const adminAnnouncementSummarizerFlow = ai.defineFlow(
  {
    name: 'adminAnnouncementSummarizerFlow',
    inputSchema: AdminAnnouncementSummarizerInputSchema,
    outputSchema: AdminAnnouncementSummarizerOutputSchema,
  },
  async input => {
    const {output} = await adminAnnouncementSummarizerPrompt(input);
    return output!;
  }
);
