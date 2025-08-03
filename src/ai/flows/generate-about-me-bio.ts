'use server';

/**
 * @fileOverview A flow to generate a brief "About Me" bio for a personal productivity coach.
 *
 * - generateAboutMeBio - A function that generates the bio.
 * - GenerateAboutMeBioInput - The input type for the generateAboutMeBio function.
 * - GenerateAboutMeBioOutput - The return type for the generateAboutMeBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeBioInputSchema = z.object({
  name: z.string().describe('The name of the coach.'),
  experience: z.string().describe('A brief summary of the coach\'s experience.'),
  specialty: z.string().describe('The coaching specialties of the coach.'),
  style: z.string().describe('The coaching style of the coach, e.g., compassionate, direct, motivational.'),
});
export type GenerateAboutMeBioInput = z.infer<typeof GenerateAboutMeBioInputSchema>;

const GenerateAboutMeBioOutputSchema = z.object({
  bio: z.string().describe('A brief biography of the coach.'),
});
export type GenerateAboutMeBioOutput = z.infer<typeof GenerateAboutMeBioOutputSchema>;

export async function generateAboutMeBio(input: GenerateAboutMeBioInput): Promise<GenerateAboutMeBioOutput> {
  return generateAboutMeBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMeBioPrompt',
  input: {schema: GenerateAboutMeBioInputSchema},
  output: {schema: GenerateAboutMeBioOutputSchema},
  prompt: `You are a marketing expert crafting a brief "About Me" bio for a personal productivity coach.

  Given the following information about the coach, write a compelling and professional bio of approximately 50-75 words.

  Name: {{{name}}}
  Experience: {{{experience}}}
  Specialty: {{{specialty}}}
  Style: {{{style}}}
  `,
});

const generateAboutMeBioFlow = ai.defineFlow(
  {
    name: 'generateAboutMeBioFlow',
    inputSchema: GenerateAboutMeBioInputSchema,
    outputSchema: GenerateAboutMeBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
