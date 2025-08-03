'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export async function sendEmailAction(data: z.infer<typeof contactFormSchema>) {
    // In a real application, you would integrate an email service here.
    // For this example, we'll just log the data and simulate a successful response.
    console.log('Form data submitted:', data);
    return { success: true, message: "Thank you for your message! I'll get back to you soon." };
}
