'use server';

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export async function sendEmailAction(data: z.infer<typeof contactFormSchema>) {
    // In a real application, you would integrate an email service here.
    // For this example, we'll just log the data and simulate a successful response.
    console.log('Form data submitted:', data);
    return { success: true, message: "Thank you for your message! I'll get back to you soon." };
}