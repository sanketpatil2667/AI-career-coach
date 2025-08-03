// The AI generates descriptions for coaching services.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDescriptionsInputSchema = z.object({
  serviceName: z.string().describe('The name of the coaching service.'),
  targetAudience: z.string().describe('The target audience for the service.'),
  keyBenefits: z.string().describe('A list of key benefits of the service.'),
});
export type GenerateServiceDescriptionsInput =
  z.infer<typeof GenerateServiceDescriptionsInputSchema>;

const GenerateServiceDescriptionsOutputSchema = z.object({
  description: z.string().describe('A detailed description of the coaching service.'),
});
export type GenerateServiceDescriptionsOutput =
  z.infer<typeof GenerateServiceDescriptionsOutputSchema>;

export async function generateServiceDescriptions(
  input: GenerateServiceDescriptionsInput
): Promise<GenerateServiceDescriptionsOutput> {
  return generateServiceDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDescriptionsPrompt',
  input: {schema: GenerateServiceDescriptionsInputSchema},
  output: {schema: GenerateServiceDescriptionsOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in writing compelling service descriptions for coaches.

  Based on the information provided, write a detailed description of the coaching service.

  Service Name: {{{serviceName}}}
  Target Audience: {{{targetAudience}}}
  Key Benefits: {{{keyBenefits}}}

  Description:`,
});

const generateServiceDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionsFlow',
    inputSchema: GenerateServiceDescriptionsInputSchema,
    outputSchema: GenerateServiceDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
