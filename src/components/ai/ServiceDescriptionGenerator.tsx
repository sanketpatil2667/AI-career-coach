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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { generateServiceDescriptions, GenerateServiceDescriptionsInput } from '@/ai/flows/generate-service-descriptions';

const formSchema = z.object({
  serviceName: z.string().min(3, 'Service name is required.'),
  targetAudience: z.string().min(5, 'Target audience is required.'),
  keyBenefits: z.string().min(10, 'Key benefits are required.'),
});

interface ServiceDescriptionGeneratorProps {
    defaultValues: z.infer<typeof formSchema>;
}

export default function ServiceDescriptionGenerator({ defaultValues }: ServiceDescriptionGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setDescription('');
    try {
      const result = await generateServiceDescriptions(values as GenerateServiceDescriptionsInput);
      setDescription(result.description);
    } catch (error) {
      console.error('Error generating description:', error);
      setDescription('Failed to generate description. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-primary">
          {defaultValues.serviceName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="serviceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keyBenefits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Benefits</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                <Sparkles className="mr-2 h-4 w-4" />
                {isLoading ? 'Generating...' : 'Generate Description'}
              </Button>
            </form>
          </Form>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Generated Description:</h3>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="text-muted-foreground italic leading-relaxed">
                {description || 'The generated service description will appear here.'}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
