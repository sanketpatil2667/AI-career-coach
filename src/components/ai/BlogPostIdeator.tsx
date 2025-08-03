'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Lightbulb } from 'lucide-react';

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
import { generateBlogPostIdeas, GenerateBlogPostIdeasInput } from '@/ai/flows/generate-blog-post-ideas';

const formSchema = z.object({
  keywords: z.string().min(3, 'Please enter at least one keyword.'),
});

export default function BlogPostIdeator() {
  const [isLoading, setIsLoading] = useState(false);
  const [ideas, setIdeas] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: 'procrastination, focus, time management',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setIdeas([]);
    try {
      const result = await generateBlogPostIdeas(values as GenerateBlogPostIdeasInput);
      setIdeas(result.ideas);
    } catch (error) {
      console.error('Error generating blog ideas:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-primary" />
          AI Blog Post Idea Generator
        </CardTitle>
        <CardDescription>
          Never run out of blog ideas again. Enter some keywords to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., productivity, habits" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Generating...' : 'Generate Ideas'}
              </Button>
            </form>
          </Form>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Generated Ideas:</h3>
            {isLoading ? (
               <div className="space-y-3">
                 {Array.from({length: 5}).map((_, i) => <Skeleton key={i} className="h-5 w-full" />)}
               </div>
            ) : (
                <ul className="space-y-3">
                {ideas.length > 0 ? (
                  ideas.map((idea, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{idea}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">Generated ideas will appear here.</p>
                )}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
