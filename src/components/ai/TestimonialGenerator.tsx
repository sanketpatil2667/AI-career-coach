'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, MessageSquare } from 'lucide-react';
import Image from 'next/image';

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
import { generateTestimonials, GenerateTestimonialsInput } from '@/ai/flows/generate-testimonials';

const formSchema = z.object({
  coachingService: z.string().min(3, 'Coaching service must be at least 3 characters.'),
  numberOfTestimonials: z.coerce.number().min(1).max(5),
});

export default function TestimonialGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [testimonials, setTestimonials] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coachingService: 'Career Coaching',
      numberOfTestimonials: 3,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTestimonials([]);
    try {
      const result = await generateTestimonials(values as GenerateTestimonialsInput);
      setTestimonials(result.testimonials);
    } catch (error) {
      console.error('Error generating testimonials:', error);
      // In a real app, you'd show a toast notification here
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-accent" />
          Generate Client Testimonials
        </CardTitle>
        <CardDescription>
          Create authentic-sounding testimonials for any coaching service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 items-end mb-8 p-4 border rounded-lg">
            <FormField
              control={form.control}
              name="coachingService"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Coaching Service Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Life Coaching" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfTestimonials"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" max="5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate'}
            </Button>
          </form>
        </Form>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading &&
            Array.from({ length: form.getValues('numberOfTestimonials') }).map((_, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="ml-4 space-y-2">
                       <Skeleton className="h-4 w-[100px]" />
                       <Skeleton className="h-3 w-[150px]" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          {!isLoading && testimonials.length === 0 && (
             <p className="col-span-full text-center text-muted-foreground">Generated testimonials will appear here.</p>
          )}
          {!isLoading && testimonials.map((testimonial, index) => {
            const [quote, author] = testimonial.split('" - ');
            return (
              <Card key={index} className="flex flex-col bg-secondary/50">
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <MessageSquare className="w-8 h-8 text-accent mb-4" />
                  <blockquote className="italic text-foreground/80 flex-grow">
                    &ldquo;{quote.replace(/"/g, '')}&rdquo;
                  </blockquote>
                  <div className="flex items-center mt-4 pt-4 border-t">
                      <Image src={`https://placehold.co/48x48.png`} alt="Client" width={48} height={48} className="rounded-full" data-ai-hint="person face" />
                      <div className="ml-3">
                        <p className="font-semibold text-foreground">{author || `Client ${index + 1}`}</p>
                        <p className="text-sm text-muted-foreground">Verified Client</p>
                      </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  );
}
