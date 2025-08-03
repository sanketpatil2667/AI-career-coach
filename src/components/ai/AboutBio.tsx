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
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { generateAboutMeBio, GenerateAboutMeBioInput } from '@/ai/flows/generate-about-me-bio';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  experience: z.string().min(10, 'Experience summary is required.'),
  specialty: z.string().min(5, 'Specialty is required.'),
  style: z.string().min(5, 'Coaching style is required.'),
});

export default function AboutBio() {
  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Alex',
      experience: '10+ years in tech and personal development',
      specialty: 'Productivity, focus, and work-life balance',
      style: 'Empathetic, direct, and motivational',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setBio('');
    try {
      const result = await generateAboutMeBio(values as GenerateAboutMeBioInput);
      setBio(result.bio);
    } catch (error) {
      console.error('Error generating bio:', error);
      setBio('Failed to generate bio. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-primary" />
          Generate Your Bio with AI
        </CardTitle>
        <CardDescription>
          Craft a compelling and professional bio. Fill in the details below and let AI create the perfect summary.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialty</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coaching Style</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Generating...' : 'Generate Bio'}
              </Button>
            </form>
          </Form>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Generated Bio:</h3>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="text-muted-foreground italic leading-relaxed">
                {bio || 'Your generated bio will appear here.'}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
