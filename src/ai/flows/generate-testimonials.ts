// This file holds the Genkit flow for generating client testimonials.
//
// - generateTestimonials - A function that generates client testimonials.
// - GenerateTestimonialsInput - The input type for the generateTestimonials function.
// - GenerateTestimonialsOutput - The return type for the generateTestimonials function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialsInputSchema = z.object({
  coachingService: z
    .string()
    .describe('The type of coaching service provided, e.g., career coaching, life coaching.'),
  numberOfTestimonials: z
    .number()
    .default(3)
    .describe('The number of testimonials to generate.'),
});

export type GenerateTestimonialsInput = z.infer<
  typeof GenerateTestimonialsInputSchema
>;

const GenerateTestimonialsOutputSchema = z.object({
  testimonials: z.array(z.string()).describe('An array of client testimonials.'),
});

export type GenerateTestimonialsOutput = z.infer<
  typeof GenerateTestimonialsOutputSchema
>;

export async function generateTestimonials(
  input: GenerateTestimonialsInput
): Promise<GenerateTestimonialsOutput> {
  return generateTestimonialsFlow(input);
}

const generateTestimonialsPrompt = ai.definePrompt({
  name: 'generateTestimonialsPrompt',
  input: {schema: GenerateTestimonialsInputSchema},
  output: {schema: GenerateTestimonialsOutputSchema},
  prompt: `You are a marketing expert specializing in writing client testimonials.

  Generate {{numberOfTestimonials}} testimonials for a coaching service of type: {{{coachingService}}}.

  Each testimonial should be concise and highlight the benefits of the coaching service.
  Make the testimonials sound authentic and relatable.

  Format each testimonial as a quote attributed to a satisfied client.
  Ensure each testimonial is unique and provides a different perspective on the service's value.

  Return the testimonials as a JSON array of strings.
  `,
});

const generateTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateTestimonialsFlow',
    inputSchema: GenerateTestimonialsInputSchema,
    outputSchema: GenerateTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await generateTestimonialsPrompt(input);
    return output!;
  }
);
