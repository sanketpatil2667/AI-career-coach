'use server';

/**
 * @fileOverview AI to suggest blog post ideas based on relevant keywords and industry trends.
 *
 * - generateBlogPostIdeas - A function that generates blog post ideas.
 * - GenerateBlogPostIdeasInput - The input type for the generateBlogPostIdeas function.
 * - GenerateBlogPostIdeasOutput - The return type for the generateBlogPostIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostIdeasInputSchema = z.object({
  keywords: z
    .string()
    .describe('Relevant keywords and industry trends for blog posts.'),
});
export type GenerateBlogPostIdeasInput = z.infer<typeof GenerateBlogPostIdeasInputSchema>;

const GenerateBlogPostIdeasOutputSchema = z.object({
  ideas: z
    .array(z.string())
    .describe('An array of blog post ideas based on the input keywords.'),
});
export type GenerateBlogPostIdeasOutput = z.infer<typeof GenerateBlogPostIdeasOutputSchema>;

export async function generateBlogPostIdeas(input: GenerateBlogPostIdeasInput): Promise<GenerateBlogPostIdeasOutput> {
  return generateBlogPostIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostIdeasPrompt',
  input: {schema: GenerateBlogPostIdeasInputSchema},
  output: {schema: GenerateBlogPostIdeasOutputSchema},
  prompt: `You are a blog post idea generator for a personal productivity coach. Generate a list of blog post ideas based on the following keywords and industry trends:

Keywords: {{{keywords}}}

Blog Post Ideas (as a list of strings):`,
});

const generateBlogPostIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogPostIdeasFlow',
    inputSchema: GenerateBlogPostIdeasInputSchema,
    outputSchema: GenerateBlogPostIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
