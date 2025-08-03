'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { generateHomepageWelcomeText, GenerateHomepageWelcomeTextInput } from '@/ai/flows/generate-homepage-welcome-text';

const formSchema = z.object({
  coachName: z.string().min(2, 'Coach name must be at least 2 characters.'),
  coachingSpecialty: z.string().min(3, 'Specialty must be at least 3 characters.'),
  targetAudience: z.string().min(3, 'Target audience must be at least 3 characters.'),
});

export default function HomepageWelcome() {
  const [isLoading, setIsLoading] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coachName: 'Alex',
      coachingSpecialty: 'Productivity',
      targetAudience: 'Entrepreneurs and Professionals',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setWelcomeText('');
    try {
      const result = await generateHomepageWelcomeText(values as GenerateHomepageWelcomeTextInput);
      setWelcomeText(result.welcomeText);
    } catch (error) {
      console.error('Error generating welcome text:', error);
      setWelcomeText('Failed to generate welcome text. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-accent" />
          AI-Powered Welcome
        </CardTitle>
        <CardDescription>
          Generate a personalized welcome message for your homepage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="coachName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coach Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Alex" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coachingSpecialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coaching Specialty</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Productivity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Entrepreneurs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Generating...' : 'Generate Welcome Text'}
              </Button>
            </form>
          </Form>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Generated Welcome Text:</h3>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="text-muted-foreground italic">
                {welcomeText || 'The generated text will appear here.'}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
