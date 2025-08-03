'use server';

/**
 * @fileOverview Generates welcoming text options for the homepage.
 *
 * - generateHomepageWelcomeText - A function that generates the homepage welcome text.
 * - GenerateHomepageWelcomeTextInput - The input type for the generateHomepageWelcomeText function.
 * - GenerateHomepageWelcomeTextOutput - The return type for the generateHomepageWelcomeText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHomepageWelcomeTextInputSchema = z.object({
  coachName: z.string().describe('The name of the coach.'),
  coachingSpecialty: z.string().describe('The coaching specialty (e.g., productivity, career, life).'),
  targetAudience: z.string().describe('The target audience for the coaching (e.g., students, professionals, executives).'),
});
export type GenerateHomepageWelcomeTextInput = z.infer<typeof GenerateHomepageWelcomeTextInputSchema>;

const GenerateHomepageWelcomeTextOutputSchema = z.object({
  welcomeText: z.string().describe('Generated welcoming text for the homepage.'),
});
export type GenerateHomepageWelcomeTextOutput = z.infer<typeof GenerateHomepageWelcomeTextOutputSchema>;

export async function generateHomepageWelcomeText(input: GenerateHomepageWelcomeTextInput): Promise<GenerateHomepageWelcomeTextOutput> {
  return generateHomepageWelcomeTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHomepageWelcomeTextPrompt',
  input: {schema: GenerateHomepageWelcomeTextInputSchema},
  output: {schema: GenerateHomepageWelcomeTextOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging homepage welcome text for coaches.

  Based on the following information, generate a welcoming text option for the coach's homepage that is concise and inviting.

  Coach Name: {{{coachName}}}
  Coaching Specialty: {{{coachingSpecialty}}}
  Target Audience: {{{targetAudience}}}
  `,
});

const generateHomepageWelcomeTextFlow = ai.defineFlow(
  {
    name: 'generateHomepageWelcomeTextFlow',
    inputSchema: GenerateHomepageWelcomeTextInputSchema,
    outputSchema: GenerateHomepageWelcomeTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
